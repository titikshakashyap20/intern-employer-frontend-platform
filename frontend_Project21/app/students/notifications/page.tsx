"use client";
import { Bell, Settings } from "lucide-react";

export default function NotificationsPage() {
    return (
        <div className="max-w-5xl mx-auto py-8 space-y-8">
            <h1 className="text-2xl font-bold mb-4">Notifications</h1>
            {/* Notification Center */}
            <section className="bg-white rounded-lg shadow p-6 mb-6">
                <h2 className="font-semibold mb-2 flex items-center gap-2"><Bell className="w-5 h-5 text-[#7c3aed]" /> Notification Center</h2>
                <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                        Interview scheduled with TechCorp (Tomorrow, 2:00 PM)
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        New internship match: Data Science Intern at DataFlow Solutions
                    </li>
                </ul>
            </section>
            {/* Preferences */}
            <section className="bg-white rounded-lg shadow p-6 mb-6">
                <h2 className="font-semibold mb-2 flex items-center gap-2"><Settings className="w-5 h-5 text-[#7c3aed]" /> Preferences</h2>
                <div className="flex flex-col gap-4">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" className="accent-[#7c3aed]" defaultChecked />
                        Email notifications
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="checkbox" className="accent-[#7c3aed]" defaultChecked />
                        In-app notifications
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="checkbox" className="accent-[#7c3aed]" />
                        SMS alerts
                    </label>
                </div>
            </section>
        </div>
    );
} 