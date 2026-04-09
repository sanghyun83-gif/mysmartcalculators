"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Percent, CheckCircle, AlertTriangle, XCircle } from "lucide-react";
import { SITE, HOUSING_CONSTANTS, calculateDTI, formatCurrency } from "@/lib/calculators/home-afford";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function DTIPage() {
    const { dtiRules } = HOUSING_CONSTANTS;

    const [annualIncome, setAnnualIncome] = useState("100000");
    const [housingPayment, setHousingPayment] = useState("2000");
    const [otherDebts, setOtherDebts] = useState("500");

    const result = calculateDTI(
        parseInt(annualIncome.replace(/[^0-9]/g, '')) || 0,
        parseInt(housingPayment.replace(/[^0-9]/g, '')) || 0,
        parseInt(otherDebts.replace(/[^0-9]/g, '')) || 0
    );

    const getStatusIcon = (status: 'good' | 'warning' | 'high') => {
        if (status === 'good') return <CheckCircle className="w-5 h-5 text-green-500" />;
        if (status === 'warning') return <AlertTriangle className="w-5 h-5 text-amber-500" />;
        return <XCircle className="w-5 h-5 text-red-500" />;
    };

    const getStatusColor = (status: 'good' | 'warning' | 'high') => {
        if (status === 'good') return 'text-green-600';
        if (status === 'warning') return 'text-amber-600';
        return 'text-red-600';
    };

    return (
        <>

            <main className="max-w-2xl mx-auto px-4 py-8">
                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm mb-6">
                    <h1 className="text-xl font-bold text-slate-800 mb-2">
                        Debt-to-Income Ratio Calculator
                    </h1>
                    <p className="text-sm text-slate-500 mb-6">
                        The 28/36 rule: Housing ≤28%, Total debt ≤36% of income
                    </p>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Annual Gross Income</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input
                                    type="text"
                                    value={parseInt(annualIncome).toLocaleString() || ''}
                                    onChange={(e) => setAnnualIncome(e.target.value.replace(/[^0-9]/g, ''))}
                                    className="w-full pl-7 pr-3 py-3 border-2 border-slate-300 rounded-lg"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Monthly Housing Payment (PITI)</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input
                                    type="text"
                                    value={parseInt(housingPayment).toLocaleString() || ''}
                                    onChange={(e) => setHousingPayment(e.target.value.replace(/[^0-9]/g, ''))}
                                    className="w-full pl-7 pr-3 py-3 border-2 border-slate-300 rounded-lg"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Other Monthly Debts</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input
                                    type="text"
                                    value={parseInt(otherDebts).toLocaleString() || ''}
                                    onChange={(e) => setOtherDebts(e.target.value.replace(/[^0-9]/g, ''))}
                                    className="w-full pl-7 pr-3 py-3 border-2 border-slate-300 rounded-lg"
                                />
                            </div>
                            <p className="text-xs text-slate-400 mt-1">Car loans, credit cards, student loans, etc.</p>
                        </div>
                    </div>
                </div>

                {/* DTI Results */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className={`bg-white rounded-xl border-2 p-6 text-center ${result.frontEndStatus === 'good' ? 'border-green-500' : result.frontEndStatus === 'warning' ? 'border-amber-500' : 'border-red-500'}`}>
                        <div className="flex justify-center mb-2">{getStatusIcon(result.frontEndStatus)}</div>
                        <p className="text-sm text-slate-500">Front-End DTI</p>
                        <p className={`text-4xl font-bold ${getStatusColor(result.frontEndStatus)}`}>{result.frontEndDTI}%</p>
                        <p className="text-xs text-slate-400 mt-1">Target: ≤{dtiRules.conventional.frontEnd}%</p>
                    </div>
                    <div className={`bg-white rounded-xl border-2 p-6 text-center ${result.backEndStatus === 'good' ? 'border-green-500' : result.backEndStatus === 'warning' ? 'border-amber-500' : 'border-red-500'}`}>
                        <div className="flex justify-center mb-2">{getStatusIcon(result.backEndStatus)}</div>
                        <p className="text-sm text-slate-500">Back-End DTI</p>
                        <p className={`text-4xl font-bold ${getStatusColor(result.backEndStatus)}`}>{result.backEndDTI}%</p>
                        <p className="text-xs text-slate-400 mt-1">Target: ≤{dtiRules.conventional.backEnd}%</p>
                    </div>
                </div>

                {/* Recommendation */}
                <div className={`rounded-xl p-4 mb-6 ${result.backEndStatus === 'good' ? 'bg-green-50 border border-green-200' : result.backEndStatus === 'warning' ? 'bg-amber-50 border border-amber-200' : 'bg-red-50 border border-red-200'}`}>
                    <p className={`text-sm ${result.backEndStatus === 'good' ? 'text-green-700' : result.backEndStatus === 'warning' ? 'text-amber-700' : 'text-red-700'}`}>
                        {result.recommendation}
                    </p>
                </div>

                {/* Max Payments */}
                <div className="bg-white rounded-xl p-6 border border-slate-200 mb-6">
                    <h3 className="font-bold text-slate-800 mb-4">Maximum Payments (28/36 Rule)</h3>
                    <div className="space-y-3 text-sm">
                        <div className="flex justify-between py-2 border-b border-slate-100">
                            <span>Monthly Gross Income</span>
                            <span className="font-medium">{formatCurrency(result.grossMonthlyIncome)}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-slate-100">
                            <span>Max Housing Payment (28%)</span>
                            <span className="font-bold text-green-600">{formatCurrency(result.maxHousingPayment28)}</span>
                        </div>
                        <div className="flex justify-between py-2">
                            <span>Max Total Debt (36%)</span>
                            <span className="font-bold text-blue-600">{formatCurrency(result.maxTotalDebt36)}</span>
                        </div>
                    </div>
                </div>

                {/* DTI Rules by Loan Type */}
                <div className="bg-slate-100 rounded-xl p-6 mb-6">
                    <h3 className="font-bold text-slate-800 mb-3">{SITE.year} DTI Limits by Loan Type</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-slate-300">
                                    <th className="py-2 text-left">Loan</th>
                                    <th className="py-2 text-center">Front-End</th>
                                    <th className="py-2 text-center">Back-End</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-2">Conventional</td>
                                    <td className="py-2 text-center">{dtiRules.conventional.frontEnd}%</td>
                                    <td className="py-2 text-center">{dtiRules.conventional.backEnd}%</td>
                                </tr>
                                <tr>
                                    <td className="py-2">FHA</td>
                                    <td className="py-2 text-center">{dtiRules.fha.frontEnd}%</td>
                                    <td className="py-2 text-center">{dtiRules.fha.backEnd}%</td>
                                </tr>
                                <tr>
                                    <td className="py-2">VA</td>
                                    <td className="py-2 text-center">N/A</td>
                                    <td className="py-2 text-center">{dtiRules.va.backEnd}%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="my-8 p-6 bg-white border border-slate-200 rounded-xl text-center">
                    <p className="text-sm text-slate-400">Advertisement</p>
                </div>

                <Link href="/home-afford/calculator" className="block bg-green-600 hover:bg-green-700 text-white rounded-lg p-4 text-center font-bold">
                    Calculate Affordability →
                </Link>
            </main>
        </>
    );
}
