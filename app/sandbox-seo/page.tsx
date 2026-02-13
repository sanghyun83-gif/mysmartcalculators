"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
    Calculator, Scale, Heart, DollarSign, Shield,
    ChevronRight, Search, Zap, TrendingUp, Cpu,
    Gavel, Stethoscope, Landmark, Globe, Activity
} from "lucide-react";
import { ALL_CALCULATORS } from "@/lib/all-calculators";
import { CATEGORY_MAP, CATEGORY_NAMES } from "@/lib/categories";

// Premium Trending Niches (High CPC)
const TRENDING_NICHES = [
    { id: "bmi", name: "BMI Calculator", category: "health", badge: "Priority #1", color: "amber" },
    { id: "scientific", name: "Scientific Calculator", category: "math", badge: "Most Searched", color: "blue" },
    { id: "mortgage", name: "Mortgage Calculator", category: "finance", badge: "Finance Hub", color: "emerald" },
    { id: "percentage", name: "Percentage Calculator", category: "math", badge: "Essential", color: "indigo" },
    { id: "gpa", name: "GPA Calculator", category: "education", badge: "Top Tier", color: "rose" },
    { id: "age", name: "Age Calculator", category: "general", badge: "Fresh 2026", color: "orange" },
];

export default function SandboxSEOPage() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredCalculators = useMemo(() => {
        if (!searchQuery) return [];
        const query = searchQuery.toLowerCase().trim();
        return ALL_CALCULATORS
            .filter(calc => calc.name.toLowerCase().includes(query))
            .sort((a, b) => {
                const aStart = a.name.toLowerCase().startsWith(query);
                const bStart = b.name.toLowerCase().startsWith(query);
                if (aStart && !bStart) return -1;
                if (!aStart && bStart) return 1;
                return a.name.localeCompare(b.name);
            })
            .slice(0, 10);
    }, [searchQuery]);

    return (
        <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-amber-500/30 font-sans">
            {/* Dynamic Background Glows */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-amber-500/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
            </div>

            {/* Hero Section */}
            <section className="relative pt-24 pb-16 px-4">
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold mb-8">
                        <Cpu className="w-3 h-3" />
                        <span>S-CLASS AUTHORITY ENGINE 2026</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                        2026 Official <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500">
                            Institutional AI Audit
                        </span>
                    </h1>

                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                        Neural-grade calculation infrastructure for 2026 standards.
                        Providing 316+ specialized engines for technical accuracy.
                    </p>

                    <div className="max-w-2xl mx-auto relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                        <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden flex items-center p-2 shadow-2xl">
                            <Search className="w-6 h-6 text-slate-500 ml-4" />
                            <input
                                type="text"
                                placeholder="Search institutional auditing engines..."
                                className="flex-1 bg-transparent border-none focus:ring-0 text-white placeholder:text-slate-600 px-4 py-3 text-lg"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-3 rounded-xl transition-all flex items-center gap-2">
                                <span>Start Audit</span>
                                <Zap className="w-4 h-4 fill-current" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Directory Grid (SEO Powerhouse) */}
            <section className="max-w-7xl mx-auto px-4 py-20 border-t border-slate-800/50">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <div className="flex items-center gap-2 text-amber-500 font-bold text-xs uppercase tracking-[0.3em] mb-3">
                            <Globe className="w-4 h-4" />
                            <span>Full Engine Directory</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                            Institutional Navigation Hub
                        </h2>
                    </div>
                    <div className="flex items-center gap-4 text-xs">
                        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-500/5 border border-emerald-500/10 text-emerald-400 font-medium">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span>Sitemap Status: Priority 1.0 Flagship</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-500/5 border border-blue-500/10 text-blue-400 font-medium">
                            <Activity className="w-3 h-3" />
                            <span>Last Sync: Just Now</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {Object.entries(CATEGORY_NAMES).map(([id, name]) => {
                        const calcs = ALL_CALCULATORS.filter(calc => CATEGORY_MAP[calc.id] === id);
                        return (
                            <div key={id} className="group">
                                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800 group-hover:border-amber-500/30 transition-colors">
                                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-amber-500/20 text-amber-500">
                                        <Zap className="w-4 h-4 fill-current" />
                                    </div>
                                    <h3 className="text-sm font-bold text-white uppercase tracking-widest">{name}</h3>
                                    <span className="ml-auto text-[10px] font-bold text-slate-500 px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700">
                                        {calcs.length} ENGINES
                                    </span>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                                    {calcs.map(calc => (
                                        <Link
                                            key={calc.id}
                                            href={`/${calc.id}`}
                                            className="text-[13px] text-slate-400 hover:text-amber-400 hover:translate-x-1 transition-all duration-200 flex items-center gap-2"
                                        >
                                            <div className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-amber-500/40" />
                                            {calc.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* SEO Authority Section */}
            <section className="bg-slate-900/50 border-y border-slate-800 py-16">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                    {[
                        { label: "Indexing Priority", value: "1.0", detail: "Highest Crawl Tier" },
                        { label: "Internal Links", value: "316+", detail: "Optimized discovery juice" },
                        { label: "2026 Standards", value: "Verified", detail: "NIST/WHO Compliant" },
                        { label: "Crawl Frequency", value: "Daily", detail: "Active Signal Hijacking" },
                    ].map((stat, i) => (
                        <div key={i} className="text-center md:text-left">
                            <div className="text-4xl font-extrabold text-white mb-2">{stat.value}</div>
                            <div className="text-amber-500 font-bold text-sm uppercase tracking-widest mb-1">{stat.label}</div>
                            <div className="text-slate-500 text-xs">{stat.detail}</div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
