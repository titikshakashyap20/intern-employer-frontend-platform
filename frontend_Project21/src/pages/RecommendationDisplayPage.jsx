import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Lightbulb } from 'lucide-react';

const RecommendationDisplayPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6"
    >
      <Card className="shadow-lg glassmorphic">
        <CardHeader className="text-center">
          <Lightbulb className="mx-auto h-12 w-12 text-primary mb-2" />
          <CardTitle className="text-3xl font-bold text-foreground">Project Recommendations</CardTitle>
          <CardDescription className="text-muted-foreground">Discover AI-generated recommendations for your projects.</CardDescription>
        </CardHeader>
        <CardContent className="min-h-[300px] flex items-center justify-center">
          <p className="text-xl text-muted-foreground">Recommendation cards or panels will be displayed here.</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default RecommendationDisplayPage;