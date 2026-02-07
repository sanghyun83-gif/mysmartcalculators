"use client";
import Link from "next/link";
import { ArrowLeft, ArrowRight, FileText, Pickaxe } from "lucide-react";
import { SITE, MINING_2026, formatCurrency } from "@/lib/calculators/mining-injury";

export default function MiningGuidePage() {
    return (
        <>

            <main className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-8"><h1 className="text-2xl md:text-3xl font-bold text-white mb-3">Understanding Mining Injury Claims</h1><p className="text-slate-400">Cave-ins, explosions, black lung, and MSHA violations</p></div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">{SITE.year} Mining Statistics</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-amber-900/20 border border-amber-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-amber-400">{MINING_2026.statistics.annualMiningDeaths}</p><p className="text-sm text-amber-200">Deaths</p></div>
                        <div className="bg-rose-900/20 border border-rose-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-rose-400">{(MINING_2026.statistics.annualMiningInjuries / 1000).toFixed(1)}K</p><p className="text-sm text-rose-200">Injuries</p></div>
                        <div className="bg-yellow-900/20 border border-yellow-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-yellow-400">{formatCurrency(MINING_2026.statistics.avgSettlement)}</p><p className="text-sm text-yellow-200">Avg Value</p></div>
                        <div className="bg-orange-900/20 border border-orange-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-orange-400">{(MINING_2026.statistics.blackLungCases / 1000).toFixed(1)}K</p><p className="text-sm text-orange-200">Black Lung</p></div>
                    </div>
                </div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">Potentially Liable Parties</h2>
                    <div className="grid md:grid-cols-2 gap-3">{MINING_2026.liableParties.map((p, i) => (<div key={i} className="bg-slate-700/50 rounded-lg p-3 flex items-center gap-2"><span className="w-6 h-6 bg-amber-500/20 rounded-full flex items-center justify-center text-amber-400 text-sm">{i + 1}</span><span className="text-white">{p}</span></div>))}</div>
                </div>

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <div className="text-center"><Link href="/mining-injury/mining-calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold">Calculate Your Settlement<ArrowRight className="w-5 h-5" /></Link></div>
                <p className="mt-8 text-xs text-slate-500 text-center">{MINING_2026.citation}</p>
            </main>
        </>
    );
}
