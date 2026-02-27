"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
    Menu, X, Zap,
    ChevronRight, ChevronDown, Info,
    Scale, DollarSign, Shield, Heart, Landmark
} from "lucide-react";

export default function GlobalHeader() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled
                ? "bg-slate-900/80 backdrop-blur-md border-b border-slate-800 py-3"
                : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="p-2 rounded-xl bg-amber-500 text-black group-hover:scale-110 transition-transform">
                        <Zap className="w-5 h-5 fill-current" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-black text-white tracking-tighter leading-none">
                            MySmart<span className="text-amber-500">Calculators</span>
                        </span>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none mt-1">
                            Free Online Calculators
                        </span>
                    </div>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/category/legal" className="text-sm font-bold text-slate-400 hover:text-white transition-colors tracking-wide">LEGAL</Link>
                    <Link href="/category/finance" className="text-sm font-bold text-slate-400 hover:text-white transition-colors tracking-wide">FINANCE</Link>
                    <Link href="/category/insurance" className="text-sm font-bold text-slate-400 hover:text-white transition-colors tracking-wide">INSURANCE</Link>
                    <Link href="/category/medical" className="text-sm font-bold text-slate-400 hover:text-white transition-colors tracking-wide">MEDICAL</Link>

                    <div className="relative group/more">
                        <button className="flex items-center gap-1 text-sm font-bold text-slate-400 hover:text-white transition-colors tracking-wide">
                            <span>MORE</span>
                            <ChevronDown className="w-3 h-3 group-hover/more:rotate-180 transition-transform" />
                        </button>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 hidden group-hover/more:block animate-in fade-in slide-in-from-top-2 duration-200">
                            <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-2xl p-2 w-48 shadow-2xl">
                                <Link href="/category/family" className="flex items-center gap-3 p-3 text-xs font-bold text-slate-400 hover:text-amber-400 hover:bg-amber-500/5 rounded-xl transition-all" onClick={() => { }}>
                                    <Heart className="w-4 h-4 text-rose-500" />
                                    <span>Family & Support</span>
                                </Link>
                                <Link href="/category/health" className="flex items-center gap-3 p-3 text-xs font-bold text-slate-400 hover:text-amber-400 hover:bg-amber-500/5 rounded-xl transition-all" onClick={() => { }}>
                                    <Landmark className="w-4 h-4 text-blue-500" />
                                    <span>Public Benefits</span>
                                </Link>
                                <div className="h-px bg-slate-800 my-2" />
                                <Link href="/about" className="flex items-center gap-3 p-3 text-xs font-bold text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-all" onClick={() => { }}>
                                    <Info className="w-4 h-4" />
                                    <span>About Our Methodology</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="flex items-center gap-4">
                    <button
                        className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>

                    <Link
                        href="/calculators"
                        className="hidden md:flex items-center gap-2 bg-white hover:bg-slate-200 text-black px-5 py-2.5 rounded-xl font-bold text-sm transition-all"
                    >
                        <span>Browse Calculators</span>
                        <ChevronRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-slate-950/90 backdrop-blur-xl z-[90] md:hidden animate-in fade-in duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <div className="flex flex-col p-8 pt-24 gap-4 overflow-y-auto h-full">
                        <div className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em] mb-2">Category Portals</div>
                        <Link href="/category/legal" className="text-2xl font-bold flex items-center justify-between p-4 bg-slate-900 border border-slate-800 rounded-2xl" onClick={() => setIsMobileMenuOpen(false)}>
                            <span>Legal Calculators</span> <Scale className="w-6 h-6 text-amber-500" />
                        </Link>
                        <Link href="/category/finance" className="text-2xl font-bold flex items-center justify-between p-4 bg-slate-900 border border-slate-800 rounded-2xl" onClick={() => setIsMobileMenuOpen(false)}>
                            <span>Finance</span> <DollarSign className="w-6 h-6 text-emerald-500" />
                        </Link>
                        <Link href="/category/insurance" className="text-2xl font-bold flex items-center justify-between p-4 bg-slate-900 border border-slate-800 rounded-2xl" onClick={() => setIsMobileMenuOpen(false)}>
                            <span>Insurance</span> <Shield className="w-6 h-6 text-blue-500" />
                        </Link>
                        <Link href="/category/medical" className="text-2xl font-bold flex items-center justify-between p-4 bg-slate-900 border border-slate-800 rounded-2xl" onClick={() => setIsMobileMenuOpen(false)}>
                            <span>Medical</span> <Zap className="w-6 h-6 text-rose-500 fill-current" />
                        </Link>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <Link href="/category/family" className="p-4 bg-slate-900 border border-slate-800 rounded-2xl text-center" onClick={() => setIsMobileMenuOpen(false)}>
                                <Heart className="w-6 h-6 text-rose-500 mx-auto mb-2" />
                                <span className="text-xs font-bold">Family</span>
                            </Link>
                            <Link href="/category/health" className="p-4 bg-slate-900 border border-slate-800 rounded-2xl text-center" onClick={() => setIsMobileMenuOpen(false)}>
                                <Landmark className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                                <span className="text-xs font-bold">Health</span>
                            </Link>
                        </div>
                        <div className="h-px bg-slate-800 my-6" />
                        <Link href="/about" className="text-lg text-slate-400 font-bold flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
                            <Info className="w-5 h-5" /> <span>About</span>
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}

