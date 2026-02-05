"use client";

import Link from "next/link";
import { Calculator, HardHat, TrendingUp, TrendingDown } from "lucide-react";
import { SITE, CONTRACTOR_TYPES } from "@/lib/calculators/contractor-insurance";

export default function ContractorInsuranceTradesPage() {
    const sortedTrades = [...CONTRACTOR_TYPES].sort((a, b) => b.basePremium - a.basePremium);

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80">
                        <Calculator className="w-6 h-6 text-blue-500" />
                        <span className="text-lg font-bold text-white">MySmartCalculators</span>
                    </Link>
                    <Link href="/contractor-insurance" className="text-slate-400 hover:text-white text-sm">← Back to Overview</Link>
                </div>
            </header>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
                        <HardHat className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-blue-300">Rates by Trade</span>
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-4">Contractor Insurance Rates by Trade</h1>
                    <p className="text-slate-400">Compare GL base premiums across specialty trades</p>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-slate-700">
                                <tr>
                                    <th className="text-left px-6 py-4 text-sm font-semibold text-white">Trade</th>
                                    <th className="text-left px-6 py-4 text-sm font-semibold text-white">Description</th>
                                    <th className="text-right px-6 py-4 text-sm font-semibold text-white">Base GL Premium</th>
                                    <th className="text-center px-6 py-4 text-sm font-semibold text-white">Risk Level</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700">
                                {sortedTrades.map((trade, index) => (
                                    <tr key={index} className="hover:bg-slate-700/50">
                                        <td className="px-6 py-4 text-white font-medium">{trade.name}</td>
                                        <td className="px-6 py-4 text-slate-400 text-sm">{trade.description}</td>
                                        <td className="px-6 py-4 text-blue-400 text-right font-semibold">${trade.basePremium.toLocaleString()}</td>
                                        <td className="px-6 py-4 text-center">
                                            {trade.basePremium >= 5000 ? (
                                                <span className="inline-flex items-center gap-1 bg-red-500/20 text-red-300 text-xs px-2 py-1 rounded">
                                                    <TrendingUp className="w-3 h-3" /> High
                                                </span>
                                            ) : trade.basePremium >= 3000 ? (
                                                <span className="inline-flex items-center gap-1 bg-amber-500/20 text-amber-300 text-xs px-2 py-1 rounded">
                                                    Medium
                                                </span>
                                            ) : (
                                                <span className="inline-flex items-center gap-1 bg-green-500/20 text-green-300 text-xs px-2 py-1 rounded">
                                                    <TrendingDown className="w-3 h-3" /> Low
                                                </span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm text-slate-500 mt-4">*Base GL premiums for $250K-$500K annual revenue tier. Actual rates vary by insurer and location.</p>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <Link href="/contractor-insurance/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors">
                        Calculate Your Premium
                    </Link>
                </div>
            </section>

            <footer className="bg-slate-800 border-t border-slate-700 py-8">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <p className="text-sm text-slate-500">© {SITE.year} MySmartCalculators. Based on NCCI 2026 data.</p>
                </div>
            </footer>
        </>
    );
}
