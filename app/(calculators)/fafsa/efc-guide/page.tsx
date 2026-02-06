"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, GraduationCap, FileText, CheckCircle, AlertTriangle } from "lucide-react";
import { SITE, FAFSA_CONSTANTS_2026, formatCurrency } from "@/lib/calculators/fafsa";

export default function EFCGuidePage() {
    return (
        <>
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/fafsa" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-emerald-500" />
                        <span className="text-lg font-bold text-white">SAI/EFC Guide</span>
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
                        Understanding the Student Aid Index
                    </h1>
                    <p className="text-slate-400">
                        How your FAFSA determines financial aid eligibility
                    </p>
                </div>

                {/* EFC to SAI Transition */}
                <div className="bg-emerald-900/30 border border-emerald-500/50 rounded-xl p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4">
                        EFC  SAI: What Changed?
                    </h2>
                    <p className="text-slate-300 mb-4">
                        Starting with the 2024-25 school year, the Expected Family Contribution (EFC) was
                        replaced by the Student Aid Index (SAI). Key changes:
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                        {[
                            "SAI can now be negative (down to -$1,500)",
                            "Simplified FAFSA form (fewer questions)",
                            "Direct IRS data transfer",
                            "Multiple children in college no longer reduces SAI",
                            "Small business/farm assets often excluded",
                            "Max Pell Grant for SAI  $0",
                        ].map((change, i) => (
                            <div key={i} className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-emerald-400 mt-1" />
                                <span className="text-sm text-slate-300">{change}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* How SAI is Calculated */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-emerald-500" />
                        How SAI is Calculated
                    </h2>

                    <div className="space-y-4">
                        <div className="bg-slate-700/50 rounded-lg p-4">
                            <p className="font-semibold text-emerald-400 mb-2">1. Parent Income Assessment</p>
                            <p className="text-sm text-slate-300">
                                AGI minus income protection allowance (~$25K for one parent + ~$8K per additional family member).
                                About 22-47% of remaining income assessed.
                            </p>
                        </div>
                        <div className="bg-slate-700/50 rounded-lg p-4">
                            <p className="font-semibold text-emerald-400 mb-2">2. Parent Asset Assessment</p>
                            <p className="text-sm text-slate-300">
                                Assets minus protection allowance (varies by age). About 5.64% of remaining assets assessed.
                                Home equity and retirement excluded.
                            </p>
                        </div>
                        <div className="bg-slate-700/50 rounded-lg p-4">
                            <p className="font-semibold text-emerald-400 mb-2">3. Student Contribution</p>
                            <p className="text-sm text-slate-300">
                                50% of student income above ~$7,600 protection. 20% of student assets
                                (no protection allowance for student assets).
                            </p>
                        </div>
                        <div className="bg-slate-700/50 rounded-lg p-4">
                            <p className="font-semibold text-emerald-400 mb-2">4. Final SAI</p>
                            <p className="text-sm text-slate-300">
                                Parent contribution + Student contribution = SAI.
                                Can range from -$1,500 to over $100,000.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Pell Grant Chart */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4">
                        SAI and Pell Grant Eligibility
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
                        <div className="bg-emerald-900/30 rounded-lg p-3 border border-emerald-500/50">
                            <p className="text-sm text-slate-400">SAI  0</p>
                            <p className="text-xl font-bold text-emerald-400">{formatCurrency(FAFSA_CONSTANTS_2026.pellGrant.maximum)}</p>
                            <p className="text-xs text-slate-500">Max Pell</p>
                        </div>
                        <div className="bg-slate-700/50 rounded-lg p-3">
                            <p className="text-sm text-slate-400">SAI $2,000</p>
                            <p className="text-xl font-bold text-white">{formatCurrency(5895)}</p>
                            <p className="text-xs text-slate-500">Estimated</p>
                        </div>
                        <div className="bg-slate-700/50 rounded-lg p-3">
                            <p className="text-sm text-slate-400">SAI $5,000</p>
                            <p className="text-xl font-bold text-white">{formatCurrency(2895)}</p>
                            <p className="text-xs text-slate-500">Estimated</p>
                        </div>
                        <div className="bg-red-900/30 rounded-lg p-3 border border-red-500/50">
                            <p className="text-sm text-slate-400">SAI $7,895+</p>
                            <p className="text-xl font-bold text-red-400">$0</p>
                            <p className="text-xs text-slate-500">No Pell</p>
                        </div>
                    </div>
                </div>

                {/* Tips */}
                <div className="bg-amber-900/20 border border-amber-700/50 rounded-xl p-4 mb-8">
                    <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-amber-400 mt-0.5" />
                        <div className="text-sm text-amber-200">
                            <p className="font-medium text-white mb-2">Tips to Maximize Aid</p>
                            <ul className="space-y-1">
                                <li> Minimize cash/investment accounts (pay down debt instead)</li>
                                <li> Maximize retirement contributions before filing</li>
                                <li> Keep assets in parent name, not student name</li>
                                <li> File FAFSA as early as possible (Oct 1)</li>
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
                        href="/fafsa/calculator"
                        className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Calculate Your SAI
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    This is simplified information. See studentaid.gov for complete FAFSA details.
                </p>
            </main>
        </>
    );
}
