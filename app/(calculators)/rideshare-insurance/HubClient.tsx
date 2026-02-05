"use client";

import Link from "next/link";
import { Car, Calculator, Shield, FileText, Clock, DollarSign, ArrowRight } from "lucide-react";
import { SITE, STATISTICS, RELATED_CALCULATORS } from "@/lib/calculators/rideshare-insurance";

export default function HubClient() {
    return (
        <>
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80">
                        <Calculator className="w-6 h-6 text-blue-500" />
                        <span className="text-lg font-bold text-white">MySmartCalculators</span>
                    </Link>
                    <Link href="/rideshare-insurance/calculator" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                        Get Estimate
                    </Link>
                </div>
            </header>

            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-6">
                        <Car className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-blue-300">{SITE.year} Uber & Lyft Insurance</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{SITE.name}</h1>
                    <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">{SITE.description}</p>
                    <Link href="/rideshare-insurance/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors">
                        Calculate Your Coverage <ArrowRight className="w-5 h-5" />
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
                    <h2 className="text-2xl font-bold text-white text-center mb-10">Rideshare Insurance Resources</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Link href="/rideshare-insurance/calculator" className="group bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-colors">
                            <Calculator className="w-10 h-10 text-blue-400 mb-4" />
                            <h3 className="text-lg font-semibold text-white mb-2">Premium Calculator</h3>
                            <p className="text-sm text-slate-400">Estimate your rideshare insurance costs</p>
                        </Link>
                        <Link href="/rideshare-insurance/guide" className="group bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-colors">
                            <Shield className="w-10 h-10 text-blue-400 mb-4" />
                            <h3 className="text-lg font-semibold text-white mb-2">Coverage Guide</h3>
                            <p className="text-sm text-slate-400">Understand your insurance options</p>
                        </Link>
                        <Link href="/rideshare-insurance/coverage-periods" className="group bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-colors">
                            <Clock className="w-10 h-10 text-blue-400 mb-4" />
                            <h3 className="text-lg font-semibold text-white mb-2">Coverage Periods</h3>
                            <p className="text-sm text-slate-400">Period 0-3 explained</p>
                        </Link>
                        <Link href="/rideshare-insurance/endorsements" className="group bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-colors">
                            <FileText className="w-10 h-10 text-blue-400 mb-4" />
                            <h3 className="text-lg font-semibold text-white mb-2">Endorsements</h3>
                            <p className="text-sm text-slate-400">Add-ons vs commercial policies</p>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 bg-slate-800/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-6">What is Rideshare Insurance?</h2>
                    <div className="prose prose-invert max-w-none">
                        <p className="text-slate-300 mb-4">
                            Rideshare insurance is specialized coverage for Uber, Lyft, and other Transportation Network Company (TNC) drivers. Unlike regular auto insurance, it covers the unique risks of driving passengers for hire, including the critical "gap" periods when your personal insurance doesn't apply but Uber/Lyft coverage hasn't fully activated.
                        </p>
                        <p className="text-slate-300 mb-4">
                            In 2026, nearly 48% of rideshare drivers are underinsured during Period 1 (app on, waiting for rides). A rideshare endorsement costs just $15-$30 per month and closes this dangerous coverage gap. Full-time drivers may benefit from hybrid or commercial policies ranging from $150-$500 per month.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold text-white text-center mb-10">Related Insurance Calculators</h2>
                    <div className="grid md:grid-cols-4 gap-6">
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

            <footer className="bg-slate-800 border-t border-slate-700 py-12">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-slate-400 text-sm">© {SITE.year} MySmartCalculators. Based on NAIC 2026 TNC data.</div>
                        <div className="flex gap-6 text-sm">
                            <Link href="/rideshare-insurance/calculator" className="text-slate-400 hover:text-white">Calculator</Link>
                            <Link href="/rideshare-insurance/guide" className="text-slate-400 hover:text-white">Guide</Link>
                            <Link href="/" className="text-slate-400 hover:text-white">All Calculators</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
