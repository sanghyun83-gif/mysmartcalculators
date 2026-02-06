"use client";

import Link from "next/link";
import { SITE, CALCULATORS, HEARING_CONDITIONS, SETTLEMENT_TIERS, EARPLUG_2026, formatCurrency } from "@/lib/calculators/3m-earplug";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { ArrowRight, AlertTriangle, Ear, Scale } from "lucide-react";



export default function HubClient() {
    return (
        <>

            <div className="bg-emerald-900/30 border-b border-emerald-500/30">
                <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-emerald-400" /><span className="text-sm text-emerald-200">{EARPLUG_2026.statistics.mdlNumber} Settled  ${(EARPLUG_2026.statistics.settlementAmount / 1000000000).toFixed(0)}B Total  {EARPLUG_2026.statistics.status}</span>
                </div>
            </div>

            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-blue-900/20" />
                <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
                    <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-2 mb-6"><Scale className="w-4 h-4 text-purple-400" /><span className="text-sm text-purple-300">Medical Calculator</span></div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">3M Earplug<span className="block text-purple-400">Settlement Calculator</span></h1>
                    <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">Estimate your 3M Combat Arms Earplug settlement. Veterans hearing loss and tinnitus. Average payout {formatCurrency(EARPLUG_2026.statistics.avgPayoutEstimate)}.</p>
                    <Link href="/3m-earplug/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105">Calculate Settlement<ArrowRight className="w-5 h-5" /></Link>
                </div>
            </section>

            <section className="bg-slate-800/50 border-y border-slate-700">
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><p className="text-3xl font-bold text-purple-400">${(EARPLUG_2026.statistics.settlementAmount / 1000000000).toFixed(0)}B</p><p className="text-sm text-slate-400 mt-1">Total Settlement</p></div>
                        <div><p className="text-3xl font-bold text-emerald-400">{(EARPLUG_2026.statistics.totalClaims / 1000).toFixed(0)}K+</p><p className="text-sm text-slate-400 mt-1">Total Claims</p></div>
                        <div><p className="text-3xl font-bold text-amber-400">{formatCurrency(EARPLUG_2026.statistics.avgPayoutEstimate)}</p><p className="text-sm text-slate-400 mt-1">Avg Estimate</p></div>
                        <div><p className="text-3xl font-bold text-blue-400">Processing</p><p className="text-sm text-slate-400 mt-1">Current Status</p></div>
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-16">
                <h2 className="text-2xl font-bold text-white mb-8 text-center">3M Earplug Settlement Tools</h2>
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
                    <h2 className="text-2xl font-bold text-white mb-8 text-center">Settlement Tiers</h2>
                    <div className="space-y-4">
                        {SETTLEMENT_TIERS.map((tier, i) => (
                            <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6 flex justify-between items-center">
                                <div><h3 className="text-white font-semibold">{tier.tier}</h3><p className="text-sm text-slate-400">{tier.description}</p></div>
                                <div className="text-right"><p className="text-xl font-bold text-purple-400">{tier.range}</p></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 py-16">
                <h2 className="text-2xl font-bold text-white mb-6">What is the 3M Earplug Lawsuit?</h2>
                <div className="prose prose-invert max-w-none">
                    <p className="text-slate-300 mb-4">The 3M Combat Arms Earplug lawsuit (MDL 2885) was the largest mass tort case in U.S. history, with over {(EARPLUG_2026.statistics.totalClaims / 1000).toFixed(0)},000 claims. Veterans alleged that 3M&apos;s dual-ended Combat Arms Earplugs Version 2 (CAEv2) were defectively designed, causing hearing loss and tinnitus.</p>
                    <p className="text-slate-300 mb-4">In August 2023, 3M agreed to pay ${(EARPLUG_2026.statistics.settlementAmount / 1000000000).toFixed(0)} billion over multiple years to resolve the claims. Individual payouts depend on injury severity, documentation, and tier classification.</p>
                    <p className="text-slate-300">Payments are currently being processed, with the average estimated at {formatCurrency(EARPLUG_2026.statistics.avgPayoutEstimate)}. Use our calculator to estimate your potential settlement amount.</p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 py-16 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Estimate Your 3M Earplug Payout</h2>
                <p className="text-slate-400 mb-8">Free calculator based on {SITE.year} settlement data.</p>
                <Link href="/3m-earplug/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Start Free Calculator<ArrowRight className="w-5 h-5" /></Link>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="3m-earplug" count={5} /></div></div></section>

        </>
    );
}
