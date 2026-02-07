"use client";

import { useState } from "react";
import Link from "next/link";
import { TrendingUp, Calculator, ArrowRight, DollarSign } from "lucide-react";
import { SITE, DISCOUNT_TYPES, FAQS } from "@/lib/calculators/espp";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function ESPPCalculatorPage() {
    const [discountType, setDiscountType] = useState("");
    const [contribution, setContribution] = useState(5000);
    const [stockGain, setStockGain] = useState(10);
    const [result, setResult] = useState<null | { discount: number; totalGain: number; roi: number }>(null);

    const calculateESPP = () => {
        const plan = DISCOUNT_TYPES.find(d => d.id === discountType);
        if (!plan) return;

        const purchasePrice = contribution * (1 - plan.rate);
        const stockValue = plan.lookback
            ? contribution * (1 + stockGain / 100) // value with stock gain
            : contribution;
        const discount = Math.round(contribution * plan.rate);
        const totalGain = Math.round(stockValue - purchasePrice);
        const roi = Math.round((totalGain / purchasePrice) * 100);

        setResult({ discount, totalGain, roi });
    };

    return (
        <>


            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/50 rounded-full px-4 py-2 mb-4">
                            <TrendingUp className="w-4 h-4 text-emerald-400" />
                            <span className="text-sm text-emerald-300">{SITE.year} Calculator</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">ESPP Calculator</h1>
                        <p className="text-slate-400">Calculate your stock purchase gains</p>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Discount Type</label>
                                <select value={discountType} onChange={(e) => setDiscountType(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">
                                    <option value="">Select plan...</option>
                                    {DISCOUNT_TYPES.map((d) => (<option key={d.id} value={d.id}>{d.name}</option>))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Annual Contribution: ${contribution.toLocaleString()}</label>
                                <input type="range" min="1000" max="25000" step="500" value={contribution} onChange={(e) => setContribution(Number(e.target.value))} className="w-full" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Stock Price Change (for lookback): {stockGain}%</label>
                                <input type="range" min="-20" max="50" step="5" value={stockGain} onChange={(e) => setStockGain(Number(e.target.value))} className="w-full" />
                            </div>
                        </div>

                        <button onClick={calculateESPP} disabled={!discountType} className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
                            <DollarSign className="w-5 h-5" /> Calculate ESPP
                        </button>
                    </div>

                    {result && (
                        <div className="bg-emerald-900/30 border border-emerald-500/50 rounded-xl p-6 mb-8">
                            <h2 className="text-xl font-bold text-white mb-4">ESPP Projection</h2>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-2xl font-bold text-emerald-400">${result.discount.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">Discount Savings</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-2xl font-bold text-white">${result.totalGain.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">Total Gain</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-2xl font-bold text-emerald-400">{result.roi}%</div>
                                    <div className="text-sm text-slate-400">ROI</div>
                                </div>
                            </div>
                            <p className="text-xs text-slate-500 mt-4">*Before taxes. Hold 2+ years for qualifying disposition (IRS 2026)</p>
                        </div>
                    )}

                    <LegalDisclaimer category="insurance" />
                </div>
            </section>

            <section className="py-12 px-4 bg-slate-800/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-xl font-bold text-white text-center mb-8">FAQ</h2>
                    <div className="space-y-4">
                        {FAQS.map((faq, index) => (
                            <details key={index} className="group bg-slate-800 border border-slate-700 rounded-xl">
                                <summary className="flex items-center justify-between p-4 cursor-pointer">
                                    <span className="font-medium text-white text-sm">{faq.question}</span>
                                    <ArrowRight className="w-4 h-4 text-slate-400 group-open:rotate-90 transition-transform" />
                                </summary>
                                <div className="px-4 pb-4 text-slate-300 text-sm">{faq.answer}</div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>


        </>
    );
}
