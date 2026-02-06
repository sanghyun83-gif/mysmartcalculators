"use client";

import Link from "next/link";
import { Calculator, Clock, AlertTriangle, CheckCircle } from "lucide-react";
import { SITE, COVERAGE_PERIODS } from "@/lib/calculators/rideshare-insurance";

export default function RideshareInsuranceCoveragePeriodsPage() {
    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80">
                        <Calculator className="w-6 h-6 text-blue-500" />
                        <span className="text-lg font-bold text-white">MySmartCalculators</span>
                    </Link>
                    <Link href="/rideshare-insurance" className="text-slate-400 hover:text-white text-sm">??Back to Overview</Link>
                </div>
            </header>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
                        <Clock className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-blue-300">Coverage Periods</span>
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-4">Rideshare Insurance Coverage Periods</h1>
                    <p className="text-slate-400">Understanding when you're covered (and when you're not)</p>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-6">
                        {COVERAGE_PERIODS.map((period, index) => (
                            <div key={index} className={`bg-slate-800 border rounded-xl p-6 ${period.id === 'period1' ? 'border-amber-500/50' : 'border-slate-700'}`}>
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                                            {period.name}
                                            {period.id === 'period1' && (
                                                <span className="bg-amber-500/20 text-amber-300 text-xs px-2 py-1 rounded flex items-center gap-1">
                                                    <AlertTriangle className="w-3 h-3" /> Gap Risk
                                                </span>
                                            )}
                                        </h3>
                                        <p className="text-slate-400 mt-1">{period.description}</p>
                                    </div>
                                    <div className={`px-3 py-1 rounded text-sm ${period.id === 'period0' ? 'bg-slate-500/20 text-slate-300' : period.id === 'period1' ? 'bg-amber-500/20 text-amber-300' : 'bg-green-500/20 text-green-300'}`}>
                                        {period.coverage}
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-4 mt-4">
                                    <div className="bg-slate-700/50 rounded-lg p-4">
                                        <div className="text-sm font-semibold text-blue-400 mb-1">Uber Coverage</div>
                                        <div className="text-sm text-slate-300">{period.uberCoverage}</div>
                                    </div>
                                    <div className="bg-slate-700/50 rounded-lg p-4">
                                        <div className="text-sm font-semibold text-pink-400 mb-1">Lyft Coverage</div>
                                        <div className="text-sm text-slate-300">{period.liftCoverage}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-12 px-4 bg-amber-900/20 border-y border-amber-500/30">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-start gap-4">
                        <AlertTriangle className="w-8 h-8 text-amber-400 flex-shrink-0" />
                        <div>
                            <h2 className="text-xl font-bold text-amber-300 mb-2">The Period 1 Gap</h2>
                            <p className="text-amber-200/80">
                                Period 1 is the most dangerous gap in rideshare coverage. When your app is on but you haven't accepted a ride, your personal insurance likely won't cover you, and Uber/Lyft only provides limited contingent liability. A rideshare endorsement ($15-$30/month) closes this gap.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <Link href="/rideshare-insurance/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors">
                        Calculate Your Premium
                    </Link>
                </div>
            </section>

            <footer className="bg-slate-800 border-t border-slate-700 py-8">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <p className="text-sm text-slate-500">© {SITE.year} MySmartCalculators. Based on TNC regulations.</p>
                </div>
            </footer>
        </>
    );
}
