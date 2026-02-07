"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Wallet, FileText, CheckCircle, Shield } from "lucide-react";
import { SITE, ANNUITY_2026 } from "@/lib/calculators/annuity";

export default function PayoutGuidePage() {
    return (
        <>
            {/* Header */}

            <main className="max-w-4xl mx-auto px-4 py-8">
                {/* Page Header */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        Annuity Payout Options
                    </h1>
                    <p className="text-slate-400">
                        Understanding your choices for guaranteed retirement income
                    </p>
                </div>

                {/* Life Only */}
                <div className="bg-emerald-900/30 border border-emerald-500/50 rounded-xl p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Wallet className="w-5 h-5 text-emerald-500" />
                        Life Only (Single Life)
                    </h2>
                    <p className="text-slate-300 mb-4">
                        Provides the <strong>highest monthly payment</strong> but stops when you die.
                        No payments to beneficiaries.
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                        <div className="bg-slate-800/80 rounded-lg p-3">
                            <p className="text-sm text-emerald-400 font-semibold">Pros</p>
                            <p className="text-xs text-slate-300">Maximum income during your lifetime</p>
                        </div>
                        <div className="bg-slate-800/80 rounded-lg p-3">
                            <p className="text-sm text-red-400 font-semibold">Cons</p>
                            <p className="text-xs text-slate-300">Nothing left for heirs if you die early</p>
                        </div>
                    </div>
                </div>

                {/* Period Certain Options */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Life + Period Certain
                    </h2>
                    <p className="text-slate-300 mb-4">
                        Guarantees payments for your life OR a minimum period (whichever is longer).
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-slate-700/50 rounded-lg p-4">
                            <p className="font-bold text-white">Life + 10 Years</p>
                            <p className="text-sm text-slate-300 mt-2">~8% lower than life-only</p>
                            <p className="text-xs text-slate-500 mt-1">
                                If you die after 5 years, beneficiaries get 5 more years of payments
                            </p>
                        </div>
                        <div className="bg-slate-700/50 rounded-lg p-4">
                            <p className="font-bold text-white">Life + 20 Years</p>
                            <p className="text-sm text-slate-300 mt-2">~15% lower than life-only</p>
                            <p className="text-xs text-slate-500 mt-1">
                                More protection for beneficiaries, lower monthly payment
                            </p>
                        </div>
                    </div>
                </div>

                {/* Joint Survivor */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Joint & Survivor
                    </h2>
                    <p className="text-slate-300 mb-4">
                        Payments continue for both you and your spouse&apos;s lifetimes.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-slate-700/50 rounded-lg p-4">
                            <p className="font-bold text-white">100% Survivor</p>
                            <p className="text-sm text-slate-300 mt-2">~15% lower than life-only</p>
                            <p className="text-xs text-slate-500 mt-1">
                                Full payment continues to surviving spouse
                            </p>
                        </div>
                        <div className="bg-slate-700/50 rounded-lg p-4">
                            <p className="font-bold text-white">50% Survivor</p>
                            <p className="text-sm text-slate-300 mt-2">~10% lower than life-only</p>
                            <p className="text-xs text-slate-500 mt-1">
                                Half payment continues to surviving spouse
                            </p>
                        </div>
                    </div>
                </div>

                {/* Comparison Table */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Payout Comparison ($100K Premium, Age 65)
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="text-left text-slate-400 border-b border-slate-700">
                                    <th className="py-2">Option</th>
                                    <th className="py-2">Est. Monthly</th>
                                    <th className="py-2">Beneficiary Protection</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-slate-700/50">
                                    <td className="py-3 text-white">Life Only</td>
                                    <td className="py-3 text-emerald-400 font-bold">~$567</td>
                                    <td className="py-3 text-red-400">None</td>
                                </tr>
                                <tr className="border-b border-slate-700/50">
                                    <td className="py-3 text-white">Life + 10 Years</td>
                                    <td className="py-3 text-white">~$522</td>
                                    <td className="py-3 text-yellow-400">Moderate</td>
                                </tr>
                                <tr className="border-b border-slate-700/50">
                                    <td className="py-3 text-white">Life + 20 Years</td>
                                    <td className="py-3 text-white">~$482</td>
                                    <td className="py-3 text-emerald-400">Strong</td>
                                </tr>
                                <tr className="border-b border-slate-700/50">
                                    <td className="py-3 text-white">Joint 100%</td>
                                    <td className="py-3 text-white">~$483</td>
                                    <td className="py-3 text-emerald-400">Spouse Protected</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Choosing the Right Option */}
                <div className="bg-blue-900/20 border border-blue-700/50 rounded-xl p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Choosing the Right Option
                    </h2>
                    <div className="space-y-2 text-sm">
                        <div className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-400 mt-1" />
                            <p className="text-blue-200">
                                <strong>Life Only:</strong> Best if you have other assets for heirs
                            </p>
                        </div>
                        <div className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-400 mt-1" />
                            <p className="text-blue-200">
                                <strong>Period Certain:</strong> Good balance of income and protection
                            </p>
                        </div>
                        <div className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-400 mt-1" />
                            <p className="text-blue-200">
                                <strong>Joint:</strong> Essential if spouse depends on your income
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
                        href="/annuity/calculator"
                        className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Calculate Your Annuity Payout
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    Rates are estimates. Consult a financial advisor for personalized advice.
                </p>
            </main>
        </>
    );
}
