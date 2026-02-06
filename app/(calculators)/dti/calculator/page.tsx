"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Percent, Calculator, Info } from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import {
    SITE,
    DTI_2026,
    calculateDTI,
    formatCurrency,
    DTIResult
} from "@/lib/calculators/dti";

export default function DTICalculatorPage() {
    const [income, setIncome] = useState("6,000");
    const [housing, setHousing] = useState("1,500");
    const [car, setCar] = useState("400");
    const [student, setStudent] = useState("300");
    const [creditCard, setCreditCard] = useState("200");
    const [other, setOther] = useState("0");
    const [result, setResult] = useState<DTIResult | null>(null);

    const handleChange = (setter: (v: string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/[^0-9]/g, "");
        if (raw === "") { setter(""); return; }
        setter(parseInt(raw).toLocaleString("en-US"));
    };

    const parseVal = (val: string) => parseInt(val.replace(/[^0-9]/g, "")) || 0;

    const handleCalculate = () => {
        const incomeNum = parseVal(income);
        if (incomeNum > 0) {
            setResult(calculateDTI(
                incomeNum,
                parseVal(housing),
                parseVal(car),
                parseVal(student),
                parseVal(creditCard),
                parseVal(other)
            ));
        }
    };

    return (
        <>
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/dti" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <Percent className="w-5 h-5 text-emerald-500" />
                        <span className="text-lg font-bold text-white">DTI Calculator</span>
                    </div>
                    <span className="ml-auto text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">
                        {SITE.year}
                    </span>
                </div>
            </header>

            <main className="max-w-2xl mx-auto px-4 py-8">
                {/* Calculator Card */}
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">
                        Calculate Your DTI Ratio
                    </h1>
                    <p className="text-sm text-slate-400 mb-6">
                        Enter your monthly income and debts
                    </p>

                    {/* Inputs */}
                    <div className="space-y-4 mb-6">
                        {/* Monthly Income */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Monthly Gross Income
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input
                                    type="text"
                                    value={income}
                                    onChange={handleChange(setIncome)}
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                        </div>

                        <div className="border-t border-slate-700 my-4 pt-4">
                            <p className="text-sm font-medium text-slate-400 mb-3">Monthly Debt Payments</p>
                        </div>

                        {/* Housing */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Housing (Mortgage/Rent)
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input
                                    type="text"
                                    value={housing}
                                    onChange={handleChange(setHousing)}
                                    className="w-full pl-8 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                        </div>

                        {/* Car */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Car Payment
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input
                                    type="text"
                                    value={car}
                                    onChange={handleChange(setCar)}
                                    className="w-full pl-8 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                        </div>

                        {/* Student Loans */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Student Loans
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input
                                    type="text"
                                    value={student}
                                    onChange={handleChange(setStudent)}
                                    className="w-full pl-8 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                        </div>

                        {/* Credit Cards */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Credit Card Minimum Payments
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input
                                    type="text"
                                    value={creditCard}
                                    onChange={handleChange(setCreditCard)}
                                    className="w-full pl-8 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                        </div>

                        {/* Other */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Other Debt (Alimony, Child Support, etc.)
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input
                                    type="text"
                                    value={other}
                                    onChange={handleChange(setOther)}
                                    className="w-full pl-8 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Calculate Button */}
                    <button
                        onClick={handleCalculate}
                        className="w-full py-4 bg-emerald-600 text-white rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate DTI
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        {/* Summary Header */}
                        <div className={`bg-gradient-to-r ${result.isQMQualified ? 'from-emerald-600 to-teal-600' : 'from-red-600 to-orange-600'} text-white p-6 text-center`}>
                            <p className="text-sm opacity-80 mb-1">Your DTI Ratio</p>
                            <p className="text-5xl font-bold">{result.dtiRatio}%</p>
                            <p className={`text-sm mt-2 ${result.dtiColor}`}>
                                {result.dtiCategory}
                            </p>
                        </div>

                        {/* QM Status */}
                        <div className={`p-4 border-b border-slate-700 ${result.isQMQualified ? 'bg-emerald-900/30' : 'bg-red-900/30'}`}>
                            <div className="flex items-center justify-center gap-2">
                                {result.isQMQualified ? (
                                    <>
                                        <span className="text-emerald-400">??/span>
                                        <span className="text-emerald-300">Qualifies for QM Mortgage (??DTI_2026.qmLimit}%)</span>
                                    </>
                                ) : (
                                    <>
                                        <span className="text-red-400">??/span>
                                        <span className="text-red-300">Exceeds QM Limit ({DTI_2026.qmLimit}%)</span>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Details */}
                        <div className="p-6">
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Monthly Income</span>
                                    <span className="font-medium text-white">{formatCurrency(result.monthlyIncome)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Total Monthly Debt</span>
                                    <span className="font-medium text-white">{formatCurrency(result.totalDebt)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Housing Ratio (Front-End)</span>
                                    <span className="font-medium text-emerald-400">{result.housingRatio}%</span>
                                </div>
                                {result.maxAdditionalDebt > 0 && (
                                    <div className="flex justify-between py-2 border-b border-slate-700">
                                        <span className="text-slate-300">Room for More Debt (to 43%)</span>
                                        <span className="font-medium text-emerald-400">{formatCurrency(result.maxAdditionalDebt)}/mo</span>
                                    </div>
                                )}
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
                        <Info className="w-5 h-5 text-emerald-500" />
                        DTI FAQ
                    </h2>

                    <div className="space-y-4 text-sm">
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What is a good DTI ratio?
                            </h3>
                            <p className="text-slate-400">
                                Under 36% is considered good. Under 28% for housing alone (front-end)
                                is ideal. 43% is the maximum for most qualified mortgages.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What&apos;s the difference between front-end and back-end DTI?
                            </h3>
                            <p className="text-slate-400">
                                Front-end DTI only includes housing costs. Back-end DTI includes
                                all monthly debts (this calculator shows back-end).
                            </p>
                        </div>
                    </div>
                </section>

                {/* Citation */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    {DTI_2026.citation}
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
                                name: "What is a good DTI ratio?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Under 36% is considered good. 43% is the maximum for most qualified mortgages.",
                                },
                            },
                        ],
                    }),
                }}
            />
        </>
    );
}
