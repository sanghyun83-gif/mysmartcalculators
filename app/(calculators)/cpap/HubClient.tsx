"use client";

import Link from "next/link";
import { SITE, CALCULATORS, CPAP_2026, formatCurrency } from "@/lib/calculators/cpap";
import { ArrowRight, Wind, AlertTriangle } from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
  return (
    <>


      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-amber-900/20" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
            <AlertTriangle className="w-4 h-4 text-purple-400" /><span className="text-sm text-purple-300">FDA Class I Recall - Philips Respironics</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">CPAP Recall<span className="text-purple-400"> Calculator</span></h1>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">Calculate your Philips CPAP recall lawsuit settlement. Includes DreamStation, BiPAP, and ventilator claims. Free {SITE.year} calculator.</p>
          <Link href="/cpap/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105">Calculate Settlement<ArrowRight className="w-5 h-5" /></Link>
          <div className="mt-8 bg-purple-900/30 border border-purple-700/50 rounded-lg p-4 max-w-xl mx-auto">
            <div className="flex items-center gap-2 text-purple-300 text-sm"><AlertTriangle className="w-4 h-4" /><span>{(CPAP_2026.statistics.devicesRecalled / 1000000).toFixed(0)}+ million devices recalled due to foam degradation risk</span></div>
          </div>
        </div>
      </section>

      <section className="bg-slate-800/50 border-y border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center"><p className="text-3xl font-bold text-purple-400">{(CPAP_2026.statistics.devicesRecalled / 1000000).toFixed(0)}M+</p><p className="text-sm text-slate-400 mt-1">Devices Recalled</p></div>
            <div className="text-center"><p className="text-3xl font-bold text-amber-400">{(CPAP_2026.statistics.lawsuitsFiled / 1000).toFixed(0)}K+</p><p className="text-sm text-slate-400 mt-1">Lawsuits Filed</p></div>
            <div className="text-center"><p className="text-3xl font-bold text-yellow-400">{formatCurrency(CPAP_2026.statistics.avgSettlement)}</p><p className="text-sm text-slate-400 mt-1">Avg Settlement</p></div>
            <div className="text-center"><p className="text-3xl font-bold text-red-400">{(CPAP_2026.statistics.fdaReports / 1000).toFixed(0)}K</p><p className="text-sm text-slate-400 mt-1">FDA Reports</p></div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Free CPAP Recall Tools</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {CALCULATORS.map((calc) => {
            const IconComponent = calc.icon; return (
              <Link key={calc.id} href={`/${calc.id}`} className="group bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-500/10 rounded-lg"><IconComponent className="w-6 h-6 text-purple-400" /></div>
                  <div className="flex-1"><h3 className="text-lg font-semibold text-white group-hover:text-purple-400">{calc.name}</h3><p className="text-sm text-slate-400 mt-1">{calc.description}</p><span className="inline-flex items-center gap-1 text-purple-400 text-sm mt-3">Start Now <ArrowRight className="w-4 h-4" /></span></div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="bg-slate-800/30 border-y border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">CPAP Injury Types & Settlements</h2>
          <div className="space-y-4">{CPAP_2026.injuryTypes.slice(0, 5).map((inj, i) => (<div key={i} className="bg-slate-800 border border-slate-700 rounded-lg p-4 flex justify-between items-center"><div><h3 className="text-white font-medium">{inj.type}</h3><p className="text-sm text-slate-400">{inj.description}</p></div><div className="text-right"><p className="text-lg font-bold text-purple-400">{formatCurrency(inj.avgSettlement)}</p><p className="text-xs text-slate-500">Avg Settlement</p></div></div>))}</div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Calculate Your Settlement</h2>
        <p className="text-slate-400 mb-8">If you used a recalled Philips CPAP, BiPAP, or ventilator and experienced health issues, you may be entitled to significant compensation.</p>
        <Link href="/cpap/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Calculate Now<ArrowRight className="w-5 h-5" /></Link>
      </section>


      {/* Related Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-center">
          <div className="w-full max-w-xs">
            <RelatedCalculators currentCalc="cpap" count={5} />
          </div>
        </div>
      </section>


    </>
  );
}
