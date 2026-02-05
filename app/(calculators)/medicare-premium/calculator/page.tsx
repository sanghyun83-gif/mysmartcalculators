"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, Calculator, ArrowRight, DollarSign } from "lucide-react";
import { SITE, FAQS } from "@/lib/calculators/medicare-premium";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function MedicarePremiumCalculatorPage() {
    const [income, setIncome] = useState(100000);
    const [filingStatus, setFilingStatus] = useState<"single" | "married">("single");
    const [hasPartD, setHasPartD] = useState(true);
    const [result, setResult] = useState<null | { partB: number; partD: number; annual: number }>(null);

    const calculatePremium = () => {
        // Single IRMAA thresholds (2026)
        const thresholds = filingStatus === "single"
            ? [106000, 133500, 167000, 200000, 500000]
            : [212000, 267000, 334000, 400000, 750000];

        const partBPremiums = [185.00, 259.00, 370.00, 480.90, 591.90, 628.90];
        const partDPremiums = [0, 13.70, 35.30, 57.00, 78.60, 85.80];

        let tier = 0;
        for (let i = 0; i < thresholds.length; i++) {
            if (income > thresholds[i]) tier = i + 1;
        }

        const partB = partBPremiums[tier];
        const partD = hasPartD ? partDPremiums[tier] : 0;
        const annual = Math.round((partB + partD) * 12);

        setResult({ partB, partD, annual });
    };

    return (
        <>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
                            <Heart className="w-4 h-4 text-blue-400" />
                            <span className="text-sm text-blue-300">{SITE.year} Calculator</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">Medicare Premium Calculator</h1>
                        <p className="text-slate-400">Calculate your Medicare Part B and Part D premiums</p>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Modified AGI (2 years ago): ${income.toLocaleString()}</label>
                                <input type="range" min="50000" max="750000" step="10000" value={income} onChange={(e) => setIncome(Number(e.target.value))} className="w-full" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Filing Status</label>
                                <div className="flex gap-4">
                                    <button onClick={() => setFilingStatus("single")} className={`px-4 py-2 rounded-lg text-sm ${filingStatus === "single" ? "bg-blue-600 text-white" : "bg-slate-700 text-slate-300"}`}>Single</button>
                                    <button onClick={() => setFilingStatus("married")} className={`px-4 py-2 rounded-lg text-sm ${filingStatus === "married" ? "bg-blue-600 text-white" : "bg-slate-700 text-slate-300"}`}>Married</button>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <input type="checkbox" id="partd" checked={hasPartD} onChange={(e) => setHasPartD(e.target.checked)} className="w-4 h-4" />
                                <label htmlFor="partd" className="text-sm text-slate-300">Include Part D (prescription drug coverage)</label>
                            </div>
                        </div>

                        <button onClick={calculatePremium} className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
                            <DollarSign className="w-5 h-5" /> Calculate Premium
                        </button>
                    </div>

                    {result && (
                        <div className="bg-blue-900/30 border border-blue-500/50 rounded-xl p-6 mb-8">
                            <h2 className="text-xl font-bold text-white mb-4">Your Medicare Premium</h2>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-xl font-bold text-white">${result.partB.toFixed(2)}</div>
                                    <div className="text-sm text-slate-400">Part B / month</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-xl font-bold text-white">${result.partD.toFixed(2)}</div>
                                    <div className="text-sm text-slate-400">Part D IRMAA / month</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-2xl font-bold text-blue-400">${result.annual.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">Annual Total</div>
                                </div>
                            </div>
                            {income > 106000 && <p className="text-sm text-amber-400 mt-4 text-center">IRMAA surcharge applies due to income level</p>}
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
                                name: "How accurate is the medicare premium calculator?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "This calculator provides estimates based on 2026 data and standard formulas. Results may vary based on individual circumstances."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Is this medicare premium calculator free to use?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, this calculator is completely free. No registration or personal information required."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "How often is the medicare premium data updated?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "We update our calculator data regularly to reflect current 2026 rates and regulations."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Can I rely on these medicare premium results for decisions?",
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
