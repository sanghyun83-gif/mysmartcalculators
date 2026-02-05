"use client";

import { useState } from "react";
import Link from "next/link";
import { Home, Calculator, ArrowRight, DollarSign } from "lucide-react";
import { SITE, FAQS, INCOME_LIMITS } from "@/lib/calculators/section-8";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function Section8CalculatorPage() {
    const [income, setIncome] = useState(2000);
    const [householdSize, setHouseholdSize] = useState(3);
    const [fairMarketRent, setFairMarketRent] = useState(1500);
    const [result, setResult] = useState<null | { eligible: boolean; yourPayment: number; voucherAmount: number; limit: number }>(null);

    const calculateVoucher = () => {
        const data = INCOME_LIMITS.find(l => l.householdSize === householdSize) || INCOME_LIMITS[2];
        const annualIncome = income * 12;
        const eligible = annualIncome <= data.limit;

        // You pay 30% of income
        const yourPayment = Math.round(income * 0.30);
        const voucherAmount = Math.max(0, fairMarketRent - yourPayment);

        setResult({ eligible, yourPayment, voucherAmount, limit: data.limit });
    };

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80">
                        <Calculator className="w-6 h-6 text-blue-500" />
                        <span className="text-lg font-bold text-white">MySmartCalculators</span>
                    </Link>
                    <Link href="/section-8" className="text-slate-400 hover:text-white text-sm">← Back</Link>
                </div>
            </header>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
                            <Home className="w-4 h-4 text-blue-400" />
                            <span className="text-sm text-blue-300">{SITE.year} Calculator</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">Section 8 Rent Calculator</h1>
                        <p className="text-slate-400">Estimate your rent payment and voucher amount</p>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Monthly Gross Income: ${income.toLocaleString()}</label>
                                <input type="range" min="0" max="5000" step="100" value={income} onChange={(e) => setIncome(Number(e.target.value))} className="w-full" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Household Size: {householdSize}</label>
                                <input type="range" min="1" max="6" step="1" value={householdSize} onChange={(e) => setHouseholdSize(Number(e.target.value))} className="w-full" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Fair Market Rent (FMR): ${fairMarketRent.toLocaleString()}</label>
                                <input type="range" min="500" max="3000" step="100" value={fairMarketRent} onChange={(e) => setFairMarketRent(Number(e.target.value))} className="w-full" />
                            </div>
                        </div>

                        <button onClick={calculateVoucher} className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
                            <DollarSign className="w-5 h-5" /> Calculate Voucher
                        </button>
                    </div>

                    {result && (
                        <div className={`${result.eligible ? "bg-blue-900/30 border-blue-500/50" : "bg-red-900/30 border-red-500/50"} border rounded-xl p-6 mb-8`}>
                            <h2 className="text-xl font-bold text-white mb-4">Section 8 Estimate</h2>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-xl font-bold text-white">${result.yourPayment}/mo</div>
                                    <div className="text-sm text-slate-400">Your Payment (30%)</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-xl font-bold text-blue-400">${result.voucherAmount}/mo</div>
                                    <div className="text-sm text-slate-400">Voucher Covers</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className={`text-xl font-bold ${result.eligible ? "text-green-400" : "text-red-400"}`}>
                                        {result.eligible ? "Eligible" : "Over Limit"}
                                    </div>
                                    <div className="text-sm text-slate-400">Status</div>
                                </div>
                            </div>
                            <p className="text-sm text-slate-400 mt-4 text-center">Income limit: ${result.limit.toLocaleString()}/year (50% AMI)</p>
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
                    <p className="text-xs text-slate-500">© {SITE.year} MySmartCalculators. Based on HUD guidelines.</p>
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
                                name: "How accurate is the section 8 calculator?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "This calculator provides estimates based on 2026 data and standard formulas. Results may vary based on individual circumstances."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Is this section 8 calculator free to use?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, this calculator is completely free. No registration or personal information required."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "How often is the section 8 data updated?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "We update our calculator data regularly to reflect current 2026 rates and regulations."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Can I rely on these section 8 results for decisions?",
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
