import Link from "next/link";
import { SITE, BUSINESS_2026 } from "@/lib/calculators/business-insurance";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Briefcase, ArrowLeft, ArrowRight, Rocket, CheckCircle } from "lucide-react";

export const metadata = { title: `Startup Insurance Guide | ${SITE.name}`, description: "Insurance for startups and new businesses." };

export default function StartupPage() {
    const coverages = [
        { name: "General Liability", cost: "$400-800/year", essential: true, description: "Protects against third-party bodily injury and property damage claims." },
        { name: "Professional Liability (E&O)", cost: "$500-1,500/year", essential: true, description: "Covers claims of negligence, errors, or omissions in your services." },
        { name: "Directors & Officers (D&O)", cost: "$1,000-3,000/year", essential: false, description: "Required by investors. Protects management from personal liability." },
        { name: "Cyber Liability", cost: "$500-2,000/year", essential: false, description: "Essential for tech startups. Covers data breaches and cyber attacks." },
        { name: "Product Liability", cost: "$800-2,500/year", essential: false, description: "Required if selling physical products. Covers defective product claims." },
    ];

    return (
        <>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/business-insurance" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-blue-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4"><Rocket className="w-4 h-4 text-blue-400" /><span className="text-sm text-blue-300">Startup Insurance</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Insurance for Startups</h1>
                    <p className="text-slate-400">Coverage for new businesses and early-stage companies.</p>
                </div>

                <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-6 mb-8">
                    <h3 className="text-lg font-semibold text-emerald-300 mb-2">Startup Insurance Costs</h3>
                    <p className="text-slate-300">Most startups spend $500-$3,000/year on essential coverage. Costs depend on industry, revenue, and coverage needs.</p>
                </div>

                <div className="space-y-4">
                    {coverages.map((coverage, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <div className="flex justify-between items-start mb-2">
                                <div className="flex items-center gap-2">
                                    <h3 className="text-lg font-semibold text-white">{coverage.name}</h3>
                                    {coverage.essential && <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">Essential</span>}
                                </div>
                                <p className="text-blue-400 font-semibold">{coverage.cost}</p>
                            </div>
                            <p className="text-slate-400">{coverage.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-blue-300 mb-3">Investor Requirements</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                        {["D&O Insurance", "General Liability", "Cyber Liability", "Employment Practices", "Key Person Insurance", "E&O / Professional"].map((item, i) => (
                            <div key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /><span className="text-slate-300 text-sm">{item}</span></div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 text-center"><Link href="/business-insurance/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Premium<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="business-insurance" count={5} /></div></div></section>
        </>
    );
}
