"use client";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Anchor, FileText, AlertTriangle, Shield } from "lucide-react";
import { SITE, MARITIME_2026, formatCurrency } from "@/lib/calculators/offshore";

export default function OffshoreGuidePage() {
    return (
        <>
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/offshore" className="text-slate-400 hover:text-white"><ArrowLeft className="w-6 h-6" /></Link>
                    <div className="flex items-center gap-2"><FileText className="w-5 h-5 text-blue-500" /><span className="text-lg font-bold text-white">Maritime Injury Guide</span></div>
                    <span className="ml-auto text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-8"><h1 className="text-2xl md:text-3xl font-bold text-white mb-3">Understanding Maritime Injury Claims</h1><p className="text-slate-400">Jones Act, LHWCA, and seaman rights explained</p></div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">{SITE.year} Maritime Injury Statistics</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-blue-900/20 border border-blue-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-blue-400">{MARITIME_2026.statistics.annualInjuries.toLocaleString()}+</p><p className="text-sm text-blue-200">Annual Injuries</p></div>
                        <div className="bg-cyan-900/20 border border-cyan-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-cyan-400">{MARITIME_2026.statistics.jonesActCases.toLocaleString()}+</p><p className="text-sm text-cyan-200">Cases/Year</p></div>
                        <div className="bg-teal-900/20 border border-teal-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-teal-400">{formatCurrency(MARITIME_2026.statistics.avgSettlement)}</p><p className="text-sm text-teal-200">Avg Settlement</p></div>
                        <div className="bg-sky-900/20 border border-sky-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-sky-400">{MARITIME_2026.statistics.uscgReports.toLocaleString()}</p><p className="text-sm text-sky-200">USCG Reports</p></div>
                    </div>
                </div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">Injury Types & Avg Settlements</h2>
                    <div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b border-slate-700"><th className="py-3 text-left text-slate-400">Injury Type</th><th className="py-3 text-center text-slate-400">Avg Settlement</th></tr></thead>
                        <tbody className="text-slate-300">{MARITIME_2026.injuryTypes.map((inj, i) => (<tr key={i} className="border-b border-slate-700/50"><td className="py-3"><p className="text-white font-medium">{inj.type}</p><p className="text-xs text-slate-500">{inj.description}</p></td><td className="py-3 text-center font-medium text-blue-400">{formatCurrency(inj.avgSettlement)}</td></tr>))}</tbody></table></div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-blue-900/20 border border-blue-500/50 rounded-xl p-6">
                        <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2"><Shield className="w-5 h-5 text-blue-500" />Worker Classifications</h2>
                        <ul className="space-y-2 text-sm text-blue-200">{MARITIME_2026.workerTypes.map((w, i) => (<li key={i}>??<strong>{w.type}:</strong> {w.description}</li>))}</ul>
                    </div>
                    <div className="bg-cyan-900/20 border border-cyan-500/50 rounded-xl p-6">
                        <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2"><Anchor className="w-5 h-5 text-cyan-500" />Vessel Types</h2>
                        <ul className="space-y-2 text-sm text-cyan-200">{MARITIME_2026.vesselTypes.map((v, i) => (<li key={i}>??<strong>{v.vessel}:</strong> {v.type}</li>))}</ul>
                    </div>
                </div>

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <div className="text-center"><Link href="/offshore/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold">Calculate Your Settlement<ArrowRight className="w-5 h-5" /></Link></div>
                <p className="mt-8 text-xs text-slate-500 text-center">{MARITIME_2026.citation}</p>
            </main>
        </>
    );
}
