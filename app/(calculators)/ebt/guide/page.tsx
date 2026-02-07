"use client";

import Link from "next/link";
import { Calculator, Shield, CreditCard } from "lucide-react";
import { SITE, EBT_BENEFITS } from "@/lib/calculators/ebt";

export default function EbtGuidePage() {
    return (
        <>


            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
                        <Shield className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-blue-300">EBT Guide</span>
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-4">2026 EBT Benefits Guide</h1>
                    <p className="text-slate-400">How EBT works and benefit amounts</p>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-6">2026 EBT Benefits Table</h2>
                    <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead className="bg-slate-700">
                                <tr>
                                    <th className="text-left px-4 py-3 text-white">Size</th>
                                    <th className="text-left px-4 py-3 text-white">Max Benefit</th>
                                    <th className="text-left px-4 py-3 text-white">Gross Limit</th>
                                    <th className="text-left px-4 py-3 text-white">Net Limit</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700">
                                {EBT_BENEFITS.map((item, index) => (
                                    <tr key={index} className="hover:bg-slate-700/50">
                                        <td className="px-4 py-3 text-white font-medium">{item.householdSize}</td>
                                        <td className="px-4 py-3 text-blue-400">${item.maxBenefit}/mo</td>
                                        <td className="px-4 py-3 text-slate-400">${item.grossLimit.toLocaleString()}</td>
                                        <td className="px-4 py-3 text-slate-400">${item.netLimit.toLocaleString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4 bg-slate-800/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-xl font-bold text-white mb-4">How to Use EBT</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
                            <h3 className="text-white font-semibold">1. Swipe Card</h3>
                            <p className="text-slate-400 text-sm mt-1">At checkout, swipe or insert your EBT card</p>
                        </div>
                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
                            <h3 className="text-white font-semibold">2. Enter PIN</h3>
                            <p className="text-slate-400 text-sm mt-1">Enter your 4-digit PIN</p>
                        </div>
                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
                            <h3 className="text-white font-semibold">3. Choose Amount</h3>
                            <p className="text-slate-400 text-sm mt-1">Select SNAP/EBT for food purchases</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <Link href="/ebt/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                        Calculate Your EBT Benefits
                    </Link>
                </div>
            </section>


        </>
    );
}
