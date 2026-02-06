"use client";

import Link from "next/link";
import { SITE, CALCULATORS, INJURY_TYPES, BREAST_IMPLANT_2026, formatCurrency } from "@/lib/calculators/breast-implant";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { ArrowRight, AlertTriangle, Heart, Scale } from "lucide-react";



export default function HubClient() {
    return (
        <>

            <div className="bg-red-900/30 border-b border-red-500/30">
                <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-400" /><span className="text-sm text-red-200">Allergan Recall: {BREAST_IMPLANT_2026.statistics.allerganRecall} ??{BREAST_IMPLANT_2026.statistics.biaAlclCases} BIA-ALCL Cases</span>
                </div>
            </div>

            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-rose-900/20" />
                <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
                    <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-2 mb-6"><Scale className="w-4 h-4 text-purple-400" /><span className="text-sm text-purple-300">Advanced Calculator ??{BREAST_IMPLANT_2026.statistics.status}</span></div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Breast Implant Illness<span className="block text-purple-400">Lawsuit Calculator</span></h1>
                    <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">Calculate BII & BIA-ALCL lawsuit settlements. Allergan recall, textured implant complications, lymphoma claims.</p>
                    <Link href="/breast-implant/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105">Calculate Settlement<ArrowRight className="w-5 h-5" /></Link>
                </div>
            </section>

            <section className="bg-slate-800/50 border-y border-slate-700">
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><p className="text-3xl font-bold text-red-400">{BREAST_IMPLANT_2026.statistics.biaAlclCases}</p><p className="text-sm text-slate-400 mt-1">ALCL Cases</p></div>
                        <div><p className="text-3xl font-bold text-purple-400">{BREAST_IMPLANT_2026.statistics.deaths}</p><p className="text-sm text-slate-400 mt-1">Deaths</p></div>
                        <div><p className="text-3xl font-bold text-amber-400">{BREAST_IMPLANT_2026.statistics.allerganRecall}</p><p className="text-sm text-slate-400 mt-1">Recall Date</p></div>
                        <div><p className="text-3xl font-bold text-emerald-400">Active</p><p className="text-sm text-slate-400 mt-1">MDL 2921</p></div>
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-16">
                <h2 className="text-2xl font-bold text-white mb-8 text-center">Breast Implant Tools</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {CALCULATORS.map((calc) => {
                        const Icon = calc.icon;
                        return (
                            <Link key={calc.id} href={`/${calc.id}`} className="group bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all">
                                <div className="flex flex-col items-center text-center">
                                    <div className="p-3 bg-purple-500/10 rounded-lg mb-4"><Icon className="w-6 h-6 text-purple-400" /></div>
                                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-400">{calc.name}</h3>
                                    <p className="text-sm text-slate-400 mt-1">{calc.description}</p>
                                    <span className="inline-flex items-center gap-1 text-purple-400 text-sm mt-3">Open <ArrowRight className="w-4 h-4" /></span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </section>

            <section className="bg-slate-800/30 border-y border-slate-700">
                <div className="max-w-4xl mx-auto px-4 py-16">
                    <h2 className="text-2xl font-bold text-white mb-8 text-center">Injury Types & Compensation</h2>
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
                <h2 className="text-2xl font-bold text-white mb-6">What is Breast Implant Illness?</h2>
                <div className="prose prose-invert max-w-none">
                    <p className="text-slate-300 mb-4">Breast Implant Illness (BII) refers to systemic symptoms that some women experience after breast implant surgery. Symptoms include chronic fatigue, joint pain, brain fog, and autoimmune-like issues. The FDA acknowledges these reports.</p>
                    <p className="text-slate-300 mb-4">More serious is BIA-ALCL (Breast Implant-Associated Anaplastic Large Cell Lymphoma), a rare cancer linked to textured implants. Over 1,100 cases and 60+ deaths have been reported worldwide.</p>
                    <p className="text-slate-300">In July 2019, Allergan recalled all BIOCELL textured breast implants after FDA request due to BIA-ALCL risk. MDL 2921 consolidates federal lawsuits against breast implant manufacturers.</p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 py-16 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Estimate Your Claim</h2>
                <p className="text-slate-400 mb-8">Advanced calculator with 7 input fields.</p>
                <Link href="/breast-implant/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Start Free Calculator<ArrowRight className="w-5 h-5" /></Link>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="breast-implant" count={5} /></div></div></section>

        </>
    );
}
