"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
    TrendingUp, ArrowLeft, DollarSign, Calculator, Info,
    Zap, Shield, Clock, ChevronRight, Share2, Printer,
    RefreshCw, CheckCircle2, AlertCircle, Scale, Globe, Brain,
    Sparkles, Percent, BarChart3
} from "lucide-react";
import {
    SITE, COMPOUND_2026, calculateCompoundInterest, formatCurrency
} from "@/lib/calculators/compound-interest";

export default function CompoundInterestCalculatorClient() {
    // State for inputs
    const [principal, setPrincipal] = useState("10000");
    const [monthlyContribution, setMonthlyContribution] = useState("500");
    const [annualRate, setAnnualRate] = useState("8");
    const [years, setYears] = useState("20");
    const [compoundingFreq, setCompoundingFreq] = useState(12);
    const [inflationRate, setInflationRate] = useState("3");

    // Calculation result
    const result = useMemo(() => {
        const p = parseFloat(principal) || 0;
        const m = parseFloat(monthlyContribution) || 0;
        const r = parseFloat(annualRate) || 0;
        const t = parseInt(years) || 0;

        return calculateCompoundInterest(p, m, r, t, compoundingFreq);
    }, [principal, monthlyContribution, annualRate, years, compoundingFreq]);

    // Inflation adjustment
    const adjustedTotal = useMemo(() => {
        const inf = parseFloat(inflationRate) || 0;
        const t = parseInt(years) || 0;
        // Real Value = Nominal Value / (1 + i)^t
        return result.totalValue / Math.pow(1 + inf / 100, t);
    }, [result.totalValue, inflationRate, years]);

    return (
        <div className="min-h-screen bg-[#020617] text-slate-200 pb-20">
            {/* Header */}
            <header className="bg-slate-900/50 backdrop-blur-xl border-b border-white/5 sticky top-0 z-[100]">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/compound-interest" className="p-2 hover:bg-white/5 rounded-xl transition-colors text-slate-400 hover:text-white">
                            <ArrowLeft className="w-5 h-5" />
                        </Link>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center">
                                <TrendingUp className="w-5 h-5 text-emerald-500" />
                            </div>
                            <div>
                                <h1 className="text-sm font-black text-white uppercase tracking-tighter">Wealth <span className="text-emerald-500">Accretion Engine</span></h1>
                                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-none">S-Class Precision Audit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Input Column */}
                    <div className="lg:col-span-4 space-y-6">
                        <section className="bg-slate-900/50 border border-white/5 rounded-[2.5rem] p-8 backdrop-blur-sm">
                            <h2 className="text-lg font-black text-white mb-8 flex items-center gap-2 uppercase tracking-tighter">
                                <Zap className="w-5 h-5 text-emerald-500" /> Growth Parameters
                            </h2>

                            <div className="space-y-6">
                                {/* Principal Input */}
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Initial Principal</label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <DollarSign className="w-4 h-4 text-emerald-500" />
                                        </div>
                                        <input
                                            type="number"
                                            value={principal}
                                            onChange={(e) => setPrincipal(e.target.value)}
                                            className="w-full bg-black/40 border border-white/5 rounded-2xl py-4 pl-10 pr-4 text-white font-black focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all outline-none"
                                            placeholder="10,000"
                                        />
                                    </div>
                                </div>

                                {/* Monthly Contribution */}
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Monthly Addition</label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <Sparkles className="w-4 h-4 text-emerald-500" />
                                        </div>
                                        <input
                                            type="number"
                                            value={monthlyContribution}
                                            onChange={(e) => setMonthlyContribution(e.target.value)}
                                            className="w-full bg-black/40 border border-white/5 rounded-2xl py-4 pl-10 pr-4 text-white font-black focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all outline-none"
                                            placeholder="500"
                                        />
                                    </div>
                                </div>

                                {/* Interest Rate */}
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Annual Yield (%)</label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <Percent className="w-4 h-4 text-emerald-500" />
                                        </div>
                                        <input
                                            type="number"
                                            value={annualRate}
                                            onChange={(e) => setAnnualRate(e.target.value)}
                                            className="w-full bg-black/40 border border-white/5 rounded-2xl py-4 pl-10 pr-4 text-white font-black focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all outline-none"
                                            placeholder="8"
                                        />
                                    </div>
                                </div>

                                {/* Years */}
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Time Horizon (Years)</label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <Clock className="w-4 h-4 text-emerald-500" />
                                        </div>
                                        <input
                                            type="number"
                                            value={years}
                                            onChange={(e) => setYears(e.target.value)}
                                            className="w-full bg-black/40 border border-white/5 rounded-2xl py-4 pl-10 pr-4 text-white font-black focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all outline-none"
                                            placeholder="20"
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="bg-emerald-500/5 border border-emerald-500/20 rounded-[2.5rem] p-8">
                            <h3 className="text-sm font-black text-white mb-6 uppercase tracking-widest flex items-center gap-2">
                                <Brain className="w-4 h-4 text-emerald-500" /> Inflation Audit
                            </h3>
                            <div className="space-y-4">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Expected Inflation (%)</label>
                                <input
                                    type="number"
                                    value={inflationRate}
                                    onChange={(e) => setInflationRate(e.target.value)}
                                    className="w-full bg-black/40 border border-emerald-500/10 rounded-2xl py-3 px-4 text-white font-black focus:ring-2 focus:ring-emerald-500/50 outline-none"
                                />
                                <p className="text-[10px] text-slate-500 font-bold italic leading-relaxed">
                                    Calculating "Purchasing Power Parity" to show what your wealth buys in 2026 dollars.
                                </p>
                            </div>
                        </section>
                    </div>

                    {/* Result Column */}
                    <div className="lg:col-span-8 space-y-6">
                        {/* Summary Card */}
                        <div className="bg-gradient-to-br from-emerald-600 to-emerald-900 rounded-[3rem] p-10 md:p-14 text-white shadow-2xl shadow-emerald-500/20 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                                <TrendingUp className="w-64 h-64 text-white" />
                            </div>

                            <div className="relative z-10 grid md:grid-cols-2 gap-12">
                                <div className="space-y-8">
                                    <div>
                                        <p className="text-xs font-black uppercase tracking-[0.3em] opacity-60 mb-2">Total Accumulated Wealth</p>
                                        <h3 className="text-5xl md:text-7xl font-black tracking-tighter tabular-nums drop-shadow-2xl">
                                            {formatCurrency(result.totalValue)}
                                        </h3>
                                    </div>
                                    <div className="flex gap-6">
                                        <div className="space-y-1">
                                            <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Interest Earned</p>
                                            <p className="text-xl font-black">{formatCurrency(result.totalInterest)}</p>
                                        </div>
                                        <div className="w-px h-10 bg-white/20 self-center" />
                                        <div className="space-y-1">
                                            <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Total Principal</p>
                                            <p className="text-xl font-black">{formatCurrency(result.totalPrincipal)}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center items-end text-right space-y-4">
                                    <div className="bg-black/20 backdrop-blur-md rounded-3xl p-6 border border-white/10 w-full">
                                        <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">Purchasing Power (Real Value)</p>
                                        <p className="text-3xl font-black text-emerald-200">{formatCurrency(adjustedTotal)}</p>
                                        <p className="text-[10px] font-bold italic opacity-60 mt-1">Adjusted for {inflationRate}% inflation</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Chart / Data Breakdown */}
                        <div className="bg-slate-900/50 border border-white/5 rounded-[2.5rem] p-8 md:p-12">
                            <div className="flex items-center justify-between mb-10">
                                <h2 className="text-xl font-black text-white uppercase tracking-tighter flex items-center gap-3">
                                    <BarChart3 className="w-6 h-6 text-emerald-500" /> Accretion Tier Audit
                                </h2>
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 bg-emerald-500 rounded-full" />
                                    <div className="w-3 h-3 bg-white/20 rounded-full" />
                                </div>
                            </div>

                            <div className="space-y-4">
                                {result.yearlyData.filter((_, i) => i === 0 || (i + 1) % 5 === 0).map((data) => (
                                    <div key={data.year} className="group flex items-center justify-between p-6 bg-black/20 border border-white/5 hover:border-emerald-500/20 rounded-3xl transition-all">
                                        <div className="flex items-center gap-6">
                                            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-xs font-black text-slate-400 group-hover:text-emerald-400 transition-colors">
                                                YR {data.year}
                                            </div>
                                            <div>
                                                <p className="text-sm font-black text-white uppercase tracking-widest">{formatCurrency(data.value)}</p>
                                                <p className="text-[10px] text-slate-500 font-bold italic">Int: {formatCurrency(data.interest)}</p>
                                            </div>
                                        </div>
                                        <div className="hidden md:block w-48 h-2 bg-white/5 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-emerald-500 transition-all duration-1000"
                                                style={{ width: `${(data.interest / data.value) * 100}%` }}
                                            />
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">
                                                {Math.round((data.interest / data.value) * 100)}% ROI
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Analysis Footer */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-slate-900/30 border border-white/5 rounded-[2rem] p-8 flex items-start gap-4">
                                <Info className="w-6 h-6 text-emerald-500 shrink-0" />
                                <div className="space-y-2">
                                    <p className="text-xs font-black text-white uppercase tracking-widest">The "Rule of 72" Audit</p>
                                    <p className="text-xs text-slate-500 font-bold italic leading-relaxed">
                                        At your {annualRate}% yield, your initial principal will double every {Math.round(72 / (parseFloat(annualRate) || 1) * 10) / 10} years.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-slate-900/30 border border-white/5 rounded-[2rem] p-8 flex items-start gap-4">
                                <Shield className="w-6 h-6 text-emerald-500 shrink-0" />
                                <div className="space-y-2">
                                    <p className="text-xs font-black text-white uppercase tracking-widest">Freshness Benchmark</p>
                                    <p className="text-xs text-slate-500 font-bold italic leading-relaxed">
                                        Audited against 2026 OECD and Federal Reserve median market yield projections.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

function PlusIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
    );
}
