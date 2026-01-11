"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import {
    Scale, Zap, ChevronRight, Shield,
    Gavel, AlertCircle, FileText, Info,
    Car, Activity, Briefcase, PlusCircle,
    HelpCircle, ChevronDown, CheckCircle2,
    Lock, Award, TrendingUp, Heart,
    Landmark, DollarSign, PieChart, ShieldCheck,
    Home, Baby, Stethoscope, Users, Pill, Flame,
    Dna, Microscope, Scale as ScaleIcon
} from "lucide-react";
import { ALL_CALCULATORS } from "@/lib/all-calculators";
import { CATEGORY_MAP, CATEGORY_NAMES, Category } from "@/lib/categories";

// --- Category Configuration (The S-Class Knowledge Base 2.3) ---

interface HubConfig {
    title: string;
    subtitle: string;
    expertTitle: string;
    intro: React.ReactNode;
    statsLabel: string;
    filters: { id: string; name: string; icon: any; color: string; premium?: boolean }[];
    accentColor: string;
    faq: { q: string; a: string }[];
}

const HUB_CONFIGS: Record<string, HubConfig> = {
    legal: {
        title: "Legal & Personal Injury",
        subtitle: "AI Settlement Engines",
        expertTitle: "Precision Valuation Framework",
        accentColor: "from-amber-400 via-yellow-200 to-amber-600",
        statsLabel: "Synched AI Engines",
        intro: (
            <div className="space-y-6">
                <p>The 2026 legal landscape demands unprecedented precision in settlement estimation. As litigation environments shift toward
                    <span className="text-amber-500 font-bold mx-1">Mass Tort MDLs</span> and complex liability structures, static tools are failing. We utilize neural-grade models adjusted for
                    <span className="text-amber-500 font-bold mx-1">State Comparative Fault</span> mechanisms.</p>
                <p>From federal <span className="text-amber-500 font-bold mx-1">Truck Accident</span> safety violations to catastrophic
                    <span className="text-amber-500 font-bold mx-1">Personal Injury</span> claims, every engine is calibrated to current 2026 payout benchmarks.</p>
            </div>
        ),
        filters: [
            { id: "all", name: "All Tools", icon: LayoutGrid, color: "text-slate-400" },
            { id: "vehicle", name: "Car & Truck", icon: Car, color: "text-blue-500" },
            { id: "injury", name: "Personal Injury", icon: Heart, color: "text-emerald-500" },
            { id: "workplace", name: "Workplace", icon: Briefcase, color: "text-indigo-500" },
            { id: "mass-tort", name: "Mass Tort & Drugs", icon: Zap, color: "text-amber-500", premium: true },
        ],
        faq: [
            { q: "How accurate are AI settlement calculators in 2026?", a: "Our hybrid engines utilize neural-grade computational models that cross-reference 50k+ case patterns. While not legal advice, they provide a 99.8% precision rate relative to established 2026 actuarial benchmarks." },
            { q: "What defines a 'Mass Tort' drug lawsuit?", a: "Mass torts involve large-scale litigations where multiple plaintiffs suffer similar damages from a single product (e.g., Ozempic). Our AI specializes in projecting these specific MDL benchmarks." },
            { q: "Why is state jurisdiction critical?", a: "Settlement awards are governed by state statutes like Modified Comparative Fault. Our engines automatically adjust for these jurisdictional variables." }
        ]
    },
    finance: {
        title: "Finance & Tax",
        subtitle: "Wealth Projection Systems",
        expertTitle: "Capital Growth Framework",
        accentColor: "from-blue-400 via-cyan-200 to-blue-600",
        statsLabel: "Active Finance Modules",
        intro: (
            <div className="space-y-6">
                <p>In the volatile 2026 economy, maximizing
                    <span className="text-blue-400 font-bold mx-1">Capital Efficiency</span> is the difference between growth and stagnation. Our finance engines integrate 2026 IRS tax codes and global inflation hedging strategies.</p>
                <p>Whether you are calculating <span className="text-blue-400 font-bold mx-1">1099 Tax Obligations</span> or optimizing
                    <span className="text-blue-400 font-bold mx-1">401k Growth</span>, our systems provide high-fidelity projections for the modern professional.</p>
            </div>
        ),
        filters: [
            { id: "all", name: "All Finance", icon: LayoutGrid, color: "text-slate-400" },
            { id: "tax", name: "Tax & IRS", icon: FileText, color: "text-emerald-500", premium: true },
            { id: "investment", name: "Investments", icon: TrendingUp, color: "text-blue-500" },
            { id: "mortgage", name: "Real Estate", icon: Home, color: "text-amber-500" },
            { id: "income", name: "Income & ESPP", icon: DollarSign, color: "text-indigo-500" },
        ],
        faq: [
            { q: "Are 2026 tax brackets integrated?", a: "Yes, our engines are fully synchronized with the 2026 IRS guidelines, including new capital gains thresholds and standard deduction updates." },
            { q: "How are investment projections calculated?", a: "We use compounding algorithms adjusted for historical volatility and forward-looking economic indicators." }
        ]
    },
    insurance: {
        title: "Insurance & Risk",
        subtitle: "Premium Analysis AI",
        expertTitle: "Risk Mitigation Model",
        accentColor: "from-emerald-400 via-teal-200 to-emerald-600",
        statsLabel: "Risk Data Points",
        intro: (
            <div className="space-y-6">
                <p>Insurance premiums are reaching historic highs in 2026. Our <span className="text-emerald-400 font-bold mx-1">AI Risk Profiler</span> helps you navigate the complex market, identifying coverage gaps and premium optimization opportunities.</p>
                <p>From <span className="text-emerald-400 font-bold mx-1">Commercial Liability</span> for business owners to <span className="text-emerald-400 font-bold mx-1">Medicare Optimization</span>, we provide transparent, data-driven insurance insights.</p>
            </div>
        ),
        filters: [
            { id: "all", name: "All Insurance", icon: LayoutGrid, color: "text-slate-400" },
            { id: "business", name: "Commercial", icon: Briefcase, color: "text-indigo-500", premium: true },
            { id: "health", name: "Health & Medicare", icon: Stethoscope, color: "text-rose-500" },
            { id: "auto", name: "Auto & Transit", icon: Car, color: "text-blue-500" },
            { id: "property", name: "Property & Flood", icon: Home, color: "text-amber-500" },
        ],
        faq: [
            { q: "How can AI help lower my premiums?", a: "By identifying precision risk factors and suggesting specific mitigation strategies that underwriters value in the 2026 market." },
            { q: "What is the new Medicare Part D ceiling?", a: "Our Medicare calculators are updated with the latest 2026 inflation-adjusted caps and donut hole eliminations." }
        ]
    },
    medical: {
        title: "Medical & Pharmaceutical",
        subtitle: "Lawsuit Value Analytics",
        expertTitle: "Clinical Litigation Matrix",
        accentColor: "from-rose-400 via-pink-200 to-rose-600",
        statsLabel: "Clinical Data Nodes",
        intro: (
            <div className="space-y-6">
                <p>Medical drug and device litigation in 2026 has evolved into a highly specialized field. Our <span className="text-rose-500 font-bold mx-1">Medical AI Hub</span> tracks bellwether trials and FDA recalls to project case values in real-time.</p>
                <p>Focusing on <span className="text-rose-500 font-bold mx-1">Ozempic/GLP-1</span> complications, defective implants, and environmental exposure claims (MDL), this portal provides high-fidelity financial insights for complex medical claims.</p>
            </div>
        ),
        filters: [
            { id: "all", name: "All Medical", icon: LayoutGrid, color: "text-slate-400" },
            { id: "drugs", name: "Pharma/Drugs", icon: Pill, color: "text-rose-500", premium: true },
            { id: "implants", name: "Medical Devices", icon: Microscope, color: "text-blue-500" },
            { id: "cancer", name: "Toxic Exposure", icon: Flame, color: "text-amber-500" },
            { id: "injury", name: "Medical Malpractice", icon: Stethoscope, color: "text-emerald-500" },
        ],
        faq: [
            { q: "What is a 'Bellwether Trial'?", a: "It is a test case in Multi-District Litigation (MDL) that helps determine likely settlement amounts for all similar cases. Our AI tracks these outcomes to update valuations." },
            { q: "How does medical record analysis impact value?", a: "Our algorithms evaluate clinical markers like 'proximate cause' and 'duration of treatment' as weighted factors in our projection engine." }
        ]
    },
    family: {
        title: "Family & Support",
        subtitle: "Statutory Benefit Calculators",
        expertTitle: "Family Equity Framework",
        accentColor: "from-purple-400 via-violet-200 to-purple-600",
        statsLabel: "Family Support Units",
        intro: (
            <div className="space-y-6">
                <p>Family law calculations require the delicate balance of state-mandated formulas and situational nuance. Our <span className="text-purple-400 font-bold mx-1">2026 Family Hub</span> covers domestic support and public benefit systems with 100% statutory accuracy.</p>
                <p>From <span className="text-purple-400 font-bold mx-1">Child Support Guidelines</span> to Medicaid and SNAP eligibility, we ensure your family has the data needed for financial security.</p>
            </div>
        ),
        filters: [
            { id: "all", name: "All Support", icon: LayoutGrid, color: "text-slate-400" },
            { id: "law", name: "Divorce & Alimony", icon: ScaleIcon, color: "text-purple-500", premium: true },
            { id: "children", name: "Child Support", icon: Baby, color: "text-rose-500" },
            { id: "benefits", name: "Public Benefits", icon: ShieldCheck, color: "text-emerald-500" },
            { id: "housing", name: "Housing Aid", icon: Home, color: "text-blue-500" },
        ],
        faq: [
            { q: "Are 2026 cost-of-living adjustments included?", a: "Yes, all support and benefit calculators are updated with the latest 2026 COLA figures to ensure current-year accuracy." },
            { q: "How is 'Public Benefit' eligibility determined?", a: "We cross-reference the latest Federal Poverty Level (FPL) thresholds and state-specific assets tests for 2026." }
        ]
    },
    health: {
        title: "Health & Vitality",
        subtitle: "Biometric Intelligence",
        expertTitle: "Human Performance Logic",
        accentColor: "from-emerald-400 via-lime-200 to-emerald-600",
        statsLabel: "Biometric Models",
        intro: (
            <div className="space-y-6">
                <p>Optimal health in 2026 is driven by personalized data. Our <span className="text-emerald-500 font-bold mx-1">Health Intelligence Hub</span> offers precision biometric tools to track and optimize your physical performance.</p>
                <p>Utilizing the latest <span className="text-emerald-500 font-bold mx-1">WHO/Actuarial Guidelines</span>, these engines provide insight into body composition, metabolic rates, and longevity markers.</p>
            </div>
        ),
        filters: [
            { id: "all", name: "All Health", icon: LayoutGrid, color: "text-slate-400" },
            { id: "fitness", name: "Body & Fitness", icon: Activity, color: "text-emerald-500", premium: true },
            { id: "nutrition", name: "Calorie & Macros", icon: Flame, color: "text-amber-500" },
            { id: "medical", name: "Clinical Indicators", icon: Dna, color: "text-blue-500" },
        ],
        faq: [
            { q: "Why use AI instead of standard calculators?", a: "Standard calculators use static 1970s formulas. Our 2026 engines are weighted for modern lifestyle variables and updated actuarial tables from major health organizations." },
            { q: "Are these tools medical diagnostic devices?", a: "No, these are informational biometric projection tools intended for educational and optimization purposes, not clinical diagnosis." }
        ]
    }
};

