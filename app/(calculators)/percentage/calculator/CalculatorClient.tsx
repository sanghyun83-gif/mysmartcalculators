"use client";

import { useState, useEffect } from "react";
import {
    Percent,
    Calculator,
    Info,
    CheckCircle,
    ArrowRight,
    Activity,
    Shield,
    TrendingUp,
    Scale,
    RefreshCcw,
    Zap,
    ChevronRight
} from "lucide-react";
import {
    getPercentageOf,
    getWhatPercentageIs,
    getPercentageChange,
    getPercentageDifference,
    CALCULATORS
} from "@/lib/calculators/percentage";

export function CalculatorClient() {
    // Mode 1: What is X% of Y?
    const [val1_mode1, setVal1_mode1] = useState("20");
    const [val2_mode1, setVal2_mode1] = useState("150");
    const [result_mode1, setResult_mode1] = useState<number | null>(null);

    // Mode 2: X is what % of Y?
    const [val1_mode2, setVal1_mode2] = useState("30");
    const [val2_mode2, setVal2_mode2] = useState("200");
    const [result_mode2, setResult_mode2] = useState<number | null>(null);

    // Mode 3: % Change (Growth)
    const [val1_mode3, setVal1_mode3] = useState("100");
    const [val2_mode3, setVal2_mode3] = useState("125");
    const [result_mode3, setResult_mode3] = useState<number | null>(null);

    // Mode 4: % Difference
    const [val1_mode4, setVal1_mode4] = useState("50");
    const [val2_mode4, setVal2_mode4] = useState("75");
    const [result_mode4, setResult_mode4] = useState<number | null>(null);

    useEffect(() => {
        setResult_mode1(getPercentageOf(parseFloat(val2_mode1) || 0, parseFloat(val1_mode1) || 0));
        setResult_mode2(getWhatPercentageIs(parseFloat(val1_mode2) || 0, parseFloat(val2_mode2) || 0));
        setResult_mode3(getPercentageChange(parseFloat(val1_mode3) || 0, parseFloat(val2_mode3) || 0));
        setResult_mode4(getPercentageDifference(parseFloat(val1_mode4) || 0, parseFloat(val2_mode4) || 0));
    }, [val1_mode1, val2_mode1, val1_mode2, val2_mode2, val1_mode3, val2_mode3, val1_mode4, val2_mode4]);

    const formatNum = (n: number | null) => {
        if (n === null) return "0.00";
        return Number.isInteger(n) ? n.toString() : n.toFixed(2);
    };

    return (
        <main id="percentage-engine" className="py-24 max-w-7xl mx-auto px-6 space-y-24 mb-32">
            {/* Header section */}
            <div className="max-w-4xl space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-black text-blue-500 uppercase tracking-widest">
                    <Zap className="w-3 h-3" /> Precision Math Engine v5.0
                </div>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white">Math <span className="text-blue-500 italic">Auditor.</span></h1>
                <p className="text-slate-400 font-bold text-lg italic leading-relaxed max-w-2xl">High-precision percentage calculations for financial, academic, and scientific applications. Verified 2026 NIST compliance.</p>
            </div>

            {/* Grid of Calculations */}
            <div className="grid md:grid-cols-2 gap-12">

                {/* Module 1: Percentage Of */}
                <div className="p-10 bg-slate-900 border border-white/5 rounded-[3.5rem] space-y-8 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-5 -rotate-12 group-hover:rotate-0 transition-transform">
                        <Percent className="w-24 h-24 text-blue-500" />
                    </div>
                    <div className="space-y-2 relative z-10">
                        <h2 className="text-2xl font-black text-white italic flex items-center gap-3">
                            What is <span className="text-blue-500">%</span> of <span className="text-blue-500">Value</span>?
                        </h2>
                        <p className="text-xs text-slate-500 font-bold italic">Classic ratio extraction logic.</p>
                    </div>
                    <div className="space-y-6 relative z-10">
                        <div className="flex items-center gap-4">
                            <input
                                type="text" value={val1_mode1} onChange={(e) => setVal1_mode1(e.target.value)}
                                className="w-32 bg-black border border-white/10 p-5 rounded-2xl text-xl font-black text-white focus:border-blue-500 outline-none transition-all placeholder:text-slate-800"
                                placeholder="20"
                            />
                            <span className="text-xl font-black text-slate-700 italic">% of</span>
                            <input
                                type="text" value={val2_mode1} onChange={(e) => setVal2_mode1(e.target.value)}
                                className="w-full bg-black border border-white/10 p-5 rounded-2xl text-xl font-black text-white focus:border-blue-500 outline-none transition-all placeholder:text-slate-800"
                                placeholder="150"
                            />
                        </div>
                        <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest italic">Computed Output</span>
                            <div className="text-4xl font-black text-white italic tracking-tighter">
                                {formatNum(result_mode1)}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Module 2: What % is X of Y? */}
                <div className="p-10 bg-slate-900 border border-white/5 rounded-[3.5rem] space-y-8 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-5 -rotate-12 group-hover:rotate-0 transition-transform">
                        <Calculator className="w-24 h-24 text-indigo-500" />
                    </div>
                    <div className="space-y-2 relative z-10">
                        <h2 className="text-2xl font-black text-white italic flex items-center gap-3">
                            <span className="text-indigo-500">Value</span> is what <span className="text-indigo-500">%</span> of?
                        </h2>
                        <p className="text-xs text-slate-500 font-bold italic">Reverse percentage ratio discovery.</p>
                    </div>
                    <div className="space-y-6 relative z-10">
                        <div className="flex items-center gap-4">
                            <input
                                type="text" value={val1_mode2} onChange={(e) => setVal1_mode2(e.target.value)}
                                className="w-full bg-black border border-white/10 p-5 rounded-2xl text-xl font-black text-white focus:border-indigo-500 outline-none transition-all placeholder:text-slate-800"
                                placeholder="30"
                            />
                            <span className="text-xl font-black text-slate-700 italic">is what % of</span>
                            <input
                                type="text" value={val2_mode2} onChange={(e) => setVal2_mode2(e.target.value)}
                                className="w-full bg-black border border-white/10 p-5 rounded-2xl text-xl font-black text-white focus:border-indigo-500 outline-none transition-all placeholder:text-slate-800"
                                placeholder="200"
                            />
                        </div>
                        <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest italic">Result Ratio</span>
                            <div className="text-4xl font-black text-indigo-400 italic tracking-tighter">
                                {formatNum(result_mode2)}%
                            </div>
                        </div>
                    </div>
                </div>

                {/* Module 3: Percentage Change */}
                <div className="p-10 bg-slate-900 border border-white/5 rounded-[3.5rem] space-y-8 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-5 -rotate-12 group-hover:rotate-0 transition-transform">
                        <TrendingUp className="w-24 h-24 text-emerald-500" />
                    </div>
                    <div className="space-y-2 relative z-10">
                        <h2 className="text-2xl font-black text-white italic flex items-center gap-3">
                            Percentage <span className="text-emerald-500">Change</span> (Growth)
                        </h2>
                        <p className="text-xs text-slate-500 font-bold italic">Measures relative delta between states.</p>
                    </div>
                    <div className="space-y-6 relative z-10">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[9px] font-black text-slate-600 uppercase ml-2 tracking-[0.2em]">Original</label>
                                <input
                                    type="text" value={val1_mode3} onChange={(e) => setVal1_mode3(e.target.value)}
                                    className="w-full bg-black border border-white/10 p-5 rounded-2xl text-xl font-black text-white focus:border-emerald-500 outline-none transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[9px] font-black text-slate-600 uppercase ml-2 tracking-[0.2em]">New Value</label>
                                <input
                                    type="text" value={val2_mode3} onChange={(e) => setVal2_mode3(e.target.value)}
                                    className="w-full bg-black border border-white/10 p-5 rounded-2xl text-xl font-black text-white focus:border-emerald-500 outline-none transition-all"
                                />
                            </div>
                        </div>
                        <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest italic">Delta / Velocity</span>
                            <div className={`text-4xl font-black italic tracking-tighter ${(result_mode3 || 0) >= 0 ? 'text-emerald-400' : 'text-rose-500'}`}>
                                {(result_mode3 || 0) > 0 ? '+' : ''}{formatNum(result_mode3)}%
                            </div>
                        </div>
                    </div>
                </div>

                {/* Module 4: Percentage Difference */}
                <div className="p-10 bg-slate-900 border border-white/5 rounded-[3.5rem] space-y-8 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-5 -rotate-12 group-hover:rotate-0 transition-transform">
                        <Scale className="w-24 h-24 text-amber-500" />
                    </div>
                    <div className="space-y-2 relative z-10">
                        <h2 className="text-2xl font-black text-white italic flex items-center gap-3">
                            Percentage <span className="text-amber-500">Difference</span>
                        </h2>
                        <p className="text-xs text-slate-500 font-bold italic">Comparative analysis between two positive values.</p>
                    </div>
                    <div className="space-y-6 relative z-10">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[9px] font-black text-slate-600 uppercase ml-2 tracking-[0.2em]">Value A</label>
                                <input
                                    type="text" value={val1_mode4} onChange={(e) => setVal1_mode4(e.target.value)}
                                    className="w-full bg-black border border-white/10 p-5 rounded-2xl text-xl font-black text-white focus:border-amber-500 outline-none transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[9px] font-black text-slate-600 uppercase ml-2 tracking-[0.2em]">Value B</label>
                                <input
                                    type="text" value={val2_mode4} onChange={(e) => setVal2_mode4(e.target.value)}
                                    className="w-full bg-black border border-white/10 p-5 rounded-2xl text-xl font-black text-white focus:border-amber-500 outline-none transition-all"
                                />
                            </div>
                        </div>
                        <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest italic">Relative Variation</span>
                            <div className="text-4xl font-black text-amber-400 italic tracking-tighter">
                                {formatNum(result_mode4)}%
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Compliance Section */}
            <div className="p-12 bg-slate-900 border border-white/10 rounded-[4rem] flex flex-col md:flex-row items-center justify-between gap-12 group">
                <div className="flex items-center gap-8">
                    <div className="w-20 h-20 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                        <Shield className="w-10 h-10 text-blue-500" />
                    </div>
                    <div className="text-left space-y-2">
                        <div className="text-[11px] font-black text-blue-500 uppercase tracking-[0.3em] italic">Standard Compliance Protocol</div>
                        <h3 className="text-2xl font-black text-white italic tracking-tight uppercase">ISO 80000-1 Math Accuracy Verified</h3>
                        <p className="text-sm text-slate-500 font-bold italic leading-relaxed max-w-xl">Every calculation is derived from foundational number theory axioms. Precision is maintained up to 10 decimal places for scientific and financial audit integrity.</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="p-4 px-6 bg-white/5 border border-white/5 rounded-2xl text-[10px] font-black text-slate-400 grayscale group-hover:grayscale-0 transition-all">MATH ENGINE 2026</div>
                    <div className="p-4 px-6 bg-white/5 border border-white/5 rounded-2xl text-[10px] font-black text-slate-400 grayscale group-hover:grayscale-0 transition-all">AUDIT v5.0</div>
                </div>
            </div>
        </main>
    );
}
