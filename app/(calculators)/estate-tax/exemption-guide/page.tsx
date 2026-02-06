"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Scale, FileText, CheckCircle, AlertTriangle } from "lucide-react";
import { SITE, ESTATE_TAX_2026, formatCurrency, formatFullCurrency } from "@/lib/calculators/estate-tax";

export default function ExemptionGuidePage() {
    return (
        <>
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/estate-tax" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-emerald-500" />
                        <span className="text-lg font-bold text-white">Exemption Guide</span>
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
                        Estate Tax Exemption Guide
                    </h1>
                    <p className="text-slate-400">
                        Understanding federal estate tax exemptions and planning strategies
                    </p>
                </div>

                {/* Current Exemption */}
                <div className="bg-emerald-900/30 border border-emerald-500/50 rounded-xl p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4">
                        {SITE.year} Federal Estate Tax Exemption
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-slate-800/80 rounded-lg p-4 text-center">
                            <p className="text-sm text-slate-400">Single Person</p>
                            <p className="text-3xl font-bold text-emerald-400">{formatCurrency(ESTATE_TAX_2026.federalExemption)}</p>
                        </div>
                        <div className="bg-slate-800/80 rounded-lg p-4 text-center">
                            <p className="text-sm text-slate-400">Married Couple (with Portability)</p>
                            <p className="text-3xl font-bold text-emerald-400">{formatCurrency(ESTATE_TAX_2026.marriedExemption)}</p>
                        </div>
                    </div>
                </div>

                {/* What is Portability */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Scale className="w-5 h-5 text-emerald-500" />
                        What is Portability?
                    </h2>

                    <p className="text-slate-300 mb-4">
                        Portability allows a surviving spouse to use their deceased spouse&apos;s
                        unused estate tax exemption. This effectively doubles the exemption
                        for married couples.
                    </p>

                    <div className="bg-slate-700/50 rounded-lg p-4">
                        <p className="text-sm text-slate-400 mb-2">Example:</p>
                        <ul className="text-sm text-slate-300 space-y-1">
                            <li> First spouse dies with $5M estate (uses $5M of exemption)</li>
                            <li> Remaining exemption: {formatCurrency(ESTATE_TAX_2026.federalExemption - 5000000)}</li>
                            <li> With portability, surviving spouse gets this PLUS their own {formatCurrency(ESTATE_TAX_2026.federalExemption)}</li>
                            <li> <strong>Total available:</strong> {formatCurrency(ESTATE_TAX_2026.marriedExemption - 5000000)}</li>
                        </ul>
                    </div>

                    <div className="mt-4 flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-400 mt-1" />
                        <p className="text-sm text-amber-200">
                            Portability must be elected on a timely-filed estate tax return (Form 706),
                            even if no tax is owed.
                        </p>
                    </div>
                </div>

                {/* States with Estate Tax */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4">
                        States with Separate Estate Tax
                    </h2>
                    <p className="text-slate-400 text-sm mb-4">
                        Some states have their own estate taxes with lower exemptions than federal.
                    </p>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="text-left text-slate-400 border-b border-slate-700">
                                    <th className="py-2">State</th>
                                    <th className="py-2">Exemption</th>
                                    <th className="py-2">Max Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ESTATE_TAX_2026.statesWithEstateTax.map((state) => (
                                    <tr key={state.state} className="border-b border-slate-700/50">
                                        <td className="py-2 text-white">{state.state}</td>
                                        <td className="py-2 text-emerald-400">{formatFullCurrency(state.exemption)}</td>
                                        <td className="py-2 text-slate-300">{state.rate}%</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Planning Strategies */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Estate Tax Planning Strategies
                    </h2>

                    <div className="space-y-3">
                        {[
                            `Annual gifting (${formatFullCurrency(ESTATE_TAX_2026.annualGiftExclusion)} per recipient per year)`,
                            "Charitable donations (100% deductible from estate)",
                            "Irrevocable life insurance trusts (ILIT)",
                            "Grantor retained annuity trusts (GRAT)",
                            "Family limited partnerships (FLP)",
                            "Spousal lifetime access trusts (SLAT)",
                        ].map((strategy, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5" />
                                <span className="text-slate-300">{strategy}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sunset Warning */}
                <div className="bg-red-900/20 border border-red-700/50 rounded-xl p-4 mb-8">
                    <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5" />
                        <div className="text-sm text-red-200">
                            <p className="font-medium text-white mb-2">?�️ Exemption Sunset Warning</p>
                            <p>
                                The current high exemption ({formatCurrency(ESTATE_TAX_2026.federalExemption)}) is
                                scheduled to sunset after 2026. Without Congressional action, the exemption
                                may drop to approximately <strong>$6-7 million</strong> per person.
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
                        href="/estate-tax/estate-calculator"
                        className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Calculate Your Estate Tax
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    This is general information, not tax or legal advice. Consult professionals.
                </p>
            </main>
        </>
    );
}
