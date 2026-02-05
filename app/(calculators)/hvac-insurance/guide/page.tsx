"use client";

import Link from "next/link";
import { Calculator, Shield, AlertTriangle, Thermometer } from "lucide-react";
import { SITE, COVERAGE_OPTIONS } from "@/lib/calculators/hvac-insurance";

export default function HVACInsuranceGuidePage() {
    return (
        <>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
                        <Shield className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-blue-300">Coverage Guide</span>
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-4">HVAC Insurance Coverage Guide</h1>
                    <p className="text-slate-400">Essential coverage for heating and cooling contractors</p>
                </div>
            </section>

            <section className="py-12 px-4 bg-green-900/20 border-y border-green-500/30">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-start gap-4">
                        <Thermometer className="w-8 h-8 text-green-400 flex-shrink-0" />
                        <div>
                            <h2 className="text-xl font-bold text-green-300 mb-2">EPA Section 608 Required</h2>
                            <p className="text-green-200/80">
                                EPA Section 608 certification is required to purchase, handle, and dispose of refrigerants. Fines can reach $44,539 per day per violation. Insurance does not cover EPA fines, but proper certification is required by most insurers.
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
                                    <td className="px-6 py-4 text-white font-medium">HVAC</td>
                                    <td className="px-6 py-4 text-blue-400 text-right">$8-$14</td>
                                    <td className="px-6 py-4 text-center">Refrigerant, Falls</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-slate-300">Plumber</td>
                                    <td className="px-6 py-4 text-slate-400 text-right">$8-$15</td>
                                    <td className="px-6 py-4 text-center text-slate-400">Water Damage</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-slate-300">Electrician</td>
                                    <td className="px-6 py-4 text-slate-400 text-right">$10-$18</td>
                                    <td className="px-6 py-4 text-center text-slate-400">Fire, Shock</td>
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
                    <Link href="/hvac-insurance/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors">
                        Calculate Your Premium
                    </Link>
                </div>
            </section>

        </>
    );
}
