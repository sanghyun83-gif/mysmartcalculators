"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Shield, FileText, CheckCircle, AlertTriangle } from "lucide-react";
import { SITE, PMI_2026, formatCurrency } from "@/lib/calculators/pmi";

export default function PMIGuidePage() {
    return (
        <>
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/pmi" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-emerald-500" />
                        <span className="text-lg font-bold text-white">PMI Guide</span>
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
                        Understanding PMI
                    </h1>
                    <p className="text-slate-400">
                        What private mortgage insurance is and how to remove it
                    </p>
                </div>

                {/* What is PMI */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">
                        What is PMI?
                    </h2>
                    <p className="text-slate-300 text-sm mb-4">
                        Private Mortgage Insurance (PMI) is required when you put less than 20% down
                        on a conventional loan. It protects the lender if you default on your mortgage.
                    </p>
                    <div className="bg-yellow-900/30 border border-yellow-500/50 rounded-lg p-4">
                        <div className="flex items-start gap-2">
                            <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5" />
                            <p className="text-yellow-200 text-sm">
                                PMI protects the lender, not you. You pay for it but receive no direct benefit.
                            </p>
                        </div>
                    </div>
                </div>

                {/* PMI Rates */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">
                        {SITE.year} PMI Rate Table
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-slate-700">
                                    <th className="py-3 text-left text-slate-400">Down Payment</th>
                                    <th className="py-3 text-center text-slate-400">LTV</th>
                                    <th className="py-3 text-right text-slate-400">Annual Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                {PMI_2026.rates.map((tier) => (
                                    <tr key={tier.description} className="border-b border-slate-700/50">
                                        <td className="py-3 text-white">{100 - tier.ltvMax}%</td>
                                        <td className="py-3 text-center text-slate-300">{tier.ltvMax}%</td>
                                        <td className="py-3 text-right text-emerald-400 font-bold">{tier.rate}%</td>
                                    </tr>
                                ))}
                                <tr>
                                    <td className="py-3 text-green-400 font-medium">20%+</td>
                                    <td className="py-3 text-center text-slate-300">??0%</td>
                                    <td className="py-3 text-right text-green-400 font-bold">No PMI</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* PMI Removal */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-emerald-900/20 border border-emerald-500/50 rounded-xl p-6">
                        <h2 className="text-lg font-bold text-white mb-3">Automatic Removal</h2>
                        <p className="text-4xl font-bold text-emerald-400 mb-2">{PMI_2026.removalThresholds.automatic}% LTV</p>
                        <p className="text-sm text-emerald-200">
                            PMI is automatically canceled when you reach 78% loan-to-value ratio
                            based on the original purchase price.
                        </p>
                    </div>
                    <div className="bg-teal-900/20 border border-teal-500/50 rounded-xl p-6">
                        <h2 className="text-lg font-bold text-white mb-3">Request Removal</h2>
                        <p className="text-4xl font-bold text-teal-400 mb-2">{PMI_2026.removalThresholds.request}% LTV</p>
                        <p className="text-sm text-teal-200">
                            You can request PMI cancellation at 80% LTV with good payment history
                            and no second liens.
                        </p>
                    </div>
                </div>

                {/* Ways to Avoid/Remove PMI */}
                <div className="bg-emerald-900/20 border border-emerald-500/50 rounded-xl p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-500" />
                        Ways to Avoid or Remove PMI
                    </h2>
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                        {[
                            "Put 20% or more down",
                            "Make extra principal payments",
                            "Request a new appraisal if home value increased",
                            "Refinance when you have 20% equity",
                            "Consider lender-paid PMI (LPMI)",
                            "Look into piggyback loans (80-10-10)",
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
                        href="/pmi/calculator"
                        className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Calculate Your PMI
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Citation */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    {PMI_2026.citation}
                </p>
            </main>
        </>
    );
}
