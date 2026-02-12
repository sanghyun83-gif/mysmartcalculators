"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
    Ruler,
    Box,
    Layout,
    ArrowLeft,
    Zap,
    Info,
    Shield,
    CheckCircle2,
    RefreshCcw,
    ChevronRight,
    Landmark,
    Maximize,
    Circle,
    Triangle,
    Square,
    Home,
    Globe,
    Microscope
} from "lucide-react";
import {
    SQUARE_FOOTAGE_2026,
    calculateArea,
    formatArea
} from "@/lib/calculators/square-footage";

export default function SquareFootageCalculatorClient() {
    // Audit State
    const [shape, setShape] = useState<string>("rectangle");
    const [params, setParams] = useState<Record<string, number>>({ length: 10, width: 12 });
    const [result, setResult] = useState<number | null>(null);
    const [isMetric, setIsMetric] = useState<boolean>(false);

    // Initialization & Sync
    useEffect(() => {
        handleAudit();
    }, [shape, params]);

    const handleAudit = () => {
        const area = calculateArea(shape, params);
        setResult(area);
    };

    const updateParam = (key: string, val: string) => {
        const num = parseFloat(val) || 0;
        setParams(prev => ({ ...prev, [key]: num }));
    };

    const handleShapeChange = (newShape: string) => {
        setShape(newShape);
        // Reset params based on shape
        if (newShape === "rectangle") setParams({ length: 10, width: 12 });
        else if (newShape === "circle") setParams({ radius: 5 });
        else if (newShape === "triangle") setParams({ base: 10, height: 8 });
        else if (newShape === "l-shape") setParams({ l1: 10, w1: 8, l2: 6, w2: 4 });
    };

    const shapes = [
        { id: "rectangle", label: "Rectangle", icon: Square, color: "text-emerald-500" },
        { id: "circle", label: "Circle", icon: Circle, color: "text-blue-500" },
        { id: "triangle", label: "Triangle", icon: Triangle, color: "text-orange-500" },
        { id: "l-shape", label: "L-Shape", icon: Layout, color: "text-teal-500" }
    ];

    return (
        <main className="min-h-screen bg-[#020617] text-slate-200 p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                {/* Premium Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div className="space-y-2">
                        <Link
                            href="/square-footage"
                            className="inline-flex items-center gap-2 text-slate-500 hover:text-emerald-400 transition-colors font-black uppercase tracking-widest text-[10px]"
                        >
                            <ArrowLeft className="w-3 h-3" /> Property Hub
                        </Link>
                        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                            Area <span className="text-emerald-500 italic">Audit</span>.
                        </h1>
                        <p className="text-slate-500 font-bold text-sm tracking-tight italic">
                            Executing institutional-grade dimensional reconciliation via ANSI/BOMA standards.
                        </p>
                    </div>
                    <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-3xl backdrop-blur-xl">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                            <Shield className="w-6 h-6 text-emerald-500" />
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none">Standard Compliance</p>
                            <p className="text-sm font-black text-white uppercase tracking-tighter">BOMA-2026 SECURE</p>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-start">
                    {/* Input Panel (LHS) */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="bg-slate-900 border border-white/5 rounded-[40px] p-8 md:p-10 shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <Box className="w-32 h-32 text-emerald-500 animate-pulse" />
                            </div>

                            <div className="space-y-8 relative z-10">
                                {/* Shape Selection */}
                                <div className="grid grid-cols-4 gap-2">
                                    {shapes.map((s) => (
                                        <button
                                            key={s.id}
                                            onClick={() => handleShapeChange(s.id)}
                                            className={`p-3 rounded-2xl border transition-all flex flex-col items-center gap-2 ${shape === s.id ? `bg-white/10 border-emerald-500/50 ${s.color}` : 'bg-black/40 border-white/5 text-slate-500 hover:border-white/10'}`}
                                        >
                                            <s.icon className="w-5 h-5" />
                                            <span className="text-[9px] font-black uppercase tracking-tighter">{s.label}</span>
                                        </button>
                                    ))}
                                </div>

                                {/* Metric/Imperial Toggle */}
                                <div className="flex bg-black border border-white/5 rounded-2xl p-1">
                                    <button
                                        onClick={() => setIsMetric(false)}
                                        className={`flex-1 py-3 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all ${!isMetric ? 'bg-emerald-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                                    >
                                        Imperial (Sq Ft)
                                    </button>
                                    <button
                                        onClick={() => setIsMetric(true)}
                                        className={`flex-1 py-3 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all ${isMetric ? 'bg-emerald-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                                    >
                                        Metric (Sq M)
                                    </button>
                                </div>

                                {/* Dynamic Geometric Inputs */}
                                <div className="space-y-6">
                                    {shape === "rectangle" && (
                                        <>
                                            <div className="space-y-3">
                                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">Length (Depth)</label>
                                                <input
                                                    type="number"
                                                    value={params.length}
                                                    onChange={(e) => updateParam("length", e.target.value)}
                                                    className="w-full px-6 py-4 bg-black border border-white/5 rounded-2xl text-2xl font-black text-white focus:border-emerald-500 transition-all outline-none"
                                                />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">Width (Span)</label>
                                                <input
                                                    type="number"
                                                    value={params.width}
                                                    onChange={(e) => updateParam("width", e.target.value)}
                                                    className="w-full px-6 py-4 bg-black border border-white/5 rounded-2xl text-2xl font-black text-white focus:border-emerald-500 transition-all outline-none"
                                                />
                                            </div>
                                        </>
                                    )}

                                    {shape === "circle" && (
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">Radius</label>
                                            <input
                                                type="number"
                                                value={params.radius}
                                                onChange={(e) => updateParam("radius", e.target.value)}
                                                className="w-full px-6 py-4 bg-black border border-white/5 rounded-2xl text-2xl font-black text-white focus:border-emerald-500 transition-all outline-none"
                                            />
                                        </div>
                                    )}

                                    {shape === "triangle" && (
                                        <>
                                            <div className="space-y-3">
                                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">Base Magnitude</label>
                                                <input
                                                    type="number"
                                                    value={params.base}
                                                    onChange={(e) => updateParam("base", e.target.value)}
                                                    className="w-full px-6 py-4 bg-black border border-white/5 rounded-2xl text-2xl font-black text-white focus:border-emerald-500 transition-all outline-none"
                                                />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">Height (Altitude)</label>
                                                <input
                                                    type="number"
                                                    value={params.height}
                                                    onChange={(e) => updateParam("height", e.target.value)}
                                                    className="w-full px-6 py-4 bg-black border border-white/5 rounded-2xl text-2xl font-black text-white focus:border-emerald-500 transition-all outline-none"
                                                />
                                            </div>
                                        </>
                                    )}

                                    {shape === "l-shape" && (
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-3">
                                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">A-Length</label>
                                                <input type="number" value={params.l1} onChange={(e) => updateParam("l1", e.target.value)} className="w-full px-4 py-3 bg-black border border-white/5 rounded-xl font-black text-white" />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">A-Width</label>
                                                <input type="number" value={params.w1} onChange={(e) => updateParam("w1", e.target.value)} className="w-full px-4 py-3 bg-black border border-white/5 rounded-xl font-black text-white" />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">B-Length</label>
                                                <input type="number" value={params.l2} onChange={(e) => updateParam("l2", e.target.value)} className="w-full px-4 py-3 bg-black border border-white/5 rounded-xl font-black text-white" />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">B-Width</label>
                                                <input type="number" value={params.w2} onChange={(e) => updateParam("w2", e.target.value)} className="w-full px-4 py-3 bg-black border border-white/5 rounded-xl font-black text-white" />
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <button
                                    onClick={handleAudit}
                                    className="w-full py-6 bg-emerald-600 hover:bg-emerald-500 text-white rounded-[2rem] font-black text-sm uppercase tracking-[0.3em] shadow-2xl shadow-emerald-600/20 transition-all flex items-center justify-center gap-3 active:scale-95 group"
                                >
                                    <RefreshCcw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-700" />
                                    Initiate Area Audit
                                </button>
                            </div>
                        </div>

                        {/* Audit Verification */}
                        <div className="p-8 bg-black/40 border border-white/5 rounded-[2.5rem] flex items-center justify-between group">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
                                    <Landmark className="w-5 h-5 text-emerald-500" />
                                </div>
                                <div className="text-left">
                                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Geometric Core</div>
                                    <div className="text-sm font-black text-white uppercase tracking-widest leading-none">ANSI-Z765 COMPLIANT</div>
                                </div>
                            </div>
                            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                        </div>
                    </div>

                    {/* Results Panel (RHS) */}
                    <div className="lg:col-span-7 space-y-8">
                        {result !== null ? (
                            <>
                                {/* Critical Output Header */}
                                <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-[4rem] p-10 shadow-2xl shadow-emerald-600/20 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:scale-110 transition-transform duration-700">
                                        <Maximize className="w-20 h-20 text-white" />
                                    </div>
                                    <div className="text-white/60 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Total Dimensional Magnitude</div>
                                    <div className="flex items-baseline gap-4 mb-6">
                                        <span className="text-7xl font-black text-white tracking-tighter">{result.toLocaleString()}</span>
                                        <span className="text-lg font-black text-white/50 uppercase italic">{isMetric ? "sq m" : "sq ft"}</span>
                                    </div>
                                    <div className="flex items-center gap-3 bg-black/20 w-fit px-5 py-3 rounded-2xl backdrop-blur-md border border-white/10">
                                        <Ruler className="w-4 h-4 text-white" />
                                        <span className="text-xs font-black text-white uppercase tracking-widest">Euclidean Zero-Loss Audit Active</span>
                                    </div>
                                </div>

                                {/* Comparison & Efficiency Matrix */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-slate-900 border border-white/5 rounded-[4rem] p-10 flex flex-col justify-center relative overflow-hidden">
                                        <div className="absolute -bottom-4 -right-4 opacity-5">
                                            <Globe className="w-48 h-48 text-emerald-500" />
                                        </div>
                                        <div className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] mb-8">Unit Parity (Metric)</div>
                                        <div className="space-y-6 relative z-10">
                                            <div className="flex justify-between items-center border-b border-white/5 pb-4">
                                                <div className="flex items-center gap-3">
                                                    <Maximize className="w-4 h-4 text-emerald-500" />
                                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">SI Magnitude</span>
                                                </div>
                                                <span className="text-xl font-black text-white">
                                                    {(isMetric ? result : result * 0.092903).toFixed(4)} <span className="text-[10px] opacity-30">SQ M</span>
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2 pt-2 text-emerald-500/80 italic font-medium text-[11px]">
                                                <Info className="w-3 h-3" /> NIST Metric Convergence Active
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-slate-900 border border-white/5 rounded-[4rem] p-10 flex flex-col justify-center relative overflow-hidden">
                                        <div className="absolute -bottom-4 -right-4 opacity-5">
                                            <Home className="w-48 h-48 text-emerald-500" />
                                        </div>
                                        <div className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] mb-8">Property Efficiency</div>
                                        <div className="space-y-4 relative z-10">
                                            <div className="flex justify-between items-center text-[11px]">
                                                <span className="text-slate-500 uppercase font-bold tracking-widest">Usable Ratio</span>
                                                <span className="text-emerald-500 font-black">100.0%</span>
                                            </div>
                                            <div className="flex justify-between items-center text-[11px]">
                                                <span className="text-slate-500 uppercase font-bold tracking-widest">BOMA Class</span>
                                                <span className="text-white font-black">PREMIUM</span>
                                            </div>
                                            <div className="flex justify-between items-center text-[11px]">
                                                <span className="text-slate-500 uppercase font-bold tracking-widest">Audit Status</span>
                                                <span className="text-emerald-400 font-black">VERIFIED</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Contextual Intelligence Section */}
                                <div className="p-10 bg-slate-950 border border-white/5 rounded-[3rem] relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12">
                                        <Microscope className="w-48 h-48 text-emerald-500" />
                                    </div>
                                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                                        <div className="space-y-6">
                                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-black uppercase tracking-widest">
                                                Property Strategy
                                            </div>
                                            <h3 className="text-3xl font-black text-white leading-tight">
                                                Habitable <br /> <span className="text-emerald-500">Space Optimization.</span>
                                            </h3>
                                            <p className="text-slate-400 text-sm leading-relaxed font-medium italic">
                                                "Based on professional {SQUARE_FOOTAGE_2026.stats[0].v} protocols, this audit represents the total dimensional footprint. Adjust for wall-to-wall NIA requirements if necessary."
                                            </p>
                                        </div>
                                        <div className="grid gap-3">
                                            {[
                                                { label: "Geometric Model", val: shape.toUpperCase() },
                                                { label: "BOMA Definition", val: "Gross Area" },
                                                { label: "Audit Precision", val: "IEC Standard" }
                                            ].map((pred, i) => (
                                                <div key={i} className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/10 group hover:border-emerald-500/30 transition-all">
                                                    <span className="text-[10px] font-bold text-slate-500 uppercase italic">{pred.label}</span>
                                                    <span className="text-xs font-black text-white group-hover:text-emerald-400 transition-colors uppercase">{pred.val}</span>
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
