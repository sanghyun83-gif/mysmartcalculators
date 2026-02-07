"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calculator, Shield, Info } from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import {
    SITE,
    INSURANCE_CONSTANTS,
    calculateCoverage,
    formatCurrency,
    parseFormattedNumber,
    CoverageResult
} from "@/lib/calculators/life-insurance";

export default function CoverageCalculatorPage() {
    const { defaults, coverageMultiplier } = INSURANCE_CONSTANTS;
    const [annualIncome, setAnnualIncome] = useState("75,000");
    const [incomeYears, setIncomeYears] = useState("10");
    const [debts, setDebts] = useState("200,000");
    const [children, setChildren] = useState("2");
    const [existingSavings, setExistingSavings] = useState("50,000");
    const [existingInsurance, setExistingInsurance] = useState("0");
    const [result, setResult] = useState<CoverageResult | null>(null);

    const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const raw = e.target.value.replace(/[^0-9]/g, "");
            if (raw === "") { setter(""); return; }
            setter(parseInt(raw).toLocaleString("en-US"));
        };

    const handleCalculate = () => {
        const income = parseFormattedNumber(annualIncome) || defaults.income;
        const years = parseInt(incomeYears) || 10;
        const debt = parseFormattedNumber(debts);
        const numChildren = parseInt(children) || 0;
        const savings = parseFormattedNumber(existingSavings);
        const existing = parseFormattedNumber(existingInsurance);
        setResult(calculateCoverage(income, years, debt, numChildren, 10, savings, existing));
    };

    return (
        <>
            <main className="max-w-2xl mx-auto px-4 py-8">
                {/* Calculator Card */}
                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                    <h1 className="text-xl font-bold text-slate-800 mb-2">
                        How Much Life Insurance Do You Need?
                    </h1>
                    <p className="text-sm text-slate-500 mb-6">
                        Calculate your coverage based on income, debts, and family needs
                    </p>

                    {/* Inputs */}
                    <div className="space-y-5 mb-6">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Annual Income</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input type="text" value={annualIncome} onChange={handleInputChange(setAnnualIncome)} placeholder="75,000"
                                    className="w-full pl-8 pr-4 py-3 text-lg border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Years of Income to Replace</label>
                            <div className="grid grid-cols-4 gap-2">
                                {[5, 10, 15, 20].map((years) => (
                                    <button
                                        key={years}
                                        onClick={() => setIncomeYears(years.toString())}
                                        className={`py-3 rounded-lg font-semibold transition-colors ${incomeYears === years.toString()
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                            }`}
                                    >
                                        {years} yrs
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Outstanding Debts (mortgage, loans)</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input type="text" value={debts} onChange={handleInputChange(setDebts)} placeholder="200,000"
                                    className="w-full pl-8 pr-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Number of Children</label>
                            <input type="number" value={children} onChange={(e) => setChildren(e.target.value)} min="0" max="10"
                                className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Existing Savings & Investments</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input type="text" value={existingSavings} onChange={handleInputChange(setExistingSavings)} placeholder="50,000"
                                    className="w-full pl-8 pr-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Existing Life Insurance</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input type="text" value={existingInsurance} onChange={handleInputChange(setExistingInsurance)} placeholder="0"
                                    className="w-full pl-8 pr-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                            </div>
                        </div>
                    </div>

                    {/* Calculate Button */}
                    <button
                        onClick={handleCalculate}
                        className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-2 shadow-md"
                    >
                        <Shield className="w-5 h-5" />
                        Calculate Coverage
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                        {/* Recommended Coverage */}
                        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 text-center">
                            <p className="text-sm text-blue-100 mb-1">Recommended Coverage</p>
                            <p className="text-4xl md:text-5xl font-bold">{formatCurrency(result.recommendedCoverage)}</p>
                        </div>

                        {/* Breakdown */}
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
                                How We Calculated This
                            </h3>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-100">
                                    <span className="text-slate-600">Income Replacement ({result.incomeYears} years)</span>
                                    <span className="font-medium text-slate-800">{formatCurrency(result.incomeCoverage)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-100">
                                    <span className="text-slate-600">Outstanding Debts</span>
                                    <span className="font-medium text-slate-800">{formatCurrency(result.outstandingDebts)}</span>
                                </div>
                                {result.childrenCoverage > 0 && (
                                    <div className="flex justify-between py-2 border-b border-slate-100">
                                        <span className="text-slate-600">Children&apos;s Expenses</span>
                                        <span className="font-medium text-slate-800">{formatCurrency(result.childrenCoverage)}</span>
                                    </div>
                                )}
                                {result.collegeCoverage > 0 && (
                                    <div className="flex justify-between py-2 border-b border-slate-100">
                                        <span className="text-slate-600">College Fund</span>
                                        <span className="font-medium text-slate-800">{formatCurrency(result.collegeCoverage)}</span>
                                    </div>
                                )}
                                <div className="flex justify-between py-2 border-b border-slate-100">
                                    <span className="text-slate-600">Final Expenses</span>
                                    <span className="font-medium text-slate-800">{formatCurrency(result.funeralCost)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-100">
                                    <span className="text-slate-600">Less: Existing Savings</span>
                                    <span className="font-medium text-green-600">-{formatCurrency(result.existingSavings)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-100">
                                    <span className="text-slate-600">Less: Existing Insurance</span>
                                    <span className="font-medium text-green-600">-{formatCurrency(result.existingInsurance)}</span>
                                </div>
                                <div className="flex justify-between py-3 bg-blue-50 rounded-lg px-3">
                                    <span className="font-semibold text-slate-800">Total Coverage Needed</span>
                                    <span className="font-bold text-blue-600">{formatCurrency(result.recommendedCoverage)}</span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Rule */}
                        <div className="p-4 bg-amber-50 border-t border-amber-200">
                            <div className="flex items-start gap-2">
                                <Info className="w-5 h-5 text-amber-600 mt-0.5" />
                                <p className="text-sm text-amber-800">
                                    <strong>Quick Rule:</strong> Most experts recommend {coverageMultiplier.minimum}-{coverageMultiplier.maximum}x your annual income.
                                    For you, that&apos;s {formatCurrency(result.annualIncome * coverageMultiplier.minimum)} to {formatCurrency(result.annualIncome * coverageMultiplier.maximum)}.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Ad Placeholder */}
                <div className="my-8 p-6 bg-white border border-slate-200 rounded-xl text-center shadow-sm">
                    <p className="text-sm text-slate-400">Advertisement</p>
                </div>

                {/* Links */}
                <div className="grid grid-cols-2 gap-4">
                    <Link href="/life-insurance/premium" className="bg-white border border-slate-200 rounded-lg p-4 text-center hover:border-blue-500 transition-colors">
                        <p className="text-sm font-medium text-slate-600">Estimate Premium →</p>
                    </Link>
                    <Link href="/life-insurance/term-vs-whole" className="bg-white border border-slate-200 rounded-lg p-4 text-center hover:border-blue-500 transition-colors">
                        <p className="text-sm font-medium text-slate-600">Term vs Whole Life →</p>
                    </Link>
                </div>
                <LegalDisclaimer category="insurance" />
            </main>
        </>
    );
}
