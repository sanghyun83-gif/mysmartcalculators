"use client";

import { Shield, Microscope, Info, Gavel, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function RoundupRegulations() {
    return (
        <main className="py-24 max-w-4xl mx-auto px-6 space-y-20">
            <section className="space-y-6">
                <div className="text-[11px] font-black text-emerald-500 uppercase tracking-[0.3em]">Regulatory Conflict Audit</div>
                <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none">EPA vs. IARC.</h1>
                <p className="text-slate-400 text-xl font-medium leading-relaxed">Analyzing the 2026 global regulatory landscape for Glyphosate usage.</p>
            </section>

            <div className="prose prose-invert prose-slate max-w-none text-slate-400 space-y-12 text-lg font-medium leading-relaxed">
                <div className="p-10 bg-slate-900 border border-emerald-500/20 rounded-3xl relative">
                    <div className="absolute top-0 right-0 p-6 opacity-10"><Microscope className="w-16 h-16 text-emerald-500" /></div>
                    <p className="italic">
                        "While the EPA continues to maintain that glyphosate is safe when used as directed, the European Food Safety Authority (EFSA) and the World Health Organization's IARC have issued conflicting mandates."
                    </p>
                </div>

                <h2 className="text-white text-3xl font-black italic">The IARC Monograph 112 Conflict</h2>
                <p>
                    In 2015, the International Agency for Research on Cancer (IARC) shocked the agrochemical world by classifying glyphosate as a **Group 2A Probable Carcinogen**. This was based on "limited evidence" in humans for Non-Hodgkin Lymphoma and "sufficient evidence" in experimental animals. The EPA's refusal to align with this finding in 2026 remains a cornerstone of Bayer's defense strategy.
                </p>

                <h2 className="text-white text-3xl font-black italic">California Proposition 65</h2>
                <p>
                    California's OEHHA recognized glyphosate as a carcinogen in 2017, requiring clear and reasonable warnings. This regulatory move created a 'Knowledge Anchor' for litigation, allowing plaintiffs to argue that any manufacturer failing to warn post-2017 was in direct violation of state-level safety thresholds.
                </p>

                <div className="space-y-4">
                    <h4 className="text-emerald-500 font-black uppercase tracking-widest text-xs">Current Regulatory Status (2026)</h4>
                    <ul className="space-y-4 font-bold text-sm">
                        <li className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                            <span className="text-white shrink-0">EU:</span> Restricted Usage in public parks and residential zones.
                        </li>
                        <li className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                            <span className="text-white shrink-0">USA:</span> EPA review pending Ninth Circuit reconsideration.
                        </li>
                    </ul>
                </div>
            </div>

            <div className="p-12 bg-slate-900 border border-white/10 rounded-[3rem] text-center space-y-6">
                <p className="text-slate-500 text-sm font-black uppercase tracking-widest">Expert Regulatory Oversight v4.0</p>
                <Link href="/roundup/calculator" className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-wider hover:bg-slate-100 transition-all shadow-xl">
                    Calculate Claim Value <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </main>
    );
}
