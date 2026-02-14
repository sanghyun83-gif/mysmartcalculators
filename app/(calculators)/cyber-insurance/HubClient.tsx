"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
    Calculator,
    Shield,
    FileText,
    Building2,
    ArrowRight,
    TrendingUp,
    TrendingDown,
    Scale,
    Info,
    ChevronDown,
    Zap,
    Lock,
    Globe,
    AlertTriangle,
    ShieldAlert,
    Activity,
    Cpu,
    Database
} from "lucide-react";
import { SITE, CALCULATORS, BUSINESS_TYPES, CYBER_2026, formatCurrency } from "@/lib/calculators/cyber-insurance";
import { RelatedCalculators } from "@/components/RelatedCalculators";

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const faqs = [
        {
            q: "What is the primary factor driving cyber insurance premiums in 2026?",
            a: "In 2026, 'Security Posture Maturity'—specifically the implementation of MFA (Multi-Factor Authentication), EDR (Endpoint Detection and Response), and immutable backups—is the primary driver. Businesses lacking these controls face significantly higher premiums or may become uninsurable in the standard market."
        },
        {
            q: "Does cyber insurance cover ransomware payments?",
            a: "Most 2026 policies include ransomware coverage, but often with specific 'sub-limits.' Coverage typically includes ransom negotiation, the payment itself (subject to OFAC compliance), forensic investigation, and business interruption losses while systems are offline."
        },
        {
            q: "How does 'First-Party' differ from 'Third-Party' cyber coverage?",
            a: "First-Party coverage protects your business's direct losses (e.g., data recovery, ransom payments, notification costs). Third-Party coverage protects against claims from others (e.g., lawsuits from customers whose data was stolen, regulatory fines from government agencies)."
        },
        {
            q: "Are small businesses really targets for cyber attacks in 2026?",
            a: "Statistically, yes. Over 40% of cyber attacks target small businesses because they often have weaker security infrastructure than enterprises. The average cost of a breach for an SMB in 2026 exceeds $150,000, which can be catastrophic without insurance."
        },
        {
            q: "What is 'Social Engineering' coverage in a cyber policy?",
            a: "Social Engineering coverage protects against financial losses where an employee is manipulated into voluntarily transferring funds (e.g., Business Email Compromise or 'CEO Fraud'). This is often sold as an optional endorsement to a standard cyber policy."
        }
    ];

    return (
        <div className="grid gap-4 max-w-3xl mx-auto">
            {faqs.map((faq, idx) => (
                <div key={idx} className="bg-slate-900/50 border border-white/5 rounded-xl overflow-hidden active:scale-[0.99] transition-all text-left">
                    <button
                        onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                        className="w-full p-5 flex items-center justify-between"
                    >
                        <span className="font-semibold text-slate-100 pr-8">{faq.q}</span>
                        <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} />
                    </button>
                    {openIndex === idx && (
                        <div className="px-5 pb-5 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                            {faq.a}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default function HubClient() {
    return (
        <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-red-500/30">
            {/* 1. S-CLASS HERO LAYER */}
            <section className="relative pt-24 pb-20 overflow-hidden border-b border-white/5">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500/10 via-transparent to-transparent opacity-50 pointer-events-none" />

                <div className="max-w-6xl mx-auto px-4 relative z-10">
                    <div className="flex flex-col items-center text-center">
                        <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-3 py-1 rounded-full mb-8 backdrop-blur-md">
                            <ShieldAlert className="w-3.5 h-3.5 text-red-400" />
                            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-red-400">Institutional Threat Protocol 2026</span>
                        </div>

                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
                            Cyber Liability <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 font-mono">Premium Engine</span>
                        </h1>

                        <p className="max-w-2xl text-slate-400 text-base sm:text-lg md:text-xl leading-relaxed mb-10">
                            High-fidelity enterprise risk modeling for 2026. Calculate ransomware exposure, breach response costs, and regulatory liability using real-time actuarial threat data.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/cyber-insurance/calculator" className="flex items-center gap-3 bg-red-600 hover:bg-red-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-[1.02] shadow-xl shadow-red-500/20 active:scale-95">
                                <Lock className="w-5 h-5 shrink-0" />
                                Initiate Risk Audit
                                <ArrowRight className="w-5 h-5 shrink-0" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. STRICT 3-TABLE PROTOCOL LAYER */}
            <section className="py-20 bg-slate-950/50 backdrop-blur-xl">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Authority Threat Matrix</h2>
                        <p className="text-slate-400">Cyber loss-cost benchmarks and defensive yield optimization for the 2026 fiscal cycle.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Table I: Ransomware Cost Velocity */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Activity className="w-5 h-5 text-red-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm font-mono">Table I: Breach Velocity</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest font-mono">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Cycle Year</th>
                                            <th className="px-5 py-3 border-b border-white/5">Avg Breach Cost</th>
                                            <th className="px-5 py-3 border-b border-white/5">Frequency</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5 font-mono">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">2023 Actual</td>
                                            <td className="px-5 py-3">$4.45M</td>
                                            <td className="px-5 py-3 text-emerald-400">+3%</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">2024 Actual</td>
                                            <td className="px-5 py-3">$4.82M</td>
                                            <td className="px-5 py-3 text-amber-400">+12%</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">2025 Actual</td>
                                            <td className="px-5 py-3">$5.14M</td>
                                            <td className="px-5 py-3 text-red-400">+18%</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-red-500/10 font-bold text-red-400 italic">2026 Target</td>
                                            <td className="px-5 py-3 bg-red-500/10 font-bold text-red-400">$5.80M+</td>
                                            <td className="px-5 py-3 bg-red-500/10 font-bold text-red-500">+24%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table II: Industry Risk Multipliers */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Cpu className="w-5 h-5 text-orange-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm font-mono">Table II: Risk Sectors</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest font-mono">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Industry Sector</th>
                                            <th className="px-5 py-3 border-b border-white/5">Risk Scalar</th>
                                            <th className="px-5 py-3 border-b border-white/5">Sensitivity</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Professional/B2B</td>
                                            <td className="px-5 py-3">1.0x (Base)</td>
                                            <td className="px-5 py-3 text-emerald-400">Low-Mod</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">E-Commerce</td>
                                            <td className="px-5 py-3">1.2x Rating</td>
                                            <td className="px-5 py-3 text-blue-400">Moderate</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Financial/SaaS</td>
                                            <td className="px-5 py-3">1.5x Rating</td>
                                            <td className="px-5 py-3 text-amber-400">Elevated</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Healthcare (PHI)</td>
                                            <td className="px-5 py-3">1.8x Rating</td>
                                            <td className="px-5 py-3 text-red-400">Critical</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table III: Security Credit Logic */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Scale className="w-5 h-5 text-emerald-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm font-mono">Table III: Logic Credits</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest font-mono">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Defense Vector</th>
                                            <th className="px-5 py-3 border-b border-white/5">Logic Filter</th>
                                            <th className="px-5 py-3 border-b border-white/5">Discount</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Adaptive MFA</td>
                                            <td className="px-5 py-3">Conditional Access</td>
                                            <td className="px-5 py-3 text-emerald-400">-15.0%</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">EDR Deployment</td>
                                            <td className="px-5 py-3">SOC 24/7 Filter</td>
                                            <td className="px-5 py-3 text-emerald-400">-10.0%</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Immutable Backup</td>
                                            <td className="px-5 py-3">Air-Gap Protocol</td>
                                            <td className="px-5 py-3 text-emerald-400">-8.5%</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Zero Trust Arch.</td>
                                            <td className="px-5 py-3">Micro-segmentation</td>
                                            <td className="px-5 py-3 text-emerald-400">-5.0%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. HIGH-DENSITY TECHNICAL GUIDE LAYER */}
            <section className="py-20 bg-slate-900/20">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="prose prose-invert prose-red max-w-none font-sans">
                        <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-red-500 pl-6 underline underline-offset-8 decoration-red-500/20">2026 Enterprise Cyber Risk & Defensive Underwriting</h2>

                        <p className="text-slate-300 text-lg leading-relaxed mb-6">
                            In the 2026 threat landscape, **Cyber Insurance** has evolved from a discretionary expense into a core pillar of institutional solvency. Actuarial models have shifted from simple revenue-based pricing to complex 'Telemetry-Based' underwriting. This means your premium is directly correlated with your real-time security posture, data sensitivity volume, and the rigorousness of your incident response (IR) protocols.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 my-10">
                            <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-red-500">
                                    <ShieldAlert className="w-16 h-16" />
                                </div>
                                <h4 className="text-red-400 font-bold mb-3 uppercase tracking-tighter text-xs font-mono">I. The Coverage Stack</h4>
                                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0">
                                    <li>• **Ransomware Extortion**: Coverage for payment and negotiation.</li>
                                    <li>• **Digital Asset Restoration**: Costs to rebuild corrupted databases.</li>
                                    <li>• **Regulatory Fines (GDPR/CCPA)**: Protection against legal penalties.</li>
                                    <li>• **Business Interruption**: Recovery of lost operational income.</li>
                                </ul>
                            </div>
                            <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-orange-500">
                                    <Database className="w-16 h-16" />
                                </div>
                                <h4 className="text-orange-400 font-bold mb-3 uppercase tracking-tighter text-xs font-mono">II. Risk Variables</h4>
                                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0">
                                    <li>• **PII/PHI Record Count**: The primary scalar for liability limits.</li>
                                    <li>• **MFA Implementation**: The 'Table Stakes' for insurability.</li>
                                    <li>• **Third-Party Vendor Risk**: Liability leakage via supply chains.</li>
                                    <li>• **Geopolitical Loading**: Surcharges for high-threat territories.</li>
                                </ul>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4">Algorithmic Precision: The 2026 Engine</h3>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            Our 2026 Engine utilizes a **Heuristic Threat Index**. We calculate your 'Target Profile' by cross-referencing industry verticals with your 'Defensive Tier.' By applying a 0.85x Multiplier for verified security controls and a 1.5x Load for prior breach history, we deliver a premium estimate that aligns with the underwriting standards of carriers like AXA XL, Chubb, and Beazley.
                        </p>

                        <div className="bg-red-500/5 border border-red-500/20 p-6 rounded-2xl my-10">
                            <div className="flex items-start gap-4 text-red-300">
                                <Info className="w-6 h-6 shrink-0 mt-1" />
                                <div className="text-sm leading-relaxed">
                                    <strong className="text-red-200 block mb-1 uppercase tracking-widest text-[10px] font-mono">Technical Alert: Insurability Crisis</strong>
                                    Businesses lacking **Multi-Factor Authentication (MFA)** on all remote access points and administrator accounts are currently being denied coverage by over 90% of the standard market in 2026. Implementing MFA is the single highest-ROI action for reducing cyber insurance premiums, offering an average 15% discount.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. EXPERT FAQ HUB LAYER */}
            <section className="py-20 border-t border-white/5 bg-[#020617]">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 italic tracking-tighter uppercase font-mono">Strategic Threat Intel Hub</h2>
                        <p className="text-slate-500 font-semibold">Decisive risk management guidance from cyber underwriters.</p>
                    </div>
                    <FAQSection />
                </div>
            </section>

            {/* 5. RELATED CALCULATORS LAYER */}
            <section className="py-20 border-t border-white/5 bg-slate-950">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-col items-center gap-12">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-white mb-2 tracking-widest uppercase text-xs opacity-50">Topical Risk Cluster</h2>
                            <p className="text-slate-500 text-lg font-light italic tracking-[0.4em] uppercase">Internal Network Linking</p>
                        </div>
                        <div className="w-full max-w-lg">
                            <RelatedCalculators currentCalc="cyber-insurance" count={8} />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA FOOTER */}
            <section className="py-24 bg-gradient-to-t from-red-900/20 to-transparent">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-[0.9] uppercase font-mono">Secure Your Fortress.<br /><span className="text-red-500">Audit Your Breach Risk.</span></h2>
                    <Link href="/cyber-insurance/calculator" className="inline-flex items-center gap-3 bg-white text-slate-950 hover:bg-slate-200 px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-red-500/20 active:scale-95 group">
                        <Cpu className="w-6 h-6 group-hover:text-red-600 transition-colors" />
                        INITIATE RISK AUDIT
                        <ArrowRight className="w-6 h-6" />
                    </Link>
                    <p className="mt-8 text-red-500/50 text-xs font-bold tracking-[0.5em] uppercase font-mono">Threat Protocol v4.0 • 2026 Edition</p>
                </div>
            </section>
        </div>
    );
}
