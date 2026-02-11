import Link from "next/link";
import {
    CONSTRUCTION_2026,
    SITE,
    formatCurrency
} from "@/lib/calculators/construction-accident";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import {
    HardHat,
    ArrowLeft,
    ArrowRight,
    Shield,
    Gavel,
    Activity,
    Stethoscope,
    Scale,
    CheckCircle2,
    AlertTriangle,
    ChevronRight,
    Target,
    Hammer,
    Zap,
    Building2,
    Info
} from "lucide-react";

export const metadata = {
    title: `Construction Accident Forensic Guide 2026 | ${SITE.name}`,
    description: "Deep-dive into construction liability: NY Labor Law Section 240/241, OSHA Fatal Four safety standards, and forensic settlement valuation."
};

export default function ConstructionGuide() {
    return (
        <div className="bg-[#020617] min-h-screen text-slate-300 font-sans selection:bg-amber-500/30 pb-24">
            {/* 1. Forensic Hero */}
            <section className="relative pt-24 pb-20 overflow-hidden border-b border-white/5 bg-slate-950">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,158,11,0.05),transparent_50%)]" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <Link href="/construction-accident" className="inline-flex items-center gap-2 text-[10px] font-black text-slate-500 hover:text-amber-400 uppercase tracking-widest transition-colors mb-12">
                        <ArrowLeft className="w-4 h-4" /> Back to Case Intelligence
                    </Link>
                    <div className="max-w-4xl space-y-6">
                        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none italic uppercase">
                            Forensic <br />
                            <span className="text-amber-500 font-black">Safety Intelligence.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed max-w-2xl">
                            Analysis of **MDL Construction Benchmarks**, OSHA CFR Part 1926 compliance, and the statutory impact of NY Labor Law 240/241 on settlement ceilings.
                        </p>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid lg:grid-cols-12 gap-16">

                    {/* Main Intelligence Body */}
                    <div className="lg:col-span-8 space-y-24">

                        {/* 1. Trinity Audit Pillars */}
                        <div className="space-y-12">
                            <div className="flex items-center gap-4">
                                <div className="h-px flex-1 bg-white/10" />
                                <span className="text-[10px] font-black text-amber-500 uppercase tracking-[0.4em]">The Trinity Audit Framework</span>
                                <div className="h-px flex-1 bg-white/10" />
                            </div>

                            <div className="grid md:grid-cols-3 gap-8">
                                {[
                                    { title: "Clinical", icon: Stethoscope, desc: "Traumatic vertebral fracture & TBI mapping." },
                                    { title: "Statutory", icon: Gavel, desc: "Section 240 Pillar absolute liability audit." },
                                    { title: "Exposure", icon: Activity, desc: "Forensic verification of OSHA safety breaches." }
                                ].map((pillar, i) => (
                                    <div key={i} className="p-8 bg-slate-900 border border-white/5 rounded-3xl space-y-4 hover:border-amber-500/30 transition-all">
                                        <pillar.icon className="w-8 h-8 text-amber-500" />
                                        <h4 className="text-white font-black uppercase text-sm tracking-widest italic">{pillar.title}</h4>
                                        <p className="text-xs text-slate-500 font-bold leading-relaxed">{pillar.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 2. NY Labor Law Section 240 Deep-Dive */}
                        <div className="bg-slate-900 border border-white/5 rounded-[3.5rem] p-12 md:p-16 space-y-12 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-12 opacity-5">
                                <Scale className="w-64 h-64 text-amber-400" />
                            </div>
                            <div className="relative z-10 space-y-8">
                                <h2 className="text-4xl font-black text-white italic tracking-tighter uppercase leading-none">The Scaffold Law <br /><span className="text-amber-500">Section 240 Logic.</span></h2>
                                <div className="prose prose-invert max-w-none text-slate-400 font-medium leading-[1.8] space-y-6">
                                    <p>
                                        In the jurisdiction of New York, **Labor Law § 240** (commonly known as the "Scaffold Law") provides the most powerful legal recourse for construction workers. It imposes **absolute liability** on owners and general contractors for elevation-related injuries.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-8 my-12">
                                        <div className="p-8 bg-black/40 border-l-4 border-l-amber-600 rounded-r-3xl space-y-4">
                                            <h4 className="text-white font-bold uppercase text-xs tracking-widest">Gravity-Related Triggers</h4>
                                            <ul className="text-[11px] space-y-2 font-black text-slate-500 uppercase">
                                                <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-amber-500" /> Falling from heights</li>
                                                <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-amber-500" /> Being struck by falling objects</li>
                                                <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-amber-500" /> Improper safety leverage</li>
                                            </ul>
                                        </div>
                                        <div className="p-8 bg-black/40 border-l-4 border-l-blue-600 rounded-r-3xl space-y-4">
                                            <h4 className="text-white font-bold uppercase text-xs tracking-widest">Statutory Protections</h4>
                                            <ul className="text-[11px] space-y-2 font-black text-slate-500 uppercase">
                                                <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-blue-500" /> Non-delegable duty of safety</li>
                                                <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-blue-500" /> Comparative negligence bypass</li>
                                                <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-blue-500" /> Automatic owner liability</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p className="text-sm border-t border-white/5 pt-8 italic italic font-bold text-amber-500">
                                        "Under Section 240, if a safety device fails or is not provided, the owner is liable regardless of the worker's own actions."
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 3. OSHA Fatal Four Matrix */}
                        <div className="space-y-12">
                            <h2 className="text-4xl font-black text-white italic tracking-tighter uppercase leading-none">OSHA Fatal Four <br /><span className="text-amber-500">Hazard Matrix.</span></h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                {[
                                    { title: "Falls", val: "33.5%", icon: Building2, color: "text-amber-500", desc: "Unprotected edges, scaffolds, and ladders." },
                                    { title: "Struck by Object", val: "11.1%", icon: Gavel, color: "text-orange-500", desc: "Falling materials, equipment, or vehicle strikes." },
                                    { title: "Electrocution", val: "8.5%", icon: Zap, color: "text-yellow-400", desc: "Overhead power lines, ground faults, LOTO." },
                                    { title: "Caught-In/Between", val: "5.5%", icon: Hammer, color: "text-red-500", desc: "Trench collapse, machinery entanglement." }
                                ].map((hazard, i) => (
                                    <div key={i} className="flex gap-6 p-8 bg-slate-900 border border-white/5 rounded-[2.5rem] group hover:bg-white/[0.02] transition-all">
                                        <div className={`p-4 bg-white/5 rounded-2xl ${hazard.color} group-hover:scale-110 transition-transform`}>
                                            <hazard.icon className="w-8 h-8" />
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm font-black text-white uppercase italic">{hazard.title}</span>
                                                <span className={`${hazard.color} font-black italic`}>{hazard.val}</span>
                                            </div>
                                            <p className="text-[10px] text-slate-500 font-bold uppercase leading-relaxed">{hazard.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 4. Forensic Settlement Matrix 2026 */}
                        <div className="space-y-12">
                            <h2 className="text-4xl font-black text-white italic tracking-tighter uppercase leading-none">Settlement <br /><span className="text-amber-500">Valuation Benchmarks.</span></h2>
                            <div className="bg-slate-900 border border-white/5 rounded-[3.5rem] overflow-hidden shadow-2xl">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="bg-black/60 border-b border-white/5">
                                            <th className="p-8 text-[10px] font-black uppercase tracking-widest text-slate-500 italic">Injury Profile</th>
                                            <th className="p-8 text-[10px] font-black uppercase tracking-widest text-slate-500 italic text-center">Standard Range</th>
                                            <th className="p-8 text-[10px] font-black uppercase tracking-widest text-slate-500 italic text-right">Expert S-Class Ceiling</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5">
                                        {CONSTRUCTION_2026.injuryTypes.map((type, i) => (
                                            <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                                                <td className="p-8">
                                                    <div className="space-y-1">
                                                        <p className="text-sm font-black text-white italic uppercase tracking-tighter group-hover:text-amber-400 transition-colors">{type.name}</p>
                                                        <p className="text-[9px] text-slate-600 font-bold uppercase">{type.description}</p>
                                                    </div>
                                                </td>
                                                <td className="p-8 text-center">
                                                    <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{formatCurrency(type.base * 0.5)} - {formatCurrency(type.base)}</span>
                                                </td>
                                                <td className="p-8 text-right">
                                                    <span className="text-lg font-black text-amber-500 italic tracking-tighter">{formatCurrency(type.base * 3.5)}+</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Trust & CTAs */}
                    <div className="lg:col-span-4 space-y-12">
                        <div className="p-10 bg-slate-900 border border-white/10 rounded-[3.5rem] space-y-8 shadow-2xl top-32 sticky">
                            <div className="space-y-4">
                                <h4 className="text-xs font-black text-white uppercase tracking-widest border-b border-white/5 pb-4">Forensic Intelligence</h4>
                                <ul className="space-y-6">
                                    {[
                                        { text: "NY Labor Law Section 240/241 Multipliers", icon: Gavel },
                                        { text: "OSHA Violation Penalty Sync 2026", icon: Shield },
                                        { text: "Third-Party Negligence Discovery", icon: Target },
                                        { text: "Forensic Medical Staging Audit", icon: Stethoscope }
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-4 items-start group">
                                            <div className="p-2 bg-amber-500/10 rounded-xl text-amber-400 group-hover:scale-110 transition-transform">
                                                <item.icon className="w-4 h-4" />
                                            </div>
                                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-[1.6] group-hover:text-slate-300 transition-colors">{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link href="/construction-accident/construction-calculator" className="block w-full bg-amber-600 hover:bg-amber-500 text-white text-center py-6 rounded-2xl font-black text-xs uppercase tracking-widest transition-all hover:scale-[1.03] shadow-xl italic">
                                Run Forensic Settlement Audit <ArrowRight className="inline w-4 h-4 ml-1 text-white" />
                            </Link>

                            <div className="pt-8 border-t border-white/5">
                                <div className="flex items-center gap-3 mb-4">
                                    <Activity className="w-4 h-4 text-emerald-500" />
                                    <span className="text-[10px] font-black text-white uppercase tracking-widest italic">MDL Data Sync ACTIVE</span>
                                </div>
                                <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest leading-loose italic">
                                    "92% of high-value construction settlements involve documented OSHA violations during the 'Fatal Four' window."
                                </p>
                            </div>
                        </div>

                        <div className="p-10 bg-black/40 border border-white/5 rounded-[3rem] space-y-4">
                            <div className="flex items-center gap-2">
                                <Info className="w-4 h-4 text-amber-500" />
                                <span className="text-[10px] font-black text-white uppercase tracking-widest">Legal Disclaimer</span>
                            </div>
                            <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest leading-[2] italic">
                                Construction law is jurisdictionally specific. Labor Law 240 applies predominately in New York. Consult with a qualified construction accident attorney for an official case forensic audit.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Navigation */}
            <section className="max-w-7xl mx-auto px-6 border-t border-white/5 pt-24 pb-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black text-slate-600 uppercase tracking-[0.3em]">
                    <div className="flex items-center gap-3">
                        <HardHat className="w-5 h-5 text-amber-500" />
                        <span>S-Class Safety Hub</span>
                    </div>
                    <div className="flex gap-8">
                        <Link href="/construction-accident/construction-calculator" className="hover:text-amber-400 transition-colors">Forensic Calculator</Link>
                        <Link href="/wrongful-death" className="hover:text-amber-400 transition-colors">Death Claims</Link>
                        <Link href="/spinal-cord" className="hover:text-amber-400 transition-colors">Spinal Cases</Link>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 pt-12">
                <div className="flex justify-center border-t border-white/5 pt-12">
                    <div className="w-full max-w-sm"><RelatedCalculators currentCalc="construction-accident" count={5} /></div>
                </div>
            </section>
        </div>
    );
}
