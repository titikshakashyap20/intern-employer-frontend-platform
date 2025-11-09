import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '@/components/shared/Navbar';
import { motion } from 'framer-motion';

const MainLayout = ({ navLinks, authLinks, isAuthenticated }) => {
  const location = useLocation();
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar navLinks={navLinks} authLinks={authLinks} isAuthenticated={isAuthenticated} />
      <motion.main
        key={location.pathname} // Animate on route change
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="flex-grow"
      >
        <Outlet />
      </motion.main>
    </div>
  );
};

export default MainLayout;