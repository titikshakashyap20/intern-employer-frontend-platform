"use client";
import { User, Briefcase, CheckCircle, FileText, BarChart2, Star, MessageSquare } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const recommendedInternships = [
    {
        title: "Frontend Developer Intern",
        company: "TechCorp Inc.",
        location: "San Francisco, CA",
        duration: "6 months",
        match: "95%",
        id: 1,
    },
    {
        title: "Data Science Intern",
        company: "DataFlow Solutions",
        location: "Remote",
        duration: "4 months",
        match: "88%",
        id: 2,
    },
];

const recentApplications = [
    {
        title: "UX Design Intern",
        company: "Creative Agency",
        status: "Under Review",
        color: "bg-yellow-100 text-yellow-700",
        id: 1,
    },
    {
        title: "Software Engineer Intern",
        company: "StartupXYZ",
        status: "Interview Scheduled",
        color: "bg-green-100 text-green-700",
        id: 2,
    },
];

const skillDevelopment = [
    { skill: "JavaScript", level: "Advanced", percent: 85 },
    { skill: "React", level: "Intermediate", percent: 70 },
    { skill: "Node.js", level: "Beginner", percent: 40 },
];

const upcoming = [
    { event: "Interview with TechCorp", time: "Tomorrow, 2:00 PM", type: "interview" },
    { event: "Career Fair", time: "Friday, 10:00 AM", type: "event" },
];

export default function StudentDashboard() {
    return (
        <div className="w-full">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                    <p className="text-gray-500">Welcome back, Sarah!</p>
                </div>
                <div className="flex items-center gap-4">
                    <input type="text" placeholder="Search internships..." className="px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary" />
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                        <User className="h-6 w-6 text-gray-500" />
                    </div>
                </div>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white rounded-lg p-4 shadow border">
                    <div className="text-sm text-gray-500">Profile Score</div>
                    <div className="text-2xl font-bold text-[#7c3aed]">85%</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow border">
                    <div className="text-sm text-gray-500">Applications</div>
                    <div className="text-2xl font-bold text-[#7c3aed]">12</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow border">
                    <div className="text-sm text-gray-500">Interviews</div>
                    <div className="text-2xl font-bold text-[#7c3aed]">3</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow border">
                    <div className="text-sm text-gray-500">Matches</div>
                    <div className="text-2xl font-bold text-[#7c3aed]">24</div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Recommended Internships */}
                    <div className="bg-white rounded-lg shadow border p-6">
                        <div className="flex flex-row justify-between items-center mb-4">
                            <div className="font-semibold text-gray-800">Recommended for You</div>
                            <Link href="#" className="text-[#7c3aed] text-sm hover:underline">View All</Link>
                        </div>
                        <div className="space-y-4">
                            {recommendedInternships.map((intern) => (
                                <div key={intern.id} className="flex flex-col md:flex-row md:items-center justify-between bg-gray-50 rounded-lg p-4 border border-gray-100">
                                    <div>
                                        <div className="font-semibold text-gray-800">{intern.title}</div>
                                        <div className="text-gray-500 text-sm">{intern.company} &bull; {intern.location}</div>
                                        <div className="text-xs text-green-600 font-medium mt-1">{intern.match} Match</div>
                                    </div>
                                    <div className="flex flex-col md:flex-row md:items-center gap-2 mt-2 md:mt-0">
                                        <div className="text-xs text-gray-400">{intern.duration}</div>
                                        <button className="px-3 py-1 rounded bg-[#7c3aed] text-white text-xs font-semibold hover:bg-[#6a6aff]">Quick Apply</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Recent Applications */}
                    <div className="bg-white rounded-lg shadow border p-6">
                        <div className="font-semibold text-gray-800 mb-4">Recent Applications</div>
                        <div className="space-y-4">
                            {recentApplications.map((app) => (
                                <div key={app.id} className="flex items-center justify-between bg-gray-50 rounded-lg p-4 border border-gray-100">
                                    <div>
                                        <div className="font-semibold text-gray-800">{app.title}</div>
                                        <div className="text-gray-500 text-xs">{app.company}</div>
                                    </div>
                                    <div className={`text-xs font-semibold px-2 py-1 rounded ${app.color}`}>{app.status}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Sidebar Widgets */}
                <div className="space-y-6">
                    {/* Profile Completion */}
                    <div className="bg-white rounded-lg shadow border p-6">
                        <div className="font-semibold text-gray-800 mb-2">Profile Completion</div>
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-full h-2 bg-gray-200 rounded">
                                <div className="h-2 bg-[#7c3aed] rounded" style={{ width: "85%" }}></div>
                            </div>
                            <span className="text-xs font-semibold text-[#7c3aed]">85%</span>
                        </div>
                        <ul className="text-xs text-gray-500 space-y-1 mb-2">
                            <li><CheckCircle className="inline h-4 w-4 text-green-500 mr-1" /> Resume Upload</li>
                            <li><CheckCircle className="inline h-4 w-4 text-green-500 mr-1" /> Skills Assessment</li>
                            <li><CheckCircle className="inline h-4 w-4 text-green-500 mr-1" /> Portfolio Link</li>
                            <li><CheckCircle className="inline h-4 w-4 text-green-500 mr-1" /> Profile Info</li>
                        </ul>
                        <button className="w-full mt-2 px-3 py-2 rounded bg-[#7c3aed] text-white text-xs font-semibold hover:bg-[#6a6aff]">Complete Profile</button>
                    </div>
                    {/* Skill Development */}
                    <div className="bg-white rounded-lg shadow border p-6">
                        <div className="font-semibold text-gray-800 mb-2">Skill Development</div>
                        <ul className="space-y-2 mb-2">
                            {skillDevelopment.map((skill) => (
                                <li key={skill.skill} className="flex items-center justify-between">
                                    <span>{skill.skill}</span>
                                    <div className="flex items-center gap-2">
                                        <div className="w-24 h-2 bg-gray-200 rounded">
                                            <div className="h-2 bg-[#7c3aed] rounded" style={{ width: `${skill.percent}%` }}></div>
                                        </div>
                                        <span className="text-xs text-gray-500">{skill.level}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <button className="w-full mt-2 px-3 py-2 rounded bg-[#7c3aed] text-white text-xs font-semibold hover:bg-[#6a6aff]">View Learning Path</button>
                    </div>
                    {/* Upcoming */}
                    <div className="bg-white rounded-lg shadow border p-6">
                        <div className="font-semibold text-gray-800 mb-2">Upcoming</div>
                        <ul className="space-y-2">
                            {upcoming.map((item, idx) => (
                                <li key={idx} className="flex items-center gap-2">
                                    <span className={`w-2 h-2 rounded-full ${item.type === "interview" ? "bg-blue-500" : "bg-green-500"}`}></span>
                                    <span className="text-xs text-gray-700">{item.event}</span>
                                    <span className="text-xs text-gray-400 ml-auto">{item.time}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
} 