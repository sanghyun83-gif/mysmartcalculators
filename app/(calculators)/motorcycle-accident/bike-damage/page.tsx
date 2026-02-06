"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Bike, Calculator, Info, AlertTriangle } from "lucide-react";
import { SITE, formatCurrency, parseFormattedNumber } from "@/lib/calculators/motorcycle-accident";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

interface DamageResult {
    repairCost: number;
    totalLoss: boolean;
    actualCashValue: number;
    diminishedValue: number;
    gearDamage: number;
    rentalCost: number;
    totalPropertyDamage: number;
}

function calculateBikeDamage(
    repairEstimate: number,
    bikeValue: number,
    gearDamage: number,
    rentalDays: number
): DamageResult {
    const totalLossThreshold = 0.75;
    const totalLoss = repairEstimate > bikeValue * totalLossThreshold;
    const actualCashValue = totalLoss ? bikeValue : 0;
    const repairCost = totalLoss ? 0 : repairEstimate;
    const diminishedValue = totalLoss ? 0 : Math.round(bikeValue * 0.15);
    const rentalCost = rentalDays * 50;
    const totalPropertyDamage = (totalLoss ? actualCashValue : repairCost + diminishedValue) + gearDamage + rentalCost;

    return {
        repairCost,
        totalLoss,
        actualCashValue,
        diminishedValue,
        gearDamage,
        rentalCost,
        totalPropertyDamage,
    };
}

