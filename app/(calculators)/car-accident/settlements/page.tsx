"use client";

import { DollarSign, BarChart3, Info, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CarAccidentSettlements() {
    return (
        <main className="py-24 max-w-4xl mx-auto px-6 space-y-20">
            <section className="space-y-6 text-center md:text-left">
                <div className="text-[11px] font-black text-red-500 uppercase tracking-[0.3em]">Actuarial Settlement Audit</div>
                <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">$45.2k <span className="text-red-500">Benchmark</span>.</h1>
                <p className="text-slate-400 text-xl font-medium leading-relaxed max-w-2xl">A technical breakdown of 2026 average car accident settlements and jury verdict volatility.</p>
            </section>

            <div className="grid md:grid-cols-3 gap-6">
                {[
                    { l: "Avg. Moderate", v: "$45,200" },
                    { l: "Severe (Tier 2)", v: "$125,000+" },
                    { l: "Catastrophic", v: "$500k - $2M" }
                ].map((s, i) => (
                    <div key={i} className="p-8 bg-slate-950 border border-white/10 rounded-[2.5rem] shadow-inner">
                        <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">{s.l}</div>
                        <div className="text-2xl font-black text-white">{s.v}</div>
                    </div>
                ))}
            </div>

            <div className="prose prose-invert prose-slate max-w-none text-slate-400 space-y-12 text-lg font-medium leading-relaxed">
                <h2 className="text-white text-3xl font-black italic">The Settlement Multiplier Logic</h2>
                <p>
                    Most insurance adjusters utilize software (like Colossus) to determine settlement value. These algorithms assign "Point Values" to specific ICD-10 medical codes. Our auditor mirrors this by applying a **Tiered Multiplier** to your medical specials (1.5x for soft tissue, up to 5x for surgical events).
                </p>

                <p>
                    **Venue Bias**: Settlements are highly dependent on where the accident occurred. A jury in Bronx County, NY, statistically awards 40% higher non-economic damages than a jury in a rural Texas county. Our 2026 database incorporates these 'Venue Weightings' to provide a localized estimate.
                </p>

                <div className="bg-red-600/5 border border-red-600/20 rounded-[3rem] p-12 space-y-8">
                    <h3 className="text-white text-2xl font-black">2026 Payout Distribution Matrix</h3>
                    <div className="space-y-6">
                        <div className="flex justify-between items-end border-b border-white/5 pb-2">
                            <span className="text-sm font-bold">Tier 0 (Soft Tissue)</span>
                            <span className="text-red-400 font-black">$3,500 - $18,000</span>
                        </div>
                        <div className="flex justify-between items-end border-b border-white/5 pb-2">
                            <span className="text-sm font-bold">Tier 1 (Bone/Fracture)</span>
                            <span className="text-red-400 font-black">$35,000 - $85,000</span>
                        </div>
                        <div className="flex justify-between items-end border-b border-white/5 pb-2">
                            <span className="text-sm font-bold">Tier 2 (Surgical)</span>
                            <span className="text-red-400 font-black">$120,000 - $350,000</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-16 bg-red-600 rounded-[4rem] text-center space-y-10 shadow-2xl shadow-red-600/20">
                <h2 className="text-4xl font-black text-white tracking-tighter">Audit Your Potential Payout.</h2>
                <Link href="/car-accident/calculator" className="inline-flex items-center gap-4 bg-white text-black px-12 py-6 rounded-2xl font-black text-base uppercase tracking-widest hover:bg-slate-50 transition-all shadow-2xl">
                    Start Settlement Audit <ArrowRight className="w-5 h-5" />
                </Link>
            </div>
        </main>
    );
}
