"use client";

import { useState } from "react";
import Link from "next/link";
import { Landmark, Calculator, ArrowRight, DollarSign } from "lucide-react";
import { SITE, FAQS } from "@/lib/calculators/inheritance";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function InheritanceCalculatorPage() {
    const [inheritanceValue, setInheritanceValue] = useState(500000);
    const [relationship, setRelationship] = useState<"spouse" | "child" | "other">("child");
    const [hasStateTax, setHasStateTax] = useState(false);
    const [result, setResult] = useState<null | { federalTax: number; stateTax: number; netInheritance: number }>(null);

    const calculateTax = () => {
        // Spouse is always exempt
        if (relationship === "spouse") {
            setResult({ federalTax: 0, stateTax: 0, netInheritance: inheritanceValue });
            return;
        }

        // Federal estate tax threshold $13.61M (usually not applicable to inheritance itself)
        const federalTax = 0; // For inheritance, federal tax is on estate not beneficiary

        // State inheritance tax (if applicable) - using average 10% for non-spouse
        let stateTax = 0;
        if (hasStateTax && relationship === "other") {
            stateTax = Math.round(inheritanceValue * 0.10);
        } else if (hasStateTax && relationship === "child") {
            stateTax = Math.round(inheritanceValue * 0.05); // Reduced rate for children
        }

        const netInheritance = inheritanceValue - stateTax;
        setResult({ federalTax, stateTax, netInheritance });
    };

    return (
        <>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/50 rounded-full px-4 py-2 mb-4">
                            <Landmark className="w-4 h-4 text-emerald-400" />
                            <span className="text-sm text-emerald-300">{SITE.year} Calculator</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">Inheritance Tax Calculator</h1>
                        <p className="text-slate-400">Calculate taxes on inherited assets</p>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Inheritance Value: ${inheritanceValue.toLocaleString()}</label>
                                <input type="range" min="50000" max="5000000" step="50000" value={inheritanceValue} onChange={(e) => setInheritanceValue(Number(e.target.value))} className="w-full" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Relationship to Deceased</label>
                                <div className="flex gap-2 flex-wrap">
                                    <button onClick={() => setRelationship("spouse")} className={`px-4 py-2 rounded-lg text-sm ${relationship === "spouse" ? "bg-emerald-600 text-white" : "bg-slate-700 text-slate-300"}`}>Spouse</button>
                                    <button onClick={() => setRelationship("child")} className={`px-4 py-2 rounded-lg text-sm ${relationship === "child" ? "bg-emerald-600 text-white" : "bg-slate-700 text-slate-300"}`}>Child</button>
                                    <button onClick={() => setRelationship("other")} className={`px-4 py-2 rounded-lg text-sm ${relationship === "other" ? "bg-emerald-600 text-white" : "bg-slate-700 text-slate-300"}`}>Other</button>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <input type="checkbox" id="state" checked={hasStateTax} onChange={(e) => setHasStateTax(e.target.checked)} className="w-4 h-4" />
                                <label htmlFor="state" className="text-sm text-slate-300">State has inheritance tax (IA, KY, MD, NE, NJ, PA)</label>
                            </div>
                        </div>

                        <button onClick={calculateTax} className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
                            <DollarSign className="w-5 h-5" /> Calculate Inheritance Tax
                        </button>
                    </div>

                    {result && (
                        <div className="bg-emerald-900/30 border border-emerald-500/50 rounded-xl p-6 mb-8">
                            <h2 className="text-xl font-bold text-white mb-4">Inheritance Tax Breakdown</h2>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-xl font-bold text-white">${result.federalTax.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">Federal Tax</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-xl font-bold text-amber-400">${result.stateTax.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">State Tax</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-2xl font-bold text-emerald-400">${result.netInheritance.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">Net Inheritance</div>
                                </div>
                            </div>
                            {relationship === "spouse" && <p className="text-sm text-emerald-400 mt-4 text-center">Spouses are exempt from inheritance tax</p>}
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
                                name: "How accurate is the inheritance calculator?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "This calculator provides estimates based on 2026 data and standard formulas. Results may vary based on individual circumstances."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Is this inheritance calculator free to use?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, this calculator is completely free. No registration or personal information required."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "How often is the inheritance data updated?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "We update our calculator data regularly to reflect current 2026 rates and regulations."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Can I rely on these inheritance results for decisions?",
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
