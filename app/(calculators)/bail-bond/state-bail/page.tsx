"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, MapPin, ArrowRight, Scale, Info, AlertTriangle } from "lucide-react";
import { SITE, STATE_BAIL, formatCurrency } from "@/lib/calculators/bail-bond";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function StateBailPage() {
    const stateList = Object.entries(STATE_BAIL);
    const [selectedState, setSelectedState] = useState<string | null>(null);

    const selectedData = selectedState ? STATE_BAIL[selectedState as keyof typeof STATE_BAIL] : null;

    return (
        <>
            {/* Header */}

            <main className="max-w-4xl mx-auto px-4 py-8">
                {/* Page Header */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        Bail Amounts & Laws by State
                    </h1>
                    <p className="text-slate-400">
                        Compare bail costs, premium rates, and bail reform status across states
                    </p>
                </div>

                {/* Interactive Selector */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Scale className="w-5 h-5 text-amber-500" />
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
                                <p className="text-xl font-bold">{selectedData.name}</p>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                                <div>
                                    <p className="text-amber-200 text-xs uppercase">Premium Rate</p>
                                    <p className="text-2xl font-bold">{(selectedData.premiumRate * 100)}%</p>
                                </div>
                                <div>
                                    <p className="text-amber-200 text-xs uppercase">Avg Bail</p>
                                    <p className="text-2xl font-bold">{formatCurrency(selectedData.avgBail)}</p>
                                </div>
                                <div>
                                    <p className="text-amber-200 text-xs uppercase">Regulated</p>
                                    <p className="text-lg font-semibold">{selectedData.regulatedRate ? "Yes" : "No"}</p>
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-amber-400/30 space-y-2">
                                <div>
                                    <p className="text-amber-200 text-xs uppercase">Bail Reform Status</p>
                                    <p className="text-sm">{selectedData.cashBailReform}</p>
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
                            <p>Select a state above to see bail information</p>
                        </div>
                    )}
                </div>

                {/* Summary Table */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden mb-8">
                    <div className="p-4 border-b border-slate-700">
                        <h2 className="text-lg font-bold text-white">
                            State Bail Comparison
                        </h2>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead className="bg-slate-700/50">
                                <tr>
                                    <th className="px-4 py-3 text-left text-slate-300 font-medium">State</th>
                                    <th className="px-4 py-3 text-center text-slate-300 font-medium">Premium</th>
                                    <th className="px-4 py-3 text-center text-slate-300 font-medium">Regulated</th>
                                    <th className="px-4 py-3 text-right text-slate-300 font-medium">Avg Bail</th>
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
                                        <td className="px-4 py-3 text-center text-white">{(state.premiumRate * 100)}%</td>
                                        <td className="px-4 py-3 text-center">
                                            <span className={state.regulatedRate ? "text-green-400" : "text-slate-400"}>
                                                {state.regulatedRate ? "Yes" : "No"}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-right text-amber-400 font-medium">
                                            {formatCurrency(state.avgBail)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Bail Reform Info */}
                <div className="bg-blue-900/20 border border-blue-700/50 rounded-xl p-4 mb-8">
                    <div className="flex items-start gap-3">
                        <Info className="w-5 h-5 text-blue-400 mt-0.5" />
                        <div className="text-sm text-blue-200">
                            <p className="font-medium text-white mb-1">Bail Reform Movement</p>
                            <p>
                                Several states have reformed or eliminated cash bail. Illinois became the first state to fully
                                eliminate cash bail in 2023. New York and New Jersey have significantly reduced its use.
                                More states are considering reforms.
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
                        href="/bail-bond/bail-calculator"
                        className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Calculate Your Bail Cost
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    Bail amounts vary by county and judge discretion. This is {SITE.year} general data.
                    Contact a local bail bondsman for current rates.
                </p>
            </main>
        </>
    );
}
