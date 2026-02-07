"use client";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Car, FileText, AlertTriangle, Shield } from "lucide-react";
import { SITE, DUI_2026, formatCurrency } from "@/lib/calculators/drunk-driving";

export default function DUIGuidePage() {
    return (
        <>


            <main className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-8"><h1 className="text-2xl md:text-3xl font-bold text-white mb-3">Understanding DUI Accident Claims</h1><p className="text-slate-400">BAC levels, punitive damages, and legal options</p></div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">{SITE.year} DUI Statistics</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-red-400">{DUI_2026.statistics.annualDeaths.toLocaleString()}</p><p className="text-sm text-red-200">Deaths/Year</p></div>
                        <div className="bg-amber-900/20 border border-amber-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-amber-400">{(DUI_2026.statistics.annualInjuries / 1000).toFixed(0)}K</p><p className="text-sm text-amber-200">Injuries/Year</p></div>
                        <div className="bg-yellow-900/20 border border-yellow-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-yellow-400">{DUI_2026.statistics.avgDeathEveryMin}</p><p className="text-sm text-yellow-200">Min Between Deaths</p></div>
                        <div className="bg-orange-900/20 border border-orange-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-orange-400">{DUI_2026.statistics.nighttimePercent}%</p><p className="text-sm text-orange-200">At Night</p></div>
                    </div>
                </div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">BAC Levels & Multipliers</h2>
                    <div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b border-slate-700"><th className="py-3 text-left text-slate-400">BAC Level</th><th className="py-3 text-center text-slate-400">Multiplier</th><th className="py-3 text-left text-slate-400">Description</th></tr></thead>
                        <tbody className="text-slate-300">{DUI_2026.bacLevels.map((b, i) => (<tr key={i} className="border-b border-slate-700/50"><td className="py-3 text-white font-medium">{b.level}</td><td className="py-3 text-center font-medium text-red-400">{b.multiplier}x</td><td className="py-3 text-slate-400">{b.description}</td></tr>))}</tbody></table></div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-red-900/20 border border-red-500/50 rounded-xl p-6">
                        <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-red-500" />Damage Types</h2>
                        <ul className="space-y-2 text-sm text-red-200">{DUI_2026.damageTypes.map((d, i) => (<li key={i}>• <strong>{d.type}:</strong> {d.description}</li>))}</ul>
                    </div>
                    <div className="bg-amber-900/20 border border-amber-500/50 rounded-xl p-6">
                        <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2"><Shield className="w-5 h-5 text-amber-500" />Injury Settlements</h2>
                        <ul className="space-y-2 text-sm text-amber-200">{DUI_2026.injuryTypes.slice(0, 4).map((t, i) => (<li key={i}>• {t.type}: {formatCurrency(t.avgSettlement)}</li>))}</ul>
                    </div>
                </div>

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <div className="text-center"><Link href="/drunk-driving/dui-calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold">Calculate Your Settlement<ArrowRight className="w-5 h-5" /></Link></div>
                <p className="mt-8 text-xs text-slate-500 text-center">{DUI_2026.citation}</p>
            </main>
        </>
    );
}
