"use client";

import { Scale, Shield, Info, Landmark, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FinanceLegalGuide() {
    return (
        <main className="py-24 max-w-4xl mx-auto px-6 space-y-20">
            <section className="space-y-6">
                <div className="text-[11px] font-black text-blue-500 uppercase tracking-[0.3em]">ERISA Compliance Audit</div>
                <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none">The 401(k) Legal Framework.</h1>
                <p className="text-slate-400 text-xl font-medium leading-relaxed">Understanding Fiduciary Duty and IRS Section 401(k) tax code compliance in 2026.</p>
            </section>

            <div className="prose prose-invert prose-slate max-w-none text-slate-400 space-y-12 text-lg font-medium leading-relaxed">
                <div className="p-10 bg-blue-500/5 border border-blue-500/20 rounded-3xl italic">
                    "The Employee Retirement Income Security Act of 1974 (ERISA) is the foundational law protecting your 401k assets. It mandates that plan sponsors act solely in the interest of participants."
                </div>

                <h2 className="text-white text-3xl font-black italic">IRS Section 401(k): Tax Deferral Logic</h2>
                <p>
                    The "Legal Magic" of a 401k is found in IRS Code Section 401(k), which allows an employee to elect to have a portion of their compensation contributed to a qualified plan on a pre-tax basis. This creates a **Tax-Deferred Liability**—you avoid taxes today at your highest marginal rate, betting that your effective tax rate in retirement will be significantly lower.
                </p>

                <h2 className="text-white text-3xl font-black italic">Fiduciary Duty & Fee Litigation</h2>
                <p>
                    In 2026, a surge in "Excessive Fee Litigation" has forced many companies to lower the expense ratios of their 401k fund lineups. Under ERISA, your employer has a fiduciary duty to ensure that the investment options are not only diversified but also competitively priced. A 1% difference in fees can be legally considered a breach of fiduciary duty if not justified by superior performance.
                </p>

                <div className="grid md:grid-cols-2 gap-8 py-10">
                    <div className="p-8 bg-slate-900 border border-white/10 rounded-3xl space-y-4">
                        <h4 className="text-white font-black text-xl">Vesting Schedules</h4>
                        <p className="text-sm">The legal timeline that dictates when employer match contributions become 100% owned by the employee.</p>
                    </div>
                    <div className="p-8 bg-slate-900 border border-white/10 rounded-3xl space-y-4">
                        <h4 className="text-white font-black text-xl">Qualified Plans</h4>
                        <p className="text-sm">Retirement accounts that meet specific IRS requirements to receive favorable tax treatment.</p>
                    </div>
                </div>
            </div>

            <div className="p-12 bg-blue-600 rounded-[3rem] text-center space-y-6 shadow-2xl shadow-blue-600/20">
                <h2 className="text-3xl font-black text-white tracking-tight">Ready to Audit Your Growth?</h2>
                <Link href="/401k-growth/calculator" className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-wider hover:bg-slate-100 transition-all shadow-xl">
                    Run Precision Auditor <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </main>
    );
}
