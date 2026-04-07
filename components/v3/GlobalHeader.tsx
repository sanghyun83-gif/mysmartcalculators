"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
    Menu, X, Zap,
    ChevronRight, Info,
    Activity, Landmark, Calculator
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
                    <Link href="/#core-20" className="text-sm font-bold text-slate-300 hover:text-white transition-colors tracking-wide">CORE 20</Link>
                    <Link href="/#search-results" className="text-sm font-bold text-slate-400 hover:text-white transition-colors tracking-wide">CORE SEARCH</Link>
                    <Link href="/about" className="text-sm font-bold text-slate-400 hover:text-white transition-colors tracking-wide">METHODOLOGY</Link>
                </nav>

                <div className="flex items-center gap-4">
                    <button
                        className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>

                    <Link
                        href="/#core-20"
                        className="hidden md:flex items-center gap-2 bg-white hover:bg-slate-200 text-black px-5 py-2.5 rounded-xl font-bold text-sm transition-all"
                    >
                        <span>Browse Core 20</span>
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
                        <div className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em] mb-2">Core Navigation</div>
                        <Link href="/#core-20" className="text-2xl font-bold flex items-center justify-between p-4 bg-slate-900 border border-slate-800 rounded-2xl" onClick={() => setIsMobileMenuOpen(false)}>
                            <span>Core 20 Calculators</span> <Calculator className="w-6 h-6 text-amber-500" />
                        </Link>
                        <Link href="/#search-results" className="text-2xl font-bold flex items-center justify-between p-4 bg-slate-900 border border-slate-800 rounded-2xl" onClick={() => setIsMobileMenuOpen(false)}>
                            <span>Core Search</span> <Activity className="w-6 h-6 text-emerald-500" />
                        </Link>
                        <Link href="/category/finance" className="text-2xl font-bold flex items-center justify-between p-4 bg-slate-900 border border-slate-800 rounded-2xl" onClick={() => setIsMobileMenuOpen(false)}>
                            <span>Finance Focus</span> <Landmark className="w-6 h-6 text-blue-500" />
                        </Link>
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

