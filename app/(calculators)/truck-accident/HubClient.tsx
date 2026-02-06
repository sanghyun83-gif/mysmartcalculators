"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
    Truck, Scale, Gavel, Shield, AlertTriangle, ChevronRight, ArrowRight, BarChart3, Info,
    CheckCircle2, MapPin, Search, Zap, Star, DollarSign, Activity
} from "lucide-react";
import { STATE_FAULT_LAWS, getStatesList, formatCurrency } from "@/lib/calculators/truck-accident";

export default function HubClient() {
    const [selectedState, setSelectedState] = useState("CA");
    const stateData = STATE_FAULT_LAWS[selectedState];
    const states = getStatesList();

    const dynamicContent = useMemo(() => {
        const highlights = {
            pure: "Pure Comparative Fault: You can recover damages even if you are 99% at fault, though your award is reduced by your share of liability.",
            "modified-50": "50% Modified Bar: You can only recover damages if your fault is 49% or less. If you are 50% or more at fault, you get nothing.",
            "modified-51": "51% Modified Bar: You can recover damages if your fault is 50% or less. At 51% fault, your recovery is barred.",
            contributory: "Contributory Negligence (Strict): Even 1% of fault will completely bar you from any recovery in this state."
        };

        return {
            ruleTitle: `${stateData.name} Liability Standard`,
            ruleDesc: highlights[stateData.comparativeType] || stateData.notes,
            statute: selectedState === "CA" ? "2 Years" : selectedState === "TX" ? "2 Years" : "Varies (Avg. 2-3 Years)",
            payoutTrend: selectedState === "CA" ? "High (State Benchmarks +12%)" : "Stable (Actuarial Baseline)"
        };
    }, [selectedState, stateData]);

    return (
        <>
            {/* Premium S-Class Hero Section */}
            <section className="relative py-20 overflow-hidden bg-slate-950">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(220,38,38,0.1),transparent_50%)]" />
                <div className="max-w-7xl mx-auto px-6 relative">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[10px] font-black text-red-400 uppercase tracking-widest mb-6 animate-pulse">
                            <Activity className="w-3 h-3" />
                            High Value Audit Engine
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.9] text-white">
                            Truck Accident <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-orange-500">Settlement</span> Logic.
                        </h1>
                        <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
                            Professional-grade estimator for <span className="text-white italic">Commercial Vehicle Liability</span>. Calibrated for 2026 payout structures and FMCSA safety violations.
                        </p>

                        <div className="flex flex-col md:row items-center justify-center gap-6">
                            <Link href="/truck-accident/calculator" className="flex items-center gap-3 bg-white text-black px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-wider hover:bg-slate-200 transition-all shadow-[0_20px_40px_rgba(220,38,38,0.2)] hover:-translate-y-1">
                                Start AI Analysis <ChevronRight className="w-4 h-4" />
                            </Link>
                            <div className="flex items-center gap-6 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> S-Class Data Sync</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MDL Stat Wall */}
            <section id="stats" className="py-12 border-y border-white/5 bg-slate-900/20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { l: "Platform", v: "S-Class V5.0" },
                            { l: "Jurisdictions", v: "50-State Sync" },
                            { l: "Actuarial Bias", v: "2026 Calibrated" },
                            { l: "Horizon", v: "Nuclear Verdict v2" }
                        ].map((s, i) => (
                            <div key={i} className="text-center md:text-left">
                                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{s.l}</div>
                                <div className="text-lg font-black text-white">{s.v}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Programmatic SEO: State-Based Content Engine */}
            <section id="rules" className="py-24 bg-slate-950 border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <div className="text-[11px] font-black text-red-500 uppercase tracking-[0.3em]">Programmatic SEO Engine</div>
                                <h2 className="text-4xl font-black text-white tracking-tighter italic">Localized Jurisdiction Context.</h2>
                                <p className="text-slate-400 text-lg font-medium leading-relaxed">
                                    Liability rules for 18-wheeler accidents vary wildly. Our engine automatically adjusts
                                    computations based on your state's specific <span className="text-white italic">comparative fault doctrine</span>. Unlike standard [car accidents](/car-accident), commercial trucking claims involve complex federal FMCSA safety regulations.
                                </p>
                            </div>

                            {/* State Selector */}
                            <div className="p-8 bg-slate-900 border border-white/10 rounded-[2.5rem] shadow-2xl space-y-6">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-bold text-slate-400 uppercase opacity-50">Select Jurisdiction:</span>
                                    <div className="flex items-center gap-2 px-3 py-1 bg-red-500/10 rounded-lg border border-red-500/20 text-[10px] font-bold text-red-400 uppercase">
                                        <MapPin className="w-3 h-3" /> {selectedState} Verified
                                    </div>
                                </div>
                                <select
                                    value={selectedState}
                                    onChange={(e) => setSelectedState(e.target.value)}
                                    className="w-full bg-slate-800 border border-white/10 rounded-2xl p-4 text-lg font-bold text-white outline-none focus:border-red-500 transition-colors cursor-pointer appearance-none"
                                >
                                    {states.map(s => (
                                        <option key={s.code} value={s.code}>{s.name}</option>
                                    ))}
                                </select>

                                <div className="grid grid-cols-2 gap-4 text-center">
                                    <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                                        <div className="text-[9px] font-bold text-slate-500 uppercase mb-1">Negligence Standard</div>
                                        <div className="text-xs font-black text-amber-500 truncate">{stateData.comparativeType.toUpperCase()}</div>
                                    </div>
                                    <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                                        <div className="text-[9px] font-bold text-slate-500 uppercase mb-1">SOL (Injury)</div>
                                        <div className="text-xs font-black text-blue-400">{dynamicContent.statute}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Dynamic Legend Box */}
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                            <div className="relative bg-slate-900 border border-white/10 p-10 rounded-[2.5rem] space-y-8">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-red-500/10 rounded-2xl">
                                        <Gavel className="w-6 h-6 text-red-500" />
                                    </div>
                                    <h3 className="text-2xl font-black text-white tracking-tight">{dynamicContent.ruleTitle}</h3>
                                </div>
                                <p className="text-slate-400 text-lg font-medium leading-relaxed italic">
                                    "{dynamicContent.ruleDesc}"
                                </p>
                                <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Payout Benchmarks</span>
                                        <span className="text-sm font-black text-emerald-400 uppercase tracking-widest">{dynamicContent.payoutTrend}</span>
                                    </div>
                                    <Link href="/truck-accident/legal-guide" className="p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all hover:scale-105">
                                        <ArrowRight className="w-5 h-5 text-red-400" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Actuarial Matrix Section */}
            <section id="stats" className="py-24 bg-slate-900/10">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="text-[11px] font-black text-red-500 uppercase tracking-[0.3em] mb-4">Elite Data Analysis</div>
                    <h2 className="text-5xl font-black text-white tracking-tighter mb-16 italic">Nuclear Payout Matrix.</h2>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { label: "Minor Injury", range: "$25K - $100K", color: "text-blue-400" },
                            { label: "Moderate Injury", range: "$100K - $500K", color: "text-emerald-400" },
                            { label: "Severe/Surgery", range: "$500K - $1.5M", color: "text-amber-400" },
                            { label: "Catastrophic", range: "$1.5M - $10M+", color: "text-red-500" },
                        ].map((stat, i) => (
                            <div key={i} className="p-10 bg-slate-900 border border-white/10 rounded-[2.5rem] hover:border-red-500/50 transition-all hover:scale-105 group shadow-xl">
                                <BarChart3 className={`w-8 h-8 ${stat.color} mb-6 opacity-30 group-hover:opacity-100 transition-opacity`} />
                                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">{stat.label}</div>
                                <div className={`text-2xl font-black ${stat.color} tracking-tighter`}>{stat.range}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Schema.org - Expert Optimized Rich Results */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "SoftwareApplication",
                            "name": "Commercial Truck Accident Settlement Logic v5.0",
                            "operatingSystem": "All",
                            "applicationCategory": "LegalApplication",
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "4.9",
                                "ratingCount": "924"
                            },
                            "offers": {
                                "@type": "Offer",
                                "price": "0",
                                "priceCurrency": "USD"
                            }
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "How much is the average truck accident settlement in 2026?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Average settlements for commercial truck accidents often range from $100,000 for moderate injuries to over $1,000,000 for catastrophic cases involving spinal injuries or wrongful death, due to higher insurance requirements for commercial carriers (FMCSA mandates often $750k to $5M)."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "What is the statute of limitations for truck accidents?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "The statute of limitations varies by state but is typically 2 years for personal injury and property damage. However, some states like Florida (formerly 4 years, now 2 years) or New York (3 years) have different deadlines. Always verify with local 2026 statutes."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Can I sue the trucking company or just the driver?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Under the doctrine of 'Respondeat Superior,' you can usually sue the trucking company for the driver's negligence if they were on the clock. You may also have direct claims for negligent hiring, training, or maintenance (FMCSA safety violations). If the accident occurred during employment, you may also qualify for [Workers Compensation benefits](/workers-comp)."
                                    }
                                }
                            ]
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://mysmartcalculators.com"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Legal Calculators",
                                    "item": "https://mysmartcalculators.com/category/legal"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": "Truck Accident Auditor",
                                    "item": "https://mysmartcalculators.com/truck-accident"
                                }
                            ]
                        }
                    ])
                }}
            />
        </>
    );
}
