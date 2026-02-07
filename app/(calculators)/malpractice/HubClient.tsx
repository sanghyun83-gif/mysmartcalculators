"use client";

import Link from "next/link";
import { SITE, CALCULATORS, MALPRACTICE_CONSTANTS, formatCurrency } from "@/lib/calculators/malpractice";
import { ArrowRight, Shield, Stethoscope, AlertTriangle, Scale, Activity } from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
  const featuredCalculators = CALCULATORS.filter(c => c.featured);
  const otherCalculators = CALCULATORS.filter(c => !c.featured);

  return (
    <>

      {/* Alert Banner */}
      <div className="bg-amber-500/10 border-b border-amber-500/30">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-center gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-400" />
          <span className="text-sm text-amber-200">
            Medical malpractice has strict time limits. Most states require filing within 2-3 years.
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-slate-900 to-red-900/20" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-6">
            <Shield className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-amber-300">Free {SITE.year} Calculator</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Medical Malpractice
            <span className="block text-amber-400">Settlement Calculator</span>
          </h1>

          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Calculate your malpractice settlement value. Surgical errors, misdiagnosis,
            birth injuries, and medication errors. Average settlements $250K-$500K.
          </p>

          <Link
            href="/malpractice/settlement"
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
                {formatCurrency(MALPRACTICE_CONSTANTS.avgSettlements.surgicalError.avg)}
              </p>
              <p className="text-sm text-slate-400 mt-1">Avg Surgical Error</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-red-400">
                {formatCurrency(MALPRACTICE_CONSTANTS.avgSettlements.birthInjury.avg)}
              </p>
              <p className="text-sm text-slate-400 mt-1">Avg Birth Injury</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-400">33%</p>
              <p className="text-sm text-slate-400 mt-1">Typical Attorney Fee</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-400">2-3 Years</p>
              <p className="text-sm text-slate-400 mt-1">Statute of Limitations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Free Malpractice Calculators
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

      {/* Malpractice Types Preview */}
      <section className="bg-slate-800/30 border-y border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Types of Medical Malpractice
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                <Activity className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Surgical Errors</h3>
              <p className="text-sm text-slate-400">
                Wrong-site surgery, retained instruments, nerve damage. Avg: $500K
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4">
                <AlertTriangle className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Misdiagnosis</h3>
              <p className="text-sm text-slate-400">
                Cancer, heart attack, infection missed or delayed. Avg: $350K
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                <Stethoscope className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Birth Injuries</h3>
              <p className="text-sm text-slate-400">
                Cerebral palsy, Erb's palsy, brain damage. Avg: $1.5M
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Were You a Victim of Medical Negligence?
        </h2>
        <p className="text-slate-400 mb-8">
          Get a free estimate in under 2 minutes. Find out what your case is worth.
        </p>
        <Link
          href="/malpractice/settlement"
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
            <RelatedCalculators currentCalc="malpractice" count={5} />
          </div>
        </div>
      </section>

    </>
  );
}
