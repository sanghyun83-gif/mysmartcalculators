"use client";

import Link from "next/link";
import { SITE, CALCULATORS, GARNISHMENT_LIMITS_2026, GARNISHMENT_TYPES, formatCurrency } from "@/lib/calculators/wage-garnishment";
import { ArrowRight, DollarSign, Scale, AlertTriangle, CreditCard, Users, Landmark, GraduationCap } from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
  const garnishmentTypes = Object.entries(GARNISHMENT_TYPES);

  return (
    <>
      {/* Header */}
      <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <DollarSign className="w-6 h-6 text-emerald-500" />
            <span className="text-lg font-bold text-white">{SITE.name}</span>
          </div>
          <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">
            {SITE.year} CCPA
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-slate-900 to-green-900/20" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
            <DollarSign className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-300">Free {SITE.year} Calculator</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Wage Garnishment
            <span className="text-emerald-400"> Calculator</span>
          </h1>

          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Find out how much can legally be taken from your paycheck.
            Calculate federal CCPA limits for consumer debt, child support, and taxes.
          </p>

          <Link
            href="/wage-garnishment/garnishment-calculator"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
          >
            Calculate Your Limit
            <ArrowRight className="w-5 h-5" />
          </Link>

          {/* Info Banner */}
          <div className="mt-8 bg-blue-900/30 border border-blue-700/50 rounded-lg p-4 max-w-xl mx-auto">
            <div className="flex items-center gap-2 text-blue-300 text-sm">
              <Scale className="w-4 h-4" />
              <span>Federal law limits garnishment to <strong>25%</strong> of disposable income for most debts</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-800/50 border-y border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-emerald-400">25%</p>
              <p className="text-sm text-slate-400 mt-1">Max for Consumer Debt</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-400">50-65%</p>
              <p className="text-sm text-slate-400 mt-1">Max for Child Support</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-teal-400">15%</p>
              <p className="text-sm text-slate-400 mt-1">Max for Student Loans</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-cyan-400">10M</p>
              <p className="text-sm text-slate-400 mt-1">Workers Garnished</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Free Garnishment Tools
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

      {/* Garnishment Types */}
      <section className="bg-slate-800/30 border-y border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Types of Wage Garnishment
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-800 rounded-lg p-5 border border-slate-700">
              <div className="flex items-center gap-3 mb-3">
                <CreditCard className="w-5 h-5 text-emerald-400" />
                <h3 className="font-semibold text-white">Consumer Debt</h3>
              </div>
              <p className="text-sm text-slate-400 mb-2">Credit cards, medical bills, loans</p>
              <p className="text-lg font-bold text-emerald-400">Max: 25% of disposable</p>
            </div>

            <div className="bg-slate-800 rounded-lg p-5 border border-slate-700">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-5 h-5 text-pink-400" />
                <h3 className="font-semibold text-white">Child Support</h3>
              </div>
              <p className="text-sm text-slate-400 mb-2">Court-ordered family support</p>
              <p className="text-lg font-bold text-pink-400">Max: 50-65%</p>
            </div>

            <div className="bg-slate-800 rounded-lg p-5 border border-slate-700">
              <div className="flex items-center gap-3 mb-3">
                <Landmark className="w-5 h-5 text-red-400" />
                <h3 className="font-semibold text-white">IRS Tax Levy</h3>
              </div>
              <p className="text-sm text-slate-400 mb-2">Unpaid federal taxes</p>
              <p className="text-lg font-bold text-red-400">Based on exempt amount</p>
            </div>

            <div className="bg-slate-800 rounded-lg p-5 border border-slate-700">
              <div className="flex items-center gap-3 mb-3">
                <GraduationCap className="w-5 h-5 text-blue-400" />
                <h3 className="font-semibold text-white">Student Loans</h3>
              </div>
              <p className="text-sm text-slate-400 mb-2">Defaulted federal loans</p>
              <p className="text-lg font-bold text-blue-400">Max: 15% of disposable</p>
            </div>
          </div>
        </div>
      </section>

      {/* CCPA Protection */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Federal CCPA Protection
        </h2>

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
          <p className="text-slate-300 mb-4">
            The Consumer Credit Protection Act (CCPA) Title III limits how much can be garnished
            from your paycheck. You&apos;re protected from having your entire check taken.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-slate-700/50 rounded-lg p-4">
              <p className="text-sm text-slate-400">Protected Weekly Amount</p>
              <p className="text-2xl font-bold text-emerald-400">
                ${GARNISHMENT_LIMITS_2026.consumerDebt.weeklyProtected}
              </p>
              <p className="text-xs text-slate-500">30× federal minimum wage</p>
            </div>
            <div className="bg-slate-700/50 rounded-lg p-4">
              <p className="text-sm text-slate-400">Maximum Garnishment</p>
              <p className="text-2xl font-bold text-emerald-400">25%</p>
              <p className="text-xs text-slate-500">of disposable earnings</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Find Out Your Garnishment Limit
        </h2>
        <p className="text-slate-400 mb-8">
          Calculate how much of your paycheck is protected under federal law.
        </p>
        <Link
          href="/wage-garnishment/garnishment-calculator"
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
            <RelatedCalculators currentCalc="wage-garnishment" count={5} />
          </div>
        </div>
      </section>

      <footer className="bg-slate-800 border-t border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-emerald-500" />
              <span className="font-semibold text-white">{SITE.name}</span>
            </div>
            <p className="text-sm text-slate-400 text-center">
              For informational purposes only. Consult a debt attorney for your situation.
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
