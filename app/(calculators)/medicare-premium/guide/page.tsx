"use client";

import Link from "next/link";
import { Calculator, Shield, Heart } from "lucide-react";
import { SITE, IRMAA_BRACKETS } from "@/lib/calculators/medicare-premium";

export default function MedicarePremiumGuidePage() {
    return (
        <>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
                        <Shield className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-blue-300">IRMAA Guide</span>
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-4">2026 IRMAA Brackets</h1>
                    <p className="text-slate-400">Income-Related Monthly Adjustment Amounts</p>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-6">2026 IRMAA Table (Single Filers)</h2>
                    <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead className="bg-slate-700">
                                <tr>
                                    <th className="text-left px-4 py-3 text-white">Income (Single)</th>
                                    <th className="text-left px-4 py-3 text-white">Part B Premium</th>
                                    <th className="text-left px-4 py-3 text-white">Part D IRMAA</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700">
                                {IRMAA_BRACKETS.map((item, index) => (
                                    <tr key={index} className="hover:bg-slate-700/50">
                                        <td className="px-4 py-3 text-white font-medium">{item.single}</td>
                                        <td className="px-4 py-3 text-blue-400">{item.partB}</td>
                                        <td className="px-4 py-3 text-slate-400">{item.partD}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4 bg-slate-800/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-xl font-bold text-white mb-4">Reduce Your IRMAA</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
                            <h3 className="text-white font-semibold">Life-Changing Events</h3>
                            <p className="text-slate-400 text-sm mt-1">Retirement, divorce, death of spouse</p>
                            <p className="text-blue-400 text-sm mt-1">File Form SSA-44</p>
                        </div>
                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
                            <h3 className="text-white font-semibold">Manage MAGI</h3>
                            <p className="text-slate-400 text-sm mt-1">Roth conversions, QCD, timing</p>
                            <p className="text-blue-400 text-sm mt-1">Plan 2 years ahead</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <Link href="/medicare-premium/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                        Calculate Your Medicare Premium
                    </Link>
                </div>
            </section>

        </>
    );
}
