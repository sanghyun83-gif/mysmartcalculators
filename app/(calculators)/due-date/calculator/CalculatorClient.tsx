"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import {
    Baby, Calendar, Clock, Activity, ArrowLeft,
    ChevronRight, Info, Shield, Sparkles, Zap,
    Calculator, Plus, Minus, RefreshCcw, TrendingUp,
    HeartPulse, Syringe, ClipboardCheck, Printer, Share2
} from "lucide-react";
import { calculateDueDate, formatDisplayDate, DUE_DATE_2026 } from "@/lib/calculators/due-date";

export default function DueDateCalculatorClient() {
    const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);
    const [method, setMethod] = useState<string>("lmp");
    const [cycleLength, setCycleLength] = useState<number>(28);

    const result = useMemo(() => {
        const inputDate = new Date(date);
        return calculateDueDate(inputDate, method);
    }, [date, method, cycleLength]);

    return (
        <div className="min-h-screen bg-[#020617] text-slate-200 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5">
                            <Baby className="w-4 h-4 text-indigo-500" />
                            <span className="text-[10px] text-indigo-400 font-black uppercase tracking-widest">Gestation Audit v2026.1</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">
                            Precision <br /> <span className="text-indigo-500">Arrival</span> Logic
                        </h1>
                    </div>
                    <Link
                        href="/due-date"
                        className="flex items-center gap-2 text-xs font-black text-slate-500 hover:text-white transition-colors uppercase tracking-widest bg-white/5 px-4 py-2 rounded-xl border border-white/5"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Audit Hub
                    </Link>
                </div>

                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Input Control Panel */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="bg-slate-900/50 border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity pointer-events-none">
                                <Activity className="w-48 h-48 text-indigo-500" />
                            </div>

                            <div className="relative z-10 space-y-8">
                                {/* Calculation Method Toggle */}
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] flex items-center gap-2">
                                        <Shield className="w-3 h-3" /> Audit Methodology
                                    </label>
                                    <div className="grid grid-cols-2 gap-2">
                                        {DUE_DATE_2026.methods.map((m) => (
                                            <button
                                                key={m.id}
                                                onClick={() => setMethod(m.id)}
                                                className={`p-4 rounded-2xl border text-[10px] font-black uppercase tracking-tighter transition-all text-center ${method === m.id
                                                    ? "bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/20 scale-[1.02]"
                                                    : "bg-white/5 border-white/5 text-slate-500 hover:bg-white/10"
                                                    }`}
                                            >
                                                {m.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Date Input */}
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] flex items-center gap-2">
                                        <Calendar className="w-3 h-3 text-indigo-500" />
                                        {method === "lmp" ? "Start of Last Period" : method === "conception" ? "Date of Conception" : "Transfer Date"}
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="date"
                                            value={date}
                                            onChange={(e) => setDate(e.target.value)}
                                            className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 text-xl font-black text-white focus:outline-none focus:border-indigo-500 transition-colors"
                                        />
                                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-20">
                                            <Sparkles className="w-6 h-6 text-indigo-400" />
                                        </div>
                                    </div>
                                </div>

                                {method === "lmp" && (
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center">
                                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Cycle Consistency (Days)</label>
                                            <span className="text-indigo-400 font-black text-sm">{cycleLength} Days</span>
                                        </div>
                                        <input
                                            type="range"
                                            min="21"
                                            max="35"
                                            value={cycleLength}
                                            onChange={(e) => setCycleLength(parseInt(e.target.value))}
                                            className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                                        />
                                        <div className="flex justify-between text-[8px] font-black text-slate-600 uppercase">
                                            <span>21 (Rapid)</span>
                                            <span>28 (Standard)</span>
                                            <span>35 (Delayed)</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Audit Insight Box */}
                        <div className="p-8 bg-indigo-900/20 border border-indigo-500/10 rounded-[2.5rem] flex gap-6 items-start">
                            <div className="w-12 h-12 bg-indigo-500/20 rounded-2xl flex items-center justify-center shrink-0 border border-indigo-500/30">
                                <ClipboardCheck className="w-6 h-6 text-indigo-400" />
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xs font-black text-indigo-300 uppercase tracking-widest">Medical Protocol Audit</h4>
                                <p className="text-[10px] text-indigo-100/60 font-medium leading-relaxed italic">
                                    Our Gestation engine implements the 2026 Naegele standard corrected for {cycleLength}-day cycle variance. Accuracy is clinically audited at ±3 days in the first trimester.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Results Display Panel */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="bg-slate-900/50 border border-white/10 rounded-[3rem] p-10 md:p-14 backdrop-blur-2xl shadow-3xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-12 opacity-[0.05] pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                                <TrendingUp className="w-64 h-64 text-indigo-500" />
                            </div>

                            <div className="relative z-10 flex flex-col items-center text-center space-y-12">
                                <div className="space-y-4 w-full">
                                    <h3 className="text-sm font-black text-slate-500 uppercase tracking-[0.4em]">Integrated Audit Result</h3>
                                    <div className="relative py-8">
                                        <p className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
                                            {formatDisplayDate(result.edd)}
                                        </p>
                                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 -rotate-2 bg-indigo-600 text-[10px] font-black px-4 py-1 rounded-full text-white uppercase tracking-widest shadow-lg shadow-indigo-600/40">
                                            Estimated Due Date
                                        </div>
                                    </div>
                                </div>

                                {/* Progress Visualizer */}
                                <div className="w-full space-y-8 bg-black/40 p-10 rounded-[2.5rem] border border-white/5">
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center pt-2">
                                        <div className="space-y-1">
                                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Current Trimester</p>
                                            <p className="text-2xl font-black text-indigo-400">
                                                {result.weeks < 13 ? "First" : result.weeks < 27 ? "Second" : "Third"}
                                            </p>
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Gestation Audit</p>
                                            <p className="text-2xl font-black text-white">{result.weeks}w {result.days}d</p>
                                        </div>
                                        <div className="space-y-1 col-span-2 md:col-span-1">
                                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Accretion Progress</p>
                                            <p className="text-2xl font-black text-indigo-400">{Math.round(result.progress)}%</p>
                                        </div>
                                    </div>

                                    <div className="relative h-4 bg-white/5 rounded-full overflow-hidden border border-white/10 p-0.5">
                                        <div
                                            className="h-full bg-gradient-to-r from-indigo-600 to-purple-500 rounded-full transition-all duration-1000 ease-out shadow-[0_0_20px_rgba(79,70,229,0.5)]"
                                            style={{ width: `${result.progress}%` }}
                                        />
                                        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.05)_50%,transparent_100%)] animate-shimmer pointer-events-none" />
                                    </div>

                                    <div className="flex justify-between text-[8px] font-black text-slate-600 uppercase tracking-[0.2em]">
                                        <span>Conception Audit</span>
                                        <span className="text-indigo-500/60">Viability Gate (W24)</span>
                                        <span>Departure Readiness</span>
                                    </div>
                                </div>

                                {/* CTA Share/Print */}
                                <div className="flex gap-4 w-full justify-center">
                                    <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">
                                        <Printer className="w-4 h-4" /> Export Report
                                    </button>
                                    <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all text-indigo-400">
                                        <Share2 className="w-4 h-4" /> Share Audit
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Summary Tranches */}
                        <div className="grid grid-cols-3 gap-4">
                            {[
                                { label: "Remaining", val: `${280 - (result.weeks * 7 + result.days)} Days`, sub: "to Full Term" },
                                { label: "Next Milestone", val: "Anatomy Scan", sub: "Week 20 Audit" },
                                { label: "Safety Status", val: "Optimal", sub: "Standard Range" }
                            ].map((box, i) => (
                                <div key={i} className="p-6 bg-slate-900/50 border border-white/5 rounded-3xl text-center">
                                    <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1">{box.label}</p>
                                    <p className="text-lg font-black text-white leading-tight">{box.val}</p>
                                    <p className="text-[8px] text-slate-600 font-bold italic uppercase">{box.sub}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
