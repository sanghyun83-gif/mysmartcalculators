"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, GraduationCap, Calculator, Info, DollarSign } from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import {
    SITE,
    FAFSA_CONSTANTS_2026,
    calculateFAFSA,
    formatCurrency,
    FAFSAResult
} from "@/lib/calculators/fafsa";

export default function FAFSACalculatorPage() {
    const [parentIncome, setParentIncome] = useState("");
    const [parentAssets, setParentAssets] = useState("");
    const [studentIncome, setStudentIncome] = useState("");
    const [studentAssets, setStudentAssets] = useState("");
    const [familySize, setFamilySize] = useState(4);
    const [gradeLevel, setGradeLevel] = useState("freshman");
    const [isDependent, setIsDependent] = useState(true);
    const [result, setResult] = useState<FAFSAResult | null>(null);

    const handleChange = (setter: (v: string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/[^0-9]/g, "");
        if (raw === "") { setter(""); return; }
        setter(parseInt(raw).toLocaleString("en-US"));
    };

    const parseVal = (val: string) => parseFloat(val.replace(/[^0-9.]/g, "")) || 0;

    const handleCalculate = () => {
        setResult(calculateFAFSA(
            parseVal(parentIncome),
            parseVal(parentAssets),
            parseVal(studentIncome),
            parseVal(studentAssets),
            familySize,
            1,
            isDependent,
            gradeLevel
        ));
    };

    return (
        <>
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/fafsa" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-emerald-500" />
                        <span className="text-lg font-bold text-white">FAFSA Calculator</span>
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
                        {SITE.year} FAFSA/SAI Calculator
                    </h1>
                    <p className="text-sm text-slate-400 mb-6">
                        Estimate your Student Aid Index and federal aid eligibility
                    </p>

                    {/* Inputs */}
                    <div className="space-y-5 mb-6">
                        {/* Dependency Status */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Student Status
                            </label>
                            <div className="grid grid-cols-2 gap-2">
                                {[
                                    { value: true, label: "Dependent" },
                                    { value: false, label: "Independent" },
                                ].map((opt) => (
                                    <button
                                        key={String(opt.value)}
                                        type="button"
                                        onClick={() => setIsDependent(opt.value)}
                                        className={`py-3 rounded-lg border transition ${isDependent === opt.value
                                            ? "bg-emerald-600 text-white border-emerald-600"
                                            : "bg-slate-700 text-slate-300 border-slate-600 hover:border-emerald-500"
                                            }`}
                                    >
                                        {opt.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Parent Income (if dependent) */}
                        {isDependent && (
                            <>
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">
                                        Parent(s) Annual Income (AGI)
                                    </label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                        <input
                                            type="text"
                                            value={parentIncome}
                                            onChange={handleChange(setParentIncome)}
                                            placeholder="75,000"
                                            className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">
                                        Parent(s) Total Assets (Savings, Investments)
                                    </label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                        <input
                                            type="text"
                                            value={parentAssets}
                                            onChange={handleChange(setParentAssets)}
                                            placeholder="50,000"
                                            className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                                        />
                                    </div>
                                    <p className="text-xs text-slate-500 mt-1">Exclude primary home and retirement accounts</p>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">
                                        Family Size (Household)
                                    </label>
                                    <div className="grid grid-cols-4 gap-2">
                                        {[2, 3, 4, 5].map((size) => (
                                            <button
                                                key={size}
                                                type="button"
                                                onClick={() => setFamilySize(size)}
                                                className={`py-2 rounded-lg border transition ${familySize === size
                                                    ? "bg-emerald-600 text-white border-emerald-600"
                                                    : "bg-slate-700 text-slate-300 border-slate-600"
                                                    }`}
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}

                        {/* Student Income */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Student Annual Income
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input
                                    type="text"
                                    value={studentIncome}
                                    onChange={handleChange(setStudentIncome)}
                                    placeholder="5,000"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                        </div>

                        {/* Grade Level */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Grade Level
                            </label>
                            <select
                                value={gradeLevel}
                                onChange={(e) => setGradeLevel(e.target.value)}
                                className="w-full px-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                            >
                                <option value="freshman">Freshman</option>
                                <option value="sophomore">Sophomore</option>
                                <option value="junior">Junior</option>
                                <option value="senior">Senior</option>
                            </select>
                        </div>
                    </div>

                    {/* Calculate Button */}
                    <button
                        onClick={handleCalculate}
                        className="w-full py-4 bg-emerald-600 text-white rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate Aid Estimate
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        {/* Summary Header */}
                        <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white p-6">
                            <p className="text-sm text-emerald-100 mb-1">Student Aid Index (SAI)</p>
                            <p className="text-4xl font-bold">
                                {result.isNegativeSAI ? "-" : ""}{formatCurrency(Math.abs(result.studentAidIndex))}
                            </p>
                            <p className="text-sm text-emerald-100 mt-2">
                                {result.studentAidIndex <= 0 ? "Maximum Pell Grant eligible" : "Partial aid eligible"}
                            </p>
                        </div>

                        {/* Breakdown */}
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                                Estimated Federal Aid
                            </h3>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Pell Grant (Free Money)</span>
                                    <span className="font-medium text-emerald-400">{formatCurrency(result.estimatedPellGrant)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Max Subsidized Loan</span>
                                    <span className="font-medium text-white">{formatCurrency(result.maxSubsidizedLoan)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Max Unsubsidized Loan</span>
                                    <span className="font-medium text-white">{formatCurrency(result.maxUnsubsidizedLoan)}</span>
                                </div>
                                <div className="flex justify-between pt-4 text-lg">
                                    <span className="text-white font-bold">Total Federal Aid Available</span>
                                    <span className="font-bold text-emerald-400">{formatCurrency(result.totalEstimatedAid)}</span>
                                </div>
                            </div>
                        </div>

                        {/* Note */}
                        <div className="p-4 bg-blue-900/30 border-t border-blue-700/50">
                            <div className="flex items-start gap-2 text-sm">
                                <DollarSign className="w-4 h-4 text-blue-400 mt-0.5" />
                                <p className="text-blue-200">
                                    Schools may also offer institutional grants, scholarships, and work-study.
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
                        <Info className="w-5 h-5 text-emerald-500" />
                        FAFSA FAQ
                    </h2>

                    <div className="space-y-4 text-sm">
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What is the Student Aid Index (SAI)?
                            </h3>
                            <p className="text-slate-400">
                                The SAI replaced the EFC in 2024-25. It&apos;s a number used to determine your
                                federal student aid eligibility. Lower SAI = more aid.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What&apos;s the difference between subsidized and unsubsidized loans?
                            </h3>
                            <p className="text-slate-400">
                                Subsidized loans are need-based and the government pays interest while you&apos;re in school.
                                Unsubsidized loans accrue interest immediately.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    This is an estimate. File your official FAFSA at studentaid.gov for actual aid amounts.
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
                                name: "What is the Student Aid Index (SAI)?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "The SAI replaced the EFC in 2024-25. It determines your federal student aid eligibility.",
                                },
                            },
                        ],
                    }),
                }}
            />
        </>
    );
}
