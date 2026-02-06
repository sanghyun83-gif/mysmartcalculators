import Link from "next/link";
import { SITE, EARPLUG_2026 } from "@/lib/calculators/3m-earplug";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Ear, ArrowLeft, ArrowRight, CheckCircle, XCircle } from "lucide-react";

export const metadata = { title: `3M Earplug Eligibility | ${SITE.name}`, description: "Check if you qualify for the 3M Combat Arms Earplug settlement. Veterans, service dates, requirements." };

export default function EligibilityPage() {
    const requirements = [
        { text: "Served in U.S. military 2003-2015", required: true },
        { text: "Used CAEv2 (Combat Arms Earplugs)", required: true },
        { text: "Diagnosed with hearing loss or tinnitus", required: true },
        { text: "Filed claim before deadline", required: true },
    ];

    const helpfulFactors = [
        "Service in Iraq/Afghanistan with documented CAEv2 issuance",
        "VA disability rating for hearing loss or tinnitus",
        "Audiological records showing hearing deterioration",
        "Uses hearing aids prescribed by VA",
    ];

    return (
        <>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/3m-earplug" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-purple-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-2 mb-4"><CheckCircle className="w-4 h-4 text-purple-400" /><span className="text-sm text-purple-300">Pre-qualification Screening</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">3M Earplug Eligibility</h1>
                    <p className="text-slate-400">See if you qualify for the ${(EARPLUG_2026.statistics.settlementAmount / 1000000000).toFixed(0)}B settlement.</p>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">Required for Eligibility</h2>
                    <div className="space-y-3">
                        {requirements.map((req, i) => (
                            <div key={i} className="flex items-center gap-3 py-2">
                                <CheckCircle className="w-5 h-5 text-emerald-400" />
                                <span className="text-slate-300">{req.text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">Factors That Help Your Claim</h2>
                    <div className="space-y-3">
                        {helpfulFactors.map((factor, i) => (
                            <div key={i} className="flex items-start gap-3 py-2">
                                <span className="text-purple-400">??/span>
                                <span className="text-slate-300">{factor}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 mb-6">
                    <h2 className="text-lg font-bold text-red-300 mb-4 flex items-center gap-2"><XCircle className="w-5 h-5" />Filing Deadline Has Passed</h2>
                    <p className="text-slate-300 text-sm">The deadline to file new claims in MDL 2885 has passed. If you already filed, your claim is being processed. If you didn&apos;t file in time, consult an attorney to explore remaining options.</p>
                </div>

                <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-6">
                    <h2 className="text-lg font-bold text-emerald-300 mb-4">Already Filed?</h2>
                    <p className="text-slate-300 text-sm">If you filed a claim through an attorney, contact them for status updates. If you filed yourself, you should have received documentation about your claim status. Settlement payments are being processed in phases through {SITE.year}.</p>
                </div>

                <div className="mt-12 text-center"><Link href="/3m-earplug/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Your Payout<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="3m-earplug" count={5} /></div></div></section>
        </>
    );
}
