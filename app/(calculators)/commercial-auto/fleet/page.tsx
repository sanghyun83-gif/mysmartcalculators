import Link from "next/link";
import { SITE, CA_2026 } from "@/lib/calculators/commercial-auto";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Truck, ArrowLeft, ArrowRight, Shield } from "lucide-react";

export const metadata = { title: `Fleet Discounts | ${SITE.name}`, description: "Fleet discounts for commercial auto." };

export default function FleetPage() {
    const discounts = [
        { size: "1-4 vehicles", discount: "Standard rates", tip: "Consider bundling with other business insurance" },
        { size: "5-9 vehicles", discount: "5-8% discount", tip: "Qualifies for small fleet program" },
        { size: "10-24 vehicles", discount: "10-15% discount", tip: "Medium fleet with dedicated underwriting" },
        { size: "25-49 vehicles", discount: "15-20% discount", tip: "Large fleet program with custom pricing" },
        { size: "50+ vehicles", discount: "20-25%+ discount", tip: "Enterprise fleet with risk management services" },
    ];

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/commercial-auto" className="flex items-center gap-2 hover:opacity-80"><Truck className="w-6 h-6 text-blue-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-blue-400 bg-blue-500/20 px-2 py-1 rounded border border-blue-500/30">Advanced</span>
                </div>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/commercial-auto" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-blue-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/50 rounded-full px-4 py-2 mb-4"><Shield className="w-4 h-4 text-emerald-400" /><span className="text-sm text-emerald-300">Fleet Discounts</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Fleet Discount Tiers</h1>
                    <p className="text-slate-400">Multi-vehicle savings for your business.</p>
                </div>

                <div className="space-y-4">
                    {discounts.map((tier, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-semibold text-white">{tier.size}</h3>
                                <span className="text-emerald-400 font-bold">{tier.discount}</span>
                            </div>
                            <p className="text-slate-400">{tier.tip}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-emerald-300 mb-2">Additional Fleet Benefits</h3>
                    <ul className="text-slate-300 space-y-2">
                        <li>??Dedicated claims handling</li>
                        <li>??Risk management consultation</li>
                        <li>??Telematics integration discounts</li>
                        <li>??Driver training program credits</li>
                    </ul>
                </div>

                <div className="mt-12 text-center"><Link href="/commercial-auto/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold">Calculate Fleet Premium<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="commercial-auto" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{CA_2026.citations[2]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
