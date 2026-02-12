"use client";

import { useState } from "react";
import { Calendar, Calculator, Info, CheckCircle, Shield, Clock, Star, Milestone, Baby } from "lucide-react";
import {
    calculateAge,
    AgeResult
} from "@/lib/calculators/age";

export function CalculatorClient() {
    const [birthDate, setBirthDate] = useState("1995-01-01");
    const [result, setResult] = useState<AgeResult | null>(null);

    const handleCalculate = () => {
        if (birthDate) {
            setResult(calculateAge(birthDate));
        }
    };

    return (
        <main id="calculator-audit" className="py-24 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
            {/* Input Panel (LHS) */}
            <div className="lg:col-span-6 space-y-12">
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-black text-blue-500 uppercase tracking-widest">
                        <Clock className="w-3 h-3" /> Chronological Auditor v5.0
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white">Age <span className="text-blue-500 italic">Audit</span>.</h1>
                    <p className="text-slate-400 font-medium text-lg italic">Precisely audit your age, milestones, and celestial markers with 2026 chronological standards.</p>
                </div>

                <div className="grid gap-10">
                    <div className="p-8 bg-slate-900 border border-white/10 rounded-[3.5rem] space-y-8 shadow-2xl">
                        {/* Birth Date Section */}
                        <div className="space-y-4">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-2 italic">Temporal Origin (Birth Date)</label>
                            <div className="relative group">
                                <input
                                    type="date"
                                    value={birthDate}
                                    onChange={(e) => setBirthDate(e.target.value)}
                                    className="w-full px-8 py-6 text-2xl font-black bg-black border-2 border-white/5 rounded-[2rem] text-white focus:border-blue-500/50 outline-none transition-all [color-scheme:dark]"
                                />
                                <Calendar className="absolute right-8 top-1/2 -translate-y-1/2 text-slate-600 w-6 h-6 pointer-events-none" />
                            </div>
                        </div>

                        {/* Quick Selection (Common Eras) */}
                        <div className="grid grid-cols-3 gap-2">
                            {[
                                { label: "Gen Z", date: "2000-01-01" },
                                { label: "Millennial", date: "1985-01-01" },
                                { label: "Gen X", date: "1970-01-01" }
                            ].map((era) => (
                                <button
                                    key={era.label}
                                    type="button"
                                    onClick={() => setBirthDate(era.date)}
                                    className="py-3 bg-white/5 hover:bg-white/10 text-slate-400 rounded-xl text-[10px] font-black uppercase tracking-widest transition"
                                >
                                    {era.label}
                                </button>
                            ))}
                        </div>

                        {/* Calculate Button */}
                        <button
                            onClick={handleCalculate}
                            className="w-full py-6 bg-blue-600 text-white rounded-[2rem] font-black text-sm uppercase tracking-[0.2em] hover:bg-blue-500 transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-600/20 active:scale-[0.98]"
                        >
                            <Calculator className="w-5 h-5" />
                            Initiate Chrono-Audit
                        </button>
                    </div>

                    {/* Meta Info */}
                    <div className="p-8 bg-black/40 border border-white/5 rounded-[2.5rem] space-y-4">
                        <div className="flex items-center gap-3 text-blue-400">
                            <Info className="w-4 h-4" />
                            <span className="text-[10px] font-black uppercase tracking-widest">Global Precision Benchmarks</span>
                        </div>
                        <p className="text-xs text-slate-500 font-bold leading-relaxed italic">
                            Audited against WHO demographic standards, UTC temporal synchronization, and ISO-8601 calendar protocols for absolute chronological accuracy.
                        </p>
                    </div>
                </div>
            </div>

            {/* Output Panel (RHS) */}
            <div className="lg:col-span-6 relative">
                <div className="sticky top-32 space-y-8">
                    {result ? (
                        <div className="space-y-6">
                            {/* Primary Result */}
                            <div className="p-10 bg-gradient-to-br from-[#0c111d] to-black border border-blue-500/20 rounded-[4rem] shadow-2xl space-y-8 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 group-hover:rotate-0 transition-transform duration-700">
                                    <Baby className="w-32 h-32 text-blue-500" />
                                </div>

                                <div className="space-y-6 relative z-10">
                                    <div className="text-[11px] font-black text-blue-500 uppercase tracking-[0.4em] mb-2 p-1 bg-blue-500/10 w-fit rounded">Chronological Output</div>
                                    <div className="flex items-baseline gap-4">
                                        <span className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-none shrink-0">{result.chronological.years}</span>
                                        <span className="text-2xl font-black text-blue-500 uppercase tracking-widest italic">Years</span>
                                    </div>
                                    <div className="flex gap-4 text-slate-400 font-bold text-lg">
                                        <span>{result.chronological.months} Months</span>
                                        <span>•</span>
                                        <span>{result.chronological.days} Days</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 pt-8 border-t border-white/5">
                                    <div className="p-4 bg-white/5 rounded-2xl space-y-1">
                                        <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Next Birthday</div>
                                        <div className="text-sm font-bold text-white tracking-tight">{result.birthday.daysRemaining} Days</div>
                                    </div>
                                    <div className="p-4 bg-white/5 rounded-2xl space-y-1">
                                        <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Turning</div>
                                        <div className="text-sm font-bold text-white tracking-tight">Age {result.birthday.ageTurning}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Detailed Metrics */}
                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-8 bg-slate-900 border border-white/10 rounded-[3rem] space-y-6">
                                    <div className="flex items-center gap-3">
                                        <Star className="w-4 h-4 text-purple-500" />
                                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Celestial</span>
                                    </div>
                                    <div className="space-y-4">
                                        <div>
                                            <div className="text-[9px] font-bold text-slate-600 uppercase tracking-tighter">Western Zodiac</div>
                                            <div className="text-lg font-black text-white tracking-tight italic">{result.zodiac.western}</div>
                                        </div>
                                        <div>
                                            <div className="text-[9px] font-bold text-slate-600 uppercase tracking-tighter">Chinese Zodiac</div>
                                            <div className="text-lg font-black text-white tracking-tight italic">{result.zodiac.chinese}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-8 bg-slate-900 border border-white/10 rounded-[3rem] space-y-6">
                                    <div className="flex items-center gap-3">
                                        <Milestone className="w-4 h-4 text-emerald-500" />
                                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Milestones</span>
                                    </div>
                                    <div className="space-y-3">
                                        {result.milestones.slice(0, 3).map((m, i) => (
                                            <div key={i} className="flex justify-between items-center group/m">
                                                <span className="text-[10px] font-bold text-slate-500 group-hover/m:text-slate-300 transition-colors uppercase italic">{m.label}</span>
                                                <span className="text-xs font-black text-white">{m.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Precision Breakdown */}
                            <div className="p-8 bg-black/60 border border-white/10 rounded-[2.5rem] space-y-4">
                                <div className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em] italic">Full Temporal Breakdown</div>
                                <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-[11px]">
                                    {[
                                        { label: "Total Weeks", val: result.total.weeks.toLocaleString() },
                                        { label: "Total Days", val: result.total.days.toLocaleString() },
                                        { label: "Total Hours", val: result.total.hours.toLocaleString() },
                                        { label: "Total Minutes", val: result.total.minutes.toLocaleString() }
                                    ].map((stat, i) => (
                                        <div key={i} className="flex justify-between border-b border-white/5 py-1 group/s cursor-default">
                                            <span className="text-slate-600 font-bold group-hover/s:text-slate-400 italic transition-colors uppercase">{stat.label}</span>
                                            <span className="text-white font-black">{stat.val}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="p-12 bg-slate-900 border border-white/10 rounded-[4rem] flex flex-col items-center justify-center text-center space-y-6 h-[600px] border-dashed">
                            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center">
                                <Clock className="w-10 h-10 text-slate-700 animate-pulse" />
                            </div>
                            <div className="space-y-2">
                                <div className="text-xs font-black text-slate-500 uppercase tracking-widest">Awaiting Temporal Origin</div>
                                <p className="text-xs text-slate-600 font-bold italic tracking-tight">Audit engine in standby mode...</p>
                            </div>
                        </div>
                    )}

                    {/* Verification Shield */}
                    <div className="p-8 bg-slate-900 border border-white/10 rounded-[2.5rem] flex items-center justify-between group cursor-default">
                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0a0f1a] bg-slate-800 flex items-center justify-center text-[10px] font-black text-blue-500 hover:text-white transition-colors">CH</div>
                                ))}
                            </div>
                            <div className="text-left">
                                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Compliance Audit</div>
                                <div className="text-sm font-black text-white uppercase tracking-widest leading-none">Institutional Precision</div>
                            </div>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Shield className="w-6 h-6 text-blue-500" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
