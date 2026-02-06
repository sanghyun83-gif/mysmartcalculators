"use client";

import Link from "next/link";
import { Calculator, Shield, CheckCircle, AlertTriangle } from "lucide-react";
import { SITE, COVERAGE_TYPES } from "@/lib/calculators/trucking-insurance";

export default function TruckingInsuranceGuidePage() {
    return (
        <>
            {/* Header */}
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80">
                        <Calculator className="w-6 h-6 text-blue-500" />
                        <span className="text-lg font-bold text-white">MySmartCalculators</span>
                    </Link>
                    <Link href="/trucking-insurance" className="text-slate-400 hover:text-white text-sm">
                         Back to Overview
                    </Link>
                </div>
            </header>

            {/* Hero */}
            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
                        <Shield className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-blue-300">Coverage Guide</span>
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-4">Trucking Insurance Coverage Guide</h1>
                    <p className="text-slate-400">Understand the coverages you need for commercial trucking operations</p>
                </div>
            </section>

            {/* Coverage Types */}
            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-8">Essential Coverage Types</h2>
                    <div className="space-y-6">
                        {COVERAGE_TYPES.map((coverage, index) => (
                            <div key={index} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                                <div className="flex items-start justify-between mb-3">
                                    <div>
                                        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                                            {coverage.name}
                                            {coverage.required && (
                                                <span className="bg-red-500/20 text-red-300 text-xs px-2 py-1 rounded">Required</span>
                                            )}
                                        </h3>
                                        <p className="text-slate-400 mt-1">{coverage.description}</p>
                                    </div>
                                    {coverage.avgPremium && (
                                        <div className="text-right">
                                            <div className="text-blue-400 font-semibold">${coverage.avgPremium.toLocaleString()}</div>
                                            <div className="text-xs text-slate-500">Avg Annual</div>
                                        </div>
                                    )}
                                </div>
                                {coverage.minCoverage && (
                                    <div className="flex items-center gap-2 text-sm text-amber-300 mt-3">
                                        <AlertTriangle className="w-4 h-4" />
                                        <span>FMCSA Minimum: ${coverage.minCoverage.toLocaleString()}</span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Points */}
            <section className="py-12 px-4 bg-slate-800/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-6">Coverage Considerations</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <CheckCircle className="w-8 h-8 text-green-400 mb-3" />
                            <h3 className="text-lg font-semibold text-white mb-2">For Interstate Carriers</h3>
                            <ul className="text-slate-400 text-sm space-y-2">
                                <li> $750,000 minimum liability (non-hazmat)</li>
                                <li> $1,000,000+ for hazmat carriers</li>
                                <li> MCS-90 endorsement required</li>
                                <li> BOC-3 filing mandatory</li>
                            </ul>
                        </div>
                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <CheckCircle className="w-8 h-8 text-green-400 mb-3" />
                            <h3 className="text-lg font-semibold text-white mb-2">For Owner-Operators</h3>
                            <ul className="text-slate-400 text-sm space-y-2">
                                <li> Occupational accident coverage</li>
                                <li> Non-trucking liability (bobtail)</li>
                                <li> Physical damage for your truck</li>
                                <li> Trailer interchange if needed</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <Link
                        href="/trucking-insurance/calculator"
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors"
                    >
                        Calculate Your Premium
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-800 border-t border-slate-700 py-8">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <p className="text-sm text-slate-500">© {SITE.year} MySmartCalculators. Based on FMCSA 2026 requirements.</p>
                </div>
            </footer>
        </>
    );
}
