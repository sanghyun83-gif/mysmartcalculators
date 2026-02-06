import Link from "next/link";
import { SITE, LUNG_DISEASE_TYPES, LUNG_DISEASE_2026, formatCurrency } from "@/lib/calculators/lung-disease";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Stethoscope, ArrowLeft, ArrowRight, Pill, Heart, DollarSign } from "lucide-react";

export const metadata = {
    title: `Lung Disease Treatment Options & Costs | ${SITE.name}`,
    description: "Medical treatments for occupational lung diseases and associated costs. Treatment options for silicosis, asbestosis, COPD, and black lung.",
};

export default function TreatmentPage() {
    const treatments = [
        {
            name: "Oxygen Therapy",
            description: "Supplemental oxygen to maintain blood oxygen levels",
            costRange: "$200 - $800/month",
            diseases: ["Silicosis", "Asbestosis", "COPD", "Black Lung"],
        },
        {
            name: "Pulmonary Rehabilitation",
            description: "Exercise and education program to improve lung function",
            costRange: "$2,000 - $8,000/program",
            diseases: ["All lung diseases"],
        },
        {
            name: "Bronchodilators",
            description: "Medications to open airways and ease breathing",
            costRange: "$50 - $500/month",
            diseases: ["COPD", "Asbestosis"],
        },
        {
            name: "Corticosteroids",
            description: "Anti-inflammatory medications to reduce lung inflammation",
            costRange: "$100 - $1,000/month",
            diseases: ["Pulmonary Fibrosis", "Asbestosis"],
        },
        {
            name: "Lung Transplant",
            description: "Surgical replacement of damaged lung(s) with donor organ",
            costRange: "$500,000 - $1,200,000",
            diseases: ["Severe Pulmonary Fibrosis", "End-stage COPD"],
        },
        {
            name: "Chemotherapy/Radiation",
            description: "Cancer treatment for mesothelioma patients",
            costRange: "$10,000 - $200,000+",
            diseases: ["Mesothelioma"],
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
                        <Heart className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-purple-300">Medical Guide</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Lung Disease Treatment Options
                    </h1>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Medical treatments for occupational lung diseases and their costs. Understanding treatment costs helps maximize your settlement.
                    </p>
                </div>

                {/* Treatment Cards */}
                <div className="space-y-6">
                    {treatments.map((treatment, index) => (
                        <div key={index} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-purple-500/10 rounded-lg">
                                        <Pill className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">{treatment.name}</h3>
                                        <p className="text-slate-400 mt-1">{treatment.description}</p>
                                        <div className="flex flex-wrap gap-2 mt-3">
                                            {treatment.diseases.map((d, i) => (
                                                <span key={i} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">{d}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right md:flex-shrink-0">
                                    <div className="flex items-center gap-2 justify-end">
                                        <DollarSign className="w-4 h-4 text-emerald-400" />
                                        <span className="text-lg font-bold text-emerald-400">{treatment.costRange}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Cost Summary */}
                <div className="mt-16 bg-slate-800 border border-slate-700 rounded-2xl p-8">
                    <h2 className="text-xl font-bold text-white mb-6 text-center">
                        Lifetime Treatment Costs by Disease
                    </h2>
                    <div className="space-y-4">
                        {LUNG_DISEASE_TYPES.map((disease) => (
                            <div key={disease.id} className="flex items-center justify-between py-3 border-b border-slate-700 last:border-0">
                                <span className="text-white">{disease.name}</span>
                                <span className="text-purple-400 font-semibold">
                                    {formatCurrency(disease.avgSettlement * 0.3)} - {formatCurrency(disease.avgSettlement * 0.6)}
                                </span>
                            </div>
                        ))}
                    </div>
                    <p className="text-xs text-slate-500 mt-4 text-center">
                        Estimated lifetime medical costs based on disease severity and treatment needs
                    </p>
                </div>

                {/* Important Note */}
                <div className="mt-12 bg-purple-900/20 border border-purple-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-purple-300 mb-3">Why Treatment Costs Matter for Your Claim</h3>
                    <p className="text-purple-200 text-sm">
                        Documenting all medical expenses?�past, current, and projected future costs?�is critical for maximizing your settlement.
                        Our calculator factors in these costs to provide an accurate estimate. Keep all receipts, bills, and treatment records.
                    </p>
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
