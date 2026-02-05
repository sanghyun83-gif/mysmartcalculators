import Link from "next/link";
import { SITE, POWERPORT_2026 } from "@/lib/calculators/bard-powerport";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Syringe, ArrowLeft, ArrowRight, FileText, CheckCircle } from "lucide-react";

export const metadata = { title: `Bard PowerPort Claims Guide | ${SITE.name}`, description: "How to file a Bard PowerPort lawsuit. Evidence, eligibility." };

export default function GuidePage() {
    const steps = [
        { title: "Confirm Device Implantation", description: "Obtain medical records confirming you received a Bard PowerPort or similar Bard port catheter. Include implantation date and device model if available." },
        { title: "Document Complications", description: "Gather records of any complications: catheter fracture, migration, blood clots, infection, pulmonary embolism, or emergency surgery. Imaging showing device location is valuable." },
        { title: "Check Recall Status", description: "Verify if your device model is included in FDA Class I recall. Your attorney can help determine if your specific device is covered." },
        { title: "Calculate Damages", description: "Document all medical expenses, hospitalizations, lost wages, and ongoing care needs. Emergency surgery and extended hospitalization increase claim value." },
        { title: "Consult a Device Attorney", description: "Contact an attorney experienced in medical device litigation. Many offer free consultations and work on contingency. Act promptly to protect your rights." },
    ];

    return (
        <>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/bard-powerport" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-purple-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-2 mb-4"><FileText className="w-4 h-4 text-purple-400" /><span className="text-sm text-purple-300">Claims Guide</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Bard PowerPort Claims Guide</h1>
                    <p className="text-slate-400">How to file a medical device claim.</p>
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
                        {["Implant records", "Device model/lot number", "Complication reports", "Imaging showing migration", "Surgery records", "Hospital bills"].map((item, i) => (
                            <div key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /><span className="text-slate-300 text-sm">{item}</span></div>
                        ))}
                    </div>
                </div>
                <div className="mt-12 text-center"><Link href="/bard-powerport/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="bard-powerport" count={5} /></div></div></section>
        </>
    );
}
