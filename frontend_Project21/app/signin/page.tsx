import React from 'react';
import Navbar from '../components/Navbar';
import { FaGoogle, FaLinkedin } from 'react-icons/fa';

export default function SignIn() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-[#f5f6ff] to-[#fdf6fa] flex flex-col">
            <Navbar />
            <section className="flex-1 flex flex-col items-center justify-center py-16">
                <div className="bg-white/80 rounded-2xl shadow-lg p-8 w-full max-w-md">
                    <h1 className="text-3xl font-bold mb-6 text-center text-[#7c3aed]">Sign In</h1>
                    <div className="flex flex-col gap-3 mb-6">
                        <button className="flex items-center justify-center gap-3 px-6 py-3 rounded-lg border border-gray-200 bg-white text-gray-700 font-semibold shadow hover:bg-gray-50 transition">
                            <FaGoogle className="text-xl text-[#ea4335]" /> Sign in with Google
                        </button>
                        <button className="flex items-center justify-center gap-3 px-6 py-3 rounded-lg border border-gray-200 bg-white text-gray-700 font-semibold shadow hover:bg-gray-50 transition">
                            <FaLinkedin className="text-xl text-[#0a66c2]" /> Sign in with LinkedIn
                        </button>
                    </div>
                    <form className="flex flex-col gap-4">
                        <input type="email" placeholder="Email" className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#a259c6]" required />
                        <input type="password" placeholder="Password" className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#a259c6]" required />
                        <button type="submit" className="mt-4 px-6 py-3 rounded-lg bg-gradient-to-r from-[#6a6aff] to-[#a259c6] text-white font-semibold shadow-md hover:scale-105 transition-transform">Sign In</button>
                    </form>
                    <p className="text-center text-gray-500 mt-4">Don't have an account? <a href="/signup" className="text-[#a259c6] hover:underline">Sign Up</a></p>
                </div>
            </section>
            <footer className="bg-[#18181b] text-white py-8 mt-auto text-center text-sm">© 2024 InternMatch. All rights reserved.</footer>
        </main>
    );
} 