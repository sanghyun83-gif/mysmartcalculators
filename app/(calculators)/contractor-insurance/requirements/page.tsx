"use client";

import Link from "next/link";
import { Calculator, FileText, CheckCircle, AlertTriangle } from "lucide-react";
import { SITE } from "@/lib/calculators/contractor-insurance";

const STATE_REQUIREMENTS = [
    { state: "California", wcRequired: "Yes (1+ employees)", glRequired: "Most contracts", license: "CSLB required" },
    { state: "Texas", wcRequired: "No (voluntary)", glRequired: "Contract dependent", license: "No state license" },
    { state: "Florida", wcRequired: "Yes (4+ construction)", glRequired: "Most contracts", license: "State license required" },
    { state: "New York", wcRequired: "Yes (all employees)", glRequired: "Required by law", license: "NYC license required" },
    { state: "Pennsylvania", wcRequired: "Yes (all employees)", glRequired: "Most contracts", license: "Some cities" },
];

const CLIENT_REQUIREMENTS = [
    { type: "General Contractors", glLimit: "$1M-$2M", wcRequired: "Always", additionalInsured: "Required" },
    { type: "Commercial Property", glLimit: "$2M+", wcRequired: "Always", additionalInsured: "Required" },
    { type: "Residential (Custom)", glLimit: "$500K-$1M", wcRequired: "If employees", additionalInsured: "Sometimes" },
    { type: "Government/Municipal", glLimit: "$2M-$5M", wcRequired: "Always", additionalInsured: "Required" },
];

export default function ContractorInsuranceRequirementsPage() {
    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80">
                        <Calculator className="w-6 h-6 text-blue-500" />
                        <span className="text-lg font-bold text-white">MySmartCalculators</span>
                    </Link>
                    <Link href="/contractor-insurance" className="text-slate-400 hover:text-white text-sm"> Back to Overview</Link>
                </div>
            </header>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
                        <FileText className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-blue-300">Requirements</span>
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-4">Contractor Insurance Requirements</h1>
                    <p className="text-slate-400">State laws and client requirements</p>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-6">State Requirements (Sample)</h2>
                    <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-slate-700">
                                    <tr>
                                        <th className="text-left px-6 py-4 text-sm font-semibold text-white">State</th>
                                        <th className="text-left px-6 py-4 text-sm font-semibold text-white">Workers Comp</th>
                                        <th className="text-left px-6 py-4 text-sm font-semibold text-white">General Liability</th>
                                        <th className="text-left px-6 py-4 text-sm font-semibold text-white">Licensing</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-700">
                                    {STATE_REQUIREMENTS.map((state, index) => (
                                        <tr key={index} className="hover:bg-slate-700/50">
                                            <td className="px-6 py-4 text-white font-medium">{state.state}</td>
                                            <td className="px-6 py-4 text-slate-300">{state.wcRequired}</td>
                                            <td className="px-6 py-4 text-slate-300">{state.glRequired}</td>
                                            <td className="px-6 py-4 text-slate-400">{state.license}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4 bg-slate-800/30">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-6">Client/Contract Requirements</h2>
                    <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-slate-700">
                                <tr>
                                    <th className="text-left px-6 py-4 text-sm font-semibold text-white">Client Type</th>
                                    <th className="text-left px-6 py-4 text-sm font-semibold text-white">GL Limit</th>
                                    <th className="text-left px-6 py-4 text-sm font-semibold text-white">Workers Comp</th>
                                    <th className="text-left px-6 py-4 text-sm font-semibold text-white">Additional Insured</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700">
                                {CLIENT_REQUIREMENTS.map((client, index) => (
                                    <tr key={index} className="hover:bg-slate-700/50">
                                        <td className="px-6 py-4 text-white font-medium">{client.type}</td>
                                        <td className="px-6 py-4 text-blue-400">{client.glLimit}</td>
                                        <td className="px-6 py-4 text-slate-300">{client.wcRequired}</td>
                                        <td className="px-6 py-4 text-slate-300">{client.additionalInsured}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <Link href="/contractor-insurance/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors">
                        Calculate Your Premium
                    </Link>
                </div>
            </section>

            <footer className="bg-slate-800 border-t border-slate-700 py-8">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <p className="text-sm text-slate-500">© {SITE.year} MySmartCalculators. Requirements vary by location.</p>
                </div>
            </footer>
        </>
    );
}
