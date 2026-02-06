"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Anchor, FileText, CheckCircle, AlertTriangle } from "lucide-react";
import { SITE, BOAT_2026, formatCurrency } from "@/lib/calculators/boat-insurance";

export default function CoverageGuidePage() {
    return (
        <>
            {/* Header */}

            <main className="max-w-4xl mx-auto px-4 py-8">
                {/* Page Header */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        Boat Insurance Coverage Guide
                    </h1>
                    <p className="text-slate-400">
                        Understanding watercraft insurance protection
                    </p>
                </div>

                {/* Coverage Types */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Types of Boat Coverage
                    </h2>

                    <div className="space-y-4">
                        <div className="bg-slate-700/50 rounded-lg p-4">
                            <h3 className="text-white font-semibold">Agreed Value (Recommended)</h3>
                            <p className="text-sm text-slate-400 mt-1">
                                You and the insurer agree on the boat&apos;s value upfront.
                                In a total loss, you receive the full agreed amount.
                            </p>
                        </div>
                        <div className="bg-slate-700/50 rounded-lg p-4">
                            <h3 className="text-white font-semibold">Actual Cash Value</h3>
                            <p className="text-sm text-slate-400 mt-1">
                                Pays the current market value minus depreciation.
                                Lower premiums but potentially lower payout.
                            </p>
                        </div>
                        <div className="bg-slate-700/50 rounded-lg p-4">
                            <h3 className="text-white font-semibold">Liability Only</h3>
                            <p className="text-sm text-slate-400 mt-1">
                                Covers damage you cause to others, not your boat.
                                Recommended minimum: {formatCurrency(BOAT_2026.coverageTypes.liability)}.
                            </p>
                        </div>
                    </div>
                </div>

                {/* What's Covered */}
                <div className="bg-blue-900/30 border border-blue-500/50 rounded-xl p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-500" />
                        What&apos;s Typically Covered
                    </h2>
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                        {BOAT_2026.coveredItems.map((item, i) => (
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
                        Common Exclusions
                    </h2>
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                        {[
                            "Normal wear and tear",
                            "Manufacturer defects",
                            "Gradual deterioration",
                            "Insect/vermin damage",
                            "Racing (without endorsement)",
                            "Commercial use (without endorsement)",
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4 text-red-400" />
                                <span className="text-red-200">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Discounts */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Ways to Save on Boat Insurance
                    </h2>
                    <ul className="space-y-2 text-sm text-slate-300">
                        <li>??<strong>Boating safety course:</strong> 15% discount</li>
                        <li>??<strong>New boat discount:</strong> 10% off</li>
                        <li>??<strong>Bundle policies:</strong> 10% when combined with auto/home</li>
                        <li>??<strong>Clean claims history:</strong> Up to 15% off</li>
                        <li>??<strong>Seasonal lay-up:</strong> Reduced rates during off-season</li>
                        <li>??<strong>Pay annually:</strong> Save vs monthly payments</li>
                    </ul>
                </div>

                {/* Boat Type Costs */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Average Annual Premium by Boat Type
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div className="text-center p-3 bg-slate-700/50 rounded-lg">
                            <p className="text-sm text-slate-400">PWC/Jet Ski</p>
                            <p className="text-xl font-bold text-blue-400">{formatCurrency(BOAT_2026.avgPremiums.pwc)}</p>
                        </div>
                        <div className="text-center p-3 bg-slate-700/50 rounded-lg">
                            <p className="text-sm text-slate-400">Small (&lt;26ft)</p>
                            <p className="text-xl font-bold text-blue-400">{formatCurrency(BOAT_2026.avgPremiums.small)}</p>
                        </div>
                        <div className="text-center p-3 bg-slate-700/50 rounded-lg">
                            <p className="text-sm text-slate-400">Medium</p>
                            <p className="text-xl font-bold text-blue-400">{formatCurrency(BOAT_2026.avgPremiums.medium)}</p>
                        </div>
                        <div className="text-center p-3 bg-slate-700/50 rounded-lg">
                            <p className="text-sm text-slate-400">Large (40ft+)</p>
                            <p className="text-xl font-bold text-blue-400">{formatCurrency(BOAT_2026.avgPremiums.large)}</p>
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
                        href="/boat-insurance/boat-calculator"
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Calculate Your Premium
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Citation */}
            </main>
        </>
    );
}
