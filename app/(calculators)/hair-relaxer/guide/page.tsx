"use client";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Sparkles, FileText, AlertTriangle, Shield } from "lucide-react";
import { SITE, HAIR_RELAXER_2026, formatCurrency } from "@/lib/calculators/hair-relaxer";

export default function HairRelaxerGuidePage() {
    return (
        <>
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/hair-relaxer" className="text-slate-400 hover:text-white"><ArrowLeft className="w-6 h-6" /></Link>
                    <div className="flex items-center gap-2"><FileText className="w-5 h-5 text-amber-500" /><span className="text-lg font-bold text-white">Hair Relaxer Lawsuit Guide</span></div>
                    <span className="ml-auto text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-8"><h1 className="text-2xl md:text-3xl font-bold text-white mb-3">Understanding Hair Relaxer Lawsuits</h1><p className="text-slate-400">Cancer link, brands involved, and eligibility</p></div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">{SITE.year} Hair Relaxer Litigation Status</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-rose-900/20 border border-rose-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-rose-400">{(HAIR_RELAXER_2026.statistics.activeLawsuits / 1000).toFixed(1)}K+</p><p className="text-sm text-rose-200">Active Cases</p></div>
                        <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-red-400">{HAIR_RELAXER_2026.statistics.uterineRiskIncrease}%</p><p className="text-sm text-red-200">Risk Increase</p></div>
                        <div className="bg-amber-900/20 border border-amber-500/50 rounded-lg p-4 text-center"><p className="text-xl font-bold text-amber-400">MDL 3060</p><p className="text-sm text-amber-200">Federal Court</p></div>
                        <div className="bg-yellow-900/20 border border-yellow-500/50 rounded-lg p-4 text-center"><p className="text-xl font-bold text-yellow-400">Nov 2025</p><p className="text-sm text-yellow-200">Bellwether</p></div>
                    </div>
                </div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">Cancer Types & Avg Settlements</h2>
                    <div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b border-slate-700"><th className="py-3 text-left text-slate-400">Diagnosis</th><th className="py-3 text-center text-slate-400">Avg Settlement</th></tr></thead>
                        <tbody className="text-slate-300">{HAIR_RELAXER_2026.cancerTypes.map((c, i) => (<tr key={i} className="border-b border-slate-700/50"><td className="py-3"><p className="text-white font-medium">{c.type}</p><p className="text-xs text-slate-500">{c.description}</p></td><td className="py-3 text-center font-medium text-amber-400">{formatCurrency(c.avgSettlement)}</td></tr>))}</tbody></table></div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-rose-900/20 border border-rose-500/50 rounded-xl p-6">
                        <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2"><Sparkles className="w-5 h-5 text-rose-500" />Brands Involved</h2>
                        <ul className="space-y-2 text-sm text-rose-200">{HAIR_RELAXER_2026.brands.map((b, i) => (<li key={i}>• <strong>{b.brand}</strong> ({b.manufacturer})</li>))}</ul>
                    </div>
                    <div className="bg-amber-900/20 border border-amber-500/50 rounded-xl p-6">
                        <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2"><Shield className="w-5 h-5 text-amber-500" />Usage Frequency Factors</h2>
                        <ul className="space-y-2 text-sm text-amber-200">{HAIR_RELAXER_2026.usageFrequency.map((f, i) => (<li key={i}>• <strong>{f.frequency}:</strong> {f.multiplier}x</li>))}</ul>
                    </div>
                </div>

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <div className="text-center"><Link href="/hair-relaxer/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold">Calculate Your Settlement<ArrowRight className="w-5 h-5" /></Link></div>
                <p className="mt-8 text-xs text-slate-500 text-center">{HAIR_RELAXER_2026.citationNote}</p>
            </main>
        </>
    );
}
