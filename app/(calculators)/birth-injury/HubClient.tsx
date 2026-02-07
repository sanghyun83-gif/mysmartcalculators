"use client";

import Link from "next/link";
import { SITE, CALCULATORS, BIRTH_INJURY_CONSTANTS_2026, BIRTH_INJURIES, formatCurrency, getSeverityColor } from "@/lib/calculators/birth-injury";
import { ArrowRight, Baby, AlertTriangle, Stethoscope, Heart, Clock } from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
  const injuries = Object.entries(BIRTH_INJURIES).slice(0, 4);

  return (
    <>
      {/* Header */}

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-slate-900 to-orange-900/20" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-6">
            <Baby className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-amber-300">Free {SITE.year} Calculator</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Birth Injury
            <span className="text-amber-400"> Settlement Calculator</span>
          </h1>

          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Calculate your birth injury malpractice claim.
            Estimate compensation for cerebral palsy, Erb&apos;s palsy, HIE, and delivery room negligence.
          </p>

          <Link
            href="/birth-injury/settlement"
            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
          >
            Calculate Your Settlement
            <ArrowRight className="w-5 h-5" />
          </Link>

          {/* Warning Banner */}
          <div className="mt-8 bg-amber-900/30 border border-amber-700/50 rounded-lg p-4 max-w-xl mx-auto">
            <div className="flex items-center gap-2 text-amber-300 text-sm">
              <AlertTriangle className="w-4 h-4" />
              <span><strong>28,000</strong> birth injuries occur each year &mdash; 50% are preventable</span>
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
                {formatCurrency(BIRTH_INJURY_CONSTANTS_2026.statistics.avgMalpracticePayout)}
              </p>
              <p className="text-sm text-slate-400 mt-1">Avg Malpractice Payout</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-red-400">28K</p>
              <p className="text-sm text-slate-400 mt-1">Annual Birth Injuries</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-orange-400">$2.3M</p>
              <p className="text-sm text-slate-400 mt-1">Avg Lifetime Care Cost</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-400">50%</p>
              <p className="text-sm text-slate-400 mt-1">Preventable Injuries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Free Birth Injury Calculators
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

      {/* Injury Types */}
      <section className="bg-slate-800/30 border-y border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Common Birth Injuries & Settlements
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {injuries.map(([key, injury]) => (
              <div key={key} className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                <h3 className="font-semibold text-white mb-1">{injury.name}</h3>
                <p className={`text-xs mb-2 ${getSeverityColor(injury.severity)}`}>
                  {injury.severity.charAt(0).toUpperCase() + injury.severity.slice(1)}
                </p>
                <p className="text-xs text-slate-500 mb-2 line-clamp-2">{injury.description}</p>
                <p className="text-lg font-bold text-amber-400">
                  {formatCurrency(injury.avgSettlement.min)} - {formatCurrency(injury.avgSettlement.max)}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/birth-injury/injury-types"
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300"
            >
              View All Birth Injury Types <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Common Causes */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Common Causes of Birth Injuries
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
              <Clock className="w-5 h-5 text-red-400" />
            </div>
            <h3 className="font-semibold text-white mb-2">Delayed C-Section</h3>
            <p className="text-sm text-slate-400">
              Failure to perform timely C-section when fetal distress is detected, leading to oxygen deprivation.
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4">
              <Stethoscope className="w-5 h-5 text-amber-400" />
            </div>
            <h3 className="font-semibold text-white mb-2">Improper Use of Tools</h3>
            <p className="text-sm text-slate-400">
              Misuse of forceps or vacuum extractors causing skull fractures, nerve damage, or brain bleeds.
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
              <Heart className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="font-semibold text-white mb-2">Fetal Monitoring Errors</h3>
            <p className="text-sm text-slate-400">
              Failure to properly monitor fetal heart rate and recognize signs of distress during labor.
            </p>
          </div>
        </div>
      </section>

      {/* Time Sensitive Notice */}
      <section className="max-w-4xl mx-auto px-4 pb-8">
        <div className="bg-red-900/30 border border-red-700/50 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-white mb-2">Time-Sensitive: Statute of Limitations</h3>
              <p className="text-sm text-red-200">
                Birth injury claims have strict time limits (typically 2-3 years from discovery).
                However, many states extend this for minors until age 18-21.
                Evidence can be lost and memories fade &mdash; consult an attorney immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Find Out What Your Birth Injury Claim Is Worth
        </h2>
        <p className="text-slate-400 mb-8">
          Get a free estimate for your child&apos;s lifetime care costs and compensation.
        </p>
        <Link
          href="/birth-injury/settlement"
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
            <RelatedCalculators currentCalc="birth-injury" count={5} />
          </div>
        </div>
      </section>

    </>
  );
}
