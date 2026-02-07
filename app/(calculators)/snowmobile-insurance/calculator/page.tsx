"use client";

import { useState } from "react";
import Link from "next/link";
import { Snowflake, Calculator, ArrowRight, DollarSign } from "lucide-react";
import { SITE, SNOWMOBILE_TYPES, FAQS } from "@/lib/calculators/snowmobile-insurance";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function SnowmobileInsuranceCalculatorPage() {
    const [sledType, setSledType] = useState("");
    const [sledValue, setSledValue] = useState(10000);
    const [includeFull, setIncludeFull] = useState(true);
    const [result, setResult] = useState<null | { annual: number; monthly: number }>(null);

    const calculatePremium = () => {
        const type = SNOWMOBILE_TYPES.find(t => t.id === sledType);
        if (!type) return;

        const baseRate = sledValue * 0.025; // 2.5% base
        const fullAdjust = includeFull ? 1.0 : 0.6; // liability-only is cheaper
        const annual = Math.round(baseRate * type.factor * fullAdjust);
        const monthly = Math.round(annual / 12);

        setResult({ annual, monthly });
    };

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80">
                        <Calculator className="w-6 h-6 text-blue-500" />
                        <span className="text-lg font-bold text-white">MySmartCalculators</span>
                    </Link>
                    <Link href="/snowmobile-insurance" className="text-slate-400 hover:text-white text-sm">← Back</Link>
                </div>
            </header>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
                            <Snowflake className="w-4 h-4 text-blue-400" />
                            <span className="text-sm text-blue-300">{SITE.year} Calculator</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">Snowmobile Insurance Calculator</h1>
                        <p className="text-slate-400">Estimate your sled coverage costs</p>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Snowmobile Type</label>
                                <select value={sledType} onChange={(e) => setSledType(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">
                                    <option value="">Select type...</option>
                                    {SNOWMOBILE_TYPES.map((t) => (<option key={t.id} value={t.id}>{t.name}</option>))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Sled Value: ${sledValue.toLocaleString()}</label>
                                <input type="range" min="3000" max="25000" step="500" value={sledValue} onChange={(e) => setSledValue(Number(e.target.value))} className="w-full" />
                            </div>

                            <div>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" checked={includeFull} onChange={(e) => setIncludeFull(e.target.checked)} className="rounded bg-slate-700 border-slate-600" />
                                    <span className="text-slate-300">Full coverage (comprehensive + collision)</span>
                                </label>
                            </div>
                        </div>

                        <button onClick={calculatePremium} disabled={!sledType} className="w-full mt-6 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
                            <DollarSign className="w-5 h-5" /> Calculate Premium
                        </button>
                    </div>

                    {result && (
                        <div className="bg-blue-900/30 border border-blue-500/50 rounded-xl p-6 mb-8">
                            <h2 className="text-xl font-bold text-white mb-4">Estimated Premium</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-3xl font-bold text-blue-400">${result.annual}/yr</div>
                                    <div className="text-sm text-slate-400">Annual Premium</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-3xl font-bold text-white">${result.monthly}/mo</div>
                                    <div className="text-sm text-slate-400">Monthly Payment</div>
                                </div>
                            </div>
                            <p className="text-xs text-slate-500 mt-4">*Seasonal rates may vary (2026 estimates)</p>
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
                    <p className="text-xs text-slate-500">© {SITE.year} MySmartCalculators. Data from III.</p>
                </div>
            </footer>
        </>
    );
}
