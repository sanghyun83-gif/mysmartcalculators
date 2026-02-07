"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Stethoscope, ArrowRight, Calculator, Info, AlertTriangle } from "lucide-react";
import { SITE, MALPRACTICE_TYPES, formatCurrency, getSeverityColor } from "@/lib/calculators/malpractice";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function MalpracticeTypesPage() {
    const malpracticeList = Object.entries(MALPRACTICE_TYPES);
    const [selectedType, setSelectedType] = useState<string | null>(null);

    const selectedData = selectedType ? MALPRACTICE_TYPES[selectedType as keyof typeof MALPRACTICE_TYPES] : null;

    // Calculate estimated settlement for selected type
    const getEstimate = () => {
        if (!selectedData) return null;
        const avg = Math.round((selectedData.avgSettlement.min + selectedData.avgSettlement.max) / 2);
        const withAttorney = Math.round(avg * 0.67); // After 33% attorney fees
        return { avg, withAttorney };
    };

    const estimate = getEstimate();

    return (
        <>

            <main className="max-w-4xl mx-auto px-4 py-8">
                {/* Page Header */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        {SITE.year} Medical Malpractice Settlement by Type
                    </h1>
                    <p className="text-slate-400">
                        Select the type of malpractice to see average settlement values
                    </p>
                </div>

                {/* Interactive Calculator */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Calculator className="w-5 h-5 text-amber-500" />
                        Quick Settlement Estimator
                    </h2>

                    {/* Malpractice Type Selection Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                        {malpracticeList.map(([key, type]) => (
                            <button
                                key={key}
                                onClick={() => setSelectedType(key)}
                                className={`p-3 rounded-lg border text-left transition-all ${selectedType === key
                                    ? "bg-amber-600 border-amber-500 text-white"
                                    : "bg-slate-700/50 border-slate-600 text-slate-300 hover:border-amber-500"
                                    }`}
                            >
                                <div className="text-sm font-medium truncate">{type.name}</div>
                                <div className={`text-xs mt-1 ${selectedType === key ? "text-amber-200" : getSeverityColor(type.severity)
                                    }`}>
                                    {type.severity.charAt(0).toUpperCase() + type.severity.slice(1)}
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
                            <Stethoscope className="w-12 h-12 mx-auto mb-3 opacity-50" />
                            <p>Select a malpractice type above to see settlement estimates</p>
                        </div>
                    )}
                </div>

                {/* Summary Table */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden mb-8">
                    <div className="p-4 border-b border-slate-700">
                        <h2 className="text-lg font-bold text-white">
                            All Malpractice Types - Quick Reference
                        </h2>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead className="bg-slate-700/50">
                                <tr>
                                    <th className="px-4 py-3 text-left text-slate-300 font-medium">Malpractice Type</th>
                                    <th className="px-4 py-3 text-center text-slate-300 font-medium">Severity</th>
                                    <th className="px-4 py-3 text-right text-slate-300 font-medium">Settlement Range</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700">
                                {malpracticeList.map(([key, type]) => (
                                    <tr
                                        key={key}
                                        className={`hover:bg-slate-700/30 cursor-pointer ${selectedType === key ? "bg-amber-900/20" : ""
                                            }`}
                                        onClick={() => setSelectedType(key)}
                                    >
                                        <td className="px-4 py-3 text-white">{type.name}</td>
                                        <td className={`px-4 py-3 text-center ${getSeverityColor(type.severity)}`}>
                                            {type.severity.charAt(0).toUpperCase() + type.severity.slice(1)}
                                        </td>
                                        <td className="px-4 py-3 text-right text-amber-400 font-medium">
                                            {formatCurrency(type.avgSettlement.min)} - {formatCurrency(type.avgSettlement.max)}
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
                        <AlertTriangle className="w-5 h-5 text-amber-400 mt-0.5" />
                        <div className="text-sm text-amber-200">
                            <p className="font-medium text-white mb-1">Time Limits Apply</p>
                            <p>
                                Medical malpractice claims have strict statutes of limitations (typically 2-3 years).
                                Evidence must be preserved and expert witnesses are required. Consult a malpractice
                                attorney immediately if you suspect negligence.
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
                        href="/malpractice/settlement"
                        className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Get Personalized Estimate
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    Settlement values are estimates based on {SITE.year} data.
                    Medical malpractice cases require expert medical testimony. Not legal advice.
                </p>
            </main>
        </>
    );
}
