"use client";

import Link from "next/link";
import { Calculator, Shield, FileText } from "lucide-react";
import { SITE, FORM_TYPES } from "@/lib/calculators/1099-tax";

export default function Tax1099GuidePage() {
    return (
        <>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/50 rounded-full px-4 py-2 mb-4">
                        <Shield className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm text-emerald-300">Form Guide</span>
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-4">1099 Form Types</h1>
                    <p className="text-slate-400">Understanding different 1099 forms</p>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-6">Common 1099 Forms</h2>
                    <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
                        <table className="w-full text-sm">
                            <thead className="bg-slate-700">
                                <tr>
                                    <th className="text-left px-4 py-3 text-white">Form</th>
                                    <th className="text-left px-4 py-3 text-white">Description</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700">
                                {FORM_TYPES.map((item, index) => (
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
                    <h2 className="text-xl font-bold text-white mb-4">Key 2026 Changes</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
                            <h3 className="text-white font-semibold">1099-K Threshold</h3>
                            <p className="text-slate-400 text-sm mt-1">Now $600 for payment apps</p>
                            <p className="text-amber-400 text-sm mt-1">PayPal, Venmo, Cash App</p>
                        </div>
                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
                            <h3 className="text-white font-semibold">Quarterly Due Dates</h3>
                            <p className="text-slate-400 text-sm mt-1">April, June, September, January</p>
                            <p className="text-emerald-400 text-sm mt-1">Avoid underpayment penalties</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <Link href="/1099-tax/calculator" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                        Calculate Your 1099 Tax
                    </Link>
                </div>
            </section>

        </>
    );
}
