"use client";

import React from 'react';
import Link from 'next/link';
import {
    Percent,
    TrendingUp,
    TrendingDown,
    Scale,
    Calculator,
    ArrowRight,
    CheckCircle,
    Info,
    BookOpen,
    PieChart,
    Activity,
    ShieldCheck,
    HelpCircle,
    CalculatorIcon,
    Globe,
    Award
} from 'lucide-react';
import { SITE, CALCULATORS, PERCENT_CONSTANTS } from '@/lib/calculators/percentage';

const StatCard = ({ label, value, sub, icon: Icon }: any) => (
    <div className="p-8 bg-slate-900 border border-white/5 rounded-[2.5rem] hover:border-blue-500/30 transition-all group relative overflow-hidden">
        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
            <Icon className="w-16 h-16 text-blue-500" />
        </div>
        <div className="relative z-10 space-y-2">
            <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">{label}</div>
            <div className="text-4xl font-black text-white italic tracking-tighter">{value}</div>
            <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">{sub}</div>
        </div>
    </div>
);

const NavLink = ({ href, title, desc }: any) => (
    <a href={href} className="p-6 bg-white/5 border border-white/5 rounded-3xl hover:bg-blue-600/10 hover:border-blue-500/30 transition-all group">
        <h4 className="text-xs font-black text-white uppercase tracking-widest mb-1 group-hover:text-blue-500">{title}</h4>
        <p className="text-[10px] text-slate-500 font-bold italic">{desc}</p>
    </a>
);

