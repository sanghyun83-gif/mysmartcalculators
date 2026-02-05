"use client";

import { useState } from "react";
import Link from "next/link";
import { Laptop, Calculator, ArrowRight, DollarSign } from "lucide-react";
import { SITE, FAQS } from "@/lib/calculators/freelance-tax";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function FreelanceTaxCalculatorPage() {
    const [grossIncome, setGrossIncome] = useState(60000);
    const [expenses, setExpenses] = useState(12000);
    const [taxBracket, setTaxBracket] = useState(22);
    const [result, setResult] = useState<null | { netProfit: number; seTax: number; incomeTax: number; totalTax: number; takeHome: number }>(null);

    const calculateTax = () => {
        const netProfit = grossIncome - expenses;
        const seTax = Math.round(netProfit * 0.9235 * 0.153);
        const seDeduction = Math.round(seTax / 2); // Half of SE tax is deductible
        const taxableIncome = netProfit - seDeduction;
        const incomeTax = Math.round(taxableIncome * (taxBracket / 100));
        const totalTax = seTax + incomeTax;
        const takeHome = netProfit - totalTax;

        setResult({ netProfit, seTax, incomeTax, totalTax, takeHome });
    };

    return (
        <>


            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/50 rounded-full px-4 py-2 mb-4">
                            <Laptop className="w-4 h-4 text-emerald-400" />
                            <span className="text-sm text-emerald-300">{SITE.year} Calculator</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">Freelance Tax Calculator</h1>
                        <p className="text-slate-400">Calculate your freelance taxes and take-home pay</p>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Gross Income: ${grossIncome.toLocaleString()}</label>
                                <input type="range" min="10000" max="300000" step="5000" value={grossIncome} onChange={(e) => setGrossIncome(Number(e.target.value))} className="w-full" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Business Expenses: ${expenses.toLocaleString()}</label>
                                <input type="range" min="0" max="100000" step="1000" value={expenses} onChange={(e) => setExpenses(Number(e.target.value))} className="w-full" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Tax Bracket: {taxBracket}%</label>
                                <input type="range" min="10" max="37" step="2" value={taxBracket} onChange={(e) => setTaxBracket(Number(e.target.value))} className="w-full" />
                            </div>
                        </div>

                        <button onClick={calculateTax} className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
                            <DollarSign className="w-5 h-5" /> Calculate Freelance Tax
                        </button>
                    </div>

                    {result && (
                        <div className="bg-emerald-900/30 border border-emerald-500/50 rounded-xl p-6 mb-8">
                            <h2 className="text-xl font-bold text-white mb-4">Freelance Tax Breakdown</h2>
                            <div className="grid md:grid-cols-4 gap-4">
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-xl font-bold text-white">${result.netProfit.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">Net Profit</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-xl font-bold text-amber-400">-${result.seTax.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">SE Tax</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-xl font-bold text-amber-400">-${result.incomeTax.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">Income Tax</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-2xl font-bold text-emerald-400">${result.takeHome.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">Take Home</div>
                                </div>
                            </div>
                            <p className="text-sm text-slate-400 mt-4 text-center">Total Tax: ${result.totalTax.toLocaleString()} ({Math.round(result.totalTax / result.netProfit * 100)}% effective rate)</p>
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
                                name: "How accurate is the freelance tax calculator?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "This calculator provides estimates based on 2026 data and standard formulas. Results may vary based on individual circumstances."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Is this freelance tax calculator free to use?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, this calculator is completely free. No registration or personal information required."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "How often is the freelance tax data updated?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "We update our calculator data regularly to reflect current 2026 rates and regulations."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Can I rely on these freelance tax results for decisions?",
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
