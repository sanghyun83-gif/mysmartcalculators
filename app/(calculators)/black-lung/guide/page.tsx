import Link from "next/link";
import { SITE, BLACK_LUNG_2026, formatCurrency } from "@/lib/calculators/black-lung";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Stethoscope, ArrowLeft, ArrowRight, CheckCircle, FileText, DollarSign } from "lucide-react";

export const metadata = { title: `Federal Black Lung Benefits Guide | ${SITE.name}`, description: "Complete guide to federal black lung benefits. Monthly payments, medical coverage, and survivor benefits for coal miners." };

export default function GuidePage() {
    const benefits = [
        { name: "Monthly Cash Payments", value: `$${BLACK_LUNG_2026.statistics.federalBenefitsMonthly}/month`, description: "For totally disabled miners (single rate)" },
        { name: "Medical Treatment", value: "100% Covered", description: "All pneumoconiosis-related care" },
        { name: "Survivor Benefits", value: "Available", description: "For widows and dependents" },
        { name: "Retroactive Pay", value: "Up to 3 years", description: "Back payments from filing date" },
    ];

    const steps = [
        { title: "Get Diagnosed", description: "Obtain chest X-ray and pulmonary function test from NIOSH-approved facility." },
        { title: "File DOL Claim", description: "Submit Form CM-911 to Department of Labor. Free assistance available." },
        { title: "Medical Evaluation", description: "DOL arranges independent medical exam at no cost to you." },
        { title: "Decision & Appeals", description: "If denied, you have right to hearing before administrative law judge." },
    ];

    return (
        <>

            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/black-lung" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-purple-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>

            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-2 mb-4"><FileText className="w-4 h-4 text-purple-400" /><span className="text-sm text-purple-300">Benefits Guide</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Federal Black Lung Benefits</h1>
                    <p className="text-slate-400">Complete guide to monthly payments, medical coverage, and how to apply.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-12">
                    {benefits.map((b, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-5">
                            <div className="flex items-start gap-3">
                                <DollarSign className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                                <div><h3 className="text-white font-semibold">{b.name}</h3><p className="text-xl text-emerald-400 font-bold mt-1">{b.value}</p><p className="text-sm text-slate-400 mt-1">{b.description}</p></div>
                            </div>
                        </div>
                    ))}
                </div>

                <h2 className="text-2xl font-bold text-white mb-6 text-center">How to Apply</h2>
                <div className="space-y-6">
                    {steps.map((step, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6 flex gap-4">
                            <div className="flex-shrink-0"><div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center"><span className="text-purple-400 font-bold">{i + 1}</span></div></div>
                            <div><h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3><p className="text-slate-400">{step.description}</p></div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 bg-purple-900/20 border border-purple-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-purple-300 mb-3">Federal vs. Civil Claims</h3>
                    <p className="text-purple-200 text-sm">Federal black lung benefits are guaranteed by law for eligible miners. Civil lawsuits against coal companies are separate and can provide additional compensation for pain, suffering, and punitive damages. Many miners pursue both.</p>
                </div>

                <div className="mt-12 text-center"><Link href="/black-lung/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Calculate Civil Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="black-lung" count={5} /></div></div></section>

        </>
    );
}
