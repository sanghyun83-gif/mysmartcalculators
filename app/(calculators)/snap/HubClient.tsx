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
    LineChart,
    Apple
} from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const faqs = [
        {
            q: "What are the 2026 SNAP gross income limits for most households?",
            a: "For most households, the gross monthly income must be at or below 130% of the Federal Poverty Level (FPL). For a family of three, this is projected to be approximately $2,800 - $3,000 per month in 2026, depending on the updated federal guidelines."
        },
        {
            q: "How does the 'Net Income Test' work for SNAP eligibility?",
            a: "After all allowable deductions (like housing, utilities, and childcare) are subtracted from your gross income, your net monthly income must be at or below 100% of the FPL. This net income is the figure used to determine your actual monthly benefit amount."
        },
        {
            q: "What is the maximum monthly SNAP benefit for an individual in 2026?",
            a: "The maximum allotment depends on the USDA's annual TFP (Thrifty Food Plan) adjustments. In 2026, the maximum monthly benefit for a single person is projected to be approximately $300 - $315, assuming continued inflationary adjustments."
        },
        {
            q: "Do SNAP benefits expire if I don't use them every month?",
            a: "No. SNAP benefits carry over from month to month on your EBT card. However, if you do not use your EBT card at all for a period of nine months (274 days), the benefits will be permanently removed from the card."
        },
        {
            q: "How do work requirements (ABAWD) affect SNAP in 2026?",
            a: "Able-Bodied Adults Without Dependents (ABAWDs) are typically limited to 3 months of SNAP benefits in a 36-month period unless they work or participate in a work program for at least 80 hours a month. Age thresholds for these requirements have shifted recently and remain strictly enforced in most states."
        },
        {
            q: "Can I use SNAP benefits to buy hot prepared foods?",
            a: "Standard SNAP benefits cannot be used for hot foods or foods intended for immediate consumption in-store. However, some states participate in the Restaurant Meals Program (RMP), which allows elderly, disabled, or homeless individuals to use SNAP at authorized restaurants."
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
                            <Apple className="w-3.5 h-3.5 text-blue-400" />
                            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-blue-400">Nutritional Security Protocol 2026</span>
                        </div>

                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
                            SNAP Benefits <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 italic">Audit Matrix</span>
                        </h1>

                        <p className="max-w-2xl text-slate-400 text-base sm:text-lg md:text-xl leading-relaxed mb-10">
                            Institutional-grade nutritional assistance forecasting. Solve for FPL thresholds, net-income logic, and allotment scaling with 2026 precision.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/snap/calculator" className="flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-[1.02] shadow-xl shadow-blue-500/20 active:scale-95">
                                <Calculator className="w-5 h-5 shrink-0" />
                                Run SNAP Auditor
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
                        <p className="text-slate-400">Official 2026 USDA income thresholds and benefit allotment targets.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Table I: Income Logic */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Target className="w-5 h-5 text-blue-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table I: 2026 Limits</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Household</th>
                                            <th className="px-5 py-3 border-b border-white/5">Gross (130%)</th>
                                            <th className="px-5 py-3 border-b border-white/5">Net (100%)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5 font-mono">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">1 Person</td>
                                            <td className="px-5 py-3">$1,632</td>
                                            <td className="px-5 py-3 text-emerald-400">$1,255</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">2 Persons</td>
                                            <td className="px-5 py-3">$2,215</td>
                                            <td className="px-5 py-3 text-blue-400">$1,703</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">3 Persons</td>
                                            <td className="px-5 py-3">$2,798</td>
                                            <td className="px-5 py-3 text-emerald-400">$2,152</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-blue-500/10 font-bold text-blue-400 italic">Per Add.</td>
                                            <td className="px-5 py-3 bg-blue-500/10 font-bold text-blue-400">+$583</td>
                                            <td className="px-5 py-3 bg-blue-500/10 font-bold text-blue-400">+$450</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table II: Payout Scalars */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Activity className="w-5 h-5 text-indigo-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table II: Allotments</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">HH Size</th>
                                            <th className="px-5 py-3 border-b border-white/5">Max Benefit</th>
                                            <th className="px-5 py-3 border-b border-white/5">Avg. Yield</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Individual</td>
                                            <td className="px-5 py-3 font-mono">$315</td>
                                            <td className="px-5 py-3 text-emerald-400">Optimal</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Family of 3</td>
                                            <td className="px-5 py-3 font-mono">$780</td>
                                            <td className="px-5 py-3 text-blue-400">Standard</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Family of 4</td>
                                            <td className="px-5 py-3 font-mono">$1,010</td>
                                            <td className="px-5 py-3 text-amber-400">High-Need</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">EBT Floor</td>
                                            <td className="px-5 py-3 font-mono">$25</td>
                                            <td className="px-5 py-3 text-teal-400">Statutory</td>
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
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Max Allotment</td>
                                            <td className="px-5 py-3">Shelter Ded.</td>
                                            <td className="px-5 py-3 text-emerald-400">Elevated</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Eligibility</td>
                                            <td className="px-5 py-3">Medical Offset</td>
                                            <td className="px-5 py-3 text-blue-400">Broadened</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Work Sync</td>
                                            <td className="px-5 py-3">ABAWD Status</td>
                                            <td className="px-5 py-3 text-indigo-400">Compliance</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">Asset Shield</td>
                                            <td className="px-5 py-3">Vehicle Limit</td>
                                            <td className="px-5 py-3 text-teal-400">Exempt</td>
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
                        <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-blue-500 pl-6 underline underline-offset-8 decoration-blue-500/30">2026 Nutritional Security Architecture</h2>

                        <p className="text-slate-300 text-lg leading-relaxed mb-6 font-sans text-left">
                            SNAP (Supplemental Nutrition Assistance Program) represents a critical socioeconomic baseline for over 42 million Americans. In the 2026 fiscal environment, the focus is on navigating **Gross Income Friction**, **The Thrifty Food Plan (TFP) Scaling**, and **Shelter Deduction Arbitrage**. Our S-Class engine analyzes the core benefit vectors: **Allotment Decay Logic**, **Expected Family Contribution (EFC) Friction**, and **State-Level Broad-Based Categorical Eligibility (BBCE)**.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 my-10 font-sans">
                            <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-blue-500">
                                    <PieChart className="w-16 h-16" />
                                </div>
                                <h4 className="text-blue-400 font-bold mb-3 uppercase tracking-tighter text-xs">I. Expenditure Dynamics</h4>
                                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                                    <li>• **The 30% Contribution Factor**: Solving for the deduction logic where benefits decrease by 30 cents for every dollar of net income.</li>
                                    <li>• **Shelter Gaps**: Tracking the 'Excess Shelter Deduction' impact on the 7-member household limit.</li>
                                    <li>• **Medical Expense Carve-outs**: Identifying thresholds for elderly/disabled household medical deductions over $35.</li>
                                    <li>• **Standard Deduction Velocity**: Auditing annual COLA increases to the baseline per-household deduction.</li>
                                </ul>
                            </div>
                            <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-indigo-500">
                                    <LineChart className="w-16 h-16" />
                                </div>
                                <h4 className="text-indigo-400 font-bold mb-3 uppercase tracking-tighter text-xs">II. Regulatory Friction</h4>
                                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                                    <li>• **ABAWD Compliance (Work Rules)**: Managing the 80-hour monthly work mandate for childless adults.</li>
                                    <li>• **Broad-Based Categorical Eligibility**: Monitoring how states waive asset tests via the BBCE mechanism.</li>
                                    <li>• **EBT Interchange Latency**: Managing the monthly replenishment cycle for institutional food liquidity.</li>
                                    <li>• **Fraud Countermeasures**: Strategic audits for card-skimming protection and multi-state benefit verification.</li>
                                </ul>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4 text-left">The Actuarial Model: Solving for the Nutritional Alpha</h3>
                        <p className="text-slate-400 leading-relaxed mb-6 font-sans text-left">
                            Standard calculators often fail to account for the **Income Cliff**. Because SNAP benefits decrease as income increases, minor raises in wages can sometimes lead to a disproportionate loss of nutritional security. Our SNAP Audit Engine applies a **Benefit-to-Wage Sensitivity (BWS)** co-efficient, identifying the exact net-liquidity impact of shifting from part-time to full-time labor in the 2026 economic market.
                        </p>

                        <div className="bg-blue-500/5 border border-blue-500/20 p-6 rounded-2xl my-10 font-sans text-left">
                            <div className="flex items-start gap-4 text-blue-300">
                                <Info className="w-6 h-6 shrink-0 mt-1" />
                                <div className="text-sm leading-relaxed">
                                    <strong className="text-blue-200 block mb-1 uppercase tracking-widest text-[10px]">Strategic Note: The 274-Day Purge</strong>
                                    SNAP benefits do not expire monthly, but they are subject to 'Expungement' if the card is completely inactive. In 2026, the federal standard remains 274 days. If no transaction is made within this window, the funds are permanently returned to the USDA, regardless of the household balance.
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
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 italic tracking-wide font-sans">Benefit Intelligence</h2>
                        <p className="text-slate-500 font-medium tracking-tight">Expert guidance for navigating 2026 USDA SNAP and EBT protocols.</p>
                    </div>
                    <FAQSection />
                </div>
            </section>

            {/* 5. RELATED CALCULATORS LAYER */}
            <section className="py-20 border-t border-white/5 bg-slate-950">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-col items-center gap-12">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">Welfare Resource Cluster</h2>
                            <p className="text-slate-500 text-sm italic italic tracking-[0.3em] uppercase font-light">Internal Resource Mapping</p>
                        </div>
                        <div className="w-full max-w-lg">
                            <RelatedCalculators currentCalc="snap" count={6} />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA FOOTER */}
            <section className="py-24 bg-gradient-to-t from-blue-900/20 to-transparent">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">Secure Your Nutrition.<br /><span className="text-blue-500">Solve Your Benefit Alpha.</span></h2>
                    <Link href="/snap/calculator" className="inline-flex items-center gap-3 bg-white text-slate-950 hover:bg-slate-200 px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-blue-500/20 active:scale-95 group">
                        <Calculator className="w-6 h-6 group-hover:text-blue-600 transition-colors" />
                        RUN SNAP AUDIT
                        <ArrowRight className="w-6 h-6" />
                    </Link>
                    <p className="mt-8 text-slate-500 text-xs font-bold tracking-[0.4em] uppercase">Verified Institutional Framework • 2026 Edition</p>
                </div>
            </section>
        </div>
    );
}
