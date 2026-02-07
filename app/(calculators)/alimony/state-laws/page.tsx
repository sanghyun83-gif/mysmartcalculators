"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, MapPin, ArrowRight, Scale, Info } from "lucide-react";
import { SITE, STATE_ALIMONY, formatCurrency } from "@/lib/calculators/alimony";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function StateLawsPage() {
    const stateList = Object.entries(STATE_ALIMONY);
    const [selectedState, setSelectedState] = useState<string | null>(null);

    const selectedData = selectedState ? STATE_ALIMONY[selectedState as keyof typeof STATE_ALIMONY] : null;

    return (
        <>
            {/* Header */}

            <main className="max-w-4xl mx-auto px-4 py-8">
                {/* Page Header */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        Alimony Laws by State
                    </h1>
                    <p className="text-slate-400">
                        Compare spousal support formulas and rules across states
                    </p>
                </div>

                {/* Interactive Selector */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Scale className="w-5 h-5 text-rose-500" />
                        Select a State
                    </h2>

                    {/* State Selection */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                        {stateList.map(([key, state]) => (
                            <button
                                key={key}
                                onClick={() => setSelectedState(key)}
                                className={`p-3 rounded-lg border text-left transition-all ${selectedState === key
                                    ? "bg-rose-600 border-rose-500 text-white"
                                    : "bg-slate-700/50 border-slate-600 text-slate-300 hover:border-rose-500"
                                    }`}
                            >
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4" />
                                    <span className="text-sm font-semibold">{state.abbr}</span>
                                </div>
                                <div className="text-xs mt-1 opacity-75">{state.name}</div>
                            </button>
                        ))}
                    </div>

                    {/* Result Display */}
                    {selectedData && (
                        <div className="bg-gradient-to-r from-rose-600 to-pink-600 rounded-xl p-6 text-white">
                            <div className="flex items-center gap-2 mb-2">
                                <MapPin className="w-5 h-5" />
                                <p className="text-xl font-bold">{selectedData.name}</p>
                            </div>
                            <div className="mt-4 space-y-3 text-sm">
                                <div>
                                    <p className="text-rose-200 text-xs uppercase">Formula</p>
                                    <p className="font-medium">{selectedData.formula}</p>
                                </div>
                                <div>
                                    <p className="text-rose-200 text-xs uppercase">Duration Rule</p>
                                    <p>{selectedData.durationRule}</p>
                                </div>
                                <div>
                                    <p className="text-rose-200 text-xs uppercase">Notes</p>
                                    <p>{selectedData.notes}</p>
                                </div>
                                <div className="pt-3 border-t border-rose-400/30">
                                    <p className="text-rose-200 text-xs uppercase">Average Monthly</p>
                                    <p className="text-2xl font-bold">{formatCurrency(selectedData.avgMonthly)}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {!selectedData && (
                        <div className="text-center py-8 text-slate-400">
                            <MapPin className="w-12 h-12 mx-auto mb-3 opacity-50" />
                            <p>Select a state above to see alimony laws</p>
                        </div>
                    )}
                </div>

                {/* Summary Table */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden mb-8">
                    <div className="p-4 border-b border-slate-700">
                        <h2 className="text-lg font-bold text-white">
                            State Alimony Comparison
                        </h2>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead className="bg-slate-700/50">
                                <tr>
                                    <th className="px-4 py-3 text-left text-slate-300 font-medium">State</th>
                                    <th className="px-4 py-3 text-left text-slate-300 font-medium">Formula Type</th>
                                    <th className="px-4 py-3 text-right text-slate-300 font-medium">Avg Monthly</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700">
                                {stateList.map(([key, state]) => (
                                    <tr
                                        key={key}
                                        className={`hover:bg-slate-700/30 cursor-pointer ${selectedState === key ? "bg-rose-900/20" : ""
                                            }`}
                                        onClick={() => setSelectedState(key)}
                                    >
                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-2">
                                                <span className="text-white font-medium">{state.name}</span>
                                                <span className="text-slate-500">({state.abbr})</span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-slate-400 capitalize">{state.formulaType}</td>
                                        <td className="px-4 py-3 text-right text-rose-400 font-medium">
                                            {formatCurrency(state.avgMonthly)}
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
                            <p className="font-medium text-white mb-1">Formula Types Explained</p>
                            <ul className="space-y-1">
                                <li><strong>Guideline:</strong> Uses a specific mathematical formula (e.g., CA, NY)</li>
                                <li><strong>Statutory:</strong> Set by statute with caps or limits (e.g., TX, IL)</li>
                                <li><strong>Discretionary:</strong> Judge has broad discretion based on factors (e.g., FL, NJ)</li>
                            </ul>
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
                        href="/alimony/calculator"
                        className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Calculate Your Alimony
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    Laws change frequently. This is {SITE.year} data.
                    Consult a family law attorney in your state for current requirements.
                </p>
            </main>
        </>
    );
}
