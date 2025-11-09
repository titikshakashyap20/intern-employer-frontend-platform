from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from db import get_db
from models import User
from utils import get_current_user
from pydantic import BaseModel

router = APIRouter()

class OnboardingUpdate(BaseModel):
    onboarding_status: str

@router.get('/me')
def get_me(current_user: User = Depends(get_current_user)):
    return {
        "id": current_user.id,
        "email": current_user.email,
        "user_type": current_user.user_type,
        "onboarding_status": current_user.onboarding_status,
    }

@router.patch('/onboarding')
def update_onboarding(data: OnboardingUpdate, current_user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    current_user.onboarding_status = data.onboarding_status
    db.commit()
    return {"message": "Onboarding status updated"} 