"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calculator } from "lucide-react";
import { SITE, HOUSING_CONSTANTS, calculateMonthlyPayment, formatCurrency } from "@/lib/calculators/home-afford";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function MonthlyPaymentPage() {
    const { defaults } = HOUSING_CONSTANTS;

    const [homePrice, setHomePrice] = useState("400000");
    const [downPaymentPercent, setDownPaymentPercent] = useState(defaults.downPaymentPercent.toString());
    const [interestRate, setInterestRate] = useState(defaults.interestRate.toString());
    const [loanTerm, setLoanTerm] = useState(defaults.loanTerm.toString());
    const [propertyTax, setPropertyTax] = useState(defaults.propertyTax.toString());
    const [homeInsurance, setHomeInsurance] = useState(defaults.homeInsurance.toString());
    const [hoaFees, setHoaFees] = useState("0");

    const result = calculateMonthlyPayment(
        parseInt(homePrice.replace(/[^0-9]/g, '')) || 0,
        parseFloat(downPaymentPercent) || 20,
        parseFloat(interestRate) || 6.5,
        parseInt(loanTerm) || 30,
        parseFloat(propertyTax) || 1.1,
        parseFloat(homeInsurance) || 0.35,
        parseInt(hoaFees) || 0
    );

    return (
        <>

            <main className="max-w-2xl mx-auto px-4 py-8">
                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm mb-6">
                    <h1 className="text-xl font-bold text-slate-800 mb-2">
                        Monthly Payment Calculator
                    </h1>
                    <p className="text-sm text-slate-500 mb-6">
                        Full PITI breakdown (Principal, Interest, Taxes, Insurance)
                    </p>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Home Price</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input
                                    type="text"
                                    value={parseInt(homePrice).toLocaleString() || ''}
                                    onChange={(e) => setHomePrice(e.target.value.replace(/[^0-9]/g, ''))}
                                    className="w-full pl-7 pr-3 py-3 border-2 border-slate-300 rounded-lg text-xl font-bold"
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

                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Property Tax</label>
                                <div className="relative">
                                    <input
                                        type="number" step="0.1"
                                        value={propertyTax}
                                        onChange={(e) => setPropertyTax(e.target.value)}
                                        className="w-full px-3 py-3 border-2 border-slate-300 rounded-lg"
                                    />
                                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 text-sm">%</span>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Insurance</label>
                                <div className="relative">
                                    <input
                                        type="number" step="0.05"
                                        value={homeInsurance}
                                        onChange={(e) => setHomeInsurance(e.target.value)}
                                        className="w-full px-3 py-3 border-2 border-slate-300 rounded-lg"
                                    />
                                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 text-sm">%</span>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">HOA</label>
                                <div className="relative">
                                    <span className="absolute left-2 top-1/2 -translate-y-1/2 text-slate-400 text-sm">$</span>
                                    <input
                                        type="number"
                                        value={hoaFees}
                                        onChange={(e) => setHoaFees(e.target.value)}
                                        className="w-full pl-6 pr-3 py-3 border-2 border-slate-300 rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Results */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-6">
                    <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 text-center">
                        <p className="text-sm text-green-100 mb-1">Total Monthly Payment</p>
                        <p className="text-5xl font-bold text-yellow-400">{formatCurrency(result.totalMonthly)}</p>
                        <p className="text-green-100 mt-2">per month</p>
                    </div>

                    <div className="p-6 space-y-3 text-sm">
                        <h4 className="font-semibold text-slate-600 uppercase text-xs tracking-wider">PITI Breakdown</h4>
                        <div className="flex justify-between py-2 border-b border-slate-100">
                            <span>Principal & Interest</span>
                            <span className="font-bold text-blue-600">{formatCurrency(result.monthlyPI)}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-slate-100">
                            <span>Property Tax</span>
                            <span className="font-medium">{formatCurrency(result.monthlyTax)}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-slate-100">
                            <span>Homeowner&apos;s Insurance</span>
                            <span className="font-medium">{formatCurrency(result.monthlyInsurance)}</span>
                        </div>
                        {result.monthlyPMI > 0 && (
                            <div className="flex justify-between py-2 border-b border-slate-100">
                                <span>PMI</span>
                                <span className="font-medium text-amber-600">{formatCurrency(result.monthlyPMI)}</span>
                            </div>
                        )}
                        {result.monthlyHOA > 0 && (
                            <div className="flex justify-between py-2 border-b border-slate-100">
                                <span>HOA Fees</span>
                                <span className="font-medium">{formatCurrency(result.monthlyHOA)}</span>
                            </div>
                        )}
                        <div className="flex justify-between py-3 bg-green-50 rounded-lg px-3">
                            <span className="font-semibold">Total Monthly</span>
                            <span className="font-bold text-green-600">{formatCurrency(result.totalMonthly)}</span>
                        </div>
                    </div>

                    {/* Visual Pie */}
                    <div className="border-t border-slate-200 p-6">
                        <h4 className="font-semibold text-slate-600 uppercase text-xs tracking-wider mb-3">Payment Composition</h4>
                        <div className="h-6 bg-slate-200 rounded-full overflow-hidden flex">
                            <div
                                className="bg-blue-500 h-full"
                                style={{ width: `${(result.monthlyPI / result.totalMonthly) * 100}%` }}
                                title="P&I"
                            />
                            <div
                                className="bg-green-500 h-full"
                                style={{ width: `${(result.monthlyTax / result.totalMonthly) * 100}%` }}
                                title="Tax"
                            />
                            <div
                                className="bg-purple-500 h-full"
                                style={{ width: `${(result.monthlyInsurance / result.totalMonthly) * 100}%` }}
                                title="Insurance"
                            />
                            {result.monthlyPMI > 0 && (
                                <div
                                    className="bg-amber-500 h-full"
                                    style={{ width: `${(result.monthlyPMI / result.totalMonthly) * 100}%` }}
                                    title="PMI"
                                />
                            )}
                        </div>
                        <div className="flex flex-wrap gap-3 text-xs mt-2">
                            <span className="flex items-center gap-1"><span className="w-3 h-3 bg-blue-500 rounded"></span> P&I</span>
                            <span className="flex items-center gap-1"><span className="w-3 h-3 bg-green-500 rounded"></span> Tax</span>
                            <span className="flex items-center gap-1"><span className="w-3 h-3 bg-purple-500 rounded"></span> Insurance</span>
                            {result.monthlyPMI > 0 && (
                                <span className="flex items-center gap-1"><span className="w-3 h-3 bg-amber-500 rounded"></span> PMI</span>
                            )}
                        </div>
                    </div>
                </div>

                {/* Total Cost */}
                <div className="bg-slate-100 rounded-xl p-6 mb-6">
                    <h3 className="font-bold text-slate-800 mb-3">Total Cost Over {loanTerm} Years</h3>
                    <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                            <p className="text-sm text-slate-500">Total Interest</p>
                            <p className="text-xl font-bold text-red-600">{formatCurrency(result.totalInterest)}</p>
                        </div>
                        <div>
                            <p className="text-sm text-slate-500">Total Cost</p>
                            <p className="text-xl font-bold text-slate-800">{formatCurrency(result.totalCost)}</p>
                        </div>
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
