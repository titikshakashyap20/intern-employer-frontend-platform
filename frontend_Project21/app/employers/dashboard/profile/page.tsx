"use client";
import React, { useState, createContext, useContext } from 'react';
import { Edit, CheckCircle, Mail, Linkedin } from 'lucide-react';

// --- Mock Profile Context ---
interface ProfileData {
    companyName: string;
    industry: string;
    description: string;
    skillsInterest: string[];
    teamMembers: { name: string; position: string; email: string }[];
}

const mockProfile: ProfileData = {
    companyName: 'InternMatch Inc.',
    industry: 'Technology',
    description: 'The leading platform for connecting students with internships.',
    skillsInterest: ['React', 'Node.js', 'TypeScript', 'Next.js'],
    teamMembers: [
        { name: 'John Recruiter', position: 'Hiring Manager', email: 'john@internmatch.com' },
        { name: 'Jane HR', position: 'Lead Recruiter', email: 'jane@internmatch.com' }
    ],
};

const ProfileContext = createContext<{ profile: ProfileData; updateProfile: (data: ProfileData) => void; } | undefined>(undefined);

const useProfile = () => {
    const context = useContext(ProfileContext);
    if (!context) {
        throw new Error("useProfile must be used within a ProfileProvider");
    }
    return context;
};
// --- End Mock Profile Context ---


const CompanyProfileContent: React.FC = () => {
    const { profile, updateProfile } = useProfile();
    const [editing, setEditing] = useState(false);
    const [form, setForm] = useState<ProfileData>(profile);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        updateProfile(form);
        setEditing(false);
    };

    return (
        <div className="max-w-4xl mx-auto py-8">
            <div className="bg-white rounded-lg shadow p-6 mb-6">
                <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-900">Profile Completion</span>
                    <span className="text-[#7c3aed] font-semibold">75% Complete</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#7c3aed] h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6 mb-6">
                <div className="mb-4 font-semibold text-gray-900">Company Verification</div>
                <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                        <Linkedin className="h-5 w-5 text-blue-600" />
                        <span>LinkedIn Verification</span>
                        <button className="ml-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">
                            Connect
                        </button>
                    </div>
                    <div className="flex items-center gap-2">
                        <Mail className="h-5 w-5 text-gray-600" />
                        <span>Business Email Verification</span>
                        <span className="ml-2 px-3 py-1 bg-gray-100 text-gray-600 rounded text-sm flex items-center gap-1">
                            <CheckCircle className="h-4 w-4 text-green-500" /> Verified
                        </span>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                    <div className="font-semibold text-gray-900">Company Information</div>
                    <button onClick={() => setEditing(!editing)} className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md border border-gray-300 hover:bg-gray-50">
                        <Edit className="h-4 w-4" /> {editing ? 'Cancel' : 'Edit'}
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                        <input
                            name="companyName"
                            value={form.companyName || ''}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            disabled={!editing}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Industry</label>
                        <input
                            name="industry"
                            value={form.industry || ''}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            disabled={!editing}
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company Description</label>
                    <textarea
                        name="description"
                        value={form.description || ''}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        rows={3}
                        disabled={!editing}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Technology Stack</label>
                    <input
                        name="skillsInterest"
                        value={Array.isArray(form.skillsInterest) ? form.skillsInterest.join(', ') : form.skillsInterest || ''}
                        onChange={e => setForm({ ...form, skillsInterest: e.target.value.split(',').map((s: string) => s.trim()) })}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        disabled={!editing}
                        placeholder="e.g. React, Node.js, Python"
                    />
                </div>
                {editing && (
                    <div className="flex justify-end">
                        <button onClick={handleSave} className="px-6 py-2 bg-[#7c3aed] text-white rounded-md hover:bg-[#6a6aff]">Save</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default function CompanyProfilePage() {
    const [profile, setProfile] = useState<ProfileData>(mockProfile);

    const updateProfile = (data: ProfileData) => {
        setProfile(data);
        console.log("Updated profile data:", data);
    };

    return (
        <ProfileContext.Provider value={{ profile, updateProfile }}>
            <CompanyProfileContent />
        </ProfileContext.Provider>
    )
} 