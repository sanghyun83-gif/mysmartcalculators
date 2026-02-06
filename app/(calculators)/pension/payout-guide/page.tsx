"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Briefcase, FileText, CheckCircle, AlertTriangle } from "lucide-react";
import { SITE, PENSION_2026, formatCurrency } from "@/lib/calculators/pension";

export default function PayoutGuidePage() {
    return (
        <>
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/pension" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-emerald-500" />
                        <span className="text-lg font-bold text-white">Payout Options Guide</span>
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
                        Pension Payout Options
                    </h1>
                    <p className="text-slate-400">
                        Annuity vs lump sum and choosing the right option
                    </p>
                </div>

                {/* Annuity Option */}
                <div className="bg-emerald-900/30 border border-emerald-500/50 rounded-xl p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-emerald-500" />
                        Monthly Annuity
                    </h2>
                    <p className="text-slate-300 mb-4">
                        Receive guaranteed monthly payments for life. The traditional pension payout.
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                        <div className="bg-slate-800/80 rounded-lg p-3">
                            <p className="text-sm text-emerald-400 font-semibold">Pros</p>
                            <ul className="text-xs text-slate-300 mt-1 space-y-1">
                                <li>??Guaranteed income for life</li>
                                <li>??No investment risk</li>
                                <li>??Survivor options available</li>
                            </ul>
                        </div>
                        <div className="bg-slate-800/80 rounded-lg p-3">
                            <p className="text-sm text-red-400 font-semibold">Cons</p>
                            <ul className="text-xs text-slate-300 mt-1 space-y-1">
                                <li>??Nothing left if you die early</li>
                                <li>??May not keep up with inflation</li>
                                <li>??Less flexibility</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Lump Sum Option */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Lump Sum Payout
                    </h2>
                    <p className="text-slate-300 mb-4">
                        Take the full value of your pension as a single payment.
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                        <div className="bg-slate-700/50 rounded-lg p-3">
                            <p className="text-sm text-emerald-400 font-semibold">Pros</p>
                            <ul className="text-xs text-slate-300 mt-1 space-y-1">
                                <li>??Full control of your money</li>
                                <li>??Can invest for higher returns</li>
                                <li>??Leave inheritance to heirs</li>
                            </ul>
                        </div>
                        <div className="bg-slate-700/50 rounded-lg p-3">
                            <p className="text-sm text-red-400 font-semibold">Cons</p>
                            <ul className="text-xs text-slate-300 mt-1 space-y-1">
                                <li>??Risk of outliving money</li>
                                <li>??Investment risk on you</li>
                                <li>??Temptation to overspend</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Survivor Options */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Survivor Benefit Options
                    </h2>

                    <div className="space-y-3">
                        <div className="bg-slate-700/50 rounded-lg p-4">
                            <p className="font-bold text-white">Single Life (Highest Payment)</p>
                            <p className="text-sm text-slate-400">100% of benefit, but payments stop at your death</p>
                        </div>
                        <div className="bg-slate-700/50 rounded-lg p-4">
                            <p className="font-bold text-white">50% Joint & Survivor</p>
                            <p className="text-sm text-slate-400">~10% reduction, spouse gets 50% after you die</p>
                        </div>
                        <div className="bg-slate-700/50 rounded-lg p-4">
                            <p className="font-bold text-white">100% Joint & Survivor</p>
                            <p className="text-sm text-slate-400">~20% reduction, spouse gets full payment</p>
                        </div>
                    </div>
                </div>

                {/* Early Retirement */}
                <div className="bg-orange-900/20 border border-orange-700/50 rounded-xl p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-orange-500" />
                        Early Retirement Penalty
                    </h2>
                    <p className="text-slate-300 mb-4">
                        Retiring before your Normal Retirement Age (usually 65) typically reduces
                        your pension by <strong className="text-orange-400">{PENSION_2026.earlyRetirementPenalty}% per year</strong>.
                    </p>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="text-left text-slate-400 border-b border-slate-700">
                                    <th className="py-2">Retirement Age</th>
                                    <th className="py-2">Reduction</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-slate-700/50">
                                    <td className="py-2 text-white">65 (Normal)</td>
                                    <td className="py-2 text-emerald-400">0%</td>
                                </tr>
                                <tr className="border-b border-slate-700/50">
                                    <td className="py-2 text-white">62</td>
                                    <td className="py-2 text-yellow-400">~18%</td>
                                </tr>
                                <tr className="border-b border-slate-700/50">
                                    <td className="py-2 text-white">60</td>
                                    <td className="py-2 text-orange-400">~30%</td>
                                </tr>
                                <tr>
                                    <td className="py-2 text-white">55</td>
                                    <td className="py-2 text-red-400">~60%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Decision Guide */}
                <div className="bg-blue-900/20 border border-blue-700/50 rounded-xl p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4">
                        How to Choose
                    </h2>
                    <div className="space-y-2 text-sm">
                        <div className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-400 mt-1" />
                            <p className="text-blue-200">
                                <strong>Choose Annuity:</strong> If you want guaranteed income and aren&apos;t confident investing
                            </p>
                        </div>
                        <div className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-400 mt-1" />
                            <p className="text-blue-200">
                                <strong>Choose Lump Sum:</strong> If you&apos;re healthy, can invest wisely, and want flexibility
                            </p>
                        </div>
                        <div className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-400 mt-1" />
                            <p className="text-blue-200">
                                <strong>Consider Spouse:</strong> If married, survivor benefits may be essential
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
                        href="/pension/calculator"
                        className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Calculate Your Pension
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    Contact your HR department for your specific pension options.
                </p>
            </main>
        </>
    );
}
