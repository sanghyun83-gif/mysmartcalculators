"use client";

import { useState } from "react";
import { Scale, Calculator, Info, AlertTriangle } from "lucide-react";
import {
    SITE,
    calculateAlimony,
    formatCurrency,
    parseFormattedNumber,
    getStatesList,
    AlimonyResult
} from "@/lib/calculators/alimony";
import { STATE_ALIMONY_DATA } from "@/lib/calculators/alimony/state-data";

export default function AlimonyCalculatorPage() {
    const [payerIncome, setPayerIncome] = useState("");
    const [recipientIncome, setRecipientIncome] = useState("");
    const [marriageYears, setMarriageYears] = useState(10);
    const [state, setState] = useState("CA");
    const [result, setResult] = useState<AlimonyResult | null>(null);

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
        const payer = parseFormattedNumber(payerIncome) || 10000;
        const recipient = parseFormattedNumber(recipientIncome) || 3000;
        setResult(calculateAlimony(payer, recipient, marriageYears, state));
    };

    return (
        <main className="max-w-2xl mx-auto px-4 py-8">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <h1 className="text-xl font-bold text-white mb-2">
                    {SITE.year} Alimony Calculator
                </h1>
                <p className="text-sm text-slate-400 mb-6">
                    Estimate your monthly spousal support payment or entitlement
                </p>

                <div className="space-y-5 mb-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">State</label>
                        <select
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            className="w-full py-3 px-4 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-rose-500"
                        >
                            {getStatesList().map((s) => (
                                <option key={s.code} value={s.code}>{s.name}</option>
                            ))}
                        </select>
                        {STATE_ALIMONY_DATA[state] && (
                            <p className="text-xs text-slate-500 mt-1">
                                Formula: {STATE_ALIMONY_DATA[state].formula}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Higher Monthly Gross Income</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                            <input
                                type="text"
                                value={payerIncome}
                                onChange={handleInputChange(setPayerIncome)}
                                placeholder="10,000"
                                className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Lower Monthly Gross Income</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                            <input
                                type="text"
                                value={recipientIncome}
                                onChange={handleInputChange(setRecipientIncome)}
                                placeholder="3,000"
                                className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Marriage Length: {marriageYears} years</label>
                        <input
                            type="range"
                            min="1"
                            max="40"
                            value={marriageYears}
                            onChange={(e) => setMarriageYears(parseInt(e.target.value))}
                            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-rose-500"
                        />
                    </div>
                </div>

                <button
                    onClick={handleCalculate}
                    className="w-full py-4 bg-rose-600 text-white rounded-lg font-semibold hover:bg-rose-700 transition flex items-center justify-center gap-2"
                >
                    <Calculator className="w-5 h-5" />
                    Calculate Alimony
                </button>
            </div>

            {result && (
                <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                    <div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white p-6 text-center">
                        <p className="text-sm text-rose-100 mb-1">Estimated Monthly Support</p>
                        <p className="text-4xl font-bold">{formatCurrency(result.monthlyAlimony)}/mo</p>
                        <p className="text-sm text-rose-100 mt-2">
                            Duration: ~{result.estimatedDurationYears} years | Total: {formatCurrency(result.totalAlimony)}
                        </p>
                    </div>

                    <div className="p-6 space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="p-3 bg-slate-700/50 rounded-lg">
                                <p className="text-slate-400">Payer Net</p>
                                <p className="text-white font-bold">{formatCurrency(result.payerNetIncome)}</p>
                            </div>
                            <div className="p-3 bg-slate-700/50 rounded-lg">
                                <p className="text-slate-400">Recipient Net</p>
                                <p className="text-white font-bold">{formatCurrency(result.recipientNetIncome)}</p>
                            </div>
                        </div>

                        {STATE_ALIMONY_DATA[state] && (
                            <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-lg">
                                <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                                    <Scale className="w-4 h-4 text-rose-500" />
                                    {STATE_ALIMONY_DATA[state].name} Rules
                                </h3>
                                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
                                    <span className="text-slate-400">Formula Model:</span>
                                    <span className="text-white text-right">{STATE_ALIMONY_DATA[state].model}</span>
                                    <span className="text-slate-400">Cohabitation:</span>
                                    <span className="text-white text-right">{STATE_ALIMONY_DATA[state].cohabitationImpact}</span>
                                    <span className="text-slate-400">Remarriage:</span>
                                    <span className="text-red-400 text-right font-bold">{STATE_ALIMONY_DATA[state].remarriageImpact}</span>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="p-4 bg-amber-900/30 border-t border-amber-700/50 flex gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />
                        <p className="text-xs text-amber-200">
                            <strong>Note:</strong> Since 2019, alimony is NOT tax-deductible for the payer or taxable for the recipient.
                        </p>
                    </div>
                </div>
            )}

            <section className="mt-8 bg-slate-800 rounded-xl border border-slate-700 p-6">
                <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Info className="w-5 h-5 text-rose-500" />
                    FAQ
                </h2>
                <div className="space-y-4 text-sm text-slate-400">
                    <p><strong className="text-white text-sm block mb-1">How is alimony calculated?</strong> State laws vary. Guidelines often use 20-40% of income difference.</p>
                    <p><strong className="text-white text-sm block mb-1">How long does it last?</strong> Typically 30% to 50% of the marriage length.</p>
                </div>
            </section>
        </main>
    );
}
