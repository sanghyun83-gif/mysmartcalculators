"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Briefcase, FileText, CheckCircle, DollarSign } from "lucide-react";
import { SITE, SE_TAX_2026, formatCurrency } from "@/lib/calculators/self-employment";

export default function DeductionsGuidePage() {
    return (
        <>
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/self-employment" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-emerald-500" />
                        <span className="text-lg font-bold text-white">Deductions Guide</span>
                    </div>
                    <span className="ml-auto text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">
                        {SITE.year}
                    </span>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 py-8">
                {/* Page Header */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        Self-Employment Deductions Guide
                    </h1>
                    <p className="text-slate-400">
                        Reduce your taxable income with these common write-offs
                    </p>
                </div>

                {/* SE Tax Deduction */}
                <div className="bg-emerald-900/30 border border-emerald-500/50 rounded-xl p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <DollarSign className="w-5 h-5 text-emerald-500" />
                        50% SE Tax Deduction
                    </h2>
                    <p className="text-slate-300 mb-4">
                        The IRS allows you to deduct <strong>50% of your self-employment tax</strong> from
                        your adjusted gross income. This is the &quot;employer-equivalent&quot; portion.
                    </p>
                    <div className="bg-slate-800/80 rounded-lg p-4">
                        <p className="text-sm text-slate-400">Example: $10,000 SE tax</p>
                        <p className="text-xl font-bold text-emerald-400">$5,000 deduction</p>
                        <p className="text-xs text-slate-500">Reduces AGI, then reduces income tax</p>
                    </div>
                </div>

                {/* Common Deductions */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Common Business Expense Deductions
                    </h2>

                    <div className="grid md:grid-cols-2 gap-3">
                        {[
                            { name: "Home Office", desc: "Dedicated workspace in your home" },
                            { name: "Vehicle/Mileage", desc: "Business miles at 67¢/mile" },
                            { name: "Equipment", desc: "Computers, phones, cameras" },
                            { name: "Software", desc: "Subscriptions, apps, tools" },
                            { name: "Internet/Phone", desc: "Business-use portion" },
                            { name: "Office Supplies", desc: "Paper, ink, desk items" },
                            { name: "Professional Services", desc: "Accountant, lawyer fees" },
                            { name: "Marketing", desc: "Ads, website, business cards" },
                            { name: "Education", desc: "Courses, books for your field" },
                            { name: "Travel", desc: "Business trips, conferences" },
                            { name: "Insurance", desc: "Business liability, E&O" },
                            { name: "Retirement", desc: "SEP-IRA, Solo 401(k) contributions" },
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3 bg-slate-700/50 rounded-lg p-3">
                                <CheckCircle className="w-4 h-4 text-emerald-400 mt-1" />
                                <div>
                                    <p className="font-semibold text-white">{item.name}</p>
                                    <p className="text-xs text-slate-400">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Health Insurance */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Self-Employed Health Insurance Deduction
                    </h2>
                    <p className="text-slate-300 mb-4">
                        If you&apos;re self-employed and pay for your own health insurance, you can
                        deduct 100% of premiums for yourself, spouse, and dependents.
                    </p>
                    <ul className="text-sm text-slate-300 space-y-2">
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-emerald-400 mt-1" />
                            <span>Medical, dental, and vision premiums</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-emerald-400 mt-1" />
                            <span>Long-term care insurance (age-limited)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-emerald-400 mt-1" />
                            <span>Deducted on Form 1040, not Schedule C</span>
                        </li>
                    </ul>
                </div>

                {/* Retirement Options */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Retirement Account Options
                    </h2>

                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-emerald-900/30 rounded-lg p-4 border border-emerald-500/50">
                            <p className="font-bold text-emerald-400">SEP-IRA</p>
                            <p className="text-sm text-slate-300 mt-2">Up to 25% of net earnings</p>
                            <p className="text-xs text-slate-500 mt-1">Max: ~$69,000</p>
                        </div>
                        <div className="bg-slate-700/50 rounded-lg p-4">
                            <p className="font-bold text-white">Solo 401(k)</p>
                            <p className="text-sm text-slate-300 mt-2">Employee + Employer contributions</p>
                            <p className="text-xs text-slate-500 mt-1">Max: ~$69,000 (+catch-up)</p>
                        </div>
                        <div className="bg-slate-700/50 rounded-lg p-4">
                            <p className="font-bold text-white">SIMPLE IRA</p>
                            <p className="text-sm text-slate-300 mt-2">For businesses with employees</p>
                            <p className="text-xs text-slate-500 mt-1">Max: $16,500</p>
                        </div>
                    </div>
                </div>

                {/* QBI Deduction */}
                <div className="bg-blue-900/20 border border-blue-700/50 rounded-xl p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Qualified Business Income (QBI) Deduction
                    </h2>
                    <p className="text-slate-300 mb-4">
                        The Section 199A deduction allows eligible self-employed individuals to
                        deduct up to <strong>20% of qualified business income</strong>.
                    </p>
                    <ul className="text-sm text-blue-200 space-y-1">
                        <li>• Subject to taxable income thresholds</li>
                        <li>• Some service businesses are limited</li>
                        <li>• Calculated on Form 8995</li>
                    </ul>
                </div>

                {/* Ad Placeholder */}
                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center">
                    <p className="text-sm text-slate-500">Advertisement</p>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link
                        href="/self-employment/se-tax-calculator"
                        className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Calculate Your SE Tax
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    This is general tax guidance. Consult a tax professional for your situation.
                </p>
            </main>
        </>
    );
}
