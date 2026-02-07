"use client";

import Link from "next/link";
import { Calculator, Shield, Home } from "lucide-react";
import { SITE, EXPENSE_CATEGORIES } from "@/lib/calculators/rental-income";

export default function RentalIncomeGuidePage() {
    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80">
                        <Calculator className="w-6 h-6 text-emerald-500" />
                        <span className="text-lg font-bold text-white">MySmartCalculators</span>
                    </Link>
                    <Link href="/rental-income" className="text-slate-400 hover:text-white text-sm">← Back</Link>
                </div>
            </header>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/50 rounded-full px-4 py-2 mb-4">
                        <Shield className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm text-emerald-300">Expense Guide</span>
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-4">Rental Property Expenses</h1>
                    <p className="text-slate-400">Typical operating expenses for landlords</p>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-6">Operating Expense Categories</h2>
                    <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
                        <table className="w-full text-sm">
                            <thead className="bg-slate-700">
                                <tr>
                                    <th className="text-left px-4 py-3 text-white">Expense</th>
                                    <th className="text-left px-4 py-3 text-white">Description</th>
                                    <th className="text-center px-4 py-3 text-white">Typical %</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700">
                                {EXPENSE_CATEGORIES.map((item, index) => (
                                    <tr key={index} className="hover:bg-slate-700/50">
                                        <td className="px-4 py-3 text-white font-medium">{item.name}</td>
                                        <td className="px-4 py-3 text-slate-400">{item.description}</td>
                                        <td className="px-4 py-3 text-center">
                                            <span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-300 text-xs">
                                                {item.typical}
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
                    <h2 className="text-xl font-bold text-white mb-4">Key Metrics</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
                            <h3 className="text-white font-semibold">Cap Rate</h3>
                            <p className="text-slate-400 text-sm mt-1">NOI ÷ Property Value</p>
                            <p className="text-emerald-400 text-sm mt-1">5-8% is considered good</p>
                        </div>
                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
                            <h3 className="text-white font-semibold">Cash-on-Cash Return</h3>
                            <p className="text-slate-400 text-sm mt-1">Annual Cash Flow ÷ Cash Invested</p>
                            <p className="text-emerald-400 text-sm mt-1">8-12% is strong</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <Link href="/rental-income/calculator" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                        Calculate Your Rental Income
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
