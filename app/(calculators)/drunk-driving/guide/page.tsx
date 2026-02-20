import { Calculator, Shield, Activity, Gavel, Info, AlertTriangle, Zap, Landmark, TrendingUp, Scale, CheckCircle2, ArrowRight, DollarSign } from "lucide-react";
import Link from "next/link";
import { SITE, DUI_DATA_2026, FAQS, STATISTICS } from "@/lib/calculators/drunk-driving";

export default function DUIGuidePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Audit DUI Penalties & Hidden Costs (2026)",
        "description": "Professional guide on auditing the total financial and legal impact of a DUI conviction, including SR-22 forecasting and IID requirements.",
        "step": [
            {
                "@type": "HowToStep",
                "name": "Verify BAC at Time of Arrest",
                "text": "Check the official blood alcohol concentration (BAC). Note that 0.08% is the 'per se' limit for standard drivers in most states."
            },
            {
                "@type": "HowToStep",
                "name": "Audit state-specific Mandatory Minimums",
                "text": "Review your jurisdiction's mandatory jail time and fine schedules. States like AZ and TN have mandatory minimums for 1st-time offenders."
            },
            {
                "@type": "HowToStep",
                "name": "Forecast Hidden Surcharges",
                "text": "Calculate the 3-year impact of SR-22 premiums, which average a 370% increase over standard rates."
            }
        ],
        "totalTime": "PT12M"
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
        <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-rose-500/30">
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
                    <div className="inline-flex items-center gap-2 bg-rose-500/10 border border-rose-500/20 rounded-full px-4 py-2 mb-8">
                        <Shield className="w-4 h-4 text-rose-400" />
                        <span className="text-xs font-black tracking-widest text-rose-400 uppercase">Institutional DUI Audit</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase italic">
                        The 2026 Penal <br /><span className="text-rose-600">Enforcement Manual</span>
                    </h1>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                        Forensic breakdown of 2026 DUI penalties, state-level mandatory minimums, and the hidden financial architectural risks of conviction.
                    </p>
                </div>
            </section>

            {/* --- CORE CONTENT --- */}
            <section className="py-24 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Technical Overview */}
                    <div className="mb-20">
                        <div className="flex items-center gap-4 mb-8">
                            <Gavel className="w-8 h-8 text-rose-500" />
                            <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter">Judicial Framework</h2>
                        </div>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            DUI law in 2026 is governed by both **Criminal Statutes** and **Administrative Regulations**. While the court handles your fines and jail time, the Department of Motor Vehicles (DMV) handles your license suspension through 'Implied Consent' protocols. Understanding this dual-sovereignty system is critical for auditing your total liability.
                        </p>
                    </div>

                    {/* Fines and Costs */}
                    <div className="mb-20 bg-slate-900 border border-white/5 rounded-[3rem] p-10 shadow-2xl">
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <Landmark className="w-6 h-6 text-rose-400" />
                            2026 Mandatory Penalty Index
                        </h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            {Object.entries(DUI_DATA_2026.penalties1stOffense.states).map(([state, data]) => (
                                <div key={state} className="p-6 bg-slate-800/30 border border-white/5 rounded-2xl group hover:border-rose-500/20 transition-all">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-xl font-black text-white italic underline decoration-rose-500/30">{state} (1st Offense)</span>
                                        <span className="text-[10px] font-bold bg-rose-500/20 text-rose-400 px-2 py-1 rounded-full uppercase">{data.severity} Risk</span>
                                    </div>
                                    <ul className="space-y-2 text-xs text-slate-500">
                                        <li className="flex justify-between"><span>Mandatory Jail</span><span className="text-white font-bold">{data.jail}</span></li>
                                        <li className="flex justify-between"><span>Avg Fine</span><span className="text-white font-bold">${data.fine.toLocaleString()}</span></li>
                                        <li className="flex justify-between"><span>IID Requirement</span><span className="text-white font-bold">{data.mandatoryIID ? "Mandatory" : "Discretionary"}</span></li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Hidden Costs Table */}
                    <div className="mb-20">
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 italic uppercase">
                            <DollarSign className="w-6 h-6 text-amber-400" />
                            The $15,000 Conviction Liability
                        </h3>
                        <p className="text-slate-400 mb-10 leading-relaxed">
                            A DUI conviction is an iceberg. The judicial fine is only the tip. In 2026, the secondary financial impact includes premium surcharges and hardware leasing fees.
                        </p>
                        <div className="bg-slate-900 border border-white/5 rounded-[2.5rem] overflow-hidden">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-slate-800 text-[10px] text-slate-500 uppercase font-black">
                                    <tr>
                                        <th className="px-6 py-4">Expense Node</th>
                                        <th className="px-6 py-4">Est. Cost (2026)</th>
                                        <th className="px-6 py-4">Duration</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    <tr>
                                        <td className="px-6 py-4 text-white font-bold">SR-22 Insurance Surcharge</td>
                                        <td className="px-6 py-4 text-rose-500 font-black">${DUI_DATA_2026.hiddenCosts.sr22Insurance.annualAvg.toLocaleString()}</td>
                                        <td className="px-6 py-4 text-slate-500 italic">Annual (3-5 years)</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-white font-bold">Ignition Interlock (IID)</td>
                                        <td className="px-6 py-4 text-rose-500 font-black">${DUI_DATA_2026.hiddenCosts.ignitionInterlock.totalYear.toLocaleString()}</td>
                                        <td className="px-6 py-4 text-slate-500 italic">12-Month Lease</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-white font-bold">Legal Defense (Standard)</td>
                                        <td className="px-6 py-4 text-rose-500 font-black">${DUI_DATA_2026.hiddenCosts.legalFees.min.toLocaleString()} - $6k</td>
                                        <td className="px-6 py-4 text-slate-500 italic">Retainer-Based</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div className="mb-20 border-t border-white/5 pt-20">
                        <div className="text-center mb-16">
                            <Zap className="w-12 h-12 text-rose-500 mx-auto mb-4" />
                            <h2 className="text-4xl font-black text-white uppercase italic tracking-tighter">Institutional Q&A</h2>
                            <p className="text-slate-500 mt-2 font-light">Addressing complex 2026 DUI legal mechanics.</p>
                        </div>
                        <div className="grid gap-8">
                            {FAQS.map((faq, idx) => (
                                <div key={idx} className="p-8 bg-slate-900 border border-white/5 rounded-3xl group hover:border-rose-500/20 transition-all">
                                    <h4 className="text-xl font-bold text-white mb-4 flex items-start gap-3">
                                        <span className="text-rose-500 font-black">Q.</span>
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
                    <div className="p-12 bg-rose-600 rounded-[3rem] text-center shadow-2xl shadow-rose-600/20 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-12 opacity-10 -rotate-12 group-hover:rotate-0 transition-transform">
                            <Calculator className="w-48 h-48 text-white" />
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-tighter italic text-center mx-auto">Ready to Audit Liability?</h3>
                            <p className="text-rose-100 mb-10 max-w-xl mx-auto font-medium text-center">Use our high-precision S-Class auditor to estimate 2026 DUI penalties, legal fees, and premium surcharges.</p>
                            <div className="flex justify-center">
                                <Link href="/drunk-driving/calculator" className="inline-flex items-center gap-3 bg-white text-rose-600 hover:bg-slate-100 px-10 py-5 rounded-2xl font-black text-lg transition-all active:scale-95 shadow-xl">
                                    Launch DUI Auditor <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
