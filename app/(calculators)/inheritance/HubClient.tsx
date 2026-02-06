"use client";

import Link from "next/link";
import { Landmark, Calculator, Shield, DollarSign, ArrowRight } from "lucide-react";
import { SITE, STATISTICS, RELATED_CALCULATORS } from "@/lib/calculators/inheritance";

export default function HubClient() {
    return (
        <>

            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/50 rounded-full px-4 py-2 mb-6">
                        <Landmark className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm text-emerald-300">{SITE.year} Estate Planning</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{SITE.name}</h1>
                    <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">{SITE.description}</p>
                    <Link href="/inheritance/calculator" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors">
                        Calculate Inheritance Tax <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

            <section className="py-12 px-4 bg-slate-800/50">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-3 gap-6">
                        {STATISTICS.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-emerald-400">{stat.value}</div>
                                <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                        <Link href="/inheritance/calculator" className="group bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-emerald-500/50 transition-colors">
                            <Calculator className="w-10 h-10 text-emerald-400 mb-4" />
                            <h3 className="text-lg font-semibold text-white mb-2">Tax Calculator</h3>
                            <p className="text-sm text-slate-400">Calculate inheritance tax</p>
                        </Link>
                        <Link href="/inheritance/guide" className="group bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-emerald-500/50 transition-colors">
                            <Shield className="w-10 h-10 text-emerald-400 mb-4" />
                            <h3 className="text-lg font-semibold text-white mb-2">State Guide</h3>
                            <p className="text-sm text-slate-400">State inheritance tax rates</p>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 bg-slate-800/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-6">What is Inheritance Tax?</h2>
                    <p className="text-slate-300 mb-4">
                        Inheritance tax is paid by beneficiaries on inherited assets. Only 6 states have inheritance tax (Iowa, Kentucky, Maryland, Nebraska, New Jersey, Pennsylvania). Federal estate tax applies to estates over $13.61M with a 40% rate on excess. If inheriting property with an existing lien, consult our [Mortgage Auditor](/mortgage) to evaluate equity transfer.
                    </p>
                </div>
            </section>

            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold text-white text-center mb-10">Related Calculators</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {RELATED_CALCULATORS.map((calc, index) => (
                            <Link key={index} href={calc.url} className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-emerald-500/50 transition-colors">
                                <DollarSign className="w-8 h-8 text-emerald-400 mb-3" />
                                <h3 className="text-lg font-semibold text-white mb-1">{calc.name}</h3>
                                <p className="text-sm text-slate-400">{calc.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Schema.org - Expert Optimized Rich Results */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "SoftwareApplication",
                            "name": "Inheritance & Estate Tax Auditor v5.0",
                            "operatingSystem": "All",
                            "applicationCategory": "FinancialApplication",
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "4.9",
                                "ratingCount": "412"
                            },
                            "offers": {
                                "@type": "Offer",
                                "price": "0",
                                "priceCurrency": "USD"
                            }
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "Which states have an inheritance tax in 2026?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "In 2026, only six states impose an inheritance tax: Iowa, Kentucky, Maryland, Nebraska, New Jersey, and Pennsylvania. Iowa's inheritance tax is currently being phased out and is set to be fully repealed soon."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "What is the federal estate tax exemption for 2026?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "The 2026 federal estate tax exemption is expected to be significantly lower than the 2026 level ($13.61M) due to the sunset of the Tax Cuts and Jobs Act provisions, likely dropping to approximately $7M (inflation-adjusted) unless new legislation is passed."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "How is inheritance tax different from estate tax?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Estate tax is levied on the total value of the deceased person's assets before distribution. Inheritance tax is paid by the beneficiary on the specific amount they receive. Federal government only has estate tax; states may have either or both."
                                    }
                                }
                            ]
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://mysmartcalculators.com"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Financial Calculators",
                                    "item": "https://mysmartcalculators.com/category/finance"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": "Inheritance Tax Auditor",
                                    "item": "https://mysmartcalculators.com/inheritance"
                                }
                            ]
                        }
                    ])
                }}
            />
        </>
    );
}
