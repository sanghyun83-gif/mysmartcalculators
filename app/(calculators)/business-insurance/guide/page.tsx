import Link from "next/link";
import { SITE, BUSINESS_2026 } from "@/lib/calculators/business-insurance";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Briefcase, ArrowLeft, ArrowRight, FileText, CheckCircle } from "lucide-react";

export const metadata = { title: `Business Insurance Guide | ${SITE.name}`, description: "Guide to small business insurance coverage." };

export default function GuidePage() {
    const steps = [
        { title: "Identify Your Business Risks", description: "Assess what could go wrong: customer injuries, employee accidents, property damage, professional errors, or cyber attacks." },
        { title: "Determine Legal Requirements", description: "Workers comp is required in most states if you have employees. Some industries require additional coverage." },
        { title: "Match Coverage to Your Business Type", description: "Sole proprietors, LLCs, and corporations have different liability exposures. Match coverage to your structure." },
        { title: "Compare Quotes from Multiple Insurers", description: "Get quotes from at least 3-5 insurers. Compare coverage limits, deductibles, and exclusions - not just price." },
        { title: "Review and Update Annually", description: "As your business grows, your insurance needs change. Review coverage annually or when major changes occur." },
    ];

    return (
        <>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/business-insurance" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-blue-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4"><FileText className="w-4 h-4 text-blue-400" /><span className="text-sm text-blue-300">Coverage Guide</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Business Insurance Guide</h1>
                    <p className="text-slate-400">How to choose the right business insurance.</p>
                </div>
                <div className="space-y-6">
                    {steps.map((step, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6 flex gap-4">
                            <div className="flex-shrink-0"><div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center"><span className="text-blue-400 font-bold">{i + 1}</span></div></div>
                            <div><h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3><p className="text-slate-400">{step.description}</p></div>
                        </div>
                    ))}
                </div>
                <div className="mt-12 bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-blue-300 mb-3">Essential Coverages</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                        {["General Liability", "Business Owner Policy (BOP)", "Workers Compensation", "Professional Liability", "Commercial Property", "Cyber Liability"].map((item, i) => (
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
