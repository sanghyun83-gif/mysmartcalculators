"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, TrendingUp, FileText, CheckCircle, AlertTriangle } from "lucide-react";
import { SITE, ROTH_2026, formatCurrency } from "@/lib/calculators/roth-ira";

export default function IncomeLimitsPage() {
    return (
        <>
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/roth-ira" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-emerald-500" />
                        <span className="text-lg font-bold text-white">Income Limits Guide</span>
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
                        {SITE.year} Roth IRA Income Limits
                    </h1>
                    <p className="text-slate-400">
                        Eligibility based on your Modified Adjusted Gross Income (MAGI)
                    </p>
                </div>

                {/* Contribution Limits */}
                <div className="bg-emerald-900/30 border border-emerald-500/50 rounded-xl p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-emerald-500" />
                        {SITE.year} Contribution Limits
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-slate-800/80 rounded-lg p-4">
                            <p className="text-sm text-emerald-400 font-semibold">Under Age 50</p>
                            <p className="text-3xl font-bold text-white">{formatCurrency(ROTH_2026.contributionLimit)}</p>
                        </div>
                        <div className="bg-slate-800/80 rounded-lg p-4">
                            <p className="text-sm text-emerald-400 font-semibold">Age 50+</p>
                            <p className="text-3xl font-bold text-white">{formatCurrency(ROTH_2026.contributionLimit + ROTH_2026.catchUpContribution)}</p>
                            <p className="text-xs text-slate-400">+{formatCurrency(ROTH_2026.catchUpContribution)} catch-up</p>
                        </div>
                    </div>
                </div>

                {/* Income Limits Table */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Income Limits by Filing Status
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="text-left text-slate-400 border-b border-slate-700">
                                    <th className="py-3">Filing Status</th>
                                    <th className="py-3">Full Contribution</th>
                                    <th className="py-3">Phase-Out</th>
                                    <th className="py-3">No Contribution</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-slate-700/50">
                                    <td className="py-3 text-white font-medium">Single</td>
                                    <td className="py-3 text-emerald-400">&lt; {formatCurrency(ROTH_2026.incomeLimits.singlePhaseOutStart)}</td>
                                    <td className="py-3 text-yellow-400">{formatCurrency(ROTH_2026.incomeLimits.singlePhaseOutStart)} - {formatCurrency(ROTH_2026.incomeLimits.singlePhaseOutEnd)}</td>
                                    <td className="py-3 text-red-400">&gt; {formatCurrency(ROTH_2026.incomeLimits.singlePhaseOutEnd)}</td>
                                </tr>
                                <tr className="border-b border-slate-700/50">
                                    <td className="py-3 text-white font-medium">Married Filing Jointly</td>
                                    <td className="py-3 text-emerald-400">&lt; {formatCurrency(ROTH_2026.incomeLimits.marriedPhaseOutStart)}</td>
                                    <td className="py-3 text-yellow-400">{formatCurrency(ROTH_2026.incomeLimits.marriedPhaseOutStart)} - {formatCurrency(ROTH_2026.incomeLimits.marriedPhaseOutEnd)}</td>
                                    <td className="py-3 text-red-400">&gt; {formatCurrency(ROTH_2026.incomeLimits.marriedPhaseOutEnd)}</td>
                                </tr>
                                <tr>
                                    <td className="py-3 text-white font-medium">Married Filing Separately</td>
                                    <td className="py-3 text-slate-400">$0</td>
                                    <td className="py-3 text-yellow-400">$0 - $10,000</td>
                                    <td className="py-3 text-red-400">&gt; $10,000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Phase-Out Example */}
                <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-xl p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-yellow-500" />
                        Phase-Out Example
                    </h2>
                    <p className="text-slate-300 text-sm mb-4">
                        If you&apos;re single with MAGI of $157,500 (halfway through the phase-out):
                    </p>
                    <div className="bg-slate-800/80 rounded-lg p-4">
                        <p className="text-yellow-200">
                            Reduced limit: ~<strong>{formatCurrency(ROTH_2026.contributionLimit / 2)}</strong> instead of {formatCurrency(ROTH_2026.contributionLimit)}
                        </p>
                    </div>
                </div>

                {/* Backdoor Roth */}
                <div className="bg-blue-900/20 border border-blue-700/50 rounded-xl p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Over the Income Limit? Backdoor Roth IRA
                    </h2>
                    <p className="text-slate-300 text-sm mb-4">
                        High earners can still contribute via the &quot;Backdoor Roth&quot; strategy:
                    </p>
                    <ol className="text-sm text-blue-200 space-y-2">
                        <li className="flex items-start gap-2">
                            <span className="font-bold">1.</span>
                            <span>Contribute to a Traditional IRA (non-deductible)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="font-bold">2.</span>
                            <span>Convert to Roth IRA (pay tax on any gains)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="font-bold">3.</span>
                            <span>Enjoy tax-free growth going forward</span>
                        </li>
                    </ol>
                    <p className="text-xs text-slate-400 mt-4">
                        ?�️ Be aware of the &quot;pro-rata rule&quot; if you have existing Traditional IRA balances.
                    </p>
                </div>

                {/* Withdrawal Rules */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Withdrawal Rules
                    </h2>

                    <div className="space-y-3">
                        <div className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-emerald-400 mt-1" />
                            <p className="text-sm text-slate-300">
                                <strong>Contributions:</strong> Withdraw anytime, tax and penalty-free
                            </p>
                        </div>
                        <div className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-emerald-400 mt-1" />
                            <p className="text-sm text-slate-300">
                                <strong>Earnings:</strong> Tax-free if age 59½+ AND 5-year rule met
                            </p>
                        </div>
                        <div className="flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 text-yellow-400 mt-1" />
                            <p className="text-sm text-slate-300">
                                <strong>Early earnings withdrawal:</strong> {ROTH_2026.withdrawalRules.earlyWithdrawalPenalty}% penalty + taxes
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
                        href="/roth-ira/roth-calculator"
                        className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Calculate Your Roth IRA Growth
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    Income limits subject to IRS updates. Consult a tax professional.
                </p>
            </main>
        </>
    );
}
