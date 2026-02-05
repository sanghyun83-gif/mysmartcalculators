"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import { calculateClosingCosts, formatCurrency } from "@/lib/calculators/home-afford";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function ClosingCostsPage() {
    const [homePrice, setHomePrice] = useState("400000");
    const [downPaymentPercent, setDownPaymentPercent] = useState("20");

    const result = calculateClosingCosts(
        parseInt(homePrice.replace(/[^0-9]/g, '')) || 400000,
        parseFloat(downPaymentPercent) || 20
    );

    const downPayment = (parseInt(homePrice.replace(/[^0-9]/g, '')) || 400000) * (parseFloat(downPaymentPercent) / 100);

    return (
        <>

            <main className="max-w-2xl mx-auto px-4 py-8">
                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm mb-6">
                    <h1 className="text-xl font-bold text-slate-800 mb-6">Closing Costs Calculator</h1>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Home Price</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input type="text" value={parseInt(homePrice).toLocaleString() || ''}
                                    onChange={(e) => setHomePrice(e.target.value.replace(/[^0-9]/g, ''))}
                                    className="w-full pl-7 pr-3 py-3 border-2 border-slate-300 rounded-lg text-xl font-bold" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Down Payment: {downPaymentPercent}%</label>
                            <input type="range" min="3" max="30" step="1" value={downPaymentPercent}
                                onChange={(e) => setDownPaymentPercent(e.target.value)}
                                className="w-full h-2 bg-green-200 rounded-lg" />
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl p-6 text-center mb-6">
                    <p className="text-sm mb-1">Total Cash Needed at Closing</p>
                    <p className="text-4xl font-bold text-yellow-400">{formatCurrency(result.cashNeededAtClosing)}</p>
                    <div className="flex justify-center gap-6 mt-3 text-sm">
                        <div><p className="text-green-200">Down Payment</p><p className="font-bold">{formatCurrency(downPayment)}</p></div>
                        <div><p className="text-green-200">Closing Costs</p><p className="font-bold">{formatCurrency(result.totalClosingCosts)}</p></div>
                    </div>
                </div>

                <div className="bg-white rounded-xl border border-slate-200 p-6 mb-6 text-sm space-y-2">
                    <h3 className="font-bold text-slate-800 mb-3">Cost Breakdown</h3>
                    <div className="flex justify-between py-2 border-b"><span>Loan Origination (1%)</span><span>{formatCurrency(result.loanOriginationFee)}</span></div>
                    <div className="flex justify-between py-2 border-b"><span>Appraisal</span><span>{formatCurrency(result.appraisalFee)}</span></div>
                    <div className="flex justify-between py-2 border-b"><span>Title Insurance</span><span>{formatCurrency(result.titleInsurance)}</span></div>
                    <div className="flex justify-between py-2 border-b"><span>Escrow Fees</span><span>{formatCurrency(result.escrowFees)}</span></div>
                    <div className="flex justify-between py-2 border-b"><span>Prepaid Insurance</span><span>{formatCurrency(result.prepaidInsurance)}</span></div>
                    <div className="flex justify-between py-2 border-b"><span>Prepaid Taxes</span><span>{formatCurrency(result.prepaidTaxes)}</span></div>
                    <div className="flex justify-between py-3 bg-green-50 rounded-lg px-3 font-bold">
                        <span>Total</span><span className="text-green-600">{formatCurrency(result.totalClosingCosts)}</span>
                    </div>
                </div>

                <div className="my-8 p-6 bg-white border rounded-xl text-center"><p className="text-sm text-slate-400">Advertisement</p></div>
                <Link href="/home-afford/calculator" className="block bg-green-600 hover:bg-green-700 text-white rounded-lg p-4 text-center font-bold">Calculate Affordability →</Link>
            </main>
        </>
    );
}
