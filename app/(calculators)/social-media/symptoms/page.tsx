"use client";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Brain, AlertTriangle } from "lucide-react";
import { SITE, SOCIAL_2026, formatCurrency } from "@/lib/calculators/social-media";

export default function SymptomsPage() {
    return (
        <>
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/social-media" className="text-slate-400 hover:text-white"><ArrowLeft className="w-6 h-6" /></Link>
                    <div className="flex items-center gap-2"><Brain className="w-5 h-5 text-amber-500" /><span className="text-lg font-bold text-white">Symptoms & Settlements</span></div>
                    <span className="ml-auto text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-8"><h1 className="text-2xl md:text-3xl font-bold text-white mb-3">Mental Health Symptoms & Settlements</h1><p className="text-slate-400">Depression, anxiety, eating disorders, and more</p></div>

                <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-4 mb-8">
                    <div className="flex items-start gap-2"><AlertTriangle className="w-5 h-5 text-red-400 mt-0.5" /><p className="text-red-200 text-sm">Internal documents from Meta show they knew Instagram was harmful to teen mental health, especially for girls with body image issues.</p></div>
                </div>

                <div className="grid gap-6 mb-8">
                    {SOCIAL_2026.symptoms.map((s, i) => (
                        <div key={i} className={`bg-slate-800 border rounded-xl p-6 ${s.tier === 1 ? 'border-red-500/50' : s.tier === 2 ? 'border-amber-500/50' : 'border-slate-700'}`}>
                            <div className="flex justify-between items-start mb-4">
                                <div><h2 className="text-xl font-bold text-white">{s.symptom}</h2><p className="text-slate-400 text-sm">{s.description}</p></div>
                                <span className={`px-3 py-1 rounded-full text-xs font-bold ${s.tier === 1 ? 'bg-red-500/20 text-red-300' : s.tier === 2 ? 'bg-amber-500/20 text-amber-300' : 'bg-slate-500/20 text-slate-300'}`}>Tier {s.tier}</span>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="text-center"><p className="text-sm text-slate-400">Min</p><p className="text-lg font-bold text-slate-300">{formatCurrency(s.minSettlement)}</p></div>
                                <div className="text-center bg-amber-900/20 rounded-lg p-2"><p className="text-sm text-amber-300">Average</p><p className="text-xl font-bold text-amber-400">{formatCurrency(s.avgSettlement)}</p></div>
                                <div className="text-center"><p className="text-sm text-slate-400">Max</p><p className="text-lg font-bold text-slate-300">{formatCurrency(s.maxSettlement)}</p></div>
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
