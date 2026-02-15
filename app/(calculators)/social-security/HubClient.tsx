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
    Landmark,
    Users
} from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const faqs = [
        {
            q: "What is the projected 2026 Social Security COLA?",
            a: "While the official Cost-of-Living Adjustment (COLA) for 2026 will be announced in October 2025, early projections based on recent CPI-W trends suggest an adjustment in the 2.5% to 3.0% range. This COLA is designed to ensure benefits keep pace with the rising costs of goods and services."
        },
        {
            q: "What is Full Retirement Age (FRA) for those reaching it in 2026?",
            a: "For individuals born in 1959, the Full Retirement Age is 66 years and 10 months. For those born in 1960 or later, the FRA is a flat 67 years. Reaching FRA allows you to receive 100% of your Primary Insurance Amount (PIA) without any age-based reductions."
        },
        {
            q: "How much will my benefit increase if I wait until age 70?",
            a: "For every year you delay claiming Social Security past your FRA (up to age 70), your benefit increases by 8% due to 'Delayed Retirement Credits.' If your FRA is 67 and you wait until 70, you will receive 124% of your base benefit amount permanently."
        },
        {
            q: "What is the Social Security wage base for 2026?",
            a: "The maximum amount of earnings subject to Social Security tax (FICA) is projected to rise to approximately $174,900 in 2026. Earnings above this threshold are not taxed for Social Security, nor are they used in the calculation of your future benefits."
        },
        {
            q: "Can I collect Social Security and still work full-time in 2026?",
            a: "Yes, but if you are under your Full Retirement Age, you are subject to the 'Earnings Test' limit (projected around $23,400 for 2026). If you exceed this limit, $1 will be withheld for every $2 earned above the threshold. Once you reach FRA, there is no limit on your earnings while collecting benefits."
        },
        {
            q: "Are Social Security benefits taxable at the federal level?",
            a: "Depending on your 'provisional income' (AGI + non-taxable interest + 50% of SS benefits), up to 85% of your benefits may be subject to federal income tax. Individuals earning over $34,000 and couples earning over $44,000 typically hit the 85% taxation tier."
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
                            <Landmark className="w-3.5 h-3.5 text-blue-400" />
                            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-blue-400">Retirement Entitlement Protocol 2026</span>
                        </div>

                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
                            Social Security <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 italic">Audit Matrix</span>
                        </h1>

                        <p className="max-w-2xl text-slate-400 text-base sm:text-lg md:text-xl leading-relaxed mb-10">
                            Institutional-grade retirement benefit forecasting. Solve for PIA bend points, AIME indexing, and delayed credit optimization with 2026 precision.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/social-security/ss-calculator" className="flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-[1.02] shadow-xl shadow-blue-500/20 active:scale-95">
                                <Calculator className="w-5 h-5 shrink-0" />
                                Run Social Security Auditor
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
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 italic">Retirement Benchmarks</h2>
                        <p className="text-slate-400">Official 2026 benefit thresholds and claiming age targets.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Table I: Claiming Logic */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Target className="w-5 h-5 text-blue-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table I: 2026 Ages</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Age Tier</th>
                                            <th className="px-5 py-3 border-b border-white/5">Benefit Yield</th>
                                            <th className="px-5 py-3 border-b border-white/5">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5 font-mono">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Age 62</td>
                                            <td className="px-5 py-3">70% - 75%</td>
                                            <td className="px-5 py-3 text-rose-400">Reduced</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Age 67 (FRA)</td>
                                            <td className="px-5 py-3">100%</td>
                                            <td className="px-5 py-3 text-emerald-400">Baseline</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Age 70</td>
                                            <td className="px-5 py-3">124%</td>
                                            <td className="px-5 py-3 text-blue-400">Maximum</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-blue-500/10 font-bold text-blue-400 italic">2026 COLA</td>
                                            <td className="px-5 py-3 bg-blue-500/10 font-bold text-blue-400">~2.7%</td>
                                            <td className="px-5 py-3 bg-blue-500/10 font-bold text-blue-400">Projected</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table II: Payout Scalars */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Activity className="w-5 h-5 text-indigo-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table II: Limits</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Limit Type</th>
                                            <th className="px-5 py-3 border-b border-white/5">2026 Figure</th>
                                            <th className="px-5 py-3 border-b border-white/5">Condition</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Wage Base</td>
                                            <td className="px-5 py-3 font-mono">~$174,900</td>
                                            <td className="px-5 py-3 text-emerald-400">Max Tax</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Earnings Test</td>
                                            <td className="px-5 py-3 font-mono">$23,400</td>
                                            <td className="px-5 py-3 text-amber-400">Under FRA</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Max Monthly</td>
                                            <td className="px-5 py-3 font-mono">$5,000+</td>
                                            <td className="px-5 py-3 text-blue-400">Age 70</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">PIA Bend Pt 1</td>
                                            <td className="px-5 py-3 font-mono">$1,226</td>
                                            <td className="px-5 py-3 text-teal-400">90% Rate</td>
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
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Max Lifetime</td>
                                            <td className="px-5 py-3">Break-even (80)</td>
                                            <td className="px-5 py-3 text-emerald-400">Delayed</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Liquidity Need</td>
                                            <td className="px-5 py-3">Early Access</td>
                                            <td className="px-5 py-3 text-rose-400">Claim at 62</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Spousal Sync</td>
                                            <td className="px-5 py-3">High-Earner FRA</td>
                                            <td className="px-5 py-3 text-indigo-400">Optimized</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">Survivor Prot</td>
                                            <td className="px-5 py-3">Delayed Credits</td>
                                            <td className="px-5 py-3 text-teal-400">Legacy</td>
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
                        <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-blue-500 pl-6 underline underline-offset-8 decoration-blue-500/30">2026 Social Security Architecture</h2>

                        <p className="text-slate-300 text-lg leading-relaxed mb-6 font-sans text-left">
                            Social Security represents the primary retirement insurance infrastructure for over 180 million American workers. In the 2026 fiscal cycle, the focus is on navigating **AIME Indexing Dynamics**, **The Cost-of-Living Pivot (COLA)**, and **Delayed Retirement Credit Arbitrage**. Our S-Class engine analyzes the core benefit vectors: **PIA Bend Point Compression**, **The 35-Year Career Normalization**, and **Actuarial Reduction Velocity**.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 my-10 font-sans">
                            <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-blue-500">
                                    <PieChart className="w-16 h-16" />
                                </div>
                                <h4 className="text-blue-400 font-bold mb-3 uppercase tracking-tighter text-xs">I. Expenditure Dynamics</h4>
                                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                                    <li>• **AIME Normalization**: Solving for the Average Indexed Monthly Earnings using the top 35 years of work history.</li>
                                    <li>• **Bend Point Optimization**: Mapping the transition from the 90% replacement rate to the 32% and 15% tiers.</li>
                                    <li>• **COLA Momentum**: Tracking the interaction between the '2026 COLA' and existing base benefit amounts.</li>
                                    <li>• **Taxation Gaps**: Strategic audits for the 50% and 85% benefit-taxability thresholds.</li>
                                </ul>
                            </div>
                            <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-indigo-500">
                                    <LineChart className="w-16 h-16" />
                                </div>
                                <h4 className="text-indigo-400 font-bold mb-3 uppercase tracking-tighter text-xs">II. Regulatory Friction</h4>
                                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                                    <li>• **Full Retirement Age (FRA) Shift**: Managing the final phase of the age 67 baseline implementation.</li>
                                    <li>• **The Earnings Test Limitation**: Identifying the $23,400+ 'clawback' triggers for working beneficiaries.</li>
                                    <li>• **Trust Fund Liquidity**: Monitoring the 2034 depletion projection and its impact on 2026 planning.</li>
                                    <li>• **Survivor Indemnity**: Managing the 'Higher-of-Two' benefit logic for widowed spouses.</li>
                                </ul>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4 text-left">The Actuarial Model: Solving for the Claiming Alpha</h3>
                        <p className="text-slate-400 leading-relaxed mb-6 font-sans text-left">
                            Standard calculators often fail to account for **Spousal Arbitrage**. By strategically timing the 'Higher-Earner' claim to age 70, a couple can maximize not only the monthly lifetime check but also the survivor benefit floor. Our Social Security Audit Engine applies a **Cumulative-Life-Yield (CLY)** co-efficient, identifying the exact cross-over age where waiting past FRA provides a 100% ROI compared to claiming at 62 in the 2026 market.
                        </p>

                        <div className="bg-blue-500/5 border border-blue-500/20 p-6 rounded-2xl my-10 font-sans text-left">
                            <div className="flex items-start gap-4 text-blue-300">
                                <Info className="w-6 h-6 shrink-0 mt-1" />
                                <div className="text-sm leading-relaxed">
                                    <strong className="text-blue-200 block mb-1 uppercase tracking-widest text-[10px]">Strategic Note: The 12-Month Do-Over</strong>
                                    If you claim benefits and then change your mind, you have a one-time opportunity to 'withdraw' your application within the first 12 months. You must repay all benefits received to date, but this allows you to 'reset' your claiming age and earn higher credits later.
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
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 italic tracking-wide font-sans">Retirement Intelligence</h2>
                        <p className="text-slate-500 font-medium tracking-tight">Expert guidance for navigating 2026 SSA retirement and claiming protocols.</p>
                    </div>
                    <FAQSection />
                </div>
            </section>

            {/* 5. RELATED CALCULATORS LAYER */}
            <section className="py-20 border-t border-white/5 bg-slate-950">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-col items-center gap-12">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">Retirement Resource Cluster</h2>
                            <p className="text-slate-500 text-sm italic italic tracking-[0.3em] uppercase font-light">Internal Resource Mapping</p>
                        </div>
                        <div className="w-full max-w-lg">
                            <RelatedCalculators currentCalc="social-security" count={6} />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA FOOTER */}
            <section className="py-24 bg-gradient-to-t from-blue-900/20 to-transparent">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">Optimize Your Retirement.<br /><span className="text-blue-500">Secure Your Claiming Alpha.</span></h2>
                    <Link href="/social-security/ss-calculator" className="inline-flex items-center gap-3 bg-white text-slate-950 hover:bg-slate-200 px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-blue-500/20 active:scale-95 group">
                        <Calculator className="w-6 h-6 group-hover:text-blue-600 transition-colors" />
                        RUN RETIREMENT AUDIT
                        <ArrowRight className="w-6 h-6" />
                    </Link>
                    <p className="mt-8 text-slate-500 text-xs font-bold tracking-[0.4em] uppercase">Verified Institutional Framework • 2026 Edition</p>
                </div>
            </section>
        </div>
    );
}
