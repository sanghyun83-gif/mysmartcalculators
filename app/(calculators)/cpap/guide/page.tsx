"use client";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Wind, FileText, AlertTriangle, Shield } from "lucide-react";
import { SITE, CPAP_2026, formatCurrency } from "@/lib/calculators/cpap";

export default function CpapGuidePage() {
    return (
        <>


            <main className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-8"><h1 className="text-2xl md:text-3xl font-bold text-white mb-3">Understanding the Philips CPAP Recall</h1><p className="text-slate-400">FDA Class I Recall, foam degradation, and lawsuit claims</p></div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">{SITE.year} CPAP Recall Statistics</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-purple-900/20 border border-purple-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-purple-400">{(CPAP_2026.statistics.devicesRecalled / 1000000).toFixed(0)}M+</p><p className="text-sm text-purple-200">Devices Recalled</p></div>
                        <div className="bg-amber-900/20 border border-amber-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-amber-400">{(CPAP_2026.statistics.lawsuitsFiled / 1000).toFixed(0)}K+</p><p className="text-sm text-amber-200">Lawsuits</p></div>
                        <div className="bg-yellow-900/20 border border-yellow-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-yellow-400">{formatCurrency(CPAP_2026.statistics.avgSettlement)}</p><p className="text-sm text-yellow-200">Avg Settlement</p></div>
                        <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-red-400">{(CPAP_2026.statistics.fdaReports / 1000).toFixed(0)}K</p><p className="text-sm text-red-200">FDA Reports</p></div>
                    </div>
                </div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">Injury Types & Avg Settlements</h2>
                    <div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b border-slate-700"><th className="py-3 text-left text-slate-400">Injury Type</th><th className="py-3 text-center text-slate-400">Avg Settlement</th></tr></thead>
                        <tbody className="text-slate-300">{CPAP_2026.injuryTypes.map((inj, i) => (<tr key={i} className="border-b border-slate-700/50"><td className="py-3"><p className="text-white font-medium">{inj.type}</p><p className="text-xs text-slate-500">{inj.description}</p></td><td className="py-3 text-center font-medium text-purple-400">{formatCurrency(inj.avgSettlement)}</td></tr>))}</tbody></table></div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-purple-900/20 border border-purple-500/50 rounded-xl p-6">
                        <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2"><Shield className="w-5 h-5 text-purple-500" />Recalled Devices</h2>
                        <ul className="space-y-2 text-sm text-purple-200">{CPAP_2026.deviceTypes.filter(d => d.recalled).map((d, i) => (<li key={i}>??<strong>{d.device}:</strong> {d.models}</li>))}</ul>
                    </div>
                    <div className="bg-amber-900/20 border border-amber-500/50 rounded-xl p-6">
                        <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2"><Wind className="w-5 h-5 text-amber-500" />Usage Impact</h2>
                        <ul className="space-y-2 text-sm text-amber-200">{CPAP_2026.usageFactors.map((u, i) => (<li key={i}>??<strong>{u.usage}:</strong> {u.multiplier}x multiplier</li>))}</ul>
                    </div>
                </div>

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <div className="text-center"><Link href="/cpap/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold">Calculate Your Settlement<ArrowRight className="w-5 h-5" /></Link></div>
                <p className="mt-8 text-xs text-slate-500 text-center">{CPAP_2026.citation}</p>
            </main>
        </>
    );
}
