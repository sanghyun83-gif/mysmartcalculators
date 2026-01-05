"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Scale, FileText, CheckCircle, AlertTriangle } from "lucide-react";
import { SITE, BMI_2026 } from "@/lib/calculators/bmi";

export default function HealthGuidePage() {
    return (
        <div className="min-h-screen bg-slate-900">
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/bmi" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-purple-500" />
                        <span className="text-lg font-bold text-white">BMI Health Guide</span>
                    </div>
                    <span className="ml-auto text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">
                        {SITE.year}
                    </span>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 py-8">
                {/* Page Header */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        Understanding Your BMI
                    </h1>
                    <p className="text-slate-400">
                        What your Body Mass Index means for your health
                    </p>
                </div>

                {/* BMI Categories Table */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">
                        BMI Categories (WHO Standard)
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-slate-700">
                                    <th className="py-3 text-left text-slate-400">Category</th>
                                    <th className="py-3 text-left text-slate-400">BMI Range</th>
                                    <th className="py-3 text-left text-slate-400">Health Risk</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-slate-700/50">
                                    <td className="py-3 text-blue-400">Underweight</td>
                                    <td className="py-3 text-white">&lt; 18.5</td>
                                    <td className="py-3 text-yellow-400">Moderate</td>
                                </tr>
                                <tr className="border-b border-slate-700/50">
                                    <td className="py-3 text-green-400">Normal</td>
                                    <td className="py-3 text-white">18.5 - 24.9</td>
                                    <td className="py-3 text-green-400">Low</td>
                                </tr>
                                <tr className="border-b border-slate-700/50">
                                    <td className="py-3 text-yellow-400">Overweight</td>
                                    <td className="py-3 text-white">25 - 29.9</td>
                                    <td className="py-3 text-yellow-400">Increased</td>
                                </tr>
                                <tr className="border-b border-slate-700/50">
                                    <td className="py-3 text-orange-400">Obese Class I</td>
                                    <td className="py-3 text-white">30 - 34.9</td>
                                    <td className="py-3 text-orange-400">High</td>
                                </tr>
                                <tr className="border-b border-slate-700/50">
                                    <td className="py-3 text-red-400">Obese Class II</td>
                                    <td className="py-3 text-white">35 - 39.9</td>
                                    <td className="py-3 text-red-400">Very High</td>
                                </tr>
                                <tr>
                                    <td className="py-3 text-red-500">Obese Class III</td>
                                    <td className="py-3 text-white">≥ 40</td>
                                    <td className="py-3 text-red-500">Extremely High</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Healthy BMI Benefits */}
                <div className="bg-green-900/20 border border-green-500/50 rounded-xl p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        Benefits of Healthy BMI (18.5 - 24.9)
                    </h2>
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                        {[
                            "Lower risk of heart disease",
                            "Lower risk of type 2 diabetes",
                            "Better energy levels",
                            "Reduced joint stress",
                            "Better sleep quality",
                            "Improved mental health",
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-400" />
                                <span className="text-green-200">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Health Risks */}
                <div className="bg-red-900/20 border border-red-500/50 rounded-xl p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-red-500" />
                        Health Risks of High BMI
                    </h2>
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                        {[
                            "Type 2 diabetes",
                            "High blood pressure",
                            "Heart disease & stroke",
                            "Sleep apnea",
                            "Certain cancers",
                            "Osteoarthritis",
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4 text-red-400" />
                                <span className="text-red-200">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* BMI Limitations */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4">
                        BMI Limitations
                    </h2>
                    <p className="text-slate-400 text-sm mb-4">
                        BMI is a useful screening tool but has limitations:
                    </p>
                    <ul className="space-y-2 text-sm text-slate-300">
                        <li>• <strong>Athletes:</strong> Muscle weighs more than fat, may show higher BMI</li>
                        <li>• <strong>Elderly:</strong> May underestimate body fat</li>
                        <li>• <strong>Children:</strong> Use age-specific BMI percentiles</li>
                        <li>• <strong>Ethnicity:</strong> Health risks may vary by ethnicity</li>
                        <li>• <strong>Body composition:</strong> Doesn&apos;t measure fat vs muscle</li>
                    </ul>
                </div>

                {/* Ad Placeholder */}
                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center">
                    <p className="text-sm text-slate-500">Advertisement</p>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link
                        href="/bmi/calculator"
                        className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Calculate Your BMI
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Citation */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    {BMI_2026.citation}
                </p>
            </main>
        </div>
    );
}
