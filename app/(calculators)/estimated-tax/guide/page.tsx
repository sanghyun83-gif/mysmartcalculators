"use client";

import Link from "next/link";
import { Calculator, Shield, Receipt } from "lucide-react";
import { SITE, TAX_COMPONENTS } from "@/lib/calculators/estimated-tax";

export default function EstimatedTaxGuidePage() {
    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80">
                        <Calculator className="w-6 h-6 text-emerald-500" />
                        <span className="text-lg font-bold text-white">MySmartCalculators</span>
                    </Link>
                    <Link href="/estimated-tax" className="text-slate-400 hover:text-white text-sm"> Back</Link>
                </div>
            </header>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/50 rounded-full px-4 py-2 mb-4">
                        <Shield className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm text-emerald-300">Tax Components</span>
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-4">Tax Components</h1>
                    <p className="text-slate-400">What makes up your total tax liability</p>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-6">Tax Types</h2>
                    <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
                        <table className="w-full text-sm">
                            <thead className="bg-slate-700">
                                <tr>
                                    <th className="text-left px-4 py-3 text-white">Tax Type</th>
                                    <th className="text-left px-4 py-3 text-white">Rate</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700">
                                {TAX_COMPONENTS.map((item, index) => (
                                    <tr key={index} className="hover:bg-slate-700/50">
                                        <td className="px-4 py-3 text-white font-medium">{item.name}</td>
                                        <td className="px-4 py-3 text-emerald-400">{item.rate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4 bg-slate-800/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-xl font-bold text-white mb-4">2026 Standard Deductions</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 text-center">
                            <div className="text-2xl font-bold text-emerald-400">$15,000</div>
                            <div className="text-sm text-slate-400">Single</div>
                        </div>
                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 text-center">
                            <div className="text-2xl font-bold text-emerald-400">$30,000</div>
                            <div className="text-sm text-slate-400">Married Filing Jointly</div>
                        </div>
                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 text-center">
                            <div className="text-2xl font-bold text-emerald-400">$22,500</div>
                            <div className="text-sm text-slate-400">Head of Household</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <Link href="/estimated-tax/calculator" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                        Calculate Your Estimated Tax
                    </Link>
                </div>
            </section>

            <footer className="bg-slate-800 border-t border-slate-700 py-6">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <p className="text-xs text-slate-500">© {SITE.year} MySmartCalculators. Based on IRS 2026 guidelines.</p>
                </div>
            </footer>
        </>
    );
}
