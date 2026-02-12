"use client";

import React from "react";
import Link from "next/link";
import {
    Heart,
    Calendar,
    Baby,
    ArrowRight,
    ChevronRight,
    FileText,
    Zap,
    Globe,
    ShieldCheck,
    Info,
    ChevronDown,
    History,
    Cpu,
    Landmark,
    Activity,
    Thermometer,
    Microscope,
    Sparkles
} from "lucide-react";
import { OVULATION_2026 } from "@/lib/calculators/ovulation";
import { RelatedCalculators } from "@/components/RelatedCalculators";

const FAQSection = () => {
    return (
        <section id="faq" className="py-24 bg-slate-900/50">
            <div className="max-w-4xl mx-auto px-6">
                <div className="flex items-center gap-4 mb-12">
                    <div className="w-12 h-12 rounded-2xl bg-pink-500/20 flex items-center justify-center">
                        <Info className="w-6 h-6 text-pink-400" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-white uppercase italic tracking-tighter">Fertility FAQ</h2>
                        <p className="text-slate-400 font-bold italic">Critical intelligence for 2026 reproductive health</p>
                    </div>
                </div>

                <div className="space-y-4">
                    {OVULATION_2026.faqs.map((faq, index) => (
                        <details
                            key={index}
                            className="group bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:border-pink-500/50 transition-all duration-300"
                        >
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                <span className="text-lg font-medium text-slate-200 group-open:text-pink-400 transition-colors italic font-bold">
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
        <div className="min-h-screen bg-slate-950 selection:bg-pink-500/30">
            {/* S-Class Premium Hero: Fertility Audit AI */}
            <section className="relative py-24 md:py-40 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.05)_0%,transparent_70%)] pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 relative text-center">
                    <div className="flex flex-col items-center space-y-10 group">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-[10px] font-black text-pink-400 uppercase tracking-widest shadow-2xl shadow-pink-500/10 animate-pulse">
                            <Activity className="w-3 h-3" /> ACOG-193 Precision Engine Active
                        </div>

                        <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.85] text-white uppercase mt-4">
                            Fertility <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-pink-500 to-rose-600 italic underline decoration-white/10 underline-offset-[12px]">Auditor.</span>
                        </h1>

                        <p className="max-w-3xl text-xl md:text-3xl text-slate-400 font-bold leading-tight italic">
                            Absolute window reconciliation for 2026. Audit cycles, LH peaks, and luteal phasics with <span className="text-white">clinical-grade precision.</span>
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            <Link
                                href="/ovulation/calculator"
                                className="inline-flex items-center gap-4 bg-pink-600 hover:bg-pink-500 text-white px-12 py-6 rounded-[2rem] font-black text-base uppercase tracking-widest transition-all shadow-2xl shadow-pink-600/30 group active:scale-95"
                            >
                                <Calendar className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                                Launch Fertility Audit
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </Link>

                            <Link
                                href="/ovulation#faq"
                                className="inline-flex items-center gap-4 bg-white/5 hover:bg-white/10 text-white px-12 py-6 rounded-[2rem] font-black text-base uppercase tracking-widest transition-all border border-white/10 group active:scale-95"
                            >
                                <FileText className="w-6 h-6 group-hover:scale-110 transition-transform text-pink-400" />
                                Read Clinical Standards
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Performance Benchmark Wall */}
            <section id="stats" className="py-20 border-y border-white/5 bg-slate-900/10 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        {OVULATION_2026.stats.map((stat, i) => (
                            <div key={i} className="text-center md:text-left space-y-2 group border-l border-white/5 pl-8 first:border-0 first:pl-0">
                                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover:text-pink-500 transition-colors uppercase">{stat.l}</div>
                                <div className="text-4xl font-black text-white italic tracking-tighter">{stat.v}</div>
                                <div className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">{stat.s}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deep Educational Content - Benchmarked from 'calorie' */}
            <section className="py-32 bg-[radial-gradient(circle_at_top_right,rgba(236,72,153,0.03),transparent_40%)]">
                <div className="max-w-4xl mx-auto px-6 space-y-24 text-justify">
                    <div className="space-y-12">
                        <h2 className="text-5xl font-black text-white tracking-tighter leading-none italic uppercase">
                            The Endocrinology of <span className="text-pink-600">Conception.</span>
                        </h2>
                        <div className="prose prose-invert prose-blue max-w-none text-slate-400 text-lg leading-relaxed font-bold italic space-y-8">
                            <p>
                                Reproductive health in 2026 is no longer a matter of calendar guessing; it is a clinical audit of hormonal phasic transitions. The ovulation cycle is a highly choreographed biological sequence orchestrated by the hypothalamic-pituitary-gonadal (HPG) axis. Understanding the 'Fertility Window' requires a deep reconciliation of follicular growth, Luteinizing Hormone (LH) surges, and the subsequent stabilization of the luteal phase.
                            </p>
                            <p>
                                At the core of our **Fertility Auditor** is a backward-reconciliation logic based on the ACOG-193 protocol. By establishing the luteal phase as the relatively constant 'anchor' (typically 14 days), we can project the ovulation window with a level of precision that simple 'mid-cycle' estimators cannot achieve. This is particularly critical for women whose cycle lengths deviate from the theoretical 28-day norm.
                            </p>
                        </div>
                    </div>

                    <div className="p-12 bg-slate-900 border border-white/5 rounded-[4rem] space-y-10 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none"><History className="w-32 h-32 text-pink-500" /></div>
                        <div className="space-y-8 relative z-10">
                            <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter">1. Phasic Decomposition: Follicular vs. Luteal</h3>
                            <p className="text-slate-500 text-base font-bold leading-relaxed italic">
                                The menstrual cycle is bifurcated by the event of ovulation. The **Follicular Phase** is the variable period of egg maturation, driven by Follicle-Stimulating Hormone (FSH). Its duration can shift due to stress, metabolic changes, or age. Conversely, the **Luteal Phase**—the period of progesterone dominance—remains remarkably consistent for individual women. Our 2026 engine utilizes this phasic decomposition to audit your window, identifying the 'Peak Fertile' zone based on the statistical intersection of gamete longevity and hormonal peak.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter">2. Gamete Longevity: The 6-Day Audit Window</h3>
                        <p className="text-slate-400 text-lg font-bold leading-relaxed italic">
                            Clinical auditing of the fertile window relies on the unequal lifespans of sperm and oocytes. While an egg remains viable for only 12-24 hours post-ovulation, sperm can survive within the alkaline environment of fertile cervical mucus for up to 120 hours (5 days). This results in a 6-day 'Fertility Delta'. Our engine audits this period with industrial precision, prioritizing the 2 days preceding ovulation as the 'Absolute Peak', ensuring that conception planning is based on the highest possible biological probability.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                            <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] space-y-4">
                                <div className="text-pink-500 font-black text-[10px] uppercase tracking-widest">Hormonal Logic (LH)</div>
                                <p className="text-xs text-slate-500 font-bold italic leading-relaxed">Tracking the chemical surge that triggers egg release. The definitive biological 'Green Light' for conception.</p>
                            </div>
                            <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] space-y-4 shadow-2xl shadow-pink-500/10 border-pink-500/20">
                                <div className="text-pink-400 font-black text-[10px] uppercase tracking-widest">Metabolic Baseline (BBT)</div>
                                <p className="text-xs text-slate-400 font-bold italic leading-relaxed text-white">The thermal reconciliation of progesterone production. Verifies that ovulation has successfully occurred post-event.</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter">3. Data Sovereignty & Clinical Integrity</h3>
                        <p className="text-slate-500 text-base font-bold leading-relaxed italic">
                            In the era of reproductive data sensitivity, our Fertility Auditor operates with 'Zero-Trust' architecture. All calculations, cycle history logs, and fertile window projections are executed locally within your secure browser environment. No reproductive data is transmitted to cloud servers. This ensures that your most intimate health metrics are audited with both clinical precision and absolute privacy. We adhere to the highest institutional standards of medical data sovereignty, providing a safe, industrial-grade tool for conception strategy.
                        </p>
                    </div>

                    <p className="text-slate-500 text-sm font-bold italic leading-relaxed text-center px-12 border-t border-white/5 pt-12">
                        Institutional Note: All window projections are generated using ACOG-193 clinical protocols and should be reconciled with primary biomarkers (CM/LH) for maximum conception parity.
                    </p>
                </div>
            </section>

            {/* Citations Section */}
            <section className="py-24 border-y border-white/5 bg-slate-900/10">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-12 text-center italic">Institutional Intelligence Network</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        {OVULATION_2026.citations.slice(0, 4).map((cite, i) => (
                            <div key={i} className="space-y-2 group">
                                <div className="text-[9px] font-black text-pink-500 uppercase tracking-widest">{cite.name}</div>
                                <h4 className="text-sm font-black text-white group-hover:text-pink-400 transition-colors uppercase">{cite.type}</h4>
                                <p className="text-[11px] text-slate-500 font-bold italic leading-relaxed">Verified primary medical source for 2026 reproductive health and fertility audits.</p>
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
                    <RelatedCalculators currentCalc="ovulation" />
                </div>
            </section>
        </div>
    );
}
