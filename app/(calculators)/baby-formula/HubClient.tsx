"use client";

import Link from "next/link";
import { SITE, CALCULATORS, INJURY_SEVERITY, FORMULA_2026, formatCurrency } from "@/lib/calculators/baby-formula";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { ArrowRight, AlertTriangle, Baby, Scale } from "lucide-react";



export default function HubClient() {
    return (
        <>

            <div className="bg-red-900/30 border-b border-red-500/30">
                <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-400" /><span className="text-sm text-red-200">{FORMULA_2026.statistics.mdlNumber} Active • {FORMULA_2026.statistics.pendingCases}+ Cases Pending</span>
                </div>
            </div>

            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-rose-900/20" />
                <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
                    <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-2 mb-6"><Scale className="w-4 h-4 text-purple-400" /><span className="text-sm text-purple-300">Medical Calculator</span></div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Baby Formula NEC<span className="block text-purple-400">Lawsuit Calculator</span></h1>
                    <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">Calculate NEC lawsuit settlements. Similac, Enfamil, premature infant claims. Projected settlements {formatCurrency(FORMULA_2026.statistics.avgProjectedSettlement)}+.</p>
                    <Link href="/baby-formula/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105">Calculate Settlement<ArrowRight className="w-5 h-5" /></Link>
                </div>
            </section>

            <section className="bg-slate-800/50 border-y border-slate-700">
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><p className="text-3xl font-bold text-purple-400">{FORMULA_2026.statistics.mdlNumber}</p><p className="text-sm text-slate-400 mt-1">MDL Number</p></div>
                        <div><p className="text-3xl font-bold text-red-400">{FORMULA_2026.statistics.pendingCases}+</p><p className="text-sm text-slate-400 mt-1">Pending Cases</p></div>
                        <div><p className="text-3xl font-bold text-amber-400">{formatCurrency(FORMULA_2026.statistics.avgProjectedSettlement)}</p><p className="text-sm text-slate-400 mt-1">Projected Avg</p></div>
                        <div><p className="text-3xl font-bold text-emerald-400">Active</p><p className="text-sm text-slate-400 mt-1">Litigation Status</p></div>
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-16">
                <h2 className="text-2xl font-bold text-white mb-8 text-center">NEC Lawsuit Tools</h2>
                <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
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
                    <h2 className="text-2xl font-bold text-white mb-8 text-center">NEC Injury Severity & Compensation</h2>
                    <div className="space-y-4">
                        {INJURY_SEVERITY.map((severity) => (
                            <div key={severity.id} className="bg-slate-800 border border-slate-700 rounded-xl p-6 flex justify-between items-center">
                                <div><h3 className="text-white font-semibold">{severity.name}</h3><p className="text-sm text-slate-400">{severity.description}</p></div>
                                <div className="text-right"><p className="text-xl font-bold text-purple-400">{formatCurrency(severity.avgSettlement)}</p><p className="text-xs text-slate-500">projected value</p></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 py-16">
                <h2 className="text-2xl font-bold text-white mb-6">What is Baby Formula NEC?</h2>
                <div className="prose prose-invert max-w-none">
                    <p className="text-slate-300 mb-4">Necrotizing enterocolitis (NEC) is a devastating intestinal disease affecting premature infants. Studies show that premature babies fed cow&apos;s milk-based formula are at significantly higher risk of developing NEC compared to those fed breast milk.</p>
                    <p className="text-slate-300">Lawsuits allege that manufacturers like Abbott (Similac) and Mead Johnson (Enfamil) knew about this increased risk but failed to adequately warn hospitals and parents. MDL 3026 consolidates these cases in the Northern District of Illinois.</p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 py-16 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Estimate Your NEC Claim</h2>
                <p className="text-slate-400 mb-8">Free calculator based on {SITE.year} litigation data.</p>
                <Link href="/baby-formula/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Start Free Calculator<ArrowRight className="w-5 h-5" /></Link>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="baby-formula" count={5} /></div></div></section>

        </>
    );
}
