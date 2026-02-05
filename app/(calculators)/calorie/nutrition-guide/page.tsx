"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Flame, FileText, CheckCircle } from "lucide-react";
import { SITE, CALORIE_2026, formatNumber } from "@/lib/calculators/calorie";

export default function NutritionGuidePage() {
    return (
        <>
            {/* Header */}

            <main className="max-w-4xl mx-auto px-4 py-8">
                {/* Page Header */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        Understanding Calories & Nutrition
                    </h1>
                    <p className="text-slate-400">
                        Learn about daily calories, macros, and healthy eating
                    </p>
                </div>

                {/* Daily Recommendations */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">
                        USDA Daily Recommendations
                    </h2>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-purple-900/30 border border-purple-500/50 rounded-lg p-4 text-center">
                            <p className="text-sm text-purple-300">Men (19-30, Active)</p>
                            <p className="text-3xl font-bold text-purple-400">{formatNumber(CALORIE_2026.statistics.recommendedMen)}</p>
                            <p className="text-xs text-purple-300">calories/day</p>
                        </div>
                        <div className="bg-fuchsia-900/30 border border-fuchsia-500/50 rounded-lg p-4 text-center">
                            <p className="text-sm text-fuchsia-300">Women (19-30, Active)</p>
                            <p className="text-3xl font-bold text-fuchsia-400">{formatNumber(CALORIE_2026.statistics.recommendedWomen)}</p>
                            <p className="text-xs text-fuchsia-300">calories/day</p>
                        </div>
                    </div>
                </div>

                {/* Activity Levels Explained */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Activity Level Multipliers
                    </h2>

                    <div className="space-y-3">
                        {CALORIE_2026.activityLevels.map((level) => (
                            <div key={level.name} className="flex items-center justify-between py-2 border-b border-slate-700 last:border-0">
                                <div>
                                    <p className="text-white font-medium">{level.name}</p>
                                    <p className="text-xs text-slate-400">{level.description}</p>
                                </div>
                                <span className="text-purple-400 font-bold">×{level.multiplier}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Macros */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Balanced Macro Ratios
                    </h2>

                    <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="text-center p-4 bg-purple-900/30 rounded-lg">
                            <p className="text-2xl font-bold text-purple-400">{CALORIE_2026.macroRatios.protein * 100}%</p>
                            <p className="text-sm text-purple-300">Protein</p>
                            <p className="text-xs text-slate-400 mt-1">4 cal/gram</p>
                        </div>
                        <div className="text-center p-4 bg-fuchsia-900/30 rounded-lg">
                            <p className="text-2xl font-bold text-fuchsia-400">{CALORIE_2026.macroRatios.carbs * 100}%</p>
                            <p className="text-sm text-fuchsia-300">Carbs</p>
                            <p className="text-xs text-slate-400 mt-1">4 cal/gram</p>
                        </div>
                        <div className="text-center p-4 bg-pink-900/30 rounded-lg">
                            <p className="text-2xl font-bold text-pink-400">{CALORIE_2026.macroRatios.fat * 100}%</p>
                            <p className="text-sm text-pink-300">Fat</p>
                            <p className="text-xs text-slate-400 mt-1">9 cal/gram</p>
                        </div>
                    </div>
                </div>

                {/* Tips */}
                <div className="bg-green-900/20 border border-green-500/50 rounded-xl p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        Healthy Eating Tips
                    </h2>
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                        {[
                            "Eat more whole foods, less processed",
                            "Stay hydrated - drink 8+ glasses water",
                            "Include protein in every meal",
                            "Choose complex carbs over simple",
                            "Don't skip breakfast",
                            "Practice portion control",
                        ].map((tip, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-400" />
                                <span className="text-green-200">{tip}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Ad Placeholder */}
                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center">
                    <p className="text-sm text-slate-500">Advertisement</p>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link
                        href="/calorie/calculator"
                        className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Calculate Your Calories
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Citation */}
            </main>
        </>
    );
}
