"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Home, FileText, CheckCircle, PiggyBank } from "lucide-react";
import { SITE, DOWN_PAYMENT_2026, formatCurrency } from "@/lib/calculators/down-payment";

export default function SavingsGuidePage() {
    return (
        <>
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/down-payment" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-emerald-500" />
                        <span className="text-lg font-bold text-white">Savings Guide</span>
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
                        How to Save for a Down Payment
                    </h1>
                    <p className="text-slate-400">
                        Strategies to reach your home buying goal faster
                    </p>
                </div>

                {/* Down Payment Options */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Down Payment Options
                    </h2>

                    <div className="space-y-3">
                        {DOWN_PAYMENT_2026.percentages.map((opt) => {
                            const sampleAmount = Math.round(DOWN_PAYMENT_2026.statistics.medianHomePrice * (opt.percent / 100));
                            return (
                                <div key={opt.percent} className="flex items-center justify-between py-3 border-b border-slate-700 last:border-0">
                                    <div>
                                        <p className="text-white font-medium">{opt.percent}% - {opt.name}</p>
                                        <p className={`text-xs ${opt.pmiRequired ? 'text-yellow-400' : 'text-green-400'}`}>
                                            {opt.pmiRequired ? 'PMI Required' : 'No PMI'}
                                        </p>
                                    </div>
                                    <span className="text-emerald-400 font-bold">{formatCurrency(sampleAmount)}</span>
                                </div>
                            );
                        })}
                    </div>
                    <p className="text-xs text-slate-500 mt-3">
                        *Based on {formatCurrency(DOWN_PAYMENT_2026.statistics.medianHomePrice)} median home price
                    </p>
                </div>

                {/* Savings Tips */}
                <div className="bg-emerald-900/20 border border-emerald-500/50 rounded-xl p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <PiggyBank className="w-5 h-5 text-emerald-500" />
                        Top Savings Strategies
                    </h2>
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                        {[
                            "Set up automatic savings transfers",
                            "Cut subscription services",
                            "Reduce dining out expenses",
                            "Use tax refunds for down payment",
                            "Pick up a side gig",
                            "Sell items you don't need",
                            "Consider first-time buyer programs",
                            "Ask family for gift funds",
                        ].map((tip, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-emerald-400" />
                                <span className="text-emerald-200">{tip}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* PMI Explained */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Understanding PMI
                    </h2>

                    <p className="text-slate-300 text-sm mb-4">
                        Private Mortgage Insurance is required when you put down less than 20%.
                        It protects the lender if you default.
                    </p>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-slate-700">
                                    <th className="py-2 text-left text-slate-400">Down Payment</th>
                                    <th className="py-2 text-right text-slate-400">LTV Ratio</th>
                                    <th className="py-2 text-right text-slate-400">Est. PMI Rate</th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-300">
                                <tr className="border-b border-slate-700/50">
                                    <td className="py-2">3%</td>
                                    <td className="py-2 text-right">97%</td>
                                    <td className="py-2 text-right text-yellow-400">{DOWN_PAYMENT_2026.pmiRates.ltv97}%</td>
                                </tr>
                                <tr className="border-b border-slate-700/50">
                                    <td className="py-2">5%</td>
                                    <td className="py-2 text-right">95%</td>
                                    <td className="py-2 text-right text-yellow-400">{DOWN_PAYMENT_2026.pmiRates.ltv95}%</td>
                                </tr>
                                <tr className="border-b border-slate-700/50">
                                    <td className="py-2">10%</td>
                                    <td className="py-2 text-right">90%</td>
                                    <td className="py-2 text-right text-yellow-400">{DOWN_PAYMENT_2026.pmiRates.ltv90}%</td>
                                </tr>
                                <tr>
                                    <td className="py-2">20%+</td>
                                    <td className="py-2 text-right">80% or less</td>
                                    <td className="py-2 text-right text-green-400">No PMI</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Ad Placeholder */}
                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center">
                    <p className="text-sm text-slate-500">Advertisement</p>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link
                        href="/down-payment/calculator"
                        className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Calculate Your Down Payment
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Citation */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    {DOWN_PAYMENT_2026.citation}
                </p>
            </main>
        </>
    );
}
