"use client";

import { useState } from "react";
import Link from "next/link";
import { Baby, Calculator, ArrowRight, DollarSign } from "lucide-react";
import { SITE, FAQS, WIC_LIMITS } from "@/lib/calculators/wic";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function WicCalculatorPage() {
    const [income, setIncome] = useState(3000);
    const [householdSize, setHouseholdSize] = useState(3);
    const [category, setCategory] = useState<"pregnant" | "infant" | "child">("child");
    const [result, setResult] = useState<null | { eligible: boolean; limit: number; fplPercent: number }>(null);

    const calculateEligibility = () => {
        const data = WIC_LIMITS.find(w => w.householdSize === householdSize) || WIC_LIMITS[2];
        const eligible = income <= data.monthlyLimit;
        const fpl100 = Math.round(data.annualLimit / 1.85);
        const fplPercent = Math.round((income * 12 / fpl100) * 100);

        setResult({ eligible, limit: data.monthlyLimit, fplPercent });
    };

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80">
                        <Calculator className="w-6 h-6 text-blue-500" />
                        <span className="text-lg font-bold text-white">MySmartCalculators</span>
                    </Link>
                    <Link href="/wic" className="text-slate-400 hover:text-white text-sm">??Back</Link>
                </div>
            </header>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
                            <Baby className="w-4 h-4 text-blue-400" />
                            <span className="text-sm text-blue-300">{SITE.year} Calculator</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">WIC Eligibility Calculator</h1>
                        <p className="text-slate-400">Check if you qualify for WIC benefits</p>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Monthly Gross Income: ${income.toLocaleString()}</label>
                                <input type="range" min="0" max="8000" step="100" value={income} onChange={(e) => setIncome(Number(e.target.value))} className="w-full" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Household Size: {householdSize}</label>
                                <input type="range" min="1" max="6" step="1" value={householdSize} onChange={(e) => setHouseholdSize(Number(e.target.value))} className="w-full" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Category</label>
                                <div className="flex gap-2 flex-wrap">
                                    <button onClick={() => setCategory("pregnant")} className={`px-4 py-2 rounded-lg text-sm ${category === "pregnant" ? "bg-blue-600 text-white" : "bg-slate-700 text-slate-300"}`}>Pregnant/Postpartum</button>
                                    <button onClick={() => setCategory("infant")} className={`px-4 py-2 rounded-lg text-sm ${category === "infant" ? "bg-blue-600 text-white" : "bg-slate-700 text-slate-300"}`}>Infant (0-1)</button>
                                    <button onClick={() => setCategory("child")} className={`px-4 py-2 rounded-lg text-sm ${category === "child" ? "bg-blue-600 text-white" : "bg-slate-700 text-slate-300"}`}>Child (1-5)</button>
                                </div>
                            </div>
                        </div>

                        <button onClick={calculateEligibility} className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
                            <DollarSign className="w-5 h-5" /> Check Eligibility
                        </button>
                    </div>

                    {result && (
                        <div className={`${result.eligible ? "bg-blue-900/30 border-blue-500/50" : "bg-red-900/30 border-red-500/50"} border rounded-xl p-6 mb-8`}>
                            <h2 className="text-xl font-bold text-white mb-4">WIC Eligibility Result</h2>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-xl font-bold text-white">{result.fplPercent}%</div>
                                    <div className="text-sm text-slate-400">Of FPL</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-xl font-bold text-amber-400">${result.limit.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">Monthly Limit</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className={`text-2xl font-bold ${result.eligible ? "text-green-400" : "text-red-400"}`}>
                                        {result.eligible ? "Likely Eligible" : "Over Limit"}
                                    </div>
                                    <div className="text-sm text-slate-400">Status</div>
                                </div>
                            </div>
                            {result.eligible && <p className="text-sm text-blue-400 mt-4 text-center">Contact your local WIC office for nutritional risk screening</p>}
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
                    <p className="text-xs text-slate-500">© {SITE.year} MySmartCalculators. Based on USDA guidelines.</p>
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
                                name: "How accurate is the wic calculator?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "This calculator provides estimates based on 2026 data and standard formulas. Results may vary based on individual circumstances."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Is this wic calculator free to use?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, this calculator is completely free. No registration or personal information required."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "How often is the wic data updated?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "We update our calculator data regularly to reflect current 2026 rates and regulations."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Can I rely on these wic results for decisions?",
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
