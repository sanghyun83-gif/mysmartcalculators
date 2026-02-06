"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Users, Info } from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import {
    SITE,
    calculateFamilyNeeds,
    formatCurrency,
    parseFormattedNumber,
    FamilyNeedsResult
} from "@/lib/calculators/life-insurance";

export default function FamilyNeedsPage() {
    const [mortgage, setMortgage] = useState("250,000");
    const [otherDebts, setOtherDebts] = useState("30,000");
    const [income, setIncome] = useState("75,000");
    const [incomeYears, setIncomeYears] = useState("10");
    const [children, setChildren] = useState("2");
    const [avgChildAge, setAvgChildAge] = useState("8");
    const [existingCoverage, setExistingCoverage] = useState("100,000");
    const [result, setResult] = useState<FamilyNeedsResult | null>(null);

    const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const raw = e.target.value.replace(/[^0-9]/g, "");
            if (raw === "") { setter(""); return; }
            setter(parseInt(raw).toLocaleString("en-US"));
        };

    const handleCalculate = () => {
        const mortgageAmt = parseFormattedNumber(mortgage);
        const debts = parseFormattedNumber(otherDebts);
        const incomeAmt = parseFormattedNumber(income);
        const years = parseInt(incomeYears) || 10;
        const numChildren = parseInt(children) || 0;
        const childAge = parseInt(avgChildAge) || 8;
        const existing = parseFormattedNumber(existingCoverage);
        setResult(calculateFamilyNeeds(mortgageAmt, debts, incomeAmt, years, numChildren, childAge, existing));
    };

    return (
        <>
            <main className="max-w-2xl mx-auto px-4 py-8">
                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                    <h1 className="text-xl font-bold text-slate-800 mb-2">Calculate Coverage for Your Family</h1>
                    <p className="text-sm text-slate-500 mb-6">Factor in all your family&apos;s needs and obligations</p>

                    <div className="space-y-4 mb-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Mortgage Balance</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">$</span>
                                    <input type="text" value={mortgage} onChange={handleInputChange(setMortgage)}
                                        className="w-full pl-7 pr-3 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Other Debts</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">$</span>
                                    <input type="text" value={otherDebts} onChange={handleInputChange(setOtherDebts)}
                                        className="w-full pl-7 pr-3 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Annual Income</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">$</span>
                                    <input type="text" value={income} onChange={handleInputChange(setIncome)}
                                        className="w-full pl-7 pr-3 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Years to Replace</label>
                                <input type="number" value={incomeYears} onChange={(e) => setIncomeYears(e.target.value)}
                                    className="w-full px-3 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Number of Children</label>
                                <input type="number" value={children} onChange={(e) => setChildren(e.target.value)} min="0"
                                    className="w-full px-3 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Avg Child Age</label>
                                <input type="number" value={avgChildAge} onChange={(e) => setAvgChildAge(e.target.value)} min="0" max="18"
                                    className="w-full px-3 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Existing Life Insurance</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">$</span>
                                <input type="text" value={existingCoverage} onChange={handleInputChange(setExistingCoverage)}
                                    className="w-full pl-7 pr-3 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                            </div>
                        </div>
                    </div>

                    <button onClick={handleCalculate}
                        className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold flex items-center justify-center gap-2">
                        <Users className="w-5 h-5" />
                        Calculate Family Needs
                    </button>
                </div>

                {result && (
                    <div className="mt-6 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 text-center">
                            <p className="text-sm text-blue-100 mb-1">Additional Coverage Needed</p>
                            <p className="text-4xl font-bold">{formatCurrency(result.recommendedCoverage)}</p>
                        </div>

                        <div className="p-6 space-y-3 text-sm">
                            <h4 className="font-semibold text-slate-600 uppercase text-xs tracking-wider">Breakdown</h4>
                            <div className="flex justify-between py-2 border-b border-slate-100">
                                <span>Mortgage</span>
                                <span className="font-medium">{formatCurrency(result.mortgageBalance)}</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-slate-100">
                                <span>Other Debts</span>
                                <span className="font-medium">{formatCurrency(result.otherDebts)}</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-slate-100">
                                <span>Income Replacement ({result.incomeReplacementYears} yrs)</span>
                                <span className="font-medium">{formatCurrency(result.annualIncome * result.incomeReplacementYears)}</span>
                            </div>
                            {result.collegeFund > 0 && (
                                <div className="flex justify-between py-2 border-b border-slate-100">
                                    <span>College Fund ({result.numberOfChildren} children)</span>
                                    <span className="font-medium">{formatCurrency(result.collegeFund)}</span>
                                </div>
                            )}
                            <div className="flex justify-between py-2 border-b border-slate-100">
                                <span>Emergency Fund</span>
                                <span className="font-medium">{formatCurrency(result.emergencyFund)}</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-slate-100">
                                <span>Final Expenses</span>
                                <span className="font-medium">{formatCurrency(result.funeralCosts)}</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-slate-100 text-green-600">
                                <span>Less: Existing Coverage</span>
                                <span className="font-medium">-{formatCurrency(result.existingCoverage)}</span>
                            </div>
                            <div className="flex justify-between py-3 bg-blue-50 rounded-lg px-3">
                                <span className="font-semibold">Additional Needed</span>
                                <span className="font-bold text-blue-600">{formatCurrency(result.recommendedCoverage)}</span>
                            </div>
                        </div>
                    </div>
                )}

                <div className="my-8 p-6 bg-white border border-slate-200 rounded-xl text-center">
                    <p className="text-sm text-slate-400">Advertisement</p>
                </div>

                <div className="text-center">
                    <Link href="/life-insurance/premium" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">
                        Get Premium Estimate  →</Link>
                </div>
                <LegalDisclaimer category="insurance" />
            </main>
        </>
    );
}
