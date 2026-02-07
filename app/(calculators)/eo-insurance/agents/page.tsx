import Link from "next/link";
import { SITE, AGENT_TYPES, EO_2026, formatCurrency } from "@/lib/calculators/eo-insurance";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Home, ArrowLeft, ArrowRight, Users } from "lucide-react";

export const metadata = { title: `E&O By Agent Type | ${SITE.name}`, description: "E&O insurance rates by agent type." };

export default function AgentsPage() {
    const details = [
        { id: "real-estate", requirements: ["State may require", "Brokerage often requires"], common: "$250K-$1M limits" },
        { id: "insurance-agent", requirements: ["State licensing requires", "Carrier contracts require"], common: "$500K-$1M limits" },
        { id: "mortgage-broker", requirements: ["NMLS may require", "Lender overlays"], common: "$300K-$1M limits" },
        { id: "notary", requirements: ["Lenders require for closings", "State bonding separate"], common: "$25K-$100K limits" },
        { id: "property-manager", requirements: ["Landlord contracts require", "CAM duties covered"], common: "$500K-$1M limits" },
        { id: "travel-agent", requirements: ["Host agency may require", "Supplier contracts"], common: "$250K-$500K limits" },
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
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4"><Users className="w-4 h-4 text-blue-400" /><span className="text-sm text-blue-300">By Agent Type</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">E&amp;O By Agent Type</h1>
                    <p className="text-slate-400">E&amp;O rates and requirements by profession.</p>
                </div>

                <div className="space-y-6">
                    {AGENT_TYPES.map((agent) => {
                        const info = details.find(d => d.id === agent.id);
                        return (
                            <div key={agent.id} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-white">{agent.name}</h3>
                                        <p className="text-slate-400 mt-1">Common limits: {info?.common}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-2xl font-bold text-blue-400">{formatCurrency(agent.baseRate)}</p>
                                        <p className="text-xs text-slate-500">base rate/yr</p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {info?.requirements.map((req, i) => (
                                        <span key={i} className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">{req}</span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-12 text-center"><Link href="/eo-insurance/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Premium<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="eo-insurance" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{EO_2026.citations[1]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
