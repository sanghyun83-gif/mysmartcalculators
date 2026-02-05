"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Stethoscope, ArrowRight, Activity, Info } from "lucide-react";
import { SITE, WHIPLASH_GRADES, formatCurrency, getGradeColor } from "@/lib/calculators/whiplash";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function InjuryGradesPage() {
    const gradeList = Object.entries(WHIPLASH_GRADES);
    const [selectedGrade, setSelectedGrade] = useState<string | null>(null);

    const selectedData = selectedGrade ? WHIPLASH_GRADES[selectedGrade as keyof typeof WHIPLASH_GRADES] : null;

    const getEstimate = () => {
        if (!selectedData) return null;
        const avg = Math.round((selectedData.avgSettlement.min + selectedData.avgSettlement.max) / 2);
        const withAttorney = Math.round(avg * 0.67);
        return { avg, withAttorney };
    };

    const estimate = getEstimate();

    return (
        <>
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/whiplash" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <Stethoscope className="w-5 h-5 text-amber-500" />
                        <span className="text-lg font-bold text-white">Whiplash Grades Guide</span>
                    </div>
                    <span className="ml-auto text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">
                        {SITE.year}
                    </span>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 py-8">
                {/* Page Header */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        Whiplash Grades & Settlement Values
                    </h1>
                    <p className="text-slate-400">
                        Based on the Quebec Task Force Classification System ({SITE.year})
                    </p>
                </div>

                {/* Interactive Calculator */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Activity className="w-5 h-5 text-amber-500" />
                        Select Your Whiplash Grade
                    </h2>

                    {/* Grade Selection */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                        {gradeList.map(([key, grade]) => (
                            <button
                                key={key}
                                onClick={() => setSelectedGrade(key)}
                                className={`p-4 rounded-lg border text-left transition-all ${selectedGrade === key
                                    ? "bg-amber-600 border-amber-500 text-white"
                                    : "bg-slate-700/50 border-slate-600 text-slate-300 hover:border-amber-500"
                                    }`}
                            >
                                <div className="text-sm font-semibold">{grade.name.split(" - ")[0]}</div>
                                <div className="text-xs mt-1 opacity-75">{grade.recovery}</div>
                            </button>
                        ))}
                    </div>

                    {/* Result Display */}
                    {selectedData && estimate && (
                        <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl p-6 text-white">
                            <p className="text-sm text-amber-100 mb-1">{selectedData.name}</p>
                            <p className="text-3xl font-bold mb-2">
                                {formatCurrency(selectedData.avgSettlement.min)} - {formatCurrency(selectedData.avgSettlement.max)}
                            </p>
                            <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-amber-400/30">
                                <div>
                                    <p className="text-xs text-amber-200">Average</p>
                                    <p className="text-lg font-semibold">{formatCurrency(estimate.avg)}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-amber-200">After Attorney (33%)</p>
                                    <p className="text-lg font-semibold">{formatCurrency(estimate.withAttorney)}</p>
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-amber-400/30 text-sm space-y-1">
                                <p><span className="text-amber-200">Symptoms:</span> {selectedData.symptoms}</p>
                                <p><span className="text-amber-200">Signs:</span> {selectedData.signs}</p>
                                <p><span className="text-amber-200">Recovery:</span> {selectedData.recovery}</p>
                                <p><span className="text-amber-200">Treatment:</span> {selectedData.treatment}</p>
                            </div>
                        </div>
                    )}

                    {!selectedData && (
                        <div className="text-center py-8 text-slate-400">
                            <Activity className="w-12 h-12 mx-auto mb-3 opacity-50" />
                            <p>Select a whiplash grade above to see settlement estimates</p>
                        </div>
                    )}
                </div>

                {/* Summary Table */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden mb-8">
                    <div className="p-4 border-b border-slate-700">
                        <h2 className="text-lg font-bold text-white">
                            Quebec Task Force Whiplash Classification
                        </h2>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead className="bg-slate-700/50">
                                <tr>
                                    <th className="px-4 py-3 text-left text-slate-300 font-medium">Grade</th>
                                    <th className="px-4 py-3 text-left text-slate-300 font-medium">Symptoms</th>
                                    <th className="px-4 py-3 text-center text-slate-300 font-medium">Recovery</th>
                                    <th className="px-4 py-3 text-right text-slate-300 font-medium">Settlement Range</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700">
                                {gradeList.map(([key, grade]) => (
                                    <tr
                                        key={key}
                                        className={`hover:bg-slate-700/30 cursor-pointer ${selectedGrade === key ? "bg-amber-900/20" : ""
                                            }`}
                                        onClick={() => setSelectedGrade(key)}
                                    >
                                        <td className="px-4 py-3 text-white font-medium">{grade.name.split(" - ")[0]}</td>
                                        <td className="px-4 py-3 text-slate-400">{grade.symptoms}</td>
                                        <td className="px-4 py-3 text-center text-slate-400">{grade.recovery}</td>
                                        <td className="px-4 py-3 text-right text-amber-400 font-medium">
                                            {formatCurrency(grade.avgSettlement.min)} - {formatCurrency(grade.avgSettlement.max)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Info Box */}
                <div className="bg-blue-900/20 border border-blue-700/50 rounded-xl p-4 mb-8">
                    <div className="flex items-start gap-3">
                        <Info className="w-5 h-5 text-blue-400 mt-0.5" />
                        <div className="text-sm text-blue-200">
                            <p className="font-medium text-white mb-1">Delayed Symptoms Are Common</p>
                            <p>
                                Whiplash symptoms often appear 24-72 hours after the accident. Don&apos;t assume you&apos;re uninjured
                                just because you feel fine at the scene. Seek medical evaluation within 72 hours for both
                                your health and your insurance claim.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Ad Placeholder */}
                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center">
                    <p className="text-sm text-slate-500">Advertisement</p>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link
                        href="/whiplash/settlement"
                        className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Get Personalized Settlement Estimate
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    Settlement values are estimates based on {SITE.year} national data.
                    Actual settlements vary based on case specifics, state laws, and insurance limits.
                </p>
            </main>
        </>
    );
}
