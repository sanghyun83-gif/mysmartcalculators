"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, DollarSign, Calculator, Info, AlertTriangle } from "lucide-react";
import {
    SITE,
    GARNISHMENT_TYPES,
    calculateGarnishment,
    formatCurrency,
    parseFormattedNumber,
    GarnishmentResult
} from "@/lib/calculators/wage-garnishment";

export default function GarnishmentCalculatorPage() {
    const [grossPay, setGrossPay] = useState("");
    const [deductions, setDeductions] = useState("");
    const [garnishmentType, setGarnishmentType] = useState<keyof typeof GARNISHMENT_TYPES>("consumerDebt");
    const [payFrequency, setPayFrequency] = useState<"weekly" | "biweekly" | "monthly">("biweekly");
    const [supportsDependents, setSupportsDependents] = useState(true);
    const [result, setResult] = useState<GarnishmentResult | null>(null);

    const handleGrossChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/[^0-9.]/g, "");
        if (raw === "") {
            setGrossPay("");
            return;
        }
        setGrossPay(parseFloat(raw).toLocaleString("en-US"));
    };

    const handleDeductionsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/[^0-9.]/g, "");
        if (raw === "") {
            setDeductions("");
            return;
        }
        setDeductions(parseFloat(raw).toLocaleString("en-US"));
    };

    const handleCalculate = () => {
        const gross = parseFormattedNumber(grossPay) || 2000;
        const ded = parseFormattedNumber(deductions) || 400;
        setResult(calculateGarnishment(gross, ded, garnishmentType, payFrequency, supportsDependents));
    };

    const typeOptions = Object.entries(GARNISHMENT_TYPES).map(([key, t]) => ({
        value: key,
        label: t.name,
        desc: t.description,
    }));

    return (
        <>
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/wage-garnishment" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <DollarSign className="w-5 h-5 text-emerald-500" />
                        <span className="text-lg font-bold text-white">Garnishment Calculator</span>
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
                        {SITE.year} Wage Garnishment Calculator
                    </h1>
                    <p className="text-sm text-slate-400 mb-6">
                        Calculate how much can be taken from your paycheck
                    </p>

                    {/* Inputs */}
                    <div className="space-y-5 mb-6">
                        {/* Garnishment Type */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Type of Garnishment
                            </label>
                            <div className="grid grid-cols-2 gap-2">
                                {typeOptions.map((opt) => (
                                    <button
                                        key={opt.value}
                                        type="button"
                                        onClick={() => setGarnishmentType(opt.value as keyof typeof GARNISHMENT_TYPES)}
                                        className={`py-3 px-3 rounded-lg border text-left transition ${garnishmentType === opt.value
                                            ? "bg-emerald-600 text-white border-emerald-600"
                                            : "bg-slate-700 text-slate-300 border-slate-600 hover:border-emerald-500"
                                            }`}
                                    >
                                        <div className="text-sm font-semibold">{opt.label}</div>
                                        <div className="text-xs mt-1 opacity-75">{opt.desc}</div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Gross Pay */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Gross Pay (per paycheck)
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                                <input
                                    type="text"
                                    value={grossPay}
                                    onChange={handleGrossChange}
                                    placeholder="2,000"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                        </div>

                        {/* Deductions */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Mandatory Deductions (taxes, SS, Medicare)
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                                <input
                                    type="text"
                                    value={deductions}
                                    onChange={handleDeductionsChange}
                                    placeholder="400"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                            <p className="text-xs text-slate-500 mt-1">
                                Disposable income = Gross pay minus mandatory deductions
                            </p>
                        </div>

                        {/* Pay Frequency */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Pay Frequency
                            </label>
                            <div className="flex gap-2">
                                {["weekly", "biweekly", "monthly"].map((freq) => (
                                    <button
                                        key={freq}
                                        type="button"
                                        onClick={() => setPayFrequency(freq as typeof payFrequency)}
                                        className={`flex-1 py-3 rounded-lg border font-medium transition ${payFrequency === freq
                                            ? "bg-emerald-600 text-white border-emerald-600"
                                            : "bg-slate-700 text-slate-300 border-slate-600 hover:border-emerald-500"
                                            }`}
                                    >
                                        {freq.charAt(0).toUpperCase() + freq.slice(1)}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Child Support - Dependents Toggle */}
                        {garnishmentType === "childSupport" && (
                            <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                                <div>
                                    <p className="text-sm font-medium text-white">Supporting another spouse/child?</p>
                                    <p className="text-xs text-slate-400">Lower limit (50%) if yes, higher (60%) if no</p>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setSupportsDependents(!supportsDependents)}
                                    className={`w-14 h-8 rounded-full transition-colors ${supportsDependents ? "bg-emerald-600" : "bg-slate-600"
                                        }`}
                                >
                                    <div className={`w-6 h-6 bg-white rounded-full transition-transform mx-1 ${supportsDependents ? "translate-x-6" : "translate-x-0"
                                        }`} />
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Calculate Button */}
                    <button
                        onClick={handleCalculate}
                        className="w-full py-4 bg-emerald-600 text-white rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate Garnishment
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        {/* Summary Header */}
                        <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white p-6">
                            <p className="text-sm text-emerald-100 mb-1">Maximum Garnishment</p>
                            <p className="text-4xl font-bold">{formatCurrency(result.maxGarnishment)}</p>
                            <p className="text-sm text-emerald-100 mt-2">
                                {result.percentGarnished}% of your disposable income
                            </p>
                        </div>

                        {/* Breakdown */}
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                                Paycheck Breakdown
                            </h3>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Gross Pay</span>
                                    <span className="font-medium text-white">{formatCurrency(result.grossPay)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Disposable Income</span>
                                    <span className="font-medium text-white">{formatCurrency(result.disposableIncome)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Garnishment Type</span>
                                    <span className="font-medium text-white">{result.garnishmentType}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Protected Amount ({result.payFrequency})</span>
                                    <span className="font-medium text-emerald-400">{formatCurrency(result.protectedAmount)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Max Garnishment</span>
                                    <span className="font-medium text-red-400">-{formatCurrency(result.maxGarnishment)}</span>
                                </div>
                                <div className="flex justify-between pt-4 text-lg">
                                    <span className="text-white font-bold">Take-Home Pay</span>
                                    <span className="font-bold text-green-400">{formatCurrency(result.takeHomePay)}</span>
                                </div>
                            </div>
                        </div>

                        {/* Note */}
                        <div className="p-4 bg-blue-900/30 border-t border-blue-700/50">
                            <div className="flex items-start gap-2 text-sm">
                                <Info className="w-4 h-4 text-blue-400 mt-0.5" />
                                <p className="text-blue-200">
                                    This is the <strong>maximum</strong> that can legally be garnished.
                                    Your actual garnishment may be less depending on your court order.
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
                        <Info className="w-5 h-5 text-emerald-500" />
                        Wage Garnishment FAQ
                    </h2>

                    <div className="space-y-4 text-sm">
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What is disposable income?
                            </h3>
                            <p className="text-slate-400">
                                Disposable income is your gross pay minus legally required deductions (federal/state taxes,
                                Social Security, Medicare). Voluntary deductions like 401k don&apos;t count.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                Can my employer fire me for having wages garnished?
                            </h3>
                            <p className="text-slate-400">
                                Federal law prohibits firing for a single garnishment. Multiple garnishments may not be protected.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                Are there state limits on garnishment?
                            </h3>
                            <p className="text-slate-400">
                                Yes! Many states have stricter limits than federal law. Your state&apos;s limit applies if it&apos;s lower.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    This calculator uses federal CCPA limits. State laws may provide additional protection.
                    Consult a debt attorney for your specific situation.
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
                                name: "What is disposable income for garnishment?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Disposable income is gross pay minus legally required deductions like taxes, Social Security, and Medicare.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Can I be fired for wage garnishment?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Federal law prohibits firing for a single garnishment, but multiple garnishments may not be protected.",
                                },
                            },
                        ],
                    }),
                }}
            />
        </>
    );
}
