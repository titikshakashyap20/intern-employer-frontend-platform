"use client";
import React from 'react';
import Navbar from './components/Navbar';
import { FaUserFriends, FaBuilding, FaBullhorn, FaTrophy, FaBrain, FaFileAlt, FaChartLine, FaTwitter, FaLinkedin, FaInstagram, FaPaperPlane } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();
    // Smooth scroll handler
    const handleScrollToCTA = (e: React.MouseEvent) => {
        e.preventDefault();
        const cta = document.getElementById('cta-section');
        if (cta) cta.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <main className="min-h-screen bg-gradient-to-br from-[#f0f4ff] via-[#f7f0ff] to-[#eaf6ff] flex flex-col font-sans">
            <Navbar />
            {/* Hero Section */}
            <section className="flex flex-col md:flex-row items-center justify-between gap-8 px-8 pt-20 pb-12 max-w-7xl mx-auto w-full">
                <div className="flex-1 max-w-xl">
                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
                        <span className="block text-gray-900">AI-<span className="bg-gradient-to-r from-[#6a6aff] to-[#3b82f6] bg-clip-text text-transparent">Powered</span></span>
                        <span className="block bg-gradient-to-r from-[#3b82f6] to-[#a259c6] bg-clip-text text-transparent">Internship</span>
                        <span className="block text-gray-900">Matching</span>
                    </h1>
                    <div className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-[#6a6aff] to-[#a259c6] bg-clip-text text-transparent">Connect Dreams with Opportunities</div>
                    <p className="text-lg text-gray-600 mb-8">The future of internship matching is here. Our AI-powered platform connects talented students with forward-thinking employers, creating perfect matches that launch careers.</p>
                    <div className="flex flex-wrap gap-4 mb-8 justify-center md:justify-start">
                        <button type="button" onClick={() => router.push('/signup')} className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#6a6aff] to-[#a259c6] text-white font-semibold shadow-lg hover:scale-105 transition-transform">
                            <FaPaperPlane className="text-lg" /> Start Your Journey
                        </button>
                        <button type="button" onClick={handleScrollToCTA} className="px-6 py-3 rounded-lg bg-white border border-[#a259c6] text-[#a259c6] font-semibold shadow hover:bg-[#f5f6ff] transition">Explore Opportunities</button>
                    </div>
                    <div className="flex gap-8 text-center">
                        <div>
                            <div className="text-2xl font-bold text-[#6a6aff]">50K+</div>
                            <div className="text-xs text-gray-500">Active Students</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-[#a259c6]">2K+</div>
                            <div className="text-xs text-gray-500">Partner Companies</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-[#3b82f6]">95%</div>
                            <div className="text-xs text-gray-500">Match Success</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-[#22c55e]">500+</div>
                            <div className="text-xs text-gray-500">Universities</div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex justify-center">
                    <img src="/hero-internship.png" alt="Internship Matching" className="w-full max-w-md rounded-2xl shadow-xl" />
                </div>
            </section>
            {/* Features Section */}
            <section className="py-16 bg-gradient-to-b from-white/80 to-[#f0f4ff]">
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">Powered by <span className="bg-gradient-to-r from-[#6a6aff] to-[#a259c6] bg-clip-text text-transparent">Advanced AI</span></h2>
                    <p className="text-center text-gray-600 mb-12">Our intelligent platform uses cutting-edge technology to create perfect matches between students and employers.</p>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="bg-[#f5f6ff] rounded-2xl p-6 flex flex-col items-center shadow hover:shadow-lg transition">
                            <FaBrain className="text-3xl text-[#6a6aff] mb-2" />
                            <h3 className="font-semibold mb-1">AI Matching</h3>
                            <p className="text-xs text-gray-500 text-center">Advanced algorithms analyze skills, preferences, and goals for perfect matches.</p>
                        </div>
                        <div className="bg-[#fdf6fa] rounded-2xl p-6 flex flex-col items-center shadow hover:shadow-lg transition">
                            <FaFileAlt className="text-3xl text-[#a259c6] mb-2" />
                            <h3 className="font-semibold mb-1">Resume Parsing</h3>
                            <p className="text-xs text-gray-500 text-center">Intelligent resume analysis extracts key skills and experiences automatically.</p>
                        </div>
                        <div className="bg-[#eafff6] rounded-2xl p-6 flex flex-col items-center shadow hover:shadow-lg transition">
                            <FaChartLine className="text-3xl text-[#3b82f6] mb-2" />
                            <h3 className="font-semibold mb-1">Career Prediction</h3>
                            <p className="text-xs text-gray-500 text-center">Predict career paths and skill gaps based on student profiles.</p>
                        </div>
                        <div className="bg-[#fff6f6] rounded-2xl p-6 flex flex-col items-center shadow hover:shadow-lg transition">
                            <FaBullhorn className="text-3xl text-[#ff6a6a] mb-2" />
                            <h3 className="font-semibold mb-1">AI Screening</h3>
                            <p className="text-xs text-gray-500 text-center">Advanced interview pre-screening for both students and employers.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* How It Works Section */}
            <section className="py-16 bg-gradient-to-b from-[#f0f4ff] to-white">
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">How It Works</h2>
                    <p className="text-center text-gray-600 mb-12">Simple steps to find your perfect internship match</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#6a6aff] to-[#a259c6] flex items-center justify-center mb-4">
                                <FaUserFriends className="text-2xl text-white" />
                            </div>
                            <h4 className="font-semibold mb-1">Create Profile</h4>
                            <p className="text-xs text-gray-500 text-center">Sign up and add your resume, skills, education, and career preferences.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#3b82f6] to-[#6a6aff] flex items-center justify-center mb-4">
                                <FaBrain className="text-2xl text-white" />
                            </div>
                            <h4 className="font-semibold mb-1">AI Matching</h4>
                            <p className="text-xs text-gray-500 text-center">Our AI finds the best internships based on your skills and interests.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#a259c6] to-[#3b82f6] flex items-center justify-center mb-4">
                                <FaTrophy className="text-2xl text-white" />
                            </div>
                            <h4 className="font-semibold mb-1">Get Hired</h4>
                            <p className="text-xs text-gray-500 text-center">Connect with employers, complete interviews, and land your dream internship.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Call to Action Section */}
            <section id="cta-section" className="py-16 bg-gradient-to-r from-[#6a6aff] to-[#a259c6] text-white text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Perfect Match?</h2>
                <p className="mb-8 max-w-2xl mx-auto">Join thousands of students and employers who trust InternMatch for their career journey.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <button
                        className="px-8 py-4 rounded-lg bg-white text-[#a259c6] font-bold shadow-lg hover:scale-105 transition-transform"
                        onClick={() => router.push('/signup')}
                    >
                        Join as Student
                    </button>
                    <button
                        className="px-8 py-4 rounded-lg bg-[#7c3aed] font-bold shadow-lg hover:scale-105 transition-transform"
                        onClick={() => router.push('/signup')}
                    >
                        Join as Employer
                    </button>
                </div>
            </section>
            {/* Footer */}
            <footer className="bg-[#181c27] text-white py-12 mt-auto">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start px-8 gap-12">
                    {/* Logo/desc/social */}
                    <div className="flex-1 min-w-[220px] mb-8 md:mb-0">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-tr from-[#6a6aff] to-[#a259c6] rounded-lg flex items-center justify-center">
                                <span className="text-white text-2xl font-bold">IM</span>
                            </div>
                            <span className="ml-2 text-xl font-bold">InternMatch</span>
                        </div>
                        <p className="text-gray-400 text-sm mb-4">Connecting dreams with opportunities through AI-powered internship matching. Building the future of career development.</p>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white"><FaLinkedin size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size={20} /></a>
                        </div>
                    </div>
                    {/* Platform links */}
                    <div className="flex-1 min-w-[160px] mb-8 md:mb-0">
                        <h4 className="font-bold mb-2">Platform</h4>
                        <ul className="text-gray-400 space-y-1 text-sm">
                            <li><a href="#students" className="hover:text-white">For Students</a></li>
                            <li><a href="#employers" className="hover:text-white">For Employers</a></li>
                            <li><a href="#" className="hover:text-white">For Universities</a></li>
                            <li><a href="#" className="hover:text-white">Pricing</a></li>
                        </ul>
                    </div>
                    {/* Company links */}
                    <div className="flex-1 min-w-[160px]">
                        <h4 className="font-bold mb-2">Company</h4>
                        <ul className="text-gray-400 space-y-1 text-sm">
                            <li><a href="#about" className="hover:text-white">About Us</a></li>
                            <li><a href="#" className="hover:text-white">Careers</a></li>
                            <li><a href="#" className="hover:text-white">Contact</a></li>
                            <li><a href="#" className="hover:text-white">Privacy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="text-center text-gray-500 mt-8 text-xs border-t border-[#23283a] pt-6">
                    © 2024 InternMatch. All rights reserved. Empowering careers through AI.
                </div>
            </footer>
        </main>
    );
}
