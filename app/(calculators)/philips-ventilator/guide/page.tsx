import Link from "next/link";
import { SITE, PHILIPS_2026 } from "@/lib/calculators/philips-ventilator";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Wind, ArrowLeft, ArrowRight, FileText, CheckCircle } from "lucide-react";

export const metadata = { title: `Philips CPAP Claims Guide | ${SITE.name}`, description: "How to file a Philips CPAP recall lawsuit. Evidence, eligibility." };

export default function GuidePage() {
    const steps = [
        { title: "Identify Your Device", description: "Check if your CPAP, BiPAP, or ventilator is a recalled Philips model. DreamStation, DreamStation 2, System One, and many BiPAP models are included. Check the label for model and serial numbers." },
        { title: "Document Health Issues", description: "Gather medical records showing any health problems that developed after using the device: respiratory issues, headaches, lung damage, or cancer diagnoses." },
        { title: "Preserve Device Evidence", description: "Keep your recalled device if possible. Do not dispose of it. Photographs and serial numbers are valuable evidence. The device may be examined by experts." },
        { title: "Calculate Damages", description: "Document all related medical expenses, lost wages, and future care costs. Cancer diagnoses significantly increase claim value." },
        { title: "Consult a CPAP Attorney", description: "Contact an attorney experienced in Philips CPAP litigation. MDL 3014 cases are complex. Many offer free consultations and work on contingency." },
    ];

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/philips-ventilator" className="flex items-center gap-2 hover:opacity-80"><Wind className="w-6 h-6 text-purple-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/philips-ventilator" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-purple-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-2 mb-4"><FileText className="w-4 h-4 text-purple-400" /><span className="text-sm text-purple-300">Claims Guide</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Philips CPAP Claims Guide</h1>
                    <p className="text-slate-400">How to file a CPAP recall claim.</p>
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
                        {["Device serial number", "Purchase/prescription records", "Medical records", "Cancer diagnosis (if any)", "Respiratory test results", "Device photos"].map((item, i) => (
                            <div key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /><span className="text-slate-300 text-sm">{item}</span></div>
                        ))}
                    </div>
                </div>
                <div className="mt-12 text-center"><Link href="/philips-ventilator/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="philips-ventilator" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{PHILIPS_2026.citations[0]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
