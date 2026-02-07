"use client";

import { useState } from "react";
import Link from "next/link";
import { Flame, Calculator, ArrowRight, DollarSign } from "lucide-react";
import { SITE, FAQS, INCOME_LIMITS } from "@/lib/calculators/liheap";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function LiheapCalculatorPage() {
    const [income, setIncome] = useState(2500);
    const [householdSize, setHouseholdSize] = useState(3);
    const [monthlyEnergy, setMonthlyEnergy] = useState(200);
    const [result, setResult] = useState<null | { eligible: boolean; estBenefit: number; limit: number }>(null);

    const calculateBenefit = () => {
        const data = INCOME_LIMITS.find(l => l.householdSize === householdSize) || INCOME_LIMITS[2];
        const eligible = income <= data.monthlyLimit;

        // Estimate benefit based on energy burden
        const energyBurden = monthlyEnergy / Math.max(1, income);
        let estBenefit = 0;

        if (eligible) {
            // Higher burden = higher benefit
            if (energyBurden > 0.10) {
                estBenefit = Math.min(1000, Math.round(monthlyEnergy * 3));
            } else if (energyBurden > 0.06) {
                estBenefit = Math.min(600, Math.round(monthlyEnergy * 2));
            } else {
                estBenefit = Math.min(400, Math.round(monthlyEnergy * 1.5));
            }
        }

        setResult({ eligible, estBenefit, limit: data.annualLimit });
    };

    return (
        <>
            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
                            <Flame className="w-4 h-4 text-blue-400" />
                            <span className="text-sm text-blue-300">{SITE.year} Calculator</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">LIHEAP Benefit Calculator</h1>
                        <p className="text-slate-400">Estimate your energy assistance benefit</p>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Monthly Gross Income: ${income.toLocaleString()}</label>
                                <input type="range" min="0" max="6000" step="100" value={income} onChange={(e) => setIncome(Number(e.target.value))} className="w-full" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Household Size: {householdSize}</label>
                                <input type="range" min="1" max="6" step="1" value={householdSize} onChange={(e) => setHouseholdSize(Number(e.target.value))} className="w-full" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Monthly Energy Bill: ${monthlyEnergy}</label>
                                <input type="range" min="50" max="500" step="10" value={monthlyEnergy} onChange={(e) => setMonthlyEnergy(Number(e.target.value))} className="w-full" />
                            </div>
                        </div>

                        <button onClick={calculateBenefit} className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
                            <DollarSign className="w-5 h-5" /> Calculate Benefit
                        </button>
                    </div>

                    {result && (
                        <div className={`${result.eligible ? "bg-blue-900/30 border-blue-500/50" : "bg-red-900/30 border-red-500/50"} border rounded-xl p-6 mb-8`}>
                            <h2 className="text-xl font-bold text-white mb-4">LIHEAP Estimate</h2>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-xl font-bold text-white">${result.limit.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">Annual Limit</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-2xl font-bold text-blue-400">${result.estBenefit}/yr</div>
                                    <div className="text-sm text-slate-400">Est. Benefit</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className={`text-xl font-bold ${result.eligible ? "text-green-400" : "text-red-400"}`}>
                                        {result.eligible ? "Eligible" : "Over Limit"}
                                    </div>
                                    <div className="text-sm text-slate-400">Status</div>
                                </div>
                            </div>
                            {result.eligible && <p className="text-sm text-blue-400 mt-4 text-center">Benefits paid directly to your utility company</p>}
                        </div>
                    )}

                    <LegalDisclaimer category="finance" />
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
