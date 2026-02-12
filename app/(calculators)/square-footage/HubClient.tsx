"use client";

import React from "react";
import Link from "next/link";
import {
    Ruler,
    Box,
    Layout,
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
    Home,
    Layers,
    Maximize,
    DraftingCompass
} from "lucide-react";
import { SQUARE_FOOTAGE_2026 } from "@/lib/calculators/square-footage";
import { RelatedCalculators } from "@/components/RelatedCalculators";

const FAQSection = () => {
    return (
        <section id="faq" className="py-24 bg-slate-900/50">
            <div className="max-w-4xl mx-auto px-6">
                <div className="flex items-center gap-4 mb-12">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center">
                        <Info className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-white uppercase italic tracking-tighter">Dimensional FAQ</h2>
                        <p className="text-slate-400 font-bold italic">Critical intelligence for 2026 property auditing</p>
                    </div>
                </div>

                <div className="space-y-4">
                    {SQUARE_FOOTAGE_2026.faqs.map((faq, index) => (
                        <details
                            key={index}
                            className="group bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300"
                        >
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                <span className="text-lg font-medium text-slate-200 group-open:text-emerald-400 transition-colors italic font-bold">
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
        <div className="min-h-screen bg-slate-950 selection:bg-emerald-500/30">
            {/* S-Class Premium Hero: Property Audit AI */}
            <section className="relative py-24 md:py-40 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.05)_0%,transparent_70%)] pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 relative text-center">
                    <div className="flex flex-col items-center space-y-10 group">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-black text-emerald-400 uppercase tracking-widest shadow-2xl shadow-emerald-500/10 animate-pulse">
                            <DraftingCompass className="w-3 h-3" /> ANSI Z765 Precision Engine Active
                        </div>

                        <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.85] text-white uppercase mt-4">
                            Dimensional <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 italic underline decoration-white/10 underline-offset-[12px]">Auditor.</span>
                        </h1>

                        <p className="max-w-3xl text-xl md:text-3xl text-slate-400 font-bold leading-tight italic">
                            Absolute area reconciliation for 2026. Audit rectangles, polygons, and irregular tranches with <span className="text-white">institutional BOMA-certified precision.</span>
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            <Link
                                href="/square-footage/calculator"
                                className="inline-flex items-center gap-4 bg-emerald-600 hover:bg-emerald-500 text-white px-12 py-6 rounded-[2rem] font-black text-base uppercase tracking-widest transition-all shadow-2xl shadow-emerald-600/30 group active:scale-95"
                            >
                                <Maximize className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                                Launch Area Audit
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </Link>

                            <Link
                                href="/square-footage#faq"
                                className="inline-flex items-center gap-4 bg-white/5 hover:bg-white/10 text-white px-12 py-6 rounded-[2rem] font-black text-base uppercase tracking-widest transition-all border border-white/10 group active:scale-95"
                            >
                                <FileText className="w-6 h-6 group-hover:scale-110 transition-transform text-emerald-400" />
                                Read BOMA Standards
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Performance Benchmark Wall */}
            <section id="stats" className="py-20 border-y border-white/5 bg-slate-900/10 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        {SQUARE_FOOTAGE_2026.stats.map((stat, i) => (
                            <div key={i} className="text-center md:text-left space-y-2 group border-l border-white/5 pl-8 first:border-0 first:pl-0">
                                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover:text-emerald-500 transition-colors uppercase">{stat.l}</div>
                                <div className="text-4xl font-black text-white italic tracking-tighter">{stat.v}</div>
                                <div className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">{stat.s}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deep Educational Content - Benchmarked from 'calorie' */}
            <section className="py-32 bg-[radial-gradient(circle_at_top_right,rgba(52,211,153,0.03),transparent_40%)]">
                <div className="max-w-4xl mx-auto px-6 space-y-24 text-justify">
                    <div className="space-y-12">
                        <h2 className="text-5xl font-black text-white tracking-tighter leading-none italic uppercase">
                            The Metrology of <span className="text-emerald-600">Habitable Space.</span>
                        </h2>
                        <div className="prose prose-invert prose-blue max-w-none text-slate-400 text-lg leading-relaxed font-bold italic space-y-8">
                            <p>
                                In the global real estate architecture of 2026, square footage is more than a measurement—it is the primary unit of economic value. Whether auditing a residential high-rise in London or a commercial logistics center in Texas, the reconciliation of dimensional data determines taxation, insurance premiums, and market valuation. An area audit is a clinical process of geometric decomposition, ensuring that every square inch of physical surface is accounted for with zero-loss precision.
                            </p>
                            <p>
                                At the heart of our **Dimensional Auditor** is the ANSI Z765 standard for residential space and the BOMA Z65 standard for commercial environments. These protocols distinguish between 'Gross' area and 'Rentable' area, eliminating the ambiguity that often plagues property transactions. By utilizing our S-Class engine, you are applying the same rigorous computational standards as professional appraisers and structural engineers.
                            </p>
                        </div>
                    </div>

                    <div className="p-12 bg-slate-900 border border-white/5 rounded-[4rem] space-y-10 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none"><History className="w-32 h-32 text-emerald-500" /></div>
                        <div className="space-y-8 relative z-10">
                            <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter">1. The Evolution of Area Auditing</h3>
                            <p className="text-slate-500 text-base font-bold leading-relaxed italic">
                                Historically, property measurement was performed with physical tapes, prone to 'sag' and human parallax error. In 2026, we utilize LiDAR and ultrasonic telemetry to build digital twins of physical space. Our engine bridges this gap by providing a mathematical anchor points for these high-fidelity inputs. By breaking complex floor plans into prime geometric tranches—Rectangles, Triangles, and Circular arcs—our auditor prevents the cumulative drift errors that occur in simplified 'estimation' tools. Binary accuracy meets structural reality.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter">2. Gross Living Area (GLA) vs. Net Internal Area (NIA)</h3>
                        <p className="text-slate-400 text-lg font-bold leading-relaxed italic">
                            A critical component of a property audit is understanding the 'Boundary Condition'. GLA (Gross Living Area) measures the exterior footprint, incorporating the wall thickness that provides structural and thermal integrity. NIA (Net Internal Area), however, audits the actual 'carpetable' space available for occupancy. Our engine allows you to execute these audits with 10-decimal precision, facilitating accurate calculations for flooring materials, HVAC load balancing, and occupancy density protocols.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                            <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] space-y-4">
                                <div className="text-emerald-500 font-black text-[10px] uppercase tracking-widest">External Audit (GLA)</div>
                                <p className="text-xs text-slate-500 font-bold italic leading-relaxed">The total 'envelope' magnitude. Used for tax assessment, structural modeling, and global asset valuation metrics.</p>
                            </div>
                            <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] space-y-4 shadow-2xl shadow-emerald-500/10 border-emerald-500/20">
                                <div className="text-emerald-400 font-black text-[10px] uppercase tracking-widest">Internal Audit (NIA)</div>
                                <p className="text-xs text-slate-400 font-bold italic leading-relaxed text-white">The functional 'core' area. Critical for interior design, tenant leasing, and precise material procurement.</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter">3. Geometric Decomposition: Handling Irregular Plans</h3>
                        <p className="text-slate-500 text-base font-bold leading-relaxed italic">
                            Rarely are modern architectural spaces perfect rectangles. 'L-Shaped' configurations, alcoves, and circular bay windows create computational complexity. Our Dimensional Auditor uses 'S-Class Decomposition'—a logic gate that isolates irregular shapes into their prime components. By auditing these individually and reconciling the sum, we maintain the dimensional integrity required by ISO structural standards. This ensures that a 0.05% error in a single alcove does not cascade into a significant magnitude drift across a 50,000 sq ft industrial audit.
                        </p>
                    </div>

                    <p className="text-slate-500 text-sm font-bold italic leading-relaxed text-center px-12 border-t border-white/5 pt-12">
                        Institutional Note: All area results are generated using ANSI Z765-2021 protocols and verified against NIST SP-811 conversion parity for Metric/Imperial synchronization.
                    </p>
                </div>
            </section>

            {/* Citations Section */}
            <section className="py-24 border-y border-white/5 bg-slate-900/10">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-12 text-center italic">Institutional Intelligence Network</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        {SQUARE_FOOTAGE_2026.citations.slice(0, 4).map((cite, i) => (
                            <div key={i} className="space-y-2 group">
                                <div className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">{cite.name}</div>
                                <h4 className="text-sm font-black text-white group-hover:text-emerald-400 transition-colors uppercase">{cite.type}</h4>
                                <p className="text-[11px] text-slate-500 font-bold italic leading-relaxed">Verified primary data source for 2026 property measurement and dimensional audits.</p>
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
                    <RelatedCalculators currentCalc="square-footage" />
                </div>
            </section>
        </div>
    );
}
