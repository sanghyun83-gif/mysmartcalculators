import Link from "next/link";
import { SITE, AFFF_2026 } from "@/lib/calculators/afff";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Droplets, ArrowLeft, ArrowRight, FileText, CheckCircle } from "lucide-react";

export const metadata = { title: `AFFF Claims Guide | ${SITE.name}`, description: "How to file an AFFF PFAS lawsuit. Evidence, process." };

export default function GuidePage() {
    const steps = [
        { title: "Identify Your Exposure", description: "Document how and when you were exposed to AFFF. Include occupational exposure (firefighting, military), residential exposure (contaminated water), or property damage." },
        { title: "Gather Medical Documentation", description: "Collect medical records showing PFAS-linked conditions. Cancer diagnoses, blood tests showing PFAS levels, and treatment records are essential." },
        { title: "Document Damages", description: "Calculate all damages: medical expenses, lost wages, future care costs, property damage, water remediation costs. Document ongoing monitoring needs." },
        { title: "Identify Responsible Parties", description: "Determine which AFFF manufacturers sold products you were exposed to. Major defendants include 3M, DuPont, Tyco, and others. Your attorney will help identify." },
        { title: "Consult an AFFF Attorney", description: "Contact an attorney experienced in AFFF/PFAS litigation. MDL 2873 is complex. Many offer free consultations and work on contingency." },
        { title: "File Your Claim", description: "Your attorney will file in the appropriate venue. Personal injury cases typically join MDL 2873. Water/property claims may be filed separately or in class action." },
    ];

    return (
        <>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/afff" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-amber-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/50 rounded-full px-4 py-2 mb-4"><FileText className="w-4 h-4 text-amber-400" /><span className="text-sm text-amber-300">Claims Guide</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">AFFF Claims Guide</h1>
                    <p className="text-slate-400">How to file an AFFF PFAS lawsuit.</p>
                </div>
                <div className="space-y-6">
                    {steps.map((step, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6 flex gap-4">
                            <div className="flex-shrink-0"><div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center"><span className="text-amber-400 font-bold">{i + 1}</span></div></div>
                            <div><h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3><p className="text-slate-400">{step.description}</p></div>
                        </div>
                    ))}
                </div>
                <div className="mt-12 bg-amber-900/20 border border-amber-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-amber-300 mb-3">Key Evidence to Gather</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                        {["Employment/military records", "AFFF product identification", "PFAS blood test results", "Cancer diagnosis records", "Water contamination tests", "Property damage documentation"].map((item, i) => (
                            <div key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /><span className="text-slate-300 text-sm">{item}</span></div>
                        ))}
                    </div>
                </div>
                <div className="mt-12 text-center"><Link href="/afff/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="afff" count={5} /></div></div></section>
        </>
    );
}
