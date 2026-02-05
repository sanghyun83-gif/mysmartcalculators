"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calculator, Info, AlertTriangle, Heart } from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import {
    SITE,
    WRONGFUL_DEATH_CONSTANTS,
    formatCurrency,
    parseFormattedNumber,
    calculateYearsRemaining,
} from "@/lib/calculators/wrongful-death";

export default function WrongfulDeathSettlementPage() {
    const [annualIncome, setAnnualIncome] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState<"male" | "female">("male");
    const [funeralCosts, setFuneralCosts] = useState("10000");
    const [medicalExpenses, setMedicalExpenses] = useState("");
    const [caseStrength, setCaseStrength] = useState<"weak" | "moderate" | "strong" | "exceptional">("strong");
    const [hasAttorney, setHasAttorney] = useState(true);
    const [result, setResult] = useState<any>(null);

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
        const income = parseFormattedNumber(annualIncome) || 60000;
        const ageNum = parseInt(age) || 40;
        const funeral = parseFormattedNumber(funeralCosts) || 10000;
        const medical = parseFormattedNumber(medicalExpenses) || 0;
        const yearsRemaining = calculateYearsRemaining(ageNum, gender);

        const multipliers = WRONGFUL_DEATH_CONSTANTS.multipliers[caseStrength];
        const lostIncome = Math.round(income * yearsRemaining);
        const lostBenefits = Math.round(lostIncome * 0.30);
        const lossOfCompanionship = Math.round(income * multipliers.avg * yearsRemaining * 0.5);
        const economicDamages = lostIncome + lostBenefits + funeral + medical;
        const totalBeforeFees = economicDamages + lossOfCompanionship;
        const attorneyFees = hasAttorney ? Math.round(totalBeforeFees * 0.33) : 0;
        const netSettlement = totalBeforeFees - attorneyFees;

        setResult({
            yearsRemaining,
            lostIncome,
            lostBenefits,
            funeralCosts: funeral,
            lossOfCompanionship,
            medicalExpenses: medical,
            totalBeforeFees,
            attorneyFees,
            netSettlement,
        });
    };

    const caseStrengthOptions = [
        { value: "weak", label: "Weak", desc: "Questionable liability", multiplier: "0.5-1x" },
        { value: "moderate", label: "Moderate", desc: "Clear liability, some defense", multiplier: "1-2x" },
        { value: "strong", label: "Strong", desc: "Clear negligence", multiplier: "2-4x" },
        { value: "exceptional", label: "Exceptional", desc: "Gross negligence, punitive", multiplier: "4-10x" },
    ];

    return (
        <>
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/wrongful-death" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <Heart className="w-5 h-5 text-amber-500" />
                        <span className="text-lg font-bold text-white">Wrongful Death Calculator</span>
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
                        {SITE.year} Wrongful Death Settlement Calculator
                    </h1>
                    <p className="text-sm text-slate-400 mb-6">
                        Estimate compensation for the loss of your loved one
                    </p>

                    {/* Inputs */}
                    <div className="space-y-5 mb-6">
                        {/* Deceased's Annual Income */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Deceased&apos;s Annual Income
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                                <input
                                    type="text"
                                    value={annualIncome}
                                    onChange={handleInputChange(setAnnualIncome)}
                                    placeholder="60,000"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                                />
                            </div>
                        </div>

                        {/* Age and Gender */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">
                                    Deceased&apos;s Age
                                </label>
                                <input
                                    type="text"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value.replace(/[^0-9]/g, ""))}
                                    placeholder="40"
                                    className="w-full px-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-amber-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">
                                    Gender
                                </label>
                                <div className="flex gap-2">
                                    <button
                                        type="button"
                                        onClick={() => setGender("male")}
                                        className={`flex-1 py-4 rounded-lg border ${gender === "male" ? "bg-amber-600 border-amber-500 text-white" : "bg-slate-700 border-slate-600 text-slate-300"}`}
                                    >
                                        Male
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setGender("female")}
                                        className={`flex-1 py-4 rounded-lg border ${gender === "female" ? "bg-amber-600 border-amber-500 text-white" : "bg-slate-700 border-slate-600 text-slate-300"}`}
                                    >
                                        Female
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Case Strength */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Case Strength
                            </label>
                            <div className="grid grid-cols-2 gap-2">
                                {caseStrengthOptions.map((opt) => (
                                    <button
                                        key={opt.value}
                                        type="button"
                                        onClick={() => setCaseStrength(opt.value as typeof caseStrength)}
                                        className={`py-3 px-3 rounded-lg border font-medium transition text-left ${caseStrength === opt.value
                                            ? "bg-amber-600 text-white border-amber-600"
                                            : "bg-slate-700 text-slate-300 border-slate-600 hover:border-amber-500"
                                            }`}
                                    >
                                        <div className="text-sm font-semibold">{opt.label}</div>
                                        <div className="text-xs opacity-75">{opt.desc}</div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Attorney Toggle */}
                        <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                            <div>
                                <p className="text-sm font-medium text-white">Using an Attorney?</p>
                                <p className="text-xs text-slate-400">Attorney fees: 33% of settlement</p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setHasAttorney(!hasAttorney)}
                                className={`w-14 h-8 rounded-full transition-colors ${hasAttorney ? "bg-amber-600" : "bg-slate-600"}`}
                            >
                                <div className={`w-6 h-6 bg-white rounded-full transition-transform mx-1 ${hasAttorney ? "translate-x-6" : "translate-x-0"}`} />
                            </button>
                        </div>
                    </div>

                    {/* Calculate Button */}
                    <button
                        onClick={handleCalculate}
                        className="w-full py-4 bg-amber-600 text-white rounded-lg font-semibold text-lg hover:bg-amber-700 transition-colors flex items-center justify-center gap-2"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate Settlement Value
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-6">
                            <p className="text-sm text-amber-100 mb-1">Estimated Wrongful Death Settlement</p>
                            <p className="text-4xl font-bold">{formatCurrency(result.netSettlement)}</p>
                            <p className="text-sm text-amber-100 mt-2">
                                Based on {result.yearsRemaining} years of lost earnings
                            </p>
                        </div>

                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                                Settlement Breakdown
                            </h3>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Lost Income ({result.yearsRemaining} years)</span>
                                    <span className="font-medium text-white">{formatCurrency(result.lostIncome)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Lost Benefits (30%)</span>
                                    <span className="font-medium text-white">{formatCurrency(result.lostBenefits)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Funeral Costs</span>
                                    <span className="font-medium text-white">{formatCurrency(result.funeralCosts)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Loss of Companionship</span>
                                    <span className="font-medium text-amber-400">+{formatCurrency(result.lossOfCompanionship)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-white font-medium">Total Before Fees</span>
                                    <span className="font-bold text-white">{formatCurrency(result.totalBeforeFees)}</span>
                                </div>
                                {result.attorneyFees > 0 && (
                                    <div className="flex justify-between py-2 border-b border-slate-700">
                                        <span className="text-slate-300">Attorney Fees (33%)</span>
                                        <span className="font-medium text-red-400">-{formatCurrency(result.attorneyFees)}</span>
                                    </div>
                                )}
                                <div className="flex justify-between pt-4 text-lg">
                                    <span className="text-white font-bold">Net Settlement</span>
                                    <span className="font-bold text-amber-400">{formatCurrency(result.netSettlement)}</span>
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
                        <Info className="w-5 h-5 text-amber-500" />
                        Wrongful Death FAQ
                    </h2>

                    <div className="space-y-4 text-sm">
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What is a wrongful death claim?
                            </h3>
                            <p className="text-slate-400">
                                A wrongful death claim is a lawsuit brought when someone dies due to another person&apos;s negligence or intentional act. It allows surviving family members to seek compensation.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What damages can be recovered?
                            </h3>
                            <p className="text-slate-400">
                                Damages include lost income, loss of companionship, funeral costs, medical expenses, and in some cases, punitive damages for gross negligence.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What is the statute of limitations?
                            </h3>
                            <p className="text-slate-400">
                                Most states have a 2-3 year statute of limitations for wrongful death claims, starting from the date of death. Some states have exceptions.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Disclaimer */}
                <div className="mt-8 p-4 bg-amber-900/20 border border-amber-700/50 rounded-lg">
                    <div className="flex items-start gap-2">
                        <AlertTriangle className="w-5 h-5 text-amber-400 mt-0.5" />
                        <p className="text-xs text-amber-200">
                            <strong>Important:</strong> Wrongful death cases are complex and time-sensitive.
                            Consult a wrongful death attorney immediately to preserve your rights.
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
                                name: "What is a wrongful death claim?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "A wrongful death claim is a lawsuit brought when someone dies due to another person's negligence or intentional act, allowing surviving family members to seek compensation.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What is the average wrongful death settlement?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Wrongful death settlements average $500,000 to $1 million or more, depending on the cause of death, the deceased's income, and case strength.",
                                },
                            },
                        ],
                    }),
                }}
            />
        </>
    );
}
