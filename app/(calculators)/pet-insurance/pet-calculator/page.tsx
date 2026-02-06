"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Heart, Calculator, Info, DollarSign } from "lucide-react";
import {
    SITE,
    PET_2026,
    calculatePet,
    formatCurrency,
    PetResult
} from "@/lib/calculators/pet-insurance";

export default function PetCalculatorPage() {
    const [petType, setPetType] = useState<"dog" | "cat">("dog");
    const [age, setAge] = useState("3");
    const [breedSize, setBreedSize] = useState("medium");
    const [coverage, setCoverage] = useState("comprehensive");
    const [deductible, setDeductible] = useState(500);
    const [reimbursement, setReimbursement] = useState(80);
    const [result, setResult] = useState<PetResult | null>(null);

    const handleCalculate = () => {
        setResult(calculatePet(
            petType,
            parseInt(age),
            breedSize,
            coverage,
            deductible,
            reimbursement
        ));
    };

    return (
        <>
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/pet-insurance" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <Heart className="w-5 h-5 text-blue-500" />
                        <span className="text-lg font-bold text-white">Pet Insurance Calculator</span>
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
                        {SITE.year} Pet Insurance Calculator
                    </h1>
                    <p className="text-sm text-slate-400 mb-6">
                        Estimate your monthly premium
                    </p>

                    {/* Inputs */}
                    <div className="space-y-5 mb-6">
                        {/* Pet Type */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Pet Type
                            </label>
                            <div className="grid grid-cols-2 gap-2">
                                <button
                                    type="button"
                                    onClick={() => setPetType("dog")}
                                    className={`py-3 rounded-lg border text-lg transition ${petType === "dog"
                                        ? "bg-blue-600 text-white border-blue-600"
                                        : "bg-slate-700 text-slate-300 border-slate-600"
                                        }`}
                                >
                                    ?   Dog
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setPetType("cat")}
                                    className={`py-3 rounded-lg border text-lg transition ${petType === "cat"
                                        ? "bg-blue-600 text-white border-blue-600"
                                        : "bg-slate-700 text-slate-300 border-slate-600"
                                        }`}
                                >
                                    ?   Cat
                                </button>
                            </div>
                        </div>

                        {/* Pet Age */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Pet Age: <span className="text-blue-400 font-bold">{age} years</span>
                            </label>
                            <input
                                type="range"
                                min="0"
                                max="15"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                            />
                            <div className="flex justify-between text-xs text-slate-500 mt-1">
                                <span>Puppy/Kitten</span>
                                <span>Adult</span>
                                <span>Senior</span>
                            </div>
                        </div>

                        {/* Breed Size (Dogs) */}
                        {petType === "dog" && (
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">
                                    Breed Size
                                </label>
                                <div className="grid grid-cols-4 gap-2">
                                    {["small", "medium", "large", "giant"].map((size) => (
                                        <button
                                            key={size}
                                            type="button"
                                            onClick={() => setBreedSize(size)}
                                            className={`py-2 rounded-lg border text-sm capitalize transition ${breedSize === size
                                                ? "bg-blue-600 text-white border-blue-600"
                                                : "bg-slate-700 text-slate-300 border-slate-600"
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Coverage Type */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Coverage Type
                            </label>
                            <div className="grid grid-cols-2 gap-2">
                                <button
                                    type="button"
                                    onClick={() => setCoverage("accident")}
                                    className={`py-3 rounded-lg border transition ${coverage === "accident"
                                        ? "bg-blue-600 text-white border-blue-600"
                                        : "bg-slate-700 text-slate-300 border-slate-600"
                                        }`}
                                >
                                    Accident Only
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setCoverage("comprehensive")}
                                    className={`py-3 rounded-lg border transition ${coverage === "comprehensive"
                                        ? "bg-blue-600 text-white border-blue-600"
                                        : "bg-slate-700 text-slate-300 border-slate-600"
                                        }`}
                                >
                                    Accident + Illness
                                </button>
                            </div>
                        </div>

                        {/* Deductible */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Annual Deductible: <span className="text-blue-400 font-bold">{formatCurrency(deductible)}</span>
                            </label>
                            <div className="grid grid-cols-5 gap-2">
                                {PET_2026.deductibles.map((d) => (
                                    <button
                                        key={d}
                                        type="button"
                                        onClick={() => setDeductible(d)}
                                        className={`py-2 rounded-lg border text-sm transition ${deductible === d
                                            ? "bg-blue-600 text-white border-blue-600"
                                            : "bg-slate-700 text-slate-300 border-slate-600"
                                            }`}
                                    >
                                        ${d}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Reimbursement */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Reimbursement Rate
                            </label>
                            <div className="grid grid-cols-3 gap-2">
                                {PET_2026.reimbursementRates.map((r) => (
                                    <button
                                        key={r}
                                        type="button"
                                        onClick={() => setReimbursement(r)}
                                        className={`py-2 rounded-lg border transition ${reimbursement === r
                                            ? "bg-blue-600 text-white border-blue-600"
                                            : "bg-slate-700 text-slate-300 border-slate-600"
                                            }`}
                                    >
                                        {r}%
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Calculate Button */}
                    <button
                        onClick={handleCalculate}
                        className="w-full py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate Premium
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        {/* Summary Header */}
                        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6">
                            <p className="text-sm text-blue-100 mb-1">Estimated Monthly Premium</p>
                            <p className="text-4xl font-bold">{formatCurrency(result.monthlyPremium)}</p>
                            <p className="text-sm text-blue-100 mt-2">
                                {result.petType === "dog" ? "?  " : "?  "} {result.coverage}  {formatCurrency(result.annualPremium)}/year
                            </p>
                        </div>

                        {/* Breakdown */}
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                                Plan Details
                            </h3>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Pet Type</span>
                                    <span className="font-medium text-white capitalize">{result.petType}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Age</span>
                                    <span className="font-medium text-white">{result.age} years</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Annual Deductible</span>
                                    <span className="font-medium text-white">{formatCurrency(result.deductible)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Reimbursement Rate</span>
                                    <span className="font-medium text-blue-400">{result.reimbursement}%</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Annual Max Benefit</span>
                                    <span className="font-medium text-white">{formatCurrency(result.annualMaxBenefit)}</span>
                                </div>
                                <div className="flex justify-between pt-4 text-lg">
                                    <span className="text-white font-bold">Monthly Cost</span>
                                    <span className="font-bold text-blue-400">{formatCurrency(result.monthlyPremium)}</span>
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
                        <Info className="w-5 h-5 text-blue-500" />
                        Pet Insurance FAQ
                    </h2>

                    <div className="space-y-4 text-sm">
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                Is pet insurance worth it?
                            </h3>
                            <p className="text-slate-400">
                                The average vet visit costs ${PET_2026.statistics.avgAnnualVetCost}/year.
                                Major surgeries can cost $5,000+. Insurance provides peace of mind.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What isn&apos;t covered?
                            </h3>
                            <p className="text-slate-400">
                                Pre-existing conditions, elective procedures, grooming, and breeding costs
                                are typically not covered.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    This is an estimate. Actual costs vary by provider and location.
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
                                name: "Is pet insurance worth it?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "The average annual vet cost is $1,480 and major surgeries can cost $5,000+. Insurance provides financial protection.",
                                },
                            },
                        ],
                    }),
                }}
            />
        </>
    );
}
