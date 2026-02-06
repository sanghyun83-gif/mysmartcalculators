"use client";

import Link from "next/link";
import { SITE, CALCULATORS, INJURY_TYPES, EBIKE_2026, formatCurrency } from "@/lib/calculators/e-bike";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { ArrowRight, AlertTriangle, Bike, Scale } from "lucide-react";



export default function HubClient() {
    return (
        <>


            <div className="bg-amber-900/30 border-b border-amber-500/30">
                <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-400" /><span className="text-sm text-amber-200">{EBIKE_2026.statistics.injuries}  {EBIKE_2026.statistics.source}</span>
                </div>
            </div>

            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 via-slate-900 to-slate-900" />
                <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
                    <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/50 rounded-full px-4 py-2 mb-6"><Scale className="w-4 h-4 text-amber-400" /><span className="text-sm text-amber-300">Personal Injury Calculator</span></div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">E-Bike Accident<span className="block text-amber-400">Settlement Calculator</span></h1>
                    <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">Calculate e-bike accident lawsuit settlements. Class 1/2/3 e-bikes, battery fires, vehicle collision claims.</p>
                    <Link href="/e-bike/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105">Calculate Settlement<ArrowRight className="w-5 h-5" /></Link>
                </div>
            </section>

            <section className="bg-slate-800/50 border-y border-slate-700">
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <div className="grid grid-cols-3 gap-6 text-center">
                        <div><p className="text-xl font-bold text-amber-400">{EBIKE_2026.statistics.injuries}</p><p className="text-sm text-slate-400 mt-1">Annual ER Visits</p></div>
                        <div><p className="text-xl font-bold text-red-400">{EBIKE_2026.statistics.deaths}</p><p className="text-sm text-slate-400 mt-1">Annual Deaths</p></div>
                        <div><p className="text-xl font-bold text-blue-400">{EBIKE_2026.statistics.source}</p><p className="text-sm text-slate-400 mt-1">Data Source</p></div>
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-16">
                <h2 className="text-2xl font-bold text-white mb-8 text-center">Lawsuit Resources</h2>
                <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
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
                <h2 className="text-2xl font-bold text-white mb-6">What is an E-Bike Accident Lawsuit?</h2>
                <div className="prose prose-invert max-w-none">
                    <p className="text-slate-300 mb-4">E-bike accident lawsuits seek compensation for injuries caused by defective e-bikes, negligent drivers, or dangerous road conditions.</p>
                    <p className="text-slate-300">E-bikes can reach speeds of 20-28 mph and are heavier than traditional bikes, resulting in more severe injuries in accidents.</p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 py-16 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Estimate Your Claim</h2>
                <p className="text-slate-400 mb-8">5 input factors based on {SITE.year} CPSC data.</p>
                <Link href="/e-bike/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold">Start Free Calculator<ArrowRight className="w-5 h-5" /></Link>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="e-bike" count={5} /></div></div></section>


        </>
    );
}
