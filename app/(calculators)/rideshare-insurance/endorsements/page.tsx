"use client";

import Link from "next/link";
import { Calculator, FileText, DollarSign, CheckCircle } from "lucide-react";
import { SITE, INSURANCE_OPTIONS } from "@/lib/calculators/rideshare-insurance";

const ENDORSEMENT_INSURERS = [
    { name: "Allstate", product: "Ride for Hire", avgCost: "$15-$25/mo", notes: "Widely available" },
    { name: "State Farm", product: "Rideshare Driver", avgCost: "$15-$30/mo", notes: "Popular choice" },
    { name: "GEICO", product: "Rideshare Policy", avgCost: "$20-$35/mo", notes: "Varies by state" },
    { name: "Progressive", product: "TNC Gap Coverage", avgCost: "$15-$25/mo", notes: "Good rates" },
    { name: "Farmers", product: "New Economy Endorsement", avgCost: "$20-$30/mo", notes: "Comprehensive" },
    { name: "USAA", product: "Rideshare Coverage", avgCost: "$15-$20/mo", notes: "Military only" },
];

export default function RideshareInsuranceEndorsementsPage() {
    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80">
                        <Calculator className="w-6 h-6 text-blue-500" />
                        <span className="text-lg font-bold text-white">MySmartCalculators</span>
                    </Link>
                    <Link href="/rideshare-insurance" className="text-slate-400 hover:text-white text-sm"> Back to Overview</Link>
                </div>
            </header>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
                        <FileText className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-blue-300">Endorsements</span>
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-4">Rideshare Insurance Endorsements</h1>
                    <p className="text-slate-400">Compare endorsement options from major insurers</p>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-6">Available Endorsements by Insurer</h2>
                    <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-slate-700">
                                    <tr>
                                        <th className="text-left px-6 py-4 text-sm font-semibold text-white">Insurer</th>
                                        <th className="text-left px-6 py-4 text-sm font-semibold text-white">Product Name</th>
                                        <th className="text-right px-6 py-4 text-sm font-semibold text-white">Avg Cost</th>
                                        <th className="text-left px-6 py-4 text-sm font-semibold text-white">Notes</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-700">
                                    {ENDORSEMENT_INSURERS.map((insurer, index) => (
                                        <tr key={index} className="hover:bg-slate-700/50">
                                            <td className="px-6 py-4 text-white font-medium">{insurer.name}</td>
                                            <td className="px-6 py-4 text-slate-300">{insurer.product}</td>
                                            <td className="px-6 py-4 text-blue-400 text-right font-semibold">{insurer.avgCost}</td>
                                            <td className="px-6 py-4 text-slate-400">{insurer.notes}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <p className="text-sm text-slate-500 mt-4">*Rates vary by state, driving record, and other factors. Contact insurers for accurate quotes.</p>
                </div>
            </section>

            <section className="py-12 px-4 bg-slate-800/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-6">What Does an Endorsement Cover?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-green-400 mb-3">Typically Covered</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-sm text-slate-300">
                                    <CheckCircle className="w-4 h-4 text-green-400" /> Period 1 liability gap
                                </li>
                                <li className="flex items-center gap-2 text-sm text-slate-300">
                                    <CheckCircle className="w-4 h-4 text-green-400" /> Collision during app-on time
                                </li>
                                <li className="flex items-center gap-2 text-sm text-slate-300">
                                    <CheckCircle className="w-4 h-4 text-green-400" /> Comprehensive coverage
                                </li>
                                <li className="flex items-center gap-2 text-sm text-slate-300">
                                    <CheckCircle className="w-4 h-4 text-green-400" /> Medical payments
                                </li>
                            </ul>
                        </div>
                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-red-400 mb-3">May Not Be Covered</h3>
                            <ul className="space-y-2 text-sm text-slate-400">
                                <li> Higher liability limits (need upgrade)</li>
                                <li> Lost wages while car is being repaired</li>
                                <li> Commercial activities beyond rideshare</li>
                                <li> Intentional damage or racing</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <Link href="/rideshare-insurance/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors">
                        Calculate Your Premium
                    </Link>
                </div>
            </section>

            <footer className="bg-slate-800 border-t border-slate-700 py-8">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <p className="text-sm text-slate-500">© {SITE.year} MySmartCalculators. Based on 2026 insurer data.</p>
                </div>
            </footer>
        </>
    );
}
