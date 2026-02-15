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
    Dog,
    HeartPulse
} from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const faqs = [
        {
            q: "What is the '100-80-50' equivalent in Pet Insurance for 2026?",
            a: "Pet insurance usually doesn't follow the dental tiered structure. Instead, it uses a flat reimbursement model (typically 70%, 80%, or 90%) that applies to almost all covered accident and illness expenses once the annual deductible is met."
        },
        {
            q: "How do 'Waiting Periods' impact 2026 pet coverage?",
            a: "Waiting periods are mandatory buffers to prevent 'firing house' claims. In 2026, most plans have a 2-day waiting period for accidents, a 14-day period for illnesses, and a 6-month period for orthopedic conditions like CCL tears or hip dysplasia."
        },
        {
            q: "Are pre-existing conditions covered under new 2026 protocols?",
            a: "No. Pre-existing conditions remain the primary exclusion in the pet insurance industry. However, some insurers now offer coverage for 'curable' pre-existing conditions if the pet has been symptom-free for at least 12 consecutive months."
        },
        {
            q: "Does pet insurance pay the vet directly?",
            a: "The vast majority of plans work on a reimbursement basis: you pay the vet, then the insurer pays you. However, a few premium providers (like Trupanion or Pets Best) have technology that can pay participating vet clinics directly at the time of checkout."
        },
        {
            q: "What is the 'Bilateral Exclusion' in pet policies?",
            a: "This is a critical term for breeds prone to joint issues. If your pet has a CCL tear in the right leg before coverage starts, the insurer will often exclude the left leg as well, as statistics show a high likelihood of the same injury occurring on the other side."
        },
        {
            q: "Can I get insurance for an exotic pet (Bird, Reptile, Rabbit)?",
            a: "Standard dog and cat insurers do not cover exotic pets. You must seek specialized 'Exotic Pet Insurance' (e.g., through Nationwide), which provides tailored coverage for avian and small-mammal health risks."
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
                            <Dog className="w-3.5 h-3.5 text-rose-400" />
                            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-rose-400">Veterinary Protocol 2026</span>
                        </div>

                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
                            Pet Insurance <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400 italic">Audit Matrix</span>
                        </h1>

                        <p className="max-w-2xl text-slate-400 text-base sm:text-lg md:text-xl leading-relaxed mb-10">
                            Institutional-grade veterinary liability forecasting. Solve for annual limits, breed-specific premiums, and reimbursement velocity with 2026 precision.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/pet-insurance/pet-calculator" className="flex items-center gap-3 bg-rose-600 hover:bg-rose-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-[1.02] shadow-xl shadow-rose-500/20 active:scale-95">
                                <Calculator className="w-5 h-5 shrink-0" />
                                Run Pet Auditor
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
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 italic">Actuarial Benchmarks</h2>
                        <p className="text-slate-400">Official 2026 pet health risk tiers and insurance reimbursement targets.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Table I: Premium Logic */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Target className="w-5 h-5 text-rose-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table I: 2026 Premiums</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Species/Tier</th>
                                            <th className="px-5 py-3 border-b border-white/5">Avg Month</th>
                                            <th className="px-5 py-3 border-b border-white/5">Efficiency</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5 font-mono">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Cat (Comprehensive)</td>
                                            <td className="px-5 py-3">$32.00</td>
                                            <td className="px-5 py-3 text-emerald-400">High</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Dog (Comprehensive)</td>
                                            <td className="px-5 py-3">$56.00</td>
                                            <td className="px-5 py-3 text-blue-400">Standard</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Mixed Breed</td>
                                            <td className="px-5 py-3">Variable</td>
                                            <td className="px-5 py-3 text-emerald-400">Max</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-rose-500/10 font-bold text-rose-400 italic">Accident-Only</td>
                                            <td className="px-5 py-3 bg-rose-500/10 font-bold text-rose-400">~$15.00</td>
                                            <td className="px-5 py-3 bg-rose-500/10 font-bold text-rose-400">Floor</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table II: Claim Scalars */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Activity className="w-5 h-5 text-orange-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table II: Liability Gaps</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Condition</th>
                                            <th className="px-5 py-3 border-b border-white/5">Avg Cost</th>
                                            <th className="px-5 py-3 border-b border-white/5">Basis</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">CCL Tear (Surgery)</td>
                                            <td className="px-5 py-3 font-mono">$4,500</td>
                                            <td className="px-5 py-3 text-rose-400">High</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Ingestion (Foreign)</td>
                                            <td className="px-5 py-3 font-mono">$3,200</td>
                                            <td className="px-5 py-3 text-amber-400">Med</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Cancer Treatment</td>
                                            <td className="px-5 py-3 font-mono">$10k+</td>
                                            <td className="px-5 py-3 text-rose-400">Critical</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">Emergency Exam</td>
                                            <td className="px-5 py-3 font-mono">~$250</td>
                                            <td className="px-5 py-3 text-blue-400">Floor</td>
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
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Lowest OOP</td>
                                            <td className="px-5 py-3">90% Reimburs.</td>
                                            <td className="px-5 py-3 text-emerald-400">Max Cover</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Budget Predict.</td>
                                            <td className="px-5 py-3">$100 Deduct.</td>
                                            <td className="px-5 py-3 text-blue-400">Low Cap</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Senior Care</td>
                                            <td className="px-5 py-3">Accident-Only</td>
                                            <td className="px-5 py-3 text-amber-400">Cost-Eff</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">Wellness Add.</td>
                                            <td className="px-5 py-3">Fixed Limit</td>
                                            <td className="px-5 py-3 text-teal-400">Routine</td>
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
                        <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-rose-500 pl-6 underline underline-offset-8 decoration-rose-500/30">2026 Pet Health Architecture</h2>

                        <p className="text-slate-300 text-lg leading-relaxed mb-6 font-sans text-left">
                            Pet insurance represents the final frontier of private health liability management. In the 2026 veterinary ecosystem, the focus is on navigating **Reimbursement Velocity**, **Congenital Condition Clauses**, and **Actuarial Breed-Scoring**. Our S-Class engine analyzes the core coverage vectors: **Accident-vs-Illness Binary**, **Annual Aggregate Caps**, and **Wait-Period Friction**.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 my-10 font-sans">
                            <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-rose-500">
                                    <PieChart className="w-16 h-16" />
                                </div>
                                <h4 className="text-rose-400 font-bold mb-3 uppercase tracking-tighter text-xs">I. Expenditure Dynamics</h4>
                                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                                    <li>• **Species Delta**: Solving for the 40%+ Cat-to-Dog premium discount.</li>
                                    <li>• **Incurred Claims Ratio**: Tracking how breed-specific health trends drive premium inflation.</li>
                                    <li>• **Deductible Equilibrium**: Mapping the sweet spot between monthly cost and per-claim liability.</li>
                                    <li>• **Specialist Scaling**: Audits for neurology, oncology, and advanced surgical reimbursement.</li>
                                </ul>
                            </div>
                            <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-orange-500">
                                    <LineChart className="w-16 h-16" />
                                </div>
                                <h4 className="text-orange-400 font-bold mb-3 uppercase tracking-tighter text-xs">II. Regulatory Friction</h4>
                                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                                    <li>• **The Bilateral Clause**: Strategic mapping for orthopedic crossover exclusions.</li>
                                    <li>• **Waiting Period Latency**: Managing the gap between enrollment and full claim eligibility.</li>
                                    <li>• **Curable Condition Protocol**: Identifying paths to cover past resolved illnesses.</li>
                                    <li>• **Veterinary Direct-Pay Velocity**: Solving for real-time payout capabilities at 'Premium' clinics.</li>
                                </ul>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4 text-left">The Actuarial Model: Solving for the Lifetime Benefit</h3>
                        <p className="text-slate-400 leading-relaxed mb-6 font-sans text-left">
                            Standard calculators often fail to account for **Compound Premium Inflation**. Because pet insurance premiums increase as your pet ages, a $30 plan at age 2 can become a $150 plan at age 10. Our Pet Audit Engine applies a **Lifetime Value Index (LVI)**, identifying the 'Total Cost of Ownership' for a policy from puppyhood/kittenhood through geriatric care, rather than focusing solely on the initial 2026 introductory rate.
                        </p>

                        <div className="bg-rose-500/5 border border-rose-500/20 p-6 rounded-2xl my-10 font-sans text-left">
                            <div className="flex items-start gap-4 text-rose-300">
                                <Info className="w-6 h-6 shrink-0 mt-1" />
                                <div className="text-sm leading-relaxed">
                                    <strong className="text-rose-200 block mb-1 uppercase tracking-widest text-[10px]">Technical Note: Pre-Existing Clarity</strong>
                                    No pet insurance provider in 2026 covers active chronic pre-existing conditions (like diabetes or active cancer). If your pet shows symptoms before your policy starts, it is permanently 'Locked Out' for that condition. This is why institutional-grade planning requires enrollment during the 'Healthy Window' of the first 12 months of life.
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
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 italic tracking-wide font-sans">Pet Intelligence</h2>
                        <p className="text-slate-500 font-medium tracking-tight">Expert guidance for navigating 2026 veterinary care and insurance protocols.</p>
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
                            <RelatedCalculators currentCalc="pet-insurance" count={6} />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA FOOTER */}
            <section className="py-24 bg-gradient-to-t from-rose-900/20 to-transparent">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">Protect Your Companion.<br /><span className="text-rose-500">Secure Your Pet Alpha.</span></h2>
                    <Link href="/pet-insurance/pet-calculator" className="inline-flex items-center gap-3 bg-white text-slate-950 hover:bg-slate-200 px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-rose-500/20 active:scale-95 group">
                        <Calculator className="w-6 h-6 group-hover:text-rose-600 transition-colors" />
                        RUN PET AUDIT
                        <ArrowRight className="w-6 h-6" />
                    </Link>
                    <p className="mt-8 text-slate-500 text-xs font-bold tracking-[0.4em] uppercase">Verified Institutional Framework • 2026 Edition</p>
                </div>
            </section>
        </div>
    );
}
