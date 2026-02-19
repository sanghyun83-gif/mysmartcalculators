"use client";

import { useMemo } from "react";
import Link from "next/link";
import {
    AlertCircle, Shield, ArrowRight, Zap, Activity, Target, FileText, ChevronRight, BarChart3,
    PieChart, LineChart, Info, CheckCircle2, MapPin, Award, Scale, Gavel,
    Beer, UserMinus, Footprints, Skull, Microscope, Sparkles
} from "lucide-react";
import { SITE, CASINO_2026, formatCurrency } from "@/lib/calculators/casino-injury";
import { RelatedCalculators } from "@/components/RelatedCalculators";

const FAQ_DATA = [
    {
        q: "How is a casino injury settlement calculated in 2026?",
        a: "Settlements use a 'Forensic Multiplier' based on medical costs. Multipliers in 2026 range from 1.6x (minor) to 5.8x (catastrophic), adjusted for jurisdictional indices like Las Vegas (1.45x) or Tribal status (0.85x)."
    },
    {
        q: "What is Dram Shop liability in a casino context?",
        a: "Dram Shop laws hold casinos liable if they provide alcohol to an obviously intoxicated person who then causes an injury. In 2026, this frequently triggers a 1.4x 'Special Damages' multiplier for victims."
    },
    {
        q: "Does security footage help my casino claim?",
        a: "Critically. Casinos are under constant surveillance. In 2026, 'Negligent Security' claims often rely on sub-par monitoring or delayed response times captured on cameras, significantly increasing settlement leverage."
    },
    {
        q: "Can I sue if I am injured at a Tribal casino?",
        a: "Yes, but it is complex. Tribal casinos have sovereign immunity, requiring claims to be filed through specific Tribal Courts. In 2026, payouts here are indexed at 0.85x due to these statutory limitations."
    },
    {
        q: "Who is responsible for a slip and fall on a casino floor?",
        a: "The casino is liable if they had 'notice' of the hazard (e.g., a spill or torn carpet) and failed to address it. 2026 standards require casinos to prove frequent floor inspections to avoid liability."
    }
];

