"use client";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Eye, FileText, AlertTriangle, Pill } from "lucide-react";
import { SITE, GLP1_2026, formatCurrency } from "@/lib/calculators/glp1-vision";

export default function GLP1GuidePage() {
    return (
        <>
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/glp1-vision" className="text-slate-400 hover:text-white"><ArrowLeft className="w-6 h-6" /></Link>
                    <div className="flex items-center gap-2"><FileText className="w-5 h-5 text-purple-500" /><span className="text-lg font-bold text-white">GLP-1 Guide</span></div>
                    <span className="ml-auto text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-8"><h1 className="text-2xl md:text-3xl font-bold text-white mb-3">Understanding GLP-1 Vision Loss Lawsuits</h1><p className="text-slate-400">JAMA study, NAION risks, and compensation claims</p></div>

                <div className="bg-red-900/30 border border-red-500/50 rounded-xl p-6 mb-6">
                    <div className="flex items-center gap-3 mb-3"><AlertTriangle className="w-6 h-6 text-red-400" /><h2 className="text-lg font-bold text-white">JAMA Ophthalmology Study ({GLP1_2026.statistics.jamaStudyDate})</h2></div>
                    <p className="text-red-200 text-sm">A landmark study published in JAMA Ophthalmology found that patients using semaglutide (Ozempic, Wegovy) had a <strong>{GLP1_2026.statistics.naionRiskIncrease}% increased risk</strong> of developing NAION compared to non-users.</p>
                </div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">{SITE.year} Lawsuit Statistics</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-purple-900/20 border border-purple-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-purple-400">{(GLP1_2026.statistics.totalUsers / 1000000).toFixed(0)}M</p><p className="text-sm text-purple-200">Users</p></div>
                        <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-red-400">{GLP1_2026.statistics.naionRiskIncrease}%</p><p className="text-sm text-red-200">Risk/p></div>
                        <div className="bg-yellow-900/20 border border-yellow-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-yellow-400">{formatCurrency(GLP1_2026.statistics.avgSettlement)}</p><p className="text-sm text-yellow-200">Avg Value</p></div>
                        <div className="bg-rose-900/20 border border-rose-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-rose-400">{GLP1_2026.statistics.lawsuitsFiled}+</p><p className="text-sm text-rose-200">Lawsuits</p></div>
                    </div>
                </div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><Pill className="w-5 h-5 text-purple-400" />GLP-1 Medications in Lawsuits</h2>
                    <div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b border-slate-700"><th className="py-3 text-left text-slate-400">Medication</th><th className="py-3 text-left text-slate-400">Manufacturer</th><th className="py-3 text-center text-slate-400">Est. Users</th></tr></thead>
                        <tbody className="text-slate-300">{GLP1_2026.medications.map((m, i) => (<tr key={i} className="border-b border-slate-700/50"><td className="py-3 font-medium text-white">{m.name}</td><td className="py-3">{m.manufacturer}</td><td className="py-3 text-center text-purple-400">{(m.users / 1000000).toFixed(0)}M+</td></tr>))}</tbody></table></div>
                </div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">Vision Injuries & Avg Settlements</h2>
                    <div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b border-slate-700"><th className="py-3 text-left text-slate-400">Injury Type</th><th className="py-3 text-center text-slate-400">Avg Settlement</th></tr></thead>
                        <tbody className="text-slate-300">{GLP1_2026.visionInjuries.map((v, i) => (<tr key={i} className="border-b border-slate-700/50"><td className="py-3"><p className="text-white font-medium">{v.type}</p><p className="text-xs text-slate-500">{v.description}</p></td><td className="py-3 text-center font-medium text-purple-400">{formatCurrency(v.avgSettlement)}</td></tr>))}</tbody></table></div>
                </div>

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <div className="text-center"><Link href="/glp1-vision/glp1-calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold">Calculate Your Settlement<ArrowRight className="w-5 h-5" /></Link></div>
                <p className="mt-8 text-xs text-slate-500 text-center">{GLP1_2026.citation}</p>
            </main>
        </>
    );
}
