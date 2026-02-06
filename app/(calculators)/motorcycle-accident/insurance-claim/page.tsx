"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Shield, Calculator, Info, AlertTriangle, Bike } from "lucide-react";
import { SITE, formatCurrency, parseFormattedNumber } from "@/lib/calculators/motorcycle-accident";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function InsuranceClaimPage() {
    const [propertyDamage, setPropertyDamage] = useState("");
    const [medicalExpenses, setMedicalExpenses] = useState("");
    const [liability, setLiability] = useState("50000");
    const [hasUM, setHasUM] = useState(false);
    const [umLimit, setUmLimit] = useState("100000");
    const [hasCollision, setHasCollision] = useState(true);
    const [deductible, setDeductible] = useState("500");
    const [faultPercent, setFaultPercent] = useState(0);
    const [result, setResult] = useState<{
        liabilityPayout: number;
        umPayout: number;
        collisionPayout: number;
        totalRecovery: number;
        unrecoveredDamages: number;
        recommendation: string;
    } | null>(null);

    const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const raw = e.target.value.replace(/[^0-9]/g, "");
            if (raw === "") {
                setter("");
                return;
            }
            setter(parseInt(raw).toLocaleString("en-US"));
        };

    const liabilityOptions = [
        { value: "25000", label: "$25K" },
        { value: "50000", label: "$50K" },
        { value: "100000", label: "$100K" },
        { value: "250000", label: "$250K" },
        { value: "500000", label: "$500K" },
    ];

    const handleCalculate = () => {
        const property = parseFormattedNumber(propertyDamage) || 0;
        const medical = parseFormattedNumber(medicalExpenses) || 0;
        const liabilityLimit = parseInt(liability);
        const umLimitValue = parseInt(umLimit);
        const deductibleValue = parseInt(deductible);

        const totalDamages = property + medical;
        const adjustedDamages = totalDamages * (1 - faultPercent / 100);
        const liabilityPayout = Math.min(adjustedDamages, liabilityLimit);
        const remaining = adjustedDamages - liabilityPayout;
        const umPayout = hasUM && remaining > 0 ? Math.min(remaining, umLimitValue) : 0;
        const collisionPayout = hasCollision && property > 0 && faultPercent > 0
            ? Math.max(0, property - deductibleValue - liabilityPayout)
            : 0;
        const totalRecovery = liabilityPayout + umPayout + collisionPayout;
        const unrecoveredDamages = Math.max(0, totalDamages - totalRecovery);

        let recommendation = "";
        if (unrecoveredDamages > 0) {
            if (!hasUM && remaining > 0) {
                recommendation = "Consider adding UM/UIM coverage to protect against underinsured drivers.";
            } else if (totalDamages > liabilityLimit) {
                recommendation = "Your damages exceed the at-fault driver's coverage. A lawsuit may recover additional compensation.";
            } else {
                recommendation = "Consider consulting a motorcycle accident attorney to maximize recovery.";
            }
        } else {
            recommendation = "Your insurance coverage should fully cover your damages.";
        }

        setResult({
            liabilityPayout,
            umPayout,
            collisionPayout,
            totalRecovery,
            unrecoveredDamages,
            recommendation,
        });
    };

    return (
        <>

            <main className="max-w-2xl mx-auto px-4 py-8">
                {/* Calculator Card */}
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">
                        {SITE.year} Motorcycle Insurance Claim Calculator
                    </h1>
                    <p className="text-sm text-slate-400 mb-6">
                        See how much your insurance will pay for your motorcycle accident claim
                    </p>

                    {/* Inputs */}
                    <div className="space-y-5 mb-6">
                        {/* Property Damage */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                <Bike className="w-4 h-4 inline mr-1" />
                                Total Property Damage (Bike + Gear)
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                                <input
                                    type="text"
                                    value={propertyDamage}
                                    onChange={handleInputChange(setPropertyDamage)}
                                    placeholder="10,000"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-orange-500"
                                />
                            </div>
                        </div>

                        {/* Medical Expenses */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Total Medical Expenses
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                                <input
                                    type="text"
                                    value={medicalExpenses}
                                    onChange={handleInputChange(setMedicalExpenses)}
                                    placeholder="25,000"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-orange-500"
                                />
                            </div>
                        </div>

                        {/* Fault Percentage */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Your Fault Percentage: {faultPercent}%
                            </label>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={faultPercent}
                                onChange={(e) => setFaultPercent(parseInt(e.target.value))}
                                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
                            />
                            <div className="flex justify-between text-xs text-slate-500 mt-1">
                                <span>0% (Not your fault)</span>
                                <span>100% (All your fault)</span>
                            </div>
                        </div>

                        {/* At-Fault Driver's Liability */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                At-Fault Driver&apos;s Liability Limit
                            </label>
                            <div className="grid grid-cols-5 gap-2">
                                {liabilityOptions.map((opt) => (
                                    <button
                                        key={opt.value}
                                        type="button"
                                        onClick={() => setLiability(opt.value)}
                                        className={`py-2 px-2 rounded-lg border text-xs font-medium transition ${liability === opt.value
                                            ? "bg-orange-600 text-white border-orange-600"
                                            : "bg-slate-700 text-slate-300 border-slate-600 hover:border-orange-500"
                                            }`}
                                    >
                                        {opt.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Your Coverage Section */}
                        <div className="p-4 bg-slate-700/50 rounded-lg">
                            <h3 className="text-sm font-medium text-white mb-3">Your Motorcycle Coverage</h3>

                            {/* UM/UIM Toggle */}
                            <div className="flex items-center justify-between py-2 border-b border-slate-600">
                                <div>
                                    <p className="text-sm text-slate-300">Uninsured/Underinsured (UM/UIM)</p>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setHasUM(!hasUM)}
                                    className={`w-12 h-6 rounded-full transition-colors ${hasUM ? "bg-orange-600" : "bg-slate-600"
                                        }`}
                                >
                                    <div className={`w-5 h-5 bg-white rounded-full transition-transform mx-0.5 ${hasUM ? "translate-x-6" : "translate-x-0"
                                        }`} />
                                </button>
                            </div>

                            {hasUM && (
                                <div className="mt-2 pl-4">
                                    <label className="text-xs text-slate-400">UM/UIM Limit</label>
                                    <select
                                        value={umLimit}
                                        onChange={(e) => setUmLimit(e.target.value)}
                                        className="w-full mt-1 px-3 py-2 bg-slate-700 border border-slate-600 rounded text-sm text-white"
                                    >
                                        <option value="50000">$50,000</option>
                                        <option value="100000">$100,000</option>
                                        <option value="250000">$250,000</option>
                                        <option value="500000">$500,000</option>
                                    </select>
                                </div>
                            )}

                            {/* Collision Toggle */}
                            <div className="flex items-center justify-between py-2 mt-2">
                                <div>
                                    <p className="text-sm text-slate-300">Collision Coverage</p>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setHasCollision(!hasCollision)}
                                    className={`w-12 h-6 rounded-full transition-colors ${hasCollision ? "bg-orange-600" : "bg-slate-600"
                                        }`}
                                >
                                    <div className={`w-5 h-5 bg-white rounded-full transition-transform mx-0.5 ${hasCollision ? "translate-x-6" : "translate-x-0"
                                        }`} />
                                </button>
                            </div>

                            {hasCollision && (
                                <div className="mt-2 pl-4">
                                    <label className="text-xs text-slate-400">Deductible</label>
                                    <select
                                        value={deductible}
                                        onChange={(e) => setDeductible(e.target.value)}
                                        className="w-full mt-1 px-3 py-2 bg-slate-700 border border-slate-600 rounded text-sm text-white"
                                    >
                                        <option value="250">$250</option>
                                        <option value="500">$500</option>
                                        <option value="1000">$1,000</option>
                                        <option value="2000">$2,000</option>
                                    </select>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Calculate Button */}
                    <button
                        onClick={handleCalculate}
                        className="w-full py-4 bg-orange-600 text-white rounded-lg font-semibold text-lg hover:bg-orange-700 transition-colors flex items-center justify-center gap-2"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate Insurance Payout
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        {/* Summary Header */}
                        <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white p-6">
                            <p className="text-sm text-orange-100 mb-1">Estimated Insurance Recovery</p>
                            <p className="text-4xl font-bold">{formatCurrency(result.totalRecovery)}</p>
                            {result.unrecoveredDamages > 0 && (
                                <p className="text-sm text-orange-200 mt-2">
                                    ?�️ {formatCurrency(result.unrecoveredDamages)} in unrecovered damages
                                </p>
                            )}
                        </div>

                        {/* Breakdown */}
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                                Payout Breakdown
                            </h3>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">At-Fault Driver&apos;s Liability</span>
                                    <span className="font-medium text-white">{formatCurrency(result.liabilityPayout)}</span>
                                </div>
                                {result.umPayout > 0 && (
                                    <div className="flex justify-between py-2 border-b border-slate-700">
                                        <span className="text-slate-300">Your UM/UIM Coverage</span>
                                        <span className="font-medium text-orange-400">+{formatCurrency(result.umPayout)}</span>
                                    </div>
                                )}
                                {result.collisionPayout > 0 && (
                                    <div className="flex justify-between py-2 border-b border-slate-700">
                                        <span className="text-slate-300">Collision Coverage</span>
                                        <span className="font-medium text-white">{formatCurrency(result.collisionPayout)}</span>
                                    </div>
                                )}
                                <div className="flex justify-between pt-4 text-lg">
                                    <span className="text-white font-bold">Total Recovery</span>
                                    <span className="font-bold text-orange-400">{formatCurrency(result.totalRecovery)}</span>
                                </div>
                            </div>
                        </div>

                        {/* Recommendation */}
                        <div className="p-4 bg-blue-900/30 border-t border-blue-700/50">
                            <div className="flex items-start gap-2 text-sm">
                                <Info className="w-4 h-4 text-blue-400 mt-0.5" />
                                <p className="text-blue-200">{result.recommendation}</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Warning */}
                <div className="mt-6 bg-amber-900/20 border border-amber-700/50 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-amber-400 mt-0.5" />
                        <div className="text-sm text-amber-200">
                            <p className="font-medium text-white mb-1">Important</p>
                            <p>
                                This calculator shows insurance payouts only. Pain & suffering damages
                                are NOT paid by insurance adjusters directly - they require negotiation or litigation.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-8 text-center">
                    <Link
                        href="/motorcycle-accident/motorcycle-settlement"
                        className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Calculate Full Settlement Value  →</Link>
                </div>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    Insurance claim estimates for educational purposes.
                    Actual payouts depend on policy terms, state laws, and claim specifics.
                </p>
            </main>
        </>
    );
}
