"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calculator, Info, Users, DollarSign } from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import {
    SITE,
    STATE_DATA,
    calculateChildSupport,
    formatCurrency,
    parseFormattedNumber,
    getStatesList,
    ChildSupportResult
} from "@/lib/calculators/child-support";

export default function ChildSupportPage() {
    const [state, setState] = useState("CA");
    const [payorIncome, setPayorIncome] = useState("");
    const [recipientIncome, setRecipientIncome] = useState("");
    const [numberOfChildren, setNumberOfChildren] = useState(1);
    const [custodyPercent, setCustodyPercent] = useState(20);
    const [result, setResult] = useState<ChildSupportResult | null>(null);

    const states = getStatesList();

    const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const raw = e.target.value.replace(/[^0-9]/g, "");
            if (raw === "") {
                setter("");
                return;
            }
            setter(parseInt(raw).toLocaleString("en-US"));
        };

    const handleCalculate = () => {
        const payor = parseFormattedNumber(payorIncome) || 5000;
        const recipient = parseFormattedNumber(recipientIncome) || 3000;
        setResult(calculateChildSupport(state, payor, recipient, numberOfChildren, custodyPercent));
    };

    return (
        <>
            {/* Header */}

            <main className="max-w-2xl mx-auto px-4 py-8">
                {/* Calculator Card */}
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">
                        {SITE.year} Child Support Calculator
                    </h1>
                    <p className="text-sm text-slate-400 mb-6">
                        Estimate monthly child support based on state guidelines
                    </p>

                    {/* Inputs */}
                    <div className="space-y-5 mb-6">
                        {/* State Selection */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Select State
                            </label>
                            <select
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500"
                            >
                                {states.map((s) => (
                                    <option key={s.code} value={s.code}>
                                        {s.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Payor Income */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Paying Parent&apos;s Monthly Income
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                                <input
                                    type="text"
                                    value={payorIncome}
                                    onChange={handleInputChange(setPayorIncome)}
                                    onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
                                    placeholder="5,000"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                />
                            </div>
                            <p className="text-xs text-slate-500 mt-1">Gross monthly income before taxes</p>
                        </div>

                        {/* Recipient Income */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Receiving Parent&apos;s Monthly Income
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                                <input
                                    type="text"
                                    value={recipientIncome}
                                    onChange={handleInputChange(setRecipientIncome)}
                                    onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
                                    placeholder="3,000"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                />
                            </div>
                        </div>

                        {/* Number of Children */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Number of Children
                            </label>
                            <div className="flex gap-2">
                                {[1, 2, 3, 4, 5].map((num) => (
                                    <button
                                        key={num}
                                        type="button"
                                        onClick={() => setNumberOfChildren(num)}
                                        className={`flex-1 py-3 rounded-lg border font-semibold transition ${numberOfChildren === num
                                            ? "bg-purple-600 text-white border-purple-600"
                                            : "bg-slate-700 text-slate-300 border-slate-600 hover:border-purple-500"
                                            }`}
                                    >
                                        {num}{num === 5 ? "+" : ""}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Custody Percentage */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Paying Parent&apos;s Custody Time: {custodyPercent}%
                            </label>
                            <input
                                type="range"
                                min="0"
                                max="50"
                                value={custodyPercent}
                                onChange={(e) => setCustodyPercent(parseInt(e.target.value))}
                                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                            />
                            <div className="flex justify-between text-xs text-slate-500 mt-1">
                                <span>0% (No custody)</span>
                                <span>Every other weekend (~14%)</span>
                                <span>50% (Joint)</span>
                            </div>
                        </div>
                    </div>

                    {/* Calculate Button */}
                    <button
                        onClick={handleCalculate}
                        className="w-full py-4 bg-purple-600 text-white rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate Child Support
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        {/* Summary Header */}
                        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6">
                            <p className="text-sm text-purple-100 mb-1">Estimated Monthly Child Support</p>
                            <p className="text-4xl font-bold">{formatCurrency(result.monthlySupport)}</p>
                            <p className="text-sm text-purple-100 mt-2">
                                Annual Total: {formatCurrency(result.annualSupport)}
                            </p>
                        </div>

                        {/* Breakdown */}
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                                Calculation Breakdown
                            </h3>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">State</span>
                                    <span className="font-medium text-white">{result.stateName}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Model</span>
                                    <span className="font-medium text-white capitalize">{result.model.replace('_', ' ')}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Paying Parent Income</span>
                                    <span className="font-medium text-white">{formatCurrency(result.payorIncome)}/mo</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Receiving Parent Income</span>
                                    <span className="font-medium text-white">{formatCurrency(result.recipientIncome)}/mo</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Combined Income</span>
                                    <span className="font-medium text-white">{formatCurrency(result.combinedIncome)}/mo</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Number of Children</span>
                                    <span className="font-medium text-white">{result.numberOfChildren}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Base Obligation</span>
                                    <span className="font-medium text-white">{formatCurrency(result.baseObligation)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Payor&apos;s Share</span>
                                    <span className="font-medium text-white">{formatCurrency(result.payorShare)}</span>
                                </div>
                                {result.custodyAdjustment > 0 && (
                                    <div className="flex justify-between py-2 border-b border-slate-700">
                                        <span className="text-slate-300">Custody Credit ({result.payorCustodyPercent}%)</span>
                                        <span className="font-medium text-green-400">-{formatCurrency(result.custodyAdjustment)}</span>
                                    </div>
                                )}
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Interest on Arrears (State Law)</span>
                                    <span className="font-medium text-white">{result.interestRate}%</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Age of Emancipation</span>
                                    <span className="font-medium text-white">{result.emancipationAge} years</span>
                                </div>
                                <div className="flex justify-between pt-4 text-lg">
                                    <span className="text-white font-bold">Monthly Support</span>
                                    <span className="font-bold text-purple-400">{formatCurrency(result.monthlySupport)}</span>
                                </div>
                            </div>
                        </div>

                        {/* Info */}
                        <div className="p-4 bg-purple-900/30 border-t border-purple-700/50">
                            <div className="flex items-start gap-2 text-sm">
                                <Info className="w-4 h-4 text-purple-400 mt-0.5" />
                                <p className="text-purple-200">
                                    This is an estimate. Actual support may vary based on health insurance, childcare costs,
                                    and other factors. Consult your state&apos;s official calculator or an attorney.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Ad Placeholder */}
                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center">
                    <p className="text-sm text-slate-500">Advertisement</p>
                </div>

                {/* Inline FAQ Section */}
                <section className="max-w-2xl mx-auto py-16">
                    <div className="bg-slate-900/60 rounded-[2rem] border border-white/10 p-8 space-y-6">
                        <h2 className="text-xl font-black text-white tracking-tight">
                            Child Support FAQ
                        </h2>
                        <div className="space-y-6 text-sm">
                            <div className="pb-4 border-b border-white/5">
                                <h3 className="font-bold text-white mb-2">
                                    How is child support calculated in 2026?
                                </h3>
                                <p className="text-slate-400 leading-relaxed">
                                    Most states use the Income Shares Model in 2026: both parents&apos; incomes are combined, a percentage is applied based on the number of children, and the total is divided proportionally. Some states like TX use the Percentage of Income model.
                                </p>
                            </div>
                            <div className="pb-4 border-b border-white/5">
                                <h3 className="font-bold text-white mb-2">
                                    Does joint custody stop child support?
                                </h3>
                                <p className="text-slate-400 leading-relaxed">
                                    Joint custody (50/50) does not automatically eliminate support. If one parent earns significantly more, they may still owe support to ensure the child maintains a similar standard of living in both households.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-white mb-2">
                                    Can I change my child support amount?
                                </h3>
                                <p className="text-slate-400 leading-relaxed">
                                    Yes, through a modification petition. Valid reasons include a 15-20% change in income, significant changes in medical insurance costs, or major shifts in the physical custody schedule.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <div className="mt-8 text-center">
                    <Link
                        href="/child-support/state-guidelines"
                        className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        View State Guidelines ??                    </Link>
                </div>

                {/* Disclaimer */}
            </main>

            {/* Schema.org FAQPage */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: [
                            {
                                "@type": "Question",
                                name: "How is child support calculated?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Most states use the Income Shares Model: both parents' incomes are combined, a percentage is applied based on number of children, then divided proportionally.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Does custody affect child support?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes. The more custody time the paying parent has, the lower the support payment.",
                                },
                            },
                        ],
                    }),
                }}
            />
        </>
    );
}
