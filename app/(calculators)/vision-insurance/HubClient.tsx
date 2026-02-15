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
    Eye,
    HeartPulse
} from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const faqs = [
        {
            q: "What does vision insurance typically cover in 2026?",
            a: "Standard vision plans cover an annual comprehensive eye exam (usually for a small $10-$20 copay) and provide an allowance for either prescription glasses (lenses and frames) or contact lenses once every 12 to 24 months."
        },
        {
            q: "How does the 'Frame Allowance' work?",
            a: "Plans provide a fixed dollar amount (e.g., $150 or $200) toward the cost of frames. If the frames you choose cost more than the allowance, you typically receive a 20% discount on the remaining balance."
        },
        {
            q: "Are contact lenses covered differently than glasses?",
            a: "Yes. Most plans consider glasses and contacts as an 'either/or' benefit. If you use your allowance for contacts, you usually cannot use it for glasses in the same benefit cycle (and vice versa)."
        },
        {
            q: "Does vision insurance cover LASIK or PRK surgery?",
            a: "LASIK is considered an elective procedure and is rarely covered fully. However, most major vision networks (like VSP or EyeMed) offer a 15-20% discount on LASIK performed by in-network surgeons."
        },
        {
            q: "What is the difference between a 'Vision Plan' and a 'Medical Eye Exam'?",
            a: "A vision plan covers routine care like refractive errors (nearsightedness). If you have a medical condition like glaucoma, cataracts, or eye trauma, the exam is typically billed to your *health* insurance, not your vision insurance."
        },
        {
            q: "What are 'Lens Enhancements' and are they covered?",
            a: "Enhancements include anti-glare coating, blue-light filtering, and 'Transition' (photochromic) lenses. These usually carry an additional out-of-pocket cost, though some premium plans may include basic anti-glare or UV protection at no extra charge."
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
        <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-teal-500/30">
            {/* 1. S-CLASS HERO LAYER */}
            <section className="relative pt-24 pb-20 overflow-hidden border-b border-white/5">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-500/10 via-transparent to-transparent opacity-50 pointer-events-none" />

                <div className="max-w-6xl mx-auto px-4 relative z-10">
                    <div className="flex flex-col items-center text-center">
                        <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 px-3 py-1 rounded-full mb-8 backdrop-blur-md">
                            <Eye className="w-3.5 h-3.5 text-teal-400" />
                            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-teal-400">Optical Care Protocol 2026</span>
                        </div>

                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
                            Vision Insurance <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400 italic">Audit Matrix</span>
                        </h1>

                        <p className="max-w-2xl text-slate-400 text-base sm:text-lg md:text-xl leading-relaxed mb-10">
                            Institutional-grade optical care forecasting. Solve for frame allowances, lens tiering, and medical-vision crossover events with 2026 precision.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/vision-insurance/calculator" className="flex items-center gap-3 bg-teal-600 hover:bg-teal-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-[1.02] shadow-xl shadow-teal-500/20 active:scale-95">
                                <Calculator className="w-5 h-5 shrink-0" />
                                Run Vision Auditor
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
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 italic">Optical Benchmarks</h2>
                        <p className="text-slate-400">Official 2026 vision benefit cycles and insurance reimbursement targets.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Table I: Benefit Frequency Logic */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Target className="w-5 h-5 text-teal-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table I: 2026 Cycles</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Service</th>
                                            <th className="px-5 py-3 border-b border-white/5">Frequency</th>
                                            <th className="px-5 py-3 border-b border-white/5">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5 font-mono">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Eye Exam</td>
                                            <td className="px-5 py-3">12 Months</td>
                                            <td className="px-5 py-3 text-emerald-400">Std</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Lenses</td>
                                            <td className="px-5 py-3">12 Months</td>
                                            <td className="px-5 py-3 text-blue-400">Std</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Frames</td>
                                            <td className="px-5 py-3">24 Months</td>
                                            <td className="px-5 py-3 text-amber-400">Typical</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-teal-500/10 font-bold text-teal-400 italic">Contacts</td>
                                            <td className="px-5 py-3 bg-teal-500/10 font-bold text-teal-400">12 Months</td>
                                            <td className="px-5 py-3 bg-teal-500/10 font-bold text-teal-400">Flex</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table II: Performance Scalars */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Activity className="w-5 h-5 text-emerald-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table II: Retail Offset</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Tier</th>
                                            <th className="px-5 py-3 border-b border-white/5">Allowance</th>
                                            <th className="px-5 py-3 border-b border-white/5">Efficiency</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Basic Plan</td>
                                            <td className="px-5 py-3 font-mono">$130</td>
                                            <td className="px-5 py-3 text-emerald-400">High</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Premium Plan</td>
                                            <td className="px-5 py-3 font-mono">$200</td>
                                            <td className="px-5 py-3 text-teal-400">Elite</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">LSP (In-Net)</td>
                                            <td className="px-5 py-3 font-mono">-$50-100</td>
                                            <td className="px-5 py-3 text-emerald-400">Max</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">Lens Copay</td>
                                            <td className="px-5 py-3 font-mono">~$25</td>
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
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Max Savings</td>
                                            <td className="px-5 py-3">In-Net Network</td>
                                            <td className="px-5 py-3 text-emerald-400">Lowest OOP</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Frame Freedom</td>
                                            <td className="px-5 py-3">Open Access</td>
                                            <td className="px-5 py-3 text-blue-400">Global</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Digital Health</td>
                                            <td className="px-5 py-3">Blue-Light Cov.</td>
                                            <td className="px-5 py-3 text-amber-400">Shielded</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">Surgery Gap</td>
                                            <td className="px-5 py-3">LASIK Discount</td>
                                            <td className="px-5 py-3 text-emerald-400">Fixed %</td>
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
                    <div className="prose prose-invert prose-teal max-w-none">
                        <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-teal-500 pl-6 underline underline-offset-8 decoration-teal-500/30">2026 Optical Care Architecture</h2>

                        <p className="text-slate-300 text-lg leading-relaxed mb-6 font-sans text-left">
                            Vision insurance represents a curated benefit layer designed for high-frequency, low-variance medical events. In the 2026 optical cycle, the focus is on navigating **Allowance Elasticity**, **Lens Enhancement Tiering**, and **Retail-In-Network Price arbitrage**. Our S-Class engine analyzes the core coverage vectors: **Exam Efficiency**, **Material Allowance Leverage**, and **LASIK Discount Integration**.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 my-10 font-sans">
                            <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-teal-500">
                                    <PieChart className="w-16 h-16" />
                                </div>
                                <h4 className="text-teal-400 font-bold mb-3 uppercase tracking-tighter text-xs">I. Expenditure Dynamics</h4>
                                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                                    <li>• **Refractive Control**: Managing the annual exam copay vs. retail cash price.</li>
                                    <li>• **Materials Arbitrage**: Optimizing frame allowance for $200+ 'designer' tiers.</li>
                                    <li>• **Contact Integration**: Solving for the contacts-vs-glasses benefit binary.</li>
                                    <li>• **Digital Fatigue Buffering**: Blue-light and anti-reflective coating cost audits.</li>
                                </ul>
                            </div>
                            <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-emerald-500">
                                    <LineChart className="w-16 h-16" />
                                </div>
                                <h4 className="text-emerald-400 font-bold mb-3 uppercase tracking-tighter text-xs">II. Regulatory Friction</h4>
                                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                                    <li>• **Network Re-Classification**: Monitoring shift between VSP, EyeMed, and Wal-Mart tiers.</li>
                                    <li>• **Medical Crossover**: Identifying the boundary where refractive care becomes medical care.</li>
                                    <li>• **Out-of-Network Penalties**: Managing the significant reimbursement drop for non-net doctors.</li>
                                    <li>• **Material Cycles**: Tracking the 12-vs-24 month eligibility clock.</li>
                                </ul>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4 text-left">The Actuarial Model: Solving for the Out-of-Pocket Peak</h3>
                        <p className="text-slate-400 leading-relaxed mb-6 font-sans text-left">
                            Standard calculators often fail to account for the **Lens Feature Compounder**. While a plan may cover 100% of 'Single Vision' lenses, adding Progressive, High-Index, and anti-glare features can quickly lead to an out-of-pocket cost exceeding $300. Our Vision Audit Engine applies a **Dispensing Fee Co-efficient**, identifying the 'Sweet Spot' in plan selection where allowance covers the highest percentage of total material costs in the 2026 market.
                        </p>

                        <div className="bg-teal-500/5 border border-teal-500/20 p-6 rounded-2xl my-10 font-sans text-left">
                            <div className="flex items-start gap-4 text-teal-300">
                                <Info className="w-6 h-6 shrink-0 mt-1" />
                                <div className="text-sm leading-relaxed">
                                    <strong className="text-teal-200 block mb-1 uppercase tracking-widest text-[10px]">Strategic Note: Retail Network Discounts</strong>
                                    In 2026, many vision insurers have partnered with major online retailers (e.g., Warby Parker, Zenni). Using your in-network $150 allowance with these providers often yields significantly more 'buying power' than using the same allowance at a high-end boutique, potentially covering two pairs of glasses instead of one.
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
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 italic tracking-wide font-sans">Vision Intelligence</h2>
                        <p className="text-slate-500 font-medium tracking-tight">Expert guidance for navigating 2026 eye care and insurance protocols.</p>
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
                            <RelatedCalculators currentCalc="vision-insurance" count={6} />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA FOOTER */}
            <section className="py-24 bg-gradient-to-t from-teal-900/20 to-transparent">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">Clarify Your Vision.<br /><span className="text-teal-500">Secure Your Optical Alpha.</span></h2>
                    <Link href="/vision-insurance/calculator" className="inline-flex items-center gap-3 bg-white text-slate-950 hover:bg-slate-200 px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-teal-500/20 active:scale-95 group">
                        <Calculator className="w-6 h-6 group-hover:text-teal-600 transition-colors" />
                        RUN VISION AUDIT
                        <ArrowRight className="w-6 h-6" />
                    </Link>
                    <p className="mt-8 text-slate-500 text-xs font-bold tracking-[0.4em] uppercase">Verified Institutional Framework • 2026 Edition</p>
                </div>
            </section>
        </div>
    );
}
