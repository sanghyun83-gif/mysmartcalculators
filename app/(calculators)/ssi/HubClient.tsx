"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
    Calculator,
    TrendingUp,
    Shield,
    FileText,
    ArrowRight,
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
    DollarSign,
    RefreshCw,
    Clock,
    Target,
    Briefcase,
    PieChart,
    LineChart
} from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const faqs = [
        {
            q: "What is the maximum monthly SSI payment for an individual in 2026?",
            a: "The maximum federal SSI payment for an individual in 2026 is projected to be approximately $965 - $985 per month, assuming a typical COLA adjustment. Some states provide additional 'Optional State Supplementation' (OSS) that can increase this total."
        },
        {
            q: "How do the SSI asset/resource limits work for 2026?",
            a: "SSI remains a strict need-based program. To qualify, you must have 'countable resources' of no more than $2,000 for an individual or $3,000 for a couple. Your primary home and one vehicle are usually excluded from this calculation."
        },
        {
            q: "What is the 'Income Floor' for SSI eligibility?",
            a: "To receive some amount of SSI, your countable monthly income must be lower than the maximum federal benefit (e.g., ~$965). The SSA 'brackets' your income, excluding the first $20 of most income and the first $65 of earned income, plus half of the remaining earnings."
        },
        {
            q: "Can I receive both Social Security (SSDI/Retirement) and SSI?",
            a: "Yes. This is known as being a 'Concurrent Beneficiary.' If your Social Security benefit is very low (below the SSI threshold), SSI can 'top off' your income to bring you up to the federal minimum level."
        },
        {
            q: "Does SSI provide health insurance coverage?",
            a: "In most states, qualifying for SSI automatically makes you eligible for Medicaid. This provides immediate, low-cost healthcare coverage, unlike SSDI which typically requires a 24-month waiting period for Medicare."
        },
        {
            q: "How does 'In-Kind Support and Maintenance' (ISM) affect my SSI?",
            a: "If someone else provides you with free food or shelter (ISM), the SSA may reduce your monthly payment by up to one-third. However, recent 2024/2025 policy shifts have begun to exclude 'food' from this calculation, significantly simplifying the auditing process for 2026 claimants."
        }
    ];

    return (
        <div className="grid gap-4 max-w-3xl mx-auto text-left">
            {faqs.map((faq, idx) => (
                <div key={idx} className="bg-slate-900/50 border border-white/5 rounded-xl overflow-hidden active:scale-[0.99] transition-all">
                    <button
                        onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                        className="w-full p-5 flex items-center justify-between"
                    >
                        <span className="font-semibold text-slate-100 pr-8">{faq.q}</span>
                        <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} />
                    </button>
                    {openIndex === idx && (
                        <div className="px-5 pb-5 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                            {faq.a}
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
                            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-blue-400">Financial Floor Protocol 2026</span>
                        </div>

                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
                            SSI Benefits <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 italic">Audit Matrix</span>
                        </h1>

                        <p className="max-w-2xl text-slate-400 text-base sm:text-lg md:text-xl leading-relaxed mb-10">
                            Institutional-grade need-based assistance forecasting. Solve for asset thresholds, ISM frictions, and state-supplemental yields with 2026 precision.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/ssi/calculator" className="flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-[1.02] shadow-xl shadow-blue-500/20 active:scale-95">
                                <Calculator className="w-5 h-5 shrink-0" />
                                Run SSI Auditor
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
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 italic">Eligibility Benchmarks</h2>
                        <p className="text-slate-400">Official 2026 SSA need-based thresholds and benefit targets.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Table I: Benefit Logic */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Target className="w-5 h-5 text-blue-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table I: 2026 Levels</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Recipient</th>
                                            <th className="px-5 py-3 border-b border-white/5">Max Benefit</th>
                                            <th className="px-5 py-3 border-b border-white/5">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5 font-mono">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Individual</td>
                                            <td className="px-5 py-3">~$967</td>
                                            <td className="px-5 py-3 text-emerald-400">Federal</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Couple</td>
                                            <td className="px-5 py-3">~$1,450</td>
                                            <td className="px-5 py-3 text-blue-400">Combined</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Essential Person</td>
                                            <td className="px-5 py-3">~$484</td>
                                            <td className="px-5 py-3 text-emerald-400">Add-on</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-blue-500/10 font-bold text-blue-400 italic">2026 COLA</td>
                                            <td className="px-5 py-3 bg-blue-500/10 font-bold text-blue-400">~2.7%</td>
                                            <td className="px-5 py-3 bg-blue-500/10 font-bold text-blue-400">Proj.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table II: Payout Scalars */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Activity className="w-5 h-5 text-indigo-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table II: Assets</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Limit Type</th>
                                            <th className="px-5 py-3 border-b border-white/5">Threshold</th>
                                            <th className="px-5 py-3 border-b border-white/5">Notes</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Individual Assets</td>
                                            <td className="px-5 py-3 font-mono">$2,000</td>
                                            <td className="px-5 py-3 text-emerald-400">Capped</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Couple Assets</td>
                                            <td className="px-5 py-3 font-mono">$3,000</td>
                                            <td className="px-5 py-3 text-blue-400">Total</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Primary Home</td>
                                            <td className="px-5 py-3 font-mono">Exempt</td>
                                            <td className="px-5 py-3 text-amber-400">Unlimited</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">Automobile (1)</td>
                                            <td className="px-5 py-3 font-mono">Exempt</td>
                                            <td className="px-5 py-3 text-teal-400">Partial</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table III: Optimization Mapping */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <RefreshCw className="w-5 h-5 text-amber-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table III: Strategic Pivot</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Objective</th>
                                            <th className="px-5 py-3 border-b border-white/5">Primary Factor</th>
                                            <th className="px-5 py-3 border-b border-white/5">Outcome</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5 font-mono">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Max Benefit</td>
                                            <td className="px-5 py-3">ISM Shield</td>
                                            <td className="px-5 py-3 text-emerald-400">Retained</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Eligibility</td>
                                            <td className="px-5 py-3">ABLE Account</td>
                                            <td className="px-5 py-3 text-blue-400">Protected</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Income Buffer</td>
                                            <td className="px-5 py-3">Earned Inc. Excl.</td>
                                            <td className="px-5 py-3 text-indigo-400">Elevated</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">Medicaid Entry</td>
                                            <td className="px-5 py-3">1619(b) Protec.</td>
                                            <td className="px-5 py-3 text-teal-400">Secure</td>
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
                        <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-blue-500 pl-6 underline underline-offset-8 decoration-blue-500/30">2026 Supplemental Income Architecture</h2>

                        <p className="text-slate-300 text-lg leading-relaxed mb-6 font-sans text-left">
                            SSI (Supplemental Security Income) represents the core financial baseline for elder citizens and individuals with permanent disabilities who lack substantial work history. In the 2026 fiscal cycle, the focus is on navigating **Asset Consolidation Theory**, **ISM (In-Kind Support) Modification**, and **Step-Down Benefit Scaling**. Our S-Class engine analyzes the core support vectors: **Countable Income Bracketing**, **Federal Benefit Rate (FBR) Adjustments**, and **Medicaid Eligibility Synchronization**.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 my-10 font-sans">
                            <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-blue-500">
                                    <PieChart className="w-16 h-16" />
                                </div>
                                <h4 className="text-blue-400 font-bold mb-3 uppercase tracking-tighter text-xs">I. Expenditure Dynamics</h4>
                                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                                    <li>• **Countable Income Logic**: Solving for the $20 general exclusion and the $65+$ half earned-income buffer.</li>
                                    <li>• **ISM Friction Arbitrage**: Tracking the 'One-Third Reduction' impact for multi-generational households.</li>
                                    <li>• **State Supplement Index**: Concurrent auditing of state-level SSI enhancements (OSS).</li>
                                    <li>• **PASS (Plan to Achieve Self-Support)**: Identifying income exclusions for vocational rehabilitation expenditures.</li>
                                </ul>
                            </div>
                            <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-indigo-500">
                                    <LineChart className="w-16 h-16" />
                                </div>
                                <h4 className="text-indigo-400 font-bold mb-3 uppercase tracking-tighter text-xs">II. Regulatory Friction</h4>
                                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                                    <li>• **Asset Threshold Rigidity**: Managing the $2,000/3,000 hardware limits for cash-on-hand.</li>
                                    <li>• **Medicaid Bridge Stability**: Monitoring how SSI approval triggers healthcare liquidity across various state nexus points.</li>
                                    <li>• **Student Earned Income Exclusion**: Managing the $2,200+ monthly exclusions for recipients under 22 in education.</li>
                                    <li>• **Deeming Mechanisms**: Auditing maternal/paternal income impact on child-SSI benefit yields.</li>
                                </ul>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4 text-left">The Actuarial Model: Solving for the SSI Alpha</h3>
                        <p className="text-slate-400 leading-relaxed mb-6 font-sans text-left">
                            Standard calculators often fail to account for **Asset Shielding Infrastructure**. By utilizing **ABLE Accounts (529A)** or **Third-Party Special Needs Trusts**, recipients can hold significant financial reserves (often up to $100,000+) without disqualifying themselves from the $2,000 asset test. Our SSI Audit Engine applies a **Shielded-Asset-Velocity (SAV)** co-efficient, identifying the exact potential for liquidity preservation in the 2026 economic market.
                        </p>

                        <div className="bg-blue-500/5 border border-blue-500/20 p-6 rounded-2xl my-10 font-sans text-left">
                            <div className="flex items-start gap-4 text-blue-300">
                                <Info className="w-6 h-6 shrink-0 mt-1" />
                                <div className="text-sm leading-relaxed">
                                    <strong className="text-blue-200 block mb-1 uppercase tracking-widest text-[10px]">Strategic Note: The 2024 ISM Reform</strong>
                                    A major regulatory pivot in 2024 removed 'food' from the In-Kind Support and Maintenance (ISM) calculation. For 2026 claimants, this means having meals provided by family members no longer triggers a benefit reduction—only free rent or directly paid utility bills will now impact your monthly federal yield.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. EXPERT FAQ HUB LAYER */}
            <section className="py-20 border-t border-white/5 bg-[#020617]">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <div className="mb-16">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 italic tracking-wide font-sans">Support Intelligence</h2>
                        <p className="text-slate-500 font-medium tracking-tight">Expert guidance for navigating 2026 SSA SSI and disability protocols.</p>
                    </div>
                    <FAQSection />
                </div>
            </section>

            {/* 5. RELATED CALCULATORS LAYER */}
            <section className="py-20 border-t border-white/5 bg-slate-950">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-col items-center gap-12">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">Financial Support Cluster</h2>
                            <p className="text-slate-500 text-sm italic italic tracking-[0.3em] uppercase font-light">Internal Resource Mapping</p>
                        </div>
                        <div className="w-full max-w-lg">
                            <RelatedCalculators currentCalc="ssi" count={6} />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA FOOTER */}
            <section className="py-24 bg-gradient-to-t from-blue-900/20 to-transparent">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">Secure Your Support.<br /><span className="text-blue-500">Solve Your SSI Alpha.</span></h2>
                    <Link href="/ssi/calculator" className="inline-flex items-center gap-3 bg-white text-slate-950 hover:bg-slate-200 px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-blue-500/20 active:scale-95 group">
                        <Calculator className="w-6 h-6 group-hover:text-blue-600 transition-colors" />
                        RUN SSI AUDIT
                        <ArrowRight className="w-6 h-6" />
                    </Link>
                    <p className="mt-8 text-slate-500 text-xs font-bold tracking-[0.4em] uppercase">Verified Institutional Framework • 2026 Edition</p>
                </div>
            </section>
        </div>
    );
}
