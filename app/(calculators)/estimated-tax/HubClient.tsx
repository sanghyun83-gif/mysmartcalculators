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
    Receipt
} from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const faqs = [
        {
            q: "Who is required to pay estimated taxes in 2026?",
            a: "Generally, you must pay estimated taxes if you expect to owe at least $1,000 in federal tax for 2026 after subtracting your withholding and refundable credits. This typically applies to self-employed individuals, freelancers, and those with significant investment income."
        },
        {
            q: "What are the 2026 quarterly due dates for estimated taxes?",
            a: "The standard IRS quarterly due dates for 2026 are: April 15 (Q1), June 15 (Q2), September 15 (Q3), and January 15, 2027 (Q4). If these dates fall on a weekend or holiday, the deadline moves to the next business day."
        },
        {
            q: "How does the 'Safe Harbor' rule protect against underpayment penalties?",
            a: "To avoid penalties, you must generally pay at least 90% of your 2026 tax liability or 100% of your total tax shown on your 2025 return (110% if your AGI was over $150,000). This is known as the safe harbor provision."
        },
        {
            q: "Do I need to pay estimated state taxes as well?",
            a: "Most states with an income tax also require quarterly estimated payments if you meet their specific thresholds. These often mirror the federal schedule but may have different exemption amounts or penalty calculations."
        },
        {
            q: "How do I calculate self-employment tax for estimated payments?",
            a: "Self-employment tax (Social Security and Medicare) is calculated at 15.3% of your net earnings from self-employment. You can typically deduct 50% of this tax from your gross income when calculating your income tax liability."
        },
        {
            q: "What happens if I miss an estimated tax payment deadline?",
            a: "Missing a deadline can result in underpayment penalties, even if you receive a refund when you file your final return. The penalty is calculated based on the amount underpaid and the duration of the delay using current IRS interest rates."
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
                            <Receipt className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-emerald-400">Tax Compliance Protocol 2026</span>
                        </div>

                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
                            Estimated Tax <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 italic">Audit Matrix</span>
                        </h1>

                        <p className="max-w-2xl text-slate-400 text-base sm:text-lg md:text-xl leading-relaxed mb-10">
                            Institutional-grade quarterly tax forecasting. Solve for federal, state, and self-employment liabilities with 2026 Safe Harbor mapping.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/estimated-tax/calculator" className="flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-[1.02] shadow-xl shadow-emerald-500/20 active:scale-95">
                                <Calculator className="w-5 h-5 shrink-0" />
                                Run Tax Auditor
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
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 italic">Tax Benchmarks</h2>
                        <p className="text-slate-400">Official 2026 compliance thresholds and safe harbor targets.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Table I: Safe Harbor Targets */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Target className="w-5 h-5 text-emerald-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table I: 2026 Safe Harbors</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Scenario</th>
                                            <th className="px-5 py-3 border-b border-white/5">Threshold</th>
                                            <th className="px-5 py-3 border-b border-white/5">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5 font-mono">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Standard AGI</td>
                                            <td className="px-5 py-3">100% PY Tax</td>
                                            <td className="px-5 py-3 text-emerald-400">Active</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">High AGI (&gt;$150k)</td>
                                            <td className="px-5 py-3">110% PY Tax</td>
                                            <td className="px-5 py-3 text-blue-400">Required</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Minimum Owed</td>
                                            <td className="px-5 py-3">&gt;$1,000</td>
                                            <td className="px-5 py-3 text-amber-400">Mandatory</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-emerald-500/10 font-bold text-emerald-400 italic">Penalty Zone</td>
                                            <td className="px-5 py-3 bg-emerald-500/10 font-bold text-emerald-400">&lt;90% CY</td>
                                            <td className="px-5 py-3 bg-emerald-500/10 font-bold text-emerald-400">Risk</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table II: Payout Scalars */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Activity className="w-5 h-5 text-teal-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table II: SE Tax Components</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Category</th>
                                            <th className="px-5 py-3 border-b border-white/5">Rate</th>
                                            <th className="px-5 py-3 border-b border-white/5">Limit</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Social Security</td>
                                            <td className="px-5 py-3 font-mono">12.4%</td>
                                            <td className="px-5 py-3 text-emerald-400">$176k <sup>est</sup></td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Medicare</td>
                                            <td className="px-5 py-3 font-mono">2.9%</td>
                                            <td className="px-5 py-3 text-blue-400">None</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Addl. Medicare</td>
                                            <td className="px-5 py-3 font-mono">0.9%</td>
                                            <td className="px-5 py-3 text-amber-400">&gt;$200k</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">Total SE Rate</td>
                                            <td className="px-5 py-3 font-mono">15.3%</td>
                                            <td className="px-5 py-3 text-emerald-400">Legacy</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table III: Quarterly Deadlines */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Clock className="w-5 h-5 text-amber-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table III: 2026 Deadlines</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Payment</th>
                                            <th className="px-5 py-3 border-b border-white/5">Due Date</th>
                                            <th className="px-5 py-3 border-b border-white/5">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5 font-mono">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">1st Voucher</td>
                                            <td className="px-5 py-3">April 15</td>
                                            <td className="px-5 py-3 text-emerald-400">Q1</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">2nd Voucher</td>
                                            <td className="px-5 py-3">June 15</td>
                                            <td className="px-5 py-3 text-blue-400">Q2</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">3rd Voucher</td>
                                            <td className="px-5 py-3">Sept 15</td>
                                            <td className="px-5 py-3 text-amber-400">Q3</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">Final Voucher</td>
                                            <td className="px-5 py-3">Jan 15</td>
                                            <td className="px-5 py-3 text-emerald-400">Q4 (PY)</td>
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
                        <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-emerald-500 pl-6 underline underline-offset-8 decoration-emerald-500/30">2026 Estimated Tax Architecture</h2>

                        <p className="text-slate-300 text-lg leading-relaxed mb-6 font-sans text-left">
                            The estimated tax system serves as a 'Pay-As-You-Go' mechanism for income not subject to standard employer withholding. In the 2026 fiscal cycle, this involves precise mapping of **Self-Employment (SE) Liabilities**, **Safe Harbor Targets**, and **Quarterly Liquidity Management**. Our S-Class engine analyzes the core compliance vectors: **Net Profit Forecasting**, **SE Tax Allocation**, and **Safe Harbor Buffer Calculation**.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 my-10 font-sans">
                            <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-emerald-500">
                                    <PieChart className="w-16 h-16" />
                                </div>
                                <h4 className="text-emerald-400 font-bold mb-3 uppercase tracking-tighter text-xs">I. Liability Dynamics</h4>
                                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                                    <li>• **SE Tax Logic**: Calculating the 15.3% Social Security/Medicare load.</li>
                                    <li>• **Deduction Mapping**: Impact of the 50% SE tax adjustment.</li>
                                    <li>• **Income Thresholds**: Monitoring the SSI wage base ($176k est).</li>
                                    <li>• **Credits & Offsets**: Integrating refundable childcare or health credits.</li>
                                </ul>
                            </div>
                            <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-teal-500">
                                    <LineChart className="w-16 h-16" />
                                </div>
                                <h4 className="text-teal-400 font-bold mb-3 uppercase tracking-tighter text-xs">II. Penalty Avoidance Logic</h4>
                                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                                    <li>• **90% Current Year**: The default standard for accuracy.</li>
                                    <li>• **110% Prior Year**: The high-income HNW shield.</li>
                                    <li>• **Annualized Income**: Managing volatility for seasonal freelancers.</li>
                                    <li>• **Underpayment Decay**: Impact of interest rates (typically ~8%).</li>
                                </ul>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4 text-left">The Actuarial Model: Beyond Simple Deferral</h3>
                        <p className="text-slate-400 leading-relaxed mb-6 font-sans text-left">
                            Standard calculators often fail to account for the **Cumulative Interest Burden** of missed payments. If a freelancer misses Q1 and Q2, simply 'catching up' in Q3 does not remove the penalty for the first two quarters. Our Compliance Engine applies a **Time-Segmented Analysis**, identifying the exact liquidity required for each voucher cycle to maintain professional-grade 'Safe Harbor' status for the 2026 tax year.
                        </p>

                        <div className="bg-emerald-500/5 border border-emerald-500/20 p-6 rounded-2xl my-10 font-sans text-left">
                            <div className="flex items-start gap-4 text-emerald-300">
                                <Info className="w-6 h-6 shrink-0 mt-1" />
                                <div className="text-sm leading-relaxed">
                                    <strong className="text-emerald-200 block mb-1 uppercase tracking-widest text-[10px]">Technical Note: The Annualized Income Method</strong>
                                    If your income is seasonal (e.g., real estate or consulting), you can use Form 2210 and the 'Annualized Income Installment Method' to match your estimated payments to your actual cash flow, potentially reducing or eliminating penalties for lower-income quarters.
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
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 italic tracking-wide font-sans">Tax Intelligence</h2>
                        <p className="text-slate-500 font-medium tracking-tight">Expert guidance for navigating 2026 estimated tax and self-employment protocols.</p>
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
                            <RelatedCalculators currentCalc="estimated-tax" count={6} />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA FOOTER */}
            <section className="py-24 bg-gradient-to-t from-emerald-900/20 to-transparent">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">Stay Compliant.<br /><span className="text-emerald-500">Eliminate Penalties.</span></h2>
                    <Link href="/estimated-tax/calculator" className="inline-flex items-center gap-3 bg-white text-slate-950 hover:bg-slate-200 px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-emerald-500/20 active:scale-95 group">
                        <Calculator className="w-6 h-6 group-hover:text-emerald-600 transition-colors" />
                        RUN TAX AUDIT
                        <ArrowRight className="w-6 h-6" />
                    </Link>
                    <p className="mt-8 text-slate-500 text-xs font-bold tracking-[0.4em] uppercase">Verified Institutional Framework • 2026 Edition</p>
                </div>
            </section>
        </div>
    );
}
