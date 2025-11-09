import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Lightbulb, PlusCircle, BarChart2, MessageSquare } from 'lucide-react';

const DashboardPage = () => {
  const widgetVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  const summaryData = [
    { title: "Active Projects", value: "5", icon: <BarChart2 className="h-6 w-6 text-primary" />, color: "text-blue-500" },
    { title: "Pending Ideas", value: "12", icon: <Lightbulb className="h-6 w-6 text-yellow-500" />, color: "text-yellow-500" },
    { title: "Completed Tasks", value: "87", icon: <PlusCircle className="h-6 w-6 text-green-500" />, color: "text-green-500" },
    { title: "AI Chats", value: "3", icon: <MessageSquare className="h-6 w-6 text-purple-500" />, color: "text-purple-500" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 space-y-8"
    >
      <header className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Welcome to Your Dashboard!</h1>
          <p className="text-muted-foreground">Here's a quick overview of your projects and activities.</p>
        </div>
        <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground shadow-lg">
          <Link to="create-project">
            <PlusCircle className="mr-2 h-5 w-5" /> Create New Project
          </Link>
        </Button>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryData.map((item, index) => (
          <motion.custom
            key={item.title}
            custom={index}
            variants={widgetVariants}
            initial="hidden"
            animate="visible"
          >
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 glassmorphic">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{item.title}</CardTitle>
                {item.icon}
              </CardHeader>
              <CardContent>
                <div className={`text-4xl font-bold ${item.color}`}>{item.value}</div>
                <p className="text-xs text-muted-foreground pt-1">
                  +20.1% from last month
                </p>
              </CardContent>
            </Card>
          </motion.custom>
        ))}
      </section>
      
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.custom
            custom={summaryData.length}
            variants={widgetVariants}
            initial="hidden"
            animate="visible"
        >
            <Card className="lg:col-span-2 shadow-lg h-full glassmorphic">
                <CardHeader>
                    <CardTitle className="text-xl font-semibold">Recent Activity</CardTitle>
                    <CardDescription>Track your latest project updates and interactions.</CardDescription>
                </CardHeader>
                <CardContent className="min-h-[200px] flex items-center justify-center">
                    <p className="text-muted-foreground text-lg">Activity feed coming soon...</p>
                </CardContent>
            </Card>
        </motion.custom>

        <motion.custom
            custom={summaryData.length + 1}
            variants={widgetVariants}
            initial="hidden"
            animate="visible"
        >
            <Card className="shadow-lg h-full glassmorphic">
                <CardHeader>
                    <CardTitle className="text-xl font-semibold">Quick Actions</CardTitle>
                    <CardDescription>Get started with common tasks.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                        <Lightbulb className="mr-2 h-4 w-4" /> View Recommendations
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                        <MessageSquare className="mr-2 h-4 w-4" /> Start AI Chat
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                        <BarChart2 className="mr-2 h-4 w-4" /> View Project Stats
                    </Button>
                </CardContent>
            </Card>
        </motion.custom>
      </section>
    </motion.div>
  );
};

export default DashboardPage;