"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Scale } from "lucide-react";
import { SITE, HOUSING_CONSTANTS, calculateRentVsBuy, formatCurrency } from "@/lib/calculators/home-afford";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function RentVsBuyPage() {
    const { defaults } = HOUSING_CONSTANTS;

    const [homePrice, setHomePrice] = useState("400000");
    const [monthlyRent, setMonthlyRent] = useState("2000");
    const [downPaymentPercent, setDownPaymentPercent] = useState(defaults.downPaymentPercent.toString());
    const [interestRate, setInterestRate] = useState(defaults.interestRate.toString());

    const result = calculateRentVsBuy(
        parseInt(homePrice.replace(/[^0-9]/g, '')) || 400000,
        parseInt(monthlyRent.replace(/[^0-9]/g, '')) || 2000,
        parseFloat(downPaymentPercent) || 20,
        parseFloat(interestRate) || 6.5,
        1.1, 0.35, 3, 3
    );

    return (
        <>

            <main className="max-w-2xl mx-auto px-4 py-8">
                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm mb-6">
                    <h1 className="text-xl font-bold text-slate-800 mb-6">Rent vs Buy Calculator</h1>
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Home Price</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                    <input type="text" value={parseInt(homePrice).toLocaleString() || ''}
                                        onChange={(e) => setHomePrice(e.target.value.replace(/[^0-9]/g, ''))}
                                        className="w-full pl-7 pr-3 py-3 border-2 border-slate-300 rounded-lg font-bold" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Monthly Rent</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                    <input type="text" value={parseInt(monthlyRent).toLocaleString() || ''}
                                        onChange={(e) => setMonthlyRent(e.target.value.replace(/[^0-9]/g, ''))}
                                        className="w-full pl-7 pr-3 py-3 border-2 border-slate-300 rounded-lg font-bold" />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Down Payment %</label>
                                <input type="number" value={downPaymentPercent}
                                    onChange={(e) => setDownPaymentPercent(e.target.value)}
                                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Interest Rate %</label>
                                <input type="number" step="0.125" value={interestRate}
                                    onChange={(e) => setInterestRate(e.target.value)}
                                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Comparison */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className={`bg-white rounded-xl border-2 p-6 text-center ${result.recommendation === 'rent' ? 'border-blue-500 bg-blue-50' : 'border-slate-200'}`}>
                        <h3 className="font-bold text-slate-800 mb-1">Rent</h3>
                        <p className="text-sm text-slate-500 mb-3">Monthly</p>
                        <p className="text-3xl font-bold text-blue-600">{formatCurrency(result.monthlyRent)}</p>
                        <p className="text-sm text-slate-500 mt-3">5-Year Cost</p>
                        <p className="text-xl font-bold text-slate-700">{formatCurrency(result.fiveYearRentCost)}</p>
                        {result.recommendation === 'rent' && (
                            <span className="inline-block mt-3 text-xs bg-blue-500 text-white px-2 py-1 rounded-full">Better Option</span>
                        )}
                    </div>
                    <div className={`bg-white rounded-xl border-2 p-6 text-center ${result.recommendation === 'buy' ? 'border-green-500 bg-green-50' : 'border-slate-200'}`}>
                        <h3 className="font-bold text-slate-800 mb-1">Buy</h3>
                        <p className="text-sm text-slate-500 mb-3">Monthly PITI</p>
                        <p className="text-3xl font-bold text-green-600">{formatCurrency(result.monthlyMortgageTotal)}</p>
                        <p className="text-sm text-slate-500 mt-3">5-Year Cost</p>
                        <p className="text-xl font-bold text-slate-700">{formatCurrency(result.fiveYearBuyCost)}</p>
                        {result.recommendation === 'buy' && (
                            <span className="inline-block mt-3 text-xs bg-green-500 text-white px-2 py-1 rounded-full">Better Option</span>
                        )}
                    </div>
                </div>

                {/* Equity */}
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6 text-center">
                    <h3 className="font-bold text-green-800 mb-2">5-Year Equity Buildup</h3>
                    <p className="text-3xl font-bold text-green-600">{formatCurrency(result.fiveYearEquity)}</p>
                    <p className="text-sm text-green-700 mt-2">From appreciation + principal paydown</p>
                </div>

                {/* Summary */}
                <div className="bg-white rounded-xl border border-slate-200 p-6 mb-6 text-sm">
                    <h3 className="font-bold text-slate-800 mb-3">{SITE.year} Analysis</h3>
                    <div className="space-y-2">
                        <div className="flex justify-between py-2 border-b"><span>Monthly Difference</span>
                            <span className={result.monthlySavingsIfBuying > 0 ? 'text-green-600' : 'text-red-600'}>
                                {result.monthlySavingsIfBuying > 0 ? 'Save ' : 'Pay Extra '}
                                {formatCurrency(Math.abs(result.monthlySavingsIfBuying))}/mo
                            </span>
                        </div>
                        <div className="flex justify-between py-2 border-b"><span>Break-Even Point</span>
                            <span className="font-medium">~{result.breakEvenYears} years</span>
                        </div>
                    </div>
                </div>

                <div className="my-8 p-6 bg-white border rounded-xl text-center"><p className="text-sm text-slate-400">Advertisement</p></div>
                <Link href="/home-afford/calculator" className="block bg-green-600 hover:bg-green-700 text-white rounded-lg p-4 text-center font-bold">Calculate Affordability/Link>
            </main>
        </>
    );
}
