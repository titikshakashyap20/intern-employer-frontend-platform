"use client";
import React, { useState } from 'react';
import DashboardSidebar from '@/app/components/employer/DashboardSidebar';
import DashboardHeader from '@/app/components/employer/DashboardHeader';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Mock user data - in a real app, this would come from an auth context
    const user = { name: 'Acme Inc.' };

    return (
        <div className="h-screen flex overflow-hidden bg-gray-100">
            <DashboardSidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />

            <div className="flex flex-col w-0 flex-1 overflow-hidden">
                <DashboardHeader setSidebarOpen={setSidebarOpen} user={user} />

                <main className="flex-1 relative overflow-y-auto focus:outline-none">
                    <div className="py-6">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                            {children}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
} 