import Link from "next/link";
import { SITE, PPI_2026 } from "@/lib/calculators/ppi";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Heart, ArrowLeft, ArrowRight, FileText, CheckCircle } from "lucide-react";

export const metadata = { title: `PPI Claims Guide | ${SITE.name}`, description: "How to file a PPI kidney damage lawsuit." };

export default function GuidePage() {
    const steps = [
        { title: "Confirm PPI Use", description: "Obtain pharmacy records proving you took Nexium, Prilosec, Prevacid, or other PPIs. Duration of use is critical - longer use strengthens causation." },
        { title: "Document Kidney Injury", description: "Gather medical records showing kidney disease diagnosis, kidney function tests (GFR, creatinine), dialysis records if applicable, or nephrology consultations." },
        { title: "Establish Timeline", description: "Create a timeline showing kidney disease developed after PPI use began. Cases where kidney function was normal before PPI use have stronger claims." },
        { title: "Calculate Total Damages", description: "Document all medical expenses, dialysis costs, lost wages, disability, and ongoing care needs. Include diminished quality of life and pain and suffering." },
        { title: "Consult a Pharmaceutical Attorney", description: "PPI cases require pharmaceutical litigation expertise. Contact an attorney experienced in drug injury lawsuits. Free consultations typically available." },
    ];

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/ppi" className="flex items-center gap-2 hover:opacity-80"><Heart className="w-6 h-6 text-purple-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/ppi" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-purple-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-2 mb-4"><FileText className="w-4 h-4 text-purple-400" /><span className="text-sm text-purple-300">Claims Guide</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">PPI Claims Guide</h1>
                    <p className="text-slate-400">How to file a kidney damage claim.</p>
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
                        {["PPI prescription records", "Kidney function tests", "Dialysis records (if any)", "Nephrology consultations", "Prior kidney function tests", "Medical bills"].map((item, i) => (
                            <div key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /><span className="text-slate-300 text-sm">{item}</span></div>
                        ))}
                    </div>
                </div>
                <div className="mt-12 text-center"><Link href="/ppi/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="ppi" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{PPI_2026.citations[0]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
