"use client";

import Link from "next/link";
import { Calculator, Shield, Building } from "lucide-react";
import { SITE, LLC_ELECTIONS } from "@/lib/calculators/llc-tax";

export default function LLCTaxGuidePage() {
    return (
        <>
            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/50 rounded-full px-4 py-2 mb-4">
                        <Shield className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm text-emerald-300">Election Guide</span>
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-4">LLC Tax Elections</h1>
                    <p className="text-slate-400">Choose how your LLC is taxed</p>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-6">Tax Election Options</h2>
                    <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
                        <table className="w-full text-sm">
                            <thead className="bg-slate-700">
                                <tr>
                                    <th className="text-left px-4 py-3 text-white">Election</th>
                                    <th className="text-left px-4 py-3 text-white">Description</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700">
                                {LLC_ELECTIONS.map((item, index) => (
                                    <tr key={index} className="hover:bg-slate-700/50">
                                        <td className="px-4 py-3 text-white font-medium">{item.name}</td>
                                        <td className="px-4 py-3 text-slate-400">{item.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4 bg-slate-800/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-xl font-bold text-white mb-4">When to Elect S-Corp</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
                            <h3 className="text-white font-semibold">Consider S-Corp If</h3>
                            <p className="text-slate-400 text-sm mt-1">Net profit exceeds $40-50K</p>
                            <p className="text-emerald-400 text-sm mt-1">Save 5-15% on SE tax</p>
                        </div>
                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
                            <h3 className="text-white font-semibold">Stay Default If</h3>
                            <p className="text-slate-400 text-sm mt-1">Lower profits, simple structure</p>
                            <p className="text-amber-400 text-sm mt-1">Less compliance burden</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <Link href="/llc-tax/calculator" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                        Calculate Your LLC Tax
                    </Link>
                </div>
            </section>
        </>
    );
}
