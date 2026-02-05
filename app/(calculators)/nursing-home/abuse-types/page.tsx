"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Stethoscope, ArrowRight, Heart, Info, AlertTriangle } from "lucide-react";
import { SITE, ABUSE_TYPES, formatCurrency, getSeverityColor } from "@/lib/calculators/nursing-home";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function AbuseTypesPage() {
    const abuseList = Object.entries(ABUSE_TYPES);
    const [selectedAbuse, setSelectedAbuse] = useState<string | null>(null);

    const selectedData = selectedAbuse ? ABUSE_TYPES[selectedAbuse as keyof typeof ABUSE_TYPES] : null;

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
                    <Link href="/nursing-home" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <Stethoscope className="w-5 h-5 text-amber-500" />
                        <span className="text-lg font-bold text-white">Abuse Types Guide</span>
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
                        Types of Nursing Home Abuse & Settlement Values
                    </h1>
                    <p className="text-slate-400">
                        {SITE.year} average settlements for elder abuse and neglect cases
                    </p>
                </div>

                {/* Interactive Calculator */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Heart className="w-5 h-5 text-amber-500" />
                        Select Type of Abuse or Neglect
                    </h2>

                    {/* Abuse Selection */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                        {abuseList.map(([key, abuse]) => (
                            <button
                                key={key}
                                onClick={() => setSelectedAbuse(key)}
                                className={`p-3 rounded-lg border text-left transition-all ${selectedAbuse === key
                                    ? "bg-amber-600 border-amber-500 text-white"
                                    : "bg-slate-700/50 border-slate-600 text-slate-300 hover:border-amber-500"
                                    }`}
                            >
                                <div className="text-xs font-semibold">{abuse.name}</div>
                                <div className={`text-xs mt-1 ${selectedAbuse === key ? "text-amber-200" : getSeverityColor(abuse.severity)}`}>
                                    {abuse.severity.charAt(0).toUpperCase() + abuse.severity.slice(1)}
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
                                <p><span className="text-amber-200">Warning Signs:</span> {selectedData.signs}</p>
                            </div>
                        </div>
                    )}

                    {!selectedData && (
                        <div className="text-center py-8 text-slate-400">
                            <Heart className="w-12 h-12 mx-auto mb-3 opacity-50" />
                            <p>Select an abuse type above to see settlement estimates</p>
                        </div>
                    )}
                </div>

                {/* Summary Table */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden mb-8">
                    <div className="p-4 border-b border-slate-700">
                        <h2 className="text-lg font-bold text-white">
                            All Nursing Home Abuse Types - Quick Reference
                        </h2>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead className="bg-slate-700/50">
                                <tr>
                                    <th className="px-4 py-3 text-left text-slate-300 font-medium">Abuse Type</th>
                                    <th className="px-4 py-3 text-center text-slate-300 font-medium">Severity</th>
                                    <th className="px-4 py-3 text-right text-slate-300 font-medium">Settlement Range</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700">
                                {abuseList.map(([key, abuse]) => (
                                    <tr
                                        key={key}
                                        className={`hover:bg-slate-700/30 cursor-pointer ${selectedAbuse === key ? "bg-amber-900/20" : ""
                                            }`}
                                        onClick={() => setSelectedAbuse(key)}
                                    >
                                        <td className="px-4 py-3 text-white font-medium">{abuse.name}</td>
                                        <td className={`px-4 py-3 text-center ${getSeverityColor(abuse.severity)}`}>
                                            {abuse.severity.charAt(0).toUpperCase() + abuse.severity.slice(1)}
                                        </td>
                                        <td className="px-4 py-3 text-right text-amber-400 font-medium">
                                            {formatCurrency(abuse.avgSettlement.min)} - {formatCurrency(abuse.avgSettlement.max)}
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
                            <p className="font-medium text-white mb-1">If You Suspect Abuse, Act Now</p>
                            <p>
                                Remove your loved one from danger if possible. Document injuries with photos.
                                Report to Adult Protective Services and the Long-Term Care Ombudsman.
                                Preserve all medical records. Consult an elder abuse attorney immediately.
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
                        href="/nursing-home/abuse-settlement"
                        className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Get Personalized Settlement Estimate
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    Settlement values are estimates based on {SITE.year} national data.
                    Actual settlements vary based on case specifics, state laws, and evidence.
                </p>
            </main>
        </>
    );
}