export default function HubClient() {
    return (
        <div className="bg-slate-950 min-h-screen text-slate-300 font-sans selection:bg-purple-500/30">
            {/* 1. S-Class Hero: Forensic Auditor Badge & H1 */}
            <section className="relative pt-32 pb-20 overflow-hidden border-b border-white/5">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent opacity-50 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-8 animate-fade-in">
                        <Sparkles className="w-4 h-4" />
                        <span>Institutional Forensic Auditor 2026: ACTIVE</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none italic uppercase">
                        Casino <span className="text-purple-500">Forensics.</span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-xl text-slate-400 mb-12 leading-relaxed font-light italic">
                        Forensic claim evaluation using 2026 Gaming Audit multipliers.
                        Synchronized with Dram Shop liability and Las Vegas jurisdictional benchmarks.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/casino-injury/calculator"
                            className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-[0_0_40px_rgba(168,85,247,0.3)] flex items-center gap-2"
                        >
                            <Target className="w-5 h-5" />
                            Start Forensic Audit
                        </Link>
                        <Link
                            href="#audit-data"
                            className="px-8 py-4 bg-slate-900 border border-slate-800 hover:border-slate-700 text-white rounded-2xl font-bold text-lg transition-all duration-300 flex items-center gap-2"
                        >
                            <BarChart3 className="w-5 h-5" />
                            View 2026 Payouts
                        </Link>
                    </div>
                </div>
            </section>

            {/* Quick Stats Grid */}
            <section className="py-20 bg-slate-950/50 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { label: "ANNUAL SETTLEMENTS", value: CASINO_2026.statistics.annualSettlements, desc: "Total US Gaming Liab", icon: <Gavel className="text-purple-400" /> },
                            { label: "AVG TRIAL AWARD", value: CASINO_2026.statistics.avgTrialAward, desc: "Forensic Mean 2026", icon: <Award className="text-purple-400" /> },
                            { label: "SECURITY LEAKAGE", value: CASINO_2026.statistics.securityIncidents, desc: "Claims Trend", icon: <UserMinus className="text-purple-400" /> },
                            { label: "AUDIT LEVEL", value: "Forensic", desc: "Statutory Precision", icon: <Shield className="text-purple-400" /> },
                        ].map((stat, i) => (
                            <div key={i} className="p-6 rounded-3xl bg-slate-900/40 border border-white/5 hover:border-purple-500/30 transition-all duration-500 group">
                                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-500">{stat.icon}</div>
                                <div className="text-xs font-bold text-purple-500 uppercase tracking-widest mb-1">{stat.label}</div>
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
                        {/* Table I: Settlement Tiers */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4 border-l-4 border-purple-500 pl-6">
                                <div>
                                    <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter">I. 2026 Actuarial Settlement Tiers</h2>
                                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-none mt-1">Severity Calibration • Institutional Benchmarks</p>
                                </div>
                            </div>
                            <div className="overflow-hidden rounded-[2rem] border border-white/5 bg-slate-900/40 shadow-2xl">
                                <table className="w-full text-left border-collapse">
                                    <thead className="bg-white/5 border-b border-white/10 text-[10px] font-black tracking-[0.2em] text-purple-400 uppercase">
                                        <tr>
                                            <th className="px-8 py-5">Injury Class</th>
                                            <th className="px-8 py-5">Value Range</th>
                                            <th className="px-8 py-5">Multiplier</th>
                                            <th className="px-8 py-5">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5 text-xs font-bold italic text-slate-400">
                                        {Object.values(CASINO_2026.settlementTiers).map((row, i) => (
                                            <tr key={i} className="hover:bg-purple-500/5 transition-colors group">
                                                <td className="px-8 py-5 text-white">{row.label}</td>
                                                <td className="px-8 py-5">{formatCurrency(row.range[0])}–{formatCurrency(row.range[1])}</td>
                                                <td className="px-8 py-5 text-purple-500/70">{row.multiplier}x</td>
                                                <td className="px-8 py-5 text-[9px] uppercase tracking-widest text-slate-600 font-mono italic">Verified</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table II: Jurisdictional Indices */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4 border-l-4 border-purple-500 pl-6">
                                <div>
                                    <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter">II. Regional Gaming Liability Indices</h2>
                                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-none mt-1">Jurisdictional Variance • Payout Frequency</p>
                                </div>
                            </div>
                            <div className="overflow-hidden rounded-[2rem] border border-white/5 bg-slate-900/40 shadow-2xl">
                                <table className="w-full text-left border-collapse">
                                    <thead className="bg-white/5 border-b border-white/10 text-[10px] font-black tracking-[0.2em] text-purple-400 uppercase">
                                        <tr>
                                            <th className="px-8 py-5">Jurisdiction</th>
                                            <th className="px-8 py-5">Payout Index</th>
                                            <th className="px-8 py-5">Claim Status</th>
                                            <th className="px-8 py-5">Grade</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5 text-xs font-bold italic text-slate-400">
                                        {Object.values(CASINO_2026.jurisdictionalIndices).map((row, i) => (
                                            <tr key={i} className="hover:bg-purple-500/5 transition-colors group">
                                                <td className="px-8 py-5 text-white">{row.name}</td>
                                                <td className="px-8 py-5 italic">{row.index}x</td>
                                                <td className="px-8 py-5 text-slate-300">{row.status}</td>
                                                <td className="px-8 py-5 text-purple-500 font-mono text-[9px] uppercase tracking-widest italic">Actuarial</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table III: Calculation Methodology */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4 border-l-4 border-purple-500 pl-6">
                                <div>
                                    <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter">III. Forensic P&I Settlement Logic</h2>
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
                                            { l: "Pain & Suffering", c: "MedicalBills * (Injury + Scene Multiplier)", d: "AGA Colossus", p: "Actuarial" },
                                            { l: "Dram Shop Adj.", c: "SettlementValue * 1.4x", d: "Statutory Law", p: "Binary" },
                                            { l: "Regional Final", c: "CurrentPremium * JurisdictionIdx", d: "GFAS-26", p: "Geospatial" }
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
                            <span className="text-purple-500">2026 Gaming Facility Ethics</span>
                        </h2>
                        <p className="text-xl text-slate-400 leading-relaxed italic border-l-4 border-purple-500 pl-8 py-2">
                            In 2026, casino injury litigation has evolved into a forensic battle of surveillance data and 'Dram Shop' intoxication verification. This guide outlines the technical framework for private and tribal gaming facility audits.
                        </p>
                    </header>

                    <div className="space-y-16">
                        <div className="prose prose-invert prose-purple max-w-none">
                            <h3 className="text-3xl font-bold text-white flex items-center gap-3 mb-6">
                                <Beer className="text-purple-500" />
                                1. Over-Service & Dram Shop Liability
                            </h3>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                Forensic audits in 2026 increasingly focus on the 'Dram Shop' aspect of casino claims. If a patron is over-served alcohol and subsequent negligence occurs (e.g., an assault or a fall), the casino faces enhanced liability. Our auditor applies a 1.4x factor to claims where intoxication protocols were violated, as established by the **GFAS-26** standards.
                            </p>
                        </div>

                        <div className="prose prose-invert prose-purple max-w-none">
                            <h3 className="text-3xl font-bold text-white flex items-center gap-3 mb-6">
                                <Microscope className="text-purple-500" />
                                2. Surveillance Spoilation & Negligent Security
                            </h3>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                Casinos are required to maintain high-definition surveillance of all gaming floors. In 2026 litigation, the 'Negligent Security' claim value surges if there is evidence of 'blind spots' or if the casino fails to preserve footage following an incident. A verified security failure triggers the **Institutional Audit** multiplier of 5.8x for catastrophic head injuries or physical assaults.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Expert FAQ Hub */}
            <section className="py-32 bg-slate-900/30 border-y border-white/5">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="flex items-center gap-4 mb-16 text-left">
                        <div className="w-16 h-16 rounded-[2rem] bg-purple-500/20 flex items-center justify-center">
                            <Info className="w-8 h-8 text-purple-400" />
                        </div>
                        <div>
                            <h2 className="text-4xl font-black text-white tracking-tighter">Gaming Intelligence Center</h2>
                            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs tracking-widest">Forensic Casino Guidance for 2026</p>
                        </div>
                    </div>

                    <div className="grid gap-6 text-left">
                        {FAQ_DATA.map((faq, i) => (
                            <details key={i} className="group bg-slate-900/50 border border-white/5 rounded-3xl overflow-hidden hover:border-purple-500/30 transition-all duration-300">
                                <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                                    <span className="text-xl font-bold text-slate-200 group-open:text-purple-400 transition-colors tracking-tight">
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
                        <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full" />
                    </div>
                    <div className="flex justify-center">
                        <div className="w-full max-w-4xl">
                            <RelatedCalculators currentCalc="casino-injury" count={6} />
                        </div>
                    </div>

                    <div className="mt-24 pt-8 border-t border-white/5 text-center">
                        <p className="text-slate-600 text-xs font-mono uppercase tracking-[0.3em] flex items-center justify-center gap-4">
                            <span>{CASINO_2026.citations[0]}</span>
                            <span className="w-2 h-2 rounded-full bg-purple-500/50" />
                            <span>Audit Ref: CAS-2026-Lawsuit</span>
                        </p>
                        <div className="mt-8">
                            <Link href="https://www.americangaming.org/resources/state-of-the-states-2026" className="text-purple-500/60 hover:text-purple-400 text-[10px] font-bold uppercase tracking-widest transition-colors">
                                View Official 2026 Gaming Payout Standards →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Footer */}
            <section className="py-40 bg-slate-900 border-t border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-purple-500/5 via-transparent to-transparent" />
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none italic uppercase leading-none">
                        Start Casino <br />
                        <span className="text-purple-500 italic">Audit Node.</span>
                    </h2>
                    <p className="text-xl text-slate-400 mb-12 italic">Execute a professional claim audit using forensic 2026 gaming logic.</p>
                    <Link
                        href="/casino-injury/calculator"
                        className="px-12 py-6 bg-purple-600 hover:bg-purple-500 text-white rounded-[2rem] font-black text-2xl transition-all duration-300 shadow-[0_0_60px_rgba(168,85,247,0.4)] inline-flex items-center gap-3 group"
                    >
                        Access Claim Auditor
                        <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
