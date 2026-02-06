"use client";

import Link from "next/link";
import { Calculator, Shield, Home } from "lucide-react";
import { SITE, INCOME_LIMITS } from "@/lib/calculators/section-8";

export default function Section8GuidePage() {
    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80">
                        <Calculator className="w-6 h-6 text-blue-500" />
                        <span className="text-lg font-bold text-white">MySmartCalculators</span>
                    </Link>
                    <Link href="/section-8" className="text-slate-400 hover:text-white text-sm"> Back</Link>
                </div>
            </header>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
                        <Shield className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-blue-300">Income Limits</span>
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-4">2026 Section 8 Income Limits</h1>
                    <p className="text-slate-400">50% of Area Median Income (national estimates)</p>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-6">2026 Income Limits</h2>
                    <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
                        <table className="w-full text-sm">
                            <thead className="bg-slate-700">
                                <tr>
                                    <th className="text-left px-4 py-3 text-white">Size</th>
                                    <th className="text-left px-4 py-3 text-white">Very Low (50%)</th>
                                    <th className="text-left px-4 py-3 text-white">Extremely Low (30%)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700">
                                {INCOME_LIMITS.map((item, index) => (
                                    <tr key={index} className="hover:bg-slate-700/50">
                                        <td className="px-4 py-3 text-white font-medium">{item.householdSize}</td>
                                        <td className="px-4 py-3 text-blue-400">${item.veryLow.toLocaleString()}</td>
                                        <td className="px-4 py-3 text-slate-400">${item.extremelyLow.toLocaleString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm text-slate-500 mt-4">Actual limits vary by location. Check with your local PHA.</p>
                </div>
            </section>

            <section className="py-12 px-4 bg-slate-800/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-xl font-bold text-white mb-4">How Section 8 Works</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
                            <h3 className="text-white font-semibold">Your Payment</h3>
                            <p className="text-slate-400 text-sm mt-1">30% of adjusted income</p>
                            <p className="text-blue-400 text-sm mt-1">Toward rent and utilities</p>
                        </div>
                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
                            <h3 className="text-white font-semibold">Voucher Covers</h3>
                            <p className="text-slate-400 text-sm mt-1">Difference up to FMR</p>
                            <p className="text-blue-400 text-sm mt-1">Paid to landlord directly</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <Link href="/section-8/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                        Calculate Your Voucher Amount
                    </Link>
                </div>
            </section>

            <footer className="bg-slate-800 border-t border-slate-700 py-6">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <p className="text-xs text-slate-500">© {SITE.year} MySmartCalculators. Based on HUD 2026 guidelines.</p>
                </div>
            </footer>
        </>
    );
}
