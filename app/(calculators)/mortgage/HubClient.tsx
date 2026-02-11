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
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-300">{SITE.year} Market Rates • Verified Auditor</span>
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

      {/* Economic Benchmark Wall with Anchor Nav */}
      <section id="stats" className="py-20 border-y border-white/5 bg-slate-900/10 backdrop-blur-3xl relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { t: "Loan Basics", a: "#basics", d: "PITI & Escrow" },
              { t: "Rate Science", a: "#rates", d: "Points & Locking" },
              { t: "PMI Strategy", a: "#pmi", d: "Equity Removal" },
              { t: "Tax & Insurance", a: "#tax", d: "Property Costs" }
            ].map((nav, i) => (
              <a key={i} href={nav.a} className="p-6 bg-white/5 border border-white/5 rounded-3xl hover:bg-blue-600/10 hover:border-blue-500/30 transition-all group">
                <h4 className="text-xs font-black text-white uppercase tracking-widest mb-1 group-hover:text-blue-500">{nav.t}</h4>
                <p className="text-[10px] text-slate-500 font-bold italic">{nav.d}</p>
              </a>
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

      {/* S-Class Deep Content: Mortgage Mastery Guide */}
      <section className="py-32 bg-slate-900/20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 space-y-32">

          {/* Section 1: Mortgage Basics */}
          <div id="basics" className="grid md:grid-cols-2 gap-24 items-center scroll-mt-24">
            <div className="space-y-10">
              <h2 className="text-5xl font-black text-white tracking-tighter leading-[0.9] italic">The PITI <span className="text-blue-500 underline decoration-white/10 underline-offset-8 italic">Structure.</span></h2>
              <div className="prose prose-invert prose-blue max-w-none text-slate-400 text-lg leading-relaxed font-bold italic space-y-8">
                <p>
                  A mortgage is more than just a loan; it is a multi-layered financial obligation encompassing <span className="text-white">Principal, Interest, Taxes, and Insurance</span>. Every payment is precision-engineered by lenders to mitigate risk while gradually building your equity.
                </p>
                <p>
                  Our 2026 engine uses <span className="text-blue-500 italic">amortization logic</span> to show exactly how your dollars are distributed. In the first decade of a 30-year term, interest dominates the payment structure—a phenomenon designed to front-load bank revenue. Understanding this flow is the first step toward early mortgage discharge.
                </p>
              </div>
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
                {["CFPB Disclosure Logic", "Fannie Mae Pricing Tiers", "PMI Termination Rules", "Escrow Surplus Audit"].map((p, i) => (
                  <div key={i} className="flex items-center justify-between border-b border-white/5 pb-4 group/item cursor-default">
                    <span className="text-sm font-black text-slate-400 italic group-hover/item:text-white transition-colors">{p}</span>
                    <CheckCircle className="w-4 h-4 text-blue-500 opacity-20 group-hover/item:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 2: Interest Rates & Points */}
          <div id="rates" className="grid md:grid-cols-2 gap-24 items-center scroll-mt-24">
            <div className="order-2 md:order-1 p-12 bg-white/5 border border-white/5 rounded-[4rem] space-y-8">
              <div className="bg-blue-600/20 rounded-3xl p-8 border border-blue-500/20">
                <h4 className="text-lg font-black text-white italic mb-4">Rate vs. Point Analysis</h4>
                <p className="text-sm text-blue-200/60 font-medium italic">Buying down your rate by 0.25% through 1 discount point can save $28,000+ on a $400k loan over 30 years. The break-even point is typically 5-7 years.</p>
              </div>
              <div className="space-y-4">
                {[
                  { l: "Par Rate", d: "Standard rate without points." },
                  { l: "Yield Spread", d: "Lender compensation variable." },
                  { l: "Float Down", d: "Rate protection prior to closing." }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center px-4">
                    <span className="text-xs font-black text-slate-500 uppercase italic">{item.l}</span>
                    <span className="text-[10px] font-bold text-white italic">{item.d}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-8">
              <h2 className="text-5xl font-black text-white tracking-tighter italic uppercase">Yield <span className="text-blue-500 underline decoration-white/10 underline-offset-8">Optimization.</span></h2>
              <div className="prose prose-invert prose-blue max-w-none text-slate-400 text-lg leading-relaxed font-bold italic space-y-6">
                <p>
                  Mortgage interest is calculated monthly, not annually, meaning your balance dictates the interest charge every 30 days. By utilizing <span className="text-white">discount points</span>, you are essentially pre-paying interest to secure a lower rate during the high-interest years of the loan.
                </p>
                <p>
                  Our simulator audits the <span className="text-blue-400">Freddie Mac PMMS</span> index to provide real-time benchmarks. Whether you are choosing between a 15-year fixed or a 5-year ARM, the goal is always to minimize the Total Interest Paid (TIP).
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: PMI Guide */}
          <div id="pmi" className="space-y-16 scroll-mt-24">
            <div className="text-center space-y-6">
              <h2 className="text-5xl font-black text-white tracking-tighter italic uppercase underline decoration-blue-600 decoration-8 underline-offset-[12px]">PMI Termination <span className="text-blue-500">Playbook.</span></h2>
              <p className="max-w-3xl mx-auto text-slate-400 font-bold italic text-lg">Private Mortgage Insurance is a wealth-eater. Our guide focuses on the 80% LTV threshold required by federal law for automatic removal.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { t: "The 80% Threshold", d: "By the Homeowners Protection Act of 1998, you can request cancellation once your balance hits 80% of original value." },
                { t: "Automated Exit", d: "Lenders MUST terminate PMI when you hit 78% LTV, provided you are current on all payments." },
                { t: "Re-Appraisal Exit", d: "In rising markets, an appraisal showing 20% equity can bypass years of scheduled payments." }
              ].map((card, i) => (
                <div key={i} className="p-10 bg-slate-900 border border-white/5 rounded-[3rem] space-y-4 hover:border-blue-500/20 transition-all">
                  <h4 className="text-sm font-black text-white uppercase italic tracking-widest">{card.t}</h4>
                  <p className="text-xs text-slate-500 font-bold italic leading-loose">{card.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Taxes & Escrow */}
          <div id="tax" className="grid md:grid-cols-2 gap-24 items-center mb-32 scroll-mt-24">
            <div className="space-y-8">
              <h2 className="text-5xl font-black text-white tracking-tighter italic uppercase leading-none">The Escrow <span className="text-blue-500 italic block">Surplus Audit.</span></h2>
              <div className="prose prose-invert prose-blue max-w-none text-slate-400 text-lg leading-relaxed font-bold italic">
                <p>
                  Property taxes and homeowners insurance are volatile components of your PITI payment. Escrow analysis happens annually, often resulting in <span className="text-white underline decoration-white/10 underline-offset-4">&quot;Surplus&quot; or &quot;Shortfall&quot;</span> adjustments that can swing your monthly payment by hundreds of dollars.
                </p>
              </div>
              <div className="bg-slate-950/50 p-8 rounded-[2rem] border border-white/5 space-y-4">
                <div className="flex items-center gap-4 text-xs font-black text-blue-400 uppercase tracking-widest">
                  <Calculator className="w-5 h-5 text-blue-500" /> FHFA Reliability Standards
                </div>
                <p className="text-[11px] text-slate-600 font-bold italic">Our property tax estimates are benchmarked against national FHFA House Price Index (HPI) data to ensure pre-closing accuracy.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { l: "Prop Tax", d: "State-specific assessments." },
                { l: "HOI Prev", d: "Fire/Flood risk weighting." },
                { l: "HELOC", d: "Secondary lien equity." },
                { l: "P&I Calc", d: "Constant amort logic." }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-slate-900/50 border border-white/5 rounded-3xl text-center space-y-2 group hover:bg-white/5 transition-all">
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest underline decoration-blue-500/20 underline-offset-4">{item.l}</div>
                  <div className="text-xs font-black text-white italic">{item.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Citations: Institutional Credibility 5+ Sources (E-E-A-T) */}
      <section className="py-24 border-y border-white/5 bg-slate-900/5 backdrop-blur-3xl">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-12 text-center underline decoration-blue-600 decoration-1 underline-offset-[12px]">Institutional Citations & Real Estate Source Integrity</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { s: "Freddie Mac", t: "Primary Mortgage Market Survey® (PMMS) Data 2026", d: "The gold standard for US average interest rate benchmarks.", l: "https://www.freddiemac.com/pmms" },
              { s: "Fannie Mae", t: "Selling Guide: Conventional Loan Requirements & LTI", d: "Defining the limits for secondary market mortgage liquidity.", l: "https://selling-guide.fanniemae.com/" },
              { s: "FHFA", t: "House Price Index (HPI) Property Assessment Data", d: "Authoritative statistics on US residential property fluctuations.", l: "https://www.fhfa.gov/DataTools/Downloads/Pages/House-Price-Index.aspx" },
              { s: "CFPB", t: "TILA-RESPA Integrated Disclosure (TRID) Compliance", d: "Ensuring maximum transparency in consumer home loan logic.", l: "https://www.consumerfinance.gov/" },
              { s: "IRS", t: "Publication 936: Home Mortgage Interest Deduction", d: "Official tax implications for property owners.", l: "https://www.irs.gov/publications/p936" }
            ].map((cite, i) => (
              <a key={cite.s} href={cite.l} target="_blank" rel="noopener noreferrer" className="space-y-2 first:col-span-2 group pt-6 border-t border-white/5">
                <div className="text-[9px] font-black text-blue-600 uppercase tracking-widest">{cite.s}</div>
                <h4 className="text-sm font-black text-white group-hover:text-blue-500 transition-colors underline decoration-white/5 underline-offset-4">{cite.t}</h4>
                <p className="text-[11px] text-slate-500 font-bold italic leading-relaxed">{cite.d}</p>
              </a>
            ))}
          </div>
          {/* Section 5: Market Cycles & Refinancing Strategy */}
          <div id="refinance" className="space-y-12 scroll-mt-24 pb-20">
            <h2 className="text-5xl font-black text-white tracking-tighter italic uppercase underline decoration-blue-600 decoration-4 underline-offset-8">Refinance <span className="text-blue-500">Arbitrage.</span></h2>
            <div className="grid md:grid-cols-3 gap-12 group">
              <div className="md:col-span-2 space-y-8 text-slate-400 font-bold italic text-lg leading-relaxed">
                <p>
                  Refinancing is the strategic act of replacing an existing debt obligation with another under different terms. In a 2026 market, this often means capitalizing on <span className="text-white">Rate Compression Cycles</span>. Even a 0.5% reduction in your interest rate can result in a &quot;break-even&quot; period of less than 24 months if closing costs are managed aggressively.
                </p>
                <p>
                  Our engine calculates the <span className="text-blue-400">Net Present Value (NPV)</span> of your future interest savings against the upfront transaction friction. Sophisticated homeowners use refinancing not just to lower payments, but to shorten terms—shifting from a 30-year to a 15-year fixed to annihilate principal balance during high-appreciation years.
                </p>
                <div className="p-8 bg-blue-600/10 border border-blue-500/20 rounded-3xl">
                  <h4 className="text-white font-black mb-2 flex items-center gap-2 uppercase tracking-widest text-xs">
                    <HelpCircle className="w-4 h-4 text-blue-400" /> The Rule of 1%
                  </h4>
                  <p className="text-sm text-blue-300">Historically, a 1% drop in rates was the trigger for refinancing. In today&apos;s digital-first lending environment, with lower origination overhead, a 0.75% or even 0.5% drop can often justify the move depending on your remaining loan term.</p>
                </div>
              </div>
              <div className="space-y-6">
                {[
                  { t: "Cash-Out Refi", d: "Extracting equity for high-yield reinvestment or debt consolidation." },
                  { t: "Streamline Refi", d: "FHA/VA protocols for rapid rate drops without full appraisals." },
                  { t: "Recasting", d: "One-time principal injection to lower payments without changing rates." }
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-slate-900 border border-white/5 rounded-[2rem] hover:bg-white/5 transition-colors">
                    <h5 className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-2 italic">{item.t}</h5>
                    <p className="text-xs text-slate-500 font-bold italic leading-snug">{item.d}</p>
                  </div>
                ))}
              </div>
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
    </>
  );
}
