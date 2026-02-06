"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, DollarSign, Info, AlertCircle } from "lucide-react";
import {
    SITE,
    SSA_CONSTANTS_2026,
    STATE_SSI_SUPPLEMENTS,
    calculateSSI,
    formatCurrency,
    parseFormattedNumber,
    getStatesList,
    SSIResult
} from "@/lib/calculators/disability";

export default function SSICalculatorPage() {
    const [state, setState] = useState("CA");
    const [monthlyIncome, setMonthlyIncome] = useState("");
    const [filingStatus, setFilingStatus] = useState<'individual' | 'couple'>('individual');
    const [result, setResult] = useState<SSIResult | null>(null);

    const states = getStatesList();
    const constants = SSA_CONSTANTS_2026;
    const selectedState = STATE_SSI_SUPPLEMENTS[state];

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
        const income = parseFormattedNumber(monthlyIncome) || 0;
        setResult(calculateSSI(state, income, filingStatus));
    };

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header */}


            <main className="max-w-2xl mx-auto px-4 py-8">
                {/* Calculator Card */}
                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded text-xs font-medium">
                            {constants.colaDisplay} COLA Applied
                        </span>
                    </div>
                    <h1 className="text-xl font-bold text-slate-800 mb-2">
                        {SITE.year} SSI Benefits Calculator
                    </h1>
                    <p className="text-sm text-slate-500 mb-6">
                        Estimate your Supplemental Security Income with state supplements
                    </p>

                    {/* Inputs */}
                    <div className="space-y-5 mb-6">
                        {/* State Selection */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                Select State
                            </label>
                            <select
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-800 focus:ring-2 focus:ring-teal-500"
                            >
                                {states.map((s) => (
                                    <option key={s.code} value={s.code}>
                                        {s.name} {s.supplement > 0 ? `(+${formatCurrency(s.supplement)} supplement)` : ''}
                                    </option>
                                ))}
                            </select>
                            {selectedState && selectedState.supplement > 0 && (
                                <p className="text-xs text-teal-600 mt-1">
                                     {selectedState.name} adds {formatCurrency(selectedState.supplement)}/mo to federal SSI
                                </p>
                            )}
                        </div>

                        {/* Filing Status */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                Filing Status
                            </label>
                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    onClick={() => setFilingStatus('individual')}
                                    className={`py-3 px-4 rounded-lg font-medium transition-colors ${filingStatus === 'individual'
                                        ? 'bg-teal-600 text-white'
                                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                        }`}
                                >
                                    Individual
                                </button>
                                <button
                                    onClick={() => setFilingStatus('couple')}
                                    className={`py-3 px-4 rounded-lg font-medium transition-colors ${filingStatus === 'couple'
                                        ? 'bg-teal-600 text-white'
                                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                        }`}
                                >
                                    Couple
                                </button>
                            </div>
                            <p className="text-xs text-slate-400 mt-1">
                                {filingStatus === 'individual'
                                    ? `Max federal SSI: ${formatCurrency(constants.ssi.maxIndividual)}/mo`
                                    : `Max federal SSI: ${formatCurrency(constants.ssi.maxCouple)}/mo`
                                }
                            </p>
                        </div>

                        {/* Monthly Income */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                Current Monthly Income (if any)
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                                <input
                                    type="text"
                                    value={monthlyIncome}
                                    onChange={handleInputChange(setMonthlyIncome)}
                                    placeholder="0"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-white border border-slate-300 rounded-lg text-slate-800 focus:ring-2 focus:ring-teal-500"
                                />
                            </div>
                            <p className="text-xs text-slate-400 mt-1">Leave at 0 if no current income</p>
                        </div>
                    </div>

                    {/* Calculate Button */}
                    <button
                        onClick={handleCalculate}
                        className="w-full py-4 bg-teal-600 text-white rounded-lg font-semibold text-lg hover:bg-teal-700 transition-colors flex items-center justify-center gap-2 shadow-md"
                    >
                        <DollarSign className="w-5 h-5" />
                        Calculate SSI Benefits
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                        {/* Main Result */}
                        <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white p-6">
                            <p className="text-sm text-teal-100 mb-1">Estimated Monthly SSI</p>
                            <p className="text-4xl font-bold">{formatCurrency(result.totalMonthly)}</p>
                            <p className="text-sm text-teal-200 mt-2">
                                Federal SSI + {result.stateName} Supplement
                            </p>
                        </div>

                        {/* Breakdown */}
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
                                Calculation Breakdown
                            </h3>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-100">
                                    <span className="text-slate-600">State</span>
                                    <span className="font-medium text-slate-800">{result.stateName}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-100">
                                    <span className="text-slate-600">Filing Status</span>
                                    <span className="font-medium text-slate-800 capitalize">{result.filingStatus}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-100">
                                    <span className="text-slate-600">Federal SSI ({SITE.year})</span>
                                    <span className="font-medium text-slate-800">{formatCurrency(result.federalSSI)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-100">
                                    <span className="text-slate-600">State Supplement</span>
                                    <span className="font-medium text-teal-600">+{formatCurrency(result.stateSupplement)}</span>
                                </div>
                                {result.incomeDeduction > 0 && (
                                    <div className="flex justify-between py-2 border-b border-slate-100">
                                        <span className="text-slate-600">Income Deduction</span>
                                        <span className="font-medium text-red-500">-{formatCurrency(result.incomeDeduction)}</span>
                                    </div>
                                )}
                                <div className="flex justify-between pt-4 text-lg border-t border-slate-200">
                                    <span className="text-slate-800 font-bold">Total Monthly</span>
                                    <span className="font-bold text-teal-600">{formatCurrency(result.totalMonthly)}</span>
                                </div>
                                <div className="flex justify-between py-2 text-lg">
                                    <span className="text-slate-800 font-bold">Annual Benefits</span>
                                    <span className="font-bold text-teal-600">{formatCurrency(result.totalMonthly * 12)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Ad Placeholder */}
                <div className="my-8 p-6 bg-white border border-slate-200 rounded-xl text-center shadow-sm">
                    <p className="text-sm text-slate-400">Advertisement</p>
                </div>

                {/* Info Section */}
                <section className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                    <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <Info className="w-5 h-5 text-teal-600" />
                        SSI Eligibility Requirements
                    </h2>

                    <div className="space-y-3 text-sm">
                        <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                            <span className="text-teal-600"></span>
                            <div>
                                <p className="font-medium text-slate-800">Age or Disability</p>
                                <p className="text-slate-500">65+ years old, blind, or disabled</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                            <span className="text-teal-600"></span>
                            <div>
                                <p className="font-medium text-slate-800">Resource Limit</p>
                                <p className="text-slate-500">
                                    Under {formatCurrency(constants.ssi.resourceLimitIndividual)} (individual)
                                    or {formatCurrency(constants.ssi.resourceLimitCouple)} (couple)
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                            <span className="text-teal-600"></span>
                            <div>
                                <p className="font-medium text-slate-800">Limited Income</p>
                                <p className="text-slate-500">Income below SSI limits</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                            <span className="text-teal-600"></span>
                            <div>
                                <p className="font-medium text-slate-800">U.S. Resident</p>
                                <p className="text-slate-500">Must reside in the U.S.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <div className="mt-8 text-center">
                    <Link
                        href="/disability/ssdi-calculator"
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Calculate SSDI Benefits  →</Link>
                </div>

                {/* Disclaimer */}
                <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                    <div className="flex items-start gap-2">
                        <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
                        <p className="text-xs text-amber-800">
                            <strong>Disclaimer:</strong> This is an estimate only based on {SITE.year} SSA guidelines.
                            Not an official SSA tool. Contact the Social Security Administration for official benefit calculations.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
