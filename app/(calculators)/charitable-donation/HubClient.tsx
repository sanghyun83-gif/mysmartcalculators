"use client";

import { useMemo } from "react";
import Link from "next/link";
import {
    AlertCircle, Shield, ArrowRight, Zap, Activity, Target, FileText, ChevronRight, BarChart3,
    PieChart, LineChart, Info, CheckCircle2, MapPin, Award, Scale, Heart,
    Gift, Wallet, Gavel, UserCheck, ShieldCheck, Microscope, Banknote
} from "lucide-react";
import { SITE, DONATION_2026, formatCurrency } from "@/lib/calculators/charitable-donation";
import { RelatedCalculators } from "@/components/RelatedCalculators";

const FAQ_DATA = [
    {
        q: "What are the charitable deduction limits for 2026?",
        a: "In 2026, cash donations to public charities are deductible up to 60% of your Adjusted Gross Income (AGI). Donations of appreciated assets (like stocks) are limited to 30% of AGI. Any excess can be carried forward for up to 5 years."
    },
    {
        q: "Do I need to itemize to deduct my donations?",
        a: "Yes. To benefit from charitable deductions in 2026, your total itemized deductions (including state taxes, mortgage interest, and donations) must exceed the standard deduction: $15,400 for singles or $30,800 for married couples filing jointly."
    },
    {
        q: "How does a Qualified Charitable Distribution (QCD) work?",
        a: "For individuals 70.5 or older, a QCD allows a direct transfer of up to $105,000 (2026 limit) from an IRA to a qualified charity. This counts toward your RMD but is NOT included in your taxable income, providing a major tax advantage."
    },
    {
        q: "Can I deduct my time spent volunteering?",
        a: "No. The IRS does not allow a deduction for the value of your time or services. However, you can deduct out-of-pocket expenses directly related to volunteering, such as mileage (currently 14 cents/mile) or required uniforms."
    },
    {
        q: "What documentation is required for large donations?",
        a: "For any single donation of $250 or more, you must have a contemporaneous written acknowledgment from the charity. For non-cash donations over $5,000, a signed qualified appraisal is generally required for 2026 forensic compliance."
    }
];

