"use client";
import Link from "next/link";
import { ArrowLeft, ArrowRight, AlertTriangle, Pickaxe } from "lucide-react";
import { SITE, MINING_2026, formatCurrency } from "@/lib/calculators/mining-injury";

export default function InjuryTypesPage() {
    return (
        <>

            <main className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-8"><h1 className="text-2xl md:text-3xl font-bold text-white mb-3">Common Mining Injuries & Settlements</h1><p className="text-slate-400">Cave-ins, explosions, black lung, and toxic exposure</p></div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">Mining Injury Types & Average Settlements</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead><tr className="border-b border-slate-700"><th className="text-left py-3 text-slate-400 font-medium">Injury Type</th><th className="text-left py-3 text-slate-400 font-medium">Description</th><th className="text-right py-3 text-slate-400 font-medium">Avg Settlement</th><th className="text-right py-3 text-slate-400 font-medium">Max Settlement</th></tr></thead>
                            <tbody>{MINING_2026.injuryTypes.map((i, idx) => (<tr key={idx} className="border-b border-slate-700/50"><td className="py-3 text-white font-medium">{i.type}</td><td className="py-3 text-slate-400">{i.description}</td><td className="py-3 text-right font-semibold text-amber-400">{formatCurrency(i.avgSettlement)}</td><td className="py-3 text-right text-slate-400">{formatCurrency(i.maxSettlement)}</td></tr>))}</tbody>
                        </table>
                    </div>
                </div>

                <div className="bg-amber-900/20 border border-amber-500/50 rounded-xl p-6 mb-6">
                    <h3 className="text-lg font-bold text-amber-400 mb-3">Black Lung Disease (CWP)</h3>
                    <p className="text-amber-200 mb-4">Coal Workers' Pneumoconiosis affects over {(MINING_2026.statistics.blackLungCases / 1000).toFixed(1)}K miners. Federal Black Lung Program provides monthly benefits and medical coverage. Average settlements: {formatCurrency(750000)}.</p>
                    <p className="text-sm text-amber-300">If you worked in coal mines and have breathing difficulties, you may qualify for federal benefits AND civil lawsuit compensation.</p>
                </div>

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <div className="text-center"><Link href="/mining-injury/mining-calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold">Calculate Your Settlement<ArrowRight className="w-5 h-5" /></Link></div>
                <p className="mt-8 text-xs text-slate-500 text-center">{MINING_2026.citation}</p>
            </main>
        </>
    );
}
