"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, CreditCard, FileText, CheckCircle, AlertTriangle } from "lucide-react";
import { SITE, HELOC_2026, formatCurrency } from "@/lib/calculators/heloc";

export default function HELOCGuidePage() {
    return (
        <>
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/heloc" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-emerald-500" />
                        <span className="text-lg font-bold text-white">HELOC Guide</span>
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
                        Understanding HELOCs
                    </h1>
                    <p className="text-slate-400">
                        How Home Equity Lines of Credit work
                    </p>
                </div>

                {/* What is HELOC */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">
                        What is a HELOC?
                    </h2>
                    <p className="text-slate-300 text-sm mb-4">
                        A Home Equity Line of Credit (HELOC) is a revolving credit line secured by
                        your home. It works like a credit card - borrow what you need, when you need
                        it, up to your credit limit during the draw period.
                    </p>
                    <div className="bg-emerald-900/30 border border-emerald-500/50 rounded-lg p-4">
                        <p className="text-emerald-200 text-sm">
                            <strong>Key feature:</strong> Variable interest rate typically tied to
                            Prime Rate ({HELOC_2026.rates.primeRate}% in {SITE.year})
                        </p>
                    </div>
                </div>

                {/* Draw vs Repayment */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-emerald-900/20 border border-emerald-500/50 rounded-xl p-6">
                        <h2 className="text-lg font-bold text-white mb-2">Draw Period</h2>
                        <p className="text-4xl font-bold text-emerald-400 mb-2">{HELOC_2026.periods.drawPeriod} years</p>
                        <ul className="space-y-2 text-sm text-emerald-200">
                            <li>??Borrow as needed, up to limit</li>
                            <li>??Pay interest only on borrowed amount</li>
                            <li>??Reuse as you pay down</li>
                            <li>??Minimum payments required</li>
                        </ul>
                    </div>
                    <div className="bg-teal-900/20 border border-teal-500/50 rounded-xl p-6">
                        <h2 className="text-lg font-bold text-white mb-2">Repayment Period</h2>
                        <p className="text-4xl font-bold text-teal-400 mb-2">{HELOC_2026.periods.repaymentPeriod} years</p>
                        <ul className="space-y-2 text-sm text-teal-200">
                            <li>??No more borrowing allowed</li>
                            <li>??Pay principal + interest</li>
                            <li>??Higher monthly payments</li>
                            <li>??Balance must be paid off</li>
                        </ul>
                    </div>
                </div>

                {/* HELOC vs Home Equity Loan */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">
                        HELOC vs Home Equity Loan
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-slate-700">
                                    <th className="py-3 text-left text-slate-400">Feature</th>
                                    <th className="py-3 text-center text-emerald-400">HELOC</th>
                                    <th className="py-3 text-center text-teal-400">Home Equity Loan</th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-300">
                                <tr className="border-b border-slate-700/50">
                                    <td className="py-3">Type</td>
                                    <td className="py-3 text-center">Revolving credit</td>
                                    <td className="py-3 text-center">Lump sum</td>
                                </tr>
                                <tr className="border-b border-slate-700/50">
                                    <td className="py-3">Interest Rate</td>
                                    <td className="py-3 text-center">Variable</td>
                                    <td className="py-3 text-center">Fixed</td>
                                </tr>
                                <tr className="border-b border-slate-700/50">
                                    <td className="py-3">Payments</td>
                                    <td className="py-3 text-center">Varies</td>
                                    <td className="py-3 text-center">Fixed monthly</td>
                                </tr>
                                <tr>
                                    <td className="py-3">Best For</td>
                                    <td className="py-3 text-center">Ongoing projects</td>
                                    <td className="py-3 text-center">One-time expense</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Pros and Cons */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-emerald-900/20 border border-emerald-500/50 rounded-xl p-6">
                        <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-emerald-500" />
                            HELOC Pros
                        </h2>
                        <ul className="space-y-2 text-sm text-emerald-200">
                            <li>??Flexibility - borrow as needed</li>
                            <li>??Interest-only payments during draw</li>
                            <li>??Potential tax deduction</li>
                            <li>??Lower rates than credit cards</li>
                            <li>??Reuse credit as you pay</li>
                        </ul>
                    </div>
                    <div className="bg-orange-900/20 border border-orange-500/50 rounded-xl p-6">
                        <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5 text-orange-500" />
                            HELOC Cons
                        </h2>
                        <ul className="space-y-2 text-sm text-orange-200">
                            <li>??Variable rate can increase</li>
                            <li>??Your home is collateral</li>
                            <li>??Payment shock in repayment</li>
                            <li>??Closing costs apply</li>
                            <li>??Temptation to overborrow</li>
                        </ul>
                    </div>
                </div>

                {/* Ad Placeholder */}
                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center">
                    <p className="text-sm text-slate-500">Advertisement</p>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link
                        href="/heloc/calculator"
                        className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Calculate Your HELOC
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Citation */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    {HELOC_2026.citation}
                </p>
            </main>
        </>
    );
}
