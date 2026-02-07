"use client";

import Link from "next/link";
import { SITE, CALCULATORS, FLEET_SIZES, FLEET_2026, formatCurrency } from "@/lib/calculators/fleet-insurance";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { ArrowRight, TrendingUp, Truck, Shield } from "lucide-react";



export default function HubClient() {
    return (
        <>




            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-900 to-slate-900" />
                <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-6"><Shield className="w-4 h-4 text-blue-400" /><span className="text-sm text-blue-300">Fleet Insurance Calculator</span></div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Fleet Insurance<span className="block text-blue-400">Premium Calculator</span></h1>
                    <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">Calculate bulk discounts for 5+ vehicle fleets. Save up to 28% with fleet programs.</p>
                    <Link href="/fleet-insurance/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105">Calculate Premium<ArrowRight className="w-5 h-5" /></Link>
                </div>
            </section>

            <section className="bg-slate-800/50 border-y border-slate-700">
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <div className="grid grid-cols-3 gap-6 text-center">
                        <div><p className="text-xl font-bold text-blue-400">{FLEET_2026.statistics.avgPremium}</p><p className="text-sm text-slate-400 mt-1">Avg Premium</p></div>
                        <div><p className="text-xl font-bold text-emerald-400">{FLEET_2026.statistics.avgSavings}</p><p className="text-sm text-slate-400 mt-1">Max Discount</p></div>
                        <div><p className="text-xl font-bold text-purple-400">5+ Vehicles</p><p className="text-sm text-slate-400 mt-1">Min Fleet Size</p></div>
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-16">
                <h2 className="text-2xl font-bold text-white mb-8 text-center">Insurance Resources</h2>
                <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                    {CALCULATORS.map((calc) => {
                        const Icon = calc.icon;
                        return (
                            <Link key={calc.id} href={`/${calc.id}`} className="group bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all">
                                <div className="flex flex-col items-center text-center">
                                    <div className="p-3 bg-blue-500/10 rounded-lg mb-4"><Icon className="w-6 h-6 text-blue-400" /></div>
                                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-400">{calc.name}</h3>
                                    <p className="text-sm text-slate-400 mt-1">{calc.description}</p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </section>

            <section className="bg-slate-800/30 border-y border-slate-700">
                <div className="max-w-4xl mx-auto px-4 py-16">
                    <h2 className="text-2xl font-bold text-white mb-8 text-center">Fleet Size Discounts</h2>
                    <div className="space-y-4">
                        {FLEET_SIZES.map((size) => (
                            <div key={size.id} className="bg-slate-800 border border-slate-700 rounded-xl p-6 flex justify-between items-center">
                                <div><h3 className="text-white font-semibold">{size.name}</h3><p className="text-sm text-emerald-400">{Math.round(size.discount * 100)}% discount</p></div>
                                <div className="text-right"><p className="text-xl font-bold text-blue-400">{formatCurrency(size.baseRate)}</p><p className="text-xs text-slate-500">per vehicle/yr</p></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 py-16">
                <h2 className="text-2xl font-bold text-white mb-6">What is Fleet Insurance?</h2>
                <div className="prose prose-invert max-w-none">
                    <p className="text-slate-300 mb-4">Fleet insurance covers multiple business vehicles under one policy with bulk discounts.</p>
                    <p className="text-slate-300">Fleets of 5+ vehicles save money, simplify administration, and get dedicated fleet management support.</p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 py-16 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Calculate Your Fleet Savings</h2>
                <p className="text-slate-400 mb-8">5 input factors based on {SITE.year} NAIC data.</p>
                <Link href="/fleet-insurance/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold">Start Free Calculator<ArrowRight className="w-5 h-5" /></Link>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="fleet-insurance" count={5} /></div></div></section>


        </>
    );
}
