"use client";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Car, FileText, AlertTriangle, Shield } from "lucide-react";
import { SITE, RIDESHARE_2026, formatCurrency } from "@/lib/calculators/rideshare-accident";

export default function RideshareGuidePage() {
    return (
        <>
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/rideshare-accident" className="text-slate-400 hover:text-white"><ArrowLeft className="w-6 h-6" /></Link>
                    <div className="flex items-center gap-2"><FileText className="w-5 h-5 text-amber-500" /><span className="text-lg font-bold text-white">Rideshare Guide</span></div>
                    <span className="ml-auto text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-8"><h1 className="text-2xl md:text-3xl font-bold text-white mb-3">Understanding Rideshare Insurance</h1><p className="text-slate-400">Uber/Lyft coverage periods and settlement factors</p></div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">{SITE.year} Rideshare Statistics</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-amber-900/20 border border-amber-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-amber-400">{(RIDESHARE_2026.statistics.dailyRides / 1000000).toFixed(0)}M</p><p className="text-sm text-amber-200">Daily Rides</p></div>
                        <div className="bg-orange-900/20 border border-orange-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-orange-400">{(RIDESHARE_2026.statistics.annualAccidents / 1000).toFixed(0)}K</p><p className="text-sm text-orange-200">Accidents/Year</p></div>
                        <div className="bg-yellow-900/20 border border-yellow-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-yellow-400">{formatCurrency(RIDESHARE_2026.statistics.avgClaimValue)}</p><p className="text-sm text-yellow-200">Avg Claim</p></div>
                        <div className="bg-purple-900/20 border border-purple-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-purple-400">{RIDESHARE_2026.statistics.fatalitiesPerYear}</p><p className="text-sm text-purple-200">Fatalities/Year</p></div>
                    </div>
                </div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">Insurance Coverage by Period</h2>
                    <div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b border-slate-700"><th className="py-3 text-left text-slate-400">Period</th><th className="py-3 text-center text-slate-400">Coverage</th><th className="py-3 text-left text-slate-400">Details</th></tr></thead>
                        <tbody className="text-slate-300">{RIDESHARE_2026.insuranceTiers.map((t, i) => (<tr key={i} className="border-b border-slate-700/50"><td className="py-3 text-white font-medium">{t.tier}</td><td className="py-3 text-center font-medium text-amber-400">{t.coverage > 0 ? formatCurrency(t.coverage) : "None"}</td><td className="py-3 text-slate-400">{t.description}</td></tr>))}</tbody></table></div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-amber-900/20 border border-amber-500/50 rounded-xl p-6">
                        <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-amber-500" />Injury Types</h2>
                        <ul className="space-y-2 text-sm text-amber-200">{RIDESHARE_2026.injuryTypes.map((t, i) => (<li key={i}>• {t.type}: {formatCurrency(t.avgSettlement)} avg</li>))}</ul>
                    </div>
                    <div className="bg-orange-900/20 border border-orange-500/50 rounded-xl p-6">
                        <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2"><Shield className="w-5 h-5 text-orange-500" />Key Facts</h2>
                        <ul className="space-y-2 text-sm text-orange-200"><li>• Uber: {RIDESHARE_2026.statistics.uberMarketShare}% market share</li><li>• Lyft: {RIDESHARE_2026.statistics.lyftMarketShare}% market share</li><li>• $1M coverage in Periods 2-3</li><li>• Limited coverage in Period 1</li></ul>
                    </div>
                </div>

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <div className="text-center"><Link href="/rideshare-accident/rideshare-calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold">Calculate Your Settlement<ArrowRight className="w-5 h-5" /></Link></div>
                <p className="mt-8 text-xs text-slate-500 text-center">{RIDESHARE_2026.citation}</p>
            </main>
        </>
    );
}
