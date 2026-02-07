"use client";

import Link from "next/link";
import { SITE, CALCULATORS, LEMON_CONSTANTS_2026, STATE_LEMON, formatCurrency } from "@/lib/calculators/lemon-law";
import { ArrowRight, Car, Scale, AlertTriangle, MapPin, CheckCircle } from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
  const topStates = Object.entries(STATE_LEMON).slice(0, 4);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-slate-900 to-orange-900/20" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-6">
            <Car className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-amber-300">Free {SITE.year} Calculator</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Lemon Law
            <span className="text-amber-400"> Calculator</span>
          </h1>

          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Got a defective vehicle? Calculate your lemon law claim value.
            Estimate your buyback refund, replacement, or cash settlement.
          </p>

          <Link
            href="/lemon-law/lemon-calculator"
            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
          >
            Calculate Your Claim
            <ArrowRight className="w-5 h-5" />
          </Link>

          {/* Info Banner */}
          <div className="mt-8 bg-green-900/30 border border-green-700/50 rounded-lg p-4 max-w-xl mx-auto">
            <div className="flex items-center gap-2 text-green-300 text-sm">
              <CheckCircle className="w-4 h-4" />
              <span>Attorney fees paid by manufacturer if you win ({LEMON_CONSTANTS_2026.statistics.successRate}% success rate)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-800/50 border-y border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-amber-400">
                {formatCurrency(LEMON_CONSTANTS_2026.statistics.avgClaimValue)}
              </p>
              <p className="text-sm text-slate-400 mt-1">Avg Claim Value</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-400">
                {LEMON_CONSTANTS_2026.statistics.successRate}%
              </p>
              <p className="text-sm text-slate-400 mt-1">Success Rate</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-orange-400">
                {LEMON_CONSTANTS_2026.repairAttempts.sameIssue}+
              </p>
              <p className="text-sm text-slate-400 mt-1">Repair Attempts</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-yellow-400">
                {LEMON_CONSTANTS_2026.repairAttempts.daysOutOfService}+
              </p>
              <p className="text-sm text-slate-400 mt-1">Days in Shop</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Free Lemon Law Tools
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {CALCULATORS.map((calc) => {
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
                      Start Now <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* State Laws Preview */}
      <section className="bg-slate-800/30 border-y border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Lemon Laws by State
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {topStates.map(([key, state]) => (
              <div key={key} className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <h3 className="font-semibold text-white">{state.name}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded ${state.strength === "Strong" ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"
                    }`}>
                    {state.strength}
                  </span>
                </div>
                <div className="text-sm text-slate-400 space-y-1">
                  <p>Coverage: {state.warrantyPeriod}</p>
                  <p>Repair Attempts: {state.repairAttempts}</p>
                  <p>Days Out: {state.daysOutOfService}+ days</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/lemon-law/state-laws"
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300"
            >
              View All State Laws <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* What is a Lemon */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          What Makes a Car a &quot;Lemon&quot;?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-xl font-bold text-amber-400">4+</span>
            </div>
            <h3 className="font-semibold text-white mb-2">Repeat Repairs</h3>
            <p className="text-sm text-slate-400">
              Same problem fixed 4 or more times without success. (2 attempts for safety issues)
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-xl font-bold text-orange-400">30+</span>
            </div>
            <h3 className="font-semibold text-white mb-2">Days in Shop</h3>
            <p className="text-sm text-slate-400">
              Vehicle has been out of service for 30+ cumulative days for repairs during warranty.
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
              <Scale className="w-5 h-5 text-yellow-400" />
            </div>
            <h3 className="font-semibold text-white mb-2">Substantial Defect</h3>
            <p className="text-sm text-slate-400">
              The problem must substantially impair the use, value, or safety of the vehicle.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Find Out If Your Car Qualifies
        </h2>
        <p className="text-slate-400 mb-8">
          Calculate your potential lemon law refund in under 2 minutes.
        </p>
        <Link
          href="/lemon-law/lemon-calculator"
          className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
        >
          Start Free Calculator
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      {/* Related Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-center">
          <div className="w-full max-w-xs">
            <RelatedCalculators currentCalc="lemon-law" count={5} />
          </div>
        </div>
      </section>
    </>
  );
}
