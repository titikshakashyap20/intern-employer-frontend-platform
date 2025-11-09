"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Briefcase, Plus, Calendar, MapPin, Users, Edit, ExternalLink, MoreHorizontal, ChevronDown } from 'lucide-react';

export default function JobPostingsPage() {
    const jobPostings = [
        {
            id: 1,
            title: 'Frontend Developer Intern',
            department: 'Engineering',
            location: 'San Francisco, CA',
            type: 'Summer Internship',
            applications: 24,
            status: 'Active',
        },
        {
            id: 2,
            title: 'UX/UI Design Intern',
            department: 'Design',
            location: 'Remote',
            type: 'Fall Internship',
            applications: 18,
            status: 'Active',
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-2xl font-semibold text-gray-900">Job Postings</h1>
                    <p className="mt-1 text-sm text-gray-600">Manage your internship postings and track applicants</p>
                </div>
                <div className="mt-4 sm:mt-0">
                    <Link
                        href="/employers/dashboard/jobs/create"
                        className="inline-flex items-center px-4 py-2 bg-[#7c3aed] text-white rounded-md hover:bg-[#6a6aff]"
                    >
                        <Plus className="h-5 w-5 mr-1" />
                        Create New Posting
                    </Link>
                </div>
            </div>
            <div className="bg-white shadow rounded-lg overflow-hidden mt-6">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job Title</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applications</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {jobPostings.map((job) => (
                                <tr key={job.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-medium text-gray-900">{job.title}</div>
                                        <div className="text-sm text-gray-500">{job.department}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.location}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.applications}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                            {job.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <Link href={`/employers/dashboard/jobs/${job.id}`} className="text-[#7c3aed] hover:text-[#6a6aff]">
                                            Edit
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </motion.div>
    );
} 