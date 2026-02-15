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
    Gift
} from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const faqs = [
        {
            q: "What is the annual gift tax exclusion for 2026?",
            a: "For 2026, the annual gift tax exclusion is projected to be $18,000 per donor, per recipient. This means you can give up to $18,000 to any number of people without having to file a gift tax return or use any of your lifetime exemption."
        },
        {
            q: "How does the 'Lifetime Gift Tax Exemption' work in 2026?",
            a: "The lifetime exemption for 2026 is projected to be approximately $13.99 million. Only gifts that exceed the annual exclusion ($18,000) count against this lifetime limit. Most individuals will never owe gift tax because their total lifetime gifts remain below this threshold."
        },
        {
            q: "Who is responsible for paying the gift tax: the giver or the receiver?",
            a: "The donor (the person giving the gift) is generally responsible for paying the gift tax and filing the gift tax return (Form 709). The recipient typically receives the gift tax-free and does not need to report it as income."
        },
        {
            q: "What is 'Gift Splitting' for married couples?",
            a: "Married couples can choose to 'split' their gifts, effectively doubling the annual exclusion. In 2026, a couple could give $36,000 to a single recipient tax-free, even if the funds come from only one spouse's account (provided they both consent on a tax return)."
        },
        {
            q: "Are there any gifts that are always tax-exempt?",
            a: "Yes. Unlimited gifts can be made to a spouse (who is a U.S. citizen), for certain medical expenses (paid directly to the provider), or for tuition expenses (paid directly to the educational institution). These do not count toward the annual or lifetime limits."
        },
        {
            q: "How does the 'Sunset' of the TCJA affect gift tax planning?",
            a: "Like the estate tax, the high lifetime gift tax exemption is set to expire after 2025. This creates a 'use it or lose it' scenario where high-net-worth individuals may want to make large gifts now to lock in the current $13M+ exemption before it potentially drops to ~$7M."
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
                            <Gift className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-emerald-400">Wealth Transfer Protocol 2026</span>
                        </div>

                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
                            Gift Tax <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 italic">Audit Matrix</span>
                        </h1>

                        <p className="max-w-2xl text-slate-400 text-base sm:text-lg md:text-xl leading-relaxed mb-10">
                            Institutional-grade wealth transfer forecasting. Solve for annual exclusions, lifetime exemptions, and unified credit mapping with 2026 precision.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/gift-tax/calculator" className="flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-[1.02] shadow-xl shadow-emerald-500/20 active:scale-95">
                                <Calculator className="w-5 h-5 shrink-0" />
                                Run Gift Tax Auditor
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
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 italic">Transfer Benchmarks</h2>
                        <p className="text-slate-400">Official 2026 exclusion thresholds and tax-free gifting limits.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Table I: Exclusion Logic */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Target className="w-5 h-5 text-emerald-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table I: 2026 Exclusions</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Filing Status</th>
                                            <th className="px-5 py-3 border-b border-white/5">Annual Limit</th>
                                            <th className="px-5 py-3 border-b border-white/5">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5 font-mono">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Individual Donor</td>
                                            <td className="px-5 py-3">$18,000</td>
                                            <td className="px-5 py-3 text-emerald-400">Active</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Gift Splitting</td>
                                            <td className="px-5 py-3">$36,000</td>
                                            <td className="px-5 py-3 text-blue-400">Couples</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Lifetime Exemp.</td>
                                            <td className="px-5 py-3">$13.99M</td>
                                            <td className="px-5 py-3 text-emerald-400">Unified</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-emerald-500/10 font-bold text-emerald-400 italic">Education/Med</td>
                                            <td className="px-5 py-3 bg-emerald-500/10 font-bold text-emerald-400">Unlimited</td>
                                            <td className="px-5 py-3 bg-emerald-500/10 font-bold text-emerald-400">Exempt</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table II: Payout Scalars */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Activity className="w-5 h-5 text-teal-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table II: Uniform Rate Table</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Taxable Gift</th>
                                            <th className="px-5 py-3 border-b border-white/5">Base Tax</th>
                                            <th className="px-5 py-3 border-b border-white/5">Marginal %</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">$0 - $10k</td>
                                            <td className="px-5 py-3 font-mono">$0</td>
                                            <td className="px-5 py-3 text-emerald-400">18%</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">$250k - $500k</td>
                                            <td className="px-5 py-3 font-mono">$70,800</td>
                                            <td className="px-5 py-3 text-amber-400">34%</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">$1M+</td>
                                            <td className="px-5 py-3 font-mono">$345,800</td>
                                            <td className="px-5 py-3 text-rose-400">40%</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">Effective Rate</td>
                                            <td className="px-5 py-3 font-mono">Variable</td>
                                            <td className="px-5 py-3 text-emerald-400">Standard</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table III: Optimization Mapping */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <RefreshCw className="w-5 h-5 text-amber-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table III: Reporting Matrix</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Gift Amount</th>
                                            <th className="px-5 py-3 border-b border-white/5">Form 709</th>
                                            <th className="px-5 py-3 border-b border-white/5">Tax Due</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5 font-mono">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">&lt; $18,000</td>
                                            <td className="px-5 py-3">No</td>
                                            <td className="px-5 py-3 text-emerald-400">None</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">&gt; $18,000</td>
                                            <td className="px-5 py-3">Yes</td>
                                            <td className="px-5 py-3 text-emerald-400">Usually $0</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">&gt;$13.99M <sup>life</sup></td>
                                            <td className="px-5 py-3">Yes</td>
                                            <td className="px-5 py-3 text-rose-400">Payable</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">Married <sup>joint</sup></td>
                                            <td className="px-5 py-3">&lt; $36k No</td>
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
                        <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-emerald-500 pl-6 underline underline-offset-8 decoration-emerald-500/30">2026 Gift Tax Architecture</h2>

                        <p className="text-slate-300 text-lg leading-relaxed mb-6 font-sans text-left">
                            The federal gift tax is a key component of the **Unified Transfer Tax System**, designed to prevent taxpayers from avoiding estate taxes by giving away assets during their lifetime. In the 2026 regulatory environment, the focus is on maximizing the **Annual Exclusion Velocity** while monitoring the **Unified Credit Sunset**. Our S-Class engine analyzes the core transfer vectors: **Exclusion Segmentation**, **Lifetime Credit Erosion**, and **Tax-Free Carveouts**.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 my-10 font-sans">
                            <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-emerald-500">
                                    <PieChart className="w-16 h-16" />
                                </div>
                                <h4 className="text-emerald-400 font-bold mb-3 uppercase tracking-tighter text-xs">I. Transfer Dynamics</h4>
                                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                                    <li>• **Direct-Pay Education**: Paying tuition directly avoids the gift tax.</li>
                                    <li>• **Medical Carveouts**: Payments to healthcare providers are exempt.</li>
                                    <li>• **529 Plan Superfunding**: 5-year accelerated gifting strategy.</li>
                                    <li>• **Crummey Powers**: Granting 'present interest' in trust assets.</li>
                                </ul>
                            </div>
                            <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-teal-500">
                                    <LineChart className="w-16 h-16" />
                                </div>
                                <h4 className="text-teal-400 font-bold mb-3 uppercase tracking-tighter text-xs">II. Regulatory Friction</h4>
                                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                                    <li>• **Form 709 Compliance**: Identifying when reporting is mandatory.</li>
                                    <li>• **Unified Credit Decay**: Calculating impact on the future estate tax.</li>
                                    <li>• **State Gift Taxes**: Monitoring states (like CT) with separate levies.</li>
                                    <li>• **Valuation Discounts**: Impact of gifting illiquid business shares.</li>
                                </ul>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4 text-left">The Actuarial Model: Mapping Unified Exposure</h3>
                        <p className="text-slate-400 leading-relaxed mb-6 font-sans text-left">
                            Standard calculators often fail to account for the **Unified Basis Gap**. When you gift an asset during your lifetime, the recipient takes your 'Carryover Basis'—potentially leading to high capital gains taxes later. Conversely, waiting until death provides a 'Stepped-Up Basis'. Our Gifting Audit Engine applies a **Basis Efficiency Analysis**, identifying the exact threshold where the benefits of removing assets from your estate outweigh the loss of the stepped-up basis for your heirs.
                        </p>

                        <div className="bg-emerald-500/5 border border-emerald-500/20 p-6 rounded-2xl my-10 font-sans text-left">
                            <div className="flex items-start gap-4 text-emerald-300">
                                <Info className="w-6 h-6 shrink-0 mt-1" />
                                <div className="text-sm leading-relaxed">
                                    <strong className="text-emerald-200 block mb-1 uppercase tracking-widest text-[10px]">Strategic Note: The 'Use It or Lose It' Window</strong>
                                    With the TCJA sunset pending at the end of 2025, individuals with estates in the $10M - $25M range are currently in a critical window. Gifting 'excess' lifetime exemption now can shield millions from the 40% estate tax that would otherwise apply once the exemption drops back to the ~$7M range in 2026/2027.
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
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 italic tracking-wide font-sans">Gift Intelligence</h2>
                        <p className="text-slate-500 font-medium tracking-tight">Expert guidance for navigating 2026 gift tax and transfer protocols.</p>
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
                            <RelatedCalculators currentCalc="gift-tax" count={6} />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA FOOTER */}
            <section className="py-24 bg-gradient-to-t from-emerald-900/20 to-transparent">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">Transfer Your Wealth.<br /><span className="text-emerald-500">Minimize Your Tax Loss.</span></h2>
                    <Link href="/gift-tax/calculator" className="inline-flex items-center gap-3 bg-white text-slate-950 hover:bg-slate-200 px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-emerald-500/20 active:scale-95 group">
                        <Calculator className="w-6 h-6 group-hover:text-emerald-600 transition-colors" />
                        RUN GIFT AUDIT
                        <ArrowRight className="w-6 h-6" />
                    </Link>
                    <p className="mt-8 text-slate-500 text-xs font-bold tracking-[0.4em] uppercase">Verified Institutional Framework • 2026 Edition</p>
                </div>
            </section>
        </div>
    );
}
