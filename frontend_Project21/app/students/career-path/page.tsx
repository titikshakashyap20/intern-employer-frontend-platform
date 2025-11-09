"use client";
import { BarChart2, BookOpen, UserCheck, Award, Users } from "lucide-react";

export default function CareerPathPage() {
    return (
        <div className="max-w-5xl mx-auto py-8 space-y-8">
            <h1 className="text-2xl font-bold mb-4">Career Path</h1>
            {/* Skill Gap Analysis */}
            <section className="bg-white rounded-lg shadow p-6 mb-6">
                <h2 className="font-semibold mb-2">Skill Gap Analysis</h2>
                <div className="flex items-center gap-2 mb-2">
                    <BarChart2 className="w-5 h-5 text-[#7c3aed]" />
                    <span className="text-gray-700">React: Intermediate (Recommended: Advanced)</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                    <BarChart2 className="w-5 h-5 text-[#7c3aed]" />
                    <span className="text-gray-700">Node.js: Beginner (Recommended: Intermediate)</span>
                </div>
            </section>
            {/* Career Path Visualization */}
            <section className="bg-white rounded-lg shadow p-6 mb-6">
                <h2 className="font-semibold mb-2">Career Path Visualization</h2>
                <div className="w-full h-32 bg-gradient-to-r from-[#f3f0ff] to-[#e0e7ff] rounded flex items-center justify-center text-gray-500">[Career Path Graph Placeholder]</div>
            </section>
            {/* Industry Insights & Learning Resources */}
            <section className="bg-white rounded-lg shadow p-6 mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h2 className="font-semibold mb-2">Industry Insights</h2>
                    <ul className="text-sm text-gray-700 space-y-1">
                        <li>Average salary for Frontend Intern: $5,000/mo</li>
                        <li>Top skills: React, TypeScript, UI/UX</li>
                        <li>Most in-demand: Data Science, Cloud</li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-semibold mb-2">Learning Resources</h2>
                    <ul className="text-sm text-blue-700 space-y-1">
                        <li><BookOpen className="inline w-4 h-4 mr-1" /> <a href="#" className="hover:underline">React Advanced Course</a></li>
                        <li><BookOpen className="inline w-4 h-4 mr-1" /> <a href="#" className="hover:underline">Node.js Bootcamp</a></li>
                    </ul>
                </div>
            </section>
            {/* Certification Suggestions & Mentor Matching */}
            <section className="bg-white rounded-lg shadow p-6 mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h2 className="font-semibold mb-2">Certification Pathways</h2>
                    <ul className="text-sm text-gray-700 space-y-1">
                        <li><Award className="inline w-4 h-4 mr-1 text-yellow-500" /> AWS Certified Cloud Practitioner</li>
                        <li><Award className="inline w-4 h-4 mr-1 text-yellow-500" /> Google Associate Cloud Engineer</li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-semibold mb-2">Mentor Matching</h2>
                    <ul className="text-sm text-gray-700 space-y-1">
                        <li><UserCheck className="inline w-4 h-4 mr-1 text-green-500" /> Sarah Lee (Frontend Mentor)</li>
                        <li><UserCheck className="inline w-4 h-4 mr-1 text-green-500" /> John Doe (Cloud Mentor)</li>
                    </ul>
                </div>
            </section>
            {/* Peer Success Stories */}
            <section className="bg-white rounded-lg shadow p-6 mb-6">
                <h2 className="font-semibold mb-2">Peer Success Stories</h2>
                <ul className="text-sm text-gray-700 space-y-1">
                    <li><Users className="inline w-4 h-4 mr-1 text-blue-500" /> Jane landed a Data Science internship at Google!</li>
                    <li><Users className="inline w-4 h-4 mr-1 text-blue-500" /> Mike became a Frontend Developer at Meta!</li>
                </ul>
            </section>
        </div>
    );
} 