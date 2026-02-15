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
    HeartPulse
} from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const faqs = [
        {
            q: "What is the total Medicare premium cost for 2026?",
            a: "Medicare premiums consist of multiple parts. For 2026, the standard Part B premium is projected to be ~$185/month. Part A is $0 for most people, and Part D premiums vary by plan (averaging ~$40-$50). High-income earners may also pay IRMAA surcharges on both Part B and Part D."
        },
        {
            q: "Who qualifies for '$0 Premium' Medicare Part A?",
            a: "You usually qualify for premium-free Part A if you or your spouse worked and paid Medicare taxes for at least 40 quarters (10 years). If you have 30-39 quarters, you'll pay a reduced premium; if under 30 quarters, the full premium applies (potentially ~$500+/month)."
        },
        {
            q: "How does my income from 2 years ago affect my 2026 premium?",
            a: "Medicare uses your Modified Adjusted Gross Income (MAGI) from two years prior (your 2024 tax return) to determine if you must pay an IRMAA surcharge. If your 2024 income was above ~$106k (single) or ~$212k (joint), your 2026 premiums will be significantly higher."
        },
        {
            q: "Does Social Security always cover the Medicare premium?",
            a: "If you are receiving Social Security benefits, the Part B premium is automatically deducted from your monthly check. If you are NOT yet receiving Social Security, you will receive a quarterly bill ('Medicare Premium Bill') that you must pay directly."
        },
        {
            q: "Can my Medicare premium increase due to late enrollment?",
            a: "Yes. If you miss your Initial Enrollment Period and don't have creditable coverage, a lifetime penalty is added to your premium. For Part B, it's 10% for every 12-month period you waited. For Part D, it's 1% per month."
        },
        {
            q: "What is the 'Hold Harmless' provision?",
            a: "This provision prevents Social Security benefits from decreasing year-over-year due to Medicare premium increases. If the Part B premium hike is larger than your Social Security COLA, your premium might be capped so your net check doesn't shrink."
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
        <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-indigo-500/30">
            {/* 1. S-CLASS HERO LAYER */}
            <section className="relative pt-24 pb-20 overflow-hidden border-b border-white/5">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent opacity-50 pointer-events-none" />

                <div className="max-w-6xl mx-auto px-4 relative z-10">
                    <div className="flex flex-col items-center text-center">
                        <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full mb-8 backdrop-blur-md">
                            <HeartPulse className="w-3.5 h-3.5 text-indigo-400" />
                            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-indigo-400">Holistic Care Protocol 2026</span>
                        </div>

                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
                            Medicare Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400 italic">Audit Matrix</span>
                        </h1>

                        <p className="max-w-2xl text-slate-400 text-base sm:text-lg md:text-xl leading-relaxed mb-10">
                            Institutional-grade medical liability forecasting. Solve for Part A, B, and D premium structures, IRMAA surcharges, and Social Security COLA offsets with 2026 precision.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/medicare-premium/calculator" className="flex items-center gap-3 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-[1.02] shadow-xl shadow-indigo-500/20 active:scale-95">
                                <Calculator className="w-5 h-5 shrink-0" />
                                Run Premium Auditor
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
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 italic">Premium Benchmarks</h2>
                        <p className="text-slate-400">Official 2026 Medicare cost tiers and eligibility-based price thresholds.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Table I: Cost Structure Logic */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Target className="w-5 h-5 text-indigo-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table I: 2026 Premium Stack</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Medicare Part</th>
                                            <th className="px-5 py-3 border-b border-white/5">Freq Amount</th>
                                            <th className="px-5 py-3 border-b border-white/5">Basis</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5 font-mono">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Part A (Hospital)</td>
                                            <td className="px-5 py-3">$0.00</td>
                                            <td className="px-5 py-3 text-emerald-400">40 Qtrs</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Part B (Medical)</td>
                                            <td className="px-5 py-3">$185.00</td>
                                            <td className="px-5 py-3 text-blue-400">Standard</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Part D (Drugs)</td>
                                            <td className="px-5 py-3">~$45.00</td>
                                            <td className="px-5 py-3 text-amber-400">Average</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-indigo-500/10 font-bold text-indigo-400 italic">Total Suite</td>
                                            <td className="px-5 py-3 bg-indigo-500/10 font-bold text-indigo-400">~$230.00</td>
                                            <td className="px-5 py-3 bg-indigo-500/10 font-bold text-indigo-400">Target</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table II: Performance Scalars (IRMAA) */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Activity className="w-5 h-5 text-blue-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table II: IRMAA Impact</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Income Row</th>
                                            <th className="px-5 py-3 border-b border-white/5">B-Premium</th>
                                            <th className="px-5 py-3 border-b border-white/5">D-Surcharge</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Tier 1 (+k)</td>
                                            <td className="px-5 py-3 font-mono">$259.00</td>
                                            <td className="px-5 py-3 text-blue-400">+$13.50</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Tier 3 (+k)</td>
                                            <td className="px-5 py-3 font-mono">$470.00</td>
                                            <td className="px-5 py-3 text-indigo-400">+$52.00</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Max Tier</td>
                                            <td className="px-5 py-3 font-mono">$600.00+</td>
                                            <td className="px-5 py-3 text-rose-400">+$80.00+</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">Basis Year</td>
                                            <td className="px-5 py-3 font-mono">2024 Tax</td>
                                            <td className="px-5 py-3 text-teal-400">Lookback</td>
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
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Cost Reduction</td>
                                            <td className="px-5 py-3">MAGI Control</td>
                                            <td className="px-5 py-3 text-emerald-400">Shielded</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Check Protection</td>
                                            <td className="px-5 py-3">Hold Harmless</td>
                                            <td className="px-5 py-3 text-blue-400">Buffer</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Benefit Max</td>
                                            <td className="px-5 py-3">Advantage (C)</td>
                                            <td className="px-5 py-3 text-indigo-400">Integrated</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">Penalty Avoid</td>
                                            <td className="px-5 py-3">On-time Enrol</td>
                                            <td className="px-5 py-3 text-emerald-400">Basis</td>
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
                    <div className="prose prose-invert prose-indigo max-w-none">
                        <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-indigo-500 pl-6 underline underline-offset-8 decoration-indigo-500/30">2026 Medicare Premium Architecture</h2>

                        <p className="text-slate-300 text-lg leading-relaxed mb-6 font-sans text-left">
                            Medicare Premium logic represents the primary financial overhead for U.S. retiree healthcare planning. In the 2026 fiscal cycle, the focus is on navigating **MAGI-based IRMAA Surcharges**, **Part A Work-History Thresholds**, and **Social Security Net-Check Equilibrium**. Our S-Class engine analyzes the core expenditure vectors: **Hold Harmless Eligibility**, **COLA Indexing Multipliers**, and **Late Enrollment Actuarial Friction**.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 my-10 font-sans">
                            <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-indigo-500">
                                    <PieChart className="w-16 h-16" />
                                </div>
                                <h4 className="text-indigo-400 font-bold mb-3 uppercase tracking-tighter text-xs">I. Expenditure Dynamics</h4>
                                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                                    <li>• **FICA Work Quarters**: Solving for the 40-quarter $0 premium Part A threshold.</li>
                                    <li>• **Automatic Deduction Flow**: Mapping the link between SSA checks and B-premiums.</li>
                                    <li>• **IRMAA Laddering**: Solving for the fiscal cliffs where $1 of income adds $1,000+ in premiums.</li>
                                    <li>• **Hold Harmless Protection**: Shielding the Social Security check from premium inflation.</li>
                                </ul>
                            </div>
                            <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-blue-500">
                                    <LineChart className="w-16 h-16" />
                                </div>
                                <h4 className="text-blue-400 font-bold mb-3 uppercase tracking-tighter text-xs">II. Regulatory Friction</h4>
                                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                                    <li>• **2-Year Lookback Lag**: Managing the premium delay caused by past capital gains.</li>
                                    <li>• **LEP Compound Interest**: Solving for the lifetime 10% Part B late penalty.</li>
                                    <li>• **GIC Billing Cycles**: Managing out-of-pocket billing for those not yet on SS.</li>
                                    <li>• **Appellate Reconsideration**: Strategic mapping for life-changing events (New IRMAA rules).</li>
                                </ul>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4 text-left">The Actuarial Model: Solving for the Net-Check Margin</h3>
                        <p className="text-slate-400 leading-relaxed mb-6 font-sans text-left">
                            Standard calculators often fail to account for the **COLA-Premium Feedback Loop**. Because Social Security Cost-of-Living Adjustments (COLA) and Medicare Part B premiums are announced simultaneously, their interaction determines your actual take-home pay. Our Premium Audit Engine applies a **Net Liquidity Index**, identifying the exact dollar-amount required to maintain purchasing power in 2026 while accounting for the 'IRMAA Surcharge Cliff' that often catches high-net-worth retirees off guard.
                        </p>

                        <div className="bg-indigo-500/5 border border-indigo-500/20 p-6 rounded-2xl my-10 font-sans text-left">
                            <div className="flex items-start gap-4 text-indigo-300">
                                <Info className="w-6 h-6 shrink-0 mt-1" />
                                <div className="text-sm leading-relaxed">
                                    <strong className="text-indigo-200 block mb-1 uppercase tracking-widest text-[10px]">Strategic Note: Life-Changing Events (LCE)</strong>
                                    If your income dropped in 2025 or 2026 due to retirement, marriage, or loss of income-producing property, you do NOT have to pay the IRMAA surcharge based on your 2024 return. You can file Form SSA-44 to request a premium appeal based on your *current* lower income, potentially saving $4,000+ annually.
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
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 italic tracking-wide font-sans">Premium Intelligence</h2>
                        <p className="text-slate-500 font-medium tracking-tight">Expert guidance for navigating 2026 Medicare costs and surcharge protocols.</p>
                    </div>
                    <FAQSection />
                </div>
            </section>

            {/* 5. RELATED CALCULATORS LAYER */}
            <section className="py-20 border-t border-white/5 bg-slate-950">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-col items-center gap-12">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">Financial Resource Cluster</h2>
                            <p className="text-slate-500 text-sm italic italic tracking-[0.3em] uppercase font-light">Internal Resource Mapping</p>
                        </div>
                        <div className="w-full max-w-lg">
                            <RelatedCalculators currentCalc="medicare-premium" count={6} />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA FOOTER */}
            <section className="py-24 bg-gradient-to-t from-indigo-900/20 to-transparent">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">Audit Your Premium.<br /><span className="text-indigo-500">Secure Your Retirement Alpha.</span></h2>
                    <Link href="/medicare-premium/calculator" className="inline-flex items-center gap-3 bg-white text-slate-950 hover:bg-slate-200 px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-indigo-500/20 active:scale-95 group">
                        <Calculator className="w-6 h-6 group-hover:text-indigo-600 transition-colors" />
                        RUN PREMIUM AUDIT
                        <ArrowRight className="w-6 h-6" />
                    </Link>
                    <p className="mt-8 text-slate-500 text-xs font-bold tracking-[0.4em] uppercase">Verified Institutional Framework • 2026 Edition</p>
                </div>
            </section>
        </div>
    );
}
