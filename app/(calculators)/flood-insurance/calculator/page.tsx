"use client";

import { useState } from "react";
import Link from "next/link";
import { Waves, Calculator, ArrowRight, DollarSign } from "lucide-react";
import { SITE, FLOOD_ZONES, FAQS } from "@/lib/calculators/flood-insurance";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function FloodInsuranceCalculatorPage() {
    const [floodZone, setFloodZone] = useState("");
    const [buildingCoverage, setBuildingCoverage] = useState(200000);
    const [contentsCoverage, setContentsCoverage] = useState(75000);
    const [result, setResult] = useState<null | { annual: number; monthly: number }>(null);

    const calculatePremium = () => {
        const zone = FLOOD_ZONES.find(z => z.id === floodZone);
        if (!zone) return;

        const buildingRate = (buildingCoverage / 1000) * 2.5 * zone.factor;
        const contentsRate = (contentsCoverage / 1000) * 2.0 * zone.factor;

        const annual = Math.round(buildingRate + contentsRate);
        const monthly = Math.round(annual / 12);

        setResult({ annual, monthly });
    };

    return (
        <>


            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
                            <Waves className="w-4 h-4 text-blue-400" />
                            <span className="text-sm text-blue-300">{SITE.year} Calculator</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">Flood Insurance Calculator</h1>
                        <p className="text-slate-400">Estimate your NFIP flood insurance costs</p>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Flood Zone</label>
                                <select value={floodZone} onChange={(e) => setFloodZone(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">
                                    <option value="">Select zone...</option>
                                    {FLOOD_ZONES.map((z) => (<option key={z.id} value={z.id}>{z.name}</option>))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Building Coverage: ${buildingCoverage.toLocaleString()} (max $250K)</label>
                                <input type="range" min="50000" max="250000" step="10000" value={buildingCoverage} onChange={(e) => setBuildingCoverage(Number(e.target.value))} className="w-full" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Contents Coverage: ${contentsCoverage.toLocaleString()} (max $100K)</label>
                                <input type="range" min="10000" max="100000" step="5000" value={contentsCoverage} onChange={(e) => setContentsCoverage(Number(e.target.value))} className="w-full" />
                            </div>
                        </div>

                        <button onClick={calculatePremium} disabled={!floodZone} className="w-full mt-6 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
                            <DollarSign className="w-5 h-5" /> Calculate Premium
                        </button>
                    </div>

                    {result && (
                        <div className="bg-blue-900/30 border border-blue-500/50 rounded-xl p-6 mb-8">
                            <h2 className="text-xl font-bold text-white mb-4">Estimated Premium</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-3xl font-bold text-blue-400">${result.annual.toLocaleString()}/yr</div>
                                    <div className="text-sm text-slate-400">Annual Premium</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-3xl font-bold text-white">${result.monthly}/mo</div>
                                    <div className="text-sm text-slate-400">Monthly Payment</div>
                                </div>
                            </div>
                            <p className="text-xs text-slate-500 mt-4">*Based on NFIP Risk Rating 2.0 (2026)</p>
                        </div>
                    )}

                    <LegalDisclaimer category="insurance" />
                </div>
            </section>

            <section className="py-12 px-4 bg-slate-800/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-xl font-bold text-white text-center mb-8">FAQ</h2>
                    <div className="space-y-4">
                        {FAQS.map((faq, index) => (
                            <details key={index} className="group bg-slate-800 border border-slate-700 rounded-xl">
                                <summary className="flex items-center justify-between p-4 cursor-pointer">
                                    <span className="font-medium text-white text-sm">{faq.question}</span>
                                    <ArrowRight className="w-4 h-4 text-slate-400 group-open:rotate-90 transition-transform" />
                                </summary>
                                <div className="px-4 pb-4 text-slate-300 text-sm">{faq.answer}</div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>


        </>
    );
}
