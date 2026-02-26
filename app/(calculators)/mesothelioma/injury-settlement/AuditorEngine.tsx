"use client";

import { useState } from "react";
import Link from "next/link";
import {
    ArrowLeft, Calculator, Info, AlertTriangle, TrendingUp, DollarSign,
    Stethoscope, ShieldCheck, Zap, Activity, Award, ChevronDown, ChevronUp
} from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import {
    SITE,
    MESO_CONSTANTS_2026,
    calculateSettlement,
    formatCurrency,
    parseFormattedNumber,
    getSeverityLabel,
    getSeverityColor,
    SettlementResult
} from "@/lib/calculators/mesothelioma";

const ENGINE_V3_SIGNATURE = "MESO-V2.1.4-PURGE-STABLE";

export function InjuryAuditEngineComponent() {
    const [medicalExpenses, setMedicalExpenses] = useState("");
    const [lostWages, setLostWages] = useState("");
    const [severity, setSeverity] = useState<"minor" | "moderate" | "severe" | "catastrophic">("moderate");
    const [exposureType, setExposureType] = useState<'direct' | 'secondary'>('direct');
    const [isVeteran, setIsVeteran] = useState(false);
    const [hasAttorney, setHasAttorney] = useState(true);
    const [isExpertMode, setIsExpertMode] = useState(false);
    const [result, setResult] = useState<SettlementResult | null>(null);

    const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const raw = e.target.value.replace(/[^0-9]/g, "");
            if (raw === "") {
                setter("");
                return;
            }
            setter(parseInt(raw).toLocaleString("en-US"));
        };

    const handleCalculate = () => {
        const medical = parseFormattedNumber(medicalExpenses) || 12000;
        const wages = parseFormattedNumber(lostWages) || 0;
        setResult(calculateSettlement(medical, wages, severity, exposureType, isVeteran, hasAttorney));
    };

    const severityOptions = Object.entries(MESO_CONSTANTS_2026.multipliers).map(([value, data]) => ({
        value,
        label: data.label.split(' - ')[0],
        desc: data.label.split(' - ')[1],
        multiplier: `${data.min}-${data.max}x`
    }));

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200">
            {/* Minimal Header */}
            <header className="border-b border-white/5 py-6">
                <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
                    <Link href="/mesothelioma" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group text-xs font-black uppercase tracking-widest">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Hub
                    </Link>
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-amber-500" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">v2.1 Forensic Auditor</span>
                    </div>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-6 py-12 lg:py-20">
                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Left Column: Calculator */}
                    <div className="lg:col-span-7 space-y-8">
                        <div className="bg-slate-900/50 border border-white/5 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none">
                                <Calculator className="w-64 h-64 text-white" />
                            </div>

                            <div className="relative z-10">
                                <h1 className="text-3xl md:text-4xl font-black text-white uppercase italic tracking-tighter mb-2">
                                    Settlement <span className="text-amber-500">Auditor</span>
                                </h1>
                                <p className="text-slate-400 text-sm font-medium mb-10 italic">Execute 2026 Mesothelioma recovery simulation.</p>

                                <div className="space-y-8">
                                    {/* Medical Expenses */}
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 flex items-center gap-2">
                                            <Stethoscope className="w-3 h-3 text-amber-500" />
                                            Total Forensic Medical Costs
                                        </label>
                                        <div className="relative group">
                                            <span className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl font-black text-slate-600 group-focus-within:text-amber-500 transition-colors">$</span>
                                            <input
                                                type="text"
                                                value={medicalExpenses}
                                                onChange={handleInputChange(setMedicalExpenses)}
                                                placeholder="12,000"
                                                className="w-full bg-slate-950 border border-white/10 rounded-2xl pl-12 pr-6 py-5 text-2xl font-black text-white focus:ring-0 focus:border-amber-500 transition-all placeholder:text-slate-800"
                                            />
                                        </div>
                                    </div>

                                    {/* Injury Severity (Grid) */}
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 flex items-center gap-2">
                                            <Activity className="w-3 h-3 text-amber-500" />
                                            Biomechanical Staging (TNM)
                                        </label>
                                        <div className="grid grid-cols-2 gap-3">
                                            {severityOptions.map((opt) => (
                                                <button
                                                    key={opt.value}
                                                    onClick={() => setSeverity(opt.value as any)}
                                                    className={`p-5 rounded-2xl border text-left transition-all relative overflow-hidden group ${severity === opt.value
                                                        ? "bg-amber-500 border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.2)]"
                                                        : "bg-slate-950 border-white/5 hover:border-white/20"
                                                        }`}
                                                >
                                                    <div className={`text-[10px] font-black uppercase tracking-widest mb-1 ${severity === opt.value ? "text-slate-950" : "text-amber-500"}`}>{opt.label}</div>
                                                    <div className={`text-[8px] font-bold uppercase tracking-tight opacity-60 mb-2 ${severity === opt.value ? "text-slate-900" : "text-slate-400"}`}>{opt.desc}</div>
                                                    <div className={`text-xs font-black italic italic ${severity === opt.value ? "text-slate-950" : "text-white"}`}>{opt.multiplier}</div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Expert Audit Toggles */}
                                    <div className="pt-4 border-t border-white/5 space-y-4">
                                        <button
                                            onClick={() => setIsExpertMode(!isExpertMode)}
                                            className="w-full flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors"
                                        >
                                            <span className="flex items-center gap-2">
                                                <Zap className={`w-3 h-3 ${isExpertMode ? "text-amber-500 fill-amber-500" : "text-slate-500"}`} />
                                                Expert Audit Mode (+α)
                                            </span>
                                            {isExpertMode ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                                        </button>

                                        {isExpertMode && (
                                            <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                                                {/* Exposure Toggle */}
                                                <div className="flex items-center justify-between p-5 bg-slate-950 rounded-2xl border border-white/5">
                                                    <div>
                                                        <div className="text-[10px] font-black uppercase tracking-widest text-white mb-1">Exposure Vector</div>
                                                        <div className="text-[8px] text-slate-500 font-bold uppercase">Direct vs Secondary Alpha</div>
                                                    </div>
                                                    <div className="flex bg-slate-900 p-1 rounded-xl">
                                                        <button
                                                            onClick={() => setExposureType('direct')}
                                                            className={`px-4 py-2 rounded-lg text-[8px] font-black uppercase transition-all ${exposureType === 'direct' ? "bg-amber-500 text-slate-950 shadow-lg" : "text-slate-500 hover:text-white"}`}
                                                        >Direct</button>
                                                        <button
                                                            onClick={() => setExposureType('secondary')}
                                                            className={`px-4 py-2 rounded-lg text-[8px] font-black uppercase transition-all ${exposureType === 'secondary' ? "bg-amber-500 text-slate-950 shadow-lg" : "text-slate-500 hover:text-white"}`}
                                                        >Secondary</button>
                                                    </div>
                                                </div>

                                                {/* Veteran Toggle */}
                                                <div className="flex items-center justify-between p-5 bg-slate-950 rounded-2xl border border-white/5">
                                                    <div>
                                                        <div className="text-[10px] font-black uppercase tracking-widest text-white mb-1">Veteran (VA SMC)</div>
                                                        <div className="text-[8px] text-slate-500 font-bold uppercase">Apply PACT Act Special Monthlies</div>
                                                    </div>
                                                    <button
                                                        onClick={() => setIsVeteran(!isVeteran)}
                                                        className={`w-12 h-6 rounded-full transition-all relative p-1 ${isVeteran ? "bg-amber-500" : "bg-slate-800"}`}
                                                    >
                                                        <div className={`w-4 h-4 bg-white rounded-full transition-all shadow-md ${isVeteran ? "translate-x-6" : "translate-x-0"}`} />
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Action Button */}
                                    <button
                                        onClick={handleCalculate}
                                        className="group w-full py-6 bg-white text-slate-950 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-amber-500 transition-all flex items-center justify-center gap-3 shadow-xl active:scale-[0.98]"
                                    >
                                        <Zap className="w-5 h-5 fill-current" />
                                        Execute Settlement Audit
                                    </button>
                                </div>
                            </div>
                        </div>

                        <LegalDisclaimer />
                    </div>

                    {/* Right Column: Results & IQ */}
                    <div className="lg:col-span-5 space-y-8">
                        {result ? (
                            <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
                                {/* Result Card */}
                                <div className="bg-amber-500 rounded-[2.5rem] p-10 text-slate-950 shadow-2xl shadow-amber-500/10 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
                                        <Award className="w-32 h-32" />
                                    </div>
                                    <div className="relative z-10">
                                        <div className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 opacity-70 italic">Net Audit Valuation</div>
                                        <div className="text-6xl font-black tracking-tighter italic mb-4">{formatCurrency(result.netSettlement)}</div>
                                        <div className="flex items-center gap-2 mb-8">
                                            <TrendingUp className="w-4 h-4" />
                                            <span className="text-[10px] font-black uppercase tracking-widest">Range: {formatCurrency(result.settlementRange.min)} ??{formatCurrency(result.settlementRange.max)}</span>
                                        </div>
                                        <div className="space-y-4 pt-8 border-t border-slate-950/20">
                                            <div className="text-[10px] font-black uppercase tracking-widest mb-2 opacity-50">Expert Delta Applied</div>
                                            <div className="flex flex-wrap gap-2">
                                                {result.expertDeltaApplied.map((tag, i) => (
                                                    <span key={i} className="px-3 py-1 bg-slate-950 text-white text-[8px] font-black uppercase tracking-widest rounded-full flex items-center gap-1.5">
                                                        <Zap className="w-2.5 h-2.5 fill-amber-500 text-amber-500" />
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Itemized Breakdown */}
                                <div className="bg-slate-900/50 border border-white/5 rounded-[2.5rem] p-10">
                                    <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-8 italic">Audit Intelligence Breakdown</h3>
                                    <div className="space-y-6">
                                        {[
                                            { label: "Clinical Base Recovery", val: formatCurrency(result.totalBeforeFees - result.painSufferingAmount) },
                                            { label: "Forensic Pain & Suffering", val: `+${formatCurrency(result.painSufferingAmount)}`, highlight: true },
                                            { label: "Representation Net (Trial Focus)", val: result.attorneyFees > 0 ? `-${formatCurrency(result.attorneyFees)}` : "$0.00", red: result.attorneyFees > 0 }
                                        ].map((item, i) => (
                                            <div key={i} className="flex justify-between items-end gap-4 pb-4 border-b border-white/5">
                                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{item.label}</span>
                                                <span className={`text-lg font-black italic italic ${item.highlight ? "text-amber-500" : item.red ? "text-rose-500" : "text-white"}`}>
                                                    {item.val}
                                                </span>
                                            </div>
                                        ))}
                                        <div className="flex justify-between items-end pt-4">
                                            <span className="text-sm font-black uppercase tracking-widest text-white">Projected Net Claim</span>
                                            <span className="text-3xl font-black text-amber-500 italic italic">{formatCurrency(result.netSettlement)}</span>
                                        </div>
                                    </div>
                                    <div className="mt-10 p-6 bg-slate-950 rounded-2xl border border-white/5">
                                        <div className="flex items-start gap-3">
                                            <Info className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                                            <p className="text-[10px] leading-relaxed text-slate-400 font-medium italic italic">
                                                **Note**: 2026 Audit leverages MDL 2738 discovery leverage. Attorney-led cases typically target solvent defendant lawsuit pools, unlike administrative trust-only filings.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="h-full flex flex-col items-center justify-center p-12 text-center bg-slate-900/40 border border-white/5 border-dashed rounded-[3rem]">
                                {/* SIGNATURE: {ENGINE_V3_SIGNATURE} */}
                                <div className="p-6 bg-white/5 rounded-full mb-6 relative">
                                    <Activity className="w-12 h-12 text-blue-500" />
                                    <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full" />
                                </div>
                                <h3 className="text-xl font-black text-white uppercase italic mb-2">Pending Data Input</h3>
                                <p className="text-xs text-slate-500 font-medium max-w-[200px] mx-auto uppercase tracking-widest leading-loose leading-loose">
                                    Enter bio-path staging to trigger the predator audit engine.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            {/* v2.1 SEO Software Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        "name": "Mesothelioma v2.1 Forensic Auditor",
                        "operatingSystem": "All",
                        "applicationCategory": "FinanceApplication",
                        "offers": {
                            "@type": "Offer",
                            "price": "0",
                            "priceCurrency": "USD"
                        },})
                }}
            />
        </div>
    );
}

