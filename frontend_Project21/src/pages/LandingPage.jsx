import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Zap, Brain, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const features = [
    {
      icon: <Zap className="h-10 w-10 text-primary mb-4" />,
      title: "AI-Powered Insights",
      description: "Unlock powerful project recommendations and insights with our cutting-edge AI.",
    },
    {
      icon: <Brain className="h-10 w-10 text-primary mb-4" />,
      title: "Intelligent Assistance",
      description: "Streamline your workflow with AI chat assistance and smart suggestions.",
    },
    {
      icon: <Rocket className="h-10 w-10 text-primary mb-4" />,
      title: "Accelerate Success",
      description: "Turn ideas into impactful projects faster than ever before.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <motion.main
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto text-center py-16"
      >
        <motion.div
          className="absolute inset-0 overflow-hidden z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl opacity-50 animate-pulse animation-delay-2000"></div>
        </motion.div>

        <div className="relative z-10">
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 100 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
              FutureForge AI
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Transform your ideas into reality with intelligent project planning and AI-driven insights. Let's build the future, together.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.6, type: "spring", stiffness: 120 }}
            className="space-x-4"
          >
            <Button asChild size="lg" className="bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
              <Link to="/student/signup">Get Started For Free</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-slate-300 border-slate-300 hover:bg-slate-700 hover:text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
              <Link to="/employer/signin">Sign In</Link>
            </Button>
          </motion.div>
        </div>
      </motion.main>

      <section className="py-16 container mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-100">Why Choose FutureForge?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.custom
              key={index}
              custom={index}
              variants={featureVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className="glassmorphic text-slate-200 h-full flex flex-col">
                <CardHeader className="items-center text-center">
                  {feature.icon}
                  <CardTitle className="text-2xl font-semibold text-slate-50">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center flex-grow">
                  <CardDescription className="text-slate-300">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.custom>
          ))}
        </div>
      </section>

      <footer className="py-8 text-center text-slate-400 relative z-10">
        <p>&copy; {new Date().getFullYear()} FutureForge AI. All rights reserved.</p>
        <p className="text-sm">Crafting the future, one project at a time.</p>
      </footer>
    </div>
  );
};

export default LandingPage;