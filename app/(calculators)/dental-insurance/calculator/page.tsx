"use client";

import { useState } from "react";
import Link from "next/link";
import { Smile, Calculator, ArrowRight, DollarSign } from "lucide-react";
import { SITE, PLAN_TYPES, FAQS } from "@/lib/calculators/dental-insurance";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function DentalInsuranceCalculatorPage() {
    const [planType, setPlanType] = useState("");
    const [needMajor, setNeedMajor] = useState(false);
    const [includeOrtho, setIncludeOrtho] = useState(false);
    const [result, setResult] = useState<null | { monthly: number; annualMax: string }>(null);

    const calculatePremium = () => {
        const plan = PLAN_TYPES.find(p => p.id === planType);
        if (!plan) return;

        const baseRate = 35; // avg monthly
        const majorAdjust = needMajor ? 1.15 : 1.0;
        const orthoAdjust = includeOrtho ? 1.3 : 1.0;
        const monthly = Math.round(baseRate * plan.factor * majorAdjust * orthoAdjust);
        const annualMax = plan.id === "dhmo" ? "$1,000" : "$1,500";

        setResult({ monthly, annualMax });
    };

    return (
        <>


            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
                            <Smile className="w-4 h-4 text-blue-400" />
                            <span className="text-sm text-blue-300">{SITE.year} Calculator</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">Dental Insurance Calculator</h1>
                        <p className="text-slate-400">Estimate your dental coverage costs</p>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Plan Type</label>
                                <select value={planType} onChange={(e) => setPlanType(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">
                                    <option value="">Select plan...</option>
                                    {PLAN_TYPES.map((p) => (<option key={p.id} value={p.id}>{p.name}</option>))}
                                </select>
                            </div>

                            <div>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" checked={needMajor} onChange={(e) => setNeedMajor(e.target.checked)} className="rounded bg-slate-700 border-slate-600" />
                                    <span className="text-slate-300">Expecting major work (crowns, root canals) +15%</span>
                                </label>
                            </div>

                            <div>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" checked={includeOrtho} onChange={(e) => setIncludeOrtho(e.target.checked)} className="rounded bg-slate-700 border-slate-600" />
                                    <span className="text-slate-300">Include orthodontics +30%</span>
                                </label>
                            </div>
                        </div>

                        <button onClick={calculatePremium} disabled={!planType} className="w-full mt-6 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
                            <DollarSign className="w-5 h-5" /> Calculate Premium
                        </button>
                    </div>

                    {result && (
                        <div className="bg-blue-900/30 border border-blue-500/50 rounded-xl p-6 mb-8">
                            <h2 className="text-xl font-bold text-white mb-4">Estimated Premium</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-3xl font-bold text-blue-400">${result.monthly}/mo</div>
                                    <div className="text-sm text-slate-400">Monthly Premium</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-3xl font-bold text-white">{result.annualMax}</div>
                                    <div className="text-sm text-slate-400">Annual Maximum</div>
                                </div>
                            </div>
                            <p className="text-xs text-slate-500 mt-4">*Coverage: Preventive 100%, Basic 80%, Major 50% (2026)</p>
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
                                name: "How accurate is the dental insurance calculator?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "This calculator provides estimates based on 2026 data and standard formulas. Results may vary based on individual circumstances."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Is this dental insurance calculator free to use?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, this calculator is completely free. No registration or personal information required."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "How often is the dental insurance data updated?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "We update our calculator data regularly to reflect current 2026 rates and regulations."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Can I rely on these dental insurance results for decisions?",
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
