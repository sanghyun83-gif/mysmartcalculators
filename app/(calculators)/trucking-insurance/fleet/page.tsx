"use client";

import Link from "next/link";
import { Calculator, Users, TrendingDown } from "lucide-react";
import { SITE, FLEET_DISCOUNTS } from "@/lib/calculators/trucking-insurance";

export default function TruckingInsuranceFleetPage() {
    return (
        <>
            {/* Header */}
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80">
                        <Calculator className="w-6 h-6 text-blue-500" />
                        <span className="text-lg font-bold text-white">MySmartCalculators</span>
                    </Link>
                    <Link href="/trucking-insurance" className="text-slate-400 hover:text-white text-sm">
                         Back to Overview
                    </Link>
                </div>
            </header>

            {/* Hero */}
            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
                        <Users className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-blue-300">Fleet Discounts</span>
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-4">Trucking Fleet Insurance Discounts</h1>
                    <p className="text-slate-400">Save up to 25% with larger fleet operations</p>
                </div>
            </section>

            {/* Discount Tiers */}
            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-8">Fleet Discount Tiers</h2>
                    <div className="space-y-4">
                        {FLEET_DISCOUNTS.map((tier, index) => (
                            <div key={index} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-blue-500/20 rounded-lg p-3">
                                            <Users className="w-6 h-6 text-blue-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-white">{tier.tier}</h3>
                                            <p className="text-slate-400 text-sm">
                                                {tier.min === tier.max ? `${tier.min} truck` : `${tier.min}-${tier.max === 999 ? '50+' : tier.max} trucks`}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className={`text-2xl font-bold ${tier.discount > 0 ? 'text-green-400' : 'text-slate-500'}`}>
                                            {tier.discount > 0 ? `-${(tier.discount * 100).toFixed(0)}%` : 'Base Rate'}
                                        </div>
                                        {tier.discount > 0 && (
                                            <div className="flex items-center gap-1 text-green-400 text-sm">
                                                <TrendingDown className="w-4 h-4" />
                                                <span>Discount</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Savings */}
            <section className="py-12 px-4 bg-slate-800/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-6">Additional Ways to Save</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-white mb-2">Telematics/ELD Discount</h3>
                            <p className="text-slate-400 text-sm mb-2">Install GPS tracking and electronic logging devices.</p>
                            <div className="text-green-400 font-semibold">Save 5-15%</div>
                        </div>
                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-white mb-2">Driver Training Program</h3>
                            <p className="text-slate-400 text-sm mb-2">Ongoing safety training and defensive driving courses.</p>
                            <div className="text-green-400 font-semibold">Save 5-10%</div>
                        </div>
                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-white mb-2">Clean Safety Record</h3>
                            <p className="text-slate-400 text-sm mb-2">No accidents or violations in past 3 years.</p>
                            <div className="text-green-400 font-semibold">Save 10-20%</div>
                        </div>
                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-white mb-2">Pay-in-Full Discount</h3>
                            <p className="text-slate-400 text-sm mb-2">Pay annual premium upfront instead of monthly.</p>
                            <div className="text-green-400 font-semibold">Save 5-8%</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <Link
                        href="/trucking-insurance/calculator"
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors"
                    >
                        Calculate Fleet Savings
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-800 border-t border-slate-700 py-8">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <p className="text-sm text-slate-500">© {SITE.year} MySmartCalculators. Based on NAIC 2026 data.</p>
                </div>
            </footer>
        </>
    );
}
