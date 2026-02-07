"use client";
import Link from "next/link";
import { ArrowLeft, ArrowRight, HardHat, FileText, AlertTriangle, Shield } from "lucide-react";
import { SITE, CONSTRUCTION_2026, formatCurrency } from "@/lib/calculators/construction-accident";

export default function ConstructionGuidePage() {
    return (
        <>


            <main className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-8"><h1 className="text-2xl md:text-3xl font-bold text-white mb-3">Understanding Construction Accidents</h1><p className="text-slate-400">OSHA Fatal Four, injury types, and settlement factors</p></div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">{SITE.year} Construction Statistics</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-amber-900/20 border border-amber-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-amber-400">{CONSTRUCTION_2026.statistics.annualDeaths.toLocaleString()}</p><p className="text-sm text-amber-200">Deaths/Year</p></div>
                        <div className="bg-orange-900/20 border border-orange-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-orange-400">{(CONSTRUCTION_2026.statistics.annualInjuries / 1000).toFixed(0)}K</p><p className="text-sm text-orange-200">Injuries/Year</p></div>
                        <div className="bg-yellow-900/20 border border-yellow-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-yellow-400">{CONSTRUCTION_2026.statistics.fatalityRate}</p><p className="text-sm text-yellow-200">Deaths/100K</p></div>
                        <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-red-400">{CONSTRUCTION_2026.statistics.industryPercent}%</p><p className="text-sm text-red-200">of All Deaths</p></div>
                    </div>
                </div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">Injury Types & Avg Settlements</h2>
                    <div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b border-slate-700"><th className="py-3 text-left text-slate-400">Injury Type</th><th className="py-3 text-center text-slate-400">Avg Settlement</th></tr></thead>
                        <tbody className="text-slate-300">{CONSTRUCTION_2026.injuryTypes.map((t, i) => (<tr key={i} className="border-b border-slate-700/50"><td className="py-3"><p className="text-white font-medium">{t.type}</p><p className="text-xs text-slate-500">{t.description}</p></td><td className="py-3 text-center font-medium text-amber-400">{formatCurrency(t.avgSettlement)}</td></tr>))}</tbody></table></div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-amber-900/20 border border-amber-500/50 rounded-xl p-6">
                        <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-amber-500" />OSHA Fatal Four</h2>
                        <ul className="space-y-2 text-sm text-amber-200">{CONSTRUCTION_2026.fatalFour.map((f, i) => (<li key={i}>• {f.cause}: {f.percent}%</li>))}</ul>
                    </div>
                    <div className="bg-orange-900/20 border border-orange-500/50 rounded-xl p-6">
                        <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2"><Shield className="w-5 h-5 text-orange-500" />OSHA Violations</h2>
                        <ul className="space-y-2 text-sm text-orange-200">{CONSTRUCTION_2026.oshaViolations.map((v, i) => (<li key={i}>• {v.type}: {v.multiplier}x</li>))}</ul>
                    </div>
                </div>

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <div className="text-center"><Link href="/construction-accident/construction-calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold">Calculate Your Settlement<ArrowRight className="w-5 h-5" /></Link></div>
                <p className="mt-8 text-xs text-slate-500 text-center">{CONSTRUCTION_2026.citationNote}</p>
            </main>
        </>
    );
}
