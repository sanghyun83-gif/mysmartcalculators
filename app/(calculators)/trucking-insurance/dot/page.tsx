"use client";

import Link from "next/link";
import { Calculator, FileText, AlertTriangle, CheckCircle } from "lucide-react";
import { SITE } from "@/lib/calculators/trucking-insurance";

const DOT_REQUIREMENTS = [
    {
        category: "For-Hire Carriers (Non-Hazmat)",
        commodities: "General freight, household goods, automobiles",
        minimumLiability: "$750,000",
        surety: "$75,000",
    },
    {
        category: "For-Hire Carriers (Hazmat Class A/B)",
        commodities: "Oil, hazardous waste, explosives",
        minimumLiability: "$5,000,000",
        surety: "$75,000",
    },
    {
        category: "For-Hire Carriers (Other Hazmat)",
        commodities: "Other hazardous materials",
        minimumLiability: "$1,000,000",
        surety: "$75,000",
    },
    {
        category: "Private Carriers (Non-Hazmat)",
        commodities: "Company's own goods",
        minimumLiability: "$750,000",
        surety: "Not Required",
    },
    {
        category: "Freight Brokers",
        commodities: "Arranging transportation",
        minimumLiability: "N/A",
        surety: "$75,000 BMC-84 bond",
    },
];

const FILINGS_REQUIRED = [
    { name: "BOC-3 Filing", description: "Designation of process agents in each state", required: true },
    { name: "MCS-90 Endorsement", description: "Public liability insurance endorsement", required: true },
    { name: "BMC-91 Filing", description: "Motor carrier financial responsibility", required: true },
    { name: "UCR Registration", description: "Unified Carrier Registration (annual)", required: true },
    { name: "IFTA License", description: "International Fuel Tax Agreement (if applicable)", required: false },
];

export default function TruckingInsuranceDOTPage() {
    return (
        <>
            {/* Header */}
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80">
                        <Calculator className="w-6 h-6 text-blue-500" />
                        <span className="text-lg font-bold text-white">MySmartCalculators</span>
                    </Link>
                    <Link href="/trucking-insurance" className="text-slate-400 hover:text-white text-sm">
                        ??Back to Overview
                    </Link>
                </div>
            </header>

            {/* Hero */}
            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
                        <FileText className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-blue-300">FMCSA Requirements</span>
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-4">DOT Insurance Requirements</h1>
                    <p className="text-slate-400">Federal minimum insurance requirements for commercial trucking</p>
                </div>
            </section>

            {/* Minimum Liability Table */}
            <section className="py-12 px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-6">FMCSA Minimum Insurance Levels</h2>
                    <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-slate-700">
                                    <tr>
                                        <th className="text-left px-6 py-4 text-sm font-semibold text-white">Carrier Type</th>
                                        <th className="text-left px-6 py-4 text-sm font-semibold text-white">Commodities</th>
                                        <th className="text-right px-6 py-4 text-sm font-semibold text-white">Liability</th>
                                        <th className="text-right px-6 py-4 text-sm font-semibold text-white">Surety/Bond</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-700">
                                    {DOT_REQUIREMENTS.map((req, index) => (
                                        <tr key={index} className="hover:bg-slate-700/50">
                                            <td className="px-6 py-4 text-white font-medium">{req.category}</td>
                                            <td className="px-6 py-4 text-slate-400 text-sm">{req.commodities}</td>
                                            <td className="px-6 py-4 text-blue-400 text-right font-semibold">{req.minimumLiability}</td>
                                            <td className="px-6 py-4 text-slate-300 text-right">{req.surety}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-amber-300 text-sm mt-4">
                        <AlertTriangle className="w-4 h-4" />
                        <span>These are FMCSA federal minimums. Many shippers require higher limits.</span>
                    </div>
                </div>
            </section>

            {/* Required Filings */}
            <section className="py-12 px-4 bg-slate-800/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-6">Required FMCSA Filings</h2>
                    <div className="space-y-4">
                        {FILINGS_REQUIRED.map((filing, index) => (
                            <div key={index} className="bg-slate-800 border border-slate-700 rounded-xl p-6 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <CheckCircle className={`w-6 h-6 ${filing.required ? 'text-green-400' : 'text-slate-500'}`} />
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">{filing.name}</h3>
                                        <p className="text-slate-400 text-sm">{filing.description}</p>
                                    </div>
                                </div>
                                <span className={`text-sm px-3 py-1 rounded ${filing.required ? 'bg-green-500/20 text-green-300' : 'bg-slate-500/20 text-slate-400'}`}>
                                    {filing.required ? 'Required' : 'If Applicable'}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <Link
                        href="/trucking-insurance/calculator"
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors"
                    >
                        Calculate Your Premium
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-800 border-t border-slate-700 py-8">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <p className="text-sm text-slate-500">© {SITE.year} MySmartCalculators. Based on FMCSA 49 CFR Part 387.</p>
                </div>
            </footer>
        </>
    );
}
