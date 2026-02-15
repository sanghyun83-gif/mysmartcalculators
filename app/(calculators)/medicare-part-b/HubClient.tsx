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
    Stethoscope,
    HeartPulse
} from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const faqs = [
        {
            q: "What is the standard Medicare Part B premium for 2026?",
            a: "The standard monthly Medicare Part B premium for 2026 is projected to be approximately $185.00. Most retirees have this amount deducted directly from their Social Security checks. Those with higher incomes may pay an additional IRMAA surcharge."
        },
        {
            q: "What does Medicare Part B cover exactly?",
            a: "Part B covers two main types of services: 1) Medically necessary services like doctor visits, outpatient care, and durable medical equipment (Durable Medical Equipment) and 2) Preventive services like screenings and annual 'Wellness' visits."
        },
        {
            q: "What is the 'Part B Deductible' in 2026?",
            a: "For 2026, the annual Part B deductible is projected to be $257.00. You must pay this amount out-of-pocket before Medicare begins to pay its share (typically 80%) for covered services."
        },
        {
            q: "How does the 'Late Enrollment Penalty' work?",
            a: "If you don't sign up for Part B when you're first eligible (usually at age 65) and you don't have other creditable coverage, your monthly premium may go up 10% for each full 12-month period you could have had Part B. This penalty lasts for as long as you have Part B."
        },
        {
            q: "Does Part B cover physical therapy and lab tests?",
            a: "Yes. Part B covers medically necessary outpatient physical therapy, occupational therapy, and speech-language pathology services. It also covers diagnostic lab tests, X-rays, and certain outpatient surgical procedures."
        },
        {
            q: "What is 'IRMAA' and how does it affect my premium?",
            a: "IRMAA (Income-Related Monthly Adjustment Amount) is a surcharge added to your Part B and Part D premiums if your Modified Adjusted Gross Income (MAGI) from two years ago exceeds certain thresholds (starting at ~$106k for individuals in 2026)."
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
        <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-blue-500/30">
            {/* 1. S-CLASS HERO LAYER */}
            <section className="relative pt-24 pb-20 overflow-hidden border-b border-white/5">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-50 pointer-events-none" />

                <div className="max-w-6xl mx-auto px-4 relative z-10">
                    <div className="flex flex-col items-center text-center">
                        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full mb-8 backdrop-blur-md">
                            <Stethoscope className="w-3.5 h-3.5 text-blue-400" />
                            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-blue-400">Outpatient Care Protocol 2026</span>
                        </div>

                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
                            Medicare Part B <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 italic">Audit Matrix</span>
                        </h1>

                        <p className="max-w-2xl text-slate-400 text-base sm:text-lg md:text-xl leading-relaxed mb-10">
                            Institutional-grade medical cost modeling. Solve for 2026 premiums, IRMAA surcharges, and deductible thresholds with actuarial precision.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/medicare-part-b/calculator" className="flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-[1.02] shadow-xl shadow-blue-500/20 active:scale-95">
                                <Calculator className="w-5 h-5 shrink-0" />
                                Run Part B Auditor
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
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 italic">Cost Benchmarks</h2>
                        <p className="text-slate-400">Official 2026 Medicare Part B expense targets and coinsurance limits.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Table I: Premium Logic */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Target className="w-5 h-5 text-blue-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table I: 2026 Costs</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Cost Component</th>
                                            <th className="px-5 py-3 border-b border-white/5">Amount</th>
                                            <th className="px-5 py-3 border-b border-white/5">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5 font-mono">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Std. Premium</td>
                                            <td className="px-5 py-3">$185.00</td>
                                            <td className="px-5 py-3 text-emerald-400">Monthly</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Annual Deductible</td>
                                            <td className="px-5 py-3">$257.00</td>
                                            <td className="px-5 py-3 text-blue-400">Yearly</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Coinsurance</td>
                                            <td className="px-5 py-3">20%</td>
                                            <td className="px-5 py-3 text-emerald-400">Standard</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-blue-500/10 font-bold text-blue-400 italic">Prev. Services</td>
                                            <td className="px-5 py-3 bg-blue-500/10 font-bold text-blue-400">$0.00</td>
                                            <td className="px-5 py-3 bg-blue-500/10 font-bold text-blue-400">Exempt</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table II: IRMAA Scalars */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Activity className="w-5 h-5 text-indigo-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table II: IRMAA Tiers</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Filing Status</th>
                                            <th className="px-5 py-3 border-b border-white/5">Income (MAGI)</th>
                                            <th className="px-5 py-3 border-b border-white/5">Surcharge</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Single</td>
                                            <td className="px-5 py-3 font-mono">&lt; $106k</td>
                                            <td className="px-5 py-3 text-emerald-400">$0.00</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Tier 1</td>
                                            <td className="px-5 py-3 font-mono">$106k - $133k</td>
                                            <td className="px-5 py-3 text-blue-400">+$74.00</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Top Tier</td>
                                            <td className="px-5 py-3 font-mono">&gt; $500k</td>
                                            <td className="px-5 py-3 text-rose-400">+$410.00</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">Base Adjust.</td>
                                            <td className="px-5 py-3 font-mono">2 Yr Lookback</td>
                                            <td className="px-5 py-3 text-amber-400">Fixed</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table III: Coverage Mapping */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Lock className="w-5 h-5 text-amber-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table III: Enrollment Window</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Period</th>
                                            <th className="px-5 py-3 border-b border-white/5">Timing</th>
                                            <th className="px-5 py-3 border-b border-white/5">Outcome</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5 font-mono">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Initial (IEP)</td>
                                            <td className="px-5 py-3">7 Months</td>
                                            <td className="px-5 py-3 text-emerald-400">Standard</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">General (GEP)</td>
                                            <td className="px-5 py-3">Jan 1 - Mar 31</td>
                                            <td className="px-5 py-3 text-blue-400">Standard</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Special (SEP)</td>
                                            <td className="px-5 py-3">Job Loss + 8mo</td>
                                            <td className="px-5 py-3 text-emerald-400">Pen.-Free</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">Late Penalty</td>
                                            <td className="px-5 py-3">10% / 12mo</td>
                                            <td className="px-5 py-3 text-rose-400">Lifetime</td>
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
                        <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-blue-500 pl-6 underline underline-offset-8 decoration-blue-500/30">2026 Medicare Part B Architecture</h2>

                        <p className="text-slate-300 text-lg leading-relaxed mb-6 font-sans text-left">
                            Medicare Part B represents the foundational layer of outpatient medical coverage for U.S. seniors. In the 2026 healthcare ecosystem, the focus is on **Premium Indexing Accuracy**, **IRMAA Threshold Mapping**, and **Late Enrollment Penalty Avoidance**. Our S-Class engine analyzes the core coverage vectors: **Deductible Equilibrium**, **Coinsurance Friction**, and **Preventive Service Efficiency**.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 my-10 font-sans">
                            <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-blue-500">
                                    <PieChart className="w-16 h-16" />
                                </div>
                                <h4 className="text-blue-400 font-bold mb-3 uppercase tracking-tighter text-xs">I. Outpatient Dynamics</h4>
                                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                                    <li>• **80/20 Cost Sharing**: Managing the uncapped coinsurance risk of Part B.</li>
                                    <li>• **Clinical Lab Protection**: Diagnostic tests typically covered at 100%.</li>
                                    <li>• **DME Protocols**: Durable Medical Equipment rental vs. purchase logic.</li>
                                    <li>• **Ambulatory Mapping**: Urgent care and ER facility fee audits.</li>
                                </ul>
                            </div>
                            <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-indigo-500">
                                    <LineChart className="w-16 h-16" />
                                </div>
                                <h4 className="text-indigo-400 font-bold mb-3 uppercase tracking-tighter text-xs">II. Regulatory Friction</h4>
                                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                                    <li>• **IRMAA Lookback**: Solving for interest/capital gains impact on future premiums.</li>
                                    <li>• **Assignment Limits**: Managing the 'Excess Charge' risk of non-participating doctors.</li>
                                    <li>• **SEP Qualification**: Monitoring creditable coverage from active employment.</li>
                                    <li>• **Standard Tier Caps**: Monitoring the 'Hold Harmless' provision status.</li>
                                </ul>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4 text-left">The Actuarial Model: Solving for the IRMAA Spike</h3>
                        <p className="text-slate-400 leading-relaxed mb-6 font-sans text-left">
                            Standard calculators often fail to account for the **Two-Year MAGI Lag**. Your 2026 premium is determined by your 2024 tax return. A single high-income event, such as a RSU vest or home sale, can trigger a $5,000+ increase in annual Medicare costs. Our Part B Audit Engine applies a **Premium Sensitivity Co-efficient**, identifying 'IRMAA Safety Zones' where tax-mitigation strategies today can secure lower medical costs in the 2026 cycle.
                        </p>

                        <div className="bg-blue-500/5 border border-blue-500/20 p-6 rounded-2xl my-10 font-sans text-left">
                            <div className="flex items-start gap-4 text-blue-300">
                                <Info className="w-6 h-6 shrink-0 mt-1" />
                                <div className="text-sm leading-relaxed">
                                    <strong className="text-blue-200 block mb-1 uppercase tracking-widest text-[10px]">Technical Note: Medigap vs. Advantage</strong>
                                    Part B does NOT have an out-of-pocket maximum. In the 2026 environment, a severe illness could lead to tens of thousands in 20% coinsurance charges. Most institutional audits recommend a Supplement (Medigap) or Part C (Advantage) plan to provide a financial circuit breaker for this exposure.
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
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 italic tracking-wide font-sans">Medicare Intelligence</h2>
                        <p className="text-slate-500 font-medium tracking-tight">Expert guidance for navigating 2026 medical coverage and cost protocols.</p>
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
                            <RelatedCalculators currentCalc="medicare-part-b" count={6} />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA FOOTER */}
            <section className="py-24 bg-gradient-to-t from-blue-900/20 to-transparent">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">Audit Part B Costs.<br /><span className="text-blue-500">Secure Your Medical Alpha.</span></h2>
                    <Link href="/medicare-part-b/calculator" className="inline-flex items-center gap-3 bg-white text-slate-950 hover:bg-slate-200 px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-blue-500/20 active:scale-95 group">
                        <Calculator className="w-6 h-6 group-hover:text-blue-600 transition-colors" />
                        RUN PART B AUDIT
                        <ArrowRight className="w-6 h-6" />
                    </Link>
                    <p className="mt-8 text-slate-500 text-xs font-bold tracking-[0.4em] uppercase">Verified Institutional Framework • 2026 Edition</p>
                </div>
            </section>
        </div>
    );
}
