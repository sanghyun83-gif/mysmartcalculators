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
    Receipt
} from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const faqs = [
        {
            q: "What is the flat federal withholding rate for bonuses in 2026?",
            a: "For 2026, the IRS flat withholding rate for supplemental wages (bonuses) up to $1 million is 22%. If your total supplemental wages for the year exceed $1 million, the excess is taxed at the highest individual tax rate (currently 37%)."
        },
        {
            q: "Does my state tax my bonus differently than my regular salary?",
            a: "Many states follow the federal model and use a flat withholding rate for bonuses, while others treat them as regular income. For example, California uses a supplemental rate of 10.23% for most bonuses, which is often higher than the employee's effective tax rate."
        },
        {
            q: "What is the 'Aggregate Method' of bonus taxation?",
            a: "Under the aggregate method, your employer adds your bonus to your regular pay for that period and calculates withholding as if it were one large paycheck. This often results in a higher tax bracket for that specific check, leading to 'over-withholding' which you eventually reclaim as a tax refund."
        },
        {
            q: "Are Social Security and Medicare taxes (FICA) taken out of bonuses?",
            a: "Yes. Bonuses are subject to the same FICA taxes as regular wages: 6.2% for Social Security (up to the annual wage limit) and 1.45% for Medicare. Higher earners may also be subject to the 0.9% Additional Medicare Tax."
        },
        {
            q: "Can I avoid high bonus taxes by contributing to my 401(k)?",
            a: "Yes. Most employers allow you to divert a percentage of your bonus into your traditional 401(k). This reduces your taxable income for the year, effectively lowering the amount of federal and state income tax withheld from the bonus (though FICA taxes still apply)."
        },
        {
            q: "Why did I get a large tax refund after receiving a bonus?",
            a: "If your employer used the aggregate method or if you are in a low tax bracket (below 22%), the IRS likely withheld more than you actually owe. The difference between the 22% flat withholding and your true effective tax rate is returned to you when you file your annual tax return."
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
        <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-emerald-500/30">
            {/* 1. S-CLASS HERO LAYER */}
            <section className="relative pt-24 pb-20 overflow-hidden border-b border-white/5">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent opacity-50 pointer-events-none" />

                <div className="max-w-6xl mx-auto px-4 relative z-10">
                    <div className="flex flex-col items-center text-center">
                        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full mb-8 backdrop-blur-md">
                            <Receipt className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-emerald-400">Supplemental Wage Protocol 2026</span>
                        </div>

                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
                            Bonus Tax <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 italic">Audit Matrix</span>
                        </h1>

                        <p className="max-w-2xl text-slate-400 text-base sm:text-lg md:text-xl leading-relaxed mb-10">
                            Institutional-grade supplemental wage forecasting. Solve for flat rates, aggregate withholding, and net-payout logic with 2026 precision.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/bonus-tax/calculator" className="flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-[1.02] shadow-xl shadow-emerald-500/20 active:scale-95">
                                <Calculator className="w-5 h-5 shrink-0" />
                                Run Bonus Auditor
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
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 italic">Withholding Benchmarks</h2>
                        <p className="text-slate-400">Official 2026 IRS supplemental wage tiers and withholding targets.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Table I: Federal Logic */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Target className="w-5 h-5 text-emerald-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table I: 2026 Federal</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Tier</th>
                                            <th className="px-5 py-3 border-b border-white/5">Flat Rate</th>
                                            <th className="px-5 py-3 border-b border-white/5">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5 font-mono">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Under $1 Million</td>
                                            <td className="px-5 py-3">22.0%</td>
                                            <td className="px-5 py-3 text-emerald-400">Standard</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Over $1 Million</td>
                                            <td className="px-5 py-3">37.0%</td>
                                            <td className="px-5 py-3 text-rose-400">High-Base</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Aggregate Method</td>
                                            <td className="px-5 py-3">Bracketed</td>
                                            <td className="px-5 py-3 text-blue-400">Variable</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-emerald-500/10 font-bold text-emerald-400 italic">Effective Cap</td>
                                            <td className="px-5 py-3 bg-emerald-500/10 font-bold text-emerald-400">37.0%</td>
                                            <td className="px-5 py-3 bg-emerald-500/10 font-bold text-emerald-400">IRS Max</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table II: Payout Scalars */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <Activity className="w-5 h-5 text-teal-400" />
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table II: FICA Burdens</h3>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                                        <tr>
                                            <th className="px-5 py-3 border-b border-white/5">Tax Type</th>
                                            <th className="px-5 py-3 border-b border-white/5">Percentage</th>
                                            <th className="px-5 py-3 border-b border-white/5">Cap Root</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400 divide-y divide-white/5">
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Social Security</td>
                                            <td className="px-5 py-3 font-mono">6.2%</td>
                                            <td className="px-5 py-3 text-emerald-400">Annual Wage</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Medicare</td>
                                            <td className="px-5 py-3 font-mono">1.45%</td>
                                            <td className="px-5 py-3 text-teal-400">No Cap</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Add. Medicare</td>
                                            <td className="px-5 py-3 font-mono">0.9%</td>
                                            <td className="px-5 py-3 text-amber-400">$200k+ Tier</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">Total Mandatory</td>
                                            <td className="px-5 py-3 font-mono">7.65%</td>
                                            <td className="px-5 py-3 text-emerald-400">Standard</td>
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
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Max Net Payout</td>
                                            <td className="px-5 py-3">Flat Method</td>
                                            <td className="px-5 py-3 text-emerald-400">Precise</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Tax Shielding</td>
                                            <td className="px-5 py-3">401k Divert</td>
                                            <td className="px-5 py-3 text-blue-400">Efficiency</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Refund Avoid.</td>
                                            <td className="px-5 py-3">W-4 Adjust</td>
                                            <td className="px-5 py-3 text-amber-400">Balanced</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">State Variance</td>
                                            <td className="px-5 py-3">Loc. Multiplier</td>
                                            <td className="px-5 py-3 text-emerald-400">Variable</td>
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
                    <div className="prose prose-invert prose-emerald max-w-none">
                        <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-emerald-500 pl-6 underline underline-offset-8 decoration-emerald-500/30">2026 Bonus Taxation Architecture</h2>

                        <p className="text-slate-300 text-lg leading-relaxed mb-6 font-sans text-left">
                            Bonus taxation represents a distinct fiscal layer within the U.S. tax code, categorized as 'Supplemental Wages.' In the 2026 economic landscape, the focus is on navigating **Flat vs. Aggregate Withholding Friction**, **FICA Ceiling Arbitrage**, and **Tax-Shield Divergence**. Our S-Class engine analyzes the core withholding vectors: **The Percentage Method**, **Bracket Over-Allocation**, and **Net-to-Gross Reconciliation**.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 my-10 font-sans">
                            <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-emerald-500">
                                    <PieChart className="w-16 h-16" />
                                </div>
                                <h4 className="text-emerald-400 font-bold mb-3 uppercase tracking-tighter text-xs">I. Expenditure Dynamics</h4>
                                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                                    <li>• **Withholding Alpha**: Solving for the difference between the 22% flat rate and true effective tax liability.</li>
                                    <li>• **Aggregate Friction**: Tracking the liquidity impact of being 'pushed' into a higher bracket for a single period.</li>
                                    <li>• **FICA Reset Analysis**: Identifying bonus timing relative to the annual Social Security wage cap.</li>
                                    <li>• **Deferred Compensation Shields**: Strategic audits for 401(k) and HSA bonus diversions.</li>
                                </ul>
                            </div>
                            <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-teal-500">
                                    <LineChart className="w-16 h-16" />
                                </div>
                                <h4 className="text-teal-400 font-bold mb-3 uppercase tracking-tighter text-xs">II. Regulatory Friction</h4>
                                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                                    <li>• **IRS Publication 15-T**: Standardizing against the latest withholding table modifications.</li>
                                    <li>• **Supplemental Rate Ceiling**: Managing the mandatory 37% shift for $1M+ bonuses.</li>
                                    <li>• **Cross-State Nexus**: Identifying state-specific supplemental rates (e.g., California’s 10.23% fixed rate).</li>
                                    <li>• **Additional Medicare (0.9%)**: Solving for the threshold triggers in high-earner bonus payouts.</li>
                                </ul>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4 text-left">The Actuarial Model: Solving for the Net-Payout Alpha</h3>
                        <p className="text-slate-400 leading-relaxed mb-6 font-sans text-left">
                            Standard calculators often fail to account for the **Bracket Latency**. When receiving a bonus via the aggregate method, payroll systems assume your annual income is equal to that specific paycheck multiplied by the number of pay periods in the year. This 'Inflationary Projection' leads to massive over-withholding. Our Bonus Audit Engine applies a **Normalized-Annual-Yield (NAY)** co-efficient, identifying the exact tax refund delta you can expect in the following spring.
                        </p>

                        <div className="bg-emerald-500/5 border border-emerald-500/20 p-6 rounded-2xl my-10 font-sans text-left">
                            <div className="flex items-start gap-4 text-emerald-300">
                                <Info className="w-6 h-6 shrink-0 mt-1" />
                                <div className="text-sm leading-relaxed">
                                    <strong className="text-emerald-200 block mb-1 uppercase tracking-widest text-[10px]">Strategic Note: The $1 Million Mark</strong>
                                    If your employer pays you more than $1,000,000 in supplemental wages during a calendar year, they MUST use the 37% flat rate for any amount exceeding that threshold. There is no discretion or alternative method allowed by the IRS for these high-value transfers in 2026.
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
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 italic tracking-wide font-sans">Bonus Intelligence</h2>
                        <p className="text-slate-500 font-medium tracking-tight">Expert guidance for navigating 2026 IRS bonus and supplemental wage protocols.</p>
                    </div>
                    <FAQSection />
                </div>
            </section>

            {/* 5. RELATED CALCULATORS LAYER */}
            <section className="py-20 border-t border-white/5 bg-slate-950">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-col items-center gap-12">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">Financial Resource Cluster</h2>
                            <p className="text-slate-500 text-sm italic italic tracking-[0.3em] uppercase font-light">Internal Resource Mapping</p>
                        </div>
                        <div className="w-full max-w-lg">
                            <RelatedCalculators currentCalc="bonus-tax" count={6} />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA FOOTER */}
            <section className="py-24 bg-gradient-to-t from-emerald-900/20 to-transparent">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">Optimize Your Payout.<br /><span className="text-emerald-500">Secure Your Bonus Alpha.</span></h2>
                    <Link href="/bonus-tax/calculator" className="inline-flex items-center gap-3 bg-white text-slate-950 hover:bg-slate-200 px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-emerald-500/20 active:scale-95 group">
                        <Calculator className="w-6 h-6 group-hover:text-emerald-600 transition-colors" />
                        RUN BONUS AUDIT
                        <ArrowRight className="w-6 h-6" />
                    </Link>
                    <p className="mt-8 text-slate-500 text-xs font-bold tracking-[0.4em] uppercase">Verified Institutional Framework • 2026 Edition</p>
                </div>
            </section>
        </div>
    );
}
