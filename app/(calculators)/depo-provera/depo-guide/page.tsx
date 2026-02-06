"use client";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Brain, FileText, AlertTriangle, Shield } from "lucide-react";
import { SITE, DEPO_2026, formatCurrency } from "@/lib/calculators/depo-provera";

export default function DepoGuidePage() {
    return (
        <>


            <main className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-8"><h1 className="text-2xl md:text-3xl font-bold text-white mb-3">Understanding Depo-Provera Lawsuits</h1><p className="text-slate-400">FDA warnings, brain tumors, and compensation claims</p></div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">{SITE.year} Lawsuit Statistics</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-purple-900/20 border border-purple-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-purple-400">{(DEPO_2026.statistics.usersAffected / 1000000).toFixed(1)}M</p><p className="text-sm text-purple-200">Affected</p></div>
                        <div className="bg-rose-900/20 border border-rose-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-rose-400">{(DEPO_2026.statistics.lawsuitsFiled / 1000).toFixed(1)}K</p><p className="text-sm text-rose-200">Lawsuits</p></div>
                        <div className="bg-yellow-900/20 border border-yellow-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-yellow-400">{formatCurrency(DEPO_2026.statistics.avgSettlement)}</p><p className="text-sm text-yellow-200">Avg Value</p></div>
                        <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-red-400">{DEPO_2026.statistics.tumorRiskIncrease}%</p><p className="text-sm text-red-200">Risk Increase</p></div>
                    </div>
                </div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">Tumor Types & Avg Settlements</h2>
                    <div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b border-slate-700"><th className="py-3 text-left text-slate-400">Tumor Type</th><th className="py-3 text-center text-slate-400">Avg Settlement</th></tr></thead>
                        <tbody className="text-slate-300">{DEPO_2026.tumorTypes.map((t, i) => (<tr key={i} className="border-b border-slate-700/50"><td className="py-3"><p className="text-white font-medium">{t.type}</p><p className="text-xs text-slate-500">{t.description}</p></td><td className="py-3 text-center font-medium text-purple-400">{formatCurrency(t.avgSettlement)}</td></tr>))}</tbody></table></div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-purple-900/20 border border-purple-500/50 rounded-xl p-6">
                        <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2"><Brain className="w-5 h-5 text-purple-500" />Usage Duration Impact</h2>
                        <ul className="space-y-2 text-sm text-purple-200">{DEPO_2026.usageDuration.map((u, i) => (<li key={i}>??<strong>{u.duration}:</strong> {u.multiplier}x base settlement</li>))}</ul>
                    </div>
                    <div className="bg-rose-900/20 border border-rose-500/50 rounded-xl p-6">
                        <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2"><Shield className="w-5 h-5 text-rose-500" />Surgery Impact</h2>
                        <ul className="space-y-2 text-sm text-rose-200">{DEPO_2026.surgeryFactors.map((s, i) => (<li key={i}>??<strong>{s.surgery}:</strong> {s.multiplier}x base settlement</li>))}</ul>
                    </div>
                </div>

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <div className="text-center"><Link href="/depo-provera/depo-calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold">Calculate Your Settlement<ArrowRight className="w-5 h-5" /></Link></div>
                <p className="mt-8 text-xs text-slate-500 text-center">{DEPO_2026.citation}</p>
            </main>
        </>
    );
}
