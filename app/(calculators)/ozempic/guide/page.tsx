"use client";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Pill, FileText, AlertTriangle, Shield } from "lucide-react";
import { SITE, OZEMPIC_2026, formatCurrency } from "@/lib/calculators/ozempic";

export default function OzempicGuidePage() {
    return (
        <div className="min-h-screen bg-slate-900">
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/ozempic" className="text-slate-400 hover:text-white"><ArrowLeft className="w-6 h-6" /></Link>
                    <div className="flex items-center gap-2"><FileText className="w-5 h-5 text-amber-500" /><span className="text-lg font-bold text-white">Ozempic Lawsuit Guide</span></div>
                    <span className="ml-auto text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-8"><h1 className="text-2xl md:text-3xl font-bold text-white mb-3">Understanding Ozempic Lawsuits</h1><p className="text-slate-400">GLP-1 drug side effects, MDL status, and eligibility</p></div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">{SITE.year} Ozempic Litigation Status</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-amber-900/20 border border-amber-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-amber-400">{OZEMPIC_2026.statistics.activeLawsuits}+</p><p className="text-sm text-amber-200">Active Cases</p></div>
                        <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-red-400">{(OZEMPIC_2026.statistics.fdaReports / 1000).toFixed(0)}K+</p><p className="text-sm text-red-200">FDA Reports</p></div>
                        <div className="bg-yellow-900/20 border border-yellow-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-yellow-400">{formatCurrency(OZEMPIC_2026.statistics.avgSettlement)}</p><p className="text-sm text-yellow-200">Avg Settlement</p></div>
                        <div className="bg-orange-900/20 border border-orange-500/50 rounded-lg p-4 text-center"><p className="text-xl font-bold text-orange-400">MDL 3094</p><p className="text-sm text-orange-200">Federal Court</p></div>
                    </div>
                </div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">Side Effects & Avg Settlements</h2>
                    <div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b border-slate-700"><th className="py-3 text-left text-slate-400">Side Effect</th><th className="py-3 text-center text-slate-400">Avg Settlement</th></tr></thead>
                        <tbody className="text-slate-300">{OZEMPIC_2026.sideEffects.map((s, i) => (<tr key={i} className="border-b border-slate-700/50"><td className="py-3"><p className="text-white font-medium">{s.type}</p><p className="text-xs text-slate-500">{s.description}</p></td><td className="py-3 text-center font-medium text-amber-400">{formatCurrency(s.avgSettlement)}</td></tr>))}</tbody></table></div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-amber-900/20 border border-amber-500/50 rounded-xl p-6">
                        <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2"><Pill className="w-5 h-5 text-amber-500" />Drugs Involved</h2>
                        <ul className="space-y-2 text-sm text-amber-200">{OZEMPIC_2026.drugTypes.map((d, i) => (<li key={i}>• <strong>{d.drug}</strong> ({d.manufacturer})</li>))}</ul>
                    </div>
                    <div className="bg-red-900/20 border border-red-500/50 rounded-xl p-6">
                        <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2"><Shield className="w-5 h-5 text-red-500" />Settlement Factors</h2>
                        <ul className="space-y-2 text-sm text-red-200">{OZEMPIC_2026.lawsuitFactors.map((f, i) => (<li key={i}>• <strong>{f.factor}:</strong> {f.description}</li>))}</ul>
                    </div>
                </div>

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <div className="text-center"><Link href="/ozempic/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold">Calculate Your Settlement<ArrowRight className="w-5 h-5" /></Link></div>
                <p className="mt-8 text-xs text-slate-500 text-center">{OZEMPIC_2026.citation}</p>
            </main>
        </div>
    );
}
