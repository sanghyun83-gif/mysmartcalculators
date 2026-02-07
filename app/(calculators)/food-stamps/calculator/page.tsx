"use client";

import { useState } from "react";
import Link from "next/link";
import { Apple, Calculator, ArrowRight, DollarSign } from "lucide-react";
import { SITE, FAQS, BENEFIT_AMOUNTS } from "@/lib/calculators/food-stamps";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function FoodStampsCalculatorPage() {
    const [grossIncome, setGrossIncome] = useState(2000);
    const [householdSize, setHouseholdSize] = useState(3);
    const [hasDeductions, setHasDeductions] = useState(true);
    const [result, setResult] = useState<null | { eligible: boolean; benefit: number; maxBenefit: number }>(null);

    const calculateBenefit = () => {
        const data = BENEFIT_AMOUNTS.find(b => b.householdSize === householdSize) || BENEFIT_AMOUNTS[2];

        // Check gross income limit
        if (grossIncome > data.grossLimit) {
            setResult({ eligible: false, benefit: 0, maxBenefit: data.maxBenefit });
            return;
        }

        // Calculate net income
        const earnedIncomeDeduction = grossIncome * 0.20;
        const standardDeduction = 198;
        const netIncome = hasDeductions
            ? Math.max(0, grossIncome - earnedIncomeDeduction - standardDeduction)
            : grossIncome;

        // Benefit = Max - 30% of net income
        const benefit = Math.max(0, Math.round(data.maxBenefit - (netIncome * 0.30)));

        setResult({ eligible: true, benefit, maxBenefit: data.maxBenefit });
    };

    return (
        <>


            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
                            <Apple className="w-4 h-4 text-blue-400" />
                            <span className="text-sm text-blue-300">{SITE.year} Calculator</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">Food Stamps Calculator</h1>
                        <p className="text-slate-400">Estimate your monthly food stamp benefit</p>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Monthly Gross Income: ${grossIncome.toLocaleString()}</label>
                                <input type="range" min="0" max="5000" step="100" value={grossIncome} onChange={(e) => setGrossIncome(Number(e.target.value))} className="w-full" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Household Size: {householdSize}</label>
                                <input type="range" min="1" max="6" step="1" value={householdSize} onChange={(e) => setHouseholdSize(Number(e.target.value))} className="w-full" />
                            </div>

                            <div className="flex items-center gap-3">
                                <input type="checkbox" id="deductions" checked={hasDeductions} onChange={(e) => setHasDeductions(e.target.checked)} className="w-4 h-4" />
                                <label htmlFor="deductions" className="text-sm text-slate-300">Apply standard deductions</label>
                            </div>
                        </div>

                        <button onClick={calculateBenefit} className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
                            <DollarSign className="w-5 h-5" /> Calculate Benefits
                        </button>
                    </div>

                    {result && (
                        <div className={`${result.eligible ? "bg-blue-900/30 border-blue-500/50" : "bg-red-900/30 border-red-500/50"} border rounded-xl p-6 mb-8`}>
                            <h2 className="text-xl font-bold text-white mb-4">Estimated Food Stamps</h2>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-xl font-bold text-white">${result.maxBenefit}</div>
                                    <div className="text-sm text-slate-400">Max Benefit</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className={`text-2xl font-bold ${result.eligible ? "text-blue-400" : "text-red-400"}`}>
                                        ${result.benefit}/mo
                                    </div>
                                    <div className="text-sm text-slate-400">Your Estimate</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className={`text-xl font-bold ${result.eligible ? "text-green-400" : "text-red-400"}`}>
                                        {result.eligible ? "Eligible" : "Over Limit"}
                                    </div>
                                    <div className="text-sm text-slate-400">Status</div>
                                </div>
                            </div>
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
