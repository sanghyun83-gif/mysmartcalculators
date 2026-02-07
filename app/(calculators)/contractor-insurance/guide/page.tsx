"use client";

import Link from "next/link";
import { Calculator, Shield, CheckCircle } from "lucide-react";
import { SITE, COVERAGE_TYPES } from "@/lib/calculators/contractor-insurance";

export default function ContractorInsuranceGuidePage() {
    return (
        <>


            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
                        <Shield className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-blue-300">Coverage Guide</span>
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-4">Contractor Insurance Coverage Guide</h1>
                    <p className="text-slate-400">Essential coverage for contractors and trades</p>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-6">Coverage Types</h2>
                    <div className="space-y-6">
                        {COVERAGE_TYPES.map((coverage, index) => (
                            <div key={index} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                                <div className="flex items-start justify-between mb-3">
                                    <div>
                                        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                                            {coverage.name}
                                            {coverage.required && (
                                                <span className="bg-red-500/20 text-red-300 text-xs px-2 py-1 rounded">Required</span>
                                            )}
                                        </h3>
                                        <p className="text-slate-400 mt-1">{coverage.description}</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-blue-400 font-semibold">${coverage.avgCost.toLocaleString()}</div>
                                        <div className="text-xs text-slate-500">Avg Annual</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-12 px-4 bg-slate-800/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-6">Minimum Coverage Recommendations</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-white mb-3">Small Contractor</h3>
                            <p className="text-slate-400 text-sm mb-3">Under $250K revenue, 1-3 employees</p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-sm text-slate-300">
                                    <CheckCircle className="w-4 h-4 text-green-400" /> GL: $1M per occurrence
                                </li>
                                <li className="flex items-center gap-2 text-sm text-slate-300">
                                    <CheckCircle className="w-4 h-4 text-green-400" /> Workers Comp (if employees)
                                </li>
                                <li className="flex items-center gap-2 text-sm text-slate-300">
                                    <CheckCircle className="w-4 h-4 text-green-400" /> Tools & Equipment
                                </li>
                            </ul>
                        </div>
                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-white mb-3">Large Contractor</h3>
                            <p className="text-slate-400 text-sm mb-3">Over $1M revenue, 10+ employees</p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-sm text-slate-300">
                                    <CheckCircle className="w-4 h-4 text-green-400" /> GL: $2M aggregate
                                </li>
                                <li className="flex items-center gap-2 text-sm text-slate-300">
                                    <CheckCircle className="w-4 h-4 text-green-400" /> Workers Comp + Umbrella
                                </li>
                                <li className="flex items-center gap-2 text-sm text-slate-300">
                                    <CheckCircle className="w-4 h-4 text-green-400" /> Commercial Auto
                                </li>
                                <li className="flex items-center gap-2 text-sm text-slate-300">
                                    <CheckCircle className="w-4 h-4 text-green-400" /> Builder's Risk
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <Link href="/contractor-insurance/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors">
                        Calculate Your Premium
                    </Link>
                </div>
            </section>


        </>
    );
}
