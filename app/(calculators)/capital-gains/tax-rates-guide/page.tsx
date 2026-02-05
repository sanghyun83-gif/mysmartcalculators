"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, TrendingUp, FileText, Clock, CheckCircle } from "lucide-react";
import { SITE, CAPITAL_GAINS_2026, formatCurrency } from "@/lib/calculators/capital-gains";

export default function TaxRatesGuidePage() {
    return (
        <>
            {/* Header */}

            <main className="max-w-4xl mx-auto px-4 py-8">
                {/* Page Header */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        Capital Gains Tax Rates {SITE.year}
                    </h1>
                    <p className="text-slate-400">
                        Complete guide to federal and state capital gains tax rates
                    </p>
                </div>

                {/* Long-Term Rates Table */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Clock className="w-5 h-5 text-emerald-500" />
                        Long-Term Capital Gains Rates (Single Filer)
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="text-left text-slate-400 border-b border-slate-700">
                                    <th className="py-2">Taxable Income</th>
                                    <th className="py-2">Tax Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                {CAPITAL_GAINS_2026.longTermRates.single.map((bracket, i) => (
                                    <tr key={i} className="border-b border-slate-700/50">
                                        <td className="py-3 text-white">
                                            {bracket.min === 0
                                                ? `Up to ${formatCurrency(bracket.max)}`
                                                : bracket.max === Infinity
                                                    ? `Over ${formatCurrency(bracket.min)}`
                                                    : `${formatCurrency(bracket.min)} - ${formatCurrency(bracket.max)}`
                                            }
                                        </td>
                                        <td className={`py-3 font-bold ${bracket.rate === 0 ? "text-emerald-400" :
                                            bracket.rate === 15 ? "text-yellow-400" :
                                                "text-red-400"
                                            }`}>
                                            {bracket.rate}%
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Married Filing Jointly */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Long-Term Rates (Married Filing Jointly)
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="text-left text-slate-400 border-b border-slate-700">
                                    <th className="py-2">Taxable Income</th>
                                    <th className="py-2">Tax Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                {CAPITAL_GAINS_2026.longTermRates.marriedFilingJointly.map((bracket, i) => (
                                    <tr key={i} className="border-b border-slate-700/50">
                                        <td className="py-3 text-white">
                                            {bracket.min === 0
                                                ? `Up to ${formatCurrency(bracket.max)}`
                                                : bracket.max === Infinity
                                                    ? `Over ${formatCurrency(bracket.min)}`
                                                    : `${formatCurrency(bracket.min)} - ${formatCurrency(bracket.max)}`
                                            }
                                        </td>
                                        <td className={`py-3 font-bold ${bracket.rate === 0 ? "text-emerald-400" :
                                            bracket.rate === 15 ? "text-yellow-400" :
                                                "text-red-400"
                                            }`}>
                                            {bracket.rate}%
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* NIIT Section */}
                <div className="bg-emerald-900/30 border border-emerald-500/50 rounded-xl p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Net Investment Income Tax (NIIT)
                    </h2>
                    <p className="text-slate-300 mb-4">
                        High earners pay an additional <strong>3.8%</strong> tax on investment income
                        including capital gains.
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                        <div className="bg-slate-800/80 rounded-lg p-4">
                            <p className="text-sm text-slate-400">Single Threshold</p>
                            <p className="text-xl font-bold text-white">{formatCurrency(CAPITAL_GAINS_2026.niit.thresholdSingle)}</p>
                        </div>
                        <div className="bg-slate-800/80 rounded-lg p-4">
                            <p className="text-sm text-slate-400">Married Threshold</p>
                            <p className="text-xl font-bold text-white">{formatCurrency(CAPITAL_GAINS_2026.niit.thresholdMarried)}</p>
                        </div>
                    </div>
                </div>

                {/* State Rates */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4">
                        State Capital Gains Tax Rates
                    </h2>
                    <p className="text-slate-400 text-sm mb-4">
                        Most states tax capital gains as ordinary income. Here are some notable rates:
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                        {CAPITAL_GAINS_2026.stateRates.map((s) => (
                            <div key={s.state} className={`rounded-lg p-3 text-center ${s.rate === 0 ? "bg-emerald-900/30 border border-emerald-500/50" :
                                "bg-slate-700/50"
                                }`}>
                                <p className="text-sm text-slate-300">{s.state}</p>
                                <p className={`text-lg font-bold ${s.rate === 0 ? "text-emerald-400" : "text-white"}`}>
                                    {s.rate}%
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tax-Loss Harvesting */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Tax-Loss Harvesting Tips
                    </h2>

                    <div className="space-y-3">
                        {[
                            "Losses offset gains dollar-for-dollar",
                            "Excess losses offset up to $3,000 of ordinary income",
                            "Unused losses carry forward indefinitely",
                            "Avoid wash sale rule (30-day waiting period)",
                            "Consider harvesting before year-end",
                        ].map((tip, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5" />
                                <span className="text-slate-300">{tip}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Ad Placeholder */}
                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center">
                    <p className="text-sm text-slate-500">Advertisement</p>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link
                        href="/capital-gains/gains-calculator"
                        className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Calculate Your Capital Gains Tax
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Disclaimer */}
            </main>
        </>
    );
}
