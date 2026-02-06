"use client";

import Link from "next/link";
import { SITE, CALCULATORS, COVERAGE_TYPES, COMMERCIAL_2026, formatCurrency } from "@/lib/calculators/commercial-insurance";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { ArrowRight, TrendingUp, Building2, Shield } from "lucide-react";



export default function HubClient() {
    return (
        <>

            <div className="bg-blue-900/30 border-b border-blue-500/30">
                <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-center gap-2">
                    <TrendingUp className="w-4 h-4 text-blue-400" /><span className="text-sm text-blue-200">{COMMERCIAL_2026.statistics.avgPremium}  {COMMERCIAL_2026.statistics.glCost}</span>
                </div>
            </div>

            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-900 to-slate-900" />
                <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-6"><Shield className="w-4 h-4 text-blue-400" /><span className="text-sm text-blue-300">Business Insurance Calculator</span></div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Commercial Insurance<span className="block text-blue-400">Premium Calculator</span></h1>
                    <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">Calculate commercial insurance premiums. General liability, workers comp, commercial auto, professional liability.</p>
                    <Link href="/commercial-insurance/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105">Calculate Premium<ArrowRight className="w-5 h-5" /></Link>
                </div>
            </section>

            <section className="bg-slate-800/50 border-y border-slate-700">
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <div className="grid grid-cols-3 gap-6 text-center">
                        <div><p className="text-xl font-bold text-blue-400">{COMMERCIAL_2026.statistics.avgPremium}</p><p className="text-sm text-slate-400 mt-1">Avg Premium</p></div>
                        <div><p className="text-xl font-bold text-emerald-400">{COMMERCIAL_2026.statistics.glCost}</p><p className="text-sm text-slate-400 mt-1">GL Cost</p></div>
                        <div><p className="text-xl font-bold text-purple-400">{COMMERCIAL_2026.statistics.source}</p><p className="text-sm text-slate-400 mt-1">Data Source</p></div>
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-16">
                <h2 className="text-2xl font-bold text-white mb-8 text-center">Insurance Resources</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {CALCULATORS.map((calc) => {
                        const Icon = calc.icon;
                        return (
                            <Link key={calc.id} href={`/${calc.id}`} className="group bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all">
                                <div className="flex flex-col items-center text-center">
                                    <div className="p-3 bg-blue-500/10 rounded-lg mb-4"><Icon className="w-6 h-6 text-blue-400" /></div>
                                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-400">{calc.name}</h3>
                                    <p className="text-sm text-slate-400 mt-1">{calc.description}</p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </section>

            <section className="bg-slate-800/30 border-y border-slate-700">
                <div className="max-w-4xl mx-auto px-4 py-16">
                    <h2 className="text-2xl font-bold text-white mb-8 text-center">Coverage Types &amp; Costs</h2>
                    <div className="space-y-4">
                        {COVERAGE_TYPES.map((coverage) => (
                            <div key={coverage.id} className="bg-slate-800 border border-slate-700 rounded-xl p-6 flex justify-between items-center">
                                <div><h3 className="text-white font-semibold">{coverage.name}</h3><p className="text-sm text-slate-400">{coverage.description}</p></div>
                                <div className="text-right"><p className="text-xl font-bold text-blue-400">{formatCurrency(coverage.baseRate)}/yr</p><p className="text-xs text-slate-500">base rate</p></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 py-16">
                <h2 className="text-2xl font-bold text-white mb-6">What is Commercial Insurance?</h2>
                <div className="prose prose-invert max-w-none">
                    <p className="text-slate-300 mb-4">Commercial insurance protects businesses from financial losses due to lawsuits, property damage, employee injuries, and other business risks.</p>
                    <p className="text-slate-300">Most businesses need general liability, workers compensation, and commercial property coverage at minimum.</p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 py-16 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Estimate Your Premiums</h2>
                <p className="text-slate-400 mb-8">7 input factors based on {SITE.year} NAIC data.</p>
                <Link href="/commercial-insurance/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold">Start Free Calculator<ArrowRight className="w-5 h-5" /></Link>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="commercial-insurance" count={5} /></div></div></section>

        </>
    );
}
