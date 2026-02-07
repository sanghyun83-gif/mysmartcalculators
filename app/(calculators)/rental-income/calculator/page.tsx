"use client";

import { useState } from "react";
import Link from "next/link";
import { Home, Calculator, ArrowRight, DollarSign } from "lucide-react";
import { SITE, FAQS } from "@/lib/calculators/rental-income";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function RentalIncomeCalculatorPage() {
    const [monthlyRent, setMonthlyRent] = useState(2000);
    const [expenseRate, setExpenseRate] = useState(35);
    const [mortgage, setMortgage] = useState(1200);
    const [result, setResult] = useState<null | { gross: number; expenses: number; net: number; annual: number }>(null);

    const calculateRental = () => {
        const gross = monthlyRent;
        const expenses = Math.round(monthlyRent * (expenseRate / 100));
        const net = gross - expenses - mortgage;
        const annual = net * 12;

        setResult({ gross, expenses, net, annual });
    };

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80">
                        <Calculator className="w-6 h-6 text-emerald-500" />
                        <span className="text-lg font-bold text-white">MySmartCalculators</span>
                    </Link>
                    <Link href="/rental-income" className="text-slate-400 hover:text-white text-sm">← Back</Link>
                </div>
            </header>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/50 rounded-full px-4 py-2 mb-4">
                            <Home className="w-4 h-4 text-emerald-400" />
                            <span className="text-sm text-emerald-300">{SITE.year} Calculator</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">Rental Income Calculator</h1>
                        <p className="text-slate-400">Calculate your net rental income</p>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Monthly Rent: ${monthlyRent.toLocaleString()}</label>
                                <input type="range" min="500" max="10000" step="100" value={monthlyRent} onChange={(e) => setMonthlyRent(Number(e.target.value))} className="w-full" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Operating Expenses: {expenseRate}% of rent</label>
                                <input type="range" min="20" max="60" step="5" value={expenseRate} onChange={(e) => setExpenseRate(Number(e.target.value))} className="w-full" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Monthly Mortgage: ${mortgage.toLocaleString()}</label>
                                <input type="range" min="0" max="5000" step="100" value={mortgage} onChange={(e) => setMortgage(Number(e.target.value))} className="w-full" />
                            </div>
                        </div>

                        <button onClick={calculateRental} className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
                            <DollarSign className="w-5 h-5" /> Calculate Rental Income
                        </button>
                    </div>

                    {result && (
                        <div className="bg-emerald-900/30 border border-emerald-500/50 rounded-xl p-6 mb-8">
                            <h2 className="text-xl font-bold text-white mb-4">Monthly Cash Flow</h2>
                            <div className="grid md:grid-cols-4 gap-4">
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-xl font-bold text-white">${result.gross.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">Gross Rent</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-xl font-bold text-amber-400">-${result.expenses.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">Expenses</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-xl font-bold text-emerald-400">${result.net.toLocaleString()}/mo</div>
                                    <div className="text-sm text-slate-400">Net Cash Flow</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-xl font-bold text-emerald-400">${result.annual.toLocaleString()}/yr</div>
                                    <div className="text-sm text-slate-400">Annual Income</div>
                                </div>
                            </div>
                            <p className="text-xs text-slate-500 mt-4">*Before income taxes. Deductions apply (IRS 2026)</p>
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

            <footer className="bg-slate-800 border-t border-slate-700 py-6">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <p className="text-xs text-slate-500">© {SITE.year} MySmartCalculators. Based on IRS guidelines.</p>
                </div>
            </footer>
        </>
    );
}
