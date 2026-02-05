"use client";

import Link from "next/link";
import { SITE, CALCULATORS, DOG_BITE_CONSTANTS_2026, BITE_SEVERITY, formatCurrency } from "@/lib/calculators/dog-bite";
import { ArrowRight, Dog, AlertTriangle, Scale, Shield } from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
  const severityLevels = Object.entries(BITE_SEVERITY).slice(2, 6); // Level 3-6

  return (
    <>
      {/* Header */}


      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-slate-900 to-orange-900/20" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-6">
            <Dog className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-amber-300">Free {SITE.year} Calculator</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Dog Bite
            <span className="text-amber-400"> Settlement Calculator</span>
          </h1>

          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Calculate your dog bite claim in seconds.
            Estimate compensation for medical bills, scarring, and pain & suffering from animal attacks.
          </p>

          <Link
            href="/dog-bite/settlement"
            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
          >
            Calculate Your Settlement
            <ArrowRight className="w-5 h-5" />
          </Link>

          {/* Warning Banner */}
          <div className="mt-8 bg-amber-900/30 border border-amber-700/50 rounded-lg p-4 max-w-xl mx-auto">
            <div className="flex items-center gap-2 text-amber-300 text-sm">
              <AlertTriangle className="w-4 h-4" />
              <span>Over <strong>4.5 million</strong> dog bites occur each year in the US</span>
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
                {formatCurrency(DOG_BITE_CONSTANTS_2026.statistics.avgClaimPayout)}
              </p>
              <p className="text-sm text-slate-400 mt-1">Avg Insurance Payout</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-red-400">4.5M</p>
              <p className="text-sm text-slate-400 mt-1">Annual Dog Bites</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-orange-400">50%</p>
              <p className="text-sm text-slate-400 mt-1">Victims Are Children</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-400">77%</p>
              <p className="text-sm text-slate-400 mt-1">Child Bites to Face</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Free Dog Bite Calculators
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
                      Calculate Now <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Liability Types */}
      <section className="bg-slate-800/30 border-y border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Dog Bite Liability Laws
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                <Scale className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Strict Liability</h3>
              <p className="text-sm text-slate-400">
                Owner is liable for all damages even if they had no knowledge the dog was dangerous. Used in ~36 states.
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4">
                <AlertTriangle className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">One-Bite Rule</h3>
              <p className="text-sm text-slate-400">
                Owner is only liable if they knew the dog was dangerous (usually if it bit before). Still used in some states.
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Negligence</h3>
              <p className="text-sm text-slate-400">
                Must prove owner failed to take reasonable care (leash law violation, known aggression ignored).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Severity Levels */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Settlement by Bite Severity
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {severityLevels.map(([key, level]) => (
            <div key={key} className="bg-slate-800 rounded-lg p-4 border border-slate-700">
              <h3 className="font-semibold text-white mb-1 text-sm">{level.name}</h3>
              <p className="text-xs text-slate-500 mb-2">{level.injuries}</p>
              <p className="text-lg font-bold text-amber-400">
                {formatCurrency(level.avgSettlement.min)} - {formatCurrency(level.avgSettlement.max)}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/dog-bite/bite-severity"
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300"
          >
            View All Severity Levels <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Find Out What Your Dog Bite Claim Is Worth
        </h2>
        <p className="text-slate-400 mb-8">
          Get a free estimate in under 2 minutes. No email required.
        </p>
        <Link
          href="/dog-bite/settlement"
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
            <RelatedCalculators currentCalc="dog-bite" count={5} />
          </div>
        </div>
      </section>


    </>
  );
}
