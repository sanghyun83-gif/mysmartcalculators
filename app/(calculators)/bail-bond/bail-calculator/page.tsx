"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Scale, Calculator, Info, AlertTriangle } from "lucide-react";
import {
    SITE,
    STATE_BAIL,
    BAIL_CONSTANTS_2026,
    calculateBailCost,
    formatCurrency,
    parseFormattedNumber,
    BailResult
} from "@/lib/calculators/bail-bond";

export default function BailCalculatorPage() {
    const [bailAmount, setBailAmount] = useState("");
    const [offenseType, setOffenseType] = useState<keyof typeof BAIL_CONSTANTS_2026.bailByOffense>("felony");
    const [state, setState] = useState<keyof typeof STATE_BAIL>("california");
    const [usesBondsman, setUsesBondsman] = useState(true);
    const [result, setResult] = useState<BailResult | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/[^0-9]/g, "");
        if (raw === "") {
            setBailAmount("");
            return;
        }
        setBailAmount(parseInt(raw).toLocaleString("en-US"));
    };

    const handleCalculate = () => {
        const bail = parseFormattedNumber(bailAmount) || BAIL_CONSTANTS_2026.bailByOffense[offenseType].avg;
        setResult(calculateBailCost(bail, offenseType, state, usesBondsman));
    };

    const offenseOptions = [
        { value: "misdemeanor", label: "Misdemeanor", avg: 2500 },
        { value: "dui", label: "DUI / DWI", avg: 10000 },
        { value: "felony", label: "Felony", avg: 50000 },
        { value: "violentFelony", label: "Violent Felony", avg: 150000 },
        { value: "drugFelony", label: "Drug Felony", avg: 75000 },
        { value: "murder", label: "Murder", avg: 1000000 },
    ];

    const stateOptions = Object.entries(STATE_BAIL).map(([key, s]) => ({
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
                        {SITE.year} Bail Bond Calculator
                    </h1>
                    <p className="text-sm text-slate-400 mb-6">
                        Calculate your bail bond premium and total cost
                    </p>

                    {/* Inputs */}
                    <div className="space-y-5 mb-6">
                        {/* Offense Type */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Type of Offense
                            </label>
                            <div className="grid grid-cols-2 gap-2">
                                {offenseOptions.map((opt) => (
                                    <button
                                        key={opt.value}
                                        type="button"
                                        onClick={() => {
                                            setOffenseType(opt.value as keyof typeof BAIL_CONSTANTS_2026.bailByOffense);
                                            if (!bailAmount) {
                                                setBailAmount(opt.avg.toLocaleString("en-US"));
                                            }
                                        }}
                                        className={`py-3 px-3 rounded-lg border font-medium transition text-left ${offenseType === opt.value
                                            ? "bg-amber-600 text-white border-amber-600"
                                            : "bg-slate-700 text-slate-300 border-slate-600 hover:border-amber-500"
                                            }`}
                                    >
                                        <div className="text-sm font-semibold">{opt.label}</div>
                                        <div className="text-xs mt-1 opacity-75">Avg: {formatCurrency(opt.avg)}</div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* State Selection */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                State
                            </label>
                            <select
                                value={state}
                                onChange={(e) => setState(e.target.value as keyof typeof STATE_BAIL)}
                                className="w-full py-3 px-4 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-amber-500"
                            >
                                {stateOptions.map((opt) => (
                                    <option key={opt.value} value={opt.value}>
                                        {opt.label}
                                    </option>
                                ))}
                            </select>
                            <p className="text-xs text-slate-500 mt-1">
                                Premium Rate: {(STATE_BAIL[state].premiumRate * 100)}%
                            </p>
                        </div>

                        {/* Bail Amount */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Bail Amount
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                                <input
                                    type="text"
                                    value={bailAmount}
                                    onChange={handleInputChange}
                                    placeholder="50,000"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-amber-500"
                                />
                            </div>
                            <p className="text-xs text-slate-500 mt-1">
                                Enter the bail amount set by the court
                            </p>
                        </div>

                        {/* Use Bondsman Toggle */}
                        <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                            <div>
                                <p className="text-sm font-medium text-white">Using a Bail Bondsman?</p>
                                <p className="text-xs text-slate-400">Pay 10% premium vs. full cash bail</p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setUsesBondsman(!usesBondsman)}
                                className={`w-14 h-8 rounded-full transition-colors ${usesBondsman ? "bg-amber-600" : "bg-slate-600"
                                    }`}
                            >
                                <div className={`w-6 h-6 bg-white rounded-full transition-transform mx-1 ${usesBondsman ? "translate-x-6" : "translate-x-0"
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
                        Calculate Bail Cost
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        {/* Summary Header */}
                        <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-6">
                            <p className="text-sm text-amber-100 mb-1">
                                {usesBondsman ? "Bail Bond Premium (10%)" : "Full Cash Bail"}
                            </p>
                            <p className="text-4xl font-bold">{formatCurrency(result.totalOutOfPocket)}</p>
                            <p className="text-sm text-amber-100 mt-2">
                                {usesBondsman ? "Non-refundable premium" : "Refundable when case ends"}
                            </p>
                        </div>

                        {/* Breakdown */}
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                                Cost Breakdown
                            </h3>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Bail Amount</span>
                                    <span className="font-medium text-white">{formatCurrency(result.bailAmount)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Offense Type</span>
                                    <span className="font-medium text-white">{result.offenseType}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">State</span>
                                    <span className="font-medium text-white">{result.state}</span>
                                </div>
                                {usesBondsman && (
                                    <>
                                        <div className="flex justify-between py-2 border-b border-slate-700">
                                            <span className="text-slate-300">Bond Premium ({(result.premiumRate * 100)}%)</span>
                                            <span className="font-medium text-amber-400">{formatCurrency(result.bondPremium)}</span>
                                        </div>
                                        {result.estimatedCollateral > 0 && (
                                            <div className="flex justify-between py-2 border-b border-slate-700">
                                                <span className="text-slate-300">Est. Collateral Required</span>
                                                <span className="font-medium text-yellow-400">{formatCurrency(result.estimatedCollateral)}</span>
                                            </div>
                                        )}
                                    </>
                                )}
                                <div className="flex justify-between pt-4">
                                    <span className="text-white font-bold">Out of Pocket</span>
                                    <span className="font-bold text-amber-400">{formatCurrency(result.totalOutOfPocket)}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-400">Refundable</span>
                                    <span className="text-green-400">{formatCurrency(result.refundable)}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-400">Non-Refundable</span>
                                    <span className="text-red-400">{formatCurrency(result.nonRefundable)}</span>
                                </div>
                            </div>
                        </div>

                        {/* Info */}
                        <div className="p-4 bg-blue-900/30 border-t border-blue-700/50">
                            <div className="flex items-start gap-2 text-sm">
                                <Info className="w-4 h-4 text-blue-400 mt-0.5" />
                                <p className="text-blue-200">
                                    {usesBondsman
                                        ? "The 10% premium is the bondsman's fee and is non-refundable, even if charges are dropped."
                                        : "Full cash bail is returned (minus court fees) when the case concludes, regardless of outcome."}
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
                        Bail Bond FAQ
                    </h2>

                    <div className="space-y-4 text-sm">
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                How much does a bail bond cost?
                            </h3>
                            <p className="text-slate-400">
                                Bail bonds typically cost 10% of the total bail amount. This premium is non-refundable and is the bondsman&apos;s fee for posting bail on your behalf.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                Do I get my bail money back?
                            </h3>
                            <p className="text-slate-400">
                                If you pay cash bail directly to the court, you get it back when the case ends. If you use a bondsman, the 10% premium is never refunded.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What is collateral for bail?
                            </h3>
                            <p className="text-slate-400">
                                For high bail amounts, bondsmen may require collateral (property, car titles, etc.) to secure the bond. This is returned if the defendant makes all court appearances.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What happens if I miss court?
                            </h3>
                            <p className="text-slate-400">
                                Missing court results in a bench warrant and forfeiture of bail. The bondsman may hire a bounty hunter to find you, and you&apos;ll owe the full bail amount.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    This calculator provides estimates. Actual bail amounts are set by judges.
                    Consult a bail bondsman or attorney for your specific situation.
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
                                name: "How much does a bail bond cost?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Bail bonds typically cost 10% of the total bail amount. This premium is non-refundable.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Do I get my bail money back?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "If you pay cash bail directly, you get it back when the case ends. Bondsman premiums are never refunded.",
                                },
                            },
                        ],
                    }),
                }}
            />
        </>
    );
}
