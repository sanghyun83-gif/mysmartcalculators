"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calculator, Info, AlertTriangle, Stethoscope, Zap, Gavel, Shield } from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import {
    SITE,
    MALPRACTICE_CONSTANTS,
    formatCurrency,
    parseFormattedNumber,
    getSeverityLabel,
    getSeverityColor,
    calculateSettlement,
    SettlementResult
} from "@/lib/calculators/malpractice";

export default function MalpracticeSettlementPage() {
    const [medicalExpenses, setMedicalExpenses] = useState("");
    const [futureCareCosts, setFutureCareCosts] = useState("");
    const [lostWages, setLostWages] = useState("");
    const [severity, setSeverity] = useState<"minor" | "moderate" | "severe" | "catastrophic">("severe");
    const [hasAttorney, setHasAttorney] = useState(true);

    // Expert Toggles
    const [isNeverEvent, setIsNeverEvent] = useState(false);
    const [hasExpertAffidavit, setHasExpertAffidavit] = useState(false);
    const [applyFutureCareMultiplier, setApplyFutureCareMultiplier] = useState(false);
    const [isMultipleDefendants, setIsMultipleDefendants] = useState(false);

    const [result, setResult] = useState<SettlementResult | null>(null);

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
        const medical = parseFormattedNumber(medicalExpenses) || 50000;
        const future = parseFormattedNumber(futureCareCosts) || 0;
        const wages = parseFormattedNumber(lostWages) || 0;

        const settlementResult = calculateSettlement(
            medical,
            future,
            wages,
            0, // futureLostEarnings (not used in current UI but available in lib)
            severity,
            hasAttorney,
            isNeverEvent,
            hasExpertAffidavit,
            applyFutureCareMultiplier,
            isMultipleDefendants
        );

        setResult(settlementResult);
    };

    const severityOptions = [
        { value: "minor", label: "Stage 1", desc: "Temporary injury, full recovery", multiplier: "1.5-3x" },
        { value: "moderate", label: "Stage 2", desc: "Extended treatment needed", multiplier: "3-5x" },
        { value: "severe", label: "Stage 3", desc: "Permanent injury, disability", multiplier: "5-10x" },
        { value: "catastrophic", label: "Stage 4", desc: "Death or total disability", multiplier: "10-25x" },
    ];

    return (
        <>

            <main className="max-w-2xl mx-auto px-4 py-8">
                {/* Calculator Card */}
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">
                        {SITE.year} Medical Malpractice Settlement Calculator
                    </h1>
                    <p className="text-sm text-slate-400 mb-6">
                        Estimate your malpractice settlement for surgical errors, misdiagnosis, and more
                    </p>

                    {/* Inputs */}
                    <div className="space-y-5 mb-6">
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
                                    onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
                                    placeholder="50,000"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                                />
                            </div>
                            <p className="text-xs text-slate-500 mt-1">
                                Include all hospital bills, surgery costs, therapy, and medication
                            </p>
                        </div>

                        {/* Future Care Costs */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Future Care Costs (Optional)
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                                <input
                                    type="text"
                                    value={futureCareCosts}
                                    onChange={handleInputChange(setFutureCareCosts)}
                                    onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
                                    placeholder="0"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                                />
                            </div>
                            <p className="text-xs text-slate-500 mt-1">
                                Estimated ongoing medical care, rehabilitation, and equipment
                            </p>
                        </div>

                        {/* Lost Wages */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Lost Wages & Future Earnings (Optional)
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                                <input
                                    type="text"
                                    value={lostWages}
                                    onChange={handleInputChange(setLostWages)}
                                    onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
                                    placeholder="0"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                                />
                            </div>
                        </div>

                        {/* Injury Severity */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Injury Severity
                            </label>
                            <div className="grid grid-cols-2 gap-2">
                                {severityOptions.map((opt) => (
                                    <button
                                        key={opt.value}
                                        type="button"
                                        onClick={() => setSeverity(opt.value as typeof severity)}
                                        className={`py-3 px-3 rounded-lg border font-medium transition text-left ${severity === opt.value
                                            ? "bg-amber-600 text-white border-amber-600"
                                            : "bg-slate-700 text-slate-300 border-slate-600 hover:border-amber-500"
                                            }`}
                                    >
                                        <div className="text-sm font-semibold">{opt.label}</div>
                                        <div className="text-xs opacity-75">{opt.desc}</div>
                                        <div className="text-xs mt-1 text-amber-300">{opt.multiplier}</div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Expert Audit Toggles */}
                        <div className="p-6 bg-amber-500/5 border border-amber-500/20 rounded-2xl space-y-6">
                            <div className="flex items-center gap-2 mb-2">
                                <Zap className="w-4 h-4 text-amber-500" />
                                <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest">Expert Case Audit (+α)</span>
                            </div>

                            <div className="grid gap-4">
                                {[
                                    { id: "never", label: "Never-Event (Surgical Sponge, Wrong Site)", state: isNeverEvent, setter: setIsNeverEvent, desc: "+50% Multiplier" },
                                    { id: "affidavit", label: "Specialist Expert Affidavit Required", state: hasExpertAffidavit, setter: setHasExpertAffidavit, desc: "+35% Multiplier" },
                                    { id: "future", label: "Long-term Future Care Projection", state: applyFutureCareMultiplier, setter: setApplyFutureCareMultiplier, desc: "+20% Multiplier" },
                                    { id: "multi", label: "Multiple Defendants (Hospital + Doctor)", state: isMultipleDefendants, setter: setIsMultipleDefendants, desc: "+15% Multiplier" }
                                ].map((toggle) => (
                                    <button
                                        key={toggle.id}
                                        onClick={() => toggle.setter(!toggle.state)}
                                        className={`flex items-center justify-between p-4 rounded-xl border transition-all ${toggle.state
                                                ? "bg-amber-500/10 border-amber-500/40"
                                                : "bg-slate-800/50 border-white/5 hover:border-white/10"
                                            }`}
                                    >
                                        <div className="text-left">
                                            <div className={`text-xs font-bold ${toggle.state ? "text-amber-400" : "text-slate-300"}`}>
                                                {toggle.label}
                                            </div>
                                            <div className="text-[10px] text-slate-500 font-medium">{toggle.desc}</div>
                                        </div>
                                        <div className={`w-10 h-5 rounded-full relative transition-colors ${toggle.state ? "bg-amber-500" : "bg-slate-700"}`}>
                                            <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${toggle.state ? "left-6" : "left-1"}`} />
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Attorney Toggle */}
                        <div className="flex items-center justify-between p-6 bg-slate-900 border border-white/5 rounded-2xl">
                            <div>
                                <p className="text-sm font-bold text-white italic">Legal Representation</p>
                                <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider mt-1">Boosts valuation by ~3x on average</p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setHasAttorney(!hasAttorney)}
                                className={`w-14 h-8 rounded-full transition-colors relative ${hasAttorney ? "bg-amber-600 shadow-lg shadow-amber-500/20" : "bg-slate-700"}`}
                            >
                                <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all shadow-md ${hasAttorney ? "left-7" : "left-1"}`} />
                            </button>
                        </div>
                    </div>

                    {/* Calculate Button */}
                    <button
                        onClick={handleCalculate}
                        className="w-full py-4 bg-amber-600 text-white rounded-lg font-semibold text-lg hover:bg-amber-700 transition-colors flex items-center justify-center gap-2"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate Malpractice Settlement
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-6">
                            <p className="text-sm text-amber-100 mb-1">Estimated Malpractice Settlement</p>
                            <p className="text-4xl font-bold">{formatCurrency(result.netSettlement)}</p>
                            <p className="text-sm text-amber-100 mt-2">
                                Range: {formatCurrency(result.settlementRange.min)} - {formatCurrency(result.settlementRange.max)}
                            </p>
                        </div>

                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                                Settlement Breakdown
                            </h3>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Medical Expenses</span>
                                    <span className="font-medium text-white">{formatCurrency(result.medicalExpenses)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Future Care Costs</span>
                                    <span className="font-medium text-white">{formatCurrency(result.futureCareCosts)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-white/5">
                                    <span className="text-slate-400">Lost Wages</span>
                                    <span className="font-bold text-white">{formatCurrency(result.lostWages)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-white/5">
                                    <span className="text-slate-400">Pain & Suffering ({result.painSufferingMultiplier}x)</span>
                                    <span className="font-bold text-amber-500">+{formatCurrency(result.painSufferingAmount)}</span>
                                </div>

                                {/* Expert Delta Display */}
                                {result.totalExpertDelta > 0 && (
                                    <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-2xl space-y-2 mt-4">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Zap className="w-3 h-3 text-amber-500 fill-amber-500" />
                                            <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest">Expert Delta Audit</span>
                                        </div>
                                        {result.neverEventImpact > 0 && (
                                            <div className="flex justify-between text-[11px] font-bold">
                                                <span className="text-slate-400">Never-Event Bonus</span>
                                                <span className="text-emerald-400">+{formatCurrency(result.neverEventImpact)}</span>
                                            </div>
                                        )}
                                        {result.expertAffidavitImpact > 0 && (
                                            <div className="flex justify-between text-[11px] font-bold">
                                                <span className="text-slate-400">Expert Affidavit Impact</span>
                                                <span className="text-emerald-400">+{formatCurrency(result.expertAffidavitImpact)}</span>
                                            </div>
                                        )}
                                        {result.futureCareImpact > 0 && (
                                            <div className="flex justify-between text-[11px] font-bold">
                                                <span className="text-slate-400">Future Care Projection</span>
                                                <span className="text-emerald-400">+{formatCurrency(result.futureCareImpact)}</span>
                                            </div>
                                        )}
                                        {result.multiDefendantImpact > 0 && (
                                            <div className="flex justify-between text-[11px] font-bold">
                                                <span className="text-slate-400">Multi-Defendant Leverage</span>
                                                <span className="text-emerald-400">+{formatCurrency(result.multiDefendantImpact)}</span>
                                            </div>
                                        )}
                                        <div className="flex justify-between pt-2 border-t border-amber-500/20 text-xs font-black">
                                            <span className="text-amber-500">Total Expert Value Add</span>
                                            <span className="text-amber-400">{formatCurrency(result.totalExpertDelta)}</span>
                                        </div>
                                    </div>
                                )}

                                <div className="flex justify-between py-4 text-white font-black uppercase tracking-tighter text-lg">
                                    <span>Total Gross Valuation</span>
                                    <span>{formatCurrency(result.totalBeforeFees)}</span>
                                </div>

                                {result.attorneyFees > 0 && (
                                    <div className="space-y-3 opacity-60">
                                        <div className="flex justify-between text-xs font-bold">
                                            <span className="text-slate-400 italic">Attorney Contingency (33%)</span>
                                            <span className="text-red-400">-{formatCurrency(result.attorneyFees)}</span>
                                        </div>
                                        <div className="flex justify-between text-xs font-bold">
                                            <span className="text-slate-400 italic">Clinical Expert Costs</span>
                                            <span className="text-red-400">-{formatCurrency(result.expertWitnessCosts)}</span>
                                        </div>
                                    </div>
                                )}

                                <div className="flex justify-between pt-6 mt-4 border-t-2 border-amber-500/50">
                                    <span className="text-xl font-black text-white italic tracking-tighter uppercase">Net Recovery</span>
                                    <span className="text-3xl font-black text-amber-500 italic tracking-tighter">{formatCurrency(result.netSettlement)}</span>
                                </div>
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
                        <Info className="w-5 h-5 text-amber-500" />
                        Medical Malpractice FAQ
                    </h2>

                    <div className="space-y-4 text-sm">
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What is medical malpractice?
                            </h3>
                            <p className="text-slate-400">
                                Medical malpractice occurs when a healthcare provider deviates from the accepted standard of care, causing injury to a patient. This includes surgical errors, misdiagnosis, medication errors, and birth injuries.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What is the average malpractice settlement?
                            </h3>
                            <p className="text-slate-400">
                                Surgical error settlements average $500,000. Misdiagnosis cases average $350,000. Birth injury cases can reach $1.5 million or more. Wrongful death cases average $1.2 million.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                Why are expert witnesses required?
                            </h3>
                            <p className="text-slate-400">
                                Medical malpractice cases require expert medical testimony to prove the standard of care was breached. Expert witness fees typically range from $10,000-$50,000.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What is the statute of limitations?
                            </h3>
                            <p className="text-slate-400">
                                Most states have a 2-3 year statute of limitations for malpractice claims. Some states have "discovery rules" that start the clock when the injury was discovered.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <div className="mt-8 text-center">
                    <Link
                        href="/malpractice/types"
                        className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        View Settlements by Malpractice Type →
                    </Link>
                </div>

                {/* Disclaimer */}
                <div className="mt-8 p-4 bg-amber-900/20 border border-amber-700/50 rounded-lg">
                    <div className="flex items-start gap-2">
                        <AlertTriangle className="w-5 h-5 text-amber-400 mt-0.5" />
                        <p className="text-xs text-amber-200">
                            <strong>Important:</strong> Medical malpractice cases are complex and require expert testimony.
                            Time limits are strict. Consult a specialized malpractice attorney immediately if you suspect negligence.
                        </p>
                    </div>
                </div>
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
                                name: "What is the average medical malpractice settlement?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Surgical error settlements average $500,000. Misdiagnosis cases average $350,000. Birth injury cases can reach $1.5 million or more.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Why do malpractice cases require expert witnesses?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Medical malpractice cases require expert medical testimony to prove the standard of care was breached. Expert witness fees typically range from $10,000-$50,000.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What is the statute of limitations for malpractice?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Most states have a 2-3 year statute of limitations for malpractice claims. Some states have discovery rules that start when the injury was discovered.",
                                },
                            },
                        ],
                    }),
                }}
            />
        </>
    );
}
