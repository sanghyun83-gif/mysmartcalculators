"use client";

import React, { useState, useEffect } from "react";
import {
    Calculator as CalcIcon,
    RefreshCcw,
    ChevronRight,
    Info,
    User,
    Target,
    Scale,
    Activity,
    Ruler,
    Shield
} from "lucide-react";
import { calculateBodyFat, getBodyFatCategory } from "@/lib/calculators/body-fat";

export default function CalculatorClient() {
    const [gender, setGender] = useState<'male' | 'female'>('male');
    const [height, setHeight] = useState<string>("175");
    const [waist, setWaist] = useState<string>("85");
    const [neck, setNeck] = useState<string>("38");
    const [hip, setHip] = useState<string>("95");
    const [result, setResult] = useState<number | null>(null);

    const calculate = () => {
        const h = parseFloat(height);
        const w = parseFloat(waist);
        const n = parseFloat(neck);
        const hp = gender === 'female' ? parseFloat(hip) : undefined;

        if (h > 0 && w > 0 && n > 0 && (gender === 'male' || (hp && hp > 0))) {
            const res = calculateBodyFat(gender, h, w, n, hp);
            setResult(res);
        }
    };

    useEffect(() => {
        calculate();
    }, [gender, height, waist, neck, hip]);

    const category = result !== null ? getBodyFatCategory(gender, result) : null;

    return (
        <main id="calculator-audit" className="py-24 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
            {/* Input Panel (LHS - 7 Cols) */}
            <div className="lg:col-span-7 space-y-12">
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-black text-indigo-500 uppercase tracking-widest">
                        <Activity className="w-3 h-3" /> Metabolic Auditor v3.0
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white">Body Fat <span className="text-indigo-500 italic">Audit</span>.</h1>
                    <p className="text-slate-400 font-medium text-lg italic">Precision anthropometric composition analysis based on 2026 clinical standards.</p>
                </div>

                <div className="p-8 bg-slate-900 border border-white/5 rounded-[3.5rem] space-y-10 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-3xl rounded-full -mr-32 -mt-32 group-hover:bg-indigo-500/10 transition-colors duration-700" />

                    <div className="relative z-10 space-y-10">
                        {/* Gender Switch */}
                        <div className="space-y-4">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-2">Biological Profile</label>
                            <div className="flex p-1.5 bg-slate-950 rounded-[2rem] border border-white/5 w-fit">
                                <button
                                    onClick={() => setGender('male')}
                                    className={`px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-2 ${gender === 'male'
                                        ? 'bg-indigo-600 text-white shadow-lg'
                                        : 'text-slate-500 hover:text-slate-300'
                                        }`}
                                >
                                    <User className="w-4 h-4" />
                                    Male
                                </button>
                                <button
                                    onClick={() => setGender('female')}
                                    className={`px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-2 ${gender === 'female'
                                        ? 'bg-purple-600 text-white shadow-lg'
                                        : 'text-slate-500 hover:text-slate-300'
                                        }`}
                                >
                                    <User className="w-4 h-4" />
                                    Female
                                </button>
                            </div>
                        </div>

                        {/* Dimensions Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-2">Vertical (Height cm)</label>
                                <div className="relative">
                                    <input
                                        type="number"
                                        value={height}
                                        onChange={(e) => setHeight(e.target.value)}
                                        className="w-full bg-black border-2 border-white/5 rounded-[2rem] px-6 py-6 text-2xl font-black text-white focus:border-indigo-500 outline-none transition-all"
                                        placeholder="175"
                                    />
                                    <Ruler className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-700" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-2">Core (Waist cm)</label>
                                <div className="relative">
                                    <input
                                        type="number"
                                        value={waist}
                                        onChange={(e) => setWaist(e.target.value)}
                                        className="w-full bg-black border-2 border-white/5 rounded-[2rem] px-6 py-6 text-2xl font-black text-white focus:border-indigo-500 outline-none transition-all"
                                        placeholder="85"
                                    />
                                    <Target className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-700" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-2">Cervical (Neck cm)</label>
                                <div className="relative">
                                    <input
                                        type="number"
                                        value={neck}
                                        onChange={(e) => setNeck(e.target.value)}
                                        className="w-full bg-black border-2 border-white/5 rounded-[2rem] px-6 py-6 text-2xl font-black text-white focus:border-indigo-500 outline-none transition-all"
                                        placeholder="38"
                                    />
                                    <RefreshCcw className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-700" />
                                </div>
                            </div>
                            {gender === 'female' && (
                                <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-500">
                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-2">Pelvic (Hip cm)</label>
                                    <div className="relative">
                                        <input
                                            type="number"
                                            value={hip}
                                            onChange={(e) => setHip(e.target.value)}
                                            className="w-full bg-black border-2 border-white/5 rounded-[2rem] px-6 py-6 text-2xl font-black text-white focus:border-purple-500 outline-none transition-all"
                                            placeholder="95"
                                        />
                                        <Activity className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-700" />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Output Panel (RHS - 5 Cols) */}
            <div className="lg:col-span-5 relative">
                <div className="sticky top-32 space-y-8">
                    {result !== null ? (
                        <div className="p-12 bg-gradient-to-br from-[#0c111d] to-black border border-indigo-500/20 rounded-[4.5rem] shadow-2xl space-y-12 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 group-hover:rotate-0 transition-transform duration-700">
                                <Scale className="w-32 h-32 text-indigo-500" />
                            </div>

                            <div className="space-y-4">
                                <div className="text-[11px] font-black text-indigo-500 uppercase tracking-[0.4em] mb-2 p-1 bg-indigo-500/10 w-fit rounded">Biometric Output</div>
                                <div className="text-sm font-black text-slate-400 tracking-tight italic">
                                    Adipose Density Audit
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-none shrink-0">
                                    {result}%
                                </div>
                                <div className={`flex items-center gap-4 text-[10px] font-black tracking-wider px-5 py-2.5 rounded-2xl bg-white/5 border border-white/10 w-fit uppercase ${category?.color}`}>
                                    {category?.label}
                                </div>
                            </div>

                            <div className="p-8 rounded-[2.5rem] bg-indigo-500/5 border border-indigo-500/20 space-y-4">
                                <div className="text-[10px] font-black uppercase text-indigo-400">Clinical Implication</div>
                                <div className="text-[11px] font-bold text-slate-300 italic leading-relaxed">
                                    Your body composition falls within the <strong>{category?.label}</strong> tier. This protocol uses the US Navy logarithmic regression audit.
                                </div>
                                <div className="pt-4 border-t border-indigo-500/10 flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                                        <Info className="w-4 h-4 text-indigo-500" />
                                    </div>
                                    <p className="text-[10px] text-slate-500 font-bold italic m-0">Institutional metabolic risk assessed.</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="p-12 bg-slate-900/50 border border-white/5 rounded-[4.5rem] flex flex-col items-center justify-center text-center space-y-6 h-[500px] border-dashed">
                            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center">
                                <Activity className="w-10 h-10 text-slate-700 animate-pulse" />
                            </div>
                            <div className="space-y-2">
                                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Awaiting Input</div>
                                <p className="text-xs text-slate-600 font-bold italic">Audit engine in standby...</p>
                            </div>
                        </div>
                    )}

                    {/* Verified Badge */}
                    <div className="p-8 bg-slate-900 border border-white/10 rounded-[2.5rem] flex items-center justify-between group cursor-default">
                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center text-[8px] font-black text-indigo-500 uppercase">Audit</div>
                                ))}
                            </div>
                            <div className="text-left">
                                <div className="text-[10px] font-bold text-slate-500 italic">2026 Standards</div>
                                <div className="text-xs font-black text-white uppercase tracking-widest">Biometric Compliance</div>
                            </div>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                            <Shield className="w-6 h-6 text-indigo-500" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
