"use client";

import Link from "next/link";
import { Calculator, Shield, Apple } from "lucide-react";
import { SITE, BENEFIT_AMOUNTS } from "@/lib/calculators/food-stamps";

export default function FoodStampsGuidePage() {
    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80">
                        <Calculator className="w-6 h-6 text-blue-500" />
                        <span className="text-lg font-bold text-white">MySmartCalculators</span>
                    </Link>
                    <Link href="/food-stamps" className="text-slate-400 hover:text-white text-sm"> Back</Link>
                </div>
            </header>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
                        <Shield className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-blue-300">Income Limits</span>
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-4">2026 Food Stamps Benefits & Limits</h1>
                    <p className="text-slate-400">Maximum benefits and income limits by household size</p>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-6">2026 Food Stamps Table</h2>
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
                                {BENEFIT_AMOUNTS.map((item, index) => (
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
                    <h2 className="text-xl font-bold text-white mb-4">Benefit Formula</h2>
                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                        <p className="text-white font-mono text-lg mb-4">Benefit = Max Benefit - (30% × Net Income)</p>
                        <div className="space-y-2 text-sm text-slate-400">
                            <p> <span className="text-white">Net Income</span> = Gross - 20% earned income - $198 standard deduction</p>
                            <p> Additional deductions for shelter, childcare, medical (elderly/disabled)</p>
                            <p> Minimum benefit for 1-2 person households: $23/month</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <Link href="/food-stamps/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                        Calculate Your Food Stamps
                    </Link>
                </div>
            </section>

            <footer className="bg-slate-800 border-t border-slate-700 py-6">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <p className="text-xs text-slate-500">© {SITE.year} MySmartCalculators. Based on USDA 2026 guidelines.</p>
                </div>
            </footer>
        </>
    );
}
