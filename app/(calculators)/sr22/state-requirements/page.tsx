"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, MapPin, ArrowRight, Shield, Info } from "lucide-react";
import { SITE, STATE_SR22, formatCurrency } from "@/lib/calculators/sr22";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function StateRequirementsPage() {
    const stateList = Object.entries(STATE_SR22);
    const [selectedState, setSelectedState] = useState<string | null>(null);

    const selectedData = selectedState ? STATE_SR22[selectedState as keyof typeof STATE_SR22] : null;

    return (
        <>
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/sr22" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-blue-500" />
                        <span className="text-lg font-bold text-white">SR-22 by State</span>
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
                        SR-22 Requirements by State
                    </h1>
                    <p className="text-slate-400">
                        Compare SR-22 filing periods, minimum liability, and costs across states
                    </p>
                </div>

                {/* Interactive Selector */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Shield className="w-5 h-5 text-blue-500" />
                        Select Your State
                    </h2>

                    {/* State Selection */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                        {stateList.map(([key, state]) => (
                            <button
                                key={key}
                                onClick={() => setSelectedState(key)}
                                className={`p-3 rounded-lg border text-left transition-all ${selectedState === key
                                    ? "bg-blue-600 border-blue-500 text-white"
                                    : "bg-slate-700/50 border-slate-600 text-slate-300 hover:border-blue-500"
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
                        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-6 text-white">
                            <div className="flex items-center gap-2 mb-2">
                                <MapPin className="w-5 h-5" />
                                <p className="text-xl font-bold">{selectedData.name} SR-22 Requirements</p>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                                <div>
                                    <p className="text-blue-200 text-xs uppercase">Filing Period</p>
                                    <p className="text-2xl font-bold">{selectedData.filingPeriod} years</p>
                                </div>
                                <div>
                                    <p className="text-blue-200 text-xs uppercase">Min Liability</p>
                                    <p className="text-lg font-semibold">{selectedData.minimumLiability}</p>
                                </div>
                                <div>
                                    <p className="text-blue-200 text-xs uppercase">Avg Annual Cost</p>
                                    <p className="text-2xl font-bold">{formatCurrency(selectedData.avgAnnualCost)}</p>
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-blue-400/30">
                                <p className="text-sm text-blue-100">{selectedData.notes}</p>
                            </div>
                        </div>
                    )}

                    {!selectedData && (
                        <div className="text-center py-8 text-slate-400">
                            <MapPin className="w-12 h-12 mx-auto mb-3 opacity-50" />
                            <p>Select a state above to see SR-22 requirements</p>
                        </div>
                    )}
                </div>

                {/* Summary Table */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden mb-8">
                    <div className="p-4 border-b border-slate-700">
                        <h2 className="text-lg font-bold text-white">
                            SR-22 State Comparison
                        </h2>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead className="bg-slate-700/50">
                                <tr>
                                    <th className="px-4 py-3 text-left text-slate-300 font-medium">State</th>
                                    <th className="px-4 py-3 text-center text-slate-300 font-medium">Period</th>
                                    <th className="px-4 py-3 text-center text-slate-300 font-medium">Min Liability</th>
                                    <th className="px-4 py-3 text-right text-slate-300 font-medium">Avg Cost/yr</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700">
                                {stateList.map(([key, state]) => (
                                    <tr
                                        key={key}
                                        className={`hover:bg-slate-700/30 cursor-pointer ${selectedState === key ? "bg-blue-900/20" : ""
                                            }`}
                                        onClick={() => setSelectedState(key)}
                                    >
                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-2">
                                                <span className="text-white font-medium">{state.name}</span>
                                                <span className="text-slate-500">({state.abbr})</span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-center text-white">{state.filingPeriod} yrs</td>
                                        <td className="px-4 py-3 text-center text-slate-400">{state.minimumLiability}</td>
                                        <td className="px-4 py-3 text-right text-blue-400 font-medium">
                                            {formatCurrency(state.avgAnnualCost)}
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
                            <p className="font-medium text-white mb-1">Minimum Liability Format</p>
                            <p>
                                Shown as Bodily Injury Per Person / Bodily Injury Per Accident / Property Damage (in thousands).
                                For example, 25/50/25 means $25,000 per person, $50,000 per accident, $25,000 property damage.
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
                        href="/sr22/calculator"
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Calculate Your SR-22 Cost
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    Requirements may vary. This is {SITE.year} data.
                    Check with your state DMV for current requirements.
                </p>
            </main>
        </>
    );
}
