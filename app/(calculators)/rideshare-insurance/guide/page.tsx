"use client";

import Link from "next/link";
import { Calculator, Shield, CheckCircle } from "lucide-react";
import { SITE, INSURANCE_OPTIONS } from "@/lib/calculators/rideshare-insurance";

export default function RideshareInsuranceGuidePage() {
    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80">
                        <Calculator className="w-6 h-6 text-blue-500" />
                        <span className="text-lg font-bold text-white">MySmartCalculators</span>
                    </Link>
                    <Link href="/rideshare-insurance" className="text-slate-400 hover:text-white text-sm">← Back to Overview</Link>
                </div>
            </header>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
                        <Shield className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-blue-300">Coverage Guide</span>
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-4">Rideshare Insurance Coverage Guide</h1>
                    <p className="text-slate-400">Compare your insurance options for Uber and Lyft driving</p>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-8">Insurance Options Compared</h2>
                    <div className="space-y-6">
                        {INSURANCE_OPTIONS.map((option, index) => (
                            <div key={index} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-white">{option.name}</h3>
                                        <p className="text-slate-400 mt-1">{option.description}</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-2xl font-bold text-blue-400">${option.avgCost}</div>
                                        <div className="text-sm text-slate-500">{option.costType}</div>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <h4 className="text-sm font-semibold text-green-400 mb-2">Pros</h4>
                                        <ul className="space-y-1">
                                            {option.pros.map((pro, i) => (
                                                <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                                                    <CheckCircle className="w-4 h-4 text-green-400" />
                                                    {pro}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-red-400 mb-2">Cons</h4>
                                        <ul className="space-y-1">
                                            {option.cons.map((con, i) => (
                                                <li key={i} className="text-sm text-slate-400">• {con}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-12 px-4 bg-slate-800/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-6">Which Option is Right for You?</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-white mb-2">Part-Time Drivers</h3>
                            <p className="text-slate-400 text-sm mb-3">Under 15 hours/week</p>
                            <div className="text-blue-400 font-semibold">Rideshare Endorsement</div>
                            <p className="text-slate-500 text-sm mt-1">$15-$30/month is sufficient</p>
                        </div>
                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-white mb-2">Regular Drivers</h3>
                            <p className="text-slate-400 text-sm mb-3">15-30 hours/week</p>
                            <div className="text-blue-400 font-semibold">Hybrid Policy</div>
                            <p className="text-slate-500 text-sm mt-1">Better protection for more miles</p>
                        </div>
                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-white mb-2">Full-Time Drivers</h3>
                            <p className="text-slate-400 text-sm mb-3">30+ hours/week</p>
                            <div className="text-blue-400 font-semibold">Commercial Policy</div>
                            <p className="text-slate-500 text-sm mt-1">Maximum coverage for professionals</p>
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
                    <p className="text-sm text-slate-500">© {SITE.year} MySmartCalculators. Based on NAIC 2026 data.</p>
                </div>
            </footer>
        </>
    );
}
