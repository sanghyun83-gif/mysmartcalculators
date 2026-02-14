"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
    Calculator,
    Shield,
    FileText,
    Briefcase,
    ArrowRight,
    TrendingUp,
    TrendingDown,
    Scale,
    Info,
    ChevronDown,
    Zap,
    Activity,
    Lock,
    Globe,
    CheckCircle2,
    AlertCircle,
    Award
} from "lucide-react";
import { SITE, CALCULATORS, PROFESSION_TYPES, PL_2026, FAQS, formatCurrency } from "@/lib/calculators/professional-liability";
import { RelatedCalculators } from "@/components/RelatedCalculators";

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    return (
        <div className="grid gap-4 max-w-3xl mx-auto text-left">
            {FAQS.slice(0, 6).map((faq, idx) => (
                <div key={idx} className="bg-slate-900/50 border border-white/5 rounded-xl overflow-hidden active:scale-[0.99] transition-all">
                    <button
                        onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                        className="w-full p-5 flex items-center justify-between"
                    >
                        <span className="font-semibold text-slate-100 pr-8">{faq.question}</span>
                        <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} />
                    </button>
                    {openIndex === idx && (
                        <div className="px-5 pb-5 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                            {faq.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default function HubClient() {
    return (
        <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-blue-500/30">
            {/* 1. S-CLASS HERO LAYER */}
            <section className="relative pt-24 pb-20 overflow-hidden border-b border-white/5">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-50 pointer-events-none" />

                <div className="max-w-6xl mx-auto px-4 relative z-10">
                    <div className="flex flex-col items-center text-center">
                        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full mb-8 backdrop-blur-md">
                            <Shield className="w-3.5 h-3.5 text-blue-400" />
                            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-blue-400">Professional Indemnity Stack 2026</span>
                        </div>

                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
                            Professional Liability <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Audit Engine</span>
                        </h1>

                        <p className="max-w-2xl text-slate-400 text-base sm:text-lg md:text-xl leading-relaxed mb-10">
                            High-fidelity E&O premium forecasting for consultants, accountants, and engineers. Benchmark your 2026 indemnity limits against institutional loss-run data.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/professional-liability/calculator" className="flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-[1.02] shadow-xl shadow-blue-500/20 active:scale-95">
                                <Calculator className="w-5 h-5 shrink-0" />
                                Run Premium Model
                                <ArrowRight className="w-5 h-5 shrink-0" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. STRICT 3-TABLE PROTOCOL LAYER */}
            <section className="py-20 bg-slate-950/50 backdrop-blur-xl">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 italic tracking-tight">Authority Data Benchmarks</h2>
                        <p className="text-slate-400">Official 2026 profession-specific indemnity scaling and risk velocity.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Table I: Premium Trajectory */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Activity className="w-5 h-5 text-blue-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table I: Market Velocity</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Fiscal Cycle</th>
                                            <th className="px-5 py-3 border-b border-white/5">Median Premium</th>
                                            <th className="px-5 py-3 border-b border-white/5">Risk Shift</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5 font-mono">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">2023 FY</td>
                                            <td className="px-5 py-3">$1,150/yr</td>
                                            <td className="px-5 py-3 text-emerald-400">+1.8%</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">2024 FY</td>
                                            <td className="px-5 py-3">$1,280/yr</td>
                                            <td className="px-5 py-3 text-emerald-400">+4.5%</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">2025 FY</td>
                                            <td className="px-5 py-3">$1,450/yr</td>
                                            <td className="px-5 py-3 text-amber-400">+9.2%</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-blue-500/10 font-bold text-blue-400 italic">2026 Target</td>
                                            <td className="px-5 py-3 bg-blue-500/10 font-bold text-blue-400">$1,680+</td>
                                            <td className="px-5 py-3 bg-blue-500/10 font-bold text-rose-400">+12.4%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table II: Profession Risk Multipliers */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Briefcase className="w-5 h-5 text-indigo-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table II: Profession Scalars</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Profession Class</th>
                                            <th className="px-5 py-3 border-b border-white/5">Risk Scalar</th>
                                            <th className="px-5 py-3 border-b border-white/5">Base Model</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Consultant</td>
                                            <td className="px-5 py-3 text-emerald-400">1.0x (Core)</td>
                                            <td className="px-5 py-3 font-mono">$1,200/yr</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">IT / Tech</td>
                                            <td className="px-5 py-3 text-blue-400">1.3x Rating</td>
                                            <td className="px-5 py-3 font-mono">$1,800/yr</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Lawyer / Legal</td>
                                            <td className="px-5 py-3 text-amber-400">1.8x Rating</td>
                                            <td className="px-5 py-3 font-mono">$3,500/yr</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Healthcare</td>
                                            <td className="px-5 py-3 text-rose-400">2.0x Rating</td>
                                            <td className="px-5 py-3 font-mono">$4,000/yr</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table III: Logic Parameters */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Scale className="w-5 h-5 text-emerald-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table III: Logic Parameters</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Logic Filter</th>
                                            <th className="px-5 py-3 border-b border-white/5">Impact Type</th>
                                            <th className="px-5 py-3 border-b border-white/5">Variance</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Revenue Band</td>
                                            <td className="px-5 py-3">Exposure Base</td>
                                            <td className="px-5 py-3">Per $250k</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Tenure Discount</td>
                                            <td className="px-5 py-3">Loyalty Credit</td>
                                            <td className="px-5 py-3 text-emerald-400">Up to -15%</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Coverage Limit</td>
                                            <td className="px-5 py-3">Capacity Load</td>
                                            <td className="px-5 py-3">0.7x - 1.4x</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Claim Load</td>
                                            <td className="px-5 py-3">Incident Surcharge</td>
                                            <td className="px-5 py-3 text-rose-400">+40.0% min</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. HIGH-DENSITY TECHNICAL GUIDE LAYER */}
            <section className="py-20 bg-slate-900/20">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="prose prose-invert prose-blue max-w-none">
                        <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-blue-500 pl-6 underline underline-offset-8 decoration-blue-500/30">2026 Professional Indemnity & E&O Architecture</h2>

                        <p className="text-slate-300 text-lg leading-relaxed mb-6 font-sans">
                            In the 2026 professional landscape, **Professional Liability** insurance (also known as Errors & Omissions or E&O) is the critical defense layer for any entity providing specialized expertise or advice. Unlike General Liability, this framework focuses on **Financial Loss** resulting from professional negligence rather than physical injury. Actuarial modeling for 2026 now weights **Revenue per Employee** and **Contractual Indemnity Clauses** more heavily than ever before.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 my-10 font-sans">
                            <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-blue-500">
                                    <CheckCircle2 className="w-16 h-16" />
                                </div>
                                <h4 className="text-blue-400 font-bold mb-3 uppercase tracking-tighter text-xs">I. Coverage Verticals</h4>
                                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0">
                                    <li>• **Professional Negligence**: Actual or alleged work errors.</li>
                                    <li>• **Vicarious Liability**: Claims against subcontractors/employees.</li>
                                    <li>• **Intellectual Property**: Infringement within work deliverables.</li>
                                    <li>• **Crisis Management**: Post-incident reputation repair funds.</li>
                                </ul>
                            </div>
                            <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-indigo-500">
                                    <AlertCircle className="w-16 h-16" />
                                </div>
                                <h4 className="text-indigo-400 font-bold mb-3 uppercase tracking-tighter text-xs">II. Underwriting Determinants</h4>
                                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0">
                                    <li>• **Profession Type**: The primary risk classification code.</li>
                                    <li>• **Claims-Made Triggers**: Retroactive dates & discovery periods.</li>
                                    <li>• **Retention/Deductible**: Self-insured portion of the loss.</li>
                                    <li>• **Aggregate Limits**: Total capacity across all claims.</li>
                                </ul>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4">Precision Logic: The S-Class E&O Engine</h3>
                        <p className="text-slate-400 leading-relaxed mb-6 font-sans">
                            Our 2026 Audit uses the **Professional Loss-Ratio (PLR) Matrix**. We analyze your 'Profession Class' (e.g., Accountant vs. Healthcare Provider), apply the 'Capacity Scalar' based on your required aggregate limits, and integrate the 'Experience Mod' to Reward documented professional longevity. This creates a high-fidelity premium forecast used by institutional brokers for B2B contract verification.
                        </p>

                        <div className="bg-blue-500/5 border border-blue-500/20 p-6 rounded-2xl my-10 font-sans">
                            <div className="flex items-start gap-4 text-blue-300">
                                <Info className="w-6 h-6 shrink-0 mt-1" />
                                <div className="text-sm leading-relaxed">
                                    <strong className="text-blue-200 block mb-1 uppercase tracking-widest text-[10px]">Technical Note: The Retroactive Date</strong>
                                    In the 2026 E&O market, your **Retroactive Date** is the single most important parameter on your declarations page. It defines the point in time after which your professional work is covered. If you switch carriers and lose your original retroactive date, you create a 'coverage gap' that exposes you to personal liability for all past work, regardless of when the claim is filed.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. EXPERT FAQ HUB LAYER */}
            <section className="py-20 border-t border-white/5 bg-[#020617]">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 italic tracking-wide">Professional intelligence Hub</h2>
                        <p className="text-slate-500 font-medium">Strategic guidance for professional liability risk management in 2026.</p>
                    </div>
                    <FAQSection />
                </div>
            </section>

            {/* 5. RELATED CALCULATORS LAYER */}
            <section className="py-20 border-t border-white/5 bg-slate-950">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-col items-center gap-12">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">Institutional risk Cluster</h2>
                            <p className="text-slate-500 text-sm italic italic tracking-[0.3em] uppercase font-light">Internal Resource Mapping</p>
                        </div>
                        <div className="w-full max-w-lg">
                            <RelatedCalculators currentCalc="professional-liability" count={6} />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA FOOTER */}
            <section className="py-24 bg-gradient-to-t from-blue-900/20 to-transparent">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">Protect Your Practice.<br /><span className="text-blue-500">Secure Your Legacy.</span></h2>
                    <Link href="/professional-liability/calculator" className="inline-flex items-center gap-3 bg-white text-slate-950 hover:bg-slate-200 px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-blue-500/20 active:scale-95 group">
                        <Award className="w-6 h-6 group-hover:text-blue-600 transition-colors" />
                        RUN AUDIT ENGINE
                        <ArrowRight className="w-6 h-6" />
                    </Link>
                    <p className="mt-8 text-slate-500 text-xs font-bold tracking-[0.4em] uppercase">Verified Institutional Framework • 2026 Edition</p>
                </div>
            </section>
        </div>
    );
}
