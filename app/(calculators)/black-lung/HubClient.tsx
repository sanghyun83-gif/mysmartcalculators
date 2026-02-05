"use client";

import Link from "next/link";
import { SITE, CALCULATORS, BLACK_LUNG_TYPES, BLACK_LUNG_2026, formatCurrency } from "@/lib/calculators/black-lung";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { ArrowRight, AlertTriangle, Stethoscope, Shield } from "lucide-react";



export default function HubClient() {
    return (
        <>

            <div className="bg-red-900/30 border-b border-red-500/30">
                <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-400" />
                    <span className="text-sm text-red-200">{BLACK_LUNG_2026.statistics.annualDeaths}+ coal miners die from black lung annually</span>
                </div>
            </div>

            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-gray-900/30" />
                <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
                    <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-2 mb-6">
                        <Shield className="w-4 h-4 text-purple-400" /><span className="text-sm text-purple-300">Federal Benefits + Civil Claims</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Black Lung<span className="block text-purple-400">Settlement Calculator</span></h1>
                    <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">Calculate compensation for coal workers&apos; pneumoconiosis. Federal black lung benefits plus civil lawsuit settlements. Average claims {formatCurrency(250000)} to {formatCurrency(750000)}+.</p>
                    <Link href="/black-lung/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105">Calculate Settlement<ArrowRight className="w-5 h-5" /></Link>
                </div>
            </section>

            <section className="bg-slate-800/50 border-y border-slate-700">
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><p className="text-3xl font-bold text-purple-400">{BLACK_LUNG_2026.statistics.annualDeaths}+</p><p className="text-sm text-slate-400 mt-1">Annual Deaths</p></div>
                        <div><p className="text-3xl font-bold text-rose-400">{BLACK_LUNG_2026.statistics.prevalenceRate}</p><p className="text-sm text-slate-400 mt-1">Prevalence Rate</p></div>
                        <div><p className="text-3xl font-bold text-emerald-400">${BLACK_LUNG_2026.statistics.federalBenefitsMonthly}/mo</p><p className="text-sm text-slate-400 mt-1">Federal Benefits</p></div>
                        <div><p className="text-3xl font-bold text-amber-400">{(BLACK_LUNG_2026.statistics.activeMiners / 1000).toFixed(0)}K</p><p className="text-sm text-slate-400 mt-1">Active Miners</p></div>
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-16">
                <h2 className="text-2xl font-bold text-white mb-8 text-center">Free Black Lung Tools</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {CALCULATORS.map((calc) => {
                        const IconComponent = calc.icon;
                        return (
                            <Link key={calc.id} href={`/${calc.id}`} className="group bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-purple-500/10 rounded-lg"><IconComponent className="w-6 h-6 text-purple-400" /></div>
                                    <div><h3 className="text-lg font-semibold text-white group-hover:text-purple-400">{calc.name}</h3><p className="text-sm text-slate-400 mt-1">{calc.description}</p><span className="inline-flex items-center gap-1 text-purple-400 text-sm mt-3">Get Started <ArrowRight className="w-4 h-4" /></span></div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </section>

            <section className="bg-slate-800/30 border-y border-slate-700">
                <div className="max-w-4xl mx-auto px-4 py-16">
                    <h2 className="text-2xl font-bold text-white mb-8 text-center">Black Lung Disease Types</h2>
                    <div className="space-y-4">
                        {BLACK_LUNG_TYPES.map((type) => (
                            <div key={type.id} className="bg-slate-800 border border-slate-700 rounded-xl p-6 flex justify-between items-center">
                                <div><h3 className="text-white font-semibold">{type.name}</h3><p className="text-sm text-slate-400">{type.description}</p></div>
                                <div className="text-right"><p className="text-xl font-bold text-purple-400">{formatCurrency(type.avgSettlement)}</p><p className="text-xs text-slate-500">avg settlement</p></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 py-16">
                <h2 className="text-2xl font-bold text-white mb-6">What is Black Lung Disease?</h2>
                <div className="prose prose-invert max-w-none">
                    <p className="text-slate-300 mb-4">Black lung disease, officially called coal workers&apos; pneumoconiosis (CWP), is caused by long-term inhalation of coal mine dust. The dust accumulates in the lungs, causing scarring and breathing difficulty. According to MSHA and NIOSH {SITE.year} data, over {BLACK_LUNG_2026.statistics.annualDeaths} miners die from CWP annually, with prevalence rates reaching {BLACK_LUNG_2026.statistics.prevalenceRate} among experienced miners.</p>
                    <p className="text-slate-300 mb-4">The Federal Black Lung Benefits Program provides monthly payments (${BLACK_LUNG_2026.statistics.federalBenefitsMonthly} in 2026), medical treatment, and survivor benefits. Additionally, miners may file civil lawsuits against coal companies that failed to provide adequate dust control and respiratory protection.</p>
                    <p className="text-slate-300">If you worked in coal mining and have breathing problems, you may be entitled to both federal benefits and civil compensation. Our free calculator estimates your potential settlement.</p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 py-16 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Calculate Your Black Lung Compensation</h2>
                <p className="text-slate-400 mb-8">Free estimate based on {SITE.year} data. Federal benefits + civil lawsuit potential.</p>
                <Link href="/black-lung/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Start Free Calculator<ArrowRight className="w-5 h-5" /></Link>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="black-lung" count={5} /></div></div></section>

        </>
    );
}
