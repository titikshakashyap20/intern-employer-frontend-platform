"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    User,
    Star,
    FileText,
    Briefcase,
    MessageSquare,
    CheckCircle,
    Settings,
    BarChart2,
} from "lucide-react";

const sidebarLinks = [
    { name: "Dashboard", icon: <BarChart2 className="w-5 h-5" />, href: "/students" },
    { name: "Profile", icon: <User className="w-5 h-5" />, href: "/students/profile" },
    { name: "Discover", icon: <Star className="w-5 h-5" />, href: "/students/discover" },
    { name: "Applications", icon: <FileText className="w-5 h-5" />, href: "/students/applications" },
    { name: "Career Path", icon: <Briefcase className="w-5 h-5" />, href: "/students/career-path" },
    { name: "Messages", icon: <MessageSquare className="w-5 h-5" />, href: "/students/messages" },
    { name: "Notifications", icon: <CheckCircle className="w-5 h-5" />, href: "/students/notifications" },
    { name: "Settings", icon: <Settings className="w-5 h-5" />, href: "/students/settings" },
];

export default function StudentsLayout({ children }: { children: React.ReactNode }) {
    const rawPathname = usePathname();
    const pathname = rawPathname || "";
    return (
        <div className="flex min-h-screen bg-gradient-to-tr from-[#f3f0ff] to-[#e0e7ff]">
            {/* Sidebar */}
            <aside className="w-64 min-h-screen bg-white/90 border-r border-gray-100 shadow-lg flex flex-col px-6 py-8 sticky top-0 z-40">
                <Link href="/" className="flex items-center gap-2 mb-10">
                    <div className="w-10 h-10 bg-gradient-to-tr from-[#6a6aff] to-[#a259c6] rounded-lg flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">IM</span>
                    </div>
                    <span className="ml-2 text-xl font-extrabold text-[#7c3aed] tracking-tight">InternMatch</span>
                </Link>
                <nav className="flex flex-col gap-1">
                    {sidebarLinks.map((link) => {
                        const isActive =
                            link.href === "/students"
                                ? pathname === "/students"
                                : pathname.startsWith(link.href);
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`flex items-center gap-3 px-4 py-2 rounded-lg font-medium text-gray-700 hover:bg-[#f3f0ff] transition-all duration-150 ${isActive ? "bg-[#f3f0ff] text-[#7c3aed] font-semibold shadow" : ""
                                    }`}
                            >
                                {link.icon}
                                <span>{link.name}</span>
                            </Link>
                        );
                    })}
                </nav>
                <div className="mt-auto pt-8 text-xs text-gray-400 text-center">
                    &copy; {new Date().getFullYear()} InternMatch
                </div>
            </aside>
            {/* Main Content */}
            <main className="flex-1 px-4 md:px-10 py-8 overflow-y-auto">
                {children}
            </main>
        </div>
    );
} 