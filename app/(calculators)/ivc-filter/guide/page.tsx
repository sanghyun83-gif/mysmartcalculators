import Link from "next/link";
import { SITE, IVC_2026 } from "@/lib/calculators/ivc-filter";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Heart, ArrowLeft, ArrowRight, FileText, CheckCircle } from "lucide-react";

export const metadata = { title: `IVC Filter Claims Guide | ${SITE.name}`, description: "How to file an IVC filter lawsuit. Evidence, eligibility." };

export default function GuidePage() {
    const steps = [
        { title: "Document Filter Implantation", description: "Obtain records showing IVC filter implant date, brand, model, and reason for implantation. Also gather records showing if/when the filter was removed." },
        { title: "Document Complications", description: "Collect imaging and medical records showing filter fracture, migration, tilting, or organ perforation. CT scans, X-rays, and surgical reports are key evidence." },
        { title: "Identify Filter Brand", description: "Determine the exact brand and model of your filter. Cook Medical and Bard filters are included in major settlements. Your surgical records should identify the device." },
        { title: "Calculate Damages", description: "Document all medical expenses, surgeries, hospitalizations, and ongoing care. Pain and suffering multipliers are typically 2-5x medical expenses." },
        { title: "Consult an IVC Attorney", description: "Contact an attorney experienced in IVC filter litigation. Many cases have been settled favorably. Free consultations are typically available." },
    ];

    return (
        <>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/ivc-filter" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-purple-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-2 mb-4"><FileText className="w-4 h-4 text-purple-400" /><span className="text-sm text-purple-300">Claims Guide</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">IVC Filter Claims Guide</h1>
                    <p className="text-slate-400">How to file a blood clot filter claim.</p>
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
                        {["Implant surgical records", "Filter brand/model", "CT/X-ray imaging", "Removal records", "Complication reports", "Medical bills"].map((item, i) => (
                            <div key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /><span className="text-slate-300 text-sm">{item}</span></div>
                        ))}
                    </div>
                </div>
                <div className="mt-12 text-center"><Link href="/ivc-filter/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="ivc-filter" count={5} /></div></div></section>
        </>
    );
}
