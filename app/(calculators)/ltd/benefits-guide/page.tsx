"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Shield, FileText, CheckCircle, AlertTriangle, Clock } from "lucide-react";
import { SITE, LTD_CONSTANTS_2026, formatCurrency } from "@/lib/calculators/ltd";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function BenefitsGuidePage() {
    return (
        <>
            <main className="max-w-4xl mx-auto px-4 py-8">
                {/* Page Header */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        Understanding LTD Insurance
                    </h1>
                    <p className="text-slate-400">
                        Everything you need to know about long term disability benefits
                    </p>
                </div>

                {/* Key Stats */}
                <div className="bg-blue-900/30 border border-blue-500/50 rounded-xl p-6 mb-8">
                    <div className="grid md:grid-cols-3 gap-4 text-center">
                        <div>
                            <p className="text-3xl font-bold text-white">{LTD_CONSTANTS_2026.statistics.disabilityChance}%</p>
                            <p className="text-sm text-blue-300">Will be disabled before 65</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-white">{LTD_CONSTANTS_2026.statistics.avgDisabilityLength} mo</p>
                            <p className="text-sm text-blue-300">Average disability length</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-white">{formatCurrency(LTD_CONSTANTS_2026.statistics.avgBenefitPaid)}</p>
                            <p className="text-sm text-blue-300">Average monthly benefit</p>
                        </div>
                    </div>
                </div>

                {/* How It Works */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Shield className="w-5 h-5 text-blue-500" />
                        How LTD Insurance Works
                    </h2>

                    <div className="space-y-4">
                        <div className="bg-slate-700/50 rounded-lg p-4">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                                <p className="font-semibold text-white">You Become Disabled</p>
                            </div>
                            <p className="text-sm text-slate-300 ml-9">
                                An illness or injury prevents you from working in your occupation.
                            </p>
                        </div>
                        <div className="bg-slate-700/50 rounded-lg p-4">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                                <p className="font-semibold text-white">Elimination Period</p>
                            </div>
                            <p className="text-sm text-slate-300 ml-9">
                                Wait 90-180 days (covered by short-term disability or savings).
                            </p>
                        </div>
                        <div className="bg-slate-700/50 rounded-lg p-4">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                                <p className="font-semibold text-white">Benefits Begin</p>
                            </div>
                            <p className="text-sm text-slate-300 ml-9">
                                Receive 60% of your income monthly until you recover or reach age 65.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Elimination Periods */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Clock className="w-5 h-5 text-blue-500" />
                        Elimination Periods
                    </h2>

                    <div className="grid md:grid-cols-3 gap-4">
                        {LTD_CONSTANTS_2026.eliminationPeriods.map((ep) => (
                            <div key={ep.days} className="bg-slate-700/50 rounded-lg p-4 text-center">
                                <p className="text-2xl font-bold text-blue-400">{ep.name}</p>
                                <p className="text-sm text-slate-400 mt-1">{ep.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Own Occupation vs Any Occupation */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Own Occupation vs Any Occupation
                    </h2>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-4">
                            <div className="flex items-center gap-2 mb-3">
                                <CheckCircle className="w-5 h-5 text-green-400" />
                                <h3 className="font-semibold text-white">Own Occupation</h3>
                            </div>
                            <p className="text-sm text-slate-300">
                                Pays if you can&apos;t do YOUR specific job. Better coverage -
                                a surgeon who loses fine motor skills would qualify even if
                                they could teach.
                            </p>
                        </div>
                        <div className="bg-amber-900/20 border border-amber-700/50 rounded-lg p-4">
                            <div className="flex items-center gap-2 mb-3">
                                <AlertTriangle className="w-5 h-5 text-amber-400" />
                                <h3 className="font-semibold text-white">Any Occupation</h3>
                            </div>
                            <p className="text-sm text-slate-300">
                                Pays only if you can&apos;t do ANY job you&apos;re qualified for.
                                Harder to qualify - many policies switch to this after 2 years.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Tax Implications */}
                <div className="bg-amber-900/20 border border-amber-700/50 rounded-xl p-4 mb-8">
                    <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-amber-400 mt-0.5" />
                        <div className="text-sm text-amber-200">
                            <p className="font-medium text-white mb-2">Tax Considerations</p>
                            <ul className="space-y-1">
                                <li> <strong>Employer-paid premiums:</strong> Benefits are taxable income</li>
                                <li> <strong>You pay premiums:</strong> Benefits are tax-free</li>
                                <li> <strong>Split arrangement:</strong> Proportionally taxed</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center my-8">
                    <Link
                        href="/ltd/calculator"
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Calculate Your LTD Benefits
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                <LegalDisclaimer category="insurance" />
            </main>
        </>
    );
}
