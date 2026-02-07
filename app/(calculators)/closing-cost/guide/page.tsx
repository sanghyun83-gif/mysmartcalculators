"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Receipt, FileText, CheckCircle } from "lucide-react";
import { SITE, CLOSING_COST_2026, formatCurrency } from "@/lib/calculators/closing-cost";

export default function ClosingCostGuidePage() {
    return (
        <>
            {/* Header */}

            <main className="max-w-4xl mx-auto px-4 py-8">
                {/* Page Header */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        Understanding Closing Costs
                    </h1>
                    <p className="text-slate-400">
                        Know what fees to expect when buying or selling a home
                    </p>
                </div>

                {/* Buyer Costs */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Buyer Closing Costs (2-5%)
                    </h2>

                    <div className="space-y-3">
                        {CLOSING_COST_2026.buyerCosts.map((cost) => (
                            <div key={cost.name} className="flex items-center justify-between py-2 border-b border-slate-700 last:border-0">
                                <span className="text-slate-300">{cost.name}</span>
                                <span className="text-emerald-400 font-medium">
                                    {'fixed' in cost ? formatCurrency(cost.fixed) : `${cost.percent}%`}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Seller Costs */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Seller Closing Costs (6-10%)
                    </h2>

                    <div className="space-y-3">
                        {CLOSING_COST_2026.sellerCosts.map((cost) => (
                            <div key={cost.name} className="flex items-center justify-between py-2 border-b border-slate-700 last:border-0">
                                <span className="text-slate-300">{cost.name}</span>
                                <span className="text-teal-400 font-medium">
                                    {'fixed' in cost ? formatCurrency(cost.fixed) : `${cost.percent}%`}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tips to Reduce */}
                <div className="bg-emerald-900/20 border border-emerald-500/50 rounded-xl p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-500" />
                        Ways to Reduce Closing Costs
                    </h2>
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                        {[
                            "Shop around for lenders",
                            "Negotiate seller credits",
                            "Ask about no-closing-cost loans",
                            "Compare title companies",
                            "Close at end of month",
                            "Review Loan Estimate carefully",
                        ].map((tip, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-emerald-400" />
                                <span className="text-emerald-200">{tip}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* When Are Closing Costs Paid */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">
                        When Are Closing Costs Paid?
                    </h2>

                    <p className="text-slate-300 text-sm mb-4">
                        Closing costs are paid at the closing table on your settlement date.
                        You&apos;ll receive a Closing Disclosure at least 3 days before closing
                        with final amounts.
                    </p>

                    <div className="bg-slate-700/50 rounded-lg p-4 text-sm">
                        <p className="text-emerald-400 font-medium">Pro Tip:</p>
                        <p className="text-slate-300">
                            Request a cashier&apos;s check or wire the funds a day early to avoid
                            delays on closing day.
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
                        href="/closing-cost/calculator"
                        className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Calculate Your Closing Costs
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Citation */}
            </main>
        </>
    );
}
