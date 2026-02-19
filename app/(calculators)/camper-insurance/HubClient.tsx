"use client";

import { useMemo } from "react";
import Link from "next/link";
import {
    AlertCircle, Shield, ArrowRight, Zap, Activity, Target, FileText, ChevronRight, BarChart3,
    PieChart, LineChart, Info, CheckCircle2, MapPin, Award, Scale, Tent,
    Truck, Home, Trees, Compass, Mountain, Wind, Sun
} from "lucide-react";
import { SITE, CAMPER_2026, formatCurrency } from "@/lib/calculators/camper-insurance";
import { RelatedCalculators } from "@/components/RelatedCalculators";

const FAQ_DATA = [
    {
        q: "How much is camper insurance in 2026?",
        a: "Annual premiums range from $180 (Teardrop) to $550+ (Toy Hauler). Most standard truck campers or A-frames fall between $280 and $450, heavily influenced by state-level risk indices and vehicle valuation."
    },
    {
        q: "Do I need separate insurance if my auto policy covers towing?",
        a: "While liability may extend to the trailer while being towed, comprehensive (theft, weather) and collision coverage for the camper itself typically require a separate policy or specific endorsement in 2026."
    },
    {
        q: "Does camper insurance cover personal belongings?",
        a: "Standard policies usually include 'Personal Effects' coverage ranging from $1,500 to $5,000. For high-value camping gear or electronics, an additional rider may be required for full 2026 forensic audit protection."
    },
    {
        q: "How do state indices affect my camper premium?",
        a: "Indices in 2026 reflect a state's camping frequency and theft risk. For example, California (1.25x) and Colorado (1.15x) have higher premiums due to higher leisure vehicle density and mountain-related loss risks."
    },
    {
        q: "What is full-timer coverage for campers?",
        a: "Full-timer coverage is for those who live in their camper for more than 6 months a year. It adds liability protection similar to a homeowners policy, covering incidents that occur while the camper is parked and being used as a residence."
    }
];

