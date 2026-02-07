"use client";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Smartphone, AlertTriangle } from "lucide-react";
import { SITE, SOCIAL_2026, formatCurrency } from "@/lib/calculators/social-media";

export default function PlatformsPage() {
    return (
        <>
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/social-media" className="text-slate-400 hover:text-white"><ArrowLeft className="w-6 h-6" /></Link>
                    <div className="flex items-center gap-2"><Smartphone className="w-5 h-5 text-amber-500" /><span className="text-lg font-bold text-white">Platform Lawsuits</span></div>
                    <span className="ml-auto text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-8"><h1 className="text-2xl md:text-3xl font-bold text-white mb-3">Social Media Platform Lawsuits</h1><p className="text-slate-400">Meta, TikTok, Snapchat, YouTube lawsuit details</p></div>

                <div className="space-y-6 mb-8">
                    {SOCIAL_2026.platforms.map((p, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
                            <div className="bg-amber-900/30 border-b border-slate-700 p-4">
                                <h2 className="text-xl font-bold text-white">{p.name}</h2>
                                <p className="text-amber-300 text-sm">{p.defendant}</p>
                            </div>
                            <div className="p-6">
                                <div className="grid md:grid-cols-3 gap-4 mb-4">
                                    <div className="bg-slate-700/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-amber-400">{p.lawsuits}</p><p className="text-sm text-slate-400">State AGs Filed</p></div>
                                    <div className="bg-slate-700/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-yellow-400">{formatCurrency(p.avgSettlement)}</p><p className="text-sm text-slate-400">Avg Settlement</p></div>
                                    <div className="bg-slate-700/50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-orange-400">{p.multiplier}x</p><p className="text-sm text-slate-400">Settlement Factor</p></div>
                                </div>
                                <div className="flex items-start gap-2 bg-red-900/20 border border-red-500/30 rounded-lg p-3"><AlertTriangle className="w-4 h-4 text-red-400 mt-0.5" /><p className="text-sm text-red-200"><strong>Known Addictive Features:</strong> {p.features}</p></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <div className="text-center"><Link href="/social-media/social-calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold">Calculate Your Settlement<ArrowRight className="w-5 h-5" /></Link></div>
                <p className="mt-8 text-xs text-slate-500 text-center">{SOCIAL_2026.citationNote}</p>
            </main>
        </>
    );
}
