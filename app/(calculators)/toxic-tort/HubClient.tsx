"use client";

import Link from "next/link";
import { SITE, CALCULATORS, TOXIC_EXPOSURE_TYPES, TOXIC_TORT_2026, MAJOR_MDL_CASES, formatCurrency } from "@/lib/calculators/toxic-tort";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { ArrowRight, AlertTriangle, Scale, Shield, Beaker } from "lucide-react";



export default function HubClient() {
    const featuredCalcs = CALCULATORS.filter(c => c.featured);
    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2"><Scale className="w-6 h-6 text-amber-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></div>
                    <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>

            <div className="bg-red-900/30 border-b border-red-500/30">
                <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-400" /><span className="text-sm text-red-200">{TOXIC_TORT_2026.statistics.superfundSites} Superfund Sites Nationwide  {(TOXIC_TORT_2026.statistics.annualToxicTortFilings / 1000).toFixed(0)}K+ Annual Toxic Tort Claims</span>
                </div>
            </div>

            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 via-slate-900 to-red-900/20" />
                <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
                    <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/50 rounded-full px-4 py-2 mb-6"><Beaker className="w-4 h-4 text-amber-400" /><span className="text-sm text-amber-300">Active MDL Litigation</span></div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Toxic Tort<span className="block text-amber-400">Settlement Calculator</span></h1>
                    <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">Calculate compensation for chemical exposure, water contamination, and environmental pollution. PFAS, pesticides, industrial chemicals. Average settlements {formatCurrency(450000)} to {formatCurrency(1000000)}+.</p>
                    <Link href="/toxic-tort/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105">Calculate Settlement<ArrowRight className="w-5 h-5" /></Link>
                </div>
            </section>

            <section className="bg-slate-800/50 border-y border-slate-700">
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><p className="text-3xl font-bold text-amber-400">{formatCurrency(TOXIC_TORT_2026.statistics.avgSettlement)}</p><p className="text-sm text-slate-400 mt-1">Avg Settlement</p></div>
                        <div><p className="text-3xl font-bold text-rose-400">{TOXIC_TORT_2026.statistics.superfundSites}</p><p className="text-sm text-slate-400 mt-1">Superfund Sites</p></div>
                        <div><p className="text-3xl font-bold text-emerald-400">{(TOXIC_TORT_2026.statistics.annualToxicTortFilings / 1000).toFixed(0)}K+</p><p className="text-sm text-slate-400 mt-1">Annual Claims</p></div>
                        <div><p className="text-3xl font-bold text-purple-400">{TOXIC_TORT_2026.statistics.avgTimeToResolution}</p><p className="text-sm text-slate-400 mt-1">Avg Resolution</p></div>
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-16">
                <h2 className="text-2xl font-bold text-white mb-8 text-center">Toxic Tort Calculators & Guides</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {featuredCalcs.map((calc) => {
                        const Icon = calc.icon;
                        return (
                            <Link key={calc.id} href={`/${calc.id}`} className="group bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-amber-500/50 transition-all">
                                <div className="p-3 bg-amber-500/10 rounded-lg w-fit mb-4"><Icon className="w-6 h-6 text-amber-400" /></div>
                                <h3 className="text-lg font-semibold text-white group-hover:text-amber-400">{calc.name}</h3>
                                <p className="text-sm text-slate-400 mt-1">{calc.description}</p>
                                <span className="inline-flex items-center gap-1 text-amber-400 text-sm mt-3">Get Started <ArrowRight className="w-4 h-4" /></span>
                            </Link>
                        );
                    })}
                </div>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                    {CALCULATORS.filter(c => !c.featured).map((calc) => (
                        <Link key={calc.id} href={`/${calc.id}`} className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-amber-500/30 transition-all flex items-center gap-3">
                            <calc.icon className="w-5 h-5 text-amber-400" /><span className="text-white text-sm">{calc.name}</span><ArrowRight className="w-4 h-4 text-slate-500 ml-auto" />
                        </Link>
                    ))}
                </div>
            </section>

            <section className="bg-slate-800/30 border-y border-slate-700">
                <div className="max-w-4xl mx-auto px-4 py-16">
                    <h2 className="text-2xl font-bold text-white mb-8 text-center">Active Mass Tort Litigation</h2>
                    <div className="space-y-4">
                        {MAJOR_MDL_CASES.map((mdl, i) => (
                            <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                                <div><h3 className="text-white font-semibold">{mdl.name}</h3><p className="text-sm text-slate-400">{mdl.mdl}  {mdl.defendants}</p></div>
                                <span className={`text-xs px-3 py-1 rounded-full ${mdl.status === 'Active' ? 'bg-red-500/20 text-red-300' : 'bg-emerald-500/20 text-emerald-300'}`}>{mdl.status}</span>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-6"><Link href="/toxic-tort/mdl" className="text-amber-400 hover:text-amber-300 text-sm">View All MDL Cases/Link></div>
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 py-16">
                <h2 className="text-2xl font-bold text-white mb-6">What is a Toxic Tort?</h2>
                <div className="prose prose-invert max-w-none">
                    <p className="text-slate-300 mb-4">A toxic tort is a legal claim for injuries caused by exposure to dangerous chemicals, pollutants, or contaminated substances. These cases involve complex scientific evidence linking exposure to disease and often proceed as mass tort litigation (MDL) when many people are harmed by the same substance.</p>
                    <p className="text-slate-300 mb-4">Common toxic tort claims involve water contamination (PFAS, lead, industrial chemicals), workplace chemical exposure (solvents, pesticides), environmental pollution (factory emissions, hazardous waste), and pharmaceutical contamination. According to EPA and DOJ data, there are over {TOXIC_TORT_2026.statistics.superfundSites} designated Superfund sites in the U.S., with {(TOXIC_TORT_2026.statistics.annualToxicTortFilings / 1000).toFixed(0)}K+ new toxic tort claims filed annually.</p>
                    <p className="text-slate-300">Toxic tort settlements average {formatCurrency(TOXIC_TORT_2026.statistics.avgSettlement)}, but cancer cases and those involving willful misconduct or fraud can exceed {formatCurrency(1500000)}. Our free calculator estimates your potential compensation based on exposure type, resulting illness, and defendant liability.</p>
                </div>
            </section>

            <section className="bg-slate-800/30 border-y border-slate-700">
                <div className="max-w-4xl mx-auto px-4 py-16">
                    <h2 className="text-2xl font-bold text-white mb-6">How Toxic Tort Settlements Are Calculated</h2>
                    <p className="text-slate-300 mb-4">Toxic tort compensation includes economic damages (medical expenses, lost wages, future care costs, property damage) and non-economic damages (pain and suffering, loss of enjoyment of life). In cases of egregious corporate conduct, punitive damages may multiply the total significantly.</p>
                    <p className="text-slate-300">Key factors affecting settlement value include: type of exposure and toxicity level, severity and type of resulting disease, duration of exposure, defendant&apos;s level of negligence or misconduct, and strength of scientific evidence linking exposure to illness.</p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 py-16 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Calculate Your Toxic Tort Settlement</h2>
                <p className="text-slate-400 mb-8">Free, confidential estimate based on {SITE.year} data. PFAS, pesticides, contamination claims.</p>
                <Link href="/toxic-tort/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold">Start Free Calculator<ArrowRight className="w-5 h-5" /></Link>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="toxic-tort" count={5} /></div></div></section>

            <footer className="bg-slate-800 border-t border-slate-700">
                <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2"><Scale className="w-5 h-5 text-amber-500" /><span className="font-semibold text-white">{SITE.name}</span></div>
                    <p className="text-sm text-slate-400 text-center">{TOXIC_TORT_2026.citations[0]}</p>
                    <p className="text-sm text-slate-500">© {SITE.year} {SITE.name}</p>
                </div>
            </footer>
        </>
    );
}
