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
    Landmark
} from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const faqs = [
        {
            q: "What are the 401(k) contribution limits for 2026?",
            a: "For 2026, the elective deferral limit is projected to be $23,500. Individuals aged 50 and over can make an additional catch-up contribution of $7,500. Under SECURE Act 2.0, a 'Super Catch-up' of $11,250 is available for those aged 60-63."
        },
        {
            q: "How does the 'Mega-Backdoor Roth' strategy work?",
            a: "This involves making after-tax contributions to your 401(k) (beyond the $23,500 limit, up to a total plan limit of ~$70,000) and then completing an in-plan conversion to a Roth 401(k) or rolling it into a Roth IRA. This allows high earners to shield significantly more capital from future taxes."
        },
        {
            q: "What is the 'Employer Match' optimization threshold?",
            a: "The standard benchmark is to contribute at least enough to receive the full employer match. This is effectively a 100% immediate return on your investment. In 2026, many S&P 500 companies have moved toward a 4-6% dollar-for-dollar match structure."
        },
        {
            q: "When do Required Minimum Distributions (RMDs) start?",
            a: "Following SECURE Act 2.0, the RMD age has transitioned. For those born between 1951 and 1959, RMDs begin at age 73. For those born in 1960 or later, the RMD age is 75. This allows for longer tax-deferred compounding periods."
        },
        {
            q: "Should I prioritize a Traditional or Roth 401(k) in 2026?",
            a: "Traditional 401(k)s offer immediate tax deductions, which is beneficial if you are in a high tax bracket now. Roth 401(k)s use after-tax dollars but provide tax-free withdrawals, which is superior if you expect tax rates or your income to be higher during retirement."
        },
        {
            q: "What is the impact of 401(k) loan provisions under SECURE 2.0?",
            a: "SECURE 2.0 allows for expanded 'Emergency Savings' accounts within 401(k) plans (up to $2,500) and provides more flexibility for hardship withdrawals related to federally declared disasters or personal emergencies, reducing the friction of accessing your capital."
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
                            <Landmark className="w-3.5 h-3.5 text-blue-400" />
                            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-blue-400">Wealth Accumulation Protocol 2026</span>
                        </div>

                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
                            401(k) Growth <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 italic">Audit Matrix</span>
                        </h1>

                        <p className="max-w-2xl text-slate-400 text-base sm:text-lg md:text-xl leading-relaxed mb-10">
                            Institutional-grade compound interest modeling. Audit your retirement trajectory with SECURE Act 2.0 regulatory mapping and 2026 inflation buffers.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/401k-growth/calculator" className="flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-[1.02] shadow-xl shadow-blue-500/20 active:scale-95">
                                <Calculator className="w-5 h-5 shrink-0" />
                                Launch Wealth Auditor
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
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 italic">Retirement Benchmarks</h2>
                        <p className="text-slate-400">Official 2026 contribution thresholds and actuarial growth targets.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Table I: Contribution Limits */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Target className="w-5 h-5 text-blue-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table I: 2026 IRS Limits</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Category</th>
                                            <th className="px-5 py-3 border-b border-white/5">Max Limit</th>
                                            <th className="px-5 py-3 border-b border-white/5">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5 font-mono">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Base Deferral</td>
                                            <td className="px-5 py-3">$23,500</td>
                                            <td className="px-5 py-3 text-emerald-400">Active</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Catch-up (50+)</td>
                                            <td className="px-5 py-3">$7,500</td>
                                            <td className="px-5 py-3 text-blue-400">Stable</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Super Catch-up</td>
                                            <td className="px-5 py-3">$11,250</td>
                                            <td className="px-5 py-3 text-amber-400">SECURE 2.0</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-blue-500/10 font-bold text-blue-400 italic">Total Max</td>
                                            <td className="px-5 py-3 bg-blue-500/10 font-bold text-blue-400">$34,750</td>
                                            <td className="px-5 py-3 bg-blue-500/10 font-bold text-blue-400">Verified</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table II: Compounding Velocity */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Activity className="w-5 h-5 text-indigo-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table II: Growth Metrics</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Strategy</th>
                                            <th className="px-5 py-3 border-b border-white/5">Est. ROI</th>
                                            <th className="px-5 py-3 border-b border-white/5">Risk Level</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">S&P 500 Equity</td>
                                            <td className="px-5 py-3 font-mono">10.2%</td>
                                            <td className="px-5 py-3 text-rose-400">High</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">60/40 Balanced</td>
                                            <td className="px-5 py-3 font-mono">7.4%</td>
                                            <td className="px-5 py-3 text-amber-400">Mod</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Target Date</td>
                                            <td className="px-5 py-3 font-mono">Dynamic</td>
                                            <td className="px-5 py-3 text-emerald-400">Low</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">Inflation Gap</td>
                                            <td className="px-5 py-3 font-mono">-3.1%</td>
                                            <td className="px-5 py-3 text-rose-400">Erosion</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table III: Matching & Retention */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Lock className="w-5 h-5 text-amber-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table III: Retention Logic</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Match Rate</th>
                                            <th className="px-5 py-3 border-b border-white/5">Vesting Period</th>
                                            <th className="px-5 py-3 border-b border-white/5">Value Gain</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5 font-mono">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">100% of 3%</td>
                                            <td className="px-5 py-3">Immediate</td>
                                            <td className="px-5 py-3 text-emerald-400">+100%</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">50% of 6%</td>
                                            <td className="px-5 py-3">3-Year Cliff</td>
                                            <td className="px-5 py-3 text-emerald-400">+50%</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Non-Elective</td>
                                            <td className="px-5 py-3">5-Year Graded</td>
                                            <td className="px-5 py-3 text-blue-400">Variable</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Max Cap</td>
                                            <td className="px-5 py-3">100% Vest</td>
                                            <td className="px-5 py-3 text-amber-400">Optimal</td>
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
                        <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-blue-500 pl-6 underline underline-offset-8 decoration-blue-500/30">2026 401(k) Growth Architecture</h2>

                        <p className="text-slate-300 text-lg leading-relaxed mb-6 font-sans text-left">
                            The 401(k) remains the primary vehicle for private-sector retirement capitalization in the 2026 financial landscape. Driven by **Tax-Deferred Compounding**, these plans allow participants to leverage gross principal for reinvestment, bypassing the dividend and capital gains friction that erodes wealth in standard brokerage accounts. Our S-Class engine analyzes the three core growth vectors: **Salary Deferral Velocity**, **Employer Match Optimization**, and **Actuarial Inflation Shielding**.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 my-10 font-sans">
                            <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-blue-500">
                                    <PieChart className="w-16 h-16" />
                                </div>
                                <h4 className="text-blue-400 font-bold mb-3 uppercase tracking-tighter text-xs">I. Contribution Dynamics</h4>
                                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                                    <li>• **IRS 401(k) Limits**: Utilizing the projected 2026 caps ($23.5k).</li>
                                    <li>• **Catch-up Provisions**: Calculating the 50+ age-based acceleration.</li>
                                    <li>• **SECURE 2.0 Super-Catch**: Mapping the 60-63 age tier ($11,250).</li>
                                    <li>• **Non-Elective Credits**: Estimating fixed employer contributions.</li>
                                </ul>
                            </div>
                            <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-indigo-500">
                                    <LineChart className="w-16 h-16" />
                                </div>
                                <h4 className="text-indigo-400 font-bold mb-3 uppercase tracking-tighter text-xs">II. Compounding Friction</h4>
                                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                                    <li>• **Expense Ratio Drag**: Impact of plan management fees.</li>
                                    <li>• **Inflation Erosion**: Adjusting for 3.1% purchasing power decay.</li>
                                    <li>• **Tax Shock Mapping**: Estimating future withdrawal liabilities.</li>
                                    <li>• **Vesting Schedules**: Calculating retention-adjusted net equity.</li>
                                </ul>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4 text-left">The Actuarial Model: Beyond Simple APR</h3>
                        <p className="text-slate-400 leading-relaxed mb-6 font-sans text-left">
                            Standard calculators often fail to account for the **Net Purchasing Power Gap**. A $1,000,000 balance in 2050 possesses significantly less utility than it does in 2026. Our Wealth Audit Engine applies a **Time-Value Adjusted (TVA)** discount rate to your projections, ensuring your 'Target Number' is sufficient for institutional-grade lifestyle maintenance. We also integrate the **SECURE Act 2.0 RMD Glide-path** to optimize withdrawal longevity.
                        </p>

                        <div className="bg-blue-500/5 border border-blue-500/20 p-6 rounded-2xl my-10 font-sans text-left">
                            <div className="flex items-start gap-4 text-blue-300">
                                <Info className="w-6 h-6 shrink-0 mt-1" />
                                <div className="text-sm leading-relaxed">
                                    <strong className="text-blue-200 block mb-1 uppercase tracking-widest text-[10px]">Strategic Note: The 15% Savings Floor</strong>
                                    Financial planners generally recommend a minimum 15% combined (Personal + Match) contribution rate to satisfy the **Replacement Ratio** required for a 30-year retirement. In the 2026 high-cost-of-living environment, scaling toward the IRS max is advised for all earners in the 24% tax bracket or higher.
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
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 italic tracking-wide font-sans">Wealth Intelligence</h2>
                        <p className="text-slate-500 font-medium tracking-tight">Expert guidance for navigating 2026 401(k) and SECURE 2.0 protocols.</p>
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
                            <RelatedCalculators currentCalc="401k-growth" count={6} />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA FOOTER */}
            <section className="py-24 bg-gradient-to-t from-blue-900/20 to-transparent">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">Optimize Your Alpha.<br /><span className="text-blue-500">Secure Your Legacy.</span></h2>
                    <Link href="/401k-growth/calculator" className="inline-flex items-center gap-3 bg-white text-slate-950 hover:bg-slate-200 px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-blue-500/20 active:scale-95 group">
                        <Calculator className="w-6 h-6 group-hover:text-blue-600 transition-colors" />
                        RUN WEALTH AUDIT
                        <ArrowRight className="w-6 h-6" />
                    </Link>
                    <p className="mt-8 text-slate-500 text-xs font-bold tracking-[0.4em] uppercase">Verified Institutional Framework • 2026 Edition</p>
                </div>
            </section>
        </div>
    );
}
