"use client";

import Link from "next/link";
import { ArrowLeft, Table, Info, GraduationCap, Globe, Scale, BookOpen, ChevronRight } from "lucide-react";
import { STANDARD_SCALE, SITE } from "@/lib/calculators/grade";

const NAV_LINKS = [
    { label: "Calculator", href: "/grade/calculator" },
    { label: "Scales", href: "/grade/scales" },
    { label: "Archive", href: "/grade#pedagogy" },
];

export default function ScalesClient() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-12">
            {/* Header Section */}
            <div className="mb-12">
                <Link
                    href="/grade"
                    className="inline-flex items-center gap-2 text-slate-500 hover:text-emerald-500 transition-colors font-bold tracking-wide text-[11px] mb-6"
                >
                    <ArrowLeft className="w-3 h-3" /> Back to Summary
                </Link>
                <h1 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight leading-none">
                    Grading Scales & <span className="text-emerald-500">GPA Conversion</span>
                </h1>
                <p className="text-lg text-slate-400 font-medium leading-relaxed border-l-4 border-emerald-500 pl-6">
                    "Accuracy in your grades is a key part of academic success. Use these standardized 2026 benchmarks to track your performance."
                </p>
            </div>

            {/* 1. US Standard 4.0 Scale */}
            <section className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                        <Scale className="w-6 h-6 text-emerald-500" />
                    </div>
                    <h2 className="text-2xl font-black text-white tracking-tight">Standard US 4.0 Grade Point Scale</h2>
                </div>

                <div className="overflow-hidden rounded-[2.5rem] border border-white/5 bg-slate-900/50 shadow-2xl">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-white/5 border-b border-white/10 text-[10px] font-bold tracking-wider text-emerald-400">
                            <tr>
                                <th className="px-8 py-6">Letter Grade</th>
                                <th className="px-8 py-6">Percentage Range</th>
                                <th className="px-8 py-6">Grade Points (4.0)</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 text-sm font-bold text-slate-400">
                            {STANDARD_SCALE.map((item, i) => (
                                <tr key={i} className="hover:bg-emerald-500/5 transition-colors">
                                    <td className="px-8 py-5 text-white">{item.label}</td>
                                    <td className="px-8 py-5">{item.min}% – {item.max}%</td>
                                    <td className="px-8 py-5 text-emerald-500 font-mono">{item.gpa.toFixed(1)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* 2. Global Conversion Table */}
            <section className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                        <Globe className="w-6 h-6 text-blue-500" />
                    </div>
                    <h2 className="text-2xl font-black text-white tracking-tight">International Academic Equivalence</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-8 bg-slate-900/80 border border-white/5 rounded-[2.5rem] space-y-4">
                        <h3 className="text-lg font-black text-white tracking-tight flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-500" /> UK Honours (LSE/Oxford)
                        </h3>
                        <ul className="space-y-3 text-sm text-slate-400 font-medium">
                            <li className="flex justify-between border-b border-white/5 pb-2">
                                <span>First-Class (1st)</span>
                                <span className="text-white">70% – 100%</span>
                            </li>
                            <li className="flex justify-between border-b border-white/5 pb-2">
                                <span>Upper Second (2:1)</span>
                                <span className="text-white">60% – 69%</span>
                            </li>
                            <li className="flex justify-between border-b border-white/5 pb-2">
                                <span>Lower Second (2:2)</span>
                                <span className="text-white">50% – 59%</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Third-Class (3rd)</span>
                                <span className="text-white">40% – 49%</span>
                            </li>
                        </ul>
                    </div>

                    <div className="p-8 bg-slate-900/80 border border-white/5 rounded-[2.5rem] space-y-4">
                        <h3 className="text-lg font-black text-white tracking-tight flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-indigo-500" /> European ECTS Scale
                        </h3>
                        <ul className="space-y-3 text-sm text-slate-400 font-medium">
                            <li className="flex justify-between border-b border-white/5 pb-2">
                                <span>A (Top 10%)</span>
                                <span className="text-white">Excellent</span>
                            </li>
                            <li className="flex justify-between border-b border-white/5 pb-2">
                                <span>B (Next 25%)</span>
                                <span className="text-white">Very Good</span>
                            </li>
                            <li className="flex justify-between border-b border-white/5 pb-2">
                                <span>D (Next 25%)</span>
                                <span className="text-white">Satisfactory</span>
                            </li>
                            <li className="flex justify-between">
                                <span>F (Bottom)</span>
                                <span className="text-white">Fail</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 3. Advisory Note */}
            <div className="p-8 bg-emerald-500/5 border border-emerald-500/20 rounded-[2.5rem] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                    <BookOpen className="w-24 h-24 text-emerald-500" />
                </div>
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                    <div className="text-center md:text-left space-y-2">
                        <h4 className="text-lg font-black text-white tracking-tight">Academic Variance Notice</h4>
                        <p className="text-xs text-slate-400 leading-relaxed max-w-xl">
                            Graduation requirements and GPA calculation formulas (e.g. plus/minus weighting) vary by institution. Always verify specific conversion details with your university or academic advisor.
                        </p>
                    </div>
                    <Link
                        href="/grade/calculator"
                        className="whitespace-nowrap bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-2xl font-bold text-sm transition-all flex items-center gap-2 shadow-lg"
                    >
                        Open Grade Calculator <ChevronRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </main>
    );
}
