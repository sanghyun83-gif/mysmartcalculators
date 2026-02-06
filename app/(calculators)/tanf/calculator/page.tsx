"use client";

import { useState } from "react";
import Link from "next/link";
import { Wallet, Calculator, ArrowRight, DollarSign } from "lucide-react";
import { SITE, FAQS, TANF_BENEFITS } from "@/lib/calculators/tanf";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function TanfCalculatorPage() {
    const [familySize, setFamilySize] = useState(3);
    const [stateType, setStateType] = useState<"low" | "avg" | "high">("avg");
    const [hasChildren, setHasChildren] = useState(true);
    const [result, setResult] = useState<null | { eligible: boolean; benefit: number; range: string }>(null);

    const calculateBenefit = () => {
        if (!hasChildren) {
            setResult({ eligible: false, benefit: 0, range: "$0" });
            return;
        }

        const data = TANF_BENEFITS.find(b => b.family === familySize) || TANF_BENEFITS[2];
        let benefit = data.avgState;

        if (stateType === "low") benefit = data.lowState;
        else if (stateType === "high") benefit = data.highState;

        setResult({
            eligible: true,
            benefit,
            range: `$${data.lowState} - $${data.highState}`
        });
    };

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80">
                        <Calculator className="w-6 h-6 text-blue-500" />
                        <span className="text-lg font-bold text-white">MySmartCalculators</span>
                    </Link>
                    <Link href="/tanf" className="text-slate-400 hover:text-white text-sm"> Back</Link>
                </div>
            </header>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
                            <Wallet className="w-4 h-4 text-blue-400" />
                            <span className="text-sm text-blue-300">{SITE.year} Calculator</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">TANF Benefits Calculator</h1>
                        <p className="text-slate-400">Estimate your monthly cash benefit</p>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Family Size: {familySize}</label>
                                <input type="range" min="1" max="6" step="1" value={familySize} onChange={(e) => setFamilySize(Number(e.target.value))} className="w-full" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">State Benefit Level</label>
                                <div className="flex gap-2 flex-wrap">
                                    <button onClick={() => setStateType("low")} className={`px-4 py-2 rounded-lg text-sm ${stateType === "low" ? "bg-blue-600 text-white" : "bg-slate-700 text-slate-300"}`}>Low States</button>
                                    <button onClick={() => setStateType("avg")} className={`px-4 py-2 rounded-lg text-sm ${stateType === "avg" ? "bg-blue-600 text-white" : "bg-slate-700 text-slate-300"}`}>Average</button>
                                    <button onClick={() => setStateType("high")} className={`px-4 py-2 rounded-lg text-sm ${stateType === "high" ? "bg-blue-600 text-white" : "bg-slate-700 text-slate-300"}`}>High States</button>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <input type="checkbox" id="children" checked={hasChildren} onChange={(e) => setHasChildren(e.target.checked)} className="w-4 h-4" />
                                <label htmlFor="children" className="text-sm text-slate-300">Have dependent children under 18</label>
                            </div>
                        </div>

                        <button onClick={calculateBenefit} className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
                            <DollarSign className="w-5 h-5" /> Calculate TANF
                        </button>
                    </div>

                    {result && (
                        <div className={`${result.eligible ? "bg-blue-900/30 border-blue-500/50" : "bg-red-900/30 border-red-500/50"} border rounded-xl p-6 mb-8`}>
                            <h2 className="text-xl font-bold text-white mb-4">Estimated TANF Benefits</h2>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-xl font-bold text-white">{result.range}</div>
                                    <div className="text-sm text-slate-400">State Range</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className={`text-2xl font-bold ${result.eligible ? "text-blue-400" : "text-red-400"}`}>
                                        ${result.benefit}/mo
                                    </div>
                                    <div className="text-sm text-slate-400">Your Estimate</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className={`text-xl font-bold ${result.eligible ? "text-green-400" : "text-red-400"}`}>
                                        {result.eligible ? "May Qualify" : "No Children"}
                                    </div>
                                    <div className="text-sm text-slate-400">Status</div>
                                </div>
                            </div>
                            <p className="text-sm text-amber-400 mt-4 text-center">60-month federal lifetime limit applies</p>
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
                    <p className="text-xs text-slate-500">© {SITE.year} MySmartCalculators. Based on HHS guidelines.</p>
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
                                name: "How accurate is the tanf calculator?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "This calculator provides estimates based on 2026 data and standard formulas. Results may vary based on individual circumstances."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Is this tanf calculator free to use?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, this calculator is completely free. No registration or personal information required."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "How often is the tanf data updated?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "We update our calculator data regularly to reflect current 2026 rates and regulations."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Can I rely on these tanf results for decisions?",
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
