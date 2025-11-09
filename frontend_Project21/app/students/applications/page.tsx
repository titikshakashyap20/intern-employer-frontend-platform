"use client";
import { FileText, Calendar, BarChart2, CheckCircle, Clock } from "lucide-react";

const applications = [
    { id: 1, title: "UX Design Intern", company: "Creative Agency", status: "Under Review", date: "2024-06-01", interview: null },
    { id: 2, title: "Software Engineer Intern", company: "StartupXYZ", status: "Interview Scheduled", date: "2024-06-03", interview: "2024-06-10 2:00 PM" },
];

export default function ApplicationsPage() {
    return (
        <div className="max-w-5xl mx-auto py-8 space-y-8">
            <h1 className="text-2xl font-bold mb-4">My Applications</h1>
            {/* Application Status & History */}
            <section className="bg-white rounded-lg shadow p-6 mb-6">
                <h2 className="font-semibold mb-2">Application Status</h2>
                <ul className="space-y-4">
                    {applications.map(app => (
                        <li key={app.id} className="flex flex-col md:flex-row md:items-center justify-between bg-gray-50 rounded-lg p-4 border border-gray-100">
                            <div>
                                <div className="font-semibold text-gray-800">{app.title}</div>
                                <div className="text-gray-500 text-sm">{app.company}</div>
                                <div className="text-xs text-gray-400">Applied: {app.date}</div>
                            </div>
                            <div className="flex items-center gap-2 mt-2 md:mt-0">
                                <span className={`text-xs font-semibold px-2 py-1 rounded ${app.status === "Under Review" ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"}`}>{app.status}</span>
                                {app.interview && (
                                    <span className="flex items-center gap-1 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded"><Calendar className="w-4 h-4" /> {app.interview}</span>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
            {/* Analytics & Reminders */}
            <section className="bg-white rounded-lg shadow p-6 mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h2 className="font-semibold mb-2">Application Analytics</h2>
                    <div className="flex items-center gap-2 mb-2">
                        <BarChart2 className="w-5 h-5 text-[#7c3aed]" />
                        <span className="text-gray-700">12 Applications, 3 Interviews, 1 Offer</span>
                    </div>
                </div>
                <div>
                    <h2 className="font-semibold mb-2">Reminders</h2>
                    <ul className="space-y-1">
                        <li className="flex items-center gap-2 text-xs"><Clock className="w-4 h-4 text-yellow-500" /> Follow up with Creative Agency (due in 2 days)</li>
                        <li className="flex items-center gap-2 text-xs"><Clock className="w-4 h-4 text-blue-500" /> Interview with StartupXYZ (2024-06-10 2:00 PM)</li>
                    </ul>
                </div>
            </section>
            {/* Document Management */}
            <section className="bg-white rounded-lg shadow p-6 mb-6">
                <h2 className="font-semibold mb-2">Document Management</h2>
                <div className="flex items-center gap-4">
                    <FileText className="w-8 h-8 text-[#7c3aed]" />
                    <span className="text-gray-700">resume_sarah.pdf</span>
                    <button className="ml-auto px-3 py-1 rounded bg-[#7c3aed] text-white text-xs font-semibold hover:bg-[#6a6aff]">Upload New</button>
                </div>
            </section>
        </div>
    );
} 