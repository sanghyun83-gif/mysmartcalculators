"use client";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Droplet, FileText, AlertTriangle, Shield } from "lucide-react";
import { SITE, LEJEUNE_2026, formatCurrency } from "@/lib/calculators/camp-lejeune";

export default function LejeuneGuidePage() {
    return (
        <>

            <main className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-8"><h1 className="text-2xl md:text-3xl font-bold text-white mb-3">Understanding Camp Lejeune Lawsuits</h1><p className="text-slate-400">PACT Act, eligibility, and compensation claims</p></div>

                <div className="bg-red-900/30 border border-red-500/50 rounded-xl p-6 mb-6">
                    <div className="flex items-center gap-3 mb-3"><AlertTriangle className="w-6 h-6 text-red-400" /><h2 className="text-lg font-bold text-white">Filing Deadline: {LEJEUNE_2026.statistics.deadlineExtended}</h2></div>
                    <p className="text-red-200 text-sm">Under the PACT Act signed on {LEJEUNE_2026.statistics.pactActSigned}, eligible claimants must file before the deadline. Over {(LEJEUNE_2026.statistics.claimsFiled / 1000).toFixed(0)}K claims already filed.</p>
                </div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">{SITE.year} Lawsuit Statistics</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-amber-900/20 border border-amber-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-amber-400">{(LEJEUNE_2026.statistics.exposedPeople / 1000000).toFixed(0)}M</p><p className="text-sm text-amber-200">Exposed</p></div>
                        <div className="bg-rose-900/20 border border-rose-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-rose-400">{(LEJEUNE_2026.statistics.claimsFiled / 1000).toFixed(0)}K</p><p className="text-sm text-rose-200">Claims</p></div>
                        <div className="bg-yellow-900/20 border border-yellow-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-yellow-400">{formatCurrency(LEJEUNE_2026.statistics.avgSettlement)}</p><p className="text-sm text-yellow-200">Avg Value</p></div>
                        <div className="bg-orange-900/20 border border-orange-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-orange-400">34yrs</p><p className="text-sm text-orange-200">Contamination</p></div>
                    </div>
                </div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><Droplet className="w-5 h-5 text-amber-400" />Water Contaminants</h2>
                    <div className="grid md:grid-cols-2 gap-4">{LEJEUNE_2026.contaminants.map((c, i) => (<div key={i} className="bg-red-900/20 border border-red-500/30 rounded-lg p-4"><h3 className="text-white font-medium">{c.name}</h3><p className="text-red-300 text-sm">{c.level}</p></div>))}</div>
                </div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">Qualifying Conditions & Avg Settlements</h2>
                    <div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b border-slate-700"><th className="py-3 text-left text-slate-400">Condition</th><th className="py-3 text-center text-slate-400">Tier</th><th className="py-3 text-center text-slate-400">Avg Settlement</th></tr></thead>
                        <tbody className="text-slate-300">{LEJEUNE_2026.conditions.map((c, i) => (<tr key={i} className="border-b border-slate-700/50"><td className="py-3"><p className="text-white font-medium">{c.condition}</p></td><td className="py-3 text-center">{c.tier}</td><td className="py-3 text-center font-medium text-amber-400">{formatCurrency(c.avgSettlement)}</td></tr>))}</tbody></table></div>
                </div>

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <div className="text-center"><Link href="/camp-lejeune/lejeune-calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold">Calculate Your Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </main>
        </>
    );
}
