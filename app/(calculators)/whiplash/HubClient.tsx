"use client";

import Link from "next/link";
import { SITE, CALCULATORS, WHIPLASH_CONSTANTS_2026, WHIPLASH_GRADES, formatCurrency } from "@/lib/calculators/whiplash";
import { ArrowRight, Activity, AlertTriangle, TrendingUp, Stethoscope } from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
  const grades = Object.entries(WHIPLASH_GRADES);

  return (
    <>
      {/* Header */}
      <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="w-6 h-6 text-amber-500" />
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
            <Activity className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-amber-300">Free {SITE.year} Calculator</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Whiplash
            <span className="text-amber-400"> Settlement Calculator</span>
          </h1>

          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Calculate your neck injury settlement in seconds.
            Estimate compensation based on whiplash grade, treatment costs, and recovery time.
          </p>

          <Link
            href="/whiplash/settlement"
            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
          >
            Calculate Your Settlement
            <ArrowRight className="w-5 h-5" />
          </Link>

          {/* Info Banner */}
          <div className="mt-8 bg-amber-900/30 border border-amber-700/50 rounded-lg p-4 max-w-xl mx-auto">
            <div className="flex items-center gap-2 text-amber-300 text-sm">
              <AlertTriangle className="w-4 h-4" />
              <span>Over <strong>3 million</strong> whiplash injuries occur each year in the US</span>
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
                {formatCurrency(WHIPLASH_CONSTANTS_2026.statistics.avgSettlement)}
              </p>
              <p className="text-sm text-slate-400 mt-1">Avg Whiplash Settlement</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-red-400">3M+</p>
              <p className="text-sm text-slate-400 mt-1">Annual Injuries</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-orange-400">1.5-10x</p>
              <p className="text-sm text-slate-400 mt-1">Pain & Suffering Multiplier</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-400">85%</p>
              <p className="text-sm text-slate-400 mt-1">From Car Accidents</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Free Whiplash Calculators
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

      {/* Whiplash Grades */}
      <section className="bg-slate-800/30 border-y border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Whiplash Grades & Settlement Values
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {grades.map(([key, grade]) => (
              <div key={key} className="bg-slate-800 rounded-xl p-5 border border-slate-700">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-white">{grade.name}</h3>
                  <span className="text-xs bg-slate-700 px-2 py-1 rounded text-slate-300">{grade.recovery}</span>
                </div>
                <p className="text-sm text-slate-400 mb-3">{grade.symptoms}</p>
                <p className="text-lg font-bold text-amber-400">
                  {formatCurrency(grade.avgSettlement.min)} - {formatCurrency(grade.avgSettlement.max)}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/whiplash/injury-grades"
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300"
            >
              View Detailed Grade Information <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* What is Whiplash */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Understanding Whiplash Injuries
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4">
              <Activity className="w-5 h-5 text-amber-400" />
            </div>
            <h3 className="font-semibold text-white mb-2">What Causes Whiplash?</h3>
            <p className="text-sm text-slate-400">
              Rapid back-and-forth movement of the neck, typically from rear-end car accidents, but also sports, falls, or physical assault.
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
              <Stethoscope className="w-5 h-5 text-orange-400" />
            </div>
            <h3 className="font-semibold text-white mb-2">Common Symptoms</h3>
            <p className="text-sm text-slate-400">
              Neck pain, stiffness, headaches, dizziness, fatigue, numbness in arms, difficulty concentrating. Symptoms may be delayed.
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-5 h-5 text-red-400" />
            </div>
            <h3 className="font-semibold text-white mb-2">Why Settlements Vary</h3>
            <p className="text-sm text-slate-400">
              Severity (Grade 1-4), treatment duration, pre-existing conditions, documentation, and whether you hire an attorney.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Find Out What Your Whiplash Claim Is Worth
        </h2>
        <p className="text-slate-400 mb-8">
          Get a free estimate in under 2 minutes. No email required.
        </p>
        <Link
          href="/whiplash/settlement"
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
            <RelatedCalculators currentCalc="whiplash" count={5} />
          </div>
        </div>
      </section>

      <footer className="bg-slate-800 border-t border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-amber-500" />
              <span className="font-semibold text-white">{SITE.name}</span>
            </div>
            <p className="text-sm text-slate-400 text-center">
              For informational purposes only. Not medical or legal advice. Consult professionals for your specific case.
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
