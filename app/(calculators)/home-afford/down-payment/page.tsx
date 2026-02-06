"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, DollarSign, Info } from "lucide-react";
import { SITE, calculateDownPayment, formatCurrency } from "@/lib/calculators/home-afford";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function DownPaymentPage() {
    const [homePrice, setHomePrice] = useState("400000");

    const result = calculateDownPayment(parseInt(homePrice.replace(/[^0-9]/g, '')) || 400000);

    return (
        <>

            <main className="max-w-2xl mx-auto px-4 py-8">
                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm mb-6">
                    <h1 className="text-xl font-bold text-slate-800 mb-2">
                        Calculate Your Down Payment
                    </h1>
                    <p className="text-sm text-slate-500 mb-6">
                        See how much you need to save for different down payment percentages
                    </p>

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
                </div>

                {/* Scenarios Table */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-6">
                    <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-4">
                        <h3 className="font-bold">Down Payment Options</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead className="bg-slate-100">
                                <tr>
                                    <th className="px-4 py-3 text-left font-semibold text-slate-600">%</th>
                                    <th className="px-4 py-3 text-right font-semibold text-slate-600">Down Payment</th>
                                    <th className="px-4 py-3 text-right font-semibold text-slate-600">Loan Amount</th>
                                    <th className="px-4 py-3 text-right font-semibold text-slate-600">PMI</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {result.scenarios.map((scenario) => (
                                    <tr key={scenario.percent} className={scenario.percent === 20 ? 'bg-green-50' : ''}>
                                        <td className="px-4 py-3 font-medium">
                                            {scenario.percent}%
                                            {scenario.percent === 3.5 && <span className="text-xs text-blue-600 ml-1">(FHA)</span>}
                                            {scenario.percent === 20 && <span className="text-xs text-green-600 ml-1">??/span>}
                                        </td>
                                        <td className="px-4 py-3 text-right font-bold text-green-600">
                                            {formatCurrency(scenario.amount)}
                                        </td>
                                        <td className="px-4 py-3 text-right">
                                            {formatCurrency(scenario.loanAmount)}
                                        </td>
                                        <td className="px-4 py-3 text-right">
                                            {scenario.requiresPMI ? (
                                                <span className="text-amber-600">{formatCurrency(scenario.monthlyPMI)}/mo</span>
                                            ) : (
                                                <span className="text-green-600">None</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* PMI Info */}
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 flex items-start gap-3">
                    <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                        <h4 className="font-semibold text-amber-800">About PMI</h4>
                        <p className="text-sm text-amber-700">
                            Private Mortgage Insurance is required when your down payment is less than 20%.
                            PMI typically costs 0.5% to 1.5% of the loan amount per year. It can be removed
                            once you reach 20% equity.
                        </p>
                    </div>
                </div>

                {/* Down Payment Guide */}
                <div className="bg-white rounded-xl p-6 border border-slate-200 mb-6">
                    <h3 className="font-bold text-slate-800 mb-4">Down Payment Guide ({SITE.year})</h3>
                    <div className="space-y-3 text-sm">
                        <div className="flex justify-between py-2 border-b border-slate-100">
                            <span>FHA Loan</span>
                            <span className="font-medium">3.5% minimum</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-slate-100">
                            <span>Conventional Loan</span>
                            <span className="font-medium">5% minimum (3% for first-time)</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-slate-100">
                            <span>VA Loan</span>
                            <span className="font-medium">0% (eligible veterans)</span>
                        </div>
                        <div className="flex justify-between py-2">
                            <span>Avoid PMI</span>
                            <span className="font-bold text-green-600">20%+</span>
                        </div>
                    </div>
                </div>

                <div className="my-8 p-6 bg-white border border-slate-200 rounded-xl text-center">
                    <p className="text-sm text-slate-400">Advertisement</p>
                </div>

                <Link href="/home-afford/calculator" className="block bg-green-600 hover:bg-green-700 text-white rounded-lg p-4 text-center font-bold">
                    Calculate Affordability ??                </Link>
            </main>
        </>
    );
}
