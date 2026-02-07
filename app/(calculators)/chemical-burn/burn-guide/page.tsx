"use client";
import Link from "next/link";
import { ArrowLeft, ArrowRight, FileText, Flame } from "lucide-react";
import { SITE, CHEMBURN_2026, formatCurrency } from "@/lib/calculators/chemical-burn";

export default function BurnGuidePage() {
    return (
        <>

            <main className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-8"><h1 className="text-2xl md:text-3xl font-bold text-white mb-3">Understanding Chemical Burn Lawsuits</h1><p className="text-slate-400">Burn types, severity, and settlement factors</p></div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">{SITE.year} Chemical Burn Statistics</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-amber-900/20 border border-amber-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-amber-400">{(CHEMBURN_2026.statistics.annualChemicalBurns / 1000).toFixed(0)}K</p><p className="text-sm text-amber-200">Annual Burns</p></div>
                        <div className="bg-rose-900/20 border border-rose-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-rose-400">{(CHEMBURN_2026.statistics.workplaceRelated / 1000).toFixed(0)}K</p><p className="text-sm text-rose-200">Workplace</p></div>
                        <div className="bg-yellow-900/20 border border-yellow-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-yellow-400">{formatCurrency(CHEMBURN_2026.statistics.avgSettlement)}</p><p className="text-sm text-yellow-200">Avg Value</p></div>
                        <div className="bg-orange-900/20 border border-orange-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-orange-400">{(CHEMBURN_2026.statistics.hospitalizations / 1000).toFixed(0)}K</p><p className="text-sm text-orange-200">Hospitalized</p></div>
                    </div>
                </div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">Chemical Burn Types</h2>
                    <div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b border-slate-700"><th className="py-3 text-left text-slate-400">Burn Type</th><th className="py-3 text-center text-slate-400">Avg Settlement</th></tr></thead>
                        <tbody className="text-slate-300">{CHEMBURN_2026.burnTypes.map((b, i) => (<tr key={i} className="border-b border-slate-700/50"><td className="py-3"><p className="text-white font-medium">{b.type}</p><p className="text-xs text-slate-500">{b.description}</p></td><td className="py-3 text-center font-medium text-amber-400">{formatCurrency(b.avgSettlement)}</td></tr>))}</tbody></table></div>
                </div>

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <div className="text-center"><Link href="/chemical-burn/burn-calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold">Calculate Your Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </main>
        </>
    );
}
