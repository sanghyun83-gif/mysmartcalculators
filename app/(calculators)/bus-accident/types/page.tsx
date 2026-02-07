import Link from "next/link";
import { SITE, BUS_TYPES, BUS_2026, formatCurrency } from "@/lib/calculators/bus-accident";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Bus, ArrowLeft, ArrowRight, AlertTriangle } from "lucide-react";

export const metadata = { title: `Bus Types & Liability | ${SITE.name}`, description: "Different bus types and their liability rules." };

const busDetails = [
    { name: "Public Transit Bus", avgSettlement: "$150,000 - $500,000", details: "City and metro buses operated by government transit agencies. Subject to government immunity limits but common carrier liability applies.", special: "Tort claim notice required (30-180 days)" },
    { name: "School Bus", avgSettlement: "$200,000 - $750,000", details: "School buses transporting children. School districts and private bus companies can be liable. Cases involving child injuries receive extra attention.", special: "Higher settlements for child victims" },
    { name: "Charter / Tour Bus", avgSettlement: "$175,000 - $600,000", details: "Private charter and tour buses regulated by FMCSA. Must carry $5M minimum insurance. Common carrier liability with full damage recovery.", special: "$5M minimum insurance requirement" },
    { name: "Greyhound / Intercity", avgSettlement: "$150,000 - $550,000", details: "Long-distance intercity buses. Large commercial carriers with substantial insurance. Rollover accidents are particularly severe.", special: "Interstate commerce regulations apply" },
];

export default function TypesPage() {
    return (
        <>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/bus-accident" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-amber-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/50 rounded-full px-4 py-2 mb-4"><Bus className="w-4 h-4 text-amber-400" /><span className="text-sm text-amber-300">Bus Types</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Bus Types &amp; Liability</h1>
                    <p className="text-slate-400">Different bus types and their liability rules.</p>
                </div>
                <div className="space-y-6">
                    {busDetails.map((bus, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold text-white">{bus.name}</h3>
                                <span className="text-amber-400 font-semibold">{bus.avgSettlement}</span>
                            </div>
                            <p className="text-slate-400 mb-4">{bus.details}</p>
                            <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-3 flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-amber-400" /><span className="text-sm text-amber-200">{bus.special}</span></div>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center"><Link href="/bus-accident/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="bus-accident" count={5} /></div></div></section>
        </>
    );
}
