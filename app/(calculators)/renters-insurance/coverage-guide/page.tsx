"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Home, FileText, CheckCircle, AlertTriangle } from "lucide-react";
import { SITE, RENTERS_2026, formatCurrency } from "@/lib/calculators/renters-insurance";

export default function CoverageGuidePage() {
    return (
        <>
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/renters-insurance" className="text-slate-400 hover:text-white transition-colors">
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
                        Renters Insurance Coverage Guide
                    </h1>
                    <p className="text-slate-400">
                        Understand what&apos;s covered and how to choose the right policy
                    </p>
                </div>

                {/* Coverage Types */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Types of Coverage
                    </h2>

                    <div className="space-y-4">
                        <div className="bg-slate-700/50 rounded-lg p-4">
                            <h3 className="text-white font-semibold">Personal Property</h3>
                            <p className="text-sm text-slate-400 mt-1">
                                Covers your belongings (furniture, electronics, clothing) if stolen,
                                damaged by fire, vandalism, or other covered events.
                            </p>
                            <p className="text-xs text-blue-400 mt-2">
                                Recommended: {formatCurrency(RENTERS_2026.coverage.personalPropertyAvg)}
                            </p>
                        </div>
                        <div className="bg-slate-700/50 rounded-lg p-4">
                            <h3 className="text-white font-semibold">Liability Protection</h3>
                            <p className="text-sm text-slate-400 mt-1">
                                Covers legal costs if someone is injured in your rental or you
                                accidentally damage someone else&apos;s property.
                            </p>
                            <p className="text-xs text-blue-400 mt-2">
                                Recommended: {formatCurrency(RENTERS_2026.coverage.liabilityStandard)}
                            </p>
                        </div>
                        <div className="bg-slate-700/50 rounded-lg p-4">
                            <h3 className="text-white font-semibold">Additional Living Expenses</h3>
                            <p className="text-sm text-slate-400 mt-1">
                                Covers hotel stays, meals, and other costs if your rental becomes
                                uninhabitable due to a covered event.
                            </p>
                        </div>
                    </div>
                </div>

                {/* What's Covered */}
                <div className="bg-blue-900/30 border border-blue-500/50 rounded-xl p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-500" />
                        What&apos;s Covered
                    </h2>
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                        {RENTERS_2026.coveredItems.map((item, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-blue-400" />
                                <span className="text-blue-200">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* What's NOT Covered */}
                <div className="bg-red-900/20 border border-red-700/50 rounded-xl p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-red-500" />
                        What&apos;s NOT Covered
                    </h2>
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                        {RENTERS_2026.notCovered.map((item, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4 text-red-400" />
                                <span className="text-red-200">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* How Much Coverage */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">
                        How Much Coverage Do You Need?
                    </h2>

                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                            <p className="text-sm text-slate-400">Basic</p>
                            <p className="text-2xl font-bold text-white">{formatCurrency(RENTERS_2026.coverage.personalPropertyMin)}</p>
                            <p className="text-xs text-slate-500">Essential items only</p>
                        </div>
                        <div className="text-center p-4 bg-blue-900/30 border border-blue-500/50 rounded-lg">
                            <p className="text-sm text-blue-400">Recommended</p>
                            <p className="text-2xl font-bold text-white">{formatCurrency(RENTERS_2026.coverage.personalPropertyAvg)}</p>
                            <p className="text-xs text-slate-500">Most renters</p>
                        </div>
                        <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                            <p className="text-sm text-slate-400">Premium</p>
                            <p className="text-2xl font-bold text-white">{formatCurrency(RENTERS_2026.coverage.personalPropertyMax)}</p>
                            <p className="text-xs text-slate-500">High-value items</p>
                        </div>
                    </div>
                </div>

                {/* Cost Factors */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4">
                        What Affects Your Premium?
                    </h2>
                    <ul className="space-y-2 text-sm text-slate-300">
                        <li> <strong>Location:</strong> Higher crime = higher premiums</li>
                        <li> <strong>Coverage amount:</strong> More coverage = higher cost</li>
                        <li> <strong>Deductible:</strong> Higher deductible = lower premium</li>
                        <li> <strong>Credit score:</strong> Better credit = discounts</li>
                        <li> <strong>Bundling:</strong> Combine with auto for 15% off</li>
                        <li> <strong>Safety features:</strong> Smoke detectors, security systems</li>
                    </ul>
                </div>

                {/* Ad Placeholder */}
                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center">
                    <p className="text-sm text-slate-500">Advertisement</p>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link
                        href="/renters-insurance/renters-calculator"
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Calculate Your Premium
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Citation */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    {RENTERS_2026.citation}
                </p>
            </main>
        </>
    );
}
