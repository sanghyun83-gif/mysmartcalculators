"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Heart, FileText, CheckCircle, AlertTriangle } from "lucide-react";
import { SITE, HEALTH_2026, formatCurrency } from "@/lib/calculators/health-insurance";

export default function CoverageGuidePage() {
    return (
        <>
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/health-insurance" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-blue-500" />
                        <span className="text-lg font-bold text-white">Coverage Guide</span>
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
                        Health Insurance Coverage Guide
                    </h1>
                    <p className="text-slate-400">
                        Compare plan types and find the right coverage
                    </p>
                </div>

                {/* Metal Tier Comparison */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">
                        {SITE.year} Metal Tier Comparison
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="text-left text-slate-400 border-b border-slate-700">
                                    <th className="py-3">Plan</th>
                                    <th className="py-3">You Pay</th>
                                    <th className="py-3">Avg Premium</th>
                                    <th className="py-3">Deductible</th>
                                    <th className="py-3">Best For</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-slate-700/50">
                                    <td className="py-3 text-amber-600 font-bold">Bronze</td>
                                    <td className="py-3 text-white">40%</td>
                                    <td className="py-3 text-blue-400">{formatCurrency(HEALTH_2026.metalTiers[0].avgPremium)}</td>
                                    <td className="py-3 text-white">{formatCurrency(HEALTH_2026.avgDeductibles.bronze)}</td>
                                    <td className="py-3 text-slate-400">Young, healthy</td>
                                </tr>
                                <tr className="border-b border-slate-700/50">
                                    <td className="py-3 text-gray-400 font-bold">Silver</td>
                                    <td className="py-3 text-white">30%</td>
                                    <td className="py-3 text-blue-400">{formatCurrency(HEALTH_2026.metalTiers[1].avgPremium)}</td>
                                    <td className="py-3 text-white">{formatCurrency(HEALTH_2026.avgDeductibles.silver)}</td>
                                    <td className="py-3 text-slate-400">Subsidy + CSR</td>
                                </tr>
                                <tr className="border-b border-slate-700/50">
                                    <td className="py-3 text-yellow-500 font-bold">Gold</td>
                                    <td className="py-3 text-white">20%</td>
                                    <td className="py-3 text-blue-400">{formatCurrency(HEALTH_2026.metalTiers[2].avgPremium)}</td>
                                    <td className="py-3 text-white">{formatCurrency(HEALTH_2026.avgDeductibles.gold)}</td>
                                    <td className="py-3 text-slate-400">Moderate users</td>
                                </tr>
                                <tr>
                                    <td className="py-3 text-purple-400 font-bold">Platinum</td>
                                    <td className="py-3 text-white">10%</td>
                                    <td className="py-3 text-blue-400">{formatCurrency(HEALTH_2026.metalTiers[3].avgPremium)}</td>
                                    <td className="py-3 text-white">{formatCurrency(HEALTH_2026.avgDeductibles.platinum)}</td>
                                    <td className="py-3 text-slate-400">High users</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* ACA Subsidies */}
                <div className="bg-blue-900/30 border border-blue-500/50 rounded-xl p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Heart className="w-5 h-5 text-blue-500" />
                        ACA Premium Subsidies
                    </h2>
                    <p className="text-slate-300 text-sm mb-4">
                        Premium Tax Credits lower your monthly cost based on income:
                    </p>
                    <div className="space-y-2 text-sm">
                        <div className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-400 mt-1" />
                            <p className="text-blue-200">
                                <strong>100-150% FPL:</strong> Pay ~2% of income
                            </p>
                        </div>
                        <div className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-400 mt-1" />
                            <p className="text-blue-200">
                                <strong>150-200% FPL:</strong> Pay ~4% of income
                            </p>
                        </div>
                        <div className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-400 mt-1" />
                            <p className="text-blue-200">
                                <strong>200-400% FPL:</strong> Pay 6-8.5% of income
                            </p>
                        </div>
                    </div>
                    <p className="text-xs text-slate-400 mt-4">
                        2026 FPL for individual: {formatCurrency(HEALTH_2026.fpl.individual)}
                    </p>
                </div>

                {/* HDHP + HSA */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">
                        High Deductible + HSA Option
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <p className="text-sm text-slate-400 mb-2">HDHP Minimum Deductible</p>
                            <p className="text-2xl font-bold text-blue-400">{formatCurrency(HEALTH_2026.avgDeductibles.hdhp)}</p>
                            <p className="text-xs text-slate-500">Individual (2026)</p>
                        </div>
                        <div>
                            <p className="text-sm text-slate-400 mb-2">HSA Benefits</p>
                            <ul className="text-sm text-slate-300 space-y-1">
                                <li>• Triple tax advantage</li>
                                <li>• Contributions deductible</li>
                                <li>• Grows tax-free</li>
                                <li>• Tax-free withdrawals</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Open Enrollment */}
                <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-xl p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-yellow-500" />
                        Open Enrollment Dates
                    </h2>
                    <p className="text-yellow-200 text-sm">
                        <strong>November 1 - January 15</strong> for most states.
                    </p>
                    <p className="text-xs text-slate-400 mt-2">
                        Special Enrollment Period available for qualifying life events (job loss, marriage, baby).
                    </p>
                </div>

                {/* Ad Placeholder */}
                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center">
                    <p className="text-sm text-slate-500">Advertisement</p>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link
                        href="/health-insurance/health-calculator"
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Calculate Your Premium
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    Plans and costs vary by state and insurance company. Visit healthcare.gov for official info.
                </p>
            </main>
        </>
    );
}
