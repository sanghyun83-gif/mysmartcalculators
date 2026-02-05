"use client";

import { useState } from "react";
import Link from "next/link";
import { Wrench, Calculator, ArrowRight, DollarSign } from "lucide-react";
import { SITE, CONTRACTOR_TYPES, COVERAGE_TYPES, REVENUE_TIERS, EMPLOYEE_COUNTS, FAQS } from "@/lib/calculators/contractor-insurance";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function ContractorInsuranceCalculatorPage() {
    const [contractorType, setContractorType] = useState("");
    const [revenue, setRevenue] = useState("");
    const [employees, setEmployees] = useState("");
    const [includeWC, setIncludeWC] = useState(true);
    const [includeAuto, setIncludeAuto] = useState(false);
    const [includeTools, setIncludeTools] = useState(true);
    const [includeBuildersRisk, setIncludeBuildersRisk] = useState(false);
    const [result, setResult] = useState<null | { annual: number; monthly: number; breakdown: any[] }>(null);

    const calculatePremium = () => {
        const contractor = CONTRACTOR_TYPES.find(c => c.id === contractorType);
        const revenueTier = REVENUE_TIERS.find(r => r.id === revenue);
        const employeeCount = EMPLOYEE_COUNTS.find(e => e.id === employees);

        if (!contractor || !revenueTier || !employeeCount) return;

        // Base GL premium
        let glPremium = contractor.basePremium * revenueTier.factor;

        // Workers Comp
        let wcPremium = includeWC ? 3500 * employeeCount.wcFactor : 0;

        // Optional coverages
        const autoPremium = includeAuto ? 2000 : 0;
        const toolsPremium = includeTools ? 500 : 0;
        const buildersRiskPremium = includeBuildersRisk ? 1200 : 0;

        const annual = Math.round(glPremium + wcPremium + autoPremium + toolsPremium + buildersRiskPremium);
        const monthly = Math.round(annual / 12);

        const breakdown = [
            { label: "General Liability", value: contractor.name, cost: `$${Math.round(glPremium).toLocaleString()}` },
            ...(includeWC ? [{ label: "Workers Compensation", value: employeeCount.name, cost: `$${Math.round(wcPremium).toLocaleString()}` }] : []),
            ...(includeAuto ? [{ label: "Commercial Auto", value: "Included", cost: `$${autoPremium.toLocaleString()}` }] : []),
            ...(includeTools ? [{ label: "Tools & Equipment", value: "Included", cost: `$${toolsPremium.toLocaleString()}` }] : []),
            ...(includeBuildersRisk ? [{ label: "Builder's Risk", value: "Included", cost: `$${buildersRiskPremium.toLocaleString()}` }] : []),
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
                    <Link href="/contractor-insurance" className="text-slate-400 hover:text-white text-sm">← Back to Overview</Link>
                </div>
            </header>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
                            <Wrench className="w-4 h-4 text-blue-400" />
                            <span className="text-sm text-blue-300">{SITE.year} Calculator</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">Contractor Insurance Calculator</h1>
                        <p className="text-slate-400">Estimate your GL, WC, and specialty coverage costs</p>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Contractor Type</label>
                                <select value={contractorType} onChange={(e) => setContractorType(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">
                                    <option value="">Select type...</option>
                                    {CONTRACTOR_TYPES.map((c) => (<option key={c.id} value={c.id}>{c.name}</option>))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Annual Revenue</label>
                                <select value={revenue} onChange={(e) => setRevenue(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">
                                    <option value="">Select revenue...</option>
                                    {REVENUE_TIERS.map((r) => (<option key={r.id} value={r.id}>{r.name}</option>))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Number of Employees</label>
                                <select value={employees} onChange={(e) => setEmployees(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">
                                    <option value="">Select employees...</option>
                                    {EMPLOYEE_COUNTS.map((e) => (<option key={e.id} value={e.id}>{e.name}</option>))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Coverage Options</label>
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" checked={includeWC} onChange={(e) => setIncludeWC(e.target.checked)} className="rounded bg-slate-700 border-slate-600" />
                                        <span className="text-slate-300">Workers Compensation</span>
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" checked={includeAuto} onChange={(e) => setIncludeAuto(e.target.checked)} className="rounded bg-slate-700 border-slate-600" />
                                        <span className="text-slate-300">Commercial Auto ($2,000/yr)</span>
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" checked={includeTools} onChange={(e) => setIncludeTools(e.target.checked)} className="rounded bg-slate-700 border-slate-600" />
                                        <span className="text-slate-300">Tools & Equipment ($500/yr)</span>
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" checked={includeBuildersRisk} onChange={(e) => setIncludeBuildersRisk(e.target.checked)} className="rounded bg-slate-700 border-slate-600" />
                                        <span className="text-slate-300">Builder's Risk ($1,200/yr)</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <button onClick={calculatePremium} disabled={!contractorType || !revenue || !employees} className="w-full mt-6 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
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
                            <p className="text-xs text-slate-500 mt-4">*Estimates based on 2026 NAIC/NCCI industry averages</p>
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
                    <p className="text-sm text-slate-500">© {SITE.year} MySmartCalculators. Data from NAIC, NCCI.</p>
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
                                name: "How accurate is the contractor insurance calculator?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "This calculator provides estimates based on 2026 data and standard formulas. Results may vary based on individual circumstances."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Is this contractor insurance calculator free to use?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, this calculator is completely free. No registration or personal information required."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "How often is the contractor insurance data updated?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "We update our calculator data regularly to reflect current 2026 rates and regulations."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Can I rely on these contractor insurance results for decisions?",
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
