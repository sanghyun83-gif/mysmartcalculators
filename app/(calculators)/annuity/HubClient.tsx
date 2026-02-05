"use client";

import Link from "next/link";
import { SITE, CALCULATORS, ANNUITY_2026, formatCurrency } from "@/lib/calculators/annuity";
import { ArrowRight, Wallet, DollarSign, Shield, CheckCircle } from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
  return (
    <>
      {/* Header */}

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-slate-900 to-teal-900/20" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
            <Wallet className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-300">Free {SITE.year} Calculator</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Annuity
            <span className="text-emerald-400"> Calculator</span>
          </h1>

          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Calculate guaranteed retirement income from fixed, variable, and
            immediate annuities. Free payout estimator.
          </p>

          <Link
            href="/annuity/calculator"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
          >
            Calculate Your Annuity
            <ArrowRight className="w-5 h-5" />
          </Link>

          {/* Rate Banner */}
          <div className="mt-8 bg-emerald-900/30 border border-emerald-700/50 rounded-lg p-4 max-w-xl mx-auto">
            <div className="flex items-center gap-2 text-emerald-300 text-sm">
              <DollarSign className="w-4 h-4" />
              <span>Fixed annuity rates: <strong>{ANNUITY_2026.fixedRates.year5}%</strong> (5-year) to <strong>{ANNUITY_2026.fixedRates.year10}%</strong> (10-year)</span>
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
                ${ANNUITY_2026.statistics.totalAnnuitySales}B
              </p>
              <p className="text-sm text-slate-400 mt-1">Annual Annuity Sales</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-400">
                {ANNUITY_2026.fixedRates.year5}%
              </p>
              <p className="text-sm text-slate-400 mt-1">5-Year Fixed Rate</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-teal-400">
                {ANNUITY_2026.statistics.avgPurchaseAge}
              </p>
              <p className="text-sm text-slate-400 mt-1">Avg Purchase Age</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-cyan-400">
                {formatCurrency(ANNUITY_2026.statistics.avgPremium)}
              </p>
              <p className="text-sm text-slate-400 mt-1">Avg Premium</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Free Annuity Tools
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

      {/* Types of Annuities */}
      <section className="bg-slate-800/30 border-y border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Types of Annuities
          </h2>

          <div className="space-y-3">
            {ANNUITY_2026.annuityTypes.map((type, i) => (
              <div key={i} className="bg-slate-800 rounded-lg p-4 border border-slate-700 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-white">{type.name}</p>
                  <p className="text-sm text-slate-400">{type.desc}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded ${type.risk === "Low" ? "bg-emerald-900/50 text-emerald-300" :
                  type.risk === "Medium" ? "bg-yellow-900/50 text-yellow-300" :
                    type.risk === "Medium-High" ? "bg-orange-900/50 text-orange-300" :
                      "bg-slate-700 text-slate-300"
                  }`}>
                  {type.risk} Risk
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Annuity Benefits
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Guaranteed lifetime income",
            "Tax-deferred growth",
            "Protection from market volatility",
            "Death benefit for beneficiaries",
            "No contribution limits",
            "Various payout options",
          ].map((benefit, i) => (
            <div key={i} className="flex items-start gap-3 bg-slate-800 rounded-lg p-4 border border-slate-700">
              <Shield className="w-5 h-5 text-emerald-400 mt-0.5" />
              <span className="text-slate-300">{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Calculate Your Retirement Income
        </h2>
        <p className="text-slate-400 mb-8">
          Free, instant annuity payout estimates for {SITE.year}.
        </p>
        <Link
          href="/annuity/calculator"
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
            <RelatedCalculators currentCalc="annuity" count={5} />
          </div>
        </div>
      </section>

    </>
  );
}
