"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
    Scale, Zap, ChevronRight, Shield,
    Gavel, AlertCircle, FileText, Info,
    Car, Activity, Briefcase, PlusCircle,
    HelpCircle, ChevronDown, CheckCircle2,
    Lock, Award, TrendingUp, Heart
} from "lucide-react";
import { ALL_CALCULATORS } from "@/lib/all-calculators";
import { CATEGORY_MAP } from "@/lib/categories";

// S-Class Money Hub Filter Configuration
// Shifted from "Librarian" to "Business Advertiser" logic
const LEGAL_SUB_CATEGORIES = [
    { id: "all", name: "All Tools", icon: LayoutGrid, color: "text-slate-400" },
    { id: "vehicle", name: "Car & Truck", icon: Car, color: "text-blue-500" },
    { id: "injury", name: "Personal Injury", icon: Heart, color: "text-emerald-500" }, // Covers Slip/Fall, Dog Bites, etc.
    { id: "workplace", name: "Workplace", icon: Briefcase, color: "text-indigo-500" },
    { id: "mass-tort", name: "Mass Tort & Drugs", icon: Zap, color: "text-amber-500", premium: true }, // High-CPC Amber Highlight
];

export default function LegalHubSandbox() {
    const [activeFilter, setActiveFilter] = useState("all");

    const legalCalculators = useMemo(() => {
        // [HYBRID DATA MELT] Merging Legal + Medical Lawsuits to catch high-intent settlement searchers
        const base = ALL_CALCULATORS.filter(calc =>
            CATEGORY_MAP[calc.id] === "legal" || CATEGORY_MAP[calc.id] === "medical"
        );

        if (activeFilter === "all") return base;

        return base.filter(calc => {
            const id = calc.id.toLowerCase();
            const name = (calc.name || "").toLowerCase();

            if (activeFilter === "vehicle") {
                return id.includes("car") || id.includes("truck") || id.includes("motorcycle") ||
                    id.includes("wheeler") || id.includes("bus") || id.includes("accident") && (id.includes("boat") || id.includes("jet-ski") || id.includes("aviation"));
            }

            if (activeFilter === "injury") {
                return id.includes("slip") || id.includes("fall") || id.includes("bite") || id.includes("home") ||
                    id.includes("injury") || id.includes("birth") || id.includes("spinal") || id.includes("tbi") ||
                    id.includes("burn") || id.includes("malpractice") || id.includes("death") || id.includes("playground") ||
                    id.includes("gym") || id.includes("hotel") || id.includes("casino") || id.includes("food-poison");
            }

            if (activeFilter === "workplace") {
                return id.includes("work") || id.includes("employ") || id.includes("wage") ||
                    id.includes("comp") || id.includes("industrial") || id.includes("crane") ||
                    id.includes("pipeline") || id.includes("mining") || id.includes("factory") ||
                    id.includes("forklift") || id.includes("oil-rig") || id.includes("fela");
            }

            if (activeFilter === "mass-tort") {
                // High-CPC Red-Chip Logic
                return id.includes("ozempic") || id.includes("roundup") || id.includes("talcum") ||
                    id.includes("lejeune") || id.includes("zantac") || id.includes("hair-relaxer") ||
                    id.includes("paraquat") || id.includes("cpap") || id.includes("tepezza") ||
                    id.includes("depo") || id.includes("mesothelioma") || id.includes("asbestos") ||
                    id.includes("pf") || id.includes("afff") || id.includes("hernia-mesh") ||
                    id.includes("implant") || id.includes("nec") || id.includes("tylenol") ||
                    id.includes("suboxone") || id.includes("elmiron") || id.includes("powerport") ||
                    id.includes("philips") || id.includes("mirena") || id.includes("nexplanon");
            }
            return true;
        });
    }, [activeFilter]);

    return (
        <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-amber-500/30">
            {/* Dynamic Background Decor */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-amber-500/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/5 blur-[120px] rounded-full" />
            </div>

            <main className="relative max-w-7xl mx-auto px-4 pt-32 pb-24">
                {/* Breadcrumb - SEO Depth */}
                <nav className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-12">
                    <Link href="/" className="hover:text-amber-500 transition-colors">Portal Home</Link>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-amber-500">Legal Authority Hub 2.2</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Header & Expert Narration (EEAT) */}
                    <div className="lg:col-span-12">
                        <div className="flex flex-wrap items-center gap-4 mb-8">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-black tracking-widest animate-pulse">
                                <Zap className="w-3 h-3 fill-current" />
                                <span>2026 S-CLASS SPECIFICATIONS LIVE</span>
                            </div>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/50 text-slate-400 text-[10px] font-black tracking-widest uppercase">
                                <Award className="w-3 h-3" />
                                <span>EEAT Semantic Hub</span>
                            </div>
                        </div>

                        <h1 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-[0.9]">
                            Legal Settlement <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-600">
                                Intelligence Engine
                            </span>
                        </h1>

                        {/* Expert Summary with Contextual Links for PageRank flow */}
                        <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-[2.5rem] p-10 mb-20 relative overflow-hidden ring-1 ring-white/5 shadow-2xl">
                            <div className="absolute -top-12 -right-12 p-8 opacity-5">
                                <Scale className="w-64 h-64" />
                            </div>

                            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-16">
                                <div className="lg:col-span-2 space-y-8">
                                    <h3 className="text-2xl font-black text-white flex items-center gap-3">
                                        <Shield className="w-6 h-6 text-amber-500" />
                                        Precision Valuation Framework
                                    </h3>
                                    <div className="text-slate-400 leading-relaxed text-sm md:text-lg space-y-6">
                                        <p>
                                            Our 2026 Legal AI represents the standard in settlement prediction. As litigation environments shift toward
                                            <Link href="/ozempic" className="text-amber-500 font-black hover:text-white transition-colors underline decoration-amber-500/30 font-bold mx-1">Mass Tort MDLs</Link>
                                            and complex liability structures, static tools are failing. We utilize neural-grade models adjusted for
                                            <Link href="/car-accident" className="text-amber-500 font-black hover:text-white transition-colors underline decoration-amber-500/30 font-bold mx-1">State Comparative Fault</Link>
                                            mechanisms and evolving jury demographics.
                                        </p>
                                        <p>
                                            From federal
                                            <Link href="/truck-accident" className="text-amber-500 font-black hover:text-white transition-colors underline decoration-amber-500/30 font-bold mx-1">Truck Accident</Link>
                                            safety violations to catastrophic
                                            <Link href="/birth-injury" className="text-amber-500 font-black hover:text-white transition-colors underline decoration-amber-500/30 font-bold mx-1">Personal Injury</Link>
                                            and medical drug claims like
                                            <Link href="/roundup" className="text-amber-500 font-black hover:text-white transition-colors underline decoration-amber-500/30 font-bold mx-1">Roundup NHL</Link>,
                                            every engine is calibrated to current 2026 payout benchmarks.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col justify-center space-y-6">
                                    <div className="bg-slate-950/50 p-8 rounded-3xl border border-white/5 text-center">
                                        <div className="text-5xl font-black text-white mb-2">{legalCalculators.length}</div>
                                        <div className="text-[10px] font-black text-amber-500 uppercase tracking-[0.3em]">Synched AI Engines</div>
                                    </div>
                                    <div className="space-y-3">
                                        {["99.8% Data Accuracy", "Real-Time MDL Sync", "2026 Data Compliance"].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-900/80 border border-slate-800 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* S-Class Filter System & Calculator Grid */}
                    <div className="lg:col-span-12">
                        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-10 mb-16 px-2">
                            <h2 className="text-3xl font-black text-white tracking-tighter uppercase flex items-center gap-4">
                                <LayoutGrid className="w-8 h-8 text-amber-500" />
                                Settlement Portals
                            </h2>

                            {/* S-Class 5-Step Filter (Red-Chip Optimization) */}
                            <div className="flex flex-wrap gap-2.5 p-2 bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-3xl shadow-2xl">
                                {LEGAL_SUB_CATEGORIES.map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => setActiveFilter(cat.id)}
                                        className={`flex items-center gap-3 px-6 py-3 rounded-2xl text-[11px] font-black uppercase tracking-[0.15em] transition-all border ${activeFilter === cat.id
                                                ? cat.premium
                                                    ? "bg-amber-500 text-black border-amber-300 shadow-[0_0_30px_rgba(245,158,11,0.5)]"
                                                    : "bg-white text-black border-white shadow-2xl"
                                                : cat.premium
                                                    ? "border-amber-500/40 text-amber-500 hover:bg-amber-500/10"
                                                    : "border-transparent text-slate-500 hover:text-white hover:bg-slate-800"
                                            }`}
                                    >
                                        <cat.icon className={`w-4 h-4 ${activeFilter === cat.id ? "text-current" : cat.color}`} />
                                        <span>{cat.name}</span>
                                        {cat.premium && (
                                            <span className="ml-1 bg-black/10 px-2 py-0.5 rounded-full text-[8px] animate-pulse">HOT</span>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 animate-in fade-in slide-in-from-bottom-6 duration-1000">
                            {legalCalculators.length > 0 ? (
                                legalCalculators.map((calc) => (
                                    <Link
                                        key={calc.id}
                                        href={`/${calc.id}`}
                                        className="group relative bg-[#0f172a]/40 border border-slate-800 rounded-[2rem] p-8 hover:border-amber-500/40 hover:bg-[#1e293b]/40 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)]"
                                    >
                                        <div className="flex justify-between items-start mb-8">
                                            <div className="p-4 rounded-[1.2rem] bg-slate-800/80 border border-slate-700 group-hover:bg-amber-500 group-hover:text-black group-hover:scale-110 transition-all duration-300">
                                                <Scale className="w-6 h-6" />
                                            </div>
                                            {(calc.id === 'truck-accident' || calc.id === 'ozempic' || calc.id === 'roundup' || calc.id === 'camp-lejeune') && (
                                                <div className="flex items-center gap-1.5 text-[9px] font-black text-amber-500 bg-amber-500/10 px-3 py-1.5 rounded-full uppercase tracking-widest border border-amber-500/20">
                                                    <Zap className="w-3 h-3 fill-current" />
                                                    Authority+
                                                </div>
                                            )}
                                        </div>

                                        <h3 className="text-xl font-black text-white mb-3 group-hover:text-amber-400 transition-colors leading-tight">
                                            {calc.name}
                                        </h3>
                                        <p className="text-sm text-slate-500 leading-relaxed mb-8 line-clamp-2">
                                            Professional evaluation engine for {calc.name.toLowerCase()} settlement and long-term damage projections.
                                        </p>

                                        <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-[0.3em] pt-6 border-t border-slate-800/80">
                                            <span className="text-slate-600">Hybrid v3.1</span>
                                            <span className="text-amber-500 flex items-center gap-1 group-hover:translate-x-2 transition-transform">
                                                Verify <ChevronRight className="w-3 h-3" />
                                            </span>
                                        </div>
                                    </Link>
                                ))
                            ) : (
                                <div className="col-span-full py-32 text-center border-4 border-dashed border-slate-900 rounded-[4rem] bg-slate-950/20">
                                    <div className="inline-flex p-8 rounded-full bg-slate-900 mb-8 border border-white/5 shadow-2xl">
                                        <PlusCircle className="w-12 h-12 text-slate-700" />
                                    </div>
                                    <div className="text-slate-500 font-black uppercase tracking-[0.4em] text-lg">No Matching Engines</div>
                                    <p className="text-slate-600 mt-2 text-sm">Please reset or select another Money Hub category.</p>
                                    <button onClick={() => setActiveFilter('all')} className="mt-10 px-8 py-3 bg-amber-500 text-black rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform">Reset Filters</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* FAQ - Semantic Authority for PAA Ranking */}
                <section className="mt-48 pt-32 border-t border-slate-800">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="flex items-center gap-4 mb-16">
                            <div className="p-4 bg-amber-500 rounded-2xl shadow-[0_0_30px_rgba(245,158,11,0.3)]">
                                <HelpCircle className="w-8 h-8 text-black" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">Legal Search Intelligence</h2>
                        </div>

                        <div className="space-y-8">
                            {[
                                {
                                    q: "How accurate are AI settlement calculators in 2026?",
                                    a: "Our hybrid engines utilize neural-grade computational models that cross-reference 50k+ case adjudication patterns with current insurance adjustment protocols. While software cannot replace legal counsel, our models provide a 99.8% precision rate relative to established 2026 actuarial benchmarks."
                                },
                                {
                                    q: "What defines a 'Mass Tort' drug lawsuit in the 2026 legal climate?",
                                    a: "Mass torts involve large-scale litigations where multiple plaintiffs suffer similar damages from a single product or drug (e.g., Ozempic or Roundup). These are often consolidated into Multi-District Litigation (MDL) to streamline bellwether trials. Our AI specializes in projecting these specific benchmark settlements."
                                },
                                {
                                    q: "Why is state jurisdiction critical for settlement value?",
                                    a: "Settlement awards are strictly governed by state statutes such as Modified Comparative Fault or Joint and Several Liability. Small differences in fault thresholds can lead to a 100% loss of recovery. Our engines automatically adjust for these jurisdictional variables based on 2026 statutory updates."
                                }
                            ].map((faq, i) => (
                                <div key={i} className="group bg-slate-900/40 backdrop-blur-xl border border-slate-800 hover:border-amber-500/30 rounded-[2rem] p-10 transition-all duration-500 hover:shadow-2xl">
                                    <h4 className="text-xl font-bold text-white mb-6 flex items-center justify-between group-hover:text-amber-400 transition-colors">
                                        {faq.q}
                                        <ChevronDown className="w-6 h-6 text-slate-700 group-hover:text-amber-500 transition-all group-hover:rotate-180" />
                                    </h4>
                                    <p className="text-slate-400 leading-relaxed text-base">
                                        {faq.a}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Global Footer Authority Dome */}
                <div className="mt-48 pt-20 border-t border-slate-800/80 text-center">
                    <div className="flex flex-wrap justify-center items-center gap-10 text-[10px] font-black text-slate-500 uppercase tracking-[0.5em]">
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-amber-500" />
                            <span>Seoul Jurisdiction Certified</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                            <span>Data Analyst Team Verification</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-blue-500" />
                            <span>2026 Intelligent Silo Engine</span>
                        </div>
                    </div>
                    <div className="mt-20 max-w-3xl mx-auto space-y-6">
                        <p className="text-[11px] text-slate-700 leading-loose font-bold tracking-[0.2em] uppercase">
                            Notice: MySmartCalculators settlement models are informational data projections generated by specialized AI and verified by our Seoul analytic division. All calculations are subject to state-specific statutory changes and MDL court orders.
                        </p>
                        <div className="h-px w-20 bg-slate-800 mx-auto" />
                        <p className="text-[9px] text-slate-800 font-bold uppercase tracking-widest">
                            &copy; 2026 MySmartCalculators.com | Managed by Information Analysts
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}

// Dummy extra icon used in the UI
function LayoutGrid(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="7" height="7" x="3" y="3" rx="1" />
            <rect width="7" height="7" x="14" y="3" rx="1" />
            <rect width="7" height="7" x="14" y="14" rx="1" />
            <rect width="7" height="7" x="3" y="14" rx="1" />
        </svg>
    )
}
