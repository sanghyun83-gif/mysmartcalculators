"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Activity, FileText, AlertTriangle, Heart } from "lucide-react";
import { SITE, SCI_2026, formatCurrency } from "@/lib/calculators/spinal-cord";

export default function RecoveryGuidePage() {
    return (
        <>
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/spinal-cord" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-amber-500" />
                        <span className="text-lg font-bold text-white">SCI Recovery Guide</span>
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
                        Understanding Spinal Cord Injuries
                    </h1>
                    <p className="text-slate-400">
                        Injury levels, treatment costs, and the legal process
                    </p>
                </div>

                {/* SCI Statistics */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">
                        {SITE.year} SCI Statistics
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-amber-900/20 border border-amber-500/50 rounded-lg p-4 text-center">
                            <p className="text-2xl font-bold text-amber-400">{SCI_2026.statistics.annualNewCases.toLocaleString()}</p>
                            <p className="text-sm text-amber-200">New Cases/Year</p>
                        </div>
                        <div className="bg-orange-900/20 border border-orange-500/50 rounded-lg p-4 text-center">
                            <p className="text-2xl font-bold text-orange-400">{SCI_2026.statistics.vehicleAccidentPercent}%</p>
                            <p className="text-sm text-orange-200">Vehicle Accidents</p>
                        </div>
                        <div className="bg-yellow-900/20 border border-yellow-500/50 rounded-lg p-4 text-center">
                            <p className="text-2xl font-bold text-yellow-400">{SCI_2026.statistics.fallsPercent}%</p>
                            <p className="text-sm text-yellow-200">Falls</p>
                        </div>
                        <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-4 text-center">
                            <p className="text-2xl font-bold text-red-400">{SCI_2026.statistics.malePercent}%</p>
                            <p className="text-sm text-red-200">Male Patients</p>
                        </div>
                    </div>
                </div>

                {/* Injury Levels Table */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">
                        SCI Severity Levels & Settlement Ranges
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-slate-700">
                                    <th className="py-3 text-left text-slate-400">Injury Level</th>
                                    <th className="py-3 text-center text-slate-400">Avg Settlement</th>
                                    <th className="py-3 text-center text-slate-400">Lifetime Care</th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-300">
                                {SCI_2026.severityLevels.map((level, index) => (
                                    <tr key={index} className="border-b border-slate-700/50">
                                        <td className="py-3">
                                            <p className="text-white font-medium">{level.level}</p>
                                            <p className="text-xs text-slate-500">{level.description}</p>
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

                {/* What To Know */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-amber-900/20 border border-amber-500/50 rounded-xl p-6">
                        <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5 text-amber-500" />
                            Causes of SCI
                        </h2>
                        <ul className="space-y-2 text-sm text-amber-200">
                            <li>• Vehicle Accidents ({SCI_2026.statistics.vehicleAccidentPercent}%)</li>
                            <li>• Falls ({SCI_2026.statistics.fallsPercent}%)</li>
                            <li>• Violence ({SCI_2026.statistics.violencePercent}%)</li>
                            <li>• Sports/Recreation ({SCI_2026.statistics.sportsPercent}%)</li>
                            <li>• Medical/Surgical Complications</li>
                        </ul>
                    </div>
                    <div className="bg-orange-900/20 border border-orange-500/50 rounded-xl p-6">
                        <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                            <Heart className="w-5 h-5 text-orange-500" />
                            Settlement Factors
                        </h2>
                        <ul className="space-y-2 text-sm text-orange-200">
                            <li>• Injury severity (complete vs incomplete)</li>
                            <li>• Level of injury (cervical vs thoracic)</li>
                            <li>• Lifetime care requirements</li>
                            <li>• Lost earning capacity</li>
                            <li>• Defendant&apos;s degree of negligence</li>
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
                        href="/spinal-cord/calculator"
                        className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Calculate Your Settlement
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Citation */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    {SCI_2026.citationNote}
                </p>
            </main>
        </>
    );
}
