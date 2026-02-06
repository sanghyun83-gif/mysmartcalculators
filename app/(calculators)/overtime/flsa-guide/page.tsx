"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, FileText, CheckCircle, XCircle, AlertTriangle } from "lucide-react";
import { SITE, OVERTIME_CONSTANTS_2026, EXEMPTION_CATEGORIES, formatCurrency } from "@/lib/calculators/overtime";

export default function FLSAGuidePage() {
    return (
        <>
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/overtime" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-emerald-500" />
                        <span className="text-lg font-bold text-white">FLSA Overtime Guide</span>
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
                        FLSA Overtime Eligibility Guide
                    </h1>
                    <p className="text-slate-400">
                        Who qualifies for overtime pay under federal law
                    </p>
                </div>

                {/* Key Number */}
                <div className="bg-emerald-900/30 border border-emerald-500/50 rounded-xl p-6 mb-8 text-center">
                    <p className="text-emerald-400 text-sm mb-2">{SITE.year} Salary Threshold</p>
                    <p className="text-4xl font-bold text-white mb-2">
                        {formatCurrency(OVERTIME_CONSTANTS_2026.federal.salaryThreshold)}
                    </p>
                    <p className="text-emerald-300">
                        Salaried workers earning less than this are entitled to OT
                    </p>
                </div>

                {/* Exempt vs Non-Exempt */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Exempt vs Non-Exempt Employees
                    </h2>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <CheckCircle className="w-5 h-5 text-green-400" />
                                <h3 className="font-semibold text-white">Non-Exempt (Gets OT)</h3>
                            </div>
                            <div className="space-y-2">
                                {EXEMPTION_CATEGORIES.filter(c => !c.exempt).map((cat, i) => (
                                    <div key={i} className="bg-green-900/20 border border-green-700/50 rounded-lg p-3">
                                        <p className="font-medium text-white">{cat.name}</p>
                                        <p className="text-sm text-slate-400">{cat.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <XCircle className="w-5 h-5 text-red-400" />
                                <h3 className="font-semibold text-white">Exempt (No OT)</h3>
                            </div>
                            <div className="space-y-2">
                                {EXEMPTION_CATEGORIES.filter(c => c.exempt).map((cat, i) => (
                                    <div key={i} className="bg-red-900/20 border border-red-700/50 rounded-lg p-3">
                                        <p className="font-medium text-white">{cat.name}</p>
                                        <p className="text-sm text-slate-400">{cat.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Federal Rules */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Clock className="w-5 h-5 text-emerald-500" />
                        Federal FLSA Rules
                    </h2>

                    <div className="space-y-4">
                        <div className="bg-slate-700/50 rounded-lg p-4">
                            <p className="font-semibold text-emerald-400 mb-1">40-Hour Rule</p>
                            <p className="text-sm text-slate-300">
                                Overtime is required for hours worked beyond 40 in a workweek.
                                The workweek is a fixed 7-day period defined by your employer.
                            </p>
                        </div>
                        <div className="bg-slate-700/50 rounded-lg p-4">
                            <p className="font-semibold text-emerald-400 mb-1">Time and a Half</p>
                            <p className="text-sm text-slate-300">
                                OT must be paid at 1.5× the regular rate. The regular rate includes
                                base pay plus most bonuses and commissions.
                            </p>
                        </div>
                        <div className="bg-slate-700/50 rounded-lg p-4">
                            <p className="font-semibold text-emerald-400 mb-1">No Comp Time (Private Sector)</p>
                            <p className="text-sm text-slate-300">
                                Private employers cannot give comp time instead of OT pay.
                                Government employers may offer comp time.
                            </p>
                        </div>
                    </div>
                </div>

                {/* California Special Rules */}
                <div className="bg-blue-900/20 border border-blue-500/50 rounded-xl p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4">
                        California Daily OT Rules
                    </h2>

                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="bg-slate-800/80 rounded-lg p-4">
                            <p className="text-2xl font-bold text-emerald-400">1.5× after 8 hrs</p>
                            <p className="text-slate-300 mt-1">Time and a half after 8 hours in a day</p>
                        </div>
                        <div className="bg-slate-800/80 rounded-lg p-4">
                            <p className="text-2xl font-bold text-green-400">2× after 12 hrs</p>
                            <p className="text-slate-300 mt-1">Double time after 12 hours in a day</p>
                        </div>
                    </div>

                    <p className="text-sm text-blue-200 mt-4">
                        California has the strongest overtime protections. Check your state&apos;s labor laws.
                    </p>
                </div>

                {/* Warning */}
                <div className="bg-amber-900/20 border border-amber-700/50 rounded-xl p-4 mb-8">
                    <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-amber-400 mt-0.5" />
                        <div className="text-sm text-amber-200">
                            <p className="font-medium text-white mb-2">Common Misclassification Issues</p>
                            <ul className="space-y-1">
                                <li> {OVERTIME_CONSTANTS_2026.statistics.misclassifiedWorkers}% of workers are wrongly classified as exempt</li>
                                <li> &quot;Manager&quot; title doesn&apos;t automatically make you exempt</li>
                                <li> Paying salary doesn&apos;t make someone exempt from OT</li>
                                <li> You may be owed back pay if misclassified</li>
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
                        href="/overtime/calculator"
                        className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Calculate Your Overtime
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
