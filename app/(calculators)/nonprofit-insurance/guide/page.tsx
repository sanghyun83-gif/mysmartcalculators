"use client";

import Link from "next/link";
import { Calculator, Shield, Heart, AlertTriangle } from "lucide-react";
import { SITE, COVERAGE_OPTIONS, NONPROFIT_TYPES } from "@/lib/calculators/nonprofit-insurance";

export default function NonprofitInsuranceGuidePage() {
    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80">
                        <Calculator className="w-6 h-6 text-blue-500" />
                        <span className="text-lg font-bold text-white">MySmartCalculators</span>
                    </Link>
                    <Link href="/nonprofit-insurance" className="text-slate-400 hover:text-white text-sm">← Back to Overview</Link>
                </div>
            </header>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
                        <Shield className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-blue-300">Coverage Guide</span>
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-4">Nonprofit Insurance Coverage Guide</h1>
                    <p className="text-slate-400">D&O, volunteer, and 501(c)(3) organization coverage</p>
                </div>
            </section>

            <section className="py-12 px-4 bg-amber-900/20 border-y border-amber-500/30">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-start gap-4">
                        <AlertTriangle className="w-8 h-8 text-amber-400 flex-shrink-0" />
                        <div>
                            <h2 className="text-xl font-bold text-amber-300 mb-2">D&O Coverage Essential for Board Recruitment</h2>
                            <p className="text-amber-200/80">
                                Many qualified board members refuse to serve without D&O protection. Employment claims are the #1 D&O risk for nonprofits. Protect your board to attract top talent.
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
                    <h2 className="text-2xl font-bold text-white mb-6">Nonprofit Type Rate Factors</h2>
                    <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-slate-700">
                                <tr>
                                    <th className="text-left px-6 py-4 text-sm font-semibold text-white">Type</th>
                                    <th className="text-left px-6 py-4 text-sm font-semibold text-white">Description</th>
                                    <th className="text-center px-6 py-4 text-sm font-semibold text-white">Rate Factor</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700">
                                {NONPROFIT_TYPES.map((nonprofit, index) => (
                                    <tr key={index} className="hover:bg-slate-700/50">
                                        <td className="px-6 py-4 text-white font-medium">{nonprofit.name}</td>
                                        <td className="px-6 py-4 text-slate-400">{nonprofit.description}</td>
                                        <td className="px-6 py-4 text-center">
                                            <span className={`px-2 py-1 rounded text-xs ${nonprofit.factor >= 1.25 ? 'bg-red-500/20 text-red-300' : nonprofit.factor >= 1.0 ? 'bg-amber-500/20 text-amber-300' : 'bg-green-500/20 text-green-300'}`}>
                                                ×{nonprofit.factor}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm text-slate-500 mt-4">*Advocacy organizations have higher rates due to political/legal risks</p>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <Link href="/nonprofit-insurance/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors">
                        Calculate Your Premium
                    </Link>
                </div>
            </section>

            <footer className="bg-slate-800 border-t border-slate-700 py-8">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <p className="text-sm text-slate-500">© {SITE.year} MySmartCalculators. Based on NAIC 2026 data.</p>
                </div>
            </footer>
        </>
    );
}
