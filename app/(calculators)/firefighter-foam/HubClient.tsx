"use client";

import Link from "next/link";
import { SITE, CALCULATORS, CANCER_TYPES, AFFF_2026, formatCurrency } from "@/lib/calculators/firefighter-foam";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { ArrowRight, AlertTriangle, Flame, Scale } from "lucide-react";



export default function HubClient() {
    return (
        <>




            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 via-slate-900 to-orange-900/20" />
                <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
                    <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/50 rounded-full px-4 py-2 mb-6"><Scale className="w-4 h-4 text-amber-400" /><span className="text-sm text-amber-300">Legal Calculator</span></div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Firefighter Foam<span className="block text-amber-400">AFFF Lawsuit Calculator</span></h1>
                    <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">Calculate AFFF firefighting foam lawsuit settlements. PFAS forever chemicals, firefighter cancer claims. MDL 2873.</p>
                    <Link href="/firefighter-foam/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105">Calculate Settlement<ArrowRight className="w-5 h-5" /></Link>
                </div>
            </section>

            <section className="bg-slate-800/50 border-y border-slate-700">
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><p className="text-3xl font-bold text-amber-400">{AFFF_2026.statistics.mdlNumber}</p><p className="text-sm text-slate-400 mt-1">MDL Number</p></div>
                        <div><p className="text-3xl font-bold text-red-400">{(AFFF_2026.statistics.pendingCases / 1000).toFixed(0)}K+</p><p className="text-sm text-slate-400 mt-1">Pending Cases</p></div>
                        <div><p className="text-3xl font-bold text-emerald-400">$12.5B+</p><p className="text-sm text-slate-400 mt-1">Water Settlement</p></div>
                        <div><p className="text-3xl font-bold text-purple-400">{formatCurrency(AFFF_2026.statistics.avgProjectedSettlement)}</p><p className="text-sm text-slate-400 mt-1">Avg Projected</p></div>
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-16">
                <h2 className="text-2xl font-bold text-white mb-8 text-center">AFFF Lawsuit Tools</h2>
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
                    <h2 className="text-2xl font-bold text-white mb-8 text-center">PFAS-Linked Cancers & Compensation</h2>
                    <div className="space-y-4">
                        {CANCER_TYPES.slice(0, 4).map((cancer) => (
                            <div key={cancer.id} className="bg-slate-800 border border-slate-700 rounded-xl p-6 flex justify-between items-center">
                                <div><h3 className="text-white font-semibold">{cancer.name}</h3><p className="text-sm text-slate-400">{cancer.description}</p></div>
                                <div className="text-right"><p className="text-xl font-bold text-amber-400">{formatCurrency(cancer.avgSettlement)}</p><p className="text-xs text-slate-500">projected value</p></div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 text-center"><Link href="/firefighter-foam/cancers" className="text-amber-400 hover:underline">View all PFAS-linked cancers/Link></div>
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 py-16">
                <h2 className="text-2xl font-bold text-white mb-6">What is AFFF Firefighting Foam?</h2>
                <div className="prose prose-invert max-w-none">
                    <p className="text-slate-300 mb-4">AFFF (Aqueous Film-Forming Foam) is firefighting foam used to suppress jet fuel and flammable liquid fires. It contains PFAS &quot;forever chemicals&quot; that don&apos;t break down in the environment or human body.</p>
                    <p className="text-slate-300 mb-4">Firefighters, military personnel, and airport workers exposed to AFFF have elevated cancer rates. MDL 2873 consolidates lawsuits against manufacturers including 3M, DuPont, and Tyco.</p>
                    <p className="text-slate-300">The water contamination portion alone has resulted in $12.5+ billion in settlements. Individual cancer claims are now being litigated.</p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 py-16 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Estimate Your Claim</h2>
                <p className="text-slate-400 mb-8">Free calculator based on {SITE.year} MDL 2873 data.</p>
                <Link href="/firefighter-foam/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold">Start Free Calculator<ArrowRight className="w-5 h-5" /></Link>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="firefighter-foam" count={5} /></div></div></section>


        </>
    );
}
