"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Users, Calculator, Info, Calendar } from "lucide-react";
import { SITE } from "@/lib/calculators/child-support";

interface CustodyResult {
    overnights: number;
    percentage: number;
    classification: string;
    supportImpact: string;
}

function calculateCustody(overnightsPerYear: number): CustodyResult {
    const percentage = Math.round((overnightsPerYear / 365) * 100);

    let classification = "";
    let supportImpact = "";

    if (percentage >= 45) {
        classification = "Joint/Shared Custody";
        supportImpact = "Significant reduction or offset of support";
    } else if (percentage >= 30) {
        classification = "Extended Parenting Time";
        supportImpact = "Moderate reduction in support";
    } else if (percentage >= 20) {
        classification = "Standard Parenting Time";
        supportImpact = "Minor reduction in support";
    } else if (percentage >= 10) {
        classification = "Limited Parenting Time";
        supportImpact = "Little to no reduction";
    } else {
        classification = "Minimal Contact";
        supportImpact = "No reduction in support";
    }

    return {
        overnights: overnightsPerYear,
        percentage,
        classification,
        supportImpact,
    };
}

export default function CustodyCalculatorPage() {
    const [schedule, setSchedule] = useState("");
    const [customOvernights, setCustomOvernights] = useState("");
    const [result, setResult] = useState<CustodyResult | null>(null);

    const presetSchedules = [
        { id: "eow", name: "Every Other Weekend", overnights: 52, desc: "2 nights × 26 weekends" },
        { id: "eow_wed", name: "EOW + Wednesday", overnights: 78, desc: "EOW + 1 weeknight" },
        { id: "5-2-2-5", name: "5-2-2-5 Schedule", overnights: 182, desc: "Alternating pattern" },
        { id: "week_on_off", name: "Week On/Week Off", overnights: 182, desc: "50/50 weekly" },
        { id: "2-2-3", name: "2-2-3 Schedule", overnights: 182, desc: "50/50 rotating" },
        { id: "3-4-4-3", name: "3-4-4-3 Schedule", overnights: 182, desc: "50/50 bi-weekly" },
        { id: "summer", name: "EOW + Extended Summer", overnights: 100, desc: "EOW + 6 weeks summer" },
        { id: "custom", name: "Custom", overnights: 0, desc: "Enter your own" },
    ];

    const handleScheduleSelect = (id: string, overnights: number) => {
        setSchedule(id);
        if (id !== "custom") {
            setResult(calculateCustody(overnights));
            setCustomOvernights("");
        } else {
            setResult(null);
        }
    };

    const handleCustomCalculate = () => {
        const nights = parseInt(customOvernights) || 0;
        setResult(calculateCustody(nights));
    };

    return (
        <>
            {/* Header */}

            <main className="max-w-2xl mx-auto px-4 py-8">
                {/* Calculator Card */}
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">
                        Custody Percentage Calculator
                    </h1>
                    <p className="text-sm text-slate-400 mb-6">
                        Calculate your parenting time percentage for child support calculations
                    </p>

                    {/* Schedule Selection */}
                    <div className="space-y-3 mb-6">
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                            Select Your Custody Schedule
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                            {presetSchedules.map((preset) => (
                                <button
                                    key={preset.id}
                                    onClick={() => handleScheduleSelect(preset.id, preset.overnights)}
                                    className={`p-3 rounded-lg border text-left transition-all ${schedule === preset.id
                                        ? "bg-purple-600 border-purple-500 text-white"
                                        : "bg-slate-700/50 border-slate-600 text-slate-300 hover:border-purple-500"
                                        }`}
                                >
                                    <div className="text-sm font-medium">{preset.name}</div>
                                    <div className="text-xs opacity-75 mt-1">{preset.desc}</div>
                                    {preset.overnights > 0 && (
                                        <div className="text-xs mt-1 text-purple-300">
                                            {preset.overnights} nights/year
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Custom Input */}
                    {schedule === "custom" && (
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Enter Overnights Per Year
                            </label>
                            <div className="flex gap-3">
                                <input
                                    type="number"
                                    value={customOvernights}
                                    onChange={(e) => setCustomOvernights(e.target.value)}
                                    placeholder="0-365"
                                    min="0"
                                    max="365"
                                    className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500"
                                />
                                <button
                                    onClick={handleCustomCalculate}
                                    className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors"
                                >
                                    Calculate
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        {/* Summary Header */}
                        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6">
                            <p className="text-sm text-purple-100 mb-1">Your Custody Percentage</p>
                            <p className="text-5xl font-bold">{result.percentage}%</p>
                            <p className="text-sm text-purple-100 mt-2">
                                {result.overnights} overnights per year
                            </p>
                        </div>

                        {/* Details */}
                        <div className="p-6">
                            <div className="space-y-4">
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Classification</span>
                                    <span className="font-medium text-white">{result.classification}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Support Impact</span>
                                    <span className="font-medium text-purple-400">{result.supportImpact}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Days per Month</span>
                                    <span className="font-medium text-white">
                                        ~{Math.round(result.overnights / 12)} nights
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Visual Bar */}
                        <div className="p-6 pt-0">
                            <div className="h-4 bg-slate-700 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-500"
                                    style={{ width: `${result.percentage}%` }}
                                />
                            </div>
                            <div className="flex justify-between text-xs text-slate-500 mt-2">
                                <span>0%</span>
                                <span>25%</span>
                                <span>50%</span>
                            </div>
                        </div>
                    </div>
                )}

                {/* Ad Placeholder */}
                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center">
                    <p className="text-sm text-slate-500">Advertisement</p>
                </div>

                {/* Info Section */}
                <section className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Info className="w-5 h-5 text-purple-500" />
                        How Custody Affects Support
                    </h2>

                    <div className="space-y-4 text-sm">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-slate-700/50 rounded-lg p-4">
                                <p className="font-semibold text-purple-400">0-20%</p>
                                <p className="text-slate-400">Standard calculation applies</p>
                            </div>
                            <div className="bg-slate-700/50 rounded-lg p-4">
                                <p className="font-semibold text-purple-400">20-30%</p>
                                <p className="text-slate-400">Minor adjustment possible</p>
                            </div>
                            <div className="bg-slate-700/50 rounded-lg p-4">
                                <p className="font-semibold text-purple-400">30-40%</p>
                                <p className="text-slate-400">Moderate reduction</p>
                            </div>
                            <div className="bg-slate-700/50 rounded-lg p-4">
                                <p className="font-semibold text-purple-400">40-50%</p>
                                <p className="text-slate-400">Significant reduction</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <div className="text-center">
                    <Link
                        href="/child-support/child-support"
                        className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate Full Support Amount
                    </Link>
                </div>

                {/* Disclaimer */}
            </main>
        </>
    );
}
