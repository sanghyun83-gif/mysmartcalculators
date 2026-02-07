"use client";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Scale, Calendar, Users, Gavel } from "lucide-react";
import { SITE, PARAGARD_2026, formatCurrency } from "@/lib/calculators/paragard";

export default function TrialStatusPage() {
    return (
        <>
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/paragard" className="text-slate-400 hover:text-white"><ArrowLeft className="w-6 h-6" /></Link>
                    <div className="flex items-center gap-2"><Scale className="w-5 h-5 text-red-500" /><span className="text-lg font-bold text-white">2026 Trial Status</span></div>
                    <span className="ml-auto text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/50 rounded-full px-4 py-2 mb-4 animate-pulse"><Scale className="w-4 h-4 text-red-400" /><span className="text-sm text-red-300 font-semibold">LIVE TRIAL TRACKING</span></div>
                    <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">Paragard Bellwether Trial {PARAGARD_2026.bellwetherTrial.date}</h1>
                    <p className="text-slate-400">First trial to set precedent for {PARAGARD_2026.statistics.lawsuitsFiled.toLocaleString()}+ pending cases</p>
                </div>

                <div className="bg-red-900/30 border border-red-500/50 rounded-xl p-8 mb-8">
                    <div className="text-center">
                        <Calendar className="w-12 h-12 text-red-400 mx-auto mb-4" />
                        <h2 className="text-3xl font-bold text-white mb-2">{PARAGARD_2026.bellwetherTrial.firstTrialDate}</h2>
                        <p className="text-xl text-red-300">First Bellwether Trial Date</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><Gavel className="w-5 h-5 text-purple-400" />Court Information</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex justify-between"><span className="text-slate-400">MDL Number:</span><span className="text-white font-medium">{PARAGARD_2026.bellwetherTrial.mdlNumber}</span></li>
                            <li className="flex justify-between"><span className="text-slate-400">Court:</span><span className="text-white font-medium">{PARAGARD_2026.bellwetherTrial.court}</span></li>
                            <li className="flex justify-between"><span className="text-slate-400">Judge:</span><span className="text-white font-medium">{PARAGARD_2026.bellwetherTrial.judge}</span></li>
                            <li className="flex justify-between"><span className="text-slate-400">Defendant:</span><span className="text-white font-medium">{PARAGARD_2026.bellwetherTrial.defendant}</span></li>
                        </ul>
                    </div>
                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><Users className="w-5 h-5 text-purple-400" />Case Statistics</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex justify-between"><span className="text-slate-400">Pending Cases:</span><span className="text-white font-medium">{PARAGARD_2026.bellwetherTrial.pendingCases.toLocaleString()}+</span></li>
                            <li className="flex justify-between"><span className="text-slate-400">Reported Breakages:</span><span className="text-white font-medium">{PARAGARD_2026.statistics.reportedBreakages.toLocaleString()}+</span></li>
                            <li className="flex justify-between"><span className="text-slate-400">Avg Settlement Est:</span><span className="text-purple-400 font-medium">{formatCurrency(PARAGARD_2026.statistics.avgSettlement)}</span></li>
                            <li className="flex justify-between"><span className="text-slate-400">FDA Warnings:</span><span className="text-red-400 font-medium">{PARAGARD_2026.statistics.fdaWarnings} issued</span></li>
                        </ul>
                    </div>
                </div>

                <div className="bg-purple-900/20 border border-purple-500/50 rounded-xl p-6 mb-8">
                    <h3 className="text-lg font-bold text-white mb-4">What is a Bellwether Trial?</h3>
                    <p className="text-slate-300 text-sm mb-4">A bellwether trial is a test case selected to represent the larger group of plaintiffs in a mass tort litigation. The outcome of this first trial will:</p>
                    <ul className="space-y-2 text-sm text-purple-200">
                        <li>✓ Set precedent for how evidence is evaluated</li>
                        <li>✓ Determine potential settlement values for similar cases</li>
                        <li>✓ Often lead to global settlement negotiations</li>
                        <li>✓ Help both sides assess case strength</li>
                    </ul>
                </div>

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <div className="flex gap-4 justify-center"><Link href="/paragard/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold">Calculate Settlement<ArrowRight className="w-5 h-5" /></Link><Link href="/paragard/eligibility" className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-lg font-semibold">Check Eligibility<ArrowRight className="w-5 h-5" /></Link></div>
                <p className="mt-8 text-xs text-slate-500 text-center">{PARAGARD_2026.citation}</p>
            </main>
        </>
    );
}
