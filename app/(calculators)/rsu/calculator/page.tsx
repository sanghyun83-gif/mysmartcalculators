"use client";

import { useState } from "react";
import Link from "next/link";
import { Coins, Calculator, ArrowRight, DollarSign } from "lucide-react";
import { SITE, VESTING_SCHEDULES, FAQS } from "@/lib/calculators/rsu";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function RSUCalculatorPage() {
    const [numRSUs, setNumRSUs] = useState(1000);
    const [stockPrice, setStockPrice] = useState(100);
    const [taxRate, setTaxRate] = useState(30);
    const [result, setResult] = useState<null | { grossValue: number; taxWithholding: number; netValue: number }>(null);

    const calculateRSU = () => {
        const grossValue = numRSUs * stockPrice;
        const taxWithholding = Math.round(grossValue * (taxRate / 100));
        const netValue = grossValue - taxWithholding;

        setResult({ grossValue, taxWithholding, netValue });
    };

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80">
                        <Calculator className="w-6 h-6 text-emerald-500" />
                        <span className="text-lg font-bold text-white">MySmartCalculators</span>
                    </Link>
                    <Link href="/rsu" className="text-slate-400 hover:text-white text-sm">← Back</Link>
                </div>
            </header>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/50 rounded-full px-4 py-2 mb-4">
                            <Coins className="w-4 h-4 text-emerald-400" />
                            <span className="text-sm text-emerald-300">{SITE.year} Calculator</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">RSU Calculator</h1>
                        <p className="text-slate-400">Calculate your RSU value at vesting</p>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Number of RSUs: {numRSUs.toLocaleString()}</label>
                                <input type="range" min="100" max="50000" step="100" value={numRSUs} onChange={(e) => setNumRSUs(Number(e.target.value))} className="w-full" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Stock Price: ${stockPrice}</label>
                                <input type="range" min="10" max="500" step="5" value={stockPrice} onChange={(e) => setStockPrice(Number(e.target.value))} className="w-full" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Tax Withholding Rate: {taxRate}%</label>
                                <input type="range" min="20" max="50" step="1" value={taxRate} onChange={(e) => setTaxRate(Number(e.target.value))} className="w-full" />
                            </div>
                        </div>

                        <button onClick={calculateRSU} className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
                            <DollarSign className="w-5 h-5" /> Calculate RSU Value
                        </button>
                    </div>

                    {result && (
                        <div className="bg-emerald-900/30 border border-emerald-500/50 rounded-xl p-6 mb-8">
                            <h2 className="text-xl font-bold text-white mb-4">RSU Value at Vesting</h2>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-2xl font-bold text-emerald-400">${result.grossValue.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">Gross Value</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-2xl font-bold text-amber-400">-${result.taxWithholding.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">Tax Withholding</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-2xl font-bold text-white">${result.netValue.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">Net Value</div>
                                </div>
                            </div>
                            <p className="text-xs text-slate-500 mt-4">*Taxed as ordinary income at vesting (IRS 2026)</p>
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
        </>
    );
}
