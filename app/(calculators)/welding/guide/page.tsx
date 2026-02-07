"use client";
import Link from "next/link";
import { ArrowLeft, ArrowRight, FileText, Flame } from "lucide-react";
import { SITE, WELDING_2026, formatCurrency } from "@/lib/calculators/welding";

export default function WeldingGuidePage() {
    return (
        <>
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/welding" className="text-slate-400 hover:text-white"><ArrowLeft className="w-6 h-6" /></Link>
                    <div className="flex items-center gap-2"><FileText className="w-5 h-5 text-amber-500" /><span className="text-lg font-bold text-white">Welding Injury Guide</span></div>
                    <span className="ml-auto text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-8"><h1 className="text-2xl md:text-3xl font-bold text-white mb-3">Understanding Welding Injury Claims</h1><p className="text-slate-400">Burn types, OSHA violations, and settlements</p></div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">{SITE.year} Welding Statistics</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-amber-900/20 border border-amber-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-amber-400">{(WELDING_2026.statistics.annualWeldingInjuries / 1000).toFixed(1)}K</p><p className="text-sm text-amber-200">Injuries</p></div>
                        <div className="bg-rose-900/20 border border-rose-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-rose-400">{WELDING_2026.statistics.annualDeaths}</p><p className="text-sm text-rose-200">Deaths</p></div>
                        <div className="bg-yellow-900/20 border border-yellow-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-yellow-400">{formatCurrency(WELDING_2026.statistics.avgSettlement)}</p><p className="text-sm text-yellow-200">Avg Value</p></div>
                        <div className="bg-orange-900/20 border border-orange-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-orange-400">{WELDING_2026.statistics.eyeInjuryPercent}%</p><p className="text-sm text-orange-200">Eye</p></div>
                    </div>
                </div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">Common OSHA Violations</h2>
                    <div className="space-y-3">{WELDING_2026.oshaViolations.slice(0, 5).map((v, i) => (<div key={i} className="bg-slate-700/50 rounded-lg p-4 flex justify-between items-center"><div><h3 className="text-white font-medium">{v.violation}</h3><p className="text-sm text-slate-400">{v.description}</p></div><div className="text-right"><p className="text-lg font-bold text-amber-400">{v.multiplier}x</p><p className="text-xs text-slate-500">multiplier</p></div></div>))}</div>
                </div>

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <div className="text-center"><Link href="/welding/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold">Calculate Your Settlement<ArrowRight className="w-5 h-5" /></Link></div>
                <p className="mt-8 text-xs text-slate-500 text-center">{WELDING_2026.citation}</p>
            </main>
        </>
    );
}
