"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
    Heart,
    Calendar,
    Baby,
    ArrowLeft,
    Zap,
    Info,
    Shield,
    CheckCircle2,
    RefreshCcw,
    ChevronRight,
    Landmark,
    Activity,
    Activity as Pulse,
    Sparkles,
    ClipboardList,
    Microscope,
    History as HistoryIcon
} from "lucide-react";
import {
    OVULATION_2026,
    auditFertility
} from "@/lib/calculators/ovulation";

export default function OvulationCalculatorClient() {
    // Audit State
    const [periodDate, setPeriodDate] = useState<string>(new Date().toISOString().split('T')[0]);
    const [cycleLength, setCycleLength] = useState<number>(28);
    const [lutealLength, setLutealLength] = useState<number>(14);
    const [result, setResult] = useState<any>(null);

    // Initialization & Sync
    useEffect(() => {
        handleAudit();
    }, [periodDate, cycleLength, lutealLength]);

    const handleAudit = () => {
        const date = new Date(periodDate);
        if (!isNaN(date.getTime())) {
            const audit = auditFertility(date, cycleLength, lutealLength);
            setResult(audit);
        } else {
            setResult(null);
        }
    };

    return (
        <main className="min-h-screen bg-[#020617] text-slate-200 p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                {/* Premium Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div className="space-y-2">
                        <Link
                            href="/ovulation"
                            className="inline-flex items-center gap-2 text-slate-500 hover:text-pink-400 transition-colors font-black uppercase tracking-widest text-[10px]"
                        >
                            <ArrowLeft className="w-3 h-3" /> Fertility Hub
                        </Link>
                        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                            Fertility <span className="text-pink-500 italic">Audit</span>.
                        </h1>
                        <p className="text-slate-500 font-bold text-sm tracking-tight italic">
                            Executing institutional-grade biological reconciliation via ACOG-193 protocols.
                        </p>
                    </div>
                    <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-3xl backdrop-blur-xl">
                        <div className="w-12 h-12 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
                            <Shield className="w-6 h-6 text-pink-500" />
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none">Security Protocol</p>
                            <p className="text-sm font-black text-white uppercase tracking-tighter">LOCAL-ONLY SECURE</p>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-start">
                    {/* Input Panel (LHS) */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="bg-slate-900 border border-white/5 rounded-[40px] p-8 md:p-10 shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <Pulse className="w-32 h-32 text-pink-500 animate-pulse" />
                            </div>

                            <div className="space-y-8 relative z-10">
                                {/* Last Period Input */}
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">Last Mensuration (Day 1)</label>
                                    <input
                                        type="date"
                                        value={periodDate}
                                        onChange={(e) => setPeriodDate(e.target.value)}
                                        className="w-full px-6 py-5 bg-black border border-white/5 rounded-2xl text-2xl font-black text-white focus:border-pink-500 transition-all outline-none"
                                    />
                                </div>

                                {/* Cycle Parameters */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-justify">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">Cycle Length</label>
                                        <div className="relative group">
                                            <input
                                                type="number"
                                                value={cycleLength}
                                                onChange={(e) => setCycleLength(parseInt(e.target.value) || 28)}
                                                className="w-full px-6 py-4 bg-black border border-white/5 rounded-2xl text-lg font-black text-white outline-none focus:border-pink-500"
                                            />
                                            <span className="absolute right-6 top-1/2 -translate-y-1/2 text-[10px] font-black text-slate-600 uppercase">Days</span>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">Luteal Phase</label>
                                        <div className="relative group">
                                            <input
                                                type="number"
                                                value={lutealLength}
                                                onChange={(e) => setLutealLength(parseInt(e.target.value) || 14)}
                                                className="w-full px-6 py-4 bg-black border border-white/5 rounded-2xl text-lg font-black text-white outline-none focus:border-pink-500"
                                            />
                                            <span className="absolute right-6 top-1/2 -translate-y-1/2 text-[10px] font-black text-slate-600 uppercase">Days</span>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    onClick={handleAudit}
                                    className="w-full py-6 bg-pink-600 hover:bg-pink-500 text-white rounded-[2rem] font-black text-sm uppercase tracking-[0.3em] shadow-2xl shadow-pink-600/20 transition-all flex items-center justify-center gap-3 active:scale-95 group"
                                >
                                    <RefreshCcw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-700" />
                                    Synchronize Bio-Clock
                                </button>
                            </div>
                        </div>

                        {/* Audit Verification */}
                        <div className="p-8 bg-black/40 border border-white/5 rounded-[2.5rem] flex items-center justify-between group">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-pink-500/10 border border-pink-500/20 rounded-2xl">
                                    <Microscope className="w-5 h-5 text-pink-500" />
                                </div>
                                <div className="text-left">
                                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Clinical Core</div>
                                    <div className="text-sm font-black text-white uppercase tracking-widest leading-none">ACOG-ALIGNED LOGIC</div>
                                </div>
                            </div>
                            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                        </div>
                    </div>

                    {/* Results Panel (RHS) */}
                    <div className="lg:col-span-7 space-y-8">
                        {result !== null ? (
                            <>
                                {/* Primary Fertile Window Output */}
                                <div className="bg-gradient-to-br from-pink-600 to-rose-700 rounded-[4rem] p-10 shadow-2xl shadow-pink-600/20 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:scale-110 transition-transform duration-700">
                                        <Sparkles className="w-20 h-20 text-white" />
                                    </div>
                                    <div className="text-white/60 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Prime Fertile Window Projection</div>
                                    <div className="flex flex-col mb-6">
                                        <div className="flex items-baseline gap-4 mb-2">
                                            <span className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                                                {result.fertileStart.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                            </span>
                                            <span className="text-2xl font-black text-white/50 uppercase italic group-hover:translate-x-2 transition-transform">TO</span>
                                            <span className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                                                {result.fertileEnd.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                            </span>
                                        </div>
                                        <span className="text-sm font-black text-white/50 uppercase tracking-widest italic">6-Day Conception Window Active</span>
                                    </div>
                                    <div className="flex items-center gap-3 bg-black/20 w-fit px-5 py-3 rounded-2xl backdrop-blur-md border border-white/10">
                                        <Calendar className="w-4 h-4 text-white" />
                                        <span className="text-xs font-black text-white uppercase tracking-widest">Ovulation: {result.ovulationDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</span>
                                    </div>
                                </div>

                                {/* Phasic Comparison Matrix */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-slate-900 border border-white/5 rounded-[4rem] p-10 flex flex-col justify-center relative overflow-hidden">
                                        <div className="absolute -bottom-4 -right-4 opacity-5">
                                            <Baby className="w-48 h-48 text-pink-500" />
                                        </div>
                                        <div className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] mb-8">Conception Potential</div>
                                        <div className="space-y-6 relative z-10">
                                            <div className="flex justify-between items-center border-b border-white/5 pb-4">
                                                <div className="flex items-center gap-3">
                                                    <Sparkles className="w-4 h-4 text-pink-500" />
                                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Audit Status</span>
                                                </div>
                                                <span className="text-xl font-black text-pink-500 uppercase italic">Peak Active</span>
                                            </div>
                                            <div className="flex items-center gap-2 pt-2 text-pink-500/80 italic font-medium text-[11px]">
                                                <Info className="w-3 h-3" /> Gamete Longevity Reconciliation Active
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-slate-900 border border-white/5 rounded-[4rem] p-10 flex flex-col justify-center relative overflow-hidden">
                                        <div className="absolute -bottom-4 -right-4 opacity-5">
                                            <HistoryIcon className="w-48 h-48 text-pink-500" />
                                        </div>
                                        <div className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] mb-8">Next Cycle Anchor</div>
                                        <div className="space-y-4 relative z-10">
                                            <div className="flex justify-between items-center text-[11px]">
                                                <span className="text-slate-500 uppercase font-bold tracking-widest">Next Period</span>
                                                <span className="text-white font-black">{result.nextPeriodDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                                            </div>
                                            <div className="flex justify-between items-center text-[11px]">
                                                <span className="text-slate-500 uppercase font-bold tracking-widest">Luteal Phase</span>
                                                <span className="text-pink-400 font-black">{lutealLength} DAYS</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Contextual Intelligence Section */}
                                <div className="p-10 bg-slate-950 border border-white/5 rounded-[3rem] relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 text-justify">
                                        <Landmark className="w-48 h-48 text-pink-500" />
                                    </div>
                                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                                        <div className="space-y-6">
                                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-500 text-[10px] font-black uppercase tracking-widest">
                                                Reproductive Strategy
                                            </div>
                                            <h3 className="text-3xl font-black text-white leading-tight">
                                                Biological <br /> <span className="text-pink-500">Synchronization.</span>
                                            </h3>
                                            <p className="text-slate-400 text-sm leading-relaxed font-medium italic">
                                                "This audit reflects a clinical baseline. For maximum conception probability, reconcile these dates with LH surge detection and BBT monitoring protocols."
                                            </p>
                                        </div>
                                        <div className="grid gap-3">
                                            {[
                                                { label: "Clinical Protocol", val: "ACOG-193" },
                                                { label: "Phasic Model", val: "Backward-Luteal" },
                                                { label: "Data Sovereignty", val: "Local Device" }
                                            ].map((pred, i) => (
                                                <div key={i} className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/10 group hover:border-pink-500/30 transition-all">
                                                    <span className="text-[10px] font-bold text-slate-500 uppercase italic">{pred.label}</span>
                                                    <span className="text-xs font-black text-white group-hover:text-pink-400 transition-colors uppercase">{pred.val}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="h-full min-h-[600px] border-2 border-dashed border-white/10 rounded-[4rem] flex flex-col items-center justify-center text-center p-12 space-y-6">
                                <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                    <RefreshCcw className="w-10 h-10 text-slate-700 animate-spin-slow" />
                                </div>
                                <div className="space-y-2">
                                    <p className="text-xs font-black text-slate-500 uppercase tracking-[0.4em]">Engine in Standby</p>
                                    <p className="text-sm text-slate-600 font-bold italic tracking-tight">Bio-parameters pending initialization...</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
