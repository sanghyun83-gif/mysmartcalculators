"use client";
import Link from "next/link";
import { ArrowLeft, ArrowRight, FileText, AlertTriangle } from "lucide-react";
import { SITE, KNEE_2026, formatCurrency } from "@/lib/calculators/knee-implant";

export default function KneeGuidePage() {
    return (
        <>
            <main className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-8"><h1 className="text-2xl md:text-3xl font-bold text-white mb-3">Understanding Knee Implant Lawsuits</h1><p className="text-slate-400">Recalls, defects, and compensation claims</p></div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">{SITE.year} Lawsuit Statistics</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-purple-900/20 border border-purple-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-purple-400">{(KNEE_2026.statistics.annualSurgeries / 1000).toFixed(0)}K</p><p className="text-sm text-purple-200">Annual</p></div>
                        <div className="bg-rose-900/20 border border-rose-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-rose-400">{(KNEE_2026.statistics.lawsuitsFiled / 1000).toFixed(1)}K</p><p className="text-sm text-rose-200">Lawsuits</p></div>
                        <div className="bg-yellow-900/20 border border-yellow-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-yellow-400">{formatCurrency(KNEE_2026.statistics.avgSettlement)}</p><p className="text-sm text-yellow-200">Avg Value</p></div>
                        <div className="bg-orange-900/20 border border-orange-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-orange-400">{KNEE_2026.statistics.failureRate}%</p><p className="text-sm text-orange-200">Failure Rate</p></div>
                    </div>
                </div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-red-400" />Recalled Knee Implant Brands</h2>
                    <div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b border-slate-700"><th className="py-3 text-left text-slate-400">Brand</th><th className="py-3 text-left text-slate-400">Manufacturer</th><th className="py-3 text-left text-slate-400">Recall Reason</th><th className="py-3 text-center text-slate-400">Factor</th></tr></thead>
                        <tbody className="text-slate-300">{KNEE_2026.recalledBrands.filter(b => b.recalled).map((b, i) => (<tr key={i} className="border-b border-slate-700/50"><td className="py-3 font-medium text-white">{b.brand}</td><td className="py-3">{b.manufacturer}</td><td className="py-3 text-red-300">{b.reason}</td><td className="py-3 text-center text-purple-400 font-bold">{b.multiplier}x</td></tr>))}</tbody></table></div>
                </div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">Complications & Avg Settlements</h2>
                    <div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b border-slate-700"><th className="py-3 text-left text-slate-400">Complication</th><th className="py-3 text-center text-slate-400">Avg Settlement</th></tr></thead>
                        <tbody className="text-slate-300">{KNEE_2026.complications.map((c, i) => (<tr key={i} className="border-b border-slate-700/50"><td className="py-3"><p className="text-white font-medium">{c.type}</p><p className="text-xs text-slate-500">{c.description}</p></td><td className="py-3 text-center font-medium text-purple-400">{formatCurrency(c.avgSettlement)}</td></tr>))}</tbody></table></div>
                </div>

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <div className="text-center"><Link href="/knee-implant/knee-calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold">Calculate Your Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </main>
        </>
    );
}
