"use client";

import Link from "next/link";
import { SITE, CALCULATORS, OIL_RIG_2026, formatCurrency } from "@/lib/calculators/oil-rig";
import { ArrowRight, Flame, AlertTriangle } from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
  return (
    <>
      <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2"><Flame className="w-6 h-6 text-orange-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></div>
          <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/30 via-slate-900 to-red-900/20" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 mb-6">
            <AlertTriangle className="w-4 h-4 text-orange-400" /><span className="text-sm text-orange-300">Jones Act & Offshore Maritime Law</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Oil Rig Injury<span className="text-orange-400"> Calculator</span></h1>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">Calculate your offshore oil rig injury settlement. Includes Jones Act, OCSLA, and maritime law. Free {SITE.year} calculator.</p>
          <Link href="/oil-rig/calculator" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105">Calculate Settlement<ArrowRight className="w-5 h-5" /></Link>
          <div className="mt-8 bg-orange-900/30 border border-orange-700/50 rounded-lg p-4 max-w-xl mx-auto">
            <div className="flex items-center gap-2 text-orange-300 text-sm"><AlertTriangle className="w-4 h-4" /><span>Offshore oil rig workers have {OIL_RIG_2026.statistics.fatalityRate}x higher fatality rate than average</span></div>
          </div>
        </div>
      </section>

      <section className="bg-slate-800/50 border-y border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center"><p className="text-3xl font-bold text-orange-400">{(OIL_RIG_2026.statistics.annualInjuries).toLocaleString()}+</p><p className="text-sm text-slate-400 mt-1">Annual Injuries</p></div>
            <div className="text-center"><p className="text-3xl font-bold text-red-400">{OIL_RIG_2026.statistics.fatalityRate}x</p><p className="text-sm text-slate-400 mt-1">Fatality Rate</p></div>
            <div className="text-center"><p className="text-3xl font-bold text-yellow-400">{formatCurrency(OIL_RIG_2026.statistics.avgSettlement)}</p><p className="text-sm text-slate-400 mt-1">Avg Settlement</p></div>
            <div className="text-center"><p className="text-3xl font-bold text-amber-400">{(OIL_RIG_2026.statistics.jonesActCases).toLocaleString()}+</p><p className="text-sm text-slate-400 mt-1">Jones Act Cases</p></div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Free Oil Rig Tools</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {CALCULATORS.map((calc) => {
            const IconComponent = calc.icon; return (
              <Link key={calc.id} href={`/${calc.id}`} className="group bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-orange-500/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-500/10 rounded-lg"><IconComponent className="w-6 h-6 text-orange-400" /></div>
                  <div className="flex-1"><h3 className="text-lg font-semibold text-white group-hover:text-orange-400">{calc.name}</h3><p className="text-sm text-slate-400 mt-1">{calc.description}</p><span className="inline-flex items-center gap-1 text-orange-400 text-sm mt-3">Start Now <ArrowRight className="w-4 h-4" /></span></div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="bg-slate-800/30 border-y border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Offshore Injury Types & Settlements</h2>
          <div className="space-y-4">{OIL_RIG_2026.injuryTypes.slice(0, 5).map((inj, i) => (<div key={i} className="bg-slate-800 border border-slate-700 rounded-lg p-4 flex justify-between items-center"><div><h3 className="text-white font-medium">{inj.type}</h3><p className="text-sm text-slate-400">{inj.description}</p></div><div className="text-right"><p className="text-lg font-bold text-orange-400">{formatCurrency(inj.avgSettlement)}</p><p className="text-xs text-slate-500">Avg Settlement</p></div></div>))}</div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Calculate Your Settlement</h2>
        <p className="text-slate-400 mb-8">If you were injured on an oil rig, drilling platform, or offshore vessel, you may be entitled to compensation under Jones Act or OCSLA.</p>
        <Link href="/oil-rig/calculator" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-semibold">Calculate Now<ArrowRight className="w-5 h-5" /></Link>
      </section>

      
      {/* Related Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-center">
          <div className="w-full max-w-xs">
            <RelatedCalculators currentCalc="oil-rig" count={5} />
          </div>
        </div>
      </section>

      <footer className="bg-slate-800 border-t border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2"><Flame className="w-5 h-5 text-orange-500" /><span className="font-semibold text-white">{SITE.name}</span></div>
          <p className="text-sm text-slate-400 text-center">{OIL_RIG_2026.citation}. For informational purposes only.</p>
          <p className="text-sm text-slate-500">© {SITE.year} {SITE.name}</p>
        </div>
      </footer>
    </>
  );
}
