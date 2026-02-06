"use client";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Waves, FileText, AlertTriangle, Shield } from "lucide-react";
import { SITE, DROWNING_2026, formatCurrency } from "@/lib/calculators/pool-drowning";

export default function DrowningGuidePage() {
    return (
        <>
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/pool-drowning" className="text-slate-400 hover:text-white"><ArrowLeft className="w-6 h-6" /></Link>
                    <div className="flex items-center gap-2"><FileText className="w-5 h-5 text-amber-500" /><span className="text-lg font-bold text-white">Pool Safety Guide</span></div>
                    <span className="ml-auto text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-8"><h1 className="text-2xl md:text-3xl font-bold text-white mb-3">Understanding Pool Drowning Liability</h1><p className="text-slate-400">Pool safety laws, premises liability, and negligent supervision</p></div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">{SITE.year} Drowning Statistics</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-blue-900/20 border border-blue-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-blue-400">{DROWNING_2026.statistics.annualDeaths.toLocaleString()}</p><p className="text-sm text-blue-200">Deaths/Year</p></div>
                        <div className="bg-amber-900/20 border border-amber-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-amber-400">{DROWNING_2026.statistics.childPercent}%</p><p className="text-sm text-amber-200">Children</p></div>
                        <div className="bg-yellow-900/20 border border-yellow-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-yellow-400">{DROWNING_2026.statistics.underFourPercent}%</p><p className="text-sm text-yellow-200">Under Age 4</p></div>
                        <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-red-400">{DROWNING_2026.statistics.summerPercent}%</p><p className="text-sm text-red-200">In Summer</p></div>
                    </div>
                </div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">Outcome Types & Avg Settlements</h2>
                    <div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b border-slate-700"><th className="py-3 text-left text-slate-400">Outcome</th><th className="py-3 text-center text-slate-400">Avg Settlement</th></tr></thead>
                        <tbody className="text-slate-300">{DROWNING_2026.outcomeTypes.map((o, i) => (<tr key={i} className="border-b border-slate-700/50"><td className="py-3"><p className="text-white font-medium">{o.type}</p><p className="text-xs text-slate-500">{o.description}</p></td><td className="py-3 text-center font-medium text-amber-400">{formatCurrency(o.avgSettlement)}</td></tr>))}</tbody></table></div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-blue-900/20 border border-blue-500/50 rounded-xl p-6">
                        <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-blue-500" />Negligence Factors</h2>
                        <ul className="space-y-2 text-sm text-blue-200">{DROWNING_2026.negligenceFactors.map((n, i) => (<li key={i}> {n.factor}: {n.multiplier}x</li>))}</ul>
                    </div>
                    <div className="bg-amber-900/20 border border-amber-500/50 rounded-xl p-6">
                        <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2"><Shield className="w-5 h-5 text-amber-500" />Liability by Location</h2>
                        <ul className="space-y-2 text-sm text-amber-200">{DROWNING_2026.liabilityTypes.map((l, i) => (<li key={i}> {l.type}: {formatCurrency(l.avgSettlement)}</li>))}</ul>
                    </div>
                </div>

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <div className="text-center"><Link href="/pool-drowning/drowning-calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold">Calculate Your Settlement<ArrowRight className="w-5 h-5" /></Link></div>
                <p className="mt-8 text-xs text-slate-500 text-center">{DROWNING_2026.citation}</p>
            </main>
        </>
    );
}
