"use client";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Shield, FileText, AlertTriangle, Scale } from "lucide-react";
import { SITE, PARAGARD_2026, formatCurrency } from "@/lib/calculators/paragard";

export default function ParagardGuidePage() {
    return (
        <>
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/paragard" className="text-slate-400 hover:text-white"><ArrowLeft className="w-6 h-6" /></Link>
                    <div className="flex items-center gap-2"><FileText className="w-5 h-5 text-purple-500" /><span className="text-lg font-bold text-white">Paragard Guide</span></div>
                    <span className="ml-auto text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-8"><h1 className="text-2xl md:text-3xl font-bold text-white mb-3">Understanding Paragard Lawsuits</h1><p className="text-slate-400">MDL 2974, device defects, and settlement claims</p></div>

                <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-6 mb-6">
                    <div className="flex items-center gap-3 mb-3"><Scale className="w-6 h-6 text-red-400" /><h2 className="text-lg font-bold text-white">First Bellwether Trial: {PARAGARD_2026.bellwetherTrial.firstTrialDate}</h2></div>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div><p className="text-red-200"><strong>Court:</strong> {PARAGARD_2026.bellwetherTrial.court}</p><p className="text-red-200"><strong>MDL:</strong> {PARAGARD_2026.bellwetherTrial.mdlNumber}</p></div>
                        <div><p className="text-red-200"><strong>Judge:</strong> {PARAGARD_2026.bellwetherTrial.judge}</p><p className="text-red-200"><strong>Defendant:</strong> {PARAGARD_2026.bellwetherTrial.defendant}</p></div>
                    </div>
                </div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">{SITE.year} Lawsuit Statistics</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-purple-900/20 border border-purple-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-purple-400">{(PARAGARD_2026.statistics.totalImplanted / 1000000).toFixed(1)}M</p><p className="text-sm text-purple-200">Implanted</p></div>
                        <div className="bg-rose-900/20 border border-rose-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-rose-400">{(PARAGARD_2026.statistics.lawsuitsFiled / 1000).toFixed(1)}K</p><p className="text-sm text-rose-200">Lawsuits</p></div>
                        <div className="bg-yellow-900/20 border border-yellow-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-yellow-400">{formatCurrency(PARAGARD_2026.statistics.avgSettlement)}</p><p className="text-sm text-yellow-200">Avg Value</p></div>
                        <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-red-400">{PARAGARD_2026.statistics.defectRate}%</p><p className="text-sm text-red-200">Defect Rate</p></div>
                    </div>
                </div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">Fracture Types & Avg Settlements</h2>
                    <div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b border-slate-700"><th className="py-3 text-left text-slate-400">Injury Type</th><th className="py-3 text-center text-slate-400">Avg Settlement</th></tr></thead>
                        <tbody className="text-slate-300">{PARAGARD_2026.fractureTypes.map((f, i) => (<tr key={i} className="border-b border-slate-700/50"><td className="py-3"><p className="text-white font-medium">{f.type}</p><p className="text-xs text-slate-500">{f.description}</p></td><td className="py-3 text-center font-medium text-purple-400">{formatCurrency(f.avgSettlement)}</td></tr>))}</tbody></table></div>
                </div>

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <div className="flex gap-4 justify-center"><Link href="/paragard/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold">Calculate Settlement<ArrowRight className="w-5 h-5" /></Link><Link href="/paragard/eligibility" className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-lg font-semibold">Check Eligibility<ArrowRight className="w-5 h-5" /></Link></div>
                <p className="mt-8 text-xs text-slate-500 text-center">{PARAGARD_2026.citation}</p>
            </main>
        </>
    );
}
