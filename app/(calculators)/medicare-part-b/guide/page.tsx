"use client";

import Link from "next/link";
import { Calculator, Shield, Stethoscope } from "lucide-react";
import { SITE, PART_B_COVERAGE } from "@/lib/calculators/medicare-part-b";

export default function MedicarePartBGuidePage() {
    return (
        <div className="min-h-screen bg-slate-900">
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80">
                        <Calculator className="w-6 h-6 text-blue-500" />
                        <span className="text-lg font-bold text-white">MySmartCalculators</span>
                    </Link>
                    <Link href="/medicare-part-b" className="text-slate-400 hover:text-white text-sm">← Back</Link>
                </div>
            </header>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
                        <Shield className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-blue-300">Coverage Guide</span>
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-4">Medicare Part B Coverage</h1>
                    <p className="text-slate-400">What services are covered and your cost share</p>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-6">Covered Services</h2>
                    <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
                        <table className="w-full text-sm">
                            <thead className="bg-slate-700">
                                <tr>
                                    <th className="text-left px-4 py-3 text-white">Service</th>
                                    <th className="text-left px-4 py-3 text-white">Medicare Pays</th>
                                    <th className="text-left px-4 py-3 text-white">You Pay</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700">
                                {PART_B_COVERAGE.map((item, index) => (
                                    <tr key={index} className="hover:bg-slate-700/50">
                                        <td className="px-4 py-3 text-white font-medium">{item.service}</td>
                                        <td className="px-4 py-3 text-blue-400">{item.coverage}</td>
                                        <td className="px-4 py-3 text-slate-400">{item.yourCost}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4 bg-slate-800/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-xl font-bold text-white mb-4">2026 Part B Costs</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 text-center">
                            <div className="text-2xl font-bold text-blue-400">$185</div>
                            <div className="text-sm text-slate-400">Monthly Premium</div>
                            <div className="text-xs text-slate-500 mt-1">Standard rate</div>
                        </div>
                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 text-center">
                            <div className="text-2xl font-bold text-blue-400">$257</div>
                            <div className="text-sm text-slate-400">Annual Deductible</div>
                            <div className="text-xs text-slate-500 mt-1">Before 80/20 split</div>
                        </div>
                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 text-center">
                            <div className="text-2xl font-bold text-blue-400">20%</div>
                            <div className="text-sm text-slate-400">Coinsurance</div>
                            <div className="text-xs text-slate-500 mt-1">Your share</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <Link href="/medicare-part-b/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                        Calculate Your Part B Costs
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
