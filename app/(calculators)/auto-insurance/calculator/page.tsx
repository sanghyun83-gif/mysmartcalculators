"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calculator, Car, Info, Shield } from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import {
    SITE,
    AUTO_INSURANCE_CONSTANTS,
    calculatePremium,
    formatCurrency,
    PremiumResult,
    STATE_INSURANCE_DATA,
    getStatesList
} from "@/lib/calculators/auto-insurance";

export default function PremiumCalculatorPage() {
    const { defaults, stateRates, coverageTypes, drivingRecord, vehicleType } = AUTO_INSURANCE_CONSTANTS;
    const states = Object.keys(stateRates).sort();

    const [age, setAge] = useState(defaults.age.toString());
    const [state, setState] = useState(defaults.state);
    const [coverage, setCoverage] = useState(defaults.coverage);
    const [driving, setDriving] = useState(defaults.drivingRecord);
    const [vehicle, setVehicle] = useState(defaults.vehicleType);
    const [result, setResult] = useState<PremiumResult | null>(null);

    const statesList = getStatesList();
    const currentStateData = STATE_INSURANCE_DATA[state] || STATE_INSURANCE_DATA["AL"]; // Fallback to handle name vs code mismatch if any

    const handleCalculate = () => {
        const ageNum = parseInt(age) || 35;
        // Map state code back to name for the legacy calculatePremium function if needed, 
        // but currentStateData.name is safer.
        setResult(calculatePremium(ageNum, currentStateData?.name || state, coverage, driving, vehicle));
    };

    return (
        <div className="min-h-screen bg-slate-50">

            <main className="max-w-2xl mx-auto px-4 py-8">
                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                    <h1 className="text-xl font-bold text-slate-800 mb-2">
                        Estimate Your Auto Insurance Premium
                    </h1>
                    <p className="text-sm text-slate-500 mb-6">
                        Get a personalized estimate based on your profile
                    </p>

                    {/* Inputs */}
                    <div className="space-y-5 mb-6">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Your Age</label>
                                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} min="16" max="80"
                                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">State</label>
                                <select value={state} onChange={(e) => setState(e.target.value)}
                                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white">
                                    {statesList.map(s => (
                                        <option key={s.code} value={s.code}>{s.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* State Legal Block */}
                        <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl space-y-3">
                            <div className="flex items-center gap-2 text-blue-800 font-bold text-xs uppercase tracking-wider">
                                <Shield className="w-4 h-4" />
                                2026 {currentStateData?.name} Minimum Requirements
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <p className="text-[10px] text-slate-500 font-bold uppercase">Bodily Injury (P/A)</p>
                                    <p className="text-sm font-black text-slate-800">${currentStateData?.minBI_Person.toLocaleString()} / ${currentStateData?.minBI_Accident.toLocaleString()}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] text-slate-500 font-bold uppercase">Property Damage</p>
                                    <p className="text-sm font-black text-slate-800">${currentStateData?.minPD.toLocaleString()}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] text-slate-500 font-bold uppercase">Insurance System</p>
                                    <p className="text-sm font-black text-slate-800">{currentStateData?.system}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] text-slate-500 font-bold uppercase">PIP Required</p>
                                    <p className={`text-sm font-black ${currentStateData?.pipRequired ? 'text-blue-600' : 'text-slate-400'}`}>
                                        {currentStateData?.pipRequired ? 'Yes (Mandatory)' : 'No'}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Coverage Type</label>
                            <div className="grid grid-cols-2 gap-2">
                                {coverageTypes.map((ct) => (
                                    <button
                                        key={ct.id}
                                        onClick={() => setCoverage(ct.id)}
                                        className={`p-3 rounded-lg border-2 text-left transition-colors ${coverage === ct.id
                                            ? 'border-blue-500 bg-blue-50'
                                            : 'border-slate-200 hover:border-slate-300'
                                            }`}
                                    >
                                        <span className="font-semibold text-slate-800 text-sm">{ct.name}</span>
                                        <p className="text-xs text-slate-500 mt-0.5">{ct.description}</p>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Driving Record</label>
                            <select value={driving} onChange={(e) => setDriving(e.target.value)}
                                className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white">
                                {Object.entries(drivingRecord).map(([key, value]) => (
                                    <option key={key} value={key}>{value.label}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Vehicle Type</label>
                            <select value={vehicle} onChange={(e) => setVehicle(e.target.value)}
                                className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white">
                                {Object.entries(vehicleType).map(([key, value]) => (
                                    <option key={key} value={key}>{value.label}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <button onClick={handleCalculate}
                        className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-lg flex items-center justify-center gap-2 shadow-md">
                        <Car className="w-5 h-5" />
                        Get Estimate
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 text-center">
                            <p className="text-sm text-blue-100 mb-1">Estimated Annual Premium</p>
                            <p className="text-5xl font-bold">{formatCurrency(result.annualPremium)}</p>
                            <p className="text-blue-200 text-sm mt-1">{formatCurrency(result.monthlyPremium)}/month</p>
                        </div>

                        {/* Comparison */}
                        <div className={`p-4 text-center border-b ${result.comparedToNational > 0 ? 'bg-red-50' : 'bg-green-50'}`}>
                            <p className={`font-semibold ${result.comparedToNational > 0 ? 'text-red-600' : 'text-green-600'}`}>
                                {result.comparedToNational > 0 ? '+' : ''}{result.comparedToNational}% vs National Average
                            </p>
                        </div>

                        <div className="p-6 space-y-3 text-sm">
                            <h4 className="font-semibold text-slate-600 uppercase text-xs tracking-wider">Breakdown</h4>
                            <div className="flex justify-between py-2 border-b border-slate-100">
                                <span>{result.state} Base Rate</span>
                                <span className="font-medium">{formatCurrency(result.baseRate)}</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-slate-100">
                                <span>Age Factor (age {result.age})</span>
                                <span className="font-medium">×{result.ageMultiplier.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-slate-100">
                                <span>Coverage Factor</span>
                                <span className="font-medium">×{result.coverageMultiplier.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-slate-100">
                                <span>Driving Record</span>
                                <span className="font-medium">×{result.drivingMultiplier.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-slate-100">
                                <span>Vehicle Type</span>
                                <span className="font-medium">×{result.vehicleMultiplier.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between py-3 bg-blue-50 rounded-lg px-3">
                                <span className="font-semibold">Annual Premium</span>
                                <span className="font-bold text-blue-600">{formatCurrency(result.annualPremium)}</span>
                            </div>
                        </div>

                        <div className="p-4 bg-amber-50 border-t border-amber-200">
                            <div className="flex items-start gap-2">
                                <Info className="w-5 h-5 text-amber-600 mt-0.5" />
                                <p className="text-sm text-amber-800">
                                    This is an estimate only. Actual rates depend on your specific driving history, credit score, and the insurance company.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                <div className="my-8 p-6 bg-white border border-slate-200 rounded-xl text-center shadow-sm">
                    <p className="text-sm text-slate-400">Advertisement</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <Link href="/auto-insurance/by-state" className="bg-white border border-slate-200 rounded-lg p-4 text-center hover:border-blue-500 transition-colors">
                        <p className="text-sm font-medium text-slate-600">Compare by State ??/p>
                    </Link>
                    <Link href="/auto-insurance/by-age" className="bg-white border border-slate-200 rounded-lg p-4 text-center hover:border-blue-500 transition-colors">
                        <p className="text-sm font-medium text-slate-600">Compare by Age ??/p>
                    </Link>
                </div>
            </main>

            {/* Inline FAQ Section */}
            <section className="max-w-2xl mx-auto px-4 py-12">
                <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                    <h2 className="text-lg font-bold text-slate-800 mb-4">
                        Auto Insurance FAQ
                    </h2>
                    <div className="space-y-4 text-sm">
                        <div className="pb-3 border-b border-slate-100">
                            <h3 className="font-semibold text-slate-800 mb-1">
                                What is the average car insurance cost in 2026?
                            </h3>
                            <p className="text-slate-600">
                                The national average for full coverage auto insurance in 2026 is $2,014 per year ($168/month). Rates vary significantly by state - Maine is cheapest at $1,273/year while Michigan is most expensive at $3,423/year.
                            </p>
                        </div>
                        <div className="pb-3 border-b border-slate-100">
                            <h3 className="font-semibold text-slate-800 mb-1">
                                How can I lower my car insurance premium?
                            </h3>
                            <p className="text-slate-600">
                                Top ways to reduce premiums: bundle with home insurance (5-25% discount), raise your deductible, maintain a clean driving record, take defensive driving courses, and compare quotes from multiple insurers annually.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-800 mb-1">
                                Does credit score affect insurance rates?
                            </h3>
                            <p className="text-slate-600">
                                Yes, in most states. Poor credit can increase premiums by 50-100% compared to excellent credit. Only California, Hawaii, and Massachusetts prohibit using credit scores for auto insurance pricing.
                            </p>
                        </div>
                    </div>
                </div>
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
                                name: "How accurate is the auto insurance calculator?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "This calculator provides estimates based on 2026 data and standard formulas. Results may vary based on individual circumstances."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Is this auto insurance calculator free to use?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, this calculator is completely free. No registration or personal information required."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "How often is the auto insurance data updated?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "We update our calculator data regularly to reflect current 2026 rates and regulations."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Can I rely on these auto insurance results for decisions?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "This calculator provides estimates for educational purposes. For important decisions, please consult with a qualified professional."
                                }
                            }
                        ]
                    })
                }}
            />
        </div>
    );
}
