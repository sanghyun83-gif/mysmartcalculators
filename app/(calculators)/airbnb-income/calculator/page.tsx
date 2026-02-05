"use client";

import { useState } from "react";
import Link from "next/link";
import { Home, Calculator, ArrowRight, DollarSign } from "lucide-react";
import { SITE, FAQS } from "@/lib/calculators/airbnb-income";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function AirbnbIncomeCalculatorPage() {
    const [nightlyRate, setNightlyRate] = useState(150);
    const [occupancy, setOccupancy] = useState(60);
    const [monthlyExpenses, setMonthlyExpenses] = useState(500);
    const [result, setResult] = useState<null | { gross: number; fees: number; expenses: number; net: number }>(null);

    const calculateAirbnb = () => {
        const nightsBooked = Math.round(30 * (occupancy / 100));
        const gross = nightlyRate * nightsBooked;
        const fees = Math.round(gross * 0.03); // 3% Airbnb host fee
        const net = gross - fees - monthlyExpenses;

        setResult({ gross, fees, expenses: monthlyExpenses, net });
    };

    return (
        <>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/50 rounded-full px-4 py-2 mb-4">
                            <Home className="w-4 h-4 text-emerald-400" />
                            <span className="text-sm text-emerald-300">{SITE.year} Calculator</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">Airbnb Income Calculator</h1>
                        <p className="text-slate-400">Calculate your short-term rental earnings</p>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Nightly Rate: ${nightlyRate}</label>
                                <input type="range" min="50" max="500" step="10" value={nightlyRate} onChange={(e) => setNightlyRate(Number(e.target.value))} className="w-full" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Occupancy Rate: {occupancy}%</label>
                                <input type="range" min="20" max="95" step="5" value={occupancy} onChange={(e) => setOccupancy(Number(e.target.value))} className="w-full" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Monthly Expenses: ${monthlyExpenses}</label>
                                <input type="range" min="100" max="2000" step="50" value={monthlyExpenses} onChange={(e) => setMonthlyExpenses(Number(e.target.value))} className="w-full" />
                            </div>
                        </div>

                        <button onClick={calculateAirbnb} className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
                            <DollarSign className="w-5 h-5" /> Calculate Airbnb Income
                        </button>
                    </div>

                    {result && (
                        <div className="bg-emerald-900/30 border border-emerald-500/50 rounded-xl p-6 mb-8">
                            <h2 className="text-xl font-bold text-white mb-4">Monthly Earnings</h2>
                            <div className="grid md:grid-cols-4 gap-4">
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-xl font-bold text-white">${result.gross.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">Gross Income</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-xl font-bold text-amber-400">-${result.fees}</div>
                                    <div className="text-sm text-slate-400">Airbnb Fee (3%)</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-xl font-bold text-amber-400">-${result.expenses}</div>
                                    <div className="text-sm text-slate-400">Expenses</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-2xl font-bold text-emerald-400">${result.net.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">Net Income</div>
                                </div>
                            </div>
                            <p className="text-xs text-slate-500 mt-4">*Before income taxes. See IRS sharing economy rules.</p>
                        </div>
                    )}

                    <LegalDisclaimer category="insurance" />
                </div>
            </section>

            <section className="py-12 px-4 bg-slate-800/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-xl font-bold text-white text-center mb-8">FAQ</h2>
                    <div className="space-y-4">
                        {FAQS.map((faq, index) => (
                            <details key={index} className="group bg-slate-800 border border-slate-700 rounded-xl">
                                <summary className="flex items-center justify-between p-4 cursor-pointer">
                                    <span className="font-medium text-white text-sm">{faq.question}</span>
                                    <ArrowRight className="w-4 h-4 text-slate-400 group-open:rotate-90 transition-transform" />
                                </summary>
                                <div className="px-4 pb-4 text-slate-300 text-sm">{faq.answer}</div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>
        
            {/* FAQPage Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: [
                            {
                                "@type": "Question",
                                name: "How accurate is the airbnb income calculator?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "This calculator provides estimates based on 2026 data and standard formulas. Results may vary based on individual circumstances."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Is this airbnb income calculator free to use?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, this calculator is completely free. No registration or personal information required."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "How often is the airbnb income data updated?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "We update our calculator data regularly to reflect current 2026 rates and regulations."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Can I rely on these airbnb income results for decisions?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "This calculator provides estimates for educational purposes. For important decisions, please consult with a qualified professional."
                                }
                            }
                        ]
                    })
                }}
            />
        </>
    );
}
