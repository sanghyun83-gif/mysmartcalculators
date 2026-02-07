"use client";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Shield, Pickaxe } from "lucide-react";
import { SITE, MINING_2026, formatCurrency } from "@/lib/calculators/mining-injury";

export default function MineSafetyPage() {
    return (
        <>

            <main className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-8"><h1 className="text-2xl md:text-3xl font-bold text-white mb-3">MSHA Violations & Settlement Impact</h1><p className="text-slate-400">How safety violations affect your case value</p></div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">MSHA Violations & Settlement Multipliers</h2>
                    <div className="space-y-4">{MINING_2026.mshaViolations.slice(0, 5).map((m, i) => (<div key={i} className="bg-slate-700/50 rounded-lg p-4 flex justify-between items-center"><div><h3 className="text-white font-medium">{m.violation}</h3><p className="text-sm text-slate-400">{m.description}</p></div><div className="text-right"><p className="text-2xl font-bold text-amber-400">{m.multiplier}x</p><p className="text-xs text-slate-500">multiplier</p></div></div>))}</div>
                </div>

                <div className="bg-rose-900/20 border border-rose-500/50 rounded-xl p-6 mb-6">
                    <h3 className="text-lg font-bold text-rose-400 mb-3">How MSHA Violations Increase Settlements</h3>
                    <p className="text-rose-200 mb-4">If your injury was caused by documented MSHA violations, this establishes negligence and can significantly increase your settlement value. Violations prove the mining company knew about hazards but failed to correct them.</p>
                    <p className="text-sm text-rose-300">Request MSHA inspection records for your mine. These are public records available through FOIA.</p>
                </div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h3 className="text-lg font-bold text-white mb-4">{SITE.year} MSHA Inspections</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-amber-900/20 border border-amber-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-amber-400">{(MINING_2026.statistics.mshaInspections / 1000).toFixed(0)}K</p><p className="text-sm text-amber-200">Annual Inspections</p></div>
                        <div className="bg-rose-900/20 border border-rose-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-rose-400">{MINING_2026.statistics.annualMiningDeaths}</p><p className="text-sm text-rose-200">Annual Deaths</p></div>
                    </div>
                </div>

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <div className="text-center"><Link href="/mining-injury/mining-calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold">Calculate Your Settlement<ArrowRight className="w-5 h-5" /></Link></div>
                <p className="mt-8 text-xs text-slate-500 text-center">{MINING_2026.citation}</p>
            </main>
        </>
    );
}
