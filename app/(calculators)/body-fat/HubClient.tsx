"use client";

import React from "react";
import Link from "next/link";
import {
    Target,
    Scale,
    ArrowRight,
    ChevronRight,
    FileText,
    Zap,
    Dna,
    Heart,
    ShieldCheck,
    Calculator,
    ZapOff,
    Info,
    ChevronDown,
    Activity
} from "lucide-react";
import { BODY_FAT_2026 } from "@/lib/calculators/body-fat";
import { RelatedCalculators } from "@/components/RelatedCalculators";

const FAQSection = () => {
    return (
        <section id="faq" className="py-24 bg-slate-900/50">
            <div className="max-w-4xl mx-auto px-6">
                <div className="flex items-center gap-4 mb-12">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center">
                        <Info className="w-6 h-6 text-indigo-400" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-white">Institutional Adipose FAQ</h2>
                        <p className="text-slate-400">Essential intelligence for 2026 health auditing</p>
                    </div>
                </div>

                <div className="space-y-4">
                    {BODY_FAT_2026.faqs.map((faq, index) => (
                        <details
                            key={index}
                            className="group bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300"
                        >
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                <span className="text-lg font-medium text-slate-200 group-open:text-emerald-400 transition-colors">
                                    {faq.question}
                                </span>
                                <ChevronDown className="w-5 h-5 text-slate-500 group-open:rotate-180 transition-transform duration-300" />
                            </summary>
                            <div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-slate-900 pt-4">
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
        <div className="min-h-screen bg-slate-950 selection:bg-indigo-500/30">
            {/* S-Class Premium Hero: Adipose Logic AI */}
            <section className="relative py-24 md:py-40 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0%,transparent_70%)]" />
                <div className="max-w-7xl mx-auto px-6 relative text-center">
                    <div className="flex flex-col items-center space-y-10 group">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-black text-indigo-400 uppercase tracking-widest shadow-2xl shadow-indigo-500/10 animate-pulse">
                            <Target className="w-3 h-3" /> Biometric Integrity Audit Active
                        </div>

                        <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.85] text-white uppercase mt-4">
                            Adipose <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 italic underline decoration-white/10 underline-offset-[12px]">Auditor.</span>
                        </h1>

                        <p className="max-w-3xl text-xl md:text-3xl text-slate-400 font-bold leading-tight italic">
                            Decoding Body Composition for 2026. Calculate clinical adipose density and metabolic risk thresholds with <span className="text-white">institutional precision.</span>
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            <Link
                                href="/body-fat/calculator"
                                className="inline-flex items-center gap-4 bg-indigo-600 hover:bg-indigo-500 text-white px-12 py-6 rounded-[2rem] font-black text-base uppercase tracking-widest transition-all shadow-2xl shadow-indigo-600/30 group active:scale-95"
                            >
                                <Scale className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                                Run Audit Engine
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </Link>

                            <Link
                                href="/body-fat/health-guide"
                                className="inline-flex items-center gap-4 bg-white/5 hover:bg-white/10 text-white px-12 py-6 rounded-[2rem] font-black text-base uppercase tracking-widest transition-all border border-white/10 group active:scale-95"
                            >
                                <FileText className="w-6 h-6 group-hover:scale-110 transition-transform text-indigo-400" />
                                Read Health Guide
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Metabolic Benchmark Wall */}
            <section id="stats" className="py-20 border-y border-white/5 bg-slate-900/10 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        {[
                            { l: "Male Fitness", v: "14 - 17%", s: "Athletic Baseline" },
                            { l: "Female Fitness", v: "21 - 24%", s: "Athletic Baseline" },
                            { l: "Accuracy", v: "± 3.0%", s: "Logarithmic Sync" },
                            { l: "Standards", v: "US Navy", s: "Clinical Field Audit" }
                        ].map((stat, i) => (
                            <div key={i} className="text-center md:text-left space-y-2 group border-l border-white/5 pl-8 first:border-0 first:pl-0">
                                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover:text-indigo-500 transition-colors uppercase">{stat.l}</div>
                                <div className="text-4xl font-black text-white italic tracking-tighter">{stat.v}</div>
                                <div className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">{stat.s}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Brief High-Density Summary Section */}
            <section className="py-32 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.03),transparent_40%)]">
                <div className="max-w-4xl mx-auto px-6 space-y-24">
                    <div className="space-y-12">
                        <h2 className="text-5xl font-black text-white tracking-tighter leading-none italic uppercase">
                            The Science of <span className="text-indigo-600">Composition.</span>
                        </h2>
                        <div className="prose prose-invert prose-indigo max-w-none text-slate-400 text-lg leading-relaxed font-bold italic space-y-8">
                            <p>
                                Body fat percentage is the total mass of adipose tissue divided by total body mass. Unlike BMI, which only measures mass relative to height, body fat auditing isolates <span className="text-white">biological composition</span>, providing a higher-fidelity map of metabolic health.
                            </p>
                            <p>
                                Utilizing the **US Navy Logarithmic Method**, our engine calculates density markers across multiple anatomical points to estimate cardiovascular capital and longevity potential. Consistent auditing of these levels is essential for managing insulin sensitivity and hormonal homeostasis.
                            </p>
                            <Link href="/body-fat/health-guide" className="inline-flex items-center gap-2 text-indigo-500 hover:text-indigo-400 transition-colors uppercase font-black text-sm tracking-widest">
                                Explore Deep Scientific Analysis <ChevronRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Institutional Citations Preview */}
            <section className="py-24 border-y border-white/5 bg-slate-900/10">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-12 text-center italic">Institutional Intelligence Network</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        {BODY_FAT_2026.citations.slice(0, 4).map((cite, i) => (
                            <div key={i} className="space-y-2 group">
                                <div className="text-[9px] font-black text-indigo-500 uppercase tracking-widest">{cite.name}</div>
                                <h4 className="text-sm font-black text-white group-hover:text-indigo-400 transition-colors uppercase">{cite.type}</h4>
                                <p className="text-[11px] text-slate-500 font-bold italic leading-relaxed text-balance">Verified primary data source for 2026 clinical reference standards.</p>
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
                    <RelatedCalculators currentCalc="body-fat" />
                </div>
            </section>
        </div>
    );
}
