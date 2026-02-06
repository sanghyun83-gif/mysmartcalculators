"use client";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Users, AlertTriangle } from "lucide-react";
import { SITE, SOCIAL_2026, formatCurrency } from "@/lib/calculators/social-media";

export default function AgeGroupsPage() {
    return (
        <>
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/social-media" className="text-slate-400 hover:text-white"><ArrowLeft className="w-6 h-6" /></Link>
                    <div className="flex items-center gap-2"><Users className="w-5 h-5 text-amber-500" /><span className="text-lg font-bold text-white">Age Group Impact</span></div>
                    <span className="ml-auto text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-8"><h1 className="text-2xl md:text-3xl font-bold text-white mb-3">Age Group Settlement Factors</h1><p className="text-slate-400">Younger users receive higher settlements due to vulnerability</p></div>

                <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-4 mb-8">
                    <div className="flex items-start gap-2"><AlertTriangle className="w-5 h-5 text-red-400 mt-0.5" /><p className="text-red-200 text-sm">Children under 13 should never have been on these platforms (COPPA violations). Underage users receive the highest settlement multipliers.</p></div>
                </div>

                <div className="space-y-6 mb-8">
                    {SOCIAL_2026.ageGroups.map((a, i) => (
                        <div key={i} className={`bg-slate-800 border rounded-xl p-6 ${a.multiplier >= 1.3 ? 'border-red-500/50' : a.multiplier >= 1.0 ? 'border-amber-500/50' : 'border-slate-700'}`}>
                            <div className="flex justify-between items-center">
                                <div><h2 className="text-xl font-bold text-white">{a.group}</h2><p className="text-slate-400 text-sm">{a.description}</p></div>
                                <div className="text-right">
                                    <p className={`text-3xl font-bold ${a.multiplier >= 1.3 ? 'text-red-400' : a.multiplier >= 1.0 ? 'text-amber-400' : 'text-slate-400'}`}>{a.multiplier}x</p>
                                    <p className="text-sm text-slate-500">Settlement Multiplier</p>
                                </div>
                            </div>
                            <div className="mt-4 bg-slate-700/50 rounded-lg p-3">
                                <p className="text-sm text-slate-300">Example: {formatCurrency(400000)} base ??<span className="text-amber-400 font-bold">{formatCurrency(400000 * a.multiplier)}</span> with age factor</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <div className="text-center"><Link href="/social-media/social-calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold">Calculate Your Settlement<ArrowRight className="w-5 h-5" /></Link></div>
                <p className="mt-8 text-xs text-slate-500 text-center">{SOCIAL_2026.citation}</p>
            </main>
        </>
    );
}
