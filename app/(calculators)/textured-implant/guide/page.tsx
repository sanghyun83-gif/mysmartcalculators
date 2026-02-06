import Link from "next/link";
import { SITE, TEXTURED_2026, IMPLANT_PRODUCTS } from "@/lib/calculators/textured-implant";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Heart, ArrowLeft, ArrowRight, FileText, CheckCircle, AlertTriangle } from "lucide-react";

export const metadata = { title: `Textured Implant Claims Guide | ${SITE.name}`, description: "How to file an Allergan recall lawsuit." };

export default function GuidePage() {
    const steps = [
        { title: "Confirm Textured Implant", description: "Obtain surgical records confirming you have or had textured breast implants. BIOCELL is Allergan's textured surface technology. Look for product name and lot number." },
        { title: "Check for Symptoms", description: "BIA-ALCL symptoms include breast swelling, fluid around implant (seroma), breast pain, or lumps. If you have symptoms, seek immediate medical evaluation." },
        { title: "Document Medical Treatment", description: "Gather all records of explant surgery, pathology reports for ALCL, follow-up care, and any complications. En bloc capsulectomy records are particularly important." },
        { title: "Calculate Total Damages", description: "Document explant surgery costs, diagnostic tests, treatment expenses, lost wages, and emotional distress. BIA-ALCL cases include chemotherapy costs." },
        { title: "Consult a Recall Attorney", description: "Contact an attorney experienced in Allergan recall litigation. Cases against AbbVie (Allergan's parent company) are ongoing. Free consultations available." },
    ];

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/textured-implant" className="flex items-center gap-2 hover:opacity-80"><Heart className="w-6 h-6 text-purple-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/textured-implant" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-purple-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/50 rounded-full px-4 py-2 mb-4"><FileText className="w-4 h-4 text-red-400" /><span className="text-sm text-red-300">Recall Claims Guide</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Allergan Recall Claims Guide</h1>
                    <p className="text-slate-400">How to file a textured implant recall claim.</p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-2xl p-6 mb-8">
                    <div className="flex items-start gap-3 mb-4"><AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" /><h2 className="text-lg font-semibold text-red-400">Recalled Products</h2></div>
                    <div className="grid md:grid-cols-2 gap-3">
                        {IMPLANT_PRODUCTS.map((product) => (
                            <div key={product.id} className={`p-3 rounded-lg border ${product.recalled ? 'bg-red-500/10 border-red-500/30' : 'bg-slate-700/50 border-slate-600'}`}>
                                <p className="text-white font-medium">{product.name}</p>
                                {product.recalled && <span className="text-xs text-red-400">?�️ RECALLED - July 2019</span>}
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
                        {["Implant surgical records", "Product lot number", "Explant surgery records", "Pathology reports", "Medical bills", "BIA-ALCL diagnosis if applicable"].map((item, i) => (
                            <div key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /><span className="text-slate-300 text-sm">{item}</span></div>
                        ))}
                    </div>
                </div>
                <div className="mt-12 text-center"><Link href="/textured-implant/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="textured-implant" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{TEXTURED_2026.citations[0]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
