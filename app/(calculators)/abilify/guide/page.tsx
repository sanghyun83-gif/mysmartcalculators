import Link from "next/link";
import { SITE, ABILIFY_2026 } from "@/lib/calculators/abilify";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Heart, ArrowLeft, ArrowRight, FileText, CheckCircle } from "lucide-react";

export const metadata = { title: `Abilify Claims Guide | ${SITE.name}`, description: "How to file an Abilify compulsive behavior lawsuit." };

export default function GuidePage() {
    const steps = [
        { title: "Confirm Abilify Use", description: "Obtain pharmacy and prescription records proving you took Abilify (aripiprazole) before developing compulsive behaviors. Timeline is critical for causation." },
        { title: "Document Compulsive Behavior", description: "Gather evidence of the compulsive behavior: gambling records, bank statements showing unusual spending, credit card debt, or testimony from family members." },
        { title: "Show Behavior Started After Abilify", description: "Establish that the compulsive behavior began after starting Abilify and ideally stopped or decreased after discontinuing the medication." },
        { title: "Calculate Financial Losses", description: "Document all financial losses from gambling, shopping, or other compulsive behavior. Include debt incurred, assets lost, and damage to relationships or career." },
        { title: "Consult a Pharmaceutical Attorney", description: "Abilify cases require proving causation between the drug and behavior. Contact an attorney experienced in pharmaceutical litigation. Free consultations available." },
    ];

    return (
        <>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/abilify" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-purple-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-2 mb-4"><FileText className="w-4 h-4 text-purple-400" /><span className="text-sm text-purple-300">Claims Guide</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Abilify Claims Guide</h1>
                    <p className="text-slate-400">How to file a compulsive behavior claim.</p>
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
                        {["Pharmacy prescription records", "Bank/credit card statements", "Gambling site records", "Family member testimony", "Employment impact", "Divorce/separation records"].map((item, i) => (
                            <div key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /><span className="text-slate-300 text-sm">{item}</span></div>
                        ))}
                    </div>
                </div>
                <div className="mt-12 text-center"><Link href="/abilify/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="abilify" count={5} /></div></div></section>
        </>
    );
}
