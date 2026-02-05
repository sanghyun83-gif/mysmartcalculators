"use client";

import Link from "next/link";
import { Truck, Calculator, Shield, FileText, Users, DollarSign, ArrowRight } from "lucide-react";
import { SITE, STATISTICS, RELATED_CALCULATORS } from "@/lib/calculators/trucking-insurance";

export default function HubClient() {
    return (
        <>
            {/* Header */}
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80">
                        <Calculator className="w-6 h-6 text-blue-500" />
                        <span className="text-lg font-bold text-white">MySmartCalculators</span>
                    </Link>
                    <Link
                        href="/trucking-insurance/calculator"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                        Get Estimate
                    </Link>
                </div>
            </header>

            {/* Hero */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-6">
                        <Truck className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-blue-300">{SITE.year} Commercial Trucking</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        {SITE.name}
                    </h1>
                    <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                        {SITE.description}
                    </p>
                    <Link
                        href="/trucking-insurance/calculator"
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors"
                    >
                        Calculate Your Premium
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

            {/* Stats */}
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

            {/* Resource Cards */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold text-white text-center mb-10">Trucking Insurance Resources</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Link href="/trucking-insurance/calculator" className="group bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-colors">
                            <Calculator className="w-10 h-10 text-blue-400 mb-4" />
                            <h3 className="text-lg font-semibold text-white mb-2">Premium Calculator</h3>
                            <p className="text-sm text-slate-400">Get instant premium estimates for your trucks</p>
                        </Link>
                        <Link href="/trucking-insurance/guide" className="group bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-colors">
                            <Shield className="w-10 h-10 text-blue-400 mb-4" />
                            <h3 className="text-lg font-semibold text-white mb-2">Coverage Guide</h3>
                            <p className="text-sm text-slate-400">Understand required and optional coverages</p>
                        </Link>
                        <Link href="/trucking-insurance/fleet" className="group bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-colors">
                            <Users className="w-10 h-10 text-blue-400 mb-4" />
                            <h3 className="text-lg font-semibold text-white mb-2">Fleet Discounts</h3>
                            <p className="text-sm text-slate-400">Save up to 25% with multiple trucks</p>
                        </Link>
                        <Link href="/trucking-insurance/dot" className="group bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-colors">
                            <FileText className="w-10 h-10 text-blue-400 mb-4" />
                            <h3 className="text-lg font-semibold text-white mb-2">DOT Requirements</h3>
                            <p className="text-sm text-slate-400">FMCSA minimum coverage requirements</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* What is Trucking Insurance */}
            <section className="py-16 px-4 bg-slate-800/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-6">What is Trucking Insurance?</h2>
                    <div className="prose prose-invert max-w-none">
                        <p className="text-slate-300 mb-4">
                            Trucking insurance (also called commercial truck insurance or motor carrier insurance) is specialized coverage for semi-trucks, tractor-trailers, and other commercial vehicles used in the transportation industry. Unlike personal auto insurance, trucking insurance must meet federal FMCSA requirements and covers unique risks like cargo damage and interstate liability.
                        </p>
                        <p className="text-slate-300 mb-4">
                            In 2026, the average cost of trucking insurance ranges from $10,000 to $20,000 per year for a single semi-truck, depending on factors like operating radius, cargo type, and driver experience. Fleet operators with 50+ trucks can save up to 25% through volume discounts.
                        </p>
                    </div>
                </div>
            </section>

            {/* How to Calculate */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-6">How to Calculate Trucking Insurance Costs</h2>
                    <div className="space-y-4">
                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-white mb-2">1. Determine Truck Type</h3>
                            <p className="text-slate-400">Semi-trucks cost more to insure than box trucks. Tankers carrying hazmat are the most expensive.</p>
                        </div>
                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-white mb-2">2. Calculate Operating Radius</h3>
                            <p className="text-slate-400">Local operations pay less. Nationwide long-haul trucking adds 25-50% to premiums.</p>
                        </div>
                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-white mb-2">3. Add Coverage Types</h3>
                            <p className="text-slate-400">Primary liability is mandatory. Add cargo, physical damage, and bobtail as needed.</p>
                        </div>
                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-white mb-2">4. Apply Fleet Discounts</h3>
                            <p className="text-slate-400">Larger fleets get better rates: 3-5 trucks (5% off), 50+ trucks (25% off).</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Calculators */}
            <section className="py-16 px-4 bg-slate-800/30">
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

            {/* Footer */}
            <footer className="bg-slate-800 border-t border-slate-700 py-12">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-slate-400 text-sm">
                            © {SITE.year} MySmartCalculators. Based on FMCSA and NAIC 2026 data.
                        </div>
                        <div className="flex gap-6 text-sm">
                            <Link href="/trucking-insurance/calculator" className="text-slate-400 hover:text-white">Calculator</Link>
                            <Link href="/trucking-insurance/guide" className="text-slate-400 hover:text-white">Coverage Guide</Link>
                            <Link href="/" className="text-slate-400 hover:text-white">All Calculators</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
