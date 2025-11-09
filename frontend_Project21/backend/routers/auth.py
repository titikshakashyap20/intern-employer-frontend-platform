from fastapi import APIRouter, Depends, HTTPException, status, Request
from pydantic import BaseModel, EmailStr
from sqlalchemy.orm import Session
from db import get_db
from models import User
from utils import hash_password, verify_password, create_access_token

# --- OAuth imports ---
from authlib.integrations.starlette_client import OAuth
from fastapi.responses import RedirectResponse
from starlette.config import Config
import os

router = APIRouter()

# --- Load environment variables ---
config = Config('.env')
oauth = OAuth(config)

FRONTEND_URL = os.getenv('FRONTEND_URL', 'http://localhost:3000')

# --- Register Google OAuth ---
oauth.register(
    name='google',
    client_id=os.getenv('GOOGLE_CLIENT_ID'),
    client_secret=os.getenv('GOOGLE_CLIENT_SECRET'),
    access_token_url='https://accounts.google.com/o/oauth2/token',
    authorize_url='https://accounts.google.com/o/oauth2/auth',
    api_base_url='https://www.googleapis.com/oauth2/v1/',
    userinfo_endpoint='https://openidconnect.googleapis.com/v1/userinfo',
    client_kwargs={'scope': 'openid email profile'},
)

# --- Register LinkedIn OAuth ---
oauth.register(
    name='linkedin',
    client_id=os.getenv('LINKEDIN_CLIENT_ID'),
    client_secret=os.getenv('LINKEDIN_CLIENT_SECRET'),
    access_token_url='https://www.linkedin.com/oauth/v2/accessToken',
    authorize_url='https://www.linkedin.com/oauth/v2/authorization',
    api_base_url='https://api.linkedin.com/v2/',
    client_kwargs={'scope': 'r_liteprofile r_emailaddress'},
)

class RegisterRequest(BaseModel):
    email: EmailStr
    password: str
    user_type: str  # 'student' or 'employer'

class LoginRequest(BaseModel):
    email: EmailStr
    password: str

@router.post('/register')
def register(data: RegisterRequest, db: Session = Depends(get_db)):
    if db.query(User).filter(User.email == data.email).first():
        raise HTTPException(status_code=400, detail='Email already registered')
    user = User(email=data.email, password_hash=hash_password(data.password), user_type=data.user_type)
    db.add(user)
    db.commit()
    db.refresh(user)
    return {"message": "User registered", "user_id": user.id}

@router.post('/login')
def login(data: LoginRequest, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == data.email).first()
    if not user or not verify_password(data.password, user.password_hash):
        raise HTTPException(status_code=401, detail='Invalid credentials')
    token = create_access_token({"sub": user.email, "user_type": user.user_type, "user_id": user.id})
    return {"access_token": token, "token_type": "bearer", "user_type": user.user_type}

# --- Google OAuth endpoints ---
@router.get('/google')
async def google_login(request: Request):
    redirect_uri = f"{FRONTEND_URL}/auth/callback"
    return await oauth.google.authorize_redirect(request, redirect_uri)

@router.get('/google/callback')
async def google_callback(request: Request, db: Session = Depends(get_db)):
    token = await oauth.google.authorize_access_token(request)
    user_info = await oauth.google.parse_id_token(request, token)
    email = user_info['email']
    user = db.query(User).filter(User.email == email).first()
    if not user:
        user = User(email=email, password_hash='', user_type='student', onboarding_status='incomplete')
        db.add(user)
        db.commit()
        db.refresh(user)
    jwt_token = create_access_token({"sub": user.email, "user_type": user.user_type, "user_id": user.id})
    redirect_url = f"{FRONTEND_URL}/auth/callback?token={jwt_token}&user_type={user.user_type}"
    return RedirectResponse(redirect_url)

# --- LinkedIn OAuth endpoints ---
@router.get('/linkedin')
async def linkedin_login(request: Request):
    redirect_uri = f"{FRONTEND_URL}/auth/callback"
    return await oauth.linkedin.authorize_redirect(request, redirect_uri)

@router.get('/linkedin/callback')
async def linkedin_callback(request: Request, db: Session = Depends(get_db)):
    token = await oauth.linkedin.authorize_access_token(request)
    resp = await oauth.linkedin.get('me', token=token)
    profile = resp.json()
    email_resp = await oauth.linkedin.get('emailAddress?q=members&projection=(elements*(handle~))', token=token)
    email = email_resp.json()['elements'][0]['handle~']['emailAddress']
    user = db.query(User).filter(User.email == email).first()
    if not user:
        user = User(email=email, password_hash='', user_type='student', onboarding_status='incomplete')
        db.add(user)
        db.commit()
        db.refresh(user)
    jwt_token = create_access_token({"sub": user.email, "user_type": user.user_type, "user_id": user.id})
    redirect_url = f"{FRONTEND_URL}/auth/callback?token={jwt_token}&user_type={user.user_type}"
    return RedirectResponse(redirect_url) 