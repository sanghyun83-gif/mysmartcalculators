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
    Smile,
    HeartPulse
} from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const faqs = [
        {
            q: "What is the standard '100-80-50' coverage structure in 2026?",
            a: "Most PPO dental plans follow this tiered structure: 100% coverage for preventive care (cleanings, X-rays), 80% for basic procedures (fillings, extractions), and 50% for major work (crowns, bridges, root canals)."
        },
        {
            q: "How does the 'Annual Maximum' work?",
            a: "Unlike health insurance which caps your out-of-pocket costs, dental insurance caps what the *insurer* will pay, usually between $1,000 and $2,000 per year. Once you hit this limit, you must pay 100% of all subsequent dental costs until the next plan year."
        },
        {
            q: "What are 'Waiting Periods' and why do they exist?",
            a: "To prevent people from buying insurance only when they need a crown, insurers often impose waiting periods (6-12 months) for basic or major services. Preventive care usually has no waiting period and is available immediately upon enrollment."
        },
        {
            q: "What is the difference between a PPO and a DHMO dental plan?",
            a: "A PPO plan offers a wide network of dentists and some out-of-network coverage but has higher premiums. A DHMO (Dental HMO) is cheaper and has no annual maximums, but you must choose a primary dentist and have very limited coverage for out-of-network providers."
        },
        {
            q: "Does dental insurance cover adult braces or Invisalign in 2026?",
            a: "Orthodontic coverage is often an optional 'rider' and is not included in standard plans. Even when included, it frequently has a separate, one-time lifetime maximum (e.g., $1,500) and may only apply to children under age 19."
        },
        {
            q: "What is 'MAC' vs. 'UCR' in dental pricing?",
            a: "MAC (Maximum Allowable Charge) plans pay a fixed dollar amount for a procedure. UCR (Usual, Customary, and Reasonable) plans pay a percentage of what dentists in your specific zip code typically charge, providing better protection against high-cost areas."
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
                            <Smile className="w-3.5 h-3.5 text-blue-400" />
                            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-blue-400">Oral Health Protocol 2026</span>
                        </div>

                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
                            Dental Insurance <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 italic">Audit Matrix</span>
                        </h1>

                        <p className="max-w-2xl text-slate-400 text-base sm:text-lg md:text-xl leading-relaxed mb-10">
                            Institutional-grade oral care forecasting. Solve for annual maximums, coinsurance tiers, and procedure-specific coverage limits with 2026 precision.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/dental-insurance/calculator" className="flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-[1.02] shadow-xl shadow-blue-500/20 active:scale-95">
                                <Calculator className="w-5 h-5 shrink-0" />
                                Run Dental Auditor
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
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 italic">Coverage Benchmarks</h2>
                        <p className="text-slate-400">Official 2026 dental insurance tier structures and actuarial efficiency targets.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Table I: Tier Logic */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Target className="w-5 h-5 text-blue-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table I: 2026 Tiers</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Service Type</th>
                                            <th className="px-5 py-3 border-b border-white/5">Coverage %</th>
                                            <th className="px-5 py-3 border-b border-white/5">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5 font-mono">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Preventive</td>
                                            <td className="px-5 py-3">100%</td>
                                            <td className="px-5 py-3 text-emerald-400">Active</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Basic (Fill)</td>
                                            <td className="px-5 py-3">80%</td>
                                            <td className="px-5 py-3 text-blue-400">Co-Pay</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Major (Crwn)</td>
                                            <td className="px-5 py-3">50%</td>
                                            <td className="px-5 py-3 text-amber-400">Co-Pay</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-blue-500/10 font-bold text-blue-400 italic">Deductible</td>
                                            <td className="px-5 py-3 bg-blue-500/10 font-bold text-blue-400">~$50</td>
                                            <td className="px-5 py-3 bg-blue-500/10 font-bold text-blue-400">Flat</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table II: Performance Scalars */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Activity className="w-5 h-5 text-cyan-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table II: Benefit Caps</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Policy Era</th>
                                            <th className="px-5 py-3 border-b border-white/5">Annual Max</th>
                                            <th className="px-5 py-3 border-b border-white/5">Efficiency</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Economy</td>
                                            <td className="px-5 py-3 font-mono">$1,000</td>
                                            <td className="px-5 py-3 text-emerald-400">Std</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Mid-Tier</td>
                                            <td className="px-5 py-3 font-mono">$1,500</td>
                                            <td className="px-5 py-3 text-emerald-400">High</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Elite</td>
                                            <td className="px-5 py-3 font-mono">$3,000+</td>
                                            <td className="px-5 py-3 text-emerald-400">Max</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">Carryover</td>
                                            <td className="px-5 py-3 font-mono">~$250/yr</td>
                                            <td className="px-5 py-3 text-teal-400">Bonus</td>
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
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Lower Premium</td>
                                            <td className="px-5 py-3">DHMO Network</td>
                                            <td className="px-5 py-3 text-emerald-400">Fixed Cost</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Freedom of Ch.</td>
                                            <td className="px-5 py-3">PPO Network</td>
                                            <td className="px-5 py-3 text-blue-400">Global Acc.</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">High Workload</td>
                                            <td className="px-5 py-3">No Waiting Pd</td>
                                            <td className="px-5 py-3 text-amber-400">Immediate</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">Ortho Cap</td>
                                            <td className="px-5 py-3">Lifetime Max</td>
                                            <td className="px-5 py-3 text-rose-400">Single Use</td>
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
                        <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-blue-500 pl-6 underline underline-offset-8 decoration-blue-500/30">2026 Dental Coverage Architecture</h2>

                        <p className="text-slate-300 text-lg leading-relaxed mb-6 font-sans text-left">
                            Dental insurance represents a unique risk-mitigation layer that differs fundamentally from medical insurance. In the 2026 oral care lifecycle, the focus is on navigating **Annual Benefit Maximums**, **Leaping Tiered Coinsurance**, and **Network Discount Elasticity**. Our S-Class engine analyzes the core coverage vectors: **Preventive Efficiency**, **Major Restoration Liability**, and **UCR vs. MAC Reimbursement Dynamics**.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 my-10 font-sans">
                            <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-blue-500">
                                    <PieChart className="w-16 h-16" />
                                </div>
                                <h4 className="text-blue-400 font-bold mb-3 uppercase tracking-tighter text-xs">I. Expenditure Dynamics</h4>
                                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                                    <li>• **100/80/50 Logic**: Solving for the coinsurance gap in major restorative work.</li>
                                    <li>• **Annual Max Exhaustion**: Mapping the risk of total out-of-pocket exposure after the cap.</li>
                                    <li>• **Preventive Utilization**: Maximizing the 'Zero-Deductible' Cleaning and Exam benefit.</li>
                                    <li>• **UCR Protection**: Identifying plans that pay based on actual regional provider rates.</li>
                                </ul>
                            </div>
                            <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-cyan-500">
                                    <LineChart className="w-16 h-16" />
                                </div>
                                <h4 className="text-cyan-400 font-bold mb-3 uppercase tracking-tighter text-xs">II. Regulatory Friction</h4>
                                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                                    <li>• **Waiting Period Fatigue**: Managing the delay between enrollment and major coverage.</li>
                                    <li>• **Missing Tooth Clause**: Strategic mapping for pre-existing dental extractions.</li>
                                    <li>• **Ortho Age Limits**: Solving for adult vs. child orthodontic rider availability.</li>
                                    <li>• **Network Re-Tiering**: Monitoring doctor-participation shifts in national PPO panels.</li>
                                </ul>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4 text-left">The Actuarial Model: Solving for the Out-of-Pocket Peak</h3>
                        <p className="text-slate-400 leading-relaxed mb-6 font-sans text-left">
                            Standard calculators often fail to account for the **Provider Discount Delta**. When you see an in-network dentist, you aren't just getting insurance coverage—you are accessing the 'Contracted Rate.' Even if you hit your $1,500 annual maximum, you continue to pay the reduced network rate for the rest of the year. Our Dental Audit Engine applies a **Contractual Yield Index**, identifying the exact dollar-amount saved through network participation compared to 'Retail' cash pricing models in 2026.
                        </p>

                        <div className="bg-blue-500/5 border border-blue-500/20 p-6 rounded-2xl my-10 font-sans text-left">
                            <div className="flex items-start gap-4 text-blue-300">
                                <Info className="w-6 h-6 shrink-0 mt-1" />
                                <div className="text-sm leading-relaxed">
                                    <strong className="text-blue-200 block mb-1 uppercase tracking-widest text-[10px]">Technical Note: Carryover Benefits</strong>
                                    Some modern 2026 plans offer 'Benefit Carryover' or 'Sonic' features. If you visit the dentist at least once but don't use your full $1,500 annual maximum, a portion of the remainder (e.g., $250) rolls over to next year, effectively increasing your total coverage capacity for future major work.
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
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 italic tracking-wide font-sans">Dental Intelligence</h2>
                        <p className="text-slate-500 font-medium tracking-tight">Expert guidance for navigating 2026 oral care and insurance protocols.</p>
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
                            <RelatedCalculators currentCalc="dental-insurance" count={6} />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA FOOTER */}
            <section className="py-24 bg-gradient-to-t from-blue-900/20 to-transparent">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">Optimize Your Smile.<br /><span className="text-blue-500">Secure Your Dental Alpha.</span></h2>
                    <Link href="/dental-insurance/calculator" className="inline-flex items-center gap-3 bg-white text-slate-950 hover:bg-slate-200 px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-blue-500/20 active:scale-95 group">
                        <Calculator className="w-6 h-6 group-hover:text-blue-600 transition-colors" />
                        RUN DENTAL AUDIT
                        <ArrowRight className="w-6 h-6" />
                    </Link>
                    <p className="mt-8 text-slate-500 text-xs font-bold tracking-[0.4em] uppercase">Verified Institutional Framework • 2026 Edition</p>
                </div>
            </section>
        </div>
    );
}
