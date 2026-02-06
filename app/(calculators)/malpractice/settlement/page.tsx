"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calculator, Info, AlertTriangle, Stethoscope } from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import {
    SITE,
    MALPRACTICE_CONSTANTS,
    formatCurrency,
    parseFormattedNumber,
    getSeverityLabel,
    getSeverityColor,
} from "@/lib/calculators/malpractice";

interface MalpracticeResult {
    medicalExpenses: number;
    futureCareCosts: number;
    lostWages: number;
    painSufferingMultiplier: number;
    painSufferingAmount: number;
    totalBeforeFees: number;
    attorneyFees: number;
    expertWitnessCosts: number;
    netSettlement: number;
    settlementRange: { min: number; max: number };
}

export default function MalpracticeSettlementPage() {
    const [medicalExpenses, setMedicalExpenses] = useState("");
    const [futureCareCosts, setFutureCareCosts] = useState("");
    const [lostWages, setLostWages] = useState("");
    const [severity, setSeverity] = useState<"minor" | "moderate" | "severe" | "catastrophic">("severe");
    const [hasAttorney, setHasAttorney] = useState(true);
    const [result, setResult] = useState<MalpracticeResult | null>(null);

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
        const medical = parseFormattedNumber(medicalExpenses) || 50000;
        const future = parseFormattedNumber(futureCareCosts) || 0;
        const wages = parseFormattedNumber(lostWages) || 0;

        const multipliers = MALPRACTICE_CONSTANTS.multipliers[severity];
        const economicDamages = medical + future + wages;
        const painSufferingMultiplier = multipliers.avg;
        const painSufferingAmount = Math.round(medical * painSufferingMultiplier);
        const expertWitnessCosts = MALPRACTICE_CONSTANTS.expertWitnessCosts.avg;
        const totalBeforeFees = economicDamages + painSufferingAmount;
        const attorneyFees = hasAttorney ? Math.round(totalBeforeFees * MALPRACTICE_CONSTANTS.attorneyFees.preSettlement) : 0;
        const netSettlement = totalBeforeFees - attorneyFees - expertWitnessCosts;

        const minTotal = economicDamages + (medical * multipliers.min);
        const maxTotal = economicDamages + (medical * multipliers.max);

        setResult({
            medicalExpenses: medical,
            futureCareCosts: future,
            lostWages: wages,
            painSufferingMultiplier,
            painSufferingAmount,
            totalBeforeFees,
            attorneyFees,
            expertWitnessCosts,
            netSettlement,
            settlementRange: {
                min: Math.round(hasAttorney ? minTotal * 0.67 : minTotal),
                max: Math.round(hasAttorney ? maxTotal * 0.67 : maxTotal),
            },
        });
    };

    const severityOptions = [
        { value: "minor", label: "Stage 1", desc: "Temporary injury, full recovery", multiplier: "1.5-3x" },
        { value: "moderate", label: "Stage 2", desc: "Extended treatment needed", multiplier: "3-5x" },
        { value: "severe", label: "Stage 3", desc: "Permanent injury, disability", multiplier: "5-10x" },
        { value: "catastrophic", label: "Stage 4", desc: "Death or total disability", multiplier: "10-25x" },
    ];

    return (
        <>

            <main className="max-w-2xl mx-auto px-4 py-8">
                {/* Calculator Card */}
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">
                        {SITE.year} Medical Malpractice Settlement Calculator
                    </h1>
                    <p className="text-sm text-slate-400 mb-6">
                        Estimate your malpractice settlement for surgical errors, misdiagnosis, and more
                    </p>

                    {/* Inputs */}
                    <div className="space-y-5 mb-6">
                        {/* Medical Expenses */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Total Medical Expenses
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                                <input
                                    type="text"
                                    value={medicalExpenses}
                                    onChange={handleInputChange(setMedicalExpenses)}
                                    onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
                                    placeholder="50,000"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                                />
                            </div>
                            <p className="text-xs text-slate-500 mt-1">
                                Include all hospital bills, surgery costs, therapy, and medication
                            </p>
                        </div>

                        {/* Future Care Costs */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Future Care Costs (Optional)
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                                <input
                                    type="text"
                                    value={futureCareCosts}
                                    onChange={handleInputChange(setFutureCareCosts)}
                                    onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
                                    placeholder="0"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                                />
                            </div>
                            <p className="text-xs text-slate-500 mt-1">
                                Estimated ongoing medical care, rehabilitation, and equipment
                            </p>
                        </div>

                        {/* Lost Wages */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Lost Wages & Future Earnings (Optional)
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                                <input
                                    type="text"
                                    value={lostWages}
                                    onChange={handleInputChange(setLostWages)}
                                    onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
                                    placeholder="0"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                                />
                            </div>
                        </div>

                        {/* Injury Severity */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Injury Severity
                            </label>
                            <div className="grid grid-cols-2 gap-2">
                                {severityOptions.map((opt) => (
                                    <button
                                        key={opt.value}
                                        type="button"
                                        onClick={() => setSeverity(opt.value as typeof severity)}
                                        className={`py-3 px-3 rounded-lg border font-medium transition text-left ${severity === opt.value
                                            ? "bg-amber-600 text-white border-amber-600"
                                            : "bg-slate-700 text-slate-300 border-slate-600 hover:border-amber-500"
                                            }`}
                                    >
                                        <div className="text-sm font-semibold">{opt.label}</div>
                                        <div className="text-xs opacity-75">{opt.desc}</div>
                                        <div className="text-xs mt-1 text-amber-300">{opt.multiplier}</div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Attorney Toggle */}
                        <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                            <div>
                                <p className="text-sm font-medium text-white">Using a Malpractice Attorney?</p>
                                <p className="text-xs text-slate-400">Attorney fees: 33% + expert witness costs ~$25K</p>
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
                        Calculate Malpractice Settlement
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-6">
                            <p className="text-sm text-amber-100 mb-1">Estimated Malpractice Settlement</p>
                            <p className="text-4xl font-bold">{formatCurrency(result.netSettlement)}</p>
                            <p className="text-sm text-amber-100 mt-2">
                                Range: {formatCurrency(result.settlementRange.min)} - {formatCurrency(result.settlementRange.max)}
                            </p>
                        </div>

                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                                Settlement Breakdown
                            </h3>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Medical Expenses</span>
                                    <span className="font-medium text-white">{formatCurrency(result.medicalExpenses)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Future Care Costs</span>
                                    <span className="font-medium text-white">{formatCurrency(result.futureCareCosts)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Lost Wages</span>
                                    <span className="font-medium text-white">{formatCurrency(result.lostWages)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Pain & Suffering ({result.painSufferingMultiplier}x)</span>
                                    <span className="font-medium text-amber-400">+{formatCurrency(result.painSufferingAmount)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-white font-medium">Total Before Fees</span>
                                    <span className="font-bold text-white">{formatCurrency(result.totalBeforeFees)}</span>
                                </div>
                                {result.attorneyFees > 0 && (
                                    <>
                                        <div className="flex justify-between py-2 border-b border-slate-700">
                                            <span className="text-slate-300">Attorney Fees (33%)</span>
                                            <span className="font-medium text-red-400">-{formatCurrency(result.attorneyFees)}</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-slate-700">
                                            <span className="text-slate-300">Expert Witness Costs</span>
                                            <span className="font-medium text-red-400">-{formatCurrency(result.expertWitnessCosts)}</span>
                                        </div>
                                    </>
                                )}
                                <div className="flex justify-between pt-4 text-lg">
                                    <span className="text-white font-bold">Your Net Settlement</span>
                                    <span className="font-bold text-amber-400">{formatCurrency(result.netSettlement)}</span>
                                </div>
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
                        Medical Malpractice FAQ
                    </h2>

                    <div className="space-y-4 text-sm">
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What is medical malpractice?
                            </h3>
                            <p className="text-slate-400">
                                Medical malpractice occurs when a healthcare provider deviates from the accepted standard of care, causing injury to a patient. This includes surgical errors, misdiagnosis, medication errors, and birth injuries.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What is the average malpractice settlement?
                            </h3>
                            <p className="text-slate-400">
                                Surgical error settlements average $500,000. Misdiagnosis cases average $350,000. Birth injury cases can reach $1.5 million or more. Wrongful death cases average $1.2 million.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                Why are expert witnesses required?
                            </h3>
                            <p className="text-slate-400">
                                Medical malpractice cases require expert medical testimony to prove the standard of care was breached. Expert witness fees typically range from $10,000-$50,000.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What is the statute of limitations?
                            </h3>
                            <p className="text-slate-400">
                                Most states have a 2-3 year statute of limitations for malpractice claims. Some states have "discovery rules" that start the clock when the injury was discovered.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <div className="mt-8 text-center">
                    <Link
                        href="/malpractice/types"
                        className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        View Settlements by Malpractice Type ??                    </Link>
                </div>

                {/* Disclaimer */}
                <div className="mt-8 p-4 bg-amber-900/20 border border-amber-700/50 rounded-lg">
                    <div className="flex items-start gap-2">
                        <AlertTriangle className="w-5 h-5 text-amber-400 mt-0.5" />
                        <p className="text-xs text-amber-200">
                            <strong>Important:</strong> Medical malpractice cases are complex and require expert testimony.
                            Time limits are strict. Consult a specialized malpractice attorney immediately if you suspect negligence.
                        </p>
                    </div>
                </div>
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
                                name: "What is the average medical malpractice settlement?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Surgical error settlements average $500,000. Misdiagnosis cases average $350,000. Birth injury cases can reach $1.5 million or more.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Why do malpractice cases require expert witnesses?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Medical malpractice cases require expert medical testimony to prove the standard of care was breached. Expert witness fees typically range from $10,000-$50,000.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What is the statute of limitations for malpractice?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Most states have a 2-3 year statute of limitations for malpractice claims. Some states have discovery rules that start when the injury was discovered.",
                                },
                            },
                        ],
                    }),
                }}
            />
        </>
    );
}
