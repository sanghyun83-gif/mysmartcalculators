"use client";

import Link from "next/link";
import { SITE, CALCULATORS, SETTLEMENT_CONSTANTS_2026, DISCOUNT_BY_TERM, formatCurrency } from "@/lib/calculators/structured-settlement";
import { ArrowRight, DollarSign, TrendingDown, AlertTriangle, Clock, FileText } from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
  const discountRates = Object.entries(DISCOUNT_BY_TERM);

  return (
    <>
      {/* Header */}
      <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <DollarSign className="w-6 h-6 text-emerald-500" />
            <span className="text-lg font-bold text-white">{SITE.name}</span>
          </div>
          <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">
            {SITE.year} Rates
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-slate-900 to-green-900/20" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
            <DollarSign className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-300">Free {SITE.year} Calculator</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Structured Settlement
            <span className="text-emerald-400"> Calculator</span>
          </h1>

          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Calculate how much cash you can get for your structured settlement.
            Find the present value of your future payments before selling.
          </p>

          <Link
            href="/structured-settlement/settlement-calculator"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
          >
            Calculate Your Cash Value
            <ArrowRight className="w-5 h-5" />
          </Link>

          {/* Warning Banner */}
          <div className="mt-8 bg-amber-900/30 border border-amber-700/50 rounded-lg p-4 max-w-xl mx-auto">
            <div className="flex items-center gap-2 text-amber-300 text-sm">
              <AlertTriangle className="w-4 h-4" />
              <span>You may lose <strong>20-40%</strong> of your settlement&apos;s value when selling</span>
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
                $6B
              </p>
              <p className="text-sm text-slate-400 mt-1">Market Size</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-400">
                9-18%
              </p>
              <p className="text-sm text-slate-400 mt-1">Discount Rates</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-teal-400">
                {SETTLEMENT_CONSTANTS_2026.timeline.avgWeeks} weeks
              </p>
              <p className="text-sm text-slate-400 mt-1">Avg Processing</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-cyan-400">
                {formatCurrency(SETTLEMENT_CONSTANTS_2026.statistics.avgSaleAmount)}
              </p>
              <p className="text-sm text-slate-400 mt-1">Avg Sale Amount</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Free Settlement Tools
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

      {/* Discount Rates */}
      <section className="bg-slate-800/30 border-y border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Discount Rates by Payout Term
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {discountRates.map(([key, term]) => (
              <div key={key} className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                <h3 className="font-semibold text-white mb-2">{term.name}</h3>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-slate-400">Discount Rate</p>
                    <p className="text-xl font-bold text-emerald-400">{(term.discountRate * 100)}%</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-400">Expected Loss</p>
                    <p className="text-xl font-bold text-red-400">~{term.presentValueLoss}%</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          How Selling Works
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
              <DollarSign className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="font-semibold text-white mb-2">Get Quotes</h3>
            <p className="text-sm text-slate-400">
              Contact multiple factoring companies. Each will offer a different discount rate. Compare at least 3 quotes.
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center mb-4">
              <FileText className="w-5 h-5 text-teal-400" />
            </div>
            <h3 className="font-semibold text-white mb-2">Court Approval</h3>
            <p className="text-sm text-slate-400">
              Federal law requires court approval for all structured settlement sales. A judge must determine the sale is in your best interest.
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
              <Clock className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="font-semibold text-white mb-2">Receive Cash</h3>
            <p className="text-sm text-slate-400">
              After court approval (typically 8-12 weeks), you receive your lump sum payment, minus fees and the discount.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          See Your Settlement&apos;s Cash Value
        </h2>
        <p className="text-slate-400 mb-8">
          Calculate how much your structured settlement is worth in cash today.
        </p>
        <Link
          href="/structured-settlement/settlement-calculator"
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
            <RelatedCalculators currentCalc="structured-settlement" count={5} />
          </div>
        </div>
      </section>

      <footer className="bg-slate-800 border-t border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-emerald-500" />
              <span className="font-semibold text-white">{SITE.name}</span>
            </div>
            <p className="text-sm text-slate-400 text-center">
              For informational purposes only. Get multiple quotes before selling.
            </p>
            <p className="text-sm text-slate-500">
              © {SITE.year} {SITE.name}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
