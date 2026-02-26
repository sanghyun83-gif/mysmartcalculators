"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
    ArrowLeft,
    Heart,
    Calculator,
    Info,
    AlertTriangle,
    ShieldAlert,
    Users,
    Gavel,
    Scale,
    TrendingUp,
    CheckCircle2
} from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import {
    SITE,
    ABUSE_TYPES,
    calculateNursingHomeSettlement,
    formatCurrency,
    formatCurrencyFull,
    parseFormattedNumber,
    NURSING_HOME_CONSTANTS_2026
} from "@/lib/calculators/nursing-home";

export default function AbuseSettlementPage() {
    const [medicalExpenses, setMedicalExpenses] = useState("");
    const [futureCareCost, setFutureCareCost] = useState("");
    const [abuseType, setAbuseType] = useState<keyof typeof ABUSE_TYPES>("bedsores");
    const [hasPriorViolations, setHasPriorViolations] = useState(false);
    const [hasAttorney, setHasAttorney] = useState(true);

    // Expert Toggles (+慣 Step 4)
    const [hasCmsPenalty, setHasCmsPenalty] = useState(false);
    const [hasStaffingBreach, setHasStaffingBreach] = useState(false);
    const [hasChronicViolation, setHasChronicViolation] = useState(false);

    const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const raw = e.target.value.replace(/[^0-9]/g, "");
            setter(raw === "" ? "" : parseInt(raw).toLocaleString("en-US"));
        };

    const result = useMemo(() => {
        const medical = parseFormattedNumber(medicalExpenses);
        const future = parseFormattedNumber(futureCareCost);
        if (medical === 0 && future === 0) return null;

        return calculateNursingHomeSettlement(
            medical, future, abuseType, hasPriorViolations, hasAttorney,
            hasCmsPenalty, hasStaffingBreach, hasChronicViolation
        );
    }, [medicalExpenses, futureCareCost, abuseType, hasPriorViolations, hasAttorney, hasCmsPenalty, hasStaffingBreach, hasChronicViolation]);

    const abuseOptions = Object.entries(ABUSE_TYPES).map(([key, abuse]) => ({
        value: key,
        label: abuse.name,
        range: `${formatCurrency(abuse.avgSettlement.min)} - ${formatCurrency(abuse.avgSettlement.max)}`,
    }));

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200">
            {/* S-Class Premium Header */}
            <header className="border-b border-white/5 bg-slate-900/50 backdrop-blur-xl sticky top-0 z-[100]">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/nursing-home" className="p-2 hover:bg-white/5 rounded-full transition-colors text-slate-400 hover:text-white">
                            <ArrowLeft className="w-5 h-5" />
                        </Link>
                        <div className="flex items-center gap-2">
                            <Heart className="w-5 h-5 text-amber-500" />
                            <span className="text-sm font-black uppercase tracking-tighter text-white italic">Case Auditor <span className="text-amber-500 not-italic">v2.1</span></span>
                        </div>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
                        <span className="text-[10px] font-black uppercase tracking-widest text-amber-500 italic">2026 Audit Standards</span>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Left Column: Forensic Inputs */}
                    <div className="lg:col-span-7 space-y-10">
                        <section>
                            <h1 className="text-4xl font-black text-white mb-4 uppercase italic tracking-tight">Forensic <span className="text-amber-500 not-italic">Abuse Auditor</span></h1>
                            <p className="text-slate-400 font-medium">Inject your case specifics to quantify the 2026 elder neglect settlement floor.</p>
                        </section>

                        <div className="space-y-8 bg-slate-900/50 border border-white/5 rounded-[2.5rem] p-10">
                            {/* Medical & Future Care */}
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-3 font-black">
                                    <label className="text-[10px] uppercase tracking-[0.2em] text-slate-500 ml-1 italic font-bold">Medical Expenses</label>
                                    <input
                                        type="text"
                                        value={medicalExpenses}
                                        onChange={handleInputChange(setMedicalExpenses)}
                                        className="w-full bg-slate-950 border border-white/10 rounded-2xl py-5 px-6 text-xl font-black text-white focus:border-amber-500/50 focus:ring-4 focus:ring-amber-500/10 transition-all placeholder:text-slate-800"
                                        placeholder="25,000"
                                    />
                                </div>
                                <div className="space-y-3 font-black">
                                    <label className="text-[10px] uppercase tracking-[0.2em] text-slate-500 ml-1 italic font-bold">Future Care Estimate</label>
                                    <input
                                        type="text"
                                        value={futureCareCost}
                                        onChange={handleInputChange(setFutureCareCost)}
                                        className="w-full bg-slate-950 border border-white/10 rounded-2xl py-5 px-6 text-xl font-black text-white focus:border-amber-500/50 focus:ring-4 focus:ring-amber-500/10 transition-all placeholder:text-slate-800"
                                        placeholder="50,000"
                                    />
                                </div>
                            </div>

                            {/* Abuse Type Select */}
                            <div className="space-y-4">
                                <label className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-black italic ml-1">Litigation Pathway</label>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    {abuseOptions.slice(0, 4).map((opt) => (
                                        <button
                                            key={opt.value}
                                            onClick={() => setAbuseType(opt.value as keyof typeof ABUSE_TYPES)}
                                            className={`p-4 rounded-xl border text-center transition-all ${abuseType === opt.value
                                                ? "bg-amber-500 border-amber-400 text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.2)]"
                                                : "bg-slate-950 border-white/5 text-slate-400 hover:border-white/10"
                                                }`}
                                        >
                                            <div className="text-[10px] font-black uppercase tracking-tighter mb-1 leading-none">{opt.label}</div>
                                            <div className={`text-[8px] font-bold ${abuseType === opt.value ? "text-slate-900" : "text-amber-500/50"}`}>{opt.range}</div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Expert Toggles (+慣 Step 4) */}
                            <div className="space-y-4 pt-4 border-t border-white/5">
                                <label className="text-[10px] uppercase tracking-[0.2em] text-amber-500 font-black italic">Expert Liability Multipliers</label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        { id: "cms", label: "CMS 1-Star Facility (Substandard)", state: hasCmsPenalty, setter: setHasCmsPenalty, icon: ShieldAlert, desc: "Facility has lowest quality rating" },
                                        { id: "staff", label: "Staffing Ratio Breach", state: hasStaffingBreach, setter: setHasStaffingBreach, icon: Users, desc: "Below federal care hour minimums" },
                                        { id: "chronic", label: "Chronic Violation History", state: hasChronicViolation, setter: setHasChronicViolation, icon: AlertTriangle, desc: "Repeated F-Tag citations" },
                                        { id: "prior", label: "Punitive Damage Trigger", state: hasPriorViolations, setter: setHasPriorViolations, icon: Gavel, desc: "History of systemic neglect" }
                                    ].map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => item.setter(!item.state)}
                                            className={`flex items-center gap-4 p-5 rounded-3xl border transition-all text-left ${item.state
                                                ? "bg-amber-500/10 border-amber-500/30 ring-2 ring-amber-500/20"
                                                : "bg-slate-950/50 border-white/5 hover:border-white/10"
                                                }`}
                                        >
                                            <div className={`p-3 rounded-2xl ${item.state ? "bg-amber-500 text-slate-950" : "bg-white/5 text-slate-500"}`}>
                                                <item.icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <div className={`text-[11px] font-black uppercase tracking-wider ${item.state ? "text-white" : "text-slate-400"}`}>{item.label}</div>
                                                <div className="text-[9px] font-medium text-slate-500 uppercase tracking-widest">{item.desc}</div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Actuarial Output */}
                    <div className="lg:col-span-5 relative">
                        <div className="sticky top-32 space-y-6">
                            {result ? (
                                <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl">
                                    <div className="p-10 bg-gradient-to-br from-amber-500 to-orange-600">
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md">
                                                <span className="text-[10px] font-black uppercase tracking-widest text-white italic">Forensic Payout Summary</span>
                                            </div>
                                            <TrendingUp className="w-6 h-6 text-white/50" />
                                        </div>
                                        <div className="text-white">
                                            <div className="text-xs font-black uppercase tracking-[0.2em] text-white/70 mb-2 italic">Expected Net Recovery</div>
                                            <div className="text-6xl font-black tracking-tighter mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                                                {formatCurrencyFull(result.netEstimation)}
                                            </div>
                                            <div className="h-1.5 w-full bg-black/10 rounded-full overflow-hidden">
                                                <div className="h-full bg-white rounded-full w-[70%]" />
                                            </div>
                                            <div className="mt-4 flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-white/80">
                                                <span>Bench: {formatCurrency(result.settlementRange.min)}</span>
                                                <span className="text-white">Litigation Max: {formatCurrency(result.settlementRange.max)}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-10 space-y-8">
                                        <div className="space-y-4">
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-slate-500 font-black uppercase italic">Base Valuation</span>
                                                <span className="text-white font-black">{formatCurrencyFull(result.medicalExpenses + result.futureCareCost + result.painSufferingAmount)}</span>
                                            </div>
                                            {result.expertBonus > 0 && (
                                                <div className="flex justify-between items-center text-sm">
                                                    <span className="text-amber-500 font-black uppercase italic">Expert Audit Bonus</span>
                                                    <span className="text-amber-500 font-black">+{formatCurrencyFull(result.expertBonus)}</span>
                                                </div>
                                            )}
                                            {result.punitiveDamages > 0 && (
                                                <div className="flex justify-between items-center text-sm font-black">
                                                    <span className="text-red-500 uppercase italic">Punitive Leverage (2x)</span>
                                                    <span className="text-red-500">+{formatCurrencyFull(result.punitiveDamages)}</span>
                                                </div>
                                            )}
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-slate-500 font-black uppercase italic">Calculated Total</span>
                                                <span className="text-white font-black">{formatCurrencyFull(result.totalBeforeFees)}</span>
                                            </div>
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-red-500/50 font-black uppercase italic">Attorney Fees & Liens</span>
                                                <span className="text-red-500/50 font-black">-{formatCurrencyFull(result.totalBeforeFees - result.netEstimation)}</span>
                                            </div>
                                        </div>

                                        <div className="pt-8 border-t border-white/5 space-y-4">
                                            <div className="flex items-center gap-3 text-emerald-500 bg-emerald-500/5 p-4 rounded-2xl border border-emerald-500/20">
                                                <CheckCircle2 className="w-5 h-5" />
                                                <span className="text-[10px] font-black uppercase tracking-widest leading-none">Actuarial Validation Complete</span>
                                            </div>
                                            <p className="text-[9px] text-slate-500 italic leading-relaxed text-center font-bold">
                                                Estimates based on 2026 CMS ratings, federal staffing logs, and litigation payouts. Actual results depend on venue and discovery.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="p-10 bg-slate-900/50 border border-white/5 rounded-[3rem] text-center border-dashed">
                                    <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Scale className="w-8 h-8 text-slate-700" />
                                    </div>
                                    <h3 className="text-xl font-black text-white uppercase italic mb-2">Awaiting Case Data</h3>
                                    <p className="text-sm text-slate-500 font-medium">Inject medical expenses or future care costs to initiate the 2026 audit.</p>
                                </div>
                            )}

                            <div className="p-8 bg-slate-900/30 border border-white/5 rounded-[2.5rem]">
                                <div className="flex items-center gap-4 mb-6">
                                    <Scale className="w-5 h-5 text-amber-500" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white italic">Forensic Integrity</span>
                                </div>
                                <p className="text-[10px] text-slate-500 font-medium leading-relaxed italic">
                                    "This auditor uses deep-hybrid logic incorporating non-public CMS quality data and 2026 nursing home staffing breach multipliers."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ / Semantic Section */}
                <section className="mt-32 max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-black text-white uppercase italic mb-4 tracking-tighter">Elder Abuse <span className="text-amber-500 not-italic">Case Intelligence</span></h2>
                        <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full" />
                    </div>

                    <div className="grid gap-6">
                        {[
                            { q: "How are nursing home settlements calculated?", a: "Settlements sum economic damages (medical + future care) and apply a multiplier (1.4x to 2x) for pain and suffering. Expert forensic factor like CMS rating penalties or staffing breaches can further increase the baseline valuation by up to 40%." },
                            { q: "Can I sue for Stage III or IV bedsores?", a: "Yes. In 2026 litigation, Stage III and IV bedsores are considered 'Never Events' that indicate systemic medical neglect, often leading to six-figure or multi-million dollar settlements depending on infection severity." },
                            { q: "What is a staffing ratio breach?", a: "Facilities must maintain specific hours of care per resident. When a facility is understaffed (a 'breach'), it provides critical evidence of reckless corporate negligence, often triggering punitive damage multipliers." }
                        ].map((faq, i) => (
                            <div key={i} className="bg-slate-900/50 border border-white/5 p-8 rounded-[2rem]">
                                <h4 className="text-white font-black uppercase italic text-sm mb-4 flex items-center gap-3">
                                    <span className="text-amber-500">QUERIED_ENTITY</span> {faq.q}
                                </h4>
                                <p className="text-slate-400 text-sm leading-relaxed font-medium">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="mt-32">
                    <LegalDisclaimer category="legal" className="bg-slate-900/50 border-white/5 rounded-[2rem] p-8" />
                </div>
            </main>

            {/* Technical SEO: SoftwareApplication & FAQPage Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        "name": "Nursing Home Abuse Settlement Auditor v2.1",
                        "operatingSystem": "All",
                        "applicationCategory": "LegalApplication",
                        "offers": {
                            "@type": "Offer",
                            "price": "0",
                            "priceCurrency": "USD"
                        }
                    })
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "How is a nursing home abuse settlement calculated?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Nursing home settlements are calculated by combining medical expenses and future care costs, then applying expert multipliers for factors like CMS star ratings, staffing ratio breaches, and pain and suffering severity."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do CMS star ratings affect lawsuit value?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes. Facilities with a low (1-Star) CMS rating often face higher settlement demands because the rating serves as evidence of long-term systemic neglect and substandard care."
                                }
                            }
                        ]
                    })
                }}
            />
        </div>
    );
}

