"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calculator, Home, DollarSign, AlertCircle, Info } from "lucide-react";
import {
    SITE,
    MORTGAGE_CONSTANTS,
    calculateMortgage,
    formatCurrency,
    parseFormattedNumber,
    MortgageResult
} from "@/lib/calculators/mortgage";

export default function MortgageCalculatorPage() {
    const { defaults, loanTerms } = MORTGAGE_CONSTANTS;
    const [homePrice, setHomePrice] = useState("400,000");
    const [downPayment, setDownPayment] = useState("80,000");
    const [interestRate, setInterestRate] = useState(defaults.interestRate.toString());
    const [loanTerm, setLoanTerm] = useState(30);
    const [propertyTax, setPropertyTax] = useState(defaults.propertyTaxRate.toString());
    const [insurance, setInsurance] = useState(defaults.homeInsuranceYear.toString());
    const [result, setResult] = useState<MortgageResult | null>(null);

    const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const raw = e.target.value.replace(/[^0-9]/g, "");
            if (raw === "") {
                setter("");
                return;
            }
            setter(parseInt(raw).toLocaleString("en-US"));
        };

    const handleCalculate = () => {
        const hp = parseFormattedNumber(homePrice) || defaults.homePrice;
        const dp = parseFormattedNumber(downPayment) || hp * 0.2;
        const rate = parseFloat(interestRate) || defaults.interestRate;
        const tax = parseFloat(propertyTax) || defaults.propertyTaxRate;
        const ins = parseFormattedNumber(insurance) || defaults.homeInsuranceYear;

        setResult(calculateMortgage(hp, dp, rate, loanTerm, tax, ins));
    };

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header */}
            <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
                <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/mortgage" className="text-slate-400 hover:text-blue-600 transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <Calculator className="w-5 h-5 text-blue-600" />
                        <span className="text-lg font-bold text-slate-800">Mortgage Calculator</span>
                    </div>
                    <span className="ml-auto text-xs text-white bg-blue-600 px-2 py-1 rounded-full font-bold">
                        {SITE.year}
                    </span>
                </div>
            </header>

            <main className="max-w-2xl mx-auto px-4 py-8">
                {/* Calculator Card */}
                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                    <h1 className="text-xl font-bold text-slate-800 mb-2">
                        Mortgage Payment Calculator
                    </h1>
                    <p className="text-sm text-slate-500 mb-6">
                        Calculate your monthly payment including taxes and insurance
                    </p>

                    {/* Inputs */}
                    <div className="space-y-5 mb-6">
                        {/* Home Price */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Home Price
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                                <input
                                    type="text"
                                    value={homePrice}
                                    onChange={handleInputChange(setHomePrice)}
                                    placeholder="400,000"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-white border-2 border-slate-300 rounded-lg text-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>

                        {/* Down Payment */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Down Payment
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                                <input
                                    type="text"
                                    value={downPayment}
                                    onChange={handleInputChange(setDownPayment)}
                                    placeholder="80,000"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-white border-2 border-slate-300 rounded-lg text-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <p className="text-xs text-slate-400 mt-1">
                                {parseFormattedNumber(homePrice) > 0
                                    ? `${((parseFormattedNumber(downPayment) / parseFormattedNumber(homePrice)) * 100).toFixed(1)}% of home price`
                                    : "20% recommended to avoid PMI"}
                            </p>
                        </div>

                        {/* Interest Rate */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Interest Rate (%)
                            </label>
                            <input
                                type="number"
                                step="0.125"
                                value={interestRate}
                                onChange={(e) => setInterestRate(e.target.value)}
                                placeholder="6.5"
                                className="w-full px-4 py-3 bg-white border-2 border-slate-300 rounded-lg text-slate-800 focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Loan Term */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Loan Term
                            </label>
                            <div className="grid grid-cols-3 gap-2">
                                {loanTerms.map((term) => (
                                    <button
                                        key={term.years}
                                        onClick={() => setLoanTerm(term.years)}
                                        className={`py-3 rounded-lg font-semibold text-sm transition-colors ${loanTerm === term.years
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                            }`}
                                    >
                                        {term.years} years
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Property Tax */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Property Tax Rate (% per year)
                            </label>
                            <input
                                type="number"
                                step="0.1"
                                value={propertyTax}
                                onChange={(e) => setPropertyTax(e.target.value)}
                                placeholder="1.2"
                                className="w-full px-4 py-3 bg-white border-2 border-slate-300 rounded-lg text-slate-800 focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Home Insurance */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Home Insurance (per year)
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                                <input
                                    type="text"
                                    value={insurance}
                                    onChange={handleInputChange(setInsurance)}
                                    placeholder="1,800"
                                    className="w-full pl-8 pr-4 py-3 bg-white border-2 border-slate-300 rounded-lg text-slate-800 focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Calculate Button */}
                    <button
                        onClick={handleCalculate}
                        className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-2 shadow-md"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate Payment
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                        {/* Monthly Payment */}
                        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
                            <p className="text-sm text-blue-100 mb-1">Monthly Payment</p>
                            <p className="text-5xl font-bold">{formatCurrency(result.totalMonthlyPayment)}</p>
                            <p className="text-blue-200 text-sm mt-2">per month</p>
                        </div>

                        {/* Payment Breakdown */}
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
                                Monthly Breakdown
                            </h3>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-100">
                                    <span className="text-slate-600">Principal & Interest</span>
                                    <span className="font-bold text-slate-800">{formatCurrency(result.monthlyPI)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-100">
                                    <span className="text-slate-600">Property Tax</span>
                                    <span className="font-medium text-slate-800">{formatCurrency(result.monthlyTax)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-100">
                                    <span className="text-slate-600">Home Insurance</span>
                                    <span className="font-medium text-slate-800">{formatCurrency(result.monthlyInsurance)}</span>
                                </div>
                                {result.hasPMI && (
                                    <div className="flex justify-between py-2 border-b border-slate-100">
                                        <span className="text-slate-600">PMI</span>
                                        <span className="font-medium text-amber-600">{formatCurrency(result.monthlyPMI)}</span>
                                    </div>
                                )}
                            </div>

                            {result.hasPMI && (
                                <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                                    <div className="flex items-start gap-2">
                                        <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5" />
                                        <p className="text-xs text-amber-800">
                                            PMI required because down payment is less than 20%.
                                            Put down {formatCurrency(result.homePrice * 0.2)} to avoid PMI.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Loan Summary */}
                        <div className="bg-slate-50 p-6 border-t border-slate-200">
                            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
                                Loan Summary
                            </h3>

                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                    <p className="text-slate-500">Loan Amount</p>
                                    <p className="font-bold text-slate-800">{formatCurrency(result.loanAmount)}</p>
                                </div>
                                <div>
                                    <p className="text-slate-500">Down Payment</p>
                                    <p className="font-bold text-slate-800">{formatCurrency(result.downPayment)} ({result.downPaymentPercent}%)</p>
                                </div>
                                <div>
                                    <p className="text-slate-500">Total Interest</p>
                                    <p className="font-bold text-red-600">{formatCurrency(result.totalInterest)}</p>
                                </div>
                                <div>
                                    <p className="text-slate-500">Total of Payments</p>
                                    <p className="font-bold text-slate-800">{formatCurrency(result.totalPayments)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Ad Placeholder */}
                <div className="my-8 p-6 bg-white border border-slate-200 rounded-xl text-center shadow-sm">
                    <p className="text-sm text-slate-400">Advertisement</p>
                </div>

                {/* Links to Other Calculators */}
                <div className="grid grid-cols-2 gap-4">
                    <Link href="/amortization" className="bg-white border border-slate-200 rounded-lg p-4 text-center hover:border-blue-500 transition-colors">
                        <p className="text-sm font-medium text-slate-600">Amortization Schedule →</p>
                    </Link>
                    <Link href="/affordability" className="bg-white border border-slate-200 rounded-lg p-4 text-center hover:border-blue-500 transition-colors">
                        <p className="text-sm font-medium text-slate-600">How Much Can I Afford? →</p>
                    </Link>
                </div>

                {/* Disclaimer */}
                <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-start gap-2">
                        <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                        <p className="text-xs text-blue-800">
                            This calculator provides estimates only. Actual payment may vary based on
                            lender fees, mortgage insurance requirements, and local tax rates.
                            Contact a mortgage lender for an accurate quote.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
