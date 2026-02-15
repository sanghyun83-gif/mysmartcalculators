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
    Plane,
    HeartPulse
} from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const faqs = [
        {
            q: "What is 'Cancel for Any Reason' (CFAR) coverage for 2026?",
            a: "CFAR is an optional upgrade that allows you to cancel your trip and receive 50% to 75% reimbursement of your non-refundable costs—regardless of the reason. This must typically be purchased within 14-21 days of your initial trip deposit."
        },
        {
            q: "Does travel insurance cover pre-existing medical conditions?",
            a: "Standard plans exclude pre-existing conditions. However, many insurers offer a 'Pre-existing Condition Waiver' if you purchase the plan within a short window (usually 14 days) of your first trip payment and are medically fit to travel at that time."
        },
        {
            q: "What is the difference between 'Primary' and 'Secondary' medical coverage?",
            a: "Primary coverage pays first, regardless of other insurance. Secondary coverage requires you to file a claim with your domestic health insurance first, and then pay the remaining out-of-pocket costs. Primary coverage is significantly faster and less burdensome during emergencies."
        },
        {
            q: "Will travel insurance cover a COVID-19 related cancellation?",
            a: "In 2026, most plans treat COVID-19 like any other unforeseen illness. If you or a travel companion test positive and are medically unable to travel, it is typically covered. However, 'fear of travel' due to a spike in cases is NOT covered unless you have a CFAR upgrade."
        },
        {
            q: "How does 'Trip Interruption' differ from 'Trip Cancellation'?",
            a: "Cancellation covers you *before* you leave (e.g., you get sick 2 days before flying). Interruption covers you *after* your trip begins (e.g., you must fly home early due to a family emergency), often covering the cost of the last-minute return flight."
        },
        {
            q: "What is 'Emergency Medical Evacuation'?",
            a: "This is a critical benefit for international or remote travel. If you are injured and the local hospital cannot treat you, the insurer pays for specialized transport (like a medical jet with a nurse) to the nearest adequate facility or back to your home country. This can cost $100k+ without insurance."
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
        <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-sky-500/30">
            {/* 1. S-CLASS HERO LAYER */}
            <section className="relative pt-24 pb-20 overflow-hidden border-b border-white/5">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-500/10 via-transparent to-transparent opacity-50 pointer-events-none" />

                <div className="max-w-6xl mx-auto px-4 relative z-10">
                    <div className="flex flex-col items-center text-center">
                        <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 px-3 py-1 rounded-full mb-8 backdrop-blur-md">
                            <Plane className="w-3.5 h-3.5 text-sky-400" />
                            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-sky-400">Expedition Protocol 2026</span>
                        </div>

                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
                            Travel Insurance <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400 italic">Audit Matrix</span>
                        </h1>

                        <p className="max-w-2xl text-slate-400 text-base sm:text-lg md:text-xl leading-relaxed mb-10">
                            Institutional-grade transit liability forecasting. Solve for trip cancellation limits, medical evacuation ceilings, and CFAR reimbursement rates with 2026 precision.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/travel-insurance/calculator" className="flex items-center gap-3 bg-sky-600 hover:bg-sky-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-[1.02] shadow-xl shadow-sky-500/20 active:scale-95">
                                <Calculator className="w-5 h-5 shrink-0" />
                                Run Travel Auditor
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
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 italic">Expedition Benchmarks</h2>
                        <p className="text-slate-400">Official 2026 travel insurance cost benchmarks and coverage thresholds.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Table I: Premium Scaling Logic */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Target className="w-5 h-5 text-sky-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table I: 2026 Premiums</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Plan Tier</th>
                                            <th className="px-5 py-3 border-b border-white/5">% Trip Cost</th>
                                            <th className="px-5 py-3 border-b border-white/5">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5 font-mono">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Basic Economy</td>
                                            <td className="px-5 py-3">4% - 5%</td>
                                            <td className="px-5 py-3 text-emerald-400">Std</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Comprehensive</td>
                                            <td className="px-5 py-3">7% - 9%</td>
                                            <td className="px-5 py-3 text-blue-400">Target</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">CFAR Upgrade</td>
                                            <td className="px-5 py-3">10% - 12%</td>
                                            <td className="px-5 py-3 text-indigo-400">Elite</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-sky-500/10 font-bold text-sky-400 italic">Medical-Only</td>
                                            <td className="px-5 py-3 bg-sky-500/10 font-bold text-sky-400">Flat Fee</td>
                                            <td className="px-5 py-3 bg-sky-500/10 font-bold text-sky-400">Global</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table II: Performance Scalars */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Activity className="w-5 h-5 text-indigo-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table II: Liability Gaps</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Benefit</th>
                                            <th className="px-5 py-3 border-b border-white/5">Limit</th>
                                            <th className="px-5 py-3 border-b border-white/5">Objective</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Med. Evacuation</td>
                                            <td className="px-5 py-3 font-mono">$500,000</td>
                                            <td className="px-5 py-3 text-rose-400">Critical</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Emergency Med.</td>
                                            <td className="px-5 py-3 font-mono">$100,000</td>
                                            <td className="px-5 py-3 text-emerald-400">Primary</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Luggage (High)</td>
                                            <td className="px-5 py-3 font-mono">$1,500</td>
                                            <td className="px-5 py-3 text-blue-400">Secondary</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">Travel Delay</td>
                                            <td className="px-5 py-3 font-mono">$200/Day</td>
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
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Safety First</td>
                                            <td className="px-5 py-3">Primary Med</td>
                                            <td className="px-5 py-3 text-emerald-400">Max Benefit</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Uncertainty</td>
                                            <td className="px-5 py-3">CFAR Rider</td>
                                            <td className="px-5 py-3 text-indigo-400">Cancel Any</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Adventure</td>
                                            <td className="px-5 py-3">Sports Rider</td>
                                            <td className="px-5 py-3 text-blue-400">High Risk</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">Budget Trip</td>
                                            <td className="px-5 py-3">Medical-Only</td>
                                            <td className="px-5 py-3 text-emerald-400">Min. Cost</td>
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
                    <div className="prose prose-invert prose-sky max-w-none">
                        <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-sky-500 pl-6 underline underline-offset-8 decoration-sky-500/30">2026 Expedition Liability Architecture</h2>

                        <p className="text-slate-300 text-lg leading-relaxed mb-6 font-sans text-left">
                            Travel insurance represents a critical risk-abstraction layer between your financial investment and the unforeseen variables of global transit. In the 2026 expeditionary lifecycle, the focus is on navigating **Primary Medical Jurisdiction**, **CFAR Reimbursement Ratios**, and **Emergency Evacuation Logistics**. Our S-Class engine analyzes the core protection vectors: **Pre-Existing Condition Waivers**, **Trip Interruption Velocity**, and **Luggage Limitation Scaling**.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 my-10 font-sans">
                            <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-sky-500">
                                    <PieChart className="w-16 h-16" />
                                </div>
                                <h4 className="text-sky-400 font-bold mb-3 uppercase tracking-tighter text-xs">I. Expenditure Dynamics</h4>
                                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                                    <li>• **CFAR Yield Matrix**: Solving for the 75% reimbursement math of 'cancel for any reason' upgrades.</li>
                                    <li>• **Non-Refundable Base**: Auditing the total exposure of airfare, hotels, and tours.</li>
                                    <li>• **Medical Primary Velocity**: Identifying policies that pay hospitals directly rather than via reimbursement.</li>
                                    <li>• **Rental Vehicle Excess**: Strategic mapping for collision damage waiver (CDW) alternatives.</li>
                                </ul>
                            </div>
                            <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-indigo-500">
                                    <LineChart className="w-16 h-16" />
                                </div>
                                <h4 className="text-indigo-400 font-bold mb-3 uppercase tracking-tighter text-xs">II. Regulatory Friction</h4>
                                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                                    <li>• **The 14-Day Window**: Managing the time-sensitive waiver for pre-existing conditions.</li>
                                    <li>• **Lookup Crossover**: Identifying boundary points between travel and medical policy jurisdiction.</li>
                                    <li>• **Evacuation Flight Ceiling**: Solving for the $500k+ delta in international medical transport.</li>
                                    <li>• **Adventure Exclusions**: Managing the 'Extreme Sport' boundary for scuba, skiing, and trekking.</li>
                                </ul>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4 text-left">The Actuarial Model: Solving for the Transit Alpha</h3>
                        <p className="text-slate-400 leading-relaxed mb-6 font-sans text-left">
                            Standard calculators often fail to account for the **Travel Logic Multiplier**. While a plan may cost 7% of your trip, the 'Real Value' is found in the **Secondary Provider Offset**. If your credit card already provides $5,000 in trip cancellation, purchasing a full policy is an inefficient allocation of capital. Our Travel Audit Engine applies a **Coverage Deduping Index**, identifying the exact incremental protection needed in 2026 to ensure 100% liquidity in a crisis without paying for redundant benefits.
                        </p>

                        <div className="bg-sky-500/5 border border-sky-500/20 p-6 rounded-2xl my-10 font-sans text-left">
                            <div className="flex items-start gap-4 text-sky-300">
                                <Info className="w-6 h-6 shrink-0 mt-1" />
                                <div className="text-sm leading-relaxed">
                                    <strong className="text-sky-200 block mb-1 uppercase tracking-widest text-[10px]">Strategic Note: The Medical Ceiling</strong>
                                    For travel outside the United States, Medicare and most private domestic health plans provide zero coverage. In 2026, an ICU stay in Europe or Asia can exceed $20k per day. institutional planning suggests seeking a minimum of $100k in Emergency Medical and $250k in Medical Evacuation to prevent complete financial ruin during a foreign medical event.
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
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 italic tracking-wide font-sans">Travel Intelligence</h2>
                        <p className="text-slate-500 font-medium tracking-tight">Expert guidance for navigating 2026 global transit and insurance protocols.</p>
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
                            <RelatedCalculators currentCalc="travel-insurance" count={6} />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA FOOTER */}
            <section className="py-24 bg-gradient-to-t from-sky-900/20 to-transparent">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">Protect Your Journey.<br /><span className="text-sky-500">Secure Your Travel Alpha.</span></h2>
                    <Link href="/travel-insurance/calculator" className="inline-flex items-center gap-3 bg-white text-slate-950 hover:bg-slate-200 px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-sky-500/20 active:scale-95 group">
                        <Calculator className="w-6 h-6 group-hover:text-sky-600 transition-colors" />
                        RUN TRAVEL AUDIT
                        <ArrowRight className="w-6 h-6" />
                    </Link>
                    <p className="mt-8 text-slate-500 text-xs font-bold tracking-[0.4em] uppercase">Verified Institutional Framework • 2026 Edition</p>
                </div>
            </section>
        </div>
    );
}
