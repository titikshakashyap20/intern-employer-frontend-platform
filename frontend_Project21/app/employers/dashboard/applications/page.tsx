"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, CheckCircle, ThumbsUp, ThumbsDown, MessageCircle } from 'lucide-react';

export default function ApplicationReviewPage() {
    const applications = [
        {
            id: 1,
            candidate: {
                name: 'Alex Thompson',
                role: 'Frontend Developer Intern',
                image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            },
            status: 'new',
            date: '2 days ago',
            rating: 4.5,
        },
        {
            id: 2,
            candidate: {
                name: 'Maria Garcia',
                role: 'UX Design Intern',
                image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            },
            status: 'reviewed',
            date: '1 week ago',
            rating: 4.0,
        },
        {
            id: 3,
            candidate: {
                name: 'James Wilson',
                role: 'Data Science Intern',
                image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            },
            status: 'interviewing',
            date: '3 days ago',
            rating: 4.8,
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="py-4">
                <h1 className="text-2xl font-semibold text-gray-900">Application Review</h1>
                <p className="mt-1 text-sm text-gray-600">Review and manage internship applications.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1 bg-white rounded-lg shadow">
                    <div className="p-4 border-b border-gray-200">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-medium text-gray-900">Applications</h2>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#f3f0ff] text-[#7c3aed]">
                                12 New
                            </span>
                        </div>
                    </div>

                    <div className="divide-y divide-gray-200">
                        {applications.map((application) => (
                            <div
                                key={application.id}
                                className="p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <img
                                            src={application.candidate.image}
                                            alt={application.candidate.name}
                                            className="h-10 w-10 rounded-full object-cover"
                                        />
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-gray-900">{application.candidate.name}</p>
                                            <p className="text-sm text-gray-500">{application.candidate.role}</p>
                                        </div>
                                    </div>
                                    {application.status === 'new' && (
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#f3f0ff] text-[#7c3aed]">
                                            New
                                        </span>
                                    )}
                                </div>
                                <div className="mt-2 flex items-center justify-between text-sm text-gray-500">
                                    <div className="flex items-center">
                                        <Clock className="h-4 w-4 mr-1" />
                                        {application.date}
                                    </div>
                                    <div className="flex items-center">
                                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                                        {application.rating}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="lg:col-span-2 bg-white rounded-lg shadow">
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center">
                                <img
                                    src={applications[0].candidate.image}
                                    alt={applications[0].candidate.name}
                                    className="h-16 w-16 rounded-full object-cover"
                                />
                                <div className="ml-4">
                                    <h2 className="text-xl font-semibold text-gray-900">{applications[0].candidate.name}</h2>
                                    <p className="text-gray-500">{applications[0].candidate.role}</p>
                                </div>
                            </div>
                            <div className="flex space-x-2">
                                <button className="px-4 py-2 text-sm font-medium rounded-md border border-gray-300 hover:bg-gray-50 flex items-center">
                                    <MessageCircle className="h-4 w-4 mr-1" />
                                    Message
                                </button>
                                <button className="px-4 py-2 text-sm font-medium rounded-md bg-[#7c3aed] text-white hover:bg-[#6a6aff] flex items-center">
                                    <CheckCircle className="h-4 w-4 mr-1" />
                                    Schedule Interview
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="text-sm font-medium text-gray-700 mb-2">Quick Actions</h3>
                                    <div className="flex space-x-2">
                                        <button className="flex-1 px-4 py-2 text-sm font-medium rounded-md bg-green-500 text-white hover:bg-green-600 flex items-center justify-center">
                                            <ThumbsUp className="h-4 w-4 mr-1" />
                                            Approve
                                        </button>
                                        <button className="flex-1 px-4 py-2 text-sm font-medium rounded-md bg-red-500 text-white hover:bg-red-600 flex items-center justify-center">
                                            <ThumbsDown className="h-4 w-4 mr-1" />
                                            Reject
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
} 