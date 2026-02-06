"use client";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Truck, FileText, AlertTriangle, Shield } from "lucide-react";
import { SITE, TRUCK_2026, formatCurrency } from "@/lib/calculators/18-wheeler";

export default function TruckGuidePage() {
    return (
        <>

            <main className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-8"><h1 className="text-2xl md:text-3xl font-bold text-white mb-3">Understanding 18 Wheeler Accidents</h1><p className="text-slate-400">Trucking liability, FMCSA regulations, and claims</p></div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">{SITE.year} Truck Accident Statistics</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-red-400">{TRUCK_2026.statistics.annualFatalities.toLocaleString()}</p><p className="text-sm text-red-200">Fatalities</p></div>
                        <div className="bg-amber-900/20 border border-amber-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-amber-400">{(TRUCK_2026.statistics.annualInjuries / 1000).toFixed(0)}K+</p><p className="text-sm text-amber-200">Injuries</p></div>
                        <div className="bg-yellow-900/20 border border-yellow-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-yellow-400">{formatCurrency(TRUCK_2026.statistics.avgSettlement)}</p><p className="text-sm text-yellow-200">Avg Settlement</p></div>
                        <div className="bg-orange-900/20 border border-orange-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-orange-400">{(TRUCK_2026.statistics.fmcsaViolations / 1000).toFixed(0)}K</p><p className="text-sm text-orange-200">FMCSA Violations</p></div>
                    </div>
                </div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">Injury Types & Avg Settlements</h2>
                    <div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b border-slate-700"><th className="py-3 text-left text-slate-400">Injury Type</th><th className="py-3 text-center text-slate-400">Avg Settlement</th></tr></thead>
                        <tbody className="text-slate-300">{TRUCK_2026.injuryTypes.map((inj, i) => (<tr key={i} className="border-b border-slate-700/50"><td className="py-3"><p className="text-white font-medium">{inj.type}</p><p className="text-xs text-slate-500">{inj.description}</p></td><td className="py-3 text-center font-medium text-red-400">{formatCurrency(inj.avgSettlement)}</td></tr>))}</tbody></table></div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-red-900/20 border border-red-500/50 rounded-xl p-6">
                        <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2"><Shield className="w-5 h-5 text-red-500" />Liable Parties</h2>
                        <ul className="space-y-2 text-sm text-red-200">{TRUCK_2026.liabilityParties.map((p, i) => (<li key={i}>??<strong>{p.party}:</strong> {p.description}</li>))}</ul>
                    </div>
                    <div className="bg-amber-900/20 border border-amber-500/50 rounded-xl p-6">
                        <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2"><Truck className="w-5 h-5 text-amber-500" />Accident Types</h2>
                        <ul className="space-y-2 text-sm text-amber-200">{TRUCK_2026.accidentTypes.map((a, i) => (<li key={i}>??<strong>{a.type}:</strong> {a.cases}</li>))}</ul>
                    </div>
                </div>

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <div className="text-center"><Link href="/18-wheeler/truck-calculator" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold">Calculate Your Settlement<ArrowRight className="w-5 h-5" /></Link></div>
                <p className="mt-8 text-xs text-slate-500 text-center">{TRUCK_2026.citation}</p>
            </main>
        </>
    );
}
