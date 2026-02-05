import Link from "next/link";
import { SITE, DIALYSIS_2026 } from "@/lib/calculators/dialysis";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Heart, ArrowLeft, ArrowRight, FileText, CheckCircle } from "lucide-react";

export const metadata = { title: `Dialysis Claims Guide | ${SITE.name}`, description: "How to file a dialysis injury lawsuit." };

export default function GuidePage() {
    const steps = [
        { title: "Identify the Cause", description: "Determine what caused the injury: GranuFlo/NaturaLyte, equipment failure, staff negligence, or infection. Request all dialysis treatment records from the facility." },
        { title: "Document Medical Harm", description: "Gather records of the injury: cardiac arrest, infection diagnosis, or death certificate. Include emergency room records, hospital stays, and specialist consultations." },
        { title: "Identify Defendants", description: "Potential defendants include dialysis centers (DaVita, Fresenius), equipment manufacturers, dialysate solution makers, and individual healthcare providers." },
        { title: "Calculate Total Damages", description: "Document all medical expenses, lost wages (or lost earning capacity for death cases), funeral costs, and pain and suffering. Include ongoing care needs." },
        { title: "Consult a Medical Malpractice Attorney", description: "Dialysis cases require medical expert testimony. Contact an attorney experienced in medical device and malpractice litigation. Free consultations available." },
    ];

    return (
        <>


            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-2 mb-4"><FileText className="w-4 h-4 text-purple-400" /><span className="text-sm text-purple-300">Claims Guide</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Dialysis Claims Guide</h1>
                    <p className="text-slate-400">How to file a dialysis injury claim.</p>
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
                        {["Dialysis treatment records", "Dialysate lot numbers", "Cardiac event records", "Infection diagnosis", "Medical bills", "Death certificate if applicable"].map((item, i) => (
                            <div key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /><span className="text-slate-300 text-sm">{item}</span></div>
                        ))}
                    </div>
                </div>
                <div className="mt-12 text-center"><Link href="/dialysis/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="dialysis" count={5} /></div></div></section>

        </>
    );
}
