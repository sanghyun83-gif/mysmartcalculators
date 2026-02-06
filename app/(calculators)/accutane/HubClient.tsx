"use client";

import Link from "next/link";
import { SITE, CALCULATORS, INJURY_TYPES, ACCUTANE_2026, formatCurrency } from "@/lib/calculators/accutane";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { ArrowRight, AlertTriangle, Heart, Scale } from "lucide-react";



export default function HubClient() {
    return (
        <>

            <div className="bg-amber-900/30 border-b border-amber-500/30">
                <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-400" /><span className="text-sm text-amber-200">{ACCUTANE_2026.statistics.status} - {ACCUTANE_2026.statistics.issue}</span>
                </div>
            </div>

            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-red-900/20" />
                <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
                    <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-2 mb-6"><Scale className="w-4 h-4 text-purple-400" /><span className="text-sm text-purple-300">Medical Calculator ??Advanced</span></div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Accutane Side Effects<span className="block text-purple-400">Lawsuit Calculator</span></h1>
                    <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">Calculate Accutane side effects lawsuit settlements. IBD, Crohn&apos;s, depression claims.</p>
                    <Link href="/accutane/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105">Calculate Settlement<ArrowRight className="w-5 h-5" /></Link>
                </div>
            </section>

            <section className="bg-slate-800/50 border-y border-slate-700">
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><p className="text-xl font-bold text-amber-400">{ACCUTANE_2026.statistics.status}</p><p className="text-sm text-slate-400 mt-1">Status</p></div>
                        <div><p className="text-xl font-bold text-emerald-400">{ACCUTANE_2026.statistics.settlements}</p><p className="text-sm text-slate-400 mt-1">Total Settlements</p></div>
                        <div><p className="text-xl font-bold text-red-400">{ACCUTANE_2026.statistics.issue}</p><p className="text-sm text-slate-400 mt-1">Main Issue</p></div>
                        <div><p className="text-xl font-bold text-purple-400">{ACCUTANE_2026.statistics.verdicts}</p><p className="text-sm text-slate-400 mt-1">Jury Verdicts</p></div>
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-16">
                <h2 className="text-2xl font-bold text-white mb-8 text-center">Accutane Lawsuit Resources</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {CALCULATORS.map((calc) => {
                        const Icon = calc.icon;
                        return (
                            <Link key={calc.id} href={`/${calc.id}`} className="group bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all">
                                <div className="flex flex-col items-center text-center">
                                    <div className="p-3 bg-purple-500/10 rounded-lg mb-4"><Icon className="w-6 h-6 text-purple-400" /></div>
                                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-400">{calc.name}</h3>
                                    <p className="text-sm text-slate-400 mt-1">{calc.description}</p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </section>

            <section className="bg-slate-800/30 border-y border-slate-700">
                <div className="max-w-4xl mx-auto px-4 py-16">
                    <h2 className="text-2xl font-bold text-white mb-8 text-center">Injury Types &amp; Compensation</h2>
                    <div className="space-y-4">
                        {INJURY_TYPES.map((injury) => (
                            <div key={injury.id} className="bg-slate-800 border border-slate-700 rounded-xl p-6 flex justify-between items-center">
                                <div><h3 className="text-white font-semibold">{injury.name}</h3><p className="text-sm text-slate-400">{injury.description}</p></div>
                                <div className="text-right"><p className="text-xl font-bold text-purple-400">{formatCurrency(injury.avgSettlement)}</p><p className="text-xs text-slate-500">projected value</p></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 py-16">
                <h2 className="text-2xl font-bold text-white mb-6">What is the Accutane Lawsuit?</h2>
                <div className="prose prose-invert max-w-none">
                    <p className="text-slate-300 mb-4">Accutane (isotretinoin) lawsuits allege that the powerful acne medication causes serious side effects including inflammatory bowel disease (IBD), depression, and birth defects.</p>
                    <p className="text-slate-300 mb-4">While the brand-name Accutane was discontinued in 2009, generic isotretinoin remains available. Lawsuits continue against manufacturers.</p>
                    <p className="text-slate-300">Patients who developed Crohn&apos;s disease, ulcerative colitis, or serious psychiatric effects may be eligible for compensation.</p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 py-16 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Estimate Your Claim</h2>
                <p className="text-slate-400 mb-8">Advanced calculator with 7 input factors based on {SITE.year} litigation data.</p>
                <Link href="/accutane/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Start Free Calculator<ArrowRight className="w-5 h-5" /></Link>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="accutane" count={5} /></div></div></section>

        </>
    );
}
