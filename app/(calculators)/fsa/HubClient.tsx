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
    Wallet,
    HeartPulse
} from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const faqs = [
        {
            q: "What is the IRS contribution limit for a Healthcare FSA in 2026?",
            a: "For the 2026 tax year, the IRS limit for a Healthcare Flexible Spending Account (FSA) is projected to be $3,300. This is the maximum amount an employee can set aside via pre-tax payroll deductions to pay for qualified medical expenses."
        },
        {
            q: "How does the 'Use It or Lose It' rule work in 2026?",
            a: "Typically, FSA funds must be used by the end of the plan year. However, employers can choose to offer either a 2.5-month grace period or a carryover option. For 2026, the maximum carryover amount is projected to be $660—anything above this must be spent or it will be forfeited."
        },
        {
            q: "Can I have both an FSA and an HSA at the same time?",
            a: "In most cases, no. You cannot contribute to a standard Healthcare FSA if you are also contributing to an HSA. However, you can use a 'Limited-Purpose FSA' (for vision and dental only) alongside an HSA, allowing you to maximize tax-advantaged savings."
        },
        {
            q: "What expenses are considered 'qualified' for 2026 FSA reimbursement?",
            a: "Qualified expenses include deductibles, copayments, prescriptions, and various medical devices. Since the CARES Act, over-the-counter (OTC) medications and menstrual care products are also eligible without a prescription."
        },
        {
            q: "Is a Dependent Care FSA different from a Healthcare FSA?",
            a: "Yes. A Dependent Care FSA is a separate account used to pay for childcare (for children under 13) or adult daycare. The contribution limit for a Dependent Care FSA in 2026 is $5,000 for married couples filing jointly or single parents."
        },
        {
            q: "How much can I realistically save in taxes using an FSA?",
            a: "By using pre-tax dollars, you avoid federal income tax, Social Security tax, and Medicare tax (FICA). Depending on your tax bracket, contributing $3,300 to an FSA can save you between $700 and $1,200 in total taxes annually."
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
                            <Wallet className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-emerald-400">Tax Shield Protocol 2026</span>
                        </div>

                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
                            FSA <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 italic">Audit Matrix</span>
                        </h1>

                        <p className="max-w-2xl text-slate-400 text-base sm:text-lg md:text-xl leading-relaxed mb-10">
                            Institutional-grade medical spending forecasting. Solve for IRS contribution ceilings, FICA shielding, and use-it-or-lose-it risk with 2026 precision.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/fsa/calculator" className="flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-[1.02] shadow-xl shadow-emerald-500/20 active:scale-95">
                                <Calculator className="w-5 h-5 shrink-0" />
                                Run FSA Auditor
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
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 italic">Spending Benchmarks</h2>
                        <p className="text-slate-400">Official 2026 IRS contribution thresholds and tax-shield efficiency targets.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Table I: Contribution Logic */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Target className="w-5 h-5 text-emerald-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table I: 2026 IRS Limits</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Account Type</th>
                                            <th className="px-5 py-3 border-b border-white/5">Max Contrib</th>
                                            <th className="px-5 py-3 border-b border-white/5">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5 font-mono">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Healthcare FSA</td>
                                            <td className="px-5 py-3">$3,300</td>
                                            <td className="px-5 py-3 text-emerald-400">Active</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Dep. Care FSA</td>
                                            <td className="px-5 py-3">$5,000</td>
                                            <td className="px-5 py-3 text-blue-400">Joint</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Carryover Max</td>
                                            <td className="px-5 py-3">$660</td>
                                            <td className="px-5 py-3 text-amber-400">Cap</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-emerald-500/10 font-bold text-emerald-400 italic">Grace Period</td>
                                            <td className="px-5 py-3 bg-emerald-500/10 font-bold text-emerald-400">2.5 Months</td>
                                            <td className="px-5 py-3 bg-emerald-500/10 font-bold text-emerald-400">Optional</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table II: Performance Scalars */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Activity className="w-5 h-5 text-teal-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table II: Tax Shield Power</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Tax Tier</th>
                                            <th className="px-5 py-3 border-b border-white/5">Annual Savings</th>
                                            <th className="px-5 py-3 border-b border-white/5">Efficiency</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">12% Bracket</td>
                                            <td className="px-5 py-3 font-mono">~$650</td>
                                            <td className="px-5 py-3 text-emerald-400">High</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">22% Bracket</td>
                                            <td className="px-5 py-3 font-mono">~$1,000</td>
                                            <td className="px-5 py-3 text-emerald-400">Elite</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">32% Bracket</td>
                                            <td className="px-5 py-3 font-mono">~$1,350</td>
                                            <td className="px-5 py-3 text-emerald-400">Max</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">FICA Only</td>
                                            <td className="px-5 py-3 font-mono">7.65%</td>
                                            <td className="px-5 py-3 text-teal-400">Baseline</td>
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
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Medical Buffer</td>
                                            <td className="px-5 py-3">Healthcare FSA</td>
                                            <td className="px-5 py-3 text-emerald-400">Shielded</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Childcare Fund</td>
                                            <td className="px-5 py-3">Dep. Care FSA</td>
                                            <td className="px-5 py-3 text-blue-400">Reduced Cost</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">HSA Nexus</td>
                                            <td className="px-5 py-3">Limited FSA</td>
                                            <td className="px-5 py-3 text-amber-400">Hybrid</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">Total Shield</td>
                                            <td className="px-5 py-3">Pre-tax Deduct</td>
                                            <td className="px-5 py-3 text-emerald-400">Optimized</td>
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
                        <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-emerald-500 pl-6 underline underline-offset-8 decoration-emerald-500/30">2026 Flexible Spending Architecture</h2>

                        <p className="text-slate-300 text-lg leading-relaxed mb-6 font-sans text-left">
                            A Flexible Spending Account (FSA) represents a critical layer of the **Section 125 Cafeteria Plan** within U.S. tax architecture. In the 2026 fiscal cycle, the focus is on navigating **Contribution Elasticity**, **FICA Tax Avoidance**, and **Forfeiture Risk Management**. Our S-Class engine analyzes the core spending vectors: **Gross-to-Net Efficiency**, **Qualified Disbursement Mapping**, and **Carryover Liquidity**.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 my-10 font-sans">
                            <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-emerald-500">
                                    <PieChart className="w-16 h-16" />
                                </div>
                                <h4 className="text-emerald-400 font-bold mb-3 uppercase tracking-tighter text-xs">I. Spending Dynamics</h4>
                                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                                    <li>• **FICA Shielding**: Saving 7.65% on Social Security/Medicare taxes automatically.</li>
                                    <li>• **Uniform Coverage Rule**: Immediate access to the full annual limit in January.</li>
                                    <li>• **OTC Liberalization**: Non-prescription medications qualify for reimbursement.</li>
                                    <li>• **Limited-Purpose Nexus**: Co-existing with HSA for dental/vision only.</li>
                                </ul>
                            </div>
                            <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-teal-500">
                                    <LineChart className="w-16 h-16" />
                                </div>
                                <h4 className="text-teal-400 font-bold mb-3 uppercase tracking-tighter text-xs">II. Regulatory Friction</h4>
                                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                                    <li>• **Use-It-or-Lose-It Fatigue**: Managing the year-end spending rush.</li>
                                    <li>• **Contribution Caps**: Monitoring IRS-indexed threshold adjustments.</li>
                                    <li>• **Documentation Audits**: Managing the EOB (Explanation of Benefits) trail.</li>
                                    <li>• **Separation of Service**: Loss of funds upon voluntary/involuntary termination.</li>
                                </ul>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4 text-left">The Actuarial Model: Solving for the Tax-Shield Peak</h3>
                        <p className="text-slate-400 leading-relaxed mb-6 font-sans text-left">
                            Standard calculators often fail to account for the **FICA Multiplier Effect**. When you contribute to an FSA, you reduce your taxable income before *any* taxes are calculated. This means you aren't just saving your federal income tax bracket; you are also saving the 7.65% FICA tax that is usually unavoidable in 401(k) contributions. Our FSA Audit Engine applies an **Accumulated Yield Index**, identifying the exact dollar-amount required to cover your predicted medical needs while capping the risk of forfeiture.
                        </p>

                        <div className="bg-emerald-500/5 border border-emerald-500/20 p-6 rounded-2xl my-10 font-sans text-left">
                            <div className="flex items-start gap-4 text-emerald-300">
                                <Info className="w-6 h-6 shrink-0 mt-1" />
                                <div className="text-sm leading-relaxed">
                                    <strong className="text-emerald-200 block mb-1 uppercase tracking-widest text-[10px]">Strategic Note: The Uniform Coverage Advantage</strong>
                                    FSAs possess a unique 'front-loaded' characteristic. You can spend your entire annual $3,300 contribution on January 1st, even if your first payroll deduction hasn't occurred. If you leave your employer early in the year after spending the balance, the employer generally cannot request repayment—creating a unique financial hedge.
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
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 italic tracking-wide font-sans">FSA Intelligence</h2>
                        <p className="text-slate-500 font-medium tracking-tight">Expert guidance for navigating 2026 flexible spending and tax-shield protocols.</p>
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
                            <RelatedCalculators currentCalc="fsa" count={6} />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA FOOTER */}
            <section className="py-24 bg-gradient-to-t from-emerald-900/20 to-transparent">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">Maximize Your Shield.<br /><span className="text-emerald-500">Minimize Your Tax Loss.</span></h2>
                    <Link href="/fsa/calculator" className="inline-flex items-center gap-3 bg-white text-slate-950 hover:bg-slate-200 px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-emerald-500/20 active:scale-95 group">
                        <Calculator className="w-6 h-6 group-hover:text-emerald-600 transition-colors" />
                        RUN FSA AUDIT
                        <ArrowRight className="w-6 h-6" />
                    </Link>
                    <p className="mt-8 text-slate-500 text-xs font-bold tracking-[0.4em] uppercase">Verified Institutional Framework • 2026 Edition</p>
                </div>
            </section>
        </div>
    );
}
