import Link from "next/link";
import { SITE, ROUNDUP_2026 } from "@/lib/calculators/roundup";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Leaf, ArrowLeft, ArrowRight, FileText, CheckCircle } from "lucide-react";

export const metadata = { title: `How to File a Roundup Claim | ${SITE.name}`, description: "Step-by-step guide to filing a Roundup lawsuit. Evidence needed, lawyers, timeline." };

export default function GuidePage() {
    const steps = [
        { title: "Confirm NHL/Lymphoma Diagnosis", description: "Obtain complete medical records confirming your Non-Hodgkin lymphoma or other lymphoma diagnosis. Include pathology reports, treatment records, and ongoing care documentation." },
        { title: "Document Roundup Exposure", description: "Gather evidence of glyphosate exposure: purchase receipts, photos of product use, employment records (if occupational), witness statements from family or coworkers." },
        { title: "Calculate Exposure Duration", description: "Determine how long and how frequently you used Roundup. Longer exposure with higher intensity typically strengthens your case." },
        { title: "Compile Damages Evidence", description: "Document all medical expenses, lost wages, disability, pain and suffering. Include bills, pay stubs, and statements about impact on quality of life." },
        { title: "Consult a Roundup Attorney", description: "Experienced Roundup lawyers work on contingency and can evaluate your case strength. Most firms offer free consultations." },
        { title: "File Your Lawsuit", description: "Your attorney will file the complaint and handle discovery. Cases may settle through Bayer's settlement program or proceed to individual resolution." },
    ];

    return (
        <div className="min-h-screen bg-slate-900">
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/roundup" className="flex items-center gap-2 hover:opacity-80"><Leaf className="w-6 h-6 text-purple-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/roundup" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-purple-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-2 mb-4"><FileText className="w-4 h-4 text-purple-400" /><span className="text-sm text-purple-300">Claims Guide</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">How to File a Roundup Claim</h1>
                    <p className="text-slate-400">Step-by-step guide to pursuing compensation.</p>
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
                        {["NHL/lymphoma diagnosis", "Roundup purchase receipts", "Photos of product use", "Employment records", "Medical treatment bills", "Witness statements"].map((item, i) => (
                            <div key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /><span className="text-slate-300 text-sm">{item}</span></div>
                        ))}
                    </div>
                </div>
                <div className="mt-12 text-center"><Link href="/roundup/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Calculate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="roundup" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{ROUNDUP_2026.citations[0]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </div>
    );
}
