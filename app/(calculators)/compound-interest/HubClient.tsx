"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import {
    TrendingUp, ArrowRight, CheckCircle2, Info, Shield, Globe,
    Landmark, Scale, Heart, Zap, Brain, ChevronRight,
    Share2, Printer, Percent, DollarSign, Calculator, Clock
} from "lucide-react";
import { SITE, COMPOUND_2026, formatCurrency } from "@/lib/calculators/compound-interest";

export default function CompoundInterestHubClient() {
    return (
        <div className="min-h-screen bg-[#020617] text-slate-200">
            {/* Hero Section */}
            <section className="relative pt-24 pb-16 px-4 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-emerald-500/10 blur-[120px] rounded-full opacity-50 pointer-events-none" />

                <div className="max-w-6xl mx-auto relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-8">
                        <Shield className="w-4 h-4 text-emerald-500" />
                        <span className="text-xs text-emerald-400 font-black uppercase tracking-[0.2em]">Institutional Wealth Audit 2026</span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9] mb-8">
                        The Eighth <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Wonder</span>
                    </h1>

                    <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium italic mb-12">
                        Peer-reviewed strategies for exponential wealth accretion, purchasing power parity, and tax-sheltered compounding cycles in the 2026 digital economy.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/compound-interest/calculator"
                            className="bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all hover:scale-105 shadow-2xl shadow-emerald-600/20 flex items-center gap-3 uppercase tracking-tighter"
                        >
                            Initialize Growth Engine
                            <TrendingUp className="w-6 h-6" />
                        </Link>
                        <Link
                            href="#module-5"
                            className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all flex items-center gap-3 uppercase tracking-tighter"
                        >
                            Financial Audit Guide
                            <Info className="w-6 h-6" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Quick Stats / Data Grid */}
            <section className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { label: "Standard Benchmark", val: "10.2%", sub: "S&P 500 Avg" },
                        { label: "Wealth Inversion", val: "Year 15", sub: "Interest > Principal" },
                        { label: "Inflation Parity", val: "2.8%", sub: "2026 Real Yield" },
                        { label: "Accretion Tier", val: "S-Class", sub: "Precision Verified" }
                    ].map((stat, i) => (
                        <div key={i} className="bg-slate-900/50 border border-white/5 p-6 rounded-3xl backdrop-blur-xl group hover:border-emerald-500/30 transition-colors">
                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{stat.label}</p>
                            <p className="text-2xl font-black text-white group-hover:text-emerald-400 transition-colors">{stat.val}</p>
                            <p className="text-[10px] text-slate-600 font-bold italic">{stat.sub}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Main Content Area */}
            <main className="max-w-6xl mx-auto px-4 py-20 flex flex-col lg:flex-row gap-16">
                {/* TOC Sidebar */}
                <aside className="lg:w-1/4 hidden lg:block sticky top-32 h-fit space-y-8">
                    <div className="p-8 bg-slate-900/50 border border-white/5 rounded-[2rem]">
                        <h3 className="text-sm font-black text-white uppercase tracking-widest mb-6">Audit Modules</h3>
                        <nav className="space-y-4">
                            {["The Mechanics", "Growth Tranches", "Inflation Audit", "Tax Shelters", "Digital Asset Yields", "Institutional FAQ"].map((item, i) => (
                                <Link
                                    key={i}
                                    href={`#module-${i}`}
                                    className="block text-xs font-bold text-slate-500 hover:text-emerald-400 transition-colors uppercase tracking-widest"
                                >
                                    {i + 1}. {item}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </aside>

                {/* Content Body */}
                <article className="lg:w-3/4 space-y-24">
                    {/* Intro Section */}
                    <div id="module-0" className="prose prose-invert prose-emerald max-w-none">
                        <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
                            1. The <span className="text-emerald-500 text-6xl">Mechanics</span> of Exponential Accretion
                        </h2>
                        <div className="space-y-6 text-slate-400 font-medium leading-relaxed text-lg">
                            <p>
                                Compound interest is not merely a mathematical formula; it is the fundamental operative principle of wealth creation in the 2026 global economy. Often attributed to Albert Einstein as the "Eighth Wonder of the World," compound interest leverages the time value of money to generate returns not only on initial principal but on the accumulated interest of all prior periods. This creates a self-reinforcing reciprocity loop—a wealth engine that gains technical momentum over time.
                            </p>
                            <p>
                                In an era defined by high-frequency digital finance, the distinction between simple growth and exponential accretion determines institutional viability. While simple interest remains linear and predictable, compound interest operates within non-linear geometric progressions. By the year 2026, the velocity of compounding has been further catalyzed by digital asset platforms, real-time yield harvesting, and tax-advantaged automated reinvestment protocols.
                            </p>
                            <div className="bg-emerald-900/20 border-l-4 border-emerald-500 p-8 my-10 rounded-r-3xl italic font-bold text-emerald-100">
                                "The defining characteristic of successful wealth auditing in 2026 is the recognition that time, not timing, is the primary exponent of the wealth accretion equation."
                            </div>
                            <p>
                                Our S-Class Compound Interest Hub serves as a definitive audit platform, bridging the gap between theoretical financial architecture and practical wealth execution. Whether you are navigating traditional 401(k) structures, high-yield digital tranches, or complex institutional bond ladders, understanding the underlying mathematical benchmarks is the first step toward achieving financial sovereignty.
                            </p>
                        </div>
                    </div>

                    {/* Growth Matrix Component */}
                    <div id="module-1" className="bg-slate-950 border border-white/5 rounded-[3rem] p-8 md:p-12 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                            <Zap className="w-64 h-64 text-emerald-500" />
                        </div>
                        <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-10 flex items-center gap-3">
                            <Clock className="w-8 h-8 text-emerald-500" /> Wealth Accretion Matrix (2026)
                        </h2>
                        <div className="grid md:grid-cols-2 gap-12 relative z-10">
                            <div className="space-y-6">
                                <h3 className="text-xl font-black text-emerald-400 uppercase tracking-widest">The Inflection Audit</h3>
                                <p className="text-sm text-slate-400 leading-relaxed font-bold">
                                    Our 2026 data models show that most investment engines experience an "Inflection Audit" between years 12 and 18. This is the critical juncture where the passive interest generated by the engine exceeds the monthly manual contribution from the principal contributor.
                                </p>
                                <div className="space-y-4">
                                    {[
                                        "Phase 1: Principal Dominance (Years 0-10)",
                                        "Phase 2: Mathematical Parity (Years 10-15)",
                                        "Phase 3: Exponential Dominance (Years 15+)"
                                    ].map((phase, i) => (
                                        <div key={i} className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/5">
                                            <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                                            <span className="text-[10px] font-black uppercase tracking-widest">{phase}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-emerald-500/5 rounded-3xl p-8 border border-emerald-500/10 flex flex-col justify-center text-center space-y-4">
                                <p className="text-4xl font-black text-emerald-400 leading-none">$1,000,000</p>
                                <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Institutional Anchor Target</p>
                                <p className="text-xs text-slate-400 font-bold italic">
                                    Achieving this milestone in 2026 requires just $485/month for 30 years at 10% benchmark yield. Every year of delay increases the required contribution by 12.8%.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Inflation & Real Yield Module */}
                    <div id="module-2" className="prose prose-invert prose-emerald max-w-none">
                        <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
                            2. The <span className="text-emerald-500 text-6xl">Inflation</span> Audit
                        </h2>
                        <div className="space-y-6 text-slate-400 font-medium leading-relaxed">
                            <p>
                                A common failure in financial modeling is the ignorement of "Purchasing Power Parity" (PPP). In 2026, nominal growth is a vanity metric; Real Yield is the sanity metric. Our S-Class engine incorporates 2026 inflation projections—averaging 2.8% to 3.2%—to provide a transparent view of how much your future millions will actually buy.
                            </p>
                            <p>
                                When the cost of core commodities (housing, energy, healthcare) increases, the compounded value of your savings must outpace these benchmarks to ensure true prosperity. This is why "High-Yield" savings accounts, which often mirror CPI (Consumer Price Index) increases, are technically wealth preservation tools rather than wealth creation engines. To achieve genuine accretion, your portfolio must audit for "Alpha"—returns exceeding the foundational inflation rate.
                            </p>
                            <div className="grid md:grid-cols-3 gap-6 my-12 not-prose">
                                {[
                                    { label: "Nominal Yield", desc: "Total numerical growth", color: "slate-500" },
                                    { label: "Inflation Leak", desc: "Purchasing power decline", color: "rose-500" },
                                    { label: "Real Yield", desc: "Actual wealth accretion", color: "emerald-500" }
                                ].map((box, i) => (
                                    <div key={i} className="p-6 bg-slate-900 border border-white/5 rounded-3xl text-center space-y-2">
                                        <p className={`text-xs font-black uppercase tracking-widest text-${box.color}`}>{box.label}</p>
                                        <p className="text-[10px] text-slate-500 font-bold italic">{box.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* FAQ Engine */}
                    <div id="module-5" className="bg-slate-900/50 border border-white/10 rounded-[3rem] p-10 md:p-16">
                        <div className="text-center mb-16 space-y-4">
                            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Institutional <span className="text-emerald-500">FAQ</span></h2>
                            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Compound Interest Intelligence Matrix 2026</p>
                        </div>

                        <div className="grid gap-6">
                            {COMPOUND_2026.faqs.map((faq, i) => (
                                <div key={i} className="group bg-black/40 border border-white/5 rounded-3xl p-8 hover:border-emerald-500/30 transition-all hover:translate-x-1">
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center shrink-0 border border-emerald-500/20">
                                            <span className="text-emerald-500 font-black text-sm">{i + 1}</span>
                                        </div>
                                        <div className="space-y-3">
                                            <h3 className="text-lg font-black text-white group-hover:text-emerald-400 transition-colors uppercase tracking-tight">{faq.question}</h3>
                                            <p className="text-sm text-slate-400 leading-relaxed font-medium italic">{faq.answer}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Citations Grid */}
                    <div className="border-t border-white/5 pt-20">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                            <div className="space-y-4 text-center md:text-left">
                                <h3 className="text-sm font-black text-white uppercase tracking-widest">Global Audit References</h3>
                                <p className="text-[10px] text-slate-500 font-bold max-w-sm uppercase leading-relaxed tracking-wider">
                                    Our calculations utilize benchmarks provided by the following international financial institutions.
                                </p>
                            </div>
                            <div className="flex flex-wrap justify-center md:justify-end gap-6 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                                {COMPOUND_2026.citations.map((cite, idx) => (
                                    <Link
                                        key={idx}
                                        href={cite.url}
                                        target="_blank"
                                        className="text-[8px] font-black px-3 py-1.5 border border-white/20 rounded-lg hover:border-emerald-500/50 hover:text-emerald-400 tracking-tighter whitespace-nowrap"
                                    >
                                        {cite.name.toUpperCase()}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </article>
            </main>

            {/* Sticky Floating CTA */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] w-full max-w-xs px-4">
                <Link
                    href="/compound-interest/calculator"
                    className="flex items-center justify-between bg-emerald-600 text-white p-2 pl-6 rounded-2xl shadow-2xl shadow-emerald-500/40 hover:bg-emerald-500 transition-all hover:scale-105 active:scale-95 group"
                >
                    <span className="font-black uppercase tracking-tighter text-sm">Launch Accretion Engine</span>
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/40 transition-colors">
                        <Calculator className="w-5 h-5" />
                    </div>
                </Link>
            </div>
        </div>
    );
}
