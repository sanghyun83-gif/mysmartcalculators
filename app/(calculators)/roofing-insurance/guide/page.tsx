"use client";

import Link from "next/link";
import { Calculator, Shield, AlertTriangle, CheckCircle } from "lucide-react";
import { SITE, COVERAGE_OPTIONS } from "@/lib/calculators/roofing-insurance";

export default function RoofingInsuranceGuidePage() {
    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80">
                        <Calculator className="w-6 h-6 text-blue-500" />
                        <span className="text-lg font-bold text-white">MySmartCalculators</span>
                    </Link>
                    <Link href="/roofing-insurance" className="text-slate-400 hover:text-white text-sm"> Back to Overview</Link>
                </div>
            </header>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
                        <Shield className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-blue-300">Coverage Guide</span>
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-4">Roofing Insurance Coverage Guide</h1>
                    <p className="text-slate-400">Essential coverage for high-risk roofing work</p>
                </div>
            </section>

            <section className="py-12 px-4 bg-red-900/20 border-y border-red-500/30">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-start gap-4">
                        <AlertTriangle className="w-8 h-8 text-red-400 flex-shrink-0" />
                        <div>
                            <h2 className="text-xl font-bold text-red-300 mb-2">Highest Risk Construction Trade</h2>
                            <p className="text-red-200/80">
                                Roofing has the highest workers compensation rates in construction. Falls account for 35% of all roofing injury claims. Proper insurance and fall protection are critical to staying in business.
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
                    <h2 className="text-2xl font-bold text-white mb-6">Reducing Roofing Insurance Costs</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <CheckCircle className="w-8 h-8 text-green-400 mb-3" />
                            <h3 className="text-lg font-semibold text-white mb-2">Safety Programs</h3>
                            <ul className="text-slate-400 text-sm space-y-1">
                                <li> OSHA 10/30 training for all workers</li>
                                <li> Written fall protection plan</li>
                                <li> Regular safety meetings</li>
                            </ul>
                        </div>
                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <CheckCircle className="w-8 h-8 text-green-400 mb-3" />
                            <h3 className="text-lg font-semibold text-white mb-2">Claims Management</h3>
                            <ul className="text-slate-400 text-sm space-y-1">
                                <li> 3+ years claims-free lowers EMR</li>
                                <li> Return-to-work programs</li>
                                <li> Proper injury reporting</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <Link href="/roofing-insurance/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors">
                        Calculate Your Premium
                    </Link>
                </div>
            </section>

            <footer className="bg-slate-800 border-t border-slate-700 py-8">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <p className="text-sm text-slate-500">© {SITE.year} MySmartCalculators. Based on NCCI 2026 data.</p>
                </div>
            </footer>
        </>
    );
}
