"use client";

import Link from "next/link";
import { SITE, CALCULATORS, INJURY_TYPES, GRAFT_2026, formatCurrency } from "@/lib/calculators/bone-graft";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { ArrowRight, AlertTriangle, Heart, Scale } from "lucide-react";



export default function HubClient() {
    return (
        <>

            <div className="bg-amber-900/30 border-b border-amber-500/30">
                <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-400" /><span className="text-sm text-amber-200">{GRAFT_2026.statistics.recalls} - {GRAFT_2026.statistics.procedures}</span>
                </div>
            </div>

            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-red-900/20" />
                <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
                    <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-2 mb-6"><Scale className="w-4 h-4 text-purple-400" /><span className="text-sm text-purple-300">Medical Calculator</span></div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Bone Graft<span className="block text-purple-400">Lawsuit Calculator</span></h1>
                    <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">Calculate bone graft lawsuit settlements. Allograft contamination, BMP complications claims.</p>
                    <Link href="/bone-graft/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105">Calculate Settlement<ArrowRight className="w-5 h-5" /></Link>
                </div>
            </section>

            <section className="bg-slate-800/50 border-y border-slate-700">
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><p className="text-xl font-bold text-amber-400">{GRAFT_2026.statistics.status}</p><p className="text-sm text-slate-400 mt-1">Status</p></div>
                        <div><p className="text-xl font-bold text-red-400">{GRAFT_2026.statistics.issue}</p><p className="text-sm text-slate-400 mt-1">Main Issue</p></div>
                        <div><p className="text-xl font-bold text-purple-400">{GRAFT_2026.statistics.recalls}</p><p className="text-sm text-slate-400 mt-1">Recalls</p></div>
                        <div><p className="text-xl font-bold text-emerald-400">{GRAFT_2026.statistics.procedures}</p><p className="text-sm text-slate-400 mt-1">Annual Procedures</p></div>
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-16">
                <h2 className="text-2xl font-bold text-white mb-8 text-center">Bone Graft Tools</h2>
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
                <h2 className="text-2xl font-bold text-white mb-6">What is a Bone Graft Lawsuit?</h2>
                <div className="prose prose-invert max-w-none">
                    <p className="text-slate-300 mb-4">Bone graft lawsuits allege that bone graft materials were contaminated, defective, or caused serious complications like infections and failed fusions.</p>
                    <p className="text-slate-300">With over 500,000 bone graft procedures annually, contaminated allografts and problematic synthetic grafts have affected thousands of patients.</p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 py-16 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Estimate Your Claim</h2>
                <p className="text-slate-400 mb-8">Free calculator based on {SITE.year} litigation data.</p>
                <Link href="/bone-graft/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Start Free Calculator<ArrowRight className="w-5 h-5" /></Link>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="bone-graft" count={5} /></div></div></section>

        </>
    );
}
