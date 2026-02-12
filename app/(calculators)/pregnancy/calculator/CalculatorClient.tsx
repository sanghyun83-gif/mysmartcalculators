"use client";

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import {
    Calendar,
    Baby,
    Clock,
    Heart,
    ChevronDown,
    ChevronUp,
    Info,
    ArrowLeft,
    Zap,
    Scale,
    Activity,
    Milestone,
    Sparkles,
    CheckCircle2
} from 'lucide-react';
import { calculatePregnancy, PregnancyResult, PREGNANCY_2026 } from '@/lib/calculators/pregnancy';

type CalculationMethod = 'lmp' | 'conception' | 'ivf_3d' | 'ivf_5d' | 'ultrasound';

export default function PregnancyCalculatorClient() {
    const [method, setMethod] = useState<CalculationMethod>('lmp');
    const [date, setDate] = useState<string>("2026-01-01"); // Safe default for SSR
    const [cycleLength, setCycleLength] = useState<number>(28);
    const [results, setResults] = useState<PregnancyResult | null>(null);

    // Initial calculation and date sync
    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        setDate(today);

        const res = calculatePregnancy({
            method,
            date: new Date(today),
            cycleLength
        });
        setResults(res);
    }, []);

    const handleCalculate = () => {
        const res = calculatePregnancy({
            method,
            date: new Date(date),
            cycleLength
        });
        setResults(res);
    };

    const formatDate = (d: Date) => {
        return d.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });
    };

    return (
        <div className="min-h-screen bg-[#020617] text-slate-200 p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
                {/* Header Navigation */}
                <div className="flex items-center justify-between mb-8">
                    <Link
                        href="/pregnancy"
                        className="flex items-center gap-2 text-slate-400 hover:text-pink-400 transition-colors font-bold uppercase tracking-widest text-xs"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to Hub</span>
                    </Link>
                    <div className="px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-[10px] font-black uppercase tracking-widest">
                        S-Class Precision Engine
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Input Panel */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="bg-slate-900/50 border border-white/5 rounded-[32px] p-8 backdrop-blur-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/5 blur-[50px] rounded-full group-hover:bg-pink-500/10 transition-all" />

                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-pink-500/10 rounded-2xl border border-pink-500/20">
                                    <Baby className="w-6 h-6 text-pink-400" />
                                </div>
                                <div>
                                    <h1 className="text-2xl font-black text-white tracking-tight">Audit Due Date</h1>
                                    <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Clinical Parameters 2026</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                {/* Calculation Method */}
                                <div className="space-y-3">
                                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Calculation Method</label>
                                    <select
                                        value={method}
                                        onChange={(e) => setMethod(e.target.value as CalculationMethod)}
                                        className="w-full bg-slate-950 border border-white/10 rounded-2xl px-5 py-4 text-white focus:ring-2 focus:ring-pink-500/50 transition-all outline-none appearance-none cursor-pointer font-bold"
                                    >
                                        <option value="lmp">Last Menstrual Period (LMP)</option>
                                        <option value="conception">Conception Date</option>
                                        <option value="ivf_3d">IVF (Day 3 Transfer)</option>
                                        <option value="ivf_5d">IVF (Day 5 Transfer)</option>
                                        <option value="ultrasound">Ultrasound Due Date</option>
                                    </select>
                                </div>

                                {/* Date Input */}
                                <div className="space-y-3">
                                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1 text-nowrap">
                                        {method === 'lmp' ? 'First Day of last period' :
                                            method === 'conception' ? 'Date of Conception' :
                                                method === 'ultrasound' ? 'Due Date from Ultrasound' : 'Date of Transfer'}
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="date"
                                            value={date}
                                            onChange={(e) => setDate(e.target.value)}
                                            className="w-full bg-slate-950 border border-white/10 rounded-2xl px-5 py-4 text-white focus:ring-2 focus:ring-pink-500/50 transition-all outline-none font-bold [color-scheme:dark]"
                                        />
                                    </div>
                                </div>

                                {/* Cycle Length (only for LMP) */}
                                {method === 'lmp' && (
                                    <div className="space-y-3">
                                        <div className="flex justify-between">
                                            <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1 text-nowrap">Average Cycle Length</label>
                                            <span className="text-xs font-black text-pink-400">{cycleLength} Days</span>
                                        </div>
                                        <input
                                            type="range"
                                            min="20"
                                            max="45"
                                            value={cycleLength}
                                            onChange={(e) => setCycleLength(parseInt(e.target.value))}
                                            className="w-full accent-pink-500 h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer"
                                        />
                                        <div className="flex justify-between text-[10px] font-bold text-slate-600 px-1">
                                            <span>20</span>
                                            <span>28 (Std)</span>
                                            <span>45</span>
                                        </div>
                                    </div>
                                )}

                                <button
                                    onClick={handleCalculate}
                                    className="w-full py-5 bg-pink-600 hover:bg-pink-500 text-white font-black rounded-2xl transition-all shadow-xl shadow-pink-600/10 flex items-center justify-center gap-3 group mt-4"
                                >
                                    <span>Sync Timeline</span>
                                    <Zap className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" />
                                </button>
                            </div>
                        </div>

                        {/* Informational Card */}
                        <div className="p-8 bg-slate-900/30 border border-white/5 rounded-[32px]">
                            <h3 className="text-white font-bold flex items-center gap-2 mb-4">
                                <Info className="w-4 h-4 text-pink-400" />
                                2026 Clinical Logic
                            </h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                Our calculator utilizes the **Modified Naegele's Rule** for LMP and **ACOG 2026** protocols for IVF and conception-based dating. Precision is calculated to with sub-atomic synchronization with fetal development windows.
                            </p>
                        </div>
                    </div>

                    {/* Results Panel */}
                    <div className="lg:col-span-7 space-y-8">
                        {results && (
                            <>
                                {/* Main Result Header */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-gradient-to-br from-pink-600 to-rose-700 rounded-[40px] p-10 shadow-2xl shadow-pink-600/20 relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 p-4">
                                            <Sparkles className="w-8 h-8 text-white/20 animate-pulse" />
                                        </div>
                                        <div className="text-white/60 text-xs font-black uppercase tracking-[0.3em] mb-2">Estimated Due Date</div>
                                        <div className="text-5xl font-black text-white tracking-tighter mb-4">
                                            {formatDate(results.edd)}
                                        </div>
                                        <div className="flex items-center gap-2 text-white/80 font-bold bg-white/10 w-fit px-4 py-2 rounded-full backdrop-blur-md">
                                            <Calendar className="w-4 h-4" />
                                            <span>{results.daysRemaining} Days to Arrival</span>
                                        </div>
                                    </div>

                                    <div className="bg-slate-900/50 border border-white/5 rounded-[40px] p-10 flex flex-col justify-center">
                                        <div className="text-slate-500 text-xs font-black uppercase tracking-[0.3em] mb-4">Current Progress</div>
                                        <div className="flex items-end gap-3 mb-6">
                                            <div className="text-6xl font-black text-white leading-none tracking-tighter">
                                                {results.currentWeek}
                                            </div>
                                            <div className="text-xl font-bold text-slate-400 pb-1 tracking-tight">
                                                Weeks, {results.currentDays} Days
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="h-4 bg-slate-950 rounded-full overflow-hidden border border-white/5 p-1">
                                                <div
                                                    className="h-full bg-gradient-to-r from-pink-500 to-rose-400 rounded-full transition-all duration-1000"
                                                    style={{ width: `${results.progressPercent}%` }}
                                                />
                                            </div>
                                            <div className="flex justify-between text-[10px] font-black text-slate-600 uppercase tracking-widest px-1">
                                                <span>Conception</span>
                                                <span className="text-pink-500/50">{results.progressPercent.toFixed(1)}% Complete</span>
                                                <span>Arrival</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Milestone & Metadata Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Milestone Card */}
                                    <div className="p-8 bg-slate-900 border border-white/5 rounded-[32px] hover:border-pink-500/30 transition-all group">
                                        <div className="flex items-center gap-3 mb-6 text-pink-400">
                                            <Milestone className="w-5 h-5" />
                                            <span className="text-xs font-black uppercase tracking-widest">Active Milestone</span>
                                        </div>
                                        <p className="text-xl font-bold text-white leading-tight mb-4 group-hover:text-pink-400 transition-colors">
                                            "{results.milestone}"
                                        </p>
                                        <div className="text-slate-500 text-sm font-medium">
                                            Institutional benchmark for Week {results.currentWeek}.
                                        </div>
                                    </div>

                                    {/* Trimester/Metadata Grid */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-6 bg-slate-900/40 border border-white/5 rounded-2xl">
                                            <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2">Trimester</div>
                                            <div className="text-2xl font-black text-white">{results.trimester}st</div>
                                            <div className="text-[10px] font-bold text-pink-500 uppercase mt-1">Institutional Phase</div>
                                        </div>
                                        <div className="p-6 bg-slate-900/40 border border-white/5 rounded-2xl">
                                            <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2">Zodiac Sign</div>
                                            <div className="text-2xl font-black text-white">{results.zodiacSign}</div>
                                            <div className="text-[10px] font-bold text-indigo-400 uppercase mt-1">Arrival Signal</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Concept Discovery Section */}
                                <div className="p-10 bg-slate-950/50 border border-white/5 rounded-[40px] relative overflow-hidden">
                                    <div className="absolute bottom-0 right-0 opacity-10">
                                        <Heart className="w-48 h-48 text-pink-500 translate-x-12 translate-y-12" />
                                    </div>
                                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                                        <div>
                                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-[10px] font-black uppercase tracking-widest mb-6 text-nowrap">
                                                Chronological Origin
                                            </div>
                                            <h3 className="text-3xl font-black text-white mb-6">Conception Window Discovery</h3>
                                            <p className="text-slate-400 leading-relaxed font-medium">
                                                Based on your current timeline, the estimated date of biological conception was **{formatDate(results.conceptionDate)}**. This window marks the initialization of the genetic algorithm.
                                            </p>
                                        </div>
                                        <div className="space-y-4">
                                            {[
                                                { label: "Heartbeat Window", date: "6-7 Weeks" },
                                                { label: "Gender Reveal", date: "16-20 Weeks" },
                                                { label: "Age of Viability", date: "24 Weeks" }
                                            ].map((m, i) => (
                                                <div key={i} className="flex justify-between items-center p-4 bg-slate-900/80 border border-white/5 rounded-2xl">
                                                    <span className="text-sm font-bold text-slate-400">{m.label}</span>
                                                    <span className="text-sm font-black text-white">{m.date}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>

                {/* Advanced Comparison Table */}
                <div className="mt-16">
                    <div className="flex items-center gap-3 mb-8">
                        <Scale className="w-6 h-6 text-pink-500" />
                        <h2 className="text-2xl font-black text-white tracking-tight">Gestation Comparison Tranches</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: "Standard (Full Term)", range: "39w 0d - 40w 6d", icon: CheckCircle2, status: "Optimal" },
                            { title: "Early Term", range: "37w 0d - 38w 6d", icon: Clock, status: "Normal" },
                            { title: "Late Term", range: "41w 0d - 41w 6d", icon: Activity, status: "Monitor" }
                        ].map((item, i) => (
                            <div key={i} className="p-8 bg-slate-900/30 border border-white/5 rounded-3xl hover:bg-slate-900/50 transition-colors">
                                <div className="flex items-center justify-between mb-6">
                                    <item.icon className="w-8 h-8 text-pink-400" />
                                    <span className="text-[10px] font-black bg-slate-950 px-2 py-1 rounded text-slate-500 uppercase tracking-widest">{item.status}</span>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                <div className="text-2xl font-black text-pink-500 tracking-tighter">{item.range}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
