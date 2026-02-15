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
    Users
} from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const faqs = [
        {
            q: "What is SSDI 'Back Pay' for 2026 claimants?",
            a: "SSDI back pay is the retroactive disability compensation owed from the time your benefits should have started until the day your claim is approved. Because the SSA auditing process often takes 12-24 months, approved claimants receive a lump sum covering these missed monthly payments."
        },
        {
            q: "How is the 5-month SSDI waiting period calculated?",
            a: "Federal law mandates a 5-month waiting period before SSDI cash benefits begin. Your first payment is for the 6th full month after your established onset date (the date SSA agrees your disability began). This period is non-negotiable and cannot be waived, even for severe conditions."
        },
        {
            q: "What is the maximum SSDI benefit for 2026?",
            a: "Based on projected COLA adjustments, the maximum monthly SSDI benefit in 2026 is approximately $3,800 - $3,900. Your actual yield depends on your lifetime earnings record and the amount of Social Security tax you paid into the system via FICA."
        },
        {
            q: "Are SSDI lump-sum back payments taxable in 2026?",
            a: "Yes, SSDI is subject to the same taxability rules as standard Social Security. However, the IRS allows a 'lump-sum election' method, letting you apply portions of the back pay to previous tax years (the years you were actually owed the money). This prevents the lump sum from pushing you into a higher tax bracket in the year of receipt."
        },
        {
            q: "What is the Substantial Gainful Activity (SGA) limit for 2026?",
            a: "The SGA limit is the maximum amount you can earn from working without disqualifying yourself for SSDI. For 2026, the non-blind SGA limit is projected at approximately $1,620 per month. If you earn more than this, the SSA generally assumes you are no longer disabled."
        },
        {
            q: "How do SSDI attorney fees affect my back pay lump sum?",
            a: "SSDI attorney fees are federally regulated at 25% of your back pay, capped at a maximum (projected at $7,200 for 2026). The SSA pays these fees directly from your back pay lump sum, meaning you only pay if you win your case."
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
        <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-violet-500/30">
            {/* 1. S-CLASS HERO LAYER */}
            <section className="relative pt-24 pb-20 overflow-hidden border-b border-white/5">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-500/10 via-transparent to-transparent opacity-50 pointer-events-none" />

                <div className="max-w-6xl mx-auto px-4 relative z-10">
                    <div className="flex flex-col items-center text-center">
                        <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 px-3 py-1 rounded-full mb-8 backdrop-blur-md">
                            <Shield className="w-3.5 h-3.5 text-violet-400" />
                            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-violet-400">Disability Indemnity Protocol 2026</span>
                        </div>

                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
                            SSDI Back Pay <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400 italic">Audit Matrix</span>
                        </h1>

                        <p className="max-w-2xl text-slate-400 text-base sm:text-lg md:text-xl leading-relaxed mb-10">
                            Institutional-grade disability benefit forecasting. Solve for retroactive yield, onset-date arbitrage, and attorney fee caps with 2026 precision.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/ssdi/calculator" className="flex items-center gap-3 bg-violet-600 hover:bg-violet-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-[1.02] shadow-xl shadow-violet-500/20 active:scale-95">
                                <Calculator className="w-5 h-5 shrink-0" />
                                Run Back Pay Auditor
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
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 italic">Liquidity Benchmarks</h2>
                        <p className="text-slate-400">Official 2026 SSDI processing targets and payout scalars.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Table I: Payout Logic */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Target className="w-5 h-5 text-violet-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table I: 2026 Yields</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Metric</th>
                                            <th className="px-5 py-3 border-b border-white/5">Avg Figure</th>
                                            <th className="px-5 py-3 border-b border-white/5">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5 font-mono">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Monthly Benefit</td>
                                            <td className="px-5 py-3">~$1,550</td>
                                            <td className="px-5 py-3 text-emerald-400">Median</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Retroactive Cap</td>
                                            <td className="px-5 py-3">12 Months</td>
                                            <td className="px-5 py-3 text-blue-400">Statutory</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Avg Back Pay</td>
                                            <td className="px-5 py-3">$18k - $30k</td>
                                            <td className="px-5 py-3 text-emerald-400">Cluster</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-violet-500/10 font-bold text-violet-400 italic">Waiting Period</td>
                                            <td className="px-5 py-3 bg-violet-500/10 font-bold text-violet-400">5 Months</td>
                                            <td className="px-5 py-3 bg-violet-500/10 font-bold text-violet-400">Mandatory</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table II: Payout Scalars */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Activity className="w-5 h-5 text-fuchsia-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table II: Fees</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Fee Type</th>
                                            <th className="px-5 py-3 border-b border-white/5">2026 Figure</th>
                                            <th className="px-5 py-3 border-b border-white/5">Source</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Attorney %</td>
                                            <td className="px-5 py-3 font-mono">25.0%</td>
                                            <td className="px-5 py-3 text-emerald-400">Yield</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Total Fee Cap</td>
                                            <td className="px-5 py-3 font-mono">~$7,200</td>
                                            <td className="px-5 py-3 text-amber-400">Maximum</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Medical Records</td>
                                            <td className="px-5 py-3 font-mono">$100 - $500</td>
                                            <td className="px-5 py-3 text-blue-400">Expert</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">Net Retention</td>
                                            <td className="px-5 py-3 font-mono">75.0%</td>
                                            <td className="px-5 py-3 text-teal-400">Std</td>
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
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Max Back Pay</td>
                                            <td className="px-5 py-3">Earlier Onset</td>
                                            <td className="px-5 py-3 text-emerald-400">Increased</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Approval Speed</td>
                                            <td className="px-5 py-3">Hearing Level</td>
                                            <td className="px-5 py-3 text-blue-400">Success</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Tax Shield</td>
                                            <td className="px-5 py-3">Lump-Sum Elect.</td>
                                            <td className="px-5 py-3 text-amber-400">Optimized</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">Medicare Entry</td>
                                            <td className="px-5 py-3">24-Mo Wait</td>
                                            <td className="px-5 py-3 text-teal-400">Coverage</td>
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
                    <div className="prose prose-invert prose-violet max-w-none">
                        <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-violet-500 pl-6 underline underline-offset-8 decoration-violet-500/30">2026 SSDI Liquidity Architecture</h2>

                        <p className="text-slate-300 text-lg leading-relaxed mb-6 font-sans text-left">
                            SSDI (Social Security Disability Insurance) back pay represents the financial bridge for individuals sidelined by medical infirmity. In the 2026 fiscal environment, the focus is on navigating **Onset Date Arbitrage**, **Retroactive Limit Friction**, and **Attorney Fee Thresholds**. Our S-Class engine analyzes the core indemnity vectors: **The IRS Lump-Sum Tax Election**, **The 5-Month Statutory Gap**, and **Hearing-Level Approval Velocity**.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 my-10 font-sans">
                            <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-violet-500">
                                    <PieChart className="w-16 h-16" />
                                </div>
                                <h4 className="text-violet-400 font-bold mb-3 uppercase tracking-tighter text-xs">I. Expenditure Dynamics</h4>
                                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                                    <li>• **Onset Date Analysis**: Solving for the exact moment disability criteria were met to maximize retroactive yield.</li>
                                    <li>• **Retroactive Pay Gaps**: Tracking the 12-month federal ceiling for pre-application benefits.</li>
                                    <li>• **SGA Friction**: Identifying income thresholds ($1,620+) that trigger a 'Trial Work Period' audit.</li>
                                    <li>• **Cost-of-Living Pivot**: Concurrent auditing of benefit amounts against the 2026 COLA adjustments.</li>
                                </ul>
                            </div>
                            <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-fuchsia-500">
                                    <LineChart className="w-16 h-16" />
                                </div>
                                <h4 className="text-fuchsia-400 font-bold mb-3 uppercase tracking-tighter text-xs">II. Regulatory Friction</h4>
                                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                                    <li>• **ALJ Hearing Velocity**: Managing the 12-18 month wait times for institutional judicial review.</li>
                                    <li>• **The 5-Month Waiting Mandate**: Solving for the mandatory liquidity gap between onset and first payable month.</li>
                                    <li>• **Attorney Fee Arbitrage**: Managing the 25% yield deductions against the projected $7,200 cap.</li>
                                    <li>• **Medicare Transition Index**: Monitoring the 24-month waiting period for Parts A & B healthcare integration.</li>
                                </ul>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4 text-left">The Actuarial Model: Solving for the Retroactive Alpha</h3>
                        <p className="text-slate-400 leading-relaxed mb-6 font-sans text-left">
                            Standard calculators often fail to account for **Lump-Sum Tax Erosion**. Because receiving $30,000 in a single check can artificiallly inflate your income, you might inadvertently pay higher tax rates than if the money was received monthly. Our SSDI Audit Engine applies a **Tax-Bracket Normalization (TBN)** co-efficient, identifying the exact potential savings of using the IRS 'Lump-Sum Election' to spread the tax burden over previous years in the 2026 fiscal cycle.
                        </p>

                        <div className="bg-violet-500/5 border border-violet-500/20 p-6 rounded-2xl my-10 font-sans text-left">
                            <div className="flex items-start gap-4 text-violet-300">
                                <Info className="w-6 h-6 shrink-0 mt-1" />
                                <div className="text-sm leading-relaxed">
                                    <strong className="text-violet-200 block mb-1 uppercase tracking-widest text-[10px]">Strategic Note: The Application Anchor</strong>
                                    Wait times for SSDI are exhaustive. In the 2026 market, the initial ‘Reconsideration’ phase approval rates remain as low as 13%. Filing your claim with a clear ‘Established Onset Date’ (EOD) and complete medical records during the first submission is the most effective way to secure a shorter path to your back pay lump sum.
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
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 italic tracking-wide font-sans">SSDI Intelligence</h2>
                        <p className="text-slate-500 font-medium tracking-tight">Expert guidance for navigating 2026 disability back pay and SSA protocols.</p>
                    </div>
                    <FAQSection />
                </div>
            </section>

            {/* 5. RELATED CALCULATORS LAYER */}
            <section className="py-20 border-t border-white/5 bg-slate-950">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-col items-center gap-12">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">Disability Resource Cluster</h2>
                            <p className="text-slate-500 text-sm italic italic tracking-[0.3em] uppercase font-light">Internal Resource Mapping</p>
                        </div>
                        <div className="w-full max-w-lg">
                            <RelatedCalculators currentCalc="ssdi" count={6} />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA FOOTER */}
            <section className="py-24 bg-gradient-to-t from-violet-900/20 to-transparent">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">Recover Your Benefits.<br /><span className="text-violet-500">Secure Your Retroactive Alpha.</span></h2>
                    <Link href="/ssdi/calculator" className="inline-flex items-center gap-3 bg-white text-slate-950 hover:bg-slate-200 px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-violet-500/20 active:scale-95 group">
                        <Calculator className="w-6 h-6 group-hover:text-violet-600 transition-colors" />
                        RUN BACK PAY AUDIT
                        <ArrowRight className="w-6 h-6" />
                    </Link>
                    <p className="mt-8 text-slate-500 text-xs font-bold tracking-[0.4em] uppercase">Verified Institutional Framework • 2026 Edition</p>
                </div>
            </section>
        </div>
    );
}
