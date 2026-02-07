"use client";

import Link from "next/link";
import { Heart, Calculator, Shield, DollarSign, ArrowRight } from "lucide-react";
import { SITE, STATISTICS, RELATED_CALCULATORS } from "@/lib/calculators/charitable-donation";

export default function HubClient() {
    return (
        <>

            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/50 rounded-full px-4 py-2 mb-6">
                        <Heart className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm text-emerald-300">{SITE.year} Tax Deductions</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{SITE.name}</h1>
                    <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">{SITE.description}</p>
                    <Link href="/charitable-donation/calculator" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors">
                        Calculate Donation Deduction <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

            <section className="py-12 px-4 bg-slate-800/50">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-3 gap-6">
                        {STATISTICS.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-emerald-400">{stat.value}</div>
                                <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                        <Link href="/charitable-donation/calculator" className="group bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-emerald-500/50 transition-colors">
                            <Calculator className="w-10 h-10 text-emerald-400 mb-4" />
                            <h3 className="text-lg font-semibold text-white mb-2">Deduction Calculator</h3>
                            <p className="text-sm text-slate-400">Calculate tax savings</p>
                        </Link>
                        <Link href="/charitable-donation/guide" className="group bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-emerald-500/50 transition-colors">
                            <Shield className="w-10 h-10 text-emerald-400 mb-4" />
                            <h3 className="text-lg font-semibold text-white mb-2">AGI Limits</h3>
                            <p className="text-sm text-slate-400">Deduction limits by type</p>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 bg-slate-800/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-6">What is the Charitable Donation Deduction?</h2>
                    <p className="text-slate-300 mb-4">
                        Charitable donations to qualified organizations can reduce your taxable income if you itemize deductions. Cash donations are deductible up to 60% of AGI. Appreciated assets avoid capital gains tax. QCD for those 70.5+ is the most tax-efficient way to give.
                    </p>
                </div>
            </section>

            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold text-white text-center mb-10">Related Calculators</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {RELATED_CALCULATORS.map((calc, index) => (
                            <Link key={index} href={calc.url} className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-emerald-500/50 transition-colors">
                                <DollarSign className="w-8 h-8 text-emerald-400 mb-3" />
                                <h3 className="text-lg font-semibold text-white mb-1">{calc.name}</h3>
                                <p className="text-sm text-slate-400">{calc.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

        </>
    );
}
