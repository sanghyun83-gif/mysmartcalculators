"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, DollarSign, FileText, CheckCircle } from "lucide-react";
import { SITE, TIP_2026 } from "@/lib/calculators/tip";

export default function TippingGuidePage() {
    return (
        <>
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/tip" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-emerald-500" />
                        <span className="text-lg font-bold text-white">Tipping Guide</span>
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
                        {SITE.year} Tipping Guide
                    </h1>
                    <p className="text-slate-400">
                        How much to tip for every service
                    </p>
                </div>

                {/* Standard Tips */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Standard Tipping Percentages
                    </h2>

                    <div className="space-y-3">
                        {TIP_2026.tipPercentages.map((tip) => (
                            <div key={tip.service} className="flex items-center justify-between py-3 border-b border-slate-700 last:border-0">
                                <div>
                                    <p className="text-white font-medium">{tip.service}</p>
                                    <p className="text-xs text-slate-400">{tip.description}</p>
                                </div>
                                <span className="text-2xl font-bold text-emerald-400">{tip.percent}%</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* More Services */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Other Services
                    </h2>

                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span className="text-slate-300">Hair Stylist</span>
                                <span className="text-emerald-400 font-bold">15-20%</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-300">Spa Services</span>
                                <span className="text-emerald-400 font-bold">15-20%</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-300">Taxi/Rideshare</span>
                                <span className="text-emerald-400 font-bold">15-20%</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-300">Valet Parking</span>
                                <span className="text-emerald-400 font-bold">$2-5</span>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span className="text-slate-300">Hotel Housekeeping</span>
                                <span className="text-emerald-400 font-bold">$2-5/night</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-300">Bellhop</span>
                                <span className="text-emerald-400 font-bold">$1-2/bag</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-300">Coffee Shop</span>
                                <span className="text-emerald-400 font-bold">$1-2</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-300">Movers</span>
                                <span className="text-emerald-400 font-bold">$20-40 each</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tipping Tips */}
                <div className="bg-emerald-900/20 border border-emerald-500/50 rounded-xl p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-500" />
                        Tipping Etiquette Tips
                    </h2>
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                        {[
                            "Always tip in cash when possible",
                            "Tip on pre-tax amount (traditional)",
                            "Adjust for exceptional or poor service",
                            "Never skip tip entirely for bad service",
                            "Round up for easy calculations",
                            "Check if gratuity is included",
                        ].map((tip, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-emerald-400" />
                                <span className="text-emerald-200">{tip}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Ad Placeholder */}
                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center">
                    <p className="text-sm text-slate-500">Advertisement</p>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link
                        href="/tip/calculator"
                        className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Calculate Your Tip
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Citation */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    {TIP_2026.citation}
                </p>
            </main>
        </>
    );
}
