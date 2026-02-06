"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, DollarSign, Clock, FileText, AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import { SITE, SETTLEMENT_CONSTANTS_2026, DISCOUNT_BY_TERM, formatCurrency } from "@/lib/calculators/structured-settlement";

export default function SellingGuidePage() {
    return (
        <>
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/structured-settlement" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-emerald-500" />
                        <span className="text-lg font-bold text-white">Selling Guide</span>
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
                        How to Sell Your Structured Settlement
                    </h1>
                    <p className="text-slate-400">
                        Complete guide to selling your future payments for cash
                    </p>
                </div>

                {/* Key Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-slate-800 rounded-lg p-4 border border-slate-700 text-center">
                        <p className="text-2xl font-bold text-emerald-400">9-18%</p>
                        <p className="text-xs text-slate-400 mt-1">Discount Rates</p>
                    </div>
                    <div className="bg-slate-800 rounded-lg p-4 border border-slate-700 text-center">
                        <p className="text-2xl font-bold text-green-400">20-40%</p>
                        <p className="text-xs text-slate-400 mt-1">Typical Value Loss</p>
                    </div>
                    <div className="bg-slate-800 rounded-lg p-4 border border-slate-700 text-center">
                        <p className="text-2xl font-bold text-teal-400">8-12 wks</p>
                        <p className="text-xs text-slate-400 mt-1">Processing Time</p>
                    </div>
                    <div className="bg-slate-800 rounded-lg p-4 border border-slate-700 text-center">
                        <p className="text-2xl font-bold text-cyan-400">Required</p>
                        <p className="text-xs text-slate-400 mt-1">Court Approval</p>
                    </div>
                </div>

                {/* Step by Step */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                        <Clock className="w-5 h-5 text-emerald-500" />
                        Step-by-Step Process
                    </h2>

                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center">
                                    <span className="text-emerald-400 font-bold text-sm">1</span>
                                </div>
                                <div className="w-0.5 h-full bg-slate-700 mt-2"></div>
                            </div>
                            <div className="pb-6">
                                <h3 className="font-semibold text-white">Get Multiple Quotes</h3>
                                <p className="text-sm text-slate-400 mt-1">
                                    Contact at least 3 factoring companies. Each will offer different discount rates.
                                    Don&apos;t accept the first offer?�rates can vary significantly.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center">
                                    <span className="text-emerald-400 font-bold text-sm">2</span>
                                </div>
                                <div className="w-0.5 h-full bg-slate-700 mt-2"></div>
                            </div>
                            <div className="pb-6">
                                <h3 className="font-semibold text-white">Compare Offers Carefully</h3>
                                <p className="text-sm text-slate-400 mt-1">
                                    Look beyond the cash amount. Consider the discount rate, fees, and any hidden costs.
                                    Ask for a detailed breakdown in writing.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center">
                                    <span className="text-emerald-400 font-bold text-sm">3</span>
                                </div>
                                <div className="w-0.5 h-full bg-slate-700 mt-2"></div>
                            </div>
                            <div className="pb-6">
                                <h3 className="font-semibold text-white">Accept an Offer & Sign Documents</h3>
                                <p className="text-sm text-slate-400 mt-1">
                                    Once you choose a company, you&apos;ll sign a purchase agreement.
                                    Read everything carefully before signing.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center">
                                    <span className="text-emerald-400 font-bold text-sm">4</span>
                                </div>
                                <div className="w-0.5 h-full bg-slate-700 mt-2"></div>
                            </div>
                            <div className="pb-6">
                                <h3 className="font-semibold text-white">Court Hearing</h3>
                                <p className="text-sm text-slate-400 mt-1">
                                    Federal law requires court approval. A judge will review whether the sale is in your best interest.
                                    You may need to attend in person or appear virtually.
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
                                <h3 className="font-semibold text-white">Receive Your Cash</h3>
                                <p className="text-sm text-slate-400 mt-1">
                                    After court approval, you&apos;ll receive your lump sum within 1-2 weeks.
                                    Total process: 8-12 weeks from start to finish.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pros and Cons */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
                        <h2 className="text-lg font-bold text-green-400 mb-4 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5" />
                            Reasons to Sell
                        </h2>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                <span className="text-slate-300">Urgent medical expenses or debt</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                <span className="text-slate-300">Investment opportunity with higher returns</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                <span className="text-slate-300">Down payment on a home</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                <span className="text-slate-300">Starting or funding a business</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                <span className="text-slate-300">Education expenses</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
                        <h2 className="text-lg font-bold text-red-400 mb-4 flex items-center gap-2">
                            <XCircle className="w-5 h-5" />
                            Reasons to Keep
                        </h2>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-2">
                                <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                                <span className="text-slate-300">Significant loss of value (20-40%)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                                <span className="text-slate-300">Tax-free payments continue over time</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                                <span className="text-slate-300">Guaranteed income vs. risky lump sum</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                                <span className="text-slate-300">Protection from spending too fast</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                                <span className="text-slate-300">Family may depend on regular payments</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Warning Box */}
                <div className="bg-amber-900/20 border border-amber-700/50 rounded-xl p-4 mb-8">
                    <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-amber-400 mt-0.5" />
                        <div className="text-sm text-amber-200">
                            <p className="font-medium text-white mb-2">Before You Sell, Consider:</p>
                            <ul className="space-y-1">
                                <li>??You will lose 20-40% or more of your settlement&apos;s total value</li>
                                <li>??Once sold, you cannot get those payments back</li>
                                <li>??Structured settlements are tax-free; lump sums may have tax implications</li>
                                <li>??Seek advice from a financial advisor before making this decision</li>
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
                        href="/structured-settlement/settlement-calculator"
                        className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Calculate Your Cash Value
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    This guide is for informational purposes only. Consult a financial advisor
                    before making any decisions about your structured settlement.
                </p>
            </main>
        </>
    );
}
