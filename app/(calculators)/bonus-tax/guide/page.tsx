"use client";

import Link from "next/link";
import { Calculator, Shield, Receipt } from "lucide-react";
import { SITE, WITHHOLDING_METHODS } from "@/lib/calculators/bonus-tax";

export default function BonusTaxGuidePage() {
    return (
        <>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/50 rounded-full px-4 py-2 mb-4">
                        <Shield className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm text-emerald-300">Tax Guide</span>
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-4">Bonus Tax Withholding Methods</h1>
                    <p className="text-slate-400">Understanding how bonuses are taxed</p>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-6">Withholding Methods</h2>
                    <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
                        <table className="w-full text-sm">
                            <thead className="bg-slate-700">
                                <tr>
                                    <th className="text-left px-4 py-3 text-white">Method</th>
                                    <th className="text-left px-4 py-3 text-white">Description</th>
                                    <th className="text-center px-4 py-3 text-white">Rate</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700">
                                {WITHHOLDING_METHODS.map((m, index) => (
                                    <tr key={index} className="hover:bg-slate-700/50">
                                        <td className="px-4 py-3 text-white font-medium">{m.name}</td>
                                        <td className="px-4 py-3 text-slate-400">{m.description}</td>
                                        <td className="px-4 py-3 text-center">
                                            <span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-300 text-xs">
                                                {m.rate ? `${m.rate * 100}%` : 'Variable'}
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
                    <h2 className="text-xl font-bold text-white mb-4">Additional Taxes on Bonuses</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
                            <h3 className="text-white font-semibold">Social Security</h3>
                            <p className="text-slate-400 text-sm mt-1">6.2% on wages up to $168,600</p>
                            <p className="text-emerald-400 text-sm mt-1">Wage base for 2026</p>
                        </div>
                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
                            <h3 className="text-white font-semibold">Medicare</h3>
                            <p className="text-slate-400 text-sm mt-1">1.45% + 0.9% over $200K</p>
                            <p className="text-amber-400 text-sm mt-1">No wage cap</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <Link href="/bonus-tax/calculator" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                        Calculate Your Bonus Tax
                    </Link>
                </div>
            </section>

        </>
    );
}
