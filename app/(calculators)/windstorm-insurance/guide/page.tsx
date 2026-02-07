"use client";

import Link from "next/link";
import { Calculator, Shield, Wind } from "lucide-react";
import { SITE, WIND_ZONES, COVERAGE_OPTIONS } from "@/lib/calculators/windstorm-insurance";

export default function WindstormInsuranceGuidePage() {
    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80">
                        <Calculator className="w-6 h-6 text-blue-500" />
                        <span className="text-lg font-bold text-white">MySmartCalculators</span>
                    </Link>
                    <Link href="/windstorm-insurance" className="text-slate-400 hover:text-white text-sm">← Back</Link>
                </div>
            </header>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
                        <Shield className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-blue-300">Coverage Guide</span>
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-4">Windstorm Insurance Guide</h1>
                    <p className="text-slate-400">Wind zones, TWIA tiers, and coverage</p>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-6">Wind Risk Zones</h2>
                    <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
                        <table className="w-full text-sm">
                            <thead className="bg-slate-700">
                                <tr>
                                    <th className="text-left px-4 py-3 text-white">Zone</th>
                                    <th className="text-left px-4 py-3 text-white">Description</th>
                                    <th className="text-center px-4 py-3 text-white">Rate Factor</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700">
                                {WIND_ZONES.map((zone, index) => (
                                    <tr key={index} className="hover:bg-slate-700/50">
                                        <td className="px-4 py-3 text-white font-medium">{zone.name}</td>
                                        <td className="px-4 py-3 text-slate-400">{zone.description}</td>
                                        <td className="px-4 py-3 text-center">
                                            <span className={`px-2 py-1 rounded text-xs ${zone.factor >= 2.5 ? 'bg-red-500/20 text-red-300' : zone.factor >= 1.5 ? 'bg-amber-500/20 text-amber-300' : 'bg-green-500/20 text-green-300'}`}>
                                                ×{zone.factor}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4 bg-slate-800/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-xl font-bold text-white mb-4">Texas TWIA Tiers</h2>
                    <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-5">
                        <p className="text-blue-200/80 text-sm mb-4">
                            Texas Windstorm Insurance Association (TWIA) covers 14 coastal counties in tiers:
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div className="bg-slate-800 rounded-lg p-3">
                                <div className="text-white font-semibold">Tier 1 - Seaward</div>
                                <div className="text-slate-400">Galveston, Padre Island, etc.</div>
                            </div>
                            <div className="bg-slate-800 rounded-lg p-3">
                                <div className="text-white font-semibold">Tier 2 - Inland Coastal</div>
                                <div className="text-slate-400">Brazoria, Matagorda, etc.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <Link href="/windstorm-insurance/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                        Calculate Your Premium
                    </Link>
                </div>
            </section>

            <footer className="bg-slate-800 border-t border-slate-700 py-6">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <p className="text-xs text-slate-500">© {SITE.year} MySmartCalculators. Based on TWIA 2026 data.</p>
                </div>
            </footer>
        </>
    );
}
