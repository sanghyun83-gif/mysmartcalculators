"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Truck, Star, ArrowLeft } from "lucide-react";

export default function TruckFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    // Dynamic Breadcrumbs & Nav logic
    const isCalculator = pathname.includes("/calculator");
    const isArchive = pathname.includes("/settlements") || pathname.includes("/legal-guide") || pathname.includes("/regulations");
    const isHub = pathname === "/truck-accident";

    // S-Class Theme DNA: Dynamic Color Injection
    const themeStyles = {
        '--accent-rgb': '239, 68, 68',      // Red-500
        '--accent-glow': 'rgba(239, 68, 68, 0.15)',
        '--accent-border': 'rgba(239, 68, 68, 0.2)',
    } as React.CSSProperties;

    return (
        <div
            className="min-h-screen bg-[#0a0f1a] text-white selection:bg-red-500/30"
            style={themeStyles}
        >
            {/* 1. Global Mini-Bar (AdSense Compliance) */}
            <div className="fixed top-0 left-0 right-0 z-[120] bg-black text-white/40 h-[30px] border-b border-white/5 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between text-[9px] font-black uppercase tracking-widest">
                    <div className="flex items-center gap-4">
                        <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                            Home <ChevronRight className="w-2 h-2" />
                        </Link>
                        <span className="opacity-30">|</span>
                        <span>Legal Division</span>
                    </div>
                    <div className="hidden md:flex items-center gap-4">
                        <span>Data-Driven Audits</span>
                        <span className="opacity-30"></span>
                        <span>Expert Analysis</span>
                    </div>
                </div>
            </div>

            {/* 2. Persistent S-Class Header (Immortal Architecture) */}
            <header className="fixed top-[30px] left-0 right-0 z-[110] bg-transparent backdrop-blur-md border-b border-white/5 py-4">
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-3">
                            <Link href="/truck-accident" className="p-2 bg-red-500 rounded-lg shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:scale-105 transition-transform">
                                <Truck className="w-5 h-5 text-white" />
                            </Link>
                            <div className="flex flex-col">
                                <Link href="/truck-accident" className="text-xl font-black tracking-tighter uppercase leading-none hover:text-red-500 transition-colors">
                                    TruckMaster AI
                                </Link>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="text-[7px] font-bold text-slate-500 uppercase tracking-widest leading-none">Intelligence Unit</span>
                                    <div className="text-[7px] font-black text-slate-600 uppercase tracking-widest opacity-40 hidden sm:flex items-center gap-1">
                                        <span>Home</span>
                                        <span className="opacity-40">&gt;</span>
                                        <span className={isHub ? "text-white" : "hover:text-white transition-colors"}>
                                            <Link href="/truck-accident">Hub</Link>
                                        </span>
                                        {!isHub && (
                                            <>
                                                <span className="opacity-40">&gt;</span>
                                                <span className="text-white italic">
                                                    {isCalculator ? "Auditor" : "Archive"}
                                                </span>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Desktop Nav Links */}
                        <div className="hidden lg:flex items-center gap-6 text-[10px] font-black text-slate-500 uppercase tracking-widest border-l border-white/10 pl-6 h-8">
                            <Link href="/truck-accident#stats" className="hover:text-white transition-colors">BENCHMARKS</Link>
                            <Link href="/truck-accident#rules" className="hover:text-white transition-colors">LEGAL FRAMEWORK</Link>
                            <Link href="/truck-accident#trinity" className="hover:text-white transition-colors">CASE INTELLIGENCE</Link>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 border border-amber-500/20 text-[10px] font-black text-amber-500 uppercase tracking-widest shadow-[0_0_15px_rgba(245,158,11,0.1)]">
                            <Star className="w-3 h-3 fill-current" />
                            <span>4.9/5 TrustScore</span>
                        </div>
                        {!isHub && (
                            <Link href="/truck-accident" className="flex items-center gap-2 text-[10px] font-black text-white px-4 py-2 bg-white/5 rounded-xl hover:bg-white/10 transition-all uppercase tracking-widest border border-white/10">
                                <ArrowLeft className="w-3 h-3" /> Back
                            </Link>
                        )}
                    </div>
                </div>
            </header>

            {/* 3. Main Content Wrapper */}
            <div className="flex flex-col min-h-screen">
                <main className="flex-grow pt-[100px]">
                    {children}
                </main>

                {/* Unified Flagship Footer with Mandatory Jurisdiction */}
                <footer className="py-20 bg-black border-t border-white/5">
                    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-slate-800 rounded-lg">
                                    <Truck className="w-4 h-4 text-red-500" />
                                </div>
                                <span className="text-sm font-black tracking-tighter uppercase">TruckMaster AI</span>
                            </div>
                            <p className="text-xs text-slate-500 leading-relaxed font-bold uppercase tracking-widest italic max-w-sm">
                                Mandatory Jurisdiction Notice: This system is governed under the Laws of the Republic of Korea.
                                Jurisdiction: <span className="text-white">Seoul Central District Court.</span>
                            </p>
                        </div>
                        <div className="md:text-right">
                            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 rounded-2xl border border-white/10 group">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-slate-800 flex items-center justify-center text-[8px] font-black uppercase text-red-500">DA</div>
                                    ))}
                                </div>
                                <div className="text-left">
                                    <div className="text-[10px] font-bold text-slate-400 leading-none">Verified by</div>
                                    <div className="text-xs font-black text-white uppercase tracking-widest group-hover:text-red-500 transition-colors">Data Analyst Expert Team</div>
                                </div>
                            </div>
                            <p className="text-[10px] text-slate-600 mt-6 uppercase tracking-[0.2em] font-bold italic">
                                Strict Compliance with Legal Disclaimer Guidelines 2026
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
