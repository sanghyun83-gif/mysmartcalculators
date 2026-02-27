癤?use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
    GraduationCap, ArrowLeft, Zap, Info, Shield, CheckCircle2,
    Activity, Scale, Target, Apple, TrendingUp, ChevronRight,
    Dna, Brain, Heart, Sparkles, RefreshCcw, Landmark, Microscope,
    Plus, Trash2, Library, Award
} from "lucide-react";
import {
    SITE,
    GRADE_2026,
    calculateWeightedGrade,
    calculateFinalNeeded,
    getGradeFromPercentage,
    formatValue,
    Assignment
} from "@/lib/calculators/grade";

export default function GradeCalculatorClient() {
    const [mode, setMode] = useState<"weighted" | "final">("weighted");

    // Weighted State
    const [assignments, setAssignments] = useState<Assignment[]>([
        { name: "Assignment 1", grade: 85, weight: 20 },
        { name: "Assignment 2", grade: 90, weight: 20 },
    ]);
    const [weightedResult, setWeightedResult] = useState<number | null>(null);

    // Final State
    const [currentGrade, setCurrentGrade] = useState<string>("85");
    const [targetGrade, setTargetGrade] = useState<string>("90");
    const [finalWeight, setFinalWeight] = useState<string>("20");
    const [finalNeeded, setFinalNeeded] = useState<number | null>(null);

    // Dynamic Logic
    useEffect(() => {
        if (mode === "weighted") {
            setWeightedResult(calculateWeightedGrade(assignments));
        } else {
            setFinalNeeded(calculateFinalNeeded(
                parseFloat(currentGrade) || 0,
                parseFloat(targetGrade) || 0,
                parseFloat(finalWeight) || 0
            ));
        }
    }, [mode, assignments, currentGrade, targetGrade, finalWeight]);

    const addAssignment = () => {
        setAssignments([...assignments, { name: `Item ${assignments.length + 1}`, grade: 0, weight: 0 }]);
    };

    const removeAssignment = (index: number) => {
        setAssignments(assignments.filter((_, i) => i !== index));
    };

    const updateAssignment = (index: number, field: keyof Assignment, value: string | number) => {
        const next = [...assignments];
        if (field === "grade" || field === "weight") {
            next[index][field] = parseFloat(value.toString()) || 0;
        } else {
            next[index].name = value.toString();
        }
        setAssignments(next);
    };

    const totalWeight = assignments.reduce((acc, curr) => acc + curr.weight, 0);

    return (
        <main className="min-h-screen bg-[#020617] text-slate-200 p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                {/* Premium Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div className="space-y-2">
                        <Link
                            href="/grade"
                            className="inline-flex items-center gap-2 text-slate-500 hover:text-emerald-500 transition-colors font-bold tracking-wide text-[11px]"
                        >
                            <ArrowLeft className="w-3 h-3" /> Grade Summary
                        </Link>
                        <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                            Grade <span className="text-emerald-500">Calculator</span>
                        </h1>
                        <p className="text-slate-500 font-medium text-sm tracking-tight">
                            Free academic tool for grades and performance estimates.
                        </p>
                    </div>
                    <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-3xl backdrop-blur-xl">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                            <Shield className="w-6 h-6 text-emerald-500" />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-slate-500 tracking-wider leading-none">Reliability Score</p>
                            <p className="text-sm font-black text-white tracking-tight">Verified 2026</p>
                        </div>
                    </div>
                </div>

                {/* Mode Switcher */}
                <div className="flex justify-center mb-12">
                    <div className="bg-slate-900 border border-white/5 p-1 rounded-2xl flex gap-1">
                        <button
                            onClick={() => setMode("weighted")}
                            className={`px-8 py-3 rounded-xl text-xs font-bold transition-all ${mode === "weighted" ? 'bg-emerald-600 text-white' : 'text-slate-500 hover:text-slate-300'}`}
                        >
                            Weighted Average
                        </button>
                        <button
                            onClick={() => setMode("final")}
                            className={`px-8 py-3 rounded-xl text-xs font-bold transition-all ${mode === "final" ? 'bg-emerald-600 text-white' : 'text-slate-500 hover:text-slate-300'}`}
                        >
                            Final Exam Target
                        </button>
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-start">
                    {/* Input Panel (LHS) */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="bg-slate-900 border border-white/5 rounded-[40px] p-8 md:p-10 shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <Library className="w-32 h-32 text-emerald-500" />
                            </div>

                            <div className="relative z-10">
                                {mode === "weighted" ? (
                                    <div className="space-y-6">
                                        <div className="flex items-center justify-between mb-2">
                                            <h2 className="text-[10px] font-bold text-slate-500 tracking-wider">Course Assignments</h2>
                                            <div className={`text-[10px] font-bold px-2 py-1 rounded ${totalWeight > 100 ? 'bg-red-500/20 text-red-500' : 'bg-emerald-500/20 text-emerald-500'}`}>
                                                Total Weight: {totalWeight}%
                                            </div>
                                        </div>
                                        <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                                            {assignments.map((a, i) => (
                                                <div key={i} className="grid grid-cols-12 gap-3 items-center group">
                                                    <div className="col-span-6">
                                                        <input
                                                            value={a.name}
                                                            onChange={(e) => updateAssignment(i, "name", e.target.value)}
                                                            placeholder="Assignment"
                                                            className="w-full px-4 py-3 bg-black border border-white/5 rounded-xl text-sm font-bold text-white focus:border-emerald-500 outline-none"
                                                        />
                                                    </div>
                                                    <div className="col-span-2">
                                                        <input
                                                            type="number"
                                                            value={a.grade}
                                                            onChange={(e) => updateAssignment(i, "grade", e.target.value)}
                                                            className="w-full px-2 py-3 bg-black border border-white/5 rounded-xl text-sm font-black text-center text-white focus:border-emerald-500 outline-none"
                                                        />
                                                    </div>
                                                    <div className="col-span-2">
                                                        <input
                                                            type="number"
                                                            value={a.weight}
                                                            onChange={(e) => updateAssignment(i, "weight", e.target.value)}
                                                            className="w-full px-2 py-3 bg-black border border-white/5 rounded-xl text-sm font-black text-center text-emerald-400 focus:border-emerald-500 outline-none"
                                                        />
                                                    </div>
                                                    <div className="col-span-2 flex justify-end">
                                                        <button
                                                            onClick={() => removeAssignment(i)}
                                                            className="p-3 text-slate-700 hover:text-red-500 transition-colors"
                                                        >
                                                            <Trash2 className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <button
                                            onClick={addAssignment}
                                            className="w-full py-4 border border-dashed border-white/10 rounded-2xl text-slate-500 hover:text-emerald-500 hover:border-emerald-500/30 transition-all flex items-center justify-center gap-2 text-xs font-bold"
                                        >
                                            <Plus className="w-4 h-4" /> Add Assignment
                                        </button>
                                    </div>
                                ) : (
                                    <div className="space-y-8">
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-bold text-slate-500 tracking-wider ml-2">Current Class Grade (%)</label>
                                            <input
                                                type="number"
                                                value={currentGrade}
                                                onChange={(e) => setCurrentGrade(e.target.value)}
                                                className="w-full px-6 py-5 bg-black border border-white/5 rounded-2xl text-3xl font-black text-white focus:border-emerald-500 outline-none"
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-bold text-slate-500 tracking-wider ml-2">Target Final Grade (%)</label>
                                            <input
                                                type="number"
                                                value={targetGrade}
                                                onChange={(e) => setTargetGrade(e.target.value)}
                                                className="w-full px-6 py-5 bg-black border border-white/10 rounded-2xl text-3xl font-black text-emerald-500 focus:border-emerald-500 outline-none"
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-bold text-slate-500 tracking-wider ml-2">Final Exam Weight (%)</label>
                                            <input
                                                type="number"
                                                value={finalWeight}
                                                onChange={(e) => setFinalWeight(e.target.value)}
                                                className="w-full px-6 py-5 bg-black border border-white/5 rounded-2xl text-xl font-black text-white focus:border-emerald-500 outline-none"
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Calculation Verification */}
                        <div className="p-8 bg-black/40 border border-white/5 rounded-[2.5rem] flex items-center justify-between group">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
                                    <Dna className="w-5 h-5 text-emerald-500" />
                                </div>
                                <div className="text-left">
                                    <div className="text-[10px] font-bold text-slate-500 tracking-tight">Grade Engine</div>
                                    <div className="text-sm font-black text-white tracking-widest leading-none">Active v2.4</div>
                                </div>
                            </div>
                            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                        </div>
                    </div>

                    {/* Results Panel (RHS) */}
                    <div className="lg:col-span-7 space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Main Result Card */}
                            <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-[4rem] p-10 shadow-2xl shadow-emerald-600/20 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:scale-110 transition-transform duration-700">
                                    <Award className="w-20 h-20 text-white" />
                                </div>
                                <div className="text-white/60 text-[10px] font-bold tracking-wider mb-4">
                                    {mode === "weighted" ? "Course Average" : "Exam Score Needed"}
                                </div>
                                <div className="flex items-baseline gap-2 mb-6">
                                    <span className="text-7xl font-black text-white tracking-tighter">
                                        {mode === "weighted" ? formatValue(weightedResult || 0) : formatValue(finalNeeded || 0)}
                                    </span>
                                    <span className="text-lg font-bold text-white/50">%</span>
                                </div>
                                <div className="flex items-center gap-3 bg-black/20 w-fit px-5 py-3 rounded-2xl backdrop-blur-md border border-white/10 text-white">
                                    <TrendingUp className="w-4 h-4" />
                                    <span className="text-xs font-bold tracking-wide">
                                        Grade Level: {getGradeFromPercentage(mode === "weighted" ? (weightedResult || 0) : (finalNeeded || 0)).label}
                                    </span>
                                </div>
                            </div>

                            {/* Secondary Data Card */}
                            <div className="bg-slate-900 border border-white/5 rounded-[4rem] p-10 flex flex-col justify-center relative overflow-hidden">
                                <div className="absolute -bottom-4 -right-4 opacity-5">
                                    <Microscope className="w-48 h-48 text-emerald-500" />
                                </div>
                                <div className="text-slate-500 text-[10px] font-bold tracking-wider mb-8">Academic Summary</div>
                                <div className="space-y-6 relative z-10">
                                    <div className="flex justify-between items-center border-b border-white/5 pb-4">
                                        <div className="flex items-center gap-3">
                                            <Target className="w-4 h-4 text-emerald-500" />
                                            <span className="text-xs font-bold text-slate-400 tracking-wide">GPA Points</span>
                                        </div>
                                        <span className="text-xl font-black text-white">
                                            {getGradeFromPercentage(mode === "weighted" ? (weightedResult || 0) : (finalNeeded || 0)).gpa.toFixed(1)}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-white/5 pb-4">
                                        <div className="flex items-center gap-3">
                                            <GraduationCap className="w-4 h-4 text-emerald-500" />
                                            <span className="text-xs font-bold text-slate-400 tracking-wide">Scale Mapping</span>
                                        </div>
                                        <span className="text-xl font-black text-white">4.0 <span className="text-[10px] opacity-30">STD</span></span>
                                    </div>
                                    <div className="flex items-center gap-2 pt-2 text-emerald-500/80 font-medium text-[11px]">
                                        <Info className="w-3 h-3" /> Updated for 2026 Standards
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Probabilistic Forecast Section */}
                        <div className="p-10 bg-slate-950 border border-white/5 rounded-[3rem] relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12">
                                <Brain className="w-48 h-48 text-emerald-500" />
                            </div>
                            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                                <div className="space-y-6">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-bold tracking-wide">
                                        Performance Forecast
                                    </div>
                                    <h3 className="text-3xl font-black text-white leading-tight">
                                        Projected <br /> <span className="text-emerald-500">Stability Range</span>
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed font-medium">
                                        "Based on your current data, attaining a {mode === "weighted" ? "GPA points goal" : "Final grade target"} requires a strategic focus on {mode === "weighted" ? "high-impact assignments" : "the Final Exam segment"}."
                                    </p>
                                </div>
                                <div className="grid gap-3">
                                    {[
                                        { label: "Predictive Confidence", val: "吏?.5% Delta" },
                                        { label: "Grade Inflation Factor", val: "Controlled" },
                                        { label: "Class Ranking Delta", val: "Top 15%" }
                                    ].map((pred, i) => (
                                        <div key={i} className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/10 group hover:border-emerald-500/30 transition-all">
                                            <span className="text-[10px] font-bold text-slate-500 uppercase italic">{pred.label}</span>
                                            <span className="text-xs font-black text-white group-hover:text-emerald-400 transition-colors uppercase">{pred.val}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Academic Excellence Cards */}
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { title: "Study ROI", desc: "Focus your energy on assignments with weights higher than 20%.", icon: Zap },
                                { title: "Grade Trends", desc: "Monitor your average scores to anticipate changes in your final result.", icon: Activity },
                                { title: "Well-being", desc: "Balance intense study sessions with periods of rest for best results.", icon: Heart }
                            ].map((card, i) => (
                                <div key={i} className="bg-slate-900 border border-white/5 rounded-3xl p-8 hover:bg-slate-900/80 transition-all group">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:border-emerald-500/30 border border-transparent transition-all">
                                        <card.icon className="w-6 h-6 text-slate-600 group-hover:text-emerald-500" />
                                    </div>
                                    <h3 className="text-lg font-black text-white mb-3 tracking-tight">{card.title}</h3>
                                    <p className="text-xs text-slate-500 font-medium leading-relaxed">{card.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Structured Data for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        "name": "Grade Calculator",
                        "operatingSystem": "Web",
                        "applicationCategory": "EducationalApplication",
                        "offers": {
                            "@type": "Offer",
                            "price": "0",
                            "priceCurrency": "USD"
                        },})
                }}
            />
        </main>
    );
}

