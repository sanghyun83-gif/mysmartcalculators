import Link from "next/link";
import { SITE, ACCUTANE_2026 } from "@/lib/calculators/accutane";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Heart, ArrowLeft, ArrowRight, FileText, CheckCircle } from "lucide-react";

export const metadata = { title: `Accutane Claims Guide | ${SITE.name}`, description: "How to file an Accutane lawsuit claim." };

export default function GuidePage() {
    const steps = [
        { title: "Gather Prescription Records", description: "Collect all Accutane/isotretinoin prescription records including prescribing dermatologist, pharmacy records, dates, and dosages." },
        { title: "Document IBD Diagnosis", description: "Gather medical records showing Crohn's disease, ulcerative colitis, or IBD diagnosis including colonoscopy/endoscopy results." },
        { title: "Establish Timeline", description: "Document the relationship between Accutane use and symptom onset. Cases diagnosed during or shortly after treatment are strongest." },
        { title: "Calculate Damages", description: "Compile all medical expenses, lost wages, and ongoing treatment costs related to your condition." },
        { title: "Consult Accutane Attorney", description: "Accutane cases require specialized pharmaceutical litigation experience. Many attorneys work on contingency." },
    ];

    return (
        <>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/accutane" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-purple-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-2 mb-4"><FileText className="w-4 h-4 text-purple-400" /><span className="text-sm text-purple-300">Claims Guide</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Accutane Claims Guide</h1>
                    <p className="text-slate-400">How to file an Accutane claim.</p>
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
                        {["Accutane prescriptions", "Pharmacy records", "IBD diagnosis records", "Colonoscopy results", "Treatment records", "Lost wage documentation"].map((item, i) => (
                            <div key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /><span className="text-slate-300 text-sm">{item}</span></div>
                        ))}
                    </div>
                </div>
                <div className="mt-12 text-center"><Link href="/accutane/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="accutane" count={5} /></div></div></section>
        </>
    );
}
