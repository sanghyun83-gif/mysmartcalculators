"use client";

import Link from "next/link";
import { Package, Calculator, Shield, DollarSign, ArrowRight } from "lucide-react";
import { SITE, STATISTICS, RELATED_CALCULATORS } from "@/lib/calculators/delivery-insurance";

export default function HubClient() {
    return (
        <>


            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-6">
                        <Package className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-blue-300">{SITE.year} Gig Worker Insurance</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{SITE.name}</h1>
                    <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">{SITE.description}</p>
                    <Link href="/delivery-insurance/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors">
                        Calculate Your Premium <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

            <section className="py-12 px-4 bg-slate-800/50">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {STATISTICS.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-blue-400">{stat.value}</div>
                                <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold text-white text-center mb-10">Delivery Insurance Resources</h2>
                    <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                        <Link href="/delivery-insurance/calculator" className="group bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-colors">
                            <Calculator className="w-10 h-10 text-blue-400 mb-4" />
                            <h3 className="text-lg font-semibold text-white mb-2">Premium Calculator</h3>
                            <p className="text-sm text-slate-400">Estimate your delivery driver insurance costs</p>
                        </Link>
                        <Link href="/delivery-insurance/guide" className="group bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-colors">
                            <Shield className="w-10 h-10 text-blue-400 mb-4" />
                            <h3 className="text-lg font-semibold text-white mb-2">Coverage Guide</h3>
                            <p className="text-sm text-slate-400">Understand your insurance options</p>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 bg-slate-800/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-6">What is Delivery Driver Insurance?</h2>
                    <div className="prose prose-invert max-w-none">
                        <p className="text-slate-300 mb-4">
                            Delivery driver insurance is specialized coverage for gig workers who deliver food, groceries, or packages using their personal vehicles. Platforms like DoorDash, UberEats, Instacart, and Amazon Flex require drivers to have valid insurance, but most personal auto policies don't cover commercial delivery activities.
                        </p>
                        <p className="text-slate-300 mb-4">
                            In 2026, over 7.3 million Americans work as delivery drivers, yet 42% are underinsured or lack proper coverage. A delivery endorsement costs just $10-$25 per month and closes the gap in coverage between your personal policy and your delivery activities.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold text-white text-center mb-10">Related Insurance Calculators</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {RELATED_CALCULATORS.map((calc, index) => (
                            <Link key={index} href={calc.url} className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-colors">
                                <DollarSign className="w-8 h-8 text-blue-400 mb-3" />
                                <h3 className="text-lg font-semibold text-white mb-1">{calc.name}</h3>
                                <p className="text-sm text-slate-400">{calc.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>


        </>
    );
}
