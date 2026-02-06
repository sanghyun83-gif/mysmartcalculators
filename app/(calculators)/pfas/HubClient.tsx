"use client";

import Link from "next/link";
import { SITE, CALCULATORS, EXPOSURE_TYPES, PFAS_2026, DEFENDANTS, formatCurrency } from "@/lib/calculators/pfas";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { ArrowRight, AlertTriangle, Flame, Scale } from "lucide-react";



export default function HubClient() {
    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2"><Flame className="w-6 h-6 text-amber-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></div>
                    <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>

            <div className="bg-red-900/30 border-b border-red-500/30">
                <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-400" /><span className="text-sm text-red-200">{PFAS_2026.statistics.mdlNumber} Active ??3M ${(PFAS_2026.statistics.threeM_Settlement / 1000000000).toFixed(1)}B Settlement</span>
                </div>
            </div>

            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 via-slate-900 to-orange-900/20" />
                <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
                    <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/50 rounded-full px-4 py-2 mb-6"><Scale className="w-4 h-4 text-amber-400" /><span className="text-sm text-amber-300">Legal Calculator</span></div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">PFAS Lawsuit<span className="block text-amber-400">Settlement Calculator</span></h1>
                    <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">Calculate settlements for PFAS &quot;forever chemicals&quot; exposure. Firefighters, AFFF foam, cancer claims. Average {formatCurrency(400000)} to {formatCurrency(700000)}+.</p>
                    <Link href="/pfas/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105">Calculate Settlement<ArrowRight className="w-5 h-5" /></Link>
                </div>
            </section>

            <section className="bg-slate-800/50 border-y border-slate-700">
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><p className="text-3xl font-bold text-amber-400">{formatCurrency(PFAS_2026.statistics.avgCancerSettlement)}</p><p className="text-sm text-slate-400 mt-1">Avg Cancer Settlement</p></div>
                        <div><p className="text-3xl font-bold text-red-400">{(PFAS_2026.statistics.totalClaims / 1000).toFixed(0)}K+</p><p className="text-sm text-slate-400 mt-1">MDL Claims</p></div>
                        <div><p className="text-3xl font-bold text-orange-400">{(PFAS_2026.statistics.firefighterClaims / 1000).toFixed(0)}K+</p><p className="text-sm text-slate-400 mt-1">Firefighter Claims</p></div>
                        <div><p className="text-3xl font-bold text-emerald-400">$10.3B</p><p className="text-sm text-slate-400 mt-1">3M Settlement</p></div>
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-16">
                <h2 className="text-2xl font-bold text-white mb-8 text-center">PFAS Lawsuit Tools</h2>
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
                    <h2 className="text-2xl font-bold text-white mb-8 text-center">Who Is Being Sued?</h2>
                    <div className="space-y-4">
                        {DEFENDANTS.map((def, i) => (
                            <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6 flex justify-between items-center">
                                <div><h3 className="text-white font-semibold">{def.name}</h3><p className="text-sm text-slate-400">{def.status}</p></div>
                                <span className="text-amber-400 text-sm">{def.individualClaims}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 py-16">
                <h2 className="text-2xl font-bold text-white mb-6">What is a PFAS Lawsuit?</h2>
                <div className="prose prose-invert max-w-none">
                    <p className="text-slate-300 mb-4">PFAS (per- and polyfluoroalkyl substances) lawsuits seek compensation from manufacturers of &quot;forever chemicals&quot; that have contaminated drinking water and caused cancer. Major defendants include 3M, DuPont, and firefighting foam manufacturers.</p>
                    <p className="text-slate-300 mb-4">According to {SITE.year} MDL data, over {(PFAS_2026.statistics.totalClaims / 1000).toFixed(0)},000 claims are pending in {PFAS_2026.statistics.mdlNumber}. Firefighters exposed to AFFF foam represent a significant portion, with over {(PFAS_2026.statistics.firefighterClaims / 1000).toFixed(0)},000 claims.</p>
                    <p className="text-slate-300">3M&apos;s $10.3 billion settlement addresses public water system cleanup. Individual cancer claims continue in litigation, with settlements averaging {formatCurrency(PFAS_2026.statistics.avgCancerSettlement)}.</p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 py-16 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Calculate Your PFAS Claim</h2>
                <p className="text-slate-400 mb-8">Free estimate based on {SITE.year} MDL settlement data.</p>
                <Link href="/pfas/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold">Start Free Calculator<ArrowRight className="w-5 h-5" /></Link>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="pfas" count={5} /></div></div></section>

            <footer className="bg-slate-800 border-t border-slate-700">
                <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2"><Flame className="w-5 h-5 text-amber-500" /><span className="font-semibold text-white">{SITE.name}</span></div>
                    <p className="text-sm text-slate-400">{PFAS_2026.citations[0]}</p>
                    <p className="text-sm text-slate-500">© {SITE.year}</p>
                </div>
            </footer>
        </>
    );
}
