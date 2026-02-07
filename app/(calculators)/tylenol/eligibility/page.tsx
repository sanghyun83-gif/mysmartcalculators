import Link from "next/link";
import { SITE, TYLENOL_2026 } from "@/lib/calculators/tylenol";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Pill, ArrowLeft, ArrowRight, CheckCircle, XCircle } from "lucide-react";

export const metadata = { title: `Tylenol Lawsuit Eligibility | ${SITE.name}`, description: "Check if you qualify for a Tylenol autism lawsuit. Eligibility requirements." };

export default function EligibilityPage() {
    const requirements = [
        { title: "Prenatal Acetaminophen Use", description: "Mother used Tylenol or generic acetaminophen during pregnancy", required: true },
        { title: "ASD or ADHD Diagnosis", description: "Child has been diagnosed with autism spectrum disorder and/or ADHD", required: true },
        { title: "Medical Documentation", description: "Records of pregnancy medication use and child's diagnosis", important: true },
        { title: "Within Statute of Limitations", description: "Filing deadline has not passed in your state", required: true },
    ];

    const strengtheners = [
        "Multiple trimesters of use",
        "Frequent or daily use",
        "Prescription records",
        "Medical records mentioning acetaminophen",
        "Severe autism diagnosis",
        "Early diagnosis (under age 5)",
    ];

    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/tylenol" className="flex items-center gap-2 hover:opacity-80"><Pill className="w-6 h-6 text-purple-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></Link>
                    <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
                </div>
            </header>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/tylenol" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-purple-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Tylenol Lawsuit Eligibility</h1>
                    <p className="text-slate-400">Check if you qualify for a claim.</p>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">Basic Requirements</h2>
                    <div className="space-y-4">
                        {requirements.map((req, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                <div><h3 className="text-white font-medium">{req.title}</h3><p className="text-sm text-slate-400">{req.description}</p></div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">Factors That Strengthen Claims</h2>
                    <div className="grid md:grid-cols-2 gap-3">
                        {strengtheners.map((item, i) => (
                            <div key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-purple-400" /><span className="text-slate-300 text-sm">{item}</span></div>
                        ))}
                    </div>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                    <h2 className="text-lg font-bold text-red-300 mb-4">Cases That May Not Qualify</h2>
                    <div className="space-y-3">
                        {["No acetaminophen use during pregnancy", "Child has no ASD/ADHD diagnosis", "Statute of limitations expired", "Use was only postpartum (after birth)"].map((item, i) => (
                            <div key={i} className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-400" /><span className="text-slate-300 text-sm">{item}</span></div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 text-center"><Link href="/tylenol/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Calculate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="tylenol" count={5} /></div></div></section>
            <footer className="bg-slate-800 border-t border-slate-700"><div className="max-w-6xl mx-auto px-4 py-8 text-center"><p className="text-sm text-slate-400">{TYLENOL_2026.citations[0]}</p><p className="text-sm text-slate-500 mt-2">© {SITE.year}</p></div></footer>
        </>
    );
}
