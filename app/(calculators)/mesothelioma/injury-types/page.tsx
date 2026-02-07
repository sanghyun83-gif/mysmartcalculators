"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Stethoscope, ArrowRight, Calculator, Info } from "lucide-react";
import { SITE, INJURY_TYPES, formatCurrency, getSeverityColor } from "@/lib/calculators/mesothelioma";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function InjuryTypesPage() {
    const injuryList = Object.entries(INJURY_TYPES);
    const [selectedInjury, setSelectedInjury] = useState<string | null>(null);

    const selectedData = selectedInjury ? INJURY_TYPES[selectedInjury as keyof typeof INJURY_TYPES] : null;

    // Calculate estimated settlement for selected injury
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
                        {SITE.year} Mesothelioma Compensation by Type
                    </h1>
                    <p className="text-slate-400">
                        Select your mesothelioma type or compensation source to see estimated values
                    </p>
                </div>

                {/* Interactive Calculator */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Calculator className="w-5 h-5 text-amber-500" />
                        Quick Compensation Estimator
                    </h2>

                    {/* Injury Selection Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                        {injuryList.map(([key, injury]) => (
                            <button
                                key={key}
                                onClick={() => setSelectedInjury(key)}
                                className={`p-3 rounded-lg border text-left transition-all ${selectedInjury === key
                                    ? "bg-amber-600 border-amber-500 text-white"
                                    : "bg-slate-700/50 border-slate-600 text-slate-300 hover:border-amber-500"
                                    }`}
                            >
                                <div className="text-sm font-medium truncate">{injury.name}</div>
                                <div className={`text-xs mt-1 ${selectedInjury === key ? "text-amber-200" : getSeverityColor(injury.severity)
                                    }`}>
                                    {injury.severity.charAt(0).toUpperCase() + injury.severity.slice(1)}
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
                                <p><span className="text-amber-200">Recovery Time:</span> {selectedData.recoveryTime}</p>
                                <p className="mt-1 text-amber-100">{selectedData.description}</p>
                            </div>
                        </div>
                    )}

                    {!selectedData && (
                        <div className="text-center py-8 text-slate-400">
                            <Stethoscope className="w-12 h-12 mx-auto mb-3 opacity-50" />
                            <p>Select an injury type above to see settlement estimates</p>
                        </div>
                    )}
                </div>

                {/* Summary Table */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden mb-8">
                    <div className="p-4 border-b border-slate-700">
                        <h2 className="text-lg font-bold text-white">
                            All Compensation Types - Quick Reference
                        </h2>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead className="bg-slate-700/50">
                                <tr>
                                    <th className="px-4 py-3 text-left text-slate-300 font-medium">Type / Source</th>
                                    <th className="px-4 py-3 text-center text-slate-300 font-medium">Category</th>
                                    <th className="px-4 py-3 text-center text-slate-300 font-medium">Timeline</th>
                                    <th className="px-4 py-3 text-right text-slate-300 font-medium">Compensation Range</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700">
                                {injuryList.map(([key, injury]) => (
                                    <tr
                                        key={key}
                                        className={`hover:bg-slate-700/30 cursor-pointer ${selectedInjury === key ? "bg-amber-900/20" : ""
                                            }`}
                                        onClick={() => setSelectedInjury(key)}
                                    >
                                        <td className="px-4 py-3 text-white">{injury.name}</td>
                                        <td className={`px-4 py-3 text-center ${getSeverityColor(injury.severity)}`}>
                                            {injury.severity.charAt(0).toUpperCase() + injury.severity.slice(1)}
                                        </td>
                                        <td className="px-4 py-3 text-center text-slate-400">
                                            {injury.recoveryTime}
                                        </td>
                                        <td className="px-4 py-3 text-right text-amber-400 font-medium">
                                            {formatCurrency(injury.avgSettlement.min)} - {formatCurrency(injury.avgSettlement.max)}
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
                            <p className="font-medium text-white mb-1">How These Estimates Work</p>
                            <p>
                                Settlement values are based on {SITE.year} national averages. Your actual settlement depends on
                                medical bills, lost wages, pain & suffering, liability, and insurance limits.
                                Use our full calculator for a personalized estimate.
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
                        href="/mesothelioma/injury-settlement"
                        className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Get Personalized Estimate
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    Compensation values are estimates based on {SITE.year} mesothelioma settlement data.
                    Actual amounts vary based on case specifics, exposure history, and responsible parties.
                </p>
            </main>
        </>
    );
}
