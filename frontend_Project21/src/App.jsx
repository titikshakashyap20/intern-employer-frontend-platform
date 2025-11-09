
import React, { Suspense, lazy } from 'react';
import { Routes, Route, Outlet, Navigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import MainLayout from '@/layouts/MainLayout';
import DashboardLayout from '@/layouts/DashboardLayout';
import { Home, LayoutDashboard, Loader2 } from 'lucide-react';

// Page Imports
const LandingPage = lazy(() => import('@/pages/LandingPage'));
const EmployerSignUpPage = lazy(() => import('@/pages/auth/EmployerSignUpPage'));
const EmployerSignInPage = lazy(() => import('@/pages/auth/EmployerSignInPage'));
const StudentSignUpPage = lazy(() => import('@/pages/auth/StudentSignUpPage'));
const StudentSignInPage = lazy(() => import('@/pages/auth/StudentSignInPage'));
const DashboardPage = lazy(() => import('@/pages/DashboardPage'));
const ProjectCreationWizard = lazy(() => import('@/pages/ProjectCreationWizard'));
const AIChatInterface = lazy(() => import('@/pages/AIChatInterface'));
const RecommendationDisplayPage = lazy(() => import('@/pages/RecommendationDisplayPage'));

// Profile and specific role pages
const StudentProfilePage = lazy(() => import('@/pages/student/StudentProfilePage'));
const EmployerProfilePage = lazy(() => import('@/pages/employer/EmployerProfilePage')); // New Employer Profile
const AdminDashboardPage = lazy(() => import('@/pages/admin/AdminDashboardPage'));
const ResumeUploadPage = lazy(() => import('@/pages/student/ResumeUploadPage'));


const LoadingFallback = () => (
  <div className="flex items-center justify-center h-screen w-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
    >
      <Loader2 className="h-16 w-16 text-white" />
    </motion.div>
    <p className="ml-4 text-2xl font-semibold text-white">Loading Awesomeness...</p>
  </div>
);

function App() {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'; 
  const userRole = localStorage.getItem('userRole'); // Example: 'student', 'employer', 'admin'
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home', icon: <Home className="mr-2 h-5 w-5" /> },
    { to: '/dashboard', label: 'Dashboard', icon: <LayoutDashboard className="mr-2 h-5 w-5" />, authRequired: true },
  ];
  
  const authLinks = []; 

  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes location={location} key={location.pathname}>
        <Route element={<MainLayout navLinks={navLinks} authLinks={authLinks} isAuthenticated={isAuthenticated} />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/employer/signup" element={<EmployerSignUpPage />} />
          <Route path="/employer/signin" element={<EmployerSignInPage />} />
          <Route path="/student/signup" element={<StudentSignUpPage />} />
          <Route path="/student/signin" element={<StudentSignInPage />} />
        </Route>
        
        <Route 
          path="/dashboard" 
          element={
            isAuthenticated ? (
              <DashboardLayout>
                <Outlet />
              </DashboardLayout>
            ) : (
              <Navigate to="/student/signin" replace /> 
            )
          }
        >
          <Route index element={<DashboardPage />} /> 
          
          {userRole === 'student' && (
            <>
              <Route path="profile" element={<StudentProfilePage />} />
              <Route path="resume-upload" element={<ResumeUploadPage />} />
            </>
          )}
          
          {userRole === 'employer' && (
            <>
              <Route path="profile" element={<EmployerProfilePage />} />
              <Route path="create-project" element={<ProjectCreationWizard />} />
            </>
          )}
           
          {userRole === 'admin' && (
            <>
              <Route path="admin-overview" element={<AdminDashboardPage />} />
            </>
          )}
          
          <Route path="ai-chat" element={<AIChatInterface />} />
          <Route path="recommendations" element={<RecommendationDisplayPage />} />
        </Route>
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}

export default App;
