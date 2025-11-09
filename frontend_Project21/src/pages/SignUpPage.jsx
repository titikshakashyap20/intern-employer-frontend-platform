import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Briefcase, User } from 'lucide-react';

// This page can now serve as a general entry point or be removed if not needed.
// For now, it will direct users to specific sign-up pages.
const SignUpPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Card className="w-full max-w-md shadow-2xl glassmorphic">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-foreground">Create Account</CardTitle>
            <CardDescription className="text-muted-foreground">Please select your role to sign up.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button asChild className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-3 text-lg">
              <Link to="/employer/signup">
                <Briefcase className="mr-2 h-5 w-5" /> Sign Up as Employer
              </Link>
            </Button>
            <Button asChild className="w-full bg-gradient-to-r from-teal-500 to-sky-600 hover:from-teal-600 hover:to-sky-700 text-white font-semibold py-3 text-lg">
              <Link to="/student/signup">
                <User className="mr-2 h-5 w-5" /> Sign Up as Student
              </Link>
            </Button>
          </CardContent>
          <CardContent className="text-center">
             <p className="text-sm text-muted-foreground">
              Already have an account?{' '}
              <Link to="/employer/signin" className="font-medium text-primary hover:underline">Sign In</Link>
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default SignUpPage;