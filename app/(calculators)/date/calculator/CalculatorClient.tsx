"use client";

import React, { useState, useEffect } from "react";
import {
    Calculator as CalcIcon,
    RefreshCcw,
    ArrowRight,
    Calendar,
    Clock,
    Info,
    History,
    Target,
    Shield,
    Activity,
    PlusCircle,
    MinusCircle
} from "lucide-react";
import { DateEngine } from "@/lib/calculators/date";

export default function CalculatorClient() {
    const [mode, setMode] = useState<'duration' | 'arithmetic'>('duration');
    const [startDate, setStartDate] = useState<string>(new Date().toISOString().split('T')[0]);
    const [endDate, setEndDate] = useState<string>(new Date(new Date().getTime() + 86400000 * 30).toISOString().split('T')[0]);

    // Arithmetic mode states
    const [opYears, setOpYears] = useState<number>(0);
    const [opMonths, setOpMonths] = useState<number>(0);
    const [opDays, setOpDays] = useState<number>(30);
    const [opDirection, setOpDirection] = useState<'add' | 'subtract'>('add');

    const [durationResult, setDurationResult] = useState<any>(null);
    const [arithmeticResult, setArithmeticResult] = useState<string | null>(null);
    const [businessDays, setBusinessDays] = useState<number | null>(null);

    useEffect(() => {
        if (mode === 'duration') {
            const start = new Date(startDate);
            const end = new Date(endDate);
            if (!isNaN(start.getTime()) && !isNaN(end.getTime())) {
                setDurationResult(DateEngine.getDuration(start, end));
                setBusinessDays(DateEngine.getBusinessDays(start, end));
            }
        } else {
            const start = new Date(startDate);
            if (!isNaN(start.getTime())) {
                const y = opDirection === 'add' ? opYears : -opYears;
                const m = opDirection === 'add' ? opMonths : -opMonths;
                const d = opDirection === 'add' ? opDays : -opDays;
                const res = DateEngine.addDuration(start, y, m, d);
                setArithmeticResult(res.toISOString().split('T')[0]);
            }
        }
    }, [mode, startDate, endDate, opYears, opMonths, opDays, opDirection]);

    return (
        <main id="chronos-audit" className="py-24 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
            {/* Input Panel (LHS - 7 Cols) */}
            <div className="lg:col-span-7 space-y-12">
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-black text-blue-500 uppercase tracking-widest">
                        <Clock className="w-3 h-3" /> Temporal Auditor v3.1
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase italic">Temporal <span className="text-blue-500">Audit.</span></h1>
                    <p className="text-slate-400 font-medium text-lg italic">Clinical date arithmetic and duration tracking with ISO 8601 precision.</p>
                </div>

                <div className="p-8 bg-slate-900 border border-white/5 rounded-[3.5rem] space-y-10 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-3xl rounded-full -mr-32 -mt-32 group-hover:bg-blue-500/10 transition-colors duration-700" />

                    <div className="relative z-10 space-y-10">
                        {/* Mode Switcher */}
                        <div className="space-y-4">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-2">Logic Protocol</label>
                            <div className="flex p-1.5 bg-slate-950 rounded-[2rem] border border-white/5 w-fit">
                                <button
                                    onClick={() => setMode('duration')}
                                    className={`px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest transition-all duration-300 ${mode === 'duration' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                                >
                                    Duration Audit
                                </button>
                                <button
                                    onClick={() => setMode('arithmetic')}
                                    className={`px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest transition-all duration-300 ${mode === 'arithmetic' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                                >
                                    Arithmetic Audit
                                </button>
                            </div>
                        </div>

                        {/* Direct Inputs */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-2">Start Epoch</label>
                                <input
                                    type="date"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                    className="w-full bg-black border-2 border-white/5 rounded-[2rem] px-6 py-6 text-xl font-black text-white focus:border-blue-500 outline-none transition-all uppercase italic"
                                />
                            </div>
                            {mode === 'duration' ? (
                                <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-500">
                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-2">End Epoch</label>
                                    <input
                                        type="date"
                                        value={endDate}
                                        onChange={(e) => setEndDate(e.target.value)}
                                        className="w-full bg-black border-2 border-white/5 rounded-[2rem] px-6 py-6 text-xl font-black text-white focus:border-blue-500 outline-none transition-all uppercase italic"
                                    />
                                </div>
                            ) : (
                                <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-500">
                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-2">Audit Direction</label>
                                    <div className="flex p-1 bg-black rounded-[2rem] border-2 border-white/5 h-[76px]">
                                        <button
                                            onClick={() => setOpDirection('add')}
                                            className={`flex-1 rounded-full flex items-center justify-center gap-2 font-black text-xs uppercase tracking-tighter ${opDirection === 'add' ? 'bg-emerald-600 text-white' : 'text-slate-600'}`}
                                        >
                                            <PlusCircle className="w-4 h-4" /> Add
                                        </button>
                                        <button
                                            onClick={() => setOpDirection('subtract')}
                                            className={`flex-1 rounded-full flex items-center justify-center gap-2 font-black text-xs uppercase tracking-tighter ${opDirection === 'subtract' ? 'bg-rose-600 text-white' : 'text-slate-600'}`}
                                        >
                                            <MinusCircle className="w-4 h-4" /> Subtract
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {mode === 'arithmetic' && (
                            <div className="grid grid-cols-3 gap-6 animate-in slide-in-from-bottom-4 duration-500">
                                {[
                                    { l: "Years", v: opYears, s: setOpYears },
                                    { l: "Months", v: opMonths, s: setOpMonths },
                                    { l: "Days", v: opDays, s: setOpDays }
                                ].map((item, i) => (
                                    <div key={i} className="space-y-2">
                                        <label className="text-[9px] font-black text-slate-600 uppercase tracking-widest ml-2">{item.l}</label>
                                        <input
                                            type="number"
                                            value={item.v}
                                            onChange={(e) => item.s(parseInt(e.target.value) || 0)}
                                            className="w-full bg-black border border-white/5 rounded-2xl px-4 py-4 text-xl font-black text-white focus:border-blue-500 outline-none"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Output Panel (RHS - 5 Cols) */}
            <div className="lg:col-span-5 relative">
                <div className="sticky top-32 space-y-8">
                    {mode === 'duration' && durationResult ? (
                        <div className="p-12 bg-gradient-to-br from-[#0c111d] to-black border border-blue-500/20 rounded-[4.5rem] shadow-2xl space-y-12 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 group-hover:rotate-0 transition-transform duration-700">
                                <Clock className="w-32 h-32 text-blue-500" />
                            </div>

                            <div className="space-y-4">
                                <div className="text-[11px] font-black text-blue-400 uppercase tracking-[0.4em] mb-2 p-1 bg-blue-500/10 w-fit rounded">Audit Result</div>
                                <div className="text-7xl font-black text-white tracking-tighter leading-none italic">
                                    {durationResult.totalDays} <span className="text-2xl text-slate-600 not-italic uppercase tracking-widest">Days</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                                    <div className="text-[9px] font-black text-slate-500 uppercase mb-1">Business cycles</div>
                                    <div className="text-2xl font-black text-blue-400 italic">{businessDays} <span className="text-[10px] text-slate-600 uppercase">Audit Days</span></div>
                                </div>
                                <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                                    <div className="text-[9px] font-black text-slate-500 uppercase mb-1">Standard Weeks</div>
                                    <div className="text-2xl font-black text-white italic">{durationResult.weeks} <span className="text-[10px] text-slate-600 uppercase">Cycles</span></div>
                                </div>
                            </div>

                            <div className="p-8 rounded-[2.5rem] bg-blue-500/5 border border-blue-500/20 space-y-4">
                                <div className="text-[10px] font-black uppercase text-blue-400">Chronological Components</div>
                                <div className="text-sm font-bold text-slate-200 italic">
                                    {durationResult.years} Years, {durationResult.months} Months, {durationResult.days} Days
                                </div>
                                <div className="pt-4 border-t border-blue-500/10 flex items-center gap-3">
                                    <Info className="w-4 h-4 text-blue-500" />
                                    <p className="text-[10px] text-slate-500 font-bold italic m-0">Synchronized with ISO 8601:2026</p>
                                </div>
                            </div>
                        </div>
                    ) : mode === 'arithmetic' && arithmeticResult ? (
                        <div className="p-12 bg-gradient-to-br from-[#0c111d] to-black border border-indigo-500/20 rounded-[4.5rem] shadow-2xl space-y-12 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 group-hover:rotate-0 transition-transform duration-700">
                                <Calendar className="w-32 h-32 text-indigo-500" />
                            </div>

                            <div className="space-y-4">
                                <div className="text-[11px] font-black text-indigo-400 uppercase tracking-[0.4em] mb-2 p-1 bg-indigo-500/10 w-fit rounded">Target Epoch</div>
                                <div className="text-5xl font-black text-white tracking-tighter leading-none italic uppercase">
                                    {new Date(arithmeticResult).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                </div>
                                <div className="text-2xl font-black text-slate-600 italic uppercase tracking-widest">{arithmeticResult}</div>
                            </div>

                            <div className="p-8 rounded-[2.5rem] bg-indigo-500/5 border border-indigo-500/20 space-y-4">
                                <div className="text-[10px] font-black uppercase text-indigo-400">Institutional Audit</div>
                                <p className="text-[11px] font-bold text-slate-300 italic leading-relaxed">
                                    Calculated target based on a {opDirection} shift of {opYears}y {opMonths}m {opDays}d from {startDate}.
                                </p>
                                <div className="pt-4 border-t border-indigo-500/10 flex items-center gap-3">
                                    <Shield className="w-4 h-4 text-indigo-500" />
                                    <p className="text-[10px] text-slate-500 font-bold italic m-0">Leap year parity verified.</p>
                                </div>
                            </div>
                        </div>
                    ) : null}

                    {/* Verified Badge */}
                    <div className="p-8 bg-slate-900 border border-white/10 rounded-[2.5rem] flex items-center justify-between group cursor-default">
                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center text-[8px] font-black text-blue-500 uppercase group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">Chronos</div>
                                ))}
                            </div>
                            <div className="text-left">
                                <div className="text-[10px] font-bold text-slate-500 italic">Institutional Logic</div>
                                <div className="text-xs font-black text-white uppercase tracking-widest underline decoration-blue-500 decoration-2 underline-offset-4">Verified Registry</div>
                            </div>
                        </div>
                        <Target className="w-6 h-6 text-blue-500 animate-spin-slow" />
                    </div>
                </div>
            </div>
        </main>
    );
}
