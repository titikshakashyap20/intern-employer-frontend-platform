import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Modal = ({ trigger, title, description, children, footerActions, open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent 
        className="sm:max-w-[425px] md:max-w-md lg:max-w-lg xl:max-w-xl glassmorphic !border-primary/30 !shadow-primary/20 !shadow-2xl"
        as={motion.div}
        initial={{ opacity: 0, scale: 0.9, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.3, ease: "circOut" }}
      >
        <DialogHeader>
          {title && <DialogTitle className="text-2xl font-bold text-primary">{title}</DialogTitle>}
          {description && <DialogDescription className="text-muted-foreground">{description}</DialogDescription>}
        </DialogHeader>
        
        <div className="py-4 text-foreground">
          {children}
        </div>

        {footerActions && (
          <DialogFooter className="gap-2 sm:gap-0">
            {footerActions.map((action, index) => (
              <DialogClose key={index} asChild={action.isCloseButton !== false}>
                {React.cloneElement(action.component, { onClick: action.onClick })}
              </DialogClose>
            ))}
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
};

// Example Usage (can be removed or kept for reference)
const ExampleModalUsage = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="p-4">
      <Modal
        open={isOpen}
        onOpenChange={setIsOpen}
        trigger={<Button variant="outline" onClick={() => setIsOpen(true)}>Open Example Modal</Button>}
        title="Example Modal Title"
        description="This is an example description for the modal. You can put more details here."
        footerActions={[
          { component: <Button variant="ghost">Cancel</Button>, isCloseButton: true },
          { component: <Button type="submit">Confirm Action</Button>, onClick: () => console.log('Confirmed!'), isCloseButton: true },
        ]}
      >
        <p>This is the main content of the modal. You can place any React components or JSX here.</p>
        <p className="mt-2">For instance, an input field:</p>
        <input type="text" placeholder="Enter something..." className="mt-1 w-full p-2 border rounded bg-background/70" />
      </Modal>
    </div>
  );
};


export { Modal, ExampleModalUsage };