import React from 'react';
import Navbar from '../components/Navbar';

export default function ForEmployers() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-[#f5f6ff] to-[#fdf6fa] flex flex-col">
            <Navbar />
            <section className="flex-1 flex flex-col items-center justify-center pt-24 pb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-[#6a6aff] to-[#a259c6] bg-clip-text text-transparent">For Employers</h1>
                <p className="max-w-2xl mx-auto text-lg text-gray-500 mb-10 text-center">Find top student talent for your company. Our AI-powered platform matches you with candidates who are ready to make an impact.</p>
                <div className="flex flex-wrap justify-center gap-8 mb-12">
                    <div className="bg-white/80 rounded-2xl p-6 w-72 shadow-lg flex flex-col items-center">
                        <span className="text-3xl mb-2">🔍</span>
                        <h3 className="font-bold mb-1">Smart Search</h3>
                        <p className="text-gray-500 text-center">Quickly find candidates that match your requirements and company culture.</p>
                    </div>
                    <div className="bg-white/80 rounded-2xl p-6 w-72 shadow-lg flex flex-col items-center">
                        <span className="text-3xl mb-2">🤖</span>
                        <h3 className="font-bold mb-1">AI Matching</h3>
                        <p className="text-gray-500 text-center">Leverage AI to connect with students who are the best fit for your roles.</p>
                    </div>
                    <div className="bg-white/80 rounded-2xl p-6 w-72 shadow-lg flex flex-col items-center">
                        <span className="text-3xl mb-2">📊</span>
                        <h3 className="font-bold mb-1">Analytics</h3>
                        <p className="text-gray-500 text-center">Gain insights into your hiring process and improve your talent pipeline.</p>
                    </div>
                </div>
                <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#6a6aff] to-[#a259c6] text-white font-semibold shadow-lg hover:scale-105 transition-transform">Post an Internship</button>
            </section>
            <footer className="bg-[#18181b] text-white py-8 mt-auto text-center text-sm">© 2024 InternMatch. All rights reserved.</footer>
        </main>
    );
} 