"use client";

import { useState } from "react";
import Link from "next/link";
import { TrendingUp, Calculator, ArrowRight, DollarSign } from "lucide-react";
import { SITE, FAQS } from "@/lib/calculators/commission";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function CommissionCalculatorPage() {
    const [salesAmount, setSalesAmount] = useState(50000);
    const [commissionRate, setCommissionRate] = useState(10);
    const [baseSalary, setBaseSalary] = useState(0);
    const [result, setResult] = useState<null | { commission: number; total: number; monthly: number }>(null);

    const calculateCommission = () => {
        const commission = Math.round(salesAmount * (commissionRate / 100));
        const total = baseSalary + commission;
        const monthly = Math.round(total / 12);

        setResult({ commission, total, monthly });
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
                        <h1 className="text-3xl font-bold text-white mb-2">Commission Calculator</h1>
                        <p className="text-slate-400">Calculate your sales earnings</p>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Sales Amount: ${salesAmount.toLocaleString()}</label>
                                <input type="range" min="10000" max="1000000" step="5000" value={salesAmount} onChange={(e) => setSalesAmount(Number(e.target.value))} className="w-full" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Commission Rate: {commissionRate}%</label>
                                <input type="range" min="1" max="25" step="0.5" value={commissionRate} onChange={(e) => setCommissionRate(Number(e.target.value))} className="w-full" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Base Salary (Optional): ${baseSalary.toLocaleString()}</label>
                                <input type="range" min="0" max="150000" step="5000" value={baseSalary} onChange={(e) => setBaseSalary(Number(e.target.value))} className="w-full" />
                            </div>
                        </div>

                        <button onClick={calculateCommission} className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
                            <DollarSign className="w-5 h-5" /> Calculate Commission
                        </button>
                    </div>

                    {result && (
                        <div className="bg-emerald-900/30 border border-emerald-500/50 rounded-xl p-6 mb-8">
                            <h2 className="text-xl font-bold text-white mb-4">Commission Earnings</h2>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-2xl font-bold text-emerald-400">${result.commission.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">Commission</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-2xl font-bold text-white">${result.total.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">Total Earnings</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-2xl font-bold text-emerald-400">${result.monthly.toLocaleString()}/mo</div>
                                    <div className="text-sm text-slate-400">Monthly Average</div>
                                </div>
                            </div>
                            <p className="text-xs text-slate-500 mt-4">*Before taxes and deductions</p>
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
