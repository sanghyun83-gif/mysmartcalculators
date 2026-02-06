"use client";

import Link from "next/link";
import { SITE, CALCULATORS, PROFESSION_TYPES, PL_2026, formatCurrency } from "@/lib/calculators/professional-liability";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { ArrowRight, TrendingUp, Briefcase, Shield } from "lucide-react";



export default function HubClient() {
    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2"><Briefcase className="w-6 h-6 text-blue-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></div>
                    <span className="text-xs text-blue-400 bg-blue-500/20 px-2 py-1 rounded border border-blue-500/30">Advanced</span>
                </div>
            </header>

            <div className="bg-blue-900/30 border-b border-blue-500/30">
                <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-center gap-2">
                    <TrendingUp className="w-4 h-4 text-blue-400" /><span className="text-sm text-blue-200">{PL_2026.statistics.avgPremium}  {PL_2026.statistics.medianClaim}</span>
                </div>
            </div>

            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-900 to-slate-900" />
                <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-6"><Shield className="w-4 h-4 text-blue-400" /><span className="text-sm text-blue-300">E&amp;O Insurance Calculator</span></div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Professional Liability<span className="block text-blue-400">Insurance Calculator</span></h1>
                    <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">Calculate E&amp;O insurance premiums for consultants, accountants, lawyers, tech, and professionals.</p>
                    <Link href="/professional-liability/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105">Calculate Premium<ArrowRight className="w-5 h-5" /></Link>
                </div>
            </section>

            <section className="bg-slate-800/50 border-y border-slate-700">
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <div className="grid grid-cols-3 gap-6 text-center">
                        <div><p className="text-xl font-bold text-blue-400">{PL_2026.statistics.avgPremium}</p><p className="text-sm text-slate-400 mt-1">Avg Premium</p></div>
                        <div><p className="text-xl font-bold text-red-400">{PL_2026.statistics.medianClaim}</p><p className="text-sm text-slate-400 mt-1">Median Claim</p></div>
                        <div><p className="text-xl font-bold text-purple-400">{PL_2026.statistics.source}</p><p className="text-sm text-slate-400 mt-1">Data Source</p></div>
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-16">
                <h2 className="text-2xl font-bold text-white mb-8 text-center">Insurance Resources</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {CALCULATORS.map((calc) => {
                        const Icon = calc.icon;
                        return (
                            <Link key={calc.id} href={`/${calc.id}`} className="group bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all">
                                <div className="flex flex-col items-center text-center">
                                    <div className="p-3 bg-blue-500/10 rounded-lg mb-4"><Icon className="w-6 h-6 text-blue-400" /></div>
                                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-400">{calc.name}</h3>
                                    <p className="text-sm text-slate-400 mt-1">{calc.description}</p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </section>

            <section className="bg-slate-800/30 border-y border-slate-700">
                <div className="max-w-4xl mx-auto px-4 py-16">
                    <h2 className="text-2xl font-bold text-white mb-8 text-center">Profession Types &amp; Base Rates</h2>
                    <div className="space-y-4">
                        {PROFESSION_TYPES.map((prof) => (
                            <div key={prof.id} className="bg-slate-800 border border-slate-700 rounded-xl p-6 flex justify-between items-center">
                                <div><h3 className="text-white font-semibold">{prof.name}</h3><p className="text-sm text-slate-400">Risk: {prof.riskMultiplier}x</p></div>
                                <div className="text-right"><p className="text-xl font-bold text-blue-400">{formatCurrency(prof.baseRate)}/yr</p><p className="text-xs text-slate-500">base rate</p></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 py-16">
                <h2 className="text-2xl font-bold text-white mb-6">What is Professional Liability Insurance?</h2>
                <div className="prose prose-invert max-w-none">
                    <p className="text-slate-300 mb-4">Professional liability insurance (E&amp;O) protects against claims of negligence, errors, or omissions in your professional services.</p>
                    <p className="text-slate-300">It covers legal defense costs and settlements when clients claim your services caused financial harm.</p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 py-16 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Estimate Your Premiums</h2>
                <p className="text-slate-400 mb-8">7 input factors based on {SITE.year} NAIC data.</p>
                <Link href="/professional-liability/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold">Start Free Calculator<ArrowRight className="w-5 h-5" /></Link>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="professional-liability" count={5} /></div></div></section>

            <footer className="bg-slate-800 border-t border-slate-700">
                <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2"><Briefcase className="w-5 h-5 text-blue-500" /><span className="font-semibold text-white">{SITE.name}</span></div>
                    <p className="text-sm text-slate-400">{PL_2026.citations[0]}</p>
                    <p className="text-sm text-slate-500">© {SITE.year}</p>
                </div>
            </footer>
        </>
    );
}
