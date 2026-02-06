"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Home, Scale, FileText, MapPin, CheckCircle } from "lucide-react";
import { SITE, DIVISION_CONSTANTS_2026, COMMUNITY_PROPERTY_STATES } from "@/lib/calculators/property-division";

export default function StateGuidePage() {
    return (
        <>
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/property-division" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-rose-500" />
                        <span className="text-lg font-bold text-white">State Division Laws</span>
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
                        Community Property vs Equitable Distribution
                    </h1>
                    <p className="text-slate-400">
                        How states divide marital property in divorce
                    </p>
                </div>

                {/* Two Systems */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {/* Community Property */}
                    <div className="bg-slate-800 rounded-xl border border-rose-500/50 p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-rose-500/20 rounded-lg">
                                <Scale className="w-5 h-5 text-rose-400" />
                            </div>
                            <h2 className="text-lg font-bold text-white">Community Property</h2>
                        </div>

                        <div className="text-center py-4">
                            <p className="text-4xl font-bold text-rose-400">50/50</p>
                            <p className="text-sm text-slate-400 mt-1">Equal Split</p>
                        </div>

                        <p className="text-sm text-slate-300 mb-4">
                            All assets acquired during marriage are considered <strong>equally owned</strong> by both
                            spouses, regardless of who earned or purchased them.
                        </p>

                        <div className="text-sm text-slate-400">
                            <p className="font-medium text-white mb-2">Key Points:</p>
                            <ul className="space-y-1">
                                <li>??Assets split exactly 50/50</li>
                                <li>??Both spouses own everything equally</li>
                                <li>??Simpler, more predictable outcome</li>
                                <li>??9 states use this system</li>
                            </ul>
                        </div>
                    </div>

                    {/* Equitable Distribution */}
                    <div className="bg-slate-800 rounded-xl border border-blue-500/50 p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-blue-500/20 rounded-lg">
                                <Scale className="w-5 h-5 text-blue-400" />
                            </div>
                            <h2 className="text-lg font-bold text-white">Equitable Distribution</h2>
                        </div>

                        <div className="text-center py-4">
                            <p className="text-4xl font-bold text-blue-400">Fair</p>
                            <p className="text-sm text-slate-400 mt-1">Not Necessarily Equal</p>
                        </div>

                        <p className="text-sm text-slate-300 mb-4">
                            Assets are divided <strong>fairly</strong> based on multiple factors.
                            This may result in an unequal split depending on circumstances.
                        </p>

                        <div className="text-sm text-slate-400">
                            <p className="font-medium text-white mb-2">Factors Considered:</p>
                            <ul className="space-y-1">
                                {DIVISION_CONSTANTS_2026.equitableFactors.slice(0, 5).map((factor, i) => (
                                    <li key={i}>??{factor}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Community Property States */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-rose-500" />
                        Community Property States (9)
                    </h2>

                    <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                        {COMMUNITY_PROPERTY_STATES.map((state) => (
                            <div
                                key={state.abbr}
                                className="flex items-center gap-2 bg-rose-500/10 border border-rose-500/30 rounded-lg p-3"
                            >
                                <CheckCircle className="w-4 h-4 text-rose-400" />
                                <div>
                                    <p className="text-sm font-medium text-white">{state.abbr}</p>
                                    <p className="text-xs text-slate-400">{state.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="text-sm text-slate-400 mt-4">
                        <strong>Note:</strong> Alaska allows couples to opt into community property.
                    </p>
                </div>

                {/* Separate vs Marital */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Marital vs Separate Property
                    </h2>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-4">
                            <h3 className="font-semibold text-green-400 mb-2">Marital Property (Divided)</h3>
                            <ul className="text-sm text-slate-300 space-y-1">
                                <li>??Income earned during marriage</li>
                                <li>??Home purchased together</li>
                                <li>??Retirement contributed during marriage</li>
                                <li>??Joint bank accounts</li>
                                <li>??Vehicles bought during marriage</li>
                            </ul>
                        </div>

                        <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4">
                            <h3 className="font-semibold text-blue-400 mb-2">Separate Property (Kept)</h3>
                            <ul className="text-sm text-slate-300 space-y-1">
                                <li>??Assets owned before marriage</li>
                                <li>??Inheritances to one spouse</li>
                                <li>??Gifts to one spouse</li>
                                <li>??Personal injury settlements</li>
                                <li>??Property excluded by prenup</li>
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
                        href="/property-division/division-calculator"
                        className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Calculate Your Division
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    Laws vary by state and situation. Consult a divorce attorney for your specific case.
                </p>
            </main>
        </>
    );
}
