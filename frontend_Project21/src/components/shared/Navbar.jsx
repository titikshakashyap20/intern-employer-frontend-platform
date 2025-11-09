
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Zap, ChevronDown, Briefcase, User, LogIn, UserPlus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";

const Navbar = ({ navLinks, authLinks: initialAuthLinks, isAuthenticated }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const activeClassName = "text-primary font-semibold border-b-2 border-primary";
  const inactiveClassName = "text-foreground/80 hover:text-primary transition-colors duration-200";
  
  const mobileLinkProps = {
    onClick: () => setMobileMenuOpen(false),
    className: "block py-3 px-4 text-lg hover:bg-primary/10 rounded-md w-full text-left"
  };

  const studentAuthLinks = [
    { to: '/student/signin', label: 'Student Sign In', icon: <LogIn className="mr-2 h-5 w-5" /> },
    { to: '/student/signup', label: 'Student Sign Up', icon: <UserPlus className="mr-2 h-5 w-5" /> },
  ];

  const employerAuthLinks = [
    { to: '/employer/signin', label: 'Employer Sign In', icon: <LogIn className="mr-2 h-5 w-5" /> },
    { to: '/employer/signup', label: 'Employer Sign Up', icon: <UserPlus className="mr-2 h-5 w-5" /> },
  ];

  const NavLinkItem = ({ to, children, className: navLinkClassName }) => (
    <NavLink
      to={to}
      className={({ isActive }) => isActive ? `${activeClassName} ${navLinkClassName}` : `${inactiveClassName} ${navLinkClassName}`}
    >
      {children}
    </NavLink>
  );

  const DropdownAuthLinks = ({ title, icon, links, mobile = false }) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {mobile ? (
          <Button variant="ghost" className="w-full justify-start py-3 px-4 text-lg hover:bg-primary/10 rounded-md text-foreground/90">
            {icon} {title} <ChevronDown className="ml-auto h-5 w-5" />
          </Button>
        ) : (
          <Button variant="ghost" className={`${inactiveClassName} flex items-center`}>
            {icon} {title} <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 glassmorphic" sideOffset={mobile ? 10 : 5}>
        {links.map(link => (
          <DropdownMenuItem key={link.to} asChild className="cursor-pointer hover:!bg-primary/10">
            <Link to={link.to} {...(mobile ? {onClick: () => setMobileMenuOpen(false)} : {})}>
              {link.icon} {link.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );


  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      className="sticky top-0 z-50 bg-background/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-md"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2 group">
            <Zap className="h-8 w-8 text-primary group-hover:animate-pulse" />
            <span className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">employeeintern.com</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.filter(link => !link.authRequired || isAuthenticated).map((link) => (
              <NavLinkItem key={link.to} to={link.to} className="px-3 py-2">
                {link.icon && React.cloneElement(link.icon, {className: "mr-1 h-5 w-5 inline-block"})}
                {link.label}
              </NavLinkItem>
            ))}
            {!isAuthenticated && (
              <>
                <DropdownAuthLinks title="Student" icon={<User className="mr-1 h-5 w-5" />} links={studentAuthLinks} />
                <DropdownAuthLinks title="Employer" icon={<Briefcase className="mr-1 h-5 w-5" />} links={employerAuthLinks} />
              </>
            )}
            {isAuthenticated && (
               <Button asChild className="ml-4 bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link to="/dashboard">Go to Dashboard</Link>
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu} aria-label="Toggle menu">
              {mobileMenuOpen ? <X className="h-7 w-7 text-primary" /> : <Menu className="h-7 w-7 text-foreground" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-20 left-0 right-0 bg-background/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg p-4 border-t border-border"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.filter(link => !link.authRequired || isAuthenticated).map((link) => (
                <NavLink 
                  key={link.to} 
                  to={link.to} 
                  {...mobileLinkProps} 
                  className={({ isActive }) => `${mobileLinkProps.className} ${isActive ? 'text-primary font-semibold bg-primary/5' : 'text-foreground/90'}`}
                >
                  <div className="flex items-center">{link.icon} {link.label}</div>
                </NavLink>
              ))}
              {!isAuthenticated && (
                <>
                  <DropdownAuthLinks title="Student" icon={<User className="mr-2 h-5 w-5" />} links={studentAuthLinks} mobile={true} />
                  <DropdownAuthLinks title="Employer" icon={<Briefcase className="mr-2 h-5 w-5" />} links={employerAuthLinks} mobile={true} />
                </>
              )}
               {isAuthenticated && (
                <Button asChild className="w-full mt-2 bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link to="/dashboard" {...mobileLinkProps}>
                     <div className="flex items-center justify-center">Go to Dashboard</div>
                  </Link>
                </Button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
