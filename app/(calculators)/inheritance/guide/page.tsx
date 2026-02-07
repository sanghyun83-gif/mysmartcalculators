"use client";

import Link from "next/link";
import { Calculator, Shield, Landmark } from "lucide-react";
import { SITE, STATE_TAXES } from "@/lib/calculators/inheritance";

export default function InheritanceGuidePage() {
    return (
        <>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/50 rounded-full px-4 py-2 mb-4">
                        <Shield className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm text-emerald-300">State Guide</span>
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-4">State Inheritance Taxes</h1>
                    <p className="text-slate-400">Only 6 states have inheritance tax</p>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-6">State Inheritance Tax Rates</h2>
                    <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
                        <table className="w-full text-sm">
                            <thead className="bg-slate-700">
                                <tr>
                                    <th className="text-left px-4 py-3 text-white">State</th>
                                    <th className="text-left px-4 py-3 text-white">Rate</th>
                                    <th className="text-left px-4 py-3 text-white">Exemptions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700">
                                {STATE_TAXES.map((item, index) => (
                                    <tr key={index} className="hover:bg-slate-700/50">
                                        <td className="px-4 py-3 text-white font-medium">{item.state}</td>
                                        <td className="px-4 py-3 text-emerald-400">{item.rate}</td>
                                        <td className="px-4 py-3 text-slate-400">{item.exemptions}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4 bg-slate-800/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-xl font-bold text-white mb-4">Federal vs State</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
                            <h3 className="text-white font-semibold">Federal Estate Tax</h3>
                            <p className="text-slate-400 text-sm mt-1">$13.61M exemption per person</p>
                            <p className="text-amber-400 text-sm mt-1">40% on estates above</p>
                        </div>
                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
                            <h3 className="text-white font-semibold">State Inheritance Tax</h3>
                            <p className="text-slate-400 text-sm mt-1">Only 6 states have it</p>
                            <p className="text-emerald-400 text-sm mt-1">Spouses always exempt</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <Link href="/inheritance/calculator" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                        Calculate Your Inheritance Tax
                    </Link>
                </div>
            </section>

        </>
    );
}
