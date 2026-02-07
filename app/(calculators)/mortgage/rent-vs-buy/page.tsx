"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Scale, Home, Building } from "lucide-react";
import {
    MORTGAGE_CONSTANTS,
    calculateRentVsBuy,
    formatCurrency,
    parseFormattedNumber,
    RentVsBuyResult
} from "@/lib/calculators/mortgage";

export default function RentVsBuyPage() {
    const { defaults } = MORTGAGE_CONSTANTS;
    const [monthlyRent, setMonthlyRent] = useState("2,000");
    const [homePrice, setHomePrice] = useState("400,000");
    const [downPayment, setDownPayment] = useState("80,000");
    const [interestRate, setInterestRate] = useState(defaults.interestRate.toString());
    const [result, setResult] = useState<RentVsBuyResult | null>(null);

    const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const raw = e.target.value.replace(/[^0-9]/g, "");
            if (raw === "") { setter(""); return; }
            setter(parseInt(raw).toLocaleString("en-US"));
        };

    const handleCalculate = () => {
        const rent = parseFormattedNumber(monthlyRent) || 2000;
        const price = parseFormattedNumber(homePrice) || 400000;
        const dp = parseFormattedNumber(downPayment) || 80000;
        const rate = parseFloat(interestRate) || defaults.interestRate;
        setResult(calculateRentVsBuy(rent, price, dp, rate));
    };

    return (
        <>
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                <h1 className="text-xl font-bold text-slate-800 mb-2">Should You Rent or Buy?</h1>
                <p className="text-sm text-slate-500 mb-6">Compare 5-year costs of renting vs buying</p>

                <div className="space-y-4 mb-6">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Current Monthly Rent</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                            <input type="text" value={monthlyRent} onChange={handleInputChange(setMonthlyRent)}
                                className="w-full pl-8 pr-4 py-4 text-lg border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Home Price</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                            <input type="text" value={homePrice} onChange={handleInputChange(setHomePrice)}
                                className="w-full pl-8 pr-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Down Payment</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input type="text" value={downPayment} onChange={handleInputChange(setDownPayment)}
                                    className="w-full pl-8 pr-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Interest Rate (%)</label>
                            <input type="number" step="0.125" value={interestRate} onChange={(e) => setInterestRate(e.target.value)}
                                className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                        </div>
                    </div>
                </div>

                <button onClick={handleCalculate}
                    className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold flex items-center justify-center gap-2">
                    <Scale className="w-5 h-5" />
                    Compare Costs
                </button>
            </div>

            {result && (
                <div className="mt-6 space-y-4">
                    {/* Recommendation */}
                    <div className={`rounded-xl p-6 text-center text-white ${result.recommendation === 'buy' ? 'bg-green-600' :
                        result.recommendation === 'rent' ? 'bg-blue-600' : 'bg-slate-600'
                        }`}>
                        <p className="text-sm opacity-80">Our Recommendation</p>
                        <p className="text-3xl font-bold capitalize">
                            {result.recommendation === 'similar' ? 'Either Works' : result.recommendation.toUpperCase()}
                        </p>
                    </div>

                    {/* Comparison Cards */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white rounded-xl p-6 border-2 border-blue-200">
                            <div className="flex items-center gap-2 mb-3">
                                <Building className="w-5 h-5 text-blue-600" />
                                <span className="font-semibold text-slate-800">Rent</span>
                            </div>
                            <p className="text-sm text-slate-500">Monthly</p>
                            <p className="text-xl font-bold text-slate-800">{formatCurrency(result.monthlyRent)}</p>
                            <p className="text-sm text-slate-500 mt-2">5-Year Cost</p>
                            <p className="text-lg font-bold text-blue-600">{formatCurrency(result.fiveYearCostRent)}</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 border-2 border-green-200">
                            <div className="flex items-center gap-2 mb-3">
                                <Home className="w-5 h-5 text-green-600" />
                                <span className="font-semibold text-slate-800">Buy</span>
                            </div>
                            <p className="text-sm text-slate-500">Monthly</p>
                            <p className="text-xl font-bold text-slate-800">{formatCurrency(result.monthlyMortgage)}</p>
                            <p className="text-sm text-slate-500 mt-2">5-Year Net Cost</p>
                            <p className="text-lg font-bold text-green-600">{formatCurrency(result.fiveYearCostBuy)}</p>
                        </div>
                    </div>

                    <div className="bg-slate-100 rounded-xl p-4 text-center text-sm text-slate-600">
                        Assumes {result.yearlyRentIncrease}% annual rent increase and {result.homeAppreciation}% home appreciation
                    </div>
                </div>
            )}

            <div className="my-8 p-6 bg-white border border-slate-200 rounded-xl text-center">
                <p className="text-sm text-slate-400">Advertisement</p>
            </div>
        </>
    );
}
