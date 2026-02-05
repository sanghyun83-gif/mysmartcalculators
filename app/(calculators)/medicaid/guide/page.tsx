"use client";

import Link from "next/link";
import { Calculator, Shield, Users } from "lucide-react";
import { SITE, FPL_GUIDELINES } from "@/lib/calculators/medicaid";

export default function MedicaidGuidePage() {
    return (
        <>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
                        <Shield className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-blue-300">Income Limits</span>
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-4">2026 Medicaid Income Limits</h1>
                    <p className="text-slate-400">Federal Poverty Level guidelines by household size</p>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-6">2026 Income Limits (Expansion States)</h2>
                    <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
                        <table className="w-full text-sm">
                            <thead className="bg-slate-700">
                                <tr>
                                    <th className="text-left px-4 py-3 text-white">Household Size</th>
                                    <th className="text-left px-4 py-3 text-white">100% FPL</th>
                                    <th className="text-left px-4 py-3 text-white">138% FPL (Limit)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700">
                                {FPL_GUIDELINES.map((item, index) => (
                                    <tr key={index} className="hover:bg-slate-700/50">
                                        <td className="px-4 py-3 text-white font-medium">{item.householdSize}</td>
                                        <td className="px-4 py-3 text-slate-400">${item.fpl100.toLocaleString()}</td>
                                        <td className="px-4 py-3 text-blue-400">${item.fpl138.toLocaleString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4 bg-slate-800/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-xl font-bold text-white mb-4">Expansion vs Non-Expansion</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
                            <h3 className="text-white font-semibold">40 Expansion States</h3>
                            <p className="text-slate-400 text-sm mt-1">Adults up to 138% FPL qualify</p>
                            <p className="text-blue-400 text-sm mt-1">No coverage gap</p>
                        </div>
                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
                            <h3 className="text-white font-semibold">10 Non-Expansion States</h3>
                            <p className="text-slate-400 text-sm mt-1">Stricter categorical limits</p>
                            <p className="text-amber-400 text-sm mt-1">Coverage gap exists</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <Link href="/medicaid/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                        Check Your Eligibility
                    </Link>
                </div>
            </section>

        </>
    );
}
