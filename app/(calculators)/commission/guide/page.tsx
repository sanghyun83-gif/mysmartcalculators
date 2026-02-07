"use client";

import Link from "next/link";
import { Calculator, Shield, TrendingUp } from "lucide-react";
import { SITE, INDUSTRY_RATES } from "@/lib/calculators/commission";

export default function CommissionGuidePage() {
    return (
        <>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/50 rounded-full px-4 py-2 mb-4">
                        <Shield className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm text-emerald-300">Rate Guide</span>
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-4">Industry Commission Rates</h1>
                    <p className="text-slate-400">Common commission rates by industry</p>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-6">Commission Rates by Industry</h2>
                    <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
                        <table className="w-full text-sm">
                            <thead className="bg-slate-700">
                                <tr>
                                    <th className="text-left px-4 py-3 text-white">Industry</th>
                                    <th className="text-left px-4 py-3 text-white">Description</th>
                                    <th className="text-center px-4 py-3 text-white">Rate</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700">
                                {INDUSTRY_RATES.map((item, index) => (
                                    <tr key={index} className="hover:bg-slate-700/50">
                                        <td className="px-4 py-3 text-white font-medium">{item.industry}</td>
                                        <td className="px-4 py-3 text-slate-400">{item.description}</td>
                                        <td className="px-4 py-3 text-center">
                                            <span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-300 text-xs">
                                                {item.rate}
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
                    <h2 className="text-xl font-bold text-white mb-4">Commission Structures</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
                            <h3 className="text-white font-semibold">Flat Rate</h3>
                            <p className="text-slate-400 text-sm mt-1">Same percentage on all sales</p>
                            <p className="text-emerald-400 text-sm mt-1">Simple, predictable</p>
                        </div>
                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
                            <h3 className="text-white font-semibold">Tiered/Accelerator</h3>
                            <p className="text-slate-400 text-sm mt-1">Higher % at higher volumes</p>
                            <p className="text-emerald-400 text-sm mt-1">Rewards top performers</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <Link href="/commission/calculator" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                        Calculate Your Commission
                    </Link>
                </div>
            </section>

        </>
    );
}
