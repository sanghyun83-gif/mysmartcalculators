"use client";

import Link from "next/link";
import { SITE, CALCULATORS, HELOC_2026, formatCurrency } from "@/lib/calculators/heloc";
import { ArrowRight, CreditCard, DollarSign, Home } from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden">          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-slate-900 to-teal-900/20" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
            <DollarSign className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-300">Tap Into Your Equity</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            HELOC
            <span className="text-emerald-400"> Calculator</span>
          </h1>

          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Calculate your home equity line of credit and monthly payments.
            Free {SITE.year} calculator.
          </p>

          <Link
            href="/heloc/calculator"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
          >
            Calculate HELOC
            <ArrowRight className="w-5 h-5" />
          </Link>

          {/* Info Banner */}
          <div className="mt-8 bg-emerald-900/30 border border-emerald-700/50 rounded-lg p-4 max-w-xl mx-auto">
            <div className="flex items-center gap-2 text-emerald-300 text-sm">
              <Home className="w-4 h-4" />
              <span>Max CLTV: <strong>{HELOC_2026.ltvLimits.standard}%</strong> at most lenders</span>
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
                {formatCurrency(HELOC_2026.statistics.avgCreditLimit)}
              </p>
              <p className="text-sm text-slate-400 mt-1">Avg Credit Limit</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-teal-400">
                {HELOC_2026.rates.avgVariable}%
              </p>
              <p className="text-sm text-slate-400 mt-1">Avg Variable Rate</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-cyan-400">
                {HELOC_2026.periods.drawPeriod} yrs
              </p>
              <p className="text-sm text-slate-400 mt-1">Draw Period</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-400">
                {formatCurrency(HELOC_2026.statistics.avgHomeEquity)}
              </p>
              <p className="text-sm text-slate-400 mt-1">Avg Home Equity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Free HELOC Tools
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

      {/* How HELOC Works */}
      <section className="bg-slate-800/30 border-y border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            How HELOC Works
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-emerald-900/20 border border-emerald-500/50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">Draw Period</h3>
              <p className="text-4xl font-bold text-emerald-400 mb-2">{HELOC_2026.periods.drawPeriod} years</p>
              <p className="text-sm text-emerald-200">
                Borrow as needed, pay interest only on what you use.
                Works like a credit card secured by your home.
              </p>
            </div>
            <div className="bg-teal-900/20 border border-teal-500/50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">Repayment Period</h3>
              <p className="text-4xl font-bold text-teal-400 mb-2">{HELOC_2026.periods.repaymentPeriod} years</p>
              <p className="text-sm text-teal-200">
                Can no longer draw funds. Pay principal + interest
                on remaining balance over this period.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          See Your Available Credit Line
        </h2>
        <p className="text-slate-400 mb-8">
          Calculate how much home equity you can access.
        </p>
        <Link
          href="/heloc/calculator"
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
            <RelatedCalculators currentCalc="heloc" count={5} />
          </div>
        </div>
      </section>

    </>
  );
}
