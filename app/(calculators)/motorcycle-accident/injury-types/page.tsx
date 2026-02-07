"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Stethoscope, ArrowRight, Calculator, Info, Bike } from "lucide-react";
import { SITE, MOTORCYCLE_INJURIES, formatCurrency, getSeverityColor } from "@/lib/calculators/motorcycle-accident";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function InjuryTypesPage() {
    const injuryList = Object.entries(MOTORCYCLE_INJURIES);
    const [selectedInjury, setSelectedInjury] = useState<string | null>(null);

    const selectedData = selectedInjury ? MOTORCYCLE_INJURIES[selectedInjury as keyof typeof MOTORCYCLE_INJURIES] : null;

    const getEstimate = () => {
        if (!selectedData) return null;
        const avg = Math.round((selectedData.avgSettlement.min + selectedData.avgSettlement.max) / 2);
        const withAttorney = Math.round(avg * 0.67);
        return { avg, withAttorney };
    };

    const estimate = getEstimate();

    return (
        <>

            <main className="max-w-4xl mx-auto px-4 py-8">
                {/* Page Header */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        {SITE.year} Motorcycle Injury Settlement Values
                    </h1>
                    <p className="text-slate-400">
                        Select your injury type to see average settlement values for motorcycle accidents
                    </p>
                </div>

                {/* Interactive Calculator */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Calculator className="w-5 h-5 text-orange-500" />
                        Quick Settlement Estimator
                    </h2>

                    {/* Injury Selection Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                        {injuryList.map(([key, injury]) => (
                            <button
                                key={key}
                                onClick={() => setSelectedInjury(key)}
                                className={`p-3 rounded-lg border text-left transition-all ${selectedInjury === key
                                    ? "bg-orange-600 border-orange-500 text-white"
                                    : "bg-slate-700/50 border-slate-600 text-slate-300 hover:border-orange-500"
                                    }`}
                            >
                                <div className="text-sm font-medium truncate">{injury.name}</div>
                                <div className={`text-xs mt-1 ${selectedInjury === key ? "text-orange-200" : getSeverityColor(injury.severity)
                                    }`}>
                                    {injury.severity.charAt(0).toUpperCase() + injury.severity.slice(1)}
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Result Display */}
                    {selectedData && estimate && (
                        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-6 text-white">
                            <p className="text-sm text-orange-100 mb-1">{selectedData.name} - Motorcycle Accident Settlement</p>
                            <p className="text-3xl font-bold mb-2">
                                {formatCurrency(selectedData.avgSettlement.min)} - {formatCurrency(selectedData.avgSettlement.max)}
                            </p>
                            <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-orange-400/30">
                                <div>
                                    <p className="text-xs text-orange-200">Average</p>
                                    <p className="text-lg font-semibold">{formatCurrency(estimate.avg)}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-orange-200">After Attorney (33%)</p>
                                    <p className="text-lg font-semibold">{formatCurrency(estimate.withAttorney)}</p>
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-orange-400/30 text-sm">
                                <p><span className="text-orange-200">Recovery Time:</span> {selectedData.recoveryTime}</p>
                                <p className="mt-1 text-orange-100">{selectedData.description}</p>
                            </div>
                        </div>
                    )}

                    {!selectedData && (
                        <div className="text-center py-8 text-slate-400">
                            <Bike className="w-12 h-12 mx-auto mb-3 opacity-50" />
                            <p>Select an injury type above to see settlement estimates</p>
                        </div>
                    )}
                </div>

                {/* Summary Table */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden mb-8">
                    <div className="p-4 border-b border-slate-700">
                        <h2 className="text-lg font-bold text-white">
                            Common Motorcycle Injuries - Quick Reference
                        </h2>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead className="bg-slate-700/50">
                                <tr>
                                    <th className="px-4 py-3 text-left text-slate-300 font-medium">Injury Type</th>
                                    <th className="px-4 py-3 text-center text-slate-300 font-medium">Severity</th>
                                    <th className="px-4 py-3 text-center text-slate-300 font-medium">Recovery</th>
                                    <th className="px-4 py-3 text-right text-slate-300 font-medium">Settlement Range</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700">
                                {injuryList.map(([key, injury]) => (
                                    <tr
                                        key={key}
                                        className={`hover:bg-slate-700/30 cursor-pointer ${selectedInjury === key ? "bg-orange-900/20" : ""
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
                                        <td className="px-4 py-3 text-right text-orange-400 font-medium">
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
                            <p className="font-medium text-white mb-1">Motorcycle Injuries Are More Severe</p>
                            <p>
                                Motorcyclists are 29x more likely to die in an accident than car occupants.
                                Without a protective shell, injuries tend to be more severe, resulting in higher
                                medical costs and settlement values.
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
                        href="/motorcycle-accident/motorcycle-settlement"
                        className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Get Personalized Estimate
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