export default function HubClient() {
    return (
        <div className="bg-slate-950 min-h-screen text-slate-300 font-sans selection:bg-rose-500/30">
            {/* 1. S-Class Hero: Institutional Auditor Badge & H1 */}
            <section className="relative pt-32 pb-20 overflow-hidden border-b border-white/5">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rose-500/10 via-transparent to-transparent opacity-50 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm font-medium mb-8 animate-fade-in">
                        <Gift className="w-4 h-4" />
                        <span>Institutional Compliance Auditor 2026: ACTIVE</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
                        Donation <span className="text-rose-500">Auditor.</span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-xl text-slate-400 mb-12 leading-relaxed font-light italic">
                        Forensic tax deduction evaluation using 2026 IRS AGI limits.
                        Synchronized with QCD compliance and itemized deduction benchmarks.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/charitable-donation/calculator"
                            className="px-8 py-4 bg-rose-600 hover:bg-rose-500 text-white rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-[0_0_40px_rgba(244,63,94,0.3)] flex items-center gap-2"
                        >
                            <Target className="w-5 h-5" />
                            Start Forensic Audit
                        </Link>
                        <Link
                            href="#audit-data"
                            className="px-8 py-4 bg-slate-900 border border-slate-800 hover:border-slate-700 text-white rounded-2xl font-bold text-lg transition-all duration-300 flex items-center gap-2"
                        >
                            <BarChart3 className="w-5 h-5" />
                            View 2026 Limits
                        </Link>
                    </div>
                </div>
            </section>

            {/* Quick Stats Grid */}
            <section className="py-20 bg-slate-950/50 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { label: "ANNUAL GIVING", value: DONATION_2026.statistics.annualGiving, desc: "US Market Benchmark", icon: <Heart className="text-rose-400" /> },
                            { label: "AVG DEDUCTION", value: DONATION_2026.statistics.avgDeduction, desc: "Forensic Mean 2026", icon: <Wallet className="text-rose-400" /> },
                            { label: "ITEMIZERS", value: DONATION_2026.statistics.itemizersPercent, desc: "Schedule A Volume", icon: <FileText className="text-rose-400" /> },
                            { label: "AUDIT LEVEL", value: "Institutional", desc: "Statutory Precision", icon: <Shield className="text-rose-400" /> },
                        ].map((stat, i) => (
                            <div key={i} className="p-6 rounded-3xl bg-slate-900/40 border border-white/5 hover:border-rose-500/30 transition-all duration-500 group">
                                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-500">{stat.icon}</div>
                                <div className="text-xs font-bold text-rose-500 uppercase tracking-widest mb-1">{stat.label}</div>
                                <div className="text-3xl font-black text-white mb-2">{stat.value}</div>
                                <div className="text-slate-500 text-sm">{stat.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2. The Strict 3-Table Protocol (Authority 85%) */}
            <section id="audit-data" className="py-32 bg-slate-950">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="space-y-32 text-left">
                        {/* Table I: AGI Deduction Limits */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4 border-l-4 border-rose-500 pl-6">
                                <div>
                                    <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter">I. 2026 AGI Deduction Benchmarks</h2>
                                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-none mt-1">IRS Compliance Phases • Statutory Limits</p>
                                </div>
                            </div>
                            <div className="overflow-hidden rounded-[2rem] border border-white/5 bg-slate-900/40 shadow-2xl">
                                <table className="w-full text-left border-collapse">
                                    <thead className="bg-white/5 border-b border-white/10 text-[10px] font-black tracking-[0.2em] text-rose-400 uppercase">
                                        <tr>
                                            <th className="px-8 py-5">Donation Type</th>
                                            <th className="px-8 py-5">AGI Limit</th>
                                            <th className="px-8 py-5">Carryforward</th>
                                            <th className="px-8 py-5">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5 text-xs font-bold italic text-slate-400">
                                        {Object.values(DONATION_2026.agiLimits).map((row, i) => (
                                            <tr key={i} className="hover:bg-rose-500/5 transition-colors group">
                                                <td className="px-8 py-5 text-white">{row.label}</td>
                                                <td className="px-8 py-5">{'limit' in row ? (row.limit as number * 100) + '%' : formatCurrency(row.max as number)}</td>
                                                <td className="px-8 py-5 text-rose-500/70">5 Years</td>
                                                <td className="px-8 py-5 text-[9px] uppercase tracking-widest text-slate-600 font-mono italic">Audit-Ready</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table II: Federal Tax Brackets (2026) */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4 border-l-4 border-rose-500 pl-6">
                                <div>
                                    <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter">II. 2026 Federal Tax Multipliers</h2>
                                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-none mt-1">Marginal Savings Phase • Deduction Calibration</p>
                                </div>
                            </div>
                            <div className="overflow-hidden rounded-[2rem] border border-white/5 bg-slate-900/40 shadow-2xl">
                                <table className="w-full text-left border-collapse">
                                    <thead className="bg-white/5 border-b border-white/10 text-[10px] font-black tracking-[0.2em] text-rose-400 uppercase">
                                        <tr>
                                            <th className="px-8 py-5">Bracket Rate</th>
                                            <th className="px-8 py-5">Income Floor (Single)</th>
                                            <th className="px-8 py-5">Deduction Weight</th>
                                            <th className="px-8 py-5">Grade</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5 text-xs font-bold italic text-slate-400">
                                        {DONATION_2026.taxBrackets.slice(2).map((row, i) => (
                                            <tr key={i} className="hover:bg-rose-500/5 transition-colors group">
                                                <td className="px-8 py-5 text-white">{(row.rate * 100).toFixed(0)}%</td>
                                                <td className="px-8 py-5 italic">{formatCurrency(row.min)}</td>
                                                <td className="px-8 py-5 text-slate-300">High Efficiency</td>
                                                <td className="px-8 py-5 text-rose-500 font-mono text-[9px] uppercase tracking-widest italic">Institutional</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table III: Calculation Methodology */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4 border-l-4 border-rose-500 pl-6">
                                <div>
                                    <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter">III. Forensic Compliance Logic</h2>
                                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-none mt-1">Audit Calibration Engine • Multiplier Matrix</p>
                                </div>
                            </div>
                            <div className="overflow-hidden rounded-[2rem] border border-white/5 bg-slate-900/40 shadow-2xl text-left">
                                <table className="w-full text-left border-collapse">
                                    <thead className="bg-white/5 border-b border-white/10 text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase">
                                        <tr>
                                            <th className="px-8 py-5">Audit Layer</th>
                                            <th className="px-8 py-5">Algorithm</th>
                                            <th className="px-8 py-5">Source</th>
                                            <th className="px-8 py-5">Precision</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5 text-xs font-bold italic text-slate-400">
                                        {[
                                            { l: "Possible Deduction", c: "Min(Gift, AGI * ClassLimit)", d: "IRS Pub 526", p: "Actuarial" },
                                            { l: "Tax Savings", c: "Deduction * MarginalRate", d: "Form 1040", p: "Linear" },
                                            { l: "QCD Efficiency", c: "GiftValue (100% Tax-Free)", d: "SECURE Act 2.0", p: "Absolute" }
                                        ].map((row, i) => (
                                            <tr key={i} className="hover:bg-white/5 transition-colors group">
                                                <td className="px-8 py-5 text-white">{row.l}</td>
                                                <td className="px-8 py-5 text-[10px] font-mono">{row.c}</td>
                                                <td className="px-8 py-5 text-[10px]">{row.d}</td>
                                                <td className="px-8 py-5 text-[9px] uppercase tracking-widest text-white/40 italic">{row.p}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Expert Content Section (Authority) */}
            <section className="py-32 bg-slate-950 border-t border-white/5">
                <div className="max-w-4xl mx-auto px-6 text-left">
                    <header className="mb-20">
                        <h2 className="text-5xl font-black text-white mb-8 leading-tight tracking-tighter">
                            Institutional Compliance: <br />
                            <span className="text-rose-500">2026 Philanthropic Tax Ethics</span>
                        </h2>
                        <p className="text-xl text-slate-400 leading-relaxed italic border-l-4 border-rose-500 pl-8 py-2">
                            In 2026, charitable giving has become a high-precision tax optimization strategy. This guide outlines the technical framework for private and corporate donation audits under the latest IRS guidance.
                        </p>
                    </header>

                    <div className="space-y-16">
                        <div className="prose prose-invert prose-rose max-w-none">
                            <h3 className="text-3xl font-bold text-white flex items-center gap-3 mb-6">
                                <Microscope className="text-rose-500" />
                                1. AGI Ceiling & The Rule of 60%
                            </h3>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                Forensic tax data for 2026 highlights the critical importance of the Adjusted Gross Income (AGI) ceiling. Cash contributions to public charities are capped at 60% of AGI. However, 'bunching' strategies are increasingly popular—where individuals consolidate multi-year giving into a single tax year to exceed the $30,800 standard deduction (married joint). Our auditor evaluates your gift against these statutory ceilings to ensure maximum efficiency.
                            </p>
                        </div>

                        <div className="prose prose-invert prose-rose max-w-none">
                            <h3 className="text-3xl font-bold text-white flex items-center gap-3 mb-6">
                                <Banknote className="text-rose-500" />
                                2. Qualified Charitable Distributions (QCD)
                            </h3>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                Under the 2026 SECURE Act 2.0 framework, QCDs remain the most powerful tool for high-net-worth seniors. By directing up to $105,000 from an IRA directly to a charity, donors satisfy their Required Minimum Distribution (RMD) without increasing their taxable income. This strategy is audited as 'Absolute Efficiency' because it bypasses the itemization requirement entirely and lowers AGI, potentially reducing Medicare Part B premiums.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Expert FAQ Hub */}
            <section className="py-32 bg-slate-900/30 border-y border-white/5">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="flex items-center gap-4 mb-16 text-left">
                        <div className="w-16 h-16 rounded-[2rem] bg-rose-500/20 flex items-center justify-center">
                            <Info className="w-8 h-8 text-rose-400" />
                        </div>
                        <div>
                            <h2 className="text-4xl font-black text-white tracking-tighter">Compliance Intelligence Hub</h2>
                            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs tracking-widest">Forensic Donation Guidance for 2026</p>
                        </div>
                    </div>

                    <div className="grid gap-6 text-left">
                        {FAQ_DATA.map((faq, i) => (
                            <details key={i} className="group bg-slate-900/50 border border-white/5 rounded-3xl overflow-hidden hover:border-rose-500/30 transition-all duration-300">
                                <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                                    <span className="text-xl font-bold text-slate-200 group-open:text-rose-400 transition-colors tracking-tight">
                                        {faq.q}
                                    </span>
                                    <ChevronRight className="w-6 h-6 text-slate-600 group-open:rotate-90 transition-transform" />
                                </summary>
                                <div className="px-8 pb-8 text-slate-400 leading-relaxed text-lg italic">
                                    {faq.a}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Tool Cluster & Citation */}
            <section className="py-32 bg-slate-950">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl font-black text-white mb-4 tracking-tighter uppercase italic">Institutional Audit Cluster</h2>
                        <div className="w-24 h-1 bg-rose-500 mx-auto rounded-full" />
                    </div>
                    <div className="flex justify-center">
                        <div className="w-full max-w-4xl">
                            <RelatedCalculators currentCalc="charitable-donation" count={6} />
                        </div>
                    </div>

                    <div className="mt-24 pt-8 border-t border-white/5 text-center">
                        <p className="text-slate-600 text-xs font-mono uppercase tracking-[0.3em] flex items-center justify-center gap-4">
                            <span>{DONATION_2026.citations[0]}</span>
                            <span className="w-2 h-2 rounded-full bg-rose-500/50" />
                            <span>Audit Ref: DON-2026-Tax</span>
                        </p>
                        <div className="mt-8">
                            <Link href="https://www.irs.gov/publications/p526" className="text-rose-500/60 hover:text-rose-400 text-[10px] font-bold uppercase tracking-widest transition-colors">
                                View Official 2026 IRS Donation Standards →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Footer */}
            <section className="py-40 bg-slate-900 border-t border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-rose-500/5 via-transparent to-transparent" />
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none italic uppercase">
                        Start Compliance <br />
                        <span className="text-rose-500 italic">Audit Node.</span>
                    </h2>
                    <p className="text-xl text-slate-400 mb-12 italic">Execute a professional deduction audit using forensic 2026 IRS logic.</p>
                    <Link
                        href="/charitable-donation/calculator"
                        className="px-12 py-6 bg-rose-600 hover:bg-rose-500 text-white rounded-[2rem] font-black text-2xl transition-all duration-300 shadow-[0_0_60px_rgba(244,63,94,0.4)] inline-flex items-center gap-3 group"
                    >
                        Access Compliance Auditor
                        <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
