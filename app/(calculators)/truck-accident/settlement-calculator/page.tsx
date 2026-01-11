"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calculator, Scale, DollarSign, Info, AlertCircle, CheckCircle, Minus } from "lucide-react";
import {
    SITE,
    SETTLEMENT_CONSTANTS,
    STATE_FAULT_LAWS,
    calculateSettlement,
    formatCurrency,
    parseFormattedNumber,
    getStatesList,
    getSeverityLevels,
    SettlementResult
} from "@/lib/calculators/truck-accident";

export default function SettlementCalculatorPage() {
    const [state, setState] = useState("CA");
    const [medicalBills, setMedicalBills] = useState("");
    const [lostWages, setLostWages] = useState("");
    const [propertyDamage, setPropertyDamage] = useState("");
    const [severity, setSeverity] = useState<'minor' | 'moderate' | 'severe' | 'permanent' | 'catastrophic'>('moderate');
    const [faultPercent, setFaultPercent] = useState(0);
    const [result, setResult] = useState<SettlementResult | null>(null);

    const states = getStatesList();
    const severityLevels = getSeverityLevels();
    const selectedState = STATE_FAULT_LAWS[state];

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
        const medical = parseFormattedNumber(medicalBills) || 5000;
        const wages = parseFormattedNumber(lostWages) || 0;
        const property = parseFormattedNumber(propertyDamage) || 0;
        setResult(calculateSettlement(state, medical, wages, property, severity, faultPercent));
    };

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header */}
            <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
                <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/truck-accident" className="text-slate-400 hover:text-red-600 transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <Calculator className="w-5 h-5 text-red-600" />
                        <span className="text-lg font-bold text-slate-800">Settlement Calculator</span>
                    </div>
                    <span className="ml-auto text-xs text-white bg-red-600 px-2 py-1 rounded-full font-bold">
                        FREE
                    </span>
                </div>
            </header>

            <main className="max-w-2xl mx-auto px-4 py-8">
                {/* Calculator Card */}
                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                    <h1 className="text-xl font-bold text-slate-800 mb-2">
                        Truck Accident Settlement Calculator
                    </h1>
                    <p className="text-sm text-slate-500 mb-6">
                        Estimate your total settlement including pain & suffering
                    </p>

                    {/* Inputs */}
                    <div className="space-y-5 mb-6">
                        {/* State Selection */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                1. Your State
                            </label>
                            <select
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                className="w-full px-4 py-3 bg-white border-2 border-slate-300 rounded-lg text-slate-800 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                            >
                                {states.map((s) => (
                                    <option key={s.code} value={s.code}>
                                        {s.name} ({s.faultSystem === 'no-fault' ? 'No-Fault' : 'At-Fault'})
                                    </option>
                                ))}
                            </select>
                            <p className="text-xs text-slate-500 mt-1">
                                {selectedState.name}: {selectedState.notes}
                            </p>
                        </div>

                        {/* Medical Bills */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                2. Total Medical Bills
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                                <input
                                    type="text"
                                    value={medicalBills}
                                    onChange={handleInputChange(setMedicalBills)}
                                    placeholder="10,000"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-white border-2 border-slate-300 rounded-lg text-slate-800 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                                />
                            </div>
                            <p className="text-xs text-slate-400 mt-1">Include all medical expenses (past & future expected)</p>
                        </div>

                        {/* Lost Wages */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                3. Lost Wages
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                                <input
                                    type="text"
                                    value={lostWages}
                                    onChange={handleInputChange(setLostWages)}
                                    placeholder="5,000"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-white border-2 border-slate-300 rounded-lg text-slate-800 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                                />
                            </div>
                            <p className="text-xs text-slate-400 mt-1">Income lost due to injury (past & future)</p>
                        </div>

                        {/* Property Damage */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                4. Property Damage (Vehicle)
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                                <input
                                    type="text"
                                    value={propertyDamage}
                                    onChange={handleInputChange(setPropertyDamage)}
                                    placeholder="8,000"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-white border-2 border-slate-300 rounded-lg text-slate-800 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                                />
                            </div>
                        </div>

                        {/* Injury Severity */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                5. Injury Severity
                            </label>
                            <select
                                value={severity}
                                onChange={(e) => setSeverity(e.target.value as typeof severity)}
                                className="w-full px-4 py-3 bg-white border-2 border-slate-300 rounded-lg text-slate-800 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                            >
                                {severityLevels.map((level) => (
                                    <option key={level.id} value={level.id}>
                                        {level.label} (Multiplier: {level.range})
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Fault Percentage */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                6. Your Fault Percentage: {faultPercent}%
                            </label>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={faultPercent}
                                onChange={(e) => setFaultPercent(parseInt(e.target.value))}
                                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-red-600"
                            />
                            <div className="flex justify-between text-xs text-slate-400 mt-1">
                                <span>0% (Not your fault)</span>
                                <span>100% (All your fault)</span>
                            </div>
                        </div>
                    </div>

                    {/* Calculate Button */}
                    <button
                        onClick={handleCalculate}
                        className="w-full py-4 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-2 shadow-md"
                    >
                        <Scale className="w-5 h-5" />
                        Calculate Settlement
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                        {/* Total Settlement */}
                        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6">
                            <p className="text-sm text-green-100 mb-1">Estimated Settlement Value</p>
                            <p className="text-4xl font-bold">{formatCurrency(result.settlementLow)} - {formatCurrency(result.settlementHigh)}</p>
                            {result.faultReduction > 0 && result.faultReduction < 100 && (
                                <p className="text-sm text-green-200 mt-2">
                                    After {result.faultPercentage}% fault reduction
                                </p>
                            )}
                            {result.faultReduction === 100 && (
                                <div className="mt-2 flex items-center gap-1 text-red-200 text-sm">
                                    <AlertCircle className="w-4 h-4" />
                                    <span>Contributory negligence may bar recovery in {result.stateName}</span>
                                </div>
                            )}
                        </div>

                        {/* With Attorney Comparison */}
                        <div className="bg-blue-50 border-b border-blue-200 p-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-xs text-slate-500 mb-1">Without Attorney</p>
                                    <p className="text-xl font-bold text-slate-700">{formatCurrency(result.settlementLow)}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-blue-600 mb-1">With Attorney (+30%)</p>
                                    <p className="text-xl font-bold text-blue-700">{formatCurrency(result.withAttorneyHigh)}</p>
                                    <p className="text-xs text-slate-500">After 33% fee: {formatCurrency(result.afterAttorneyFeeHigh)}</p>
                                </div>
                            </div>
                        </div>

                        {/* Breakdown */}
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
                                Calculation Breakdown
                            </h3>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-100">
                                    <span className="text-slate-600">State</span>
                                    <span className="font-medium text-slate-800">{result.stateName}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-100">
                                    <span className="text-slate-600">Medical Bills</span>
                                    <span className="font-medium text-slate-800">{formatCurrency(result.medicalBills)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-100">
                                    <span className="text-slate-600">Lost Wages</span>
                                    <span className="font-medium text-slate-800">{formatCurrency(result.lostWages)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-100">
                                    <span className="text-slate-600">Property Damage</span>
                                    <span className="font-medium text-slate-800">{formatCurrency(result.propertyDamage)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-100 bg-slate-50 -mx-6 px-6">
                                    <span className="text-slate-700 font-medium">Economic Damages</span>
                                    <span className="font-bold text-slate-800">{formatCurrency(result.economicDamages)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-100">
                                    <span className="text-slate-600">Pain Multiplier ({result.injurySeverity})</span>
                                    <span className="font-medium text-slate-800">{result.painMultiplier.toFixed(1)}x</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-100">
                                    <span className="text-slate-600">Pain & Suffering</span>
                                    <span className="font-medium text-green-600">{formatCurrency(result.painSufferingLow)} - {formatCurrency(result.painSufferingHigh)}</span>
                                </div>
                                {result.faultReduction > 0 && (
                                    <div className="flex justify-between py-2 border-b border-slate-100">
                                        <span className="text-slate-600">Fault Reduction ({result.faultPercentage}%)</span>
                                        <span className="font-medium text-red-500">-{result.faultReduction.toFixed(0)}%</span>
                                    </div>
                                )}
                                <div className="flex justify-between pt-4 text-lg border-t-2 border-slate-200">
                                    <span className="text-slate-800 font-bold">Total Settlement</span>
                                    <span className="font-bold text-green-600">{formatCurrency(result.settlementLow)} - {formatCurrency(result.settlementHigh)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Ad Placeholder */}
                <div className="my-8 p-6 bg-white border border-slate-200 rounded-xl text-center shadow-sm">
                    <p className="text-sm text-slate-400">Advertisement</p>
                </div>

                {/* FAQ Section */}
                <section className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                    <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <Info className="w-5 h-5 text-red-500" />
                        Truck Accident Settlement FAQ
                    </h2>

                    <div className="space-y-4 text-sm">
                        <div>
                            <h3 className="font-semibold text-slate-800 mb-1">
                                Why are truck accident settlements higher than car accidents?
                            </h3>
                            <p className="text-slate-600">
                                Truck accidents cause more severe injuries due to the massive size difference
                                (80,000 lbs vs 4,000 lbs). Multiple parties may be liable: trucking company,
                                driver, cargo loader, and manufacturer. Commercial insurance policies are
                                typically $1M-$5M, allowing larger settlements.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-800 mb-1">
                                Who can be held liable in a truck accident?
                            </h3>
                            <p className="text-slate-600">
                                Unlike car accidents, truck accidents often involve multiple liable parties:
                                the truck driver, trucking company, cargo loading company, truck manufacturer,
                                and maintenance providers. FMCSA regulations often determine liability.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-800 mb-1">
                                What is FMCSA and how does it affect my case?
                            </h3>
                            <p className="text-slate-600">
                                The Federal Motor Carrier Safety Administration (FMCSA) sets regulations for
                                commercial trucks: Hours of Service limits, maintenance requirements, and
                                driver qualifications. Violations (like driving over 11 hours) can prove
                                negligence and increase your settlement.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <div className="mt-8 text-center">
                    <Link
                        href="/truck-accident/pain-suffering"
                        className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Calculate Pain & Suffering →
                    </Link>
                </div>

                {/* Disclaimer */}
                <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-start gap-2">
                        <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
                        <p className="text-xs text-red-800">
                            <strong>Disclaimer:</strong> This is an estimate only. Not legal advice.
                            Truck accident cases are complex with multiple liable parties. Commercial
                            trucking companies have aggressive legal teams. Consult a truck accident
                            attorney for your specific case.
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
                                name: "Why are truck accident settlements higher than car accidents?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Truck accidents cause more severe injuries due to size difference (80,000 lbs vs 4,000 lbs). Multiple liable parties and commercial insurance policies of $1M-$5M allow larger settlements.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Who can be held liable in a truck accident?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Multiple parties may be liable: truck driver, trucking company, cargo loading company, truck manufacturer, and maintenance providers. FMCSA regulations often determine liability.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What is FMCSA and how does it affect my truck accident case?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "The Federal Motor Carrier Safety Administration sets regulations for commercial trucks including Hours of Service limits. Violations can prove negligence and increase your settlement.",
                                },
                            },
                        ],
                    }),
                }}
            />
        </div>
    );
}
