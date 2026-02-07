"use client";
import Link from "next/link";
import { ArrowLeft, ArrowRight, FileText } from "lucide-react";
import { SITE, CRANE_2026, formatCurrency } from "@/lib/calculators/crane";

export default function CraneGuidePage() {
    return (
        <>


            <main className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-8"><h1 className="text-2xl md:text-3xl font-bold text-white mb-3">Understanding Crane Injury Claims</h1><p className="text-slate-400">OSHA regulations, liable parties, settlement factors</p></div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">{SITE.year} Crane Accident Statistics</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-amber-900/20 border border-amber-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-amber-400">{CRANE_2026.statistics.annualDeaths}</p><p className="text-sm text-amber-200">Deaths/Year</p></div>
                        <div className="bg-rose-900/20 border border-rose-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-rose-400">{(CRANE_2026.statistics.annualInjuries / 1000).toFixed(1)}K</p><p className="text-sm text-rose-200">Injuries/Year</p></div>
                        <div className="bg-yellow-900/20 border border-yellow-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-yellow-400">{formatCurrency(CRANE_2026.statistics.avgSettlement)}</p><p className="text-sm text-yellow-200">Avg Settlement</p></div>
                        <div className="bg-orange-900/20 border border-orange-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-orange-400">{formatCurrency(CRANE_2026.statistics.oshaFines2025)}</p><p className="text-sm text-orange-200">OSHA Fines '25</p></div>
                    </div>
                </div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">Potentially Liable Parties</h2>
                    <div className="grid md:grid-cols-2 gap-3">{CRANE_2026.liableParties.map((p, i) => (<div key={i} className="bg-slate-700/50 rounded-lg p-3 flex items-center gap-2"><span className="w-6 h-6 bg-amber-500/20 rounded-full flex items-center justify-center text-amber-400 text-sm">{i + 1}</span><span className="text-white">{p}</span></div>))}</div>
                </div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">Accident Types & Settlement Values</h2>
                    <div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b border-slate-700"><th className="py-3 text-left text-slate-400">Accident Type</th><th className="py-3 text-center text-slate-400">Avg Settlement</th><th className="py-3 text-center text-slate-400">Fatality Rate</th></tr></thead>
                        <tbody className="text-slate-300">{CRANE_2026.accidentTypes.map((a, i) => (<tr key={i} className="border-b border-slate-700/50"><td className="py-3"><p className="text-white font-medium">{a.type}</p><p className="text-xs text-slate-500">{a.description}</p></td><td className="py-3 text-center font-medium text-amber-400">{formatCurrency(a.avgSettlement)}</td><td className="py-3 text-center text-red-400">{a.fatalityRate}%</td></tr>))}</tbody></table></div>
                </div>

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <div className="text-center"><Link href="/crane/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold">Calculate Your Settlement<ArrowRight className="w-5 h-5" /></Link></div>
                <p className="mt-8 text-xs text-slate-500 text-center">{CRANE_2026.citation}</p>
            </main>
        </>
    );
}
