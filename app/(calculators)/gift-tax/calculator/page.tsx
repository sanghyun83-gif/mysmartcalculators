"use client";

import { useState } from "react";
import Link from "next/link";
import { Gift, Calculator, ArrowRight, DollarSign } from "lucide-react";
import { SITE, FAQS } from "@/lib/calculators/gift-tax";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function GiftTaxCalculatorPage() {
    const [giftAmount, setGiftAmount] = useState(50000);
    const [recipients, setRecipients] = useState(1);
    const [isMarried, setIsMarried] = useState(false);
    const [result, setResult] = useState<null | { exemptAmount: number; taxableGift: number; usedExemption: number; taxDue: number }>(null);

    const calculateTax = () => {
        const annualExclusion = isMarried ? 36000 : 18000;
        const totalExclusion = annualExclusion * recipients;
        const exemptAmount = Math.min(giftAmount, totalExclusion);
        const taxableGift = Math.max(0, giftAmount - totalExclusion);

        // Taxable gift uses lifetime exemption, no actual tax until $13.61M exceeded
        const usedExemption = taxableGift;
        const taxDue = 0; // Assuming lifetime exemption not exceeded

        setResult({ exemptAmount, taxableGift, usedExemption, taxDue });
    };

    return (
        <>


            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/50 rounded-full px-4 py-2 mb-4">
                            <Gift className="w-4 h-4 text-emerald-400" />
                            <span className="text-sm text-emerald-300">{SITE.year} Calculator</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">Gift Tax Calculator</h1>
                        <p className="text-slate-400">Calculate gift tax and annual exclusion</p>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Total Gift Amount: ${giftAmount.toLocaleString()}</label>
                                <input type="range" min="10000" max="1000000" step="10000" value={giftAmount} onChange={(e) => setGiftAmount(Number(e.target.value))} className="w-full" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Number of Recipients: {recipients}</label>
                                <input type="range" min="1" max="10" step="1" value={recipients} onChange={(e) => setRecipients(Number(e.target.value))} className="w-full" />
                            </div>

                            <div className="flex items-center gap-3">
                                <input type="checkbox" id="married" checked={isMarried} onChange={(e) => setIsMarried(e.target.checked)} className="w-4 h-4" />
                                <label htmlFor="married" className="text-sm text-slate-300">Married (gift splitting - $36K/recipient)</label>
                            </div>
                        </div>

                        <button onClick={calculateTax} className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
                            <DollarSign className="w-5 h-5" /> Calculate Gift Tax
                        </button>
                    </div>

                    {result && (
                        <div className="bg-emerald-900/30 border border-emerald-500/50 rounded-xl p-6 mb-8">
                            <h2 className="text-xl font-bold text-white mb-4">Gift Tax Breakdown</h2>
                            <div className="grid md:grid-cols-4 gap-4">
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-xl font-bold text-emerald-400">${result.exemptAmount.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">Tax-Free</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-xl font-bold text-amber-400">${result.taxableGift.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">Taxable Gift</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-xl font-bold text-white">${result.usedExemption.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">Uses Lifetime</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-2xl font-bold text-emerald-400">${result.taxDue.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">Tax Due</div>
                                </div>
                            </div>
                            <p className="text-sm text-emerald-400 mt-4 text-center">No tax until lifetime exemption ($13.61M) exceeded</p>
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
                                name: "How accurate is the gift tax calculator?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "This calculator provides estimates based on 2026 data and standard formulas. Results may vary based on individual circumstances."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Is this gift tax calculator free to use?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, this calculator is completely free. No registration or personal information required."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "How often is the gift tax data updated?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "We update our calculator data regularly to reflect current 2026 rates and regulations."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Can I rely on these gift tax results for decisions?",
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
