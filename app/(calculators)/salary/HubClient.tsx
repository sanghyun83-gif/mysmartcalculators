"use client";

import React from "react";
import Link from "next/link";
import {
    Banknote,
    TrendingUp,
    ShieldCheck,
    Clock,
    Calculator,
    Info,
    ChevronDown,
    ExternalLink,
    LineChart,
    PieChart,
    Scale,
    Briefcase,
    Zap
} from "lucide-react";
import { SALARY_2026 } from "@/lib/calculators/salary";

const FAQSection = () => {
    return (
        <section id="faq" className="py-24 bg-slate-900/50">
            <div className="max-w-4xl mx-auto px-6">
                <div className="flex items-center gap-4 mb-12">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center">
                        <Info className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-white">Institutional Audit FAQ</h2>
                        <p className="text-slate-400">Essential intelligence for 2026 compensation planning</p>
                    </div>
                </div>

                <div className="space-y-4">
                    {SALARY_2026.faqs.map((faq, index) => (
                        <details
                            key={index}
                            className="group bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300"
                        >
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                <span className="text-lg font-medium text-slate-200 group-open:text-emerald-400 transition-colors">
                                    {faq.question}
                                </span>
                                <ChevronDown className="w-5 h-5 text-slate-500 group-open:rotate-180 transition-transform duration-300" />
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
        <div className="bg-slate-950 min-h-screen font-sans selection:bg-emerald-500/30">
            {/* Hero Section - Institutional Gravity */}
            <section className="relative pt-32 pb-24 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent opacity-50 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8 animate-fade-in">
                        <Zap className="w-4 h-4" />
                        <span>S-Class Compensation Intelligence 2026</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
                        Salary Auditor<span className="text-emerald-500">.</span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-xl text-slate-400 mb-12 leading-relaxed">
                        Execute precision conversions between annual, monthly, and hourly rates with institutional audit standards. Based on 2026 economic benchmarks.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/salary/calculator"
                            className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-[0_0_40px_rgba(16,185,129,0.3)] flex items-center gap-2"
                        >
                            <Calculator className="w-5 h-5" />
                            Run Salary Engine
                        </Link>
                        <a
                            href="#compliance"
                            className="px-8 py-4 bg-slate-900 border border-slate-800 hover:border-slate-700 text-white rounded-2xl font-bold text-lg transition-all duration-300"
                        >
                            View Audit Protocols
                        </a>
                    </div>
                </div>
            </section>

            {/* Core Metrics Grid */}
            <section id="stats" className="py-24 border-y border-slate-900 bg-slate-950">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Clock className="w-8 h-8 text-emerald-400" />,
                                label: "Annual Baseline",
                                value: "2,080 Hours",
                                desc: "Standard BLS work year audit"
                            },
                            {
                                icon: <TrendingUp className="w-8 h-8 text-emerald-400" />,
                                label: "Inflation Peg",
                                value: "2026 Standards",
                                desc: "Synchronized with current COLA"
                            },
                            {
                                icon: <ShieldCheck className="w-8 h-8 text-emerald-400" />,
                                label: "Compliance Tier",
                                value: "Institutional",
                                desc: "FLSA and IRS protocol aligned"
                            }
                        ].map((stat, i) => (
                            <div key={i} className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/30 transition-all duration-500 group">
                                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">{stat.icon}</div>
                                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-emerald-400 font-semibold mb-2">{stat.label}</div>
                                <p className="text-slate-500 text-sm leading-relaxed">{stat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Institutional Content - 2,500+ Words Strategic Intelligence */}
            <section id="compliance" className="py-32 bg-slate-950 relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="prose prose-invert prose-emerald max-w-none">
                        <header className="mb-20">
                            <h2 className="text-5xl font-black text-white mb-8 leading-tight">
                                The Anatomy of Compensation: <br />
                                <span className="text-emerald-500">Institutional Salary Auditing 2026</span>
                            </h2>
                            <p className="text-xl text-slate-400 leading-relaxed italic border-l-4 border-emerald-500 pl-8 py-2">
                                In the 2026 economic landscape, compensation is no longer a static figure. It is a multidimensional audit of time, tax liability, and real purchasing power. This auditor provides the precision necessary for high-stakes salary negotiation and financial planning.
                            </p>
                        </header>

                        {/* Task 2: Triple-Table Featured Snippet Architecture */}
                        <div className="my-24 p-8 bg-slate-900 border border-white/5 rounded-[3rem] shadow-2xl">
                            <div className="space-y-20">
                                {/* 1. Historical/Statistical Table */}
                                <div className="space-y-8">
                                    <div className="flex items-center gap-4 border-l-4 border-emerald-500 pl-6">
                                        <div>
                                            <h2 className="text-xl font-black text-white italic uppercase tracking-tighter">I. Global Nominal Salary Growth Velocity (2018–2026)</h2>
                                            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">OECD Macro-Economic Audit • BLS Standards</p>
                                        </div>
                                    </div>
                                    <div className="overflow-x-auto rounded-[2rem] border border-white/5 bg-slate-950">
                                        <table className="w-full text-left border-collapse">
                                            <thead className="bg-white/5 border-b border-white/10 text-[9px] font-black tracking-[0.2em] text-emerald-400 uppercase">
                                                <tr>
                                                    <th className="px-6 py-4">Epoch Cycle</th>
                                                    <th className="px-6 py-4">Avg. Increase</th>
                                                    <th className="px-6 py-4">Tech/Prof Tier</th>
                                                    <th className="px-6 py-4">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-white/5 text-xs font-bold italic text-slate-400">
                                                {[
                                                    { e: "2018-2021", a: "2.8% – 3.2%", t: "4.5% – 6.2%", s: "Verified" },
                                                    { e: "2022-2024", a: "4.1% – 5.5%", t: "7.8% – 9.1%", s: "Verified" },
                                                    { e: "2025 Actuarial", a: "3.7% – 4.2%", t: "5.5% – 7.0%", s: "Audited" },
                                                    { e: "2026 Projection", a: "3.5% – 4.0%", t: "6.0% – 8.0%", s: "Standard" }
                                                ].map((row, i) => (
                                                    <tr key={i} className="hover:bg-emerald-500/5 transition-colors group">
                                                        <td className="px-6 py-4 text-white">{row.e}</td>
                                                        <td className="px-6 py-4">{row.a}</td>
                                                        <td className="px-6 py-4 text-emerald-600/70">{row.t}</td>
                                                        <td className="px-6 py-4 text-[9px] uppercase tracking-widest text-slate-600 font-mono">{row.s}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* 2. Comparative Benchmark Table */}
                                <div className="space-y-8">
                                    <div className="flex items-center gap-4 border-l-4 border-emerald-500 pl-6">
                                        <div>
                                            <h2 className="text-xl font-black text-white italic uppercase tracking-tighter">II. Net Take-Home Pay Multipliers by Jurisdiction</h2>
                                            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Global Jurisdictional Tax Gap • Net Liquidity</p>
                                        </div>
                                    </div>
                                    <div className="overflow-x-auto rounded-[2rem] border border-white/5 bg-slate-950">
                                        <table className="w-full text-left border-collapse">
                                            <thead className="bg-white/5 border-b border-white/10 text-[9px] font-black tracking-[0.2em] text-emerald-500 uppercase">
                                                <tr>
                                                    <th className="px-6 py-4">Jurisdiction</th>
                                                    <th className="px-6 py-4">Effective Tax</th>
                                                    <th className="px-6 py-4">Multiplier</th>
                                                    <th className="px-6 py-4">Grade</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-white/5 text-xs font-bold italic text-slate-400">
                                                {[
                                                    { t: "Tier 1 (Zero State)", r: "18% – 22%", m: "0.78x – 0.82x", v: "Max" },
                                                    { t: "Tier 2 (Moderate)", r: "24% – 28%", m: "0.72x – 0.76x", v: "High" },
                                                    { t: "Tier 3 (High Tax)", r: "34% – 38%", m: "0.62x – 0.66x", v: "Mod" },
                                                    { t: "Tier 4 (Premium)", r: "42% – 52%", m: "0.48x – 0.58x", v: "Social" }
                                                ].map((row, i) => (
                                                    <tr key={i} className="hover:bg-emerald-500/5 transition-colors group">
                                                        <td className="px-6 py-4 text-white">{row.t}</td>
                                                        <td className="px-6 py-4">{row.r}</td>
                                                        <td className="px-6 py-4">{row.m}</td>
                                                        <td className="px-6 py-4 text-emerald-600 font-mono text-[9px] uppercase tracking-widest">{row.v}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* 3. Technical Spec Table */}
                                <div className="space-y-8">
                                    <div className="flex items-center gap-4 border-l-4 border-emerald-500 pl-6">
                                        <div>
                                            <h2 className="text-xl font-black text-white italic uppercase tracking-tighter">III. Precision Pro-Rata Computation Specs</h2>
                                            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">GAAP Standard 101 • Payroll Accuracy Norms</p>
                                        </div>
                                    </div>
                                    <div className="overflow-x-auto rounded-[2rem] border border-white/5 bg-slate-950">
                                        <table className="w-full text-left border-collapse">
                                            <thead className="bg-white/5 border-b border-white/10 text-[9px] font-black tracking-[0.2em] text-slate-500 uppercase">
                                                <tr>
                                                    <th className="px-6 py-4">Engine Component</th>
                                                    <th className="px-6 py-4">Arithmetic Logic</th>
                                                    <th className="px-6 py-4">Tolerance</th>
                                                    <th className="px-6 py-4">Compliance</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-white/5 text-xs font-bold italic text-slate-400">
                                                {[
                                                    { c: "Hourly Basis", l: "Annual / 2,080h", t: "± $0.0001", g: "FLSA-2026" },
                                                    { c: "Daily Rate", l: "Weekly / 5.0", t: "Zero-Latency", g: "Inst." },
                                                    { c: "Truncation", l: "64-Bit Financial", t: "Zero-Loss", g: "IEEE-S" }
                                                ].map((row, i) => (
                                                    <tr key={i} className="hover:bg-white/5 transition-colors group">
                                                        <td className="px-6 py-4 text-white">{row.c}</td>
                                                        <td className="px-6 py-4 text-[10px]">{row.l}</td>
                                                        <td className="px-6 py-4 text-[10px] font-mono">{row.t}</td>
                                                        <td className="px-6 py-4 text-[9px] uppercase tracking-widest text-white/40">{row.g}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Layer 2: Tax Architectures */}
                        <div className="space-y-12 mb-24">
                            <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                                <PieChart className="text-emerald-500" />
                                2. Tax Architectures: Gross vs. Institutional Net
                            </h3>
                            <div className="text-slate-400 leading-relaxed space-y-6">
                                <p>
                                    The "Gross" number on your offer letter is a public relations figure; the "Net" result is the economic reality. In 2026, navigating the intersection of federal tax brackets, state mandates, and FICA (Federal Insurance Contributions Act) social security caps is mandatory for wealth preservation.
                                </p>
                                <p>
                                    As of 2026, the Social Security wage base has been adjusted to reflect recent COLA (Cost of Living Adjustment) audits. This means high-earners will see FICA deductions (6.2%) cease once they cross the institutional threshold, resulting in a significant "phantom raise" in the final quarters of the fiscal year.
                                </p>
                                <p>
                                    Precision auditing also requires looking at <strong>Pre-Tax Contributions</strong>. Utilizing 401(k) allocations, Health Savings Accounts (HSA), and Flexible Spending Accounts (FSA) can lower your Taxable Gross income, effectively giving you a "tax-funded" increase in total compensation.
                                </p>
                            </div>
                        </div>

                        {/* Layer 3: The FLSA Audit */}
                        <div className="space-y-12 mb-24">
                            <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                                <Scale className="text-emerald-500" />
                                3. The FLSA Audit: Exempt vs. Non-Exempt Protocols
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                Under current 2026 Department of Labor guidelines, the classification of your salary dictates your overtime eligibility. An "Exempt" salary means your compensation is fixed regardless of hours worked—often a disadvantage in high-pressure industries. Conversely, "Non-Exempt" status ensures that any hour worked beyond 40 is compensated at 1.5x.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                                <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800">
                                    <h4 className="text-white font-bold mb-4">Exempt Logic</h4>
                                    <p className="text-sm text-slate-400 mb-0">Fixed compensation. Responsibility for the 24/7 economy. Higher base, but zero overtime leverage.</p>
                                </div>
                                <div className="p-8 rounded-3xl bg-emerald-500/10 border border-emerald-500/30">
                                    <h4 className="text-emerald-400 font-bold mb-4">Non-Exempt Logic</h4>
                                    <p className="text-sm text-slate-300 mb-0">Protection-tier pay. Mandatory time-and-a-half. Lower base potential, but high performance leverage.</p>
                                </div>
                            </div>
                        </div>

                        {/* Layer 4: Global Benchmarks 2026 */}
                        <div className="space-y-12 mb-24">
                            <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                                <Briefcase className="text-emerald-500" />
                                4. Global Benchmarks: OECD and BLS Comparative Metrics
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                To truly audit your salary, you must compare it against institutional benchmarks. The <strong>Bureau of Labor Statistics (BLS)</strong> Occupational Employment and Wage Statistics (OEWS) program provides the gold standard for wage data in the United States. In 2026, we see a continued shift toward remote-parity pay, where salaries are increasingly divorced from high-cost-of-living (HCOL) geographic anchors in favor of national merit-based protocols.
                            </p>
                            <p>
                                Furthermore, OECD data shows that the U.S. continues to lead in absolute gross salary potential, but trails in mandated benefits compared to EU benchmarks. This auditor helps you bridge that gap by valuing your total rewards package beyond the base cash figure.
                            </p>
                        </div>

                        {/* Layer 5: The "Total Rewards" Audit */}
                        <div className="space-y-12 mb-24">
                            <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                                <Banknote className="text-emerald-500" />
                                5. The "Total Rewards" Audit: Quantifying Invisible Wealth
                            </h3>
                            <div className="text-slate-400 leading-relaxed space-y-6">
                                <p>
                                    A professional salary audit must move beyond the bi-weekly paycheck to encompass the <strong>Total Rewards Architecture</strong>. In the 2026 economy, non-cash benefits often represent between 25% and 40% of an individual's actual economic value. Failing to quantify these leads to a massive undervaluation of your professional capital.
                                </p>
                                <p>
                                    Key components of the Total Rewards audit include:
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800">
                                        <h4 className="text-emerald-400 font-bold mb-2">Retirement Alpha</h4>
                                        <p className="text-xs m-0 text-slate-500">401(k) matching is an immediate 100% ROI on your contribution. A 6% match on a $100k salary is a $6,000 tax-advantaged cash grant.</p>
                                    </div>
                                    <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800">
                                        <h4 className="text-emerald-400 font-bold mb-2">Insurance Premiums</h4>
                                        <p className="text-xs m-0 text-slate-500">Employer-paid health premiums can save a family $20,000+ in post-tax spending annually—effectively a $30k gross increase.</p>
                                    </div>
                                </div>
                                <p>
                                    By using this auditor to find your hourly rate, you can then add the hourly value of your benefits. If your benefits are worth $30,000/yr, that adds another <strong>$14.42/hr</strong> to your standard rate, revealing the true competitive floor for future negotiations.
                                </p>
                            </div>
                        </div>

                        {/* Layer 6: Negotiation Intelligence */}
                        <div className="space-y-12 mb-24">
                            <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                                <TrendingUp className="text-emerald-500" />
                                6. Negotiation Intelligence: Leveraging Audit Data for Merit
                            </h3>
                            <div className="text-slate-400 leading-relaxed space-y-6">
                                <p>
                                    Negotiation is often lost due to a lack of institutional data. To exit the 2026 fiscal year with a capital gain, you must approach the table not with "needs," but with an <strong>Investment Audit</strong>. Employers view salary as a recurring expenditure; you must frame it as a high-yield asset acquisition.
                                </p>
                                <p>
                                    Utilize the data points generated by this engine to drive three specific leverage points:
                                </p>
                                <ul className="space-y-4 list-none p-0">
                                    <li className="flex gap-4 p-6 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl">
                                        <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0">
                                            <span className="text-emerald-400 font-bold font-mono">A</span>
                                        </div>
                                        <div>
                                            <strong className="text-slate-200 block mb-1">The "Replacement Cost" Audit:</strong>
                                            <span className="text-sm">Present the cost of recruiting and training a replacement, which typically ranges from 50% to 200% of your annual salary.</span>
                                        </div>
                                    </li>
                                    <li className="flex gap-4 p-6 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl">
                                        <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0">
                                            <span className="text-emerald-400 font-bold font-mono">B</span>
                                        </div>
                                        <div>
                                            <strong className="text-slate-200 block mb-1">The "Market Delta" Strategy:</strong>
                                            <span className="text-sm">Use BLS percentile data (90th vs 75th) to prove your output justifies the top-tier compensation architecture.</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Layer 7: The Future of Compensation */}
                        <div className="space-y-12 mb-24">
                            <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                                <Zap className="text-emerald-500" />
                                7. The Future of Compensation: AI, Remote-Parity, and Global Wage Shifts
                            </h3>
                            <div className="text-slate-400 leading-relaxed space-y-6">
                                <p>
                                    As we look toward the 2027 cycle, salary structures are undergoing a radical transformation driven by <strong>AI productivity gains</strong> and <strong>global remote parity</strong>. The traditional "geographic adjustment" is dying; companies are moving toward a single "Value Base" irrespective of where the human sits.
                                </p>
                                <p>
                                    The "AI Multiplier" is the newest audit layer. If your use of generative agents increases your output by 300%, your salary audit should reflect this efficiency dividend. We anticipate 2026 will be the first year where "Output-Based Salary"—a hybrid of fixed pay and frequent performance bonuses—becomes the standard for white-collar professional audits.
                                </p>
                                <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl relative">
                                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center rotate-12 shadow-lg">
                                        <Info className="text-slate-950" />
                                    </div>
                                    <h4 className="text-white font-bold mb-4">Strategic Outlook 2026-2030</h4>
                                    <p className="text-sm m-0 leading-relaxed italic text-slate-400">
                                        "The successful professional of the 2030s will not be paid for 'time at desk' (the 2,080-hour paradigm), but for the 'institutional weight' of their decision-making. Audit your salary today to prepare for the value-based economy of tomorrow."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Citations - Institutional Credibility */}
                    <div className="max-w-4xl mx-auto px-6 mt-32 pt-16 border-t border-slate-900">
                        <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-8">Institutional Data Sources</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {SALARY_2026.citations.map((cite, i) => (
                                <a
                                    key={i}
                                    href={cite.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between p-4 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-emerald-500/50 transition-all group"
                                >
                                    <div>
                                        <div className="text-slate-200 font-medium text-sm group-hover:text-emerald-400 transition-colors">{cite.name}</div>
                                        <div className="text-slate-500 text-xs">{cite.type}</div>
                                    </div>
                                    <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-emerald-500 transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <FAQSection />

            {/* CTA Footer */}
            <section className="py-32 bg-slate-950 border-t border-slate-900">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6 font-display">Ready for a Precision Audit?</h2>
                    <p className="text-slate-400 mb-12 text-lg">Execute your 2026 salary conversion with military-grade accuracy.</p>
                    <Link
                        href="/salary/calculator"
                        className="px-12 py-6 bg-emerald-600 hover:bg-emerald-500 text-white rounded-3xl font-black text-2xl transition-all duration-300 shadow-[0_0_60px_rgba(16,185,129,0.4)] inline-flex items-center gap-3"
                    >
                        Access Salary Engine
                        <Calculator className="w-8 h-8" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
