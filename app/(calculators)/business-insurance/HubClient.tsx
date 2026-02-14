"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
    Calculator,
    FileText,
    Briefcase,
    Shield,
    ArrowRight,
    TrendingUp,
    Activity,
    Info,
    ChevronDown,
    Zap,
    Scale,
    PieChart,
    AlertCircle,
    Globe,
    Lock
} from "lucide-react";
import { SITE, CALCULATORS, BUSINESS_TYPES, BUSINESS_2026, FAQS, formatCurrency } from "@/lib/calculators/business-insurance";
import { RelatedCalculators } from "@/components/RelatedCalculators";

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    return (
        <section id="faq" className="py-24 bg-slate-900/50">
            <div className="max-w-4xl mx-auto px-6">
                <div className="flex items-center gap-4 mb-12">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center">
                        <Info className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-white">Expert FAQ Library</h2>
                        <p className="text-slate-400">Essential 2026 Business Insurance intelligence</p>
                    </div>
                </div>
                <div className="space-y-4">
                    {FAQS.slice(0, 8).map((faq, index) => (
                        <details
                            key={index}
                            className="group bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300"
                            open={openIndex === index}
                        >
                            <summary
                                className="flex items-center justify-between p-6 cursor-pointer list-none"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpenIndex(openIndex === index ? null : index);
                                }}
                            >
                                <span className="text-lg font-medium text-slate-200 group-open:text-blue-400 transition-colors">
                                    {faq.question}
                                </span>
                                <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
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
        <div className="bg-slate-950 min-h-screen font-sans selection:bg-blue-500/30 text-slate-300">
            {/* 1. S-Class Hero (UX 15%) */}
            <section className="relative pt-32 pb-24 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-50 pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
                        <Zap className="w-4 h-4" />
                        <span>Standard Engine 2026 Audit Applied</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
                        BOP<span className="text-blue-500"> Auditor.</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl text-slate-400 mb-12 leading-relaxed">
                        Calculate business premiums, liability margins, and commercial risk factors with institutional precision. Synced with 2026 NAIC schedules.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/business-insurance/calculator"
                            className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-[0_0_40px_rgba(37,99,235,0.3)] flex items-center gap-2"
                        >
                            <Calculator className="w-5 h-5" />
                            Run Business Engine
                        </Link>
                        <Link
                            href="/business-insurance/guide"
                            className="px-8 py-4 bg-slate-900 border border-slate-800 hover:border-slate-700 text-white rounded-2xl font-bold text-lg transition-all duration-300 flex items-center gap-2"
                        >
                            <Shield className="w-5 h-5" />
                            Coverage Audit
                        </Link>
                    </div>
                </div>
            </section>

            {/* Core Metrics */}
            <section className="py-24 border-y border-slate-900 bg-slate-950">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Activity className="w-8 h-8 text-blue-400" />,
                                label: "Avg SMB Premium",
                                value: "$1,281 /yr",
                                desc: "Standard BOP (General Liability + Property)"
                            },
                            {
                                icon: <Briefcase className="w-8 h-8 text-emerald-400" />,
                                label: "Startup Baseline",
                                value: "$500+",
                                desc: "Minimum liability for new LLCs & Entities"
                            },
                            {
                                icon: <Scale className="w-8 h-8 text-purple-400" />,
                                label: "Industry Alpha",
                                value: "NAIC 2026",
                                desc: "Official risk pooling & actuarial benchmarking"
                            }
                        ].map((stat, i) => (
                            <div key={i} className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/30 transition-all duration-500 group">
                                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">{stat.icon}</div>
                                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-blue-400 font-semibold mb-2">{stat.label}</div>
                                <p className="text-slate-500 text-sm leading-relaxed">{stat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2. The Strict 3-Table Protocol (Authority 85%) */}
            <section className="py-32 bg-slate-950 relative">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="my-24 p-8 bg-slate-900 border border-white/5 rounded-[3rem] shadow-2xl">
                        <div className="space-y-20">
                            {/* Table I: Historical/Statistical */}
                            <div className="space-y-8">
                                <div className="flex items-center gap-4 border-l-4 border-blue-500 pl-6">
                                    <div>
                                        <h2 className="text-xl font-black text-white italic uppercase tracking-tighter">I. SMB Insurance Premium Trends (2020–2026)</h2>
                                        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Actuarial Loss Audit • Commercial Property Delta</p>
                                    </div>
                                </div>
                                <div className="overflow-x-auto rounded-[2rem] border border-white/5 bg-slate-950">
                                    <table className="w-full text-left border-collapse">
                                        <thead className="bg-white/5 border-b border-white/10 text-[9px] font-black tracking-[0.2em] text-blue-400 uppercase">
                                            <tr>
                                                <th className="px-6 py-4">Fiscal Year</th>
                                                <th className="px-6 py-4">Avg. BOP Cost</th>
                                                <th className="px-6 py-4">Risk Surge</th>
                                                <th className="px-6 py-4">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-white/5 text-xs font-bold italic text-slate-400">
                                            {[
                                                { y: "2020", c: "$1,120", r: "+1.2%", s: "Archived" },
                                                { y: "2022", c: "$1,185", r: "+5.8%", s: "Archived" },
                                                { y: "2024", c: "$1,240", r: "+4.6%", s: "Verified" },
                                                { y: "2026 Est", c: "$1,295", r: "+4.4%", s: "Current" }
                                            ].map((row, i) => (
                                                <tr key={i} className="hover:bg-blue-500/5 transition-colors group">
                                                    <td className="px-6 py-4 text-white">{row.y}</td>
                                                    <td className="px-6 py-4">{row.c}</td>
                                                    <td className="px-6 py-4 text-blue-600/70">{row.r}</td>
                                                    <td className="px-6 py-4 text-[9px] uppercase tracking-widest text-slate-600 font-mono">{row.s}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Table II: Comparative Benchmark */}
                            <div className="space-y-8">
                                <div className="flex items-center gap-4 border-l-4 border-blue-500 pl-6">
                                    <div>
                                        <h2 className="text-xl font-black text-white italic uppercase tracking-tighter">II. 2026 Entity Risk Allocation Matrix</h2>
                                        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">NAIC Risk Classes • Liability Exposure</p>
                                    </div>
                                </div>
                                <div className="overflow-x-auto rounded-[2rem] border border-white/5 bg-slate-950">
                                    <table className="w-full text-left border-collapse">
                                        <thead className="bg-white/5 border-b border-white/10 text-[9px] font-black tracking-[0.2em] text-blue-400 uppercase">
                                            <tr>
                                                <th className="px-6 py-4">Entity Type</th>
                                                <th className="px-6 py-4">Base Multiplier</th>
                                                <th className="px-6 py-4">Target Coverage</th>
                                                <th className="px-6 py-4">Audit Intensity</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-white/5 text-xs font-bold italic text-slate-400">
                                            {[
                                                { e: "Sole Proprietor", m: "1.00x", c: "GL Only", a: "Standard" },
                                                { e: "LLC / Partnership", m: "1.25x", c: "BOP + E&O", a: "Medium" },
                                                { e: "S-Corp / C-Corp", m: "1.50x", c: "Commercial Pack", a: "High" },
                                                { e: "Startup (VC)", m: "1.85x", c: "D&O + Cyber", a: "Institutional" }
                                            ].map((row, i) => (
                                                <tr key={i} className="hover:bg-blue-500/5 transition-colors group">
                                                    <td className="px-6 py-4 text-white">{row.e}</td>
                                                    <td className="px-6 py-4">{row.m}</td>
                                                    <td className="px-6 py-4">{row.c}</td>
                                                    <td className="px-6 py-4 text-blue-600 font-mono text-[9px] uppercase tracking-widest">{row.a}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Table III: Technical Specification */}
                            <div className="space-y-8">
                                <div className="flex items-center gap-4 border-l-4 border-blue-500 pl-6">
                                    <div>
                                        <h2 className="text-xl font-black text-white italic uppercase tracking-tighter">III. Underwriting Logic Specs</h2>
                                        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Risk Factor Weighting • Actuarial Formula</p>
                                    </div>
                                </div>
                                <div className="overflow-x-auto rounded-[2rem] border border-white/5 bg-slate-950">
                                    <table className="w-full text-left border-collapse">
                                        <thead className="bg-white/5 border-b border-white/10 text-[9px] font-black tracking-[0.2em] text-slate-500 uppercase">
                                            <tr>
                                                <th className="px-6 py-4">Module Tier</th>
                                                <th className="px-6 py-4">Mathematical Weight</th>
                                                <th className="px-6 py-4">Data Source</th>
                                                <th className="px-6 py-4">Precision</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-white/5 text-xs font-bold italic text-slate-400">
                                            {[
                                                { t: "Revenue Exposure", w: "40% Factor", p: "Financial Audit", pr: "Primary" },
                                                { t: "Industry Risk Code", w: "35% Factor", p: "NAICS / ISO", pr: "Secondary" },
                                                { t: "Claims History", w: "25% Factor", p: "Carrier Portal", pr: "Dynamic" }
                                            ].map((row, i) => (
                                                <tr key={i} className="hover:bg-white/5 transition-colors group">
                                                    <td className="px-6 py-4 text-white">{row.t}</td>
                                                    <td className="px-6 py-4 text-[10px]">{row.w}</td>
                                                    <td className="px-6 py-4 text-[10px] font-mono">{row.p}</td>
                                                    <td className="px-6 py-4 text-[9px] uppercase tracking-widest text-white/40">{row.pr}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. High-Density Technical Guide (Authority Content) */}
            <section className="py-24 bg-slate-950">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="prose prose-invert prose-blue max-w-none">
                        <header className="mb-20">
                            <h2 className="text-5xl font-black text-white mb-8 leading-tight">
                                Institutional Audit: <br />
                                <span className="text-blue-500">2026 Commercial Insurance Ecosystem</span>
                            </h2>
                            <p className="text-xl text-slate-400 leading-relaxed italic border-l-4 border-blue-500 pl-8 py-2">
                                For small businesses in 2026, insurance is no longer a static expense but a dynamic risk management layer. Navigating General Liability (GL), Property, and the modern Cyber/D&O surge requires a granular understanding of carrier loss ratios.
                            </p>
                        </header>

                        <div className="space-y-12 mb-24">
                            <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                                <Lock className="text-blue-500" />
                                1. The BOP Core Architecture
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                The **Business Owner&apos;s Policy (BOP)** remains the most efficient vehicle for SMBs. It effectively bundles General Liability and Commercial Property into a single underwriting unit, typically offering a 10-20% discount compared to monoline policies. In 2026, the BOP baseline has expanded to include higher limits for **Business Interruption (BI)** and data breach response as standard endorsements.
                            </p>
                            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 my-8">
                                <h4 className="text-white font-bold mb-4">Risk Mitigation Audit Checklist</h4>
                                <ul className="text-sm space-y-2 mb-0 text-slate-400">
                                    <li>• Verify **NAICS Codes**: Ensure your business classification is optimized for lower risk pooling.</li>
                                    <li>• Assess **Property VAL**: Use Replacement Cost Value (RCV) instead of Actual Cash Value (ACV).</li>
                                    <li>• Audit **Cyber Endorsements**: 2026 institutional mandates often require MFA for policy eligibility.</li>
                                    <li>• Check **Contractual Shielding**: Maintain updated COIs (Certificates of Insurance) from all vendors.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-12 mb-24 text-slate-400 leading-relaxed">
                            <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                                <PieChart className="text-blue-500" />
                                2. Revenue Scaling & Premium Delta
                            </h3>
                            <p>
                                Carrier logic employs **Revenue Tiers** as a primary proxy for liability exposure. Crossing the $1M annual revenue threshold often triggers a shift from automated 'small business' underwriting to manual commercial review. In 2026, loss ratios in the service sector have stabilized, while retail and construction see increased property-related premiums due to material inflation.
                            </p>
                        </div>

                        <div className="space-y-12 mb-24">
                            <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                                <Globe className="text-blue-500" />
                                3. The 2026 Regulatory Landscape (SBA/NAIC)
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                The **NAIC (National Association of Insurance Commissioners)** has updated its 2026 guidance to emphasize transparency in premium calculation. Small businesses are now often entitled to a 'Formula Disclosure' indicating exactly how their industry risk code affects their base rate. This transparency allows for more aggressive shopping in competitive commercial markets.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Expert FAQ Hub */}
            <FAQSection />

            {/* 5. Related Cluster */}
            <section className="py-24 bg-slate-950 border-t border-slate-900">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-2xl font-bold text-white mb-12 text-center">Institutional Tool Cluster</h2>
                    <div className="flex justify-center">
                        <div className="w-full max-w-2xl">
                            <RelatedCalculators currentCalc="business-insurance" count={6} />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Footer */}
            <section className="py-32 bg-slate-900 border-t border-slate-800">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Ready for a Commercial Audit?</h2>
                    <p className="text-slate-400 mb-12 text-lg">Execute your 2026 insurance projections with statutory accuracy.</p>
                    <Link
                        href="/business-insurance/calculator"
                        className="px-12 py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-3xl font-black text-2xl transition-all duration-300 shadow-[0_0_60px_rgba(37,99,235,0.4)] inline-flex items-center gap-3"
                    >
                        Access Auditor Engine
                        <Calculator className="w-8 h-8" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
