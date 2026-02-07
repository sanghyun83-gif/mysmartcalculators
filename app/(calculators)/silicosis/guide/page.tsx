import Link from "next/link";
import { SITE, SILICOSIS_2026, HIGH_RISK_INDUSTRIES, formatCurrency } from "@/lib/calculators/silicosis";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Stethoscope, ArrowLeft, ArrowRight, CheckCircle, FileText } from "lucide-react";

export const metadata = { title: `How to File a Silicosis Claim | ${SITE.name}`, description: "Step-by-step guide to filing a silicosis claim. Workers' comp, personal injury lawsuits, and MDL claims explained." };

export default function GuidePage() {
    const steps = [
        { title: "Get Medical Diagnosis", description: "Obtain chest X-rays, CT scans, and pulmonary function tests. A diagnosis of silicosis from a pulmonologist is essential." },
        { title: "Document Exposure History", description: "Record all jobs involving silica exposure. Include dates, locations, job duties, and any safety equipment provided." },
        { title: "File Workers' Compensation", description: "File a workers' comp claim with your employer. This provides immediate benefits but may limit other claims." },
        { title: "Consult a Silicosis Attorney", description: "Experienced attorneys work on contingency and can identify all liable parties including manufacturers in MDL 1553." },
    ];

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/silicosis" className="flex items-center gap-2 hover:opacity-80"><Stethoscope className="w-6 h-6 text-purple-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>

            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/silicosis" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-purple-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>

            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-2 mb-4"><FileText className="w-4 h-4 text-purple-400" /><span className="text-sm text-purple-300">Legal Guide</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">How to File a Silicosis Claim</h1>
                    <p className="text-slate-400">Step-by-step guide to pursuing compensation for silica exposure injuries.</p>
                </div>

                <div className="space-y-6">
                    {steps.map((step, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6 flex gap-4">
                            <div className="flex-shrink-0"><div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center"><span className="text-purple-400 font-bold">{i + 1}</span></div></div>
                            <div><h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3><p className="text-slate-400">{step.description}</p></div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-slate-800 border border-slate-700 rounded-2xl p-8">
                    <h2 className="text-xl font-bold text-white mb-6 text-center">High-Risk Industries</h2>
                    <div className="flex flex-wrap gap-2 justify-center">
                        {HIGH_RISK_INDUSTRIES.map((ind, i) => <span key={i} className="bg-purple-500/10 text-purple-300 px-4 py-2 rounded-full text-sm">{ind}</span>)}
                    </div>
                </div>

                <div className="mt-12 bg-purple-900/20 border border-purple-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-purple-300 mb-3">About MDL 1553</h3>
                    <p className="text-purple-200 text-sm">Silica products liability litigation consolidated under MDL 1553 includes claims against multiple silica product manufacturers. If your employer is bankrupt or unknown, you may still recover through this litigation.</p>
                </div>

                <div className="mt-12 text-center"><Link href="/silicosis/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Calculate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="silicosis" count={5} /></div></div></section>

            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{SILICOSIS_2026.citationNote}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year} {SITE.name}</p></div></footer>
        </>
    );
}
