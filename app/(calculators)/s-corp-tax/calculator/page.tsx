"use client";

import { useState } from "react";
import Link from "next/link";
import { Building2, Calculator, ArrowRight, DollarSign } from "lucide-react";
import { SITE, FAQS } from "@/lib/calculators/s-corp-tax";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function SCorpTaxCalculatorPage() {
    const [netProfit, setNetProfit] = useState(120000);
    const [salaryPercent, setSalaryPercent] = useState(50);
    const [taxBracket, setTaxBracket] = useState(22);
    const [result, setResult] = useState<null | { salary: number; distribution: number; payrollTax: number; soleProprietorTax: number; savings: number }>(null);

    const calculateTax = () => {
        const salary = Math.round(netProfit * (salaryPercent / 100));
        const distribution = netProfit - salary;

        // S-Corp: Payroll tax only on salary
        const payrollTax = Math.round(salary * 0.153);

        // Sole Proprietor: SE tax on full profit
        const soleProprietorTax = Math.round(netProfit * 0.9235 * 0.153);

        const savings = soleProprietorTax - payrollTax;

        setResult({ salary, distribution, payrollTax, soleProprietorTax, savings });
    };

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80">
                        <Calculator className="w-6 h-6 text-emerald-500" />
                        <span className="text-lg font-bold text-white">MySmartCalculators</span>
                    </Link>
                    <Link href="/s-corp-tax" className="text-slate-400 hover:text-white text-sm"> Back</Link>
                </div>
            </header>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/50 rounded-full px-4 py-2 mb-4">
                            <Building2 className="w-4 h-4 text-emerald-400" />
                            <span className="text-sm text-emerald-300">{SITE.year} Calculator</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">S-Corp Tax Savings Calculator</h1>
                        <p className="text-slate-400">Compare S-Corp vs Sole Proprietor taxes</p>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Net Profit: ${netProfit.toLocaleString()}</label>
                                <input type="range" min="40000" max="500000" step="10000" value={netProfit} onChange={(e) => setNetProfit(Number(e.target.value))} className="w-full" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Salary %: {salaryPercent}% (${Math.round(netProfit * salaryPercent / 100).toLocaleString()})</label>
                                <input type="range" min="30" max="70" step="5" value={salaryPercent} onChange={(e) => setSalaryPercent(Number(e.target.value))} className="w-full" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Tax Bracket: {taxBracket}%</label>
                                <input type="range" min="10" max="37" step="2" value={taxBracket} onChange={(e) => setTaxBracket(Number(e.target.value))} className="w-full" />
                            </div>
                        </div>

                        <button onClick={calculateTax} className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
                            <DollarSign className="w-5 h-5" /> Calculate S-Corp Savings
                        </button>
                    </div>

                    {result && (
                        <div className="bg-emerald-900/30 border border-emerald-500/50 rounded-xl p-6 mb-8">
                            <h2 className="text-xl font-bold text-white mb-4">S-Corp Tax Comparison</h2>
                            <div className="grid md:grid-cols-4 gap-4">
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-xl font-bold text-white">${result.salary.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">Salary</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-xl font-bold text-white">${result.distribution.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">Distribution</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-xl font-bold text-amber-400">${result.payrollTax.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">S-Corp Tax</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-2xl font-bold text-emerald-400">${result.savings.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">Saved vs Sole Prop</div>
                                </div>
                            </div>
                            <p className="text-sm text-slate-400 mt-4 text-center">Sole Proprietor SE Tax: ${result.soleProprietorTax.toLocaleString()}</p>
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
                                name: "How accurate is the s corp tax calculator?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "This calculator provides estimates based on 2026 data and standard formulas. Results may vary based on individual circumstances."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Is this s corp tax calculator free to use?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, this calculator is completely free. No registration or personal information required."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "How often is the s corp tax data updated?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "We update our calculator data regularly to reflect current 2026 rates and regulations."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Can I rely on these s corp tax results for decisions?",
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
