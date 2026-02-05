"use client";

import { useState } from "react";
import Link from "next/link";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import {
    SITE, LUNG_DISEASE_TYPES, SEVERITY_LEVELS, EXPOSURE_SOURCES, FAQS,
    calculateLungDiseaseSettlement, formatCurrency, parseFormattedNumber, LUNG_DISEASE_2026
} from "@/lib/calculators/lung-disease";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Calculator, Stethoscope, ChevronDown, ChevronUp, ArrowLeft, AlertTriangle } from "lucide-react";

export default function CalculatorPage() {
    const [diseaseType, setDiseaseType] = useState("silicosis");
    const [severity, setSeverity] = useState("moderate");
    const [exposureSource, setExposureSource] = useState("workplace");
    const [medicalExpenses, setMedicalExpenses] = useState("75000");
    const [lostWages, setLostWages] = useState("120000");
    const [yearsExposed, setYearsExposed] = useState("15");
    const [age, setAge] = useState("55");
    const [result, setResult] = useState<ReturnType<typeof calculateLungDiseaseSettlement> | null>(null);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const handleCalculate = () => {
        const calculated = calculateLungDiseaseSettlement(
            diseaseType,
            severity,
            exposureSource,
            parseFormattedNumber(medicalExpenses),
            parseFormattedNumber(lostWages),
            parseInt(yearsExposed) || 10,
            parseInt(age) || 55
        );
        setResult(calculated);
    };

    return (
        <>

            {/* Breadcrumb */}
            <div className="max-w-6xl mx-auto px-4 py-3">
                <Link href="/lung-disease" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-purple-400 transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Lung Disease Calculator
                </Link>
            </div>

            {/* Calculator Section */}
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-2 mb-4">
                        <Calculator className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-purple-300">Free {SITE.year} Calculator</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
                        Lung Disease Settlement Calculator
                    </h1>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Estimate your occupational lung disease compensation based on disease type, severity, and expenses.
                    </p>
                </div>

                {/* Calculator Form */}
                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 md:p-8">
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Disease Type */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Disease Type</label>
                            <select
                                value={diseaseType}
                                onChange={(e) => setDiseaseType(e.target.value)}
                                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            >
                                {LUNG_DISEASE_TYPES.map((type) => (
                                    <option key={type.id} value={type.id}>{type.name}</option>
                                ))}
                            </select>
                        </div>

                        {/* Severity */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Severity Level</label>
                            <select
                                value={severity}
                                onChange={(e) => setSeverity(e.target.value)}
                                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            >
                                {SEVERITY_LEVELS.map((level) => (
                                    <option key={level.id} value={level.id}>{level.name} - {level.description}</option>
                                ))}
                            </select>
                        </div>

                        {/* Exposure Source */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Exposure Source</label>
                            <select
                                value={exposureSource}
                                onChange={(e) => setExposureSource(e.target.value)}
                                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            >
                                {EXPOSURE_SOURCES.map((source) => (
                                    <option key={source.id} value={source.id}>{source.name}</option>
                                ))}
                            </select>
                        </div>

                        {/* Years Exposed */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Years of Exposure</label>
                            <input
                                type="number"
                                value={yearsExposed}
                                onChange={(e) => setYearsExposed(e.target.value)}
                                placeholder="15"
                                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                        </div>

                        {/* Medical Expenses */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Medical Expenses ($)</label>
                            <input
                                type="text"
                                value={medicalExpenses}
                                onChange={(e) => setMedicalExpenses(e.target.value.replace(/[^0-9]/g, ''))}
                                placeholder="75000"
                                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                        </div>

                        {/* Lost Wages */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Lost Wages ($)</label>
                            <input
                                type="text"
                                value={lostWages}
                                onChange={(e) => setLostWages(e.target.value.replace(/[^0-9]/g, ''))}
                                placeholder="120000"
                                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                        </div>

                        {/* Age */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-slate-300 mb-2">Your Age</label>
                            <input
                                type="number"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                placeholder="55"
                                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                        </div>
                    </div>

                    <button
                        onClick={handleCalculate}
                        className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate Settlement Estimate
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-8 bg-gradient-to-br from-purple-900/30 to-indigo-900/30 border border-purple-500/30 rounded-2xl p-6 md:p-8">
                        <h2 className="text-xl font-bold text-white mb-6 text-center">
                            Estimated Settlement Range
                        </h2>

                        <div className="text-center mb-6">
                            <p className="text-4xl md:text-5xl font-bold text-purple-400">
                                {formatCurrency(result.totalLow)} - {formatCurrency(result.totalHigh)}
                            </p>
                            <p className="text-slate-400 mt-2">Based on {result.diseaseType} - {result.severity}</p>
                        </div>

                        {/* Breakdown Table */}
                        <div className="bg-slate-800/50 rounded-xl p-4 mt-6">
                            <h3 className="text-lg font-semibold text-white mb-4">Settlement Breakdown</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center py-2 border-b border-slate-700">
                                    <span className="text-slate-400">Medical Expenses</span>
                                    <span className="text-white font-medium">{formatCurrency(result.medicalExpenses)}</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-slate-700">
                                    <span className="text-slate-400">Lost Wages</span>
                                    <span className="text-white font-medium">{formatCurrency(result.lostWages)}</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-slate-700">
                                    <span className="text-slate-400">Future Care Costs</span>
                                    <span className="text-white font-medium">{formatCurrency(result.futureCareCost)}</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-slate-700">
                                    <span className="text-slate-400">Pain & Suffering</span>
                                    <span className="text-white font-medium">{formatCurrency(result.painSufferingLow)} - {formatCurrency(result.painSufferingHigh)}</span>
                                </div>
                                <div className="flex justify-between items-center py-2 bg-purple-500/10 rounded-lg px-3">
                                    <span className="text-purple-300 font-semibold">With Attorney (+30%)</span>
                                    <span className="text-purple-400 font-bold">{formatCurrency(result.withAttorneyLow)} - {formatCurrency(result.withAttorneyHigh)}</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg">
                            <div className="flex items-start gap-3">
                                <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                                <p className="text-sm text-amber-200">
                                    This is an estimate only. Actual settlements vary based on specific case facts, jurisdiction, and legal representation.
                                    Consult an attorney for accurate case evaluation.
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </section>

            {/* FAQs */}
            <section className="max-w-4xl mx-auto px-4 py-16">
                <h2 className="text-2xl font-bold text-white mb-8 text-center">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                    {FAQS.map((faq, index) => (
                        <div key={index} className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
                            <button
                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                className="w-full flex items-center justify-between p-4 text-left"
                            >
                                <span className="text-white font-medium pr-4">{faq.question}</span>
                                {openFaq === index ? (
                                    <ChevronUp className="w-5 h-5 text-purple-400 flex-shrink-0" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                                )}
                            </button>
                            {openFaq === index && (
                                <div className="px-4 pb-4">
                                    <p className="text-slate-400">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Related Calculators */}
            <section className="max-w-6xl mx-auto px-4 py-8">
                <div className="flex justify-center">
                    <div className="w-full max-w-xs">
                        <RelatedCalculators currentCalc="lung-disease" count={5} />
                    </div>
                </div>
                <section className="max-w-4xl mx-auto px-4 py-4"><LegalDisclaimer category="medical" /></section>
            </section>
        
            {/* FAQPage Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: [
                            {
                                "@type": "Question",
                                name: "How accurate is the lung disease calculator?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "This calculator provides estimates based on 2026 data and standard formulas. Results may vary based on individual circumstances."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Is this lung disease calculator free to use?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, this calculator is completely free. No registration or personal information required."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "How often is the lung disease data updated?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "We update our calculator data regularly to reflect current 2026 rates and regulations."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Can I rely on these lung disease results for decisions?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "This calculator provides estimates for educational purposes. For important decisions, please consult with a qualified professional."
                                }
                            }
                        ]
                    })
                }}
            />
        </>
    );
}
