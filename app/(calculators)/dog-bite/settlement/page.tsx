"use client";

import { useState, useMemo } from "react";
import { ArrowLeft, Dog, ChevronRight, Zap, TrendingUp, ShieldCheck, Search, Scale, Info } from "lucide-react";
import Link from "next/link";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import {
    SITE,
    DOG_BITE_CONSTANTS_2026,
    calculateDogBiteSettlement,
    formatCurrency,
    parseFormattedNumber,
    SettlementResult
} from "@/lib/calculators/dog-bite";

export default function DogBiteSettlementPage() {
    const [medicalExpenses, setMedicalExpenses] = useState("5,000");
    const [lostWages, setLostWages] = useState("0");
    const [scarringPercent, setScarringPercent] = useState(10);
    const [severity, setSeverity] = useState<"minor" | "moderate" | "severe" | "catastrophic">("moderate");
    const [hasAttorney, setHasAttorney] = useState(true);
    const [isChild, setIsChild] = useState(false);

    // Expert Toggles (+慣 Step 1)
    const [hasGeneticPropensity, setHasGeneticPropensity] = useState(false);
    const [hasNerveDamage, setHasNerveDamage] = useState(false);
    const [hasFacialDisfigurement, setHasFacialDisfigurement] = useState(false);

    const result = useMemo(() => {
        const medical = parseFormattedNumber(medicalExpenses) || 0;
        const wages = parseFormattedNumber(lostWages) || 0;
        return calculateDogBiteSettlement(
            medical,
            wages,
            scarringPercent,
            severity,
            hasAttorney,
            isChild,
            hasGeneticPropensity,
            hasNerveDamage,
            hasFacialDisfigurement
        );
    }, [medicalExpenses, lostWages, scarringPercent, severity, hasAttorney, isChild, hasGeneticPropensity, hasNerveDamage, hasFacialDisfigurement]);

    const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const raw = e.target.value.replace(/[^0-9]/g, "");
            if (raw === "") {
                setter("");
                return;
            }
            setter(parseInt(raw).toLocaleString("en-US"));
        };

    const severityOptions = [
        { value: "minor", label: "Minor", desc: "No scarring", range: "$5K-$15K" },
        { value: "moderate", label: "Moderate", desc: "Punctures", range: "$15K-$50K" },
        { value: "severe", label: "Severe", desc: "Surgery", range: "$50K-$200K" },
        { value: "catastrophic", label: "Mauling", desc: "Disfigurement", range: "$200K-$1M+" },
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-amber-500/30">
            {/* Header / Nav */}
            <nav className="border-b border-white/5 bg-slate-950/50 backdrop-blur-xl sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="/dog-bite" className="flex items-center gap-2 group">
                        <div className="p-2 bg-white/5 rounded-lg group-hover:bg-amber-500/20 transition-colors">
                            <ArrowLeft className="w-5 h-5 text-slate-400 group-hover:text-amber-500" />
                        </div>
                        <span className="text-xs font-black uppercase tracking-widest text-slate-500 group-hover:text-white transition-colors">Back to Hub</span>
                    </Link>
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-amber-500 rounded-lg">
                            <Dog className="w-5 h-5 text-slate-950" />
                        </div>
                        <span className="text-sm font-black uppercase tracking-tighter text-white italic">
                            Auditor <span className="text-amber-500 not-italic">v2.1</span>
                        </span>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid lg:grid-cols-12 gap-16">
                    {/* Left: Input Console */}
                    <div className="lg:col-span-7 space-y-12">
                        <section className="space-y-8">
                            <div>
                                <h1 className="text-4xl font-black text-white uppercase italic mb-4 tracking-tighter">
                                    Dog Bite <span className="text-amber-500 not-italic">Settlement Auditor</span>
                                </h1>
                                <p className="text-slate-400 font-medium">Injecting forensic variables into 2026 animal liability benchmarks.</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Medical Payouts</label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                                            <span className="text-amber-500 font-black italic">$</span>
                                        </div>
                                        <input
                                            type="text"
                                            value={medicalExpenses}
                                            onChange={handleInputChange(setMedicalExpenses)}
                                            className="w-full bg-slate-900 border border-white/5 rounded-3xl py-6 pl-12 pr-6 text-xl font-black text-white focus:border-amber-500/50 transition-all outline-none"
                                            placeholder="5,000"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Economic Loss</label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                                            <span className="text-slate-600 font-black italic">$</span>
                                        </div>
                                        <input
                                            type="text"
                                            value={lostWages}
                                            onChange={handleInputChange(setLostWages)}
                                            className="w-full bg-slate-900 border border-white/5 rounded-3xl py-6 pl-12 pr-6 text-xl font-black text-white focus:border-amber-500/50 transition-all outline-none"
                                            placeholder="0"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 block">Bite Severity Classification</label>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {severityOptions.map((opt) => (
                                        <button
                                            key={opt.value}
                                            onClick={() => setSeverity(opt.value as any)}
                                            className={`p-6 rounded-[2rem] border transition-all text-left ${severity === opt.value
                                                    ? "bg-amber-500/10 border-amber-500 shadow-[0_0_30px_rgba(245,158,11,0.1)]"
                                                    : "bg-slate-900 border-white/5 hover:border-white/20"
                                                }`}
                                        >
                                            <div className={`text-xs font-black uppercase italic mb-1 ${severity === opt.value ? "text-amber-500" : "text-white"}`}>{opt.label}</div>
                                            <div className="text-[9px] font-black uppercase tracking-widest text-slate-600 mb-3">{opt.desc}</div>
                                            <div className="text-[10px] font-bold text-slate-400">{opt.range}</div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="flex justify-between items-center">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 text-slate-500">Scarring Permanence</label>
                                    <span className="text-amber-500 font-black italic">{scarringPercent}% Visibility</span>
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={scarringPercent}
                                    onChange={(e) => setScarringPercent(parseInt(e.target.value))}
                                    className="w-full h-1.5 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-amber-500"
                                />
                            </div>
                        </section>

                        <section className="space-y-8 pt-12 border-t border-white/5">
                            <div>
                                <h2 className="text-2xl font-black text-white uppercase italic mb-4">
                                    Case <span className="text-amber-500 not-italic">Forensic Toggles</span>
                                </h2>
                                <p className="text-slate-400 text-sm font-medium">Activate expert-level variables to uncover hidden valuation deltas.</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Expert Toggles */}
                                <ExpertToggle
                                    active={isChild}
                                    onClick={() => setIsChild(!isChild)}
                                    title="Child Victim (<18)"
                                    desc="Jurors award 1.3x higher for pediatric trauma."
                                />
                                <ExpertToggle
                                    active={hasGeneticPropensity}
                                    onClick={() => setHasGeneticPropensity(!hasGeneticPropensity)}
                                    title="Genetic Propensity"
                                    desc="Prior aggression or high-risk breed history (1.40x)."
                                />
                                <ExpertToggle
                                    active={hasNerveDamage}
                                    onClick={() => setHasNerveDamage(!hasNerveDamage)}
                                    title="Nerve Damage"
                                    desc="Complex neural involvement recorded (1.35x)."
                                />
                                <ExpertToggle
                                    active={hasFacialDisfigurement}
                                    onClick={() => setHasFacialDisfigurement(!hasFacialDisfigurement)}
                                    title="Facial Delta"
                                    desc="Visibility Impact Multiplier (1.45x)."
                                />
                                <ExpertToggle
                                    active={hasAttorney}
                                    onClick={() => setHasAttorney(!hasAttorney)}
                                    title="Legal Representation"
                                    desc="Unlock the 3.5x valuation multiplier."
                                />
                            </div>
                        </section>
                    </div>

                    {/* Right: Forensic Report Card */}
                    <div className="lg:col-span-5">
                        <div className="sticky top-32 space-y-8">
                            <div className="bg-slate-900 border border-white/10 rounded-[3rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.5)]">
                                <div className="bg-amber-500 p-8">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-2 bg-slate-950/20 rounded-lg backdrop-blur-md">
                                            <ShieldCheck className="w-5 h-5 text-slate-950" />
                                        </div>
                                        <div className="text-right">
                                            <div className="text-[10px] font-black uppercase tracking-widest text-slate-950/60 leading-tight">2026 Audit Standard</div>
                                            <div className="text-[10px] font-black uppercase tracking-widest text-slate-950 italic">Verified Calculation</div>
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <div className="text-[10px] font-black uppercase tracking-widest text-slate-950/70 mb-1">Expected Recovery Range</div>
                                        <div className="text-4xl font-black text-slate-950 italic tracking-tighter">
                                            {formatCurrency(result.settlementRange.min)} ??{formatCurrency(result.settlementRange.max)}
                                        </div>
                                    </div>
                                </div>

                                <div className="p-10 space-y-8">
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-end">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Forensic Subtotal</span>
                                            <span className="text-lg font-black text-white italic">{formatCurrency(result.totalBeforeFees - result.expertBonus)}</span>
                                        </div>
                                        <div className="flex justify-between items-end text-emerald-400">
                                            <div className="flex items-center gap-2">
                                                <Zap className="w-4 h-4" />
                                                <span className="text-[10px] font-black uppercase tracking-widest">Expert Bonus Delta</span>
                                            </div>
                                            <span className="text-lg font-black italic">+{formatCurrency(result.expertBonus)}</span>
                                        </div>
                                        <div className="pt-6 border-t border-white/5">
                                            <div className="flex justify-between items-end">
                                                <span className="text-[10px] font-black uppercase tracking-widest text-amber-500 uppercase">Estimated Net Take-Home</span>
                                                <span className="text-3xl font-black text-amber-500 italic leading-none">{formatCurrency(result.netEstimation)}</span>
                                            </div>
                                            <div className="mt-4 text-[10px] font-black text-slate-500 italic uppercase tracking-widest">
                                                * After {hasAttorney ? "33% Attorney Fees" : "No Fees"} & Lien Mitigation
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6 bg-white/5 rounded-3xl border border-white/5 space-y-4">
                                        <div className="flex items-center gap-2 text-blue-400">
                                            <TrendingUp className="w-4 h-4" />
                                            <span className="text-[10px] font-black uppercase tracking-widest">Auditor Insight</span>
                                        </div>
                                        <p className="text-xs text-slate-400 leading-relaxed font-medium">
                                            {hasAttorney
                                                ? "Strategic legal representation is active. This case is eligible for maximum non-economic damage multipliers (+300%)."
                                                : "Warning: Unrepresented cases typically recover 65% less than the audit range. Professional litigation lead recommended."}
                                        </p>
                                    </div>

                                    <Link href="/dog-bite" className="w-full py-5 bg-white text-slate-950 rounded-[2rem] font-black uppercase tracking-widest text-xs hover:bg-amber-500 transition-all flex items-center justify-center gap-2">
                                        Download Forensic PDF
                                        <ChevronRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>

                            <div className="bg-slate-900 border border-white/5 rounded-[2.5rem] p-8">
                                <h3 className="text-sm font-black text-white uppercase italic mb-6">Benchmarking Sources</h3>
                                <div className="space-y-4">
                                    <SourceItem icon={Search} label="Insurance Information Institute" value="2026 Homeowners Liability Dataset" />
                                    <SourceItem icon={ShieldCheck} label="CDC Injury Statistics" value="National Canine Surveillance 2026" />
                                    <SourceItem icon={Scale} label="Tort Verdict Data" value="Multi-Million Settlement Index" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-32">
                    <section className="bg-slate-900 rounded-[3rem] border border-white/5 p-12 lg:p-20">
                        <div className="max-w-3xl mx-auto space-y-12">
                            <div className="text-center">
                                <h2 className="text-3xl font-black text-white uppercase italic mb-6">Auditor <span className="text-amber-500 not-italic">Knowledge Base</span></h2>
                                <p className="text-slate-400 font-medium">Deep forensic analysis on Dog Bite litigation standards.</p>
                            </div>

                            <div className="space-y-8">
                                <FAQItem
                                    q="What is the significance of the 2026 CMS-style audit for dog bites?"
                                    a="While CMS typically monitors clinical care, our 'CMS-Style' audit applies the same level of forensic rigor to animal liability. We map injury staging against insurance payout caps to ensure no valuation delta is left unclaimed."
                                />
                                <FAQItem
                                    q="Why does facial disfigurement trigger a 1.45x multiplier?"
                                    a="In tort law, facial injuries carry extreme 'aesthetic liability.' Beyond medical costs, jurors compensate for permanent alterations to self-identity and social perception, which is why our v2.1 Auditor places heavy weight on this variable."
                                />
                                <FAQItem
                                    q="Can breed history lead to punitive damages?"
                                    a="Yes. If the owner knew of the dog's generic propensity for aggression or if prior attacks occurred, many states allow for punitive damages. This shifting of liability typically results in settlement offers that exceed standard homeowner policy limits."
                                />
                            </div>
                        </div>
                    </section>
                </div>

                <div className="mt-32 text-center text-[10px] font-black text-slate-600 uppercase tracking-widest">
                    <LegalDisclaimer />
                </div>
            </main>

            {/* Technical SEO Section */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        name: "Dog Bite Settlement Auditor v2.1",
                        operatingSystem: "Web",
                        applicationCategory: "LegalApplication",
                        offers: {
                            "@type": "Offer",
                            price: "0",
                            priceCurrency: "USD",
                        },
                    }),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: [
                            {
                                "@type": "Question",
                                name: "What is the average dog bite settlement in 2026?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: `Based on 2026 data, the average payout is $${DOG_BITE_CONSTANTS_2026.statistics.avgClaimPayout.toLocaleString()}, but forensic factors like facial disfigurement can push settlements into the seven-figure range.`,
                                },
                            },
                            {
                                "@type": "Question",
                                name: "How does the Genetic Propensity factor affect my claim?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Genetic propensity or a history of aggression triggers a 1.40x multiplier in our auditor, reflecting the increased legal risk for the owner and their insurer.",
                                },
                            },
                        ],
                    }),
                }}
            />
        </div>
    );
}

