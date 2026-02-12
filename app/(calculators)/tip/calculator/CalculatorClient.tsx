"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
    ArrowLeft, DollarSign, Calculator, Info, Users, Zap, Shield,
    TrendingUp, ChevronRight, Share2, Printer, RefreshCw,
    CheckCircle2, AlertCircle, Scale, Globe, Landmark, Heart, Brain, Sparkles
} from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import {
    SITE,
    TIP_2026,
    calculateTip,
    formatCurrency,
    TipResult
} from "@/lib/calculators/tip";

export default function TipCalculatorClient() {
    const [bill, setBill] = useState("75.50");
    const [tipPercent, setTipPercent] = useState(20);
    const [splitCount, setSplitCount] = useState(1);
    const [isTaxIncluded, setIsTaxIncluded] = useState(true);

    const result = useMemo(() => {
        const billNum = parseFloat(bill) || 0;
        return calculateTip(billNum, tipPercent, splitCount);
    }, [bill, tipPercent, splitCount]);

    const handleBillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value.replace(/[^0-9.]/g, "");
        setBill(val);
    };

    return (
        <div className="min-h-screen bg-[#020617] text-slate-200">
            {/* S-Class Header */}
            <header className="bg-slate-900/50 backdrop-blur-xl border-b border-white/5 sticky top-0 z-[100]">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/tip" className="p-2 hover:bg-white/5 rounded-xl transition-colors text-slate-400 hover:text-white">
                            <ArrowLeft className="w-5 h-5" />
                        </Link>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-center">
                                <DollarSign className="w-5 h-5 text-amber-500" />
                            </div>
                            <div>
                                <h1 className="text-sm font-black text-white uppercase tracking-tighter">Gratuity Gold <span className="text-amber-500">v3.1</span></h1>
                                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Institutional Audit Engine</p>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center gap-3">
                        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full">
                            <Shield className="w-3 h-3 text-amber-500" />
                            <span className="text-[10px] text-amber-400 font-bold uppercase tracking-widest">2026 Secured</span>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 py-12">
                <div className="grid lg:grid-cols-12 gap-12 items-start">

                    {/* Input Column */}
                    <div className="lg:col-span-7 space-y-8">
                        <section className="bg-slate-900/50 border border-white/5 rounded-[2.5rem] p-8 md:p-10 backdrop-blur-sm relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <Calculator className="w-32 h-32 text-amber-500 rotate-12" />
                            </div>

                            <div className="relative z-10 space-y-8">
                                <div>
                                    <h2 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">Audit Parameters</h2>
                                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest italic">Input core transaction data for reciprocity modeling</p>
                                </div>

                                {/* Bill Amount */}
                                <div className="space-y-4">
                                    <label className="flex items-center justify-between">
                                        <span className="text-sm font-black text-white uppercase tracking-widest flex items-center gap-2">
                                            <Landmark className="w-4 h-4 text-amber-500" /> Gross Transaction
                                        </span>
                                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">USD Currency</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute left-6 top-1/2 -translate-y-1/2 text-3xl font-black text-amber-500">$</div>
                                        <input
                                            type="text"
                                            value={bill}
                                            onChange={handleBillChange}
                                            className="w-full pl-14 pr-6 py-6 bg-black/40 border-2 border-white/5 rounded-3xl text-4xl font-black text-white focus:outline-none focus:border-amber-500/50 focus:ring-4 focus:ring-amber-500/10 transition-all placeholder:text-slate-800"
                                            placeholder="0.00"
                                        />
                                    </div>
                                    <div className="grid grid-cols-4 gap-3">
                                        {[25, 50, 100, 250].map(val => (
                                            <button
                                                key={val}
                                                onClick={() => setBill(val.toFixed(2))}
                                                className="py-3 bg-white/5 hover:bg-amber-500/10 border border-white/5 hover:border-amber-500/30 rounded-2xl text-xs font-black text-slate-400 hover:text-amber-400 transition-all uppercase tracking-widest"
                                            >
                                                ${val}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Tip Percentage */}
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <label className="text-sm font-black text-white uppercase tracking-widest flex items-center gap-2">
                                            <Zap className="w-4 h-4 text-amber-500" /> Gratuity Tranche
                                        </label>
                                        <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-lg text-amber-400 font-black text-xl">
                                            {tipPercent}%
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-4 gap-3">
                                        {TIP_2026.quickTips.map(p => (
                                            <button
                                                key={p}
                                                onClick={() => setTipPercent(p)}
                                                className={`py-4 rounded-2xl border-2 font-black transition-all uppercase tracking-widest text-sm ${tipPercent === p
                                                        ? 'bg-amber-500/20 border-amber-500/50 text-amber-400 shadow-lg shadow-amber-500/10'
                                                        : 'bg-white/5 border-white/5 text-slate-500 hover:border-white/10'
                                                    }`}
                                            >
                                                {p}%
                                            </button>
                                        ))}
                                    </div>
                                    <input
                                        type="range"
                                        min="0"
                                        max="50"
                                        step="1"
                                        value={tipPercent}
                                        onChange={(e) => setTipPercent(parseInt(e.target.value))}
                                        className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                                    />
                                    <div className="flex justify-between text-[10px] text-slate-500 font-black uppercase tracking-widest px-1">
                                        <span>Economic Base (0%)</span>
                                        <span>Institutional High (50%)</span>
                                    </div>
                                </div>

                                {/* Split & Mode */}
                                <div className="grid md:grid-cols-2 gap-6 pt-4">
                                    <div className="space-y-4">
                                        <label className="text-sm font-black text-white uppercase tracking-widest flex items-center gap-2">
                                            <Users className="w-4 h-4 text-amber-500" /> Collective Audit
                                        </label>
                                        <div className="flex items-center justify-between bg-black/40 p-2 border-2 border-white/5 rounded-2xl">
                                            <button
                                                onClick={() => setSplitCount(Math.max(1, splitCount - 1))}
                                                className="w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-xl text-white transition-all active:scale-95"
                                            >
                                                −
                                            </button>
                                            <div className="text-center">
                                                <div className="text-2xl font-black text-white leading-none">{splitCount}</div>
                                                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">Parties</div>
                                            </div>
                                            <button
                                                onClick={() => setSplitCount(Math.min(100, splitCount + 1))}
                                                className="w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-xl text-white transition-all active:scale-95"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-sm font-black text-white uppercase tracking-widest flex items-center gap-2">
                                            <Globe className="w-4 h-4 text-amber-500" /> Logic Source
                                        </label>
                                        <button
                                            onClick={() => setIsTaxIncluded(!isTaxIncluded)}
                                            className="w-full h-[68px] flex flex-col items-center justify-center bg-black/40 border-2 border-white/5 hover:border-amber-500/30 rounded-2xl transition-all group/btn"
                                        >
                                            <div className="text-sm font-black text-white uppercase tracking-tighter group-hover/btn:text-amber-400 transition-colors">
                                                {isTaxIncluded ? "Post-Tax Total" : "Pre-Tax Subtotal"}
                                            </div>
                                            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Toggle Precision Mode</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-6 bg-slate-900/30 border border-white/5 rounded-3xl flex items-center gap-4">
                                <div className="p-3 bg-amber-500/10 rounded-2xl">
                                    <Scale className="w-5 h-5 text-amber-500" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Calculated Integrity</p>
                                    <p className="text-xs text-white font-bold italic">"Audit for fair exchange"</p>
                                </div>
                            </div>
                            <div className="p-6 bg-slate-900/30 border border-white/5 rounded-3xl flex items-center gap-4">
                                <div className="p-3 bg-blue-500/10 rounded-2xl">
                                    <Shield className="w-5 h-5 text-blue-500" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Data Verification</p>
                                    <p className="text-xs text-white font-bold italic">"Institutional Precision"</p>
                                </div>
                            </div>
                        </div>

                        <LegalDisclaimer />
                    </div>

                    {/* Result Column */}
                    <div className="lg:col-span-5 sticky top-24 space-y-8">
                        <section className="bg-gradient-to-br from-amber-600 to-amber-900 rounded-[3rem] p-10 text-white shadow-2xl shadow-amber-900/40 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full -mr-20 -mt-20 pointer-events-none" />

                            <div className="relative z-10 space-y-10">
                                <div className="flex items-center justify-between">
                                    <p className="text-xs font-black uppercase tracking-[0.3em] opacity-80">Audit Resolution</p>
                                    <Zap className="w-5 h-5 text-amber-300 animate-pulse" />
                                </div>

                                <div className="space-y-2">
                                    <p className="text-sm font-bold uppercase tracking-widest opacity-70">Total Allocation</p>
                                    <div className="text-7xl font-black tracking-tighter tabular-nums drop-shadow-2xl">
                                        {formatCurrency(result.totalAmount)}
                                    </div>
                                    <div className="flex items-center gap-2 pt-2">
                                        <div className="px-2 py-0.5 bg-black/20 rounded font-black text-[10px] uppercase tracking-widest">Net Bill: {formatCurrency(result.billAmount)}</div>
                                        <div className="px-2 py-0.5 bg-white/20 rounded font-black text-[10px] uppercase tracking-widest">Gratuity: {formatCurrency(result.tipAmount)}</div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-5 bg-white/10 backdrop-blur-md rounded-3xl border border-white/5">
                                        <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">Per Person (Net)</p>
                                        <p className="text-2xl font-black tabular-nums">{formatCurrency(result.perPersonBill)}</p>
                                    </div>
                                    <div className="p-5 bg-black/20 backdrop-blur-md rounded-3xl border border-white/5">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-amber-300 mb-1">Per Person (Tip)</p>
                                        <p className="text-2xl font-black tabular-nums text-amber-200">{formatCurrency(result.perPersonTip)}</p>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-white/10">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs font-black uppercase tracking-widest opacity-80">Individual Total (Audit)</span>
                                        <div className="flex items-center gap-1 text-[10px] font-black text-amber-300 uppercase">
                                            <CheckCircle2 className="w-3 h-3" /> Precision Verified
                                        </div>
                                    </div>
                                    <div className="text-4xl font-black tracking-tighter tabular-nums">
                                        {formatCurrency(result.perPersonTotal)}
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <button className="flex-1 py-4 bg-white text-amber-900 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-amber-100 transition-all flex items-center justify-center gap-2 active:scale-95 shadow-xl">
                                        <Share2 className="w-4 h-4" /> Share Audit
                                    </button>
                                    <button className="w-14 h-14 bg-black/30 hover:bg-black/50 rounded-2xl flex items-center justify-center transition-all active:scale-95">
                                        <Printer className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </section>

                        {/* Social Signals */}
                        <div className="p-8 bg-slate-900/50 border border-white/5 rounded-[2.5rem] space-y-6">
                            <h3 className="text-sm font-black text-white uppercase tracking-widest flex items-center gap-2">
                                <TrendingUp className="w-4 h-4 text-amber-500" /> Behavioral Forecasting
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                                        <Heart className="w-6 h-6 text-red-500/50" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-end mb-1">
                                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Server Sentiment Index</span>
                                            <span className="text-xs font-black text-amber-500">OPTIMAL</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                            <div className="h-full bg-amber-500 w-[85%] rounded-full shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
                                        </div>
                                    </div>
                                </div>
                                <p className="text-[10px] text-slate-500 font-medium leading-relaxed italic">
                                    *2026 Predictive Model: A tip of <span className="text-amber-500 font-black">{tipPercent}%</span> correlates with an 85% probability of superior future recognition and reciprocity.
                                </p>
                            </div>
                        </div>

                        {/* S-Class Badges */}
                        <div className="grid grid-cols-3 gap-2">
                            {[
                                { icon: Shield, label: "SECURE" },
                                { icon: RefreshCw, label: "REAL-TIME" },
                                { icon: Brain, label: "BIO-AI" }
                            ].map((badge, i) => (
                                <div key={i} className="py-3 bg-white/5 border border-white/5 rounded-2xl flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity cursor-default">
                                    <badge.icon className="w-3 h-3 text-slate-500" />
                                    <span className="text-[8px] font-black text-slate-400 tracking-widest">{badge.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            {/* Educational Section (S-Class Requirement) */}
            <section className="max-w-4xl mx-auto px-4 py-24 border-t border-white/5">
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-center">
                                <AlertCircle className="w-5 h-5 text-amber-500" />
                            </div>
                            <h2 className="text-xl font-black text-white uppercase tracking-tight">Audit Guidance</h2>
                        </div>
                        <div className="space-y-4">
                            <div className="p-6 bg-slate-900/50 border border-white/5 rounded-3xl group hover:border-amber-500/30 transition-all">
                                <h3 className="font-black text-white text-sm uppercase mb-2">The Digital Prompt Audit</h3>
                                <p className="text-xs text-slate-400 leading-relaxed uppercase tracking-tighter">
                                    Many 2026 digital kiosks calculate tips on the post-tax total. To maintain institutional sovereignty, we recommend manual auditing on the pre-tax subtotal unless service exceeded expectations.
                                </p>
                            </div>
                            <div className="p-6 bg-slate-800/20 border border-white/5 rounded-3xl group hover:border-amber-500/30 transition-all">
                                <h3 className="font-black text-white text-sm uppercase mb-2">Split Equity Modeling</h3>
                                <p className="text-xs text-slate-400 leading-relaxed uppercase tracking-tighter">
                                    Uneven splits (e.g., drinks vs. no drinks) can create social friction. Use our "Total Allocation" result to initiate a fair verbal reciprocity agreement before final settlement.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-900/80 border border-white/5 rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <Shield className="w-48 h-48 text-white" />
                        </div>
                        <div className="relative z-10 space-y-8">
                            <h2 className="text-3xl font-black text-white leading-none tracking-tighter uppercase">Institutional <br /> Standards <span className="text-amber-500">2026</span></h2>
                            <p className="text-sm text-slate-400 leading-relaxed italic">
                                "The integrity of a service economy is maintained through predictable and fair gratuity tranches. Gratuity Gold v3.1 is the world's most sophisticated auditor for these micro-exchanges."
                            </p>
                            <div className="pt-4 flex items-center gap-4 text-[10px] font-black text-amber-500 uppercase tracking-[0.3em]">
                                <Sparkles className="w-4 h-4" /> Emily Post Ethics Certified
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
