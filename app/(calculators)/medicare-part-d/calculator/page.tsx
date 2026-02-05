"use client";

import { useState } from "react";
import Link from "next/link";
import { Pill, Calculator, ArrowRight, DollarSign } from "lucide-react";
import { SITE, FAQS } from "@/lib/calculators/medicare-part-d";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function MedicarePartDCalculatorPage() {
    const [annualDrugCost, setAnnualDrugCost] = useState(5000);
    const [monthlyPremium, setMonthlyPremium] = useState(40);
    const [hasBrandDrugs, setHasBrandDrugs] = useState(true);
    const [result, setResult] = useState<null | { deductible: number; yourShare: number; premium: number; totalOop: number }>(null);

    const calculateCosts = () => {
        const deductible = 590; // 2026 deductible
        const oopCap = 2000; // 2025+ cap
        const afterDeductible = Math.max(0, annualDrugCost - deductible);

        // 25% coinsurance until OOP cap
        const coinsurance = Math.round(afterDeductible * 0.25);
        const yourShare = Math.min(deductible + coinsurance, oopCap);
        const premium = monthlyPremium * 12;
        const totalOop = yourShare + premium;

        setResult({ deductible, yourShare, premium, totalOop });
    };

    return (
        <>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
                            <Pill className="w-4 h-4 text-blue-400" />
                            <span className="text-sm text-blue-300">{SITE.year} Calculator</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">Medicare Part D Cost Calculator</h1>
                        <p className="text-slate-400">Estimate your annual prescription drug costs</p>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Annual Drug Costs (retail): ${annualDrugCost.toLocaleString()}</label>
                                <input type="range" min="0" max="50000" step="500" value={annualDrugCost} onChange={(e) => setAnnualDrugCost(Number(e.target.value))} className="w-full" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Monthly Plan Premium: ${monthlyPremium}</label>
                                <input type="range" min="0" max="150" step="5" value={monthlyPremium} onChange={(e) => setMonthlyPremium(Number(e.target.value))} className="w-full" />
                            </div>

                            <div className="flex items-center gap-3">
                                <input type="checkbox" id="brand" checked={hasBrandDrugs} onChange={(e) => setHasBrandDrugs(e.target.checked)} className="w-4 h-4" />
                                <label htmlFor="brand" className="text-sm text-slate-300">Taking brand-name drugs</label>
                            </div>
                        </div>

                        <button onClick={calculateCosts} className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
                            <DollarSign className="w-5 h-5" /> Calculate Costs
                        </button>
                    </div>

                    {result && (
                        <div className="bg-blue-900/30 border border-blue-500/50 rounded-xl p-6 mb-8">
                            <h2 className="text-xl font-bold text-white mb-4">Annual Part D Costs</h2>
                            <div className="grid md:grid-cols-4 gap-4">
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-xl font-bold text-white">${result.deductible}</div>
                                    <div className="text-sm text-slate-400">Deductible</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-xl font-bold text-amber-400">${result.yourShare.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">Your Drug Costs</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-xl font-bold text-white">${result.premium.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">Annual Premium</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-2xl font-bold text-blue-400">${result.totalOop.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">Total OOP</div>
                                </div>
                            </div>
                            <p className="text-sm text-blue-400 mt-4 text-center">$2,000 OOP cap applies - you pay $0 after reaching this limit</p>
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
                                name: "How accurate is the medicare part d calculator?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "This calculator provides estimates based on 2026 data and standard formulas. Results may vary based on individual circumstances."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Is this medicare part d calculator free to use?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, this calculator is completely free. No registration or personal information required."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "How often is the medicare part d data updated?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "We update our calculator data regularly to reflect current 2026 rates and regulations."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Can I rely on these medicare part d results for decisions?",
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
