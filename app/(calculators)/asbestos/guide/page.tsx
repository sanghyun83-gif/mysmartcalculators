"use client";
import Link from "next/link";
import { ArrowLeft, ArrowRight, FileText, Activity } from "lucide-react";
import { SITE, ASBESTOS_2026, formatCurrency } from "@/lib/calculators/asbestos";

export default function AsbestosGuidePage() {
    return (
        <>

            <main className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-8"><h1 className="text-2xl md:text-3xl font-bold text-white mb-3">Understanding Asbestos Lawsuits</h1><p className="text-slate-400">Diseases, trust funds, and settlement factors</p></div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">{SITE.year} Asbestos Statistics</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-purple-900/20 border border-purple-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-purple-400">{(ASBESTOS_2026.statistics.annualDeaths / 1000).toFixed(0)}K</p><p className="text-sm text-purple-200">Deaths/Year</p></div>
                        <div className="bg-rose-900/20 border border-rose-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-rose-400">{(ASBESTOS_2026.statistics.annualMesotheliomaCases / 1000).toFixed(1)}K</p><p className="text-sm text-rose-200">Meso Cases</p></div>
                        <div className="bg-yellow-900/20 border border-yellow-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-yellow-400">{formatCurrency(ASBESTOS_2026.statistics.avgMesotheliomaSettlement)}</p><p className="text-sm text-yellow-200">Avg Value</p></div>
                        <div className="bg-emerald-900/20 border border-emerald-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-emerald-400">${(ASBESTOS_2026.statistics.trustFundsTotal / 1000000000).toFixed(0)}B</p><p className="text-sm text-emerald-200">Trust Funds</p></div>
                    </div>
                </div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">Major Asbestos Trust Funds</h2>
                    <div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b border-slate-700"><th className="py-3 text-left text-slate-400">Company/Trust</th><th className="py-3 text-center text-slate-400">Amount</th><th className="py-3 text-center text-slate-400">Status</th></tr></thead>
                        <tbody className="text-slate-300">{ASBESTOS_2026.trustFunds.map((t, i) => (<tr key={i} className="border-b border-slate-700/50"><td className="py-3 text-white font-medium">{t.company}</td><td className="py-3 text-center text-purple-400">{formatCurrency(t.amount)}</td><td className="py-3 text-center"><span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded text-xs">{t.status}</span></td></tr>))}</tbody></table></div>
                </div>

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <div className="text-center"><Link href="/asbestos/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold">Calculate Your Settlement<ArrowRight className="w-5 h-5" /></Link></div>
                <p className="mt-8 text-xs text-slate-500 text-center">{ASBESTOS_2026.citation}</p>
            </main>
        </>
    );
}
