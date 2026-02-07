"use client";
import Link from "next/link";
import { ArrowLeft, ArrowRight, FileText, Droplets } from "lucide-react";
import { SITE, BENZENE_2026, formatCurrency } from "@/lib/calculators/benzene";

export default function BenzeneGuidePage() {
    return (
        <>

            <main className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-8"><h1 className="text-2xl md:text-3xl font-bold text-white mb-3">Understanding Benzene Lawsuits</h1><p className="text-slate-400">Diseases, exposure sources, and settlement factors</p></div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">{SITE.year} Benzene Statistics</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-purple-900/20 border border-purple-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-purple-400">{(BENZENE_2026.statistics.annualLeukemiaCases / 1000).toFixed(0)}K</p><p className="text-sm text-purple-200">Leukemia/Year</p></div>
                        <div className="bg-rose-900/20 border border-rose-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-rose-400">{(BENZENE_2026.statistics.benzeneRelatedCases / 1000).toFixed(1)}K</p><p className="text-sm text-rose-200">Benzene Cases</p></div>
                        <div className="bg-yellow-900/20 border border-yellow-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-yellow-400">{formatCurrency(BENZENE_2026.statistics.avgSettlement)}</p><p className="text-sm text-yellow-200">Avg Value</p></div>
                        <div className="bg-emerald-900/20 border border-emerald-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-emerald-400">{BENZENE_2026.statistics.oshaPEL} ppm</p><p className="text-sm text-emerald-200">OSHA Limit</p></div>
                    </div>
                </div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">Benzene-Related Diseases</h2>
                    <div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b border-slate-700"><th className="py-3 text-left text-slate-400">Disease</th><th className="py-3 text-center text-slate-400">Avg Settlement</th></tr></thead>
                        <tbody className="text-slate-300">{BENZENE_2026.diseases.map((d, i) => (<tr key={i} className="border-b border-slate-700/50"><td className="py-3"><p className="text-white font-medium">{d.disease}</p><p className="text-xs text-slate-500">{d.description}</p></td><td className="py-3 text-center font-medium text-purple-400">{formatCurrency(d.avgSettlement)}</td></tr>))}</tbody></table></div>
                </div>

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <div className="text-center"><Link href="/benzene/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold">Calculate Your Settlement<ArrowRight className="w-5 h-5" /></Link></div>
                <p className="mt-8 text-xs text-slate-500 text-center">{BENZENE_2026.citation}</p>
            </main>
        </>
    );
}
