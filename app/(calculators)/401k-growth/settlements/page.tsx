"use client";

import { DollarSign, BarChart3, Info, LineChart, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FinanceMarketIntel() {
    return (
        <main className="py-24 max-w-4xl mx-auto px-6 space-y-20">
            <section className="space-y-6 text-center md:text-left">
                <div className="text-[11px] font-black text-blue-500 uppercase tracking-[0.3em]">Market Intelligence Audit</div>
                <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">$23.5k <span className="text-blue-500">Ceiling</span>.</h1>
                <p className="text-slate-400 text-xl font-medium leading-relaxed max-w-2xl">A technical breakdown of 2026 contribution limits and S&P 500 compounding benchmarks.</p>
            </section>

            <div className="grid md:grid-cols-3 gap-6">
                {[
                    { l: "Base Limit", v: "$23,500" },
                    { l: "Catch-up Limit", v: "$7,500" },
                    { l: "Max Total (All Sources)", v: "$69,000" }
                ].map((s, i) => (
                    <div key={i} className="p-8 bg-slate-950 border border-white/10 rounded-[2.5rem] shadow-inner">
                        <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">{s.l}</div>
                        <div className="text-2xl font-black text-white">{s.v}</div>
                    </div>
                ))}
            </div>

            <div className="prose prose-invert prose-slate max-w-none text-slate-400 space-y-12 text-lg font-medium leading-relaxed">
                <h2 className="text-white text-3xl font-black italic">The Compounding Benchmark Logic</h2>
                <p>
                    Success in 401k planning is benchmarked against the **S&P 500 Total Return Index**. Historically, the index has provided an annualized return of ~10% before inflation. However, for 2026-2030 projections, our analysts utilize a more conservative **7.2% Expected Return**, Factoring in current P/E ratio expansions and global macroeconomic debt levels.
                </p>

                <p>
                    The "Wealth Matrix" is highly sensitive to time. A $10,000 contribution at age 25 grows to nearly $240,000 by age 65 (at 8%), whereas the same contribution at age 45 only reaches $46,000. This **Time-Value Asymmetry** is the most critical logic point in our auditor.
                </p>

                <div className="bg-blue-500/5 border border-blue-500/20 rounded-[3rem] p-12 space-y-8">
                    <h3 className="text-white text-2xl font-black">2026 Retirement Staging Matrix</h3>
                    <div className="space-y-6">
                        <div className="flex justify-between items-end border-b border-white/5 pb-2">
                            <span className="text-sm font-bold">Entry Phase (Age 20-35)</span>
                            <span className="text-blue-400 font-black">15%+ Deferral Target</span>
                        </div>
                        <div className="flex justify-between items-end border-b border-white/5 pb-2">
                            <span className="text-sm font-bold">Scaling Phase (Age 35-50)</span>
                            <span className="text-blue-400 font-black">Match + Catch-up Ready</span>
                        </div>
                        <div className="flex justify-between items-end border-b border-white/5 pb-2">
                            <span className="text-sm font-bold">Sprint Phase (Age 50-65)</span>
                            <span className="text-blue-400 font-black">Max Total Contributions</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-16 bg-blue-600 rounded-[4rem] text-center space-y-10 shadow-2xl shadow-blue-600/20">
                <h2 className="text-4xl font-black text-white tracking-tighter">Audit Your Net-Worth Potential.</h2>
                <Link href="/401k-growth/calculator" className="inline-flex items-center gap-4 bg-white text-black px-12 py-6 rounded-2xl font-black text-base uppercase tracking-widest hover:bg-slate-50 transition-all shadow-2xl">
                    Run Wealth Auditor <ArrowRight className="w-5 h-5" />
                </Link>
            </div>
        </main>
    );
}
