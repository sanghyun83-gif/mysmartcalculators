"use client";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Shield, Activity } from "lucide-react";
import { SITE, ASBESTOS_2026, formatCurrency } from "@/lib/calculators/asbestos";

export default function ExposureSitesPage() {
    return (
        <>

            <main className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-8"><h1 className="text-2xl md:text-3xl font-bold text-white mb-3">Asbestos Exposure Sites</h1><p className="text-slate-400">Shipyards, construction, mining, and more</p></div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">Exposure Sites & Multipliers</h2>
                    <div className="space-y-4">{ASBESTOS_2026.exposureSites.map((s, i) => (<div key={i} className="bg-slate-700/50 rounded-lg p-4 flex justify-between items-center"><div><h3 className="text-white font-medium">{s.site}</h3><p className="text-sm text-slate-400">{s.description}</p></div><div className="text-right"><p className="text-lg font-bold text-purple-400">{s.multiplier}x</p><p className="text-xs text-slate-500">multiplier</p></div></div>))}</div>
                </div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">High-Risk Occupations</h2>
                    <div className="grid md:grid-cols-2 gap-3">
                        {["Shipyard Workers", "Insulators", "Electricians", "Plumbers", "Pipefitters", "Construction Workers", "Boilermakers", "Navy Veterans", "Miners", "Refinery Workers", "Auto Mechanics", "HVAC Technicians"].map((o, i) => (
                            <div key={i} className="bg-slate-700/50 rounded-lg p-3 flex items-center gap-2"><span className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 text-sm">{i + 1}</span><span className="text-white">{o}</span></div>
                        ))}
                    </div>
                </div>

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <div className="text-center"><Link href="/asbestos/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold">Calculate Your Settlement<ArrowRight className="w-5 h-5" /></Link></div>
                <p className="mt-8 text-xs text-slate-500 text-center">{ASBESTOS_2026.citation}</p>
            </main>
        </>
    );
}
