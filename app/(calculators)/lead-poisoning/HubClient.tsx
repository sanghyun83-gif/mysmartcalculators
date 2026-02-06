"use client";

import Link from "next/link";
import { SITE, CALCULATORS, EXPOSURE_SOURCES, LEAD_POISONING_2026, formatCurrency } from "@/lib/calculators/lead-poisoning";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { ArrowRight, AlertTriangle, Heart, Droplets } from "lucide-react";



export default function HubClient() {
    return (
        <>

            <div className="bg-red-900/30 border-b border-red-500/30">
                <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-400" /><span className="text-sm text-red-200">{(LEAD_POISONING_2026.statistics.childrenAffected / 1000).toFixed(0)}K+ Children Affected  {(LEAD_POISONING_2026.statistics.leadPipeHomes / 1000000).toFixed(0)}M Homes with Lead Pipes</span>
                </div>
            </div>

            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-red-900/20" />
                <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
                    <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-2 mb-6"><Heart className="w-4 h-4 text-purple-400" /><span className="text-sm text-purple-300">Medical Calculator</span></div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Lead Poisoning<span className="block text-purple-400">Settlement Calculator</span></h1>
                    <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">Calculate compensation for lead exposure. Lead paint, contaminated water, occupational exposure. Average settlements {formatCurrency(200000)} to {formatCurrency(500000)}+.</p>
                    <Link href="/lead-poisoning/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105">Calculate Settlement<ArrowRight className="w-5 h-5" /></Link>
                </div>
            </section>

            <section className="bg-slate-800/50 border-y border-slate-700">
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><p className="text-3xl font-bold text-purple-400">{formatCurrency(LEAD_POISONING_2026.statistics.avgSettlement)}</p><p className="text-sm text-slate-400 mt-1">Avg Settlement</p></div>
                        <div><p className="text-3xl font-bold text-red-400">{(LEAD_POISONING_2026.statistics.childrenAffected / 1000).toFixed(0)}K+</p><p className="text-sm text-slate-400 mt-1">Children Affected</p></div>
                        <div><p className="text-3xl font-bold text-amber-400">{LEAD_POISONING_2026.statistics.safeBloodLevel} µg/dL</p><p className="text-sm text-slate-400 mt-1">Safe Blood Level</p></div>
                        <div><p className="text-3xl font-bold text-emerald-400">{(LEAD_POISONING_2026.statistics.annualFilings / 1000).toFixed(1)}K</p><p className="text-sm text-slate-400 mt-1">Annual Claims</p></div>
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-16">
                <h2 className="text-2xl font-bold text-white mb-8 text-center">Lead Poisoning Tools</h2>
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
                    <h2 className="text-2xl font-bold text-white mb-8 text-center">Sources of Lead Exposure</h2>
                    <div className="space-y-4">
                        {EXPOSURE_SOURCES.map((source) => (
                            <div key={source.id} className="bg-slate-800 border border-slate-700 rounded-xl p-6 flex justify-between items-center">
                                <div><h3 className="text-white font-semibold">{source.name}</h3><p className="text-sm text-slate-400">{source.description}</p></div>
                                <div className="text-right"><p className="text-xl font-bold text-purple-400">{formatCurrency(source.avgSettlement)}</p><p className="text-xs text-slate-500">avg settlement</p></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 py-16">
                <h2 className="text-2xl font-bold text-white mb-6">What is Lead Poisoning?</h2>
                <div className="prose prose-invert max-w-none">
                    <p className="text-slate-300 mb-4">Lead poisoning occurs when lead builds up in the body over time. Even low levels of lead exposure can cause serious health problems, especially in children. Lead affects brain development, causing learning disabilities, behavioral problems, and reduced IQ.</p>
                    <p className="text-slate-300 mb-4">According to CDC {SITE.year} data, approximately {(LEAD_POISONING_2026.statistics.childrenAffected / 1000).toFixed(0)},000 U.S. children have elevated blood lead levels. The current reference value is {LEAD_POISONING_2026.statistics.safeBloodLevel} µg/dL, down from previous thresholds as science shows no safe level of lead exposure.</p>
                    <p className="text-slate-300">Lead poisoning lawsuits target negligent landlords, water utilities, product manufacturers, and employers. Settlements average {formatCurrency(LEAD_POISONING_2026.statistics.avgSettlement)}, with severe cases exceeding $1 million.</p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 py-16 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Calculate Your Lead Poisoning Claim</h2>
                <p className="text-slate-400 mb-8">Free estimate based on {SITE.year} CDC and EPA data.</p>
                <Link href="/lead-poisoning/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Start Free Calculator<ArrowRight className="w-5 h-5" /></Link>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="lead-poisoning" count={5} /></div></div></section>

        </>
    );
}
