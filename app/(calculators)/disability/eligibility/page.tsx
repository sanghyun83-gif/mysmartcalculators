import Link from "next/link";
import { ArrowLeft, FileCheck, CheckCircle, XCircle, ArrowRight, Info } from "lucide-react";
import { SITE, SSA_CONSTANTS_2026, formatCurrency } from "@/lib/calculators/disability";

export default function EligibilityPage() {
    const constants = SSA_CONSTANTS_2026;

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header */}


            <main className="max-w-4xl mx-auto px-4 py-8">
                {/* Hero */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-slate-800 mb-4">
                        SSDI vs SSI: Which Do You Qualify For?
                    </h1>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        Understanding the difference between Social Security Disability Insurance (SSDI)
                        and Supplemental Security Income (SSI) is crucial for your application.
                    </p>
                </div>

                {/* Comparison Table */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-8">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead className="bg-slate-100">
                                <tr>
                                    <th className="px-6 py-4 text-left text-slate-600 font-semibold">Feature</th>
                                    <th className="px-6 py-4 text-center text-blue-600 font-semibold">SSDI</th>
                                    <th className="px-6 py-4 text-center text-teal-600 font-semibold">SSI</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <tr>
                                    <td className="px-6 py-4 text-slate-700 font-medium">Based On</td>
                                    <td className="px-6 py-4 text-center">Work history / Credits</td>
                                    <td className="px-6 py-4 text-center">Financial need</td>
                                </tr>
                                <tr className="bg-slate-50">
                                    <td className="px-6 py-4 text-slate-700 font-medium">Work Credits Required?</td>
                                    <td className="px-6 py-4 text-center">
                                        <CheckCircle className="w-5 h-5 text-blue-500 mx-auto" />
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <XCircle className="w-5 h-5 text-slate-300 mx-auto" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-slate-700 font-medium">Income Limit</td>
                                    <td className="px-6 py-4 text-center">SGA: {formatCurrency(constants.earnings.sgaLimit)}/mo</td>
                                    <td className="px-6 py-4 text-center">Yes (varies)</td>
                                </tr>
                                <tr className="bg-slate-50">
                                    <td className="px-6 py-4 text-slate-700 font-medium">Asset Limit</td>
                                    <td className="px-6 py-4 text-center">None</td>
                                    <td className="px-6 py-4 text-center">{formatCurrency(constants.ssi.resourceLimitIndividual)} (individual)</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-slate-700 font-medium">Max Benefit ({SITE.year})</td>
                                    <td className="px-6 py-4 text-center font-semibold text-blue-600">{formatCurrency(constants.ssdi.maxAtFRA)}/mo</td>
                                    <td className="px-6 py-4 text-center font-semibold text-teal-600">{formatCurrency(constants.ssi.maxIndividual)}/mo + state</td>
                                </tr>
                                <tr className="bg-slate-50">
                                    <td className="px-6 py-4 text-slate-700 font-medium">Average Benefit</td>
                                    <td className="px-6 py-4 text-center">{formatCurrency(constants.ssdi.averageMonthly)}/mo</td>
                                    <td className="px-6 py-4 text-center">{formatCurrency(constants.ssi.maxIndividual)}/mo</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-slate-700 font-medium">Healthcare</td>
                                    <td className="px-6 py-4 text-center">Medicare (after 24 months)</td>
                                    <td className="px-6 py-4 text-center">Medicaid (immediate)</td>
                                </tr>
                                <tr className="bg-slate-50">
                                    <td className="px-6 py-4 text-slate-700 font-medium">Waiting Period</td>
                                    <td className="px-6 py-4 text-center">5 months</td>
                                    <td className="px-6 py-4 text-center">None</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-slate-700 font-medium">Back Pay?</td>
                                    <td className="px-6 py-4 text-center">
                                        <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Quick Check Boxes */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {/* SSDI Checklist */}
                    <div className="bg-blue-50 rounded-xl border border-blue-200 p-6">
                        <h3 className="text-lg font-bold text-blue-800 mb-4">
                            You May Qualify for SSDI If:
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                                <span className="text-slate-700">You have worked and paid Social Security taxes</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                                <span className="text-slate-700">You have enough work credits (varies by age)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                                <span className="text-slate-700">Your disability prevents substantial work</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                                <span className="text-slate-700">Condition expected to last 12+ months</span>
                            </li>
                        </ul>
                        <Link
                            href="/disability/ssdi-calculator"
                            className="mt-6 inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                        >
                            Calculate SSDI <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    {/* SSI Checklist */}
                    <div className="bg-teal-50 rounded-xl border border-teal-200 p-6">
                        <h3 className="text-lg font-bold text-teal-800 mb-4">
                            You May Qualify for SSI If:
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5" />
                                <span className="text-slate-700">You are 65+, blind, or disabled</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5" />
                                <span className="text-slate-700">Limited income and resources</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5" />
                                <span className="text-slate-700">Assets under {formatCurrency(constants.ssi.resourceLimitIndividual)}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5" />
                                <span className="text-slate-700">U.S. citizen or qualifying non-citizen</span>
                            </li>
                        </ul>
                        <Link
                            href="/disability/ssi-calculator"
                            className="mt-6 inline-flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-teal-700 transition-colors"
                        >
                            Calculate SSI <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                {/* Info Box */}
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
                    <div className="flex items-start gap-3">
                        <Info className="w-6 h-6 text-amber-600 mt-0.5" />
                        <div>
                            <h3 className="font-semibold text-amber-800 mb-2">Can You Receive Both?</h3>
                            <p className="text-sm text-amber-700">
                                Yes! You may be eligible for <strong>concurrent benefits</strong> if your SSDI
                                payment is low enough. This is sometimes called "SSDI and SSI" or getting
                                benefits from both programs at the same time.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Ad Placeholder */}
                <div className="p-6 bg-white border border-slate-200 rounded-xl text-center shadow-sm mb-8">
                    <p className="text-sm text-slate-400">Advertisement</p>
                </div>

                {/* Work Credits Info */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                    <h2 className="text-lg font-bold text-slate-800 mb-4">
                        Understanding Work Credits (for SSDI)
                    </h2>
                    <p className="text-sm text-slate-600 mb-4">
                        You earn Social Security credits when you work and pay Social Security taxes.
                        In {SITE.year}, you earn one credit for each $1,810 in earnings, up to 4 credits per year.
                    </p>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead className="bg-slate-100">
                                <tr>
                                    <th className="px-4 py-2 text-left text-slate-600">Age When Disabled</th>
                                    <th className="px-4 py-2 text-left text-slate-600">Credits Needed</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <tr>
                                    <td className="px-4 py-2">Before age 24</td>
                                    <td className="px-4 py-2">6 credits (1.5 years of work)</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2">Age 24-30</td>
                                    <td className="px-4 py-2">Credits for half the time since 21</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2">Age 31 or older</td>
                                    <td className="px-4 py-2">20+ credits (varies by age)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    This information is based on {SITE.year} SSA guidelines. Rules may change.
                    Contact SSA or a disability attorney for personalized advice.
                </p>
            </main>
        </div>
    );
}
