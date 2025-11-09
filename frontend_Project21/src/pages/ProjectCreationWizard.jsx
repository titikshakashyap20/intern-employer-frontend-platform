import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import {Zap} from 'lucide-react';

const ProjectCreationWizard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6"
    >
      <Card className="shadow-lg glassmorphic">
        <CardHeader className="text-center">
          <Zap className="mx-auto h-12 w-12 text-primary mb-2" />
          <CardTitle className="text-3xl font-bold text-foreground">Project Creation Wizard</CardTitle>
          <CardDescription className="text-muted-foreground">Let's define your new project. This is a multi-step form placeholder.</CardDescription>
        </CardHeader>
        <CardContent className="min-h-[300px] flex items-center justify-center">
          <p className="text-xl text-muted-foreground">Multi-step form will be implemented here.</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCreationWizard;