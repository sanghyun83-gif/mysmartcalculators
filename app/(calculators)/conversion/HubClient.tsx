"use client";

import React from "react";
import Link from "next/link";
import {
    Ruler,
    Scale,
    FlaskConical as Flask,
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
    Landmark
} from "lucide-react";
import { CONVERSION_2026 } from "@/lib/calculators/conversion";
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
                        <h2 className="text-3xl font-bold text-white uppercase italic tracking-tighter">Metrology FAQ</h2>
                        <p className="text-slate-400 font-bold italic">Critical intelligence for 2026 unit auditing</p>
                    </div>
                </div>

                <div className="space-y-4">
                    {CONVERSION_2026.faqs.map((faq, index) => (
                        <details
                            key={index}
                            className="group bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300"
                        >
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                <span className="text-lg font-medium text-slate-200 group-open:text-indigo-400 transition-colors italic font-bold">
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
        <div className="min-h-screen bg-slate-950 selection:bg-indigo-500/30">
            {/* S-Class Premium Hero: Metrology AI */}
            <section className="relative py-24 md:py-40 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0%,transparent_70%)] pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 relative text-center">
                    <div className="flex flex-col items-center space-y-10 group">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-black text-indigo-400 uppercase tracking-widest shadow-2xl shadow-indigo-500/10 animate-pulse">
                            <Cpu className="w-3 h-3" /> NIST Precision Engine Active
                        </div>

                        <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.85] text-white uppercase mt-4">
                            Metrology <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-500 to-blue-600 italic underline decoration-white/10 underline-offset-[12px]">Auditor.</span>
                        </h1>

                        <p className="max-w-3xl text-xl md:text-3xl text-slate-400 font-bold leading-tight italic">
                            Absolute scale reconciliation for 2026. Audit length, mass, and volume tranches with <span className="text-white">industrial zero-loss precision.</span>
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            <Link
                                href="/conversion/calculator"
                                className="inline-flex items-center gap-4 bg-indigo-600 hover:bg-indigo-500 text-white px-12 py-6 rounded-[2rem] font-black text-base uppercase tracking-widest transition-all shadow-2xl shadow-indigo-600/30 group active:scale-95"
                            >
                                <Ruler className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                                Launch Audit Engine
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </Link>

                            <Link
                                href="/conversion#faq"
                                className="inline-flex items-center gap-4 bg-white/5 hover:bg-white/10 text-white px-12 py-6 rounded-[2rem] font-black text-base uppercase tracking-widest transition-all border border-white/10 group active:scale-95"
                            >
                                <FileText className="w-6 h-6 group-hover:scale-110 transition-transform text-indigo-400" />
                                Read NIST Standards
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Performance Benchmark Wall */}
            <section id="stats" className="py-20 border-y border-white/5 bg-slate-900/10 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        {CONVERSION_2026.stats.map((stat, i) => (
                            <div key={i} className="text-center md:text-left space-y-2 group border-l border-white/5 pl-8 first:border-0 first:pl-0">
                                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover:text-indigo-500 transition-colors uppercase">{stat.l}</div>
                                <div className="text-4xl font-black text-white italic tracking-tighter">{stat.v}</div>
                                <div className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">{stat.s}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deep Educational Content - Benchmarked from 'calorie' */}
            <section className="py-32 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.03),transparent_40%)]">
                <div className="max-w-4xl mx-auto px-6 space-y-24 text-justify">
                    <div className="space-y-12">
                        <h2 className="text-5xl font-black text-white tracking-tighter leading-none italic uppercase">
                            The Architecture of <span className="text-indigo-600">Global Measurement.</span>
                        </h2>
                        <div className="prose prose-invert prose-blue max-w-none text-slate-400 text-lg leading-relaxed font-bold italic space-y-8">
                            <p>
                                Metrology—the science of measurement—is the silent infrastructure of modern civilization. Without a shared, high-precision framework for quantifying the physical world, global trade would collapse, scientific discovery would stall, and industrial manufacturing would be impossible. In 2026, unit conversion is no longer a matter of simple multiplication; it is a clinical audit of data parity across diverse institutional standards.
                            </p>
                            <p>
                                At the core of our **Metrology Auditor** is the International System of Units (SI). Established by the Treaty of the Meter in 1875, the SI system has evolved from physical artifacts (like the prototype 'Le Grand K' kilogram) to a system based entirely on fundamental physical constants. By anchoring our conversion engine to the speed of light, the Planck constant, and the Boltzmann constant, we ensure that your data is mathematically immortal.
                            </p>
                        </div>
                    </div>

                    <div className="p-12 bg-slate-900 border border-white/5 rounded-[4rem] space-y-10 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none"><History className="w-32 h-32 text-indigo-500" /></div>
                        <div className="space-y-8 relative z-10">
                            <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter">1. From Artifacts to Constants: Metrology 2.0</h3>
                            <p className="text-slate-500 text-base font-bold leading-relaxed italic">
                                Until 2019, the definition of a kilogram relied on a single cylinder of platinum-iridium kept in a vault in Sèvres, France. Today, we utilize the Kibble Balance—a mechanism that reconciles mechanical and electromagnetic power. Our 2026 engine reflects this shift by incorporating zero-loss conversion factors. Whether you are converting milligrams for pharmaceutical compounding or tons for heavy logistics, our logic paths execute with the administrative precision required by NIST SP 811 protocols.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter">2. The Imperial vs. Metric Reconciliation</h3>
                        <p className="text-slate-400 text-lg font-bold leading-relaxed italic">
                            In the industrial landscape of 2026, the 'Imperial' system (US Customary) remains a critical legacy architecture. Our auditor treats these as 'soft' and 'hard' metrics. A 'soft' conversion maintains the physical dimension while changing the unit label (e.g., 25.4mm), while a 'hard' conversion re-sizes the physical object to a round metric value. Our engine provides the raw, high-precision audit data allowing engineers to make informed decisions regarding tolerance and industrial fit.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                            <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] space-y-4">
                                <div className="text-indigo-500 font-black text-[10px] uppercase tracking-widest">Scientific Protocol (SI)</div>
                                <p className="text-xs text-slate-500 font-bold italic leading-relaxed">The global logic of 10s. Used for physics, chemistry, and high-tech manufacturing. Standardized since 1960.</p>
                            </div>
                            <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] space-y-4 shadow-2xl shadow-indigo-500/10 border-indigo-500/20">
                                <div className="text-indigo-400 font-black text-[10px] uppercase tracking-widest">Customary Protocol (US)</div>
                                <p className="text-xs text-slate-400 font-bold italic leading-relaxed text-white">The legacy architecture of 12s and 16s. Crucial for North American aerospace, real estate, and consumer logistics.</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter">3. Computational Integrity & IEEE 754 Auditing</h3>
                        <p className="text-slate-500 text-base font-bold leading-relaxed italic">
                            Standard calculators often suffer from 'floating-point entropy'—small errors that accumulate when numbers are converted to binary. Our Metrology Auditor implements specialized rounding logic to ensure that 1 inch + 1 inch mathematically reconciles to 2 inches, and $25.4mm \times 2$ reconciles to 50.8mm without the common $0.000000000000001$ noise. This is the difference between an estimation tool and an institutional audit engine. We utilize 64-bit precision to maintain the significant figure integrity required by ISO 80000-1:2022.
                        </p>
                    </div>

                    <p className="text-slate-500 text-sm font-bold italic leading-relaxed text-center px-12 border-t border-white/5 pt-12">
                        Institutional Note: All conversion factors are sourced directly from NIST Special Publication 811 and verified against the 2026 BIPM (Bureau International des Poids et Mesures) consensus.
                    </p>
                </div>
            </section>

            {/* Citations Section */}
            <section className="py-24 border-y border-white/5 bg-slate-900/10">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-12 text-center italic">Institutional Intelligence Network</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        {CONVERSION_2026.citations.slice(0, 4).map((cite, i) => (
                            <div key={i} className="space-y-2 group">
                                <div className="text-[9px] font-black text-indigo-500 uppercase tracking-widest">{cite.name}</div>
                                <h4 className="text-sm font-black text-white group-hover:text-indigo-400 transition-colors uppercase">{cite.type}</h4>
                                <p className="text-[11px] text-slate-500 font-bold italic leading-relaxed">Verified primary data source for 2026 metrology and unit conversion audits.</p>
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
                    <RelatedCalculators currentCalc="conversion" />
                </div>
            </section>
        </div>
    );
}
