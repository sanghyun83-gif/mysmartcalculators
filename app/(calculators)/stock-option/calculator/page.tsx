"use client";

import { useState } from "react";
import Link from "next/link";
import { TrendingUp, Calculator, ArrowRight, DollarSign } from "lucide-react";
import { SITE, OPTION_TYPES, FAQS } from "@/lib/calculators/stock-option";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function StockOptionCalculatorPage() {
    const [optionType, setOptionType] = useState("");
    const [numOptions, setNumOptions] = useState(1000);
    const [strikePrice, setStrikePrice] = useState(10);
    const [currentPrice, setCurrentPrice] = useState(50);
    const [result, setResult] = useState<null | { value: number; exerciseCost: number; profit: number }>(null);

    const calculateOptions = () => {
        if (!optionType) return;

        const value = numOptions * currentPrice;
        const exerciseCost = numOptions * strikePrice;
        const profit = value - exerciseCost;

        setResult({ value, exerciseCost, profit });
    };

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80">
                        <Calculator className="w-6 h-6 text-emerald-500" />
                        <span className="text-lg font-bold text-white">MySmartCalculators</span>
                    </Link>
                    <Link href="/stock-option" className="text-slate-400 hover:text-white text-sm"> Back</Link>
                </div>
            </header>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/50 rounded-full px-4 py-2 mb-4">
                            <TrendingUp className="w-4 h-4 text-emerald-400" />
                            <span className="text-sm text-emerald-300">{SITE.year} Calculator</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">Stock Option Calculator</h1>
                        <p className="text-slate-400">Calculate your stock option value</p>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Option Type</label>
                                <select value={optionType} onChange={(e) => setOptionType(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">
                                    <option value="">Select type...</option>
                                    {OPTION_TYPES.map((t) => (<option key={t.id} value={t.id}>{t.name}</option>))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Number of Options: {numOptions.toLocaleString()}</label>
                                <input type="range" min="100" max="50000" step="100" value={numOptions} onChange={(e) => setNumOptions(Number(e.target.value))} className="w-full" />
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">Strike Price: ${strikePrice}</label>
                                    <input type="range" min="1" max="200" step="1" value={strikePrice} onChange={(e) => setStrikePrice(Number(e.target.value))} className="w-full" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">Current Price: ${currentPrice}</label>
                                    <input type="range" min="1" max="500" step="1" value={currentPrice} onChange={(e) => setCurrentPrice(Number(e.target.value))} className="w-full" />
                                </div>
                            </div>
                        </div>

                        <button onClick={calculateOptions} disabled={!optionType} className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
                            <DollarSign className="w-5 h-5" /> Calculate Options
                        </button>
                    </div>

                    {result && (
                        <div className="bg-emerald-900/30 border border-emerald-500/50 rounded-xl p-6 mb-8">
                            <h2 className="text-xl font-bold text-white mb-4">Option Value</h2>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-2xl font-bold text-emerald-400">${result.profit.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">Profit (Before Tax)</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-2xl font-bold text-white">${result.exerciseCost.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">Exercise Cost</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-2xl font-bold text-emerald-400">${result.value.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">Total Share Value</div>
                                </div>
                            </div>
                            <p className="text-xs text-slate-500 mt-4">*Tax treatment varies by option type (IRS 2026)</p>
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

            <footer className="bg-slate-800 border-t border-slate-700 py-6">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <p className="text-xs text-slate-500">© {SITE.year} MySmartCalculators. Based on IRS guidelines.</p>
                </div>
            </footer>
        
            {/* FAQPage Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: [
                            {
                                "@type": "Question",
                                name: "How accurate is the stock option calculator?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "This calculator provides estimates based on 2026 data and standard formulas. Results may vary based on individual circumstances."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Is this stock option calculator free to use?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, this calculator is completely free. No registration or personal information required."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "How often is the stock option data updated?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "We update our calculator data regularly to reflect current 2026 rates and regulations."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Can I rely on these stock option results for decisions?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "This calculator provides estimates for educational purposes. For important decisions, please consult with a qualified professional."
                                }
                            }
                        ]
                    })
                }}
            />
        </>
    );
}
