"use client";

import Link from "next/link";
import { SITE, CALCULATORS, SE_TAX_2026, formatCurrency } from "@/lib/calculators/self-employment";
import { ArrowRight, Briefcase, DollarSign, Calendar, CheckCircle } from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
  return (
    <>
      {/* Header */}
      <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-emerald-500" />
            <span className="text-lg font-bold text-white">{SITE.name}</span>
          </div>
          <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">
            {SITE.year}
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-slate-900 to-green-900/20" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
            <Briefcase className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-300">Free {SITE.year} Calculator</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Self Employment Tax
            <span className="text-emerald-400"> Calculator</span>
          </h1>

          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Calculate Social Security and Medicare taxes for freelancers,
            1099 contractors, and gig workers. Free SE tax estimator.
          </p>

          <Link
            href="/self-employment/se-tax-calculator"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
          >
            Calculate Your SE Tax
            <ArrowRight className="w-5 h-5" />
          </Link>

          {/* Rate Banner */}
          <div className="mt-8 bg-emerald-900/30 border border-emerald-700/50 rounded-lg p-4 max-w-xl mx-auto">
            <div className="flex items-center gap-2 text-emerald-300 text-sm">
              <DollarSign className="w-4 h-4" />
              <span>SE tax rate: <strong>{SE_TAX_2026.totalSERate}%</strong> (Social Security + Medicare)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-800/50 border-y border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-emerald-400">
                {SE_TAX_2026.totalSERate}%
              </p>
              <p className="text-sm text-slate-400 mt-1">Total SE Rate</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-400">
                {SE_TAX_2026.socialSecurityRate}%
              </p>
              <p className="text-sm text-slate-400 mt-1">Social Security</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-teal-400">
                {SE_TAX_2026.medicareRate}%
              </p>
              <p className="text-sm text-slate-400 mt-1">Medicare</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-cyan-400">
                {formatCurrency(SE_TAX_2026.socialSecurityWageBase)}
              </p>
              <p className="text-sm text-slate-400 mt-1">SS Wage Base</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Free Self-Employment Tax Tools
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {CALCULATORS.map((calc) => {
            const IconComponent = calc.icon;
            return (
              <Link
                key={calc.id}
                href={`/${calc.id}`}
                className="group bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-emerald-500/50 transition-all hover:bg-slate-800/80"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">
                      {calc.name}
                    </h3>
                    <p className="text-sm text-slate-400 mt-1">
                      {calc.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-emerald-400 text-sm mt-3 group-hover:gap-2 transition-all">
                      Start Now <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* SE Tax Breakdown */}
      <section className="bg-slate-800/30 border-y border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            How SE Tax Works
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
              <p className="text-2xl font-bold text-emerald-400 mb-2">{SE_TAX_2026.socialSecurityRate}%</p>
              <p className="text-white font-semibold">Social Security</p>
              <p className="text-sm text-slate-400 mt-2">
                Applies to first {formatCurrency(SE_TAX_2026.socialSecurityWageBase)} of net earnings.
                6.2% employer + 6.2% employee portion.
              </p>
            </div>
            <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
              <p className="text-2xl font-bold text-green-400 mb-2">{SE_TAX_2026.medicareRate}%</p>
              <p className="text-white font-semibold">Medicare</p>
              <p className="text-sm text-slate-400 mt-2">
                Applies to ALL net earnings with no cap.
                1.45% employer + 1.45% employee portion.
              </p>
            </div>
          </div>

          <div className="mt-4 bg-amber-900/20 border border-amber-700/50 rounded-lg p-4">
            <p className="text-amber-200 text-sm">
              <strong>Additional Medicare:</strong> +0.9% on net earnings over
              {formatCurrency(SE_TAX_2026.additionalMedicareThreshold.single)} (single).
            </p>
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          SE Tax Key Facts
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            "SE tax applies if net earnings exceed $400",
            "50% of SE tax is deductible on your 1040",
            "Pay quarterly if you'll owe $1,000+",
            "Schedule SE accompanies your tax return",
            "You're both employer AND employee",
            "92.35% of net profit is taxable",
          ].map((fact, i) => (
            <div key={i} className="flex items-start gap-3 bg-slate-800 rounded-lg p-4 border border-slate-700">
              <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5" />
              <span className="text-slate-300">{fact}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Quarterly Dates */}
      <section className="bg-slate-800/30 border-y border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-2">
            <Calendar className="w-6 h-6 text-emerald-500" />
            {SITE.year} Quarterly Tax Deadlines
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { q: "Q1", period: "Jan-Mar", due: "Apr 15" },
              { q: "Q2", period: "Apr-May", due: "Jun 16" },
              { q: "Q3", period: "Jun-Aug", due: "Sep 15" },
              { q: "Q4", period: "Sep-Dec", due: "Jan 15" },
            ].map((q) => (
              <div key={q.q} className="bg-slate-800 rounded-lg p-4 border border-slate-700 text-center">
                <p className="text-xl font-bold text-emerald-400">{q.q}</p>
                <p className="text-sm text-slate-400">{q.period}</p>
                <p className="text-white font-semibold mt-2">Due: {q.due}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Calculate Your Self-Employment Tax
        </h2>
        <p className="text-slate-400 mb-8">
          Free, instant calculation based on {SITE.year} rates.
        </p>
        <Link
          href="/self-employment/se-tax-calculator"
          className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
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
            <RelatedCalculators currentCalc="self-employment" count={5} />
          </div>
        </div>
      </section>

      <footer className="bg-slate-800 border-t border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-emerald-500" />
              <span className="font-semibold text-white">{SITE.name}</span>
            </div>
            <p className="text-sm text-slate-400 text-center">
              For informational purposes only. Consult a tax professional.
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
