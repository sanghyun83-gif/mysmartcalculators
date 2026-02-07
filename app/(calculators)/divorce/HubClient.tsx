"use client";

import Link from "next/link";
import { SITE, CALCULATORS, COMMUNITY_PROPERTY_STATES, formatCurrency } from "@/lib/calculators/divorce";
import { ArrowRight, Scale, Gavel, Users, Calculator, FileText } from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
  const featuredCalculators = CALCULATORS.filter(c => c.featured);
  const otherCalculators = CALCULATORS.filter(c => !c.featured);

  return (
    <>
      {/* Header */}


      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-slate-900 to-blue-900/20" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full px-4 py-2 mb-6">
            <Gavel className="w-4 h-4 text-indigo-400" />
            <span className="text-sm text-indigo-300">Free {SITE.year} Calculator</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Divorce Settlement
            <span className="text-indigo-400"> Calculator</span>
          </h1>

          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Calculate alimony (spousal support) and property division based on {SITE.year} state laws.
            Community property vs equitable distribution explained.
          </p>

          <Link
            href="/divorce/alimony-calculator"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
          >
            Calculate Alimony
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-800/50 border-y border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-indigo-400">50</p>
              <p className="text-sm text-slate-400 mt-1">US States Covered</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-400">9</p>
              <p className="text-sm text-slate-400 mt-1">Community Property States</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-amber-400">30-40%</p>
              <p className="text-sm text-slate-400 mt-1">Typical Alimony Range</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-400">{SITE.year}</p>
              <p className="text-sm text-slate-400 mt-1">Updated Laws</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Free Divorce Calculators
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {featuredCalculators.map((calc) => {
            const IconComponent = calc.icon;
            return (
              <Link
                key={calc.id}
                href={`/${calc.id}`}
                className="group bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-indigo-500/50 transition-all hover:bg-slate-800/80"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-500/10 rounded-lg group-hover:bg-indigo-500/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-indigo-400 transition-colors">
                      {calc.name}
                    </h3>
                    <p className="text-sm text-slate-400 mt-1">
                      {calc.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-indigo-400 text-sm mt-3 group-hover:gap-2 transition-all">
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
                  className="group bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-indigo-500/50 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <IconComponent className="w-5 h-5 text-slate-400 group-hover:text-indigo-400" />
                    <span className="text-sm text-slate-300 group-hover:text-white">
                      {calc.shortName}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>

      {/* Property Division Types */}
      <section className="bg-slate-800/30 border-y border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            How Property Is Divided
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800 rounded-xl p-6 border border-indigo-500/30">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm font-medium">
                  9 States
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Community Property</h3>
              <p className="text-slate-400 text-sm mb-4">
                All marital property is split 50/50 regardless of who earned it or whose name is on it.
              </p>
              <p className="text-xs text-slate-500">
                States: CA, TX, AZ, NV, WA, ID, LA, NM, WI
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-blue-500/30">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                  41 States + DC
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Equitable Distribution</h3>
              <p className="text-slate-400 text-sm mb-4">
                Property is divided &quot;fairly&quot; but not necessarily equally. Courts consider many factors.
              </p>
              <p className="text-xs text-slate-500">
                Typical range: 40-60% depending on circumstances
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Get Your Free Estimate
        </h2>
        <p className="text-slate-400 mb-8">
          Calculate alimony and property division in under 2 minutes. No email required.
        </p>
        <Link
          href="/divorce/alimony-calculator"
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
        >
          Start Calculator
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      {/* Footer */}

      {/* Related Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-center">
          <div className="w-full max-w-xs">
            <RelatedCalculators currentCalc="divorce" count={5} />
          </div>
        </div>
      </section>


    </>
  );
}
