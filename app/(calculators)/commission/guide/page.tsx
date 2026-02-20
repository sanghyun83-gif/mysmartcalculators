import Link from "next/link";
import { Calculator, Shield, TrendingUp, CheckCircle, Info, Landmark, History, Scale, Briefcase, Zap } from "lucide-react";
import { SITE, INDUSTRY_BENCHMARKS, COMMISSION_STRUCTURES, FAQS } from "@/lib/calculators/commission";

export default function CommissionGuidePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Calculate Sales Commission in 2026",
        "description": "Professional guide on auditing commission payouts, including tiered accelerators and real estate splits.",
        "step": [
            {
                "@type": "HowToStep",
                "name": "Identify the Revenue Base",
                "text": "Determine if the commission is based on total Sales Price (Real Estate) or Annual Contract Value (SaaS)."
            },
            {
                "@type": "HowToStep",
                "name": "Apply the Base Rate",
                "text": "Multiply the revenue base by the standard percentage (e.g., 5.7% for Real Estate or 10% for SaaS)."
            },
            {
                "@type": "HowToStep",
                "name": "Calculate Accelerators",
                "text": "If over quota, apply multipliers (typically 1.5x to 2x) to the revenue exceeding the threshold."
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
        <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-emerald-500/30">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />

            {/* --- GUIDE HEADER --- */}
            <section className="py-20 px-4 border-b border-white/5 bg-slate-900/20 text-center">
                <div className="max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6 text-emerald-400">
                        <Shield className="w-4 h-4" />
                        <span className="text-sm font-black tracking-widest uppercase">Institutional Resource</span>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-none text-center">
                        Commission <br /><span className="text-emerald-500">Audit Protocol</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                        Technical specifications for calculating 2026 performance-based compensation, real estate splits, and enterprise accelerators.
                    </p>
                </div>
            </section>

            {/* --- INDUSTRY BENCHMARKS --- */}
            <section className="py-24 px-4 bg-slate-950 relative">
                <div className="max-w-5xl mx-auto">
                    <div className="flex items-center gap-4 mb-12 border-l-4 border-emerald-500 pl-6">
                        <History className="w-8 h-8 text-emerald-500" />
                        <h2 className="text-3xl font-bold text-white tracking-tight uppercase italic">Global Sector Multipliers</h2>
                    </div>
                    <div className="grid gap-4">
                        {INDUSTRY_BENCHMARKS.map((item, index) => (
                            <div key={index} className="group flex flex-col md:flex-row items-center justify-between p-8 bg-slate-900 border border-white/5 rounded-[2rem] hover:border-emerald-500/30 transition-all shadow-xl hover:shadow-emerald-500/5">
                                <div className="mb-4 md:mb-0">
                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors uppercase tracking-tight">{item.industry}</h3>
                                    <p className="text-sm text-slate-500 max-w-md leading-snug italic">Basis: {item.metric}</p>
                                </div>
                                <div className="flex items-center gap-8 w-full md:w-auto border-t md:border-t-0 pt-4 md:pt-0 mt-4 md:mt-0">
                                    <div className="text-right">
                                        <div className="text-[10px] uppercase font-black text-slate-600 tracking-wider mb-1">Audit Rate</div>
                                        <div className="text-3xl font-black text-white tracking-tighter">{item.rate}</div>
                                    </div>
                                    <div className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest ${item.trend === 'Rising' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-slate-500/10 text-slate-400'}`}>
                                        {item.trend}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CORE CONTENT BLOCKS --- */}
            <section className="py-24 px-4 bg-slate-900/30 border-y border-white/5">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20 items-start">
                        {/* Block 1: Real Estate */}
                        <div className="space-y-10">
                            <div className="inline-flex items-center gap-3 text-blue-400">
                                <Landmark className="w-8 h-8" />
                                <h2 className="text-3xl font-black uppercase tracking-tighter italic">The 2026 Real <br />Estate Shift</h2>
                            </div>
                            <p className="text-lg text-slate-400 leading-relaxed font-light">
                                In 2026, the traditional 6% commission model has fractured. Following the <strong>NAR Settlement</strong>, buyer/agent agreements are now private and highly negotiable.
                            </p>
                            <div className="space-y-6">
                                <div className="p-6 bg-slate-900 rounded-3xl border border-white/5 flex gap-6 group hover:border-blue-500/30 transition-all">
                                    <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0" />
                                    <div>
                                        <h4 className="font-black text-white text-sm uppercase mb-1">Seller Side (Listing)</h4>
                                        <p className="text-xs text-slate-500">Typically averages 2.88%. Includes marketing, staging indices, and MLS syndication fees.</p>
                                    </div>
                                </div>
                                <div className="p-6 bg-slate-900 rounded-3xl border border-white/5 flex gap-6 group hover:border-emerald-500/30 transition-all">
                                    <Zap className="w-6 h-6 text-amber-500 shrink-0" />
                                    <div>
                                        <h4 className="font-black text-white text-sm uppercase mb-1">Buyer Side (Split)</h4>
                                        <p className="text-xs text-slate-500">Averages 2.82%. Increasingly negotiated as flat fees or hourly rates by institutional buyers.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Block 2: SaaS Accelerators */}
                        <div className="bg-slate-900 p-12 rounded-[3.5rem] border border-white/10 shadow-3xl text-center lg:text-left">
                            <Briefcase className="w-12 h-12 text-emerald-500 mb-8 mx-auto lg:mx-0" />
                            <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter italic">SaaS Accelerator <br />Mechanics</h3>
                            <p className="text-sm text-slate-400 leading-relaxed mb-8 font-light">
                                SaaS Account Executives (AEs) rely on <strong>Accelerators</strong> to achieve OTE (On-Target Earnings). These multipliers reward overage beyond quota.
                            </p>
                            <div className="grid gap-3 mb-8">
                                <div className="flex justify-between p-4 bg-white/5 rounded-2xl">
                                    <span className="text-xs font-bold text-slate-400 lowercase italic">Standard Quota</span>
                                    <span className="text-sm font-black text-white">1.0x Rate</span>
                                </div>
                                <div className="flex justify-between p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
                                    <span className="text-xs font-bold text-emerald-400 lowercase italic">120% Tier</span>
                                    <span className="text-sm font-black text-emerald-400">1.5x Rate</span>
                                </div>
                                <div className="flex justify-between p-4 bg-emerald-500/20 border border-emerald-500/30 rounded-2xl">
                                    <span className="text-xs font-bold text-emerald-300 lowercase italic">150% Super-Tier</span>
                                    <span className="text-sm font-black text-emerald-300">2.0x Rate</span>
                                </div>
                            </div>
                            <div className="p-4 bg-emerald-500/5 rounded-2xl border border-emerald-500/10 italic">
                                <p className="text-xs text-emerald-400">"Accelerators should always be calculated on the marginal revenue, not the entire annual contract value, to ensure fiscal sustainability."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- INSTITUTIONAL FAQ --- */}
            <section className="py-32 px-4 relative">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <Scale className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                        <h2 className="text-5xl font-black text-white tracking-tighter uppercase italic">Institutional FAQ</h2>
                        <p className="text-slate-500 mt-2 font-light">Verified 2026 data for compensation audits.</p>
                    </div>
                    <div className="grid gap-6">
                        {FAQS.map((faq, index) => (
                            <div key={index} className="p-10 bg-slate-900 border border-white/5 rounded-[2.5rem] group hover:border-emerald-500/20 transition-all shadow-xl">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-4">
                                    <span className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs shrink-0">Q</span>
                                    {faq.question}
                                </h3>
                                <p className="text-slate-400 leading-relaxed font-light pl-12 border-l border-white/5">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CTA SECTION --- */}
            <section className="py-32 px-4 border-t border-white/5 bg-slate-900/10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-black text-white mb-10 tracking-tighter italic uppercase">Ready for a Full <br />Audit Injection?</h2>
                    <Link href="/commission/calculator" className="inline-flex items-center gap-4 bg-emerald-600 hover:bg-emerald-500 text-white px-12 py-6 rounded-2xl text-2xl font-black transition-all shadow-2xl shadow-emerald-500/20 active:scale-95 group">
                        Live 2026 Commission Engine <Calculator className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
