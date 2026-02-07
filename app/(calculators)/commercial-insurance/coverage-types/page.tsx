import Link from "next/link";
import { SITE, COVERAGE_TYPES, COMMERCIAL_2026, formatCurrency } from "@/lib/calculators/commercial-insurance";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Building2, ArrowLeft, ArrowRight, Shield } from "lucide-react";

export const metadata = { title: `Commercial Insurance Coverage Types | ${SITE.name}`, description: "Compare commercial insurance coverage types." };

export default function CoverageTypesPage() {
    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/commercial-insurance" className="flex items-center gap-2 hover:opacity-80"><Building2 className="w-6 h-6 text-blue-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-blue-400 bg-blue-500/20 px-2 py-1 rounded border border-blue-500/30">Advanced</span>
                </div>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/commercial-insurance" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-blue-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4"><Shield className="w-4 h-4 text-blue-400" /><span className="text-sm text-blue-300">Coverage Types</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Commercial Insurance Coverage Types</h1>
                    <p className="text-slate-400">Compare policy options for your business.</p>
                </div>

                <div className="space-y-6">
                    {COVERAGE_TYPES.map((coverage) => (
                        <div key={coverage.id} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-semibold text-white">{coverage.name}</h3>
                                    <p className="text-slate-400 mt-1">{coverage.description}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-2xl font-bold text-blue-400">{formatCurrency(coverage.baseRate)}</p>
                                    <p className="text-xs text-slate-500">base rate/yr</p>
                                </div>
                            </div>
                            <div className="bg-slate-700/50 rounded-lg p-3">
                                <p className="text-sm text-slate-300">
                                    {coverage.id === 'gl' && 'Required by most commercial leases. Covers slip-and-fall, property damage to others, and advertising injury.'}
                                    {coverage.id === 'wc' && 'Required by law in most states. Covers medical expenses and lost wages for injured employees.'}
                                    {coverage.id === 'bop' && 'Cost-effective bundle for small businesses. Combines property and general liability coverage.'}
                                    {coverage.id === 'professional' && 'Essential for service providers. Covers claims of negligence, errors, and omissions.'}
                                    {coverage.id === 'commercial-auto' && 'Required if using vehicles for business. Covers accidents, cargo, and liability.'}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center"><Link href="/commercial-insurance/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Premium<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="commercial-insurance" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{COMMERCIAL_2026.citations[1]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
