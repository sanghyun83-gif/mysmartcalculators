"use client";

import Link from "next/link";
import { Calculator, Shield, Trees } from "lucide-react";
import { SITE, COVERAGE_OPTIONS, SERVICE_TYPES } from "@/lib/calculators/landscaping-insurance";

export default function LandscapingInsuranceGuidePage() {
    return (
        <>
            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
                        <Shield className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-blue-300">Coverage Guide</span>
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-4">Landscaping Insurance Coverage Guide</h1>
                    <p className="text-slate-400">Essential coverage for lawn care and landscaping contractors</p>
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
                    <h2 className="text-2xl font-bold text-white mb-6">Service Type Rates</h2>
                    <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-slate-700">
                                <tr>
                                    <th className="text-left px-6 py-4 text-sm font-semibold text-white">Service Type</th>
                                    <th className="text-left px-6 py-4 text-sm font-semibold text-white">Description</th>
                                    <th className="text-center px-6 py-4 text-sm font-semibold text-white">Rate Factor</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700">
                                {SERVICE_TYPES.map((service, index) => (
                                    <tr key={index} className="hover:bg-slate-700/50">
                                        <td className="px-6 py-4 text-white font-medium">{service.name}</td>
                                        <td className="px-6 py-4 text-slate-400">{service.description}</td>
                                        <td className="px-6 py-4 text-center">
                                            <span className={`px-2 py-1 rounded text-xs ${service.factor >= 1.25 ? 'bg-red-500/20 text-red-300' : service.factor >= 1.0 ? 'bg-amber-500/20 text-amber-300' : 'bg-green-500/20 text-green-300'}`}>
                                                ×{service.factor}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm text-slate-500 mt-4">*Tree service has the highest rates due to chainsaw and falling hazards</p>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <Link href="/landscaping-insurance/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors">
                        Calculate Your Premium
                    </Link>
                </div>
            </section>
        </>
    );
}
