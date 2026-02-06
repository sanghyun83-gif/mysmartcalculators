"use client";

import Link from "next/link";
import { SITE, CALCULATORS, INSURANCE_CONSTANTS, formatCurrency } from "@/lib/calculators/life-insurance";
import { ArrowRight, CheckCircle, Shield, Info } from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
  const featuredCalculators = CALCULATORS.filter(c => c.featured);
  const otherCalculators = CALCULATORS.filter(c => !c.featured);
  const { coverageMultiplier, defaults } = INSURANCE_CONSTANTS;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-800 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/50 rounded-full px-4 py-2 mb-6">
            <CheckCircle className="w-4 h-4 text-blue-300" />
            <span className="text-sm text-blue-200">{SITE.year} Rates  100% Free</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {SITE.year} Life Insurance
            <span className="block text-blue-300">Calculator</span>
          </h1>

          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Find out how much life insurance you need to protect your family.
            Get instant estimates and compare policies for free.
          </p>

          <Link
            href="/life-insurance/calculator"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-blue-700 px-6 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg"
          >
            <Shield className="w-5 h-5" />
            Calculate Your Coverage
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Key Stats */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-5 bg-blue-50 rounded-xl border border-blue-100">
              <p className="text-sm text-slate-600 mb-1">Recommended Coverage</p>
              <p className="text-3xl font-bold text-blue-700">{coverageMultiplier.minimum}-{coverageMultiplier.maximum}x</p>
              <p className="text-sm text-blue-600">annual income</p>
            </div>
            <div className="text-center p-5 bg-green-50 rounded-xl border border-green-100">
              <p className="text-sm text-slate-600 mb-1">Average Premium</p>
              <p className="text-3xl font-bold text-green-700">$30-50</p>
              <p className="text-sm text-green-600">per month for $500K</p>
            </div>
            <div className="text-center p-5 bg-amber-50 rounded-xl border border-amber-100">
              <p className="text-sm text-slate-600 mb-1">Most Popular Term</p>
              <p className="text-3xl font-bold text-amber-700">20 Years</p>
              <p className="text-sm text-amber-600">term life insurance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
          Free Life Insurance Tools
        </h2>

        <div className="grid md:grid-cols-3 gap-5 mb-6">
          {featuredCalculators.map((calc) => {
            const IconComponent = calc.icon;
            return (
              <Link
                key={calc.id}
                href={`/${calc.id}`}
                className="group bg-white border border-slate-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col">
                  <div className="p-3 bg-blue-100 rounded-lg w-fit group-hover:bg-blue-600 transition-colors mb-4">
                    <IconComponent className="w-6 h-6 text-blue-600 group-hover:text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors mb-1">
                    {calc.name}
                  </h3>
                  <p className="text-sm text-slate-500 mb-3">
                    {calc.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-blue-600 text-sm font-semibold group-hover:gap-2 transition-all mt-auto">
                    Open Calculator <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Other Tools */}
        {otherCalculators.length > 0 && (
          <div className="grid md:grid-cols-2 gap-3">
            {otherCalculators.map((calc) => {
              const IconComponent = calc.icon;
              return (
                <Link
                  key={calc.id}
                  href={`/${calc.id}`}
                  className="group bg-white border border-slate-200 rounded-lg p-4 hover:border-blue-500 transition-all flex items-center gap-3"
                >
                  <IconComponent className="w-5 h-5 text-slate-400 group-hover:text-blue-600" />
                  <span className="text-sm text-slate-600 group-hover:text-blue-600 font-medium">
                    {calc.name}
                  </span>
                </Link>
              );
            })}
          </div>
        )}
      </section>

      {/* Why Life Insurance */}
      <section className="bg-blue-50 border-y border-blue-100">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
            Why You Need Life Insurance
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-5 border border-blue-200">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">Replace Lost Income</h3>
                  <p className="text-sm text-slate-600">
                    Ensure your family can maintain their lifestyle if something happens to you.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-5 border border-blue-200">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">Pay Off Debts</h3>
                  <p className="text-sm text-slate-600">
                    Cover mortgage, car loans, and other debts so your family isn&apos;t burdened.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-5 border border-blue-200">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">Fund Education</h3>
                  <p className="text-sm text-slate-600">
                    Make sure your children can still attend college and achieve their dreams.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-5 border border-blue-200">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">Peace of Mind</h3>
                  <p className="text-sm text-slate-600">
                    Know that your loved ones are protected no matter what happens.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-bold mb-3">
            Protect Your Family Today
          </h2>
          <p className="text-blue-100 mb-6">
            It takes less than 2 minutes to find out how much coverage you need.
          </p>
          <Link
            href="/life-insurance/calculator"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-blue-700 px-6 py-4 rounded-xl font-bold transition-colors"
          >
            <Shield className="w-5 h-5" />
            Calculate Coverage
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Related Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-center">
          <div className="w-full max-w-xs">
            <RelatedCalculators currentCalc="life-insurance" count={5} />
          </div>
        </div>
      </section>
    </>
  );
}
