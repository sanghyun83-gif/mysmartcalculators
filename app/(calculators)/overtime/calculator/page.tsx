"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Clock, Calculator, Info, DollarSign } from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import {
    SITE,
    OVERTIME_CONSTANTS_2026,
    calculateOvertime,
    formatCurrency,
    OvertimeResult
} from "@/lib/calculators/overtime";

export default function OvertimeCalculatorPage() {
    const [hourlyRate, setHourlyRate] = useState("");
    const [totalHours, setTotalHours] = useState("");
    const [regularLimit, setRegularLimit] = useState(40);
    const [otMultiplier, setOtMultiplier] = useState(1.5);
    const [doubleTimeHrs, setDoubleTimeHrs] = useState("");
    const [result, setResult] = useState<OvertimeResult | null>(null);

    const handleRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/[^0-9.]/g, "");
        setHourlyRate(raw);
    };

    const handleCalculate = () => {
        const rate = parseFloat(hourlyRate) || 15;
        const hours = parseFloat(totalHours) || 40;
        const dtHours = parseFloat(doubleTimeHrs) || 0;
        setResult(calculateOvertime(rate, hours, regularLimit, otMultiplier, dtHours));
    };

    return (
        <>
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/overtime" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-emerald-500" />
                        <span className="text-lg font-bold text-white">Overtime Calculator</span>
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
                        {SITE.year} Overtime Pay Calculator
                    </h1>
                    <p className="text-sm text-slate-400 mb-6">
                        Calculate your time and a half earnings
                    </p>

                    {/* Inputs */}
                    <div className="space-y-5 mb-6">
                        {/* Hourly Rate */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Hourly Rate
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                                <input
                                    type="text"
                                    value={hourlyRate}
                                    onChange={handleRateChange}
                                    placeholder="25.00"
                                    className="w-full pl-8 pr-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                        </div>

                        {/* Total Hours */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Total Hours Worked (This Week)
                            </label>
                            <input
                                type="number"
                                value={totalHours}
                                onChange={(e) => setTotalHours(e.target.value)}
                                placeholder="50"
                                min="0"
                                step="0.5"
                                className="w-full px-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                            />
                        </div>

                        {/* Regular Hours Limit */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Regular Hours Before OT Starts
                            </label>
                            <div className="flex gap-2">
                                {[40, 36, 32].map((hrs) => (
                                    <button
                                        key={hrs}
                                        type="button"
                                        onClick={() => setRegularLimit(hrs)}
                                        className={`flex-1 py-3 rounded-lg border transition ${regularLimit === hrs
                                            ? "bg-emerald-600 text-white border-emerald-600"
                                            : "bg-slate-700 text-slate-300 border-slate-600 hover:border-emerald-500"
                                            }`}
                                    >
                                        {hrs} hrs
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* OT Multiplier */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Overtime Rate
                            </label>
                            <div className="grid grid-cols-3 gap-2">
                                {[
                                    { value: 1.5, label: "1.5×", desc: "Time and Half" },
                                    { value: 2.0, label: "2×", desc: "Double Time" },
                                    { value: 3.0, label: "3×", desc: "Triple Time" },
                                ].map((opt) => (
                                    <button
                                        key={opt.value}
                                        type="button"
                                        onClick={() => setOtMultiplier(opt.value)}
                                        className={`py-3 rounded-lg border text-center transition ${otMultiplier === opt.value
                                            ? "bg-emerald-600 text-white border-emerald-600"
                                            : "bg-slate-700 text-slate-300 border-slate-600 hover:border-emerald-500"
                                            }`}
                                    >
                                        <div className="text-lg font-semibold">{opt.label}</div>
                                        <div className="text-xs mt-1 opacity-75">{opt.desc}</div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Double Time Hours (optional) */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Double Time Hours (CA only, optional)
                            </label>
                            <input
                                type="number"
                                value={doubleTimeHrs}
                                onChange={(e) => setDoubleTimeHrs(e.target.value)}
                                placeholder="0"
                                min="0"
                                className="w-full px-4 py-4 text-lg bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500"
                            />
                            <p className="text-xs text-slate-500 mt-1">Hours after 12/day in CA get 2× pay</p>
                        </div>
                    </div>

                    {/* Calculate Button */}
                    <button
                        onClick={handleCalculate}
                        className="w-full py-4 bg-emerald-600 text-white rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate Overtime
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        {/* Summary Header */}
                        <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white p-6">
                            <p className="text-sm text-emerald-100 mb-1">Total Weekly Pay</p>
                            <p className="text-4xl font-bold">{formatCurrency(result.totalPay)}</p>
                            <p className="text-sm text-emerald-100 mt-2">
                                Effective rate: {formatCurrency(result.effectiveHourlyRate)}</hr
                            </p>
                        </div>

                        {/* Breakdown */}
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                                Pay Breakdown
                            </h3>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Regular Hours</span>
                                    <span className="font-medium text-white">{result.regularHours} hrs × {formatCurrency(result.hourlyRate)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-700">
                                    <span className="text-slate-300">Regular Pay</span>
                                    <span className="font-medium text-white">{formatCurrency(result.regularPay)}</span>
                                </div>
                                {result.overtimeHours > 0 && (
                                    <>
                                        <div className="flex justify-between py-2 border-b border-slate-700">
                                            <span className="text-slate-300">Overtime Hours ({result.overtimeMultiplier}×)</span>
                                            <span className="font-medium text-emerald-400">{result.overtimeHours} hrs</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-slate-700">
                                            <span className="text-slate-300">Overtime Pay</span>
                                            <span className="font-medium text-emerald-400">{formatCurrency(result.overtimePay)}</span>
                                        </div>
                                    </>
                                )}
                                {result.doubleTimeHours > 0 && (
                                    <>
                                        <div className="flex justify-between py-2 border-b border-slate-700">
                                            <span className="text-slate-300">Double Time Hours</span>
                                            <span className="font-medium text-green-400">{result.doubleTimeHours} hrs</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-slate-700">
                                            <span className="text-slate-300">Double Time Pay</span>
                                            <span className="font-medium text-green-400">{formatCurrency(result.doubleTimePay)}</span>
                                        </div>
                                    </>
                                )}
                                <div className="flex justify-between pt-4 text-lg">
                                    <span className="text-white font-bold">Total Pay</span>
                                    <span className="font-bold text-emerald-400">{formatCurrency(result.totalPay)}</span>
                                </div>
                            </div>
                        </div>

                        {/* OT Bonus Note */}
                        <div className="p-4 bg-blue-900/30 border-t border-blue-700/50">
                            <div className="flex items-start gap-2 text-sm">
                                <DollarSign className="w-4 h-4 text-blue-400 mt-0.5" />
                                <p className="text-blue-200">
                                    <strong>Your OT Bonus:</strong> {formatCurrency(result.overtimePay + result.doubleTimePay)}
                                    {" "}extra compared to straight time.
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
                        <Info className="w-5 h-5 text-emerald-500" />
                        Overtime FAQ
                    </h2>

                    <div className="space-y-4 text-sm">
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                When does overtime start?
                            </h3>
                            <p className="text-slate-400">
                                Under federal law (FLSA), overtime starts after 40 hours per week.
                                California requires overtime after 8 hours per day.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                How is overtime calculated?
                            </h3>
                            <p className="text-slate-400">
                                Overtime is calculated at 1.5× your regular hourly rate.
                                For a $20</hr worker, OT rate would be $30/hr.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                Am I eligible for overtime?
                            </h3>
                            <p className="text-slate-400">
                                Most hourly workers are eligible. Salaried workers under ${Math.round(OVERTIME_CONSTANTS_2026.federal.salaryThreshold / 1000)}K/year
                                are also eligible. See our FLSA guide for details.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    This calculator provides estimates. Actual pay may vary by state and company policy.
                    Consult HR or an employment attorney for specific situations.
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
                                name: "When does overtime start?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Under federal law (FLSA), overtime starts after 40 hours per week. California requires overtime after 8 hours per day.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "How is overtime calculated?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Overtime is calculated at 1.5× your regular hourly rate. For a $20</hr worker, OT rate would be $30/hr.",
                                },
                            },
                        ],
                    }),
                }}
            />
        </>
    );
}
