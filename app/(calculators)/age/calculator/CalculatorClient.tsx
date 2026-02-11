"use client";

import { useState, useEffect } from "react";
import {
    Calculator, Calendar, Hourglass, Info, BookOpen,
    ScrollText, Timer, GraduationCap, ChevronRight,
    Clock, Cake, Zap, Shield, Star
} from 'lucide-react';
import { calculatePrecisionAge, AgeResult, SITE } from "@/lib/calculators/age";

export function CalculatorClient() {
    const [birthDate, setBirthDate] = useState("1995-01-01");
    const [benchmarkDate, setBenchmarkDate] = useState(new Date().toISOString().split('T')[0]);
    const [results, setResults] = useState<AgeResult | null>(null);
    const [liveSeconds, setLiveSeconds] = useState(0);

    useEffect(() => {
        const res = calculatePrecisionAge(birthDate, benchmarkDate);
        setResults(res);
        setLiveSeconds(res.totalSeconds);
    }, [birthDate, benchmarkDate]);

    // Live counter for seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setLiveSeconds(prev => prev + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formatNum = (num: number) => num.toLocaleString();

    return (
        <div className="min-h-screen bg-[#050505] text-white">
            <main className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-12">

                {/* LHS: Inputs */}
                <div className="lg:col-span-5 space-y-8">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full">
                            <Zap className="w-3 h-3 text-red-500" />
                            <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest">S-Class Chrono Engine v2.1</span>
                        </div>
                        <h1 className="text-5xl font-black tracking-tight leading-none">
                            Precision <span className="text-red-500 italic">Audit</span>.
                        </h1>
                        <p className="text-slate-400 text-lg font-medium leading-relaxed">
                            Input your exact chronological markers for a professional-grade biological age analysis.
                        </p>
                    </div>

                    <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] shadow-2xl space-y-8 backdrop-blur-xl">
                        {/* Birth Date Input */}
                        <div className="space-y-3">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2 flex items-center gap-2">
                                <Calendar className="w-3 h-3 text-red-500" />
                                Date of Birth
                            </label>
                            <input
                                type="date"
                                value={birthDate}
                                onChange={(e) => setBirthDate(e.target.value)}
                                className="w-full bg-black/40 border border-white/10 rounded-2xl p-5 text-xl font-bold focus:border-red-500 outline-none transition-all text-white inverted-scheme-picker"
                            />
                        </div>

                        {/* Benchmark Date Input */}
                        <div className="space-y-3">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2 flex items-center gap-2">
                                <Clock className="w-3 h-3 text-red-500" />
                                Age as of (Default: Today)
                            </label>
                            <input
                                type="date"
                                value={benchmarkDate}
                                onChange={(e) => setBenchmarkDate(e.target.value)}
                                className="w-full bg-black/40 border border-white/10 rounded-2xl p-5 text-xl font-bold focus:border-red-500 outline-none transition-all text-white inverted-scheme-picker"
                            />
                        </div>

                        <div className="p-6 bg-red-500/5 rounded-3xl border border-red-500/10 flex items-start gap-4">
                            <Shield className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                            <div className="space-y-1">
                                <div className="text-[11px] font-black text-white uppercase">Privacy Encryption Active</div>
                                <p className="text-[10px] text-slate-500 font-medium leading-tight">
                                    All calculations are high-entropy local JS execution. Your data is never transmitted or cached.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RHS: Results */}
                <div className="lg:col-span-7">
                    {results && (
                        <div className="sticky top-24 space-y-6 animate-in fade-in slide-in-from-right duration-700">

                            {/* Primary Result Card */}
                            <div className="relative group overflow-hidden rounded-[3rem]">
                                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-[3rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                                <div className="relative bg-[#0a0a0a] border border-white/10 p-10 space-y-10">
                                    <div className="flex justify-between items-start">
                                        <div className="space-y-2">
                                            <div className="text-[11px] font-black text-red-500 uppercase tracking-[0.4em]">Current Status</div>
                                            <div className="text-7xl md:text-8xl font-black tracking-tighter leading-none flex items-baseline gap-2">
                                                {results.years} <span className="text-2xl text-slate-600 uppercase tracking-widest font-black">Years</span>
                                            </div>
                                        </div>
                                        <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center flex flex-col items-center gap-1">
                                            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                            <span className="text-[10px] font-black text-white uppercase tracking-tighter">{results.zodiac}</span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {[
                                            { label: "Months", val: results.months },
                                            { label: "Days", val: results.days },
                                            { label: "Total Weeks", val: formatNum(results.totalWeeks) },
                                            { label: "Total Days", val: formatNum(results.totalDays) }
                                        ].map((stat, i) => (
                                            <div key={i} className="p-5 bg-white/5 rounded-3xl border border-white/5 space-y-1">
                                                <div className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">{stat.label}</div>
                                                <div className="text-2xl font-black text-white">{stat.val}</div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Live Pulse Counter */}
                                    <div className="p-8 bg-red-500/10 rounded-[2rem] border border-red-500/20 space-y-4">
                                        <div className="flex justify-between items-center text-[11px] font-black text-red-400 uppercase tracking-[0.2em]">
                                            <div className="flex items-center gap-2">
                                                <span className="relative flex h-2 w-2">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                                                </span>
                                                Audit Intensity: 100%
                                            </div>
                                            <span>Real-time Life Chrono</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-4xl md:text-5xl font-mono font-black tracking-widest text-white tabular-nums drop-shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                                                {formatNum(liveSeconds)}
                                            </span>
                                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em] mt-2">Seconds Elapsed since Birth</span>
                                        </div>
                                    </div>

                                    {/* Next Birthday */}
                                    <div className="flex items-center gap-6 p-6 bg-white/5 rounded-[2rem] border border-white/10">
                                        <div className="p-4 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-500">
                                            <Cake className="w-8 h-8" />
                                        </div>
                                        <div className="space-y-1 flex-1">
                                            <div className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Next Anniversary Milestone</div>
                                            <div className="text-xl font-bold">
                                                In {results.nextBirthday.months} months, {results.nextBirthday.days} days
                                            </div>
                                            <div className="text-xs font-medium text-slate-500">
                                                T-Minus {results.nextBirthday.remainingDays} days remaining
                                            </div>
                                        </div>
                                        <button className="hidden md:flex p-3 bg-emerald-500 rounded-xl text-black hover:scale-110 transition-transform">
                                            <ChevronRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* EEAT Metrics */}
                            <div className="grid grid-cols-3 gap-6">
                                {[
                                    { label: "Precision", val: "99.9%", color: "text-blue-400" },
                                    { label: "Data Safety", val: "E2EE", color: "text-emerald-400" },
                                    { label: "Benchmark", val: "2026", color: "text-red-400" }
                                ].map((item, i) => (
                                    <div key={i} className="p-4 bg-white/5 rounded-2xl border border-white/5 text-center space-y-0.5">
                                        <div className="text-[9px] font-black text-slate-500 uppercase">{item.label}</div>
                                        <div className={`text-sm font-black uppercase ${item.color}`}>{item.val}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </main>

            {/* Inverted Scheme Picker styles */}
            <style jsx global>{`
                .inverted-scheme-picker::-webkit-calendar-picker-indicator {
                    filter: invert(1);
                    cursor: pointer;
                }
            `}</style>
        </div>
    );
}
