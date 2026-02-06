"use client";

import Link from "next/link";
import { SITE, CALCULATORS, CLASS_CODES, WCP_2026 } from "@/lib/calculators/workers-comp-premium";
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
                    <TrendingUp className="w-4 h-4 text-blue-400" /><span className="text-sm text-blue-200">{WCP_2026.statistics.avgPremium}  {WCP_2026.statistics.avgClaim}</span>
                </div>
            </div>

            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-900 to-slate-900" />
                <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-6"><Shield className="w-4 h-4 text-blue-400" /><span className="text-sm text-blue-300">Workers Comp Premium Calculator</span></div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Workers Comp<span className="block text-blue-400">Premium Calculator</span></h1>
                    <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">Calculate workers compensation premiums with class codes, experience mod, and payroll-based calculations.</p>
                    <Link href="/workers-comp-premium/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105">Calculate Premium<ArrowRight className="w-5 h-5" /></Link>
                </div>
            </section>

            <section className="bg-slate-800/50 border-y border-slate-700">
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <div className="grid grid-cols-3 gap-6 text-center">
                        <div><p className="text-xl font-bold text-blue-400">{WCP_2026.statistics.avgPremium}</p><p className="text-sm text-slate-400 mt-1">Avg Rate</p></div>
                        <div><p className="text-xl font-bold text-red-400">{WCP_2026.statistics.avgClaim}</p><p className="text-sm text-slate-400 mt-1">Avg Claim</p></div>
                        <div><p className="text-xl font-bold text-purple-400">{WCP_2026.statistics.source}</p><p className="text-sm text-slate-400 mt-1">Data Source</p></div>
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
                    <h2 className="text-2xl font-bold text-white mb-8 text-center">Sample Class Code Rates</h2>
                    <div className="space-y-4">
                        {CLASS_CODES.slice(0, 5).map((code) => (
                            <div key={code.id} className="bg-slate-800 border border-slate-700 rounded-xl p-6 flex justify-between items-center">
                                <div><h3 className="text-white font-semibold">{code.name}</h3></div>
                                <div className="text-right"><p className="text-xl font-bold text-blue-400">${code.rate}</p><p className="text-xs text-slate-500">per $100 payroll</p></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 py-16">
                <h2 className="text-2xl font-bold text-white mb-6">How Workers Comp Premium Works</h2>
                <div className="prose prose-invert max-w-none">
                    <p className="text-slate-300 mb-4">Premium = (Payroll / 100) × Class Code Rate × Experience Mod × State Factor.</p>
                    <p className="text-slate-300">Your class code is assigned based on your business activities. Higher risk jobs have higher rates.</p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 py-16 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Estimate Your Premiums</h2>
                <p className="text-slate-400 mb-8">7 input factors based on {SITE.year} NCCI rates.</p>
                <Link href="/workers-comp-premium/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold">Start Free Calculator<ArrowRight className="w-5 h-5" /></Link>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="workers-comp-premium" count={5} /></div></div></section>

            <footer className="bg-slate-800 border-t border-slate-700">
                <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2"><Briefcase className="w-5 h-5 text-blue-500" /><span className="font-semibold text-white">{SITE.name}</span></div>
                    <p className="text-sm text-slate-400">{WCP_2026.citations[0]}</p>
                    <p className="text-sm text-slate-500">© {SITE.year}</p>
                </div>
            </footer>
        </>
    );
}
