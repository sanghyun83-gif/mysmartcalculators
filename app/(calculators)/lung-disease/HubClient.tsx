"use client";

import Link from "next/link";
import { SITE, CALCULATORS, LUNG_DISEASE_TYPES, LUNG_DISEASE_2026, formatCurrency } from "@/lib/calculators/lung-disease";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { ArrowRight, AlertTriangle, Stethoscope, Shield } from "lucide-react";



export default function HubClient() {
    const featuredCalculators = CALCULATORS.filter(c => c.featured);

    return (
        <>

            {/* Alert Banner */}
            <div className="bg-purple-900/30 border-b border-purple-500/30">
                <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-purple-400" />
                    <span className="text-sm text-purple-200">
                        {(LUNG_DISEASE_2026.statistics.annualOccupationalDeaths / 1000).toFixed(0)}K+ Americans die annually from occupational lung diseases
                    </span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-indigo-900/20" />
                <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
                    <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-2 mb-6">
                        <Shield className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-purple-300">Free {SITE.year} Calculator</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Occupational Lung Disease
                        <span className="block text-purple-400">Settlement Calculator</span>
                    </h1>

                    <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                        Calculate your compensation for silicosis, asbestosis, black lung, COPD, and other occupational lung diseases.
                        Average settlements range from {formatCurrency(350000)} to {formatCurrency(1200000)}+.
                    </p>

                    <Link
                        href="/lung-disease/calculator"
                        className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
                    >
                        Calculate Settlement Value
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-slate-800/50 border-y border-slate-700">
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <p className="text-3xl font-bold text-purple-400">
                                {(LUNG_DISEASE_2026.statistics.annualOccupationalDeaths / 1000).toFixed(0)}K+
                            </p>
                            <p className="text-sm text-slate-400 mt-1">Annual Deaths</p>
                        </div>
                        <div className="text-center">
                            <p className="text-3xl font-bold text-rose-400">
                                {(LUNG_DISEASE_2026.statistics.annualNewCases / 1000).toFixed(0)}K+
                            </p>
                            <p className="text-sm text-slate-400 mt-1">New Cases/Year</p>
                        </div>
                        <div className="text-center">
                            <p className="text-3xl font-bold text-emerald-400">
                                {formatCurrency(LUNG_DISEASE_2026.statistics.avgSettlement)}
                            </p>
                            <p className="text-sm text-slate-400 mt-1">Avg Settlement</p>
                        </div>
                        <div className="text-center">
                            <p className="text-3xl font-bold text-amber-400">$30B+</p>
                            <p className="text-sm text-slate-400 mt-1">Asbestos Trust Funds</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Calculators */}
            <section className="max-w-6xl mx-auto px-4 py-16">
                <h2 className="text-2xl font-bold text-white mb-8 text-center">
                    Free Lung Disease Calculators & Guides
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {featuredCalculators.map((calc) => {
                        const IconComponent = calc.icon;
                        return (
                            <Link
                                key={calc.id}
                                href={`/${calc.id}`}
                                className="group bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all hover:bg-slate-800/80"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                                        <IconComponent className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                                            {calc.name}
                                        </h3>
                                        <p className="text-sm text-slate-400 mt-1">{calc.description}</p>
                                        <span className="inline-flex items-center gap-1 text-purple-400 text-sm mt-3 group-hover:gap-2 transition-all">
                                            Get Started <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </section>

            {/* Disease Types Section */}
            <section className="bg-slate-800/30 border-y border-slate-700">
                <div className="max-w-6xl mx-auto px-4 py-16">
                    <h2 className="text-2xl font-bold text-white mb-8 text-center">
                        Occupational Lung Disease Types
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {LUNG_DISEASE_TYPES.slice(0, 6).map((disease) => (
                            <div key={disease.id} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-white mb-2">{disease.name}</h3>
                                <p className="text-sm text-slate-400 mb-3">{disease.description}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-xs text-slate-500">Avg Settlement</span>
                                    <span className="text-lg font-bold text-purple-400">{formatCurrency(disease.avgSettlement)}</span>
                                </div>
                                <div className="mt-2 flex flex-wrap gap-1">
                                    {disease.industries.slice(0, 2).map((ind, i) => (
                                        <span key={i} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">{ind}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <Link href="/lung-disease/types" className="text-purple-400 hover:text-purple-300 text-sm">
                            View All Disease Types ??                        </Link>
                    </div>
                </div>
            </section>

            {/* What is Section (SEO Content) */}
            <section className="max-w-4xl mx-auto px-4 py-16">
                <h2 className="text-2xl font-bold text-white mb-6">What is Occupational Lung Disease?</h2>
                <div className="prose prose-invert max-w-none">
                    <p className="text-slate-300 mb-4">
                        Occupational lung disease refers to respiratory conditions caused by exposure to harmful substances in the workplace.
                        These include dust, chemicals, fumes, and fibers that damage lung tissue over time. Common conditions include silicosis
                        (from silica dust), asbestosis (from asbestos fibers), coal workers' pneumoconiosis (black lung), and occupational COPD.
                    </p>
                    <p className="text-slate-300 mb-4">
                        According to the CDC and NIOSH, occupational lung diseases cause over 65,000 deaths annually in the United States.
                        Workers in mining, construction, manufacturing, and agriculture face the highest risk. Many of these diseases have
                        long latency periods, meaning symptoms may not appear until 10-40 years after initial exposure.
                    </p>
                    <p className="text-slate-300">
                        If you developed a lung disease from workplace exposure, you may be entitled to significant compensation through
                        workers' compensation, personal injury lawsuits, or asbestos/silica trust funds. Our free calculator helps you
                        estimate your potential settlement based on 2026 data.
                    </p>
                </div>
            </section>

            {/* How to Calculate Section */}
            <section className="bg-slate-800/30 border-y border-slate-700">
                <div className="max-w-4xl mx-auto px-4 py-16">
                    <h2 className="text-2xl font-bold text-white mb-6">How to Calculate Lung Disease Compensation</h2>
                    <div className="prose prose-invert max-w-none">
                        <p className="text-slate-300 mb-4">
                            Lung disease settlements are calculated based on several factors: medical expenses (past and future treatment costs),
                            lost wages (income lost due to illness), disability rating (percentage of lung function impairment), and pain and
                            suffering (non-economic damages for reduced quality of life).
                        </p>
                        <p className="text-slate-300 mb-4">
                            Our calculator uses industry-standard multipliers based on disease type and severity. For example, mesothelioma
                            cases typically receive higher settlements due to the terminal nature of the disease. Factors like years of exposure,
                            employer negligence, and state laws also affect final compensation amounts.
                        </p>
                        <p className="text-slate-300">
                            The average lung disease settlement in 2026 is approximately {formatCurrency(LUNG_DISEASE_2026.statistics.avgSettlement)},
                            but cases can range from under $100,000 to several million dollars depending on circumstances.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-4xl mx-auto px-4 py-16 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">
                    Estimate Your Lung Disease Settlement Today
                </h2>
                <p className="text-slate-400 mb-8">
                    Get a free, confidential estimate based on {SITE.year} data. No email required.
                </p>
                <Link
                    href="/lung-disease/calculator"
                    className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
                >
                    Start Free Calculator
                    <ArrowRight className="w-5 h-5" />
                </Link>
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
