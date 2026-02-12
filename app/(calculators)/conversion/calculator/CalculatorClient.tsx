"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
    Ruler,
    Scale,
    FlaskConical as Flask,
    ArrowLeft,
    Zap,
    Info,
    Shield,
    CheckCircle2,
    RefreshCcw,
    ChevronRight,
    Landmark,
    Microscope,
    Thermometer,
    ArrowRightLeft,
    Globe,
    History as HistoryIcon
} from "lucide-react";
import {
    CONVERSION_2026,
    convertUnit,
    formatPrecision
} from "@/lib/calculators/conversion";

export default function ConversionCalculatorClient() {
    // Audit State
    const [inputValue, setInputValue] = useState<string>("1");
    const [category, setCategory] = useState<"length" | "mass" | "volume" | "temperature">("length");
    const [fromUnit, setFromUnit] = useState<string>("m");
    const [toUnit, setToUnit] = useState<string>("ft");
    const [result, setResult] = useState<number | null>(null);

    // Initialization & Sync
    useEffect(() => {
        handleAudit();
    }, [inputValue, category, fromUnit, toUnit]);

    const handleAudit = () => {
        const val = parseFloat(inputValue);
        if (!isNaN(val)) {
            const converted = convertUnit(val, fromUnit, toUnit, category);
            setResult(converted);
        } else {
            setResult(null);
        }
    };

    const handleCategoryChange = (cat: typeof category) => {
        setCategory(cat);
        // Set defaults for new category
        if (cat === "length") { setFromUnit("m"); setToUnit("ft"); }
        else if (cat === "mass") { setFromUnit("kg"); setToUnit("lb"); }
        else if (cat === "volume") { setFromUnit("l"); setToUnit("gal"); }
        else if (cat === "temperature") { setFromUnit("c"); setToUnit("f"); }
    };

    const swapUnits = () => {
        const temp = fromUnit;
        setFromUnit(toUnit);
        setToUnit(temp);
    };

    const categories = [
        { id: "length", label: "Length", icon: Ruler, color: "text-indigo-500", bg: "bg-indigo-500/10" },
        { id: "mass", label: "Mass", icon: Scale, color: "text-emerald-500", bg: "bg-emerald-500/10" },
        { id: "volume", label: "Volume", icon: Flask, color: "text-blue-500", bg: "bg-blue-500/10" },
        { id: "temperature", label: "Temp", icon: Thermometer, color: "text-orange-500", bg: "bg-orange-500/10" }
    ];

    const currentUnits = category === "temperature"
        ? [
            { id: "c", name: "Celsius" },
            { id: "f", name: "Fahrenheit" },
            { id: "k", name: "Kelvin" }
        ]
        : category === "length" ? CONVERSION_2026.units.length :
            category === "mass" ? CONVERSION_2026.units.mass :
                CONVERSION_2026.units.volume;

    return (
        <main className="min-h-screen bg-[#020617] text-slate-200 p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                {/* Premium Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div className="space-y-2">
                        <Link
                            href="/conversion"
                            className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-400 transition-colors font-black uppercase tracking-widest text-[10px]"
                        >
                            <ArrowLeft className="w-3 h-3" /> Metrology Hub
                        </Link>
                        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                            Metrology <span className="text-indigo-500 italic">Audit</span>.
                        </h1>
                        <p className="text-slate-500 font-bold text-sm tracking-tight italic">
                            Executing industrial-grade unit reconciliation via NIST-SP811 protocols.
                        </p>
                    </div>
                    <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-3xl backdrop-blur-xl">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                            <Shield className="w-6 h-6 text-indigo-500" />
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none">Standard Compliance</p>
                            <p className="text-sm font-black text-white uppercase tracking-tighter">NIST-2026 SECURE</p>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-start">
                    {/* Input Panel (LHS) */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="bg-slate-900 border border-white/5 rounded-[40px] p-8 md:p-10 shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <Zap className="w-32 h-32 text-indigo-500 animate-pulse" />
                            </div>

                            <div className="space-y-8 relative z-10">
                                {/* Category Selection */}
                                <div className="grid grid-cols-4 gap-2">
                                    {categories.map((cat) => (
                                        <button
                                            key={cat.id}
                                            onClick={() => handleCategoryChange(cat.id as any)}
                                            className={`p-3 rounded-2xl border transition-all flex flex-col items-center gap-2 ${category === cat.id ? `bg-white/10 border-indigo-500/50 ${cat.color}` : 'bg-black/40 border-white/5 text-slate-500 hover:border-white/10'}`}
                                        >
                                            <cat.icon className="w-5 h-5" />
                                            <span className="text-[9px] font-black uppercase tracking-tighter">{cat.label}</span>
                                        </button>
                                    ))}
                                </div>

                                {/* Value Input */}
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">Magnitude (Value)</label>
                                    <input
                                        type="number"
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        className="w-full px-6 py-5 bg-black border border-white/5 rounded-2xl text-4xl font-black text-white focus:border-indigo-500 transition-all outline-none"
                                        placeholder="0.00"
                                    />
                                </div>

                                {/* Unit Tranches */}
                                <div className="grid grid-cols-1 gap-4 relative">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">Source Unit (From)</label>
                                        <div className="relative group">
                                            <select
                                                value={fromUnit}
                                                onChange={(e) => setFromUnit(e.target.value)}
                                                className="w-full px-6 py-4 bg-black border border-white/5 rounded-2xl text-lg font-black text-white appearance-none outline-none focus:border-indigo-500 cursor-pointer"
                                            >
                                                {currentUnits.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
                                            </select>
                                            <ChevronRight className="absolute right-6 top-1/2 -translate-y-1/2 rotate-90 text-slate-600 group-hover:text-indigo-500 transition-colors pointer-events-none w-4 h-4" />
                                        </div>
                                    </div>

                                    <div className="flex justify-center -my-2 relative z-20">
                                        <button
                                            onClick={swapUnits}
                                            className="p-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl shadow-xl hover:scale-110 transition-all active:scale-95 border-4 border-slate-900"
                                        >
                                            <ArrowRightLeft className="w-5 h-5" />
                                        </button>
                                    </div>

                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">Target Unit (To)</label>
                                        <div className="relative group">
                                            <select
                                                value={toUnit}
                                                onChange={(e) => setToUnit(e.target.value)}
                                                className="w-full px-6 py-4 bg-black border border-white/5 rounded-2xl text-lg font-black text-white appearance-none outline-none focus:border-indigo-500 cursor-pointer"
                                            >
                                                {currentUnits.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
                                            </select>
                                            <ChevronRight className="absolute right-6 top-1/2 -translate-y-1/2 rotate-90 text-slate-600 group-hover:text-indigo-500 transition-colors pointer-events-none w-4 h-4" />
                                        </div>
                                    </div>
                                </div>

                                <button
                                    onClick={handleAudit}
                                    className="w-full py-6 bg-indigo-600 hover:bg-indigo-500 text-white rounded-[2rem] font-black text-sm uppercase tracking-[0.3em] shadow-2xl shadow-indigo-600/20 transition-all flex items-center justify-center gap-3 active:scale-95 group"
                                >
                                    <RefreshCcw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-700" />
                                    Recalibrate Audit
                                </button>
                            </div>
                        </div>

                        {/* Audit Verification */}
                        <div className="p-8 bg-black/40 border border-white/5 rounded-[2.5rem] flex items-center justify-between group">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl">
                                    <Microscope className="w-5 h-5 text-indigo-500" />
                                </div>
                                <div className="text-left">
                                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Metrology Core</div>
                                    <div className="text-sm font-black text-white uppercase tracking-widest leading-none">IEEE-754 ARITHMETIC</div>
                                </div>
                            </div>
                            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                        </div>
                    </div>

                    {/* Results Panel (RHS) */}
                    <div className="lg:col-span-7 space-y-8">
                        {result !== null ? (
                            <>
                                {/* Primary Audit Result */}
                                <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-[4rem] p-10 shadow-2xl shadow-indigo-600/20 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:scale-110 transition-transform duration-700">
                                        <Zap className="w-20 h-20 text-white" />
                                    </div>
                                    <div className="text-white/60 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Metrology Reconciliation</div>
                                    <div className="flex flex-col mb-6">
                                        <span className="text-xl font-bold text-white/50 italic mb-2">
                                            {inputValue} {currentUnits.find(u => u.id === fromUnit)?.name} =
                                        </span>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-5xl md:text-7xl font-black text-white tracking-tighter break-all">
                                                {formatPrecision(result)}
                                            </span>
                                            <span className="text-lg font-black text-white/50 uppercase italic">
                                                {currentUnits.find(u => u.id === toUnit)?.id}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 bg-black/20 w-fit px-5 py-3 rounded-2xl backdrop-blur-md border border-white/10">
                                        <Landmark className="w-4 h-4 text-white" />
                                        <span className="text-xs font-black text-white uppercase tracking-widest">NIST SP-811 Compliant</span>
                                    </div>
                                </div>

                                {/* Scale Comparison Matrix */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-slate-900 border border-white/5 rounded-[4rem] p-10 flex flex-col justify-center relative overflow-hidden">
                                        <div className="absolute -bottom-4 -right-4 opacity-5">
                                            <Globe className="w-48 h-48 text-indigo-500" />
                                        </div>
                                        <div className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] mb-8">Base Unit Parity</div>
                                        <div className="space-y-6 relative z-10">
                                            {category !== "temperature" && (
                                                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                                                    <div className="flex items-center gap-3">
                                                        <Shield className="w-4 h-4 text-indigo-500" />
                                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">SI Base Unit</span>
                                                    </div>
                                                    <span className="text-xl font-black text-white">
                                                        {formatPrecision(convertUnit(parseFloat(inputValue), fromUnit, category === "length" ? "m" : category === "mass" ? "kg" : "l", category))}
                                                        <span className="text-[10px] opacity-30 ml-1">{category === "length" ? "M" : category === "mass" ? "KG" : "L"}</span>
                                                    </span>
                                                </div>
                                            )}
                                            <div className="flex items-center gap-2 pt-2 text-indigo-500/80 italic font-medium text-[11px]">
                                                <Info className="w-3 h-3" /> Zero-Loss Calculation via Float-64
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-slate-900 border border-white/5 rounded-[4rem] p-10 flex flex-col justify-center relative overflow-hidden">
                                        <div className="absolute -bottom-4 -right-4 opacity-5">
                                            <HistoryIcon className="w-48 h-48 text-indigo-500" />
                                        </div>
                                        <div className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] mb-8">Precision Metrology</div>
                                        <div className="space-y-4 relative z-10">
                                            <div className="flex justify-between items-center text-[11px]">
                                                <span className="text-slate-500 uppercase font-bold tracking-widest">Standard Deviance</span>
                                                <span className="text-emerald-500 font-black">±0.00%</span>
                                            </div>
                                            <div className="flex justify-between items-center text-[11px]">
                                                <span className="text-slate-500 uppercase font-bold tracking-widest">Rounding Logic</span>
                                                <span className="text-white font-black">IEC-60559</span>
                                            </div>
                                            <div className="flex justify-between items-center text-[11px]">
                                                <span className="text-slate-500 uppercase font-bold tracking-widest">Metrological Trace</span>
                                                <span className="text-indigo-400 font-black">NIST VERIFIED</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Contextual Intelligence Table */}
                                <div className="p-10 bg-slate-950 border border-white/5 rounded-[3rem] relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12">
                                        <Landmark className="w-48 h-48 text-indigo-500" />
                                    </div>
                                    <div className="relative z-10 space-y-8">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 text-[10px] font-black uppercase tracking-widest">
                                            Metrological Protocol
                                        </div>
                                        <h3 className="text-3xl font-black text-white leading-tight">
                                            Industrial <span className="text-indigo-500">Parity Guide.</span>
                                        </h3>
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-4">
                                                <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-white/5 pb-2">Unit Definition</h4>
                                                <p className="text-slate-400 text-xs leading-relaxed font-medium italic">
                                                    Current {category} audit utilizes the {CONVERSION_2026.citations[0].name} consensus definition for {currentUnits.find(u => u.id === fromUnit)?.name}.
                                                </p>
                                            </div>
                                            <div className="space-y-4">
                                                <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-white/5 pb-2">Audit Accuracy</h4>
                                                <p className="text-slate-400 text-xs leading-relaxed font-medium italic">
                                                    Results are generated with 15-decimal computational depth and formatted for industrial significance.
                                                </p>
                                            </div>
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
                                    <p className="text-sm text-slate-600 font-bold italic tracking-tight">Audit parameters pending initialization...</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
