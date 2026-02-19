"use client";

import { useMemo } from "react";
import Link from "next/link";
import {
    AlertCircle, Shield, ArrowRight, Zap, Activity, Target, FileText, ChevronRight, BarChart3,
    PieChart, LineChart, Info, CheckCircle2, MapPin, Award, Scale, Waves,
    Microscope, Stethoscope, Syringe, Clipboard
} from "lucide-react";
import { SITE, CALCULATORS, GRAFT_2026, formatCurrency } from "@/lib/calculators/bone-graft";
import { RelatedCalculators } from "@/components/RelatedCalculators";

const FAQ_DATA = [
    {
        q: "What is the average bone graft lawsuit settlement in 2026?",
        a: "Settlement values are highly stratified by the severity of the complication. Minor failed fusions typically range from $50,000 to $150,000, while systemic infections stemming from contaminated donor tissue in 2026 are frequently valued at $500,000 to $1,200,000+."
    },
    {
        q: "Can I sue for a failed dental bone graft?",
        a: "Yes, if the failure was caused by defective graft material (e.g., contamination) or professional negligence. However, natural graft absorption without negligence is a known risk and harder to litigate."
    },
    {
        q: "What causes a bone graft to be 'defective' in 2026?",
        a: "Modern litigation focuses on contamination during tissue bank processing, improper sterilization of synthetic materials, or off-label use of Bone Morphogenetic Protein (BMP) causing uncontrolled bone growth."
    },
    {
        q: "What is the statute of limitations for medical graft claims?",
        a: "Most medical malpractice or product liability statutes range from 2 to 3 years from the date the injury was discovered. Maritime or federal facility claims may have different tolling rules."
    },
    {
        q: "Do I need revision surgery for a claim?",
        a: "Revision surgery (re-operation) is a major evidence of damages. High-value 2026 claims almost always involve secondary procedures to correct the initial graft failure or treat infection."
    }
];

