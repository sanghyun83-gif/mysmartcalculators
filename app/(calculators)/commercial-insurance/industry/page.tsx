import Link from "next/link";
import { SITE, INDUSTRY_TYPES, COMMERCIAL_2026 } from "@/lib/calculators/commercial-insurance";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Building2, ArrowLeft, ArrowRight, Factory } from "lucide-react";

export const metadata = { title: `Commercial Insurance By Industry | ${SITE.name}`, description: "Industry-specific commercial insurance rates." };

export default function IndustryPage() {
    const industryDetails = [
        { id: "office", name: "Office / Professional", risk: "Low", typical: ["General Liability", "Workers Comp", "Professional Liability"], notes: "Low physical risk. Focus on E&O and cyber liability." },
        { id: "retail", name: "Retail Store", risk: "Medium", typical: ["General Liability", "Property", "Workers Comp"], notes: "Slip-and-fall exposure. Product liability if selling goods." },
        { id: "restaurant", name: "Restaurant / Food Service", risk: "High", typical: ["General Liability", "Workers Comp", "Liquor Liability"], notes: "Burns, slips, and cuts. Liquor liability if serving alcohol." },
        { id: "construction", name: "Construction", risk: "Very High", typical: ["General Liability", "Workers Comp", "Commercial Auto", "Builder's Risk"], notes: "High injury rates. Class code significantly impacts rates." },
        { id: "manufacturing", name: "Manufacturing", risk: "High", typical: ["General Liability", "Workers Comp", "Product Liability", "Property"], notes: "Equipment risks. Product liability for defective goods." },
    ];

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
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4"><Factory className="w-4 h-4 text-blue-400" /><span className="text-sm text-blue-300">By Industry</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Commercial Insurance By Industry</h1>
                    <p className="text-slate-400">Industry-specific coverage requirements and rates.</p>
                </div>

                <div className="space-y-6">
                    {industryDetails.map((industry) => {
                        const multiplier = INDUSTRY_TYPES.find(i => i.id === industry.id)?.multiplier || 1;
                        return (
                            <div key={industry.id} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-white">{industry.name}</h3>
                                        <p className="text-slate-400 mt-1">{industry.notes}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className={`text-lg font-bold ${industry.risk === 'Low' ? 'text-emerald-400' : industry.risk === 'Medium' ? 'text-yellow-400' : 'text-red-400'}`}>{industry.risk} Risk</p>
                                        <p className="text-xs text-slate-500">{multiplier}x multiplier</p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {industry.typical.map((coverage, i) => (
                                        <span key={i} className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">{coverage}</span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-12 text-center"><Link href="/commercial-insurance/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Premium<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="commercial-insurance" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{COMMERCIAL_2026.citations[2]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
