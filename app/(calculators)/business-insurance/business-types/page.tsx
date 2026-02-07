import Link from "next/link";
import { SITE, BUSINESS_TYPES, BUSINESS_2026, formatCurrency } from "@/lib/calculators/business-insurance";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Briefcase, ArrowLeft, ArrowRight, Building } from "lucide-react";

export const metadata = { title: `Insurance By Business Type | ${SITE.name}`, description: "Business insurance by entity type." };

export default function BusinessTypesPage() {
    const details = [
        { id: "sole-proprietor", coverages: ["General Liability", "Professional Liability"], notes: "Personal assets at risk. Insurance essential for protection." },
        { id: "llc", coverages: ["General Liability", "BOP", "E&O"], notes: "Limited liability structure. Still need insurance for full protection." },
        { id: "partnership", coverages: ["General Liability", "Partnership Liability", "E&O"], notes: "Partners share liability. Each partner needs adequate coverage." },
        { id: "corporation", coverages: ["General Liability", "D&O", "Workers Comp", "Property"], notes: "Most protection from personal liability. Required coverage varies." },
        { id: "startup", coverages: ["General Liability", "E&O", "D&O", "Cyber"], notes: "Investors often require D&O. Tech startups need cyber liability." },
    ];

    return (
        <>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/business-insurance" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-blue-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4"><Building className="w-4 h-4 text-blue-400" /><span className="text-sm text-blue-300">By Business Type</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Insurance By Business Type</h1>
                    <p className="text-slate-400">Coverage needs for different entity structures.</p>
                </div>

                <div className="space-y-6">
                    {BUSINESS_TYPES.map((type) => {
                        const info = details.find(d => d.id === type.id);
                        return (
                            <div key={type.id} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-white">{type.name}</h3>
                                        <p className="text-slate-400 mt-1">{type.description}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-2xl font-bold text-blue-400">{formatCurrency(type.baseRate)}</p>
                                        <p className="text-xs text-slate-500">base rate/yr</p>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-300 mb-3">{info?.notes}</p>
                                <div className="flex flex-wrap gap-2">
                                    {info?.coverages.map((coverage, i) => (
                                        <span key={i} className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">{coverage}</span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-12 text-center"><Link href="/business-insurance/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Premium<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="business-insurance" count={5} /></div></div></section>
        </>
    );
}
