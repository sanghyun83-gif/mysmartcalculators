"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Flame, FileText, AlertTriangle, Heart } from "lucide-react";
import { SITE, BURN_2026, formatCurrency } from "@/lib/calculators/burn-injury";

export default function BurnGuidePage() {
    return (
        <>

            <main className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">Understanding Burn Injuries</h1>
                    <p className="text-slate-400">Burn degrees, TBSA calculations, and settlement factors</p>
                </div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">{SITE.year} Burn Statistics</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-orange-900/20 border border-orange-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-orange-400">{(BURN_2026.statistics.annualBurnCases / 1000).toFixed(0)}K</p><p className="text-sm text-orange-200">Cases/Year</p></div>
                        <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-red-400">{BURN_2026.statistics.hospitalAdmissions.toLocaleString()}</p><p className="text-sm text-red-200">Hospitalizations</p></div>
                        <div className="bg-yellow-900/20 border border-yellow-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-yellow-400">{BURN_2026.statistics.avgHospitalDays}</p><p className="text-sm text-yellow-200">Avg Hospital Days</p></div>
                        <div className="bg-amber-900/20 border border-amber-500/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-amber-400">{BURN_2026.statistics.annualDeaths.toLocaleString()}</p><p className="text-sm text-amber-200">Deaths/Year</p></div>
                    </div>
                </div>

                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">Burn Degrees & Settlements</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead><tr className="border-b border-slate-700"><th className="py-3 text-left text-slate-400">Burn Degree</th><th className="py-3 text-center text-slate-400">Avg Settlement</th><th className="py-3 text-center text-slate-400">Treatment Cost</th></tr></thead>
                            <tbody className="text-slate-300">
                                {BURN_2026.burnDegrees.map((burn, index) => (
                                    <tr key={index} className="border-b border-slate-700/50">
                                        <td className="py-3"><p className="text-white font-medium">{burn.degree}</p><p className="text-xs text-slate-500">{burn.description}</p></td>
                                        <td className="py-3 text-center font-medium text-orange-400">{formatCurrency(burn.avgSettlement)}</td>
                                        <td className="py-3 text-center text-slate-300">{formatCurrency(burn.treatmentCost)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-orange-900/20 border border-orange-500/50 rounded-xl p-6">
                        <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-orange-500" />Common Causes</h2>
                        <ul className="space-y-2 text-sm text-orange-200">{BURN_2026.causes.map((cause, i) => (<li key={i}>??{cause}</li>))}</ul>
                    </div>
                    <div className="bg-red-900/20 border border-red-500/50 rounded-xl p-6">
                        <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2"><Heart className="w-5 h-5 text-red-500" />TBSA Multipliers</h2>
                        <ul className="space-y-2 text-sm text-red-200">{BURN_2026.tbsaMultipliers.map((t, i) => (<li key={i}>??{t.range}: {t.description} ({t.multiplier}x)</li>))}</ul>
                    </div>
                </div>

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <div className="text-center">
                    <Link href="/burn-injury/calculator" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">Calculate Your Settlement<ArrowRight className="w-5 h-5" /></Link>
                </div>

            </main>
        </>
    );
}
