"use client";

import Link from "next/link";
import { SITE, CALCULATORS, SSA_CONSTANTS_2026, formatCurrency } from "@/lib/calculators/disability";
import { ArrowRight, Shield, CheckCircle, Calculator, DollarSign, Calendar } from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
  const featuredCalculators = CALCULATORS.filter(c => c.featured);
  const otherCalculators = CALCULATORS.filter(c => !c.featured);
  const constants = SSA_CONSTANTS_2026;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}


      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/30 border border-blue-400/50 rounded-full px-4 py-2 mb-6">
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm">Updated with {constants.colaDisplay} COLA for {SITE.year}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {SITE.year} Disability Benefits
            <span className="block text-blue-200">Calculator</span>
          </h1>

          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Calculate your SSDI and SSI benefits for {SITE.year}.
            Includes Back Pay estimation and state supplements.
          </p>

          <Link
            href="/disability/ssdi-calculator"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:bg-blue-50 hover:scale-105 shadow-lg"
          >
            <Calculator className="w-5 h-5" />
            Calculate SSDI Benefits
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <p className="text-3xl font-bold text-blue-600">{constants.colaDisplay}</p>
              <p className="text-sm text-slate-500 mt-1">{SITE.year} COLA Increase</p>
            </div>
            <div className="text-center p-4">
              <p className="text-3xl font-bold text-teal-600">{formatCurrency(constants.ssdi.averageMonthly)}</p>
              <p className="text-sm text-slate-500 mt-1">Average SSDI</p>
            </div>
            <div className="text-center p-4">
              <p className="text-3xl font-bold text-amber-600">{formatCurrency(constants.ssi.maxIndividual)}</p>
              <p className="text-sm text-slate-500 mt-1">Max SSI (Individual)</p>
            </div>
            <div className="text-center p-4">
              <p className="text-3xl font-bold text-green-600">50</p>
              <p className="text-sm text-slate-500 mt-1">States Covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">
          Free {SITE.year} Benefits Calculators
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {featuredCalculators.map((calc) => {
            const IconComponent = calc.icon;
            return (
              <Link
                key={calc.id}
                href={`/${calc.id}`}
                className="group bg-white border border-slate-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-600 transition-colors">
                    <IconComponent className="w-6 h-6 text-blue-600 group-hover:text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                      {calc.name}
                    </h3>
                    <p className="text-sm text-slate-500 mt-1">
                      {calc.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-blue-600 text-sm mt-3 font-medium group-hover:gap-2 transition-all">
                      Calculate Now <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Other Calculators */}
        {otherCalculators.length > 0 && (
          <div className="grid md:grid-cols-3 gap-4">
            {otherCalculators.map((calc) => {
              const IconComponent = calc.icon;
              return (
                <Link
                  key={calc.id}
                  href={`/${calc.id}`}
                  className="group bg-white border border-slate-200 rounded-lg p-4 hover:border-blue-500 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <IconComponent className="w-5 h-5 text-slate-400 group-hover:text-blue-600" />
                    <span className="text-sm text-slate-600 group-hover:text-blue-600 font-medium">
                      {calc.shortName}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>

      {/* SSDI vs SSI Comparison */}
      <section className="bg-white border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">
            SSDI vs SSI: Which Do You Qualify For?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium">
                  SSDI
                </span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Social Security Disability Insurance
              </h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                  Based on work history (requires work credits)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                  No income or asset limits
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                  Medicare after 24 months
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                  Max {SITE.year}: {formatCurrency(constants.ssdi.maxAtFRA)}/mo
                </li>
              </ul>
            </div>

            <div className="bg-teal-50 rounded-xl p-6 border border-teal-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-teal-600 text-white rounded-full text-sm font-medium">
                  SSI
                </span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Supplemental Security Income
              </h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5" />
                  Need-based (no work history required)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5" />
                  Income and asset limits apply
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5" />
                  Medicaid immediately in most states
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5" />
                  Max {SITE.year}: {formatCurrency(constants.ssi.maxIndividual)}/mo + state supplement
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">
          Get Your Free {SITE.year} Benefit Estimate
        </h2>
        <p className="text-slate-500 mb-8">
          Calculate your potential disability benefits in under 2 minutes. No email required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/disability/ssdi-calculator"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
          >
            Calculate SSDI
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/disability/ssi-calculator"
            className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
          >
            Calculate SSI
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}

      {/* Related Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-center">
          <div className="w-full max-w-xs">
            <RelatedCalculators currentCalc="disability" count={5} />
          </div>
        </div>
      </section>


    </div>
  );
}
