import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Scale, Gavel, ArrowRight, Shield, Activity, Info, FileText } from "lucide-react";

export const metadata: Metadata = {
    title: "Ozempic Legal Guide 2026 | Failure to Warn & Mass Tort Analysis",
    description: "Deep dive into the pharmaceutical liability doctrines governing MDL 3094. Analysis of strict liability, warning defects, and bellwether trajectories.",
    alternates: { canonical: './' }
};

export default function OzempicLegalGuide() {
    return (
        <div className="min-h-screen bg-slate-950">
            <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-16">

                {/* Navigation Sidebar */}
                <aside className="lg:col-span-3 space-y-8">
                    <div className="sticky top-32 space-y-8">
                        <Link href="/ozempic-flagship" className="inline-flex items-center gap-2 text-[10px] font-black text-rose-500 uppercase tracking-widest hover:gap-3 transition-all">
                            <ArrowLeft className="w-3 h-3" /> Return to Hub
                        </Link>

                        <nav className="space-y-2">
                            {[
                                { n: "Warning Defects", id: "#defects" },
                                { n: "Strict Liability", id: "#liability" },
                                { n: "MDL vs Class Action", id: "#structure" },
                                { n: "Discovery Strategy", id: "#discovery" }
                            ].map((item) => (
                                <Link key={item.id} href={item.id} className="block p-4 bg-white/5 border border-white/5 rounded-xl text-xs font-bold text-slate-400 hover:text-white hover:bg-white/10 transition-all italic">
                                    {item.n}
                                </Link>
                            ))}
                        </nav>

                        <div className="p-6 bg-rose-500/10 border border-rose-500/20 rounded-2xl">
                            <div className="text-[9px] font-black text-rose-400 uppercase tracking-widest mb-2">Audit Status</div>
                            <div className="text-xs font-bold text-white uppercase italic">Active Litigation Phase</div>
                        </div>
                    </div>
                </aside>

                {/* Main Expert Content */}
                <main className="lg:col-span-9 space-y-24">

                    <header className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-[10px] font-black text-rose-400 uppercase tracking-widest">
                            <Scale className="w-3 h-3" /> Legal Intelligence v4.0
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.9]">
                            The <span className="text-rose-500">Failure to Warn</span> Doctrine.
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed font-bold">
                            Pharmaceutical litigation is built upon the premise that a manufacturer has a non-delegable duty to warn of known or knowable side effects. In MDL 3094, this doctrine is being tested on a global scale.
                        </p>
                    </header>

                    {/* Section 1: Warning Defects */}
                    <section id="defects" className="space-y-8">
                        <h2 className="text-3xl font-black text-white flex items-center gap-4">
                            <div className="w-8 h-8 rounded-lg bg-rose-500 flex items-center justify-center text-black">1</div>
                            Warning Defect Mechanics
                        </h2>
                        <div className="prose prose-invert prose-slate max-w-none text-slate-400 space-y-6 text-lg font-medium leading-[1.8]">
                            <p>
                                A "warning defect" occurs when a drug's labeling fails to adequately convey the severity, frequency, or nature of a potential risk. For Ozempic (Semaglutide), the central argument revolves around the delay in communicating the risk of **Gastroparesis** (severe delayed gastric emptying) and **Ileus** (intestinal blockage).
                            </p>
                            <p>
                                Legal teams in 2026 are focusing on "internal knowledge" timelines. If discovery reveals that the manufacturer had adverse event data suggesting a higher rate of bowel obstruction than reported to the FDA, the "adequacy" of the label before the 2023 update becomes indefensible. This is known as the **Learned Intermediary Doctrine** exception: if the warning given to the doctor (the intermediary) is insufficient, the manufacturer remains strictly liable.
                            </p>
                        </div>
                    </section>

                    {/* Section 2: Strict Products Liability */}
                    <section id="liability" className="p-12 bg-slate-900 border border-white/10 rounded-[4rem] space-y-8 relative overflow-hidden">
                        <div className="absolute -right-8 -top-8 p-12 opacity-5">
                            <Gavel className="w-48 h-48 text-rose-500" />
                        </div>
                        <h2 className="text-3xl font-black text-white italic">Strict Liability vs. Negligence</h2>
                        <div className="prose prose-invert prose-slate text-slate-400 text-lg font-medium leading-relaxed space-y-6">
                            <p>
                                In pharmaceutical torts, claimants often pursue cases under **Strict Liability**. Unlike negligence, which requires proving a breach of "reasonable care," strict liability focuses on the product itself. If the drug was "unreasonably dangerous" due to an inadequate warning, the manufacturer is liable regardless of their intent or care level.
                            </p>
                            <p>
                                **The "Risk-Utility" Test**: Courts balance the social utility of the drug (weight loss/diabetes management) against the risk of catastrophic side effects (NAION vision loss). In 2026, the 700% risk increase found in recent studies has shifted the risk-utility balance significantly in favor of the plaintiffs.
                            </p>
                        </div>
                    </section>

                    {/* Section 3: MDL vs Class Action */}
                    <section id="structure" className="space-y-8">
                        <h2 className="text-3xl font-black text-white flex items-center gap-4">
                            <div className="w-8 h-8 rounded-lg bg-rose-500 flex items-center justify-center text-black">2</div>
                            MDL 3094 Structural Dynamics
                        </h2>
                        <div className="prose prose-invert prose-slate max-w-none text-slate-400 space-y-6 text-lg font-medium leading-[1.8]">
                            <p>
                                It is a common misconception that Ozempic lawsuits are a "Class Action." They are actually part of a **Multidistrict Litigation (MDL)**. In a class action, one person represents a group. In an MDL, every plaintiff retains their individual lawsuit, but all cases are consolidated for "pretrial discovery" to save time and resources.
                            </p>
                            <p>
                                **The Bellwether Strategy**: 2026 marks the critical year for Bellwether trials. These are representative cases chosen to go to trial first. The results of these trials provide the "mathematical floor" for future settlement negotiations. If the first three cases result in multi-million dollar verdicts, the manufacturer is incentivized to create a multi-billion dollar settlement fund for all remaining claimants.
                            </p>
                        </div>
                    </section>

                    {/* Expert Strategy FAQ */}
                    <section id="discovery" className="space-y-12 py-16 border-t border-white/10">
                        <div className="text-center space-y-4">
                            <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter underline decoration-rose-500 decoration-4">Discovery Strategy Checklist</h3>
                            <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Verified by Data Analyst Expert Team | Jan 2026</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                { t: "Vagus Nerve Evidence", d: "Documenting nerve damage via EMG or specialized imaging to prove the root cause of the stomach paralysis." },
                                { t: "Label Chronology", d: "Charting the exact date of your first dose against the 2023 and 2024 FDA label revisions to isolate 'Violation Windows'." },
                                { t: "Statute of Limitations (Discovery Rule)", d: "Applying the rule where the 'clock' only starts when you knew or should have known your injury was caused by the drug." },
                                { t: "Alternative Causation Audit", d: "Pre-emptively clearing your medical history of other causes for GI distress (e.g., pre-existing diabetes complications) to strengthen proximal cause." }
                            ].map((strat, i) => (
                                <div key={i} className="p-8 bg-white/5 border border-white/5 rounded-[2rem] space-y-3">
                                    <div className="text-rose-500 font-black text-sm">#{i + 1}</div>
                                    <h4 className="text-lg font-black text-white">{strat.t}</h4>
                                    <p className="text-sm text-slate-400 font-medium leading-relaxed">{strat.d}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Jurisdiction Notice (Mandatory) */}
                    <div className="p-8 bg-black rounded-[2rem] border border-white/5 text-center space-y-4">
                        <div className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Global Compliance Footer</div>
                        <p className="text-[10px] text-slate-500 leading-loose italic max-w-2xl mx-auto">
                            All data is processed locally with zero server-side storage. Legal disputes arising from the use of this audit engine are subject to the laws of the Republic of Korea, with the Seoul Central District Court holding exclusive jurisdiction. Verification provided by the Data Analyst Expert Team for 2026.
                        </p>
                    </div>

                </main>
            </div>
        </div>
    );
}
