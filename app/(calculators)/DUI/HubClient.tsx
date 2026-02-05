"use client";

import Link from "next/link";
import { Scale, AlertTriangle, ArrowRight, Shield, FileWarning } from "lucide-react";
import { SITE, CALCULATORS } from "@/lib/calculators/DUI";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
  return (
    <>
      {/* Hero Section */}

      {/* Stats Section */}
      <section className="bg-slate-800 py-8 border-y border-slate-700">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-red-400">1.5M</p>
              <p className="text-sm text-slate-400">DUI Arrests/Year</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-red-400">$15K+</p>
              <p className="text-sm text-slate-400">Average Cost</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-red-400">3 Years</p>
              <p className="text-sm text-slate-400">Insurance Impact</p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Cards */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-xl font-bold text-white mb-6 text-center">
          DUI Calculators & Tools
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {CALCULATORS.map((calc) => {
            const IconComponent = calc.icon;
            return (
              <Link
                key={calc.id}
                href={`/${calc.id}`}
                className={`bg-slate-800 hover:bg-slate-750 border ${calc.featured ? 'border-red-600' : 'border-slate-700'
                  } rounded-xl p-6 transition-all hover:border-red-500 group`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${calc.featured ? 'bg-red-900/50' : 'bg-slate-700'
                    }`}>
                    <IconComponent className={`w-6 h-6 ${calc.featured ? 'text-red-400' : 'text-slate-400'
                      }`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white group-hover:text-red-400 transition-colors">
                      {calc.name}
                      {calc.featured && (
                        <span className="ml-2 text-xs bg-red-600 text-white px-2 py-0.5 rounded">
                          Popular
                        </span>
                      )}
                    </h3>
                    <p className="text-sm text-slate-400 mt-1">
                      {calc.description}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-red-400 transition-colors" />
                </div>
              </Link>
            );
          })}
        </div>
      </main>

      {/* What's Included Section */}
      <section className="bg-slate-800 py-12 border-y border-slate-700">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-white mb-8 text-center">
            What&apos;s Included in a DUI Cost?
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: "Court Fines", range: "$500 - $5,000" },
              { label: "Lawyer Fees", range: "$2,500 - $10,000" },
              { label: "Insurance Increase", range: "$4,000 - $10,000" },
              { label: "DUI Programs", range: "$500 - $2,000" },
              { label: "License Fees", range: "$200 - $800" },
              { label: "Ignition Interlock", range: "$500 - $2,000" },
            ].map((item, i) => (
              <div key={i} className="bg-slate-900 rounded-lg p-4 border border-slate-700">
                <p className="text-slate-400 text-sm">{item.label}</p>
                <p className="text-white font-semibold mt-1">{item.range}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-amber-900/30 border border-amber-700/50 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5" />
            <div>
              <p className="text-amber-200 font-medium">Legal Disclaimer</p>
              <p className="text-amber-300/70 text-sm mt-1">
                This calculator provides estimates only. Actual DUI costs vary by state, case circumstances, and legal representation. This is not legal advice. Consult a qualified DUI attorney for your specific situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}

      {/* Related Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-center">
          <div className="w-full max-w-xs">
            <RelatedCalculators currentCalc="DUI" count={5} />
          </div>
        </div>
      </section>


      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: SITE.name,
            description: SITE.description,
            applicationCategory: "FinanceApplication",
            operatingSystem: "Any",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
          }),
        }}
      />
    </>
  );
}
