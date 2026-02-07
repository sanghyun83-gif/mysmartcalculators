import Link from "next/link";
import { SITE, DO_2026 } from "@/lib/calculators/do-insurance";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Users, ArrowLeft, ArrowRight, AlertTriangle } from "lucide-react";

export const metadata = { title: `Common D&O Claims | ${SITE.name}`, description: "Common D&O insurance claims." };

export default function ClaimsPage() {
    const claims = [
        { name: "Breach of Fiduciary Duty", frequency: "Most Common", example: "Director approved transaction benefiting themselves over shareholders.", avgCost: "$100,000 - $500,000" },
        { name: "Securities Violations", frequency: "Very Common (Public)", example: "Failure to disclose material information leading to stock drop.", avgCost: "$500,000 - $10M+" },
        { name: "Employment Practices", frequency: "Common", example: "Wrongful termination claim by executive naming board members.", avgCost: "$50,000 - $250,000" },
        { name: "Regulatory Investigation", frequency: "Common", example: "SEC, DOJ, or state AG investigation into company practices.", avgCost: "$100,000 - $1M+" },
        { name: "Investor Disputes", frequency: "Common (Private/Startup)", example: "VC claims misrepresentation in fundraising documents.", avgCost: "$75,000 - $500,000" },
        { name: "Merger & Acquisition Claims", frequency: "Less Common", example: "Shareholders claim board sold company too cheaply.", avgCost: "$250,000 - $5M+" },
    ];

    return (
        <>

            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/do-insurance" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-blue-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4"><AlertTriangle className="w-4 h-4 text-blue-400" /><span className="text-sm text-blue-300">Common Claims</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Common D&amp;O Claims</h1>
                    <p className="text-slate-400">Types of claims covered by D&amp;O insurance.</p>
                </div>

                <div className="space-y-4">
                    {claims.map((claim, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-semibold text-white">{claim.name}</h3>
                                <div className="text-right">
                                    <p className="text-sm text-blue-400">{claim.frequency}</p>
                                    <p className="text-xs text-slate-500">{claim.avgCost}</p>
                                </div>
                            </div>
                            <p className="text-slate-400">{claim.example}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 bg-amber-900/20 border border-amber-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-amber-300 mb-2">Personal Assets at Risk</h3>
                    <p className="text-slate-300">Without D&amp;O, directors and officers face personal liability. Personal savings, homes, and investments can be targeted.</p>
                </div>

                <div className="mt-12 text-center"><Link href="/do-insurance/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Premium<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="do-insurance" count={5} /></div></div></section>

        </>
    );
}
