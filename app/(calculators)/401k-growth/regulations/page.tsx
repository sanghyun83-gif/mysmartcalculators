"use client";

import { Landmark, Shield, Info, Gavel, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FinanceRegulations() {
    return (
        <main className="py-24 max-w-4xl mx-auto px-6 space-y-20">
            <section className="space-y-6">
                <div className="text-[11px] font-black text-blue-500 uppercase tracking-[0.3em]">SECURE Act 2.0 Audit</div>
                <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none">SECURE Act 2.0.</h1>
                <p className="text-slate-400 text-xl font-medium leading-relaxed">Analyzing the 2026 shifts in federal retirement contribution and distribution mandates.</p>
            </section>

            <div className="prose prose-invert prose-slate max-w-none text-slate-400 space-y-12 text-lg font-medium leading-relaxed">
                <div className="p-10 bg-slate-900 border border-blue-500/20 rounded-3xl relative">
                    <div className="absolute top-0 right-0 p-6 opacity-10"><Landmark className="w-16 h-16 text-blue-500" /></div>
                    <p className="italic">
                        "The SECURE Act 2.0 of 2022 represents the most significant overhaul of US retirement policy in decades, specifically targeting the 'Savings Gap' for late-career workers."
                    </p>
                </div>

                <h2 className="text-white text-3xl font-black italic">The 2026 RMD Pivot</h2>
                <p>
                    One of the most critical regulatory updates is the shift in Required Minimum Distributions (RMDs). For those born between 1951 and 1959, the RMD age is now 73. For those born in 1960 or later, it is 75. This fundamental change allows for an additional 2-3 years of tax-advantaged compounding, which can increase the longevity of a portfolio by 10% or more.
                </p>

                <h2 className="text-white text-3xl font-black italic">Automatic Enrollment Mandates</h2>
                <p>
                    As of 2026, most new 401k plans are legally required to include an **Automatic Enrollment** feature. Employees are automatically deferred at a rate of 3%, increasing by 1% annually until they reach 10-15%. This regulatory nudge is designed to combat inertia and ensure that the "Default Logic" for workers is one of wealth accumulation rather than consumption.
                </p>

                <div className="space-y-4">
                    <h4 className="text-blue-500 font-black uppercase tracking-widest text-xs">Regulatory Compliance Status (2026)</h4>
                    <ul className="space-y-4 font-bold text-sm">
                        <li className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                            <span className="text-white shrink-0">Roth Mandate:</span> High earners catch-ups MUST be Roth-based.
                        </li>
                        <li className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                            <span className="text-white shrink-0">Emergency Savings:</span> New $2,500 penalty-free withdrawal limit for personal emergencies.
                        </li>
                    </ul>
                </div>
            </div>

            <div className="p-12 bg-slate-900 border border-white/10 rounded-[3rem] text-center space-y-6">
                <p className="text-slate-500 text-sm font-black uppercase tracking-widest">Expert Regulatory Oversight v5.1</p>
                <Link href="/401k-growth/calculator" className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-wider hover:bg-slate-100 transition-all shadow-xl">
                    Calculate Future Solvency <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </main>
    );
}
