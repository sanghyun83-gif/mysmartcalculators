import Link from "next/link";
import { SITE, DEPUY_KNEE_2026 } from "@/lib/calculators/depuy-knee";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Heart, ArrowLeft, ArrowRight, FileText, CheckCircle } from "lucide-react";

export const metadata = { title: `DePuy Knee Claims Guide | ${SITE.name}`, description: "How to file a DePuy knee implant lawsuit." };

export default function GuidePage() {
    const steps = [
        { title: "Confirm DePuy Knee Implant", description: "Obtain surgical records confirming you received a DePuy Attune, Sigma, LCS, or other DePuy knee implant. Product identification is essential for your claim." },
        { title: "Document Failure Symptoms", description: "Gather medical records showing tibial loosening, instability, chronic pain, swelling, or other complications. X-rays and MRIs showing implant position are important." },
        { title: "Record Revision Surgery", description: "If you had revision surgery to replace the DePuy knee, document all surgical records, hospital stays, and rehabilitation. Revision surgery significantly increases claim value." },
        { title: "Calculate Total Damages", description: "Document all medical expenses, lost wages, ongoing treatment, and quality of life impact. Include physical therapy, mobility aids, and future medical needs." },
        { title: "Consult a Medical Device Attorney", description: "DePuy knee cases require specialized mass tort experience. Attorneys work on contingency. Free consultations evaluate your specific case value." },
    ];

    return (
        <>


            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-2 mb-4"><FileText className="w-4 h-4 text-purple-400" /><span className="text-sm text-purple-300">Claims Guide</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">DePuy Knee Claims Guide</h1>
                    <p className="text-slate-400">How to file a knee implant failure claim.</p>
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
                        {["Knee implant surgical records", "Product identification", "X-rays showing loosening", "Revision surgery records", "Physical therapy records", "Medical bills and expenses"].map((item, i) => (
                            <div key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /><span className="text-slate-300 text-sm">{item}</span></div>
                        ))}
                    </div>
                </div>
                <div className="mt-12 text-center"><Link href="/depuy-knee/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="depuy-knee" count={5} /></div></div></section>

        </>
    );
}
