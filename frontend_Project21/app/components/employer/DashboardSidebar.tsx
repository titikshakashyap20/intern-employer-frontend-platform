"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
    X,
    Home,
    Building,
    FileText,
    Users,
    Inbox,
    Calendar,
    Settings,
    HelpCircle,
    LogOut,
    MessageSquare
} from 'lucide-react';

interface DashboardSidebarProps {
    sidebarOpen: boolean;
    setSidebarOpen: (open: boolean) => void;
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
    const pathname = usePathname();

    const navigation = [
        { name: 'Dashboard', href: '/employers/dashboard', icon: Home },
        { name: 'Company Profile', href: '/employers/dashboard/profile', icon: Building },
        { name: 'Job Postings', href: '/employers/dashboard/jobs', icon: FileText },
        { name: 'Candidates', href: '/employers/dashboard/candidates', icon: Users },
        { name: 'Applications', href: '/employers/dashboard/applications', icon: Inbox },
        { name: 'Interviews', href: '/employers/dashboard/interviews', icon: Calendar },
        { name: 'Messages', href: '/employers/dashboard/messages', icon: MessageSquare },
    ];

    const secondaryNavigation = [
        { name: 'Settings', href: '/employers/dashboard/settings', icon: Settings },
        { name: 'Help & Support', href: '/employers/dashboard/support', icon: HelpCircle },
    ];

    const Logo = () => (
        <Link href="/" className="flex items-center gap-2 px-4">
            <div className="w-10 h-10 bg-gradient-to-tr from-[#6a6aff] to-[#a259c6] rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl font-bold">IM</span>
            </div>
            <span className="ml-2 text-xl font-extrabold text-white tracking-tight">InternMatch</span>
        </Link>
    );

    const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
        <div className="flex flex-col h-full">
            <nav className="px-2 space-y-1">
                {navigation.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${pathname === item.href
                            ? 'bg-white/20 text-white'
                            : 'text-gray-200 hover:bg-white/10'
                            }`}
                        onClick={() => mobile && setSidebarOpen(false)}
                    >
                        <item.icon
                            className="mr-3 flex-shrink-0 h-6 w-6 text-gray-300"
                            aria-hidden="true"
                        />
                        {item.name}
                    </Link>
                ))}
            </nav>

            <div className="mt-auto pt-4 pb-4 border-t border-white/20">
                <nav className="px-2 space-y-1">
                    {secondaryNavigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-300 hover:bg-white/10"
                            onClick={() => mobile && setSidebarOpen(false)}
                        >
                            <item.icon
                                className="mr-3 flex-shrink-0 h-6 w-6 text-gray-300"
                                aria-hidden="true"
                            />
                            {item.name}
                        </Link>
                    ))}

                    <button
                        onClick={() => { /* Add logout logic */ }}
                        className="w-full group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-300 hover:bg-white/10"
                    >
                        <LogOut
                            className="mr-3 flex-shrink-0 h-6 w-6 text-gray-300"
                            aria-hidden="true"
                        />
                        Sign Out
                    </button>
                </nav>
            </div>
        </div>
    );

    return (
        <>
            {/* Mobile sidebar */}
            <AnimatePresence>
                {sidebarOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.75 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 z-40 bg-gray-900/80 md:hidden"
                            onClick={() => setSidebarOpen(false)}
                        />
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="fixed inset-y-0 flex z-40 flex-shrink-0 md:hidden"
                        >
                            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-[#4c1d95]">
                                <div className="absolute top-0 right-0 -mr-12 pt-2">
                                    <button
                                        type="button"
                                        className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                        onClick={() => setSidebarOpen(false)}
                                    >
                                        <span className="sr-only">Close sidebar</span>
                                        <X className="h-6 w-6 text-white" aria-hidden="true" />
                                    </button>
                                </div>

                                <div className="flex-shrink-0 flex items-center px-4">
                                    <Logo />
                                </div>

                                <div className="mt-5 flex-1 h-0 overflow-y-auto">
                                    <NavLinks mobile />
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Desktop sidebar */}
            <div className="hidden md:flex md:flex-shrink-0">
                <div className="flex flex-col w-64">
                    <div className="flex flex-col h-0 flex-1">
                        <div className="flex items-center h-16 flex-shrink-0 bg-[#4c1d95]">
                            <Logo />
                        </div>
                        <div className="flex-1 flex flex-col overflow-y-auto bg-[#4c1d95]">
                            <NavLinks />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardSidebar; 