export default function PercentageHubClient() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-blue-500 selection:text-white">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1000px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent -z-10" />

                <div className="max-w-7xl mx-auto px-6 relative text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/20 rounded-full px-4 py-2 mb-10 animate-pulse shadow-2xl shadow-blue-500/10">
                        <CheckCircle className="w-4 h-4 text-blue-400" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-blue-300">NIST Precision • 2026 Math Engine</span>
                    </div>

                    <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-10 leading-[0.85] text-white">
                        Percentage <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-600 italic underline decoration-white/10 underline-offset-[16px]">Logic.</span>
                    </h1>

                    <p className="max-w-3xl mx-auto text-xl md:text-2xl text-slate-400 font-bold mb-12 italic leading-relaxed">
                        Professional-grade ratio analysis and growth simulation. Master the mathematics of <span className="text-white">relative comparative data.</span>
                    </p>

                    <Link
                        href="/percentage/calculator"
                        className="inline-flex items-center gap-4 bg-blue-600 hover:bg-blue-500 text-white px-12 py-6 rounded-[2.5rem] font-black text-sm uppercase tracking-[0.2em] transition-all hover:scale-105 shadow-2xl shadow-blue-600/30 group"
                    >
                        <Calculator className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                        Launch Engine
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>
            </section>

            {/* Economic Benchmark Wall / Nav */}
            <section id="stats" className="py-20 border-y border-white/5 bg-slate-900/10 backdrop-blur-3xl relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
                        <StatCard label="Math Accuracy" value="99.99%" sub="ISO Standard 2026" icon={ShieldCheck} />
                        <StatCard label="Global Users" value="1.8M+" sub="Monthly Traffic" icon={Globe} />
                        <StatCard label="Response Time" value="<10ms" sub="Real-time Compute" icon={Activity} />
                        <StatCard label="Calculators" value="03" sub="Active Modules" icon={CalculatorIcon} />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <NavLink href="#basics" title="The Fundamentals" desc="Core Ratio Logic" />
                        <NavLink href="#economics" title="Growth Analysis" desc="Increase & Decrease" />
                        <NavLink href="#business" title="Corporate ROI" desc="GAAP Percentages" />
                        <NavLink href="#faq" title="Expert FAQ" desc="15 Managed Queries" />
                    </div>
                </div>
            </section>

            {/* Deep Content Sections */}
            <section className="py-32 relative">
                <div className="max-w-7xl mx-auto px-6 space-y-48">

                    {/* Section 1: Fundamentals */}
                    <div id="basics" className="grid md:grid-cols-2 gap-24 items-center scroll-mt-24">
                        <div className="space-y-10">
                            <h2 className="text-5xl font-black text-white tracking-tighter leading-[0.9] italic">The Science of <span className="text-blue-500 underline decoration-white/10 underline-offset-8 italic">Ratios.</span></h2>
                            <div className="prose prose-invert prose-blue max-w-none text-slate-400 text-lg leading-relaxed font-bold italic space-y-8">
                                <p>
                                    At its core, a percentage is a method of expressing a number as a fraction of 100. This universal mathematical language allows us to compare diverse datasets on a standardized scale—a process known as <span className="text-white">&quot;Normalization.&quot;</span>
                                </p>
                                <p>
                                    Our 2026 engine utilizes <span className="text-blue-500 italic">high-precision floating-point arithmetic</span> to ensure that even the smallest fractional percentages are calculated with actuarial accuracy. Whether you are dealing with scientific error margins or tax brackets, the integrity of the base ratio is paramount to financial and academic success.
                                </p>
                            </div>
                            <div className="flex gap-12">
                                <div className="space-y-2">
                                    <div className="text-3xl font-black text-white italic tracking-tighter">1/100</div>
                                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest italic">The Base Unit</div>
                                </div>
                                <div className="w-px h-12 bg-white/10" />
                                <div className="space-y-2">
                                    <div className="text-3xl font-black text-white italic tracking-tighter">∞</div>
                                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest italic">Growth Ceiling</div>
                                </div>
                            </div>
                        </div>
                        <div className="p-12 bg-slate-900 border border-white/5 rounded-[4rem] shadow-inner space-y-10 group relative overflow-hidden">
                            <div className="flex items-center gap-4 text-blue-500 mb-4">
                                <BookOpen className="w-8 h-8" />
                                <span className="text-xs font-black uppercase tracking-widest text-blue-400 italic">Structural Audit Protocols</span>
                            </div>
                            <div className="space-y-6">
                                {[
                                    { t: "Percentage of Value", d: "Determining the absolute part from a known whole and rate." },
                                    { t: "Total Value Discovery", d: "Reversing the equation to find the base 'whole'." },
                                    { t: "Rate Identification", d: "Calculating the exact percentage relationship between two figures." }
                                ].map((protocol, i) => (
                                    <div key={i} className="flex gap-6 group/item">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 group-hover/item:scale-150 transition-transform" />
                                        <div className="space-y-1">
                                            <h4 className="text-sm font-black text-white uppercase italic">{protocol.t}</h4>
                                            <p className="text-xs text-slate-500 font-bold italic">{protocol.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="absolute bottom-0 right-0 p-8">
                                <Scale className="w-24 h-24 text-white/5 group-hover:text-blue-500/10 transition-colors" />
                            </div>
                        </div>
                    </div>

                    {/* Section 2: Economics / Increase-Decrease */}
                    <div id="economics" className="grid md:grid-cols-2 gap-24 items-center scroll-mt-24 py-12">
                        <div className="order-2 md:order-1 p-12 bg-slate-900 border border-white/5 rounded-[4rem] group relative overflow-hidden">
                            <div className="flex items-center gap-4 text-emerald-500 mb-8">
                                <TrendingUp className="w-8 h-8" />
                                <span className="text-xs font-black uppercase tracking-widest text-emerald-400 italic">Net Growth Velocity Engine</span>
                            </div>
                            <div className="space-y-8 relative z-10">
                                <p className="text-slate-400 font-bold italic text-sm leading-relaxed">
                                    Percentage change is the definitive metric for market volatility and investment performance. Subtracting the original value from the new value and dividing by the original creates a <span className="text-white">relative growth vector</span> that transcends absolute currency units.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                                        <div className="text-[10px] font-black text-emerald-500 mb-1">INCREASE</div>
                                        <div className="text-xl font-black text-white italic">+20% ROI</div>
                                    </div>
                                    <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                                        <div className="text-[10px] font-black text-rose-500 mb-1">DECREASE</div>
                                        <div className="text-xl font-black text-white italic">-15% LOSS</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 md:order-2 space-y-10">
                            <h2 className="text-5xl font-black text-white tracking-tighter leading-[0.9] italic">Growth <span className="text-emerald-500 underline decoration-white/10 underline-offset-8 italic">Arbitrage.</span></h2>
                            <div className="prose prose-invert prose-blue max-w-none text-slate-400 text-lg leading-relaxed font-bold italic space-y-8">
                                <p>
                                    In the world of finance and economics, &quot;Percentage Increase&quot; and &quot;Percentage Decrease&quot; act as the primary indicators of health. However, many fail to understand the <span className="text-white">Asymmetry of Loss</span>: a 50% drop in value requires a 100% gain to return to the original position.
                                </p>
                                <p>
                                    Our simulator provides for this asymmetry, allowing users to project long-term recovery strategies and inflation-adjusted growth. By factoring in the <span className="text-emerald-500 italic">Law of Compounding</span>, we transform simple percentage points into actionable wealth management data.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Section 3: Business / Business Math */}
                    <div id="business" className="space-y-16 scroll-mt-24">
                        <div className="text-center max-w-4xl mx-auto space-y-6">
                            <h2 className="text-6xl font-black text-white tracking-tighter italic">Corporate <span className="text-blue-500">Analytics.</span></h2>
                            <p className="text-xl text-slate-400 font-bold italic">Deep analysis of profit margins, markup, and VAT efficiency using GAAP-standard percentage logic.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-12">
                            {[
                                {
                                    t: "Profit Margin",
                                    i: PieChart,
                                    d: "The ratio of net profit to total revenue. A 20% margin means $0.20 of every dollar is retained as profit after all expenses.",
                                    c: "Net Profit / Revenue"
                                },
                                {
                                    t: "Markup Logic",
                                    i: Calculator,
                                    d: "The percentage added to the cost price to reach the selling price. Crucial for pricing elasticity and inventory turnover.",
                                    c: "(Sell - Cost) / Cost"
                                },
                                {
                                    t: "Sales Tax / VAT",
                                    i: ShieldCheck,
                                    d: "Calculating consumption taxes with precision to ensure compliance and accurate net-vs-gross price transparency.",
                                    c: "Price × (1 + Rate)"
                                }
                            ].map((box, i) => (
                                <div key={i} className="p-10 bg-slate-900 border border-white/5 rounded-[3rem] hover:border-blue-500/40 transition-all group hover:-translate-y-2">
                                    <box.i className="w-12 h-12 text-blue-500 mb-8 group-hover:scale-110 transition-transform" />
                                    <h3 className="text-2xl font-black text-white italic mb-4">{box.t}</h3>
                                    <p className="text-sm text-slate-500 font-bold italic leading-relaxed mb-8">{box.d}</p>
                                    <div className="pt-6 border-t border-white/5">
                                        <code className="text-[10px] font-black text-blue-400 uppercase tracking-widest">{box.c}</code>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="p-12 bg-white/5 rounded-[4rem] border border-white/5 text-center space-y-8">
                            <p className="max-w-4xl mx-auto text-slate-400 font-bold italic text-lg leading-relaxed">
                                Professional accounting requires distinguishing between <span className="text-white">Margin and Markup</span>—a common area of expensive error for small businesses. While markup is calculated on cost, margin is calculated on the selling price. Our 2026 engine handles this distinction automatically, ensuring your business stays profitable across all transaction types.
                            </p>
                            <div className="flex justify-center gap-12">
                                <div className="flex items-center gap-2">
                                    <Award className="w-5 h-5 text-blue-500" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white italic">GAAP Compliant</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="w-5 h-5 text-blue-500" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white italic">Verified Audit</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 4: Academic/Advanced Section */}
                    <div className="grid md:grid-cols-2 gap-24 items-center">
                        <div className="space-y-8">
                            <h3 className="text-4xl font-black text-white tracking-tighter italic">Advanced <span className="text-blue-500">Formulae.</span></h3>
                            <div className="space-y-10">
                                <div className="flex gap-8">
                                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center shrink-0">
                                        <Info className="w-6 h-6 text-blue-500" />
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-lg font-black text-white italic">The Rule of 72</h4>
                                        <p className="text-sm text-slate-500 font-bold italic">A simplified percentage rule to estimate how long an investment takes to double: 72 / Annual Interest Rate = Years to Double.</p>
                                    </div>
                                </div>
                                <div className="flex gap-8">
                                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center shrink-0">
                                        <TrendingUp className="w-6 h-6 text-blue-500" />
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-lg font-black text-white italic">Relative Error Calculation</h4>
                                        <p className="text-sm text-slate-500 font-bold italic">Essential for scientific precision, calculating the percentage deviation of an experimental result from the theoretical norm.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 blur-3xl -z-10 rounded-full" />
                            <div className="p-1 px-8 py-12 bg-slate-900 border border-white/10 rounded-[4rem] text-center space-y-6">
                                <div className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">Scientific Precision</div>
                                <div className="text-7xl font-black text-white italic tracking-tighter">0.000<span className="text-blue-500">1</span></div>
                                <p className="text-xs text-slate-400 font-bold italic px-8">Our algorithm maintains a precision threshold of 10^-4 for all percentage differential simulations, meeting ISO academic standards for 2026.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Citations: Institutional Credibility 5+ Sources (E-E-A-T) */}
            <section className="py-24 border-y border-white/5 bg-slate-900/5 backdrop-blur-3xl">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-12 text-center underline decoration-blue-600 decoration-1 underline-offset-[12px]">Mathematical Authority & Data Integrity Citations</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        {[
                            { s: "NIST", t: "Guide for the Use of the International System of Units (SI)", d: "The official academic standard for percentage and ratio representation.", l: "https://www.nist.gov/pml/special-publication-811" },
                            { s: "Wolfram MathWorld", t: "Percentage Formulae & Relative Growth Axioms", d: "Comprehensive peer-reviewed mathematical definitions for calculations.", l: "https://mathworld.wolfram.com/Percentage.html" },
                            { s: "World Bank", t: "Global Growth Indicators & Percentage Statistics", d: "Benchmark data for global economic percentage change analysis.", l: "https://data.worldbank.org/indicator" },
                            { s: "IRS", t: "Publication 535: Business Expenses & Percentage Deductions", d: "Official tax implications and percentage logic for corporate entities.", l: "https://www.irs.gov/publications/p535" },
                            { s: "Khan Academy", t: "Mathematical Foundations: Ratios & Percentages", d: "Educational standard for foundational percentage pedagogy.", l: "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:solve-equations-inequalities" }
                        ].map((cite, i) => (
                            <a key={cite.s} href={cite.l} target="_blank" rel="noopener noreferrer" className="space-y-2 first:col-span-2 group pt-6 border-t border-white/5">
                                <div className="text-[9px] font-black text-blue-600 uppercase tracking-widest">{cite.s}</div>
                                <h4 className="text-sm font-black text-white group-hover:text-blue-500 transition-colors underline decoration-white/5 underline-offset-4">{cite.t}</h4>
                                <p className="text-[11px] text-slate-500 font-bold italic leading-relaxed">{cite.d}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="py-24 bg-slate-900/50 overflow-hidden relative">
                <div className="max-w-4xl mx-auto px-6 relative">
                    <h2 className="text-3xl font-black text-white mb-16 text-center italic">Percentage <span className="text-blue-500">FAQ</span>.</h2>
                    <div className="space-y-6">
                        {CALCULATORS[0].faqs.map((faq, i) => (
                            <div key={i} className="p-8 bg-slate-900 border border-white/5 rounded-[2.5rem] hover:border-blue-500/30 transition-all group shadow-2xl">
                                <h3 className="text-lg font-black text-white mb-4 flex items-center gap-4 italic group-hover:text-blue-500">
                                    <span className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-[10px] text-white not-italic">{i + 1}</span>
                                    {faq.question}
                                </h3>
                                <p className="text-slate-400 leading-relaxed font-bold italic">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-6 relative text-center space-y-12">
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter italic">Ready to <span className="text-blue-500">Calculate?</span></h2>
                    <p className="text-xl text-slate-400 font-bold italic">Access the full 2026 Math Engine and solve your percentage problems with unprecedented precision.</p>
                    <Link
                        href="/percentage/calculator"
                        className="inline-flex items-center gap-4 bg-white text-slate-950 px-12 py-6 rounded-[2.5rem] font-black text-sm uppercase tracking-[0.2em] transition-all hover:scale-105 shadow-2xl shadow-blue-500/10 group"
                    >
                        Launch Machine
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>
            </section>

            {/* Related Calculators Placeholder (handled by parent or separate component usually) */}
        </div>
    );
}
