import Link from "next/link";
import { SITE, MOM_2026 } from "@/lib/calculators/metal-hip";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Heart, ArrowLeft, ArrowRight, FileText, CheckCircle } from "lucide-react";

export const metadata = { title: `MoM Hip Claims Guide | ${SITE.name}`, description: "How to file a metal-on-metal hip lawsuit." };

export default function GuidePage() {
    const steps = [
        { title: "Confirm MoM Hip Implant", description: "Obtain surgical records confirming you received a metal-on-metal hip implant. Identify the manufacturer and product. Common manufacturers include DePuy, Stryker, Zimmer, and Smith & Nephew." },
        { title: "Get Blood Metal Testing", description: "Request blood tests for cobalt and chromium levels. Levels above 7 ppb are concerning. Very high levels (>10 ppb) indicate significant metal release and strengthen claims." },
        { title: "Document Complications", description: "Gather medical records showing metallosis, pseudotumors, bone damage, revision surgery, or systemic symptoms like heart problems, neurological issues, or thyroid dysfunction." },
        { title: "Calculate Total Damages", description: "Document all medical expenses, lost wages, ongoing treatment costs, and quality of life impact. Include revision surgery costs and future medical needs." },
        { title: "Consult a Mass Tort Attorney", description: "MoM hip cases require specialized mass tort experience. Attorneys work on contingency. Free consultations evaluate your specific case against the manufacturer." },
    ];

    return (
        <>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/metal-hip" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-purple-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-2 mb-4"><FileText className="w-4 h-4 text-purple-400" /><span className="text-sm text-purple-300">Claims Guide</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">MoM Hip Claims Guide</h1>
                    <p className="text-slate-400">How to file a metal-on-metal hip claim.</p>
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
                    <h3 className="text-lg font-semibold text-purple-300 mb-3">Key Evidence to Gather</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                        {["Hip implant surgical records", "Product identification", "Blood metal tests (Co/Cr)", "Revision surgery records", "Imaging (X-ray, MRI, CT)", "Medical bills and expenses"].map((item, i) => (
                            <div key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /><span className="text-slate-300 text-sm">{item}</span></div>
                        ))}
                    </div>
                </div>
                <div className="mt-12 text-center"><Link href="/metal-hip/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="metal-hip" count={5} /></div></div></section>
        </>
    );
}
