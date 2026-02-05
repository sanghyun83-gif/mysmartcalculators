"use client";

import Link from "next/link";
import { SITE, CALCULATORS, MOTORCYCLE_CONSTANTS_2026, formatCurrency } from "@/lib/calculators/motorcycle-accident";
import { ArrowRight, Bike, AlertTriangle, TrendingUp, Scale } from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
  const featuredCalculators = CALCULATORS.filter(c => c.featured);
  const otherCalculators = CALCULATORS.filter(c => !c.featured);

  return (
    <>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-slate-900 to-red-900/20" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 mb-6">
            <Bike className="w-4 h-4 text-orange-400" />
            <span className="text-sm text-orange-300">Free {SITE.year} Calculator</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Motorcycle Accident
            <span className="text-orange-400"> Settlement Calculator</span>
          </h1>

          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Calculate your motorcycle crash settlement in seconds.
            Estimate compensation for injuries, bike damage, lost wages, and pain & suffering.
          </p>

          <Link
            href="/motorcycle-accident/motorcycle-settlement"
            className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
          >
            Calculate Your Settlement
            <ArrowRight className="w-5 h-5" />
          </Link>

          {/* Warning Banner */}
          <div className="mt-8 bg-amber-900/30 border border-amber-700/50 rounded-lg p-4 max-w-xl mx-auto">
            <div className="flex items-center gap-2 text-amber-300 text-sm">
              <AlertTriangle className="w-4 h-4" />
              <span>Motorcyclists are <strong>29x more likely</strong> to die in accidents than car occupants</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-800/50 border-y border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-orange-400">
                {formatCurrency(MOTORCYCLE_CONSTANTS_2026.statistics.avgSettlement)}
              </p>
              <p className="text-sm text-slate-400 mt-1">Avg Motorcycle Settlement</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-red-400">29x</p>
              <p className="text-sm text-slate-400 mt-1">Higher Fatality Rate</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-amber-400">5-15x</p>
              <p className="text-sm text-slate-400 mt-1">Pain & Suffering Multiplier</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-400">
                {formatCurrency(MOTORCYCLE_CONSTANTS_2026.statistics.avgMedicalCost)}
              </p>
              <p className="text-sm text-slate-400 mt-1">Avg Medical Costs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Free Motorcycle Accident Calculators
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredCalculators.map((calc) => {
            const IconComponent = calc.icon;
            return (
              <Link
                key={calc.id}
                href={`/${calc.id}`}
                className="group bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-orange-500/50 transition-all hover:bg-slate-800/80"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-500/10 rounded-lg group-hover:bg-orange-500/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-orange-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors">
                      {calc.name}
                    </h3>
                    <p className="text-sm text-slate-400 mt-1">
                      {calc.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-orange-400 text-sm mt-3 group-hover:gap-2 transition-all">
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
                  className="group bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-orange-500/50 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <IconComponent className="w-5 h-5 text-slate-400 group-hover:text-orange-400" />
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

      {/* Why Motorcycle Accidents Are Different */}
      <section className="bg-slate-800/30 border-y border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Why Motorcycle Accident Settlements Are Higher
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                <AlertTriangle className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">More Severe Injuries</h3>
              <p className="text-sm text-slate-400">
                No protective shell means direct impact. Road rash, head injuries, and fractures are common.
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-5 h-5 text-orange-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Higher Multipliers</h3>
              <p className="text-sm text-slate-400">
                Pain & suffering multipliers of 5-15x medical bills vs. 2-5x for car accidents.
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4">
                <Scale className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Longer Recovery</h3>
              <p className="text-sm text-slate-400">
                Extended medical treatment, physical therapy, and permanent disabilities increase value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Injuries */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Common Motorcycle Injury Settlements
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { injury: "Road Rash", min: 5000, max: 25000, color: "text-green-400" },
            { injury: "Broken Bones", min: 25000, max: 150000, color: "text-yellow-400" },
            { injury: "Head/TBI", min: 50000, max: 500000, color: "text-orange-400" },
            { injury: "Spinal Injury", min: 100000, max: 2000000, color: "text-red-400" },
          ].map((item) => (
            <div key={item.injury} className="bg-slate-800 rounded-lg p-4 border border-slate-700">
              <h3 className="font-semibold text-white mb-2">{item.injury}</h3>
              <p className={`text-lg font-bold ${item.color}`}>
                {formatCurrency(item.min)} - {formatCurrency(item.max)}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/motorcycle-accident/injury-types"
            className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300"
          >
            View All Injury Types <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Find Out What Your Motorcycle Accident Case Is Worth
        </h2>
        <p className="text-slate-400 mb-8">
          Get a free estimate in under 2 minutes. No email required.
        </p>
        <Link
          href="/motorcycle-accident/motorcycle-settlement"
          className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
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
            <RelatedCalculators currentCalc="motorcycle-accident" count={5} />
          </div>
        </div>
      </section>

    </>
  );
}
