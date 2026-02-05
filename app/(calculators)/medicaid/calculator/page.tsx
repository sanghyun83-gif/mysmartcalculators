"use client";

import { useState } from "react";
import Link from "next/link";
import { Users, Calculator, ArrowRight, DollarSign } from "lucide-react";
import { SITE, FAQS, FPL_GUIDELINES } from "@/lib/calculators/medicaid";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function MedicaidCalculatorPage() {
    const [income, setIncome] = useState(25000);
    const [householdSize, setHouseholdSize] = useState(2);
    const [isExpansionState, setIsExpansionState] = useState(true);
    const [result, setResult] = useState<null | { eligible: boolean; fplPercent: number; limit: number }>(null);

    const calculateEligibility = () => {
        const fplData = FPL_GUIDELINES.find(f => f.householdSize === householdSize) || FPL_GUIDELINES[0];
        const limit = isExpansionState ? fplData.fpl138 : Math.round(fplData.fpl100 * 0.5);
        const fplPercent = Math.round((income / fplData.fpl100) * 100);
        const eligible = income <= limit;

        setResult({ eligible, fplPercent, limit });
    };

    return (
        <>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
                            <Users className="w-4 h-4 text-blue-400" />
                            <span className="text-sm text-blue-300">{SITE.year} Calculator</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">Medicaid Eligibility Calculator</h1>
                        <p className="text-slate-400">Check if you qualify for Medicaid</p>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Annual Household Income: ${income.toLocaleString()}</label>
                                <input type="range" min="0" max="100000" step="1000" value={income} onChange={(e) => setIncome(Number(e.target.value))} className="w-full" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Household Size: {householdSize}</label>
                                <input type="range" min="1" max="6" step="1" value={householdSize} onChange={(e) => setHouseholdSize(Number(e.target.value))} className="w-full" />
                            </div>

                            <div className="flex items-center gap-3">
                                <input type="checkbox" id="expansion" checked={isExpansionState} onChange={(e) => setIsExpansionState(e.target.checked)} className="w-4 h-4" />
                                <label htmlFor="expansion" className="text-sm text-slate-300">Live in Medicaid expansion state (40 states)</label>
                            </div>
                        </div>

                        <button onClick={calculateEligibility} className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
                            <DollarSign className="w-5 h-5" /> Check Eligibility
                        </button>
                    </div>

                    {result && (
                        <div className={`${result.eligible ? "bg-blue-900/30 border-blue-500/50" : "bg-red-900/30 border-red-500/50"} border rounded-xl p-6 mb-8`}>
                            <h2 className="text-xl font-bold text-white mb-4">Eligibility Result</h2>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-xl font-bold text-white">{result.fplPercent}%</div>
                                    <div className="text-sm text-slate-400">Of FPL</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-xl font-bold text-amber-400">${result.limit.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">Income Limit</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className={`text-2xl font-bold ${result.eligible ? "text-green-400" : "text-red-400"}`}>
                                        {result.eligible ? "Likely Eligible" : "Not Eligible"}
                                    </div>
                                    <div className="text-sm text-slate-400">Status</div>
                                </div>
                            </div>
                            {!result.eligible && <p className="text-sm text-amber-400 mt-4 text-center">Check marketplace subsidies - you may qualify for help</p>}
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
                                name: "How accurate is the medicaid calculator?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "This calculator provides estimates based on 2026 data and standard formulas. Results may vary based on individual circumstances."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Is this medicaid calculator free to use?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, this calculator is completely free. No registration or personal information required."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "How often is the medicaid data updated?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "We update our calculator data regularly to reflect current 2026 rates and regulations."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Can I rely on these medicaid results for decisions?",
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
