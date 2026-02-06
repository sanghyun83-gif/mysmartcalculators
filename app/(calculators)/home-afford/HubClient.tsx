"use client";

import Link from "next/link";
import { SITE, CALCULATORS, HOUSING_CONSTANTS, formatCurrency } from "@/lib/calculators/home-afford";
import { ArrowRight, Home, TrendingUp, DollarSign } from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
  const featuredCalculators = CALCULATORS.filter(c => c.featured);
  const otherCalculators = CALCULATORS.filter(c => !c.featured);
  const { conformingLoanLimits, mortgageRates } = HOUSING_CONSTANTS;

  return (
    <>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-700 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/50 rounded-full px-4 py-2 mb-6">
            <TrendingUp className="w-4 h-4 text-green-300" />
            <span className="text-sm text-green-200">Free Home Calculator</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {SITE.year} Home
            <span className="block text-yellow-400">Affordability</span>
          </h1>

          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            Find out how much house you can afford based on your income.
            Calculate down payment, DTI ratio, and monthly payments.
          </p>

          <Link
            href="/home-afford/calculator"
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-green-900 px-6 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg"
          >
            <Home className="w-5 h-5" />
            Calculate Affordability
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* 2026 Rates & Limits */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <h2 className="text-lg font-bold text-slate-800 mb-4 text-center">
            {SITE.year} Mortgage Rates & Limits
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-xl border border-green-100">
              <p className="text-sm text-slate-600 mb-1">30-Year Fixed</p>
              <p className="text-2xl font-bold text-green-700">{mortgageRates.thirtyYear}%</p>
              <p className="text-xs text-green-600">National Avg</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-xl border border-green-100">
              <p className="text-sm text-slate-600 mb-1">15-Year Fixed</p>
              <p className="text-2xl font-bold text-green-700">{mortgageRates.fifteenYear}%</p>
              <p className="text-xs text-green-600">National Avg</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-100">
              <p className="text-sm text-slate-600 mb-1">Conforming Limit</p>
              <p className="text-2xl font-bold text-blue-700">{formatCurrency(conformingLoanLimits.standard)}</p>
              <p className="text-xs text-blue-600">Most Counties</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-xl border border-purple-100">
              <p className="text-sm text-slate-600 mb-1">High-Cost Limit</p>
              <p className="text-2xl font-bold text-purple-700">{formatCurrency(conformingLoanLimits.highCost)}</p>
              <p className="text-xs text-purple-600">High-Cost Areas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
          Free {SITE.year} Home Buying Tools
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {featuredCalculators.map((calc) => {
            const IconComponent = calc.icon;
            return (
              <Link
                key={calc.id}
                href={`/${calc.id}`}
                className="group bg-white border border-slate-200 rounded-xl p-5 hover:border-green-500 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col">
                  <div className="p-3 bg-green-100 rounded-lg w-fit group-hover:bg-green-600 transition-colors mb-3">
                    <IconComponent className="w-5 h-5 text-green-600 group-hover:text-white" />
                  </div>
                  <h3 className="text-base font-bold text-slate-800 group-hover:text-green-600 mb-1">
                    {calc.name}
                  </h3>
                  <p className="text-sm text-slate-500 mb-3">
                    {calc.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-green-600 text-sm font-semibold mt-auto">
                    Open <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {otherCalculators.length > 0 && (
          <div className="grid md:grid-cols-2 gap-3">
            {otherCalculators.map((calc) => {
              const IconComponent = calc.icon;
              return (
                <Link
                  key={calc.id}
                  href={`/${calc.id}`}
                  className="group bg-white border border-slate-200 rounded-lg p-4 hover:border-green-500 transition-all flex items-center gap-3"
                >
                  <IconComponent className="w-5 h-5 text-slate-400 group-hover:text-green-600" />
                  <span className="text-sm text-slate-600 group-hover:text-green-600 font-medium">
                    {calc.name}
                  </span>
                </Link>
              );
            })}
          </div>
        )}
      </section>

      {/* Quick Example */}
      <section className="bg-slate-100 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
            Example: $100k Income
          </h2>

          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
              <div className="p-6 text-center">
                <p className="text-sm text-slate-500 mb-1">With 20% Down</p>
                <p className="text-3xl font-bold text-green-600">~$420k</p>
                <p className="text-xs text-slate-400">Max home price</p>
              </div>
              <div className="p-6 text-center">
                <p className="text-sm text-slate-500 mb-1">Monthly Payment</p>
                <p className="text-3xl font-bold text-blue-600">~$2,300</p>
                <p className="text-xs text-slate-400">PITI (28% DTI)</p>
              </div>
              <div className="p-6 text-center">
                <p className="text-sm text-slate-500 mb-1">Down Payment</p>
                <p className="text-3xl font-bold text-purple-600">$84k</p>
                <p className="text-xs text-slate-400">20% of $420k</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-6">
            <Link href="/home-afford/calculator" className="text-green-600 font-semibold hover:underline">
              Calculate Your Affordability  →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-bold mb-3">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-green-100 mb-6">
            Calculate affordability, compare down payments, and understand your DTI ratio.
          </p>
          <Link
            href="/home-afford/calculator"
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-green-900 px-6 py-4 rounded-xl font-bold transition-colors"
          >
            <DollarSign className="w-5 h-5" />
            Start Calculating
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}

      {/* Related Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-center">
          <div className="w-full max-w-xs">
            <RelatedCalculators currentCalc="home-afford" count={5} />
          </div>
        </div>
      </section>

    </>
  );
}
