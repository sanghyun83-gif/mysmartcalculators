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
    Laptop
} from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const faqs = [
        {
            q: "How is freelance income taxed differently than W-2 income in 2026?",
            a: "Unlike W-2 employees where the employer pays half of Social Security and Medicare taxes, freelancers are responsible for both the employee and employer portions, totaling a 15.3% Self-Employment (SE) tax. However, you can deduct half of this SE tax from your gross income for income tax purposes."
        },
        {
            q: "What are the most common 2026 tax deductions for freelancers?",
            a: "Typical deductions include home office expenses, business-related software (SaaS), equipment (laptops/hardware), professional services (legal/accounting), and qualified business travel. In 2026, the 'Qualified Business Income' (QBI) deduction remains a critical 20% reduction for eligible pass-through entities."
        },
        {
            q: "Do freelancers need to pay taxes quarterly?",
            a: "Yes. If you expect to owe more than $1,000 in federal tax, you must make quarterly estimated payments (April, June, September, and January). Failing to do so can result in underpayment penalties, even if you pay the full amount at the end of the year."
        },
        {
            q: "What is the 'Home Office' deduction and how do I qualify?",
            a: "To qualify, your home office must be used 'regularly and exclusively' for business. You can use the simplified method ($5 per square foot up to 300 sq ft) or the actual expense method (allocating a portion of rent, utilities, and insurance)."
        },
        {
            q: "Should I structure as an LLC or S-Corp to save on taxes?",
            a: "An S-Corp can potentially reduce self-employment tax by allowing you to pay yourself a 'reasonable salary' and taking the remaining profit as a distribution. This strategy is typically most effective once your net profit exceeds $60,000 - $80,000 per year."
        },
        {
            q: "How do I handle health insurance premiums as a freelancer?",
            a: "Self-employed individuals can typically deduct 100% of their health insurance premiums for themselves and their family as an 'above-the-line' deduction, provided they are not eligible for a plan through a spouse's employer."
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
        <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-emerald-500/30">
            {/* 1. S-CLASS HERO LAYER */}
            <section className="relative pt-24 pb-20 overflow-hidden border-b border-white/5">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent opacity-50 pointer-events-none" />

                <div className="max-w-6xl mx-auto px-4 relative z-10">
                    <div className="flex flex-col items-center text-center">
                        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full mb-8 backdrop-blur-md">
                            <Laptop className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-emerald-400">Gig Economy Protocol 2026</span>
                        </div>

                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
                            Freelance Tax <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 italic">Audit Matrix</span>
                        </h1>

                        <p className="max-w-2xl text-slate-400 text-base sm:text-lg md:text-xl leading-relaxed mb-10">
                            Institutional-grade self-employment tax forecasting. Solve for 1099 liabilities, home-office deductions, and S-Corp optimization with 2026 precision.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/freelance-tax/calculator" className="flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-[1.02] shadow-xl shadow-emerald-500/20 active:scale-95">
                                <Calculator className="w-5 h-5 shrink-0" />
                                Run Freelance Auditor
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
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 italic">Freelance Benchmarks</h2>
                        <p className="text-slate-400">Official 2026 self-employment rates and deduction standards.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Table I: SE Tax Logic */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Target className="w-5 h-5 text-emerald-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table I: 2026 SE Rates</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Component</th>
                                            <th className="px-5 py-3 border-b border-white/5">Rate</th>
                                            <th className="px-5 py-3 border-b border-white/5">Cap</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5 font-mono">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Social Security</td>
                                            <td className="px-5 py-3">12.4%</td>
                                            <td className="px-5 py-3 text-emerald-400">$176k <sup>est</sup></td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Medicare</td>
                                            <td className="px-5 py-3">2.9%</td>
                                            <td className="px-5 py-3 text-blue-400">None</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Addl. Medicare</td>
                                            <td className="px-5 py-3">0.9%</td>
                                            <td className="px-5 py-3 text-amber-400">&gt;$200k</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-emerald-500/10 font-bold text-emerald-400 italic">Total SE Load</td>
                                            <td className="px-5 py-3 bg-emerald-500/10 font-bold text-emerald-400">15.3%</td>
                                            <td className="px-5 py-3 bg-emerald-500/10 font-bold text-emerald-400">Unified</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table II: Deduction Scalars */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Activity className="w-5 h-5 text-teal-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table II: Common Deductions</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Expense Type</th>
                                            <th className="px-5 py-3 border-b border-white/5">Method</th>
                                            <th className="px-5 py-3 border-b border-white/5">Max %</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Home Office</td>
                                            <td className="px-5 py-3 font-mono">Simplified</td>
                                            <td className="px-5 py-3 text-emerald-400">$1,500</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Health Ins.</td>
                                            <td className="px-5 py-3 font-mono">Above-Line</td>
                                            <td className="px-5 py-3 text-blue-400">100%</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Equipment</td>
                                            <td className="px-5 py-3 font-mono">Sec 179</td>
                                            <td className="px-5 py-3 text-amber-400">Fully Exp.</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">QBI Deduction</td>
                                            <td className="px-5 py-3 font-mono">Pass-Thru</td>
                                            <td className="px-5 py-3 text-emerald-400">20% Net</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table III: Optimization Mapping */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <RefreshCw className="w-5 h-5 text-amber-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table III: Corp Optimization</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Entity Type</th>
                                            <th className="px-5 py-3 border-b border-white/5">SE Tax Floor</th>
                                            <th className="px-5 py-3 border-b border-white/5">Efficiency</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5 font-mono">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Sole Prop / LLC</td>
                                            <td className="px-5 py-3">Fully Taxed</td>
                                            <td className="px-5 py-3 text-rose-400">Baseline</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">S-Corp (&gt;$60k)</td>
                                            <td className="px-5 py-3">Salary Only</td>
                                            <td className="px-5 py-3 text-emerald-400">High</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Partnership</td>
                                            <td className="px-5 py-3">Draw Basis</td>
                                            <td className="px-5 py-3 text-amber-400">Moderate</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">Ideal Pivot</td>
                                            <td className="px-5 py-3">$75k Profit</td>
                                            <td className="px-5 py-3 text-emerald-400">Optimal</td>
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
                    <div className="prose prose-invert prose-emerald max-w-none">
                        <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-emerald-500 pl-6 underline underline-offset-8 decoration-emerald-500/30">2026 Freelance Tax Architecture</h2>

                        <p className="text-slate-300 text-lg leading-relaxed mb-6 font-sans text-left">
                            Freelance taxation is a complex interplay between business profit cycles and self-employment (SE) compliance. In the 2026 gig economy, success is determined by the precision of your **Expense Allocation**, your **Quarterly Voucher Velocity**, and your **Entity Structural Optimization**. Our S-Class engine analyzes the core growth and compliance vectors: **Net Operating Income (NOI)**, **SE Tax Fragmentation**, and **QBI Deduction Elasticity**.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 my-10 font-sans">
                            <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-emerald-500">
                                    <PieChart className="w-16 h-16" />
                                </div>
                                <h4 className="text-emerald-400 font-bold mb-3 uppercase tracking-tighter text-xs">I. Deduction Dynamics</h4>
                                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                                    <li>• **Sec 179 Hardware**: Immediate expensing of business tech.</li>
                                    <li>• **Home Office Simplified**: Standardized rate for remote work.</li>
                                    <li>• **SEP IRA Logic**: Tax-advantaged retirement scaling for solopreneurs.</li>
                                    <li>• **VCM Allocations**: Travel and milestone business expenses.</li>
                                </ul>
                            </div>
                            <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-teal-500">
                                    <LineChart className="w-16 h-16" />
                                </div>
                                <h4 className="text-teal-400 font-bold mb-3 uppercase tracking-tighter text-xs">II. Compliance Friction</h4>
                                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                                    <li>• **Quarterly Safe Harbor**: Mapping 110% prior year targets.</li>
                                    <li>• **SE Tax Ceiling**: Impact of the SSI wage base ($176k <sup>est</sup>).</li>
                                    <li>• **State Excise Tax**: Managing nexus-based regional levies.</li>
                                    <li>• **Audit Risk Matrix**: Identifying outliers in Schedule C reporting.</li>
                                </ul>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4 text-left">The Actuarial Model: Beyond Simple 1040 Reporting</h3>
                        <p className="text-slate-400 leading-relaxed mb-6 font-sans text-left">
                            Standard calculators often fail to account for the **Entity Efficiency Gap**. A solopreneur earning $150,000 via a standard LLC will pay nearly $20,000 more in SE tax than one utilizing a optimized S-Corp salary/distribution split. Our 2026 Tax Audit Engine applies a **Structural Efficiency Score** to your projections, identifying the exact profit threshold where an entity pivot provides the maximum ROI on your net income.
                        </p>

                        <div className="bg-emerald-500/5 border border-emerald-500/20 p-6 rounded-2xl my-10 font-sans text-left">
                            <div className="flex items-start gap-4 text-emerald-300">
                                <Info className="w-6 h-6 shrink-0 mt-1" />
                                <div className="text-sm leading-relaxed">
                                    <strong className="text-emerald-200 block mb-1 uppercase tracking-widest text-[10px]">Strategic Note: The SEP IRA Multiplier</strong>
                                    For high-earning freelancers, the SEP IRA allows for contributions up to 25% of net profit (subject to caps). This not only builds retirement wealth but provides an 'Above-the-Line' deduction that lowers your adjusted gross income (AGI), potentially qualifying you for additional credits or tax brackets.
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
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 italic tracking-wide font-sans">Freelance Intelligence</h2>
                        <p className="text-slate-500 font-medium tracking-tight">Expert guidance for navigating 2026 gig economy and self-employment protocols.</p>
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
                            <RelatedCalculators currentCalc="freelance-tax" count={6} />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA FOOTER */}
            <section className="py-24 bg-gradient-to-t from-emerald-900/20 to-transparent">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">Optimize Your Income.<br /><span className="text-emerald-500">Protect Your Freelance Alpha.</span></h2>
                    <Link href="/freelance-tax/calculator" className="inline-flex items-center gap-3 bg-white text-slate-950 hover:bg-slate-200 px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-emerald-500/20 active:scale-95 group">
                        <Calculator className="w-6 h-6 group-hover:text-emerald-600 transition-colors" />
                        RUN FREELANCE AUDIT
                        <ArrowRight className="w-6 h-6" />
                    </Link>
                    <p className="mt-8 text-slate-500 text-xs font-bold tracking-[0.4em] uppercase">Verified Institutional Framework • 2026 Edition</p>
                </div>
            </section>
        </div>
    );
}
