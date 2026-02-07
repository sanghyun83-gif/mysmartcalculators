"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, DollarSign, Calculator, Info, AlertTriangle, Clock } from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import {
    SITE,
    SSDI_CONSTANTS_2026,
    calculateSSDIBackPay,
    formatCurrency,
    formatDate,
    parseFormattedNumber,
    SSDIResult
} from "@/lib/calculators/ssdi";

export default function SSDICalculatorPage() {
    const [monthlyBenefit, setMonthlyBenefit] = useState("");
    const [onsetDate, setOnsetDate] = useState("");
    const [approvalDate, setApprovalDate] = useState("");
    const [hasAttorney, setHasAttorney] = useState(true);
    const [result, setResult] = useState<SSDIResult | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/[^0-9]/g, "");
        if (raw === "") {
            setMonthlyBenefit("");
            return;
        }
        setMonthlyBenefit(parseInt(raw).toLocaleString("en-US"));
    };

    const handleCalculate = () => {
        const benefit = parseFormattedNumber(monthlyBenefit) || SSDI_CONSTANTS_2026.avgMonthlyBenefit;
        const onset = onsetDate || "2024-01-01";
        const approval = approvalDate || new Date().toISOString().split('T')[0];
        setResult(calculateSSDIBackPay(benefit, onset, approval, hasAttorney));
    };

    return (
        <>
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/ssdi" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <DollarSign className="w-5 h-5 text-purple-500" />
                        <span className="text-lg font-bold text-white">SSDI Back Pay Calculator</span>
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
                        {SITE.year} SSDI Back Pay Calculator
                    </h1>
                    <p className="text-sm text-slate-400 mb-6">
                        Calculate your Social Security disability back payment
                    </p>

                    {/* Inputs */}
                    <div className="space-y-5 mb-6">
                        {/* Monthly Benefit */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Monthly SSDI Benefit Amount
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                                <input
                                    type="text"
                                    value={monthlyBenefit}
                                    onChange={handleInputChange}
                                    placeholder={SSDI_CONSTANTS_2026.avgMonthlyBenefit.toLocaleString()}
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500"
                                />
                            </div>
                            <p className="text-xs text-slate-500 mt-1">
                                From your SSA award letter. Avg is {formatCurrency(SSDI_CONSTANTS_2026.avgMonthlyBenefit)}, max is {formatCurrency(SSDI_CONSTANTS_2026.maxMonthlyBenefit)}
                            </p>
                        </div>

                        {/* Onset Date */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Disability Onset Date (EOD)
                            </label>
                            <input
                                type="date"
                                value={onsetDate}
                                onChange={(e) => setOnsetDate(e.target.value)}
                                className="w-full py-3 px-4 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500"
                            />
                            <p className="text-xs text-slate-500 mt-1">
                                The Established Onset Date from your award letter
                            </p>
                        </div>

                        {/* Approval Date */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Approval Date (or Expected)
                            </label>
                            <input
                                type="date"
                                value={approvalDate}
                                onChange={(e) => setApprovalDate(e.target.value)}
                                className="w-full py-3 px-4 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500"
                            />
                            <p className="text-xs text-slate-500 mt-1">
                                Date you were approved or estimate when you&apos;ll be approved
                            </p>
                        </div>

                        {/* Attorney Toggle */}
                        <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                            <div>
                                <p className="text-sm font-medium text-white">Using a Disability Attorney?</p>
                                <p className="text-xs text-slate-400">25% fee deducted from back pay (max ${SSDI_CONSTANTS_2026.attorneyFees.maxFee.toLocaleString()})</p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setHasAttorney(!hasAttorney)}
                                className={`w-14 h-8 rounded-full transition-colors ${hasAttorney ? "bg-purple-600" : "bg-slate-600"
                                    }`}
                            >
                                <div className={`w-6 h-6 bg-white rounded-full transition-transform mx-1 ${hasAttorney ? "translate-x-6" : "translate-x-0"
                                    }`} />
                            </button>
                        </div>
                    </div>

                    {/* Calculate Button */}
                    <button
                        onClick={handleCalculate}
                        className="w-full py-4 bg-purple-600 text-white rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate Back Pay
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        {/* Summary Header */}
                        <div className="bg-gradient-to-r from-purple-600 to-violet-600 text-white p-6">
                            <p className="text-sm text-purple-100 mb-1">Your Estimated SSDI Back Pay</p>
                            <p className="text-4xl font-bold">{formatCurrency(result.netBackPay)}</p>
                            <p className="text-sm text-purple-100 mt-2">
                                {result.totalMonthsOwed} months of benefits (after attorney fee)
                            </p>
                        </div>

                        {/* Breakdown */}
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                                Back Pay Breakdown
                            </h3>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Monthly Benefit</span>
                                    <span className="font-medium text-white">{formatCurrency(result.monthlyBenefit)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Onset Date</span>
                                    <span className="font-medium text-white">{formatDate(result.onsetDate)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">5-Month Waiting Period Ends</span>
                                    <span className="font-medium text-white">{formatDate(result.waitingPeriodEnd)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Approval Date</span>
                                    <span className="font-medium text-white">{formatDate(result.approvalDate)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Months of Back Pay</span>
                                    <span className="font-medium text-white">{result.totalMonthsOwed} months</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Gross Back Pay</span>
                                    <span className="font-medium text-purple-400">{formatCurrency(result.grossBackPay)}</span>
                                </div>
                                {hasAttorney && (
                                    <div className="flex justify-between py-2 border-b border-slate-700">
                                        <span className="text-slate-300">Attorney Fee (25%, max ${SSDI_CONSTANTS_2026.attorneyFees.maxFee.toLocaleString()})</span>
                                        <span className="font-medium text-red-400">-{formatCurrency(result.attorneyFee)}</span>
                                    </div>
                                )}
                                <div className="flex justify-between pt-4 text-lg">
                                    <span className="text-white font-bold">Net Back Pay</span>
                                    <span className="font-bold text-green-400">{formatCurrency(result.netBackPay)}</span>
                                </div>
                            </div>

                            {/* First Monthly Payment */}
                            <div className="mt-6 p-4 bg-slate-700/50 rounded-lg">
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-purple-400" />
                                    <p className="text-sm text-white font-medium">
                                        First Monthly Check: {formatDate(result.firstMonthlyPayment)}
                                    </p>
                                </div>
                                <p className="text-xs text-slate-400 mt-1">
                                    You&apos;ll receive {formatCurrency(result.monthlyBenefit)} monthly after the lump sum
                                </p>
                            </div>
                        </div>

                        {/* Warning */}
                        <div className="p-4 bg-amber-900/30 border-t border-amber-700/50">
                            <div className="flex items-start gap-2 text-sm">
                                <AlertTriangle className="w-4 h-4 text-amber-400 mt-0.5" />
                                <p className="text-amber-200">
                                    <strong>Note:</strong> Large back pay amounts over $10,000 may be paid in installments over 3 periods, 6 months apart.
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
                        <Info className="w-5 h-5 text-purple-500" />
                        SSDI Back Pay FAQ
                    </h2>

                    <div className="space-y-4 text-sm">
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What is SSDI back pay?
                            </h3>
                            <p className="text-slate-400">
                                Back pay is the benefits you&apos;re owed from the end of the 5-month waiting period until your approval date. It&apos;s paid as a lump sum.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                Why is there a 5-month waiting period?
                            </h3>
                            <p className="text-slate-400">
                                Federal law requires a 5-full-month waiting period after your disability onset date before SSDI benefits begin. This waiting period is unpaid.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                How much is the attorney fee?
                            </h3>
                            <p className="text-slate-400">
                                Disability attorneys are limited by SSA to 25% of your back pay, with a maximum of ${SSDI_CONSTANTS_2026.attorneyFees.maxFee.toLocaleString()} ({SITE.year}). They only get paid if you win.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                When will I receive my back pay?
                            </h3>
                            <p className="text-slate-400">
                                Typically 1-2 months after approval. Large amounts may be paid in installments every 6 months.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    This calculator provides estimates based on {SITE.year} SSA guidelines.
                    Contact the SSA or a disability attorney for your specific situation.
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
                                name: "What is SSDI back pay?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Back pay is the benefits owed from the end of the 5-month waiting period until your approval date, paid as a lump sum.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "How much is the SSDI attorney fee?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: `Disability attorneys are limited to 25% of back pay, with a maximum of $${SSDI_CONSTANTS_2026.attorneyFees.maxFee.toLocaleString()}.`,
                                },
                            },
                        ],
                    }),
                }}
            />
        </>
    );
}
