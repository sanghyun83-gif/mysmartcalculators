"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Home, Calculator, Info, Plus, Trash2, Scale } from "lucide-react";
import {
    SITE,
    ASSET_TYPES,
    COMMUNITY_PROPERTY_STATES,
    calculatePropertyDivision,
    formatCurrency,
    parseFormattedNumber,
    AssetItem,
    DivisionResult
} from "@/lib/calculators/property-division";

export default function DivisionCalculatorPage() {
    const [assets, setAssets] = useState<AssetItem[]>([
        { name: "Home Equity", value: 0, type: "realEstate", isMarital: true },
    ]);
    const [state, setState] = useState("CA");
    const [customSplit, setCustomSplit] = useState(50);
    const [result, setResult] = useState<DivisionResult | null>(null);

    const communityStates: string[] = COMMUNITY_PROPERTY_STATES.map(s => s.abbr);
    const isCommunity = communityStates.includes(state);

    const addAsset = () => {
        setAssets([...assets, { name: "", value: 0, type: "realEstate", isMarital: true }]);
    };

    const removeAsset = (index: number) => {
        setAssets(assets.filter((_, i) => i !== index));
    };

    const updateAsset = (index: number, field: keyof AssetItem, value: string | number | boolean) => {
        const updated = [...assets];
        if (field === "value" && typeof value === "string") {
            updated[index].value = parseFormattedNumber(value);
        } else if (field === "name" && typeof value === "string") {
            updated[index].name = value;
        } else if (field === "type" && typeof value === "string") {
            updated[index].type = value as keyof typeof ASSET_TYPES;
        } else if (field === "isMarital" && typeof value === "boolean") {
            updated[index].isMarital = value;
        }
        setAssets(updated);
    };

    const handleCalculate = () => {
        setResult(calculatePropertyDivision(assets, state, customSplit));
    };

    return (
        <>
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/property-division" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <Home className="w-5 h-5 text-rose-500" />
                        <span className="text-lg font-bold text-white">Division Calculator</span>
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
                        {SITE.year} Property Division Calculator
                    </h1>
                    <p className="text-sm text-slate-400 mb-6">
                        Calculate how marital assets will be divided
                    </p>

                    {/* State Selection */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                            Your State
                        </label>
                        <select
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            className="w-full py-3 px-4 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-rose-500"
                        >
                            <optgroup label="Community Property States (50/50)">
                                {COMMUNITY_PROPERTY_STATES.map(s => (
                                    <option key={s.abbr} value={s.abbr}>{s.name}</option>
                                ))}
                            </optgroup>
                            <optgroup label="Equitable Distribution States">
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AR">Arkansas</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WV">West Virginia</option>
                                <option value="WY">Wyoming</option>
                            </optgroup>
                        </select>
                        <p className="text-xs text-slate-500 mt-1">
                            {isCommunity
                                ? "✓ Community Property: Assets split 50/50"
                                : "Equitable Distribution: Fair split based on factors"}
                        </p>
                    </div>

                    {/* Custom Split (for equitable states) */}
                    {!isCommunity && (
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Estimated Split: {customSplit}% / {100 - customSplit}%
                            </label>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={customSplit}
                                onChange={(e) => setCustomSplit(parseInt(e.target.value))}
                                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-rose-500"
                            />
                            <div className="flex justify-between text-xs text-slate-500 mt-1">
                                <span>Spouse 1: {customSplit}%</span>
                                <span>Spouse 2: {100 - customSplit}%</span>
                            </div>
                        </div>
                    )}

                    {/* Assets List */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-slate-300 mb-3">
                            Marital Assets
                        </label>

                        <div className="space-y-3">
                            {assets.map((asset, index) => (
                                <div key={index} className="flex gap-2 items-start">
                                    <div className="flex-1 space-y-2">
                                        <input
                                            type="text"
                                            value={asset.name}
                                            onChange={(e) => updateAsset(index, "name", e.target.value)}
                                            placeholder="Asset name (e.g., Home Equity)"
                                            className="w-full py-2 px-3 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm"
                                        />
                                        <div className="flex gap-2">
                                            <div className="relative flex-1">
                                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">$</span>
                                                <input
                                                    type="text"
                                                    value={asset.value ? asset.value.toLocaleString() : ""}
                                                    onChange={(e) => updateAsset(index, "value", e.target.value)}
                                                    placeholder="Value"
                                                    className="w-full pl-7 pr-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm"
                                                />
                                            </div>
                                            <select
                                                value={asset.type}
                                                onChange={(e) => updateAsset(index, "type", e.target.value)}
                                                className="py-2 px-3 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm"
                                            >
                                                {Object.entries(ASSET_TYPES).map(([key, type]) => (
                                                    <option key={key} value={key}>{type.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => removeAsset(index)}
                                        className="p-2 text-slate-400 hover:text-red-400 transition-colors"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={addAsset}
                            className="mt-3 flex items-center gap-2 text-rose-400 hover:text-rose-300 text-sm"
                        >
                            <Plus className="w-4 h-4" />
                            Add Asset
                        </button>
                    </div>

                    {/* Calculate Button */}
                    <button
                        onClick={handleCalculate}
                        className="w-full py-4 bg-rose-600 text-white rounded-lg font-semibold text-lg hover:bg-rose-700 transition-colors flex items-center justify-center gap-2"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate Division
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        {/* Summary Header */}
                        <div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white p-6">
                            <p className="text-sm text-rose-100 mb-1">{result.divisionType}</p>
                            <div className="flex justify-between items-end">
                                <div>
                                    <p className="text-xs text-rose-200">Spouse 1</p>
                                    <p className="text-3xl font-bold">{formatCurrency(result.spouse1Share)}</p>
                                </div>
                                <Scale className="w-8 h-8 text-rose-200" />
                                <div className="text-right">
                                    <p className="text-xs text-rose-200">Spouse 2</p>
                                    <p className="text-3xl font-bold">{formatCurrency(result.spouse2Share)}</p>
                                </div>
                            </div>
                        </div>

                        {/* Breakdown */}
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                                Division Breakdown
                            </h3>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Total Assets</span>
                                    <span className="font-medium text-white">{formatCurrency(result.totalAssets)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Marital Property</span>
                                    <span className="font-medium text-white">{formatCurrency(result.totalMarital)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Separate Property</span>
                                    <span className="font-medium text-slate-400">{formatCurrency(result.totalSeparate)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Division Type</span>
                                    <span className="font-medium text-rose-400">{result.isCommunityProperty ? "Community Property" : "Equitable Distribution"}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Split Ratio</span>
                                    <span className="font-medium text-white">{result.splitPercentage}% / {100 - result.splitPercentage}%</span>
                                </div>
                            </div>
                        </div>

                        {/* Note */}
                        <div className="p-4 bg-blue-900/30 border-t border-blue-700/50">
                            <div className="flex items-start gap-2 text-sm">
                                <Info className="w-4 h-4 text-blue-400 mt-0.5" />
                                <p className="text-blue-200">
                                    <strong>Note:</strong> Retirement accounts (401k, pension) may require a QDRO for division.
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
                        <Info className="w-5 h-5 text-rose-500" />
                        Property Division FAQ
                    </h2>

                    <div className="space-y-4 text-sm">
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What is community property?
                            </h3>
                            <p className="text-slate-400">
                                In community property states, all assets acquired during marriage
                                are considered equally owned by both spouses and split 50/50.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What is &quot;separate property&quot;?
                            </h3>
                            <p className="text-slate-400">
                                Property owned before marriage, inheritances, and gifts to one spouse
                                are typically considered separate property and not divided.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What is a QDRO?
                            </h3>
                            <p className="text-slate-400">
                                A Qualified Domestic Relations Order is a court order required to
                                divide retirement accounts like 401(k)s without tax penalties.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    This calculator provides estimates. Actual division depends on many factors.
                    Consult a divorce attorney for your specific situation.
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
                                name: "What is community property in divorce?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "In community property states, all assets acquired during marriage are considered equally owned by both spouses and split 50/50.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What is a QDRO?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "A Qualified Domestic Relations Order is a court order required to divide retirement accounts like 401(k)s without tax penalties.",
                                },
                            },
                        ],
                    }),
                }}
            />
        </>
    );
}
