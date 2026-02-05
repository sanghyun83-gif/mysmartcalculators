"use client";

import Link from "next/link";
import { SITE, CALCULATORS, BURN_2026, formatCurrency } from "@/lib/calculators/burn-injury";
import { ArrowRight, Flame, AlertTriangle, Users } from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
  return (
    <>
      {/* Header */}

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-slate-900 to-red-900/20" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 mb-6">
            <AlertTriangle className="w-4 h-4 text-orange-400" />
            <span className="text-sm text-orange-300">Catastrophic Burn Injury Claims</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Burn Injury
            <span className="text-orange-400"> Calculator</span>
          </h1>

          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Calculate your burn injury settlement.
            Includes TBSA percentage and burn degree levels. Free {SITE.year} calculator.
          </p>

          <Link
            href="/burn-injury/calculator"
            className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
          >
            Calculate Settlement
            <ArrowRight className="w-5 h-5" />
          </Link>

          {/* Avg Settlement Banner */}
          <div className="mt-8 bg-orange-900/30 border border-orange-700/50 rounded-lg p-4 max-w-xl mx-auto">
            <div className="flex items-center gap-2 text-orange-300 text-sm">
              <Flame className="w-4 h-4" />
              <span>Avg Third Degree Settlement: <strong>{formatCurrency(BURN_2026.burnDegrees[2].avgSettlement)}</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-800/50 border-y border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-orange-400">
                {(BURN_2026.statistics.annualBurnCases / 1000).toFixed(0)}K
              </p>
              <p className="text-sm text-slate-400 mt-1">Burn Cases/Year</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-red-400">
                {BURN_2026.statistics.hospitalAdmissions.toLocaleString()}
              </p>
              <p className="text-sm text-slate-400 mt-1">Hospitalizations</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-yellow-400">
                {BURN_2026.statistics.homePercent}%
              </p>
              <p className="text-sm text-slate-400 mt-1">Occur at Home</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-amber-400">
                {BURN_2026.statistics.avgHospitalDays}
              </p>
              <p className="text-sm text-slate-400 mt-1">Avg Hospital Days</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Free Burn Injury Tools
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {CALCULATORS.map((calc) => {
            const IconComponent = calc.icon;
            return (
              <Link
                key={calc.id}
                href={`/${calc.id}`}
                className="group bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-orange-500/50 transition-all hover:bg-slate-800/80"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-500/10 rounded-lg group-hover:bg-orange-500/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-orange-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors">
                      {calc.name}
                    </h3>
                    <p className="text-sm text-slate-400 mt-1">
                      {calc.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-orange-400 text-sm mt-3 group-hover:gap-2 transition-all">
                      Start Now <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Burn Degrees Section */}
      <section className="bg-slate-800/30 border-y border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Burn Degrees & Settlements
          </h2>

          <div className="space-y-4">
            {BURN_2026.burnDegrees.map((burn, index) => (
              <div key={index} className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-white font-medium">{burn.degree}</h3>
                    <p className="text-sm text-slate-400">{burn.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-orange-400">{formatCurrency(burn.avgSettlement)}</p>
                    <p className="text-xs text-slate-500">Avg Settlement</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Calculate Your Burn Injury Settlement
        </h2>
        <p className="text-slate-400 mb-8">
          Get an estimate based on your burn degree and TBSA percentage.
        </p>
        <Link
          href="/burn-injury/calculator"
          className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
        >
          Calculate Now
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      {/* Footer */}

      {/* Related Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-center">
          <div className="w-full max-w-xs">
            <RelatedCalculators currentCalc="burn-injury" count={5} />
          </div>
        </div>
      </section>

    </>
  );
}
