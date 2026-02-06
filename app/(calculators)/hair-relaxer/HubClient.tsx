"use client";

import Link from "next/link";
import { SITE, CALCULATORS, HAIR_RELAXER_2026, formatCurrency } from "@/lib/calculators/hair-relaxer";
import { ArrowRight, Sparkles, AlertTriangle } from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
  return (
    <>
      <section className="relative overflow-hidden">          <div className="absolute inset-0 bg-gradient-to-br from-rose-900/20 via-slate-900 to-amber-900/20" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-rose-500/10 border border-rose-500/30 rounded-full px-4 py-2 mb-6">
            <AlertTriangle className="w-4 h-4 text-rose-400" /><span className="text-sm text-rose-300">Chemical Hair Relaxer Mass Tort Litigation</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Hair Relaxer Lawsuit<span className="text-amber-400"> Calculator</span></h1>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">Calculate your hair relaxer lawsuit settlement. Includes uterine cancer, ovarian cancer, and endometriosis. Free {SITE.year} calculator.</p>
          <Link href="/hair-relaxer/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105">Calculate Settlement<ArrowRight className="w-5 h-5" /></Link>
          <div className="mt-8 bg-rose-900/30 border border-rose-700/50 rounded-lg p-4 max-w-xl mx-auto">
            <div className="flex items-center gap-2 text-rose-300 text-sm"><AlertTriangle className="w-4 h-4" /><span>NIH Study: {HAIR_RELAXER_2026.statistics.uterineRiskIncrease}% higher uterine cancer risk with frequent use</span></div>
          </div>
        </div>
      </section>

      <section className="bg-slate-800/50 border-y border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center"><p className="text-3xl font-bold text-rose-400">{(HAIR_RELAXER_2026.statistics.activeLawsuits / 1000).toFixed(1)}K+</p><p className="text-sm text-slate-400 mt-1">Active Lawsuits</p></div>
            <div className="text-center"><p className="text-3xl font-bold text-red-400">{HAIR_RELAXER_2026.statistics.uterineRiskIncrease}%</p><p className="text-sm text-slate-400 mt-1">Risk Increase</p></div>
            <div className="text-center"><p className="text-3xl font-bold text-amber-400">MDL 3060</p><p className="text-sm text-slate-400 mt-1">Federal Court</p></div>
            <div className="text-center"><p className="text-3xl font-bold text-yellow-400">Nov 2026</p><p className="text-sm text-slate-400 mt-1">Bellwether Trial</p></div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Free Hair Relaxer Tools</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {CALCULATORS.map((calc) => {
            const IconComponent = calc.icon; return (
              <Link key={calc.id} href={`/${calc.id}`} className="group bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-amber-500/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-500/10 rounded-lg"><IconComponent className="w-6 h-6 text-amber-400" /></div>
                  <div className="flex-1"><h3 className="text-lg font-semibold text-white group-hover:text-amber-400">{calc.name}</h3><p className="text-sm text-slate-400 mt-1">{calc.description}</p><span className="inline-flex items-center gap-1 text-amber-400 text-sm mt-3">Start Now <ArrowRight className="w-4 h-4" /></span></div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="bg-slate-800/30 border-y border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Cancer Types & Settlements</h2>
          <div className="space-y-4">{HAIR_RELAXER_2026.cancerTypes.slice(0, 4).map((c, i) => (<div key={i} className="bg-slate-800 border border-slate-700 rounded-lg p-4 flex justify-between items-center"><div><h3 className="text-white font-medium">{c.type}</h3><p className="text-sm text-slate-400">{c.description}</p></div><div className="text-right"><p className="text-lg font-bold text-amber-400">{formatCurrency(c.avgSettlement)}</p><p className="text-xs text-slate-500">Avg Settlement</p></div></div>))}</div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Calculate Your Settlement</h2>
        <p className="text-slate-400 mb-8">If you used chemical hair relaxers and developed uterine cancer, ovarian cancer, or endometriosis, you may be entitled to compensation.</p>
        <Link href="/hair-relaxer/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold">Calculate Now<ArrowRight className="w-5 h-5" /></Link>
      </section>


      {/* Related Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-center">
          <div className="w-full max-w-xs">
            <RelatedCalculators currentCalc="hair-relaxer" count={5} />
          </div>
        </div>
      </section>

    </>
  );
}
