"use client";

import React from "react";
import Link from "next/link";
import {
    Binary,
    Cpu,
    ArrowRight,
    ChevronRight,
    FileText,
    Target,
    Zap,
    ShieldCheck,
    Code,
    Terminal,
    Info,
    ChevronDown
} from "lucide-react";
import { BINARY_2026 } from "@/lib/calculators/binary";
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
                        <h2 className="text-3xl font-bold text-white uppercase italic tracking-tighter">Digital Logic FAQ</h2>
                        <p className="text-slate-400 font-bold italic">Essential intelligence for 2026 binary auditing</p>
                    </div>
                </div>

                <div className="space-y-4">
                    {BINARY_2026.faqs.map((faq, index) => (
                        <details
                            key={index}
                            className="group bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300"
                        >
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                <span className="text-lg font-bold text-slate-200 group-open:text-emerald-400 transition-colors italic">
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
            {/* S-Class Premium Hero: The Digital Genesis */}
            <section className="relative py-24 md:py-40 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)]" />
                <div className="max-w-7xl mx-auto px-6 relative text-center">
                    <div className="flex flex-col items-center space-y-10 group">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-black text-emerald-400 uppercase tracking-widest shadow-2xl shadow-emerald-500/10 animate-pulse">
                            <Cpu className="w-3 h-3" /> Digital Architecture Audit 2026
                        </div>

                        <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.85] text-white uppercase mt-4">
                            Binary <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 italic underline decoration-white/10 underline-offset-[12px]">Auditor.</span>
                        </h1>

                        <p className="max-w-3xl text-xl md:text-3xl text-slate-400 font-bold leading-tight italic">
                            Master the architecture of digital intelligence. Perform high-fidelity bitwise operations and radix conversions with <span className="text-white">hardware-level precision.</span>
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            <Link
                                href="/binary/calculator"
                                className="inline-flex items-center gap-4 bg-emerald-600 hover:bg-emerald-500 text-white px-12 py-6 rounded-[2rem] font-black text-base uppercase tracking-widest transition-all shadow-2xl shadow-emerald-600/30 group active:scale-95"
                            >
                                <Terminal className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                                Run Logic Engine
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </Link>

                            <Link
                                href="/binary/health-guide"
                                className="inline-flex items-center gap-4 bg-white/5 hover:bg-white/10 text-white px-12 py-6 rounded-[2rem] font-black text-base uppercase tracking-widest transition-all border border-white/10 group active:scale-95"
                            >
                                <FileText className="w-6 h-6 group-hover:scale-110 transition-transform text-emerald-400" />
                                Expert Guide
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Binary Performance benchmarks */}
            <section id="stats" className="py-20 border-y border-white/5 bg-slate-900/10 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        {[
                            { l: "Max Precision", v: "64-BIT", s: "IEEE 754 Sync" },
                            { l: "Complexity", v: "Polynomial", s: "O(log n) Latency" },
                            { l: "Operations", v: "Bitwise", s: "Shift, XOR, Mask" },
                            { l: "Standards", v: "ANSI/ISO", s: "Universal Logic" }
                        ].map((stat, i) => (
                            <div key={i} className="text-center md:text-left space-y-2 group border-l border-white/5 pl-8 first:border-0 first:pl-0">
                                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover:text-emerald-500 transition-colors uppercase">{stat.l}</div>
                                <div className="text-4xl font-black text-white italic tracking-tighter">{stat.v}</div>
                                <div className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">{stat.s}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sub-Header: The Digital Frontier */}
            <section className="py-32 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.03),transparent_40%)]">
                <div className="max-w-4xl mx-auto px-6 space-y-24">
                    <div className="space-y-12 text-center">
                        <h2 className="text-5xl font-black text-white tracking-tighter leading-none italic uppercase">
                            The Bitmask <span className="text-emerald-600">Theorem.</span>
                        </h2>
                        <div className="prose prose-invert prose-emerald max-w-none text-slate-400 text-lg leading-relaxed font-bold italic space-y-12 text-justify">
                            <p>
                                At its core, every digital interaction is a series of state changes—from zero to one. Our **Binary Logic Auditor** provides the specialized environment required to analyze these transitions with institutional fidelity. By utilizing high-bandwidth conversion algorithms, we ensure that your radix transitions (Hex, Oct, Dec) maintain absolute data parity across 8, 16, 32, and 64-bit architectures. Proactive logic auditing is the foundation of robust software architecture and cryptographic security.
                            </p>

                            <div className="space-y-8 text-left not-prose">
                                <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter">1. The Evolution of Binary Logic</h3>
                                <p className="text-slate-500 text-base leading-relaxed">
                                    The binary system, while synonymous with modern computing, traces its conceptual roots back to Gottfried Wilhelm Leibniz in the 17th century. Leibniz envisioned a system where logical truths could be calculated with the same rigor as mathematical ones. Fast forward to 2026, and this vision has manifested as the global silicon standard. In our current epoch, the binary auditor is not merely a conversion tool; it is a diagnostic instrument for low-level system integrity. Whether you are debugging a memory leak in a C++ kernel or optimizing a Solidity smart contract, understanding the raw bitstream is non-negotiable for the high-tier engineer.
                                </p>
                            </div>

                            <div className="space-y-8 text-left not-prose">
                                <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter">2. Why Radix Conversion Matters</h3>
                                <p className="text-slate-500 text-base leading-relaxed">
                                    In the landscape of computer architecture, the Decimal system is a human-facing abstraction. Computers 'think' in binary, but humans 'debug' in Hexadecimal. Hexadecimal acts as a high-density compression format for binary strings. A single 16-bit word requires 16 characters in binary (e.g., 1111000010100101) but only four in hexadecimal (F0A5). Our auditor bridges this cognitive gap, providing real-time synchronization between these distinct numeric planes. This allows for rapid identification of bit-flips, endianness mismatches, and sign-extension errors that would otherwise remain hidden in abstracted high-level code.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 bg-white/5 border border-white/10 rounded-[2.5rem]">
                                    <div className="space-y-2">
                                        <div className="text-emerald-500 font-black text-[10px] uppercase">Instruction Density</div>
                                        <p className="text-xs text-slate-400">Higher radix systems like Hex reduce visual entropy, making memory dumps readable during deep auditing.</p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="text-emerald-500 font-black text-[10px] uppercase">Boolean Rigor</div>
                                        <p className="text-xs text-slate-400">Mapping binary directly to Boolean logic (True/False) ensures zero-loss translation for conditional branching logic.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-8 text-left not-prose">
                                <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter">3. Application in 2026 Cryptography</h3>
                                <p className="text-slate-500 text-base leading-relaxed">
                                    As we move into the era of quantum-resistant cryptography, the fundamental bitwise XOR operation remains at the center of the world's most secure protocols. Hashing algorithms like SHA-256 and encryption standards like AES rely on a sequence of complex bitwise transformations—rotations, shifts, and logic gate applications. A binary auditor allows security analysts to perform manual verification of these 'rounds.' By isolating a single bit-flip, an analyst can observe the avalanche effect, where a tiny change in input catastrophic changes the entire output hash. This mathematical unpredictability is what secures global finance and private communication.
                                </p>
                            </div>

                            <p>
                                In conclusion, the **Binary Auditor** is designed for those who demand more than just a conversion. It is built for those who define the architecture of the future. By maintaining high-fidelity parity between multiple number bases and providing a hardware-grade interactive interface, we empower the next generation of digital architects to build with absolute certainty. Use this tool to cross-reference legacy BCD formats, audit RISC-V registers, or simply to ground your high-level understanding in the reality of the machine.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <FAQSection />

            {/* Related Calculators */}
            <section className="py-24 bg-slate-950 border-t border-slate-900">
                <div className="max-w-7xl mx-auto px-6">
                    <RelatedCalculators currentCalc="binary" />
                </div>
            </section>
        </div>
    );
}
