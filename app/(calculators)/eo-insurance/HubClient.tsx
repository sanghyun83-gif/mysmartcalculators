"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
    Calculator,
    Shield,
    FileText,
    Home,
    ArrowRight,
    TrendingUp,
    TrendingDown,
    Scale,
    Info,
    ChevronDown,
    Zap,
    Briefcase,
    Activity,
    Lock,
    Globe,
    CheckCircle2,
    AlertCircle
} from "lucide-react";
import { SITE, CALCULATORS, AGENT_TYPES, EO_2026, FAQS, formatCurrency } from "@/lib/calculators/eo-insurance";
import { RelatedCalculators } from "@/components/RelatedCalculators";

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    return (
        <div className="grid gap-4 max-w-3xl mx-auto">
            {FAQS.slice(0, 6).map((faq, idx) => (
                <div key={idx} className="bg-slate-900/50 border border-white/5 rounded-xl overflow-hidden active:scale-[0.99] transition-all text-left">
                    <button
                        onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                        className="w-full p-5 flex items-center justify-between"
                    >
                        <span className="font-semibold text-slate-100 pr-8">{faq.question}</span>
                        <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} />
                    </button>
                    {openIndex === idx && (
                        <div className="px-5 pb-5 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                            {faq.answer}
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
                            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-blue-400">Professional Indemnity Protocol 2026</span>
                        </div>

                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
                            E&O Insurance <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 italic">Audit Node</span>
                        </h1>

                        <p className="max-w-2xl text-slate-400 text-base sm:text-lg md:text-xl leading-relaxed mb-10">
                            Precision Errors & Omissions forecasting for agents and service providers. Benchmark your 2026 professional liability premiums against NAIC loss-cost data.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/eo-insurance/calculator" className="flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-[1.02] shadow-xl shadow-blue-500/20 active:scale-95">
                                <Calculator className="w-5 h-5 shrink-0" />
                                Run Premium Model
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
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 italic">Authority Data Benchmarks</h2>
                        <p className="text-slate-400">Official 2026 professional indemnity pricing and transaction risk scalars.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Table I: Premium Trajectory */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Activity className="w-5 h-5 text-blue-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table I: Market Trajectory</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Fiscal Cycle</th>
                                            <th className="px-5 py-3 border-b border-white/5">Base Rate</th>
                                            <th className="px-5 py-3 border-b border-white/5">Risk Shift</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5 font-mono">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">2023 FY</td>
                                            <td className="px-5 py-3">$295 avg</td>
                                            <td className="px-5 py-3 text-emerald-400">+1.5%</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">2024 FY</td>
                                            <td className="px-5 py-3">$320 avg</td>
                                            <td className="px-5 py-3 text-emerald-400">+5.2%</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">2025 FY</td>
                                            <td className="px-5 py-3">$350 avg</td>
                                            <td className="px-5 py-3 text-amber-400">+8.4%</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-blue-500/10 font-bold text-blue-400 italic">2026 Target</td>
                                            <td className="px-5 py-3 bg-blue-500/10 font-bold text-blue-400">$385+</td>
                                            <td className="px-5 py-3 bg-blue-500/10 font-bold text-rose-400">+10.2%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table II: Profession Risk Tiers */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Briefcase className="w-5 h-5 text-indigo-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table II: Profession Scalars</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Agent Class</th>
                                            <th className="px-5 py-3 border-b border-white/5">Risk Multiplier</th>
                                            <th className="px-5 py-3 border-b border-white/5">Exp. Base</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Notary Public</td>
                                            <td className="px-5 py-3 text-emerald-400">0.6x (Core)</td>
                                            <td className="px-5 py-3 font-mono">$150/yr</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">R.E. Agent</td>
                                            <td className="px-5 py-3 text-blue-400">1.0x (Std)</td>
                                            <td className="px-5 py-3 font-mono">$350/yr</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Property Manager</td>
                                            <td className="px-5 py-3 text-amber-400">1.2x Rating</td>
                                            <td className="px-5 py-3 font-mono">$500/yr</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Mortgage Broker</td>
                                            <td className="px-5 py-3 text-rose-400">1.3x Rating</td>
                                            <td className="px-5 py-3 font-mono">$600/yr</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table III: Logic Parameters */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Scale className="w-5 h-5 text-emerald-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table III: Logic Overlays</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Logic Filter</th>
                                            <th className="px-5 py-3 border-b border-white/5">Impact Type</th>
                                            <th className="px-5 py-3 border-b border-white/5">Variance</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Experience-Mod</td>
                                            <td className="px-5 py-3">Tenure Discount</td>
                                            <td className="px-5 py-3 text-emerald-400">Up to -20%</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Claims History</td>
                                            <td className="px-5 py-3">Incident Load</td>
                                            <td className="px-5 py-3 text-rose-400">+45.0% avg</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Transaction Vol</td>
                                            <td className="px-5 py-3">Exposure Weight</td>
                                            <td className="px-5 py-3 text-amber-400">0.8x - 1.6x</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Team Size</td>
                                            <td className="px-5 py-3">Headcount Multi</td>
                                            <td className="px-5 py-3">+25%/person</td>
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
                        <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-blue-500 pl-6 underline underline-offset-8 decoration-blue-500/30 font-sans">2026 E&O Liability Framework & Professional Indemnity</h2>

                        <p className="text-slate-300 text-lg leading-relaxed mb-6">
                            In the 2026 professional services market, **Errors & Omissions (E&O)** insurance, also known as Professional Liability, has become a non-negotiable requirement for licensure and contract compliance. For real estate agents, insurance brokers, and notaries, the 'Duty of Care' is subject to increasing litigation. Your premium is no longer determined solely by your profession, but by a complex matrix of **Transaction Volume**, **Claims History**, and **Fiduciary Exposure**.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 my-10 font-sans">
                            <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-blue-500">
                                    <CheckCircle2 className="w-16 h-16" />
                                </div>
                                <h4 className="text-blue-400 font-bold mb-3 uppercase tracking-tighter text-xs">I. Core Coverage Pillars</h4>
                                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0">
                                    <li>• **Negligence Claims**: Defense against failure to perform.</li>
                                    <li>• **Disclosure Errors**: Missed or incorrect information in contracts.</li>
                                    <li>• **Fiduciary Breach**: Claims of acting against client interest.</li>
                                    <li>• **Defense Costs**: Coverage for legal fees regardless of merit.</li>
                                </ul>
                            </div>
                            <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-indigo-500">
                                    <AlertCircle className="w-16 h-16" />
                                </div>
                                <h4 className="text-indigo-400 font-bold mb-3 uppercase tracking-tighter text-xs">II. Actuarial Risk Drivers</h4>
                                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0">
                                    <li>• **Annual Transaction Volume**: The primary scalar for frequency risk.</li>
                                    <li>• **Years of Tenure**: Experience mod discount applied for 5+ years.</li>
                                    <li>• **Limit Aggregation**: The ratio of per-claim vs. aggregate limits.</li>
                                    <li>• **Team Complexity**: Surcharges for administrative/assistant staff.</li>
                                </ul>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4">Precision Logic: The S-Class Model</h3>
                        <p className="text-slate-400 leading-relaxed mb-6 font-sans">
                            Our 2026 Engine utilizes the **Agent Loss-Cost Model**. We analyze your specific 'Agent Class' (e.g., Realtor vs. Signing Agent), apply the 'Volume Multiplier' based on your annual deal flow, and integrate the 'Experience Discount' to Reward professional longevity. This creates a high-fidelity premium forecast used by institutional carriers for independent agent risk assessment.
                        </p>

                        <div className="bg-blue-500/5 border border-blue-500/20 p-6 rounded-2xl my-10 font-sans">
                            <div className="flex items-start gap-4 text-blue-300">
                                <Info className="w-6 h-6 shrink-0 mt-1" />
                                <div className="text-sm leading-relaxed">
                                    <strong className="text-blue-200 block mb-1 uppercase tracking-widest text-[10px]">Technical Note: Prior Acts Coverage</strong>
                                    When switching carriers in 2026, ensure your new policy includes a 'Retroactive Date' that matches your original start date. Failure to secure **Prior Acts Coverage** leaves you personally liable for any mistakes made during your tenure with the previous insurer, even if a claim is filed after the switch.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. EXPERT FAQ HUB LAYER */}
            <section className="py-20 border-t border-white/5 bg-[#020617]">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 italic tracking-wide">Professional Intelligence Hub</h2>
                        <p className="text-slate-500 font-medium">Strategic guidance for professional liability risk management in 2026.</p>
                    </div>
                    <FAQSection />
                </div>
            </section>

            {/* 5. RELATED CALCULATORS LAYER */}
            <section className="py-20 border-t border-white/5 bg-slate-950">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-col items-center gap-12">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">Institutional Risk Cluster</h2>
                            <p className="text-slate-500 text-sm italic italic tracking-[0.3em] uppercase font-light">Internal Resource Linking</p>
                        </div>
                        <div className="w-full max-w-lg">
                            <RelatedCalculators currentCalc="eo-insurance" count={6} />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA FOOTER */}
            <section className="py-24 bg-gradient-to-t from-blue-900/20 to-transparent">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">Protect Your License.<br /><span className="text-blue-500">Secure Your Reputation.</span></h2>
                    <Link href="/eo-insurance/calculator" className="inline-flex items-center gap-3 bg-white text-slate-950 hover:bg-slate-200 px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-blue-500/20 active:scale-95 group">
                        <Lock className="w-6 h-6 group-hover:text-blue-600 transition-colors" />
                        RUN AUDIT ENGINE
                        <ArrowRight className="w-6 h-6" />
                    </Link>
                    <p className="mt-8 text-slate-500 text-xs font-bold tracking-[0.4em] uppercase">Verified Institutional Framework • 2026 Edition</p>
                </div>
            </section>
        </div>
    );
}
