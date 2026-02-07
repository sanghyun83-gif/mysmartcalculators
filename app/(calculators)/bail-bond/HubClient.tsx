"use client";

import Link from "next/link";
import { SITE, CALCULATORS, BAIL_CONSTANTS_2026, STATE_BAIL, formatCurrency } from "@/lib/calculators/bail-bond";
import { ArrowRight, Scale, MapPin, AlertTriangle, Shield, DollarSign } from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
  const topStates = Object.entries(STATE_BAIL).slice(0, 4);
  const offenses = Object.entries(BAIL_CONSTANTS_2026.bailByOffense).slice(0, 4);

  return (
    <>
      {/* Header */}

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-slate-900 to-orange-900/20" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-6">
            <Scale className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-amber-300">Free {SITE.year} Calculator</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Bail Bond
            <span className="text-amber-400"> Calculator</span>
          </h1>

          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Calculate your bail bond cost and premium.
            Find out how much you need to pay to get yourself or a loved one out of jail.
          </p>

          <Link
            href="/bail-bond/bail-calculator"
            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
          >
            Calculate Bail Cost
            <ArrowRight className="w-5 h-5" />
          </Link>

          {/* Info Banner */}
          <div className="mt-8 bg-blue-900/30 border border-blue-700/50 rounded-lg p-4 max-w-xl mx-auto">
            <div className="flex items-center gap-2 text-blue-300 text-sm">
              <Shield className="w-4 h-4" />
              <span>Bail bond premium is typically <strong>10%</strong> of the bail amount (non-refundable)</span>
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
                {formatCurrency(BAIL_CONSTANTS_2026.statistics.avgBailAmount)}
              </p>
              <p className="text-sm text-slate-400 mt-1">Avg Bail Amount</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-orange-400">10%</p>
              <p className="text-sm text-slate-400 mt-1">Standard Premium</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-red-400">470K</p>
              <p className="text-sm text-slate-400 mt-1">Awaiting Trial</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-yellow-400">74%</p>
              <p className="text-sm text-slate-400 mt-1">Can&apos;t Afford Bail</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Free Bail Bond Tools
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

      {/* Bail by Offense */}
      <section className="bg-slate-800/30 border-y border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Typical Bail Amounts by Offense
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {offenses.map(([key, offense]) => {
              const names: Record<string, string> = {
                misdemeanor: "Misdemeanor",
                dui: "DUI / DWI",
                felony: "Felony",
                violentFelony: "Violent Felony",
              };
              return (
                <div key={key} className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                  <h3 className="font-semibold text-white mb-2">{names[key] || key}</h3>
                  <p className="text-sm text-slate-400 mb-1">
                    Range: {formatCurrency(offense.min)} - {formatCurrency(offense.max)}
                  </p>
                  <p className="text-xl font-bold text-amber-400">
                    Avg: {formatCurrency(offense.avg)}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/bail-bond/bail-calculator"
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300"
            >
              Calculate Your Bail Premium <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How Bail Works */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          How Bail Bonds Work
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4">
              <DollarSign className="w-5 h-5 text-amber-400" />
            </div>
            <h3 className="font-semibold text-white mb-2">Cash Bail</h3>
            <p className="text-sm text-slate-400">
              Pay the full bail amount directly to the court. You get 100% back when the case ends (minus fees).
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
              <Scale className="w-5 h-5 text-orange-400" />
            </div>
            <h3 className="font-semibold text-white mb-2">Bail Bond (10%)</h3>
            <p className="text-sm text-slate-400">
              Pay a bail bondsman 10% of the bail amount. They post the full bail. The 10% is non-refundable.
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="font-semibold text-white mb-2">Own Recognizance</h3>
            <p className="text-sm text-slate-400">
              Released with a promise to appear. No money required. Usually for minor offenses and low-risk individuals.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Find Out Your Bail Bond Cost
        </h2>
        <p className="text-slate-400 mb-8">
          Calculate your bail premium and total out-of-pocket cost in seconds.
        </p>
        <Link
          href="/bail-bond/bail-calculator"
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
            <RelatedCalculators currentCalc="bail-bond" count={5} />
          </div>
        </div>
      </section>

    </>
  );
}
