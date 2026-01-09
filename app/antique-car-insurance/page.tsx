"use client";

import Link from "next/link";
import { Car, Calculator, Shield, DollarSign, ArrowRight } from "lucide-react";
import { SITE, STATISTICS, RELATED_CALCULATORS } from "@/lib/calculators/antique-car-insurance";

export default function AntiqueCarInsurancePage() {
    return (
        <div className="min-h-screen bg-slate-900 font-sans">
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                        <Calculator className="w-6 h-6 text-blue-500" />
                        <span className="text-lg font-bold text-white tracking-tight">MySmartCalculators</span>
                    </Link>
                    <Link href="/antique-car-insurance/calculator" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-blue-500/20">
                        Get Estimate
                    </Link>
                </div>
            </header>

            <main>
                <section className="py-20 px-4 relative overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none" />
                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-8">
                            <Car className="w-4 h-4 text-blue-400" />
                            <span className="text-sm font-medium text-blue-300 uppercase tracking-widest">{SITE.year} Specialist Coverage</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight leading-tight">
                            {SITE.name}
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                            {SITE.description}
                        </p>
                        <Link href="/antique-car-insurance/calculator" className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all transform hover:scale-105 shadow-xl shadow-blue-600/25">
                            Calculate Your Premium <ArrowRight className="w-6 h-6" />
                        </Link>
                    </div>
                </section>

                <section className="py-16 px-4 bg-slate-800/40 border-y border-slate-700/50">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {STATISTICS.map((stat, index) => (
                                <div key={index} className="text-center group">
                                    <div className="text-4xl md:text-5xl font-black text-blue-400 group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                                    <div className="text-lg font-bold text-white mt-3 uppercase tracking-wider">{stat.label}</div>
                                    <div className="text-sm text-slate-500 mt-2">{stat.description}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24 px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <Link href="/antique-car-insurance/calculator" className="group bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-blue-500/50 rounded-3xl p-10 transition-all shadow-lg hover:shadow-blue-500/10">
                                <div className="bg-blue-600/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600/20 transition-colors">
                                    <Calculator className="w-10 h-10 text-blue-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Instant Estimator</h3>
                                <p className="text-slate-400 leading-relaxed">Calculate specialized premiums based on age, value, and usage requirements.</p>
                            </Link>
                            <Link href="/antique-car-insurance/guide" className="group bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-blue-500/50 rounded-3xl p-10 transition-all shadow-lg hover:shadow-blue-500/10">
                                <div className="bg-blue-600/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600/20 transition-colors">
                                    <Shield className="w-10 h-10 text-blue-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Coverage Guide</h3>
                                <p className="text-slate-400 leading-relaxed">Learn about the strict qualification rules for Brass and Pre-War antiques.</p>
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="py-24 px-4 bg-slate-800/20">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-blue-600 pl-6">Understanding Antique Car Insurance</h2>
                        <div className="prose prose-invert max-w-none text-slate-300 space-y-6">
                            <p>
                                Antique car insurance isn't just a gimmick—it's a critical financial tool for preserving automotive history. Standard auto policies treat every car as a depreciating asset. For a 1928 Ford Model A, this is disastrous.
                            </p>
                            <p>
                                Specialist policies focus on <strong>Agreed Value</strong>. This means if your vehicle is 25+ years old and meets the storage requirements, you lock in a payout amount that reflects its collector value, not its scrap metal price.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-24 px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-white text-center mb-16 uppercase tracking-widest">Related Calculators</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {RELATED_CALCULATORS.map((calc, index) => (
                                <Link key={index} href={calc.url} className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all transform hover:-translate-y-2 shadow-sm">
                                    <DollarSign className="w-10 h-10 text-blue-400 mb-6" />
                                    <h3 className="text-xl font-bold text-white mb-3">{calc.name}</h3>
                                    <p className="text-sm text-slate-400 leading-relaxed">{calc.description}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-slate-900 border-t border-slate-800 py-12 px-4">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-2">
                        <Calculator className="w-5 h-5 text-blue-500" />
                        <span className="text-slate-200 font-bold tracking-tight">MySmartCalculators</span>
                    </div>
                    <div className="text-slate-500 text-sm">
                        © {SITE.year} MySmartCalculators • Based on Hagerty 2026 data standards.
                    </div>
                </div>
            </footer>
        </div>
    );
}
