"use client";

import Link from "next/link";
import { Calculator, Shield, Gem } from "lucide-react";
import { SITE, JEWELRY_TYPES, COVERAGE_OPTIONS } from "@/lib/calculators/jewelry-insurance";

export default function JewelryInsuranceGuidePage() {
    return (
        <>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
                        <Shield className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-blue-300">Coverage Guide</span>
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-4">Jewelry Insurance Guide</h1>
                    <p className="text-slate-400">Floater coverage and homeowners limits</p>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-6">Jewelry Rate Factors</h2>
                    <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
                        <table className="w-full text-sm">
                            <thead className="bg-slate-700">
                                <tr>
                                    <th className="text-left px-4 py-3 text-white">Type</th>
                                    <th className="text-left px-4 py-3 text-white">Description</th>
                                    <th className="text-center px-4 py-3 text-white">Rate Factor</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700">
                                {JEWELRY_TYPES.map((type, index) => (
                                    <tr key={index} className="hover:bg-slate-700/50">
                                        <td className="px-4 py-3 text-white font-medium">{type.name}</td>
                                        <td className="px-4 py-3 text-slate-400">{type.description}</td>
                                        <td className="px-4 py-3 text-center">
                                            <span className={`px-2 py-1 rounded text-xs ${type.factor >= 1.2 ? 'bg-amber-500/20 text-amber-300' : 'bg-green-500/20 text-green-300'}`}>
                                                ×{type.factor}
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
                    <h2 className="text-xl font-bold text-white mb-4">Floater vs Homeowners</h2>
                    <div className="bg-amber-900/20 border border-amber-500/30 rounded-xl p-5">
                        <p className="text-amber-200/80 text-sm mb-4">
                            <strong>Standard homeowners jewelry limits:</strong> $1,000-$2,500
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div className="bg-slate-800 rounded-lg p-3">
                                <div className="text-red-400 font-semibold">Homeowners Policy</div>
                                <div className="text-slate-400">$1,500 limit, theft only</div>
                            </div>
                            <div className="bg-slate-800 rounded-lg p-3">
                                <div className="text-green-400 font-semibold">Jewelry Floater</div>
                                <div className="text-slate-400">Full value, all perils, worldwide</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <Link href="/jewelry-insurance/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                        Calculate Your Premium
                    </Link>
                </div>
            </section>

        </>
    );
}
