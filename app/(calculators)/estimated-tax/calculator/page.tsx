"use client";

import { useState } from "react";
import Link from "next/link";
import { Receipt, Calculator, ArrowRight, DollarSign } from "lucide-react";
import { SITE, FAQS } from "@/lib/calculators/estimated-tax";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function EstimatedTaxCalculatorPage() {
    const [grossIncome, setGrossIncome] = useState(100000);
    const [filingStatus, setFilingStatus] = useState<"single" | "married">("single");
    const [selfEmployed, setSelfEmployed] = useState(true);
    const [result, setResult] = useState<null | { taxableIncome: number; federalTax: number; seTax: number; totalTax: number; effectiveRate: number }>(null);

    const calculateTax = () => {
        const deduction = filingStatus === "single" ? 15000 : 30000;
        const taxableIncome = Math.max(0, grossIncome - deduction);

        // Simplified federal tax calculation (2026 brackets approximation)
        let federalTax = 0;
        if (taxableIncome > 0) {
            if (taxableIncome <= 11600) federalTax = taxableIncome * 0.10;
            else if (taxableIncome <= 47150) federalTax = 1160 + (taxableIncome - 11600) * 0.12;
            else if (taxableIncome <= 100525) federalTax = 5426 + (taxableIncome - 47150) * 0.22;
            else federalTax = 17169 + (taxableIncome - 100525) * 0.24;
        }
        federalTax = Math.round(federalTax);

        const seTax = selfEmployed ? Math.round(grossIncome * 0.9235 * 0.153) : 0;
        const totalTax = federalTax + seTax;
        const effectiveRate = Math.round((totalTax / grossIncome) * 100);

        setResult({ taxableIncome, federalTax, seTax, totalTax, effectiveRate });
    };

    return (
        <>


            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/50 rounded-full px-4 py-2 mb-4">
                            <Receipt className="w-4 h-4 text-emerald-400" />
                            <span className="text-sm text-emerald-300">{SITE.year} Calculator</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">Estimated Tax Calculator</h1>
                        <p className="text-slate-400">Estimate your total tax liability</p>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Gross Income: ${grossIncome.toLocaleString()}</label>
                                <input type="range" min="20000" max="500000" step="5000" value={grossIncome} onChange={(e) => setGrossIncome(Number(e.target.value))} className="w-full" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Filing Status</label>
                                <div className="flex gap-4">
                                    <button onClick={() => setFilingStatus("single")} className={`px-4 py-2 rounded-lg text-sm ${filingStatus === "single" ? "bg-emerald-600 text-white" : "bg-slate-700 text-slate-300"}`}>Single</button>
                                    <button onClick={() => setFilingStatus("married")} className={`px-4 py-2 rounded-lg text-sm ${filingStatus === "married" ? "bg-emerald-600 text-white" : "bg-slate-700 text-slate-300"}`}>Married</button>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <input type="checkbox" id="se" checked={selfEmployed} onChange={(e) => setSelfEmployed(e.target.checked)} className="w-4 h-4" />
                                <label htmlFor="se" className="text-sm text-slate-300">Include Self-Employment Tax</label>
                            </div>
                        </div>

                        <button onClick={calculateTax} className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
                            <DollarSign className="w-5 h-5" /> Calculate Estimated Tax
                        </button>
                    </div>

                    {result && (
                        <div className="bg-emerald-900/30 border border-emerald-500/50 rounded-xl p-6 mb-8">
                            <h2 className="text-xl font-bold text-white mb-4">Estimated Tax Breakdown</h2>
                            <div className="grid md:grid-cols-4 gap-4">
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-xl font-bold text-white">${result.taxableIncome.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">Taxable Income</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-xl font-bold text-amber-400">${result.federalTax.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">Federal Tax</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-xl font-bold text-amber-400">${result.seTax.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">SE Tax</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-2xl font-bold text-red-400">${result.totalTax.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">Total Tax</div>
                                </div>
                            </div>
                            <p className="text-sm text-slate-400 mt-4 text-center">Effective Rate: {result.effectiveRate}% | Quarterly: ${Math.round(result.totalTax / 4).toLocaleString()}</p>
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
                                name: "How accurate is the estimated tax calculator?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "This calculator provides estimates based on 2026 data and standard formulas. Results may vary based on individual circumstances."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Is this estimated tax calculator free to use?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, this calculator is completely free. No registration or personal information required."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "How often is the estimated tax data updated?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "We update our calculator data regularly to reflect current 2026 rates and regulations."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Can I rely on these estimated tax results for decisions?",
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
