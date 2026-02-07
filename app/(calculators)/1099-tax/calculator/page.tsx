"use client";

import { useState } from "react";
import Link from "next/link";
import { FileText, Calculator, ArrowRight, DollarSign } from "lucide-react";
import { SITE, FAQS } from "@/lib/calculators/1099-tax";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function Tax1099CalculatorPage() {
    const [income1099, setIncome1099] = useState(50000);
    const [expenses, setExpenses] = useState(10000);
    const [taxBracket, setTaxBracket] = useState(22);
    const [result, setResult] = useState<null | { netProfit: number; seTax: number; incomeTax: number; totalTax: number; quarterly: number }>(null);

    const calculateTax = () => {
        const netProfit = income1099 - expenses;
        const seTax = Math.round(netProfit * 0.9235 * 0.153); // 92.35% × 15.3%
        const incomeTax = Math.round(netProfit * (taxBracket / 100));
        const totalTax = seTax + incomeTax;
        const quarterly = Math.round(totalTax / 4);

        setResult({ netProfit, seTax, incomeTax, totalTax, quarterly });
    };

    return (
        <>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/50 rounded-full px-4 py-2 mb-4">
                            <FileText className="w-4 h-4 text-emerald-400" />
                            <span className="text-sm text-emerald-300">{SITE.year} Calculator</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">1099 Tax Calculator</h1>
                        <p className="text-slate-400">Calculate taxes on contractor income</p>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">1099 Income: ${income1099.toLocaleString()}</label>
                                <input type="range" min="5000" max="250000" step="5000" value={income1099} onChange={(e) => setIncome1099(Number(e.target.value))} className="w-full" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Business Expenses: ${expenses.toLocaleString()}</label>
                                <input type="range" min="0" max="100000" step="1000" value={expenses} onChange={(e) => setExpenses(Number(e.target.value))} className="w-full" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Tax Bracket: {taxBracket}%</label>
                                <input type="range" min="10" max="37" step="2" value={taxBracket} onChange={(e) => setTaxBracket(Number(e.target.value))} className="w-full" />
                            </div>
                        </div>

                        <button onClick={calculateTax} className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
                            <DollarSign className="w-5 h-5" /> Calculate 1099 Tax
                        </button>
                    </div>

                    {result && (
                        <div className="bg-emerald-900/30 border border-emerald-500/50 rounded-xl p-6 mb-8">
                            <h2 className="text-xl font-bold text-white mb-4">1099 Tax Breakdown</h2>
                            <div className="grid md:grid-cols-4 gap-4">
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-xl font-bold text-white">${result.netProfit.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">Net Profit</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-xl font-bold text-amber-400">${result.seTax.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">SE Tax (15.3%)</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-xl font-bold text-amber-400">${result.incomeTax.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">Income Tax</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-2xl font-bold text-red-400">${result.totalTax.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">Total Tax</div>
                                </div>
                            </div>
                            <p className="text-sm text-emerald-400 mt-4 text-center">Quarterly payment: ${result.quarterly.toLocaleString()}/quarter</p>
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
