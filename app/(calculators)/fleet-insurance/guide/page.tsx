import Link from "next/link";
import { SITE, FLEET_SIZES, FLEET_2026, formatCurrency } from "@/lib/calculators/fleet-insurance";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Truck, ArrowLeft, ArrowRight, FileText } from "lucide-react";

export const metadata = { title: `Discount Guide | ${SITE.name}`, description: "Fleet insurance discount tiers." };

export default function GuidePage() {
    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/fleet-insurance" className="flex items-center gap-2 hover:opacity-80"><Truck className="w-6 h-6 text-blue-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-blue-400 bg-blue-500/20 px-2 py-1 rounded border border-blue-500/30">Standard</span>
                </div>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/fleet-insurance" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-blue-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/50 rounded-full px-4 py-2 mb-4"><FileText className="w-4 h-4 text-emerald-400" /><span className="text-sm text-emerald-300">Discount Guide</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Fleet Discount Tiers</h1>
                    <p className="text-slate-400">Bigger fleet = bigger savings.</p>
                </div>

                <div className="space-y-4">
                    {FLEET_SIZES.map((size) => (
                        <div key={size.id} className="bg-slate-800 border border-slate-700 rounded-xl p-6 flex justify-between items-center">
                            <div>
                                <h3 className="text-xl font-semibold text-white">{size.name}</h3>
                                <p className="text-slate-400 mt-1">{formatCurrency(size.baseRate)} per vehicle/year</p>
                            </div>
                            <div className="text-right">
                                <p className="text-3xl font-bold text-emerald-400">{Math.round(size.discount * 100)}%</p>
                                <p className="text-xs text-slate-500">discount</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-blue-300 mb-2">Additional Savings</h3>
                    <ul className="text-slate-300 space-y-2">
                        <li> Telematics: 8% additional discount</li>
                        <li> Safety program: 5% additional discount</li>
                        <li> Claims-free 3 years: 5-10% discount</li>
                        <li> Long-term policy: 3-5% discount</li>
                    </ul>
                </div>

                <div className="mt-12 text-center"><Link href="/fleet-insurance/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold">Calculate Savings<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="fleet-insurance" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{FLEET_2026.citations.join("  ")}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
