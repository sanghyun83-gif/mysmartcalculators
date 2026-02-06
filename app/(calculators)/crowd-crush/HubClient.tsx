"use client";

import Link from "next/link";
import { SITE, CALCULATORS, INJURY_TYPES, CRUSH_2026, formatCurrency } from "@/lib/calculators/crowd-crush";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { ArrowRight, AlertTriangle, Users, Scale } from "lucide-react";



export default function HubClient() {
    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2"><Users className="w-6 h-6 text-amber-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></div>
                    <span className="text-xs text-amber-400 bg-amber-500/20 px-2 py-1 rounded border border-amber-500/30">Advanced</span>
                </div>
            </header>

            <div className="bg-red-900/30 border-b border-red-500/30">
                <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-400" /><span className="text-sm text-red-200">{CRUSH_2026.statistics.astroworld}  {CRUSH_2026.statistics.itaewon}</span>
                </div>
            </div>

            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 via-slate-900 to-slate-900" />
                <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
                    <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/50 rounded-full px-4 py-2 mb-6"><Scale className="w-4 h-4 text-amber-400" /><span className="text-sm text-amber-300">Personal Injury Calculator</span></div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Crowd Crush<span className="block text-amber-400">Settlement Calculator</span></h1>
                    <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">Calculate crowd crush injury lawsuit settlements. Stadium stampedes, festival surges, nightclub disasters.</p>
                    <Link href="/crowd-crush/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105">Calculate Settlement<ArrowRight className="w-5 h-5" /></Link>
                </div>
            </section>

            <section className="bg-slate-800/50 border-y border-slate-700">
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <div className="grid grid-cols-3 gap-6 text-center">
                        <div><p className="text-xl font-bold text-red-400">{CRUSH_2026.statistics.astroworld}</p><p className="text-sm text-slate-400 mt-1">USA Tragedy</p></div>
                        <div><p className="text-xl font-bold text-red-400">{CRUSH_2026.statistics.itaewon}</p><p className="text-sm text-slate-400 mt-1">Korea Tragedy</p></div>
                        <div><p className="text-xl font-bold text-blue-400">{CRUSH_2026.statistics.source}</p><p className="text-sm text-slate-400 mt-1">Data Source</p></div>
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-16">
                <h2 className="text-2xl font-bold text-white mb-8 text-center">Lawsuit Resources</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {CALCULATORS.map((calc) => {
                        const Icon = calc.icon;
                        return (
                            <Link key={calc.id} href={`/${calc.id}`} className="group bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-amber-500/50 transition-all">
                                <div className="flex flex-col items-center text-center">
                                    <div className="p-3 bg-amber-500/10 rounded-lg mb-4"><Icon className="w-6 h-6 text-amber-400" /></div>
                                    <h3 className="text-lg font-semibold text-white group-hover:text-amber-400">{calc.name}</h3>
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
                                <div className="text-right"><p className="text-xl font-bold text-amber-400">{formatCurrency(injury.avgSettlement)}</p><p className="text-xs text-slate-500">avg settlement</p></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 py-16">
                <h2 className="text-2xl font-bold text-white mb-6">What is Crowd Crush?</h2>
                <div className="prose prose-invert max-w-none">
                    <p className="text-slate-300 mb-4">Crowd crush (crowd collapse) occurs when density exceeds safe limits. Unlike stampedes, victims often cannot move at all - they&apos;re compressed by the crowd and cannot breathe.</p>
                    <p className="text-slate-300">Major tragedies like Astroworld (10 deaths) and Itaewon (159 deaths) have increased awareness and legal accountability for crowd safety.</p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 py-16 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Estimate Your Claim</h2>
                <p className="text-slate-400 mb-8">7 input factors based on {SITE.year} crowd science research.</p>
                <Link href="/crowd-crush/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold">Start Free Calculator<ArrowRight className="w-5 h-5" /></Link>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="crowd-crush" count={5} /></div></div></section>

            <footer className="bg-slate-800 border-t border-slate-700">
                <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2"><Users className="w-5 h-5 text-amber-500" /><span className="font-semibold text-white">{SITE.name}</span></div>
                    <p className="text-sm text-slate-400">{CRUSH_2026.citations[0]}</p>
                    <p className="text-sm text-slate-500">© {SITE.year}</p>
                </div>
            </footer>
        </>
    );
}
