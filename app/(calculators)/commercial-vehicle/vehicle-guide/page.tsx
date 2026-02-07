"use client";
import Link from "next/link";
import { ArrowLeft, ArrowRight, FileText, Truck } from "lucide-react";
import { SITE, COMMERCIAL_2026, formatCurrency } from "@/lib/calculators/commercial-vehicle";

export default function VehicleGuidePage() {
    return (
        <>

            <main className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-8"><h1 className="text-2xl md:text-3xl font-bold text-white mb-3">Commercial Vehicle Lawsuit Guide</h1><p className="text-slate-400">FMCSA regulations, liable parties, settlement factors</p></div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">{SITE.year} Crash Statistics</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-amber-900/20 border border-amber-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-amber-400">{(COMMERCIAL_2026.statistics.annualCrashes / 1000).toFixed(0)}K</p><p className="text-sm text-amber-200">Crashes</p></div>
                        <div className="bg-rose-900/20 border border-rose-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-rose-400">{(COMMERCIAL_2026.statistics.annualDeaths / 1000).toFixed(1)}K</p><p className="text-sm text-rose-200">Deaths</p></div>
                        <div className="bg-yellow-900/20 border border-yellow-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-yellow-400">{formatCurrency(COMMERCIAL_2026.statistics.avgSettlement)}</p><p className="text-sm text-yellow-200">Avg Value</p></div>
                        <div className="bg-orange-900/20 border border-orange-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-orange-400">{(COMMERCIAL_2026.statistics.annualInjuries / 1000).toFixed(0)}K</p><p className="text-sm text-orange-200">Injuries</p></div>
                    </div>
                </div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">Vehicle Types & Avg Settlements</h2>
                    <div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b border-slate-700"><th className="py-3 text-left text-slate-400">Vehicle Type</th><th className="py-3 text-center text-slate-400">Avg Settlement</th></tr></thead>
                        <tbody className="text-slate-300">{COMMERCIAL_2026.vehicleTypes.map((v, i) => (<tr key={i} className="border-b border-slate-700/50"><td className="py-3"><p className="text-white font-medium">{v.type}</p><p className="text-xs text-slate-500">{v.description}</p></td><td className="py-3 text-center font-medium text-amber-400">{formatCurrency(v.avgSettlement)}</td></tr>))}</tbody></table></div>
                </div>

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <div className="text-center"><Link href="/commercial-vehicle/vehicle-calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold">Calculate Your Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </main>
        </>
    );
}
