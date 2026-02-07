"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, GraduationCap, FileText, CheckCircle, DollarSign } from "lucide-react";
import { SITE, PLAN_529_2026, formatCurrency } from "@/lib/calculators/529";

export default function StateBenefitsPage() {
    return (
        <>
            {/* Header */}

            <main className="max-w-4xl mx-auto px-4 py-8">
                {/* Page Header */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        529 Plan State Tax Benefits
                    </h1>
                    <p className="text-slate-400">
                        {PLAN_529_2026.statistics.statesWithDeduction} states offer income tax deductions
                    </p>
                </div>

                {/* Federal Benefits */}
                <div className="bg-emerald-900/30 border border-emerald-500/50 rounded-xl p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-emerald-500" />
                        Federal Tax Benefits
                    </h2>
                    <div className="space-y-3 text-sm">
                        <div className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-emerald-400 mt-1" />
                            <p className="text-slate-300">
                                <strong>Tax-free growth:</strong> No federal taxes on investment gains
                            </p>
                        </div>
                        <div className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-emerald-400 mt-1" />
                            <p className="text-slate-300">
                                <strong>Tax-free withdrawals:</strong> When used for qualified education expenses
                            </p>
                        </div>
                        <div className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-emerald-400 mt-1" />
                            <p className="text-slate-300">
                                <strong>Gift tax advantages:</strong> Up to {formatCurrency(PLAN_529_2026.annualGiftExclusion)}/beneficiary or {formatCurrency(PLAN_529_2026.superfunding)} superfunding
                            </p>
                        </div>
                    </div>
                </div>

                {/* Top State Deductions */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Top State Tax Deductions
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="text-left text-slate-400 border-b border-slate-700">
                                    <th className="py-3">State</th>
                                    <th className="py-3">Single Deduction</th>
                                    <th className="py-3">Married Deduction</th>
                                </tr>
                            </thead>
                            <tbody>
                                {PLAN_529_2026.topStateDeductions.map((state, i) => (
                                    <tr key={i} className="border-b border-slate-700/50">
                                        <td className="py-3 text-white font-medium">{state.state}</td>
                                        <td className="py-3 text-emerald-400">
                                            {typeof state.deduction === 'number'
                                                ? formatCurrency(state.deduction)
                                                : state.deduction}
                                        </td>
                                        <td className="py-3 text-emerald-400">
                                            {typeof state.married === 'number'
                                                ? formatCurrency(state.married)
                                                : state.married}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-xs text-slate-500 mt-4">
                        * Most states require contributing to in-state plan for deduction
                    </p>
                </div>

                {/* Superfunding */}
                <div className="bg-blue-900/20 border border-blue-700/50 rounded-xl p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <DollarSign className="w-5 h-5 text-blue-500" />
                        Superfunding (5-Year Gift Election)
                    </h2>
                    <p className="text-slate-300 text-sm mb-4">
                        Contribute up to 5 years of gifts at once without gift tax:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-slate-800/80 rounded-lg p-4">
                            <p className="text-sm text-blue-400 font-semibold">Single Donor</p>
                            <p className="text-2xl font-bold text-white">{formatCurrency(PLAN_529_2026.superfunding)}</p>
                            <p className="text-xs text-slate-400">per beneficiary</p>
                        </div>
                        <div className="bg-slate-800/80 rounded-lg p-4">
                            <p className="text-sm text-blue-400 font-semibold">Married Couple</p>
                            <p className="text-2xl font-bold text-white">{formatCurrency(PLAN_529_2026.superfunding * 2)}</p>
                            <p className="text-xs text-slate-400">per beneficiary (gift-splitting)</p>
                        </div>
                    </div>
                </div>

                {/* States Without Tax Benefits */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4">
                        States Without Income Tax Deduction
                    </h2>
                    <p className="text-sm text-slate-400 mb-3">
                        No deduction (no state income tax or no 529 deduction):
                    </p>
                    <p className="text-sm text-slate-300">
                        Alaska, California, Delaware, Florida, Hawaii, Kentucky, Maine, Nevada,
                        New Hampshire, New Jersey, North Carolina, South Dakota, Tennessee,
                        Texas, Washington, Wyoming
                    </p>
                    <p className="text-xs text-slate-500 mt-3">
                        These residents can still benefit from tax-free growth and can choose any state&apos;s plan.
                    </p>
                </div>

                {/* Account Limits */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Account Limits
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <p className="text-sm text-slate-400">Annual Gift Exclusion</p>
                            <p className="text-xl font-bold text-emerald-400">{formatCurrency(PLAN_529_2026.annualGiftExclusion)}</p>
                            <p className="text-xs text-slate-500">per donor, per beneficiary</p>
                        </div>
                        <div>
                            <p className="text-sm text-slate-400">Average Account Limit</p>
                            <p className="text-xl font-bold text-white">{formatCurrency(PLAN_529_2026.avgAccountLimit)}</p>
                            <p className="text-xs text-slate-500">varies by state</p>
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
                        href="/529/calculator"
                        className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Calculate Your 529 Growth
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    Tax benefits vary by state. Consult a tax professional.
                </p>
            </main>
        </>
    );
}
