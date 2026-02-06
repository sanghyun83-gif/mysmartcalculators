"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, RefreshCw, FileText, CheckCircle, AlertTriangle } from "lucide-react";
import { SITE, REFINANCE_2026, formatCurrency } from "@/lib/calculators/refinance";

export default function RefinanceGuidePage() {
    return (
        <>
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/refinance" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-emerald-500" />
                        <span className="text-lg font-bold text-white">Refinance Guide</span>
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
                        When Should You Refinance?
                    </h1>
                    <p className="text-slate-400">
                        Learn if refinancing makes sense for your situation
                    </p>
                </div>

                {/* Current Rates */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">
                        {SITE.year} Average Refinance Rates
                    </h2>

                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                            <p className="text-2xl font-bold text-emerald-400">{REFINANCE_2026.rates.avg30Year}%</p>
                            <p className="text-sm text-slate-300">30-Year Fixed</p>
                        </div>
                        <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                            <p className="text-2xl font-bold text-teal-400">{REFINANCE_2026.rates.avg15Year}%</p>
                            <p className="text-sm text-slate-300">15-Year Fixed</p>
                        </div>
                        <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                            <p className="text-2xl font-bold text-cyan-400">{REFINANCE_2026.rates.avgARM}%</p>
                            <p className="text-sm text-slate-300">5/1 ARM</p>
                        </div>
                    </div>
                </div>

                {/* Refinance Types */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Types of Refinancing
                    </h2>

                    <div className="space-y-4">
                        {REFINANCE_2026.types.map((type) => (
                            <div key={type.name} className="flex items-start gap-3 py-2 border-b border-slate-700/50 last:border-0">
                                <RefreshCw className="w-5 h-5 text-emerald-400 mt-0.5" />
                                <div>
                                    <p className="text-white font-medium">{type.name}</p>
                                    <p className="text-sm text-slate-400">{type.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* When to Refinance */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-emerald-900/20 border border-emerald-500/50 rounded-xl p-6">
                        <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-emerald-500" />
                            Good Reasons to Refinance
                        </h2>
                        <ul className="space-y-2 text-sm text-emerald-200">
                            <li>??Rate is 0.5-1%+ lower than current</li>
                            <li>??Plan to stay past break-even point</li>
                            <li>??Want to shorten loan term</li>
                            <li>??Need to remove PMI</li>
                            <li>??Switching from ARM to fixed</li>
                        </ul>
                    </div>
                    <div className="bg-orange-900/20 border border-orange-500/50 rounded-xl p-6">
                        <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5 text-orange-500" />
                            Think Twice If...
                        </h2>
                        <ul className="space-y-2 text-sm text-orange-200">
                            <li>??Moving before break-even</li>
                            <li>??Rate reduction is minimal</li>
                            <li>??Extending term significantly</li>
                            <li>??Taking cash out for non-essentials</li>
                            <li>??Current loan has prepayment penalty</li>
                        </ul>
                    </div>
                </div>

                {/* Closing Costs */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Refinance Closing Costs
                    </h2>

                    <p className="text-sm text-slate-300 mb-4">
                        Closing costs typically range from 2-5% of your loan amount.
                        Factor these into your break-even calculation.
                    </p>

                    <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                            <p className="text-2xl font-bold text-emerald-400">{REFINANCE_2026.closingCosts.low}%</p>
                            <p className="text-sm text-slate-400">Low End</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-teal-400">{REFINANCE_2026.closingCosts.average}%</p>
                            <p className="text-sm text-slate-400">Average</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-cyan-400">{REFINANCE_2026.closingCosts.high}%</p>
                            <p className="text-sm text-slate-400">High End</p>
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
                        href="/refinance/calculator"
                        className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Calculate Your Savings
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Citation */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    {REFINANCE_2026.citation}
                </p>
            </main>
        </>
    );
}
