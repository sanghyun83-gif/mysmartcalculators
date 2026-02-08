"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Heart, ArrowRight, Calculator, Info, AlertCircle } from "lucide-react";
import { SITE, DEATH_CASE_TYPES, formatCurrency, getCaseStrengthColor } from "@/lib/calculators/wrongful-death-v2";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function DeathCaseTypesPage() {
    const caseList = Object.entries(DEATH_CASE_TYPES);
    const [selectedType, setSelectedType] = useState<string | null>(null);

    const selectedData = selectedType ? DEATH_CASE_TYPES[selectedType as keyof typeof DEATH_CASE_TYPES] : null;

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
                    <Link href="/wrongful-death" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <Heart className="w-5 h-5 text-amber-500" />
                        <span className="text-lg font-bold text-white">Death Case Types</span>
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
                        {SITE.year} Wrongful Death Settlements by Cause
                    </h1>
                    <p className="text-slate-400">
                        Select the cause of death to see average settlement values
                    </p>
                </div>

                {/* Interactive Calculator */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Calculator className="w-5 h-5 text-amber-500" />
                        Quick Settlement Estimator
                    </h2>

                    {/* Case Type Selection Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                        {caseList.map(([key, caseType]) => (
                            <button
                                key={key}
                                onClick={() => setSelectedType(key)}
                                className={`p-3 rounded-lg border text-left transition-all ${selectedType === key
                                    ? "bg-amber-600 border-amber-500 text-white"
                                    : "bg-slate-700/50 border-slate-600 text-slate-300 hover:border-amber-500"
                                    }`}
                            >
                                <div className="text-sm font-medium truncate">{caseType.name}</div>
                                <div className={`text-xs mt-1 ${selectedType === key ? "text-amber-200" : getCaseStrengthColor(caseType.severity)}`}>
                                    {caseType.severity.charAt(0).toUpperCase() + caseType.severity.slice(1)}
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Result Display */}
                    {selectedData && estimate && (
                        <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl p-6 text-white">
                            <p className="text-sm text-amber-100 mb-1">{selectedData.name} - Estimated Settlement</p>
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
                            <div className="mt-4 pt-4 border-t border-amber-400/30 text-sm">
                                <p><span className="text-amber-200">Examples:</span> {selectedData.examples}</p>
                                <p className="mt-2 text-amber-100">{selectedData.description}</p>
                            </div>
                        </div>
                    )}

                    {!selectedData && (
                        <div className="text-center py-8 text-slate-400">
                            <Heart className="w-12 h-12 mx-auto mb-3 opacity-50" />
                            <p>Select a case type above to see settlement estimates</p>
                        </div>
                    )}
                </div>

                {/* Summary Table */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden mb-8">
                    <div className="p-4 border-b border-slate-700">
                        <h2 className="text-lg font-bold text-white">
                            All Case Types - Quick Reference
                        </h2>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead className="bg-slate-700/50">
                                <tr>
                                    <th className="px-4 py-3 text-left text-slate-300 font-medium">Cause of Death</th>
                                    <th className="px-4 py-3 text-center text-slate-300 font-medium">Case Strength</th>
                                    <th className="px-4 py-3 text-right text-slate-300 font-medium">Settlement Range</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700">
                                {caseList.map(([key, caseType]) => (
                                    <tr
                                        key={key}
                                        className={`hover:bg-slate-700/30 cursor-pointer ${selectedType === key ? "bg-amber-900/20" : ""}`}
                                        onClick={() => setSelectedType(key)}
                                    >
                                        <td className="px-4 py-3 text-white">{caseType.name}</td>
                                        <td className={`px-4 py-3 text-center ${getCaseStrengthColor(caseType.severity)}`}>
                                            {caseType.severity.charAt(0).toUpperCase() + caseType.severity.slice(1)}
                                        </td>
                                        <td className="px-4 py-3 text-right text-amber-400 font-medium">
                                            {formatCurrency(caseType.avgSettlement.min)} - {formatCurrency(caseType.avgSettlement.max)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Warning */}
                <div className="bg-amber-900/20 border border-amber-700/50 rounded-xl p-4 mb-8">
                    <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-amber-400 mt-0.5" />
                        <div className="text-sm text-amber-200">
                            <p className="font-medium text-white mb-1">Time is Critical</p>
                            <p>
                                Wrongful death claims have strict statutes of limitations (typically 2-3 years).
                                Evidence must be preserved immediately. Consult an attorney as soon as possible.
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
                        href="/wrongful-death/settlement"
                        className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Get Personalized Estimate
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    Settlement values are estimates based on {SITE.year} data.
                    Actual settlements vary significantly based on case specifics. Not legal advice.
                </p>
            </main>
        </>
    );
}
