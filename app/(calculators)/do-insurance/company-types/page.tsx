import Link from "next/link";
import { SITE, COMPANY_TYPES, DO_2026, formatCurrency } from "@/lib/calculators/do-insurance";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Users, ArrowLeft, ArrowRight, Building } from "lucide-react";

export const metadata = { title: `D&O By Company Type | ${SITE.name}`, description: "D&O insurance rates by company type." };

export default function CompanyTypesPage() {
    const details = [
        { id: "private", focus: ["Investor disputes", "Employment claims", "Regulatory issues"], coverage: "Side A essential, B common" },
        { id: "nonprofit", focus: ["Donor disputes", "Board conflicts", "Employment claims"], coverage: "Side A essential, Side B" },
        { id: "startup", focus: ["VC investor claims", "Founder disputes", "IP issues"], coverage: "Investor requirement. Side A critical" },
        { id: "public", focus: ["Securities claims", "SEC investigations", "Shareholder suits"], coverage: "All sides required. High limits" },
        { id: "spac", focus: ["De-SPAC litigation", "SEC scrutiny", "Shareholder claims"], coverage: "Tail coverage critical" },
    ];

    return (
        <>

            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/do-insurance" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-blue-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4"><Building className="w-4 h-4 text-blue-400" /><span className="text-sm text-blue-300">By Company Type</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">D&amp;O By Company Type</h1>
                    <p className="text-slate-400">D&amp;O rates and focus areas by company structure.</p>
                </div>

                <div className="space-y-6">
                    {COMPANY_TYPES.map((type) => {
                        const info = details.find(d => d.id === type.id);
                        return (
                            <div key={type.id} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-white">{type.name}</h3>
                                        <p className="text-slate-400 mt-1">{info?.coverage}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-2xl font-bold text-blue-400">{formatCurrency(type.baseRate)}</p>
                                        <p className="text-xs text-slate-500">base rate/yr</p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {info?.focus.map((item, i) => (
                                        <span key={i} className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">{item}</span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-12 text-center"><Link href="/do-insurance/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Premium<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="do-insurance" count={5} /></div></div></section>

        </>
    );
}
