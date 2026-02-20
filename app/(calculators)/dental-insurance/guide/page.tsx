import { Calculator, Shield, Activity, Smile, Info, HeartPulse, Scale, CheckCircle2, Zap, Landmark, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SITE, DENTAL_DATA_2026, COVERAGE_TIERS, PLAN_TYPES, FAQS } from "@/lib/calculators/dental-insurance";

export default function DentalInsuranceGuidePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Audit Dental Insurance Coverage in 2026",
        "description": "Professional guide on auditing dental insurance premiums, 100/80/50 coverage tiers, and annual benefit limits.",
        "step": [
            {
                "@type": "HowToStep",
                "name": "Identify the Plan Architecture",
                "text": "Determine if the plan is a PPO (Preferred Provider), DHMO (Selected Network), or Indemnity model."
            },
            {
                "@type": "HowToStep",
                "name": "Verify Coverage Tiers",
                "text": "Apply the 100/80/50 rule: 100% for preventive, 80% for basic restorative, and 50% for major work like crowns."
            },
            {
                "@type": "HowToStep",
                "name": "Check Annual Maximum Benefit",
                "text": "Confirm the annual cap (typically $1,500 to $2,500) where the insurer ceases payment for the remainder of the year."
            }
        ],
        "totalTime": "PT8M"
    };

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": FAQS.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-sky-500/30">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />

            {/* --- HERO SECTION --- */}
            <section className="relative pt-32 pb-24 px-4 overflow-hidden border-b border-white/5 bg-slate-900/20">
                <div className="max-w-4xl mx-auto relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-2 mb-8">
                        <Shield className="w-4 h-4 text-sky-400" />
                        <span className="text-xs font-black tracking-widest text-sky-400 uppercase">Pro-Tier Dental Audit</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase italic">
                        The 2026 Dental <br /><span className="text-sky-500">Coverage Manual</span>
                    </h1>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                        Institutional-grade breakdown of the 100/80/50 coverage logic, state-level premium indices, and the financial architecture of modern oral healthcare.
                    </p>
                </div>
            </section>

            {/* --- CORE CONTENT --- */}
            <section className="py-24 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Technical Overview */}
                    <div className="mb-20">
                        <div className="flex items-center gap-4 mb-8">
                            <Activity className="w-8 h-8 text-sky-500" />
                            <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter">Strategic Underwriting</h2>
                        </div>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            Dental insurance in 2026 functions fundamentally differently from medical insurance. While medical plans have **Maximum Out-of-Pocket (MOOP)** limits to protect you from bankruptcy, dental plans have **Annual Maximum Benefits** that cap how much the *insurer* will pay. Understanding this 'inverted risk' is critical for auditing your true oral healthcare liability.
                        </p>
                    </div>

                    {/* The 100/80/50 Rule */}
                    <div className="mb-20 bg-slate-900 border border-white/5 rounded-[3rem] p-10 shadow-2xl">
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <Scale className="w-6 h-6 text-sky-400" />
                            The 100/80/50 Coverage Protocol
                        </h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            {COVERAGE_TIERS.map((tier, idx) => (
                                <div key={idx} className="space-y-4">
                                    <div className="text-4xl font-black text-sky-500">{tier.rate}%</div>
                                    <h4 className="font-bold text-white uppercase tracking-wider text-xs">{tier.name}</h4>
                                    <ul className="text-xs text-slate-500 space-y-2">
                                        {tier.procedures.map((p, i) => (
                                            <li key={i} className="flex gap-2">
                                                <CheckCircle2 className="w-3 h-3 text-sky-500 shrink-0 mt-0.5" />
                                                {p}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* State-Level Variability */}
                    <div className="mb-20">
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 italic uppercase">
                            <Landmark className="w-6 h-6 text-sky-400" />
                            2026 Geographic Premium Index
                        </h3>
                        <p className="text-slate-400 mb-10 leading-relaxed">
                            Premium costs are heavily indexed to local provider labor rates and state regulations. For 2026, we observe a benchmark range of **$18.45 (West Virginia)** to **$50.12 (Alaska)** for standard PPO individual tiers.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            {Object.entries(DENTAL_DATA_2026.premiums.states).map(([state, rate]) => (
                                <div key={state} className="p-6 bg-slate-900/50 border border-white/5 rounded-2xl flex justify-between items-center group hover:border-sky-500/30 transition-all">
                                    <span className="font-bold text-slate-300 group-hover:text-white uppercase tracking-tighter">{state} Standard PPO</span>
                                    <span className="text-xl font-black text-sky-500">${rate.toFixed(2)} / mo</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div className="mb-20 border-t border-white/5 pt-20">
                        <div className="text-center mb-16">
                            <Zap className="w-12 h-12 text-sky-500 mx-auto mb-4" />
                            <h2 className="text-4xl font-black text-white uppercase italic tracking-tighter">Institutional Q&A</h2>
                            <p className="text-slate-500 mt-2 font-light">Addressing complex 2026 dental insurance mechanics.</p>
                        </div>
                        <div className="grid gap-8">
                            {FAQS.map((faq, idx) => (
                                <div key={idx} className="p-8 bg-slate-900 border border-white/5 rounded-3xl group hover:border-sky-500/20 transition-all">
                                    <h4 className="text-xl font-bold text-white mb-4 flex items-start gap-3">
                                        <span className="text-sky-500 font-black">Q.</span>
                                        {faq.question}
                                    </h4>
                                    <div className="flex gap-4">
                                        <span className="text-slate-700 font-black pt-1 shrink-0">A.</span>
                                        <p className="text-slate-400 leading-relaxed font-light">{faq.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Final CTA */}
                    <div className="p-12 bg-sky-600 rounded-[3rem] text-center shadow-2xl shadow-sky-600/20 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-12 opacity-10 -rotate-12 group-hover:rotate-0 transition-transform">
                            <Calculator className="w-48 h-48 text-white" />
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-tighter italic">Ready to Audit Your Plan?</h3>
                            <p className="text-sky-100 mb-10 max-w-xl mx-auto font-medium">Use our high-precision S-Class auditor to calculate your exact 2026 dental insurance costs and coverage efficiency.</p>
                            <Link href="/dental-insurance/calculator" className="inline-flex items-center gap-3 bg-white text-sky-600 hover:bg-slate-100 px-10 py-5 rounded-2xl font-black text-lg transition-all active:scale-95 shadow-xl">
                                Launch Dental Auditor <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
