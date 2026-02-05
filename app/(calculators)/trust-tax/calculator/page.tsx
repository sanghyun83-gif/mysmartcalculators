"use client";

import { useState } from "react";
import Link from "next/link";
import { FileText, Calculator, ArrowRight, DollarSign } from "lucide-react";
import { SITE, FAQS } from "@/lib/calculators/trust-tax";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function TrustTaxCalculatorPage() {
    const [trustIncome, setTrustIncome] = useState(50000);
    const [distributed, setDistributed] = useState(30000);
    const [isGrantor, setIsGrantor] = useState(false);
    const [result, setResult] = useState<null | { retained: number; trustTax: number; niit: number; totalTax: number; effectiveRate: number }>(null);

    const calculateTax = () => {
        if (isGrantor) {
            // Grantor trust - no trust-level tax
            setResult({ retained: 0, trustTax: 0, niit: 0, totalTax: 0, effectiveRate: 0 });
            return;
        }

        const retained = Math.max(0, trustIncome - distributed);

        // Compressed trust brackets (2026)
        let trustTax = 0;
        if (retained > 0) {
            if (retained <= 3100) trustTax = retained * 0.10;
            else if (retained <= 11150) trustTax = 310 + (retained - 3100) * 0.24;
            else if (retained <= 15200) trustTax = 2242 + (retained - 11150) * 0.35;
            else trustTax = 3660 + (retained - 15200) * 0.37;
        }
        trustTax = Math.round(trustTax);

        // NIIT on investment income over $15,200
        const niit = retained > 15200 ? Math.round((retained - 15200) * 0.038) : 0;
        const totalTax = trustTax + niit;
        const effectiveRate = retained > 0 ? Math.round((totalTax / retained) * 100) : 0;

        setResult({ retained, trustTax, niit, totalTax, effectiveRate });
    };

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80">
                        <Calculator className="w-6 h-6 text-emerald-500" />
                        <span className="text-lg font-bold text-white">MySmartCalculators</span>
                    </Link>
                    <Link href="/trust-tax" className="text-slate-400 hover:text-white text-sm">← Back</Link>
                </div>
            </header>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/50 rounded-full px-4 py-2 mb-4">
                            <FileText className="w-4 h-4 text-emerald-400" />
                            <span className="text-sm text-emerald-300">{SITE.year} Calculator</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">Trust Tax Calculator</h1>
                        <p className="text-slate-400">Calculate trust income tax on retained income</p>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Trust Income: ${trustIncome.toLocaleString()}</label>
                                <input type="range" min="5000" max="500000" step="5000" value={trustIncome} onChange={(e) => setTrustIncome(Number(e.target.value))} className="w-full" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Distributed to Beneficiaries: ${distributed.toLocaleString()}</label>
                                <input type="range" min="0" max={trustIncome} step="5000" value={distributed} onChange={(e) => setDistributed(Number(e.target.value))} className="w-full" />
                            </div>

                            <div className="flex items-center gap-3">
                                <input type="checkbox" id="grantor" checked={isGrantor} onChange={(e) => setIsGrantor(e.target.checked)} className="w-4 h-4" />
                                <label htmlFor="grantor" className="text-sm text-slate-300">Grantor Trust (taxed to grantor, not trust)</label>
                            </div>
                        </div>

                        <button onClick={calculateTax} className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
                            <DollarSign className="w-5 h-5" /> Calculate Trust Tax
                        </button>
                    </div>

                    {result && (
                        <div className="bg-emerald-900/30 border border-emerald-500/50 rounded-xl p-6 mb-8">
                            <h2 className="text-xl font-bold text-white mb-4">Trust Tax Breakdown</h2>
                            {isGrantor ? (
                                <p className="text-emerald-400 text-center">Grantor trust: All income taxed to grantor at their individual rates</p>
                            ) : (
                                <>
                                    <div className="grid md:grid-cols-4 gap-4">
                                        <div className="bg-slate-800 rounded-lg p-4 text-center">
                                            <div className="text-xl font-bold text-white">${result.retained.toLocaleString()}</div>
                                            <div className="text-sm text-slate-400">Retained</div>
                                        </div>
                                        <div className="bg-slate-800 rounded-lg p-4 text-center">
                                            <div className="text-xl font-bold text-amber-400">${result.trustTax.toLocaleString()}</div>
                                            <div className="text-sm text-slate-400">Income Tax</div>
                                        </div>
                                        <div className="bg-slate-800 rounded-lg p-4 text-center">
                                            <div className="text-xl font-bold text-amber-400">${result.niit.toLocaleString()}</div>
                                            <div className="text-sm text-slate-400">NIIT (3.8%)</div>
                                        </div>
                                        <div className="bg-slate-800 rounded-lg p-4 text-center">
                                            <div className="text-2xl font-bold text-red-400">${result.totalTax.toLocaleString()}</div>
                                            <div className="text-sm text-slate-400">Total Tax</div>
                                        </div>
                                    </div>
                                    <p className="text-sm text-slate-400 mt-4 text-center">Effective Rate: {result.effectiveRate}% on retained income</p>
                                </>
                            )}
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
                    <p className="text-xs text-slate-500">© {SITE.year} MySmartCalculators. Based on IRS guidelines.</p>
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
                                name: "How accurate is the trust tax calculator?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "This calculator provides estimates based on 2026 data and standard formulas. Results may vary based on individual circumstances."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Is this trust tax calculator free to use?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, this calculator is completely free. No registration or personal information required."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "How often is the trust tax data updated?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "We update our calculator data regularly to reflect current 2026 rates and regulations."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Can I rely on these trust tax results for decisions?",
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
