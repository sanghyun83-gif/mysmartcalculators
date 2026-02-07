"use client";

import { useState } from "react";
import Link from "next/link";
import { Baby, Calculator, ArrowRight, DollarSign } from "lucide-react";
import { SITE, FAQS, INCOME_LIMITS } from "@/lib/calculators/child-care-subsidy";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function ChildCareSubsidyCalculatorPage() {
    const [income, setIncome] = useState(4000);
    const [familySize, setFamilySize] = useState(3);
    const [careCost, setCareCost] = useState(1200);
    const [result, setResult] = useState<null | { eligible: boolean; copay: number; subsidy: number; limit: number }>(null);

    const calculateSubsidy = () => {
        const data = INCOME_LIMITS.find(l => l.familySize === familySize) || INCOME_LIMITS[1];
        const eligible = income <= data.monthlyLimit;

        if (!eligible) {
            setResult({ eligible: false, copay: 0, subsidy: 0, limit: data.annualLimit });
            return;
        }

        // Copay is 7% of income (federal max), capped at $200
        const copayPercent = income < (data.monthlyLimit * 0.5) ? 0.03 : 0.07;
        const copay = Math.min(200, Math.round(income * copayPercent));
        const subsidy = Math.max(0, careCost - copay);

        setResult({ eligible: true, copay, subsidy, limit: data.annualLimit });
    };

    return (
        <>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-rose-500/20 border border-rose-500/50 rounded-full px-4 py-2 mb-4">
                            <Baby className="w-4 h-4 text-rose-400" />
                            <span className="text-sm text-rose-300">{SITE.year} Calculator</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">Child Care Subsidy Calculator</h1>
                        <p className="text-slate-400">Estimate your copay and subsidy amount</p>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Monthly Gross Income: ${income.toLocaleString()}</label>
                                <input type="range" min="0" max="8000" step="100" value={income} onChange={(e) => setIncome(Number(e.target.value))} className="w-full" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Family Size: {familySize}</label>
                                <input type="range" min="2" max="6" step="1" value={familySize} onChange={(e) => setFamilySize(Number(e.target.value))} className="w-full" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Monthly Child Care Cost: ${careCost.toLocaleString()}</label>
                                <input type="range" min="500" max="3000" step="100" value={careCost} onChange={(e) => setCareCost(Number(e.target.value))} className="w-full" />
                            </div>
                        </div>

                        <button onClick={calculateSubsidy} className="w-full mt-6 bg-rose-600 hover:bg-rose-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
                            <DollarSign className="w-5 h-5" /> Calculate Subsidy
                        </button>
                    </div>

                    {result && (
                        <div className={`${result.eligible ? "bg-rose-900/30 border-rose-500/50" : "bg-red-900/30 border-red-500/50"} border rounded-xl p-6 mb-8`}>
                            <h2 className="text-xl font-bold text-white mb-4">Child Care Subsidy Estimate</h2>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-xl font-bold text-white">${result.copay}/mo</div>
                                    <div className="text-sm text-slate-400">Your Copay</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-2xl font-bold text-rose-400">${result.subsidy}/mo</div>
                                    <div className="text-sm text-slate-400">Subsidy Covers</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className={`text-xl font-bold ${result.eligible ? "text-green-400" : "text-red-400"}`}>
                                        {result.eligible ? "Eligible" : "Over Limit"}
                                    </div>
                                    <div className="text-sm text-slate-400">Status</div>
                                </div>
                            </div>
                            <p className="text-sm text-slate-400 mt-4 text-center">Income limit: ${result.limit.toLocaleString()}/year (85% SMI)</p>
                        </div>
                    )}

                    <LegalDisclaimer category="family" />
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
