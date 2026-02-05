import Link from "next/link";
import { SITE, COVERAGE_LIMITS, GL_2026, formatCurrency } from "@/lib/calculators/general-liability";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Shield, ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

export const metadata = { title: `GL Coverage Details | ${SITE.name}`, description: "General liability coverage details and limits." };

export default function CoveragePage() {
    const coverageTypes = [
        { name: "Bodily Injury", description: "Covers third-party injuries on your premises or caused by your operations. Example: Customer slips on wet floor." },
        { name: "Property Damage", description: "Covers damage to third-party property. Example: Employee damages client's equipment while working." },
        { name: "Personal Injury", description: "Covers defamation, false arrest, malicious prosecution, invasion of privacy claims." },
        { name: "Advertising Injury", description: "Covers copyright infringement, misappropriation of ideas, and defamation in your advertising." },
        { name: "Products/Completed Ops", description: "Covers claims from products you sell or work you complete. Example: Installed equipment fails after job." },
        { name: "Medical Payments", description: "Pays small medical claims without determining fault. Typically $5,000-$10,000 limit." },
    ];

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/general-liability" className="flex items-center gap-2 hover:opacity-80"><Shield className="w-6 h-6 text-blue-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-blue-400 bg-blue-500/20 px-2 py-1 rounded border border-blue-500/30">Advanced</span>
                </div>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/general-liability" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-blue-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4"><Shield className="w-4 h-4 text-blue-400" /><span className="text-sm text-blue-300">Coverage Details</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">GL Coverage Details</h1>
                    <p className="text-slate-400">What&apos;s included in general liability insurance.</p>
                </div>

                <div className="space-y-4 mb-12">
                    {coverageTypes.map((coverage, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6 flex items-start gap-4">
                            <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <div>
                                <h3 className="text-lg font-semibold text-white">{coverage.name}</h3>
                                <p className="text-slate-400 mt-1">{coverage.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Common Coverage Limits</h3>
                    <div className="space-y-3">
                        {COVERAGE_LIMITS.map((limit) => (
                            <div key={limit.id} className="flex justify-between items-center py-2 border-b border-slate-700">
                                <span className="text-slate-300">{limit.name}</span>
                                <span className="text-blue-400 font-semibold">{formatCurrency(limit.perOccurrence)} / {formatCurrency(limit.aggregate)}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 text-center"><Link href="/general-liability/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Premium<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="general-liability" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{GL_2026.citations[1]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
