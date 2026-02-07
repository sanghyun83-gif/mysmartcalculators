"use client";

import { useState } from "react";
import Link from "next/link";
import { Caravan, Calculator, ArrowRight, DollarSign } from "lucide-react";
import { SITE, HOME_VALUES, FAQS } from "@/lib/calculators/mobile-home-insurance";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function MobileHomeInsuranceCalculatorPage() {
    const [homeValue, setHomeValue] = useState("");
    const [dwellingCoverage, setDwellingCoverage] = useState(75000);
    const [propertyValue, setPropertyValue] = useState(25000);
    const [result, setResult] = useState<null | { annual: number; monthly: number }>(null);

    const calculatePremium = () => {
        const tier = HOME_VALUES.find(v => v.id === homeValue);
        if (!tier) return;

        const dwellingRate = (dwellingCoverage / 1000) * 6.5 * tier.factor;
        const propertyRate = (propertyValue / 1000) * 3.0 * tier.factor;
        const liabilityRate = 80;

        const annual = Math.round(dwellingRate + propertyRate + liabilityRate);
        const monthly = Math.round(annual / 12);

        setResult({ annual, monthly });
    };

    return (
        <>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
                            <Caravan className="w-4 h-4 text-blue-400" />
                            <span className="text-sm text-blue-300">{SITE.year} Calculator</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">Mobile Home Insurance Calculator</h1>
                        <p className="text-slate-400">Estimate your manufactured home insurance costs</p>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Home Value</label>
                                <select value={homeValue} onChange={(e) => setHomeValue(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">
                                    <option value="">Select value...</option>
                                    {HOME_VALUES.map((v) => (<option key={v.id} value={v.id}>{v.name}</option>))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Dwelling Coverage: ${dwellingCoverage.toLocaleString()}</label>
                                <input type="range" min="25000" max="250000" step="5000" value={dwellingCoverage} onChange={(e) => setDwellingCoverage(Number(e.target.value))} className="w-full" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Personal Property: ${propertyValue.toLocaleString()}</label>
                                <input type="range" min="10000" max="100000" step="5000" value={propertyValue} onChange={(e) => setPropertyValue(Number(e.target.value))} className="w-full" />
                            </div>
                        </div>

                        <button onClick={calculatePremium} disabled={!homeValue} className="w-full mt-6 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
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
                            <p className="text-xs text-slate-500 mt-4">*Based on 2026 manufactured home insurance data</p>
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
