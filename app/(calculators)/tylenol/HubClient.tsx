"use client";

import Link from "next/link";
import { SITE, CALCULATORS, DIAGNOSIS_TYPES, TYLENOL_2026, formatCurrency } from "@/lib/calculators/tylenol";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { ArrowRight, AlertTriangle, Pill, Scale } from "lucide-react";



export default function HubClient() {
    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2"><Pill className="w-6 h-6 text-purple-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></div>
                    <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>

            <div className="bg-red-900/30 border-b border-red-500/30">
                <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-400" /><span className="text-sm text-red-200">{TYLENOL_2026.statistics.mdlNumber} Active  {TYLENOL_2026.statistics.pendingCases}+ Cases Pending</span>
                </div>
            </div>

            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-red-900/20" />
                <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
                    <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-2 mb-6"><Scale className="w-4 h-4 text-purple-400" /><span className="text-sm text-purple-300">Medical Calculator</span></div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Tylenol Autism<span className="block text-purple-400">Lawsuit Calculator</span></h1>
                    <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">Calculate Tylenol autism/ADHD lawsuit settlements. Acetaminophen use during pregnancy linked to neurodevelopmental disorders.</p>
                    <Link href="/tylenol/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105">Calculate Settlement<ArrowRight className="w-5 h-5" /></Link>
                </div>
            </section>

            <section className="bg-slate-800/50 border-y border-slate-700">
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><p className="text-3xl font-bold text-purple-400">{TYLENOL_2026.statistics.mdlNumber}</p><p className="text-sm text-slate-400 mt-1">MDL Number</p></div>
                        <div><p className="text-3xl font-bold text-red-400">{TYLENOL_2026.statistics.pendingCases}+</p><p className="text-sm text-slate-400 mt-1">Pending Cases</p></div>
                        <div><p className="text-3xl font-bold text-amber-400">S.D.N.Y.</p><p className="text-sm text-slate-400 mt-1">Federal Court</p></div>
                        <div><p className="text-3xl font-bold text-emerald-400">Active</p><p className="text-sm text-slate-400 mt-1">Litigation Status</p></div>
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-16">
                <h2 className="text-2xl font-bold text-white mb-8 text-center">Tylenol Lawsuit Tools</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {CALCULATORS.map((calc) => {
                        const Icon = calc.icon;
                        return (
                            <Link key={calc.id} href={`/${calc.id}`} className="group bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-purple-500/10 rounded-lg"><Icon className="w-6 h-6 text-purple-400" /></div>
                                    <div><h3 className="text-lg font-semibold text-white group-hover:text-purple-400">{calc.name}</h3><p className="text-sm text-slate-400 mt-1">{calc.description}</p><span className="inline-flex items-center gap-1 text-purple-400 text-sm mt-3">Get Started <ArrowRight className="w-4 h-4" /></span></div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </section>

            <section className="bg-slate-800/30 border-y border-slate-700">
                <div className="max-w-4xl mx-auto px-4 py-16">
                    <h2 className="text-2xl font-bold text-white mb-8 text-center">Diagnosis Types & Potential Compensation</h2>
                    <div className="space-y-4">
                        {DIAGNOSIS_TYPES.map((diagnosis) => (
                            <div key={diagnosis.id} className="bg-slate-800 border border-slate-700 rounded-xl p-6 flex justify-between items-center">
                                <div><h3 className="text-white font-semibold">{diagnosis.name}</h3><p className="text-sm text-slate-400">{diagnosis.description}</p></div>
                                <div className="text-right"><p className="text-xl font-bold text-purple-400">{formatCurrency(diagnosis.avgSettlement)}</p><p className="text-xs text-slate-500">projected value</p></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 py-16">
                <h2 className="text-2xl font-bold text-white mb-6">What is the Tylenol Autism Lawsuit?</h2>
                <div className="prose prose-invert max-w-none">
                    <p className="text-slate-300 mb-4">The Tylenol autism lawsuit alleges that manufacturers of acetaminophen (the active ingredient in Tylenol) failed to warn pregnant women that prenatal use could increase the risk of autism spectrum disorder and ADHD in their children.</p>
                    <p className="text-slate-300 mb-4">Multiple scientific studies published in respected medical journals have found associations between acetaminophen use during pregnancy and neurodevelopmental disorders. While the debate over causation continues, thousands of families have filed lawsuits.</p>
                    <p className="text-slate-300">MDL 3043 consolidates these cases in the Southern District of New York for coordinated pretrial proceedings.</p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 py-16 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Estimate Your Claim</h2>
                <p className="text-slate-400 mb-8">Free calculator based on {SITE.year} litigation data.</p>
                <Link href="/tylenol/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Start Free Calculator<ArrowRight className="w-5 h-5" /></Link>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="tylenol" count={5} /></div></div></section>

            <footer className="bg-slate-800 border-t border-slate-700">
                <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2"><Pill className="w-5 h-5 text-purple-500" /><span className="font-semibold text-white">{SITE.name}</span></div>
                    <p className="text-sm text-slate-400">{TYLENOL_2026.citations[0]}</p>
                    <p className="text-sm text-slate-500">© {SITE.year}</p>
                </div>
            </footer>
        </>
    );
}
