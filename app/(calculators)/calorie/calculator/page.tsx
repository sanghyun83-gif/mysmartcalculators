"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Flame, Calculator, Info } from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import {
    SITE,
    CALORIE_2026,
    calculateCalories,
    formatNumber,
    CalorieResult
} from "@/lib/calculators/calorie";

export default function CalorieCalculatorPage() {
    const [age, setAge] = useState(30);
    const [gender, setGender] = useState("male");
    const [heightFeet, setHeightFeet] = useState(5);
    const [heightInches, setHeightInches] = useState(9);
    const [weight, setWeight] = useState("170");
    const [activity, setActivity] = useState(1.375);
    const [goal, setGoal] = useState(0);
    const [result, setResult] = useState<CalorieResult | null>(null);

    const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/[^0-9]/g, "");
        setWeight(raw);
    };

    const handleCalculate = () => {
        const weightNum = parseInt(weight) || 0;
        if (weightNum > 0 && age > 0) {
            setResult(calculateCalories(age, gender, heightFeet, heightInches, weightNum, activity, goal));
        }
    };

    return (
        <>
            {/* Header */}

            <main className="max-w-2xl mx-auto px-4 py-8">
                {/* Calculator Card */}
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">
                        Calculate Your Daily Calories
                    </h1>
                    <p className="text-sm text-slate-400 mb-6">
                        Enter your details to get personalized calorie needs
                    </p>

                    {/* Inputs */}
                    <div className="space-y-5 mb-6">
                        {/* Age & Gender */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Age</label>
                                <input
                                    type="number"
                                    value={age}
                                    onChange={(e) => setAge(parseInt(e.target.value) || 0)}
                                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Gender</label>
                                <div className="grid grid-cols-2 gap-2">
                                    <button
                                        type="button"
                                        onClick={() => setGender("male")}
                                        className={`py-3 rounded-lg border transition ${gender === "male" ? "bg-purple-600 text-white border-purple-600" : "bg-slate-700 text-slate-300 border-slate-600"}`}
                                    >
                                        Male
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setGender("female")}
                                        className={`py-3 rounded-lg border transition ${gender === "female" ? "bg-purple-600 text-white border-purple-600" : "bg-slate-700 text-slate-300 border-slate-600"}`}
                                    >
                                        Female
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Height */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Height</label>
                            <div className="grid grid-cols-2 gap-4">
                                <select
                                    value={heightFeet}
                                    onChange={(e) => setHeightFeet(parseInt(e.target.value))}
                                    className="py-3 px-4 bg-slate-700 border border-slate-600 rounded-lg text-white"
                                >
                                    {[4, 5, 6, 7].map((ft) => (
                                        <option key={ft} value={ft}>{ft} ft</option>
                                    ))}
                                </select>
                                <select
                                    value={heightInches}
                                    onChange={(e) => setHeightInches(parseInt(e.target.value))}
                                    className="py-3 px-4 bg-slate-700 border border-slate-600 rounded-lg text-white"
                                >
                                    {Array.from({ length: 12 }, (_, i) => (
                                        <option key={i} value={i}>{i} in</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Weight */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Weight (lbs)</label>
                            <input
                                type="text"
                                value={weight}
                                onChange={handleWeightChange}
                                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white"
                            />
                        </div>

                        {/* Activity Level */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Activity Level</label>
                            <select
                                value={activity}
                                onChange={(e) => setActivity(parseFloat(e.target.value))}
                                className="w-full py-3 px-4 bg-slate-700 border border-slate-600 rounded-lg text-white"
                            >
                                {CALORIE_2026.activityLevels.map((level) => (
                                    <option key={level.multiplier} value={level.multiplier}>
                                        {level.name} - {level.description}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Goal */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Goal</label>
                            <div className="grid grid-cols-3 gap-2">
                                <button
                                    type="button"
                                    onClick={() => setGoal(-500)}
                                    className={`py-3 rounded-lg border transition text-sm ${goal === -500 ? "bg-purple-600 text-white border-purple-600" : "bg-slate-700 text-slate-300 border-slate-600"}`}
                                >
                                    Lose 1lb/wk
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setGoal(0)}
                                    className={`py-3 rounded-lg border transition text-sm ${goal === 0 ? "bg-purple-600 text-white border-purple-600" : "bg-slate-700 text-slate-300 border-slate-600"}`}
                                >
                                    Maintain
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setGoal(500)}
                                    className={`py-3 rounded-lg border transition text-sm ${goal === 500 ? "bg-purple-600 text-white border-purple-600" : "bg-slate-700 text-slate-300 border-slate-600"}`}
                                >
                                    Gain 1lb/wk
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Calculate Button */}
                    <button
                        onClick={handleCalculate}
                        className="w-full py-4 bg-purple-600 text-white rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate Calories
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        {/* Summary Header */}
                        <div className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white p-6 text-center">
                            <p className="text-sm text-purple-100 mb-1">Your Daily Calories</p>
                            <p className="text-5xl font-bold">{formatNumber(result.goalCalories)}</p>
                            <p className="text-sm text-purple-100 mt-2">
                                {result.activityLevel}  {result.goal}
                            </p>
                        </div>

                        {/* Details */}
                        <div className="p-6">
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">BMR (Base Metabolic Rate)</span>
                                    <span className="font-medium text-white">{formatNumber(result.bmr)} cal</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">TDEE (Maintenance)</span>
                                    <span className="font-medium text-white">{formatNumber(result.tdee)} cal</span>
                                </div>
                            </div>

                            {/* Macros */}
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mt-6 mb-4">
                                Recommended Macros
                            </h3>
                            <div className="grid grid-cols-3 gap-3">
                                <div className="text-center p-3 bg-slate-700/50 rounded-lg">
                                    <p className="text-xs text-slate-400">Protein</p>
                                    <p className="text-xl font-bold text-purple-400">{result.protein}g</p>
                                </div>
                                <div className="text-center p-3 bg-slate-700/50 rounded-lg">
                                    <p className="text-xs text-slate-400">Carbs</p>
                                    <p className="text-xl font-bold text-fuchsia-400">{result.carbs}g</p>
                                </div>
                                <div className="text-center p-3 bg-slate-700/50 rounded-lg">
                                    <p className="text-xs text-slate-400">Fat</p>
                                    <p className="text-xl font-bold text-pink-400">{result.fat}g</p>
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
                        <Info className="w-5 h-5 text-purple-500" />
                        Calorie FAQ
                    </h2>

                    <div className="space-y-4 text-sm">
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What is BMR vs TDEE?
                            </h3>
                            <p className="text-slate-400">
                                BMR is calories burned at rest. TDEE includes activity and is your
                                total daily energy expenditure (maintenance calories).
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                How accurate is this calculator?
                            </h3>
                            <p className="text-slate-400">
                                This uses the Mifflin-St Jeor equation, considered most accurate.
                                Individual results may vary by 10-15%.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Citation */}
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
                                name: "What is BMR vs TDEE?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "BMR is calories burned at rest. TDEE includes activity and is your total daily energy expenditure.",
                                },
                            },
                        ],
                    }),
                }}
            />
        </>
    );
}
