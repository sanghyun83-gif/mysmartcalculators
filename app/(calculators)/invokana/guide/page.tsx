import Link from "next/link";
import { SITE, INVOKANA_2026 } from "@/lib/calculators/invokana";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Heart, ArrowLeft, ArrowRight, FileText, CheckCircle } from "lucide-react";

export const metadata = { title: `Invokana Claims Guide | ${SITE.name}`, description: "How to file an Invokana amputation lawsuit." };

export default function GuidePage() {
    const steps = [
        { title: "Confirm Invokana Use", description: "Obtain pharmacy records proving you took Invokana (canagliflozin) or Invokamet before the injury. Prescription dates and duration are critical for causation." },
        { title: "Document Amputation/Injury", description: "Gather medical records documenting the amputation, including hospital records, surgical reports, and pathology. For DKA, collect emergency room and ICU records." },
        { title: "Establish Timeline", description: "Create a timeline showing when you started Invokana and when symptoms began. Cases where amputation occurred while on Invokana have stronger causation." },
        { title: "Calculate Total Damages", description: "Document all costs: amputation surgery, prosthetics, rehabilitation, lost wages, disability, and ongoing care. Include emotional distress and reduced quality of life." },
        { title: "Consult a Pharmaceutical Injury Attorney", description: "Invokana cases require pharmaceutical litigation experience. Contact an attorney who handles drug injury cases. Free consultations typically available." },
    ];

    return (
        <>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/invokana" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-purple-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-2 mb-4"><FileText className="w-4 h-4 text-purple-400" /><span className="text-sm text-purple-300">Claims Guide</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Invokana Claims Guide</h1>
                    <p className="text-slate-400">How to file an Invokana amputation claim.</p>
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
                        {["Pharmacy prescription records", "Invokana packaging/bottles", "Amputation surgery records", "Prosthetic receipts", "Medical bills", "Lost wage documentation"].map((item, i) => (
                            <div key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /><span className="text-slate-300 text-sm">{item}</span></div>
                        ))}
                    </div>
                </div>
                <div className="mt-12 text-center"><Link href="/invokana/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="invokana" count={5} /></div></div></section>
        </>
    );
}
