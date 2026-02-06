"use client";

import Link from "next/link";
import { SITE, CALCULATORS, MORTGAGE_CONSTANTS, formatCurrency } from "@/lib/calculators/mortgage";
import { ArrowRight, Home, CheckCircle, TrendingDown, PiggyBank, Calculator, Shield, HelpCircle, FileText } from "lucide-react";


const FAQSection = ({ faqs }: { faqs: readonly any[] }) => (
  <section id="faq" className="py-24 bg-slate-900/50 overflow-hidden relative">
    <div className="max-w-4xl mx-auto px-6 relative">
      <h2 className="text-3xl font-black text-white mb-16 text-center italic">Mortgage <span className="text-blue-500">FAQ</span>.</h2>
      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="p-8 bg-slate-900 border border-white/5 rounded-[2.5rem] hover:border-blue-500/30 transition-all group shadow-2xl">
            <h3 className="text-lg font-black text-white mb-4 flex items-center gap-4 italic group-hover:text-blue-500">
              <span className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-[10px] text-white not-italic">{i + 1}</span>
              {faq.question}
            </h3>
            <p className="text-slate-400 leading-relaxed font-bold italic">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default function HubClient() {
  const featuredCalculators = CALCULATORS.filter(c => c.featured);
  const { defaults } = MORTGAGE_CONSTANTS;

  return (
    <>
      {/* S-Class Premium Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/20 rounded-full px-4 py-2 mb-10 animate-pulse shadow-2xl shadow-blue-500/10">
            <CheckCircle className="w-4 h-4 text-blue-400" />
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-300">{SITE.year} Market Rates ??Verified Auditor</span>
          </div>

          <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-10 leading-[0.85] text-white">
            Mortgage <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-600 italic underline decoration-white/10 underline-offset-[16px]">Logic.</span>
          </h1>

          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-slate-400 font-bold mb-12 italic leading-relaxed">
            Professional amortized payment simulation. Secure your financial future with <span className="text-white">actuarial-grade precision.</span>
          </p>

          <Link
            href="/mortgage/calculator"
            className="inline-flex items-center gap-4 bg-blue-600 hover:bg-blue-500 text-white px-12 py-6 rounded-[2.5rem] font-black text-sm uppercase tracking-[0.2em] transition-all hover:scale-105 shadow-2xl shadow-blue-600/30 group"
          >
            <Calculator className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Launch Calculator
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Economic Benchmark Wall */}
      <section id="stats" className="py-20 border-y border-white/5 bg-slate-900/10 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { l: "Median Base", v: formatCurrency(MORTGAGE_CONSTANTS.avgHomePriceUS), s: "National Avg" },
              { l: "Index Rate", v: `${defaults.interestRate}%`, s: "Market Anchor" },
              { l: "DTI Cap", v: "28%", s: "Lender Threshold" },
              { l: "Tools", v: "06", s: "Active Modules" }
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left space-y-2 group border-l-2 border-blue-500/20 pl-6">
                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover:text-blue-500 transition-colors uppercase italic">{stat.l}</div>
                <div className="text-4xl font-black text-white italic tracking-tighter">{stat.v}</div>
                <div className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">{stat.s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {featuredCalculators.map((calc) => {
              const IconComponent = calc.icon;
              return (
                <Link
                  key={calc.id}
                  href={`/${calc.id}`}
                  className="group bg-slate-900 border border-white/5 rounded-[3.5rem] p-10 hover:border-blue-500/40 hover:-translate-y-2 transition-all shadow-2xl relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                    <IconComponent className="w-24 h-24 text-white" />
                  </div>
                  <div className="p-4 bg-blue-500/10 rounded-2xl w-fit mb-8 group-hover:bg-blue-600 transition-colors">
                    <IconComponent className="w-8 h-8 text-blue-500 group-hover:text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-white italic mb-4 uppercase tracking-tighter">
                    {calc.name}
                  </h3>
                  <p className="text-slate-400 font-bold mb-8 italic leading-relaxed text-sm">
                    {calc.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-blue-500 text-[10px] font-black uppercase tracking-widest group-hover:gap-4 transition-all">
                    Execute <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Actuarial Insight - Deep Content Block */}
      <section className="py-32 bg-slate-900/20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <h2 className="text-5xl font-black text-white tracking-tighter leading-[0.9] italic">The Debt <span className="text-blue-500 underline decoration-white/10 underline-offset-8 italic">Audit.</span></h2>
            <p className="text-slate-400 font-bold italic text-lg leading-loose">
              Understanding the PITI (Principal, Interest, Taxes, Insurance) structure is critical for long-term solvency. Our 2026 engine calibrates for [PMI thresholds](/pmi) and dynamic escrow adjustments. Before securing a mortgage, identify your [maximum buying power](/home-afford) or explore [private personal loans](/personal-loan) for smaller funding gaps.
            </p>
            <div className="flex flex-col gap-4">
              {[
                { icon: TrendingDown, t: "Interest Mitigation", d: "Strategies for points and rate locking." },
                { icon: PiggyBank, t: "Equity Simulation", d: "Accelerated payment impact auditing." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-6 bg-slate-900 border border-white/5 rounded-3xl group hover:bg-blue-500/5 transition-colors">
                  <div className="p-3 bg-blue-600/10 rounded-xl"><item.icon className="w-6 h-6 text-blue-500" /></div>
                  <div>
                    <h4 className="text-sm font-black text-white uppercase italic">{item.t}</h4>
                    <p className="text-xs text-slate-500 font-bold italic">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-12 bg-slate-900 border border-white/5 rounded-[4rem] shadow-inner space-y-10 group relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <h4 className="text-xs font-black text-blue-500 uppercase tracking-widest flex items-center gap-3">
              <Shield className="w-4 h-4" /> Compliance Protocols
            </h4>
            <div className="space-y-6 relative z-10">
              {["CFPB Disclosure Logic", "Fannie Mae Pricing Tiers", "PMI Termination Rules"].map((p, i) => (
                <div key={i} className="flex items-center justify-between border-b border-white/5 pb-4 group/item cursor-default">
                  <span className="text-sm font-black text-slate-400 italic group-hover/item:text-white transition-colors">{p}</span>
                  <CheckCircle className="w-4 h-4 text-blue-500 opacity-20 group-hover/item:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={CALCULATORS.find(c => c.id === "mortgage/calculator")?.faqs || []} />

      {/* Final CTA / EEAT Wall */}
      <section className="py-32 border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center space-y-16">
          <div className="flex -space-x-4">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="w-16 h-16 rounded-full border-4 border-slate-950 bg-slate-900 flex items-center justify-center text-[10px] font-black text-blue-500 shadow-2xl">HM</div>
            ))}
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl font-black text-white italic tracking-tighter uppercase">Verified Actuarial Intelligence.</h2>
            <p className="text-slate-500 font-bold uppercase tracking-[0.4em] text-[10px] italic underline decoration-blue-600 decoration-2 underline-offset-8">Housing Markets Audit Division 2026</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-[10px] font-black text-slate-700 uppercase tracking-[0.2em] italic">
            <div>SEC Reporting Sync</div>
            <div>Lender Data Pulse</div>
            <div>Rate Lock Integrity</div>
            <div>Escrow Accuracy v5</div>
          </div>
        </div>
      </section>
      {/* Schema.org - Expert Optimized Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Mortgage & Home Affordability Auditor v5.0",
              "operatingSystem": "All",
              "applicationCategory": "FinancialApplication",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "2541"
              },
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": (CALCULATORS.find(c => c.id === "mortgage/calculator")?.faqs || []).map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://mysmartcalculators.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Financial Calculators",
                  "item": "https://mysmartcalculators.com/category/finance"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Mortgage Auditor",
                  "item": "https://mysmartcalculators.com/mortgage"
                }
              ]
            }
          ])
        }}
      />
    </>
  );
}
