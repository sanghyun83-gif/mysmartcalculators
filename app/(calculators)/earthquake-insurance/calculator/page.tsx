"use client";

import { useState } from "react";
import Link from "next/link";
import { Mountain, Calculator, ArrowRight, DollarSign } from "lucide-react";
import { SITE, RISK_ZONES, FAQS } from "@/lib/calculators/earthquake-insurance";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function EarthquakeInsuranceCalculatorPage() {
    const [riskZone, setRiskZone] = useState("");
    const [dwellingCoverage, setDwellingCoverage] = useState(300000);
    const [deductible, setDeductible] = useState(15);
    const [result, setResult] = useState<null | { annual: number; monthly: number; deductibleAmount: number }>(null);

    const calculatePremium = () => {
        const zone = RISK_ZONES.find(z => z.id === riskZone);
        if (!zone) return;

        const baseRate = (dwellingCoverage / 1000) * 2.0 * zone.factor;
        const deductibleDiscount = 1 - (deductible - 10) * 0.03;
        const annual = Math.round(baseRate * deductibleDiscount);
        const monthly = Math.round(annual / 12);
        const deductibleAmount = Math.round(dwellingCoverage * (deductible / 100));

        setResult({ annual, monthly, deductibleAmount });
    };

    return (
        <>


            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
                            <Mountain className="w-4 h-4 text-blue-400" />
                            <span className="text-sm text-blue-300">{SITE.year} Calculator</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">Earthquake Insurance Calculator</h1>
                        <p className="text-slate-400">Estimate your seismic coverage costs</p>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Risk Zone</label>
                                <select value={riskZone} onChange={(e) => setRiskZone(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">
                                    <option value="">Select zone...</option>
                                    {RISK_ZONES.map((z) => (<option key={z.id} value={z.id}>{z.name}</option>))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Dwelling Coverage: ${dwellingCoverage.toLocaleString()}</label>
                                <input type="range" min="100000" max="1000000" step="25000" value={dwellingCoverage} onChange={(e) => setDwellingCoverage(Number(e.target.value))} className="w-full" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Deductible: {deductible}% (${Math.round(dwellingCoverage * deductible / 100).toLocaleString()})</label>
                                <input type="range" min="10" max="25" step="5" value={deductible} onChange={(e) => setDeductible(Number(e.target.value))} className="w-full" />
                            </div>
                        </div>

                        <button onClick={calculatePremium} disabled={!riskZone} className="w-full mt-6 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
                            <DollarSign className="w-5 h-5" /> Calculate Premium
                        </button>
                    </div>

                    {result && (
                        <div className="bg-blue-900/30 border border-blue-500/50 rounded-xl p-6 mb-8">
                            <h2 className="text-xl font-bold text-white mb-4">Estimated Premium</h2>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-2xl font-bold text-blue-400">${result.annual.toLocaleString()}/yr</div>
                                    <div className="text-sm text-slate-400">Annual Premium</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-2xl font-bold text-white">${result.monthly}/mo</div>
                                    <div className="text-sm text-slate-400">Monthly Payment</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-2xl font-bold text-amber-400">${result.deductibleAmount.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">Your Deductible</div>
                                </div>
                            </div>
                            <p className="text-xs text-slate-500 mt-4">*Based on 2026 earthquake insurance data. High deductible = lower premium.</p>
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
