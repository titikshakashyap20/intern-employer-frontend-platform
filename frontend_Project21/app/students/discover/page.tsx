"use client";
import { useState } from "react";
import { Star, Bookmark, Search, MapPin, Filter, CheckCircle } from "lucide-react";

const jobs = [
    { id: 1, title: "Frontend Developer Intern", company: "TechCorp Inc.", location: "San Francisco, CA", match: 95, bookmarked: true },
    { id: 2, title: "Data Science Intern", company: "DataFlow Solutions", location: "Remote", match: 88, bookmarked: false },
];

export default function DiscoverPage() {
    const [search, setSearch] = useState("");
    return (
        <div className="max-w-5xl mx-auto py-8 space-y-8">
            <h1 className="text-2xl font-bold mb-4">Discover Internships</h1>
            {/* Search & Filters */}
            <section className="bg-white rounded-lg shadow p-6 mb-6 flex flex-col md:flex-row gap-4 items-center">
                <div className="flex-1 flex items-center gap-2">
                    <Search className="w-5 h-5 text-gray-400" />
                    <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search internships, roles, companies..." className="w-full px-3 py-2 rounded border border-gray-200 focus:outline-none" />
                </div>
                <button className="flex items-center gap-2 px-3 py-2 rounded bg-gray-100 hover:bg-gray-200"><Filter className="w-4 h-4" /> Filters</button>
                <button className="flex items-center gap-2 px-3 py-2 rounded bg-gray-100 hover:bg-gray-200"><MapPin className="w-4 h-4" /> Location</button>
            </section>
            {/* Recommendations */}
            <section className="bg-white rounded-lg shadow p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                    <span className="font-semibold">Personalized Recommendations</span>
                    <span className="text-xs text-gray-500">Readiness Score: <span className="text-[#7c3aed] font-bold">92</span></span>
                </div>
                <ul className="space-y-4">
                    {jobs.map(job => (
                        <li key={job.id} className="flex flex-col md:flex-row md:items-center justify-between bg-gray-50 rounded-lg p-4 border border-gray-100">
                            <div>
                                <div className="font-semibold text-gray-800">{job.title}</div>
                                <div className="text-gray-500 text-sm">{job.company} &bull; {job.location}</div>
                                <div className="text-xs text-green-600 font-medium mt-1 flex items-center gap-1"><CheckCircle className="w-4 h-4" /> {job.match}% Match</div>
                            </div>
                            <div className="flex items-center gap-2 mt-2 md:mt-0">
                                <button className="px-3 py-1 rounded bg-[#7c3aed] text-white text-xs font-semibold hover:bg-[#6a6aff]">Quick Apply</button>
                                <button className={`p-2 rounded-full ${job.bookmarked ? "bg-[#f3f0ff] text-[#7c3aed]" : "bg-gray-100 text-gray-400"}`}><Bookmark className="w-4 h-4" /></button>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
            {/* Saved Searches */}
            <section className="bg-white rounded-lg shadow p-6 mb-6">
                <h2 className="font-semibold mb-2">Saved Searches</h2>
                <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400" /> Frontend Internships in California
                    </li>
                    <li className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400" /> Data Science Remote Roles
                    </li>
                </ul>
            </section>
        </div>
    );
} 