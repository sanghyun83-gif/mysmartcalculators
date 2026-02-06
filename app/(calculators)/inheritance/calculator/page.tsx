"use client";

import { useState } from "react";
import Link from "next/link";
import { Landmark, Calculator, ArrowRight, DollarSign, Scale, AlertTriangle, CheckCircle2 } from "lucide-react";
import {
    SITE,
    FAQS,
    calculateInheritanceTax,
    getStatesList,
    formatCurrency,
    InheritanceCalculationResult
} from "@/lib/calculators/inheritance";
import { STATE_TAX_DATA } from "@/lib/calculators/inheritance/state-data";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function InheritanceCalculatorPage() {
    const [inheritanceValue, setInheritanceValue] = useState(500000);
    const [relationship, setRelationship] = useState<"spouse" | "child" | "other">("child");
    const [state, setState] = useState("PA");
    const [result, setResult] = useState<InheritanceCalculationResult | null>(null);

    const handleCalculate = () => {
        setResult(calculateInheritanceTax(inheritanceValue, state, relationship));
    };

    return (
        <>
            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/50 rounded-full px-4 py-2 mb-4">
                            <Landmark className="w-4 h-4 text-emerald-400" />
                            <span className="text-sm text-emerald-300">{SITE.year} Calculator</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">Inheritance Tax Calculator</h1>
                        <p className="text-slate-400">Calculate 2026 taxes on inherited assets by state</p>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
                        <div className="space-y-6">
                            {/* State Selection */}
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">State of Deceased</label>
                                <select
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                    className="w-full py-3 px-4 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                                >
                                    {getStatesList().map((s) => (
                                        <option key={s.code} value={s.code}>{s.name}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Inheritance Value */}
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Inheritance Value: {formatCurrency(inheritanceValue)}</label>
                                <input
                                    type="range"
                                    min="10000"
                                    max="5000000"
                                    step="10000"
                                    value={inheritanceValue}
                                    onChange={(e) => setInheritanceValue(Number(e.target.value))}
                                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                                />
                                <div className="flex justify-between text-xs text-slate-500 mt-2">
                                    <span>$10k</span>
                                    <span>$2.5M</span>
                                    <span>$5M+</span>
                                </div>
                            </div>

                            {/* Relationship */}
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Recipient Relationship to Deceased</label>
                                <div className="grid grid-cols-3 gap-2">
                                    <button
                                        onClick={() => setRelationship("spouse")}
                                        className={`px-4 py-3 rounded-lg text-sm font-medium flex items-center justify-center transition-all ${relationship === "spouse" ? "bg-emerald-600 text-white ring-2 ring-emerald-400" : "bg-slate-700 text-slate-300 hover:bg-slate-600"}`}
                                    >
                                        Spouse
                                    </button>
                                    <button
                                        onClick={() => setRelationship("child")}
                                        className={`px-4 py-3 rounded-lg text-sm font-medium flex items-center justify-center transition-all ${relationship === "child" ? "bg-emerald-600 text-white ring-2 ring-emerald-400" : "bg-slate-700 text-slate-300 hover:bg-slate-600"}`}
                                    >
                                        Child/Direct
                                    </button>
                                    <button
                                        onClick={() => setRelationship("other")}
                                        className={`px-4 py-3 rounded-lg text-sm font-medium flex items-center justify-center transition-all ${relationship === "other" ? "bg-emerald-600 text-white ring-2 ring-emerald-400" : "bg-slate-700 text-slate-300 hover:bg-slate-600"}`}
                                    >
                                        Other/Friend
                                    </button>
                                </div>
                                <p className="text-[10px] text-slate-500 mt-2 italic">
                                    * Relationship determines tax class and exemptions in states with inheritance tax.
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={handleCalculate}
                            className="w-full mt-8 bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/20 transition-all hover:-translate-y-0.5"
                        >
                            <Calculator className="w-5 h-5" /> Calculate Tax Liability
                        </button>
                    </div>

                    {result && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden mb-8">
                                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 text-center">
                                    <p className="text-emerald-100 text-sm mb-1 font-medium">Net Inheritance After Tax</p>
                                    <p className="text-4xl font-bold text-white">{formatCurrency(result.netInheritance)}</p>
                                    <p className="text-emerald-100/80 text-xs mt-2 uppercase tracking-wider font-bold">
                                        Estimated Total Tax: {formatCurrency(result.totalTax)}
                                    </p>
                                </div>

                                <div className="p-6">
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div className="p-4 bg-slate-700/30 rounded-lg">
                                            <p className="text-slate-400 text-xs font-semibold uppercase mb-1">State Inheritance Tax</p>
                                            <p className="text-xl font-bold text-white">{formatCurrency(result.inheritanceTax)}</p>
                                        </div>
                                        <div className="p-4 bg-slate-700/30 rounded-lg">
                                            <p className="text-slate-400 text-xs font-semibold uppercase mb-1">State Estate Tax</p>
                                            <p className="text-xl font-bold text-white">{formatCurrency(result.estateTax)}</p>
                                        </div>
                                    </div>

                                    {/* State Expert Block */}
                                    <div className="bg-slate-900/50 rounded-xl p-5 border border-slate-700">
                                        <div className="flex items-center gap-2 mb-4">
                                            <Scale className="w-5 h-5 text-emerald-400" />
                                            <h3 className="font-bold text-white uppercase tracking-tight text-sm">2026 {result.stateName} Death Tax Profile</h3>
                                        </div>

                                        <div className="grid grid-cols-2 gap-y-3 text-sm">
                                            <div className="flex flex-col">
                                                <span className="text-slate-500 text-xs">Inheritance Tax</span>
                                                <span className={`font-medium ${result.hasInheritanceTax ? 'text-rose-400' : 'text-emerald-400'}`}>
                                                    {result.hasInheritanceTax ? 'YES (Active)' : 'NO'}
                                                </span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-slate-500 text-xs">Estate Tax</span>
                                                <span className={`font-medium ${result.hasEstateTax ? 'text-amber-400' : 'text-emerald-400'}`}>
                                                    {result.hasEstateTax ? 'YES (Active)' : 'NO'}
                                                </span>
                                            </div>
                                            <div className="flex flex-col col-span-2 pt-2 border-t border-slate-800">
                                                <span className="text-slate-500 text-xs">Inheritance Rates</span>
                                                <span className="text-white font-medium">{result.inheritanceRates}</span>
                                            </div>
                                            <div className="flex flex-col col-span-2">
                                                <span className="text-slate-500 text-xs">Exemptions</span>
                                                <span className="text-white/80 text-xs">{result.inheritanceExemptions}</span>
                                            </div>
                                        </div>

                                        <div className="mt-4 pt-3 border-t border-slate-800 flex items-start gap-2">
                                            <Info className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                                            <p className="text-[11px] text-slate-400 leading-relaxed italic">
                                                * Federal estate tax is not calculated here as it primarily affects estates over $13.61M.
                                                Spouses are generally exempt from all state and federal death taxes.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="p-4 bg-amber-900/20 border border-amber-500/30 rounded-xl mb-8 flex gap-3">
                        <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                        <div>
                            <p className="text-sm font-bold text-amber-200">2026 TCJA Expiration Alert</p>
                            <p className="text-xs text-amber-200/80 leading-relaxed">
                                Federal estate tax exemptions are scheduled to sunset at the end of 2026. This calculator uses the projected 2026 inflation-adjusted figures assuming current law expires.
                            </p>
                        </div>
                    </div>

                    <LegalDisclaimer category="insurance" />
                </div>
            </section>

            <section className="py-12 px-4 bg-slate-800/30 border-t border-slate-700">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white text-center mb-8 flex items-center justify-center gap-2">
                        <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                        Inheritance FAQ
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {FAQS.map((faq, index) => (
                            <div key={index} className="bg-slate-800 border border-slate-700 rounded-xl p-5 hover:border-emerald-500/50 transition-colors">
                                <h3 className="font-bold text-white text-sm mb-2">{faq.question}</h3>
                                <p className="text-slate-400 text-xs leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

