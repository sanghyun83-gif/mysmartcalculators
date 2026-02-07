"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, TrendingDown, FileText, CheckCircle, AlertTriangle, Calendar } from "lucide-react";
import { SITE, RMD_2026, formatCurrency } from "@/lib/calculators/rmd";

export default function RulesGuidePage() {
    return (
        <>
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/rmd" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-emerald-500" />
                        <span className="text-lg font-bold text-white">RMD Rules Guide</span>
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
                        RMD Rules & Requirements
                    </h1>
                    <p className="text-slate-400">
                        Everything you need to know about Required Minimum Distributions
                    </p>
                </div>

                {/* SECURE 2.0 Changes */}
                <div className="bg-emerald-900/30 border border-emerald-500/50 rounded-xl p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <TrendingDown className="w-5 h-5 text-emerald-500" />
                        SECURE 2.0 Changes
                    </h2>
                    <div className="space-y-3 text-sm">
                        <div className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-emerald-400 mt-1" />
                            <p className="text-slate-300">
                                <strong>Age 73:</strong> RMDs now start at 73 (born 1951-1959)
                            </p>
                        </div>
                        <div className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-emerald-400 mt-1" />
                            <p className="text-slate-300">
                                <strong>Age 75:</strong> Starting 2033 for those born 1960+
                            </p>
                        </div>
                        <div className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-emerald-400 mt-1" />
                            <p className="text-slate-300">
                                <strong>Penalty Reduced:</strong> From 50% to 25% (10% if corrected timely)
                            </p>
                        </div>
                        <div className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-emerald-400 mt-1" />
                            <p className="text-slate-300">
                                <strong>Roth 401(k):</strong> No RMDs starting 2024
                            </p>
                        </div>
                    </div>
                </div>

                {/* Deadlines */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-emerald-500" />
                        RMD Deadlines
                    </h2>

                    <div className="space-y-4">
                        <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4">
                            <p className="font-bold text-yellow-400">First RMD</p>
                            <p className="text-sm text-slate-300 mt-1">
                                Due by <strong>April 1</strong> of the year after you turn 73
                            </p>
                            <p className="text-xs text-slate-400 mt-1">
                                Warning: Taking two RMDs in one year may increase your tax bracket!
                            </p>
                        </div>
                        <div className="bg-slate-700/50 rounded-lg p-4">
                            <p className="font-bold text-white">Subsequent RMDs</p>
                            <p className="text-sm text-slate-300 mt-1">
                                Due by <strong>December 31</strong> each year
                            </p>
                        </div>
                    </div>
                </div>

                {/* Uniform Lifetime Table */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">
                        IRS Uniform Lifetime Table (Partial)
                    </h2>
                    <p className="text-sm text-slate-400 mb-4">
                        Divide your account balance by this factor to get your RMD.
                    </p>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="text-left text-slate-400 border-b border-slate-700">
                                    <th className="py-2">Age</th>
                                    <th className="py-2">Distribution Factor</th>
                                    <th className="py-2">~% Withdrawal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {RMD_2026.uniformTable.slice(0, 10).map((row, i) => (
                                    <tr key={i} className="border-b border-slate-700/50">
                                        <td className="py-2 text-white">{row.age}</td>
                                        <td className="py-2 text-emerald-400 font-mono">{row.factor}</td>
                                        <td className="py-2 text-slate-400">{(100 / row.factor).toFixed(1)}%</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Penalties */}
                <div className="bg-red-900/20 border border-red-700/50 rounded-xl p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-red-500" />
                        Missed RMD Penalties
                    </h2>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-slate-800/80 rounded-lg p-4">
                            <p className="text-3xl font-bold text-red-400">{RMD_2026.missedPenalty}%</p>
                            <p className="text-sm text-slate-300 mt-1">Standard penalty on shortfall</p>
                        </div>
                        <div className="bg-slate-800/80 rounded-lg p-4">
                            <p className="text-3xl font-bold text-yellow-400">{RMD_2026.correctedPenalty}%</p>
                            <p className="text-sm text-slate-300 mt-1">If corrected timely</p>
                        </div>
                    </div>
                    <p className="text-xs text-red-200 mt-4">
                        File Form 5329 to report and pay the penalty, or request a waiver.
                    </p>
                </div>

                {/* Strategies */}
                <div className="bg-blue-900/20 border border-blue-700/50 rounded-xl p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4">
                        RMD Strategies
                    </h2>
                    <div className="space-y-2 text-sm">
                        <div className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-400 mt-1" />
                            <p className="text-blue-200">
                                <strong>QCDs:</strong> Donate up to $105,000 directly to charity (satisfies RMD tax-free)
                            </p>
                        </div>
                        <div className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-400 mt-1" />
                            <p className="text-blue-200">
                                <strong>Roth Conversions:</strong> Convert before RMD age to reduce future RMDs
                            </p>
                        </div>
                        <div className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-400 mt-1" />
                            <p className="text-blue-200">
                                <strong>Aggregate Accounts:</strong> Take total RMD from one or more IRAs
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
                        href="/rmd/calculator"
                        className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Calculate Your RMD
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    Consult a tax professional for personalized advice.
                </p>
            </main>
        </>
    );
}
