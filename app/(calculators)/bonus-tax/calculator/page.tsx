"use client";

import { useState } from "react";
import Link from "next/link";
import { Receipt, Calculator, ArrowRight, DollarSign } from "lucide-react";
import { SITE, WITHHOLDING_METHODS, FAQS } from "@/lib/calculators/bonus-tax";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function BonusTaxCalculatorPage() {
    const [bonusAmount, setBonusAmount] = useState(10000);
    const [stateRate, setStateRate] = useState(5);
    const [method, setMethod] = useState("flat");
    const [result, setResult] = useState<null | { federal: number; state: number; fica: number; net: number }>(null);

    const calculateBonusTax = () => {
        const selectedMethod = WITHHOLDING_METHODS.find(m => m.id === method);
        const federalRate = selectedMethod?.rate || 0.22;

        const federal = Math.round(bonusAmount * federalRate);
        const state = Math.round(bonusAmount * (stateRate / 100));
        const fica = Math.round(bonusAmount * 0.0765); // 6.2% SS + 1.45% Medicare
        const net = bonusAmount - federal - state - fica;

        setResult({ federal, state, fica, net });
    };

    return (
        <>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/50 rounded-full px-4 py-2 mb-4">
                            <Receipt className="w-4 h-4 text-emerald-400" />
                            <span className="text-sm text-emerald-300">{SITE.year} Calculator</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">Bonus Tax Calculator</h1>
                        <p className="text-slate-400">Calculate taxes on your bonus</p>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Bonus Amount: ${bonusAmount.toLocaleString()}</label>
                                <input type="range" min="1000" max="200000" step="1000" value={bonusAmount} onChange={(e) => setBonusAmount(Number(e.target.value))} className="w-full" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">State Tax Rate: {stateRate}%</label>
                                <input type="range" min="0" max="13" step="0.5" value={stateRate} onChange={(e) => setStateRate(Number(e.target.value))} className="w-full" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Withholding Method</label>
                                <select value={method} onChange={(e) => setMethod(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">
                                    {WITHHOLDING_METHODS.map((m) => (<option key={m.id} value={m.id}>{m.name}</option>))}
                                </select>
                            </div>
                        </div>

                        <button onClick={calculateBonusTax} className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
                            <DollarSign className="w-5 h-5" /> Calculate Bonus Tax
                        </button>
                    </div>

                    {result && (
                        <div className="bg-emerald-900/30 border border-emerald-500/50 rounded-xl p-6 mb-8">
                            <h2 className="text-xl font-bold text-white mb-4">Bonus Tax Breakdown</h2>
                            <div className="grid md:grid-cols-4 gap-4">
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-xl font-bold text-amber-400">-${result.federal.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">Federal (22%)</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-xl font-bold text-amber-400">-${result.state.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">State</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-xl font-bold text-amber-400">-${result.fica.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">FICA (7.65%)</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-2xl font-bold text-emerald-400">${result.net.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">Net Bonus</div>
                                </div>
                            </div>
                            <p className="text-xs text-slate-500 mt-4">*Actual tax depends on annual income (IRS 2026)</p>
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
