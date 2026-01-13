"use client";

import { DollarSign, BarChart3, Info, Gavel, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ROUNDUP_CONSTANTS } from "@/lib/calculators/roundup";

export default function RoundupSettlements() {
    const stats = ROUNDUP_CONSTANTS.stats;

    return (
        <main className="py-24 max-w-4xl mx-auto px-6 space-y-20">
            <section className="space-y-6 text-center md:text-left">
                <div className="text-[11px] font-black text-emerald-500 uppercase tracking-[0.3em]">Actuarial Settlement Audit</div>
                <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">$10.9B <span className="text-emerald-500">Global</span> Fund.</h1>
                <p className="text-slate-400 text-xl font-medium leading-relaxed max-w-2xl">A technical breakdown of Roundup award tiers and recent jury verdict patterns.</p>
            </section>

            <div className="grid md:grid-cols-3 gap-6">
                {[
                    { l: "Avg Settlement", v: "$165k" },
                    { l: "Nuclear Award", v: "$2B+" },
                    { l: "Bayer Liability", v: "$10.9B" }
                ].map((s, i) => (
                    <div key={i} className="p-8 bg-slate-950 border border-white/10 rounded-[2.5rem] shadow-inner">
                        <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">{s.l}</div>
                        <div className="text-2xl font-black text-white">{s.v}</div>
                    </div>
                ))}
            </div>

            <div className="prose prose-invert prose-slate max-w-none text-slate-400 space-y-12 text-lg font-medium leading-relaxed">
                <h2 className="text-white text-3xl font-black italic">The Bellwether Pattern Logic</h2>
                <p>
                    Settlement values in the Roundup MDL are non-linear. They are dictated by "Bellwether" trials—initial test cases that set the price of a specific injury type. In recent 2024-2025 trials, jury awards have ranged from $0 (defense verdicts) to staggering **$2.25 Billion** (Philadelphia jury).
                </p>

                <p>
                    Bayer's strategy is currently focusing on a global settlement framework designed to resolve 98% of outstanding claims without trial. This fund allocates "Points" based on medical complexity. A patient withStage IV NHL who underwent stem-cell therapy represents a **Tier 1** claim, which typically commands 4x the value of a non-surgical Tier 3 claim.
                </p>

                <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-[3rem] p-12 space-y-8">
                    <h3 className="text-white text-2xl font-black">2026 Payout Matrix Staging</h3>
                    <div className="space-y-6">
                        <div className="flex justify-between items-end border-b border-white/5 pb-2">
                            <span className="text-sm font-bold">Tier 1: High-Grade NHL Surgery</span>
                            <span className="text-emerald-400 font-black">$500,000+</span>
                        </div>
                        <div className="flex justify-between items-end border-b border-white/5 pb-2">
                            <span className="text-sm font-bold">Tier 2: Intermediate Chemotherapy</span>
                            <span className="text-emerald-400 font-black">$250,000 - $500,000</span>
                        </div>
                        <div className="flex justify-between items-end border-b border-white/5 pb-2">
                            <span className="text-sm font-bold">Tier 3: Low-Grade / Monitoring</span>
                            <span className="text-emerald-400 font-black">$50,000 - $250,000</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-16 bg-emerald-600 rounded-[4rem] text-center space-y-10 shadow-2xl shadow-emerald-600/20">
                <h2 className="text-4xl font-black text-white tracking-tighter">Audit Your Case Potential.</h2>
                <Link href="/roundup/calculator" className="inline-flex items-center gap-4 bg-white text-black px-12 py-6 rounded-2xl font-black text-base uppercase tracking-widest hover:bg-slate-50 transition-all shadow-2xl">
                    Run Expert Auditor <ArrowRight className="w-5 h-5" />
                </Link>
            </div>
        </main>
    );
}
