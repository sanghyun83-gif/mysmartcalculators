"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, MapPin, ArrowRight, Car, Info } from "lucide-react";
import { SITE, STATE_LEMON } from "@/lib/calculators/lemon-law";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function StateLawsPage() {
    const stateList = Object.entries(STATE_LEMON);
    const [selectedState, setSelectedState] = useState<string | null>(null);

    const selectedData = selectedState ? STATE_LEMON[selectedState as keyof typeof STATE_LEMON] : null;

    return (
        <>
            <main className="max-w-4xl mx-auto px-4 py-8">
                {/* Page Header */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        State Lemon Law Comparison
                    </h1>
                    <p className="text-slate-400">
                        Compare lemon law protections across states
                    </p>
                </div>

                {/* Interactive Selector */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Car className="w-5 h-5 text-amber-500" />
                        Select Your State
                    </h2>

                    {/* State Selection */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                        {stateList.map(([key, state]) => (
                            <button
                                key={key}
                                onClick={() => setSelectedState(key)}
                                className={`p-3 rounded-lg border text-left transition-all ${selectedState === key
                                    ? "bg-amber-600 border-amber-500 text-white"
                                    : "bg-slate-700/50 border-slate-600 text-slate-300 hover:border-amber-500"
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
                        <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl p-6 text-white">
                            <div className="flex items-center gap-2 mb-2">
                                <MapPin className="w-5 h-5" />
                                <p className="text-xl font-bold">{selectedData.name} Lemon Law</p>
                                <span className={`text-xs px-2 py-0.5 rounded ${selectedData.strength === "Strong"
                                    ? "bg-green-500/30 text-green-200"
                                    : "bg-yellow-500/30 text-yellow-200"
                                    }`}>
                                    {selectedData.strength}
                                </span>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                                <div>
                                    <p className="text-amber-200 text-xs uppercase">Coverage</p>
                                    <p className="text-lg font-semibold">{selectedData.warrantyPeriod}</p>
                                </div>
                                <div>
                                    <p className="text-amber-200 text-xs uppercase">Repair Attempts</p>
                                    <p className="text-2xl font-bold">{selectedData.repairAttempts}</p>
                                </div>
                                <div>
                                    <p className="text-amber-200 text-xs uppercase">Days Out</p>
                                    <p className="text-2xl font-bold">{selectedData.daysOutOfService}+</p>
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-amber-400/30 space-y-2">
                                <div>
                                    <p className="text-amber-200 text-xs uppercase">Arbitration</p>
                                    <p className="text-sm">{selectedData.arbitration}</p>
                                </div>
                                <div>
                                    <p className="text-amber-200 text-xs uppercase">Notes</p>
                                    <p className="text-sm">{selectedData.notes}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {!selectedData && (
                        <div className="text-center py-8 text-slate-400">
                            <MapPin className="w-12 h-12 mx-auto mb-3 opacity-50" />
                            <p>Select a state above to see lemon law details</p>
                        </div>
                    )}
                </div>

                {/* Summary Table */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden mb-8">
                    <div className="p-4 border-b border-slate-700">
                        <h2 className="text-lg font-bold text-white">
                            State Lemon Law Comparison
                        </h2>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead className="bg-slate-700/50">
                                <tr>
                                    <th className="px-4 py-3 text-left text-slate-300 font-medium">State</th>
                                    <th className="px-4 py-3 text-center text-slate-300 font-medium">Repairs</th>
                                    <th className="px-4 py-3 text-center text-slate-300 font-medium">Days</th>
                                    <th className="px-4 py-3 text-center text-slate-300 font-medium">Strength</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700">
                                {stateList.map(([key, state]) => (
                                    <tr
                                        key={key}
                                        className={`hover:bg-slate-700/30 cursor-pointer ${selectedState === key ? "bg-amber-900/20" : ""
                                            }`}
                                        onClick={() => setSelectedState(key)}
                                    >
                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-2">
                                                <span className="text-white font-medium">{state.name}</span>
                                                <span className="text-slate-500">({state.abbr})</span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-center text-white">{state.repairAttempts}</td>
                                        <td className="px-4 py-3 text-center text-white">{state.daysOutOfService}+</td>
                                        <td className="px-4 py-3 text-center">
                                            <span className={`text-xs px-2 py-1 rounded ${state.strength === "Strong"
                                                ? "bg-green-500/20 text-green-400"
                                                : "bg-yellow-500/20 text-yellow-400"
                                                }`}>
                                                {state.strength}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Ad Placeholder */}
                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center">
                    <p className="text-sm text-slate-500">Advertisement</p>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link
                        href="/lemon-law/lemon-calculator"
                        className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Calculate Your Claim
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    Laws may change. This is {SITE.year} information.
                    Consult a lemon law attorney for current requirements.
                </p>
                <LegalDisclaimer category="legal" />
            </main>
        </>
    );
}
