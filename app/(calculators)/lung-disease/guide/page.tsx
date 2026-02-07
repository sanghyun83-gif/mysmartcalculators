import Link from "next/link";
import { SITE, COMPENSATION_TYPES, LUNG_DISEASE_2026, formatCurrency } from "@/lib/calculators/lung-disease";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Stethoscope, ArrowLeft, ArrowRight, CheckCircle, FileText } from "lucide-react";

export const metadata = {
    title: `How to File a Lung Disease Claim | ${SITE.name}`,
    description: "Step-by-step guide to filing an occupational lung disease claim. Workers' compensation, personal injury lawsuits, and asbestos trust claims.",
};

export default function GuidePage() {
    const steps = [
        {
            title: "Get Medical Documentation",
            description: "Obtain comprehensive medical records, diagnosis, and expert opinion linking your condition to workplace exposure. Chest X-rays, CT scans, and pulmonary function tests are essential.",
        },
        {
            title: "Document Employment History",
            description: "Compile records of all jobs involving potential exposure. Include dates, locations, job duties, and any safety equipment provided or lacking.",
        },
        {
            title: "Identify Responsible Parties",
            description: "Determine all potentially liable parties: employers, manufacturers of products containing harmful substances, property owners, and contractors.",
        },
        {
            title: "File Workers' Compensation",
            description: "File a workers' comp claim with your employer. This provides benefits regardless of fault but may limit third-party claims in some states.",
        },
        {
            title: "Consult a Specialized Attorney",
            description: "Lung disease attorneys work on contingency and can identify all sources of compensation including bankruptcy trusts worth $30+ billion.",
        },
        {
            title: "Pursue Third-Party Claims",
            description: "In addition to workers' comp, you may sue manufacturers, property owners, or other negligent parties for full compensation including pain and suffering.",
        },
    ];

    return (
        <>

            {/* Breadcrumb */}
            <div className="max-w-6xl mx-auto px-4 py-3">
                <Link href="/lung-disease" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-purple-400">
                    <ArrowLeft className="w-4 h-4" /> Back to Calculator
                </Link>
            </div>

            {/* Main Content */}
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-2 mb-4">
                        <FileText className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-purple-300">Legal Guide</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        How to File a Lung Disease Claim
                    </h1>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Step-by-step guide to pursuing compensation for occupational lung disease. Workers' comp, personal injury, and trust fund claims explained.
                    </p>
                </div>

                {/* Steps */}
                <div className="space-y-6">
                    {steps.map((step, index) => (
                        <div key={index} className="bg-slate-800 border border-slate-700 rounded-xl p-6 flex gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                                    <span className="text-purple-400 font-bold">{index + 1}</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                                <p className="text-slate-400">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Compensation Types */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold text-white mb-8 text-center">Types of Compensation Available</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {COMPENSATION_TYPES.map((comp) => (
                            <div key={comp.id} className="bg-slate-800 border border-slate-700 rounded-xl p-5">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="text-white font-semibold">{comp.name}</h3>
                                        <p className="text-sm text-slate-400 mt-1">{comp.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Statistics */}
                <div className="mt-16 bg-purple-900/20 border border-purple-500/30 rounded-2xl p-8">
                    <h2 className="text-xl font-bold text-white mb-6 text-center">2026 Lung Disease Claim Statistics</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <p className="text-2xl font-bold text-purple-400">{formatCurrency(LUNG_DISEASE_2026.statistics.avgSettlement)}</p>
                            <p className="text-sm text-slate-400 mt-1">Average Settlement</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-bold text-purple-400">{formatCurrency(LUNG_DISEASE_2026.statistics.medianSettlement)}</p>
                            <p className="text-sm text-slate-400 mt-1">Median Settlement</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-bold text-purple-400">$30B+</p>
                            <p className="text-sm text-slate-400 mt-1">Trust Funds Available</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-bold text-purple-400">2-3 Yrs</p>
                            <p className="text-sm text-slate-400 mt-1">Avg Statute of Limitations</p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <Link
                        href="/lung-disease/calculator"
                        className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold"
                    >
                        Calculate Your Settlement <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

            {/* Related Calculators */}
            <section className="max-w-6xl mx-auto px-4 py-8">
                <div className="flex justify-center">
                    <div className="w-full max-w-xs">
                        <RelatedCalculators currentCalc="lung-disease" count={5} />
                    </div>
                </div>
            </section>

        </>
    );
}
