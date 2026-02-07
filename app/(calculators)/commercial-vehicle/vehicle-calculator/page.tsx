"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calculator, Info, Truck } from "lucide-react";
import { SITE, COMMERCIAL_2026, calculateVehicleSettlement, formatCurrency, VehicleResult } from "@/lib/calculators/commercial-vehicle";

export default function VehicleCalculatorPage() {
    const [vehicleIndex, setVehicleIndex] = useState(0);
    const [injuryIndex, setInjuryIndex] = useState(3);
    const [liabilityIndex, setLiabilityIndex] = useState(0);
    const [medicalBills, setMedicalBills] = useState("75,000");
    const [result, setResult] = useState<VehicleResult | null>(null);

    const handleMedicalChange = (e: React.ChangeEvent<HTMLInputElement>) => { const raw = e.target.value.replace(/[^0-9]/g, ""); setMedicalBills(raw === "" ? "" : parseInt(raw).toLocaleString("en-US")); };
    const parseVal = (val: string) => parseInt(val.replace(/[^0-9]/g, "")) || 0;
    const handleCalculate = () => { setResult(calculateVehicleSettlement(vehicleIndex, injuryIndex, liabilityIndex, parseVal(medicalBills))); };

    return (
        <>

            <main className="max-w-2xl mx-auto px-4 py-8">
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">Commercial Vehicle Settlement Calculator</h1>
                    <p className="text-sm text-slate-400 mb-6">Estimate your delivery/commercial truck compensation</p>

                    <div className="space-y-5 mb-6">
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Vehicle Type</label><select value={vehicleIndex} onChange={(e) => setVehicleIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{COMMERCIAL_2026.vehicleTypes.map((v, i) => (<option key={i} value={i}>{v.type}</option>))}</select><p className="text-xs text-slate-500 mt-1">{COMMERCIAL_2026.vehicleTypes[vehicleIndex].description}</p></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Injury Type</label><select value={injuryIndex} onChange={(e) => setInjuryIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{COMMERCIAL_2026.injuryTypes.map((inj, i) => (<option key={i} value={i}>{inj.injury}</option>))}</select></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Liability Factors</label><select value={liabilityIndex} onChange={(e) => setLiabilityIndex(parseInt(e.target.value))} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white">{COMMERCIAL_2026.liabilityFactors.map((l, i) => (<option key={i} value={i}>{l.factor} ({l.multiplier}x)</option>))}</select></div>
                        <div><label className="block text-sm font-medium text-slate-300 mb-2">Medical Bills</label><div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span><input type="text" value={medicalBills} onChange={handleMedicalChange} className="w-full pl-8 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white" /></div></div>
                    </div>

                    <button onClick={handleCalculate} className="w-full py-4 bg-amber-600 text-white rounded-lg font-semibold text-lg hover:bg-amber-700 flex items-center justify-center gap-2"><Calculator className="w-5 h-5" />Calculate Settlement</button>
                </div>

                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-6 text-center">
                            <p className="text-sm opacity-80 mb-1">Estimated Settlement Range</p>
                            <p className="text-3xl font-bold">{formatCurrency(result.totalLow)} - {formatCurrency(result.totalHigh)}</p>
                            <p className="text-sm opacity-80 mt-2">Mid-range: {formatCurrency(result.totalMid)}</p>
                        </div>
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Breakdown</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Base Damages ({result.vehicleType})</span><span className="font-medium text-white">{formatCurrency(result.baseDamages)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Medical Costs (2.5x)</span><span className="font-medium text-white">{formatCurrency(result.medicalCosts)}</span></div>
                                <div className="flex justify-between py-2 border-b border-slate-700"><span className="text-slate-300">Injury Factor ({result.injuryType})</span><span className="font-medium text-amber-400">{formatCurrency(result.injuryBonus)}</span></div>
                                <div className="flex justify-between py-2"><span className="text-slate-300">Liability Factor</span><span className="font-medium text-amber-400">{formatCurrency(result.liabilityBonus)}</span></div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center"><p className="text-sm text-slate-500">Advertisement</p></div>

                <section className="bg-slate-800 rounded-xl border border-slate-700 p-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><Info className="w-5 h-5 text-amber-500" />Commercial Vehicle FAQ</h2>
                    <div className="space-y-4 text-sm">
                        <div><h3 className="font-semibold text-white mb-1">Who is liable in a delivery truck accident?</h3><p className="text-slate-400">The driver, the delivery company (Amazon, FedEx, UPS), and potentially third-party contractors can all be held liable under respondeat superior and negligent hiring theories.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">Are Amazon delivery drivers employees?</h3><p className="text-slate-400">Most are employed by Delivery Service Partners (DSPs), but Amazon can still be held liable. Recent lawsuits have successfully argued Amazon controls the drivers' work conditions.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">What if the driver violated FMCSA rules?</h3><p className="text-slate-400">Hours of Service violations, improper licensing, or vehicle maintenance failures can significantly increase your settlement by proving negligence.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">How long do I have to file a claim?</h3><p className="text-slate-400">Most states allow 2-3 years, but evidence preservation is critical. Contact an attorney immediately to investigate.</p></div>
                        <div><h3 className="font-semibold text-white mb-1">What damages can I recover?</h3><p className="text-slate-400">Medical expenses, lost wages, pain and suffering, property damage, and in severe cases, punitive damages for egregious negligence.</p></div>
                    </div>
                </section>
            </main>
        </>
    );
}
