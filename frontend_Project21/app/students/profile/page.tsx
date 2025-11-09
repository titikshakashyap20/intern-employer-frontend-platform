"use client";
import { useState } from "react";
import { CheckCircle, FileText, Link as LinkIcon, Eye, EyeOff, User } from "lucide-react";

export default function ProfilePage() {
    const [profileVisible, setProfileVisible] = useState(true);
    return (
        <div className="max-w-5xl mx-auto py-8 space-y-8">
            <h1 className="text-2xl font-bold mb-4">Profile Management</h1>
            {/* Resume Upload */}
            <section className="bg-white rounded-lg shadow p-6 mb-6">
                <h2 className="font-semibold mb-2">Resume</h2>
                <div className="flex items-center gap-4">
                    <FileText className="w-8 h-8 text-[#7c3aed]" />
                    <span className="text-gray-700">resume_sarah.pdf</span>
                    <button className="ml-auto px-3 py-1 rounded bg-[#7c3aed] text-white text-xs font-semibold hover:bg-[#6a6aff]">Upload New</button>
                </div>
            </section>
            {/* LinkedIn & Portfolio */}
            <section className="bg-white rounded-lg shadow p-6 mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h2 className="font-semibold mb-2">LinkedIn</h2>
                    <div className="flex items-center gap-2">
                        <LinkIcon className="w-5 h-5 text-blue-600" />
                        <a href="https://linkedin.com/in/sarahjohnson" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">linkedin.com/in/sarahjohnson</a>
                    </div>
                </div>
                <div>
                    <h2 className="font-semibold mb-2">Portfolio</h2>
                    <div className="flex items-center gap-2">
                        <LinkIcon className="w-5 h-5 text-green-600" />
                        <a href="https://sarahportfolio.com" className="text-green-600 hover:underline" target="_blank" rel="noopener noreferrer">sarahportfolio.com</a>
                    </div>
                </div>
            </section>
            {/* Skill Matrix */}
            <section className="bg-white rounded-lg shadow p-6 mb-6">
                <h2 className="font-semibold mb-2">Skill Matrix</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex flex-col items-center">
                        <span className="font-semibold">JavaScript</span>
                        <span className="text-xs text-gray-500">Advanced</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="font-semibold">React</span>
                        <span className="text-xs text-gray-500">Intermediate</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="font-semibold">Node.js</span>
                        <span className="text-xs text-gray-500">Beginner</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="font-semibold">Python</span>
                        <span className="text-xs text-gray-500">Intermediate</span>
                    </div>
                </div>
            </section>
            {/* Education & Certifications */}
            <section className="bg-white rounded-lg shadow p-6 mb-6">
                <h2 className="font-semibold mb-2">Education & Certifications</h2>
                <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        B.Sc. Computer Science, Stanford University
                        <a href="https://linkedin.com/edu/stanford" className="text-blue-600 hover:underline ml-2 text-xs" target="_blank" rel="noopener noreferrer">Verify</a>
                    </li>
                    <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        AWS Certified Cloud Practitioner
                        <a href="https://aws.amazon.com/certification/verify" className="text-blue-600 hover:underline ml-2 text-xs" target="_blank" rel="noopener noreferrer">Verify</a>
                    </li>
                </ul>
            </section>
            {/* Project Showcase */}
            <section className="bg-white rounded-lg shadow p-6 mb-6">
                <h2 className="font-semibold mb-2">Project Showcase</h2>
                <ul className="space-y-2">
                    <li>
                        <span className="font-semibold">AI Resume Parser</span> - <span className="text-gray-500">A tool to extract structured data from resumes. <a href="https://github.com/sarah/ai-resume-parser" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a></span>
                    </li>
                    <li>
                        <span className="font-semibold">Portfolio Website</span> - <span className="text-gray-500">Personal portfolio built with Next.js. <a href="https://sarahportfolio.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Live</a></span>
                    </li>
                </ul>
            </section>
            {/* Profile Completion & Visibility */}
            <section className="bg-white rounded-lg shadow p-6 flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                    <h2 className="font-semibold mb-2">Profile Completion</h2>
                    <div className="w-full h-2 bg-gray-200 rounded mb-2">
                        <div className="h-2 bg-[#7c3aed] rounded" style={{ width: "85%" }}></div>
                    </div>
                    <span className="text-xs font-semibold text-[#7c3aed]">85%</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-2">
                    <h2 className="font-semibold mb-2">Profile Visibility</h2>
                    <button onClick={() => setProfileVisible(v => !v)} className="flex items-center gap-2 px-3 py-1 rounded bg-gray-100 hover:bg-gray-200">
                        {profileVisible ? <Eye className="w-4 h-4 text-green-500" /> : <EyeOff className="w-4 h-4 text-gray-400" />}
                        <span>{profileVisible ? "Visible to Employers" : "Hidden from Employers"}</span>
                    </button>
                </div>
                <div className="flex-1 flex flex-col items-center gap-2">
                    <h2 className="font-semibold mb-2">Public Profile URL</h2>
                    <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-[#7c3aed]" />
                        <span className="text-xs text-gray-700">internmatch.com/sarahjohnson</span>
                    </div>
                </div>
            </section>
        </div>
    );
} 