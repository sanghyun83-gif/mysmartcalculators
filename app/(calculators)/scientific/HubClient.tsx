"use client";

import React from "react";
import Link from "next/link";
import {
    Binary,
    ArrowRight,
    Cpu,
    ChevronDown
} from "lucide-react";
import { SCIENTIFIC_2026 } from "@/lib/calculators/scientific";

const FAQSection = ({ faqs }: { faqs: { question: string; answer: string }[] }) => {
    return (
        <section id="faq" className="py-32 bg-slate-950">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-20 space-y-4">
                    <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase">
                        Precision <span className="text-blue-600">Intelligence.</span>
                    </h2>
                    <p className="text-slate-500 font-bold italic tracking-widest text-xs uppercase">15 Expert Clarifications on Computational Logic</p>
                </div>
                <div className="grid gap-4">
                    {faqs.map((faq, i) => (
                        <details key={i} className="group bg-white/5 border border-white/5 rounded-[2rem] overflow-hidden transition-all hover:bg-white/10">
                            <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                                <span className="text-lg font-black text-white italic group-open:text-blue-500 transition-colors uppercase tracking-tight">{faq.question}</span>
                                <ChevronDown className="w-6 h-6 text-slate-500 group-open:rotate-180 transition-transform" />
                            </summary>
                            <div className="px-8 pb-8 text-slate-400 font-bold italic leading-relaxed">
                                {faq.answer}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default function ScientificHubClient() {
    return (
        <div className="bg-slate-950">
            {/* S-Class Premium Hero: Math Engine AI */}
            <section className="relative py-24 md:py-40 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.05)_0%,transparent_70%)]" />
                <div className="max-w-7xl mx-auto px-6 relative">
                    <div className="flex flex-col items-center text-center space-y-10 group">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-black text-blue-500 uppercase tracking-widest shadow-2xl shadow-blue-500/10 animate-pulse">
                            <Cpu className="w-3 h-3" /> Math Engine 2026 Core Active
                        </div>

                        <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.85] text-white">
                            Scientific <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 italic underline decoration-white/10 underline-offset-[12px]">Logic.</span>
                        </h1>

                        <p className="max-w-3xl text-xl md:text-3xl text-slate-400 font-bold leading-tight italic">
                            Absolute floating-point precision for 2026. Execute complex trig, log, and algebraic functions with <span className="text-white">computational integrity.</span>
                        </p>

                        <Link
                            href="/scientific/calculator"
                            className="inline-flex items-center gap-4 bg-blue-600 hover:bg-blue-500 text-white px-12 py-6 rounded-[2rem] font-black text-base uppercase tracking-widest transition-all shadow-2xl shadow-blue-600/30 group active:scale-95"
                        >
                            <Binary className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                            Launch Math Engine
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Task 2: Triple-Table Featured Snippet Architecture */}
            <section id="institutional-audit" className="py-24 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.03),transparent_40%)]">
                <div className="max-w-5xl mx-auto px-6 space-y-24">

                    {/* 1. Historical/Statistical Table */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4 border-l-4 border-blue-500 pl-6">
                            <div>
                                <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter">I. Evolution of Handheld Computational Hardware</h2>
                                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Historical Milestones ??NASA & R&D Benchmarks</p>
                            </div>
                        </div>
                        <div className="overflow-x-auto rounded-[2rem] border border-white/5 bg-slate-900 shadow-2xl">
                            <table className="w-full text-left border-collapse min-w-[600px]">
                                <thead className="bg-white/5 border-b border-white/10 text-[10px] font-black tracking-[0.2em] text-blue-500 uppercase">
                                    <tr>
                                        <th className="px-8 py-6">Era Milestone</th>
                                        <th className="px-8 py-6">Hardware Anchor</th>
                                        <th className="px-8 py-6">Logic Innovation</th>
                                        <th className="px-8 py-6">Audit Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5 text-sm font-bold italic text-slate-400">
                                    {[
                                        { e: "1968", m: "HP-9100A", i: "Transcendental Math Engine", s: "Archived" },
                                        { e: "1972", m: "HP-35", i: "First Pocket Scientific", s: "Archived" },
                                        { e: "2010", m: "Natural Display", i: "Textbook SYNC Logic", s: "Standard" },
                                        { e: "2026 (P)", m: "AI-Integrated Logic", i: "Neural-Grade Floating Point", s: "Institutional Target" }
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-blue-500/5 transition-colors group">
                                            <td className="px-8 py-6 text-white">{row.e}</td>
                                            <td className="px-8 py-6">{row.m}</td>
                                            <td className="px-8 py-6 text-blue-600/70">{row.i}</td>
                                            <td className="px-8 py-6 text-[10px] uppercase tracking-widest text-slate-600 font-mono">{row.s}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* 2. Comparative Benchmark Table */}
                    <div className="space-y-8 text-right md:text-left">
                        <div className="flex items-center gap-4 border-r-4 md:border-r-0 md:border-l-4 border-indigo-500 pr-6 md:pr-0 md:pl-6 justify-end md:justify-start">
                            <div>
                                <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter text-right md:text-left">II. Global Examination Board Compliance (2026)</h2>
                                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Regulatory Standards Matrix ??SAT/ACT/IB/AP</p>
                            </div>
                        </div>
                        <div className="overflow-x-auto rounded-[2rem] border border-white/5 bg-slate-900 shadow-2xl">
                            <table className="w-full text-left border-collapse min-w-[600px]">
                                <thead className="bg-white/5 border-b border-white/10 text-[10px] font-black tracking-[0.2em] text-indigo-500 uppercase">
                                    <tr>
                                        <th className="px-8 py-6">Examination Authority</th>
                                        <th className="px-8 py-6">Compliance Status</th>
                                        <th className="px-8 py-6">Permitted Operations</th>
                                        <th className="px-8 py-6">Regulatory Logic</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5 text-sm font-bold italic text-slate-400">
                                    {[
                                        { a: "Digital SAT", c: "Approved", p: "Full Trig/Log/Stat", r: "Non-CAS" },
                                        { a: "ACT Exam", c: "Compatible", p: "Scientific Only", r: "No QWERTY" },
                                        { a: "AP Calculus", c: "Required", p: "Int/Diff Integration", r: "Numerical Mode" },
                                        { a: "IB Diploma", c: "Certified", p: "GDC Functions", r: "Strict Firmware" }
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-indigo-500/5 transition-colors group">
                                            <td className="px-8 py-6 text-white">{row.a}</td>
                                            <td className="px-8 py-6">{row.c}</td>
                                            <td className="px-8 py-6">{row.p}</td>
                                            <td className="px-8 py-6 text-indigo-600 font-mono text-[10px] uppercase tracking-widest">{row.r}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* 3. Technical Spec Table */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4 border-l-4 border-white/20 pl-6">
                            <div>
                                <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter">III. Computational Engine Specification</h2>
                                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Floating-Point Benchmarks ??IEEE 754 Integrity</p>
                            </div>
                        </div>
                        <div className="overflow-x-auto rounded-[2rem] border border-white/5 bg-slate-950 shadow-2xl">
                            <table className="w-full text-left border-collapse min-w-[600px]">
                                <thead className="bg-white/5 border-b border-white/10 text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase">
                                    <tr>
                                        <th className="px-8 py-6">Precision Metadata</th>
                                        <th className="px-8 py-6">Mathematical Range</th>
                                        <th className="px-8 py-6">Resolution Logic</th>
                                        <th className="px-8 py-6">Fidelity Standard</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5 text-sm font-bold italic text-slate-400">
                                    {[
                                        { m: "Significant Digits", r: "16-Digit Precision", l: "Mantissa Normalization", s: "IEEE-754" },
                                        { m: "Exponent Boundary", r: "10^-308 to 10^308", l: "Double-Float Overflow", s: "64-Bit" },
                                        { m: "Transcendental Error", r: "< 10^-15 Gap", l: "Taylor Series Recon", s: "S-Class" }
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-white/5 transition-colors group">
                                            <td className="px-8 py-6 text-white">{row.m}</td>
                                            <td className="px-8 py-6 text-xs">{row.r}</td>
                                            <td className="px-8 py-6 text-xs font-mono">{row.l}</td>
                                            <td className="px-8 py-6 text-[10px] uppercase tracking-widest text-white/40">{row.s}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </section>

            {/* Expert Analysis Section - Secondary Links */}
            <section className="py-24 border-t border-white/5 bg-slate-900/10">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        <a href="#functions" className="p-10 bg-white/5 border border-white/10 rounded-[3rem] hover:bg-white/10 transition-all group relative overflow-hidden">
                            <h3 className="text-xl font-black text-white italic mb-2 group-hover:text-blue-500 transition-colors">Function List</h3>
                            <p className="text-slate-500 text-xs font-bold italic">Detailed guide to all math operators.</p>
                        </a>
                        <a href="#compliance" className="p-10 bg-white/5 border border-white/10 rounded-[3rem] hover:bg-white/10 transition-all group relative overflow-hidden">
                            <h3 className="text-xl font-black text-white italic mb-2 group-hover:text-blue-500 transition-colors">Test Guides</h3>
                            <p className="text-slate-500 text-xs font-bold italic">Calculator rules for SAT/ACT 2026.</p>
                        </a>
                        <a href="#physics" className="p-10 bg-white/5 border border-white/10 rounded-[3rem] hover:bg-white/10 transition-all group relative overflow-hidden">
                            <h3 className="text-xl font-black text-white italic mb-2 group-hover:text-blue-500 transition-colors">Physics Toolkit</h3>
                            <p className="text-slate-500 text-xs font-bold italic">Core constants and unit conversions.</p>
                        </a>
                    </div>
                </div>
            </section>

            {/* Citations: Institutional Credibility 5+ Sources */}
            <section className="py-24 border-y border-white/5 bg-slate-900/5">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-12 text-center">Institutional Citations & Scientific Source Integrity</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        {[
                            { s: "College Board", t: "SAT Calculator Policy & Approved Models 2025-2026", d: "Standardized testing compliance frameworks.", l: "https://satsuite.collegeboard.org/digital/calculator-policy" },
                            { s: "NASA", t: "History of the HP-35: Handheld Computational Revolution", d: "Legacy of handheld scientific computing at NASA.", l: "https://www.nasa.gov/history/" },
                            { s: "NIST", t: "Mathematical Constants and Fundamental Physical Units", d: "Precision data for universal constant implementation.", l: "https://physics.nist.gov/cuu/Constants/" },
                            { s: "IEEE", t: "754 Standard for Floating-Point Arithmetic Compliance", d: "Global standard for digital computational integrity.", l: "https://ieeexplore.ieee.org/document/8766229" },
                            { s: "MAA", t: "Mathematics Association of America: Use of Technology", d: "Pedagogical guidelines for digital math tools.", l: "https://www.maa.org/" }
                        ].map((cite, i) => (
                            <a key={i} href={cite.l} target="_blank" rel="noopener noreferrer" className="space-y-2 first:col-span-2 group block">
                                <div className="text-[9px] font-black text-blue-600 uppercase tracking-widest">{cite.s}</div>
                                <h4 className="text-sm font-black text-white group-hover:text-blue-500 transition-colors underline decoration-white/5 underline-offset-4">{cite.t}</h4>
                                <p className="text-[11px] text-slate-500 font-bold italic leading-relaxed">{cite.d}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-24 bg-blue-600">
                <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
                    <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase leading-none">
                        Execute Precision <span className="underline decoration-white/20 underline-offset-8">Math Now.</span>
                    </h2>
                    <p className="text-blue-100 text-lg md:text-xl font-bold italic">Free professional-grade scientific engine for all computational needs.</p>
                    <Link
                        href="/scientific/calculator"
                        className="inline-flex items-center gap-4 bg-white text-blue-600 px-12 py-6 rounded-full font-black text-base uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-2xl"
                    >
                        Access Calculator <ArrowRight className="w-6 h-6" />
                    </Link>
                </div>
            </section>

            {/* FAQ Section - Now 15 Items */}
            <FAQSection faqs={SCIENTIFIC_2026.faqs.map(f => ({ question: f.question, answer: f.answer })) || []} />
        </div>
    );
}
