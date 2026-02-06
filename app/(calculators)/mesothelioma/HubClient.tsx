"use client";

import Link from "next/link";
import { SITE, CALCULATORS, INJURY_CONSTANTS_2026, formatCurrency } from "@/lib/calculators/mesothelioma";
import { ArrowRight, Shield, Scale, AlertTriangle } from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
  const featuredCalculators = CALCULATORS.filter(c => c.featured);
  const otherCalculators = CALCULATORS.filter(c => !c.featured);

  return (
    <>

      {/* Urgent Banner */}
      <div className="bg-amber-600/20 border-b border-amber-500/30 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 text-amber-300 text-sm">
          <AlertTriangle className="w-4 h-4" />
          <span>Diagnosed with Mesothelioma? You may be entitled to compensation. Time limits apply.</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-slate-900 to-orange-900/20" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-6">
            <Shield className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-amber-300">Free {SITE.year} Calculator</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mesothelioma
            <span className="text-amber-400"> Settlement Calculator</span>
          </h1>

          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Estimate your total compensation from asbestos lawsuits, trust funds,
            VA benefits, and workers&apos; compensation. Average settlements: $1M - $2.4M.
          </p>

          <Link
            href="/mesothelioma/injury-settlement"
            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
          >
            Calculate Your Settlement
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-800/50 border-y border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-amber-400">
                {formatCurrency(INJURY_CONSTANTS_2026.avgSettlements.carAccident.avg)}
              </p>
              <p className="text-sm text-slate-400 mt-1">Avg Lawsuit Settlement</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-400">
                {formatCurrency(INJURY_CONSTANTS_2026.avgSettlements.slipAndFall.avg)}
              </p>
              <p className="text-sm text-slate-400 mt-1">Avg Trust Fund Claim</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-400">60+</p>
              <p className="text-sm text-slate-400 mt-1">Active Trust Funds</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-400">33%</p>
              <p className="text-sm text-slate-400 mt-1">Typical Attorney Fee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Free Mesothelioma Calculators
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {featuredCalculators.map((calc) => {
            const IconComponent = calc.icon;
            return (
              <Link
                key={calc.id}
                href={`/${calc.id}`}
                className="group bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-amber-500/50 transition-all hover:bg-slate-800/80"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-500/10 rounded-lg group-hover:bg-amber-500/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-amber-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-amber-400 transition-colors">
                      {calc.name}
                    </h3>
                    <p className="text-sm text-slate-400 mt-1">
                      {calc.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-amber-400 text-sm mt-3 group-hover:gap-2 transition-all">
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
                  className="group bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-amber-500/50 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <IconComponent className="w-5 h-5 text-slate-400 group-hover:text-amber-400" />
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

      {/* Compensation Sources */}
      <section className="bg-slate-800/30 border-y border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            4 Sources of Mesothelioma Compensation
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-amber-400">1</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Asbestos Lawsuits</h3>
              <p className="text-sm text-slate-400">
                File claims against asbestos manufacturers. Average settlement: $1M - $2.4M
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-blue-400">2</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Trust Fund Claims</h3>
              <p className="text-sm text-slate-400">
                60+ bankruptcy trusts with $30B+ available. Average claim: $50K - $400K
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-green-400">3</span>
              </div>
              <h3 className="font-semibold text-white mb-2">VA Benefits</h3>
              <p className="text-sm text-slate-400">
                Veterans exposed to asbestos during service. Up to $4,100/month disability
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-purple-400">4</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Workers&apos; Compensation</h3>
              <p className="text-sm text-slate-400">
                Occupational asbestos exposure claims. Average: $200K - $800K
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Get Your Free Mesothelioma Settlement Estimate
        </h2>
        <p className="text-slate-400 mb-8">
          Calculate compensation from all 4 sources in under 2 minutes. No email required.
        </p>
        <Link
          href="/mesothelioma/injury-settlement"
          className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
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
            <RelatedCalculators currentCalc="mesothelioma" count={5} />
          </div>
        </div>
      </section>

    </>
  );
}
