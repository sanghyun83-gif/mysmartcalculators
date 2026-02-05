"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, TrendingDown, FileText, CheckCircle } from "lucide-react";
import { SITE, LOAN_2026, formatCurrency } from "@/lib/calculators/loan-payoff";

export default function PayoffGuidePage() {
    return (
        <>
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/loan-payoff" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-emerald-500" />
                        <span className="text-lg font-bold text-white">Payoff Strategies</span>
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
                        Debt Payoff Strategies
                    </h1>
                    <p className="text-slate-400">
                        Proven methods to pay off your loans faster
                    </p>
                </div>

                {/* Strategies */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Extra Payment Strategies
                    </h2>

                    <div className="space-y-4">
                        {LOAN_2026.strategies.map((strategy) => (
                            <div key={strategy.name} className="bg-slate-700/50 rounded-lg p-4">
                                <h3 className="text-emerald-400 font-semibold">{strategy.name}</h3>
                                <p className="text-sm text-slate-300 mt-1">{strategy.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Debt Avalanche vs Snowball */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-emerald-900/20 border border-emerald-500/50 rounded-xl p-6">
                        <h2 className="text-lg font-bold text-white mb-3">Debt Avalanche</h2>
                        <p className="text-sm text-emerald-200 mb-4">
                            Pay minimum on all debts, put extra toward highest interest rate first.
                        </p>
                        <ul className="space-y-2 text-sm text-emerald-200">
                            <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-emerald-400" />
                                Saves most money on interest
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-emerald-400" />
                                Mathematically optimal
                            </li>
                        </ul>
                    </div>
                    <div className="bg-teal-900/20 border border-teal-500/50 rounded-xl p-6">
                        <h2 className="text-lg font-bold text-white mb-3">Debt Snowball</h2>
                        <p className="text-sm text-teal-200 mb-4">
                            Pay minimum on all debts, put extra toward smallest balance first.
                        </p>
                        <ul className="space-y-2 text-sm text-teal-200">
                            <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-teal-400" />
                                Quick wins for motivation
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-teal-400" />
                                Psychologically rewarding
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Loan Types */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">
                        {SITE.year} Average Loan Rates
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-slate-700">
                                    <th className="py-3 text-left text-slate-400">Loan Type</th>
                                    <th className="py-3 text-right text-slate-400">Avg Rate</th>
                                    <th className="py-3 text-right text-slate-400">Avg Term</th>
                                </tr>
                            </thead>
                            <tbody>
                                {LOAN_2026.loanTypes.map((loan) => (
                                    <tr key={loan.name} className="border-b border-slate-700/50">
                                        <td className="py-3 text-white">{loan.name}</td>
                                        <td className="py-3 text-right text-emerald-400 font-bold">{loan.avgRate}%</td>
                                        <td className="py-3 text-right text-slate-300">
                                            {loan.avgTerm > 0 ? `${loan.avgTerm} mo` : "Revolving"}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Tips */}
                <div className="bg-emerald-900/20 border border-emerald-500/50 rounded-xl p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-500" />
                        Quick Tips to Pay Off Faster
                    </h2>
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                        {[
                            "Round up payments to nearest $50",
                            "Use tax refunds as lump sum payments",
                            "Set up automatic extra payments",
                            "Pay bi-weekly instead of monthly",
                            "Refinance to lower rate if possible",
                            "Apply raises/bonuses to debt",
                        ].map((tip, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-emerald-400" />
                                <span className="text-emerald-200">{tip}</span>
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
                        href="/loan-payoff/loan-calculator"
                        className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Calculate Your Payoff
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Citation */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    {LOAN_2026.citation}
                </p>
            </main>
        </>
    );
}
