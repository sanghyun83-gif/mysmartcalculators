"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Home, Calculator, Info, ArrowRight } from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import {
    SITE,
    STATE_DATA,
    calculatePropertyDivision,
    formatCurrency,
    parseFormattedNumber,
    getStatesList,
    isCommunityPropertyState,
    PropertyDivisionResult
} from "@/lib/calculators/divorce";

export default function PropertyDivisionPage() {
    const [state, setState] = useState("CA");
    const [totalAssets, setTotalAssets] = useState("");
    const [totalDebts, setTotalDebts] = useState("");
    const [contribution, setContribution] = useState(50);
    const [result, setResult] = useState<PropertyDivisionResult | null>(null);

    const states = getStatesList();
    const selectedState = STATE_DATA[state];
    const isCommunity = isCommunityPropertyState(state);

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
        const assets = parseFormattedNumber(totalAssets) || 500000;
        const debts = parseFormattedNumber(totalDebts) || 100000;
        setResult(calculatePropertyDivision(state, assets, debts, contribution));
    };

    return (
        <>
            {/* Header */}


            <main className="max-w-2xl mx-auto px-4 py-8">
                {/* Calculator Card */}
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">
                        {SITE.year} Property Division Calculator
                    </h1>
                    <p className="text-sm text-slate-400 mb-6">
                        Calculate how marital assets and debts are divided in divorce
                    </p>

                    {/* Inputs */}
                    <div className="space-y-5 mb-6">
                        {/* State Selection */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Select State
                            </label>
                            <select
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-indigo-500"
                            >
                                {states.map((s) => (
                                    <option key={s.code} value={s.code}>
                                        {s.name} ({s.divisionType === 'community' ? 'Community Property' : 'Equitable'})
                                    </option>
                                ))}
                            </select>

                            {/* State Type Alert */}
                            <div className={`mt-3 p-3 rounded-lg ${isCommunity ? 'bg-indigo-900/30 border border-indigo-700/50' : 'bg-blue-900/30 border border-blue-700/50'
                                }`}>
                                <p className={`text-sm font-medium ${isCommunity ? 'text-indigo-300' : 'text-blue-300'}`}>
                                    {isCommunity ? '?���?Community Property State' : '?�️ Equitable Distribution State'}
                                </p>
                                <p className="text-xs text-slate-400 mt-1">
                                    {isCommunity
                                        ? 'Assets are split 50/50 regardless of contribution.'
                                        : 'Division based on contribution and circumstances (typically 40-60%).'
                                    }
                                </p>
                            </div>
                        </div>

                        {/* Total Assets */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Total Marital Assets
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                                <input
                                    type="text"
                                    value={totalAssets}
                                    onChange={handleInputChange(setTotalAssets)}
                                    placeholder="500,000"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                            <p className="text-xs text-slate-500 mt-1">Home, investments, retirement accounts, vehicles, etc.</p>
                        </div>

                        {/* Total Debts */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Total Marital Debts
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                                <input
                                    type="text"
                                    value={totalDebts}
                                    onChange={handleInputChange(setTotalDebts)}
                                    placeholder="100,000"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                            <p className="text-xs text-slate-500 mt-1">Mortgage, car loans, credit cards, etc.</p>
                        </div>

                        {/* Contribution Slider (only for equitable states) */}
                        {!isCommunity && (
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">
                                    Your Contribution: {contribution}%
                                </label>
                                <input
                                    type="range"
                                    min="40"
                                    max="60"
                                    value={contribution}
                                    onChange={(e) => setContribution(parseInt(e.target.value))}
                                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                                />
                                <div className="flex justify-between text-xs text-slate-500 mt-1">
                                    <span>40%</span>
                                    <span>50% (Equal)</span>
                                    <span>60%</span>
                                </div>
                                <p className="text-xs text-slate-500 mt-2">
                                    In equitable distribution states, courts consider each spouse&apos;s contribution.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Calculate Button */}
                    <button
                        onClick={handleCalculate}
                        className="w-full py-4 bg-indigo-600 text-white rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate Division
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        {/* Summary Header */}
                        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-6">
                            <p className="text-sm text-indigo-100 mb-1">Net Marital Estate</p>
                            <p className="text-4xl font-bold">{formatCurrency(result.netMaritalEstate)}</p>
                        </div>

                        {/* Division Visual */}
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                                Division Split
                            </h3>

                            {/* Visual Bar */}
                            <div className="mb-6">
                                <div className="h-8 rounded-lg overflow-hidden flex">
                                    <div
                                        className="bg-indigo-500 flex items-center justify-center text-white text-sm font-medium"
                                        style={{ width: `${result.spouse1Percent}%` }}
                                    >
                                        {result.spouse1Percent}%
                                    </div>
                                    <div
                                        className="bg-blue-500 flex items-center justify-center text-white text-sm font-medium"
                                        style={{ width: `${result.spouse2Percent}%` }}
                                    >
                                        {result.spouse2Percent}%
                                    </div>
                                </div>
                                <div className="flex justify-between text-sm mt-2">
                                    <span className="text-indigo-400">Spouse 1: {formatCurrency(result.spouse1Share)}</span>
                                    <span className="text-blue-400">Spouse 2: {formatCurrency(result.spouse2Share)}</span>
                                </div>
                            </div>

                            {/* Breakdown */}
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">State</span>
                                    <span className="font-medium text-white">{result.stateName}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Division Type</span>
                                    <span className={`font-medium ${result.divisionType === 'community' ? 'text-indigo-400' : 'text-blue-400'
                                        }`}>
                                        {result.divisionType === 'community' ? 'Community Property (50/50)' : 'Equitable Distribution'}
                                    </span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Total Assets</span>
                                    <span className="font-medium text-green-400">{formatCurrency(result.totalAssets)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Total Debts</span>
                                    <span className="font-medium text-red-400">-{formatCurrency(result.totalDebts)}</span>
                                </div>
                                <div className="flex justify-between pt-4 text-lg border-t border-slate-600">
                                    <span className="text-white font-bold">Net Estate</span>
                                    <span className="font-bold text-indigo-400">{formatCurrency(result.netMaritalEstate)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Ad Placeholder */}
                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center">
                    <p className="text-sm text-slate-500">Advertisement</p>
                </div>

                {/* Info Section */}
                <section className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Info className="w-5 h-5 text-indigo-500" />
                        What Gets Divided?
                    </h2>

                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="bg-green-900/20 border border-green-700/30 rounded-lg p-4">
                            <h3 className="font-semibold text-green-400 mb-2">??Marital Property</h3>
                            <ul className="text-slate-400 space-y-1">
                                <li>??Home purchased during marriage</li>
                                <li>??Joint bank accounts</li>
                                <li>??Retirement accounts (accrued during marriage)</li>
                                <li>??Vehicles, investments, businesses</li>
                            </ul>
                        </div>
                        <div className="bg-red-900/20 border border-red-700/30 rounded-lg p-4">
                            <h3 className="font-semibold text-red-400 mb-2">??Separate Property</h3>
                            <ul className="text-slate-400 space-y-1">
                                <li>??Assets owned before marriage</li>
                                <li>??Inheritances (even during marriage)</li>
                                <li>??Gifts received individually</li>
                                <li>??Personal injury settlements</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <div className="text-center">
                    <Link
                        href="/divorce/alimony-calculator"
                        className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Calculate Alimony
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    Property division is complex and depends on many factors.
                    This is a simplified estimate. Consult a divorce attorney for your specific situation.
                </p>
            </main>
        </>
    );
}
