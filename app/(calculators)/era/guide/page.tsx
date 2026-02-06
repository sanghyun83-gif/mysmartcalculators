"use client";

import Link from "next/link";
import { Calculator, Shield, CheckCircle, ArrowRight } from "lucide-react";
import { SITE, AMI_LIMITS, CITATIONS } from "@/lib/calculators/era";

export default function ERAGuidePage() {
    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80">
                        <Calculator className="w-6 h-6 text-blue-500" />
                        <span className="text-lg font-bold text-white">MySmartCalculators</span>
                    </Link>
                    <Link href="/era" className="text-slate-400 hover:text-white text-sm"> Back</Link>
                </div>
            </header>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
                        <Shield className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-blue-300">ERA Requirements</span>
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-4">ERA Rental Assistance Guide 2026</h1>
                    <p className="text-slate-400 italic">2026 Income Thresholds and Eligibility Requirements</p>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-6">Income Limits (Area Median Income)</h2>
                    <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden mb-4 shadow-xl">
                        <table className="w-full text-sm">
                            <thead className="bg-slate-700 text-slate-100 uppercase tracking-tighter">
                                <tr>
                                    <th className="text-left px-5 py-4 font-bold">Household Size</th>
                                    <th className="text-left px-5 py-4 font-bold">50% AMI (Priority)</th>
                                    <th className="text-left px-5 py-4 font-bold">80% AMI (Qualifies)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700">
                                {AMI_LIMITS.map((item, index) => (
                                    <tr key={index} className="hover:bg-slate-700/30 transition-colors">
                                        <td className="px-5 py-4 text-white font-semibold">{item.size} Person{item.size > 1 ? 's' : ''}</td>
                                        <td className="px-5 py-4 text-blue-300">${item.limit50.toLocaleString()}</td>
                                        <td className="px-5 py-4 text-blue-400 font-bold">${item.limit80.toLocaleString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-[10px] text-slate-500 text-right italic">*National Average Estimates. Actual limits vary significantly by City/County.</p>
                </div>
            </section>

            <section className="py-12 px-4 bg-slate-800/20">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-xl font-bold text-white mb-6">Required Documentation</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-slate-800 border border-slate-700 p-6 rounded-xl flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-white font-bold mb-2">Income Verification</h3>
                                <p className="text-slate-400 text-xs leading-relaxed">Copies of 2026/2026 tax returns, pay stubs, or unemployment benefit statements for all household adults.</p>
                            </div>
                        </div>
                        <div className="bg-slate-800 border border-slate-700 p-6 rounded-xl flex items-start gap-3 shadow-inner">
                            <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-white font-bold mb-2">Housing Stability</h3>
                                <p className="text-slate-400 text-xs leading-relaxed">Current signed lease agreement, utility bills in arrears, or written notice of past-due rent from your landlord.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4 shadow-sm border-y border-slate-800">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-xl font-bold text-white mb-4">Official Treasury Data</h2>
                    {CITATIONS.map((cite, index) => (
                        <div key={index} className="bg-slate-800 border border-slate-700 p-8 rounded-2xl border-l-4 border-l-blue-500">
                            <p className="text-xs text-blue-400 mb-2 uppercase tracking-widest font-bold">{cite.source}</p>
                            <h3 className="text-xl font-bold text-white mb-4 leading-tight">{cite.title} {cite.year}</h3>
                            <a href={cite.url} target="_blank" rel="noopener noreferrer" className="group text-blue-300 text-sm hover:text-white transition-colors flex items-center gap-1 font-medium italic underline underline-offset-8">
                                Official Treasury Portal <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <Link href="/era/calculator" className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-black transition-all shadow-2xl hover:scale-[1.02]">
                        Calculate Your Eligibility <Calculator className="w-5 h-5" />
                    </Link>
                </div>
            </section>

            <footer className="bg-slate-800 border-t border-slate-700 py-6">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-medium">© {SITE.year} MySmartCalculators | Treasury Department Program Data</p>
                </div>
            </footer>
        </>
    );
}
