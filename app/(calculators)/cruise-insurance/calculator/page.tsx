"use client";

import { useState } from "react";
import Link from "next/link";
import { Ship, Calculator, ArrowRight, DollarSign } from "lucide-react";
import { SITE, CRUISE_TYPES, FAQS } from "@/lib/calculators/cruise-insurance";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function CruiseInsuranceCalculatorPage() {
    const [cruiseType, setCruiseType] = useState("");
    const [cruiseCost, setCruiseCost] = useState(4000);
    const [includeMedEvac, setIncludeMedEvac] = useState(true);
    const [result, setResult] = useState<null | { premium: number; medEvac: string }>(null);

    const calculatePremium = () => {
        const type = CRUISE_TYPES.find(t => t.id === cruiseType);
        if (!type) return;

        const baseRate = cruiseCost * 0.065; // 6.5% avg
        const medEvacAdjust = includeMedEvac ? 1.2 : 1.0; // +20% for enhanced med evac
        const premium = Math.round(baseRate * type.factor * medEvacAdjust);
        const medEvac = includeMedEvac ? "$150,000" : "$50,000";

        setResult({ premium, medEvac });
    };

    return (
        <>


            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
                            <Ship className="w-4 h-4 text-blue-400" />
                            <span className="text-sm text-blue-300">{SITE.year} Calculator</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">Cruise Insurance Calculator</h1>
                        <p className="text-slate-400">Estimate your cruise coverage costs</p>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Cruise Destination</label>
                                <select value={cruiseType} onChange={(e) => setCruiseType(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">
                                    <option value="">Select destination...</option>
                                    {CRUISE_TYPES.map((t) => (<option key={t.id} value={t.id}>{t.name}</option>))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Cruise Cost: ${cruiseCost.toLocaleString()}</label>
                                <input type="range" min="1000" max="30000" step="500" value={cruiseCost} onChange={(e) => setCruiseCost(Number(e.target.value))} className="w-full" />
                            </div>

                            <div>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" checked={includeMedEvac} onChange={(e) => setIncludeMedEvac(e.target.checked)} className="rounded bg-slate-700 border-slate-600" />
                                    <span className="text-slate-300">Enhanced medical evacuation +20%</span>
                                </label>
                            </div>
                        </div>

                        <button onClick={calculatePremium} disabled={!cruiseType} className="w-full mt-6 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
                            <DollarSign className="w-5 h-5" /> Calculate Premium
                        </button>
                    </div>

                    {result && (
                        <div className="bg-blue-900/30 border border-blue-500/50 rounded-xl p-6 mb-8">
                            <h2 className="text-xl font-bold text-white mb-4">Estimated Premium</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-3xl font-bold text-blue-400">${result.premium}</div>
                                    <div className="text-sm text-slate-400">One-Trip Premium</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-3xl font-bold text-white">{result.medEvac}</div>
                                    <div className="text-sm text-slate-400">Med Evac Limit</div>
                                </div>
                            </div>
                            <p className="text-xs text-slate-500 mt-4">*Includes cancellation + medical + interruption (2026 rates)</p>
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
