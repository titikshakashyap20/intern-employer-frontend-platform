"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
    Briefcase,
    Users,
    Mail,
    Calendar,
    TrendingUp,
    ArrowRight,
    ArrowUpRight,
    Building
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const activityData = [
    { name: 'Jan', applications: 40 },
    { name: 'Feb', applications: 30 },
    { name: 'Mar', applications: 60 },
    { name: 'Apr', applications: 35 },
    { name: 'May', applications: 50 },
    { name: 'Jun', applications: 75 },
];

export default function DashboardHomePage() {
    const stats = [
        { name: 'Active Postings', value: 4, icon: Briefcase, color: 'bg-[#6366F1]', href: '/employers/dashboard/jobs' },
        { name: 'Applicants', value: 42, icon: Users, color: 'bg-[#3B82F6]', href: '/employers/dashboard/applications' },
        { name: 'Unread Messages', value: 8, icon: Mail, color: 'bg-[#8B5CF6]', href: '/employers/dashboard/messages' },
        { name: 'Scheduled Interviews', value: 6, icon: Calendar, color: 'bg-[#10B981]', href: '/employers/dashboard/interviews' },
    ];

    const recentApplicants = [
        { id: 1, name: 'Emily Chen', position: 'Frontend Developer Intern', date: '2 days ago', avatar: 'EC' },
        { id: 2, name: 'Jamal Williams', position: 'Data Science Intern', date: '3 days ago', avatar: 'JW' },
        { id: 3, name: 'Sofia Rodriguez', position: 'UX/UI Design Intern', date: '5 days ago', avatar: 'SR' },
        { id: 4, name: 'Alex Johnson', position: 'Backend Developer Intern', date: '1 week ago', avatar: 'AJ' },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="py-4">
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                <p className="mt-1 text-sm text-gray-600">Welcome back! Here's an overview of your recruitment activities.</p>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="bg-white rounded-xl shadow-lg border p-5 flex flex-col justify-between"
                    >
                        <div className="flex items-center mb-2">
                            <div className={`flex-shrink-0 p-3 rounded-md ${stat.color}`}>
                                <stat.icon className="h-6 w-6 text-white" aria-hidden="true" />
                            </div>
                            <div className="ml-5 w-0 flex-1">
                                <dl>
                                    <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                                    <dd>
                                        <div className="text-lg font-bold text-gray-900">{stat.value}</div>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                        <Link href={stat.href} className="inline-flex items-center text-[#6366F1] hover:text-[#4F46E5] text-sm font-medium mt-2 transition">
                            View all <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                    </motion.div>
                ))}
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white rounded-xl shadow-lg border p-6"
                >
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-gray-900">Application Activity</h2>
                        <span className="flex items-center text-sm font-medium text-green-600">
                            <TrendingUp className="h-4 w-4 mr-1" />
                            <span>12% increase</span>
                        </span>
                    </div>
                    <div className="h-60">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                data={activityData}
                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                                <YAxis axisLine={false} tickLine={false} />
                                <Tooltip />
                                <Bar dataKey="applications" fill="#7c3aed" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-white rounded-xl shadow-lg border overflow-hidden"
                >
                    <div className="p-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Applicants</h2>
                        <div className="space-y-4">
                            {recentApplicants.map((applicant) => (
                                <div key={applicant.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded-full bg-[#f3f0ff] text-[#7c3aed] flex items-center justify-center font-semibold">
                                            {applicant.avatar}
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-gray-900">{applicant.name}</p>
                                            <p className="text-xs text-gray-500">{applicant.position}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-xs text-gray-500 mr-4">{applicant.date}</span>
                                        <button className="text-[#6366F1] hover:text-[#4F46E5] transition">
                                            <ArrowUpRight className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-gray-50 px-6 py-3">
                        <Link href="/employers/dashboard/applications" className="font-medium text-[#6366F1] hover:text-[#4F46E5] flex items-center text-sm transition">
                            View all applications <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                    </div>
                </motion.div>
            </div>

            <div className="mt-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <Link href="/employers/dashboard/jobs/new" className="bg-gradient-to-r from-[#7c3aed] to-[#6a6aff] hover:from-[#6a6aff] hover:to-[#7c3aed] text-white p-6 rounded-lg shadow-md transition-all flex flex-col items-start">
                        <Briefcase className="h-8 w-8 mb-3" />
                        <h3 className="text-base font-semibold mb-1">Post New Job</h3>
                        <p className="text-sm opacity-90">Create a new internship posting to attract candidates.</p>
                    </Link>
                    <Link href="/employers/dashboard/candidates" className="bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] hover:from-[#60a5fa] hover:to-[#3b82f6] text-white p-6 rounded-lg shadow-md transition-all flex flex-col items-start">
                        <Users className="h-8 w-8 mb-3" />
                        <h3 className="text-base font-semibold mb-1">Browse Candidates</h3>
                        <p className="text-sm opacity-90">Discover and connect with potential interns.</p>
                    </Link>
                    <Link href="/employers/dashboard/profile" className="bg-gradient-to-r from-[#a259c6] to-[#8b5cf6] hover:from-[#8b5cf6] hover:to-[#a259c6] text-white p-6 rounded-lg shadow-md transition-all flex flex-col items-start">
                        <Building className="h-8 w-8 mb-3" />
                        <h3 className="text-base font-semibold mb-1">Complete Profile</h3>
                        <p className="text-sm opacity-90">Enhance your company profile to attract better candidates.</p>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
} 