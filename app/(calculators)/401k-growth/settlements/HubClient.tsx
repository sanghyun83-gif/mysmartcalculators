"use client";

import Link from "next/link";
import { ArrowLeft, BarChart3, ArrowRight, DollarSign, TrendingUp, Shield, Activity, Target, Landmark, LineChart, PieChart } from "lucide-react";

export default function FinanceBenchmarksHub() {
    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-16">

                {/* Navigation Sidebar */}
                <aside className="lg:col-span-3 space-y-8">
                    <div className="sticky top-32 space-y-8">
                        <Link href="/401k-growth" className="inline-flex items-center gap-2 text-[10px] font-black text-blue-500 uppercase tracking-widest hover:gap-3 transition-all">
                            <ArrowLeft className="w-3 h-3" /> Return to Hub
                        </Link>

                        <nav className="space-y-2">
                            {[
                                { n: "Compounding Logic", id: "#logic" },
                                { n: "Staging Matrix", id: "#matrix" },
                                { n: "Contribution Limits", id: "#limits" },
                                { n: "Fee Benchmarks", id: "#fees" }
                            ].map((item) => (
                                <Link key={item.id} href={item.id} className="block p-4 bg-white/5 border border-white/5 rounded-xl text-xs font-bold text-slate-400 hover:text-white hover:bg-white/10 transition-all italic tracking-tight">
                                    {item.n}
                                </Link>
                            ))}
                        </nav>

                        <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-2xl">
                            <div className="text-[9px] font-black text-blue-400 uppercase tracking-widest mb-2">Market Audit</div>
                            <div className="text-xs font-bold text-white uppercase italic tracking-tighter">S&P 500 Yield Sync Active</div>
                        </div>
                    </div>
                </aside>

                {/* Main Expert Content */}
                <main className="lg:col-span-9 space-y-24">

                    <header className="space-y-6 text-balance">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-black text-blue-400 uppercase tracking-widest">
                            <LineChart className="w-3 h-3" /> Market Intelligence v5.0
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.9]">
                            $23.5k <span className="text-blue-500 italic">Ceiling</span>.
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed font-bold">
                            A technical breakdown of 2026 contribution limits, tax-deferred compounding, and S&P 500 volatility benchmarks.
                        </p>
                    </header>

                    {/* Section 1: Compounding Logic */}
                    <section id="logic" className="space-y-8">
                        <h2 className="text-3xl font-black text-white flex items-center gap-4">
                            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white text-sm">1</div>
                            The Compounding Benchmark Logic
                        </h2>
                        <div className="prose prose-invert prose-slate max-w-none text-slate-400 space-y-6 text-lg font-medium leading-[1.8]">
                            <p>
                                Success in 401k planning is benchmarked against the **S&P 500 Total Return Index**. Historically, the index has provided an annualized return of ~10% before inflation. However, for 2026-2030 projections, our analysts utilize a more conservative **7.2% Expected Return**.
                            </p>
                            <p>
                                The "Wealth Matrix" is highly sensitive to time. A $10,000 contribution at age 25 grows to nearly $240,000 by age 65 (at 8%), whereas the same contribution at age 45 only reaches $46,000. This **Time-Value Asymmetry** is the most critical logic point in our auditor.
                            </p>
                        </div>
                    </section>

                    {/* Section 2: Staging Matrix */}
                    <section id="matrix" className="p-12 bg-slate-900 border border-white/10 rounded-[4rem] space-y-12 relative overflow-hidden">
                        <div className="absolute -right-8 -top-8 p-12 opacity-5">
                            <Target className="w-48 h-48 text-blue-500" />
                        </div>
                        <h2 className="text-3xl font-black text-white italic text-center">2026 Retirement Staging Matrix</h2>

                        <div className="space-y-6 max-w-2xl mx-auto">
                            {[
                                { t: "Entry Phase (Age 20-35)", v: "15%+ Deferral Target", d: "Prioritize compounding duration over asset selection." },
                                { t: "Scaling Phase (Age 35-50)", v: "Match + Catch-up Ready", d: "Optimization of employer matching and HSA integration." },
                                { t: "Sprint Phase (Age 50-65)", v: "Max Total Contributions", d: "Securing catch-up limits and RMD glide-path preparation." }
                            ].map((row, i) => (
                                <div key={i} className="group border-b border-white/5 pb-6">
                                    <div className="flex justify-between items-end mb-2">
                                        <span className="text-lg font-black text-white">{row.t}</span>
                                        <span className="text-xl font-black text-blue-400">{row.v}</span>
                                    </div>
                                    <p className="text-xs font-medium text-slate-500 italic">{row.d}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Data Stats Grid */}
                    <section id="limits" className="space-y-12 py-16 border-t border-white/10 text-center">
                        <div className="space-y-4">
                            <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter underline decoration-blue-500 decoration-4">2026 IRS Thresholds</h3>
                            <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest pt-2 italic">Official federal contribution limits</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { t: "Base Deferral", v: "$23,500" },
                                { t: "Catch-up (50+)", v: "$7,500" },
                                { t: "Super Catch-up", v: "$11,250" },
                                { t: "Section 415 Limit", v: "$69,000" }
                            ].map((stat, i) => (
                                <div key={i} className="p-8 bg-white/5 border border-white/5 rounded-[2.5rem] space-y-1 hover:border-blue-500/30 transition-all">
                                    <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">{stat.t}</div>
                                    <div className="text-xl font-black text-white tracking-tighter">{stat.v}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <footer className="pt-8 border-white/5 flex flex-col items-center gap-8 text-center max-w-2xl mx-auto">
                        <Link href="/401k-growth/calculator" className="w-full p-8 bg-blue-600 rounded-[3rem] text-center hover:bg-blue-500 transition-all group overflow-hidden relative shadow-2xl shadow-blue-600/20">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            <span className="text-xl font-black italic uppercase tracking-wider text-white flex items-center justify-center gap-4">
                                Auditing My Retirement Future <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </span>
                        </Link>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-relaxed">
                            *Market data derived from S&P Global benchmarks. Projections are actuarial simulations and do not guarantee future investment performance. Tax liability calculated at 2026 standard brackets.
                        </p>
                    </footer>

                </main>
            </div>
        </div>
    );
}
