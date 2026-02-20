import Link from "next/link";
import { Calculator, Shield, Car, CheckCircle, Info, Landmark, History, Scale } from "lucide-react";
import { SITE, VEHICLE_TYPES, COVERAGE_OPTIONS, FAQS } from "@/lib/calculators/classic-car-insurance";

export default function ClassicCarInsuranceGuidePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Calculate Classic Car Insurance in 2026",
        "description": "Expert guide on determining agreed value premiums for collector, antique, and modern classic vehicles.",
        "step": [
            {
                "@type": "HowToStep",
                "name": "Determine Agreed Value",
                "text": "Consult market indices like Hagerty or S-Class benchmarks to set a fixed payout amount that won't depreciate."
            },
            {
                "@type": "HowToStep",
                "name": "Verify Usage Tier",
                "text": "Assess annual mileage (typically <2,500 miles) and verify secure garage storage status."
            },
            {
                "@type": "HowToStep",
                "name": "Calculate Premium Factor",
                "text": "Apply era-specific multipliers (e.g., 1.4x for Modern Classics) to the base recreational rate."
            }
        ],
        "totalTime": "PT5M"
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
        <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-blue-500/30">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />

            {/* --- GUIDE HEADER --- */}
            <section className="py-20 px-4 border-b border-white/5 bg-slate-900/20">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                        <Shield className="w-4 h-4 text-blue-400" />
                        <span className="text-sm font-bold tracking-widest text-blue-400 uppercase">Institutional Resource</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
                        Classic Car Insurance <br /><span className="text-blue-500">2026 Audit Guide</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                        Technical specifications for agreed-value underwriting, vehicle classification tiers, and 2026 statutory liability adjustments.
                    </p>
                </div>
            </section>

            {/* --- VEHICLE TIERS SECTION --- */}
            <section className="py-24 px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="flex items-center gap-4 mb-12">
                        <History className="w-8 h-8 text-blue-500" />
                        <h2 className="text-3xl font-bold text-white tracking-tight">Classification Multipliers</h2>
                    </div>
                    <div className="grid gap-4">
                        {VEHICLE_TYPES.map((type, index) => (
                            <div key={index} className="group flex flex-col md:flex-row items-center justify-between p-6 bg-slate-900 border border-white/5 rounded-3xl hover:border-blue-500/30 transition-all shadow-xl hover:shadow-blue-500/5">
                                <div className="mb-4 md:mb-0">
                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{type.name}</h3>
                                    <p className="text-sm text-slate-500 max-w-md leading-snug">{type.description}</p>
                                </div>
                                <div className="flex items-center gap-6 w-full md:w-auto border-t md:border-t-0 pt-4 md:pt-0 mt-4 md:mt-0">
                                    <div className="text-right">
                                        <div className="text-[10px] uppercase font-black text-slate-600 tracking-wider mb-1">Risk Weight</div>
                                        <div className="text-2xl font-black text-white tracking-tighter">×{type.factor.toFixed(1)}</div>
                                    </div>
                                    <div className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest ${type.factor >= 1.4 ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'}`}>
                                        {type.factor >= 1.4 ? 'High Risk' : 'Prime Index'}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- EXPERT CONTENT BLOCK I --- */}
            <section className="py-24 px-4 bg-slate-900/30">
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold text-white leading-tight">Agreed Value vs. <br />Stated Value</h2>
                            <p className="text-lg text-slate-400 leading-relaxed font-light">
                                For collectors in 2026, the distinction between these two models is the difference between total asset protection and significant financial loss.
                            </p>
                            <div className="space-y-4">
                                <div className="flex gap-4 p-4 bg-slate-900 rounded-2xl border border-white/5">
                                    <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-white text-sm uppercase mb-1">Agreed Value</h4>
                                        <p className="text-xs text-slate-500">Guarantees 100% payout of the policy limit with zero depreciation. Mandatory for investment-grade assets.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 bg-slate-900/50 rounded-2xl border border-white/5 opacity-60">
                                    <Info className="w-6 h-6 text-amber-500 shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-white text-sm uppercase mb-1">Stated Value</h4>
                                        <p className="text-xs text-slate-500">Pays up to the stated amount OR actual cash value, whichever is lowest. Often leads to lower payouts for appreciating cars.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-900 p-10 rounded-[2rem] border border-white/10 shadow-3xl">
                            <Landmark className="w-12 h-12 text-blue-500 mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">2026 Compliance Audit</h3>
                            <p className="text-sm text-slate-400 leading-relaxed mb-6">
                                The 2026 regulatory landscape has shifted. Specifically, New Jersey's <strong>Bill A2426</strong> has mandated higher liability minimums (35/70/25), which has increased the liability portion of classic car premiums by an average of 6.2%.
                            </p>
                            <div className="p-4 bg-blue-500/5 border border-blue-500/10 rounded-xl">
                                <p className="text-xs text-blue-300 font-medium italic">
                                    "Underwriters are now requiring biometric garage access or high-resolution telemetrics for all 'Modern Classic' policies exceeding $100,000 in agreed value."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- DYNAMIC FAQ SECTION --- */}
            <section className="py-24 px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <Scale className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                        <h2 className="text-4xl font-bold text-white tracking-tighter">Institutional FAQ</h2>
                        <p className="text-slate-500 mt-2">Verified answers for the 2026 insurance cycle.</p>
                    </div>
                    <div className="space-y-6">
                        {FAQS.map((faq, index) => (
                            <div key={index} className="p-8 bg-slate-900 border border-white/5 rounded-3xl hover:border-blue-500/20 transition-all">
                                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-3">
                                    <span className="text-blue-500">Q.</span> {faq.question}
                                </h3>
                                <p className="text-slate-400 leading-relaxed font-light">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- FINAL CALL TO ACTION --- */}
            <section className="py-32 px-4 border-t border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-8 italic">Ready for an Institutional Audit?</h2>
                    <Link href="/classic-car-insurance/calculator" className="inline-flex items-center gap-4 bg-blue-600 hover:bg-blue-500 text-white px-12 py-6 rounded-2xl text-xl font-black transition-all shadow-2xl shadow-blue-500/20 active:scale-95 group">
                        Live 2026 Premium Engine <Calculator className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