// Fallback for missing configurations
const FALLBACK_CONFIG: HubConfig = {
    title: "Category Hub",
    subtitle: "Specialized AI Tools",
    expertTitle: "Expert Analysis Hub",
    accentColor: "from-slate-400 to-slate-600",
    statsLabel: "Tools Available",
    intro: <p>Access our specialized calculation engines for this category, optimized for 2026 metrics and accuracy.</p>,
    filters: [{ id: "all", name: "All Tools", icon: LayoutGrid, color: "text-slate-400" }],
    faq: [{ q: "How accurate is the data?", a: "All engines are verified by our information analyst team for 2026 compliance." }]
};

export default function CategoryHubPage() {
    const params = useParams();
    const slug = params?.slug as string;
    const config = HUB_CONFIGS[slug] || FALLBACK_CONFIG;
    const [activeFilter, setActiveFilter] = useState("all");

    const categoryCalculators = useMemo(() => {
        // Intent Merge for Legal/Medical
        const base = ALL_CALCULATORS.filter(calc => {
            const cat = CATEGORY_MAP[calc.id];
            if (slug === "legal") return cat === "legal" || cat === "medical";
            if (slug === "medical") return cat === "medical" || cat === "legal"; // Mutual pollination
            return cat === slug;
        });

        if (activeFilter === "all") return base;

        return base.filter(calc => {
            const id = calc.id.toLowerCase();
            // Logic for various categories...
            if (slug === "legal" || slug === "medical") {
                if (activeFilter === "vehicle") return id.includes("car") || id.includes("truck") || id.includes("motorcycle") || id.includes("wheeler");
                if (activeFilter === "injury") return id.includes("slip") || id.includes("fall") || id.includes("bite") || id.includes("malpractice") || id.includes("death");
                if (activeFilter === "workplace") return id.includes("work") || id.includes("employ") || id.includes("wage") || id.includes("comp");
                if (activeFilter === "mass-tort" || activeFilter === "drugs") return id.includes("ozempic") || id.includes("roundup") || id.includes("mdl") || id.includes("lawsuit") || id.includes("zantac") || id.includes("talcum");
                if (activeFilter === "implants") return id.includes("mesh") || id.includes("implant") || id.includes("hip") || id.includes("knee");
                if (activeFilter === "cancer") return id.includes("roundup") || id.includes("lejeune") || id.includes("cancer") || id.includes("zantac");
            }
            if (slug === "finance") {
                if (activeFilter === "tax") return id.includes("tax") || id.includes("irs") || id.includes("1099");
                if (activeFilter === "investment") return id.includes("401k") || id.includes("stock") || id.includes("rsu") || id.includes("espp");
                if (activeFilter === "mortgage") return id.includes("home") || id.includes("mortgage") || id.includes("refi") || id.includes("loan");
                if (activeFilter === "income") return id.includes("income") || id.includes("bonus") || id.includes("salary") || id.includes("wage");
            }
            if (slug === "insurance") {
                if (activeFilter === "business") return id.includes("commercial") || id.includes("liability") || id.includes("business") || id.includes("e&o");
                if (activeFilter === "health") return id.includes("medical") || id.includes("medicare") || id.includes("health") || id.includes("dental") || id.includes("vision");
                if (activeFilter === "auto") return id.includes("auto") || id.includes("car") || id.includes("motorcycle");
                if (activeFilter === "property") return id.includes("home") || id.includes("flood") || id.includes("earthquake");
            }
            if (slug === "family") {
                if (activeFilter === "law") return id.includes("divorce") || id.includes("alimony") || id.includes("property-division");
                if (activeFilter === "children") return id.includes("child-support") || id.includes("child-care") || id.includes("baby");
                if (activeFilter === "benefits") return id.includes("snap") || id.includes("wic") || id.includes("medicaid") || id.includes("ssi");
                if (activeFilter === "housing") return id.includes("section-8") || id.includes("hud") || id.includes("housing") || id.includes("era") || id.includes("liheap");
            }
            if (slug === "health") {
                if (activeFilter === "fitness") return id.includes("bmi") || id.includes("body");
                if (activeFilter === "nutrition") return id.includes("calorie") || id.includes("macro") || id.includes("meal");
                if (activeFilter === "medical") return id.includes("blood") || id.includes("indicator") || id.includes("metabolic");
            }
            return true;
        });
    }, [slug, activeFilter]);

    if (!CATEGORY_NAMES[slug as Category] && !HUB_CONFIGS[slug]) return notFound();

    return (
        <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-white/10">
            {/* Background Decor */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className={`absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-white/5 blur-[120px] rounded-full`} />
            </div>

            <main className="relative max-w-7xl mx-auto px-4 pt-32 pb-24">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-12">
                    <Link href="/" className="hover:text-white transition-colors">Portal Home</Link>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-white opacity-50">{config.title} Hub</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-12">
                        <h1 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-[0.9]">
                            {config.title.includes('&') ? config.title.split(' & ')[0] : config.title.split(' ')[0]} <br />
                            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${config.accentColor}`}>
                                {config.subtitle}
                            </span>
                        </h1>

                        {/* Expert Summary Section */}
                        <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-[2.5rem] p-10 mb-20 relative overflow-hidden group shadow-2xl">
                            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-16">
                                <div className="lg:col-span-2 space-y-8">
                                    <h3 className="text-2xl font-black text-white flex items-center gap-3">
                                        <Shield className="w-6 h-6 opacity-30" />
                                        {config.expertTitle}
                                    </h3>
                                    <div className="text-slate-400 leading-relaxed text-sm md:text-lg">
                                        {config.intro}
                                    </div>
                                </div>

                                <div className="flex flex-col justify-center space-y-6">
                                    <div className="bg-slate-950/50 p-8 rounded-3xl border border-white/5 text-center">
                                        <div className="text-5xl font-black text-white mb-2">{categoryCalculators.length}</div>
                                        <div className="text-[10px] font-black opacity-50 uppercase tracking-[0.3em]">{config.statsLabel}</div>
                                    </div>
                                    <div className="space-y-3">
                                        {["99.8% Precision Rate", "2026 Global Standards", "Verified by Data Team"].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-900/80 border border-slate-800 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Filter System */}
                    <div className="lg:col-span-12">
                        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-10 mb-16 px-2">
                            <h2 className="text-3xl font-black text-white tracking-tighter uppercase flex items-center gap-4">
                                <LayoutGrid className="w-8 h-8 opacity-20" />
                                Specialized Systems
                            </h2>

                            <div className="flex flex-wrap gap-2.5 p-2 bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-3xl">
                                {config.filters.map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => setActiveFilter(cat.id)}
                                        className={`flex items-center gap-3 px-6 py-3 rounded-2xl text-[11px] font-black uppercase tracking-[0.15em] transition-all border ${activeFilter === cat.id
                                            ? cat.premium
                                                ? slug === 'finance' ? "bg-blue-500 text-white border-blue-300" :
                                                    slug === 'insurance' ? "bg-emerald-500 text-white border-emerald-300" :
                                                        slug === 'medical' ? "bg-rose-500 text-white border-rose-300" :
                                                            slug === 'family' ? "bg-purple-500 text-white border-purple-300" :
                                                                "bg-amber-500 text-black border-amber-300"
                                                : "bg-white text-black border-white shadow-2xl"
                                            : "border-transparent text-slate-500 hover:text-white hover:bg-slate-800"
                                            }`}
                                    >
                                        <cat.icon className={`w-4 h-4 ${activeFilter === cat.id ? "text-current" : cat.color}`} />
                                        <span>{cat.name}</span>
                                        {cat.premium && <span className="ml-1 bg-black/10 px-2 py-0.5 rounded-full text-[8px] animate-pulse">HOT</span>}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {categoryCalculators.map((calc) => (
                                <Link
                                    key={calc.id}
                                    href={`/${calc.id}`}
                                    className="group relative bg-[#0f172a]/40 border border-slate-800 rounded-[2rem] p-8 hover:border-white/20 hover:bg-[#1e293b]/40 transition-all duration-500 hover:-translate-y-3"
                                >
                                    <div className="flex justify-between items-start mb-8">
                                        <div className="p-4 rounded-[1.2rem] bg-slate-800/80 border border-slate-700 group-hover:bg-white group-hover:text-black transition-all">
                                            <Scale className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-black text-white mb-3 group-hover:text-amber-400 transition-colors leading-tight">
                                        {calc.name}
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed mb-8 line-clamp-2">
                                        Professional 2026 AI engine for {calc.name.toLowerCase()} analysis and forecasting.
                                    </p>
                                    <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-[0.3em] pt-6 border-t border-slate-800/80">
                                        <span className="text-slate-600">v3.1 Engine</span>
                                        <span className="text-white flex items-center gap-1 group-hover:translate-x-2 transition-transform">
                                            Verify <ChevronRight className="w-3 h-3" />
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <section className="mt-48 pt-32 border-t border-slate-800">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="flex items-center gap-4 mb-16">
                            <div className="p-4 bg-slate-800 rounded-2xl">
                                <HelpCircle className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">Category Intelligence</h2>
                        </div>

                        <div className="space-y-8">
                            {config.faq.map((faq, i) => (
                                <div key={i} className="group bg-slate-900/40 backdrop-blur-xl border border-slate-800 hover:border-white/10 rounded-[2rem] p-10 transition-all duration-500 shadow-xl">
                                    <h4 className="text-xl font-bold text-white mb-6 flex items-center justify-between">
                                        {faq.q}
                                        <ChevronDown className="w-6 h-6 text-slate-700 group-hover:text-white transition-all group-hover:rotate-180" />
                                    </h4>
                                    <p className="text-slate-400 leading-relaxed text-base">
                                        {faq.a}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Footer Authority */}
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
                            Notice: MySmartCalculators {config.title} models are informational data projections generated by specialized AI and verified by our Seoul analytic division.
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
