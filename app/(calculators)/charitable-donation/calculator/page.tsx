"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, Calculator, ArrowRight, DollarSign } from "lucide-react";
import { SITE, FAQS } from "@/lib/calculators/charitable-donation";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function CharitableDonationCalculatorPage() {
    const [donation, setDonation] = useState(5000);
    const [agi, setAgi] = useState(100000);
    const [taxBracket, setTaxBracket] = useState(22);
    const [result, setResult] = useState<null | { deductible: number; taxSavings: number; agiLimit: number; exceeds: boolean }>(null);

    const calculateDeduction = () => {
        const agiLimit = Math.round(agi * 0.60); // 60% limit for cash
        const deductible = Math.min(donation, agiLimit);
        const taxSavings = Math.round(deductible * (taxBracket / 100));
        const exceeds = donation > agiLimit;

        setResult({ deductible, taxSavings, agiLimit, exceeds });
    };

    return (
        <>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/50 rounded-full px-4 py-2 mb-4">
                            <Heart className="w-4 h-4 text-emerald-400" />
                            <span className="text-sm text-emerald-300">{SITE.year} Calculator</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">Charitable Donation Calculator</h1>
                        <p className="text-slate-400">Calculate your tax savings from donations</p>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Donation Amount: ${donation.toLocaleString()}</label>
                                <input type="range" min="500" max="100000" step="500" value={donation} onChange={(e) => setDonation(Number(e.target.value))} className="w-full" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Adjusted Gross Income: ${agi.toLocaleString()}</label>
                                <input type="range" min="50000" max="500000" step="10000" value={agi} onChange={(e) => setAgi(Number(e.target.value))} className="w-full" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Tax Bracket: {taxBracket}%</label>
                                <input type="range" min="10" max="37" step="2" value={taxBracket} onChange={(e) => setTaxBracket(Number(e.target.value))} className="w-full" />
                            </div>
                        </div>

                        <button onClick={calculateDeduction} className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
                            <DollarSign className="w-5 h-5" /> Calculate Deduction
                        </button>
                    </div>

                    {result && (
                        <div className="bg-emerald-900/30 border border-emerald-500/50 rounded-xl p-6 mb-8">
                            <h2 className="text-xl font-bold text-white mb-4">Donation Tax Savings</h2>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-xl font-bold text-white">${result.deductible.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">Deductible</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-xl font-bold text-amber-400">${result.agiLimit.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">60% AGI Limit</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-2xl font-bold text-emerald-400">${result.taxSavings.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">Tax Savings</div>
                                </div>
                            </div>
                            {result.exceeds && <p className="text-sm text-amber-400 mt-4 text-center">Donation exceeds 60% AGI limit. Excess can be carried forward 5 years.</p>}
                            <p className="text-sm text-slate-400 mt-2 text-center">Note: Requires itemizing deductions (total &gt; ${taxBracket >= 24 ? "30,000" : "15,000"})</p>
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
