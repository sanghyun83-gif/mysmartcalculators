"use client";

import Link from "next/link";
import { SITE, CALCULATORS, WELDING_2026, formatCurrency } from "@/lib/calculators/welding";
import { ArrowRight, AlertTriangle, Flame } from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
  return (
    <>
      <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2"><Flame className="w-6 h-6 text-amber-500" /><span className="text-lg font-bold text-white">{SITE.name}</span></div>
          <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{SITE.year}</span>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 via-slate-900 to-orange-900/20" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/50 rounded-full px-4 py-2 mb-6">
            <AlertTriangle className="w-4 h-4 text-red-400" /><span className="text-sm text-red-300">{(WELDING_2026.statistics.annualWeldingInjuries / 1000).toFixed(1)}K Welding Injuries/Year</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Welding Injury<span className="text-amber-400"> Settlement Calculator</span></h1>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">Calculate your welder burn, eye injury, fume exposure, or electric shock settlement. Free {SITE.year} calculator based on OSHA standards.</p>
          <Link href="/welding/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105">Calculate Settlement<ArrowRight className="w-5 h-5" /></Link>
        </div>
      </section>

      <section className="bg-slate-800/50 border-y border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center"><p className="text-3xl font-bold text-amber-400">{(WELDING_2026.statistics.annualWeldingInjuries / 1000).toFixed(1)}K</p><p className="text-sm text-slate-400 mt-1">Annual Injuries</p></div>
            <div className="text-center"><p className="text-3xl font-bold text-rose-400">{WELDING_2026.statistics.annualDeaths}</p><p className="text-sm text-slate-400 mt-1">Annual Deaths</p></div>
            <div className="text-center"><p className="text-3xl font-bold text-yellow-400">{formatCurrency(WELDING_2026.statistics.avgSettlement)}</p><p className="text-sm text-slate-400 mt-1">Avg Settlement</p></div>
            <div className="text-center"><p className="text-3xl font-bold text-orange-400">{WELDING_2026.statistics.eyeInjuryPercent}%</p><p className="text-sm text-slate-400 mt-1">Eye Injuries</p></div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Welding Injury Tools</h2>
        <div className="grid md:grid-cols-2 gap-6">
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
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Welding Injury Types</h2>
          <div className="space-y-4">{WELDING_2026.injuryTypes.slice(0, 4).map((i, idx) => (<div key={idx} className="bg-slate-800 border border-slate-700 rounded-lg p-4 flex justify-between items-center"><div><h3 className="text-white font-medium">{i.type}</h3><p className="text-sm text-slate-400">{i.description}</p></div><div className="text-right"><p className="text-lg font-bold text-amber-400">{formatCurrency(i.avgSettlement)}</p><p className="text-xs text-slate-500">avg settlement</p></div></div>))}</div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Calculate Your Settlement</h2>
        <p className="text-slate-400 mb-8">If you were injured welding due to OSHA violations, defective equipment, or inadequate safety measures, you may be entitled to significant compensation.</p>
        <Link href="/welding/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold">Calculate Now<ArrowRight className="w-5 h-5" /></Link>
      </section>


      {/* Related Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-center">
          <div className="w-full max-w-xs">
            <RelatedCalculators currentCalc="welding" count={5} />
          </div>
        </div>
      </section>

      <footer className="bg-slate-800 border-t border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2"><Flame className="w-5 h-5 text-amber-500" /><span className="font-semibold text-white">{SITE.name}</span></div>
          <p className="text-sm text-slate-400 text-center">{WELDING_2026.citation}. For informational purposes only.</p>
          <p className="text-sm text-slate-500">© {SITE.year} {SITE.name}</p>
        </div>
      </footer>
    </>
  );
}
