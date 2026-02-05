"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Scale, ArrowRight, Search, Calculator } from "lucide-react";
import { SITE, STATE_DATA, formatCurrency, calculateChildSupport } from "@/lib/calculators/child-support";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function StateGuidelinesPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedState, setSelectedState] = useState<string | null>(null);

    const states = Object.entries(STATE_DATA);

    const filteredStates = states.filter(([code, data]) =>
        data.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        code.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const selectedData = selectedState ? STATE_DATA[selectedState] : null;

    // Quick estimate for selected state
    const getQuickEstimate = () => {
        if (!selectedState) return null;
        // Example: $5000 payor, $3000 recipient, 2 children, 20% custody
        return calculateChildSupport(selectedState, 5000, 3000, 2, 20);
    };

    const estimate = getQuickEstimate();

    return (
        <>
            {/* Header */}

            <main className="max-w-4xl mx-auto px-4 py-8">
                {/* Page Header */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        {SITE.year} Child Support Guidelines by State
                    </h1>
                    <p className="text-slate-400">
                        Compare child support percentages and requirements across all 50 states
                    </p>
                </div>

                {/* Search */}
                <div className="relative mb-6">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search states..."
                        className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                {/* Quick Calculator */}
                {selectedData && estimate && (
                    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-6 mb-8 text-white">
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <p className="text-sm text-purple-100">Quick Estimate for {selectedData.name}</p>
                                <p className="text-3xl font-bold">{formatCurrency(estimate.monthlySupport)}/mo</p>
                            </div>
                            <Link
                                href="/child-support/child-support"
                                className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
                            >
                                <Calculator className="w-4 h-4" />
                                Full Calculator
                            </Link>
                        </div>
                        <p className="text-sm text-purple-100">
                            Based on: $5,000 + $3,000 combined income, 2 children, 20% custody
                        </p>
                    </div>
                )}

                {/* State Table */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden mb-8">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead className="bg-slate-700/50">
                                <tr>
                                    <th className="px-4 py-3 text-left text-slate-300 font-medium">State</th>
                                    <th className="px-4 py-3 text-center text-slate-300 font-medium">Model</th>
                                    <th className="px-4 py-3 text-center text-slate-300 font-medium">1 Child</th>
                                    <th className="px-4 py-3 text-center text-slate-300 font-medium">2 Children</th>
                                    <th className="px-4 py-3 text-center text-slate-300 font-medium">3 Children</th>
                                    <th className="px-4 py-3 text-right text-slate-300 font-medium">Max Income</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700">
                                {filteredStates.map(([code, data]) => (
                                    <tr
                                        key={code}
                                        className={`hover:bg-slate-700/30 cursor-pointer transition-colors ${selectedState === code ? "bg-purple-900/20" : ""
                                            }`}
                                        onClick={() => setSelectedState(code)}
                                    >
                                        <td className="px-4 py-3">
                                            <span className="font-medium text-white">{data.name}</span>
                                            <span className="text-slate-500 ml-2">({code})</span>
                                        </td>
                                        <td className="px-4 py-3 text-center">
                                            <span className={`px-2 py-1 rounded text-xs ${data.model === 'income_shares'
                                                ? 'bg-purple-500/20 text-purple-400'
                                                : data.model === 'percentage'
                                                    ? 'bg-blue-500/20 text-blue-400'
                                                    : 'bg-amber-500/20 text-amber-400'
                                                }`}>
                                                {data.model === 'income_shares' ? 'Income Shares' :
                                                    data.model === 'percentage' ? 'Percentage' : 'Hybrid'}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-center text-slate-300">
                                            {(data.basePercent.one * 100).toFixed(0)}%
                                        </td>
                                        <td className="px-4 py-3 text-center text-slate-300">
                                            {(data.basePercent.two * 100).toFixed(0)}%
                                        </td>
                                        <td className="px-4 py-3 text-center text-slate-300">
                                            {(data.basePercent.three * 100).toFixed(0)}%
                                        </td>
                                        <td className="px-4 py-3 text-right text-purple-400">
                                            {formatCurrency(data.maxIncomeConsidered)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Model Explanation */}
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                    <div className="bg-slate-800 rounded-xl border border-slate-700 p-5">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs">Income Shares</span>
                        </div>
                        <h3 className="font-semibold text-white mb-2">Income Shares Model</h3>
                        <p className="text-sm text-slate-400">
                            Used by most states. Both parents&apos; incomes are combined, and support is
                            divided proportionally based on each parent&apos;s share of the total income.
                        </p>
                    </div>
                    <div className="bg-slate-800 rounded-xl border border-slate-700 p-5">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">Percentage</span>
                        </div>
                        <h3 className="font-semibold text-white mb-2">Percentage of Income Model</h3>
                        <p className="text-sm text-slate-400">
                            A flat percentage of the paying parent&apos;s income is used,
                            regardless of the receiving parent&apos;s income. Simpler but less common.
                        </p>
                    </div>
                </div>

                {/* Ad Placeholder */}
                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center">
                    <p className="text-sm text-slate-500">Advertisement</p>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link
                        href="/child-support/child-support"
                        className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Calculate Your Support
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Disclaimer */}
            </main>
        </>
    );
}
