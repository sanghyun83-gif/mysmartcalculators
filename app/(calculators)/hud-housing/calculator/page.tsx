"use client";

import { useState } from "react";
import Link from "next/link";
import { Building, Calculator, ArrowRight, DollarSign } from "lucide-react";
import { SITE, FAQS, INCOME_LIMITS } from "@/lib/calculators/hud-housing";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function HudHousingCalculatorPage() {
    const [income, setIncome] = useState(2500);
    const [householdSize, setHouseholdSize] = useState(3);
    const [dependents, setDependents] = useState(1);
    const [result, setResult] = useState<null | { eligible: boolean; rent: number; category: string; limit: number }>(null);

    const calculateRent = () => {
        const data = INCOME_LIMITS.find(l => l.householdSize === householdSize) || INCOME_LIMITS[2];
        const annualIncome = income * 12;

        // Determine category
        let category = "Over Income";
        let eligible = false;
        if (annualIncome <= data.extremelyLow) {
            category = "Extremely Low";
            eligible = true;
        } else if (annualIncome <= data.veryLow) {
            category = "Very Low";
            eligible = true;
        } else if (annualIncome <= data.lowIncome) {
            category = "Low Income";
            eligible = true;
        }

        // 30% of adjusted income (with dependent deduction)
        const dependentDeduction = dependents * 480 / 12; // Monthly
        const adjustedIncome = Math.max(0, income - dependentDeduction);
        const rent = Math.max(25, Math.round(adjustedIncome * 0.30));

        setResult({ eligible, rent, category, limit: data.lowIncome });
    };

    return (
        <>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
                            <Building className="w-4 h-4 text-blue-400" />
                            <span className="text-sm text-blue-300">{SITE.year} Calculator</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">HUD Public Housing Calculator</h1>
                        <p className="text-slate-400">Estimate your eligibility and rent payment</p>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Monthly Gross Income: ${income.toLocaleString()}</label>
                                <input type="range" min="0" max="7000" step="100" value={income} onChange={(e) => setIncome(Number(e.target.value))} className="w-full" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Household Size: {householdSize}</label>
                                <input type="range" min="1" max="6" step="1" value={householdSize} onChange={(e) => setHouseholdSize(Number(e.target.value))} className="w-full" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Number of Dependents: {dependents}</label>
                                <input type="range" min="0" max="5" step="1" value={dependents} onChange={(e) => setDependents(Number(e.target.value))} className="w-full" />
                            </div>
                        </div>

                        <button onClick={calculateRent} className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
                            <DollarSign className="w-5 h-5" /> Calculate Rent
                        </button>
                    </div>

                    {result && (
                        <div className={`${result.eligible ? "bg-blue-900/30 border-blue-500/50" : "bg-red-900/30 border-red-500/50"} border rounded-xl p-6 mb-8`}>
                            <h2 className="text-xl font-bold text-white mb-4">Public Housing Estimate</h2>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-xl font-bold text-white">{result.category}</div>
                                    <div className="text-sm text-slate-400">Income Category</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-2xl font-bold text-blue-400">${result.rent}/mo</div>
                                    <div className="text-sm text-slate-400">Est. Rent (30%)</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className={`text-xl font-bold ${result.eligible ? "text-green-400" : "text-red-400"}`}>
                                        {result.eligible ? "Eligible" : "Over Limit"}
                                    </div>
                                    <div className="text-sm text-slate-400">Status</div>
                                </div>
                            </div>
                            <p className="text-sm text-slate-400 mt-4 text-center">80% AMI limit: ${result.limit.toLocaleString()}/year</p>
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

            <footer className="bg-slate-800 border-t border-slate-700 py-6">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <p className="text-xs text-slate-500">© {SITE.year} MySmartCalculators. Based on HUD guidelines.</p>
                </div>
            </footer>
        </>
    );
}
