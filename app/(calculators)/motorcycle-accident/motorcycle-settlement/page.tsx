"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Bike, Calculator, Info, AlertTriangle, HardHat } from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import {
    SITE,
    MOTORCYCLE_CONSTANTS_2026,
    calculateMotorcycleSettlement,
    formatCurrency,
    parseFormattedNumber,
    SettlementResult
} from "@/lib/calculators/motorcycle-accident";

export default function MotorcycleSettlementPage() {
    const [bikeDamage, setBikeDamage] = useState("");
    const [medicalExpenses, setMedicalExpenses] = useState("");
    const [lostWages, setLostWages] = useState("");
    const [faultPercent, setFaultPercent] = useState(0);
    const [severity, setSeverity] = useState<"minor" | "moderate" | "severe" | "catastrophic">("moderate");
    const [hasAttorney, setHasAttorney] = useState(true);
    const [woreHelmet, setWoreHelmet] = useState(true);
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
        const bike = parseFormattedNumber(bikeDamage) || 0;
        const medical = parseFormattedNumber(medicalExpenses) || 15000;
        const wages = parseFormattedNumber(lostWages) || 0;
        setResult(calculateMotorcycleSettlement(bike, medical, wages, faultPercent, severity, hasAttorney, woreHelmet));
    };

    const severityOptions = [
        { value: "minor", label: "Minor", desc: "Road rash, bruises", multiplier: "2-4x" },
        { value: "moderate", label: "Moderate", desc: "Fractures, surgery", multiplier: "4-7x" },
        { value: "severe", label: "Severe", desc: "TBI, spinal injury", multiplier: "7-15x" },
        { value: "catastrophic", label: "Catastrophic", desc: "Paralysis, amputation", multiplier: "15-30x" },
    ];

    return (
        <>

            <main className="max-w-2xl mx-auto px-4 py-8">
                {/* Calculator Card */}
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">
                        {SITE.year} Motorcycle Accident Settlement Calculator
                    </h1>
                    <p className="text-sm text-slate-400 mb-6">
                        Calculate your motorcycle crash settlement based on injuries, bike damage, and fault
                    </p>

                    {/* Inputs */}
                    <div className="space-y-5 mb-6">
                        {/* Bike Damage */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                <Bike className="w-4 h-4 inline mr-1" />
                                Motorcycle Damage
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                                <input
                                    type="text"
                                    value={bikeDamage}
                                    onChange={handleInputChange(setBikeDamage)}
                                    placeholder="8,000"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                                />
                            </div>
                            <p className="text-xs text-slate-500 mt-1">
                                Repair costs or total loss value
                            </p>
                        </div>

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
                                    placeholder="15,000"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                                />
                            </div>
                            <p className="text-xs text-slate-500 mt-1">
                                ER, surgery, therapy, and future treatment costs
                            </p>
                        </div>

                        {/* Lost Wages */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Lost Wages (Optional)
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                                <input
                                    type="text"
                                    value={lostWages}
                                    onChange={handleInputChange(setLostWages)}
                                    placeholder="0"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                                />
                            </div>
                        </div>

                        {/* Fault Percentage */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Your Fault Percentage: {faultPercent}%
                            </label>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={faultPercent}
                                onChange={(e) => setFaultPercent(parseInt(e.target.value))}
                                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
                            />
                            <div className="flex justify-between text-xs text-slate-500 mt-1">
                                <span>0% (Not your fault)</span>
                                <span>100% (All your fault)</span>
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
                                            ? "bg-orange-600 text-white border-orange-600"
                                            : "bg-slate-700 text-slate-300 border-slate-600 hover:border-orange-500"
                                            }`}
                                    >
                                        <div className="text-sm font-semibold">{opt.label}</div>
                                        <div className="text-xs opacity-75">{opt.desc}</div>
                                        <div className="text-xs mt-1 text-orange-300">{opt.multiplier}</div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Helmet Toggle */}
                        <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                            <div className="flex items-center gap-2">
                                <HardHat className="w-5 h-5 text-amber-400" />
                                <div>
                                    <p className="text-sm font-medium text-white">Were you wearing a helmet?</p>
                                    <p className="text-xs text-slate-400">Some states reduce settlement if no helmet</p>
                                </div>
                            </div>
                            <button
                                type="button"
                                onClick={() => setWoreHelmet(!woreHelmet)}
                                className={`w-14 h-8 rounded-full transition-colors ${woreHelmet ? "bg-green-600" : "bg-red-600"
                                    }`}
                            >
                                <div className={`w-6 h-6 bg-white rounded-full transition-transform mx-1 ${woreHelmet ? "translate-x-6" : "translate-x-0"
                                    }`} />
                            </button>
                        </div>

                        {/* Attorney Toggle */}
                        <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                            <div>
                                <p className="text-sm font-medium text-white">Using a Motorcycle Accident Lawyer?</p>
                                <p className="text-xs text-slate-400">Attorney fees: 33% of settlement</p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setHasAttorney(!hasAttorney)}
                                className={`w-14 h-8 rounded-full transition-colors ${hasAttorney ? "bg-orange-600" : "bg-slate-600"
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
                        className="w-full py-4 bg-orange-600 text-white rounded-lg font-semibold text-lg hover:bg-orange-700 transition-colors flex items-center justify-center gap-2"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate Settlement Value
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        {/* Summary Header */}
                        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-6">
                            <p className="text-sm text-orange-100 mb-1">Estimated Motorcycle Accident Settlement</p>
                            <p className="text-4xl font-bold">{formatCurrency(result.netSettlement)}</p>
                            <p className="text-sm text-orange-100 mt-2">
                                Range: {formatCurrency(result.settlementRange.min)} - {formatCurrency(result.settlementRange.max)}
                            </p>
                        </div>

                        {/* Breakdown */}
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                                Settlement Breakdown
                            </h3>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Motorcycle Damage</span>
                                    <span className="font-medium text-white">{formatCurrency(result.bikeDamage)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Medical Expenses</span>
                                    <span className="font-medium text-white">{formatCurrency(result.medicalExpenses)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Lost Wages</span>
                                    <span className="font-medium text-white">{formatCurrency(result.lostWages)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Pain & Suffering ({result.painSufferingMultiplier}x)</span>
                                    <span className="font-medium text-orange-400">+{formatCurrency(result.painSufferingAmount)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-white font-medium">Subtotal</span>
                                    <span className="font-bold text-white">{formatCurrency(result.totalBeforeFees + result.faultReduction)}</span>
                                </div>
                                {result.faultReduction > 0 && (
                                    <div className="flex justify-between py-2 border-b border-slate-700">
                                        <span className="text-slate-300">Comparative Fault ({faultPercent}%)</span>
                                        <span className="font-medium text-red-400">-{formatCurrency(result.faultReduction)}</span>
                                    </div>
                                )}
                                {result.attorneyFees > 0 && (
                                    <div className="flex justify-between py-2 border-b border-slate-700">
                                        <span className="text-slate-300">Attorney Fees (33%)</span>
                                        <span className="font-medium text-red-400">-{formatCurrency(result.attorneyFees)}</span>
                                    </div>
                                )}
                                <div className="flex justify-between pt-4 text-lg">
                                    <span className="text-white font-bold">Your Net Settlement</span>
                                    <span className="font-bold text-orange-400">{formatCurrency(result.netSettlement)}</span>
                                </div>
                            </div>
                        </div>

                        {/* Warning for no helmet */}
                        {!woreHelmet && (
                            <div className="p-4 bg-amber-900/30 border-t border-amber-700/50">
                                <div className="flex items-start gap-2 text-sm">
                                    <AlertTriangle className="w-4 h-4 text-amber-400 mt-0.5" />
                                    <p className="text-amber-200">
                                        Not wearing a helmet may reduce your settlement by 30% in some states due to comparative negligence.
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Info */}
                        <div className="p-4 bg-blue-900/30 border-t border-blue-700/50">
                            <div className="flex items-start gap-2 text-sm">
                                <Info className="w-4 h-4 text-blue-400 mt-0.5" />
                                <p className="text-blue-200">
                                    Motorcycle accident settlements are typically higher than car accidents due to more severe injuries.
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
                        <Info className="w-5 h-5 text-orange-500" />
                        Motorcycle Accident Settlement FAQ
                    </h2>

                    <div className="space-y-4 text-sm">
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What is the average motorcycle accident settlement?
                            </h3>
                            <p className="text-slate-400">
                                The average motorcycle accident settlement ranges from $50,000 to $100,000. However, severe injuries like TBI or spinal cord damage can result in settlements of $500,000 to $2 million or more.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                Why are motorcycle settlements higher than car accidents?
                            </h3>
                            <p className="text-slate-400">
                                Motorcyclists lack the protective shell of a car, leading to more severe injuries. This results in higher medical costs, longer recovery times, and higher pain & suffering multipliers (5-15x vs. 2-5x for cars).
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                Does wearing a helmet affect my settlement?
                            </h3>
                            <p className="text-slate-400">
                                In some states, not wearing a helmet can reduce your settlement by up to 30% under comparative negligence laws. Always wear a DOT-approved helmet for safety and legal protection.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                Should I hire a motorcycle accident lawyer?
                            </h3>
                            <p className="text-slate-400">
                                Studies show accident victims with attorneys receive 3.5x higher settlements on average, even after the 33% attorney fee. For motorcycle accidents with significant injuries, legal representation is highly recommended.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <div className="mt-8 text-center">
                    <Link
                        href="/motorcycle-accident/injury-types"
                        className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        View Settlement Values by Injury Type →
                    </Link>
                </div>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    This calculator provides estimates based on {SITE.year} industry data.
                    Every case is unique. Consult with a motorcycle accident attorney for accurate case evaluation.
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
                                name: "What is the average motorcycle accident settlement?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "The average motorcycle accident settlement ranges from $50,000 to $100,000. Severe injuries can result in settlements of $500,000 to $2 million or more.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Why are motorcycle settlements higher than car accidents?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Motorcyclists lack the protective shell of a car, leading to more severe injuries and higher pain & suffering multipliers (5-15x vs. 2-5x for cars).",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Does wearing a helmet affect my settlement?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "In some states, not wearing a helmet can reduce your settlement by up to 30% under comparative negligence laws.",
                                },
                            },
                        ],
                    }),
                }}
            />
        </>
    );
}