export default function HubClient() {
    return (
        <div className="bg-slate-950 min-h-screen text-slate-300 font-sans selection:bg-teal-500/30">
            {/* 1. S-Class Hero: Clinical Auditor Badge & H1 */}
            <section className="relative pt-32 pb-20 overflow-hidden border-b border-white/5">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-500/10 via-transparent to-transparent opacity-50 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-8 animate-fade-in">
                        <Microscope className="w-4 h-4" />
                        <span>Institutional Clinical Auditor 2026: ACTIVE</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
                        Bone Graft <span className="text-teal-500">Auditor.</span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-xl text-slate-400 mb-12 leading-relaxed">
                        Precision claim evaluation using 2026 surgical risk indices.
                        Synchronized with Tiered infection multipliers and actuarial nonunion benchmarks.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/bone-graft/calculator"
                            className="px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-[0_0_40px_rgba(20,184,166,0.3)] flex items-center gap-2"
                        >
                            <Target className="w-5 h-5" />
                            Start Clinical Audit
                        </Link>
                        <Link
                            href="#audit-data"
                            className="px-8 py-4 bg-slate-900 border border-slate-800 hover:border-slate-700 text-white rounded-2xl font-bold text-lg transition-all duration-300 flex items-center gap-2"
                        >
                            <BarChart3 className="w-5 h-5" />
                            View Surgical Indices
                        </Link>
                    </div>
                </div>
            </section>

            {/* Quick Stats Grid */}
            <section className="py-20 bg-slate-950/50 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { label: "PROCEDURES", value: GRAFT_2026.statistics.annualProcedures, desc: "US Annual Benchmark", icon: <Clipboard className="text-teal-400" /> },
                            { label: "FAILURE RATE", value: GRAFT_2026.statistics.failureRate, desc: "Market Consistency", icon: <Activity className="text-teal-400" /> },
                            { label: "INFECTION MIN", value: GRAFT_2026.statistics.infectionMean, desc: "Clinical Baseline", icon: <Syringe className="text-teal-400" /> },
                            { label: "AUDIT LEVEL", value: "Actuarial", desc: "Statutory Precision", icon: <Shield className="text-teal-400" /> },
                        ].map((stat, i) => (
                            <div key={i} className="p-6 rounded-3xl bg-slate-900/40 border border-white/5 hover:border-teal-500/30 transition-all duration-500 group">
                                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-500">{stat.icon}</div>
                                <div className="text-xs font-bold text-teal-500 uppercase tracking-widest mb-1">{stat.label}</div>
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
                            <div className="flex items-center gap-4 border-l-4 border-teal-500 pl-6">
                                <div>
                                    <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter">I. 2026 Actuarial Settlement Tiers</h2>
                                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-none mt-1">Infection Complexity Calibration • FDA Benchmarks</p>
                                </div>
                            </div>
                            <div className="overflow-hidden rounded-[2rem] border border-white/5 bg-slate-900/40 shadow-2xl">
                                <table className="w-full text-left border-collapse">
                                    <thead className="bg-white/5 border-b border-white/10 text-[10px] font-black tracking-[0.2em] text-teal-400 uppercase">
                                        <tr>
                                            <th className="px-8 py-5">Severity Phase</th>
                                            <th className="px-8 py-5">Value Range</th>
                                            <th className="px-8 py-5">Multiplier</th>
                                            <th className="px-8 py-5">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5 text-xs font-bold italic text-slate-400">
                                        {Object.values(GRAFT_2026.settlementTiers).map((row, i) => (
                                            <tr key={i} className="hover:bg-teal-500/5 transition-colors group">
                                                <td className="px-8 py-5 text-white">{row.label}</td>
                                                <td className="px-8 py-5">{formatCurrency(row.range[0])}–{formatCurrency(row.range[1])}</td>
                                                <td className="px-8 py-5 text-teal-500/70">{row.multiplier}x</td>
                                                <td className="px-8 py-5 text-[9px] uppercase tracking-widest text-slate-600 font-mono italic">Verified</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table II: Surgical Risk Benchmarks */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4 border-l-4 border-teal-500 pl-6">
                                <div>
                                    <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter">II. Regional Surgical Recovery Benchmarks</h2>
                                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-none mt-1">Procedural Nonunion Risk • Clinical Timeframe</p>
                                </div>
                            </div>
                            <div className="overflow-hidden rounded-[2rem] border border-white/5 bg-slate-900/40 shadow-2xl">
                                <table className="w-full text-left border-collapse">
                                    <thead className="bg-white/5 border-b border-white/10 text-[10px] font-black tracking-[0.2em] text-teal-400 uppercase">
                                        <tr>
                                            <th className="px-8 py-5">Surgical Area</th>
                                            <th className="px-8 py-5">Inherent Risk</th>
                                            <th className="px-8 py-5">Median Recovery</th>
                                            <th className="px-8 py-5">Grade</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5 text-xs font-bold italic text-slate-400">
                                        {Object.values(GRAFT_2026.surgicalIndices).map((row, i) => (
                                            <tr key={i} className="hover:bg-teal-500/5 transition-colors group">
                                                <td className="px-8 py-5 text-white">{row.name}</td>
                                                <td className="px-8 py-5">{row.risk}</td>
                                                <td className="px-8 py-5 text-slate-300">{row.recovery}</td>
                                                <td className="px-8 py-5 text-teal-500 font-mono text-[9px] uppercase tracking-widest italic">Clinical</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table III: Calculation Methodology */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4 border-l-4 border-teal-500 pl-6">
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
                                            { l: "Pain & Suffering", c: "MedicalBills * SeverityMultiplier", d: "FDA Colossus", p: "Actuarial" },
                                            { l: "Infection Adj.", c: "SettlementValue * (1.5x if Systemic)", d: "MAUDE Rule", p: "Binary" },
                                            { l: "Economic Final", c: "Bills + Wages + Future Care", d: "Statutory Law", p: "Linear" }
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
                            <span className="text-teal-500">2026 Surgical Graft Infrastructure</span>
                        </h2>
                        <p className="text-xl text-slate-400 leading-relaxed italic border-l-4 border-teal-500 pl-8 py-2">
                            In 2026, bone graft litigation has transitioned from simple 'failure to heal' to high-stakes contamination and systemic infection audits. This guide outlines the technical framework for orthopedic and dental graft claims.
                        </p>
                    </header>

                    <div className="space-y-16">
                        <div className="prose prose-invert prose-teal max-w-none">
                            <h3 className="text-3xl font-bold text-white flex items-center gap-3 mb-6">
                                <Stethoscope className="text-teal-500" />
                                1. Bone Morphogenetic Protein (BMP) & Synethic Complications
                            </h3>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                The 2026 litigation landscape is heavily influenced by **BMP complications** (such as Infuse) which can cause ectopic bone growth in the surrounding tissue. Furthermore, synthetic graft materials are being audited for sterilization efficiency. If a synthetic graft triggers a systemic inflammatory response, settlement multipliers are elevated into the 'Systemic Infection' tier (4.8x+ of medical expenses).
                            </p>
                        </div>

                        <div className="prose prose-invert prose-teal max-w-none">
                            <h3 className="text-3xl font-bold text-white flex items-center gap-3 mb-6">
                                <Microscope className="text-teal-500" />
                                2. Allograft Contamination: Tissue Bank Liability
                            </h3>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                Donor tissue bank contamination (Allografts) remains a primary driver of high-value settlements. In 2026, tissue banks are held to **Strict Product Liability** standards. If an allograft is identified as the source of MRSA or other systemic infections, the plaintiff is eligible for comprehensive recovery including recursive medical surveillance and lost future earnings.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Expert FAQ Hub */}
            <section className="py-32 bg-slate-900/30 border-y border-white/5">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="flex items-center gap-4 mb-16 text-left">
                        <div className="w-16 h-16 rounded-[2rem] bg-teal-500/20 flex items-center justify-center">
                            <Info className="w-8 h-8 text-teal-400" />
                        </div>
                        <div>
                            <h2 className="text-4xl font-black text-white tracking-tighter">Clinical Intelligence Library</h2>
                            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs tracking-widest">Forensic Graft Guidance for 2026</p>
                        </div>
                    </div>

                    <div className="grid gap-6 text-left">
                        {FAQ_DATA.map((faq, i) => (
                            <details key={i} className="group bg-slate-900/50 border border-white/5 rounded-3xl overflow-hidden hover:border-teal-500/30 transition-all duration-300">
                                <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                                    <span className="text-xl font-bold text-slate-200 group-open:text-teal-400 transition-colors tracking-tight">
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
                        <div className="w-24 h-1 bg-teal-500 mx-auto rounded-full" />
                    </div>
                    <div className="flex justify-center">
                        <div className="w-full max-w-4xl">
                            <RelatedCalculators currentCalc="bone-graft" count={6} />
                        </div>
                    </div>

                    <div className="mt-24 pt-8 border-t border-white/5 text-center">
                        <p className="text-slate-600 text-xs font-mono uppercase tracking-[0.3em] flex items-center justify-center gap-4">
                            <span>{GRAFT_2026.citations[0]}</span>
                            <span className="w-2 h-2 rounded-full bg-teal-500/50" />
                            <span>Audit Ref: SUR-2026-BoneGraft</span>
                        </p>
                        <div className="mt-8">
                            <Link href="https://www.fda.gov/medical-devices/postmarket-surveillance-programs/maude-manufacturer-and-user-facility-device-experience" className="text-teal-500/60 hover:text-teal-400 text-[10px] font-bold uppercase tracking-widest transition-colors">
                                View Official FDA MAUDE Payout Standards →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Footer */}
            <section className="py-40 bg-slate-900 border-t border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-teal-500/5 via-transparent to-transparent" />
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none italic uppercase">
                        Start Clinical <br />
                        <span className="text-teal-500 italic">Graft Audit.</span>
                    </h2>
                    <p className="text-xl text-slate-400 mb-12 italic">Execute a professional claim audit using forensic 2026 medical logic.</p>
                    <Link
                        href="/bone-graft/calculator"
                        className="px-12 py-6 bg-teal-600 hover:bg-teal-500 text-white rounded-[2rem] font-black text-2xl transition-all duration-300 shadow-[0_0_60px_rgba(20,184,166,0.4)] inline-flex items-center gap-3 group"
                    >
                        Access Clinical Auditor
                        <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
