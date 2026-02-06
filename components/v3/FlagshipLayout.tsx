"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    ChevronRight, Star, ArrowLeft, LucideIcon,
    Activity, Home, Truck, Gavel, TrendingUp, Car, Shield,
    Calculator, DollarSign, Scale, Building, PiggyBank,
    Coins, FileCheck, Landmark, Briefcase, Syringe, Heart, Percent, PawPrint, Banknote, Leaf, Flame
} from "lucide-react";


import { getSClassIcon } from "@/lib/registry/icons";
import { SITE_CONFIG } from "@/lib/site-config";

interface NavLink {
    label: string;
    href: string;
}

interface FlagshipLayoutProps {
    children: React.ReactNode;
    brandName: string;
    brandIcon: string | LucideIcon;
    hubPath: string;
    accentColorRgb: string; // e.g. "239, 68, 68"
    accentSelectionClass: string; // e.g. "selection:bg-red-500/30"
    navLinks: NavLink[];
    trustScore?: string;
}

export function FlagshipLayout({
    children,
    brandName,
    brandIcon,
    hubPath,
    accentColorRgb,
    accentSelectionClass,
    navLinks,
    trustScore = "4.9/5 TrustScore"
}: FlagshipLayoutProps) {
    const pathname = usePathname();

    // V5.0 Icon ID Protocol Handshake
    // Resolves components via central registry to prevent string-tag leaks.
    const SClassIcon = useMemo(() => getSClassIcon(brandIcon), [brandIcon]);

    // S-Class Strategy: Force Scroll Padding on Root (Ensures zero header overlap)
    useEffect(() => {
        document.documentElement.style.scrollPaddingTop = '100px';
        return () => {
            document.documentElement.style.scrollPaddingTop = '';
        };
    }, []);

    // Dynamic Breadcrumbs & Nav logic
    const isCalculator = pathname.includes("/calculator");
    const isArchive = pathname.includes("/settlements") || pathname.includes("/legal-guide") || pathname.includes("/regulations");
    const isHub = pathname === hubPath;

    // S-Class Theme DNA: Dynamic Color Injection
    const themeStyles = {
        '--accent-rgb': accentColorRgb,
        '--accent-glow': `rgba(${accentColorRgb}, 0.15)`,
        '--accent-border': `rgba(${accentColorRgb}, 0.2)`,
    } as React.CSSProperties;

    // Determine Accent Style for Text
    const accentTextClass = `text-[rgb(${accentColorRgb})]`;
    const accentBgClass = `bg-[rgb(${accentColorRgb})]`;

    return (
        <Suspense fallback={null}>
            <div
                className={`min-h-screen bg-slate-950 text-white ${accentSelectionClass} relative overflow-hidden`}
                style={themeStyles}
            >
                {/* S-Class Premium Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,var(--accent-glow),transparent_50%)] pointer-events-none" />

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
                            <span className="opacity-30">??/span>
                            <span>Expert Analysis</span>
                        </div>
                    </div>
                </div>

                {/* 2. Persistent S-Class Header (Immortal Architecture) */}
                <header className="fixed top-[30px] left-0 right-0 z-[150] bg-transparent backdrop-blur-md border-b border-white/5 py-4">
                    <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-3">
                                <Link href={hubPath} className={`p-2 rounded-lg shadow-[0_0_20px_rgba(${accentColorRgb},0.3)] hover:scale-105 transition-transform`} style={{ backgroundColor: `rgb(${accentColorRgb})` }}>
                                    <SClassIcon className="w-5 h-5 text-white" />
                                </Link>
                                <div className="flex flex-col">
                                    <Link href={hubPath} className="text-xl font-black tracking-tighter uppercase leading-none hover:opacity-80 transition-opacity">
                                        {brandName}
                                    </Link>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="text-[7px] font-bold text-slate-500 uppercase tracking-widest leading-none">Intelligence Unit</span>
                                        <div className="text-[7px] font-black text-slate-600 uppercase tracking-widest opacity-40 hidden sm:flex items-center gap-1">
                                            <span>Home</span>
                                            <span className="opacity-40">&gt;</span>
                                            <span className={isHub ? "text-white" : "hover:text-white transition-colors"}>
                                                <Link href={hubPath}>Hub</Link>
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
                                {navLinks.map((link) => (
                                    <Link key={link.href} href={link.href} className="hover:text-white transition-colors uppercase">
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 border border-amber-500/20 text-[10px] font-black text-amber-500 uppercase tracking-widest shadow-[0_0_158px_rgba(245,158,11,0.1)]">
                                <Star className="w-3 h-3 fill-current" />
                                <span>{trustScore}</span>
                            </div>
                            {!isHub && (
                                <Link href={hubPath} className="flex items-center gap-2 text-[10px] font-black text-white px-4 py-2 bg-white/5 rounded-xl hover:bg-white/10 transition-all uppercase tracking-widest border border-white/10">
                                    <ArrowLeft className="w-3 h-3" /> Back
                                </Link>
                            )}
                        </div>
                    </div>
                </header>

                {/* 3. Main Content Wrapper */}
                <div className="flex flex-col min-h-screen relative z-0">
                    <main className="flex-grow pt-[100px]">
                        {children}
                    </main>

                    {/* Unified Flagship Footer with Mandatory Jurisdiction */}
                    <footer className="pt-20 pb-10 bg-black border-t border-white/5 relative z-[100]">
                        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-slate-800 rounded-lg">
                                        <SClassIcon className="w-4 h-4" style={{ color: `rgb(${accentColorRgb})` }} />
                                    </div>
                                    <span className="text-sm font-black tracking-tighter uppercase">{brandName}</span>
                                </div>
                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-slate-800 flex items-center justify-center text-[8px] font-black uppercase" style={{ color: `rgb(${accentColorRgb})` }}>DA</div>
                                    ))}
                                </div>
                                <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em]">Verified by Data Analyst Expert Team</p>
                            </div>
                            <div className="md:text-right">
                                <p className="text-[10px] text-slate-600 uppercase tracking-[0.2em] font-bold italic mb-4">
                                    Strict Compliance with Legal Disclaimer Guidelines 2026
                                </p>
                                <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest leading-relaxed">
                                    Managed under the Laws of the {SITE_CONFIG.jurisdiction.laws}.
                                    <br />
                                    Exclusive Jurisdiction: {SITE_CONFIG.jurisdiction.shortCourt}.
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </Suspense>
    );
}
