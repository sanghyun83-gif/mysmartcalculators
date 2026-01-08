"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Scale, Calculator, Info, CheckCircle, AlertTriangle } from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import {
    SITE,
    BMI_2026,
    calculateBMI,
    BMIResult
} from "@/lib/calculators/bmi";

export default function BMICalculatorPage() {
    const [heightFeet, setHeightFeet] = useState(5);
    const [heightInches, setHeightInches] = useState(7);
    const [weight, setWeight] = useState("160");
    const [result, setResult] = useState<BMIResult | null>(null);

    const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/[^0-9]/g, "");
        setWeight(raw);
    };

    const handleCalculate = () => {
        const weightNum = parseInt(weight) || 0;
        if (weightNum > 0 && heightFeet > 0) {
            setResult(calculateBMI(heightFeet, heightInches, weightNum));
        }
    };

    return (
        <div className="min-h-screen bg-slate-900">
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/bmi" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <Scale className="w-5 h-5 text-purple-500" />
                        <span className="text-lg font-bold text-white">BMI Calculator</span>
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
                        Calculate Your BMI
                    </h1>
                    <p className="text-sm text-slate-400 mb-6">
                        Enter your height and weight to get your Body Mass Index
                    </p>

                    {/* Inputs */}
                    <div className="space-y-5 mb-6">
                        {/* Height */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Your Height
                            </label>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs text-slate-500 block mb-1">Feet</label>
                                    <select
                                        value={heightFeet}
                                        onChange={(e) => setHeightFeet(parseInt(e.target.value))}
                                        className="w-full py-3 px-4 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500"
                                    >
                                        {[4, 5, 6, 7].map((ft) => (
                                            <option key={ft} value={ft}>{ft} ft</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="text-xs text-slate-500 block mb-1">Inches</label>
                                    <select
                                        value={heightInches}
                                        onChange={(e) => setHeightInches(parseInt(e.target.value))}
                                        className="w-full py-3 px-4 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500"
                                    >
                                        {Array.from({ length: 12 }, (_, i) => (
                                            <option key={i} value={i}>{i} in</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Weight */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Your Weight (lbs)
                            </label>
                            <input
                                type="text"
                                value={weight}
                                onChange={handleWeightChange}
                                placeholder="160"
                                className="w-full px-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500"
                            />
                        </div>

                        {/* Quick Weights */}
                        <div>
                            <p className="text-sm text-slate-400 mb-2">Quick set:</p>
                            <div className="grid grid-cols-4 gap-2">
                                {[120, 150, 180, 220].map((w) => (
                                    <button
                                        key={w}
                                        type="button"
                                        onClick={() => setWeight(w.toString())}
                                        className="py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg text-sm transition"
                                    >
                                        {w} lbs
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Calculate Button */}
                    <button
                        onClick={handleCalculate}
                        className="w-full py-4 bg-purple-600 text-white rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate BMI
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        {/* Summary Header */}
                        <div className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white p-6 text-center">
                            <p className="text-sm text-purple-100 mb-1">Your BMI</p>
                            <p className="text-5xl font-bold">{result.bmi}</p>
                            <p className={`text-lg font-semibold mt-2 ${result.categoryColor}`}>
                                {result.category}
                            </p>
                        </div>

                        {/* Details */}
                        <div className="p-6">
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Your Height</span>
                                    <span className="font-medium text-white">{heightFeet}&apos;{heightInches}&quot;</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Your Weight</span>
                                    <span className="font-medium text-white">{weight} lbs</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Healthy Weight Range</span>
                                    <span className="font-medium text-green-400">
                                        {result.healthyWeightRange.min} - {result.healthyWeightRange.max} lbs
                                    </span>
                                </div>
                                {result.weightToHealthy !== 0 && (
                                    <div className="flex justify-between py-2">
                                        <span className="text-slate-300">
                                            {result.weightToHealthy > 0 ? "To Lose" : "To Gain"}
                                        </span>
                                        <span className={`font-medium ${result.weightToHealthy > 0 ? "text-yellow-400" : "text-blue-400"}`}>
                                            {Math.abs(result.weightToHealthy)} lbs
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Status */}
                        <div className={`p-4 border-t ${result.isHealthy ? 'bg-green-900/20 border-green-700/50' : 'bg-yellow-900/20 border-yellow-700/50'}`}>
                            <div className="flex items-start gap-2 text-sm">
                                {result.isHealthy ? (
                                    <>
                                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                                        <p className="text-green-200">
                                            Your BMI is in the healthy range!
                                        </p>
                                    </>
                                ) : (
                                    <>
                                        <AlertTriangle className="w-4 h-4 text-yellow-400 mt-0.5" />
                                        <p className="text-yellow-200">
                                            Consider consulting a healthcare provider.
                                        </p>
                                    </>
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
                        <Info className="w-5 h-5 text-purple-500" />
                        BMI FAQ
                    </h2>

                    <div className="space-y-4 text-sm">
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What is a healthy BMI?
                            </h3>
                            <p className="text-slate-400">
                                A healthy BMI is between 18.5 and 24.9. This range is associated
                                with the lowest health risks according to WHO guidelines.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                Is BMI accurate for everyone?
                            </h3>
                            <p className="text-slate-400">
                                BMI is a screening tool, not a diagnostic tool. It may overestimate
                                body fat in athletes and underestimate it in older adults.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Citation */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    {BMI_2026.citation}. This is an estimate only.
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
                                name: "What is a healthy BMI?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "A healthy BMI is between 18.5 and 24.9 according to WHO guidelines.",
                                },
                            },
                        ],
                    }),
                }}
            />
        </div>
    );
}
