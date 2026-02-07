"use client";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Activity, FileText, AlertTriangle, Shield } from "lucide-react";
import { SITE, HIP_2026, formatCurrency } from "@/lib/calculators/hip-implant";

export default function HipGuidePage() {
    return (
        <>
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/hip-implant" className="text-slate-400 hover:text-white"><ArrowLeft className="w-6 h-6" /></Link>
                    <div className="flex items-center gap-2"><FileText className="w-5 h-5 text-purple-500" /><span className="text-lg font-bold text-white">Hip Implant Guide</span></div>
                    <span className="ml-auto text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-8"><h1 className="text-2xl md:text-3xl font-bold text-white mb-3">Understanding Hip Implant Lawsuits</h1><p className="text-slate-400">Recalled devices, metallosis, and settlement claims</p></div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">{SITE.year} Hip Implant Statistics</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-purple-900/20 border border-purple-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-purple-400">{(HIP_2026.statistics.devicesRecalled / 1000).toFixed(0)}K+</p><p className="text-sm text-purple-200">Recalled</p></div>
                        <div className="bg-rose-900/20 border border-rose-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-rose-400">{(HIP_2026.statistics.lawsuitsFiled / 1000).toFixed(0)}K+</p><p className="text-sm text-rose-200">Lawsuits</p></div>
                        <div className="bg-yellow-900/20 border border-yellow-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-yellow-400">{formatCurrency(HIP_2026.statistics.avgSettlement)}</p><p className="text-sm text-yellow-200">Avg Settlement</p></div>
                        <div className="bg-amber-900/20 border border-amber-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-amber-400">${(HIP_2026.statistics.totalSettlements / 1000000000).toFixed(0)}B</p><p className="text-sm text-amber-200">Total Paid</p></div>
                    </div>
                </div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">Complication Types & Avg Settlements</h2>
                    <div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b border-slate-700"><th className="py-3 text-left text-slate-400">Complication</th><th className="py-3 text-center text-slate-400">Avg Settlement</th></tr></thead>
                        <tbody className="text-slate-300">{HIP_2026.complicationTypes.map((c, i) => (<tr key={i} className="border-b border-slate-700/50"><td className="py-3"><p className="text-white font-medium">{c.type}</p><p className="text-xs text-slate-500">{c.description}</p></td><td className="py-3 text-center font-medium text-purple-400">{formatCurrency(c.avgSettlement)}</td></tr>))}</tbody></table></div>
                </div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-red-500" />Recalled Hip Implants</h2>
                    <div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b border-slate-700"><th className="py-3 text-left text-slate-400">Brand</th><th className="py-3 text-left text-slate-400">Manufacturer</th><th className="py-3 text-right text-slate-400">Settlements</th></tr></thead>
                        <tbody className="text-slate-300">{HIP_2026.implantBrands.map((b, i) => (<tr key={i} className="border-b border-slate-700/50"><td className="py-3 text-white font-medium">{b.brand}</td><td className="py-3">{b.manufacturer}</td><td className="py-3 text-right text-purple-400">{b.settlements > 0 ? formatCurrency(b.settlements) : "Pending"}</td></tr>))}</tbody></table></div>
                </div>

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <div className="text-center"><Link href="/hip-implant/hip-calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold">Calculate Your Settlement<ArrowRight className="w-5 h-5" /></Link></div>
                <p className="mt-8 text-xs text-slate-500 text-center">{HIP_2026.citation}</p>
            </main>
        </>
    );
}
