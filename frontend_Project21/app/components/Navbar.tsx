"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="flex items-center justify-between px-8 py-4 bg-white/80 backdrop-blur border-b border-gray-100 sticky top-0 z-50 shadow-sm">
            <Link href="/" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-tr from-[#6a6aff] to-[#a259c6] rounded-lg flex items-center justify-center">
                    {/* Placeholder for logo icon */}
                    <span className="text-white text-2xl font-bold">IM</span>
                </div>
                <span className="ml-2 text-xl font-extrabold text-[#7c3aed] tracking-tight">InternMatch</span>
            </Link>
            <div className="hidden md:flex gap-8 text-gray-700 font-medium">
                <Link href="/" className="hover:text-[#7c3aed] transition">Home</Link>
                <Link href="#features" className="hover:text-[#7c3aed] transition">Features</Link>
                <Link href="/students" className="hover:text-[#7c3aed] transition">For Students</Link>
                <Link href="/employers/dashboard" className="hover:text-[#7c3aed] transition">For Employers</Link>
                <Link href="#about" className="hover:text-[#7c3aed] transition">About</Link>
            </div>
            <div className="flex items-center gap-4">
                {/* Theme toggle placeholder */}
                <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 transition" aria-label="Toggle theme">
                    <span className="text-xl">🌙</span>
                </button>
                <Link href="/signin" className="text-[#a259c6] font-semibold hover:underline">Sign In</Link>
                <Link href="/signup" className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#6a6aff] to-[#3b82f6] text-white font-semibold shadow-md hover:scale-105 transition-transform">Get Started</Link>
                <button className="md:hidden ml-2 p-2 rounded hover:bg-gray-200 transition" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
                    <span className="text-2xl">☰</span>
                </button>
            </div>
            {/* Mobile menu */}
            {menuOpen && (
                <div className="absolute top-20 right-8 bg-white rounded-lg shadow-lg p-6 flex flex-col gap-4 md:hidden z-50 border border-gray-100">
                    <Link href="/" className="hover:text-[#7c3aed] transition" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link href="#features" className="hover:text-[#7c3aed] transition" onClick={() => setMenuOpen(false)}>Features</Link>
                    <Link href="/students" className="hover:text-[#7c3aed] transition" onClick={() => setMenuOpen(false)}>For Students</Link>
                    <Link href="/employers/dashboard" className="hover:text-[#7c3aed] transition" onClick={() => setMenuOpen(false)}>For Employers</Link>
                    <Link href="#about" className="hover:text-[#7c3aed] transition" onClick={() => setMenuOpen(false)}>About</Link>
                    <Link href="/signin" className="text-[#a259c6] font-semibold hover:underline" onClick={() => setMenuOpen(false)}>Sign In</Link>
                    <Link href="/signup" className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#6a6aff] to-[#3b82f6] text-white font-semibold shadow-md hover:scale-105 transition-transform" onClick={() => setMenuOpen(false)}>Get Started</Link>
                </div>
            )}
        </nav>
    );
} 