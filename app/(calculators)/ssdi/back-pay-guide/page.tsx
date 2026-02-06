"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, DollarSign, Clock, FileText, AlertTriangle, CheckCircle } from "lucide-react";
import { SITE, SSDI_CONSTANTS_2026, formatCurrency } from "@/lib/calculators/ssdi";

export default function BackPayGuidePage() {
    return (
        <>
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/ssdi" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-purple-500" />
                        <span className="text-lg font-bold text-white">SSDI Back Pay Guide</span>
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
                        How SSDI Back Pay Works
                    </h1>
                    <p className="text-slate-400">
                        Everything you need to know about Social Security disability back payments
                    </p>
                </div>

                {/* Key Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-slate-800 rounded-lg p-4 border border-slate-700 text-center">
                        <p className="text-2xl font-bold text-purple-400">5 mo</p>
                        <p className="text-xs text-slate-400 mt-1">Waiting Period</p>
                    </div>
                    <div className="bg-slate-800 rounded-lg p-4 border border-slate-700 text-center">
                        <p className="text-2xl font-bold text-violet-400">{SSDI_CONSTANTS_2026.statistics.avgBackPayMonths} mo</p>
                        <p className="text-xs text-slate-400 mt-1">Avg Back Pay</p>
                    </div>
                    <div className="bg-slate-800 rounded-lg p-4 border border-slate-700 text-center">
                        <p className="text-2xl font-bold text-pink-400">25%</p>
                        <p className="text-xs text-slate-400 mt-1">Max Attorney Fee</p>
                    </div>
                    <div className="bg-slate-800 rounded-lg p-4 border border-slate-700 text-center">
                        <p className="text-2xl font-bold text-blue-400">{formatCurrency(SSDI_CONSTANTS_2026.attorneyFees.maxFee)}</p>
                        <p className="text-xs text-slate-400 mt-1">Fee Cap ({SITE.year})</p>
                    </div>
                </div>

                {/* Timeline */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                        <Clock className="w-5 h-5 text-purple-500" />
                        SSDI Back Pay Timeline
                    </h2>

                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                                    <span className="text-red-400 font-bold text-sm">1</span>
                                </div>
                                <div className="w-0.5 h-full bg-slate-700 mt-2"></div>
                            </div>
                            <div className="pb-6">
                                <h3 className="font-semibold text-white">Established Onset Date (EOD)</h3>
                                <p className="text-sm text-slate-400 mt-1">
                                    The date SSA determines your disability began. This is the starting point for all calculations.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center">
                                    <span className="text-amber-400 font-bold text-sm">2</span>
                                </div>
                                <div className="w-0.5 h-full bg-slate-700 mt-2"></div>
                            </div>
                            <div className="pb-6">
                                <h3 className="font-semibold text-white">5-Month Waiting Period</h3>
                                <p className="text-sm text-slate-400 mt-1">
                                    By law, no benefits are paid for the first 5 full months after your onset date. This period is unpaid.
                                </p>
                                <div className="mt-2 p-2 bg-amber-900/30 rounded text-xs text-amber-200">
                                    ?�️ Exception: If you received SSI during this time, you may not have a waiting period.
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                                    <span className="text-purple-400 font-bold text-sm">3</span>
                                </div>
                                <div className="w-0.5 h-full bg-slate-700 mt-2"></div>
                            </div>
                            <div className="pb-6">
                                <h3 className="font-semibold text-white">Back Pay Accumulates</h3>
                                <p className="text-sm text-slate-400 mt-1">
                                    Starting month 6, you accrue benefits every month until you&apos;re approved. The longer the wait, the larger your lump sum.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                                    <CheckCircle className="w-4 h-4 text-green-400" />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-semibold text-white">Approval & Payment</h3>
                                <p className="text-sm text-slate-400 mt-1">
                                    Once approved, you receive all accumulated back pay (minus attorney fees if applicable) as a lump sum within 1-2 months.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Types of Back Pay */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Types of Back Payment
                    </h2>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-slate-700/50 rounded-lg p-4">
                            <h3 className="font-semibold text-purple-400 mb-2">Regular Back Pay</h3>
                            <p className="text-sm text-slate-400">
                                Benefits from the 6th month after onset until your approval date. This is the standard back pay most recipients receive.
                            </p>
                        </div>
                        <div className="bg-slate-700/50 rounded-lg p-4">
                            <h3 className="font-semibold text-violet-400 mb-2">Retroactive Benefits</h3>
                            <p className="text-sm text-slate-400">
                                Up to 12 months of benefits for the period BEFORE you applied. Requires your onset date to be 17+ months before approval.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Attorney Fees */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <DollarSign className="w-5 h-5 text-purple-500" />
                        Attorney Fees ({SITE.year})
                    </h2>

                    <div className="space-y-4">
                        <div className="p-4 bg-purple-900/20 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-slate-300">Fee Percentage</span>
                                <span className="text-2xl font-bold text-purple-400">25%</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-slate-300">Maximum Fee Cap</span>
                                <span className="text-2xl font-bold text-purple-400">{formatCurrency(SSDI_CONSTANTS_2026.attorneyFees.maxFee)}</span>
                            </div>
                        </div>

                        <p className="text-sm text-slate-400">
                            SSDI attorney fees are regulated by the Social Security Administration. Attorneys can only charge:
                        </p>

                        <ul className="text-sm text-slate-400 space-y-2">
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                                25% of your past-due benefits (back pay only, not future benefits)
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                                Maximum of ${SSDI_CONSTANTS_2026.attorneyFees.maxFee.toLocaleString()}, whichever is LESS
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                                Fee is paid directly from your back pay by SSA (you don&apos;t write a check)
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                                No fee if you don&apos;t win (contingency basis)
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Important Notes */}
                <div className="bg-amber-900/20 border border-amber-700/50 rounded-xl p-4 mb-8">
                    <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-amber-400 mt-0.5" />
                        <div className="text-sm text-amber-200">
                            <p className="font-medium text-white mb-2">Important Notes About Back Pay</p>
                            <ul className="space-y-1">
                                <li>??Large back pay amounts (over ~$10,000) may be paid in 3 installments, 6 months apart</li>
                                <li>??Back pay may affect other benefits like SSI, Medicaid, or SNAP temporarily</li>
                                <li>??SSDI back pay is generally NOT taxed at the federal level (consult a tax advisor)</li>
                                <li>??You should receive your lump sum within 60 days of approval</li>
                            </ul>
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
                        href="/ssdi/calculator"
                        className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Calculate Your Back Pay
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    This information is for educational purposes. Contact the SSA at 1-800-772-1213 or a
                    disability attorney for your specific situation.
                </p>
            </main>
        </>
    );
}
