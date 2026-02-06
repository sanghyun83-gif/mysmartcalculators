"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Award, FileText, CheckCircle, AlertTriangle } from "lucide-react";
import { SITE, VA_RATES_2026, formatCurrency, calculateCombinedRating } from "@/lib/calculators/va-disability";

export default function RatingGuidePage() {
    return (
        <>
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/va-disability" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-purple-500" />
                        <span className="text-lg font-bold text-white">VA Rating Guide</span>
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
                        Understanding VA Disability Ratings
                    </h1>
                    <p className="text-slate-400">
                        How ratings work, combined math, and maximizing your claim
                    </p>
                </div>

                {/* Combined Ratings Explained */}
                <div className="bg-purple-900/30 border border-purple-500/50 rounded-xl p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4">
                        VA Combined Ratings Math
                    </h2>
                    <p className="text-slate-300 mb-4">
                        VA doesn&apos;t simply add ratings together. Instead, each rating is applied
                        to your remaining &quot;healthy&quot; percentage.
                    </p>

                    <div className="bg-slate-800/80 rounded-lg p-4 mb-4">
                        <p className="text-sm text-slate-400 mb-2">Example: 50% + 30% ratings</p>
                        <ol className="text-sm text-slate-300 space-y-1">
                            <li>1. Start at 100% healthy</li>
                            <li>2. Apply 50%: 100 - 50 = <strong>50% healthy</strong></li>
                            <li>3. Apply 30% to remaining: 50 × 0.30 = 15</li>
                            <li>4. Total: 50 + 15 = <strong>65% combined</strong> (not 80%)</li>
                        </ol>
                    </div>

                    <div className="grid grid-cols-3 gap-3 text-center">
                        <div className="bg-slate-800 rounded-lg p-3">
                            <p className="text-sm text-slate-400">You might expect</p>
                            <p className="text-xl font-bold text-red-400">80%</p>
                        </div>
                        <div className="bg-slate-800 rounded-lg p-3">
                            <p className="text-sm text-slate-400">VA math gives</p>
                            <p className="text-xl font-bold text-purple-400">{calculateCombinedRating([50, 30])}%</p>
                        </div>
                        <div className="bg-slate-800 rounded-lg p-3">
                            <p className="text-sm text-slate-400">Monthly payment</p>
                            <p className="text-xl font-bold text-green-400">{formatCurrency(VA_RATES_2026.veteranOnly[60])}</p>
                        </div>
                    </div>
                </div>

                {/* Full Rate Table */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Award className="w-5 h-5 text-purple-500" />
                        {SITE.year} VA Disability Rates (Veteran Alone)
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                        {Object.entries(VA_RATES_2026.veteranOnly).map(([rating, amount]) => (
                            <div key={rating} className="bg-slate-700/50 rounded-lg p-3 text-center">
                                <p className="text-lg font-bold text-purple-400">{rating}%</p>
                                <p className="text-sm text-white">{formatCurrency(amount)}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dependent Additions */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Dependent Additions (30%+ Required)
                    </h2>
                    <p className="text-slate-400 text-sm mb-4">
                        At 30% or higher combined rating, you receive additional monthly compensation for dependents.
                    </p>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="text-left text-slate-400 border-b border-slate-700">
                                    <th className="py-2">Rating</th>
                                    <th className="py-2">+Spouse</th>
                                    <th className="py-2">+Child</th>
                                    <th className="py-2">+Parent</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[30, 50, 70, 100].map((rating) => (
                                    <tr key={rating} className="border-b border-slate-700/50">
                                        <td className="py-2 font-medium text-white">{rating}%</td>
                                        <td className="py-2 text-slate-300">${VA_RATES_2026.dependentAdditions.spouse[rating as keyof typeof VA_RATES_2026.dependentAdditions.spouse]}</td>
                                        <td className="py-2 text-slate-300">${VA_RATES_2026.dependentAdditions.child[rating as keyof typeof VA_RATES_2026.dependentAdditions.child]}</td>
                                        <td className="py-2 text-slate-300">${VA_RATES_2026.dependentAdditions.parent[rating as keyof typeof VA_RATES_2026.dependentAdditions.parent]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Tips */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Maximizing Your VA Claim
                    </h2>

                    <div className="space-y-3">
                        {[
                            "Claim ALL conditions, even if you think they're minor - they add up",
                            "Secondary conditions (caused by service-connected) are claimable",
                            "Keep detailed medical records and buddy statements",
                            "Get Nexus letters connecting conditions to service",
                            "Consider working with an accredited VSO (free!)",
                        ].map((tip, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5" />
                                <span className="text-slate-300">{tip}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Warning */}
                <div className="bg-amber-900/20 border border-amber-700/50 rounded-xl p-4 mb-8">
                    <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-amber-400 mt-0.5" />
                        <div className="text-sm text-amber-200">
                            <p className="font-medium text-white mb-2">Important Notes</p>
                            <ul className="space-y-1">
                                <li>??Ratings are rounded to nearest 10% for payment purposes</li>
                                <li>??TDIU (Total Disability Individual Unemployability) pays at 100% rate</li>
                                <li>??SMC (Special Monthly Compensation) provides additional benefits for severe conditions</li>
                            </ul>
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
                        href="/va-disability/va-calculator"
                        className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Calculate Your VA Benefits
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    Not affiliated with the VA. Consult VA.gov for official information.
                </p>
            </main>
        </>
    );
}
