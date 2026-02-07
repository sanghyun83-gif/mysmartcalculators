"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Users } from "lucide-react";
import { SITE, AUTO_INSURANCE_CONSTANTS, getAgeComparison, formatCurrency } from "@/lib/calculators/auto-insurance";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function ByAgePage() {
    const states = Object.keys(AUTO_INSURANCE_CONSTANTS.stateRates).sort();
    const [selectedState, setSelectedState] = useState("California");
    const ageData = getAgeComparison(selectedState);

    return (
        <div className="min-h-screen bg-slate-50">

            <main className="max-w-2xl mx-auto px-4 py-8">
                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm mb-6">
                    <h1 className="text-xl font-bold text-slate-800 mb-2">
                        How Age Affects Auto Insurance Rates
                    </h1>
                    <p className="text-sm text-slate-500 mb-4">
                        Younger drivers pay significantly more. See how rates change with age.
                    </p>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Select State</label>
                        <select
                            value={selectedState}
                            onChange={(e) => setSelectedState(e.target.value)}
                            className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg bg-white"
                        >
                            {states.map(s => (
                                <option key={s} value={s}>{s}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Age Chart Visual */}
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden mb-6">
                    <div className="p-4 bg-slate-100 border-b border-slate-200">
                        <h3 className="font-bold text-slate-800">Annual Premium by Age in {selectedState}</h3>
                    </div>

                    <div className="p-4">
                        {ageData.map((item) => {
                            const maxPremium = ageData[0].annualPremium;
                            const widthPercent = (item.annualPremium / maxPremium) * 100;

                            return (
                                <div key={item.age} className="mb-3 last:mb-0">
                                    <div className="flex items-center justify-between text-sm mb-1">
                                        <span className="font-medium text-slate-700">Age {item.age}</span>
                                        <span className="font-bold text-slate-800">{formatCurrency(item.annualPremium)}/yr</span>
                                    </div>
                                    <div className="h-6 bg-slate-100 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full rounded-full ${item.multiplier > 1.5 ? 'bg-red-500' :
                                                item.multiplier > 1.0 ? 'bg-amber-500' :
                                                    'bg-green-500'
                                                }`}
                                            style={{ width: `${widthPercent}%` }}
                                        />
                                    </div>
                                    <p className="text-xs text-slate-500 mt-0.5">
                                        {item.multiplier > 1 ? `+${Math.round((item.multiplier - 1) * 100)}%` : `${Math.round((1 - item.multiplier) * 100)}% less`} vs age 25
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Key Insights */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
                    <h3 className="font-bold text-blue-800 mb-3">Key Insights</h3>
                    <ul className="space-y-2 text-sm text-blue-700">
                        <li>• <strong>Teen drivers (16-19)</strong> pay 70-150% more than adults</li>
                        <li>• <strong>Age 25</strong> is the magic number when rates drop significantly</li>
                        <li>• <strong>Ages 30-50</strong> typically get the best rates</li>
                        <li>• <strong>Seniors (65+)</strong> see gradual rate increases</li>
                    </ul>
                </div>

                <div className="my-8 p-6 bg-white border border-slate-200 rounded-xl text-center">
                    <p className="text-sm text-slate-400">Advertisement</p>
                </div>

                <div className="text-center">
                    <Link href="/auto-insurance/calculator" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">
                        Calculate Your Rate →
                    </Link>
                </div>
            </main>
        </div>
    );
}
