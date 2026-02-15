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
    Heart,
    HeartPulse,
    Music
} from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const faqs = [
        {
            q: "What is the difference between Wedding Liability and Cancellation coverage?",
            a: "Liability insurance protects you if a guest is injured or if there is damage to the venue (e.g., a guest trips on a rug). Cancellation coverage protects your deposits if the wedding is postponed or cancelled due to unforeseen events like severe weather or vendor bankruptcy."
        },
        {
            q: "Does wedding insurance cover 'Change of Heart'?",
            a: "No. Wedding insurance is designed for unforeseen circumstances beyond the couple's control. If one party simply decides not to go through with the wedding, the insurance policy will not provide any reimbursement."
        },
        {
            q: "What count as 'Unforeseen Circumstances' for cancellation?",
            a: "Typical covered reasons include extreme weather (hurricanes, blizzards), sudden illness or death of an immediate family member, unexpected military deployment, or a vendor (like a caterer) going out of business just before the event."
        },
        {
            q: "Do venues require liability insurance?",
            a: "Most professional wedding venues now require a minimum of $1,000,000 in liability coverage. They may also ask for a 'Certificate of Insurance' (COI) naming them as an 'Additional Insured' to protect themselves from lawsuits arising from your event."
        },
        {
            q: "Does wedding insurance cover destination weddings?",
            a: "Yes, but you must ensure the policy specifically covers international locations. Some US-based policies only cover the 50 states and Canada. Destination riders may be required for weddings in Mexico, Europe, or the Caribbean."
        },
        {
            q: "When is the latest I can purchase wedding insurance?",
            a: "Liability coverage can often be purchased up to 24-48 hours before the event. However, cancellation coverage usually must be purchased at least 14-30 days prior to the wedding date to be effective."
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
        <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-rose-500/30">
            {/* 1. S-CLASS HERO LAYER */}
            <section className="relative pt-24 pb-20 overflow-hidden border-b border-white/5">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rose-500/10 via-transparent to-transparent opacity-50 pointer-events-none" />

                <div className="max-w-6xl mx-auto px-4 relative z-10">
                    <div className="flex flex-col items-center text-center">
                        <div className="inline-flex items-center gap-2 bg-rose-500/10 border border-rose-500/20 px-3 py-1 rounded-full mb-8 backdrop-blur-md">
                            <Heart className="w-3.5 h-3.5 text-rose-400" />
                            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-rose-400">Marital Event Protocol 2026</span>
                        </div>

                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
                            Wedding Insurance <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400 italic">Audit Matrix</span>
                        </h1>

                        <p className="max-w-2xl text-slate-400 text-base sm:text-lg md:text-xl leading-relaxed mb-10">
                            Institutional-grade event liability forecasting. Solve for cancellation exposure, vendor bankruptcy risk, and host liquor liability with 2026 precision.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/wedding-insurance/calculator" className="flex items-center gap-3 bg-rose-600 hover:bg-rose-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-[1.02] shadow-xl shadow-rose-500/20 active:scale-95">
                                <Calculator className="w-5 h-5 shrink-0" />
                                Run Wedding Auditor
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
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 italic">Event Benchmarks</h2>
                        <p className="text-slate-400">Official 2026 wedding risk tiers and insurance reimbursement targets.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Table I: Coverage Logic */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Target className="w-5 h-5 text-rose-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table I: 2026 Stack</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Risk Layer</th>
                                            <th className="px-5 py-3 border-b border-white/5">Limit Root</th>
                                            <th className="px-5 py-3 border-b border-white/5">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5 font-mono">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Liability (Host)</td>
                                            <td className="px-5 py-3">$1,000,000</td>
                                            <td className="px-5 py-3 text-emerald-400">Venue Std</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Cancellation</td>
                                            <td className="px-5 py-3">$40,000</td>
                                            <td className="px-5 py-3 text-blue-400">Avg Cost</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Special Attire</td>
                                            <td className="px-5 py-3">$5,000</td>
                                            <td className="px-5 py-3 text-amber-400">Sub-limit</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-rose-500/10 font-bold text-rose-400 italic">Deductible</td>
                                            <td className="px-5 py-3 bg-rose-500/10 font-bold text-rose-400">$25</td>
                                            <td className="px-5 py-3 bg-rose-500/10 font-bold text-rose-400">Nominal</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table II: Performance Scalars */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Activity className="w-5 h-5 text-pink-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table II: Liability Gaps</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Event Period</th>
                                            <th className="px-5 py-3 border-b border-white/5">Avg Prem</th>
                                            <th className="px-5 py-3 border-b border-white/5">Exposure</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Liability Only</td>
                                            <td className="px-5 py-3 font-mono">$125</td>
                                            <td className="px-5 py-3 text-emerald-400">Venue</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Full Suite</td>
                                            <td className="px-5 py-3 font-mono">$350</td>
                                            <td className="px-5 py-3 text-blue-400">Total</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Liquor Rider</td>
                                            <td className="px-5 py-3 font-mono">+$50</td>
                                            <td className="px-5 py-3 text-rose-400">Social</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">Policy Fee</td>
                                            <td className="px-5 py-3 font-mono">~$15</td>
                                            <td className="px-5 py-3 text-teal-400">Fixed</td>
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
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Asset Protect</td>
                                            <td className="px-5 py-3">Liability Cap</td>
                                            <td className="px-5 py-3 text-emerald-400">Shielded</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Budget Secure</td>
                                            <td className="px-5 py-3">Deposit Reimb.</td>
                                            <td className="px-5 py-3 text-blue-400">Liquidity</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Destination</td>
                                            <td className="px-5 py-3">Global Rider</td>
                                            <td className="px-5 py-3 text-indigo-400">Ext Territ.</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">Vendor Default</td>
                                            <td className="px-5 py-3">Bankruptcy Cov.</td>
                                            <td className="px-5 py-3 text-rose-400">Recovery</td>
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
                    <div className="prose prose-invert prose-rose max-w-none">
                        <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-rose-500 pl-6 underline underline-offset-8 decoration-rose-500/30">2026 Marital Event Architecture</h2>

                        <p className="text-slate-300 text-lg leading-relaxed mb-6 font-sans text-left">
                            Wedding insurance represents a specialized temporal risk management instrument. In the 2026 event lifecycle, the focus is on navigating **Venue Liability Requirements**, **Vendor Bankruptcy Friction**, and **Liquor Liability Exposure**. Our S-Class engine analyzes the core coverage vectors: **Cancellation Velocity**, **Pre-Event Deposit Liquidity**, and **Social Host Indemnity Dynamics**.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 my-10 font-sans">
                            <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-rose-500">
                                    <PieChart className="w-16 h-16" />
                                </div>
                                <h4 className="text-rose-400 font-bold mb-3 uppercase tracking-tighter text-xs">I. Expenditure Dynamics</h4>
                                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                                    <li>• **Deposit Arbitrage**: Solving for the $35,000+ national average wedding exposure.</li>
                                    <li>• **Attire Limitation**: Mapping sub-limits for gown, tux, and jewelry restoration.</li>
                                    <li>• **Gifts & Photography**: Audits for loss of media or physical gift theft at the venue.</li>
                                    <li>• **Vendor Default Velocity**: Identifying insurers with the fastest payout for no-show caterers/bands.</li>
                                </ul>
                            </div>
                            <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-pink-500">
                                    <LineChart className="w-16 h-16" />
                                </div>
                                <h4 className="text-pink-400 font-bold mb-3 uppercase tracking-tighter text-xs">II. Regulatory Friction</h4>
                                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                                    <li>• **The 30-Day Cancellation Window**: Managing the time-sensitive purchase requirements.</li>
                                    <li>• **Additional Insured Endorsement**: Solving for the Certificate of Insurance (COI) venue mandate.</li>
                                    <li>• **Host Liquor Responsibility**: Managing the boundary between private and social alcohol liability.</li>
                                    <li>• **Act of God Exclusion**: Monitoring shift in 'Force Majeure' definitions for 2026.</li>
                                </ul>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4 text-left">The Actuarial Model: Solving for the Event Alpha</h3>
                        <p className="text-slate-400 leading-relaxed mb-6 font-sans text-left">
                            Standard calculators often fail to account for the **Sunk Cost Recovery Index**. While you might have paid $5,000 to a caterer, if they go bankrupt, a standard liability policy provides zero recovery. Our Wedding Audit Engine applies a **Counterparty Risk Co-efficient**, identifying the exact dollar-amount of cancellation coverage required to ensure 100% deposit liquidity in the event of venue fire, extreme weather, or vendor non-performance in the 2026 market.
                        </p>

                        <div className="bg-rose-500/5 border border-rose-500/20 p-6 rounded-2xl my-10 font-sans text-left">
                            <div className="flex items-start gap-4 text-rose-300">
                                <Info className="w-6 h-6 shrink-0 mt-1" />
                                <div className="text-sm leading-relaxed">
                                    <strong className="text-rose-200 block mb-1 uppercase tracking-widest text-[10px]">Strategic Note: 'Change of Heart' Reality</strong>
                                    It is a common misconception that wedding insurance covers a runaway bride or groom. In 2026, no standard insurance product covers 'voluntary cancellation.' However, if a wedding is called off due to the *mental incapacity* or *severe medical event* of a party, it may trigger coverage depending on the specific psychiatric provisions in the policy.
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
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 italic tracking-wide font-sans">Event Intelligence</h2>
                        <p className="text-slate-500 font-medium tracking-tight">Expert guidance for navigating 2026 wedding and event insurance protocols.</p>
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
                            <RelatedCalculators currentCalc="wedding-insurance" count={6} />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA FOOTER */}
            <section className="py-24 bg-gradient-to-t from-rose-900/20 to-transparent">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">Guard Your Special Day.<br /><span className="text-rose-500">Secure Your Wedding Alpha.</span></h2>
                    <Link href="/wedding-insurance/calculator" className="inline-flex items-center gap-3 bg-white text-slate-950 hover:bg-slate-200 px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-rose-500/20 active:scale-95 group">
                        <Calculator className="w-6 h-6 group-hover:text-rose-600 transition-colors" />
                        RUN WEDDING AUDIT
                        <ArrowRight className="w-6 h-6" />
                    </Link>
                    <p className="mt-8 text-slate-500 text-xs font-bold tracking-[0.4em] uppercase">Verified Institutional Framework • 2026 Edition</p>
                </div>
            </section>
        </div>
    );
}
