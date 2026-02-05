"use client";

import Link from "next/link";
import { Calculator, Shield, AlertTriangle, Zap } from "lucide-react";
import { SITE, COVERAGE_OPTIONS } from "@/lib/calculators/electrician-insurance";

export default function ElectricianInsuranceGuidePage() {
    return (
        <>


            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
                        <Shield className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-blue-300">Coverage Guide</span>
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-4">Electrician Insurance Coverage Guide</h1>
                    <p className="text-slate-400">Essential coverage for electrical contractors</p>
                </div>
            </section>

            <section className="py-12 px-4 bg-amber-900/20 border-y border-amber-500/30">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-start gap-4">
                        <Zap className="w-8 h-8 text-amber-400 flex-shrink-0" />
                        <div>
                            <h2 className="text-xl font-bold text-amber-300 mb-2">Fire & Shock Hazards</h2>
                            <p className="text-amber-200/80">
                                30% of all electrician liability claims involve fire or electrocution. Faulty wiring can cause devastating fires. Make sure your General Liability limits are high enough to cover property damage claims.
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
                    <h2 className="text-2xl font-bold text-white mb-6">Trade Comparison</h2>
                    <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-slate-700">
                                <tr>
                                    <th className="text-left px-6 py-4 text-sm font-semibold text-white">Trade</th>
                                    <th className="text-right px-6 py-4 text-sm font-semibold text-white">WC Rate (per $100)</th>
                                    <th className="text-center px-6 py-4 text-sm font-semibold text-white">Main Risk</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700">
                                <tr className="bg-blue-900/20">
                                    <td className="px-6 py-4 text-white font-medium">Electrician</td>
                                    <td className="px-6 py-4 text-blue-400 text-right">$10-$18</td>
                                    <td className="px-6 py-4 text-center">Fire, Electrocution</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-slate-300">Plumber</td>
                                    <td className="px-6 py-4 text-slate-400 text-right">$8-$15</td>
                                    <td className="px-6 py-4 text-center text-slate-400">Water Damage</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-slate-300">HVAC</td>
                                    <td className="px-6 py-4 text-slate-400 text-right">$8-$14</td>
                                    <td className="px-6 py-4 text-center text-slate-400">Refrigerant, Falls</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-slate-300">Roofer</td>
                                    <td className="px-6 py-4 text-slate-400 text-right">$25-$45</td>
                                    <td className="px-6 py-4 text-center text-slate-400">Falls</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <Link href="/electrician-insurance/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors">
                        Calculate Your Premium
                    </Link>
                </div>
            </section>


        </>
    );
}
