import Link from "next/link";
import { SITE, EXPOSURE_SOURCE, AFFF_2026 } from "@/lib/calculators/afff";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Droplets, ArrowLeft, ArrowRight, Shield, CheckCircle } from "lucide-react";

export const metadata = { title: `AFFF Lawsuit Eligibility | ${SITE.name}`, description: "Check if you qualify for an AFFF PFAS lawsuit." };

export default function EligibilityPage() {
    const requirements = [
        { item: "Exposure to AFFF firefighting foam", description: "Through work, military service, or living near contaminated site" },
        { item: "Diagnosed with PFAS-linked condition", description: "Cancer, thyroid disease, or documented PFAS blood levels" },
        { item: "Documentation of exposure", description: "Employment records, military service, water test results" },
        { item: "Within statute of limitations", description: "Typically 2-3 years from diagnosis (varies by state)" },
    ];

    const strengtheners = [
        "PFAS blood test showing elevated levels",
        "Long-term occupational exposure (10+ years)",
        "Multiple family members affected",
        "Water supply tested positive for PFAS",
        "Clear timeline linking exposure to diagnosis",
        "Complete medical records",
    ];

    return (
        <>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/afff" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-amber-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/50 rounded-full px-4 py-2 mb-4"><Shield className="w-4 h-4 text-amber-400" /><span className="text-sm text-amber-300">Pre-qualification Screening</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Do You Qualify for an AFFF Lawsuit?</h1>
                    <p className="text-slate-400">Review the requirements below.</p>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 mb-8">
                    <h2 className="text-xl font-semibold text-white mb-6">Basic Requirements</h2>
                    <div className="space-y-4">
                        {requirements.map((req, i) => (
                            <div key={i} className="flex items-start gap-4 p-4 bg-slate-700/30 rounded-lg">
                                <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                                <div><p className="text-white font-medium">{req.item}</p><p className="text-sm text-slate-400 mt-1">{req.description}</p></div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 mb-8">
                    <h2 className="text-xl font-semibold text-white mb-6">Types of Exposure</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {EXPOSURE_SOURCE.map((exp) => (
                            <div key={exp.id} className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg">
                                <p className="text-white font-medium">{exp.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-amber-900/20 border border-amber-500/30 rounded-2xl p-6">
                    <h2 className="text-xl font-semibold text-amber-300 mb-4">Factors That Strengthen Your Case</h2>
                    <div className="grid md:grid-cols-2 gap-3">
                        {strengtheners.map((item, i) => (
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
