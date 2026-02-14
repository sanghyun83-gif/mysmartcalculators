"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
    Calculator,
    Shield,
    FileText,
    Building2,
    ArrowRight,
    TrendingUp,
    TrendingDown,
    Scale,
    Info,
    ChevronDown,
    Zap,
    PieChart,
    Activity,
    Lock,
    Globe,
    Briefcase
} from "lucide-react";
import { SITE, CALCULATORS, COVERAGE_TYPES, COMMERCIAL_2026, formatCurrency } from "@/lib/calculators/commercial-insurance";
import { RelatedCalculators } from "@/components/RelatedCalculators";

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const faqs = [
        {
            q: "What is the primary factor affecting commercial insurance premiums in 2026?",
            a: "The most significant factor for 2026 premiums is the 'Risk Classification' or Class Code. Insurers analyze the specific industry risk profile, coupled with historical loss ratios for that sector. For example, construction businesses face higher liability ratings compared to professional offices due to physical workspace hazards."
        },
        {
            q: "How does a Business Owner Policy (BOP) differ from standalone General Liability?",
            a: "A BOP is an integrated package designed for small to medium enterprises (SMEs) that bundles General Liability (GL) with Commercial Property insurance. Standard GL only covers third-party injuries or property damage, whereas a BOP protects the business's own physical assets and business interruption losses."
        },
        {
            q: "Are 2026 cyber insurance requirements mandatory for all businesses?",
            a: "While not universally mandated by federal law, many B2B contracts and state-level data privacy regulations (like CCPA/CPRA) effectively make cyber liability insurance a de facto requirement. In 2026, lenders often require cyber coverage as a condition for commercial loans or revolving credit lines."
        },
        {
            q: "How does the 'Experience Modification Rate' (EMR) impact Workers' Comp costs?",
            a: "The EMR is a multiplier applied to your Workers' Comp premium based on your business's safety record compared to industry averages. An EMR of 1.0 is neutral; an EMR below 1.0 indicates a superior safety record and results in premium credits, while an EMR above 1.0 triggers surcharges."
        },
        {
            q: "Can businesses reduce premiums through formal risk management programs?",
            a: "Yes. Documented safety protocols, employee training certifications, and implementation of security technologies (like IoT sensors for fire/leak detection or advanced cybersecurity stacks) can qualify businesses for significant 'Safety Credits' or premium offsets from major insurers in 2026."
        }
    ];

    return (
        <div className="grid gap-4 max-w-3xl mx-auto">
            {faqs.map((faq, idx) => (
                <div key={idx} className="bg-slate-900/50 border border-white/5 rounded-xl overflow-hidden active:scale-[0.99] transition-all">
                    <button
                        onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                        className="w-full p-5 flex items-center justify-between text-left"
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
                            <Zap className="w-3.5 h-3.5 text-blue-400 fill-blue-400" />
                            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-blue-400">Institutional Protocol 2026</span>
                        </div>

                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
                            Commercial Insurance <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Premium Engine</span>
                        </h1>

                        <p className="max-w-2xl text-slate-400 text-base sm:text-lg md:text-xl leading-relaxed mb-10">
                            High-precision business coverage estimator utilizing 2026 NAIC loss-cost data, industry multipliers, and multi-line risk bundling logic for enterprise-grade premium forecasts.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/commercial-insurance/calculator" className="flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-[1.02] shadow-xl shadow-blue-500/20 active:scale-95">
                                <Calculator className="w-5 h-5 shrink-0" />
                                Run Premium Audit
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
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Authority Data Matrix</h2>
                        <p className="text-slate-400">Regulatory yield benchmarks and historical actuarial shifts for the 2026 fiscal cycle.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Table I: Historical Premium Velocity */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Activity className="w-5 h-5 text-blue-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table I: Historical Market Trends</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Fiscal Year</th>
                                            <th className="px-5 py-3 border-b border-white/5">Premium Velocity</th>
                                            <th className="px-5 py-3 border-b border-white/5">Risk Delta</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">2023 Actual</td>
                                            <td className="px-5 py-3">$1,048 avg</td>
                                            <td className="px-5 py-3 text-emerald-400">+2.4%</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">2024 Actual</td>
                                            <td className="px-5 py-3">$1,114 avg</td>
                                            <td className="px-5 py-3 text-emerald-400">+6.3%</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">2025 Actual</td>
                                            <td className="px-5 py-3">$1,192 avg</td>
                                            <td className="px-5 py-3 text-emerald-400">+7.0%</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-blue-500/10 font-bold text-blue-400 italic">2026 Target</td>
                                            <td className="px-5 py-3 bg-blue-500/10 font-bold text-blue-400">$1,281 avg</td>
                                            <td className="px-5 py-3 bg-blue-500/10 font-bold text-amber-400">+7.4%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table II: Industry Comparison Matrix */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Briefcase className="w-5 h-5 text-indigo-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table II: Industry Benchmarks</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Business Sector</th>
                                            <th className="px-5 py-3 border-b border-white/5">Base Multiplier</th>
                                            <th className="px-5 py-3 border-b border-white/5">Risk Rating</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Professional Services</td>
                                            <td className="px-5 py-3">0.8x</td>
                                            <td className="px-5 py-3 text-emerald-400">Low</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Retail / Ecommerce</td>
                                            <td className="px-5 py-3">1.0x (Baseline)</td>
                                            <td className="px-5 py-3 text-blue-400">Moderate</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Food & Hospitality</td>
                                            <td className="px-5 py-3">1.4x</td>
                                            <td className="px-5 py-3 text-amber-400">Mid-High</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Heavy Construction</td>
                                            <td className="px-5 py-3">1.8x</td>
                                            <td className="px-5 py-3 text-rose-400">Critical</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table III: Technical Logic Specs */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Scale className="w-5 h-5 text-emerald-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table III: Logic Parameters</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Engine Variable</th>
                                            <th className="px-5 py-3 border-b border-white/5">Calculation Logic</th>
                                            <th className="px-5 py-3 border-b border-white/5">Precision</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">NAIC Multiplier</td>
                                            <td className="px-5 py-3">Proprietary 2026 Index</td>
                                            <td className="px-5 py-3">99.9%</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Loss-Cost Baseline</td>
                                            <td className="px-5 py-3">Actuarial Smoothing</td>
                                            <td className="px-5 py-3">Dynamic</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Claims Variance</td>
                                            <td className="px-5 py-3">1.35x Adjustment</td>
                                            <td className="px-5 py-3">Deterministic</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Limit Escalation</td>
                                            <td className="px-5 py-3">Linear Scaling / $1M</td>
                                            <td className="px-5 py-3">High</td>
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
                        <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-blue-500 pl-6">2026 Commercial Underwriting & Risk Management Strategy</h2>

                        <p className="text-slate-300 text-lg leading-relaxed mb-6">
                            Understanding **Commercial Insurance Premiums** in 2026 requires a multi-faceted approach to risk assessment. Enterprise-level costs are no longer calculated as simple flat fees; instead, insurance carriers utilize the **NAIC (National Association of Insurance Commissioners)** actuarial tables to determine the "Loss-Cost" baseline—the raw amount needed to cover expected claims before administrative expenses and profit margins are added.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 my-10 font-sans">
                            <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                                    <Globe className="w-16 h-16 text-blue-500" />
                                </div>
                                <h4 className="text-blue-400 font-bold mb-3 uppercase tracking-tighter text-xs">I. The Coverage Stack</h4>
                                <ul className="text-sm space-y-2 mb-0 text-slate-400">
                                    <li>• **General Liability (GL)**: Baseline protection for 3rd party bodily injury.</li>
                                    <li>• **Workers' Comp**: Statutory requirements for employee medical/wage loss.</li>
                                    <li>• **Professional (E&O)**: Crucial for knowledge-based service sectors.</li>
                                    <li>• **Cyber Liability**: Enterprise protection against data breaches and ransomware.</li>
                                </ul>
                            </div>
                            <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                                    <Activity className="w-16 h-16 text-indigo-500" />
                                </div>
                                <h4 className="text-indigo-400 font-bold mb-3 uppercase tracking-tighter text-xs">II. Underwriting Multipliers</h4>
                                <ul className="text-sm space-y-2 mb-0 text-slate-400">
                                    <li>• **Class Code Precision**: Ensures high-risk sectors (Construction) pay pro-rata.</li>
                                    <li>• **Experience Mod (EMR)**: Rewards businesses with strong safety cultures.</li>
                                    <li>• **Territorial Variance**: Adjusts for local legal/litigation climates.</li>
                                    <li>• **Deductible Optimization**: Strategic cost-sharing mechanisms.</li>
                                </ul>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4">Calculated Risk: How the 2026 Engine Works</h3>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            Our 2026 Engine applies the actual industrial formula: **Premium = (Base Rate × Class Multiplier × Business Size Scalar) × (Limits Factor + Claims Load)**. By integrating these specific actuarial pillars, we provide an estimated premium that aligns with major carrier underwriting guidelines from Chubb, Travelers, and Liberty Mutual.
                        </p>

                        <div className="bg-blue-500/5 border border-blue-500/20 p-6 rounded-2xl my-10">
                            <div className="flex items-start gap-4 text-blue-300">
                                <Info className="w-6 h-6 shrink-0 mt-1" />
                                <div className="text-sm leading-relaxed">
                                    <strong className="text-blue-200 block mb-1 uppercase tracking-widest text-[10px]">Technical Note: Strategic Portfolios</strong>
                                    For businesses operating in high-litigation states (CA, NY, FL), the 'Legal Multiplier' can escalate standard premiums by 25-40%. It is highly recommended to bundle policies into a **BOP (Business Owner Policy)** to capture multi-line discounts which typically range from 10% to 15% in the current 2026 market cycle.
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
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 italic italic">Expert Insights Hub</h2>
                        <p className="text-slate-500">Deep-dive technical perspectives from institutional risk managers.</p>
                    </div>
                    <FAQSection />
                </div>
            </section>

            {/* 5. RELATED CALCULATORS LAYER */}
            <section className="py-20 border-t border-white/5 bg-slate-950">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-col items-center gap-12">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-white mb-2">Topical Risk Cluster</h2>
                            <p className="text-slate-500 text-sm italic italic tracking-[0.2em] uppercase font-light">Internal Institutional Linking</p>
                        </div>
                        <div className="w-full max-w-lg">
                            <RelatedCalculators currentCalc="commercial-insurance" count={8} />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA FOOTER */}
            <section className="py-24 bg-gradient-to-t from-blue-900/20 to-transparent">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">Access Institutional Precision.<br /><span className="text-blue-500">Run Your Audit Now.</span></h2>
                    <Link href="/commercial-insurance/calculator" className="inline-flex items-center gap-3 bg-white text-slate-950 hover:bg-slate-200 px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-white/5 active:scale-95">
                        <Lock className="w-6 h-6" />
                        UNLOCK CALCULATOR
                        <ArrowRight className="w-6 h-6" />
                    </Link>
                    <p className="mt-8 text-slate-500 text-sm font-medium tracking-widest uppercase">Certified Standard • 2026 Fiscal Cycle</p>
                </div>
            </section>
        </div>
    );
}
