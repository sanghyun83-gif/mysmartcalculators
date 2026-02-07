"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Stethoscope, ArrowRight, Baby, Info, AlertTriangle } from "lucide-react";
import { SITE, BIRTH_INJURIES, formatCurrency, getSeverityColor } from "@/lib/calculators/birth-injury";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function InjuryTypesPage() {
    const injuryList = Object.entries(BIRTH_INJURIES);
    const [selectedInjury, setSelectedInjury] = useState<string | null>(null);

    const selectedData = selectedInjury ? BIRTH_INJURIES[selectedInjury as keyof typeof BIRTH_INJURIES] : null;

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

            <main className="max-w-4xl mx-auto px-4 py-8">
                {/* Page Header */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        Birth Injury Types & Settlement Values
                    </h1>
                    <p className="text-slate-400">
                        {SITE.year} average settlements for common birth injuries
                    </p>
                </div>

                {/* Interactive Calculator */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Baby className="w-5 h-5 text-amber-500" />
                        Select Birth Injury Type
                    </h2>

                    {/* Injury Selection */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                        {injuryList.map(([key, injury]) => (
                            <button
                                key={key}
                                onClick={() => setSelectedInjury(key)}
                                className={`p-4 rounded-lg border text-left transition-all ${selectedInjury === key
                                    ? "bg-amber-600 border-amber-500 text-white"
                                    : "bg-slate-700/50 border-slate-600 text-slate-300 hover:border-amber-500"
                                    }`}
                            >
                                <div className="text-sm font-semibold">{injury.name}</div>
                                <div className={`text-xs mt-1 ${selectedInjury === key ? "text-amber-200" : getSeverityColor(injury.severity)}`}>
                                    {injury.severity.charAt(0).toUpperCase() + injury.severity.slice(1)}
                                </div>
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
                                    <p className="text-xs text-amber-200">Average Settlement</p>
                                    <p className="text-lg font-semibold">{formatCurrency(estimate.avg)}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-amber-200">After Attorney (33%)</p>
                                    <p className="text-lg font-semibold">{formatCurrency(estimate.withAttorney)}</p>
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-amber-400/30 text-sm space-y-1">
                                <p><span className="text-amber-200">Description:</span> {selectedData.description}</p>
                                <p><span className="text-amber-200">Common Causes:</span> {selectedData.causes}</p>
                                <p><span className="text-amber-200">Lifetime Care:</span> {selectedData.lifetimeCost}</p>
                            </div>
                        </div>
                    )}

                    {!selectedData && (
                        <div className="text-center py-8 text-slate-400">
                            <Baby className="w-12 h-12 mx-auto mb-3 opacity-50" />
                            <p>Select an injury type above to see settlement estimates</p>
                        </div>
                    )}
                </div>

                {/* Summary Table */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden mb-8">
                    <div className="p-4 border-b border-slate-700">
                        <h2 className="text-lg font-bold text-white">
                            All Birth Injury Types - Quick Reference
                        </h2>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead className="bg-slate-700/50">
                                <tr>
                                    <th className="px-4 py-3 text-left text-slate-300 font-medium">Injury Type</th>
                                    <th className="px-4 py-3 text-center text-slate-300 font-medium">Severity</th>
                                    <th className="px-4 py-3 text-center text-slate-300 font-medium">Lifetime Care</th>
                                    <th className="px-4 py-3 text-right text-slate-300 font-medium">Settlement Range</th>
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
                                        <td className="px-4 py-3 text-white font-medium">{injury.name}</td>
                                        <td className={`px-4 py-3 text-center ${getSeverityColor(injury.severity)}`}>
                                            {injury.severity.charAt(0).toUpperCase() + injury.severity.slice(1)}
                                        </td>
                                        <td className="px-4 py-3 text-center text-slate-400">{injury.lifetimeCost}</td>
                                        <td className="px-4 py-3 text-right text-amber-400 font-medium">
                                            {formatCurrency(injury.avgSettlement.min)} - {formatCurrency(injury.avgSettlement.max)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Warning Box */}
                <div className="bg-red-900/20 border border-red-700/50 rounded-xl p-4 mb-8">
                    <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5" />
                        <div className="text-sm text-red-200">
                            <p className="font-medium text-white mb-1">Statute of Limitations for Minors</p>
                            <p>
                                Most states extend the statute of limitations for birth injury claims until the child
                                reaches age 18-21. However, evidence degrades over time and medical records may be
                                destroyed. Consult an attorney as soon as possible to preserve your claim.
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
                        href="/birth-injury/settlement"
                        className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Get Personalized Settlement Estimate
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    Settlement values are estimates based on {SITE.year} national data.
                    Actual settlements vary based on case specifics, state laws, and medical evidence.
                </p>
            </main>
        </>
    );
}
