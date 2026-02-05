"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Scale, Calculator, Info, AlertTriangle } from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import {
    SITE,
    STATE_ALIMONY,
    calculateAlimony,
    formatCurrency,
    parseFormattedNumber,
    AlimonyResult
} from "@/lib/calculators/alimony";

export default function AlimonyCalculatorPage() {
    const [payerIncome, setPayerIncome] = useState("");
    const [recipientIncome, setRecipientIncome] = useState("");
    const [marriageYears, setMarriageYears] = useState(10);
    const [state, setState] = useState<keyof typeof STATE_ALIMONY>("california");
    const [result, setResult] = useState<AlimonyResult | null>(null);

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
        const payer = parseFormattedNumber(payerIncome) || 10000;
        const recipient = parseFormattedNumber(recipientIncome) || 3000;
        setResult(calculateAlimony(payer, recipient, marriageYears, state));
    };

    const stateOptions = Object.entries(STATE_ALIMONY).map(([key, s]) => ({
        value: key,
        label: `${s.name} (${s.abbr})`,
    }));

    return (
        <>
            {/* Header */}

            <main className="max-w-2xl mx-auto px-4 py-8">
                {/* Calculator Card */}
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">
                        {SITE.year} Alimony Calculator
                    </h1>
                    <p className="text-sm text-slate-400 mb-6">
                        Estimate your monthly spousal support payment or entitlement
                    </p>

                    {/* Inputs */}
                    <div className="space-y-5 mb-6">
                        {/* State Selection */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                State
                            </label>
                            <select
                                value={state}
                                onChange={(e) => setState(e.target.value as keyof typeof STATE_ALIMONY)}
                                className="w-full py-3 px-4 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-rose-500"
                            >
                                {stateOptions.map((opt) => (
                                    <option key={opt.value} value={opt.value}>
                                        {opt.label}
                                    </option>
                                ))}
                            </select>
                            <p className="text-xs text-slate-500 mt-1">
                                Formula: {STATE_ALIMONY[state].formula}
                            </p>
                        </div>

                        {/* Payer Monthly Income */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Higher Earner&apos;s Monthly Gross Income
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                                <input
                                    type="text"
                                    value={payerIncome}
                                    onChange={handleInputChange(setPayerIncome)}
                                    placeholder="10,000"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-rose-500"
                                />
                            </div>
                        </div>

                        {/* Recipient Monthly Income */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Lower Earner&apos;s Monthly Gross Income
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                                <input
                                    type="text"
                                    value={recipientIncome}
                                    onChange={handleInputChange(setRecipientIncome)}
                                    placeholder="3,000"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-rose-500"
                                />
                            </div>
                        </div>

                        {/* Marriage Length */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Length of Marriage: {marriageYears} years
                            </label>
                            <input
                                type="range"
                                min="1"
                                max="40"
                                value={marriageYears}
                                onChange={(e) => setMarriageYears(parseInt(e.target.value))}
                                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-rose-500"
                            />
                            <div className="flex justify-between text-xs text-slate-500 mt-1">
                                <span>1 year</span>
                                <span>20+ years</span>
                                <span>40 years</span>
                            </div>
                        </div>
                    </div>

                    {/* Calculate Button */}
                    <button
                        onClick={handleCalculate}
                        className="w-full py-4 bg-rose-600 text-white rounded-lg font-semibold text-lg hover:bg-rose-700 transition-colors flex items-center justify-center gap-2"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate Alimony
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        {/* Summary Header */}
                        <div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white p-6">
                            <p className="text-sm text-rose-100 mb-1">Estimated Monthly Alimony</p>
                            <p className="text-4xl font-bold">{formatCurrency(result.monthlyAlimony)}/mo</p>
                            <p className="text-sm text-rose-100 mt-2">
                                Duration: ~{result.estimatedDurationYears} years | Total: {formatCurrency(result.totalAlimony)}
                            </p>
                        </div>

                        {/* Breakdown */}
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                                Calculation Details
                            </h3>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">State</span>
                                    <span className="font-medium text-white">{result.state}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Formula Used</span>
                                    <span className="font-medium text-slate-400 text-xs text-right max-w-48">{result.formula}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Monthly Payment</span>
                                    <span className="font-medium text-rose-400">{formatCurrency(result.monthlyAlimony)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Yearly Payment</span>
                                    <span className="font-medium text-white">{formatCurrency(result.yearlyAlimony)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Estimated Duration</span>
                                    <span className="font-medium text-white">{result.estimatedDurationYears} years</span>
                                </div>
                                <div className="flex justify-between pt-4 text-lg">
                                    <span className="text-white font-bold">Total Alimony</span>
                                    <span className="font-bold text-rose-400">{formatCurrency(result.totalAlimony)}</span>
                                </div>
                            </div>

                            {/* Post-Payment Incomes */}
                            <div className="mt-6 p-4 bg-slate-700/50 rounded-lg">
                                <p className="text-sm font-medium text-slate-300 mb-2">After Alimony:</p>
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <p className="text-slate-400">Payer&apos;s Net</p>
                                        <p className="text-white font-medium">{formatCurrency(result.payerNetIncome)}/mo</p>
                                    </div>
                                    <div>
                                        <p className="text-slate-400">Recipient&apos;s Net</p>
                                        <p className="text-white font-medium">{formatCurrency(result.recipientNetIncome)}/mo</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tax Info */}
                        <div className="p-4 bg-amber-900/30 border-t border-amber-700/50">
                            <div className="flex items-start gap-2 text-sm">
                                <AlertTriangle className="w-4 h-4 text-amber-400 mt-0.5" />
                                <p className="text-amber-200">
                                    <strong>Tax Note:</strong> For divorces finalized after Dec 31, 2018, alimony is NOT tax-deductible for the payer and NOT taxable income for the recipient.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Ad Placeholder */}
                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center">
                    <p className="text-sm text-slate-500">Advertisement</p>
                </div>

                {/* FAQ Section */}
                <section className="bg-slate-800 rounded-xl border border-slate-700 p-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Info className="w-5 h-5 text-rose-500" />
                        Alimony FAQ
                    </h2>

                    <div className="space-y-4 text-sm">
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                How is alimony calculated?
                            </h3>
                            <p className="text-slate-400">
                                Each state has different formulas. Common approaches include a percentage of the income difference (NY, CA) or a fixed cap (TX limits to $5,000/month or 20% of income).
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                How long does alimony last?
                            </h3>
                            <p className="text-slate-400">
                                Duration typically depends on the length of marriage. Short marriages (under 5 years) may get 30% of the marriage length. Marriages over 20 years may qualify for permanent alimony.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                Is alimony tax deductible?
                            </h3>
                            <p className="text-slate-400">
                                No. The Tax Cuts and Jobs Act of 2017 eliminated the alimony tax deduction for divorces finalized after December 31, 2018. Payers cannot deduct and recipients don&apos;t report as income.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                Can alimony be modified?
                            </h3>
                            <p className="text-slate-400">
                                Yes, in most cases. Alimony can be modified if there&apos;s a significant change in circumstances (job loss, retirement, recipient remarriage, cohabitation).
                            </p>
                        </div>
                    </div>
                </section>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    This calculator provides estimates based on {SITE.year} state formulas.
                    Laws vary by state. Consult a family law attorney for your specific situation.
                </p>
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
                                name: "How is alimony calculated?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Each state has different formulas. California uses 40% of payer income minus 50% of recipient income. Texas caps at $5,000/month or 20% of income.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Is alimony tax deductible?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "No. The Tax Cuts and Jobs Act of 2017 eliminated the alimony tax deduction for divorces finalized after December 31, 2018.",
                                },
                            },
                        ],
                    }),
                }}
            />
        </>
    );
}
