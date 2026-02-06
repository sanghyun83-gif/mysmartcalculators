import Link from "next/link";
import { SITE, SCOOTER_COMPANIES, ESCOOTER_2026 } from "@/lib/calculators/e-scooter";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Zap, ArrowLeft, ArrowRight, Building2, AlertTriangle } from "lucide-react";

export const metadata = { title: `E-Scooter Rental Company Liability | ${SITE.name}`, description: "Liability information for Lime, Bird, and other e-scooter rental companies." };

const companyDetails = [
    { name: "Lime", status: "Active Litigation", details: "Lime faces numerous lawsuits for defective brakes, sudden acceleration, and inadequate safety warnings. Arbitration clause in user agreement.", valuation: "$510M+ Claims" },
    { name: "Bird", status: "Active Litigation", details: "Bird has settled multiple injury cases including wrongful death. Company filed bankruptcy in 2023 but continues operations.", valuation: "$320M+ Claims" },
    { name: "Spin", status: "Active Litigation", details: "Ford-owned Spin faces product liability claims. Better safety record than competitors but still faces lawsuits.", valuation: "$85M+ Claims" },
    { name: "Tier", status: "European Focus", details: "German company primarily operates in Europe. Subject to EU consumer protection laws which are more rider-friendly.", valuation: "$120M+ Claims" },
];

export default function CompaniesPage() {
    return (
        <>

            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/e-scooter" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-amber-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/50 rounded-full px-4 py-2 mb-4"><Building2 className="w-4 h-4 text-amber-400" /><span className="text-sm text-amber-300">Company Liability</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">E-Scooter Rental Companies</h1>
                    <p className="text-slate-400">Liability profiles for major e-scooter companies.</p>
                </div>
                <div className="space-y-6">
                    {companyDetails.map((company, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold text-white">{company.name}</h3>
                                <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-1 rounded">{company.status}</span>
                            </div>
                            <p className="text-slate-400 mb-4">{company.details}</p>
                            <div className="flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-red-400" /><span className="text-red-400 font-semibold">{company.valuation}</span></div>
                        </div>
                    ))}
                </div>
                <div className="mt-12 bg-slate-800 border border-slate-700 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Arbitration Clauses</h3>
                    <p className="text-slate-400 mb-4">Most e-scooter apps include arbitration clauses that limit your right to sue. However, these clauses may not cover:</p>
                    <ul className="space-y-2 text-slate-300">
                        <li> Product liability claims (defective scooters)</li>
                        <li> Gross negligence or recklessness</li>
                        <li> Claims in states that limit arbitration</li>
                        <li> Wrongful death claims (in some jurisdictions)</li>
                    </ul>
                </div>
                <div className="mt-12 text-center"><Link href="/e-scooter/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="e-scooter" count={5} /></div></div></section>

        </>
    );
}
