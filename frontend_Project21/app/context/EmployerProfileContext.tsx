"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface ProfileData {
    companyName: string;
    industry: string;
    description: string;
    skillsInterest: string[];
    teamMembers: { name: string; position: string; email: string }[];
}

interface ProfileContextType {
    profile: ProfileData | null;
    updateProfile: (data: ProfileData) => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const useProfile = () => {
    const context = useContext(ProfileContext);
    if (!context) {
        // Return a mock implementation if the context is not available
        return {
            profile: {
                companyName: 'Mock Company',
                industry: 'Technology',
                description: 'This is a mock company description for placeholder purposes.',
                skillsInterest: ['React', 'Node.js', 'TypeScript'],
                teamMembers: [
                    { name: 'John Doe', position: 'Hiring Manager', email: 'john@mock.com' },
                    { name: 'Jane Smith', position: 'Lead Recruiter', email: 'jane@mock.com' }
                ],
            },
            updateProfile: (data: ProfileData) => {
                console.log("Updated profile data:", data);
            }
        };
    }
    return context;
};

export const ProfileProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [profile, setProfile] = useState<ProfileData>({
        companyName: 'Acme Inc.',
        industry: 'Software Development',
        description: 'A leading provider of innovative software solutions.',
        skillsInterest: ['React', 'Next.js', 'GraphQL'],
        teamMembers: [
            { name: 'John Doe', position: 'CEO', email: 'john.doe@acme.com' },
            { name: 'Jane Smith', position: 'CTO', email: 'jane.smith@acme.com' },
        ],
    });

    const updateProfile = (data: ProfileData) => {
        setProfile(data);
    };

    const value = { profile, updateProfile };

    return (
        <ProfileContext.Provider value={value}>
            {children}
        </ProfileContext.Provider>
    );
}; 