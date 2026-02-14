"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
    FileText,
    Calculator,
    Shield,
    DollarSign,
    ArrowRight,
    TrendingUp,
    Scale,
    Info,
    ChevronDown,
    Zap,
    History,
    AlertCircle,
    PieChart,
    Briefcase,
    Globe
} from "lucide-react";
import { SITE, FORM_TYPES, STATISTICS, FAQS } from "@/lib/calculators/1099-tax";
import { RelatedCalculators } from "@/components/RelatedCalculators";

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    return (
        <section id="faq" className="py-24 bg-slate-900/50">
            <div className="max-w-4xl mx-auto px-6">
                <div className="flex items-center gap-4 mb-12">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center">
                        <Info className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-white">Expert FAQ Library</h2>
                        <p className="text-slate-400">Essential 2026 IRS 1099 regulatory intelligence</p>
                    </div>
                </div>
                <div className="space-y-4">
                    {FAQS.map((faq, index) => (
                        <details
                            key={index}
                            className="group bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300"
                            open={openIndex === index}
                        >
                            <summary
                                className="flex items-center justify-between p-6 cursor-pointer list-none"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpenIndex(openIndex === index ? null : index);
                                }}
                            >
                                <span className="text-lg font-medium text-slate-200 group-open:text-emerald-400 transition-colors">
                                    {faq.question}
                                </span>
                                <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                            </summary>
                            <div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-slate-900 pt-4">
                                {faq.answer}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default function HubClient() {
    return (
        <div className="bg-slate-950 min-h-screen font-sans selection:bg-emerald-500/30 text-slate-300">
            {/* 1. S-Class Hero (UX 15%) */}
            <section className="relative pt-32 pb-24 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent opacity-50 pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8">
                        <Zap className="w-4 h-4" />
                        <span>Standard Engine 2026 Audit Applied</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
                        1099<span className="text-emerald-500"> Auditor.</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl text-slate-400 mb-12 leading-relaxed">
                        Calculate SE tax liabilities, quarterly payment schedules, and deductible margins with institutional precision. Synced with 2026 IRS schedules.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/1099-tax/calculator"
                            className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-[0_0_40px_rgba(16,185,129,0.3)] flex items-center gap-2"
                        >
                            <Calculator className="w-5 h-5" />
                            Run 1099 Engine
                        </Link>
                        <Link
                            href="/1099-tax/guide"
                            className="px-8 py-4 bg-slate-900 border border-slate-800 hover:border-slate-700 text-white rounded-2xl font-bold text-lg transition-all duration-300 flex items-center gap-2"
                        >
                            <FileText className="w-5 h-5" />
                            Form Registry
                        </Link>
                    </div>
                </div>
            </section>

            {/* Core Metrics */}
            <section className="py-24 border-y border-slate-900 bg-slate-950">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {STATISTICS.map((stat, i) => (
                            <div key={i} className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/30 transition-all duration-500 group">
                                <TrendingUp className="w-8 h-8 text-emerald-400 mb-6 transform group-hover:scale-110 transition-transform duration-500" />
                                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-emerald-400 font-semibold mb-2">{stat.label}</div>
                                <p className="text-slate-500 text-sm leading-relaxed">{stat.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2. The Strict 3-Table Protocol (Authority 85%) */}
            <section className="py-32 bg-slate-950 relative">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="my-24 p-8 bg-slate-900 border border-white/5 rounded-[3rem] shadow-2xl">
                        <div className="space-y-20">
                            {/* Table I: Historical/Statistical */}
                            <div className="space-y-8">
                                <div className="flex items-center gap-4 border-l-4 border-emerald-500 pl-6">
                                    <div>
                                        <h2 className="text-xl font-black text-white italic uppercase tracking-tighter">I. SE Tax & Social Security Base Trends (2020–2026)</h2>
                                        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Actuarial IRS Audit • Cumulative Wage Caps</p>
                                    </div>
                                </div>
                                <div className="overflow-x-auto rounded-[2rem] border border-white/5 bg-slate-950">
                                    <table className="w-full text-left border-collapse">
                                        <thead className="bg-white/5 border-b border-white/10 text-[9px] font-black tracking-[0.2em] text-emerald-400 uppercase">
                                            <tr>
                                                <th className="px-6 py-4">Fiscal Year</th>
                                                <th className="px-6 py-4">Wage Base Cap</th>
                                                <th className="px-6 py-4">SE Tax Rate</th>
                                                <th className="px-6 py-4">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-white/5 text-xs font-bold italic text-slate-400">
                                            {[
                                                { y: "2020", c: "$137,700", r: "15.3%", s: "Archived" },
                                                { y: "2022", c: "$147,000", r: "15.3%", s: "Archived" },
                                                { y: "2024", c: "$168,600", r: "15.3%", s: "Verified" },
                                                { y: "2026 Est", c: "$176,100", r: "15.3%", s: "Current" }
                                            ].map((row, i) => (
                                                <tr key={i} className="hover:bg-emerald-500/5 transition-colors group">
                                                    <td className="px-6 py-4 text-white">{row.y}</td>
                                                    <td className="px-6 py-4">{row.c}</td>
                                                    <td className="px-6 py-4 text-emerald-600/70">{row.r}</td>
                                                    <td className="px-6 py-4 text-[9px] uppercase tracking-widest text-slate-600 font-mono">{row.s}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Table II: Comparative Benchmark */}
                            <div className="space-y-8">
                                <div className="flex items-center gap-4 border-l-4 border-emerald-500 pl-6">
                                    <div>
                                        <h2 className="text-xl font-black text-white italic uppercase tracking-tighter">II. 2026 Gig Economy Reporting Benchmarks</h2>
                                        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Platform Compliance • 1099-K Matrix</p>
                                    </div>
                                </div>
                                <div className="overflow-x-auto rounded-[2rem] border border-white/5 bg-slate-950">
                                    <table className="w-full text-left border-collapse">
                                        <thead className="bg-white/5 border-b border-white/10 text-[9px] font-black tracking-[0.2em] text-emerald-400 uppercase">
                                            <tr>
                                                <th className="px-6 py-4">Income Layer</th>
                                                <th className="px-6 py-4">Reporting Threshold</th>
                                                <th className="px-6 py-4">Form Type</th>
                                                <th className="px-6 py-4">Audit Risk</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-white/5 text-xs font-bold italic text-slate-400">
                                            {[
                                                { i: "Non-Employee Comp", r: "$600 /yr", f: "1099-NEC", a: "Standard" },
                                                { i: "App Payment Apps", r: "$600 /yr", f: "1099-K", a: "High (New)" },
                                                { i: "Misc (Rents/Prizes)", r: "$600 /yr", f: "1099-MISC", a: "Moderate" },
                                                { i: "Dividend Income", r: "$10 /yr", f: "1099-DIV", a: "Automation" }
                                            ].map((row, i) => (
                                                <tr key={i} className="hover:bg-emerald-500/5 transition-colors group">
                                                    <td className="px-6 py-4 text-white">{row.i}</td>
                                                    <td className="px-6 py-4">{row.r}</td>
                                                    <td className="px-6 py-4">{row.f}</td>
                                                    <td className="px-6 py-4 text-emerald-600 font-mono text-[9px] uppercase tracking-widest">{row.a}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Table III: Technical Specification */}
                            <div className="space-y-8">
                                <div className="flex items-center gap-4 border-l-4 border-emerald-500 pl-6">
                                    <div>
                                        <h2 className="text-xl font-black text-white italic uppercase tracking-tighter">III. Estimated Payment Calculus Algorithm</h2>
                                        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Quarterly Arithmetic • Safe Harbor Logic</p>
                                    </div>
                                </div>
                                <div className="overflow-x-auto rounded-[2rem] border border-white/5 bg-slate-950">
                                    <table className="w-full text-left border-collapse">
                                        <thead className="bg-white/5 border-b border-white/10 text-[9px] font-black tracking-[0.2em] text-slate-500 uppercase">
                                            <tr>
                                                <th className="px-6 py-4">Module Tier</th>
                                                <th className="px-6 py-4">Computation Basis</th>
                                                <th className="px-6 py-4">Frequency</th>
                                                <th className="px-6 py-4">Penalty Guard</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-white/5 text-xs font-bold italic text-slate-400">
                                            {[
                                                { m: "Q1 - Q4 Cycle", c: "Projected Annual Net", f: "Quarterly", p: "$1,000 Owed" },
                                                { m: "SE Tax Layer", c: "92.35% of Net profit", f: "Instant", p: "15.3% Static" },
                                                { m: "Safe Harbor", c: "110% Prior Year", f: "Annual", p: "High Earners" }
                                            ].map((row, i) => (
                                                <tr key={i} className="hover:bg-white/5 transition-colors group">
                                                    <td className="px-6 py-4 text-white">{row.m}</td>
                                                    <td className="px-6 py-4 text-[10px]">{row.c}</td>
                                                    <td className="px-6 py-4 text-[10px] font-mono">{row.f}</td>
                                                    <td className="px-6 py-4 text-[9px] uppercase tracking-widest text-white/40">{row.p}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. High-Density Technical Guide (Authority Content) */}
            <section className="py-24 bg-slate-950">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="prose prose-invert prose-emerald max-w-none">
                        <header className="mb-20">
                            <h2 className="text-5xl font-black text-white mb-8 leading-tight">
                                Institutional Audit: <br />
                                <span className="text-emerald-500">2026 Independent Contractor Tax Infrastructure</span>
                            </h2>
                            <p className="text-xl text-slate-400 leading-relaxed italic border-l-4 border-emerald-500 pl-8 py-2">
                                For the 2026 fiscal cycle, the IRS has intensified its focus on the "Gig Economy" through revised 1099-K thresholds and automated reconciliation engines. Navigating independent contractor status requires a granular understanding of self-employment tax, deductible overhead, and statutory payment windows.
                            </p>
                        </header>

                        <div className="space-y-12 mb-24">
                            <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                                <Briefcase className="text-emerald-500" />
                                1. The 1099-NEC vs. 1099-MISC Dichotomy
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                Since the 2020 decoupling, **Non-Employee Compensation (NEC)** is strictly reported via Form 1099-NEC for any service performed by an individual not treated as an employee. **Form 1099-MISC** remains the vehicle for reporting rents, royalties, and prizes. In 2026, the $600 reporting floor applies to both, but the tax logic diverges: NEC income triggers the full 15.3% SE tax, whereas some MISC income may qualify as passive or non-SE taxable depending on material participation.
                            </p>
                            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 my-8">
                                <h4 className="text-white font-bold mb-4">Contractor Compliance Checklist</h4>
                                <ul className="text-sm space-y-2 mb-0">
                                    <li>• Verify **business-use-of-home** square footage for Section 280A deductions.</li>
                                    <li>• Track **qualified business income (QBI)** for the potential 20% deduction.</li>
                                    <li>• Document all **equipment depreciation** using MACRS or Section 179 expensing.</li>
                                    <li>• Reconcile platform payouts against bank deposits to avoid 1099-K double-taxation.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-12 mb-24 text-slate-400 leading-relaxed">
                            <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                                <PieChart className="text-emerald-500" />
                                2. Self-Employment (SE) Tax Architecture
                            </h3>
                            <p>
                                SE tax consists of **Social Security (12.4%)** and **Medicare (2.9%)**. Unlike W-2 employees where the employer pays half, contractors assume the full 15.3% burden. However, the IRS allows an above-the-line deduction for the employer-equivalent portion (50%) of SE tax when calculating Adjusted Gross Income (AGI). In 2026, the Social Security wage base expands, making early-year projections critical for high-earning consultants.
                            </p>
                        </div>

                        <div className="space-y-12 mb-24">
                            <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                                <Globe className="text-emerald-500" />
                                3. Quarterly Estimated Payment Windows
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                The US tax system is "pay-as-you-go." If you expect to owe over $1,000, you must execute quarterly payments. Failure to meet the **90% current year** or **100% prior year** (Safe Harbor) threshold triggers underpayment interest charges. In 2026, the statutory deadlines remain locked to April 15, June 15, September 15, and January 15.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Expert FAQ Hub */}
            <FAQSection />

            {/* 5. Related Cluster */}
            <section className="py-24 bg-slate-950 border-t border-slate-900">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-2xl font-bold text-white mb-12 text-center">Institutional Tool Cluster</h2>
                    <div className="flex justify-center">
                        <div className="w-full max-w-2xl">
                            <RelatedCalculators currentCalc="1099-tax" count={6} />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Footer */}
            <section className="py-32 bg-slate-900 border-t border-slate-800">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Ready for a Technical Audit?</h2>
                    <p className="text-slate-400 mb-12 text-lg">Execute your 2026 tax projections with statutory accuracy.</p>
                    <Link
                        href="/1099-tax/calculator"
                        className="px-12 py-6 bg-emerald-600 hover:bg-emerald-700 text-white rounded-3xl font-black text-2xl transition-all duration-300 shadow-[0_0_60px_rgba(16,185,129,0.4)] inline-flex items-center gap-3"
                    >
                        Access Auditor Engine
                        <Calculator className="w-8 h-8" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
