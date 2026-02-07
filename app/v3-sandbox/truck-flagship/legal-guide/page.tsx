import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Scale, Gavel, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Truck Accident Multiplier Guide | Legal Framework | TruckMaster AI",
    description: "Learn how multipliers are applied to truck accident settlements. Analysis of comparative fault and pain and suffering calculations.",
    alternates: { canonical: './' }
};

export default function LegalGuide() {
    return (
        <div className="min-h-screen bg-slate-950 font-sans selection:bg-red-500/30 selection:text-white">
            <div className="max-w-7xl mx-auto px-6 py-24">
                {/* Header Section */}
                <div className="max-w-4xl space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[10px] font-black text-red-400 uppercase tracking-widest">
                        Legal Doctrine v3.4
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white leading-[0.9]">
                        Legal <span className="text-red-500">Framework</span>.
                    </h1>
                    <p className="text-xl text-slate-400 leading-relaxed font-medium">
                        Truck accident litigation is distinct from standard tort law due to the interplay between
                        state liability rules and federal safety mandates. Navigating this "Multiplier"
                        requires a deep understanding of <span className="text-white">Proximate Cause</span> and
                        <span className="text-white">Negligence Per Se</span>.
                    </p>
                </div>

                {/* Deep Content Grid */}
                <div className="grid lg:grid-cols-12 gap-12 mt-24">
                    <div className="lg:col-span-8 space-y-24">

                        {/* 1. Vicarious Liability & Respondeat Superior */}
                        <section className="space-y-8">
                            <h2 className="text-3xl font-black text-white tracking-tight flex items-center gap-3">
                                <Gavel className="w-10 h-10 text-red-500" />
                                1. The Doctrine of Corporate Accountability
                            </h2>
                            <div className="prose prose-invert prose-slate max-w-none text-slate-400 space-y-6 text-lg">
                                <p>
                                    In a standard passenger vehicle crash, the driver's insurance is the primary source of recovery. In a commercial truck disaster, the driver is merely the tip of the liability iceberg. We utilize the principle of <strong>Respondeat Superior</strong> ("Let the Master Answer") to hold the motor carrier vicariously liable for the negligent actions of their employees.
                                </p>
                                <p>
                                    However, the 2026 legal landscape has introduced <strong>Carrier-Broker Liability</strong>. If a third-party logistics (3PL) firm hired an unsafe carrier with a "Conditional" safety rating from the DOT, that broker may share in the liability. This "Asset-Stacking" strategy is essential for cases where the truck's primary policy is insufficient to cover medical expenses for catastrophic injuries.
                                </p>
                            </div>
                        </section>

                        {/* 2. Negligence Per Se: The Regulatory Shortcut */}
                        <section className="p-16 bg-slate-900 border border-white/10 rounded-[4rem] space-y-8 relative overflow-hidden shadow-2xl">
                            <h2 className="text-2xl font-black text-white tracking-tight">2. Negligence Per Se: Safety Violations</h2>
                            <p className="text-slate-400 leading-relaxed font-medium">
                                Proving negligence usually requires proving "unreasonable behavior." But if we prove a <strong>violation of federal safety law (FMCSR)</strong>, the court may rule that negligence exists as a matter of law. This is called <i>Negligence Per Se</i>. This strategy is triggered by:
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 pt-4">
                                <div className="space-y-3">
                                    <div className="text-[10px] font-black text-red-500 uppercase">Part 382</div>
                                    <h4 className="text-xs font-black text-white">Drug/Alcohol Testing Failure</h4>
                                    <p className="text-[11px] text-slate-500 font-medium">Failure to conduct post-accident testing within 2-8 hours of the event.</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="text-[10px] font-black text-red-500 uppercase">Part 396</div>
                                    <h4 className="text-xs font-black text-white">Mechanical "Spoilation"</h4>
                                    <p className="text-[11px] text-slate-500 font-medium">Known brake defects documented in inspection reports but left un-repaired.</p>
                                </div>
                            </div>
                        </section>

                        {/* 3. Damages: The Life Care Planning Matrix */}
                        <section className="space-y-8">
                            <h2 className="text-3xl font-black text-white tracking-tight">3. Quantifying Catastrophic Loss</h2>
                            <p className="text-slate-400 leading-relaxed font-medium text-lg">
                                A truck accident lawyer's primary job is to turn medical suffering into a present-value dollar figure. For high-value audits, we utilize <strong>Life Care Planners</strong> to project every dollar you will spend until age 80.
                            </p>
                            <div className="grid md:grid-cols-3 gap-6 pt-8">
                                {[
                                    { t: "Economic Base", d: "Past medical bills plus verified lost wages using W-2 and 1099 data." },
                                    { t: "Future Care", d: "Projected spinal surgeries, vocational retraining, and home healthcare needs." },
                                    { t: "Multiplier Yield", d: "The non-economic 'Pain' multiplier derived from jury pool sentiment analysis." }
                                ].map((box, i) => (
                                    <div key={i} className="p-6 bg-white/5 rounded-3xl border border-white/5 space-y-3">
                                        <div className="text-[10px] font-black text-red-500 uppercase">{box.t}</div>
                                        <p className="text-xs text-slate-500 font-bold leading-relaxed">{box.d}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 4. Preservation of Evidence: The 10-Day Window */}
                        <section className="p-12 bg-red-600/5 border border-red-500/20 rounded-[3rem] space-y-6">
                            <h2 className="text-2xl font-black text-white italic">The Evidence "Destroy" Loophole</h2>
                            <p className="text-slate-400 leading-relaxed font-medium">
                                Federal law only requires trucking companies to keep certain ELD logs for <strong>6 months</strong>. However, internal company policies often allow for "automatic deletion" of dash-cam footage after 10-30 days. Without an immediate <strong>Preservation of Evidence Letter</strong>, your case may lose its most valuable multiplier evidence: driver fatigue proof.
                            </p>
                            <div className="pt-4 flex items-center gap-4">
                                <Link href="/truck-accident/calculator" className="text-xs font-black text-red-500 uppercase tracking-widest border-b-2 border-red-500/20 hover:border-red-500 transition-all">
                                    Audit Your Evidence Recovery Potential &rarr;
                                </Link>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar: Navigation/CTA */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-24 space-y-6">
                            <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] space-y-8">
                                <h3 className="text-xl font-black text-white">Legal Navigation</h3>
                                <div className="space-y-4">
                                    <Link href="/truck-accident/calculator" className="flex items-center justify-between p-4 bg-red-600 rounded-2xl hover:bg-red-500 transition-all group">
                                        <span className="text-[10px] font-black uppercase text-white">Back to Audit Engine</span>
                                        <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link href="/truck-accident/regulations" className="flex items-center justify-between p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition-all group">
                                        <span className="text-[10px] font-black uppercase text-white">FMCSR Regulations</span>
                                        <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>

                            {/* Expert Footnote */}
                            <div className="p-6 bg-slate-900 rounded-[2rem] border border-white/5">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center text-[8px] font-black text-red-400">LE</div>
                                    <div className="text-[10px] font-black text-slate-400 uppercase">Expert Consensus</div>
                                </div>
                                <p className="text-[10px] text-slate-500 italic leading-relaxed font-bold">
                                    This guide is for informational purposes. Commercial litigation is highly jurisdiction-specific.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
