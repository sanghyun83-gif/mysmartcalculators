"use client";

import Link from "next/link";
import { Calculator, Info, CheckCircle, AlertTriangle, ArrowRight } from "lucide-react";
import { SITE, BENEFIT_LIMITS, CITATIONS } from "@/lib/calculators/ssi";

export default function SSIGuidePage() {
    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80">
                        <Calculator className="w-6 h-6 text-blue-500" />
                        <span className="text-lg font-bold text-white">MySmartCalculators</span>
                    </Link>
                    <Link href="/ssi" className="text-slate-400 hover:text-white text-sm">← Back</Link>
                </div>
            </header>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
                        <Info className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-blue-300">Program Guide</span>
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-4">SSI Eligibility & Payment Guide 2026</h1>
                    <p className="text-slate-400">Everything you need to know about Supplemental Security Income benefits.</p>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-6">2026 Income & Asset Limits</h2>
                    <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden mb-8 shadow-lg">
                        <table className="w-full text-sm">
                            <thead className="bg-slate-700">
                                <tr>
                                    <th className="text-left px-4 py-4 text-white uppercase tracking-wider font-semibold">Requirement</th>
                                    <th className="text-left px-4 py-4 text-white uppercase tracking-wider font-semibold">Individual</th>
                                    <th className="text-left px-4 py-4 text-white uppercase tracking-wider font-semibold">Married Couple</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700">
                                <tr className="hover:bg-slate-700/50 transition-colors">
                                    <td className="px-4 py-4 text-white font-medium">Max Monthly Benefit</td>
                                    <td className="px-4 py-4 text-blue-400 font-bold">${BENEFIT_LIMITS.individual}</td>
                                    <td className="px-4 py-4 text-blue-400 font-bold">${BENEFIT_LIMITS.couple}</td>
                                </tr>
                                <tr className="hover:bg-slate-700/50 transition-colors">
                                    <td className="px-4 py-4 text-white font-medium">Countable Asset Limit</td>
                                    <td className="px-4 py-4 text-slate-300 font-semibold">${BENEFIT_LIMITS.assetLimitIndividual.toLocaleString()}</td>
                                    <td className="px-4 py-4 text-slate-300 font-semibold">${BENEFIT_LIMITS.assetLimitCouple.toLocaleString()}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2 text-sm">
                                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                Included Resources
                            </h3>
                            <ul className="space-y-2 text-slate-400 text-[13px]">
                                <li>• Cash and bank account balances</li>
                                <li>• Stocks, bonds, and mutual funds</li>
                                <li>• Land (other than where you live)</li>
                                <li>• Life insurance (face value over $1,500)</li>
                                <li>• Anything you own that can be turned into cash</li>
                            </ul>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 shadow-sm">
                            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2 text-sm">
                                <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0" />
                                Excluded Resources
                            </h3>
                            <ul className="space-y-2 text-slate-400 text-[13px]">
                                <li>• The home you live in and the land it occupies</li>
                                <li>• One vehicle (regardless of value)</li>
                                <li>• Burial plots and small burial funds</li>
                                <li>• Household goods and personal effects</li>
                                <li>• Property essential to self-support</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4 bg-slate-800/30 shadow-inner">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-xl font-bold text-white mb-4">Official Sources</h2>
                    {CITATIONS.map((cite, index) => (
                        <div key={index} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <p className="text-sm text-slate-400 mb-2">{cite.source} ({cite.year})</p>
                            <h3 className="text-lg font-bold text-blue-400 mb-4">{cite.title}</h3>
                            <a href={cite.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-blue-300 hover:text-blue-100 transition-colors underline decoration-blue-500/50 underline-offset-4">
                                View Official SSA Guidelines <ArrowRight className="w-3 h-3" />
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl font-bold text-white mb-6">Estimate Your Monthly Payment Today</h2>
                    <Link href="/ssi/calculator" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-blue-900/40">
                        Open SSI Calculator
                    </Link>
                </div>
            </section>

            <footer className="bg-slate-800 border-t border-slate-700 py-6">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <p className="text-xs text-slate-500">© {SITE.year} MySmartCalculators. Reliable Social Security data for 2026.</p>
                </div>
            </footer>
        </>
    );
}
