"use client";

import Link from "next/link";
import { SITE, CALCULATORS, WRONGFUL_DEATH_CONSTANTS, formatCurrency } from "@/lib/calculators/wrongful-death";
import { ArrowRight, Shield, Heart, AlertTriangle, Scale, Users } from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
  const featuredCalculators = CALCULATORS.filter(c => c.featured);
  const otherCalculators = CALCULATORS.filter(c => !c.featured);

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

      {/* Sympathy Banner */}
      <div className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-center gap-2">
          <Heart className="w-4 h-4 text-amber-400" />
          <span className="text-sm text-slate-300">
            We are sorry for your loss. This calculator is designed to help families understand their legal options.
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-slate-900 to-slate-800" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-6">
            <Shield className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-amber-300">Free {SITE.year} Calculator</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Wrongful Death
            <span className="block text-amber-400">Settlement Calculator</span>
          </h1>

          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Calculate compensation for the loss of your loved one. Medical malpractice,
            car accidents, workplace deaths. Average settlements $500K-$1M+.
          </p>

          <Link
            href="/wrongful-death/settlement"
            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
          >
            Calculate Settlement Value
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
                {formatCurrency(WRONGFUL_DEATH_CONSTANTS.avgSettlements.medicalMalpractice.avg)}
              </p>
              <p className="text-sm text-slate-400 mt-1">Avg Medical Malpractice Death</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-red-400">
                {formatCurrency(WRONGFUL_DEATH_CONSTANTS.avgSettlements.truckAccident.avg)}
              </p>
              <p className="text-sm text-slate-400 mt-1">Avg Truck Accident Death</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-400">
                {formatCurrency(WRONGFUL_DEATH_CONSTANTS.avgSettlements.workplaceAccident.avg)}
              </p>
              <p className="text-sm text-slate-400 mt-1">Avg Workplace Death</p>
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
          Free Wrongful Death Calculators
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
      </section>

      {/* Types of Wrongful Death Cases */}
      <section className="bg-slate-800/30 border-y border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Types of Wrongful Death Cases
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                <AlertTriangle className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Medical Malpractice</h3>
              <p className="text-sm text-slate-400">
                Surgical errors, medication overdose, delayed diagnosis. Avg: $1.2M
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4">
                <Scale className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Vehicle Accidents</h3>
              <p className="text-sm text-slate-400">
                Car crashes, truck accidents, drunk driving deaths. Avg: $800K-$1.5M
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Workplace Deaths</h3>
              <p className="text-sm text-slate-400">
                Construction accidents, OSHA violations, industrial accidents. Avg: $1M
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can File */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Who Can File a Wrongful Death Claim?
        </h2>

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              <span className="text-slate-300">Surviving Spouse</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              <span className="text-slate-300">Children (minor or adult)</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              <span className="text-slate-300">Parents (if no spouse/children)</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              <span className="text-slate-300">Estate Representative</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              <span className="text-slate-300">Dependents</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              <span className="text-slate-300">Life Partners (some states)</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Understand Your Family&apos;s Legal Rights
        </h2>
        <p className="text-slate-400 mb-8">
          Get a free estimate of potential compensation. No email required.
        </p>
        <Link
          href="/wrongful-death/settlement"
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
            <RelatedCalculators currentCalc="wrongful-death" count={5} />
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
              For informational purposes only. Not legal advice. Consult a wrongful death attorney.
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
