"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Heart, FileText, CheckCircle, AlertTriangle } from "lucide-react";
import { SITE, PET_2026, formatCurrency } from "@/lib/calculators/pet-insurance";

export default function CoverageGuidePage() {
    return (
        <>
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/pet-insurance" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-blue-500" />
                        <span className="text-lg font-bold text-white">Coverage Guide</span>
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
                        Pet Insurance Coverage Guide
                    </h1>
                    <p className="text-slate-400">
                        Compare coverage types and find the right plan
                    </p>
                </div>

                {/* Coverage Types */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Coverage Types Comparison
                    </h2>

                    <div className="space-y-4">
                        {PET_2026.coverageTypes.map((type, i) => (
                            <div key={i} className="bg-slate-700/50 rounded-lg p-4">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-white font-semibold">{type.name}</h3>
                                        <p className="text-sm text-slate-400">{type.description}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-blue-400 font-bold">{formatCurrency(type.avgCost)}/mo</p>
                                        <p className="text-xs text-slate-500">avg cost</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* What's Covered */}
                <div className="bg-blue-900/30 border border-blue-500/50 rounded-xl p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-500" />
                        What&apos;s Typically Covered
                    </h2>
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                        {[
                            "Accidents and injuries",
                            "Illnesses and diseases",
                            "Surgery and hospitalization",
                            "Prescription medications",
                            "Diagnostic tests (X-rays, bloodwork)",
                            "Emergency care",
                            "Cancer treatment",
                            "Hereditary conditions (some plans)",
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-blue-400" />
                                <span className="text-blue-200">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* What's NOT Covered */}
                <div className="bg-red-900/20 border border-red-700/50 rounded-xl p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-red-500" />
                        What&apos;s Typically NOT Covered
                    </h2>
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                        {[
                            "Pre-existing conditions",
                            "Routine/wellness care (unless add-on)",
                            "Grooming",
                            "Breeding or pregnancy",
                            "Cosmetic procedures",
                            "Experimental treatments",
                            "Food and supplements",
                            "Behavioral training",
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4 text-red-400" />
                                <span className="text-red-200">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Deductible vs Reimbursement */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Understanding Deductibles & Reimbursement
                    </h2>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-slate-700/50 rounded-lg p-4">
                            <h3 className="text-blue-400 font-semibold mb-2">Annual Deductible</h3>
                            <p className="text-sm text-slate-300 mb-2">
                                Amount you pay before insurance kicks in.
                            </p>
                            <p className="text-xs text-slate-400">
                                <strong>Tip:</strong> Higher deductible = lower premium
                            </p>
                        </div>
                        <div className="bg-slate-700/50 rounded-lg p-4">
                            <h3 className="text-blue-400 font-semibold mb-2">Reimbursement Rate</h3>
                            <p className="text-sm text-slate-300 mb-2">
                                % of eligible costs insurance pays after deductible.
                            </p>
                            <p className="text-xs text-slate-400">
                                <strong>Common options:</strong> 70%, 80%, 90%
                            </p>
                        </div>
                    </div>

                    {/* Example */}
                    <div className="mt-4 bg-slate-700/30 rounded-lg p-4">
                        <p className="text-sm text-slate-400 mb-2"><strong>Example:</strong></p>
                        <p className="text-sm text-slate-300">
                            $2,000 vet bill  $500 deductible  80% reimbursement
                        </p>
                        <p className="text-sm text-blue-300">
                            Insurance pays: ($2,000 - $500) × 80% = <strong>$1,200</strong>
                        </p>
                        <p className="text-sm text-slate-400">
                            Your cost: $800
                        </p>
                    </div>
                </div>

                {/* Dog vs Cat */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Dog vs Cat Insurance
                    </h2>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                            <p className="text-4xl mb-2">?  </p>
                            <p className="text-white font-semibold">Dogs</p>
                            <p className="text-blue-400 text-2xl font-bold">{formatCurrency(PET_2026.avgPremiums.dogComprehensive)}/mo</p>
                            <p className="text-xs text-slate-400">avg comprehensive</p>
                        </div>
                        <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                            <p className="text-4xl mb-2">?  </p>
                            <p className="text-white font-semibold">Cats</p>
                            <p className="text-blue-400 text-2xl font-bold">{formatCurrency(PET_2026.avgPremiums.catComprehensive)}/mo</p>
                            <p className="text-xs text-slate-400">avg comprehensive</p>
                        </div>
                    </div>
                    <p className="text-xs text-slate-500 mt-3 text-center">
                        Cats typically cost less due to lower claims frequency
                    </p>
                </div>

                {/* Ad Placeholder */}
                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center">
                    <p className="text-sm text-slate-500">Advertisement</p>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link
                        href="/pet-insurance/pet-calculator"
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Calculate Your Premium
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    Coverage varies by provider. Read policy details carefully.
                </p>
            </main>
        </>
    );
}
