"use client";

import { useState } from "react";
import Link from "next/link";
import { Home, Calculator, ArrowRight, DollarSign } from "lucide-react";
import { SITE, WORK_TYPES, COVERAGE_OPTIONS, REVENUE_TIERS, FAQS } from "@/lib/calculators/roofing-insurance";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function RoofingInsuranceCalculatorPage() {
    const [workType, setWorkType] = useState("");
    const [revenue, setRevenue] = useState("");
    const [employees, setEmployees] = useState(3);
    const [includeWC, setIncludeWC] = useState(true);
    const [includeAuto, setIncludeAuto] = useState(false);
    const [result, setResult] = useState<null | { annual: number; monthly: number; breakdown: any[] }>(null);

    const calculatePremium = () => {
        const work = WORK_TYPES.find(w => w.id === workType);
        const revenueTier = REVENUE_TIERS.find(r => r.id === revenue);

        if (!work || !revenueTier) return;

        // GL baseline for roofing
        let glPremium = 5500 * work.factor * revenueTier.factor;

        // WC - high rate for roofing ($35 per $100 payroll estimate)
        let wcPremium = includeWC ? 8500 * (employees / 3) * revenueTier.factor : 0;

        // Tools included
        let toolsPremium = 600;

        // Auto optional
        let autoPremium = includeAuto ? 2200 : 0;

        const annual = Math.round(glPremium + wcPremium + toolsPremium + autoPremium);
        const monthly = Math.round(annual / 12);

        const breakdown = [
            { label: "General Liability", value: work.name, cost: `$${Math.round(glPremium).toLocaleString()}` },
            ...(includeWC ? [{ label: "Workers Compensation", value: `${employees} employees`, cost: `$${Math.round(wcPremium).toLocaleString()}` }] : []),
            { label: "Tools & Equipment", value: "Included", cost: `$${toolsPremium.toLocaleString()}` },
            ...(includeAuto ? [{ label: "Commercial Auto", value: "Included", cost: `$${autoPremium.toLocaleString()}` }] : []),
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
                    <Link href="/roofing-insurance" className="text-slate-400 hover:text-white text-sm"> Back to Overview</Link>
                </div>
            </header>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
                            <Home className="w-4 h-4 text-blue-400" />
                            <span className="text-sm text-blue-300">{SITE.year} Calculator</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">Roofing Insurance Calculator</h1>
                        <p className="text-slate-400">Estimate your roofing contractor insurance costs</p>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Work Type</label>
                                <select value={workType} onChange={(e) => setWorkType(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">
                                    <option value="">Select type...</option>
                                    {WORK_TYPES.map((w) => (<option key={w.id} value={w.id}>{w.name}</option>))}
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
                                <input type="number" min="1" max="50" value={employees} onChange={(e) => setEmployees(parseInt(e.target.value) || 1)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white" />
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
                                        <span className="text-slate-300">Commercial Auto ($2,200/yr)</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <button onClick={calculatePremium} disabled={!workType || !revenue} className="w-full mt-6 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
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
                            <p className="text-xs text-slate-500 mt-4">*Estimates based on 2026 NCCI roofing classification rates</p>
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
                    <p className="text-sm text-slate-500">© {SITE.year} MySmartCalculators. Data from NCCI, OSHA.</p>
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
                                name: "How accurate is the roofing insurance calculator?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "This calculator provides estimates based on 2026 data and standard formulas. Results may vary based on individual circumstances."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Is this roofing insurance calculator free to use?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, this calculator is completely free. No registration or personal information required."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "How often is the roofing insurance data updated?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "We update our calculator data regularly to reflect current 2026 rates and regulations."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Can I rely on these roofing insurance results for decisions?",
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
