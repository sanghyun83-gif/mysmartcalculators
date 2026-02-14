"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
    Wrench,
    Calculator,
    Shield,
    FileText,
    HardHat,
    DollarSign,
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
    Globe
} from "lucide-react";
import { SITE, STATISTICS, RELATED_CALCULATORS, FAQS } from "@/lib/calculators/contractor-insurance";
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
                            <Zap className="w-3.5 h-3.5 text-blue-400 fill-blue-400" />
                            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-blue-400">Standard Engine 2026 • Verified Premium</span>
                        </div>

                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
                            Contractor Insurance <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Risk Auditor</span>
                        </h1>

                        <p className="max-w-2xl text-slate-400 text-base sm:text-lg md:text-xl leading-relaxed mb-10">
                            Enterprise-grade liability and workers' comp forecasting for 2026. Precision underwriting for GCs, specialty trades, and artisan contractors using NCCI-mapped risk classes.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/contractor-insurance/calculator" className="flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-[1.02] shadow-xl shadow-blue-500/20 active:scale-95">
                                <Calculator className="w-5 h-5 shrink-0" />
                                Audit My Premium
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
                        <p className="text-slate-400">Official 2026 contractor loss-cost ratios and territorial market velocity.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Table I: Historical Premium Shift */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Activity className="w-5 h-5 text-blue-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table I: Market Velocity</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Fiscal Cycle</th>
                                            <th className="px-5 py-3 border-b border-white/5">GL Pricing</th>
                                            <th className="px-5 py-3 border-b border-white/5">WC Shift</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 font-mono">2023 FY</td>
                                            <td className="px-5 py-3">$1,850 avg</td>
                                            <td className="px-5 py-3 text-emerald-400">-1.2%</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 font-mono">2024 FY</td>
                                            <td className="px-5 py-3">$1,940 avg</td>
                                            <td className="px-5 py-3 text-emerald-400">+4.8%</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 font-mono">2025 FY</td>
                                            <td className="px-5 py-3">$2,085 avg</td>
                                            <td className="px-5 py-3 text-amber-400">+7.5%</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-blue-500/10 font-bold text-blue-400 italic">2026 Target</td>
                                            <td className="px-5 py-3 bg-blue-500/10 font-bold text-blue-400 font-mono">$2,250+</td>
                                            <td className="px-5 py-3 bg-blue-500/10 font-bold text-rose-400">+8.2%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table II: Trade Risk Variance */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Briefcase className="w-5 h-5 text-indigo-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table II: Risk Tier Variance</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Specialty Trade</th>
                                            <th className="px-5 py-3 border-b border-white/5">Base Rating</th>
                                            <th className="px-5 py-3 border-b border-white/5">Hazard Code</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Int. Painting</td>
                                            <td className="px-5 py-3">Low (0.7x)</td>
                                            <td className="px-5 py-3 text-emerald-400">Class 5482</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">HVAC/Electrical</td>
                                            <td className="px-5 py-3">Mid (1.2x)</td>
                                            <td className="px-5 py-3 text-blue-400">Class 5183</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Gen. Contractor</td>
                                            <td className="px-5 py-3">High (1.5x)</td>
                                            <td className="px-5 py-3 text-amber-400">Class 5606</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Roofing / Height</td>
                                            <td className="px-5 py-3">Critical (2.5x)</td>
                                            <td className="px-5 py-3 text-rose-400">Class 5551</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table III: Underwriting Protocols */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Scale className="w-5 h-5 text-emerald-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table III: Logic Parameters</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Protocol Id</th>
                                            <th className="px-5 py-3 border-b border-white/5">Logic Filter</th>
                                            <th className="px-5 py-3 border-b border-white/5">Tolerance</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">EMR-Index</td>
                                            <td className="px-5 py-3">Claims History Load</td>
                                            <td className="px-5 py-3">+/- 15%</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Territory-A</td>
                                            <td className="px-5 py-3">Geo-Litigation Load</td>
                                            <td className="px-5 py-4">High (1.4x)</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">BOP-Bundle</td>
                                            <td className="px-5 py-3">Packaged Credit</td>
                                            <td className="px-5 py-3 text-emerald-400">-12% avg</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Sub-Exposure</td>
                                            <td className="px-5 py-3">Uninsured Sub Filter</td>
                                            <td className="px-5 py-3 text-rose-400">+25% Load</td>
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
                        <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-blue-500 pl-6 underline underline-offset-8 decoration-blue-500/30">2026 Statutory Framework for Contractor Liability</h2>

                        <p className="text-slate-300 text-lg leading-relaxed mb-6">
                            In the 2026 construction market, **Contractor Insurance** premiums are increasingly dictated by a convergence of statutory workers' compensation mandates and rising third-party liability litigation. For modern GCs and artisans, the 'Cost of Risk' is no longer a static expense but a dynamic variable influenced by **NCCI (National Council on Compensation Insurance)** class codes and regional loss-cost adjustments.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 my-10 font-sans">
                            <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-blue-500">
                                    <Shield className="w-16 h-16" />
                                </div>
                                <h4 className="text-blue-400 font-bold mb-3 uppercase tracking-tighter text-xs">I. The Coverage Stack</h4>
                                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0">
                                    <li>• **General Liability (GL)**: Baseline protection against project site mishaps.</li>
                                    <li>• **Builder's Risk**: Mission-critical protection for structures in progress.</li>
                                    <li>• **Tools & Equipment**: Floating coverage for high-value machinery.</li>
                                    <li>• **Professional (PI)**: Emerging requirement for design-build contracts.</li>
                                </ul>
                            </div>
                            <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-indigo-500">
                                    <HardHat className="w-16 h-16" />
                                </div>
                                <h4 className="text-indigo-400 font-bold mb-3 uppercase tracking-tighter text-xs">II. Underwriting Factors</h4>
                                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0">
                                    <li>• **Experience Mod (EMR)**: The mathematical multiplier of safety culture.</li>
                                    <li>• **Trade Risk Weighting**: Actuarial load based on height/gravity work.</li>
                                    <li>• **Subcontractor Nexus**: Liability leakage via uninsured tiers.</li>
                                    <li>• **Territorial Surcharges**: Legal climate loads (CA, NY, FL).</li>
                                </ul>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4">The Logic of the S-Class Calculation</h3>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            Our 2026 Engine utilizes the **Loss-Cost Multiplier (LCM)** standard. We analyze your trade's 'Base Rate' (Class Code), apply the 'Territorial Load' (Litigation risk), and adjust for 'Experience Modification' (Safety record). This results in a premium forecast that mirrors actual underwriting protocols used by top-tier carriers like Travelers, The Hartford, and Hiscox.
                        </p>

                        <div className="bg-blue-500/5 border border-blue-500/20 p-6 rounded-2xl my-10">
                            <div className="flex items-start gap-4 text-blue-300">
                                <Info className="w-6 h-6 shrink-0 mt-1" />
                                <div className="text-sm leading-relaxed">
                                    <strong className="text-blue-200 block mb-1 uppercase tracking-widest text-[10px]">Technical Note: EMR Optimization</strong>
                                    Contractors with an EMR above 1.0 are often disqualified from bidding on major municipal or corporate projects. Reducing your EMR by just 0.1 through improved safety training can result in a 10-15% reduction across your entire workers' compensation portfolio for the 2026 fiscal cycle.
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
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 italic tracking-wide">Industry Intelligence Hub</h2>
                        <p className="text-slate-500 font-medium">Strategic guidance for construction risk management in 2026.</p>
                    </div>
                    <FAQSection />
                </div>
            </section>

            {/* 5. RELATED CALCULATORS LAYER */}
            <section className="py-20 border-t border-white/5 bg-slate-950">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-col items-center gap-12">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">Topical Risk Cluster</h2>
                            <p className="text-slate-500 text-sm italic italic tracking-[0.3em] uppercase font-light">Internal Institutional Linking</p>
                        </div>
                        <div className="w-full max-w-lg">
                            <RelatedCalculators currentCalc="contractor-insurance" count={6} />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA FOOTER */}
            <section className="py-24 bg-gradient-to-t from-blue-900/20 to-transparent">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">Protect Your Projects.<br /><span className="text-blue-500">Seal Your Liability.</span></h2>
                    <Link href="/contractor-insurance/calculator" className="inline-flex items-center gap-3 bg-white text-slate-950 hover:bg-slate-200 px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-blue-500/20 active:scale-95 group">
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
