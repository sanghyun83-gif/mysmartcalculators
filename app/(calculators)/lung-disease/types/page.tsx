import Link from "next/link";
import { SITE, LUNG_DISEASE_TYPES, LUNG_DISEASE_2026, formatCurrency } from "@/lib/calculators/lung-disease";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Stethoscope, ArrowLeft, ArrowRight, AlertTriangle } from "lucide-react";

export const metadata = {
    title: `Occupational Lung Disease Types | ${SITE.name}`,
    description: "Guide to occupational lung diseases: silicosis, asbestosis, mesothelioma, black lung, COPD. Symptoms, causes, and average settlements.",
};

export default function TypesPage() {
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
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
                    Occupational Lung Disease Types
                </h1>
                <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                    Comprehensive guide to lung diseases caused by workplace exposure. Learn about symptoms, causes, and average settlement values.
                </p>

                {/* Disease Cards */}
                <div className="space-y-8">
                    {LUNG_DISEASE_TYPES.map((disease, index) => (
                        <div key={disease.id} className="bg-slate-800 border border-slate-700 rounded-2xl p-6 md:p-8">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                <div>
                                    <h2 className="text-2xl font-bold text-white">{disease.name}</h2>
                                    <p className="text-slate-400 mt-1">{disease.description}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-2xl font-bold text-purple-400">{formatCurrency(disease.avgSettlement)}</p>
                                    <p className="text-sm text-slate-500">Avg Settlement</p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4 mt-6">
                                <div className="bg-slate-700/50 rounded-lg p-4">
                                    <h3 className="text-sm font-semibold text-slate-300 mb-2">At-Risk Industries</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {disease.industries.map((ind, i) => (
                                            <span key={i} className="text-xs bg-slate-600 text-slate-200 px-2 py-1 rounded">{ind}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-slate-700/50 rounded-lg p-4">
                                    <h3 className="text-sm font-semibold text-slate-300 mb-2">Latency Period</h3>
                                    <p className="text-white">{disease.latency}</p>
                                    <p className="text-xs text-slate-400 mt-1">Time from exposure to symptoms</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Warning */}
                <div className="mt-12 p-6 bg-amber-500/10 border border-amber-500/30 rounded-xl">
                    <div className="flex items-start gap-4">
                        <AlertTriangle className="w-6 h-6 text-amber-400 flex-shrink-0" />
                        <div>
                            <h3 className="text-lg font-semibold text-amber-300 mb-2">Important Notice</h3>
                            <p className="text-amber-200 text-sm">
                                If you have symptoms of occupational lung disease, seek medical attention immediately. Early diagnosis improves treatment outcomes and strengthens legal claims. The statute of limitations begins when you know or should know about your condition.
                            </p>
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
