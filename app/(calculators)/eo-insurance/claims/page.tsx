import Link from "next/link";
import { SITE, EO_2026 } from "@/lib/calculators/eo-insurance";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Home, ArrowLeft, ArrowRight, AlertTriangle } from "lucide-react";

export const metadata = { title: `Common E&O Claims | ${SITE.name}`, description: "Common E&O insurance claims for agents." };

export default function ClaimsPage() {
    const claims = [
        { name: "Failure to Disclose", frequency: "Most Common", example: "Agent knew about property defect but didn't disclose to buyer.", avgCost: "$15,000 - $40,000" },
        { name: "Misrepresentation", frequency: "Very Common", example: "Agent provided incorrect information about property size or condition.", avgCost: "$20,000 - $60,000" },
        { name: "Breach of Fiduciary Duty", frequency: "Common", example: "Agent prioritized commission over client's best interests.", avgCost: "$10,000 - $35,000" },
        { name: "Contract Errors", frequency: "Common", example: "Missing contingencies, wrong terms, or deadline errors in contracts.", avgCost: "$8,000 - $25,000" },
        { name: "Deadline Misses", frequency: "Moderate", example: "Failed to meet inspection, financing, or closing deadlines.", avgCost: "$5,000 - $20,000" },
        { name: "Procuring Cause Disputes", frequency: "Less Common", example: "Commission disputes between agents over who procured the buyer.", avgCost: "$3,000 - $15,000" },
    ];

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/eo-insurance" className="flex items-center gap-2 hover:opacity-80"><Home className="w-6 h-6 text-blue-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-blue-400 bg-blue-500/20 px-2 py-1 rounded border border-blue-500/30">Advanced</span>
                </div>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/eo-insurance" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-blue-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4"><AlertTriangle className="w-4 h-4 text-blue-400" /><span className="text-sm text-blue-300">Common Claims</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Common E&amp;O Claims</h1>
                    <p className="text-slate-400">Types of claims covered by E&amp;O for agents.</p>
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
                    <h3 className="text-lg font-semibold text-amber-300 mb-2">Protect Yourself</h3>
                    <p className="text-slate-300">Document everything. Use written disclosures. Get all material facts in writing. Have clients sign acknowledgments.</p>
                </div>

                <div className="mt-12 text-center"><Link href="/eo-insurance/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Premium<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="eo-insurance" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{EO_2026.citations[2]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
