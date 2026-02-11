"use client";

import React from "react";
import Link from "next/link";
import {
    ArrowLeft,
    Truck,
    Shield
} from "lucide-react";
import { ClientOnly } from "@/components/ClientOnly";
import TruckAuditEngine from "./TruckAuditEngineV2";

export default function TruckCalculatorClient() {
    return (
        <div className="bg-[#020617] min-h-screen text-slate-300 font-sans selection:bg-blue-500/30 pb-24">
            {/* 1. Forensic Header */}
            <section className="max-w-7xl mx-auto px-6 pt-12 pb-24">
                <Link href="/truck-accident" className="inline-flex items-center gap-2 text-[10px] font-black text-slate-500 hover:text-blue-400 uppercase tracking-widest transition-colors mb-12">
                    <ArrowLeft className="w-4 h-4" /> Back to Traffic Intelligence
                </Link>

                <div className="grid lg:grid-cols-2 gap-12 items-end">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-black text-blue-400 uppercase tracking-[0.2em]">
                            <Shield className="w-3.5 h-3.5" />
                            MDL 2026 TRUCK AUDIT: ACTIVE
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none italic uppercase">
                            Settlement <br />
                            <span className="text-blue-500">Auditor.</span>
                        </h1>
                    </div>
                </div>
            </section>

            {/* 2. Audit Engine Interface */}
            <section className="max-w-7xl mx-auto px-6">
                <ClientOnly
                    fallback={
                        <div className="min-h-[600px] flex items-center justify-center bg-slate-900/50 rounded-[3rem] border border-white/5 animate-pulse">
                            <div className="text-center space-y-4">
                                <Truck className="w-12 h-12 text-blue-500 mx-auto animate-bounce" />
                                <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">Initializing S-Class Auditor...</p>
                            </div>
                        </div>
                    }
                >
                    <TruckAuditEngine />
                </ClientOnly>
            </section>

            {/* 3. Forensic Trust Footer */}
            <section className="max-w-4xl mx-auto px-6 pt-32 text-center space-y-8">
                <div className="inline-flex items-center gap-4 text-slate-600">
                    <div className="h-px w-12 bg-white/5" />
                    <span className="text-[9px] font-black uppercase tracking-[0.4em]">End of Forensic Report</span>
                    <div className="h-px w-12 bg-white/5" />
                </div>
                <p className="text-[10px] font-bold text-slate-500 uppercase leading-relaxed max-w-2xl mx-auto italic">
                    "Settlement projections are based on federal trucking safety standards (FMCSA) and venue-specific nuclear verdict trends.
                    EDR data extraction is required for high-fidelity velocity verification."
                </p>
            </section>
        </div>
    );
}
