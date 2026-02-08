"use client";

import { useState } from "react";
import Link from "next/link";
import {
    ArrowLeft,
    Stethoscope,
    ArrowRight,
    Calculator,
    Info,
    ShieldCheck,
    Award,
    TrendingUp,
    Zap,
    Scale,
    Activity
} from "lucide-react";
import { SITE, INJURY_TYPES, formatCurrency, getSeverityColor } from "@/lib/calculators/mesothelioma";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function InjuryTypesPage() {
    const injuryList = Object.entries(INJURY_TYPES);
    const [selectedInjury, setSelectedInjury] = useState<string | null>(null);

    const selectedData = selectedInjury ? INJURY_TYPES[selectedInjury as keyof typeof INJURY_TYPES] : null;

    const getEstimate = () => {
        if (!selectedData) return null;
        const avg = Math.round((selectedData.avgSettlement.min + selectedData.avgSettlement.max) / 2);
        const withAttorney = Math.round(avg * 0.67);
        return { avg, withAttorney };
    };

    const estimate = getEstimate();

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200">
            {/* Header */}
            <header className="border-b border-white/5 py-6">
                <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                    <Link href="/mesothelioma" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group text-[10px] font-black uppercase tracking-[0.2em]">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Forensic Hub
                    </Link>
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-amber-500" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 italic">v2.1 Bio-Path Matrix</span>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-6 py-12 lg:py-20">
                {/* Hero */}
                <div className="mb-16">
                    <h1 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-4 leading-none leading-none">
                        Compensation <span className="text-amber-500">Matrix</span>
                    </h1>
                    <p className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-10 max-w-2xl italic leading-relaxed leading-relaxed">
                        Execute biomechanical settlement projections across 2026 Mesothelioma binned casualty types.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Left: Selector Grid */}
                    <div className="lg:col-span-12">
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {injuryList.map(([key, injury]) => (
                                <button
                                    key={key}
                                    onClick={() => setSelectedInjury(key)}
                                    className={`p-6 rounded-3xl border text-left transition-all relative overflow-hidden group ${selectedInjury === key
                                            ? "bg-amber-500 border-amber-500 shadow-[0_0_30px_rgba(245,158,11,0.2)]"
                                            : "bg-slate-900/50 border-white/5 hover:border-white/20"
                                        }`}
                                >
                                    <div className={`text-[10px] font-black uppercase tracking-widest mb-1 ${selectedInjury === key ? "text-slate-950" : "text-amber-500"}`}>{injury.name}</div>
                                    <div className={`text-[8px] font-bold uppercase tracking-tight opacity-60 ${selectedInjury === key ? "text-slate-900" : "text-slate-400"}`}>
                                        {injury.severity} Staging
                                    </div>
                                    <div className={`absolute -right-4 -bottom-4 opacity-[0.05] group-hover:scale-110 transition-transform ${selectedInjury === key ? "text-slate-950" : "text-white"}`}>
                                        <Activity className="w-20 h-20" />
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Result View */}
                    <div className="lg:col-span-12">
                        {selectedData && estimate ? (
                            <div className="grid lg:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                {/* Large Card */}
                                <div className="bg-amber-500 rounded-[3rem] p-12 text-slate-950 shadow-2xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                                        <Award className="w-48 h-48" />
                                    </div>
                                    <div className="relative z-10">
                                        <div className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 opacity-70 italic">Projected Valuation</div>
                                        <div className="text-5xl md:text-7xl font-black tracking-tighter italic mb-4">
                                            {formatCurrency(selectedData.avgSettlement.min)}
                                            <span className="text-2xl md:text-4xl block md:inline md:ml-2">— {formatCurrency(selectedData.avgSettlement.max)}</span>
                                        </div>
                                        <p className="text-sm font-black uppercase tracking-widest leading-loose mb-10 max-w-md italic opacity-80">
                                            {selectedData.description}
                                        </p>
                                        <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-950/20">
                                            <div>
                                                <div className="text-[10px] font-black uppercase tracking-widest mb-2 opacity-60">Median Gross</div>
                                                <div className="text-2xl font-black italic italic">{formatCurrency(estimate.avg)}</div>
                                            </div>
                                            <div>
                                                <div className="text-[10px] font-black uppercase tracking-widest mb-2 opacity-60">Trial Net (v2.1)</div>
                                                <div className="text-2xl font-black italic italic">{formatCurrency(estimate.withAttorney)}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Details & CTA */}
                                <div className="space-y-6">
                                    <div className="bg-slate-900/50 border border-white/5 rounded-[3rem] p-10 flex flex-col justify-between h-full">
                                        <div className="space-y-6">
                                            <div className="flex items-center gap-4">
                                                <div className="p-3 bg-amber-500/10 rounded-2xl">
                                                    <TrendingUp className="w-6 h-6 text-amber-500" />
                                                </div>
                                                <div>
                                                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">Timeline Benchmark</div>
                                                    <div className="text-lg font-black text-white italic italic uppercase tracking-tighter">{selectedData.recoveryTime} Recovery</div>
                                                </div>
                                            </div>
                                            <div className="p-6 bg-slate-950 rounded-2xl border border-white/5">
                                                <div className="flex items-start gap-4">
                                                    <Info className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                                                    <p className="text-[10px] font-medium leading-relaxed italic italic text-slate-400">
                                                        Estimates utilize 2026 MDL liquidation data. Actual recovery is subject to statute of limitations (SOL) and specific defendant solvency profiles.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <Link
                                            href="/mesothelioma/injury-settlement"
                                            className="mt-8 group w-full py-6 bg-white text-slate-950 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-amber-500 transition-all flex items-center justify-center gap-3 shadow-xl active:scale-[0.98]"
                                        >
                                            <Zap className="w-4 h-4 fill-current" />
                                            Launch Forensic Auditor
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="h-64 flex flex-col items-center justify-center p-12 text-center bg-slate-900/30 border border-white/5 border-dashed rounded-[3rem]">
                                <Stethoscope className="w-10 h-10 text-slate-700 mb-4" />
                                <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest italic">Select Bio-Path to Review Matrix</h3>
                            </div>
                        )}
                    </div>
                </div>

                {/* Harmonized Table */}
                <div className="mt-20">
                    <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-8 italic">Collective Liquidation Benchmark</h2>
                    <div className="bg-slate-900/50 border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-white/5">
                                        <th className="px-10 py-6 text-left text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Type / Source</th>
                                        <th className="px-6 py-6 text-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Staging</th>
                                        <th className="px-6 py-6 text-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Timeline</th>
                                        <th className="px-10 py-6 text-right text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Valuation Range</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {injuryList.map(([key, injury]) => (
                                        <tr
                                            key={key}
                                            onClick={() => setSelectedInjury(key)}
                                            className={`group cursor-pointer transition-colors ${selectedInjury === key ? "bg-amber-500/10" : "hover:bg-white/[0.02]"}`}
                                        >
                                            <td className={`px-10 py-6 text-sm font-black uppercase italic tracking-tighter ${selectedInjury === key ? "text-amber-500" : "text-white"}`}>
                                                {injury.name}
                                            </td>
                                            <td className="px-6 py-6 text-center">
                                                <span className={`text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-slate-950 border border-white/5 ${getSeverityColor(injury.severity).replace('text-', 'text-')}`}>
                                                    {injury.severity}
                                                </span>
                                            </td>
                                            <td className="px-6 py-6 text-center text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                                                {injury.recoveryTime}
                                            </td>
                                            <td className="px-10 py-6 text-right text-lg font-black text-amber-500 italic italic tracking-tighter">
                                                {formatCurrency(injury.avgSettlement.min)} — {formatCurrency(injury.avgSettlement.max)}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="mt-20">
                    <LegalDisclaimer />
                </div>
            </main>

            {/* v2.1 SEO Matrix Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Table",
                        "about": "Mesothelioma Compensation Matrix 2026",
                        "mainEntity": injuryList.map(([_, injury]) => ({
                            "@type": "ListItem",
                            "name": injury.name,
                            "description": injury.description,
                            "additionalType": injury.severity
                        }))
                    })
                }}
            />
        </div>
    );
}
