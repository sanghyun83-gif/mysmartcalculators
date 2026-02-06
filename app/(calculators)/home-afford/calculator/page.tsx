"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Home, TrendingUp } from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import {
    SITE,
    HOUSING_CONSTANTS,
    calculateAffordability,
    formatCurrency,
    formatPercent,
} from "@/lib/calculators/home-afford";

export default function CalculatorPage() {
    const { defaults, conformingLoanLimits } = HOUSING_CONSTANTS;

    const [annualIncome, setAnnualIncome] = useState(defaults.annualIncome.toString());
    const [monthlyDebts, setMonthlyDebts] = useState(defaults.monthlyDebts.toString());
    const [downPaymentPercent, setDownPaymentPercent] = useState(defaults.downPaymentPercent.toString());
    const [interestRate, setInterestRate] = useState(defaults.interestRate.toString());
    const [loanTerm, setLoanTerm] = useState(defaults.loanTerm.toString());
    const [propertyTax, setPropertyTax] = useState(defaults.propertyTax.toString());
    const [homeInsurance, setHomeInsurance] = useState(defaults.homeInsurance.toString());

    const result = calculateAffordability(
        parseInt(annualIncome.replace(/[^0-9]/g, '')) || 0,
        parseInt(monthlyDebts.replace(/[^0-9]/g, '')) || 0,
        parseFloat(downPaymentPercent) || 20,
        parseFloat(interestRate) || 6.5,
        parseInt(loanTerm) || 30,
        parseFloat(propertyTax) || 1.1,
        parseFloat(homeInsurance) || 0.35,
        0,
        28
    );

    return (
        <>
            <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
                <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/home-afford" className="text-slate-400 hover:text-green-600">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <Home className="w-5 h-5 text-green-600" />
                        <span className="text-lg font-bold text-slate-800">Affordability Calculator</span>
                    </div>
                    <span className="ml-auto text-xs text-white bg-green-600 px-2 py-1 rounded-full font-bold">
                        {SITE.year}
                    </span>
                </div>
            </header>

            <main className="max-w-2xl mx-auto px-4 py-8">
                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                    <h1 className="text-xl font-bold text-slate-800 mb-2">
                        How Much House Can You Afford?
                    </h1>
                    <p className="text-sm text-slate-500 mb-6">
                        Based on the 28% front-end DTI rule
                    </p>

                    <div className="space-y-4 mb-6">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Annual Gross Income</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input
                                    type="text"
                                    value={parseInt(annualIncome).toLocaleString() || ''}
                                    onChange={(e) => setAnnualIncome(e.target.value.replace(/[^0-9]/g, ''))}
                                    className="w-full pl-7 pr-3 py-3 border-2 border-slate-300 rounded-lg text-xl font-bold"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Monthly Debts (car, credit cards, loans)</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input
                                    type="text"
                                    value={parseInt(monthlyDebts).toLocaleString() || ''}
                                    onChange={(e) => setMonthlyDebts(e.target.value.replace(/[^0-9]/g, ''))}
                                    className="w-full pl-7 pr-3 py-3 border-2 border-slate-300 rounded-lg"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Down Payment: {downPaymentPercent}%
                            </label>
                            <input
                                type="range"
                                min="3" max="30" step="1"
                                value={downPaymentPercent}
                                onChange={(e) => setDownPaymentPercent(e.target.value)}
                                className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer"
                            />
                            <div className="flex justify-between text-xs text-slate-500 mt-1">
                                <span>3% (FHA)</span>
                                <span>20% (No PMI)</span>
                                <span>30%</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Interest Rate</label>
                                <div className="relative">
                                    <input
                                        type="number" step="0.125"
                                        value={interestRate}
                                        onChange={(e) => setInterestRate(e.target.value)}
                                        className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg"
                                    />
                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">%</span>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Loan Term</label>
                                <select
                                    value={loanTerm}
                                    onChange={(e) => setLoanTerm(e.target.value)}
                                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg"
                                >
                                    <option value="30">30 years</option>
                                    <option value="15">15 years</option>
                                    <option value="20">20 years</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Results */}
                <div className="mt-6 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 text-center">
                        <p className="text-sm text-green-100 mb-1">You Can Afford</p>
                        <p className="text-5xl font-bold text-yellow-400">{formatCurrency(result.maxHomePrice)}</p>
                        <p className="text-green-100 mt-2">
                            {result.loanType} Loan  {formatPercent(result.frontEndDTI)} front-end DTI
                        </p>
                    </div>

                    <div className="p-6 space-y-3 text-sm">
                        <h4 className="font-semibold text-slate-600 uppercase text-xs tracking-wider">Monthly Payment Breakdown</h4>
                        <div className="flex justify-between py-2 border-b border-slate-100">
                            <span>Principal & Interest</span>
                            <span className="font-medium">{formatCurrency(result.monthlyPrincipalInterest)}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-slate-100">
                            <span>Property Tax</span>
                            <span className="font-medium">{formatCurrency(result.monthlyPropertyTax)}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-slate-100">
                            <span>Home Insurance</span>
                            <span className="font-medium">{formatCurrency(result.monthlyInsurance)}</span>
                        </div>
                        {result.monthlyPMI > 0 && (
                            <div className="flex justify-between py-2 border-b border-slate-100">
                                <span>PMI (Private Mortgage Insurance)</span>
                                <span className="font-medium text-amber-600">{formatCurrency(result.monthlyPMI)}</span>
                            </div>
                        )}
                        <div className="flex justify-between py-3 bg-green-50 rounded-lg px-3">
                            <span className="font-semibold">Total Monthly</span>
                            <span className="font-bold text-green-600">{formatCurrency(result.monthlyPayment)}</span>
                        </div>
                    </div>

                    <div className="border-t border-slate-200 p-6 space-y-3 text-sm">
                        <h4 className="font-semibold text-slate-600 uppercase text-xs tracking-wider">Loan Details</h4>
                        <div className="flex justify-between py-2 border-b border-slate-100">
                            <span>Down Payment ({downPaymentPercent}%)</span>
                            <span className="font-medium text-purple-600">{formatCurrency(result.downPayment)}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-slate-100">
                            <span>Loan Amount</span>
                            <span className="font-medium">{formatCurrency(result.maxLoanAmount)}</span>
                        </div>
                        <div className="flex justify-between py-2">
                            <span>Loan Type</span>
                            <span className={`font-medium ${result.isConforming ? 'text-green-600' : 'text-amber-600'}`}>
                                {result.loanType}
                                {result.isConforming && '  }
                            </span>
                        </div>
                    </div>

                    {/* DTI Status */}
                    <div className="border-t border-slate-200 p-6">
                        <h4 className="font-semibold text-slate-600 uppercase text-xs tracking-wider mb-3">DTI Ratios</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-3 bg-slate-50 rounded-lg">
                                <p className="text-xs text-slate-500">Front-End DTI</p>
                                <p className={`text-xl font-bold ${result.frontEndDTI <= 28 ? 'text-green-600' : 'text-amber-600'}`}>
                                    {formatPercent(result.frontEndDTI)}
                                </p>
                                <p className="text-xs text-slate-400">Target:  8%</p>
                            </div>
                            <div className="text-center p-3 bg-slate-50 rounded-lg">
                                <p className="text-xs text-slate-500">Back-End DTI</p>
                                <p className={`text-xl font-bold ${result.backEndDTI <= 36 ? 'text-green-600' : 'text-amber-600'}`}>
                                    {formatPercent(result.backEndDTI)}
                                </p>
                                <p className="text-xs text-slate-400">Target:  6%</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2026 Loan Limit Info */}
                <div className="mt-6 bg-slate-100 rounded-xl p-4 text-sm">
                    <p className="text-slate-600">
                        <strong>{SITE.year} Conforming Loan Limit:</strong> {formatCurrency(conformingLoanLimits.standard)} (most areas) |
                        {formatCurrency(conformingLoanLimits.highCost)} (high-cost areas)
                    </p>
                </div>

                <div className="my-8 p-6 bg-white border border-slate-200 rounded-xl text-center">
                    <p className="text-sm text-slate-400">Advertisement</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <Link href="/home-afford/down-payment" className="bg-white border border-slate-200 rounded-lg p-4 text-center hover:border-green-500">
                        <p className="text-sm font-medium text-slate-600">Down Payment/p>
                    </Link>
                    <Link href="/home-afford/dti" className="bg-white border border-slate-200 rounded-lg p-4 text-center hover:border-green-500">
                        <p className="text-sm font-medium text-slate-600">DTI Calculator/p>
                    </Link>
                </div>
            </main>
        
            {/* FAQPage Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: [
                            {
                                "@type": "Question",
                                name: "How accurate is the home afford calculator?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "This calculator provides estimates based on 2026 data and standard formulas. Results may vary based on individual circumstances."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Is this home afford calculator free to use?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, this calculator is completely free. No registration or personal information required."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "How often is the home afford data updated?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "We update our calculator data regularly to reflect current 2026 rates and regulations."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Can I rely on these home afford results for decisions?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "This calculator provides estimates for educational purposes. For important decisions, please consult with a qualified professional."
                                }
                            }
                        ]
                    })
                }}
            />
        </>
    );
}
