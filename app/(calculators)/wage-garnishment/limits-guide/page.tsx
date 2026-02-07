"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, DollarSign, Scale, FileText, AlertTriangle, CheckCircle, CreditCard, Users, Landmark, GraduationCap } from "lucide-react";
import { SITE, GARNISHMENT_LIMITS_2026, GARNISHMENT_TYPES } from "@/lib/calculators/wage-garnishment";

export default function LimitsGuidePage() {
    return (
        <>
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/wage-garnishment" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-emerald-500" />
                        <span className="text-lg font-bold text-white">Garnishment Limits</span>
                    </div>
                    <span className="ml-auto text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">
                        {SITE.year} CCPA
                    </span>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 py-8">
                {/* Page Header */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        Federal Wage Garnishment Limits
                    </h1>
                    <p className="text-slate-400">
                        CCPA Title III protections for your paycheck
                    </p>
                </div>

                {/* Key Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-slate-800 rounded-lg p-4 border border-slate-700 text-center">
                        <p className="text-2xl font-bold text-emerald-400">25%</p>
                        <p className="text-xs text-slate-400 mt-1">Consumer Debt Max</p>
                    </div>
                    <div className="bg-slate-800 rounded-lg p-4 border border-slate-700 text-center">
                        <p className="text-2xl font-bold text-pink-400">50-65%</p>
                        <p className="text-xs text-slate-400 mt-1">Child Support Max</p>
                    </div>
                    <div className="bg-slate-800 rounded-lg p-4 border border-slate-700 text-center">
                        <p className="text-2xl font-bold text-blue-400">15%</p>
                        <p className="text-xs text-slate-400 mt-1">Student Loan Max</p>
                    </div>
                    <div className="bg-slate-800 rounded-lg p-4 border border-slate-700 text-center">
                        <p className="text-2xl font-bold text-green-400">$217.50</p>
                        <p className="text-xs text-slate-400 mt-1">Weekly Protected</p>
                    </div>
                </div>

                {/* Detailed Limits */}
                <div className="space-y-6 mb-8">
                    {/* Consumer Debt */}
                    <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-emerald-500/20 rounded-lg">
                                <CreditCard className="w-5 h-5 text-emerald-400" />
                            </div>
                            <h2 className="text-lg font-bold text-white">Consumer Debt (Credit Cards, Medical, Loans)</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-slate-700/50 rounded-lg p-4">
                                <p className="text-sm text-slate-400">Maximum Garnishment</p>
                                <p className="text-2xl font-bold text-emerald-400">25%</p>
                                <p className="text-xs text-slate-500">of disposable earnings</p>
                            </div>
                            <div className="bg-slate-700/50 rounded-lg p-4">
                                <p className="text-sm text-slate-400">Protected Amount</p>
                                <p className="text-2xl font-bold text-emerald-400">30× Min Wage</p>
                                <p className="text-xs text-slate-500">${GARNISHMENT_LIMITS_2026.consumerDebt.weeklyProtected}/week</p>
                            </div>
                        </div>

                        <p className="text-sm text-slate-400 mt-4">
                            <strong>How it works:</strong> Garnishment is limited to the LESSER of: (1) 25% of disposable earnings,
                            or (2) the amount by which disposable earnings exceed 30× the federal minimum wage.
                        </p>
                    </div>

                    {/* Child Support */}
                    <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-pink-500/20 rounded-lg">
                                <Users className="w-5 h-5 text-pink-400" />
                            </div>
                            <h2 className="text-lg font-bold text-white">Child Support & Alimony</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-slate-700/50 rounded-lg p-4">
                                <p className="text-sm text-slate-400">With Other Dependents</p>
                                <p className="text-2xl font-bold text-pink-400">50%</p>
                                <p className="text-xs text-slate-500">supporting spouse/child</p>
                            </div>
                            <div className="bg-slate-700/50 rounded-lg p-4">
                                <p className="text-sm text-slate-400">Without Dependents</p>
                                <p className="text-2xl font-bold text-pink-400">60%</p>
                                <p className="text-xs text-slate-500">not supporting others</p>
                            </div>
                            <div className="bg-slate-700/50 rounded-lg p-4">
                                <p className="text-sm text-slate-400">12+ Weeks Arrears</p>
                                <p className="text-2xl font-bold text-red-400">+5%</p>
                                <p className="text-xs text-slate-500">additional penalty</p>
                            </div>
                        </div>

                        <p className="text-sm text-slate-400 mt-4">
                            <strong>Note:</strong> Child support and alimony have higher limits than consumer debt.
                            Maximum can reach 65% of disposable earnings if you&apos;re behind on payments.
                        </p>
                    </div>

                    {/* Student Loans */}
                    <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-blue-500/20 rounded-lg">
                                <GraduationCap className="w-5 h-5 text-blue-400" />
                            </div>
                            <h2 className="text-lg font-bold text-white">Federal Student Loans</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-slate-700/50 rounded-lg p-4">
                                <p className="text-sm text-slate-400">Maximum Garnishment</p>
                                <p className="text-2xl font-bold text-blue-400">15%</p>
                                <p className="text-xs text-slate-500">of disposable earnings</p>
                            </div>
                            <div className="bg-slate-700/50 rounded-lg p-4">
                                <p className="text-sm text-slate-400">Protected Amount</p>
                                <p className="text-2xl font-bold text-blue-400">30× Min Wage</p>
                                <p className="text-xs text-slate-500">must remain after garnishment</p>
                            </div>
                        </div>

                        <p className="text-sm text-slate-400 mt-4">
                            <strong>Note:</strong> This applies to defaulted federal student loans only.
                            Private student loan collectors must use the 25% consumer debt limit.
                        </p>
                    </div>

                    {/* IRS Tax Levy */}
                    <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-red-500/20 rounded-lg">
                                <Landmark className="w-5 h-5 text-red-400" />
                            </div>
                            <h2 className="text-lg font-bold text-white">IRS Tax Levy</h2>
                        </div>

                        <div className="bg-slate-700/50 rounded-lg p-4">
                            <p className="text-sm text-slate-400 mb-2">
                                IRS levies are calculated differently. The exempt amount depends on your
                                filing status and number of dependents claimed.
                            </p>
                            <div className="grid md:grid-cols-2 gap-4 mt-4">
                                <div>
                                    <p className="text-sm text-slate-400">Weekly Exempt (Single)</p>
                                    <p className="text-xl font-bold text-red-400">${GARNISHMENT_LIMITS_2026.irsLevy.exemptAmount}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-slate-400">Per Dependent Addition</p>
                                    <p className="text-xl font-bold text-red-400">+${GARNISHMENT_LIMITS_2026.irsLevy.dependentAdd}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* State Protections */}
                <div className="bg-amber-900/20 border border-amber-700/50 rounded-xl p-4 mb-8">
                    <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-amber-400 mt-0.5" />
                        <div className="text-sm text-amber-200">
                            <p className="font-medium text-white mb-2">State Laws May Offer More Protection</p>
                            <p>
                                Many states have stricter garnishment limits than federal law.
                                If your state&apos;s limit is lower, that limit applies.
                                Some states prohibit wage garnishment for consumer debt entirely.
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
                        href="/wage-garnishment/garnishment-calculator"
                        className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Calculate Your Limit
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    This is {SITE.year} federal law information. State laws may provide additional protection.
                    Consult a debt attorney for your specific situation.
                </p>
            </main>
        </>
    );
}
