"use client";

import Link from "next/link";
import { SITE, CALCULATORS, CRYPTO_TAX_2026, formatCurrency } from "@/lib/calculators/crypto-tax";
import { ArrowRight, Coins, DollarSign, CheckCircle, XCircle } from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
  return (
    <>
      {/* Header */}


      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-slate-900 to-orange-900/20" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
            <Coins className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-300">Free {SITE.year} Calculator</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Crypto Tax
            <span className="text-emerald-400"> Calculator</span>
          </h1>

          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Calculate cryptocurrency capital gains taxes on Bitcoin, Ethereum,
            altcoins, and NFTs. Free IRS-compliant estimator.
          </p>

          <Link
            href="/crypto-tax/crypto-calculator"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
          >
            Calculate Your Crypto Tax
            <ArrowRight className="w-5 h-5" />
          </Link>

          {/* Rate Banner */}
          <div className="mt-8 bg-emerald-900/30 border border-emerald-700/50 rounded-lg p-4 max-w-xl mx-auto">
            <div className="flex items-center gap-2 text-emerald-300 text-sm">
              <DollarSign className="w-4 h-4" />
              <span>Long-term crypto: <strong>0%, 15%, or 20%</strong> | Short-term: up to <strong>37%</strong></span>
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
                {(CRYPTO_TAX_2026.statistics.cryptoOwners / 1000000).toFixed(0)}M+
              </p>
              <p className="text-sm text-slate-400 mt-1">US Crypto Owners</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-orange-400">
                {CRYPTO_TAX_2026.statistics.percentReporting}%
              </p>
              <p className="text-sm text-slate-400 mt-1">Report Correctly</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-teal-400">0%</p>
              <p className="text-sm text-slate-400 mt-1">Lowest LT Rate</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-red-400">37%</p>
              <p className="text-sm text-slate-400 mt-1">Highest ST Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Free Crypto Tax Tools
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

      {/* Taxable vs Non-Taxable */}
      <section className="bg-slate-800/30 border-y border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Taxable vs Non-Taxable Events
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Taxable */}
            <div className="bg-red-900/20 border border-red-500/50 rounded-xl p-5">
              <h3 className="text-lg font-semibold text-red-400 mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                Taxable Events
              </h3>
              <ul className="space-y-2">
                {CRYPTO_TAX_2026.taxableEvents.map((event, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="text-red-400">•</span>
                    {event}
                  </li>
                ))}
              </ul>
            </div>

            {/* Non-Taxable */}
            <div className="bg-emerald-900/20 border border-emerald-500/50 rounded-xl p-5">
              <h3 className="text-lg font-semibold text-emerald-400 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Non-Taxable Events
              </h3>
              <ul className="space-y-2">
                {CRYPTO_TAX_2026.nonTaxableEvents.map((event, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="text-emerald-400">•</span>
                    {event}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Crypto Tax Key Facts
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Crypto is taxed as property, not currency",
            "Must report all trades, even crypto-to-crypto",
            "IRS requires Form 8949 for crypto sales",
            "HODL over 1 year for lower capital gains rates",
            "Mining/staking rewards = ordinary income",
            "Losses can offset gains (up to $3,000/year)",
          ].map((fact, i) => (
            <div key={i} className="flex items-start gap-3 bg-slate-800 rounded-lg p-4 border border-slate-700">
              <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5" />
              <span className="text-slate-300">{fact}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Calculate Your Crypto Tax
        </h2>
        <p className="text-slate-400 mb-8">
          Free, instant calculation based on {SITE.year} tax rates.
        </p>
        <Link
          href="/crypto-tax/crypto-calculator"
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
            <RelatedCalculators currentCalc="crypto-tax" count={5} />
          </div>
        </div>
      </section>


    </>
  );
}
