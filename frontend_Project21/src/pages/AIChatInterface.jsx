import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { MessageSquare } from 'lucide-react';

const AIChatInterface = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6"
    >
      <Card className="shadow-lg glassmorphic">
        <CardHeader className="text-center">
          <MessageSquare className="mx-auto h-12 w-12 text-primary mb-2" />
          <CardTitle className="text-3xl font-bold text-foreground">AI Chat Interface</CardTitle>
          <CardDescription className="text-muted-foreground">Interact with our AI assistant. Static layout placeholder.</CardDescription>
        </CardHeader>
        <CardContent className="min-h-[400px] flex flex-col items-center justify-center">
          <div className="w-full max-w-2xl border rounded-lg p-4 space-y-4 bg-background/50">
            <div className="flex justify-start">
              <div className="bg-muted p-3 rounded-lg max-w-xs">
                <p className="text-sm">Hello! How can I assist you today?</p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-primary text-primary-foreground p-3 rounded-lg max-w-xs">
                <p className="text-sm">I need help with brainstorming project ideas.</p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-muted p-3 rounded-lg max-w-xs">
                <p className="text-sm">Great! Tell me more about your interests or goals.</p>
              </div>
            </div>
          </div>
          <input 
            type="text" 
            placeholder="Type your message here..." 
            className="mt-4 w-full max-w-2xl p-3 border rounded-lg focus:ring-primary focus:border-primary bg-background/70"
          />
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AIChatInterface;