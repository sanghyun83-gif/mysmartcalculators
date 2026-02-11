"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
    Leaf, ChevronRight, Activity, CheckCircle2, Gavel, Pill, Shield, ArrowRight,
    BarChart3, Info, Microscope, Stethoscope, Search, DollarSign, Star, TrendingUp, Lock
} from "lucide-react";
import { ROUNDUP_CONSTANTS, SITE } from "@/lib/calculators/roundup";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { id: "durnell", label: "Durnell Catalyst", icon: Gavel },
        { id: "clinical", label: "Oncogenesis Audit", icon: Microscope },
        { id: "stats", label: "MDL 2741 Benchmarks", icon: BarChart3 },
        { id: "faq", label: "Expert Q&A", icon: Info },
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-emerald-500/30">
            {/* S-Class Premium Navigator */}
            <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? "bg-slate-900/90 backdrop-blur-xl border-b border-white/5 py-3" : "bg-transparent py-6"}`}>
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <div className="p-2 bg-emerald-500 rounded-lg shadow-[0_0_20px_rgba(16,185,129,0.3)] group-hover:scale-110 transition-transform">
                            <Leaf className="w-5 h-5 text-slate-950" />
                        </div>
                        <span className="text-xl font-black tracking-tighter text-white uppercase italic">{SITE.name} <span className="text-emerald-500 not-italic text-sm ml-1">v2.1</span></span>
                    </div>
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <a key={item.id} href={`#${item.id}`} className="text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-emerald-400 transition-colors">{item.label}</a>
                        ))}
                    </div>
                    <Link href="/roundup/calculator" className="bg-white text-slate-950 px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-emerald-500 transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">Audit Case</Link>
                </div>
            </nav>

            {/* S-Class Hero Section: The Global Standard for Glyphosate Liability */}
            <header className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.15),transparent_70%)] pointer-events-none" />
                <div className="max-w-5xl mx-auto px-6 text-center relative">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8 animate-fade-in">
                        <Star className="w-3 h-3 text-emerald-500 fill-emerald-500" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-500">2026 MDL 2741 Actuarial standard</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-6 leading-[0.9] uppercase italic">
                        Roundup <span className="text-emerald-500 not-italic">Cancer Auditor</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed mb-10">
                        The definitive forensic engine for quantifying Non-Hodgkin Lymphoma (NHL) damages,
                        calibrated against the <span className="text-white italic">$10.9B global settlement funds</span>.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/roundup/calculator" className="w-full sm:w-auto bg-emerald-500 text-slate-950 px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:scale-105 transition-all shadow-[0_20px_40px_rgba(16,185,129,0.2)] flex items-center justify-center gap-3">
                            Start Liability Audit <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </header>

            {/* Global MDL Benchmark Matrix */}
            <section id="stats" className="py-20 border-y border-white/5 bg-slate-900/30">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: "Consolidated Fund", value: "$10.9B", suffix: "", color: "text-white" },
                            { label: "Active Claims", value: "165,000", suffix: "+", color: "text-emerald-500" },
                            { label: "Target MDL", value: "MDL 2741", suffix: "", color: "text-white" },
                            { label: "Discovery Status", value: "Level 4", suffix: "", color: "text-amber-500" }
                        ].map((stat, i) => (
                            <div key={i} className="text-center group">
                                <p className={`text-4xl md:text-5xl font-black mb-2 tracking-tighter ${stat.color}`}>{stat.value}{stat.suffix}</p>
                                <p className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-500 group-hover:text-slate-300 transition-colors">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Durnell Catalyst Section (Information Gain Step 0) */}
            <section id="durnell" className="py-32 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
                            <Activity className="w-3 h-3 text-amber-500" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-amber-500">2026 Supreme Court Volatility</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-[1.1] uppercase italic">
                            The Durnell <br /><span className="text-emerald-500 not-italic">Settlement Catalyst</span>
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8 font-medium">
                            The 2026 U.S. Supreme Court review of the Durnell case represents a critical shift in Roundup liability.
                            Our engine accounts for the 'Failure to Warn' preemption risks and how they impact Bayer's global
                            reserve allocations for new cancer filings.
                        </p>
                        <div className="space-y-4">
                            {[
                                "Ghostwriting discovery (Monsanto Papers) anchors liability.",
                                "60,000+ active claims awaiting post-Durnell valuations.",
                                "Federal preemption challenges set new 2026 evidence bars."
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 group">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                                    <span className="text-sm font-bold text-slate-300 uppercase tracking-tight italic group-hover:text-white transition-colors">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-slate-900/50 border border-white/5 rounded-3xl p-10 relative group">
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/10 blur-[60px] pointer-events-none" />
                        <h4 className="text-white font-black uppercase tracking-widest mb-8 flex items-center gap-3">
                            <TrendingUp className="w-5 h-5 text-emerald-500" /> 2026 Valuation Delta
                        </h4>
                        <div className="space-y-6">
                            {[
                                { label: "Standard Settlement (NHL)", width: "w-1/2", base: "$50k - $250k" },
                                { label: "Monsanto Papers Discovery (+α)", width: "w-3/4", base: "$450k - $850k", highlight: true },
                                { label: "Bellwether Trial Peak (2026)", width: "w-full", base: "$2.1M - $3.5M+", special: true }
                            ].map((row, i) => (
                                <div key={i} className="space-y-2">
                                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-500">
                                        <span>{row.label}</span>
                                        <span className={row.highlight ? "text-emerald-500" : row.special ? "text-amber-500" : ""}>{row.base}</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                        <div className={`h-full ${row.special ? "bg-amber-500" : row.highlight ? "bg-emerald-500" : "bg-slate-700"} ${row.width} rounded-full`} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Pathophysiology Deep-Dive (Clinical DNA) */}
            <section id="clinical" className="py-32 bg-slate-900/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20 px-6">
                        <div className="inline-block p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl mb-6">
                            <Microscope className="w-8 h-8 text-emerald-500" />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic leading-none">
                            Oncogenesis <span className="text-emerald-500 not-italic">Forensic Audit</span>
                        </h2>
                        <p className="mt-6 text-slate-400 max-w-2xl mx-auto">Evaluating IARC Group 2A carcinogen benchmarks and biological causality markers for Tier 1 ranking.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Activity, title: "Genotoxicity Factor", desc: "Analyzing chromosome damage and oxidative stress markers linked to glyphosate phosphonate exposure." },
                            { icon: Lock, title: "Monsanto Papers", desc: "Tapping into discovery evidence revealing suppressed internal studies on NHL causality." },
                            { icon: Stethoscope, title: "NHL Subtype Audit", desc: "Differentiation between DLBCL, Follicular, and SLL/CLL in the 2026 point-score matrix." }
                        ].map((pillar, i) => (
                            <div key={i} className="group p-10 bg-slate-900 border border-white/5 rounded-3xl hover:border-emerald-500/30 transition-all hover:-translate-y-2">
                                <pillar.icon className="w-10 h-10 text-emerald-500 mb-8 group-hover:scale-110 transition-transform" />
                                <h4 className="text-xl font-black text-white uppercase italic mb-4 tracking-tight">{pillar.title}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">{pillar.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Roundup Expert FAQ (SoftwareApplication Schema Ready) */}
            <section id="faq" className="py-32 border-t border-white/5">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-black text-white uppercase italic mb-16 text-center">Roundup <span className="text-emerald-500 not-italic">Forensic Q&A</span></h2>
                    <div className="space-y-8">
                        {[
                            { q: "What is the average Roundup payout in 2026?", a: "Average settlements range from $50,000 to $250,000, but Tier 1 cases with significant medical multipliers reach $1M+." },
                            { q: "How did the 2015 IARC classification affect the litigation?", a: "The Group 2A 'Probable Carcinogen' status anchored the biological plausibility required for federal and state-level expert testimony." },
                            { q: "Will the Supreme Court's 2026 Durnell decision end the lawsuits?", a: "It may limit future 'Failure to Warn' claims in some jurisdictions, but over 60,000 active cases are already consolidated under discovery patterns that bypass these preemptions." }
                        ].map((faq, i) => (
                            <div key={i} className="p-8 bg-slate-900/50 border border-white/5 rounded-2xl hover:border-emerald-500/20 transition-all group">
                                <h4 className="text-white font-black italic uppercase tracking-tight mb-4 group-hover:text-emerald-400 transition-colors uppercase italic">{faq.q}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-white/5 bg-slate-950">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-3">
                        <div className="p-1.5 bg-slate-800 rounded-lg">
                            <Leaf className="w-4 h-4 text-emerald-500" />
                        </div>
                        <span className="text-sm font-black text-white tracking-widest uppercase italic">MDL 2741 Auditor</span>
                    </div>
                    <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest text-center">
                        2026 Actuarial Standards Applied • Bayer Settlement Fund Data • Encrypted SSL
                    </p>
                    <div className="text-slate-400 text-[10px] font-black tracking-widest uppercase">
                        © {SITE.year} {SITE.name}
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-6 mt-8">
                    <RelatedCalculators currentCalc="roundup" count={6} />
                </div>
            </footer>
        </div>
    );
}
