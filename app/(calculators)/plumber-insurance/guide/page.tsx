"use client";

import Link from "next/link";
import { Calculator, Shield, AlertTriangle, Droplets } from "lucide-react";
import { SITE, COVERAGE_OPTIONS } from "@/lib/calculators/plumber-insurance";

export default function PlumberInsuranceGuidePage() {
    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80">
                        <Calculator className="w-6 h-6 text-blue-500" />
                        <span className="text-lg font-bold text-white">MySmartCalculators</span>
                    </Link>
                    <Link href="/plumber-insurance" className="text-slate-400 hover:text-white text-sm">??Back to Overview</Link>
                </div>
            </header>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
                        <Shield className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-blue-300">Coverage Guide</span>
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-4">Plumber Insurance Coverage Guide</h1>
                    <p className="text-slate-400">Essential coverage for plumbing contractors</p>
                </div>
            </section>

            <section className="py-12 px-4 bg-blue-900/20 border-y border-blue-500/30">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-start gap-4">
                        <Droplets className="w-8 h-8 text-blue-400 flex-shrink-0" />
                        <div>
                            <h2 className="text-xl font-bold text-blue-300 mb-2">Water Damage is #1 Risk</h2>
                            <p className="text-blue-200/80">
                                45% of all plumber liability claims involve water damage to customer property. Your General Liability policy covers these claims. Make sure you have adequate limits - water damage repairs can be very expensive.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-6">Coverage Types</h2>
                    <div className="space-y-6">
                        {COVERAGE_OPTIONS.map((coverage, index) => (
                            <div key={index} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                                <div className="flex items-start justify-between mb-3">
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">{coverage.name}</h3>
                                        <p className="text-slate-400 mt-1">{coverage.description}</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-blue-400 font-semibold">${coverage.baseCost.toLocaleString()}</div>
                                        <div className="text-xs text-slate-500">Base Annual</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-12 px-4 bg-slate-800/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-6">Plumber vs Other Trades</h2>
                    <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-slate-700">
                                <tr>
                                    <th className="text-left px-6 py-4 text-sm font-semibold text-white">Trade</th>
                                    <th className="text-right px-6 py-4 text-sm font-semibold text-white">WC Rate (per $100)</th>
                                    <th className="text-center px-6 py-4 text-sm font-semibold text-white">Risk Level</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700">
                                <tr className="bg-blue-900/20">
                                    <td className="px-6 py-4 text-white font-medium">Plumber</td>
                                    <td className="px-6 py-4 text-blue-400 text-right">$8-$15</td>
                                    <td className="px-6 py-4 text-center"><span className="bg-amber-500/20 text-amber-300 text-xs px-2 py-1 rounded">Moderate</span></td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-slate-300">Electrician</td>
                                    <td className="px-6 py-4 text-slate-400 text-right">$10-$18</td>
                                    <td className="px-6 py-4 text-center"><span className="bg-amber-500/20 text-amber-300 text-xs px-2 py-1 rounded">Moderate</span></td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-slate-300">Roofer</td>
                                    <td className="px-6 py-4 text-slate-400 text-right">$25-$45</td>
                                    <td className="px-6 py-4 text-center"><span className="bg-red-500/20 text-red-300 text-xs px-2 py-1 rounded">High</span></td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-slate-300">Painter</td>
                                    <td className="px-6 py-4 text-slate-400 text-right">$5-$10</td>
                                    <td className="px-6 py-4 text-center"><span className="bg-green-500/20 text-green-300 text-xs px-2 py-1 rounded">Low</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <Link href="/plumber-insurance/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors">
                        Calculate Your Premium
                    </Link>
                </div>
            </section>

            <footer className="bg-slate-800 border-t border-slate-700 py-8">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <p className="text-sm text-slate-500">© {SITE.year} MySmartCalculators. Based on NCCI 2026 data.</p>
                </div>
            </footer>
        </>
    );
}
