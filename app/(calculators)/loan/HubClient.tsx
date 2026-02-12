"use client";

import React from 'react';
import Link from 'next/link';
import {
    Clock,
    ArrowRight,
    Shield,
    Calendar,
    Star,
    Milestone,
    Info,
    FileText,
    TrendingUp,
    CheckCircle,
    Landmark,
    DollarSign,
    PieChart,
    BarChart3,
    BookOpen,
    HelpCircle,
    Lock,
    Zap
} from "lucide-react";
import { LOAN_2026 } from "@/lib/calculators/loan";

const SITE = {
    name: "Loan Calculator"
};

const FAQSection = ({ faqs }: { faqs: readonly any[] }) => (
    <section id="faq" className="py-24 bg-slate-900/50 overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-6 relative">
            <div className="flex items-center gap-3 mb-12">
                <div className="p-3 bg-blue-500/10 rounded-2xl border border-blue-500/20">
                    <HelpCircle className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                    <h2 className="text-3xl font-black text-white tracking-tight">Expert Analysis FAQ</h2>
                    <p className="text-slate-500 text-sm font-bold uppercase tracking-widest mt-1">Institutional Debt Guidance 2026</p>
                </div>
            </div>

            <div className="grid gap-6">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="group bg-slate-950/50 border border-white/5 rounded-3xl p-8 hover:border-blue-500/30 transition-all duration-500"
                    >
                        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors flex gap-4">
                            <span className="text-blue-500/30 font-black">{(index + 1).toString().padStart(2, '0')}</span>
                            {faq.question}
                        </h3>
                        <p className="text-slate-400 leading-relaxed pl-10 text-lg">
                            {faq.answer}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default function LoanHubClient() {
    return (
        <div className="bg-slate-950">
            {/* Hero Section - The Financial Citadel */}
            <section className="relative py-24 md:py-40 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" />
                    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full animate-pulse delay-1000" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8 backdrop-blur-md animate-fade-in">
                        <Star className="w-4 h-4 text-blue-400 fill-current" />
                        <span className="text-blue-400 text-xs font-black uppercase tracking-[0.3em]">Institutional Grade Audit Engine</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
                        Master Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-blue-600">
                            Financial Gravity
                        </span>
                    </h1>

                    <p className="text-slate-400 text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
                        Navigate the complex geometry of debt with our S-Class Amortization Engine. Precision-engineered for 2026 economic landscapes, providing sub-atomic transparency into every interest cent.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            href="/loan/calculator"
                            className="w-full sm:w-auto px-12 py-5 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl transition-all shadow-2xl shadow-blue-600/20 flex items-center justify-center gap-3 group text-lg"
                        >
                            <span>Initiate Loan Audit</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <div className="flex items-center gap-4 text-slate-500 font-bold uppercase tracking-widest text-xs">
                            <Lock className="w-4 h-4 text-blue-500/50" />
                            <span>Encrypted & Private</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section Alpha: The Anatomy of Amortization */}
            <section id="compliance" className="py-32 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 text-blue-500 font-black text-xs uppercase tracking-[0.4em]">
                                <Landmark className="w-4 h-4" />
                                01. Structural Analysis
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                                The Geometry of <br />Debt Repayment
                            </h2>
                            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                                <p>
                                    To understand a loan is to understand the mathematical decay of a principal balance through time. Amortization is the systematic liquidation of debt through periodic installments. However, beneath the surface of a simple monthly payment lies a dynamic struggle between **principal reduction** and **interest capture**.
                                </p>
                                <p>
                                    In the inaugural phase of any loan, the lender prioritizes interest recovery. This is not arbitrary; it is a direct function of the outstanding balance. As the principal is eroded, the mathematical weight of the interest diminishes, allowing a greater volume of each subsequent payment to attack the core debt.
                                </p>
                                <div className="grid grid-cols-2 gap-4 pt-8">
                                    <div className="p-6 bg-slate-900 border border-white/5 rounded-2xl">
                                        <div className="text-3xl font-black text-white mb-2">P&I</div>
                                        <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">Core Components</div>
                                    </div>
                                    <div className="p-6 bg-slate-900 border border-white/10 rounded-2xl border-l-blue-500 border-l-4">
                                        <div className="text-3xl font-black text-white mb-2">99.9%</div>
                                        <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">Audit Precision</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full" />
                            <div className="relative bg-slate-900/60 border border-white/10 rounded-[40px] p-12 backdrop-blur-xl">
                                <div className="space-y-8">
                                    <div className="flex items-center gap-4 border-b border-white/5 pb-6">
                                        <PieChart className="w-8 h-8 text-blue-500" />
                                        <div className="font-bold text-white text-xl uppercase tracking-tighter">Interest Front-Loading</div>
                                    </div>
                                    <p className="text-slate-500 leading-relaxed text-sm">
                                        Institutional lending protocols utilize the standard amortization formula to ensure front-loaded interest recovery. Our 2026 engine visualizes this decay in real-time.
                                    </p>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center px-1">
                                            <span className="text-xs font-bold text-slate-400">Month 1 INTEREST</span>
                                            <span className="text-xs font-bold text-blue-500">65% of Total</span>
                                        </div>
                                        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                            <div className="h-full bg-blue-500 w-[65%]" />
                                        </div>
                                        <div className="flex justify-between items-center px-1">
                                            <span className="text-xs font-bold text-slate-400">Month 36 INTEREST</span>
                                            <span className="text-xs font-bold text-blue-500">12% of Total</span>
                                        </div>
                                        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                            <div className="h-full bg-blue-500 w-[12%]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section Beta: Credit Dynamics */}
            <section className="py-32 bg-slate-900/30">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-24">
                        <div className="inline-flex items-center gap-2 text-indigo-500 font-black text-xs uppercase tracking-[0.4em] mb-6">
                            <TrendingUp className="w-4 h-4" />
                            02. The Credit Nexus
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-8">
                            Interest Rate <span className="text-indigo-500">Determinants</span>
                        </h2>
                        <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
                            A loan is not just money; it is a price set on time and risk. Understanding how institutional lenders evaluate your profile is the key to securing Tier 1 rates.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Shield,
                                title: "Risk Premium",
                                content: "Lenders apply a proprietary weight to your credit score. Every 20-point increase in your FICO score can translate to a 0.25% - 0.50% reduction in APR."
                            },
                            {
                                icon: Landmark,
                                title: "The Fed Factor",
                                content: "Macro-economic liquidity dictated by the Federal Reserve sets the 'floor' for all consumer debt. In 2026, these policy rates remain the primary anchor for lending."
                            },
                            {
                                icon: BarChart3,
                                title: "Inflation Hedging",
                                content: "Interest rates are inherently forward-looking. Fixed-rate loans protect you from upward volatility, while variable-rate products offer flexibility in deflationary cycles."
                            }
                        ].map((item, i) => (
                            <div key={i} className="p-10 bg-slate-900/50 border border-white/5 rounded-[32px] hover:bg-slate-900 transition-colors group">
                                <div className="w-16 h-16 bg-indigo-500/10 rounded-2xl border border-indigo-500/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-8 h-8 text-indigo-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{item.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{item.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content Section Gamma: Deep Dive Scientific Content (Long Form) */}
            <section id="stats" className="py-32 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.03),transparent_40%)]">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="prose prose-invert prose-slate max-w-none">
                        <div className="flex items-center gap-4 mb-12">
                            <BookOpen className="w-10 h-10 text-blue-500" />
                            <h2 className="text-4xl font-black text-white m-0 tracking-tighter uppercase italic">The Science of Liquidity</h2>
                        </div>

                        <div className="space-y-12 text-slate-300 text-xl leading-[1.8] font-medium">
                            <p>
                                Modern lending is built upon the foundation of **compound interest**, a mathematical phenomenon where interest is calculated not just on the initial principal, but also on the accumulated interest of previous periods. In a consumer loan context, this compounding typically occurs monthly, aligned with the traditional billing cycle.
                            </p>

                            <blockquote className="border-l-4 border-blue-500 bg-blue-500/5 p-8 rounded-2xl italic text-white/90">
                                "Compound interest is the eighth wonder of the world. He who understands it, earns it... he who doesn't... pays it." — Albert Einstein (Attributed)
                            </blockquote>

                            <h3 className="text-3xl font-black text-white tracking-tight uppercase italic border-b border-white/10 pb-4">Early Repayment Mechanics</h3>
                            <p>
                                One of the most powerful strategies for debt reduction is **principal acceleration**. By making payments in excess of the contractually required amount, a borrower can trigger a geometric collapse of the future interest obligation. Because interest is a function of the remaining balance, every dollar of principal paid today removes the lender's ability to charge interest on that dollar for every remaining month of the term.
                            </p>

                            <h3 className="text-3xl font-black text-white tracking-tight uppercase italic border-b border-white/10 pb-4">Fixed vs. Floating Architectures</h3>
                            <p>
                                Choosing between fixed and floating (variable) interest rates is a study in **risk transfer**. In a fixed-rate architecture, the borrower pays a 'risk premium' for the certainty of payment stability. The lender assumes the risk that market rates may rise. Conversely, in a floating rate environment, the borrower assumes the market risk in exchange for a lower initial cost of entry. In the 2026 economic landscape, this decision requires a close audit of central bank liquidity signals.
                            </p>

                            <p>
                                For comprehensive debt management, it is essential to look beyond the monthly payment and analyze the **Total Cost of Credit**. This metric includes all origination fees, service charges, and accumulated interest over the decades-long life of major assets like real estate. Our optimizer ensures these 'invisible costs' are brought to light.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Citations Section - E-E-A-T Signal */}
            <section className="py-24 border-y border-white/5 bg-slate-900/10">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="flex items-center gap-3 mb-12">
                        <CheckCircle className="w-5 h-5 text-blue-500" />
                        <h2 className="text-xs font-black text-slate-500 uppercase tracking-[0.4em]">Institutional Data Integrity</h2>
                    </div>

                    <div className="grid gap-6">
                        {LOAN_2026.citations.map((cite, i) => (
                            <a
                                key={i}
                                href={cite.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-between p-6 bg-slate-900/40 border border-white/5 rounded-2xl hover:bg-slate-900 transition-all"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-slate-950 rounded-xl group-hover:bg-blue-500/10 transition-colors">
                                        <Landmark className="w-5 h-5 text-slate-600 group-hover:text-blue-400" />
                                    </div>
                                    <span className="text-slate-400 font-bold group-hover:text-white transition-colors">
                                        {cite.name}
                                    </span>
                                </div>
                                <ArrowRight className="w-4 h-4 text-slate-700 group-hover:text-blue-500 transition-all opacity-0 group-hover:opacity-100 group-hover:translate-x-1" />
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <FAQSection faqs={LOAN_2026.faqs} />

            {/* Footer Call to Action */}
            <section className="py-32 text-center relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/5 blur-[120px] rounded-full" />
                <div className="max-w-3xl mx-auto px-6 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter">
                        Optimize Your Debt Structure Today
                    </h2>
                    <p className="text-slate-400 text-lg mb-12 font-medium">
                        Join 2,500+ users monthly using our S-Class analytics to negotiate better rates and accelerate financial freedom.
                    </p>
                    <Link
                        href="/loan/calculator"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-black rounded-2xl hover:bg-blue-50 transition-all shadow-2xl group"
                    >
                        <span>Initiate Free Audit</span>
                        <Zap className="w-5 h-5 fill-current text-blue-600 group-hover:scale-110 transition-transform" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
