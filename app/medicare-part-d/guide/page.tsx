"use client";

import Link from "next/link";
import { Calculator, Shield, Pill } from "lucide-react";
import { SITE, COVERAGE_PHASES } from "@/lib/calculators/medicare-part-d";

export default function MedicarePartDGuidePage() {
    return (
        <div className="min-h-screen bg-slate-900">
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80">
                        <Calculator className="w-6 h-6 text-blue-500" />
                        <span className="text-lg font-bold text-white">MySmartCalculators</span>
                    </Link>
                    <Link href="/medicare-part-d" className="text-slate-400 hover:text-white text-sm">← Back</Link>
                </div>
            </header>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
                        <Shield className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-blue-300">Coverage Guide</span>
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-4">Part D Coverage Phases</h1>
                    <p className="text-slate-400">How Part D coverage changes as you spend more</p>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-6">2026 Coverage Phases</h2>
                    <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
                        <table className="w-full text-sm">
                            <thead className="bg-slate-700">
                                <tr>
                                    <th className="text-left px-4 py-3 text-white">Phase</th>
                                    <th className="text-left px-4 py-3 text-white">You Pay</th>
                                    <th className="text-left px-4 py-3 text-white">Spending Range</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700">
                                {COVERAGE_PHASES.map((item, index) => (
                                    <tr key={index} className="hover:bg-slate-700/50">
                                        <td className="px-4 py-3 text-white font-medium">{item.phase}</td>
                                        <td className="px-4 py-3 text-blue-400">{item.yourCosts}</td>
                                        <td className="px-4 py-3 text-slate-400">{item.limit}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4 bg-slate-800/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-xl font-bold text-white mb-4">New $2,000 OOP Cap</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
                            <h3 className="text-white font-semibold">Before 2025</h3>
                            <p className="text-slate-400 text-sm mt-1">No annual cap on costs</p>
                            <p className="text-red-400 text-sm mt-1">Could pay thousands in donut hole</p>
                        </div>
                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
                            <h3 className="text-white font-semibold">2025 and After</h3>
                            <p className="text-slate-400 text-sm mt-1">$2,000 annual OOP cap</p>
                            <p className="text-blue-400 text-sm mt-1">$0 after reaching cap</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <Link href="/medicare-part-d/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                        Calculate Your Part D Costs
                    </Link>
                </div>
            </section>

            <footer className="bg-slate-800 border-t border-slate-700 py-6">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <p className="text-xs text-slate-500">© {SITE.year} MySmartCalculators. Based on CMS 2026 guidelines.</p>
                </div>
            </footer>
        </div>
    );
}
