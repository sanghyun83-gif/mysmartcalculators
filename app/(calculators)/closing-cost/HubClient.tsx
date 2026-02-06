"use client";

import Link from "next/link";
import { SITE, CALCULATORS, CLOSING_COST_2026, formatCurrency } from "@/lib/calculators/closing-cost";
import { ArrowRight, Home, DollarSign, Receipt } from "lucide-react";
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
            <DollarSign className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-300">Know Before You Close</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Closing Cost
            <span className="text-emerald-400"> Calculator</span>
          </h1>

          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Calculate home closing costs for buyers and sellers.
            Free {SITE.year} calculator with itemized fee breakdown.
          </p>

          <Link
            href="/closing-cost/calculator"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
          >
            Calculate Closing Costs
            <ArrowRight className="w-5 h-5" />
          </Link>

          {/* Info Banner */}
          <div className="mt-8 bg-emerald-900/30 border border-emerald-700/50 rounded-lg p-4 max-w-xl mx-auto">
            <div className="flex items-center gap-2 text-emerald-300 text-sm">
              <Receipt className="w-4 h-4" />
              <span>Average Total Closing Cost: <strong>{formatCurrency(CLOSING_COST_2026.statistics.avgTotalClosing)}</strong></span>
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
                {CLOSING_COST_2026.statistics.avgBuyerClosing}%
              </p>
              <p className="text-sm text-slate-400 mt-1">Avg Buyer Closing</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-teal-400">
                {CLOSING_COST_2026.statistics.avgSellerClosing}%
              </p>
              <p className="text-sm text-slate-400 mt-1">Avg Seller Closing</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-cyan-400">
                {formatCurrency(CLOSING_COST_2026.statistics.medianHomePrice)}
              </p>
              <p className="text-sm text-slate-400 mt-1">Median Home Price</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-400">
                {formatCurrency(CLOSING_COST_2026.statistics.avgTotalClosing)}
              </p>
              <p className="text-sm text-slate-400 mt-1">Avg Total Costs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Free Closing Cost Tools
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

      {/* Buyer vs Seller */}
      <section className="bg-slate-800/30 border-y border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Who Pays What?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-emerald-900/20 border border-emerald-500/50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-3">Buyer Pays</h3>
              <p className="text-4xl font-bold text-emerald-400 mb-4">2-5%</p>
              <ul className="space-y-2 text-sm text-emerald-200">
                <li>??Loan origination fees</li>
                <li>??Appraisal & inspection</li>
                <li>??Title insurance</li>
                <li>??Prepaid interest & escrow</li>
              </ul>
            </div>
            <div className="bg-teal-900/20 border border-teal-500/50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-3">Seller Pays</h3>
              <p className="text-4xl font-bold text-teal-400 mb-4">6-10%</p>
              <ul className="space-y-2 text-sm text-teal-200">
                <li>??Real estate commission (5-6%)</li>
                <li>??Transfer taxes</li>
                <li>??Owner&apos;s title insurance</li>
                <li>??Attorney fees</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Get Your Personalized Estimate
        </h2>
        <p className="text-slate-400 mb-8">
          Calculate itemized closing costs for your home transaction.
        </p>
        <Link
          href="/closing-cost/calculator"
          className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
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
            <RelatedCalculators currentCalc="closing-cost" count={5} />
          </div>
        </div>
      </section>

    </>
  );
}
