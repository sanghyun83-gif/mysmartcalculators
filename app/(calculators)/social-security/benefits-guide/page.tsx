"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Users, FileText, CheckCircle, AlertTriangle } from "lucide-react";
import { SITE, SS_2026, formatCurrency } from "@/lib/calculators/social-security";

export default function BenefitsGuidePage() {
    return (
        <>
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/social-security" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-emerald-500" />
                        <span className="text-lg font-bold text-white">Benefits Guide</span>
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
                        Social Security Benefits Guide
                    </h1>
                    <p className="text-slate-400">
                        When to claim, spousal benefits, and maximizing your income
                    </p>
                </div>

                {/* Full Retirement Age */}
                <div className="bg-emerald-900/30 border border-emerald-500/50 rounded-xl p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Users className="w-5 h-5 text-emerald-500" />
                        Full Retirement Age (FRA)
                    </h2>
                    <p className="text-slate-300 mb-4">
                        Your FRA depends on your birth year. For most people today, it&apos;s <strong>67</strong>.
                    </p>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="text-left text-slate-400 border-b border-slate-700">
                                    <th className="py-2">Birth Year</th>
                                    <th className="py-2">Full Retirement Age</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-slate-700/50">
                                    <td className="py-2 text-white">1960 or later</td>
                                    <td className="py-2 text-emerald-400 font-bold">67</td>
                                </tr>
                                <tr className="border-b border-slate-700/50">
                                    <td className="py-2 text-white">1955-1959</td>
                                    <td className="py-2 text-white">66 + 2-10 months</td>
                                </tr>
                                <tr>
                                    <td className="py-2 text-white">1954 or earlier</td>
                                    <td className="py-2 text-white">66</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Claiming Ages */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Claiming Age Impact
                    </h2>

                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-4">
                            <p className="font-bold text-red-400 text-xl">Age 62</p>
                            <p className="text-sm text-white mt-2">~30% reduction</p>
                            <p className="text-xs text-slate-400 mt-2">
                                Good if: need income now, health concerns, no other income
                            </p>
                        </div>
                        <div className="bg-emerald-900/20 border border-emerald-500/50 rounded-lg p-4">
                            <p className="font-bold text-emerald-400 text-xl">Age 67 (FRA)</p>
                            <p className="text-sm text-white mt-2">100% of PIA</p>
                            <p className="text-xs text-slate-400 mt-2">
                                Good if: balanced approach, average health
                            </p>
                        </div>
                        <div className="bg-blue-900/20 border border-blue-500/50 rounded-lg p-4">
                            <p className="font-bold text-blue-400 text-xl">Age 70</p>
                            <p className="text-sm text-white mt-2">+24% increase</p>
                            <p className="text-xs text-slate-400 mt-2">
                                Good if: good health, other income, maximize for spouse
                            </p>
                        </div>
                    </div>
                </div>

                {/* Spousal Benefits */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Spousal Benefits
                    </h2>
                    <p className="text-slate-300 mb-4">
                        A spouse can receive up to <strong>50% of the worker&apos;s PIA</strong> if claimed at FRA.
                    </p>

                    <div className="space-y-2">
                        {[
                            "Must be married at least 1 year",
                            "Divorced spouse eligible if married 10+ years",
                            "Reduced if claimed before FRA",
                            "Worker must have filed or be 62+",
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-emerald-400 mt-1" />
                                <p className="text-sm text-slate-300">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Survivor Benefits */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Survivor Benefits
                    </h2>
                    <p className="text-slate-300 mb-4">
                        Surviving spouses can receive <strong>100% of the deceased&apos;s benefit</strong> if
                        claimed at their own FRA.
                    </p>

                    <ul className="text-sm text-slate-300 space-y-1">
                        <li> Available at age 60 (reduced)</li>
                        <li> Age 50 if disabled</li>
                        <li> Any age if caring for child under 16</li>
                    </ul>
                </div>

                {/* Earnings Test */}
                <div className="bg-orange-900/20 border border-orange-700/50 rounded-xl p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-orange-500" />
                        Earnings Test ({SITE.year})
                    </h2>
                    <p className="text-slate-300 mb-4">
                        If you work while receiving benefits before FRA, benefits may be reduced.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-slate-800/80 rounded-lg p-4">
                            <p className="text-sm text-orange-300 font-semibold">Before FRA Year</p>
                            <p className="text-white">Earn over {formatCurrency(SS_2026.earningsLimit)}</p>
                            <p className="text-xs text-slate-400">$1 withheld per $2 above limit</p>
                        </div>
                        <div className="bg-slate-800/80 rounded-lg p-4">
                            <p className="text-sm text-orange-300 font-semibold">Year You Reach FRA</p>
                            <p className="text-white">Earn over {formatCurrency(SS_2026.earningsLimitFRAYear)}</p>
                            <p className="text-xs text-slate-400">$1 withheld per $3 above limit</p>
                        </div>
                    </div>
                    <p className="text-xs text-slate-400 mt-4">
                        After FRA, there is no earnings test?�work as much as you want!
                    </p>
                </div>

                {/* COLA */}
                <div className="bg-blue-900/20 border border-blue-700/50 rounded-xl p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Cost-of-Living Adjustment (COLA)
                    </h2>
                    <p className="text-slate-300 mb-2">
                        Benefits increase annually based on inflation.
                        {SITE.year} COLA: <strong className="text-blue-400">{SS_2026.cola2026}%</strong> (projected)
                    </p>
                </div>

                {/* Ad Placeholder */}
                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center">
                    <p className="text-sm text-slate-500">Advertisement</p>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link
                        href="/social-security/ss-calculator"
                        className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Calculate Your Benefits
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    Visit SSA.gov for official information and your personalized benefit statement.
                </p>
            </main>
        </>
    );
}
