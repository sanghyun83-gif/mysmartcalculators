"use client";

import Link from "next/link";
import { SITE, CALCULATORS, NURSING_HOME_CONSTANTS_2026, ABUSE_TYPES, formatCurrency, getSeverityColor } from "@/lib/calculators/nursing-home";
import { ArrowRight, Heart, AlertTriangle, Shield, Users, Clock } from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
  const abuseTypes = Object.entries(ABUSE_TYPES).filter(([_, t]) => t.common).slice(0, 4);

  return (
    <>
      {/* Header */}
      <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-amber-500" />
            <span className="text-lg font-bold text-white">{SITE.name}</span>
          </div>
          <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">
            {SITE.year} Data
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-slate-900 to-orange-900/20" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-6">
            <Heart className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-amber-300">Free {SITE.year} Calculator</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nursing Home Abuse
            <span className="text-amber-400"> Settlement Calculator</span>
          </h1>

          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Calculate your nursing home abuse claim.
            Estimate compensation for bedsores, falls, neglect, medication errors, and elder abuse.
          </p>

          <Link
            href="/nursing-home/abuse-settlement"
            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
          >
            Calculate Your Settlement
            <ArrowRight className="w-5 h-5" />
          </Link>

          {/* Warning Banner */}
          <div className="mt-8 bg-red-900/30 border border-red-700/50 rounded-lg p-4 max-w-xl mx-auto">
            <div className="flex items-center gap-2 text-red-300 text-sm">
              <AlertTriangle className="w-4 h-4" />
              <span><strong>2 million</strong> nursing home residents experience abuse each year</span>
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
                {formatCurrency(NURSING_HOME_CONSTANTS_2026.statistics.avgSettlement)}
              </p>
              <p className="text-sm text-slate-400 mt-1">Avg Settlement</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-red-400">2M</p>
              <p className="text-sm text-slate-400 mt-1">Victims Per Year</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-orange-400">90%</p>
              <p className="text-sm text-slate-400 mt-1">Cases Unreported</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-400">95%</p>
              <p className="text-sm text-slate-400 mt-1">Facilities Have Deficiencies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Free Nursing Home Abuse Calculators
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

      {/* Common Abuse Types */}
      <section className="bg-slate-800/30 border-y border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Common Types of Nursing Home Abuse
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {abuseTypes.map(([key, abuse]) => (
              <div key={key} className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                <h3 className="font-semibold text-white mb-1">{abuse.name}</h3>
                <p className={`text-xs mb-2 ${getSeverityColor(abuse.severity)}`}>
                  {abuse.severity.charAt(0).toUpperCase() + abuse.severity.slice(1)} Severity
                </p>
                <p className="text-xs text-slate-500 mb-3 line-clamp-2">{abuse.description}</p>
                <p className="text-lg font-bold text-amber-400">
                  {formatCurrency(abuse.avgSettlement.min)} - {formatCurrency(abuse.avgSettlement.max)}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/nursing-home/abuse-types"
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300"
            >
              View All Abuse Types <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Signs of Nursing Home Abuse
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
              <AlertTriangle className="w-5 h-5 text-red-400" />
            </div>
            <h3 className="font-semibold text-white mb-2">Physical Signs</h3>
            <p className="text-sm text-slate-400">
              Unexplained bruises, bedsores, weight loss, poor hygiene, unattended medical needs, dehydration.
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-5 h-5 text-amber-400" />
            </div>
            <h3 className="font-semibold text-white mb-2">Behavioral Changes</h3>
            <p className="text-sm text-slate-400">
              Withdrawal, fear around certain staff, depression, agitation, sudden behavioral changes, reluctance to speak.
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="font-semibold text-white mb-2">Facility Red Flags</h3>
            <p className="text-sm text-slate-400">
              Understaffing, high turnover, poor CMS ratings, history of violations, lack of transparency with families.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Protect Your Loved One. Hold Facilities Accountable.
        </h2>
        <p className="text-slate-400 mb-8">
          Get a free estimate of your nursing home abuse settlement in under 2 minutes.
        </p>
        <Link
          href="/nursing-home/abuse-settlement"
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
            <RelatedCalculators currentCalc="nursing-home" count={5} />
          </div>
        </div>
      </section>

      <footer className="bg-slate-800 border-t border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-amber-500" />
              <span className="font-semibold text-white">{SITE.name}</span>
            </div>
            <p className="text-sm text-slate-400 text-center">
              For informational purposes only. Not legal advice. Consult a nursing home abuse attorney.
            </p>
            <p className="text-sm text-slate-500">
              © {SITE.year} {SITE.name}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
