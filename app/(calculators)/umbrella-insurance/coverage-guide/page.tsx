"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Shield, FileText, CheckCircle, AlertTriangle } from "lucide-react";
import { SITE, UMBRELLA_2026, formatCurrency, formatMillions } from "@/lib/calculators/umbrella-insurance";

export default function CoverageGuidePage() {
    return (
        <>
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/umbrella-insurance" className="text-slate-400 hover:text-white transition-colors">
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
                        Umbrella Insurance Coverage Guide
                    </h1>
                    <p className="text-slate-400">
                        Understanding excess liability protection
                    </p>
                </div>

                {/* What is Umbrella Insurance */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">
                        What is Umbrella Insurance?
                    </h2>
                    <p className="text-slate-300 text-sm mb-4">
                        Umbrella insurance provides extra liability coverage beyond the limits of your
                        auto, homeowners, or renters insurance. It kicks in when your underlying
                        policy limits are exhausted.
                    </p>
                    <div className="bg-slate-700/50 rounded-lg p-4">
                        <p className="text-sm text-slate-400"><strong>Example:</strong></p>
                        <p className="text-sm text-slate-300">
                            You cause an accident with $400K in injuries. Your auto policy covers $300K.
                            <span className="text-blue-400"> Your umbrella policy covers the remaining $100K.</span>
                        </p>
                    </div>
                </div>

                {/* What's Covered */}
                <div className="bg-blue-900/30 border border-blue-500/50 rounded-xl p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-500" />
                        What&apos;s Covered
                    </h2>
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                        {UMBRELLA_2026.coveredEvents.map((item, i) => (
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
                        What&apos;s NOT Covered
                    </h2>
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                        {[
                            "Business liability",
                            "Intentional damage",
                            "Your own injuries",
                            "Property damage to your belongings",
                            "Criminal acts",
                            "Contractual liability",
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4 text-red-400" />
                                <span className="text-red-200">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Underlying Requirements */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Underlying Coverage Requirements
                    </h2>
                    <p className="text-slate-400 text-sm mb-4">
                        Insurers require minimum liability limits on your auto and home policies:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-slate-700/50 rounded-lg p-4">
                            <p className="text-sm text-slate-400">Auto Liability (per person)</p>
                            <p className="text-xl font-bold text-blue-400">{formatCurrency(UMBRELLA_2026.underlyingRequirements.autoLiability)}</p>
                        </div>
                        <div className="bg-slate-700/50 rounded-lg p-4">
                            <p className="text-sm text-slate-400">Homeowners Liability</p>
                            <p className="text-xl font-bold text-blue-400">{formatCurrency(UMBRELLA_2026.underlyingRequirements.homeownersLiability)}</p>
                        </div>
                    </div>
                </div>

                {/* Who Needs Umbrella */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Who Needs Umbrella Insurance?
                    </h2>
                    <ul className="space-y-2 text-sm text-slate-300">
                        <li> <strong>Homeowners</strong> with assets to protect</li>
                        <li> <strong>Landlords</strong> with rental properties</li>
                        <li> <strong>High net worth</strong> individuals</li>
                        <li> <strong>Teen drivers</strong> in the household</li>
                        <li> <strong>Pool or trampoline</strong> owners</li>
                        <li> <strong>Public figures</strong> at risk of lawsuits</li>
                        <li> <strong>Dog owners</strong> (especially certain breeds)</li>
                    </ul>
                </div>

                {/* Ad Placeholder */}
                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center">
                    <p className="text-sm text-slate-500">Advertisement</p>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link
                        href="/umbrella-insurance/umbrella-calculator"
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Calculate Your Premium
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Citation */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    {UMBRELLA_2026.citation}
                </p>
            </main>
        </>
    );
}
