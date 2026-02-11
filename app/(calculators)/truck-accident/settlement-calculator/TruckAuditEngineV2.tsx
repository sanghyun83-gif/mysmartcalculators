"use client";

import React, { useState, useMemo } from 'react';
import {
    calculateTruckSClass,
    TRUCK_2026,
    formatCurrency
} from "@/lib/calculators/truck-accident";
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
    Truck,
    ChevronRight,
    Info,
    MapPin,
    Database,
    DollarSign,
    CheckCircle2
} from "lucide-react";

export default function TruckAuditEngine() {
    const [formData, setFormData] = useState({
        injuryId: "soft-tissue",
        medicalBills: 50000,
        annualIncome: 75000,
        age: 40,
        hasFmcsaViolation: false,
        isNuclearVenue: false,
        hasEdrData: false,
        isPermanent: false
    });

    const results = useMemo(() => {
        return calculateTruckSClass(
            formData.injuryId,
            formData.medicalBills,
            formData.annualIncome,
            formData.age,
            formData.hasFmcsaViolation,
            formData.isNuclearVenue,
            formData.hasEdrData,
            formData.isPermanent
        );
    }, [formData]);

    const updateField = (field: string, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* 1. Forensic Input Matrix */}
            <div className="lg:col-span-7 space-y-8">
                <div className="bg-slate-900 border border-white/5 rounded-[3rem] p-8 md:p-12 shadow-2xl space-y-12 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-blue-600/20" />

                    <div className="flex items-center gap-4 border-b border-white/5 pb-8">
                        <div className="p-3 bg-blue-500/10 rounded-2xl">
                            <Truck className="w-6 h-6 text-blue-500" />
                        </div>
                        <div>
                            <h3 className="text-xl font-black text-white italic tracking-tighter uppercase">Forensic Audit Input.</h3>
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">MDL 2026 S-Class v2.1 Sync</p>
                        </div>
                    </div>

                    <div className="grid gap-10">
                        {/* Injury Matrix */}
                        <div className="space-y-4">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
                                <Target className="w-3 h-3 text-blue-500" /> Injury Classification
                            </label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {TRUCK_2026.injuryTypes.map((type) => (
                                    <button
                                        key={type.id}
                                        onClick={() => updateField('injuryId', type.id)}
                                        className={`p-5 rounded-2xl border text-left transition-all relative overflow-hidden ${formData.injuryId === type.id
                                            ? "bg-blue-600/10 border-blue-500/50 shadow-[0_0_20px_rgba(37,99,235,0.1)]"
                                            : "bg-black/40 border-white/5 hover:border-white/10"
                                            }`}
                                    >
                                        {formData.injuryId === type.id && (
                                            <div className="absolute top-2 right-2">
                                                <CheckCircle2 className="w-3 h-3 text-blue-400" />
                                            </div>
                                        )}
                                        <p className={`text-[10px] font-black uppercase mb-1 ${formData.injuryId === type.id ? "text-blue-400" : "text-slate-500"}`}>
                                            {type.name}
                                        </p>
                                        <p className="text-[9px] text-slate-600 font-bold uppercase leading-tight italic">{type.description}</p>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Economic Inputs */}
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { label: "Medical Bills ($)", field: "medicalBills", icon: Stethoscope },
                                { label: "Annual Income ($)", field: "annualIncome", icon: TrendingUp },
                                { label: "Claimant Age", field: "age", icon: Activity }
                            ].map((input) => (
                                <div key={input.field} className="space-y-3">
                                    <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                                        <input.icon className="w-3 h-3 text-blue-500" /> {input.label}
                                    </label>
                                    <input
                                        type="number"
                                        value={formData[input.field as keyof typeof formData] as number}
                                        onChange={(e) => updateField(input.field, parseInt(e.target.value) || 0)}
                                        className="w-full bg-black/40 border border-white/5 rounded-2xl p-4 text-white font-black text-sm focus:border-blue-500/50 focus:bg-black/60 transition-all outline-none"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Liability Accelerators (Trinity Audit) */}
                        <div className="space-y-4 pt-4">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
                                <Zap className="w-3 h-3 text-blue-500" /> Liability Accelerators (α)
                            </label>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                                {[
                                    { label: "FMCSA Violation", field: "hasFmcsaViolation", icon: Gavel, desc: "Safety breach" },
                                    { label: "Nuclear Venue", field: "isNuclearVenue", icon: MapPin, desc: "High-tier jurisdiction" },
                                    { label: "EDR/Black Box", field: "hasEdrData", icon: Database, desc: "Precision data" },
                                    { label: "Permanent Impairment", field: "isPermanent", icon: AlertTriangle, desc: "Life-care impact" }
                                ].map((toggle) => (
                                    <button
                                        key={toggle.field}
                                        onClick={() => updateField(toggle.field, !formData[toggle.field as keyof typeof formData])}
                                        className={`flex flex-col gap-3 p-5 rounded-3xl border transition-all text-left group ${formData[toggle.field as keyof typeof formData]
                                            ? "bg-blue-600/10 border-blue-500/40 shadow-xl ring-1 ring-blue-500/20"
                                            : "bg-black/40 border-white/5 opacity-60 hover:opacity-100"
                                            }`}
                                    >
                                        <toggle.icon className={`w-5 h-5 transition-transform group-hover:scale-110 ${formData[toggle.field as keyof typeof formData] ? "text-blue-400" : "text-slate-600"}`} />
                                        <div>
                                            <span className={`text-[9px] font-black uppercase tracking-widest block ${formData[toggle.field as keyof typeof formData] ? "text-white" : "text-slate-500"}`}>
                                                {toggle.label}
                                            </span>
                                            <span className="text-[8px] font-bold text-slate-700 uppercase tracking-tighter italic">
                                                {toggle.desc}
                                            </span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Forensic Analytics Panel */}
            <div className="lg:col-span-5 space-y-8 sticky top-32">
                <div className="bg-slate-900 border border-white/10 rounded-[3rem] p-10 md:p-12 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-900" />

                    <div className="space-y-12">
                        <div className="text-center space-y-2">
                            <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] flex items-center justify-center gap-2">
                                <Shield className="w-3.5 h-3.5" /> Settlement Potential
                            </span>
                            <h4 className="text-5xl md:text-6xl font-black text-white italic tracking-tighter uppercase leading-none">
                                {formatCurrency(results.totalLow)}
                                <span className="block text-xl text-slate-500 not-italic mt-2">to</span>
                                {formatCurrency(results.totalHigh)}
                            </h4>
                        </div>

                        <div className="space-y-4 pt-8 border-t border-white/5">
                            <div className="text-[9px] font-black text-slate-600 uppercase tracking-widest mb-2 text-center">Value Breakdown (Expert Deltas)</div>
                            {[
                                { label: "Economic Foundation", val: results.economicDelta, icon: DollarSign },
                                { label: "FMCSA Safety Premium", val: results.fmcsaPremium, icon: Gavel, active: formData.hasFmcsaViolation },
                                { label: "Venue Escalation (α)", val: results.venueEscalation, icon: MapPin, active: formData.isNuclearVenue },
                                { label: "EDR Precision Bonus", val: results.edrBonus, icon: Database, active: formData.hasEdrData }
                            ].map((item, i) => (
                                <div key={i} className={`flex items-center justify-between p-4 bg-black/40 border rounded-2xl transition-all ${item.active ? "border-blue-500/30" : "border-white/5 opacity-40 hover:opacity-60"}`}>
                                    <div className="flex items-center gap-3">
                                        <item.icon className="w-4 h-4 text-blue-500" />
                                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{item.label}</span>
                                    </div>
                                    <span className={`text-sm font-black italic tracking-tighter ${item.active ? "text-blue-400" : "text-slate-600"}`}>
                                        +{formatCurrency(item.val)}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="p-8 bg-blue-600 rounded-[2.5rem] shadow-[0_20px_40px_rgba(37,99,235,0.2)] space-y-4 group-hover:scale-[1.02] transition-transform">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white/20 rounded-xl text-white">
                                    <Zap className="w-4 h-4" />
                                </div>
                                <span className="text-[10px] font-black text-white uppercase tracking-widest">Forensic Verdict</span>
                            </div>
                            <p className="text-xs font-bold text-white italic leading-relaxed uppercase">
                                "{results.verdict}"
                            </p>
                            <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                                <span className="text-[9px] font-bold text-white/60 uppercase italic">Severity Tier:</span>
                                <span className="text-[9px] font-black text-white uppercase bg-black/20 px-2 py-1 rounded-lg tracking-widest">{results.severityLabel}</span>
                            </div>
                        </div>

                        <button className="w-full py-6 bg-white text-slate-950 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-100 transition-all shadow-xl italic flex items-center justify-center gap-2 group-hover:-translate-y-1 transition-transform">
                            Generate S-Class Audit Report <ChevronRight className="w-4 h-4" />
                        </button>

                        <p className="text-[8px] font-bold text-slate-600 uppercase text-center tracking-[0.3em] leading-loose">
                            FMCSA CFR DATA SYNC • NUCLEAR VENUE BIAS ALGORITHM • MDL 2026 AUDIT v2.1
                        </p>
                    </div>
                </div>

                <div className="p-8 bg-black/40 border border-white/5 rounded-[3rem] space-y-4 border-l-4 border-l-blue-600 shadow-xl backdrop-blur-xl">
                    <div className="flex items-center gap-2">
                        <Info className="w-4 h-4 text-blue-500" />
                        <span className="text-[10px] font-black text-white uppercase tracking-widest italic">Forensic Intel</span>
                    </div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-loose italic">
                        "Federal safety regulation violations (HOS, CDL, Maintenance) can transform a standard negligence claim into a punitive damages pathway with 2x-3x higher valuation potential."
                    </p>
                </div>
            </div>
        </div>
    );
}