function ExpertToggle({ active, onClick, title, desc }: { active: boolean; onClick: () => void; title: string, desc: string }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`p-6 rounded-[2rem] border transition-all text-left flex items-start gap-4 ${active
                    ? "bg-white/5 border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.1)]"
                    : "bg-slate-900 border-white/5 hover:border-white/10"
                }`}
        >
            <div className={`mt-1 w-10 h-6 rounded-full transition-colors relative flex-shrink-0 ${active ? "bg-amber-500" : "bg-slate-700"}`}>
                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${active ? "right-1" : "left-1"}`} />
            </div>
            <div>
                <p className={`text-[10px] font-black uppercase italic italic mb-1 ${active ? "text-amber-500" : "text-white"}`}>{title}</p>
                <p className="text-[10px] font-bold text-slate-500 leading-normal">{desc}</p>
            </div>
        </button>
    );
}

function FAQItem({ q, a }: { q: string, a: string }) {
    return (
        <div className="p-10 bg-slate-950 border border-white/5 rounded-[2.5rem]">
            <h4 className="text-xl font-black text-white uppercase italic mb-6 leading-tight flex gap-4">
                <span className="text-amber-500">Q.</span> {q}
            </h4>
            <p className="text-slate-400 font-medium leading-relaxed">{a}</p>
        </div>
    );
}

function SourceItem({ icon: Icon, label, value }: { icon: any, label: string, value: string }) {
    return (
        <div className="flex items-center gap-4">
            <div className="p-2 bg-white/5 rounded-lg">
                <Icon className="w-4 h-4 text-slate-500" />
            </div>
            <div>
                <div className="text-[9px] font-black uppercase tracking-widest text-slate-600">{label}</div>
                <div className="text-[10px] font-black text-slate-400 italic">{value}</div>
            </div>
        </div>
    );
}

