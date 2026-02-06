"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, DollarSign, FileText, CheckCircle, AlertTriangle, TrendingUp } from "lucide-react";
import { SITE, SEVERANCE_CONSTANTS_2026 } from "@/lib/calculators/severance";

export default function NegotiationGuidePage() {
    return (
        <>
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/severance" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-emerald-500" />
                        <span className="text-lg font-bold text-white">Negotiation Guide</span>
                    </div>
                    <span className="ml-auto text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">
                        {SITE.year}
                    </span>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 py-8">
                {/* Page Header */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        How to Negotiate Your Severance
                    </h1>
                    <p className="text-slate-400">
                        Strategies to get the best package
                    </p>
                </div>

                {/* Success Stat */}
                <div className="bg-emerald-900/30 border border-emerald-500/50 rounded-xl p-6 mb-8 text-center">
                    <p className="text-emerald-400 text-sm mb-2">Did you know?</p>
                    <p className="text-3xl font-bold text-white mb-2">
                        {SEVERANCE_CONSTANTS_2026.statistics.pctWhoNegotiate}% of employees who negotiate get more
                    </p>
                    <p className="text-emerald-300">
                        Average improvement: <strong>{SEVERANCE_CONSTANTS_2026.statistics.avgWithNegotiation - SEVERANCE_CONSTANTS_2026.statistics.avgSeveranceWeeks} more weeks</strong>
                    </p>
                </div>

                {/* What to Negotiate */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-emerald-500" />
                        What You Can Negotiate
                    </h2>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5" />
                                <div>
                                    <p className="font-medium text-white">More Weeks of Pay</p>
                                    <p className="text-sm text-slate-400">Ask for 1-2 additional weeks per year</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5" />
                                <div>
                                    <p className="font-medium text-white">Extended Healthcare</p>
                                    <p className="text-sm text-slate-400">Company-paid COBRA for longer</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5" />
                                <div>
                                    <p className="font-medium text-white">Outplacement Services</p>
                                    <p className="text-sm text-slate-400">Resume help, job search coaching</p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5" />
                                <div>
                                    <p className="font-medium text-white">Accelerated Vesting</p>
                                    <p className="text-sm text-slate-400">Stock options or RSUs that haven&apos;t vested</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5" />
                                <div>
                                    <p className="font-medium text-white">Reference Language</p>
                                    <p className="text-sm text-slate-400">Positive reference or neutral policy</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5" />
                                <div>
                                    <p className="font-medium text-white">Non-Compete Waiver</p>
                                    <p className="text-sm text-slate-400">Release from non-compete clauses</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Negotiation Tips */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Top Negotiation Strategies
                    </h2>

                    <div className="space-y-4">
                        <div className="bg-slate-700/50 rounded-lg p-4">
                            <p className="font-semibold text-emerald-400 mb-1">1. Don&apos;t Sign Immediately</p>
                            <p className="text-sm text-slate-300">
                                You have 21 days (or 45 days for group layoffs if over 40) to review.
                                Use this time to negotiate.
                            </p>
                        </div>
                        <div className="bg-slate-700/50 rounded-lg p-4">
                            <p className="font-semibold text-emerald-400 mb-1">2. Know Your Leverage</p>
                            <p className="text-sm text-slate-300">
                                Long tenure, specialized skills, pending projects, or potential legal claims
                                give you negotiating power.
                            </p>
                        </div>
                        <div className="bg-slate-700/50 rounded-lg p-4">
                            <p className="font-semibold text-emerald-400 mb-1">3. Ask For More Than You Expect</p>
                            <p className="text-sm text-slate-300">
                                Start high so you have room to negotiate down while still getting what you want.
                            </p>
                        </div>
                        <div className="bg-slate-700/50 rounded-lg p-4">
                            <p className="font-semibold text-emerald-400 mb-1">4. Get It In Writing</p>
                            <p className="text-sm text-slate-300">
                                Everything agreed verbally should be in the final written agreement.
                            </p>
                        </div>
                        <div className="bg-slate-700/50 rounded-lg p-4">
                            <p className="font-semibold text-emerald-400 mb-1">5. Consider a Lawyer</p>
                            <p className="text-sm text-slate-300">
                                An employment attorney can often get you a better package than their fee costs.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Warning */}
                <div className="bg-amber-900/20 border border-amber-700/50 rounded-xl p-4 mb-8">
                    <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-amber-400 mt-0.5" />
                        <div className="text-sm text-amber-200">
                            <p className="font-medium text-white mb-2">Watch Out For:</p>
                            <ul className="space-y-1">
                                <li> Non-compete or non-solicitation clauses that limit future work</li>
                                <li> Non-disparagement clauses that are too broad</li>
                                <li> Releases that waive claims you may want to pursue</li>
                                <li> Unclear language about unemployment benefits</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Ad Placeholder */}
                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center">
                    <p className="text-sm text-slate-500">Advertisement</p>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link
                        href="/severance/calculator"
                        className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Calculate Your Package
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    This is general information, not legal advice. Consult an employment attorney for your situation.
                </p>
            </main>
        </>
    );
}
