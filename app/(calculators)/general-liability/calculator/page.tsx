"use client";
import { useState } from "react";
import Link from "next/link";
import { SITE, INDUSTRY_CLASSES, COVERAGE_LIMITS, DEDUCTIBLES, FAQS, calculateGLPremium, formatCurrency, GL_2026 } from "@/lib/calculators/general-liability";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Calculator, Shield, ChevronDown, ChevronUp, ArrowLeft, TrendingUp } from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function CalculatorPage() {
    const [industryClass, setIndustryClass] = useState("retail");
    const [coverageLimit, setCoverageLimit] = useState("1m-2m");
    const [deductible, setDeductible] = useState("0");
    const [annualRevenue, setAnnualRevenue] = useState("500000");
    const [employeeCount, setEmployeeCount] = useState("5");
    const [claimsHistory, setClaimsHistory] = useState(false);
    const [hasProducts, setHasProducts] = useState(false);
    const [result, setResult] = useState<ReturnType<typeof calculateGLPremium> | null>(null);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const handleCalculate = () => {
        setResult(calculateGLPremium(industryClass, coverageLimit, deductible, parseInt(annualRevenue.replace(/\D/g, '')) || 0, parseInt(employeeCount) || 0, claimsHistory, hasProducts));
    };

    return (
        <>




            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4"><Calculator className="w-4 h-4 text-blue-400" /><span className="text-sm text-blue-300">Premium Calculator</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">General Liability Premium Calculator</h1>
                    <p className="text-slate-400">7 input fields for advanced premium estimation.</p>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 md:p-8">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Industry Class</label><select value={industryClass} onChange={(e) => setIndustryClass(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">{INDUSTRY_CLASSES.map((i) => <option key={i.id} value={i.id}>{i.name}</option>)}</select></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Coverage Limits</label><select value={coverageLimit} onChange={(e) => setCoverageLimit(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">{COVERAGE_LIMITS.map((l) => <option key={l.id} value={l.id}>{l.name}</option>)}</select></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Deductible</label><select value={deductible} onChange={(e) => setDeductible(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">{DEDUCTIBLES.map((d) => <option key={d.id} value={d.id}>{d.name}</option>)}</select></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Annual Revenue ($)</label><input type="text" value={annualRevenue} onChange={(e) => setAnnualRevenue(e.target.value.replace(/\D/g, ''))} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white" /></div>
                        <div className="md:col-span-2"><label className="block text-sm font-medium text-slate-300 mb-2">Number of Employees</label><input type="text" value={employeeCount} onChange={(e) => setEmployeeCount(e.target.value.replace(/\D/g, ''))} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white" /></div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <label className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg cursor-pointer"><input type="checkbox" checked={claimsHistory} onChange={() => setClaimsHistory(!claimsHistory)} className="w-4 h-4 text-blue-500" /><span className="text-slate-300 text-sm">Prior claims history</span></label>
                        <label className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg cursor-pointer"><input type="checkbox" checked={hasProducts} onChange={() => setHasProducts(!hasProducts)} className="w-4 h-4 text-blue-500" /><span className="text-slate-300 text-sm">Products/Completed Ops</span></label>
                    </div>
                    <button onClick={handleCalculate} className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2"><Calculator className="w-5 h-5" />Calculate Premium</button>
                </div>

                {result && (
                    <div className="mt-8 bg-gradient-to-br from-blue-900/30 to-slate-900 border border-blue-500/30 rounded-2xl p-6 md:p-8">
                        <h2 className="text-xl font-bold text-white mb-6 text-center">Estimated Premium</h2>
                        <div className="text-center mb-6"><p className="text-4xl md:text-5xl font-bold text-blue-400">{formatCurrency(result.annualPremium)}/year</p><p className="text-2xl text-emerald-400 mt-2">{formatCurrency(result.monthlyPremium)}/month</p><p className="text-slate-400 mt-2">{result.industryClass} • {result.coverageLimit}</p></div>
                        <div className="bg-slate-800/50 rounded-xl p-4 mt-6">
                            <h3 className="text-lg font-semibold text-white mb-4">Premium Breakdown</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-400">Annual Premium</span><span className="text-white">{formatCurrency(result.annualPremium)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-400">Monthly Premium</span><span className="text-white">{formatCurrency(result.monthlyPremium)}</span></div>
                                <div className="flex justify-between py-2"><span className="text-slate-400">Rate per $1,000</span><span className="text-white">${result.ratePerThousand}</span></div>
                            </div>
                        </div>
                        <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg flex items-start gap-3"><TrendingUp className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><p className="text-sm text-blue-200">Raise your deductible to reduce premiums. $1,000 deductible typically saves 10%.</p></div>
                    </div>
                )}
            </section>

            <section className="max-w-4xl mx-auto px-4 py-16">
                <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {FAQS.map((faq, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
                            <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-4 text-left"><span className="text-white font-medium pr-4">{faq.question}</span>{openFaq === i ? <ChevronUp className="w-5 h-5 text-blue-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}</button>
                            {openFaq === i && <div className="px-4 pb-4"><p className="text-slate-400">{faq.answer}</p></div>}
                        </div>
                    ))}
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="general-liability" count={5} /></div></div>
                <section className="max-w-4xl mx-auto px-4 py-4"><LegalDisclaimer category="legal" /></section>
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
                                name: "How accurate is the general liability calculator?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "This calculator provides estimates based on 2026 data and standard formulas. Results may vary based on individual circumstances."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Is this general liability calculator free to use?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, this calculator is completely free. No registration or personal information required."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "How often is the general liability data updated?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "We update our calculator data regularly to reflect current 2026 rates and regulations."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Can I rely on these general liability results for decisions?",
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
