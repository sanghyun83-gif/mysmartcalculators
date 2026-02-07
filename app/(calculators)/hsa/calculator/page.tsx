"use client";

import { useState } from "react";
import Link from "next/link";
import { PiggyBank, Calculator, ArrowRight, DollarSign } from "lucide-react";
import { SITE, COVERAGE_TYPES, AGE_BRACKETS, FAQS } from "@/lib/calculators/hsa";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function HSACalculatorPage() {
    const [coverageType, setCoverageType] = useState("");
    const [ageBracket, setAgeBracket] = useState("under55");
    const [contribution, setContribution] = useState(0);
    const [result, setResult] = useState<null | { maxContrib: number; taxSavings: number; years10: number }>(null);

    const calculateHSA = () => {
        const coverage = COVERAGE_TYPES.find(c => c.id === coverageType);
        const age = AGE_BRACKETS.find(a => a.id === ageBracket);
        if (!coverage || !age) return;

        const maxContrib = coverage.limit + age.catchUp;
        const actualContrib = Math.min(contribution, maxContrib);
        const taxSavings = Math.round(actualContrib * 0.30); // ~30% tax savings
        const years10 = Math.round(actualContrib * 10 * 1.05 ** 10); // 5% annual growth

        setResult({ maxContrib, taxSavings, years10 });
    };

    return (
        <>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/50 rounded-full px-4 py-2 mb-4">
                            <PiggyBank className="w-4 h-4 text-emerald-400" />
                            <span className="text-sm text-emerald-300">{SITE.year} Calculator</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">HSA Calculator</h1>
                        <p className="text-slate-400">Calculate contributions and tax savings</p>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Coverage Type</label>
                                <select value={coverageType} onChange={(e) => setCoverageType(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">
                                    <option value="">Select coverage...</option>
                                    {COVERAGE_TYPES.map((c) => (<option key={c.id} value={c.id}>{c.name} (${c.limit.toLocaleString()} limit)</option>))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Age Bracket</label>
                                <select value={ageBracket} onChange={(e) => setAgeBracket(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">
                                    {AGE_BRACKETS.map((a) => (<option key={a.id} value={a.id}>{a.name}</option>))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Annual Contribution: ${contribution.toLocaleString()}</label>
                                <input type="range" min="0" max="9550" step="100" value={contribution} onChange={(e) => setContribution(Number(e.target.value))} className="w-full" />
                            </div>
                        </div>

                        <button onClick={calculateHSA} disabled={!coverageType} className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
                            <DollarSign className="w-5 h-5" /> Calculate HSA
                        </button>
                    </div>

                    {result && (
                        <div className="bg-emerald-900/30 border border-emerald-500/50 rounded-xl p-6 mb-8">
                            <h2 className="text-xl font-bold text-white mb-4">HSA Projection</h2>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-2xl font-bold text-emerald-400">${result.maxContrib.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">Max Contribution</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-2xl font-bold text-white">${result.taxSavings.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">Tax Savings/Yr</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-2xl font-bold text-emerald-400">${result.years10.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">10-Year Growth</div>
                                </div>
                            </div>
                            <p className="text-xs text-slate-500 mt-4">*Assumes 30% tax bracket, 5% annual returns (IRS 2026 limits)</p>
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

        </>
    );
}
