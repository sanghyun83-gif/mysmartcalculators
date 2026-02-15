"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
    Calculator,
    TrendingUp,
    Shield,
    FileText,
    ArrowRight,
    TrendingDown,
    Scale,
    Info,
    ChevronDown,
    Zap,
    Activity,
    Lock,
    Globe,
    CheckCircle2,
    AlertCircle,
    DollarSign,
    RefreshCw,
    Clock,
    Target,
    Briefcase,
    PieChart,
    LineChart,
    Wallet,
    Users
} from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const faqs = [
        {
            q: "What is the 60-month federal lifetime limit for TANF?",
            a: "Federal law limits a family's receipt of TANF cash assistance to a lifetime total of 60 months (5 years). Some states have shorter limits (e.g., 24 or 48 months), while others use state funds to extend assistance beyond the 60-month federal cap for families meeting specific hardship criteria."
        },
        {
            q: "How do TANF work requirements function in 2026?",
            a: "To remain eligible for TANF, most adult recipients must participate in 'work activities' for a minimum average of 30 hours per week (20 hours for single parents with children under age 6). Work activities include subsidized employment, job searching, vocational training, and community service."
        },
        {
            q: "What is the 'Family Cap' policy in some TANF states?",
            a: "A Family Cap (or Child Exclusion) policy denies or reduces additional cash benefits for children born to a family already receiving TANF. While many states have repealed these policies by 2026 to combat child poverty, several jurisdictions still maintain them as a fiscal control measure."
        },
        {
            q: "Does TANF cash assistance affect my SNAP or Medicaid eligibility?",
            a: "Receiving TANF typically makes a family 'categorically eligible' for SNAP (Food Stamps), although the TANF cash payment itself counts as income and may slightly reduce the SNAP allotment. Most TANF recipients are also automatically eligible for Medicaid coverage."
        },
        {
            q: "What are 'Diversion Payments' in the TANF program?",
            a: "Many states offer a one-time 'Diversion' or 'Emergency' payment (often equal to 3 months of benefits) instead of ongoing monthly assistance. This is designed for families with a short-term crisis who do not expect to need long-term welfare, and accepting it may count against the 60-month lifetime limit."
        },
        {
            q: "How much is the average TANF monthly payment for a family of three?",
            a: "TANF benefit levels vary dramatically by state. In 2026, the maximum monthly benefit for a family of three ranges from approximately $260 in some southern states to over $1,100 in higher-cost states like New Hampshire or California."
        }
    ];

    return (
        <div className="grid gap-4 max-w-3xl mx-auto text-left">
            {faqs.map((faq, idx) => (
                <div key={idx} className="bg-slate-900/50 border border-white/5 rounded-xl overflow-hidden active:scale-[0.99] transition-all">
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
        <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-blue-500/30">
            {/* 1. S-CLASS HERO LAYER */}
            <section className="relative pt-24 pb-20 overflow-hidden border-b border-white/5">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-50 pointer-events-none" />

                <div className="max-w-6xl mx-auto px-4 relative z-10">
                    <div className="flex flex-col items-center text-center">
                        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full mb-8 backdrop-blur-md">
                            <Wallet className="w-3.5 h-3.5 text-blue-400" />
                            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-blue-400">Survival Support Protocol 2026</span>
                        </div>

                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
                            TANF Benefits <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 italic">Audit Matrix</span>
                        </h1>

                        <p className="max-w-2xl text-slate-400 text-base sm:text-lg md:text-xl leading-relaxed mb-10">
                            Institutional-grade welfare allowance forecasting. Solve for work participation triggers, lifetime clock depletion, and state-specific yields with 2026 precision.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/tanf/calculator" className="flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-[1.02] shadow-xl shadow-blue-500/20 active:scale-95">
                                <Calculator className="w-5 h-5 shrink-0" />
                                Run TANF Auditor
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
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 italic">Assistance Benchmarks</h2>
                        <p className="text-slate-400">Official 2026 TANF eligibility targets and clock-cycle limitations.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Table I: Benefit Logic */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Target className="w-5 h-5 text-blue-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table I: 2026 Limits</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Constraint</th>
                                            <th className="px-5 py-3 border-b border-white/5">Duration/Cap</th>
                                            <th className="px-5 py-3 border-b border-white/5">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5 font-mono">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Lifetime Cap</td>
                                            <td className="px-5 py-3">60 Months</td>
                                            <td className="px-5 py-3 text-rose-400">Federal</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Work Activity</td>
                                            <td className="px-5 py-3">30 Hrs/Wk</td>
                                            <td className="px-5 py-3 text-blue-400">Mandatory</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Residency</td>
                                            <td className="px-5 py-3">90 Days</td>
                                            <td className="px-5 py-3 text-emerald-400">Nexus</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-blue-500/10 font-bold text-blue-400 italic">2026 Yield</td>
                                            <td className="px-5 py-3 bg-blue-500/10 font-bold text-blue-400">$300 - $1.2k</td>
                                            <td className="px-5 py-3 bg-blue-500/10 font-bold text-blue-400">Var.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table II: Payout Scalars */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Activity className="w-5 h-5 text-indigo-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table II: Criteria</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Factor</th>
                                            <th className="px-5 py-3 border-b border-white/5">Impact Level</th>
                                            <th className="px-5 py-3 border-b border-white/5">Effect</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Minor Child</td>
                                            <td className="px-5 py-3 font-mono">100.0%</td>
                                            <td className="px-5 py-3 text-emerald-400">Req.</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Earned Income</td>
                                            <td className="px-5 py-3 font-mono">Scaling</td>
                                            <td className="px-5 py-3 text-rose-400">Phase-out</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Child Support</td>
                                            <td className="px-5 py-3 font-mono">Partial</td>
                                            <td className="px-5 py-3 text-blue-400">Pass-thru</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">Unemp. Comp</td>
                                            <td className="px-5 py-3 font-mono">$-for-$</td>
                                            <td className="px-5 py-3 text-amber-400">Deduct</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table III: Optimization Mapping */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <RefreshCw className="w-5 h-5 text-amber-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table III: Strategic Pivot</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Objective</th>
                                            <th className="px-5 py-3 border-b border-white/5">Primary Factor</th>
                                            <th className="px-5 py-3 border-b border-white/5">Outcome</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5 font-mono">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Clock Pause</td>
                                            <td className="px-5 py-3">Hardship Waiver</td>
                                            <td className="px-5 py-3 text-emerald-400">Extended</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Quick Liquidity</td>
                                            <td className="px-5 py-3">Diversion Grant</td>
                                            <td className="px-5 py-3 text-blue-400">Lump-Sum</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Career Shift</td>
                                            <td className="px-5 py-3">Vocational Trng</td>
                                            <td className="px-5 py-3 text-indigo-400">Applied</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">Housing Prot</td>
                                            <td className="px-5 py-3">Vendor Payment</td>
                                            <td className="px-5 py-3 text-teal-400">Stabilized</td>
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
                    <div className="prose prose-invert prose-blue max-w-none">
                        <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-blue-500 pl-6 underline underline-offset-8 decoration-blue-500/30">2026 TANF Assistance Architecture</h2>

                        <p className="text-slate-300 text-lg leading-relaxed mb-6 font-sans text-left">
                            TANF (Temporary Assistance for Needy Families) serves as the primary cash safety net for low-income households with minor dependents. In the 2026 fiscal cycle, the focus is on navigating **Work Participation Rate (WPR) Logic**, **Lifetime Clock Arbitration**, and **State Block-Grant Elasticity**. Our S-Class engine analyzes the core support vectors: **The Standard of Need (SON) Ceiling**, **Gross Income Test (GIT) Friction**, and **Earned Income Disregard (EID) Scaling**.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 my-10 font-sans">
                            <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-blue-500">
                                    <PieChart className="w-16 h-16" />
                                </div>
                                <h4 className="text-blue-400 font-bold mb-3 uppercase tracking-tighter text-xs">I. Expenditure Dynamics</h4>
                                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                                    <li>• **Income Disregard Math**: Solving for the portion of earnings that don't count against benefit reduction.</li>
                                    <li>• **Diversion Grant Yields**: Tracking the lump-sum alternatives to monthly cash assistance.</li>
                                    <li>• **Child Support Pass-Thru**: Auditing the $50 - $200 'disregard' for intercepted parental payments.</li>
                                    <li>• **Kinship Care Scaling**: Identifying specific benefit tiers for non-parental relative caregivers.</li>
                                </ul>
                            </div>
                            <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-indigo-500">
                                    <LineChart className="w-16 h-16" />
                                </div>
                                <h4 className="text-indigo-400 font-bold mb-3 uppercase tracking-tighter text-xs">II. Regulatory Friction</h4>
                                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                                    <li>• **The 60-Month Exhaustion**: Managing the transition strategy as families approach the federal lifetime limit.</li>
                                    <li>• **Work Activity Audits**: Monitoring compliance with the 30-hour weekly institutional requirement.</li>
                                    <li>• **Family Cap Policy**: Identifying jurisdictional exclusions for children born while 'on-program'.</li>
                                    <li>• **Sanction Scaling**: Managing the 25% - 100% benefit penalties for regulatory non-compliance.</li>
                                </ul>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4 text-left">The Actuarial Model: Solving for the TANF Alpha</h3>
                        <p className="text-slate-400 leading-relaxed mb-6 font-sans text-left">
                            Standard calculators often fail to account for the **Clawback Friction**. As a recipient begins to earn income, the benefit doesn't disappear immediately; it 'steps-down' based on the state’s Earned Income Disregard formula. Our TANF Audit Engine applies a **Benefit-Retention-Velocity (BRV)** co-efficient, identifying the exact earnings-to-benefit ratio that maximizes household liquidity in the 2026 labor market.
                        </p>

                        <div className="bg-blue-500/5 border border-blue-500/20 p-6 rounded-2xl my-10 font-sans text-left">
                            <div className="flex items-start gap-4 text-blue-300">
                                <Info className="w-6 h-6 shrink-0 mt-1" />
                                <div className="text-sm leading-relaxed">
                                    <strong className="text-blue-200 block mb-1 uppercase tracking-widest text-[10px]">Strategic Note: The Diversion Grant Pivot</strong>
                                    If your financial crisis is temporary (e.g., car repair preventing work), a 'Diversion' lump sum maybe more efficient than monthly TANF. In the 2026 market, these grants often provide 3-4 months of benefits upfront in exchange for a short-term 'freeze' on further applications, preserving your 60-month lifetime clock.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. EXPERT FAQ HUB LAYER */}
            <section className="py-20 border-t border-white/5 bg-[#020617]">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <div className="mb-16">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 italic tracking-wide font-sans">Assistance Intelligence</h2>
                        <p className="text-slate-500 font-medium tracking-tight">Expert guidance for navigating 2026 TANF and family support protocols.</p>
                    </div>
                    <FAQSection />
                </div>
            </section>

            {/* 5. RELATED CALCULATORS LAYER */}
            <section className="py-20 border-t border-white/5 bg-slate-950">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-col items-center gap-12">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">Family Support Cluster</h2>
                            <p className="text-slate-500 text-sm italic italic tracking-[0.3em] uppercase font-light">Internal Resource Mapping</p>
                        </div>
                        <div className="w-full max-w-lg">
                            <RelatedCalculators currentCalc="tanf" count={6} />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA FOOTER */}
            <section className="py-24 bg-gradient-to-t from-blue-900/20 to-transparent">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">Stabilize Your Family.<br /><span className="text-blue-500">Secure Your Support Alpha.</span></h2>
                    <Link href="/tanf/calculator" className="inline-flex items-center gap-3 bg-white text-slate-950 hover:bg-slate-200 px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-blue-500/20 active:scale-95 group">
                        <Calculator className="w-6 h-6 group-hover:text-blue-600 transition-colors" />
                        RUN TANF AUDIT
                        <ArrowRight className="w-6 h-6" />
                    </Link>
                    <p className="mt-8 text-slate-500 text-xs font-bold tracking-[0.4em] uppercase">Verified Institutional Framework • 2026 Edition</p>
                </div>
            </section>
        </div>
    );
}
