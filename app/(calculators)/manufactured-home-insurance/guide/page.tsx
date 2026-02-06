"use client";

import Link from "next/link";
import { Calculator, Shield, Factory } from "lucide-react";
import { SITE, COVERAGE_OPTIONS } from "@/lib/calculators/manufactured-home-insurance";

export default function ManufacturedHomeInsuranceGuidePage() {
    return (
        <>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
                        <Shield className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-blue-300">Coverage Guide</span>
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-4">Manufactured Home Insurance Guide</h1>
                    <p className="text-slate-400">HUD-code and factory-built home coverage</p>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-6">Coverage Types</h2>
                    <div className="space-y-4">
                        {COVERAGE_OPTIONS.map((coverage, index) => (
                            <div key={index} className="bg-slate-800 border border-slate-700 rounded-xl p-5">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">{coverage.name}</h3>
                                        <p className="text-slate-400 text-sm mt-1">{coverage.description}</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-blue-400 font-semibold">${coverage.baseCost}</div>
                                        <div className="text-xs text-slate-500">Base/yr</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-12 px-4 bg-slate-800/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-xl font-bold text-white mb-4">Manufactured vs Mobile Home</h2>
                    <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
                        <table className="w-full text-sm">
                            <thead className="bg-slate-700">
                                <tr>
                                    <th className="text-left px-4 py-3 text-white">Factor</th>
                                    <th className="text-center px-4 py-3 text-white">Manufactured</th>
                                    <th className="text-center px-4 py-3 text-white">Mobile (Pre-1976)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700">
                                <tr><td className="px-4 py-3 text-slate-300">HUD Code</td><td className="text-center text-green-400"> Yes</td><td className="text-center text-red-400"> No</td></tr>
                                <tr><td className="px-4 py-3 text-slate-300">Construction Standards</td><td className="text-center text-green-400">Modern</td><td className="text-center text-amber-400">Older</td></tr>
                                <tr><td className="px-4 py-3 text-slate-300">Insurance Rates</td><td className="text-center text-green-400">Lower</td><td className="text-center text-amber-400">Higher</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm text-slate-500 mt-4">*Post-1976 homes built to HUD standards typically get better rates.</p>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <Link href="/manufactured-home-insurance/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                        Calculate Your Premium
                    </Link>
                </div>
            </section>

        </>
    );
}
