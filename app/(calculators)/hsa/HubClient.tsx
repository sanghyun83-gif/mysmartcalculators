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
    PiggyBank,
    Stethoscope
} from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const faqs = [
        {
            q: "What are the 2026 IRS contribution limits for an HSA?",
            a: "For 2026, the HSA contribution limits are projected to be $4,350 for self-only coverage and $8,700 for family coverage. Individuals aged 55 and older can contribute an additional $1,000 as a catch-up contribution."
        },
        {
            q: "What qualify as 'High Deductible Health Plans' (HDHP) in 2026?",
            a: "To be eligible for an HSA in 2026, your health plan must have a minimum deductible of at least $1,650 for individuals or $3,300 for families. Additionally, annual out-of-pocket expenses cannot exceed $8,350 (self) or $16,700 (family)."
        },
        {
            q: "What are the 'Triple Tax Benefits' of an HSA?",
            a: "HSAs offer three distinct tax advantages: 1) Contributions are 100% tax-deductible (pre-tax via payroll), 2) Interest and investment earnings grow tax-free, and 3) Withdrawals for qualified medical expenses are tax-free."
        },
        {
            q: "Can I use HSA funds for non-medical expenses?",
            a: "If you withdraw funds for non-medical expenses before age 65, you must pay income tax plus a 20% penalty. After age 65, the 20% penalty is waived, and the account functions similarly to a Traditional IRA (only income tax applies)."
        },
        {
            q: "Do HSA funds expire at the end of the year?",
            a: "No. Unlike a Flexible Spending Account (FSA), HSA funds do not expire. The balance rolls over indefinitely year after year, and the account is fully portable, meaning you keep it even if you change employers or retire."
        },
        {
            q: "Can I invest my HSA balance in the stock market?",
            a: "Most HSA providers allow you to invest your balance in mutual funds, ETFs, or stocks once you exceed a minimum cash threshold (typically $1,000). This allows the account to function as a powerful long-term 'stealth' retirement vehicle."
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
        <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-teal-500/30">
            {/* 1. S-CLASS HERO LAYER */}
            <section className="relative pt-24 pb-20 overflow-hidden border-b border-white/5">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-500/10 via-transparent to-transparent opacity-50 pointer-events-none" />

                <div className="max-w-6xl mx-auto px-4 relative z-10">
                    <div className="flex flex-col items-center text-center">
                        <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 px-3 py-1 rounded-full mb-8 backdrop-blur-md">
                            <Stethoscope className="w-3.5 h-3.5 text-teal-400" />
                            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-teal-400">Healthcare Capital Protocol 2026</span>
                        </div>

                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
                            Health Savings <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400 italic">Audit Matrix</span>
                        </h1>

                        <p className="max-w-2xl text-slate-400 text-base sm:text-lg md:text-xl leading-relaxed mb-10">
                            Institutional-grade medical wealth modeling. Solve for contribution limits, tax-shield efficiency, and long-term accumulation with 2026 precision.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/hsa/calculator" className="flex items-center gap-3 bg-teal-600 hover:bg-teal-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-[1.02] shadow-xl shadow-teal-500/20 active:scale-95">
                                <Calculator className="w-5 h-5 shrink-0" />
                                Run HSA Auditor
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
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 italic">HSA Benchmarks</h2>
                        <p className="text-slate-400">Official 2026 IRS thresholds and actuarial growth targets.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Table I: Contribution Logic */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Target className="w-5 h-5 text-teal-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table I: 2026 IRS Limits</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Coverage</th>
                                            <th className="px-5 py-3 border-b border-white/5">Max Contrib</th>
                                            <th className="px-5 py-3 border-b border-white/5">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5 font-mono">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Self-Only</td>
                                            <td className="px-5 py-3">$4,350</td>
                                            <td className="px-5 py-3 text-emerald-400">Active</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Family</td>
                                            <td className="px-5 py-3">$8,700</td>
                                            <td className="px-5 py-3 text-blue-400">Active</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Catch-up (55+)</td>
                                            <td className="px-5 py-3">$1,000</td>
                                            <td className="px-5 py-3 text-amber-400">Fixed</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-teal-500/10 font-bold text-teal-400 italic">Total Max (Fam)</td>
                                            <td className="px-5 py-3 bg-teal-500/10 font-bold text-teal-400">$9,700</td>
                                            <td className="px-5 py-3 bg-teal-500/10 font-bold text-teal-400">Limit</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table II: HDHP Scalars */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Activity className="w-5 h-5 text-emerald-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table II: HDHP Eligibility</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Requirement</th>
                                            <th className="px-5 py-3 border-b border-white/5">Minimum</th>
                                            <th className="px-5 py-3 border-b border-white/5">OOP Max</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Self-Only</td>
                                            <td className="px-5 py-3 font-mono">$1,650</td>
                                            <td className="px-5 py-3 text-rose-400">$8,350</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Family</td>
                                            <td className="px-5 py-3 font-mono">$3,300</td>
                                            <td className="px-5 py-3 text-rose-400">$16,700</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">IRS Indexing</td>
                                            <td className="px-5 py-3 font-mono">~3.5%</td>
                                            <td className="px-5 py-3 text-emerald-400">Annual</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">Compliance</td>
                                            <td className="px-5 py-3 font-mono">Strict</td>
                                            <td className="px-5 py-3 text-teal-400">Mandatory</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table III: Optimization Mapping */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <RefreshCw className="w-5 h-5 text-amber-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table III: Tax Efficiency</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Advantage</th>
                                            <th className="px-5 py-3 border-b border-white/5">Tax Impact</th>
                                            <th className="px-5 py-3 border-b border-white/5">Rating</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5 font-mono">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Contributions</td>
                                            <td className="px-5 py-3">-24% to -37%</td>
                                            <td className="px-5 py-3 text-emerald-400">Max</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Growth</td>
                                            <td className="px-5 py-3">0% Cap Gain</td>
                                            <td className="px-5 py-3 text-blue-400">High</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Withdrawal</td>
                                            <td className="px-5 py-3">$0 Liability</td>
                                            <td className="px-5 py-3 text-emerald-400">Elite</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">Total Shield</td>
                                            <td className="px-5 py-3">Triple Tax</td>
                                            <td className="px-5 py-3 text-emerald-400">S-Tier</td>
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
                    <div className="prose prose-invert prose-teal max-w-none">
                        <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-teal-500 pl-6 underline underline-offset-8 decoration-teal-500/30">2026 HSA Wealth Architecture</h2>

                        <p className="text-slate-300 text-lg leading-relaxed mb-6 font-sans text-left">
                            The Health Savings Account (HSA) represents the apex of tax-advantaged financial structures in the U.S. tax code. In the 2026 economic environment, the focus has shifted from simple medical reimbursement to **Long-Term Capital Accumulation** and **Stealth Retirement Optimization**. Our S-Class engine analyzes the three core efficiency vectors: **FICA Tax Avoidance**, **Compound Growth Velocity**, and **Post-65 Liquidity Mapping**.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 my-10 font-sans">
                            <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-teal-500">
                                    <PieChart className="w-16 h-16" />
                                </div>
                                <h4 className="text-teal-400 font-bold mb-3 uppercase tracking-tighter text-xs">I. Accumulation Dynamics</h4>
                                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                                    <li>• **FICA Shielding**: Payroll contributions bypass Social Security tax (7.65%).</li>
                                    <li>• **Investment Portability**: Moving balances to vanguard institutional providers.</li>
                                    <li>• **Employer Seed-Money**: Optimizing the 'Free Money' match factor.</li>
                                    <li>• **Catch-up Elasticity**: Scaling contributions after age 55.</li>
                                </ul>
                            </div>
                            <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-emerald-500">
                                    <LineChart className="w-16 h-16" />
                                </div>
                                <h4 className="text-emerald-400 font-bold mb-3 uppercase tracking-tighter text-xs">II. Regulatory Friction</h4>
                                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                                    <li>• **HDHP Compliance**: Monitoring minimum deductible mandates.</li>
                                    <li>• **Prohibited Expenses**: Navigating the 20% non-medical penalty.</li>
                                    <li>• **Nexus Limitations**: Managing HSA eligibility with Medicare Part A.</li>
                                    <li>• **Coordination of Benefits**: Solving for dual-coverage scenarios.</li>
                                </ul>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4 text-left">The Actuarial Model: The 'Shoebox' Strategy</h3>
                        <p className="text-slate-400 leading-relaxed mb-6 font-sans text-left">
                            Standard calculators often fail to account for the **Deferred Reimbursement Alpha**. By paying medical expenses out-of-pocket today and 'shoeboxing' the receipts, you allow the HSA balance to compound in the market for decades. Our HSA Audit Engine applies an **Accumulation/Distribution Multiplier**, identifying how much additional wealth is generated by deferring reimbursements until the retirement phase of the 2026/2046 cycle.
                        </p>

                        <div className="bg-teal-500/5 border border-teal-500/20 p-6 rounded-2xl my-10 font-sans text-left">
                            <div className="flex items-start gap-4 text-teal-300">
                                <Info className="w-6 h-6 shrink-0 mt-1" />
                                <div className="text-sm leading-relaxed">
                                    <strong className="text-teal-200 block mb-1 uppercase tracking-widest text-[10px]">Technical Note: The FICA Advantage</strong>
                                    Contributions made via a Section 125 Cafeteria Plan (payroll deduction) are unique because they are not subject to FICA taxes. This provides an immediate 7.65% ROI advantage over individual HSA contributions made outside of an employer's payroll system, which are only deductible for income tax.
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
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 italic tracking-wide font-sans">HSA Intelligence</h2>
                        <p className="text-slate-500 font-medium tracking-tight">Expert guidance for navigating 2026 health savings and wealth protocols.</p>
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
                            <RelatedCalculators currentCalc="hsa" count={6} />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA FOOTER */}
            <section className="py-24 bg-gradient-to-t from-teal-900/20 to-transparent">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">Optimize Your Health Wealth.<br /><span className="text-teal-500">Minimize Your Tax Friction.</span></h2>
                    <Link href="/hsa/calculator" className="inline-flex items-center gap-3 bg-white text-slate-950 hover:bg-slate-200 px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-teal-500/20 active:scale-95 group">
                        <Calculator className="w-6 h-6 group-hover:text-teal-600 transition-colors" />
                        RUN HSA AUDIT
                        <ArrowRight className="w-6 h-6" />
                    </Link>
                    <p className="mt-8 text-slate-500 text-xs font-bold tracking-[0.4em] uppercase">Verified Institutional Framework • 2026 Edition</p>
                </div>
            </section>
        </div>
    );
}
