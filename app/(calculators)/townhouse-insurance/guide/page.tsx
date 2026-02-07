"use client";

import Link from "next/link";
import { Calculator, Shield, Home } from "lucide-react";
import { SITE, COVERAGE_OPTIONS } from "@/lib/calculators/townhouse-insurance";

export default function TownhouseInsuranceGuidePage() {
    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80">
                        <Calculator className="w-6 h-6 text-blue-500" />
                        <span className="text-lg font-bold text-white">MySmartCalculators</span>
                    </Link>
                    <Link href="/townhouse-insurance" className="text-slate-400 hover:text-white text-sm">← Back</Link>
                </div>
            </header>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
                        <Shield className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-blue-300">Coverage Guide</span>
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-4">Townhouse Insurance Guide</h1>
                    <p className="text-slate-400">HO-3 vs HO-6 for attached homes</p>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-6">Coverage Types</h2>
                    <div className="space-y-4">
                        {COVERAGE_OPTIONS.map((coverage, index) => (
                            <div key={index} className="bg-slate-800 border border-slate-700 rounded-xl p-5">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">{coverage.name}</h3>
                                        <p className="text-slate-400 text-sm mt-1">{coverage.description}</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-blue-400 font-semibold">${coverage.baseCost}</div>
                                        <div className="text-xs text-slate-500">Base/yr</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-12 px-4 bg-slate-800/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-xl font-bold text-white mb-4">HO-3 vs HO-6: Which Do You Need?</h2>
                    <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
                        <table className="w-full text-sm">
                            <thead className="bg-slate-700">
                                <tr>
                                    <th className="text-left px-4 py-3 text-white">Factor</th>
                                    <th className="text-center px-4 py-3 text-white">HO-3</th>
                                    <th className="text-center px-4 py-3 text-white">HO-6</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700">
                                <tr><td className="px-4 py-3 text-slate-300">Own Exterior Walls</td><td className="text-center text-green-400">✓ Use HO-3</td><td className="text-center text-slate-500">No</td></tr>
                                <tr><td className="px-4 py-3 text-slate-300">HOA Owns Exterior</td><td className="text-center text-slate-500">No</td><td className="text-center text-green-400">✓ Use HO-6</td></tr>
                                <tr><td className="px-4 py-3 text-slate-300">Full Structure Coverage</td><td className="text-center text-green-400">✓</td><td className="text-center text-slate-500">Interior Only</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm text-slate-500 mt-4">Check your deed and HOA documents to determine ownership structure.</p>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <Link href="/townhouse-insurance/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                        Calculate Your Premium
                    </Link>
                </div>
            </section>

            <footer className="bg-slate-800 border-t border-slate-700 py-6">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <p className="text-xs text-slate-500">© {SITE.year} MySmartCalculators. Based on III 2026 data.</p>
                </div>
            </footer>
        </>
    );
}