export default function BikeDamagePage() {
    const [repairEstimate, setRepairEstimate] = useState("");
    const [bikeValue, setBikeValue] = useState("");
    const [bikeType, setBikeType] = useState<string>("cruiser");
    const [gearDamage, setGearDamage] = useState("");
    const [rentalDays, setRentalDays] = useState("14");
    const [result, setResult] = useState<DamageResult | null>(null);

    const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const raw = e.target.value.replace(/[^0-9]/g, "");
            if (raw === "") {
                setter("");
                return;
            }
            setter(parseInt(raw).toLocaleString("en-US"));
        };

    const bikeTypes = [
        { value: "cruiser", label: "Cruiser", range: "$8K-$25K" },
        { value: "sportBike", label: "Sport Bike", range: "$10K-$30K" },
        { value: "touring", label: "Touring", range: "$15K-$45K" },
        { value: "dirtBike", label: "Dirt Bike", range: "$3K-$12K" },
        { value: "vintage", label: "Vintage", range: "$5K-$50K" },
    ];

    const handleCalculate = () => {
        const repair = parseFormattedNumber(repairEstimate) || 5000;
        const value = parseFormattedNumber(bikeValue) || 15000;
        const gear = parseFormattedNumber(gearDamage) || 0;
        const rental = parseInt(rentalDays) || 14;
        setResult(calculateBikeDamage(repair, value, gear, rental));
    };

    return (
        <>

            <main className="max-w-2xl mx-auto px-4 py-8">
                {/* Calculator Card */}
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">
                        {SITE.year} Motorcycle Damage Calculator
                    </h1>
                    <p className="text-sm text-slate-400 mb-6">
                        Calculate your motorcycle property damage claim including total loss, repairs, and gear
                    </p>

                    {/* Inputs */}
                    <div className="space-y-5 mb-6">
                        {/* Bike Type */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Motorcycle Type
                            </label>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                {bikeTypes.map((type) => (
                                    <button
                                        key={type.value}
                                        type="button"
                                        onClick={() => setBikeType(type.value)}
                                        className={`py-2 px-3 rounded-lg border text-sm font-medium transition ${bikeType === type.value
                                            ? "bg-orange-600 text-white border-orange-600"
                                            : "bg-slate-700 text-slate-300 border-slate-600 hover:border-orange-500"
                                            }`}
                                    >
                                        <div>{type.label}</div>
                                        <div className="text-xs opacity-75">{type.range}</div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Bike Value */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Pre-Accident Motorcycle Value
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                                <input
                                    type="text"
                                    value={bikeValue}
                                    onChange={handleInputChange(setBikeValue)}
                                    placeholder="15,000"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-orange-500"
                                />
                            </div>
                            <p className="text-xs text-slate-500 mt-1">
                                Fair market value before the accident (check NADA, KBB)
                            </p>
                        </div>

                        {/* Repair Estimate */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Repair Estimate
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                                <input
                                    type="text"
                                    value={repairEstimate}
                                    onChange={handleInputChange(setRepairEstimate)}
                                    placeholder="5,000"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-orange-500"
                                />
                            </div>
                        </div>

                        {/* Gear Damage */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Riding Gear Damage (Helmet, Jacket, etc.)
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                                <input
                                    type="text"
                                    value={gearDamage}
                                    onChange={handleInputChange(setGearDamage)}
                                    placeholder="0"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-orange-500"
                                />
                            </div>
                        </div>

                        {/* Rental Days */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Days Without Transportation: {rentalDays}
                            </label>
                            <input
                                type="range"
                                min="0"
                                max="90"
                                value={rentalDays}
                                onChange={(e) => setRentalDays(e.target.value)}
                                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
                            />
                            <div className="flex justify-between text-xs text-slate-500 mt-1">
                                <span>0 days</span>
                                <span>90 days</span>
                            </div>
                        </div>
                    </div>

                    {/* Calculate Button */}
                    <button
                        onClick={handleCalculate}
                        className="w-full py-4 bg-orange-600 text-white rounded-lg font-semibold text-lg hover:bg-orange-700 transition-colors flex items-center justify-center gap-2"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate Damage Claim
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        {/* Summary Header */}
                        <div className={`text-white p-6 ${result.totalLoss
                            ? "bg-gradient-to-r from-red-600 to-orange-600"
                            : "bg-gradient-to-r from-orange-600 to-amber-600"}`}>
                            <p className="text-sm opacity-90 mb-1">
                                {result.totalLoss ? "?�️ TOTAL LOSS" : "Repairable - Property Damage Claim"}
                            </p>
                            <p className="text-4xl font-bold">{formatCurrency(result.totalPropertyDamage)}</p>
                        </div>

                        {/* Breakdown */}
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                                Claim Breakdown
                            </h3>

                            <div className="space-y-3 text-sm">
                                {result.totalLoss ? (
                                    <div className="flex justify-between py-2 border-b border-slate-700">
                                        <span className="text-slate-300">Actual Cash Value (Total Loss)</span>
                                        <span className="font-medium text-white">{formatCurrency(result.actualCashValue)}</span>
                                    </div>
                                ) : (
                                    <>
                                        <div className="flex justify-between py-2 border-b border-slate-700">
                                            <span className="text-slate-300">Repair Costs</span>
                                            <span className="font-medium text-white">{formatCurrency(result.repairCost)}</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-slate-700">
                                            <span className="text-slate-300">Diminished Value</span>
                                            <span className="font-medium text-orange-400">+{formatCurrency(result.diminishedValue)}</span>
                                        </div>
                                    </>
                                )}
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Gear Damage</span>
                                    <span className="font-medium text-white">{formatCurrency(result.gearDamage)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Transportation Costs ({rentalDays} days × $50)</span>
                                    <span className="font-medium text-white">{formatCurrency(result.rentalCost)}</span>
                                </div>
                                <div className="flex justify-between pt-4 text-lg">
                                    <span className="text-white font-bold">Total Property Claim</span>
                                    <span className="font-bold text-orange-400">{formatCurrency(result.totalPropertyDamage)}</span>
                                </div>
                            </div>
                        </div>

                        {/* Total Loss Warning */}
                        {result.totalLoss && (
                            <div className="p-4 bg-red-900/30 border-t border-red-700/50">
                                <div className="flex items-start gap-2 text-sm">
                                    <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5" />
                                    <p className="text-red-200">
                                        Your bike is likely a total loss. Repair costs exceed 75% of the bike&apos;s value.
                                        You should receive the Actual Cash Value (ACV).
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Info */}
                        <div className="p-4 bg-blue-900/30 border-t border-blue-700/50">
                            <div className="flex items-start gap-2 text-sm">
                                <Info className="w-4 h-4 text-blue-400 mt-0.5" />
                                <p className="text-blue-200">
                                    Don&apos;t forget to claim diminished value - your repaired bike is worth less than before the accident.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Ad Placeholder */}
                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center">
                    <p className="text-sm text-slate-500">Advertisement</p>
                </div>

                {/* CTA */}
                <div className="mt-8 text-center">
                    <Link
                        href="/motorcycle-accident/motorcycle-settlement"
                        className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Calculate Full Settlement (Including Injuries) ??                    </Link>
                </div>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    Property damage estimates based on {SITE.year} data.
                    Get official repair estimates from certified shops for your claim.
                </p>
            </main>
        </>
    );
}
