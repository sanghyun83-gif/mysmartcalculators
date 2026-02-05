"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Heart, Calculator, Info, AlertTriangle } from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import {
    SITE,
    ABUSE_TYPES,
    calculateNursingHomeSettlement,
    formatCurrency,
    formatCurrencyFull,
    parseFormattedNumber,
    SettlementResult
} from "@/lib/calculators/nursing-home";

export default function AbuseSettlementPage() {
    const [medicalExpenses, setMedicalExpenses] = useState("");
    const [futureCareCost, setFutureCareCost] = useState("");
    const [abuseType, setAbuseType] = useState<keyof typeof ABUSE_TYPES>("bedsores");
    const [hasPriorViolations, setHasPriorViolations] = useState(false);
    const [hasAttorney, setHasAttorney] = useState(true);
    const [result, setResult] = useState<SettlementResult | null>(null);

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
        const medical = parseFormattedNumber(medicalExpenses) || 25000;
        const future = parseFormattedNumber(futureCareCost) || 50000;
        setResult(calculateNursingHomeSettlement(medical, future, abuseType, hasPriorViolations, hasAttorney));
    };

    const abuseOptions = Object.entries(ABUSE_TYPES).map(([key, abuse]) => ({
        value: key,
        label: abuse.name,
        severity: abuse.severity,
        range: `${formatCurrency(abuse.avgSettlement.min)} - ${formatCurrency(abuse.avgSettlement.max)}`,
    }));

    return (
        <>
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/nursing-home" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <Heart className="w-5 h-5 text-amber-500" />
                        <span className="text-lg font-bold text-white">Abuse Settlement Calculator</span>
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
                        {SITE.year} Nursing Home Abuse Calculator
                    </h1>
                    <p className="text-sm text-slate-400 mb-6">
                        Estimate your elder abuse or neglect settlement
                    </p>

                    {/* Inputs */}
                    <div className="space-y-5 mb-6">
                        {/* Abuse Type */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Type of Abuse or Neglect
                            </label>
                            <div className="grid grid-cols-2 gap-2">
                                {abuseOptions.slice(0, 6).map((opt) => (
                                    <button
                                        key={opt.value}
                                        type="button"
                                        onClick={() => setAbuseType(opt.value as keyof typeof ABUSE_TYPES)}
                                        className={`py-3 px-3 rounded-lg border font-medium transition text-left ${abuseType === opt.value
                                            ? "bg-amber-600 text-white border-amber-600"
                                            : "bg-slate-700 text-slate-300 border-slate-600 hover:border-amber-500"
                                            }`}
                                    >
                                        <div className="text-xs font-semibold">{opt.label}</div>
                                        <div className="text-xs mt-1 text-amber-300">{opt.range}</div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Medical Expenses */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Medical Expenses to Date
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                                <input
                                    type="text"
                                    value={medicalExpenses}
                                    onChange={handleInputChange(setMedicalExpenses)}
                                    placeholder="25,000"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-amber-500"
                                />
                            </div>
                            <p className="text-xs text-slate-500 mt-1">
                                Hospital, wound care, surgery, rehabilitation
                            </p>
                        </div>

                        {/* Future Care Costs */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Estimated Future Care Costs
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                                <input
                                    type="text"
                                    value={futureCareCost}
                                    onChange={handleInputChange(setFutureCareCost)}
                                    placeholder="50,000"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-amber-500"
                                />
                            </div>
                            <p className="text-xs text-slate-500 mt-1">
                                Ongoing treatment, relocation costs, new care facility
                            </p>
                        </div>

                        {/* Prior Violations Toggle */}
                        <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                            <div>
                                <p className="text-sm font-medium text-white">Prior Facility Violations?</p>
                                <p className="text-xs text-slate-400">May qualify for punitive damages</p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setHasPriorViolations(!hasPriorViolations)}
                                className={`w-14 h-8 rounded-full transition-colors ${hasPriorViolations ? "bg-red-600" : "bg-slate-600"
                                    }`}
                            >
                                <div className={`w-6 h-6 bg-white rounded-full transition-transform mx-1 ${hasPriorViolations ? "translate-x-6" : "translate-x-0"
                                    }`} />
                            </button>
                        </div>

                        {/* Attorney Toggle */}
                        <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                            <div>
                                <p className="text-sm font-medium text-white">Using an Attorney?</p>
                                <p className="text-xs text-slate-400">Attorney fees: 33% of settlement</p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setHasAttorney(!hasAttorney)}
                                className={`w-14 h-8 rounded-full transition-colors ${hasAttorney ? "bg-amber-600" : "bg-slate-600"
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
                        className="w-full py-4 bg-amber-600 text-white rounded-lg font-semibold text-lg hover:bg-amber-700 transition-colors flex items-center justify-center gap-2"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate Settlement
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        {/* Summary Header */}
                        <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-6">
                            <p className="text-sm text-amber-100 mb-1">Estimated Nursing Home Abuse Settlement</p>
                            <p className="text-4xl font-bold">{formatCurrencyFull(result.netSettlement)}</p>
                            <p className="text-sm text-amber-100 mt-2">
                                Typical Range: {formatCurrency(result.settlementRange.min)} - {formatCurrency(result.settlementRange.max)}
                            </p>
                        </div>

                        {/* Breakdown */}
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                                Settlement Breakdown
                            </h3>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Medical Expenses</span>
                                    <span className="font-medium text-white">{formatCurrencyFull(result.medicalExpenses)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Future Care Costs</span>
                                    <span className="font-medium text-white">{formatCurrencyFull(result.futureCareCost)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Pain & Suffering ({result.painSufferingMultiplier}x)</span>
                                    <span className="font-medium text-amber-400">+{formatCurrencyFull(result.painSufferingAmount)}</span>
                                </div>
                                {result.punitiveDamages > 0 && (
                                    <div className="flex justify-between py-2 border-b border-slate-700">
                                        <span className="text-slate-300">Punitive Damages (2x)</span>
                                        <span className="font-medium text-red-400">+{formatCurrencyFull(result.punitiveDamages)}</span>
                                    </div>
                                )}
                                {result.attorneyFees > 0 && (
                                    <div className="flex justify-between py-2 border-b border-slate-700">
                                        <span className="text-slate-300">Attorney Fees (33%)</span>
                                        <span className="font-medium text-red-400">-{formatCurrencyFull(result.attorneyFees)}</span>
                                    </div>
                                )}
                                <div className="flex justify-between pt-4 text-lg">
                                    <span className="text-white font-bold">Your Net Settlement</span>
                                    <span className="font-bold text-amber-400">{formatCurrencyFull(result.netSettlement)}</span>
                                </div>
                            </div>
                        </div>

                        {/* Info */}
                        <div className="p-4 bg-blue-900/30 border-t border-blue-700/50">
                            <div className="flex items-start gap-2 text-sm">
                                <Info className="w-4 h-4 text-blue-400 mt-0.5" />
                                <p className="text-blue-200">
                                    Facilities with documented prior violations may face significantly higher punitive damages from juries.
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
                        <Info className="w-5 h-5 text-amber-500" />
                        Nursing Home Abuse FAQ
                    </h2>

                    <div className="space-y-4 text-sm">
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What is the average nursing home abuse settlement?
                            </h3>
                            <p className="text-slate-400">
                                Settlements range from $50,000 for minor neglect to over $1 million for wrongful death. The average is around $250,000. Bedsore cases average $175,000.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                Can I sue a nursing home for bedsores?
                            </h3>
                            <p className="text-slate-400">
                                Yes. Stage 3 and 4 bedsores are almost always preventable with proper care. They indicate staffing failures, and facilities can be held liable for resulting injuries and wrongful death.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                How do I report nursing home abuse?
                            </h3>
                            <p className="text-slate-400">
                                Contact your state&apos;s Adult Protective Services, the Long-Term Care Ombudsman, and consider filing a complaint with your state health department. Document everything.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What is the statute of limitations?
                            </h3>
                            <p className="text-slate-400">
                                Most states have a 2-3 year statute of limitations for nursing home abuse claims. However, the clock may start when the abuse was discovered, not when it occurred.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    This calculator provides estimates based on {SITE.year} data.
                    Every case is unique. Consult with an elder abuse attorney for accurate evaluation.
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
                                name: "What is the average nursing home abuse settlement?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Settlements range from $50,000 for minor neglect to over $1 million for wrongful death. The average is around $250,000.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Can I sue a nursing home for bedsores?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes. Stage 3 and 4 bedsores are almost always preventable with proper care. Facilities can be held liable.",
                                },
                            },
                        ],
                    }),
                }}
            />
        </>
    );
}
