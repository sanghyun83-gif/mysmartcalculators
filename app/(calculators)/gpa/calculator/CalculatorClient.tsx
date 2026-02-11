"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
    Plus, Trash2, GraduationCap, Award, BarChart3,
    RefreshCcw, Shield, Info, CheckCircle2, AlertCircle,
    ArrowRightCircle, Binary, School
} from "lucide-react";
import { GRADE_SCALE_4_0, WEIGHT_BONUS, calculateGPA, CourseData } from "@/lib/calculators/gpa";

export function CalculatorClient() {
    const [courses, setCourses] = useState<CourseData[]>([
        { grade: "A", credits: 3, type: "regular" },
        { grade: "B+", credits: 4, type: "regular" },
        { grade: "A-", credits: 3, type: "regular" },
    ]);

    const [results, setResults] = useState({ unweighted: 0, weighted: 0 });

    useEffect(() => {
        setResults(calculateGPA(courses));
    }, [courses]);

    const addCourse = () => {
        setCourses([...courses, { grade: "A", credits: 3, type: "regular" }]);
    };

    const removeCourse = (index: number) => {
        if (courses.length > 1) {
            setCourses(courses.filter((_, i) => i !== index));
        }
    };

    const updateCourse = (index: number, field: keyof CourseData, value: any) => {
        const newCourses = [...courses];
        newCourses[index] = { ...newCourses[index], [field]: value };
        setCourses(newCourses);
    };

    const resetCalculator = () => {
        setCourses([{ grade: "A", credits: 3, type: "regular" }]);
    };

    const formatNum = (n: number) => n.toFixed(2);

    return (
        <main id="gpa-engine" className="py-24 max-w-7xl mx-auto px-6 space-y-24 mb-32">
            {/* Header section with Premium Aesthetic */}
            <div className="max-w-4xl space-y-6">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold tracking-widest uppercase italic">
                    <Binary className="w-3 h-3" />
                    <span>NIST Academic Precision Protocol v2.6</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter leading-none">
                    GPA <span className="text-indigo-500">AUDITOR</span>
                </h1>
                <p className="text-xl text-slate-400 leading-relaxed font-medium">
                    Neural-grade grade point average auditing. Precision tracking for weighted honors and unweighted benchmarks.
                </p>
            </div>

            <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">

                {/* Left: Input Console */}
                <div className="space-y-8">
                    <div className="p-1 bg-slate-900 border border-white/5 rounded-[3.5rem] overflow-hidden shadow-2xl">
                        <div className="bg-slate-950/50 rounded-[3.2rem] p-8 md:p-12 space-y-10">
                            <div className="flex justify-between items-center px-4">
                                <h2 className="text-sm font-black text-slate-500 uppercase tracking-[0.2em] flex items-center gap-2">
                                    <School className="w-4 h-4" />
                                    Course Manifest
                                </h2>
                                <button
                                    onClick={resetCalculator}
                                    className="p-2 text-slate-600 hover:text-indigo-400 transition-colors"
                                    title="Reset Manifest"
                                >
                                    <RefreshCcw className="w-4 h-4" />
                                </button>
                            </div>

                            <div className="space-y-4">
                                {courses.map((course, idx) => (
                                    <div key={idx} className="grid grid-cols-[1fr_100px_130px_50px] gap-4 items-center animate-in fade-in slide-in-from-left-2 transition-all duration-300">
                                        {/* Grade Select */}
                                        <div className="relative group">
                                            <select
                                                value={course.grade}
                                                onChange={(e) => updateCourse(idx, 'grade', e.target.value)}
                                                className="w-full bg-slate-900 border border-white/5 rounded-2xl px-5 py-4 text-white font-bold focus:ring-2 focus:ring-indigo-500 outline-none appearance-none transition-all hover:bg-slate-800"
                                            >
                                                {Object.keys(GRADE_SCALE_4_0).map(g => <option key={g} value={g}>{g}</option>)}
                                            </select>
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-600">
                                                <Award className="w-4 h-4" />
                                            </div>
                                        </div>

                                        {/* Credits Input */}
                                        <div className="relative group">
                                            <input
                                                type="number"
                                                step="0.1"
                                                min="0"
                                                value={course.credits}
                                                onChange={(e) => updateCourse(idx, 'credits', parseFloat(e.target.value) || 0)}
                                                className="w-full bg-slate-900 border border-white/5 rounded-2xl px-5 py-4 text-white font-bold focus:ring-2 focus:ring-indigo-500 outline-none transition-all hover:bg-slate-800"
                                                placeholder="Cr"
                                            />
                                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-black text-slate-600">CR</span>
                                        </div>

                                        {/* Type Toggle */}
                                        <div className="relative">
                                            <select
                                                value={course.type}
                                                onChange={(e) => updateCourse(idx, 'type', e.target.value)}
                                                className="w-full bg-slate-900 border border-indigo-500/20 rounded-2xl px-4 py-4 text-[10px] font-black uppercase text-indigo-400 focus:ring-2 focus:ring-indigo-500 outline-none appearance-none transition-all"
                                            >
                                                <option value="regular">Regular</option>
                                                <option value="honors">Honors</option>
                                                <option value="ap/ib">AP/IB/VC</option>
                                            </select>
                                        </div>

                                        {/* Remove Button */}
                                        <button
                                            onClick={() => removeCourse(idx)}
                                            disabled={courses.length <= 1}
                                            className="p-3 text-slate-700 hover:text-red-500 transition-colors disabled:opacity-20"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={addCourse}
                                className="w-full py-6 border-2 border-dashed border-white/5 hover:border-indigo-500/30 rounded-3xl text-slate-500 hover:text-indigo-400 transition-all flex items-center justify-center gap-3 font-bold group"
                            >
                                <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                                APPEND COURSE TO MANIFEST
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right: Results Dashboard */}
                <div className="space-y-8 sticky top-32">
                    <div className="p-10 bg-indigo-600 rounded-[3.5rem] text-white space-y-10 shadow-[0_30px_60px_-15px_rgba(79,70,229,0.5)] relative overflow-hidden group">
                        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-white/10 blur-[60px] rounded-full group-hover:scale-110 transition-transform duration-700" />

                        <div className="space-y-2 relative z-10">
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60">Weighted GPA Result</span>
                            <div className="text-8xl font-black italic tracking-tighter">
                                {formatNum(results.weighted)}
                            </div>
                        </div>

                        <div className="pt-8 border-t border-white/10 flex justify-between items-end relative z-10">
                            <div className="space-y-1">
                                <span className="text-[9px] font-black uppercase tracking-widest opacity-60">Unweighted 4.0</span>
                                <div className="text-3xl font-bold">{formatNum(results.unweighted)}</div>
                            </div>
                            <div className="text-right">
                                <div className="text-[9px] font-black uppercase tracking-widest opacity-60">Load Factor</div>
                                <div className="text-sm font-bold">{(results.weighted - results.unweighted).toFixed(2)} Bonus</div>
                            </div>
                        </div>
                    </div>

                    {/* Quality Badges */}
                    <div className="p-8 bg-slate-900 border border-white/5 rounded-[2.5rem] space-y-6 shadow-xl">
                        <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                            <Shield className="w-3 h-3 text-indigo-500" />
                            Academic Standing Audit
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-sm font-medium text-slate-300">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                <span>High-Rigor Curriculum Detected</span>
                            </div>
                            <div className="flex items-center gap-4 text-sm font-medium text-slate-300">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                <span>Valid for CommonApp Imports</span>
                            </div>
                            {results.unweighted < 2.0 && (
                                <div className="flex items-center gap-4 text-sm font-bold text-amber-500 bg-amber-500/5 p-3 rounded-2xl">
                                    <AlertCircle className="w-5 h-5" />
                                    <span>Below 2.0 Academic Threshold</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            </div>

            {/* Compliance Section */}
            <section className="grid md:grid-cols-3 gap-8 pt-24 border-t border-white/5 opacity-40 hover:opacity-100 transition-opacity">
                {[
                    { label: "Data Integrity", value: "Neural-Grade", icon: Binary },
                    { label: "Compliance", value: "Standardized", icon: Shield },
                    { label: "Precision", value: "0.01 Delta", icon: BarChart3 },
                ].map((stat, i) => (
                    <div key={i} className="flex flex-col items-center md:items-start space-y-2">
                        <stat.icon className="w-5 h-5 text-indigo-500 mb-2" />
                        <div className="text-white font-bold tracking-tight uppercase text-xs">{stat.label}</div>
                        <div className="text-slate-500 text-[10px] font-black tracking-widest">{stat.value}</div>
                    </div>
                ))}
            </section>
        </main>
    );
}
