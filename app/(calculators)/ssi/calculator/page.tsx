"use client";

import { useState } from "react";
import Link from "next/link";
import { Calculator, ArrowRight, DollarSign } from "lucide-react";
import { SITE, FAQS, BENEFIT_LIMITS } from "@/lib/calculators/ssi";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function SSICalculatorPage() {
    const [income, setIncome] = useState(0);
    const [assets, setAssets] = useState(500);
    const [status, setStatus] = useState<"individual" | "couple">("individual");
    const [result, setResult] = useState<null | { eligible: boolean; benefit: number; reason?: string }>(null);

    const calculateSSI = () => {
        const assetLimit = status === "individual" ? BENEFIT_LIMITS.assetLimitIndividual : BENEFIT_LIMITS.assetLimitCouple;
        const maxBenefit = status === "individual" ? BENEFIT_LIMITS.individual : BENEFIT_LIMITS.couple;

        if (assets > assetLimit) {
            setResult({ eligible: false, benefit: 0, reason: "Assets exceed the program limit." });
            return;
        }

        // Rough calculation: First $20 of unearned income ignored, first $65 of earned income ignored, then 50% of the rest
        const countableIncome = Math.max(0, (income - 85) / 2);
        const estimatedBenefit = Math.max(0, maxBenefit - countableIncome);

        if (estimatedBenefit <= 0) {
            setResult({ eligible: false, benefit: 0, reason: "Countable income is too high." });
        } else {
            setResult({ eligible: true, benefit: Math.round(estimatedBenefit) });
        }
    };

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80">
                        <Calculator className="w-6 h-6 text-blue-500" />
                        <span className="text-lg font-bold text-white">MySmartCalculators</span>
                    </Link>
                    <Link href="/ssi" className="text-slate-400 hover:text-white text-sm">← Back</Link>
                </div>
            </header>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <h1 className="text-3xl font-bold text-white mb-2">{SITE.name}</h1>
                        <p className="text-slate-400">Estimate your 2026 monthly cash assistance</p>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-3 text-center">Filing Status</label>
                                <div className="grid grid-cols-2 gap-4">
                                    <button onClick={() => setStatus("individual")} className={`py-4 rounded-xl border transition-all ${status === "individual" ? "bg-blue-600 border-blue-500 text-white font-bold" : "bg-slate-900 border-slate-700 text-slate-400"}`}>Individual</button>
                                    <button onClick={() => setStatus("couple")} className={`py-4 rounded-xl border transition-all ${status === "couple" ? "bg-blue-600 border-blue-500 text-white font-bold" : "bg-slate-900 border-slate-700 text-slate-400"}`}>Married Couple</button>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Monthly Income: ${income.toLocaleString()}</label>
                                <input type="range" min="0" max="3000" step="50" value={income} onChange={(e) => setIncome(Number(e.target.value))} className="w-full accent-blue-500" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Total Countable Assets: ${assets.toLocaleString()}</label>
                                <input type="range" min="0" max="5000" step="100" value={assets} onChange={(e) => setAssets(Number(e.target.value))} className="w-full accent-blue-500" />
                                <p className="text-[10px] text-slate-500 mt-1">*Excluding primary home and one vehicle</p>
                            </div>
                        </div>

                        <button onClick={calculateSSI} className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all">
                            <DollarSign className="w-5 h-5" /> Calculate SSI Benefit
                        </button>
                    </div>

                    {result && (
                        <div className={`${result.eligible ? "bg-blue-900/30 border-blue-500/50" : "bg-red-900/30 border-red-500/50"} border rounded-xl p-6 mb-8 transition-all animate-in fade-in slide-in-from-top-4 duration-500`}>
                            <div className="flex flex-col items-center">
                                <span className="text-sm text-slate-400 mb-1">Estimated Monthly Benefit</span>
                                <span className={`text-4xl font-bold ${result.eligible ? "text-blue-400" : "text-red-400"}`}>
                                    {result.eligible ? `$${result.benefit.toLocaleString()}` : "Not Eligible"}
                                </span>
                                {result.reason && <p className="text-sm text-slate-400 mt-2">{result.reason}</p>}
                                {result.eligible && <p className="text-[10px] text-slate-500 mt-4 italic text-center">Note: This is an estimate based on federal rates. Some states provide additional monthly supplements.</p>}
                            </div>
                        </div>
                    )}

                    <LegalDisclaimer category="insurance" />
                </div>
            </section>

            <section className="py-12 px-4 bg-slate-800/30">
                <div className="max-w-4xl mx-auto text-sm">
                    <h2 className="text-xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {FAQS.map((faq, index) => (
                            <details key={index} className="group bg-slate-800 border border-slate-700 rounded-xl overflow-hidden shadow-sm">
                                <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-slate-700/50 transition-colors list-none">
                                    <span className="font-medium text-white pr-4">{faq.question}</span>
                                    <ArrowRight className="w-4 h-4 text-slate-400 group-open:rotate-90 transition-transform flex-shrink-0" />
                                </summary>
                                <div className="px-4 pb-4 text-slate-400">{faq.answer}</div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <footer className="bg-slate-800 border-t border-slate-700 py-6">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <p className="text-xs text-slate-500">© {SITE.year} MySmartCalculators. Based on SSA 2026 eligibility rules.</p>
                </div>
            </footer>
        </>
    );
}
