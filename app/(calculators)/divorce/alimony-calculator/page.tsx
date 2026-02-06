"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calculator, Info, Scale, DollarSign } from "lucide-react";
import {
    SITE,
    STATE_DATA,
    calculateAlimony,
    formatCurrency,
    parseFormattedNumber,
    getStatesList,
    isCommunityPropertyState,
    AlimonyResult
} from "@/lib/calculators/divorce";

export default function AlimonyCalculatorPage() {
    const [state, setState] = useState("CA");
    const [higherIncome, setHigherIncome] = useState("");
    const [lowerIncome, setLowerIncome] = useState("");
    const [marriageYears, setMarriageYears] = useState(10);
    const [result, setResult] = useState<AlimonyResult | null>(null);

    const states = getStatesList();
    const selectedState = STATE_DATA[state];

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
        const higher = parseFormattedNumber(higherIncome) || 10000;
        const lower = parseFormattedNumber(lowerIncome) || 4000;
        setResult(calculateAlimony(state, higher, lower, marriageYears));
    };

    return (
        <>
            {/* Header */}


            <main className="max-w-2xl mx-auto px-4 py-8">
                {/* Calculator Card */}
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">
                        {SITE.year} Alimony / Spousal Support Calculator
                    </h1>
                    <p className="text-sm text-slate-400 mb-6">
                        Estimate monthly spousal support based on income and marriage duration
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
                                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-indigo-500"
                            >
                                {states.map((s) => (
                                    <option key={s.code} value={s.code}>
                                        {s.name} ({s.divisionType === 'community' ? 'Community Property' : 'Equitable'})
                                    </option>
                                ))}
                            </select>
                            {selectedState && (
                                <p className="text-xs text-slate-500 mt-1">
                                    {selectedState.notes} ??Alimony: {selectedState.alimonyFactor} generosity
                                </p>
                            )}
                        </div>

                        {/* Higher Earner Income */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Higher Earner&apos;s Monthly Income
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                                <input
                                    type="text"
                                    value={higherIncome}
                                    onChange={handleInputChange(setHigherIncome)}
                                    placeholder="10,000"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                            <p className="text-xs text-slate-500 mt-1">Gross monthly income (payor)</p>
                        </div>

                        {/* Lower Earner Income */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Lower Earner&apos;s Monthly Income
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                                <input
                                    type="text"
                                    value={lowerIncome}
                                    onChange={handleInputChange(setLowerIncome)}
                                    placeholder="4,000"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                            <p className="text-xs text-slate-500 mt-1">Gross monthly income (recipient)</p>
                        </div>

                        {/* Marriage Duration */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Years of Marriage: {marriageYears} years
                            </label>
                            <input
                                type="range"
                                min="1"
                                max="40"
                                value={marriageYears}
                                onChange={(e) => setMarriageYears(parseInt(e.target.value))}
                                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                            />
                            <div className="flex justify-between text-xs text-slate-500 mt-1">
                                <span>1 year</span>
                                <span>10 years</span>
                                <span>20+ years</span>
                                <span>40 years</span>
                            </div>
                        </div>
                    </div>

                    {/* Calculate Button */}
                    <button
                        onClick={handleCalculate}
                        className="w-full py-4 bg-indigo-600 text-white rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate Alimony
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        {/* Summary Header */}
                        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-6">
                            <p className="text-sm text-indigo-100 mb-1">Estimated Monthly Alimony</p>
                            <p className="text-4xl font-bold">{formatCurrency(result.monthlyAlimony)}</p>
                            <p className="text-sm text-indigo-100 mt-2">
                                Duration: {Math.round(result.alimonyDurationMonths / 12)} years ({result.alimonyDurationMonths} months)
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
                                    <span className="text-slate-300">Property Division Type</span>
                                    <span className={`font-medium ${result.propertyDivision === 'community' ? 'text-indigo-400' : 'text-blue-400'
                                        }`}>
                                        {result.propertyDivision === 'community' ? 'Community Property' : 'Equitable Distribution'}
                                    </span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Higher Earner Income</span>
                                    <span className="font-medium text-white">{formatCurrency(result.higherIncome)}/mo</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Lower Earner Income</span>
                                    <span className="font-medium text-white">{formatCurrency(result.lowerIncome)}/mo</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Income Difference</span>
                                    <span className="font-medium text-amber-400">{formatCurrency(result.incomeDifference)}/mo</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Marriage Duration</span>
                                    <span className="font-medium text-white">{result.marriageYears} years</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Alimony Duration</span>
                                    <span className="font-medium text-white">{result.alimonyDurationMonths} months</span>
                                </div>
                                <div className="flex justify-between pt-4 text-lg border-t border-slate-600">
                                    <span className="text-white font-bold">Total Alimony</span>
                                    <span className="font-bold text-indigo-400">{formatCurrency(result.totalAlimony)}</span>
                                </div>
                            </div>
                        </div>

                        {/* Info */}
                        <div className="p-4 bg-indigo-900/30 border-t border-indigo-700/50">
                            <div className="flex items-start gap-2 text-sm">
                                <Info className="w-4 h-4 text-indigo-400 mt-0.5" />
                                <p className="text-indigo-200">
                                    {result.marriageYears >= 20
                                        ? "Long-term marriage (20+ years) may qualify for permanent or extended alimony in some states."
                                        : "Alimony duration and amount vary by state. This is an estimate based on general guidelines."
                                    }
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
                        <Info className="w-5 h-5 text-indigo-500" />
                        Alimony FAQ
                    </h2>

                    <div className="space-y-4 text-sm">
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                How is alimony calculated?
                            </h3>
                            <p className="text-slate-400">
                                Alimony is typically based on the income difference between spouses,
                                marriage duration, and state-specific factors. Most states consider 25-40%
                                of the income difference.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                How long does alimony last?
                            </h3>
                            <p className="text-slate-400">
                                Duration depends on marriage length. Short marriages (under 10 years)
                                typically get 3-5 years. Long marriages (20+ years) may receive permanent
                                or indefinite alimony in some states.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                Can alimony be modified?
                            </h3>
                            <p className="text-slate-400">
                                Yes. Alimony can be modified if there&apos;s a significant change in
                                circumstances, such as job loss, retirement, or the recipient remarrying.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                Is alimony taxable?
                            </h3>
                            <p className="text-slate-400">
                                For divorces finalized after 2018, alimony is NOT tax-deductible for the
                                payer and NOT taxable income for the recipient (under the Tax Cuts and Jobs Act).
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <div className="mt-8 text-center">
                    <Link
                        href="/divorce/property-division"
                        className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Calculate Property Division ??                    </Link>
                </div>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    This calculator provides estimates based on {SITE.year} general guidelines.
                    Actual alimony is determined by courts and varies by case. Consult a family law attorney.
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
                                    text: "Alimony is typically based on the income difference between spouses, marriage duration, and state-specific factors. Most states consider 25-40% of the income difference.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "How long does alimony last?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Duration depends on marriage length. Short marriages typically get 3-5 years. Long marriages (20+ years) may receive permanent alimony.",
                                },
                            },
                        ],
                    }),
                }}
            />
        </>
    );
}
