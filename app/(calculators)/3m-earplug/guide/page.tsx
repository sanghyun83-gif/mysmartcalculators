import Link from "next/link";
import { SITE, EARPLUG_2026 } from "@/lib/calculators/3m-earplug";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Ear, ArrowLeft, ArrowRight, FileText, CheckCircle } from "lucide-react";

export const metadata = { title: `3M Earplug Claims Guide | ${SITE.name}`, description: "How to check your 3M earplug claim status. Documentation, appeals, payment processing." };

export default function GuidePage() {
    const steps = [
        { title: "Verify Your Claim Status", description: "If you filed through an attorney, contact them for updates. If you filed directly, check the official claim portal for your status and tier assignment." },
        { title: "Gather Required Documentation", description: "Ensure you have: military service records, VA audiological exams, evidence of CAEv2 issuance, and all hearing-related medical records." },
        { title: "Understand Your Tier", description: "Claims are categorized into tiers based on injury severity. Tier 1 (severe) cases receive higher payouts. Your tier determines your estimated settlement." },
        { title: "Wait for Processing", description: "Settlement processing takes time. Payments are distributed in phases. Tier 1 claims are typically processed before lower tiers." },
        { title: "Review Your Offer", description: "Once processed, you'll receive a settlement offer. Review it carefully. You may have the option to accept or discuss with your attorney." },
        { title: "Receive Payment", description: "After acceptance, payments are distributed. If you have an attorney, their fee is deducted before you receive funds." },
    ];

    return (
        <>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/3m-earplug" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-purple-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-2 mb-4"><FileText className="w-4 h-4 text-purple-400" /><span className="text-sm text-purple-300">Claims Guide</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">3M Earplug Claims Guide</h1>
                    <p className="text-slate-400">How to navigate the settlement process.</p>
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
                    <h3 className="text-lg font-semibold text-purple-300 mb-3">Key Documents to Keep</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                        {["DD-214 (discharge papers)", "VA audiological records", "Service medical records", "CAEv2 issuance records", "Hearing aid prescriptions", "Attorney agreement (if applicable)"].map((item, i) => (
                            <div key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /><span className="text-slate-300 text-sm">{item}</span></div>
                        ))}
                    </div>
                </div>
                <div className="mt-12 text-center"><Link href="/3m-earplug/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Your Payout<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="3m-earplug" count={5} /></div></div></section>
        </>
    );
}
