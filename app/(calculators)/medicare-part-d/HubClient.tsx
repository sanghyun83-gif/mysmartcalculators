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
    Pill,
    HeartPulse
} from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const faqs = [
        {
            q: "What is the new $2,000 Out-of-Pocket Cap for 2026 Part D?",
            a: "Starting in 2025 and continuing through 2026, the Inflation Reduction Act has capped annual out-of-pocket costs for prescription drugs at $2,000. Once you spend $2,000 on covered drugs, you pay $0 for the rest of the year."
        },
        {
            q: "How does the 'Part D Payment Plan' (Smoothing) work in 2026?",
            a: "Also known as 'M3P' (Medicare Prescription Payment Plan), this feature allows you to spread your drug costs over the entire year. Instead of paying a large amount at the pharmacy counter, you can opt into a monthly payment plan managed by your Part D provider."
        },
        {
            q: "What happens during the 'Deductible Phase' in 2026?",
            a: "Before your plan starts to pay, you must meet an annual deductible. In 2026, the maximum allowed deductible for a Part D plan is projected to be around $590. Some plans may offer a $0 deductible for certain tiers of drugs."
        },
        {
            q: "What is a 'Formulary' and why does it change every year?",
            a: "A formulary is the list of drugs covered by your specific Part D plan. Plans can change these lists annually based on cost, efficacy, and negotiations with manufacturers. Always review your plan's 'Annual Notice of Change' (ANOC) during Open Enrollment."
        },
        {
            q: "Is there a penalty for joining Part D late?",
            a: "Yes. If you don't join a Part D plan when you're first eligible and you don't have other creditable coverage, you'll pay a lifetime late enrollment penalty. The penalty is 1% of the 'national base beneficiary premium' for every month you waited."
        },
        {
            q: "Do Part D plans cover vaccinations in 2026?",
            a: "Yes. Most adult vaccines (like the shingles vaccine) are covered by Part D at $0 cost-sharing, thanks to recent federal legislative changes. You no longer need to pay a deductible or coinsurance for these preventive services."
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
                            <Pill className="w-3.5 h-3.5 text-rose-400" />
                            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-rose-400">Pharmaceutical Protocol 2026</span>
                        </div>

                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
                            Medicare Part D <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-400 italic">Audit Matrix</span>
                        </h1>

                        <p className="max-w-2xl text-slate-400 text-base sm:text-lg md:text-xl leading-relaxed mb-10">
                            Institutional-grade drug cost modeling. Solve for the new $2,000 out-of-pocket cap, M3P smoothing flows, and IRMAA surcharges with 2026 precision.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/medicare-part-d/calculator" className="flex items-center gap-3 bg-rose-600 hover:bg-rose-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-[1.02] shadow-xl shadow-rose-500/20 active:scale-95">
                                <Calculator className="w-5 h-5 shrink-0" />
                                Run Part D Auditor
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
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 italic">Drug Cost Benchmarks</h2>
                        <p className="text-slate-400">Official 2026 Medicare Part D limit structures and protection thresholds.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Table I: Cap Logic */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Target className="w-5 h-5 text-rose-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table I: 2026 Guardrails</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Mechanism</th>
                                            <th className="px-5 py-3 border-b border-white/5">Limit</th>
                                            <th className="px-5 py-3 border-b border-white/5">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5 font-mono">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Out-of-Pocket Cap</td>
                                            <td className="px-5 py-3">$2,000</td>
                                            <td className="px-5 py-3 text-emerald-400">Fixed</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Max Deductible</td>
                                            <td className="px-5 py-3">$590</td>
                                            <td className="px-5 py-3 text-rose-400">Ceiling</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">M3P Smoothing</td>
                                            <td className="px-5 py-3">Variable</td>
                                            <td className="px-5 py-3 text-blue-400">Available</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-rose-500/10 font-bold text-rose-400 italic">Insulin Cap</td>
                                            <td className="px-5 py-3 bg-rose-500/10 font-bold text-rose-400">$35/mo</td>
                                            <td className="px-5 py-3 bg-rose-500/10 font-bold text-rose-400">Hard Cap</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table II: Comparative Scalars */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Activity className="w-5 h-5 text-amber-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table II: Phase Mapping</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Level</th>
                                            <th className="px-5 py-3 border-b border-white/5">Your Share</th>
                                            <th className="px-5 py-3 border-b border-white/5">Transition</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Deductible</td>
                                            <td className="px-5 py-3 font-mono">100%</td>
                                            <td className="px-5 py-3 text-rose-400">Initial</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Initial Coverage</td>
                                            <td className="px-5 py-3 font-mono">25%</td>
                                            <td className="px-5 py-3 text-blue-400">Standard</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Post-Cap</td>
                                            <td className="px-5 py-3 font-mono">0%</td>
                                            <td className="px-5 py-3 text-emerald-400">Complete</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">Donut Hole</td>
                                            <td className="px-5 py-3 font-mono">Eliminated</td>
                                            <td className="px-5 py-3 text-emerald-400">Legacy</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table III: Optimization Mapping */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <RefreshCw className="w-5 h-5 text-rose-400" />
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
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Low Drug Use</td>
                                            <td className="px-5 py-3">Low Premium</td>
                                            <td className="px-5 py-3 text-emerald-400">Min. Cost</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">High Specialty</td>
                                            <td className="px-5 py-3">$2,000 Cap</td>
                                            <td className="px-5 py-3 text-blue-400">Max Benefit</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Budget Predict.</td>
                                            <td className="px-5 py-3">M3P Smoothing</td>
                                            <td className="px-5 py-3 text-emerald-400">Level Pay</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">Late Penalty</td>
                                            <td className="px-5 py-3">1% / Month</td>
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
                    <div className="prose prose-invert prose-rose max-w-none">
                        <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-rose-500 pl-6 underline underline-offset-8 decoration-rose-500/30">2026 Pharmaceutical Compliance Architecture</h2>

                        <p className="text-slate-300 text-lg leading-relaxed mb-6 font-sans text-left">
                            Medicare Part D represents the primary mechanism for outpatient prescription drug liability management in the U.S. In the 2026 regulatory environment, the landscape has been fundamentally altered by the **Inflation Reduction Act**, specifically the **$2,000 Out-of-Pocket Hard Cap** and the **Elimination of the Coverage Gap (Donut Hole)**. Our S-Class engine analyzes the core expenditure vectors: **Formulary Tiering Efficiency**, **M3P Payment Smoothing velocity**, and **IRMAA Surcharge Friction**.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 my-10 font-sans">
                            <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-rose-500">
                                    <PieChart className="w-16 h-16" />
                                </div>
                                <h4 className="text-rose-400 font-bold mb-3 uppercase tracking-tighter text-xs">I. Expenditure Dynamics</h4>
                                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                                    <li>• **$2,000 Cap Logic**: Solving for the point of $0 cost-sharing for high-cost specialty drugs.</li>
                                    <li>• **Insulin Standardization**: Mapping the mandatory $35/month price floor.</li>
                                    <li>• **Vaccine Exclusion**: $0 cost-sharing for Shingles and other Part D vaccines.</li>
                                    <li>• **M3P Smoothing Flow**: Calculating the monthly delta for leveled payments.</li>
                                </ul>
                            </div>
                            <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-amber-500">
                                    <LineChart className="w-16 h-16" />
                                </div>
                                <h4 className="text-amber-400 font-bold mb-3 uppercase tracking-tighter text-xs">II. Regulatory Friction</h4>
                                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                                    <li>• **IRMAA surcharges**: Solving for the impact of high MAGI on Part D premiums.</li>
                                    <li>• **Late Enrollment (LEP)**: Managing the lifetime monthly surcharge for delayed entry.</li>
                                    <li>• **Creditable Coverage**: Audit mapping for non-Medicare prescription benefits.</li>
                                    <li>• **Extra Help Tiers**: Solving for Limited Income Subsidy (LIS) qualification.</li>
                                </ul>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4 text-left">The Actuarial Model: Solving for the Out-of-Pocket Peak</h3>
                        <p className="text-slate-400 leading-relaxed mb-6 font-sans text-left">
                            Standard calculators often fail to account for the **M3P Smoothing Algorithm**. Under the 2026 rules, the beneficiary can defer pharmacy costs to a monthly billing cycle. However, this is NOT an interest-bearing loan; it is a federal payment option. Our Part D Audit Engine applies a **Cash Flow Velocity Index**, identifying the exact month in which you will hit the $2,000 cap and how the M3P option reshapes your monthly medical budget compared to legacy 'Pay-as-you-go' models.
                        </p>

                        <div className="bg-rose-500/5 border border-rose-500/20 p-6 rounded-2xl my-10 font-sans text-left">
                            <div className="flex items-start gap-4 text-rose-300">
                                <Info className="w-6 h-6 shrink-0 mt-1" />
                                <div className="text-sm leading-relaxed">
                                    <strong className="text-rose-200 block mb-1 uppercase tracking-widest text-[10px]">Technical Note: The Death of the Donut Hole</strong>
                                    For over a decade, the 'Coverage Gap' was the primary source of financial distress for Medicare beneficiaries. In the 2026 cycle, this phase has been officially eliminated. The structure now moves directly from Initial Coverage into the $2,000 Cap, creating a simplified and significantly cheaper path for those with chronic illnesses.
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
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 italic tracking-wide font-sans">Drug Intelligence</h2>
                        <p className="text-slate-500 font-medium tracking-tight">Expert guidance for navigating 2026 prescription coverage and cost protocols.</p>
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
                            <RelatedCalculators currentCalc="medicare-part-d" count={6} />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA FOOTER */}
            <section className="py-24 bg-gradient-to-t from-rose-900/20 to-transparent">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">Cap Your Costs.<br /><span className="text-rose-500">Secure Your Prescription Alpha.</span></h2>
                    <Link href="/medicare-part-d/calculator" className="inline-flex items-center gap-3 bg-white text-slate-950 hover:bg-slate-200 px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-rose-500/20 active:scale-95 group">
                        <Calculator className="w-6 h-6 group-hover:text-rose-600 transition-colors" />
                        RUN PART D AUDIT
                        <ArrowRight className="w-6 h-6" />
                    </Link>
                    <p className="mt-8 text-slate-500 text-xs font-bold tracking-[0.4em] uppercase">Verified Institutional Framework • 2026 Edition</p>
                </div>
            </section>
        </div>
    );
}
