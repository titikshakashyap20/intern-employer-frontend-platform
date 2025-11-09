import React from 'react';
import Navbar from '../components/Navbar';

export default function Contact() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-[#f5f6ff] to-[#fdf6fa] flex flex-col">
            <Navbar />
            <section className="flex-1 flex flex-col items-center justify-center pt-24 pb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-[#6a6aff] to-[#a259c6] bg-clip-text text-transparent">Contact</h1>
                <form className="bg-white/80 rounded-2xl shadow-lg p-8 w-full max-w-md flex flex-col gap-4 mt-6">
                    <input type="text" placeholder="Name" className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#a259c6]" required />
                    <input type="email" placeholder="Email" className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#a259c6]" required />
                    <textarea placeholder="Message" className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#a259c6] resize-none" rows={4} required />
                    <button type="submit" className="mt-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#6a6aff] to-[#a259c6] text-white font-semibold shadow-md hover:scale-105 transition-transform">Send Message</button>
                </form>
            </section>
            <footer className="bg-[#18181b] text-white py-8 mt-auto text-center text-sm">© 2024 InternMatch. All rights reserved.</footer>
        </main>
    );
} 