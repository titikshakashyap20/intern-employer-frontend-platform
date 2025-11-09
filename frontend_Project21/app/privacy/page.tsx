import React from 'react';
import Navbar from '../components/Navbar';

export default function Privacy() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-[#f5f6ff] to-[#fdf6fa] flex flex-col">
            <Navbar />
            <section className="flex-1 flex flex-col items-center justify-center pt-24 pb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-[#6a6aff] to-[#a259c6] bg-clip-text text-transparent">Privacy Policy</h1>
                <p className="max-w-2xl mx-auto text-lg text-gray-500 mb-10 text-center">Our privacy policy will be available soon. We are committed to protecting your data and privacy.</p>
            </section>
            <footer className="bg-[#18181b] text-white py-8 mt-auto text-center text-sm">© 2024 InternMatch. All rights reserved.</footer>
        </main>
    );
} 