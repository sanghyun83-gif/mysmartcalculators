"use client";

import Link from "next/link";
import { SITE, CALCULATORS, ESTATE_TAX_2026, formatCurrency } from "@/lib/calculators/estate-tax";
import { ArrowRight, Scale, DollarSign, Users, CheckCircle, AlertTriangle } from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
  return (
    <>


      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-slate-900 to-green-900/20" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
            <Scale className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-300">Free {SITE.year} Calculator</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Estate Tax
            <span className="text-emerald-400"> Calculator</span>
          </h1>

          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Calculate federal estate tax liability. Free calculator for
            estate exemption, portability, and inheritance tax planning.
          </p>

          <Link
            href="/estate-tax/estate-calculator"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
          >
            Calculate Estate Tax
            <ArrowRight className="w-5 h-5" />
          </Link>

          {/* Exemption Banner */}
          <div className="mt-8 bg-emerald-900/30 border border-emerald-700/50 rounded-lg p-4 max-w-xl mx-auto">
            <div className="flex items-center gap-2 text-emerald-300 text-sm">
              <DollarSign className="w-4 h-4" />
              <span><strong>{formatCurrency(ESTATE_TAX_2026.federalExemption)}</strong> federal exemption per person in {SITE.year}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-800/50 border-y border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-emerald-400">
                {formatCurrency(ESTATE_TAX_2026.federalExemption)}
              </p>
              <p className="text-sm text-slate-400 mt-1">Single Exemption</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-400">
                {formatCurrency(ESTATE_TAX_2026.marriedExemption)}
              </p>
              <p className="text-sm text-slate-400 mt-1">Married Exemption</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-teal-400">
                {ESTATE_TAX_2026.maxTaxRate}%
              </p>
              <p className="text-sm text-slate-400 mt-1">Top Tax Rate</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-cyan-400">
                {ESTATE_TAX_2026.statistics.estatesPayingTax}%
              </p>
              <p className="text-sm text-slate-400 mt-1">Estates Owe Tax</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Free Estate Tax Tools
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {CALCULATORS.map((calc) => {
            const IconComponent = calc.icon;
            return (
              <Link
                key={calc.id}
                href={`/${calc.id}`}
                className="group bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-emerald-500/50 transition-all hover:bg-slate-800/80"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">
                      {calc.name}
                    </h3>
                    <p className="text-sm text-slate-400 mt-1">
                      {calc.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-emerald-400 text-sm mt-3 group-hover:gap-2 transition-all">
                      Start Now <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Key Facts */}
      <section className="bg-slate-800/30 border-y border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Federal Estate Tax Key Facts
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              `Only estates over ${formatCurrency(ESTATE_TAX_2026.federalExemption)} owe federal tax`,
              "Married couples can combine exemptions (portability)",
              "40% is the maximum federal estate tax rate",
              "Assets get stepped-up basis at death",
              `Annual gift exclusion: ${formatCurrency(ESTATE_TAX_2026.annualGiftExclusion)} per recipient`,
              "Some states have separate estate or inheritance taxes",
            ].map((fact, i) => (
              <div key={i} className="flex items-start gap-3 bg-slate-800 rounded-lg p-4 border border-slate-700">
                <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5" />
                <span className="text-slate-300">{fact}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* States with Estate Tax */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          States with Separate Estate Tax
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {ESTATE_TAX_2026.statesWithEstateTax.slice(0, 8).map((state) => (
            <div key={state.state} className="bg-slate-800 rounded-lg p-4 border border-slate-700 text-center">
              <p className="font-semibold text-white">{state.state}</p>
              <p className="text-sm text-emerald-400">{formatCurrency(state.exemption)}</p>
              <p className="text-xs text-slate-500">{state.rate}% max</p>
            </div>
          ))}
        </div>
      </section>

      {/* Warning */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-amber-900/20 border border-amber-700/50 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 mt-0.5" />
            <div className="text-sm text-amber-200">
              <p className="font-medium text-white">Exemption Sunset Warning</p>
              <p className="mt-1">
                The current high exemption is set to expire after 2025, potentially dropping
                to ~$7 million per person unless Congress acts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Calculate Your Estate Tax Liability
        </h2>
        <p className="text-slate-400 mb-8">
          Free, instant calculation based on {SITE.year} exemption amounts.
        </p>
        <Link
          href="/estate-tax/estate-calculator"
          className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
        >
          Start Free Calculator
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      {/* Footer */}

      {/* Related Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-center">
          <div className="w-full max-w-xs">
            <RelatedCalculators currentCalc="estate-tax" count={5} />
          </div>
        </div>
      </section>


    </>
  );
}
