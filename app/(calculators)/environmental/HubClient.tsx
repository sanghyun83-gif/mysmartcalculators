"use client";

import Link from "next/link";
import { SITE, CALCULATORS, POLLUTION_TYPES, ENVIRONMENTAL_2026, VIOLATION_TYPES, formatCurrency } from "@/lib/calculators/environmental";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { ArrowRight, AlertTriangle, Scale, TreePine } from "lucide-react";



export default function HubClient() {
    return (
        <>




            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 via-slate-900 to-emerald-900/20" />
                <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
                    <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/50 rounded-full px-4 py-2 mb-6"><Scale className="w-4 h-4 text-amber-400" /><span className="text-sm text-amber-300">Environmental Law</span></div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Environmental<span className="block text-amber-400">Lawsuit Calculator</span></h1>
                    <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">Calculate settlements for pollution and environmental damage claims. Property contamination, air quality, water pollution. Average claims {formatCurrency(200000)} to {formatCurrency(600000)}+.</p>
                    <Link href="/environmental/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105">Calculate Settlement<ArrowRight className="w-5 h-5" /></Link>
                </div>
            </section>

            <section className="bg-slate-800/50 border-y border-slate-700">
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><p className="text-3xl font-bold text-amber-400">{formatCurrency(ENVIRONMENTAL_2026.statistics.avgSettlement)}</p><p className="text-sm text-slate-400 mt-1">Avg Settlement</p></div>
                        <div><p className="text-3xl font-bold text-rose-400">{ENVIRONMENTAL_2026.statistics.superfundSites}</p><p className="text-sm text-slate-400 mt-1">Superfund Sites</p></div>
                        <div><p className="text-3xl font-bold text-emerald-400">{(ENVIRONMENTAL_2026.statistics.cleanWaterViolations / 1000).toFixed(0)}K+</p><p className="text-sm text-slate-400 mt-1">CWA Violations</p></div>
                        <div><p className="text-3xl font-bold text-purple-400">{(ENVIRONMENTAL_2026.statistics.annualFilings / 1000).toFixed(1)}K</p><p className="text-sm text-slate-400 mt-1">Annual Filings</p></div>
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-16">
                <h2 className="text-2xl font-bold text-white mb-8 text-center">Environmental Law Tools</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {CALCULATORS.map((calc) => {
                        const Icon = calc.icon;
                        return (
                            <Link key={calc.id} href={`/${calc.id}`} className="group bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-amber-500/50 transition-all">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-amber-500/10 rounded-lg"><Icon className="w-6 h-6 text-amber-400" /></div>
                                    <div><h3 className="text-lg font-semibold text-white group-hover:text-amber-400">{calc.name}</h3><p className="text-sm text-slate-400 mt-1">{calc.description}</p><span className="inline-flex items-center gap-1 text-amber-400 text-sm mt-3">Get Started <ArrowRight className="w-4 h-4" /></span></div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </section>

            <section className="bg-slate-800/30 border-y border-slate-700">
                <div className="max-w-4xl mx-auto px-4 py-16">
                    <h2 className="text-2xl font-bold text-white mb-8 text-center">Pollution Types & Settlements</h2>
                    <div className="space-y-4">
                        {POLLUTION_TYPES.map((type) => (
                            <div key={type.id} className="bg-slate-800 border border-slate-700 rounded-xl p-6 flex justify-between items-center">
                                <div><h3 className="text-white font-semibold">{type.name}</h3><p className="text-sm text-slate-400">{type.description}</p></div>
                                <div className="text-right"><p className="text-xl font-bold text-amber-400">{formatCurrency(type.avgSettlement)}</p><p className="text-xs text-slate-500">avg settlement</p></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 py-16">
                <h2 className="text-2xl font-bold text-white mb-6">What is an Environmental Lawsuit?</h2>
                <div className="prose prose-invert max-w-none">
                    <p className="text-slate-300 mb-4">An environmental lawsuit seeks compensation for harm caused by pollution, contamination, or environmental violations. Unlike personal injury claims, environmental suits often focus on property damage, community impact, and forcing cleanup of contaminated sites.</p>
                    <p className="text-slate-300 mb-4">Federal laws like the Clean Air Act, Clean Water Act, and CERCLA (Superfund) create strict liability for polluters. According to EPA {SITE.year} data, over ${(ENVIRONMENTAL_2026.statistics.epaPenalties / 1000000000).toFixed(1)} billion in penalties were assessed, with {ENVIRONMENTAL_2026.statistics.superfundSites} active Superfund sites nationwide.</p>
                    <p className="text-slate-300">Environmental claims can include diminished property value, remediation costs, relocation expenses, business losses, and health effects from pollution exposure. Our calculator estimates your potential recovery.</p>
                </div>
            </section>

            <section className="bg-slate-800/30 border-y border-slate-700">
                <div className="max-w-4xl mx-auto px-4 py-16">
                    <h2 className="text-2xl font-bold text-white mb-6">Key Environmental Laws</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {VIOLATION_TYPES.map((v) => (
                            <div key={v.id} className="bg-slate-800 border border-slate-700 rounded-xl p-5">
                                <h3 className="text-amber-400 font-semibold">{v.name}</h3>
                                <p className="text-sm text-slate-400 mt-1">{v.statute}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 py-16 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Calculate Your Environmental Claim</h2>
                <p className="text-slate-400 mb-8">Free estimate based on {SITE.year} EPA data. Property damage, pollution, contamination claims.</p>
                <Link href="/environmental/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold">Start Free Calculator<ArrowRight className="w-5 h-5" /></Link>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="environmental" count={5} /></div></div></section>


        </>
    );
}
