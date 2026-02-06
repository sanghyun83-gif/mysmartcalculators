"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Briefcase, FileText, CheckCircle, XCircle, AlertTriangle } from "lucide-react";
import { SITE, UI_CONSTANTS_2026, formatCurrency } from "@/lib/calculators/unemployment";

export default function EligibilityGuidePage() {
    return (
        <>
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/unemployment" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-emerald-500" />
                        <span className="text-lg font-bold text-white">Eligibility Guide</span>
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
                        Unemployment Eligibility Guide
                    </h1>
                    <p className="text-slate-400">
                        Understand requirements and how to qualify for UI benefits
                    </p>
                </div>

                {/* Basic Requirements */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-emerald-500" />
                        Basic Eligibility Requirements
                    </h2>

                    <div className="space-y-3">
                        {[
                            { text: "Lost job through no fault of your own (layoff, reduction in force)", icon: CheckCircle, color: "emerald" },
                            { text: "Earned enough wages during base period (typically last 5 quarters)", icon: CheckCircle, color: "emerald" },
                            { text: "Physically able and available to work", icon: CheckCircle, color: "emerald" },
                            { text: "Actively searching for new employment", icon: CheckCircle, color: "emerald" },
                            { text: "Meet state-specific work history requirements", icon: CheckCircle, color: "emerald" },
                        ].map((req, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <req.icon className={`w-5 h-5 text-${req.color}-400 mt-0.5`} />
                                <span className="text-slate-300">{req.text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Disqualifications */}
                <div className="bg-red-900/20 border border-red-700/50 rounded-xl p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <XCircle className="w-5 h-5 text-red-400" />
                        What Disqualifies You
                    </h2>

                    <div className="space-y-3">
                        {[
                            "Quitting without good cause",
                            "Fired for misconduct",
                            "Refusing suitable work",
                            "Not meeting work search requirements",
                            "Being self-employed (some exceptions)",
                            "Already receiving certain benefits (workers comp, pension)",
                        ].map((disq, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <XCircle className="w-5 h-5 text-red-400 mt-0.5" />
                                <span className="text-red-200">{disq}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Base Period Explained */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Understanding the Base Period
                    </h2>

                    <p className="text-slate-300 mb-4">
                        Your benefit amount is calculated using wages from your <strong>base period</strong> ??                        typically the first four of the last five completed calendar quarters before you file.
                    </p>

                    <div className="bg-slate-700/50 rounded-lg p-4 mb-4">
                        <p className="text-sm text-slate-400 mb-2">Example: Filing in January 2026</p>
                        <p className="text-slate-300">
                            Base period = Oct 2024 ??Sept 2026 wages
                        </p>
                    </div>

                    <p className="text-sm text-slate-400">
                        If you don&apos;t qualify under the standard base period, many states offer an
                        &quot;alternate base period&quot; using more recent wages.
                    </p>
                </div>

                {/* How to Apply */}
                <div className="bg-emerald-900/20 border border-emerald-500/50 rounded-xl p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4">
                        How to Apply for Unemployment
                    </h2>

                    <div className="space-y-4">
                        <div className="bg-slate-800/80 rounded-lg p-4">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="bg-emerald-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                                <p className="font-semibold text-white">File Online</p>
                            </div>
                            <p className="text-sm text-slate-300 ml-9">
                                Visit your state&apos;s unemployment website. Most states require online filing.
                            </p>
                        </div>
                        <div className="bg-slate-800/80 rounded-lg p-4">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="bg-emerald-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                                <p className="font-semibold text-white">Provide Work History</p>
                            </div>
                            <p className="text-sm text-slate-300 ml-9">
                                Have employer names, addresses, dates, and wages ready for the past 18 months.
                            </p>
                        </div>
                        <div className="bg-slate-800/80 rounded-lg p-4">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="bg-emerald-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                                <p className="font-semibold text-white">Certify Weekly</p>
                            </div>
                            <p className="text-sm text-slate-300 ml-9">
                                File weekly/biweekly claims certifying you&apos;re still unemployed and seeking work.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Warning */}
                <div className="bg-amber-900/20 border border-amber-700/50 rounded-xl p-4 mb-8">
                    <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-amber-400 mt-0.5" />
                        <div className="text-sm text-amber-200">
                            <p className="font-medium text-white mb-2">Important Reminders</p>
                            <ul className="space-y-1">
                                <li>??File as soon as you&apos;re laid off ??don&apos;t wait</li>
                                <li>??Report ALL income while receiving benefits</li>
                                <li>??Keep records of your job search activities</li>
                                <li>??UI fraud is a crime with serious penalties</li>
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
                        href="/unemployment/calculator"
                        className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Calculate Your Benefits
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    This is general information. Contact your state labor department for specific eligibility.
                </p>
            </main>
        </>
    );
}
