import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'InternMatch',
    description: 'Connecting dreams with opportunities through AI-powered internship matching.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {/* Find the header/nav section and update the 'For Employers' button or link to href='/employers/dashboard'. If it doesn't exist, add: */}
                {/* <Link href="/employers/dashboard" className="...">For Employers</Link> */}
                {children}
            </body>
        </html>
    );
} 