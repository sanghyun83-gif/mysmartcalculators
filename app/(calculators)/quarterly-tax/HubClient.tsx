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
    Calendar
} from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const faqs = [
        {
            q: "Who is required to pay quarterly estimated taxes in 2026?",
            a: "Individuals, including sole proprietors, partners, and S corporation shareholders, generally have to make estimated tax payments if they expect to owe tax of $1,000 or more when their return is filed. This typically applies to income not subject to withholding, such as self-employment earnings, interest, dividends, and rent."
        },
        {
            q: "What are the 2026 quarterly tax due dates?",
            a: "For the 2026 tax year, the deadlines are: Q1 (Jan 1 – Mar 31) due April 15, 2026; Q2 (Apr 1 – May 31) due June 15, 2026; Q3 (Jun 1 – Aug 31) due September 15, 2026; and Q4 (Sept 1 – Dec 31) due January 15, 2027."
        },
        {
            q: "How does the 'Safe Harbor' rule work for 2026?",
            a: "To avoid underpayment penalties, you generally must pay at least 90% of your current year's tax liability or 100% of the tax shown on your prior year's return (110% if your adjusted gross income was over $150,000). This 'Safe Harbor' protects you even if your income increases significantly."
        },
        {
            q: "Can I be penalized if I pay the full amount only in Q4?",
            a: "Yes. Estimated tax is a 'pay-as-you-go' system. The IRS calculates penalties based on when the income was earned. If you earn income in Q1 but wait until Q4 to pay the tax, you may owe an underpayment penalty for the first three quarters, even if you pay the full total by January."
        },
        {
            q: "Do I need to pay quarterly taxes if I have a W-2 job as well?",
            a: "Not necessarily. If your W-2 withholding is high enough to cover 90% of your total tax liability (including your side income), you may not need to make estimated payments. Many people choose to increase their W-2 withholding via Form W-4 to avoid the hassle of quarterly filings."
        },
        {
            q: "How do I actually make a quarterly payment to the IRS?",
            a: "The most efficient way is through 'IRS Direct Pay' or the 'Electronic Federal Tax Payment System' (EFTPS). You can also mail a check with Form 1040-ES, but electronic payments provide immediate confirmation and better record-keeping for audit protection."
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
                            <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-emerald-400">Quarterly Remittance Protocol 2026</span>
                        </div>

                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
                            Quarterly Tax <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 italic">Audit Matrix</span>
                        </h1>

                        <p className="max-w-2xl text-slate-400 text-base sm:text-lg md:text-xl leading-relaxed mb-10">
                            Institutional-grade estimated tax forecasting. Solve for safe harbor rules, SE tax clusters, and penalty thresholds with 2026 precision.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/quarterly-tax/calculator" className="flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-[1.02] shadow-xl shadow-emerald-500/20 active:scale-95">
                                <Calculator className="w-5 h-5 shrink-0" />
                                Run Quarterly Auditor
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
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 italic">Remittance Benchmarks</h2>
                        <p className="text-slate-400">Official 2026 quarterly deadlines and penalty threshold targets.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Table I: Deadline Logic */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Target className="w-5 h-5 text-emerald-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table I: 2026 Deadlines</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Quarter</th>
                                            <th className="px-5 py-3 border-b border-white/5">Due Date</th>
                                            <th className="px-5 py-3 border-b border-white/5">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5 font-mono">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Q1 (Jan-Mar)</td>
                                            <td className="px-5 py-3">April 15</td>
                                            <td className="px-5 py-3 text-emerald-400">Active</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Q2 (Apr-May)</td>
                                            <td className="px-5 py-3">June 15</td>
                                            <td className="px-5 py-3 text-blue-400">Standard</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Q3 (Jun-Aug)</td>
                                            <td className="px-5 py-3">Sept 15</td>
                                            <td className="px-5 py-3 text-emerald-400">Standard</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-emerald-500/10 font-bold text-emerald-400 italic">Q4 (Sept-Dec)</td>
                                            <td className="px-5 py-3 bg-emerald-500/10 font-bold text-emerald-400">Jan 15 (27)</td>
                                            <td className="px-5 py-3 bg-emerald-500/10 font-bold text-emerald-400">Final</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table II: Payout Scalars */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Activity className="w-5 h-5 text-teal-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table II: Safe Harbor</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Threshold</th>
                                            <th className="px-5 py-3 border-b border-white/5">Target %</th>
                                            <th className="px-5 py-3 border-b border-white/5">Basis</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Current Year</td>
                                            <td className="px-5 py-3 font-mono">90%</td>
                                            <td className="px-5 py-3 text-emerald-400">Total Liab</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Prior Year (Std)</td>
                                            <td className="px-5 py-3 font-mono">100%</td>
                                            <td className="px-5 py-3 text-teal-400">2025 Total</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">High Income</td>
                                            <td className="px-5 py-3 font-mono">110%</td>
                                            <td className="px-5 py-3 text-amber-400">$150k+ AGI</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">Penalty Min</td>
                                            <td className="px-5 py-3 font-mono">$1,000</td>
                                            <td className="px-5 py-3 text-emerald-400">Floor</td>
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
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Liquidity Max</td>
                                            <td className="px-5 py-3">90% Projection</td>
                                            <td className="px-5 py-3 text-emerald-400">Preserved</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Penalty Shield</td>
                                            <td className="px-5 py-3">100/110% Rule</td>
                                            <td className="px-5 py-3 text-blue-400">Guaranteed</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">W-2 Integration</td>
                                            <td className="px-5 py-3">W-4 Over-With.</td>
                                            <td className="px-5 py-3 text-amber-400">Passive</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">Annualization</td>
                                            <td className="px-5 py-3">Form 2210</td>
                                            <td className="px-5 py-3 text-emerald-400">Variable</td>
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
                            Quarterly estimated taxes represent the 'Pay-as-you-go' reality of the modern gig and freelance economy. In the 2026 fiscal cycle, the focus is on navigating **Underpayment Penalty Arbitrage**, **Safe Harbor Guardrails**, and **Cumulative Withholding Velocity**. Our S-Class engine analyzes the core remittance vectors: **The IRS 1040-ES Framework**, **SE-Tax Clusters**, and **Annualized Income Installment Logic**.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 my-10 font-sans">
                            <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-emerald-500">
                                    <PieChart className="w-16 h-16" />
                                </div>
                                <h4 className="text-emerald-400 font-bold mb-3 uppercase tracking-tighter text-xs">I. Expenditure Dynamics</h4>
                                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                                    <li>• **SE Tax Cluster**: Solving for the combined 15.3% Social Security and Medicare burden.</li>
                                    <li>• **Remittance Alpha**: Tracking the liquidity cost of early tax payments vs. high-yield savings interest.</li>
                                    <li>• **Bracket Drift Integration**: Adjusting quarterly installments for mid-year income surges.</li>
                                    <li>• **State Nexus Alignment**: Concurrent auditing of state-level quarterly estimated requirements.</li>
                                </ul>
                            </div>
                            <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-teal-500">
                                    <LineChart className="w-16 h-16" />
                                </div>
                                <h4 className="text-teal-400 font-bold mb-3 uppercase tracking-tighter text-xs">II. Regulatory Friction</h4>
                                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                                    <li>• **IRS Form 2210 Audit**: Managing the technicalities of the 'Underpayment of Estimated Tax' penalty.</li>
                                    <li>• **The 'Pay-as-you-go' Mandate**: Identifying the legal requirement for pro-rata quarterly payments.</li>
                                    <li>• **Safe Harbor Precision**: Solving for the 100/110% prior-year liability shield.</li>
                                    <li>• **EFTPS Latency**: Managing the 24-48 hour lead time for institutional electronic transfers.</li>
                                </ul>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4 text-left">The Actuarial Model: Solving for the Remittance Alpha</h3>
                        <p className="text-slate-400 leading-relaxed mb-6 font-sans text-left">
                            Standard calculators often fail to account for **Seasonal Income Volatility**. If you earn 80% of your income in Q4 (e.g., retail or harvest), paying equal installments in Q1-Q3 is a massive misallocation of working capital. Our Quarterly Audit Engine applies an **Annualized Income Installment Method (AIIM)**, allowing you to pay lower amounts in low-revenue quarters without triggering penalties, using 2026-compliant Form 2210 logic.
                        </p>

                        <div className="bg-emerald-500/5 border border-emerald-500/20 p-6 rounded-2xl my-10 font-sans text-left">
                            <div className="flex items-start gap-4 text-emerald-300">
                                <Info className="w-6 h-6 shrink-0 mt-1" />
                                <div className="text-sm leading-relaxed">
                                    <strong className="text-emerald-200 block mb-1 uppercase tracking-widest text-[10px]">Strategic Note: The January 15 Anchor</strong>
                                    The final quarterly payment for 2026 is due January 15, 2027. However, if you file your full 2026 tax return and pay your entire balance by January 31, 2027, you do not need to make the January 15 estimated payment. This 'Filing Shortcut' can simplify year-end business accounting.
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
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 italic tracking-wide font-sans">Quarterly Intelligence</h2>
                        <p className="text-slate-500 font-medium tracking-tight">Expert guidance for navigating 2026 IRS estimated tax and penalty protocols.</p>
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
                            <RelatedCalculators currentCalc="quarterly-tax" count={6} />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA FOOTER */}
            <section className="py-24 bg-gradient-to-t from-emerald-900/20 to-transparent">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">Control Your Cash Flow.<br /><span className="text-emerald-500">Secure Your Remittance Alpha.</span></h2>
                    <Link href="/quarterly-tax/calculator" className="inline-flex items-center gap-3 bg-white text-slate-950 hover:bg-slate-200 px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-emerald-500/20 active:scale-95 group">
                        <Calculator className="w-6 h-6 group-hover:text-emerald-600 transition-colors" />
                        RUN QUARTERLY AUDIT
                        <ArrowRight className="w-6 h-6" />
                    </Link>
                    <p className="mt-8 text-slate-500 text-xs font-bold tracking-[0.4em] uppercase">Verified Institutional Framework • 2026 Edition</p>
                </div>
            </section>
        </div>
    );
}
