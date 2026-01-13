"use client";

import { AlertTriangle, Shield, Info, Landmark, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CarAccidentRegulations() {
    return (
        <main className="py-24 max-w-4xl mx-auto px-6 space-y-20">
            <section className="space-y-6">
                <div className="text-[11px] font-black text-red-500 uppercase tracking-[0.3em]">Federal & State Safety Mandates</div>
                <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none">Vehicle Regulations.</h1>
                <p className="text-slate-400 text-xl font-medium leading-relaxed">Analyzing NHTSA standards and state-level insurance mandates for 2026.</p>
            </section>

            <div className="prose prose-invert prose-slate max-w-none text-slate-400 space-y-12 text-lg font-medium leading-relaxed">
                <div className="p-10 bg-slate-900 border border-red-600/20 rounded-3xl relative">
                    <div className="absolute top-0 right-0 p-6 opacity-10"><Landmark className="w-16 h-16 text-red-600" /></div>
                    <p className="italic">
                        "The 2026 Safety Standard update focuses on 'Predictive Avoidance' systems. Failure to maintain these systems can now shift liability toward the vehicle owner."
                    </p>
                </div>

                <h2 className="text-white text-3xl font-black italic">Minimum Insurance Mandates</h2>
                <p>
                    Every state mandates a minimum level of Liability Insurance (e.g., 25/50/25). However, these limits are often insufficient for Tier 2 or Tier 3 injuries. Our regulatory analyzer helps you identify "Underinsured" gaps and the legal pathways for 'uninsured motorist' (UM/UIM) recovery.
                </p>

                <h2 className="text-white text-3xl font-black italic">Black Box (EDR) Regulations</h2>
                <p>
                    New federal mandates require Event Data Recorders (EDR) in all passenger vehicles. Legally, this data is considered 'Neutral Evidence' but is frequently subpoenaed to prove speed and braking timing. Understanding who 'owns' this data in your state is the first step in protecting your claim's integrity.
                </p>

                <div className="space-y-4">
                    <h4 className="text-red-500 font-black uppercase tracking-widest text-xs">2026 Regulatory Status</h4>
                    <ul className="space-y-4 font-bold text-sm">
                        <li className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                            <span className="text-white shrink-0">ADAR Mandates:</span> Advanced Driver Assistance reporting is now mandatory in post-accident filings.
                        </li>
                        <li className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                            <span className="text-white shrink-0">Privacy Torts:</span> Telematics data privacy varies significantly between CA (CCPA) and other states.
                        </li>
                    </ul>
                </div>
            </div>

            <div className="p-12 bg-slate-900 border border-white/10 rounded-[3rem] text-center space-y-6">
                <p className="text-slate-500 text-sm font-black uppercase tracking-widest">Regulatory Oversight v5.0</p>
                <Link href="/car-accident/calculator" className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-wider hover:bg-slate-100 transition-all shadow-xl">
                    Check Your Compliance <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </main>
    );
}
