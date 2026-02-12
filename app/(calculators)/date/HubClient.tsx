"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
    Clock,
    Calendar,
    ArrowRight,
    ChevronRight,
    FileText,
    Zap,
    Globe,
    ShieldCheck,
    Info,
    ChevronDown,
    History,
    Lock,
    Scale
} from "lucide-react";
import { DATE_2026 } from "@/lib/calculators/date";
import { RelatedCalculators } from "@/components/RelatedCalculators";

const FAQSection = () => {
    return (
        <section id="faq" className="py-24 bg-slate-900/50">
            <div className="max-w-4xl mx-auto px-6">
                <div className="flex items-center gap-4 mb-12">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center">
                        <Info className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-white uppercase italic tracking-tighter">Temporal Audit FAQ</h2>
                        <p className="text-slate-400 font-bold italic">Essential intelligence for 2026 chronological integrity</p>
                    </div>
                </div>

                <div className="space-y-4">
                    {DATE_2026.faqs.map((faq, index) => (
                        <details
                            key={index}
                            className="group bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300"
                        >
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                <span className="text-lg font-medium text-slate-200 group-open:text-blue-400 transition-colors italic font-bold">
                                    {faq.question}
                                </span>
                                <ChevronDown className="w-5 h-5 text-slate-500 group-open:rotate-180 transition-transform duration-300" />
                            </summary>
                            <div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-slate-900 pt-4 font-bold italic">
                                {faq.answer}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default function HubClient() {
    return (
        <div className="min-h-screen bg-slate-950 selection:bg-blue-500/30">
            {/* S-Class Premium Hero: Chronos Logic AI */}
            <section className="relative py-24 md:py-40 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)] pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 relative text-center">
                    <div className="flex flex-col items-center space-y-10 group">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-black text-blue-400 uppercase tracking-widest shadow-2xl shadow-blue-500/10 animate-pulse">
                            <Clock className="w-3 h-3" /> Temporal Integrity Audit Active
                        </div>

                        <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.85] text-white uppercase mt-4">
                            Temporal <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 italic underline decoration-white/10 underline-offset-[12px]">Auditor.</span>
                        </h1>

                        <p className="max-w-3xl text-xl md:text-3xl text-slate-400 font-bold leading-tight italic">
                            Decoding Chronos for 2026. Calculate clinical date intervals and business day deltas with <span className="text-white">institutional precision.</span>
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            <Link
                                href="/date/calculator"
                                className="inline-flex items-center gap-4 bg-blue-600 hover:bg-blue-500 text-white px-12 py-6 rounded-[2rem] font-black text-base uppercase tracking-widest transition-all shadow-2xl shadow-blue-600/30 group active:scale-95"
                            >
                                <Calendar className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                                Run Audit Engine
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </Link>

                            <Link
                                href="/date/health-guide"
                                className="inline-flex items-center gap-4 bg-white/5 hover:bg-white/10 text-white px-12 py-6 rounded-[2rem] font-black text-base uppercase tracking-widest transition-all border border-white/10 group active:scale-95"
                            >
                                <FileText className="w-6 h-6 group-hover:scale-110 transition-transform text-blue-400" />
                                Read Chronos Guide
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Time Benchmark Wall */}
            <section id="stats" className="py-20 border-y border-white/5 bg-slate-900/10 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        {[
                            { l: "Global Standard", v: "ISO 8601", s: "Temporal Parity" },
                            { l: "Audit Resolution", v: "1.0 Cycle", s: "Sidereal Sync" },
                            { l: "Logical Precision", v: "64-Bit", s: "Y2K38 Compliant" },
                            { l: "Source Authority", v: "NIST 2026", s: "Atomic Baseline" }
                        ].map((stat, i) => (
                            <div key={i} className="text-center md:text-left space-y-2 group border-l border-white/5 pl-8 first:border-0 first:pl-0">
                                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover:text-blue-500 transition-colors uppercase">{stat.l}</div>
                                <div className="text-4xl font-black text-white italic tracking-tighter">{stat.v}</div>
                                <div className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">{stat.s}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deep Educational Content - Benchmarked from 'calorie' */}
            <section className="py-32 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.03),transparent_40%)]">
                <div className="max-w-4xl mx-auto px-6 space-y-24 text-justify">
                    <div className="space-y-12">
                        <h2 className="text-5xl font-black text-white tracking-tighter leading-none italic uppercase">
                            The Architecture of <span className="text-blue-600">Gregorian Logic.</span>
                        </h2>
                        <div className="prose prose-invert prose-blue max-w-none text-slate-400 text-lg leading-relaxed font-bold italic space-y-8">
                            <p>
                                Time, in its rawest form, is a continuous flow of entropy. To harness this flow for industrial and social coordination, humans developed the **Gregorian Calendar**—a structural masterpiece of mathematical auditing. Modern date calculation is not merely counting days; it is an institutional reconciliation of solar cycles, administrative boundaries, and computational limitations.
                            </p>
                            <p>
                                At the heart of our **Temporal Auditor** is the ISO 8601 standard. This protocol eliminates the ambiguity of regional notation (DD/MM/YYYY vs MM/DD/YYYY) by establishing the Big-Endian sequence: Year-Month-Day. This is the 'source of truth' for global data interchanges, ensuring that a financial contract in New York and a logistic manifest in Seoul remain in perfect temporal synchronization.
                            </p>
                        </div>
                    </div>

                    <div className="p-12 bg-slate-900 border border-white/5 rounded-[4rem] space-y-10 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none"><History className="w-32 h-32 text-blue-500" /></div>
                        <div className="space-y-8 relative z-10">
                            <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter">1. The Evolution of Temporal Auditing</h3>
                            <p className="text-slate-500 text-base font-bold leading-relaxed italic">
                                The transition from the Julian to the Gregorian calendar in 1582 required the 'deletion' of 10 entire days to correct for a 0.002% drift in the tropical year. In 2026, we face a similar drift challenge at the digital level: **Leap Seconds** and **Timezone Entropy**. Our auditor accounts for these deltas by utilizing UTC-parity algorithms, ensuring that multi-year durations are calculated with clinical zero-loss accuracy. Binary logic meet sidereal physics.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter">2. Working Days & Project Lifecycle Logic</h3>
                        <p className="text-slate-400 text-lg font-bold leading-relaxed italic">
                            In the corporate architecture of 2026, calendar days are secondary to **Business Days**. Our engine integrates specialized logic gates to audit net working days, excluding weekend cycles and optional holiday buffers. This 'Institutional Window' calculation is critical for assessing project latency, financial maturity dates, and contractual SLAs (Service Level Agreements).
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                            <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] space-y-4">
                                <div className="text-blue-500 font-black text-[10px] uppercase tracking-widest">Calendar Duration</div>
                                <p className="text-xs text-slate-500 font-bold italic leading-relaxed">The absolute count of Earth rotations (midnights passed). Used for biology, chemistry, and astronomical auditing.</p>
                            </div>
                            <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] space-y-4 shadow-2xl shadow-blue-500/10 border-blue-500/20">
                                <div className="text-blue-400 font-black text-[10px] uppercase tracking-widest">Business Duration</div>
                                <p className="text-xs text-slate-400 font-bold italic leading-relaxed text-white">The economic audit of productivity cycles. Filters out 28.5% of entropy (weekends) to show actual project velocity.</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter">3. Epoch Parity & Digital Longevity</h3>
                        <p className="text-slate-500 text-base font-bold leading-relaxed italic">
                            Computers do not understand 'April 5th'. They understand the **Unix Epoch**—the number of seconds since January 1, 1970. A professional temporal auditor bridges these planes. We utilize 64-bit integer frameworks to prevent the 'Year 2038' overflow (Y2K38), where 32-bit systems will fail as their temporal registers exhaust their bit-depth. By auditing your dates in our S-Class environment, you are ensuring that your data remains valid across the next 292 billion years of computational history.
                        </p>
                    </div>

                    <p className="text-slate-500 text-sm font-bold italic leading-relaxed text-center px-12 border-t border-white/5 pt-12">
                        Institutional Note: All temporal results are generated using ISO 8601:2019 algorithms and verified against UTC-0 (GMT) reference standards.
                    </p>
                </div>
            </section>

            {/* Citations Section */}
            <section className="py-24 border-y border-white/5 bg-slate-900/10">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-12 text-center italic">Institutional Intelligence Network</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        {DATE_2026.citations.slice(0, 4).map((cite, i) => (
                            <div key={i} className="space-y-2 group">
                                <div className="text-[9px] font-black text-blue-500 uppercase tracking-widest">{cite.name}</div>
                                <h4 className="text-sm font-black text-white group-hover:text-blue-400 transition-colors uppercase">{cite.type}</h4>
                                <p className="text-[11px] text-slate-500 font-bold italic leading-relaxed">Verified primary data source for 2026 chronological audit standards.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <FAQSection />

            {/* Related Calculators */}
            <section className="py-24 bg-slate-950 border-t border-slate-900">
                <div className="max-w-7xl mx-auto px-6">
                    <RelatedCalculators currentCalc="date" />
                </div>
            </section>
        </div>
    );
}
