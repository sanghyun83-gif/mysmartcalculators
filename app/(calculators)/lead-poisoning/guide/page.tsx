import Link from "next/link";
import { SITE, LEAD_POISONING_2026 } from "@/lib/calculators/lead-poisoning";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Droplets, ArrowLeft, ArrowRight, FileText, CheckCircle } from "lucide-react";

export const metadata = { title: `How to File a Lead Poisoning Claim | ${SITE.name}`, description: "Step-by-step guide to filing a lead poisoning lawsuit. Evidence needed, defendants, damages." };

export default function GuidePage() {
    const steps = [
        { title: "Get Blood Lead Testing", description: "Obtain official blood lead level tests for victim(s). Keep all medical records documenting elevated levels and symptoms." },
        { title: "Document the Exposure Source", description: "Identify where lead exposure occurred. Have property inspected for lead paint, test water for lead, or document occupational exposure." },
        { title: "Preserve Evidence", description: "Take photos of deteriorating paint, keep water test results, save product packaging. Evidence can be lost through renovation or cleanup." },
        { title: "Identify Responsible Parties", description: "Landlords, property owners, water utilities, employers, product manufacturers. Multiple parties may share liability." },
        { title: "Calculate Your Damages", description: "Document all costs: medical bills, special education, lost earnings, therapy. Keep receipts and records of all expenses." },
        { title: "Consult a Lead Poisoning Attorney", description: "Experienced attorneys work on contingency and know how to maximize settlements. Time limits apply so act quickly." },
    ];

    return (
        <>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/lead-poisoning" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-purple-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-2 mb-4"><FileText className="w-4 h-4 text-purple-400" /><span className="text-sm text-purple-300">Claims Guide</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">How to File a Lead Poisoning Claim</h1>
                    <p className="text-slate-400">Step-by-step guide to pursuing compensation for lead exposure.</p>
                </div>
                <div className="space-y-6">
                    {steps.map((step, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6 flex gap-4">
                            <div className="flex-shrink-0"><div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center"><span className="text-purple-400 font-bold">{i + 1}</span></div></div>
                            <div><h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3><p className="text-slate-400">{step.description}</p></div>
                        </div>
                    ))}
                </div>
                <div className="mt-12 bg-purple-900/20 border border-purple-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-purple-300 mb-3">Key Evidence for Lead Poisoning Cases</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                        {["Blood lead test results", "Medical records and diagnoses", "Property inspection reports", "Photos/videos of lead paint", "Water test results", "Employment records (occupational)"].map((item, i) => (
                            <div key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /><span className="text-slate-300 text-sm">{item}</span></div>
                        ))}
                    </div>
                </div>
                <div className="mt-12 text-center"><Link href="/lead-poisoning/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Calculate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="lead-poisoning" count={5} /></div></div></section>
        </>
    );
}
