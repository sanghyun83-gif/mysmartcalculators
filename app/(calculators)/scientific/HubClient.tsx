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
        <div className="min-h-screen bg-slate-950">
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

            {/* Performance Benchmark Wall */}
            <section id="stats" className="py-20 border-y border-white/5 bg-slate-900/10 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        {SCIENTIFIC_2026.stats.map((stat, i) => (
                            <div key={i} className="text-center md:text-left space-y-2 group border-l border-white/5 pl-8 first:border-0 first:pl-0">
                                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover:text-blue-500 transition-colors uppercase">{stat.l}</div>
                                <div className="text-4xl font-black text-white italic tracking-tighter">{stat.v}</div>
                                <div className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">{stat.s}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deep Educational Content: Omni-Style Hybrid */}
            <section className="py-32 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.03),transparent_40%)]">
                <div className="max-w-4xl mx-auto px-6 space-y-24">

                    <div className="space-y-12">
                        <h2 className="text-5xl font-black text-white tracking-tighter leading-none italic uppercase">
                            The Evolution of <span className="text-blue-600">Mathematical Hardware.</span>
                        </h2>
                        <div className="prose prose-invert prose-blue max-w-none text-slate-400 text-lg leading-relaxed font-bold italic space-y-8">
                            <p>
                                The scientific calculator is the modern descendant of the slide rule, an analog calculation tool used by titans like Isaac Newton and the pioneers of NASA&apos;s space program. The digital revolution began in 1968 with the <span className="text-white">HP-9100A</span>, a programmable desktop machine that ushered in the era of transcendental function processing.
                            </p>
                            <p>
                                In 1972, the <span className="text-blue-500">HP-35</span> changed the world as the first handheld scientific calculator, rendering logarithmic tables obsolete virtually overnight. Today, 2026 standards demand more than just raw processing; they require &quot;Natural Textbook Display&quot; (MathPrint™) to bridge the gap between abstract equations and digital results, ensuring that students and engineers can visualize their logic in real-time.
                            </p>
                        </div>
                    </div>

                    <div className="p-12 bg-slate-900 border border-white/5 rounded-[4rem] space-y-12 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity"><Binary className="w-48 h-48 text-white" /></div>
                        <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter">Engine Syntax & <span className="text-blue-600">Logic Stacks.</span></h3>
                        <p className="text-slate-400 font-bold italic text-lg relative z-10">
                            Scientific computation relies on complex order-of-operation protocols (PEMDAS/BODMAS) that distinguish it from basic commercial tools:
                        </p>
                        <div className="grid md:grid-cols-2 gap-8 relative z-10">
                            <div className="space-y-4">
                                <h4 className="text-xs font-black text-blue-500 uppercase tracking-widest">Trigonometric Resolution</h4>
                                <p className="text-slate-500 text-sm font-bold italic leading-relaxed">Processing Sin, Cos, and Tan across Degrees, Radians, and Gradians with instantaneous pivot capability.</p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-xs font-black text-blue-500 uppercase tracking-widest">Logarithmic Mastery</h4>
                                <p className="text-slate-500 text-sm font-bold italic leading-relaxed">Supporting Base-10, Natural Log (ln), and arbitrary base transformations for exponential modeling.</p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-xs font-black text-blue-500 uppercase tracking-widest">Floating-Point Integrity</h4>
                                <p className="text-slate-500 text-sm font-bold italic leading-relaxed">Preventing round-off errors in multi-step engineering calculations via IEEE 754 standard compliance.</p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-xs font-black text-blue-500 uppercase tracking-widest">Statistical Analysis</h4>
                                <p className="text-slate-500 text-sm font-bold italic leading-relaxed">Dedicated modes for mean, standard deviation, permutations, and regression modeling.</p>
                            </div>
                        </div>
                    </div>

                    <div id="compliance" className="space-y-12 scroll-mt-24">
                        <h2 className="text-4xl font-black text-white tracking-tighter leading-none italic uppercase">
                            2026 Test <span className="text-blue-600">Compliance Map.</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { c: "Digital SAT", r: "Approved", d: "Standard scientific functions permitted for Math sections." },
                                { c: "ACT Exam", r: "Compliant", d: "Non-CAS scientific calculators widely accepted across all parts." },
                                { c: "AP Calculus", r: "Recommended", d: "Essential for numerical integration and complex derivates." },
                                { c: "IB Diploma", r: "Verified", d: "Complies with 2025-2026 Singapore SEAB and IB guidelines." },
                                { c: "Engineering Boards", r: "Reference", d: "Purdue and MIT exam room standards for non-graphing tools." },
                                { c: "Physics Olympiad", r: "Baseline", d: "Fundamental for constant handling and unit conversions." }
                            ].map((cat, i) => (
                                <div key={i} className="p-6 bg-white/5 border border-white/5 rounded-3xl flex flex-col gap-2 hover:bg-blue-500/5 hover:border-blue-500/20 transition-all cursor-default">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">{cat.c}</span>
                                        <span className="text-sm font-black text-white italic">{cat.r}</span>
                                    </div>
                                    <p className="text-slate-500 text-[11px] font-bold italic leading-tight">{cat.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* New Content Section: Functions & Physics */}
                    <div id="functions" className="space-y-12 scroll-mt-24">
                        <h2 className="text-4xl font-black text-white tracking-tighter leading-none italic uppercase">
                            Engine <span className="text-blue-600">Operator Library.</span>
                        </h2>
                        <div className="bg-slate-900/50 border border-white/5 rounded-[4rem] p-12 overflow-hidden">
                            <table className="w-full text-left">
                                <thead className="border-b border-white/10">
                                    <tr>
                                        <th className="pb-6 text-xs font-black text-slate-500 uppercase tracking-widest">Operator</th>
                                        <th className="pb-6 text-xs font-black text-slate-500 uppercase tracking-widest">Scientific Protocol</th>
                                        <th className="pb-6 text-xs font-black text-slate-500 uppercase tracking-widest">Example</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {[
                                        { op: "Trig", desc: "Sine, Cosine, Tangent & Inverses", ex: "sin(45°) = 0.707" },
                                        { op: "Log", desc: "Common (log) and Natural (ln)", ex: "ln(e) = 1" },
                                        { op: "Power", desc: "Exponents, Roots, and Factorials", ex: "5! = 120" },
                                        { op: "State", desc: "Memory storage and Ans buffer", ex: "STO -> X" }
                                    ].map((row, i) => (
                                        <tr key={i} className="group hover:bg-white/5 transition-colors">
                                            <td className="py-6 font-black text-white italic">{row.op}</td>
                                            <td className="py-6 text-slate-400 font-bold italic text-sm">{row.desc}</td>
                                            <td className="py-6 text-blue-500 font-mono text-xs">{row.ex}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div id="physics" className="space-y-12 scroll-mt-24">
                        <h2 className="text-4xl font-black text-white tracking-tighter leading-none italic uppercase">
                            Physics <span className="text-blue-600">Constant Table.</span>
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            {[
                                { name: "Speed of Light (c)", val: "2.9979 x 10⁸ m/s" },
                                { name: "Planck Const (h)", val: "6.626 x 10⁻³⁴ J·s" },
                                { name: "Gravity (g)", val: "9.80665 m/s²" },
                                { name: "Avogadro (NA)", val: "6.022 x 10²³ mol⁻¹" },
                                { name: "Electron Mass", val: "9.109 x 10⁻³¹ kg" },
                                { name: "Gas Constant (R)", val: "8.314 J/(mol·K)" }
                            ].map((item, i) => (
                                <div key={i} className="p-8 bg-slate-900 border border-white/5 rounded-[2rem] space-y-2 group hover:border-blue-500/30 transition-all">
                                    <div className="text-[10px] font-black text-slate-600 uppercase tracking-widest group-hover:text-blue-500">{item.name}</div>
                                    <div className="text-xl font-black text-white italic tracking-tighter">{item.val}</div>
                                </div>
                            ))}
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
