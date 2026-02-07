"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Brain, FileText, AlertTriangle, Heart } from "lucide-react";
import { SITE, TBI_2026, formatCurrency } from "@/lib/calculators/tbi";

export default function TBIGuidePage() {
    return (
        <>
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/tbi" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-amber-500" />
                        <span className="text-lg font-bold text-white">TBI Guide</span>
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
                        Understanding Traumatic Brain Injuries
                    </h1>
                    <p className="text-slate-400">
                        GCS scores, severity levels, symptoms, and the legal process
                    </p>
                </div>

                {/* TBI Statistics */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">
                        {SITE.year} TBI Statistics
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-amber-900/20 border border-amber-500/50 rounded-lg p-4 text-center">
                            <p className="text-2xl font-bold text-amber-400">{(TBI_2026.statistics.annualCases / 1000000).toFixed(1)}M</p>
                            <p className="text-sm text-amber-200">Cases/Year</p>
                        </div>
                        <div className="bg-orange-900/20 border border-orange-500/50 rounded-lg p-4 text-center">
                            <p className="text-2xl font-bold text-orange-400">{TBI_2026.statistics.annualDeaths.toLocaleString()}</p>
                            <p className="text-sm text-orange-200">Deaths/Year</p>
                        </div>
                        <div className="bg-yellow-900/20 border border-yellow-500/50 rounded-lg p-4 text-center">
                            <p className="text-2xl font-bold text-yellow-400">{TBI_2026.statistics.avgAge}</p>
                            <p className="text-sm text-yellow-200">Avg Age</p>
                        </div>
                        <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-4 text-center">
                            <p className="text-2xl font-bold text-red-400">{TBI_2026.statistics.malePercent}%</p>
                            <p className="text-sm text-red-200">Male</p>
                        </div>
                    </div>
                </div>

                {/* GCS Scale */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Glasgow Coma Scale (GCS)
                    </h2>
                    <p className="text-slate-400 text-sm mb-4">
                        The GCS measures level of consciousness on a scale of 3-15 based on eye, verbal, and motor responses.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-green-900/20 border border-green-500/50 rounded-lg p-4 text-center">
                            <p className="text-xl font-bold text-green-400">13-15</p>
                            <p className="text-sm text-green-200">Mild TBI</p>
                        </div>
                        <div className="bg-yellow-900/20 border border-yellow-500/50 rounded-lg p-4 text-center">
                            <p className="text-xl font-bold text-yellow-400">9-12</p>
                            <p className="text-sm text-yellow-200">Moderate TBI</p>
                        </div>
                        <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-4 text-center">
                            <p className="text-xl font-bold text-red-400">3-8</p>
                            <p className="text-sm text-red-200">Severe TBI</p>
                        </div>
                    </div>
                </div>

                {/* Severity Table */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">
                        TBI Severity Levels & Settlement Ranges
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-slate-700">
                                    <th className="py-3 text-left text-slate-400">Injury Level</th>
                                    <th className="py-3 text-center text-slate-400">GCS</th>
                                    <th className="py-3 text-center text-slate-400">Avg Settlement</th>
                                    <th className="py-3 text-center text-slate-400">Lifetime Care</th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-300">
                                {TBI_2026.severityLevels.map((level, index) => (
                                    <tr key={index} className="border-b border-slate-700/50">
                                        <td className="py-3">
                                            <p className="text-white font-medium">{level.level}</p>
                                            <p className="text-xs text-slate-500">{level.description}</p>
                                        </td>
                                        <td className="py-3 text-center text-amber-300 font-medium">
                                            {level.gcsScore}
                                        </td>
                                        <td className="py-3 text-center font-medium text-amber-400">
                                            {formatCurrency(level.avgSettlement)}
                                        </td>
                                        <td className="py-3 text-center text-slate-300">
                                            {formatCurrency(level.lifetimeCost)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Causes & Symptoms */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-amber-900/20 border border-amber-500/50 rounded-xl p-6">
                        <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5 text-amber-500" />
                            Common Causes
                        </h2>
                        <ul className="space-y-2 text-sm text-amber-200">
                            <li>• Falls ({TBI_2026.statistics.fallsPercent}%)</li>
                            <li>• Vehicle Accidents ({TBI_2026.statistics.vehiclePercent}%)</li>
                            <li>• Assaults ({TBI_2026.statistics.assaultPercent}%)</li>
                            <li>• Sports Injuries ({TBI_2026.statistics.sportsPercent}%)</li>
                            <li>• Other/Unknown</li>
                        </ul>
                    </div>
                    <div className="bg-orange-900/20 border border-orange-500/50 rounded-xl p-6">
                        <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                            <Heart className="w-5 h-5 text-orange-500" />
                            Common Symptoms
                        </h2>
                        <ul className="space-y-2 text-sm text-orange-200">
                            {TBI_2026.symptoms.map((symptom, index) => (
                                <li key={index}>• {symptom}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Ad Placeholder */}
                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center">
                    <p className="text-sm text-slate-500">Advertisement</p>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link
                        href="/tbi/calculator"
                        className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Calculate Your Settlement
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Citation */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    {TBI_2026.citationNote}
                </p>
            </main>
        </>
    );
}
