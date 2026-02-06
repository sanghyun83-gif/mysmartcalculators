"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Coins, FileText, CheckCircle, XCircle, AlertTriangle } from "lucide-react";
import { SITE, CRYPTO_TAX_2026 } from "@/lib/calculators/crypto-tax";

export default function TaxGuidePage() {
    return (
        <>
            {/* Header */}


            <main className="max-w-4xl mx-auto px-4 py-8">
                {/* Page Header */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        Crypto Tax Guide {SITE.year}
                    </h1>
                    <p className="text-slate-400">
                        Everything you need to know about IRS cryptocurrency taxation
                    </p>
                </div>

                {/* IRS Treatment */}
                <div className="bg-emerald-900/30 border border-emerald-500/50 rounded-xl p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Coins className="w-5 h-5 text-emerald-500" />
                        IRS Crypto Treatment
                    </h2>
                    <p className="text-slate-300 mb-4">
                        The IRS treats cryptocurrency as <strong>property</strong>, not currency.
                        This means capital gains tax rules apply when you dispose of crypto.
                    </p>
                    <div className="bg-slate-800/80 rounded-lg p-4">
                        <p className="text-sm text-slate-300">
                            <strong>Capital Gain/Loss</strong> = Proceeds - Cost Basis
                        </p>
                    </div>
                </div>

                {/* Taxable Events */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-red-900/20 border border-red-500/50 rounded-xl p-5">
                        <h3 className="text-lg font-semibold text-red-400 mb-4 flex items-center gap-2">
                            <XCircle className="w-5 h-5" />
                            Taxable Events
                        </h3>
                        <ul className="space-y-2">
                            {CRYPTO_TAX_2026.taxableEvents.map((event, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                                    <span className="text-red-400"></span>
                                    {event}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-emerald-900/20 border border-emerald-500/50 rounded-xl p-5">
                        <h3 className="text-lg font-semibold text-emerald-400 mb-4 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5" />
                            Non-Taxable Events
                        </h3>
                        <ul className="space-y-2">
                            {CRYPTO_TAX_2026.nonTaxableEvents.map((event, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                                    <span className="text-emerald-400"></span>
                                    {event}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Cost Basis Methods */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Cost Basis Methods
                    </h2>

                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-slate-700/50 rounded-lg p-4">
                            <p className="font-bold text-emerald-400">FIFO</p>
                            <p className="text-sm text-slate-300 mt-2">First In, First Out</p>
                            <p className="text-xs text-slate-500 mt-1">Sell oldest coins first (IRS default)</p>
                        </div>
                        <div className="bg-slate-700/50 rounded-lg p-4">
                            <p className="font-bold text-white">LIFO</p>
                            <p className="text-sm text-slate-300 mt-2">Last In, First Out</p>
                            <p className="text-xs text-slate-500 mt-1">Sell newest coins first</p>
                        </div>
                        <div className="bg-slate-700/50 rounded-lg p-4">
                            <p className="font-bold text-white">Specific ID</p>
                            <p className="text-sm text-slate-300 mt-2">You choose which coins</p>
                            <p className="text-xs text-slate-500 mt-1">Most tax-efficient, needs records</p>
                        </div>
                    </div>
                </div>

                {/* Forms Required */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4">
                        IRS Forms for Crypto
                    </h2>

                    <div className="space-y-3">
                        {[
                            { form: "Form 8949", desc: "Report each crypto sale/trade with date, proceeds, cost basis, gain/loss" },
                            { form: "Schedule D", desc: "Summary of capital gains/losses from Form 8949" },
                            { form: "Schedule 1", desc: "Mining/staking income reported as 'Other Income'" },
                            { form: "Schedule C", desc: "If crypto is part of a business" },
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3 bg-slate-700/50 rounded-lg p-3">
                                <CheckCircle className="w-4 h-4 text-emerald-400 mt-1" />
                                <div>
                                    <p className="font-semibold text-white">{item.form}</p>
                                    <p className="text-xs text-slate-400">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mining/Staking */}
                <div className="bg-orange-900/20 border border-orange-700/50 rounded-xl p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Mining & Staking Rewards
                    </h2>
                    <p className="text-slate-300 mb-3">
                        Mining and staking rewards are taxed as <strong>ordinary income</strong> at
                        fair market value when received.
                    </p>
                    <div className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-orange-400 mt-1" />
                        <p className="text-sm text-orange-200">
                            You owe income tax when you receive rewards, plus capital gains tax when you sell.
                        </p>
                    </div>
                </div>

                {/* Tax-Loss Harvesting */}
                <div className="bg-blue-900/20 border border-blue-700/50 rounded-xl p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Tax-Loss Harvesting
                    </h2>
                    <p className="text-slate-300 mb-3">
                        Sell crypto at a loss to offset gains. Unlike stocks, crypto is NOT
                        currently subject to wash sale rules (as of {SITE.year}).
                    </p>
                    <ul className="text-sm text-blue-200 space-y-1">
                        <li>??Losses offset gains dollar-for-dollar</li>
                        <li>??Up to $3,000 in losses can offset ordinary income</li>
                        <li>??Excess losses carry forward to future years</li>
                    </ul>
                </div>

                {/* Ad Placeholder */}
                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center">
                    <p className="text-sm text-slate-500">Advertisement</p>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link
                        href="/crypto-tax/crypto-calculator"
                        className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Calculate Your Crypto Tax
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    Tax laws change frequently. Consult a crypto tax professional.
                </p>
            </main>
        </>
    );
}
