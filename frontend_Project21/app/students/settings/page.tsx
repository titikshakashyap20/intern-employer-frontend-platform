"use client";
import { Settings, User, Lock, Bell } from "lucide-react";

export default function SettingsPage() {
    return (
        <div className="max-w-5xl mx-auto py-8 space-y-8">
            <h1 className="text-2xl font-bold mb-4">Settings</h1>
            {/* Account Settings */}
            <section className="bg-white rounded-lg shadow p-6 mb-6">
                <h2 className="font-semibold mb-2 flex items-center gap-2"><User className="w-5 h-5 text-[#7c3aed]" /> Account</h2>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <span className="font-medium">Email:</span>
                        <span className="text-gray-700">sarah@student.com</span>
                        <button className="ml-auto px-2 py-1 rounded bg-[#7c3aed] text-white text-xs font-semibold hover:bg-[#6a6aff]">Change</button>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-medium">Password:</span>
                        <span className="text-gray-700">********</span>
                        <button className="ml-auto px-2 py-1 rounded bg-[#7c3aed] text-white text-xs font-semibold hover:bg-[#6a6aff]">Change</button>
                    </div>
                </div>
            </section>
            {/* Privacy Settings */}
            <section className="bg-white rounded-lg shadow p-6 mb-6">
                <h2 className="font-semibold mb-2 flex items-center gap-2"><Lock className="w-5 h-5 text-[#7c3aed]" /> Privacy</h2>
                <div className="flex flex-col gap-2">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" className="accent-[#7c3aed]" defaultChecked />
                        Public profile visible
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="checkbox" className="accent-[#7c3aed]" />
                        Allow employers to contact me
                    </label>
                </div>
            </section>
            {/* Notification Settings */}
            <section className="bg-white rounded-lg shadow p-6 mb-6">
                <h2 className="font-semibold mb-2 flex items-center gap-2"><Bell className="w-5 h-5 text-[#7c3aed]" /> Notifications</h2>
                <div className="flex flex-col gap-2">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" className="accent-[#7c3aed]" defaultChecked />
                        Email notifications
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="checkbox" className="accent-[#7c3aed]" defaultChecked />
                        In-app notifications
                    </label>
                </div>
            </section>
        </div>
    );
} 