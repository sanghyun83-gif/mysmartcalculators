"use client";

import Link from "next/link";
import { SITE, CALCULATORS, SILICOSIS_TYPES, SILICOSIS_2026, HIGH_RISK_INDUSTRIES, formatCurrency } from "@/lib/calculators/silicosis";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { ArrowRight, AlertTriangle, Stethoscope, Shield } from "lucide-react";



export default function HubClient() {
    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Stethoscope className="w-6 h-6 text-purple-500" />
                        <span className="text-lg font-bold text-white">{SITE.name}</span>
                    </div>
                    <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>

            <div className="bg-red-900/30 border-b border-red-500/30">
                <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-400" />
                    <span className="text-sm text-red-200">{SILICOSIS_2026.statistics.annualDeaths}+ Americans die from silicosis annually</span>
                </div>
            </div>

            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-indigo-900/20" />
                <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
                    <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-2 mb-6">
                        <Shield className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-purple-300">MDL {SILICOSIS_2026.statistics.mdlNumber}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Silicosis<span className="block text-purple-400">Settlement Calculator</span></h1>
                    <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">Calculate compensation for crystalline silica exposure. Sandblasting, mining, construction workers. Average settlements {formatCurrency(300000)} to {formatCurrency(700000)}+.</p>
                    <Link href="/silicosis/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105">Calculate Settlement<ArrowRight className="w-5 h-5" /></Link>
                </div>
            </section>

            <section className="bg-slate-800/50 border-y border-slate-700">
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><p className="text-3xl font-bold text-purple-400">{SILICOSIS_2026.statistics.annualDeaths}+</p><p className="text-sm text-slate-400 mt-1">Annual Deaths</p></div>
                        <div><p className="text-3xl font-bold text-rose-400">{(SILICOSIS_2026.statistics.annualNewCases / 1000).toFixed(0)}K+</p><p className="text-sm text-slate-400 mt-1">New Cases/Year</p></div>
                        <div><p className="text-3xl font-bold text-emerald-400">{formatCurrency(SILICOSIS_2026.statistics.avgSettlement)}</p><p className="text-sm text-slate-400 mt-1">Avg Settlement</p></div>
                        <div><p className="text-3xl font-bold text-amber-400">{SILICOSIS_2026.statistics.oshaExposureLimit}</p><p className="text-sm text-slate-400 mt-1">OSHA Limit</p></div>
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-16">
                <h2 className="text-2xl font-bold text-white mb-8 text-center">Free Silicosis Tools</h2>
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
                    <h2 className="text-2xl font-bold text-white mb-8 text-center">Silicosis Types & Settlements</h2>
                    <div className="space-y-4">
                        {SILICOSIS_TYPES.map((type) => (
                            <div key={type.id} className="bg-slate-800 border border-slate-700 rounded-xl p-6 flex justify-between items-center">
                                <div><h3 className="text-white font-semibold">{type.name}</h3><p className="text-sm text-slate-400">{type.description}</p></div>
                                <div className="text-right"><p className="text-xl font-bold text-purple-400">{formatCurrency(type.avgSettlement)}</p><p className="text-xs text-slate-500">avg settlement</p></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 py-16">
                <h2 className="text-2xl font-bold text-white mb-6">What is Silicosis?</h2>
                <div className="prose prose-invert max-w-none">
                    <p className="text-slate-300 mb-4">Silicosis is an incurable lung disease caused by inhaling crystalline silica dust. Found in sand, rock, and quartz, silica particles scar lung tissue, causing progressive breathing difficulty. According to CDC/NIOSH {SITE.year} data, over {SILICOSIS_2026.statistics.annualDeaths} Americans die from silicosis annually, with {SILICOSIS_2026.statistics.annualNewCases}+ new cases diagnosed each year.</p>
                    <p className="text-slate-300 mb-4">OSHA&apos;s permissible exposure limit (PEL) is {SILICOSIS_2026.statistics.oshaExposureLimit} of respirable crystalline silica. Employers who fail to provide proper respiratory protection, ventilation, and exposure monitoring may be liable for worker injuries.</p>
                    <p className="text-slate-300">High-risk industries include: {HIGH_RISK_INDUSTRIES.join(", ")}. If you worked in these industries and developed breathing problems, you may be entitled to significant compensation.</p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 py-16 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Calculate Your Silicosis Settlement</h2>
                <p className="text-slate-400 mb-8">Free, confidential estimate based on {SITE.year} data. No email required.</p>
                <Link href="/silicosis/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Start Free Calculator<ArrowRight className="w-5 h-5" /></Link>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="silicosis" count={5} /></div></div></section>

            <footer className="bg-slate-800 border-t border-slate-700">
                <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2"><Stethoscope className="w-5 h-5 text-purple-500" /><span className="font-semibold text-white">{SITE.name}</span></div>
                    <p className="text-sm text-slate-400 text-center">{SILICOSIS_2026.citationNote}</p>
                    <p className="text-sm text-slate-500">© {SITE.year} {SITE.name}</p>
                </div>
            </footer>
        </>
    );
}
