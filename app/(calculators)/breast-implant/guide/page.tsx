import Link from "next/link";
import { SITE, BREAST_IMPLANT_2026, MANUFACTURERS } from "@/lib/calculators/breast-implant";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Heart, ArrowLeft, ArrowRight, FileText, CheckCircle } from "lucide-react";

export const metadata = { title: `BII Claims Guide | ${SITE.name}`, description: "How to file a breast implant illness lawsuit." };

export default function GuidePage() {
    const steps = [
        { title: "Identify Your Implants", description: "Obtain surgical records identifying the manufacturer, model, and lot number. Allergan BIOCELL textured implants were recalled and have strong claims." },
        { title: "Get Medical Documentation", description: "Gather records documenting your symptoms, diagnosis, and treatment. For ALCL, pathology reports are critical. For BII, document systemic symptoms and specialist visits." },
        { title: "Document Explant Surgery", description: "If you had implants removed, obtain complete surgical and pathology records. En bloc capsulectomy records are particularly important for proving causation." },
        { title: "Calculate Total Damages", description: "Document all expenses including surgeries, specialist visits, lost wages, and ongoing care. BII cases should document impact on quality of life." },
        { title: "Consult a Breast Implant Attorney", description: "Contact an attorney experienced in MDL 2921 litigation. Cases are complex and involve multiple manufacturers. Free consultations are typically available." },
    ];

    return (
        <>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/breast-implant" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-purple-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-2 mb-4"><FileText className="w-4 h-4 text-purple-400" /><span className="text-sm text-purple-300">Claims Guide</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Breast Implant Claims Guide</h1>
                    <p className="text-slate-400">How to file a BII or ALCL lawsuit.</p>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 mb-8">
                    <h2 className="text-lg font-semibold text-white mb-4">Defendant Manufacturers</h2>
                    <div className="grid md:grid-cols-2 gap-3">
                        {MANUFACTURERS.map((mfr) => (
                            <div key={mfr.id} className={`p-3 rounded-lg border ${mfr.recalled ? 'bg-red-500/10 border-red-500/30' : 'bg-slate-700/50 border-slate-600'}`}>
                                <p className="text-white font-medium">{mfr.name}</p>
                                {mfr.recalled && <span className="text-xs text-red-400">⚠️ RECALLED</span>}
                            </div>
                        ))}
                    </div>
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
                        {["Implant surgical records", "Implant device ID/lot number", "Pathology reports", "BIA-ALCL diagnosis", "Explant surgery records", "Medical bills"].map((item, i) => (
                            <div key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /><span className="text-slate-300 text-sm">{item}</span></div>
                        ))}
                    </div>
                </div>
                <div className="mt-12 text-center"><Link href="/breast-implant/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="breast-implant" count={5} /></div></div></section>
        </>
    );
}
