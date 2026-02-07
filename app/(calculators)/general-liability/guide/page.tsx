import Link from "next/link";
import { SITE, GL_2026 } from "@/lib/calculators/general-liability";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Shield, ArrowLeft, ArrowRight, FileText, CheckCircle, XCircle } from "lucide-react";

export const metadata = { title: `General Liability Guide | ${SITE.name}`, description: "Guide to general liability insurance coverage." };

export default function GuidePage() {
    const covered = ["Third-party bodily injury", "Third-party property damage", "Personal injury (defamation)", "Advertising injury", "Products/completed operations", "Legal defense costs"];
    const notCovered = ["Your own injuries (need WC)", "Your business property", "Professional errors (need E&O)", "Auto accidents", "Intentional acts", "Employee injuries"];

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/general-liability" className="flex items-center gap-2 hover:opacity-80"><Shield className="w-6 h-6 text-blue-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-blue-400 bg-blue-500/20 px-2 py-1 rounded border border-blue-500/30">Advanced</span>
                </div>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/general-liability" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-blue-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4"><FileText className="w-4 h-4 text-blue-400" /><span className="text-sm text-blue-300">Coverage Guide</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">General Liability Guide</h1>
                    <p className="text-slate-400">What GL insurance covers and doesn&apos;t cover.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-emerald-300 mb-4">What&apos;s Covered</h3>
                        <div className="space-y-3">
                            {covered.map((item, i) => (
                                <div key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /><span className="text-slate-300 text-sm">{item}</span></div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-red-300 mb-4">What&apos;s NOT Covered</h3>
                        <div className="space-y-3">
                            {notCovered.map((item, i) => (
                                <div key={i} className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-400" /><span className="text-slate-300 text-sm">{item}</span></div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-12 bg-slate-800 border border-slate-700 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Coverage Limits Explained</h3>
                    <p className="text-slate-400 mb-4">GL policies have two limits:</p>
                    <ul className="text-slate-300 space-y-2">
                        <li><strong className="text-blue-400">Per Occurrence:</strong> Maximum paid for any single claim</li>
                        <li><strong className="text-blue-400">Aggregate:</strong> Maximum paid for all claims in a policy year</li>
                    </ul>
                    <p className="text-slate-400 mt-4">Common limits are $1M/$2M (1 million per occurrence, 2 million aggregate).</p>
                </div>

                <div className="mt-12 text-center"><Link href="/general-liability/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Premium<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="general-liability" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{GL_2026.citations[0].source}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