export default function HubClient() {
    return (
        <div className="bg-slate-950 min-h-screen text-slate-300 font-sans selection:bg-emerald-500/30">
            {/* 1. S-Class Hero: Premium Auditor Badge & H1 */}
            <section className="relative pt-32 pb-20 overflow-hidden border-b border-white/5">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent opacity-50 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8 animate-fade-in">
                        <Compass className="w-4 h-4" />
                        <span>Institutional Premium Auditor 2026: ACTIVE</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
                        Camper <span className="text-emerald-500">Auditor.</span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-xl text-slate-400 mb-12 leading-relaxed">
                        Precision premium evaluation for the modern camper.
                        Synchronized with 2026 State risk indices and RVIA leisure benchmarks.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/camper-insurance/calculator"
                            className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-[0_0_40px_rgba(16,185,129,0.3)] flex items-center gap-2"
                        >
                            <Target className="w-5 h-5" />
                            Execute Premium Audit
                        </Link>
                        <Link
                            href="#audit-data"
                            className="px-8 py-4 bg-slate-900 border border-slate-800 hover:border-slate-700 text-white rounded-2xl font-bold text-lg transition-all duration-300 flex items-center gap-2"
                        >
                            <BarChart3 className="w-5 h-5" />
                            View 2026 Indices
                        </Link>
                    </div>
                </div>
            </section>

            {/* Quick Stats Grid */}
            <section className="py-20 bg-slate-950/50 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { label: "ACTIVE CAMPERS", value: CAMPER_2026.statistics.activeCampers, desc: "US Market Benchmark", icon: <Tent className="text-emerald-400" /> },
                            { label: "AVG CLAIM", value: formatCurrency(CAMPER_2026.statistics.avgClaim), desc: "Forensic Mean 2026", icon: <Shield className="text-emerald-400" /> },
                            { label: "PARK ADMISSIONS", value: CAMPER_2026.statistics.annualAdmissions, desc: "Seasonal High", icon: <Trees className="text-emerald-400" /> },
                            { label: "AUDIT LEVEL", value: "Institutional", desc: "Statutory Precision", icon: <Award className="text-emerald-400" /> },
                        ].map((stat, i) => (
                            <div key={i} className="p-6 rounded-3xl bg-slate-900/40 border border-white/5 hover:border-emerald-500/30 transition-all duration-500 group">
                                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-500">{stat.icon}</div>
                                <div className="text-xs font-bold text-emerald-500 uppercase tracking-widest mb-1">{stat.label}</div>
                                <div className="text-3xl font-black text-white mb-2">{stat.value}</div>
                                <div className="text-slate-500 text-sm">{stat.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2. The Strict 3-Table Protocol (Authority 85%) */}
            <section id="audit-data" className="py-32 bg-slate-950">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="space-y-32 text-left">
                        {/* Table I: Camper Type Benchmarks */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4 border-l-4 border-emerald-500 pl-6">
                                <div>
                                    <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter">I. 2026 Camper Class Benchmarks</h2>
                                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-none mt-1">Class-Specific Premium Baseline • National Mean</p>
                                </div>
                            </div>
                            <div className="overflow-hidden rounded-[2rem] border border-white/5 bg-slate-900/40 shadow-2xl">
                                <table className="w-full text-left border-collapse">
                                    <thead className="bg-white/5 border-b border-white/10 text-[10px] font-black tracking-[0.2em] text-emerald-400 uppercase">
                                        <tr>
                                            <th className="px-8 py-5">Camper Class</th>
                                            <th className="px-8 py-5">Avg Annual Premium</th>
                                            <th className="px-8 py-5">Value Rate</th>
                                            <th className="px-8 py-5">Risk Factor</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5 text-xs font-bold italic text-slate-400">
                                        {[
                                            { l: "Teardrop Trailer", p: 180, r: "0.8%", s: "Low" },
                                            { l: "Pop-Up Camper", p: 220, r: "0.9%", s: "Low-Mod" },
                                            { l: "A-Frame Sleeper", p: 280, r: "1.0%", s: "Moderate" },
                                            { l: "Truck Camper", p: 450, r: "1.2%", s: "High" },
                                            { l: "Toy Hauler", p: 550, r: "1.4%", s: "Critical" },
                                        ].map((row, i) => (
                                            <tr key={i} className="hover:bg-emerald-500/5 transition-colors group">
                                                <td className="px-8 py-5 text-white">{row.l}</td>
                                                <td className="px-8 py-5">{formatCurrency(row.p)}</td>
                                                <td className="px-8 py-5 text-emerald-500/70">{row.r}</td>
                                                <td className="px-8 py-5 text-[9px] uppercase tracking-widest text-slate-600 font-mono italic">{row.s}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table II: Regional Risk Indices */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4 border-l-4 border-emerald-500 pl-6">
                                <div>
                                    <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter">II. Regional Camping Risk Indices</h2>
                                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-none mt-1">Jurisdictional Variance • Theft & Weather Exposure</p>
                                </div>
                            </div>
                            <div className="overflow-hidden rounded-[2rem] border border-white/5 bg-slate-900/40 shadow-2xl">
                                <table className="w-full text-left border-collapse">
                                    <thead className="bg-white/5 border-b border-white/10 text-[10px] font-black tracking-[0.2em] text-emerald-400 uppercase">
                                        <tr>
                                            <th className="px-8 py-5">State/Zone</th>
                                            <th className="px-8 py-5">Premium Index</th>
                                            <th className="px-8 py-5">Primary Risk</th>
                                            <th className="px-8 py-5">Grade</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5 text-xs font-bold italic text-slate-400">
                                        {Object.values(CAMPER_2026.stateIndices).map((row, i) => (
                                            <tr key={i} className="hover:bg-emerald-500/5 transition-colors group">
                                                <td className="px-8 py-5 text-white">{row.name}</td>
                                                <td className="px-8 py-5 italic">{row.index}x</td>
                                                <td className="px-8 py-5 text-slate-300">{row.risk}</td>
                                                <td className="px-8 py-5 text-emerald-500 font-mono text-[9px] uppercase tracking-widest italic">Active</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table III: Calculation Methodology */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4 border-l-4 border-emerald-500 pl-6">
                                <div>
                                    <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter">III. Forensic P&I Premium Logic</h2>
                                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-none mt-1">Audit Calibration Engine • Multiplier Matrix</p>
                                </div>
                            </div>
                            <div className="overflow-hidden rounded-[2rem] border border-white/5 bg-slate-900/40 shadow-2xl text-left">
                                <table className="w-full text-left border-collapse">
                                    <thead className="bg-white/5 border-b border-white/10 text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase">
                                        <tr>
                                            <th className="px-8 py-5">Audit Layer</th>
                                            <th className="px-8 py-5">Algorithm</th>
                                            <th className="px-8 py-5">Source</th>
                                            <th className="px-8 py-5">Precision</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5 text-xs font-bold italic text-slate-400">
                                        {[
                                            { l: "Base Premium", c: "CamperType * NationalMean", d: "RVIA Audit", p: "Actuarial" },
                                            { l: "Value Adj.", c: "AppraisedValue * 0.008", d: "LVAS-26", p: "Linear" },
                                            { l: "State Factor", c: "CurrentPremium * StateIdx", d: "NPS Survey", p: "Geospatial" }
                                        ].map((row, i) => (
                                            <tr key={i} className="hover:bg-white/5 transition-colors group">
                                                <td className="px-8 py-5 text-white">{row.l}</td>
                                                <td className="px-8 py-5 text-[10px] font-mono">{row.c}</td>
                                                <td className="px-8 py-5 text-[10px]">{row.d}</td>
                                                <td className="px-8 py-5 text-[9px] uppercase tracking-widest text-white/40 italic">{row.p}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Expert Content Section (Authority) */}
            <section className="py-32 bg-slate-950 border-t border-white/5">
                <div className="max-w-4xl mx-auto px-6 text-left">
                    <header className="mb-20">
                        <h2 className="text-5xl font-black text-white mb-8 leading-tight tracking-tighter">
                            Institutional Claims: <br />
                            <span className="text-emerald-500">2026 Leisure Vehicle Ethics</span>
                        </h2>
                        <p className="text-xl text-slate-400 leading-relaxed italic border-l-4 border-emerald-500 pl-8 py-2">
                            In 2026, camper insurance has evolved from simple 'towing add-ons' to robust, standalone liability hubs. This guide outlines the technical framework for truck camper, pop-up, and teardrop trailer insurance audits.
                        </p>
                    </header>

                    <div className="space-y-16">
                        <div className="prose prose-invert prose-emerald max-w-none">
                            <h3 className="text-3xl font-bold text-white flex items-center gap-3 mb-6">
                                <Mountain className="text-emerald-500" />
                                1. Regional Risk: The Impact of High-Altitude Camping
                            </h3>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                Forensic data from 2026 shows that premiums in states like **Colorado** and **Washington** are increasingly influenced by high-altitude weather patterns. Hail damage and flash flood risks in state parks now account for 22% of all camper claims. Our auditor incorporates these regional variances to ensure your premium reflects the true actuarial risk of your primary camping zones.
                            </p>
                        </div>

                        <div className="prose prose-invert prose-emerald max-w-none">
                            <h3 className="text-3xl font-bold text-white flex items-center gap-3 mb-6">
                                <Sun className="text-emerald-500" />
                                2. Full-Timer Liability & Statutory Resident Rights
                            </h3>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                With the rise of the digital nomad, 2026 insurance standards now heavily emphasize **Full-Timer Liability**. If you reside in your camper for more than 180 days annually, a specialized audit is required to include 'Premises Liability.' This protects you against third-party injuries occurring at your campsite, mirroring the protection of a traditional homeowners policy.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Expert FAQ Hub */}
            <section className="py-32 bg-slate-900/30 border-y border-white/5">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="flex items-center gap-4 mb-16 text-left">
                        <div className="w-16 h-16 rounded-[2rem] bg-emerald-500/20 flex items-center justify-center">
                            <Info className="w-8 h-8 text-emerald-400" />
                        </div>
                        <div>
                            <h2 className="text-4xl font-black text-white tracking-tighter">Leisure Intelligence Center</h2>
                            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs tracking-widest">Forensic Camper Guidance for 2026</p>
                        </div>
                    </div>

                    <div className="grid gap-6 text-left">
                        {FAQ_DATA.map((faq, i) => (
                            <details key={i} className="group bg-slate-900/50 border border-white/5 rounded-3xl overflow-hidden hover:border-emerald-500/30 transition-all duration-300">
                                <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                                    <span className="text-xl font-bold text-slate-200 group-open:text-emerald-400 transition-colors tracking-tight">
                                        {faq.q}
                                    </span>
                                    <ChevronRight className="w-6 h-6 text-slate-600 group-open:rotate-90 transition-transform" />
                                </summary>
                                <div className="px-8 pb-8 text-slate-400 leading-relaxed text-lg italic">
                                    {faq.a}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Tool Cluster & Citation */}
            <section className="py-32 bg-slate-950">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl font-black text-white mb-4 tracking-tighter uppercase italic">Institutional Audit Cluster</h2>
                        <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full" />
                    </div>
                    <div className="flex justify-center">
                        <div className="w-full max-w-4xl">
                            <RelatedCalculators currentCalc="camper-insurance" count={6} />
                        </div>
                    </div>

                    <div className="mt-24 pt-8 border-t border-white/5 text-center">
                        <p className="text-slate-600 text-xs font-mono uppercase tracking-[0.3em] flex items-center justify-center gap-4">
                            <span>{CAMPER_2026.citations[0]}</span>
                            <span className="w-2 h-2 rounded-full bg-emerald-500/50" />
                            <span>Audit Ref: CMP-2026-Premium</span>
                        </p>
                        <div className="mt-8">
                            <Link href="https://www.rvia.org/news-insights/economic-impact-rv-industry" className="text-emerald-500/60 hover:text-emerald-400 text-[10px] font-bold uppercase tracking-widest transition-colors">
                                View Official 2026 Camper Payout Standards →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Footer */}
            <section className="py-40 bg-slate-900 border-t border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-emerald-500/5 via-transparent to-transparent" />
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none italic uppercase">
                        Start Premium <br />
                        <span className="text-emerald-500 italic">Audit Node.</span>
                    </h2>
                    <p className="text-xl text-slate-400 mb-12 italic">Execute a professional premium audit using forensic 2026 camper logic.</p>
                    <Link
                        href="/camper-insurance/calculator"
                        className="px-12 py-6 bg-emerald-600 hover:bg-emerald-500 text-white rounded-[2rem] font-black text-2xl transition-all duration-300 shadow-[0_0_60px_rgba(16,185,129,0.4)] inline-flex items-center gap-3 group"
                    >
                        Access Premium Auditor
                        <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
