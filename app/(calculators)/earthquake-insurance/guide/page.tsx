"use client";

import Link from "next/link";
import { Calculator, Shield, Mountain } from "lucide-react";
import { SITE, RISK_ZONES, COVERAGE_OPTIONS } from "@/lib/calculators/earthquake-insurance";

export default function EarthquakeInsuranceGuidePage() {
    return (
        <>


            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
                        <Shield className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-blue-300">Coverage Guide</span>
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-4">Earthquake Insurance Guide</h1>
                    <p className="text-slate-400">Risk zones, deductibles, and coverage limits</p>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-6">Seismic Risk Zones</h2>
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
                                {RISK_ZONES.map((zone, index) => (
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
                    <h2 className="text-xl font-bold text-white mb-4">High Deductible Warning</h2>
                    <div className="bg-amber-900/20 border border-amber-500/30 rounded-xl p-5">
                        <p className="text-amber-200/80 text-sm mb-4">
                            Earthquake deductibles are typically <strong>10-25% of coverage</strong>, NOT a flat dollar amount.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div className="bg-slate-800 rounded-lg p-3">
                                <div className="text-slate-400">$300,000 Home @ 15% Deductible</div>
                                <div className="text-amber-400 font-bold">You pay first $45,000</div>
                            </div>
                            <div className="bg-slate-800 rounded-lg p-3">
                                <div className="text-slate-400">$500,000 Home @ 20% Deductible</div>
                                <div className="text-amber-400 font-bold">You pay first $100,000</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <Link href="/earthquake-insurance/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                        Calculate Your Premium
                    </Link>
                </div>
            </section>


        </>
    );
}
