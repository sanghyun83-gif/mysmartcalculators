"use client";

import { useState } from "react";
import Link from "next/link";
import { Calculator, ArrowRight, DollarSign } from "lucide-react";
import { SITE, FAQS, AMI_LIMITS } from "@/lib/calculators/era";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function ERACalculatorPage() {
    const [income, setIncome] = useState(45000);
    const [householdSize, setHouseholdSize] = useState(3);
    const [rent, setRent] = useState(1500);
    const [result, setResult] = useState<null | { eligible: boolean; priority: boolean; limit: number }>(null);

    const calculateEligibility = () => {
        const data = AMI_LIMITS.find(l => l.size === householdSize) || AMI_LIMITS[2];
        const isEligibleAt80 = income <= data.limit80;
        const isPriorityAt50 = income <= data.limit50;

        setResult({
            eligible: isEligibleAt80,
            priority: isPriorityAt50,
            limit: data.limit80
        });
    };

    return (
        <>


            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <h1 className="text-3xl font-bold text-white mb-2">ERA Eligibility Checker</h1>
                        <p className="text-slate-400">Check if you qualify for emergency rent help</p>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Annual Household Income: ${income.toLocaleString()}</label>
                                <input type="range" min="0" max="150000" step="1000" value={income} onChange={(e) => setIncome(Number(e.target.value))} className="w-full accent-blue-500" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Household Size: {householdSize}</label>
                                <input type="range" min="1" max="6" step="1" value={householdSize} onChange={(e) => setHouseholdSize(Number(e.target.value))} className="w-full accent-blue-500" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Monthly Rent: ${rent.toLocaleString()}</label>
                                <input type="range" min="500" max="5000" step="100" value={rent} onChange={(e) => setRent(Number(e.target.value))} className="w-full accent-blue-500" />
                            </div>
                        </div>

                        <button onClick={calculateEligibility} className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all">
                            <DollarSign className="w-5 h-5" /> Check Eligibility
                        </button>
                    </div>

                    {result && (
                        <div className={`${result.eligible ? "bg-blue-900/30 border-blue-500/50" : "bg-red-900/30 border-red-500/50"} border rounded-xl p-8 mb-8 text-center animate-in fade-in zoom-in-95 duration-500`}>
                            <h2 className={`text-2xl font-bold mb-2 ${result.eligible ? "text-blue-400" : "text-red-400"}`}>
                                {result.eligible ? (result.priority ? "Priority Qualifier (50% AMI)" : "Qualifies (80% AMI)") : "Likely Over Income Limit"}
                            </h2>
                            <p className="text-slate-400 text-sm max-w-md mx-auto">
                                {result.eligible
                                    ? "Your income is below the estimated 80% Area Median Income limit. You may be eligible for rental assistance."
                                    : `Your income exceeds the estimated regional 80% AMI limit of $${result.limit.toLocaleString()}.`}
                            </p>
                            {result.eligible && (
                                <div className="mt-6 flex flex-wrap justify-center gap-4">
                                    <div className="bg-slate-800 px-4 py-2 rounded-lg text-xs border border-slate-700">Priority: {result.priority ? "Yes" : "Std"}</div>
                                    <div className="bg-slate-800 px-4 py-2 rounded-lg text-xs border border-slate-700 text-blue-300">Potential Aid: Up to 18 mo</div>
                                </div>
                            )}
                        </div>
                    )}

                    <LegalDisclaimer category="insurance" />
                </div>
            </section>

            <section className="py-12 px-4 bg-slate-800/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-xl font-bold text-white text-center mb-8 text-sm uppercase tracking-widest">Common Questions</h2>
                    <div className="grid md:grid-cols-1 gap-4">
                        {FAQS.map((faq, index) => (
                            <details key={index} className="group bg-slate-800 border border-slate-700 rounded-xl overflow-hidden shadow-md">
                                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-slate-700/50 transition-colors list-none font-medium text-white">
                                    {faq.question}
                                    <ArrowRight className="w-4 h-4 text-slate-500 group-open:rotate-90 transition-transform" />
                                </summary>
                                <div className="px-5 pb-5 text-slate-400 text-[13px] leading-relaxed italic border-t border-slate-700/50 pt-3">{faq.answer}</div>
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
                                name: "How accurate is the era calculator?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "This calculator provides estimates based on 2026 data and standard formulas. Results may vary based on individual circumstances."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Is this era calculator free to use?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, this calculator is completely free. No registration or personal information required."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "How often is the era data updated?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "We update our calculator data regularly to reflect current 2026 rates and regulations."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Can I rely on these era results for decisions?",
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
