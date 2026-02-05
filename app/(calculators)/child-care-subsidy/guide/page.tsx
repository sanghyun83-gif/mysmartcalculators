"use client";

import Link from "next/link";
import { Calculator, Shield, Baby } from "lucide-react";
import { SITE, INCOME_LIMITS } from "@/lib/calculators/child-care-subsidy";

export default function ChildCareSubsidyGuidePage() {
    return (
        <>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-rose-500/20 border border-rose-500/50 rounded-full px-4 py-2 mb-4">
                        <Shield className="w-4 h-4 text-rose-400" />
                        <span className="text-sm text-rose-300">Income Limits</span>
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-4">2026 Child Care Subsidy Limits</h1>
                    <p className="text-slate-400">85% of State Median Income (national average)</p>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-6">2026 Income Limits</h2>
                    <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
                        <table className="w-full text-sm">
                            <thead className="bg-slate-700">
                                <tr>
                                    <th className="text-left px-4 py-3 text-white">Family Size</th>
                                    <th className="text-left px-4 py-3 text-white">Monthly Limit</th>
                                    <th className="text-left px-4 py-3 text-white">Annual Limit</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700">
                                {INCOME_LIMITS.map((item, index) => (
                                    <tr key={index} className="hover:bg-slate-700/50">
                                        <td className="px-4 py-3 text-white font-medium">{item.familySize}</td>
                                        <td className="px-4 py-3 text-slate-400">${item.monthlyLimit.toLocaleString()}</td>
                                        <td className="px-4 py-3 text-rose-400">${item.annualLimit.toLocaleString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm text-slate-500 mt-4">Actual limits vary by state. Some states set lower initial limits.</p>
                </div>
            </section>

            <section className="py-12 px-4 bg-slate-800/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-xl font-bold text-white mb-4">Eligibility Requirements</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
                            <h3 className="text-white font-semibold">Children</h3>
                            <p className="text-slate-400 text-sm mt-1">Under 13 (or disabled under 19)</p>
                        </div>
                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
                            <h3 className="text-white font-semibold">Work/School</h3>
                            <p className="text-slate-400 text-sm mt-1">20-25+ hours/week</p>
                        </div>
                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
                            <h3 className="text-white font-semibold">Copay Cap</h3>
                            <p className="text-slate-400 text-sm mt-1">Maximum 7% of income</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <Link href="/child-care-subsidy/calculator" className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                        Calculate Your Subsidy
                    </Link>
                </div>
            </section>

        </>
    );
}
