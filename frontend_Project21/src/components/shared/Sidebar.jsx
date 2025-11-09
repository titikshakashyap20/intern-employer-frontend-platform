import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, LayoutDashboard, PlusCircle, MessageSquare, Lightbulb, Settings, LogOut, X, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';


const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const sidebarVariants = {
    open: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
    closed: { x: "-100%", transition: { type: "spring", stiffness: 300, damping: 30 } }
  };

  const navItemVariants = {
    open: { opacity: 1, x: 0, transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
    closed: { opacity: 0, x: -20 }
  };
  
  const linkVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: -10 }
  };

  const commonLinkClasses = "flex items-center px-4 py-3 rounded-lg transition-all duration-200 ease-in-out transform hover:scale-105";
  const activeLinkClasses = "bg-primary/20 text-primary font-semibold shadow-inner";
  const inactiveLinkClasses = "text-muted-foreground hover:bg-accent/50 hover:text-foreground";

  const menuItems = [
    { to: "/dashboard", icon: <LayoutDashboard className="h-5 w-5" />, label: "Overview" },
    { to: "/dashboard/create-project", icon: <PlusCircle className="h-5 w-5" />, label: "New Project" },
    { to: "/dashboard/ai-chat", icon: <MessageSquare className="h-5 w-5" />, label: "AI Chat" },
    { to: "/dashboard/recommendations", icon: <Lightbulb className="h-5 w-5" />, label: "Recommendations" },
  ];

  const bottomMenuItems = [
    { to: "/dashboard/settings", icon: <Settings className="h-5 w-5" />, label: "Settings" },
  ];

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    navigate('/signin');
  };

  return (
    <motion.aside
      variants={sidebarVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className={`fixed inset-y-0 left-0 z-40 flex h-full w-64 flex-col border-r border-border bg-background/90 dark:bg-slate-800/90 backdrop-blur-md shadow-xl md:static md:block ${isOpen ? 'block' : 'hidden'}`}
    >
      <div className="flex items-center justify-between h-16 px-4 border-b border-border">
        <Link to="/dashboard" className="flex items-center gap-2 text-xl font-bold text-primary hover:opacity-80 transition-opacity">
          <Zap className="h-7 w-7" />
          <span>FutureForge</span>
        </Link>
        <Button variant="ghost" size="icon" onClick={toggleSidebar} className="md:hidden text-muted-foreground hover:text-foreground">
          <X className="h-6 w-6" />
        </Button>
      </div>

      <motion.nav variants={navItemVariants} className="flex-1 space-y-1 p-4 overflow-y-auto">
        {menuItems.map((item) => (
          <motion.div key={item.to} variants={linkVariants}>
            <NavLink
              to={item.to}
              onClick={isOpen && window.innerWidth < 768 ? toggleSidebar : undefined}
              className={({ isActive }) => `${commonLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
            >
              {item.icon}
              <span className="ml-3">{item.label}</span>
            </NavLink>
          </motion.div>
        ))}
      </motion.nav>

      <motion.div variants={navItemVariants} className="mt-auto p-4 border-t border-border space-y-1">
         {bottomMenuItems.map((item) => (
          <motion.div key={item.to} variants={linkVariants}>
            <NavLink
              to={item.to}
              onClick={isOpen && window.innerWidth < 768 ? toggleSidebar : undefined}
              className={({ isActive }) => `${commonLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
            >
              {item.icon}
              <span className="ml-3">{item.label}</span>
            </NavLink>
          </motion.div>
        ))}
        <motion.div variants={linkVariants}>
          <Button
            variant="ghost"
            onClick={handleLogout}
            className={`${commonLinkClasses} ${inactiveLinkClasses} w-full justify-start text-red-500 hover:!bg-red-500/10 hover:!text-red-600 dark:hover:!text-red-400`}
          >
            <LogOut className="h-5 w-5" />
            <span className="ml-3">Logout</span>
          </Button>
        </motion.div>
         <motion.div variants={linkVariants} className="pt-2 text-center">
            <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} FutureForge</p>
        </motion.div>
      </motion.div>
    </motion.aside>
  );
};

export default Sidebar;