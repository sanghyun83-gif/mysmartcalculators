"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, DollarSign, Info } from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import {
    SITE,
    INSURANCE_CONSTANTS,
    estimatePremium,
    formatCurrency,
    parseFormattedNumber,
    PremiumResult
} from "@/lib/calculators/life-insurance";

export default function PremiumPage() {
    const { defaults, healthClasses, termLengths } = INSURANCE_CONSTANTS;
    const [age, setAge] = useState("35");
    const [healthClass, setHealthClass] = useState("preferred");
    const [coverage, setCoverage] = useState("500,000");
    const [termLength, setTermLength] = useState(20);
    const [result, setResult] = useState<PremiumResult | null>(null);

    const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const raw = e.target.value.replace(/[^0-9]/g, "");
            if (raw === "") { setter(""); return; }
            setter(parseInt(raw).toLocaleString("en-US"));
        };

    const handleCalculate = () => {
        const ageNum = parseInt(age) || 35;
        const coverageAmt = parseFormattedNumber(coverage) || 500000;
        setResult(estimatePremium(ageNum, healthClass, coverageAmt, termLength));
    };

    return (
        <>
            <main className="max-w-2xl mx-auto px-4 py-8">
                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                    <h1 className="text-xl font-bold text-slate-800 mb-2">Estimate Your Premium</h1>
                    <p className="text-sm text-slate-500 mb-6">{SITE.year} rates based on age, health, and coverage</p>

                    <div className="space-y-5 mb-6">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Your Age</label>
                            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} min="18" max="70"
                                className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Health Class</label>
                            <div className="space-y-2">
                                {healthClasses.map((hc) => (
                                    <button
                                        key={hc.id}
                                        onClick={() => setHealthClass(hc.id)}
                                        className={`w-full text-left p-3 rounded-lg border-2 transition-colors ${healthClass === hc.id
                                            ? 'border-blue-500 bg-blue-50'
                                            : 'border-slate-200 hover:border-slate-300'
                                            }`}
                                    >
                                        <span className="font-semibold text-slate-800">{hc.name}</span>
                                        <p className="text-xs text-slate-500 mt-0.5">{hc.description}</p>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Coverage Amount</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input type="text" value={coverage} onChange={handleInputChange(setCoverage)}
                                    className="w-full pl-8 pr-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Term Length</label>
                            <div className="grid grid-cols-5 gap-2">
                                {termLengths.map((term) => (
                                    <button
                                        key={term}
                                        onClick={() => setTermLength(term)}
                                        className={`py-3 rounded-lg font-semibold text-sm transition-colors ${termLength === term
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                            }`}
                                    >
                                        {term} yr
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <button onClick={handleCalculate}
                        className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold flex items-center justify-center gap-2">
                        <DollarSign className="w-5 h-5" />
                        Get Estimate
                    </button>
                </div>

                {result && (
                    <div className="mt-6 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 text-center">
                            <p className="text-sm text-blue-100 mb-1">Estimated Monthly Premium</p>
                            <p className="text-5xl font-bold">{formatCurrency(result.monthlyPremium)}</p>
                            <p className="text-blue-200 text-sm mt-1">per month</p>
                        </div>

                        <div className="p-6 space-y-3 text-sm">
                            <div className="flex justify-between py-2 border-b border-slate-100">
                                <span>Coverage</span>
                                <span className="font-medium">{formatCurrency(result.coverageAmount)}</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-slate-100">
                                <span>Term</span>
                                <span className="font-medium">{result.termLength} years</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-slate-100">
                                <span>Health Class</span>
                                <span className="font-medium">{result.healthClassName}</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-slate-100">
                                <span>Annual Premium</span>
                                <span className="font-medium">{formatCurrency(result.annualPremium)}</span>
                            </div>
                            <div className="flex justify-between py-2">
                                <span>Total Premium ({result.termLength} years)</span>
                                <span className="font-bold text-slate-800">{formatCurrency(result.totalPremiumCost)}</span>
                            </div>
                        </div>

                        <div className="p-4 bg-blue-50 border-t border-blue-200">
                            <div className="flex items-start gap-2">
                                <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                                <p className="text-sm text-blue-800">
                                    This is an estimate only. Actual premiums depend on medical exams, lifestyle factors, and the insurance company.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                <div className="my-8 p-6 bg-white border border-slate-200 rounded-xl text-center">
                    <p className="text-sm text-slate-400">Advertisement</p>
                </div>
                <LegalDisclaimer category="insurance" />
            </main>
        </>
    );
}
