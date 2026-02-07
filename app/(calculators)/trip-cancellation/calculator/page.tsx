"use client";

import { useState } from "react";
import Link from "next/link";
import { XCircle, Calculator, ArrowRight, DollarSign } from "lucide-react";
import { SITE, CANCELLATION_REASONS, FAQS } from "@/lib/calculators/trip-cancellation";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function TripCancellationCalculatorPage() {
    const [reason, setReason] = useState("");
    const [tripCost, setTripCost] = useState(3000);
    const [includeCFAR, setIncludeCFAR] = useState(false);
    const [result, setResult] = useState<null | { premium: number; refund: number }>(null);

    const calculatePremium = () => {
        const reasonData = CANCELLATION_REASONS.find(r => r.id === reason);
        if (!reasonData) return;

        const baseRate = tripCost * 0.04; // 4% avg
        const cfarAdjust = includeCFAR ? 1.45 : 1.0; // +45% for CFAR
        const premium = Math.round(baseRate * reasonData.factor * cfarAdjust);
        const refund = includeCFAR ? Math.round(tripCost * 0.75) : tripCost; // CFAR = 75%

        setResult({ premium, refund });
    };

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80">
                        <Calculator className="w-6 h-6 text-blue-500" />
                        <span className="text-lg font-bold text-white">MySmartCalculators</span>
                    </Link>
                    <Link href="/trip-cancellation" className="text-slate-400 hover:text-white text-sm">← Back</Link>
                </div>
            </header>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
                            <XCircle className="w-4 h-4 text-blue-400" />
                            <span className="text-sm text-blue-300">{SITE.year} Calculator</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">Trip Cancellation Calculator</h1>
                        <p className="text-slate-400">Estimate your cancellation coverage costs</p>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Cancellation Reason</label>
                                <select value={reason} onChange={(e) => setReason(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">
                                    <option value="">Select reason...</option>
                                    {CANCELLATION_REASONS.map((r) => (<option key={r.id} value={r.id}>{r.name}</option>))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Total Trip Cost: ${tripCost.toLocaleString()}</label>
                                <input type="range" min="500" max="25000" step="500" value={tripCost} onChange={(e) => setTripCost(Number(e.target.value))} className="w-full" />
                            </div>

                            <div>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" checked={includeCFAR} onChange={(e) => setIncludeCFAR(e.target.checked)} className="rounded bg-slate-700 border-slate-600" />
                                    <span className="text-slate-300">Cancel for Any Reason (CFAR) +45%</span>
                                </label>
                            </div>
                        </div>

                        <button onClick={calculatePremium} disabled={!reason} className="w-full mt-6 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
                            <DollarSign className="w-5 h-5" /> Calculate Premium
                        </button>
                    </div>

                    {result && (
                        <div className="bg-blue-900/30 border border-blue-500/50 rounded-xl p-6 mb-8">
                            <h2 className="text-xl font-bold text-white mb-4">Estimated Costs</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-3xl font-bold text-blue-400">${result.premium}</div>
                                    <div className="text-sm text-slate-400">Premium Cost</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-3xl font-bold text-white">${result.refund.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">Max Refund</div>
                                </div>
                            </div>
                            <p className="text-xs text-slate-500 mt-4">*CFAR provides 75% refund; standard provides 100% for covered reasons (2026)</p>
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
                    <p className="text-xs text-slate-500">© {SITE.year} MySmartCalculators. Data from USTIA.</p>
                </div>
            </footer>
        </>
    );
}
