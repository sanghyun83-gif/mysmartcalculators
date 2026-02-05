"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, Calculator, ArrowRight, DollarSign } from "lucide-react";
import { SITE, NONPROFIT_TYPES, BUDGET_TIERS, FAQS } from "@/lib/calculators/nonprofit-insurance";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function NonprofitInsuranceCalculatorPage() {
    const [nonprofitType, setNonprofitType] = useState("");
    const [budget, setBudget] = useState("");
    const [includesDO, setIncludesDO] = useState(true);
    const [includesVolunteer, setIncludesVolunteer] = useState(true);
    const [hasEmployees, setHasEmployees] = useState(true);
    const [result, setResult] = useState<null | { annual: number; monthly: number; breakdown: any[] }>(null);

    const calculatePremium = () => {
        const nonprofit = NONPROFIT_TYPES.find(n => n.id === nonprofitType);
        const budgetTier = BUDGET_TIERS.find(b => b.id === budget);

        if (!nonprofit || !budgetTier) return;

        let glPremium = 1500 * nonprofit.factor * budgetTier.factor;
        let doPremium = includesDO ? 2000 * nonprofit.factor * budgetTier.factor : 0;
        let propertyPremium = 800 * budgetTier.factor;
        let volunteerPremium = includesVolunteer ? 500 : 0;

        const annual = Math.round(glPremium + doPremium + propertyPremium + volunteerPremium);
        const monthly = Math.round(annual / 12);

        const breakdown = [
            { label: "General Liability", value: nonprofit.name, cost: `$${Math.round(glPremium).toLocaleString()}` },
            ...(includesDO ? [{ label: "Directors & Officers", value: "Board protection", cost: `$${Math.round(doPremium).toLocaleString()}` }] : []),
            { label: "Business Property", value: "Equipment", cost: `$${Math.round(propertyPremium).toLocaleString()}` },
            ...(includesVolunteer ? [{ label: "Volunteer Accident", value: "Volunteer injury", cost: `$${volunteerPremium.toLocaleString()}` }] : []),
        ];

        setResult({ annual, monthly, breakdown });
    };

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80">
                        <Calculator className="w-6 h-6 text-blue-500" />
                        <span className="text-lg font-bold text-white">MySmartCalculators</span>
                    </Link>
                    <Link href="/nonprofit-insurance" className="text-slate-400 hover:text-white text-sm">← Back to Overview</Link>
                </div>
            </header>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
                            <Heart className="w-4 h-4 text-blue-400" />
                            <span className="text-sm text-blue-300">{SITE.year} Calculator</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">Nonprofit Insurance Calculator</h1>
                        <p className="text-slate-400">Estimate your 501(c)(3) organization insurance costs</p>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Organization Type</label>
                                <select value={nonprofitType} onChange={(e) => setNonprofitType(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">
                                    <option value="">Select type...</option>
                                    {NONPROFIT_TYPES.map((n) => (<option key={n.id} value={n.id}>{n.name}</option>))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Annual Budget</label>
                                <select value={budget} onChange={(e) => setBudget(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">
                                    <option value="">Select budget...</option>
                                    {BUDGET_TIERS.map((b) => (<option key={b.id} value={b.id}>{b.name}</option>))}
                                </select>
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-slate-300 mb-2">Coverage Options</label>
                                <div className="grid md:grid-cols-3 gap-4">
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" checked={includesDO} onChange={(e) => setIncludesDO(e.target.checked)} className="rounded bg-slate-700 border-slate-600" />
                                        <span className="text-slate-300">Directors & Officers</span>
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" checked={includesVolunteer} onChange={(e) => setIncludesVolunteer(e.target.checked)} className="rounded bg-slate-700 border-slate-600" />
                                        <span className="text-slate-300">Volunteer Accident</span>
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" checked={hasEmployees} onChange={(e) => setHasEmployees(e.target.checked)} className="rounded bg-slate-700 border-slate-600" />
                                        <span className="text-slate-300">Has Paid Employees</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <button onClick={calculatePremium} disabled={!nonprofitType || !budget} className="w-full mt-6 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
                            <DollarSign className="w-5 h-5" /> Calculate Premium
                        </button>
                    </div>

                    {result && (
                        <div className="bg-blue-900/30 border border-blue-500/50 rounded-xl p-6 mb-8">
                            <h2 className="text-xl font-bold text-white mb-4">Estimated Annual Premium</h2>
                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-3xl font-bold text-blue-400">${result.annual.toLocaleString()}/yr</div>
                                    <div className="text-sm text-slate-400">Total Annual Premium</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-3xl font-bold text-white">${result.monthly.toLocaleString()}/mo</div>
                                    <div className="text-sm text-slate-400">Monthly Payment</div>
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-3">Coverage Breakdown</h3>
                            <div className="space-y-2">
                                {result.breakdown.map((item, index) => (
                                    <div key={index} className="flex justify-between text-sm">
                                        <span className="text-slate-400">{item.label}: {item.value}</span>
                                        <span className="text-blue-300">{item.cost}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-xs text-slate-500 mt-4">*Estimates based on 2026 nonprofit insurance data</p>
                        </div>
                    )}

                    <LegalDisclaimer category="insurance" />
                </div>
            </section>

            <section className="py-16 px-4 bg-slate-800/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {FAQS.map((faq, index) => (
                            <details key={index} className="group bg-slate-800 border border-slate-700 rounded-xl">
                                <summary className="flex items-center justify-between p-6 cursor-pointer">
                                    <span className="font-medium text-white">{faq.question}</span>
                                    <ArrowRight className="w-5 h-5 text-slate-400 group-open:rotate-90 transition-transform" />
                                </summary>
                                <div className="px-6 pb-6 text-slate-300">{faq.answer}</div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <footer className="bg-slate-800 border-t border-slate-700 py-8">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <p className="text-sm text-slate-500">© {SITE.year} MySmartCalculators. Data from NAIC, Council of Nonprofits.</p>
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
                                name: "How accurate is the nonprofit insurance calculator?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "This calculator provides estimates based on 2026 data and standard formulas. Results may vary based on individual circumstances."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Is this nonprofit insurance calculator free to use?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, this calculator is completely free. No registration or personal information required."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "How often is the nonprofit insurance data updated?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "We update our calculator data regularly to reflect current 2026 rates and regulations."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Can I rely on these nonprofit insurance results for decisions?",
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
