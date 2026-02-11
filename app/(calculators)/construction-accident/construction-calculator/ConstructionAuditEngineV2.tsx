"use client";

import React, { useState, useMemo } from 'react';
import {
    CONSTRUCTION_2026,
    calculateConstructionSClass,
    formatCurrency
} from "@/lib/calculators/construction-accident";
import {
    Shield,
    Activity,
    Zap,
    Gavel,
    AlertTriangle,
    Scale,
    Stethoscope,
    Target,
    TrendingUp,
    Construction,
    ChevronRight,
    Info,
    HardHat
} from "lucide-react";

export default function ConstructionAuditEngine() {
    const [formData, setFormData] = useState({
        injuryTypeId: "fall-height",
        legalFrameworkId: "no-violation",
        medicalBills: 50000,
        annualIncome: 75000,
        age: 40,
        hasThirdParty: false,
        isLaborLaw240: false,
        permanentDisability: false
    });

    const results = useMemo(() => {
        return calculateConstructionSClass(
            formData.injuryTypeId,
            formData.legalFrameworkId,
            formData.medicalBills,
            formData.annualIncome,
            formData.age,
            formData.hasThirdParty,
            formData.isLaborLaw240,
            formData.permanentDisability
        );
    }, [formData]);

    const updateField = (field: string, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* 1. Input Matrix */}
            <div className="lg:col-span-7 space-y-8">
                <div className="bg-slate-900 border border-white/5 rounded-[3rem] p-8 md:p-12 shadow-2xl space-y-12">
                    <div className="flex items-center gap-4 border-b border-white/5 pb-8">
                        <div className="p-3 bg-amber-500/10 rounded-2xl">
                            <Construction className="w-6 h-6 text-amber-500" />
                        </div>
                        <div>
                            <h3 className="text-xl font-black text-white italic tracking-tighter uppercase">Forensic Input Matrix.</h3>
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">S-Class v2.1 Audit Engine</p>
                        </div>
                    </div>

                    <div className="grid gap-8">
                        {/* Primary Hazard Selection */}
                        <div className="space-y-4">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
                                <Target className="w-3 h-3 text-amber-500" /> Primary Construction Hazard
                            </label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {CONSTRUCTION_2026.injuryTypes.map((type) => (
                                    <button
                                        key={type.id}
                                        onClick={() => updateField('injuryTypeId', type.id)}
                                        className={`p-4 rounded-2xl border text-left transition-all ${formData.injuryTypeId === type.id
                                                ? "bg-amber-500/10 border-amber-500/50 shadow-[0_0_20px_rgba(245,158,11,0.1)]"
                                                : "bg-black/40 border-white/5 hover:border-white/10"
                                            }`}
                                    >
                                        <p className={`text-[10px] font-black uppercase mb-1 ${formData.injuryTypeId === type.id ? "text-amber-400" : "text-slate-500"}`}>
                                            {type.name}
                                        </p>
                                        <p className="text-[9px] text-slate-600 font-bold uppercase leading-tight italic">{type.description}</p>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Legal Framework Selection */}
                        <div className="space-y-4">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
                                <Scale className="w-3 h-3 text-amber-500" /> Liability Framework
                            </label>
                            <select
                                value={formData.legalFrameworkId}
                                onChange={(e) => updateField('legalFrameworkId', e.target.value)}
                                className="w-full bg-black/60 border border-white/5 rounded-2xl p-4 text-white text-sm font-bold appearance-none cursor-pointer focus:border-amber-500/50 outline-none"
                            >
                                {CONSTRUCTION_2026.legalFramework.map((framework) => (
                                    <option key={framework.id} value={framework.id}>{framework.name}</option>
                                ))}
                            </select>
                        </div>

                        {/* Numeric Inputs */}
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { label: "Medical Bills ($)", field: "medicalBills", icon: Stethoscope },
                                { label: "Annual Income ($)", field: "annualIncome", icon: TrendingUp },
                                { label: "Age", field: "age", icon: Activity }
                            ].map((input) => (
                                <div key={input.field} className="space-y-3">
                                    <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                                        <input.icon className="w-3 h-3 text-amber-500" /> {input.label}
                                    </label>
                                    <input
                                        type="number"
                                        value={formData[input.field as keyof typeof formData] as number}
                                        onChange={(e) => updateField(input.field, parseInt(e.target.value) || 0)}
                                        className="w-full bg-black/40 border border-white/5 rounded-2xl p-4 text-white font-black text-sm focus:border-amber-500/50 focus:bg-black/60 transition-all outline-none"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Forensic Risk Toggles */}
                        <div className="grid md:grid-cols-3 gap-4">
                            {[
                                { label: "Third-Party Liability", field: "hasThirdParty", icon: Shield },
                                { label: "Section 240/241 (NY)", field: "isLaborLaw240", icon: Gavel },
                                { label: "Permanent Disability", field: "permanentDisability", icon: AlertTriangle }
                            ].map((toggle) => (
                                <button
                                    key={toggle.field}
                                    onClick={() => updateField(toggle.field, !formData[toggle.field as keyof typeof formData])}
                                    className={`flex flex-col gap-3 p-5 rounded-3xl border transition-all text-left ${formData[toggle.field as keyof typeof formData]
                                            ? "bg-amber-500/10 border-amber-500/40 shadow-xl"
                                            : "bg-black/40 border-white/5 opacity-60 hover:opacity-100"
                                        }`}
                                >
                                    <toggle.icon className={`w-5 h-5 ${formData[toggle.field as keyof typeof formData] ? "text-amber-400" : "text-slate-600"}`} />
                                    <span className={`text-[9px] font-black uppercase tracking-widest ${formData[toggle.field as keyof typeof formData] ? "text-white" : "text-slate-500"}`}>
                                        {toggle.label}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Result Analytics */}
            <div className="lg:col-span-5 space-y-8 sticky top-32">
                <div className="bg-slate-900 border border-white/10 rounded-[3rem] p-10 md:p-12 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-600" />

                    <div className="space-y-12">
                        <div className="text-center space-y-2">
                            <span className="text-[10px] font-black text-amber-500 uppercase tracking-[0.4em] flex items-center justify-center gap-2">
                                <Shield className="w-3 h-3 anim-pulse" /> Settlement Valuation
                            </span>
                            <h4 className="text-5xl md:text-6xl font-black text-white italic tracking-tighter uppercase leading-none">
                                {formatCurrency(results.totalLow)}
                                <span className="block text-xl text-slate-500 not-italic mt-2">to</span>
                                {formatCurrency(results.totalHigh)}
                            </h4>
                        </div>

                        <div className="space-y-4 pt-8 border-t border-white/5">
                            {[
                                { label: "Medical Care Delta", val: results.medicalDelta, icon: Stethoscope },
                                { label: "Wage Recovery Potential", val: results.wageDelta, icon: TrendingUp },
                                { label: "Labor Law Premium", val: results.laborLawPremium, icon: Gavel, color: "text-amber-400" },
                                { label: "3rd-Party Escalation", val: results.thirdPartyEscalation, icon: Shield, color: "text-orange-400" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between p-4 bg-black/40 border border-white/5 rounded-2xl group hover:border-amber-500/20 transition-all">
                                    <div className="flex items-center gap-3">
                                        <item.icon className={`w-4 h-4 ${item.color || "text-slate-500"}`} />
                                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{item.label}</span>
                                    </div>
                                    <span className={`text-sm font-black italic tracking-tighter ${item.color || "text-white"}`}>
                                        +{formatCurrency(item.val)}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="p-8 bg-amber-600 rounded-[2.5rem] shadow-[0_20px_40px_rgba(217,119,6,0.2)] space-y-4 group-hover:scale-[1.02] transition-transform">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white/20 rounded-xl">
                                    <Zap className="w-4 h-4 text-white" />
                                </div>
                                <span className="text-[10px] font-black text-white uppercase tracking-widest">Forensic Verdict</span>
                            </div>
                            <p className="text-xs font-bold text-white italic leading-relaxed uppercase">
                                "{results.verdict}"
                            </p>
                            <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                                <span className="text-[9px] font-bold text-white/60 uppercase">Severity Tier:</span>
                                <span className="text-[9px] font-black text-white uppercase bg-black/20 px-2 py-1 rounded-lg">{results.severityLabel}</span>
                            </div>
                        </div>

                        <button className="w-full py-6 bg-white text-slate-950 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-100 transition-all shadow-xl italic flex items-center justify-center gap-2">
                            Download Expert Audit Report <ChevronRight className="w-4 h-4" />
                        </button>

                        <p className="text-[8px] font-bold text-slate-600 uppercase text-center tracking-widest leading-loose">
                            OSHA CFR PART 1926 SYNC ACTIVE • LABOR LAW 240/241 ALGORITHM • FORENSIC VERDICT v2.1
                        </p>
                    </div>
                </div>

                <div className="p-8 bg-black/40 border border-white/5 rounded-[3rem] space-y-4 border-l-4 border-l-amber-600">
                    <div className="flex items-center gap-2">
                        <Info className="w-4 h-4 text-amber-500" />
                        <span className="text-[10px] font-black text-white uppercase tracking-widest italic">Actuarial Warning</span>
                    </div>
                    <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest leading-loose italic">
                        "Absolute liability under NY Labor Law Section 240 can bypass standard workers' comp caps, provided the injury is gravity-related and involves safety breach."
                    </p>
                </div>
            </div>
        </div>
    );
}
