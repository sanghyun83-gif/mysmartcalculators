"use client";

import { useState, useEffect } from "react";
import {
    ArrowLeft,
    Heart,
    Zap,
    TrendingUp,
    Gavel,
    Stethoscope,
    AlertCircle,
    Scale,
    Activity,
    Users,
    Shield,
    ChevronRight,
    ArrowRight
} from "lucide-react";
import Link from "next/link";
import {
    SITE,
    WRONGFUL_DEATH_CONSTANTS,
    formatCurrency,
    parseFormattedNumber,
    calculateYearsRemaining,
    calculateWrongfulDeath,
} from "@/lib/calculators/wrongful-death-v2";

export default function WrongfulDeathSettlementPage() {
    const [annualIncome, setAnnualIncome] = useState("65,000");
    const [age, setAge] = useState("45");
    const [gender, setGender] = useState<"male" | "female">("male");
    const [funeralCosts, setFuneralCosts] = useState("12,000");
    const [medicalExpenses, setMedicalExpenses] = useState("45,000");
    const [caseStrength, setCaseStrength] = useState<"weak" | "moderate" | "strong" | "exceptional">("strong");
    const [hasAttorney, setHasAttorney] = useState(true);

    // Expert Audit Toggles (+α)
    const [applySurvival, setApplySurvival] = useState(false);
    const [applyHedonic, setApplyHedonic] = useState(false);
    const [applyConsortium, setApplyConsortium] = useState(false);

    const [result, setResult] = useState<any>(null);

    useEffect(() => {
        handleCalculate();
    }, [annualIncome, age, gender, funeralCosts, medicalExpenses, caseStrength, hasAttorney, applySurvival, applyHedonic, applyConsortium]);

    const handleCalculate = () => {
        const income = parseFormattedNumber(annualIncome);
        const ageNum = parseInt(age);
        const funeral = parseFormattedNumber(funeralCosts);
        const medical = parseFormattedNumber(medicalExpenses);
        const yearsRemaining = calculateYearsRemaining(ageNum, gender);

        const calculation = calculateWrongfulDeath(
            income,
            yearsRemaining,
            funeral,
            medical,
            caseStrength,
            hasAttorney,
            applySurvival,
            applyHedonic,
            applyConsortium
        );

        setResult({
            ...calculation,
            yearsRemaining
        });
    };

    const caseStrengthOptions = [
        { value: "weak", label: "Weak", desc: "Questionable liability" },
        { value: "moderate", label: "Moderate", desc: "Clear liability, some defense" },
        { value: "strong", label: "Strong", desc: "Clear negligence" },
        { value: "exceptional", label: "Exceptional", desc: "Gross negligence, punitive" },
    ];

    return (
        <div className="bg-[#020617] min-h-screen text-slate-300 font-sans selection:bg-amber-500/30">
            {/* Header */}
            <header className="bg-slate-950/80 backdrop-blur-xl border-b border-white/5 sticky top-0 z-[100]">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <Link href="/wrongful-death" className="p-2 hover:bg-white/5 rounded-xl transition-colors group">
                            <ArrowLeft className="w-5 h-5 text-slate-500 group-hover:text-amber-500" />
                        </Link>
                        <div className="flex items-center gap-3">
                            <Heart className="w-6 h-6 text-amber-500" />
                            <span className="text-sm font-black text-white tracking-[0.2em] uppercase italic">Wrongful Death <span className="text-amber-600">Auditor</span></span>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[9px] font-black text-amber-500 uppercase tracking-widest">
                        <Zap className="w-3 h-3" /> 2026 Actuarial Mode
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-12 gap-12 items-start">
                {/* Inputs */}
                <div className="lg:col-span-7 space-y-8">
                    <div className="space-y-2">
                        <h1 className="text-4xl font-black text-white tracking-tighter uppercase italic leading-none">Evidence Wall.</h1>
                        <p className="text-slate-500 font-bold text-sm tracking-tight uppercase">Enter fatality details for high-fidelity actuarial projection.</p>
                    </div>

                    <div className="p-8 bg-amber-900/10 border border-amber-700/30 rounded-[2.5rem] flex items-start gap-4 shadow-xl">
                        <AlertCircle className="w-6 h-6 text-amber-500 shrink-0" />
                        <div className="space-y-1">
                            <p className="text-xs font-black text-amber-500 uppercase tracking-widest">Disclaimer</p>
                            <p className="text-xs font-bold text-amber-200/80 leading-relaxed">This tool provides an estimate for informational purposes only and should not be considered legal advice. Consult with a qualified attorney for specific guidance on your case.</p>
                        </div>
                    </div>

                    <div className="p-10 bg-white/5 border border-white/10 rounded-[3rem] shadow-2xl space-y-10">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <label className="text-[10px] font-black text-amber-500 uppercase tracking-[0.2em] ml-2 flex items-center gap-2">
                                    <TrendingUp className="w-3.5 h-3.5" /> Annual Income
                                </label>
                                <div className="relative">
                                    <span className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl font-black text-slate-600">$</span>
                                    <input
                                        type="text"
                                        value={annualIncome}
                                        onChange={(e) => setAnnualIncome(e.target.value.replace(/[^0-9,]/g, ""))}
                                        className="w-full pl-12 pr-6 py-6 bg-black/40 border-2 border-white/5 rounded-3xl text-2xl font-black text-white focus:border-amber-500 outline-none transition-all"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black text-amber-500 uppercase tracking-[0.2em] ml-2">Age</label>
                                    <input
                                        type="text"
                                        value={age}
                                        onChange={(e) => setAge(e.target.value.replace(/[^0-9]/g, ""))}
                                        className="w-full px-6 py-6 bg-black/40 border-2 border-white/5 rounded-3xl text-2xl font-black text-white focus:border-amber-500 text-center outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black text-amber-500 uppercase tracking-[0.2em] ml-2">Gender</label>
                                    <div className="flex bg-black/40 p-1.4 rounded-3xl border-2 border-white/5">
                                        <button onClick={() => setGender("male")} className={`flex-1 py-4 rounded-2xl text-[9px] font-black uppercase tracking-widest transition-all ${gender === "male" ? "bg-amber-600 text-white" : "text-slate-500"}`}>Male</button>
                                        <button onClick={() => setGender("female")} className={`flex-1 py-4 rounded-2xl text-[9px] font-black uppercase tracking-widest transition-all ${gender === "female" ? "bg-amber-600 text-white" : "text-slate-500"}`}>Female</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <label className="text-[10px] font-black text-amber-500 uppercase tracking-[0.2em] ml-2 flex items-center gap-2">
                                <Gavel className="w-3.5 h-3.5" /> Liability Precision
                            </label>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {caseStrengthOptions.map((opt) => (
                                    <button
                                        key={opt.value}
                                        onClick={() => setCaseStrength(opt.value as any)}
                                        className={`p-6 rounded-3xl border-2 text-left transition-all ${caseStrength === opt.value ? "bg-amber-500/10 border-amber-500" : "bg-black/20 border-white/5"}`}
                                    >
                                        <div className={`text-[10px] font-black uppercase tracking-widest mb-1 ${caseStrength === opt.value ? "text-amber-500" : "text-slate-600"}`}>{opt.label}</div>
                                        <div className="text-[8px] font-bold text-slate-500 leading-tight">{opt.desc}</div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-6 pt-6 border-t border-white/5">
                            <label className="text-[11px] font-black text-amber-500 uppercase tracking-[0.3em] flex items-center gap-2">
                                <Activity className="w-4 h-4" /> Expert Audit
                            </label>
                            <div className="grid gap-4">
                                {[
                                    { title: "Survival Action Delta", desc: "Pre-death pain & suffering (+1.50x)", state: applySurvival, setter: setApplySurvival, icon: Stethoscope },
                                    { title: "Hedonic Damage Alpha", desc: "Loss of life's pleasure (+1.35x)", state: applyHedonic, setter: setApplyHedonic, icon: Heart },
                                    { title: "Consortium Bonus", desc: "Dependent impact (+1.20x)", state: applyConsortium, setter: setApplyConsortium, icon: Users }
                                ].map((audit, i) => (
                                    <button
                                        key={i}
                                        onClick={() => audit.setter(!audit.state)}
                                        className={`flex items-center justify-between p-6 rounded-[2rem] border-2 transition-all ${audit.state ? "bg-emerald-500/5 border-emerald-500/30" : "bg-black/40 border-white/5"}`}
                                    >
                                        <div className="flex items-center gap-5">
                                            <div className={`p-4 rounded-2xl ${audit.state ? "bg-emerald-500/20 text-emerald-500" : "bg-white/5 text-slate-600"}`}>
                                                <audit.icon className="w-5 h-5" />
                                            </div>
                                            <div className="text-left">
                                                <p className={`text-xs font-black uppercase tracking-widest ${audit.state ? "text-emerald-500" : "text-slate-300"}`}>{audit.title}</p>
                                                <p className="text-[9px] font-bold text-slate-500">{audit.desc}</p>
                                            </div>
                                        </div>
                                        <div className={`w-12 h-6 rounded-full relative transition-colors ${audit.state ? "bg-emerald-600" : "bg-slate-800"}`}>
                                            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${audit.state ? "right-1" : "left-1"}`} />
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-white/5">
                            <div className="space-y-4">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-2">Medical Expenses</label>
                                <input
                                    type="text"
                                    value={medicalExpenses}
                                    onChange={(e) => setMedicalExpenses(e.target.value.replace(/[^0-9,]/g, ""))}
                                    className="w-full px-6 py-5 bg-black/40 border-2 border-white/5 rounded-3xl text-xl font-black text-white focus:border-amber-500 outline-none transition-all"
                                />
                            </div>
                            <div className="space-y-4">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-2">Funeral & Burial</label>
                                <input
                                    type="text"
                                    value={funeralCosts}
                                    onChange={(e) => setFuneralCosts(e.target.value.replace(/[^0-9,]/g, ""))}
                                    className="w-full px-6 py-5 bg-black/40 border-2 border-white/5 rounded-3xl text-xl font-black text-white focus:border-amber-500 outline-none transition-all"
                                />
                            </div>
                        </div>

                        <button
                            onClick={() => setHasAttorney(!hasAttorney)}
                            className={`w-full p-8 rounded-[2.5rem] border-2 flex items-center justify-between transition-all ${hasAttorney ? "bg-amber-500/5 border-amber-500" : "bg-black/40 border-white/5"}`}
                        >
                            <div className="flex items-center gap-6">
                                <div className={`p-4 rounded-2xl ${hasAttorney ? "bg-amber-500/20 text-amber-500" : "bg-white/5 text-slate-600"}`}>
                                    <Scale className="w-6 h-6" />
                                </div>
                                <div className="text-left">
                                    <p className={`text-sm font-black uppercase tracking-widest ${hasAttorney ? "text-amber-500" : "text-slate-300"}`}>Legal Representation</p>
                                    <p className="text-[9px] font-bold text-slate-500 uppercase">Maximizes value by 350%</p>
                                </div>
                            </div>
                            <div className={`w-14 h-7 rounded-full relative transition-colors ${hasAttorney ? "bg-amber-600" : "bg-slate-800"}`}>
                                <div className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${hasAttorney ? "right-1" : "left-1"}`} />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Results */}
                <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-black text-white tracking-tighter uppercase italic leading-none">Net Recovery.</h2>
                        <p className="text-slate-500 font-bold text-sm tracking-tight uppercase">Audit Precision Mode</p>
                    </div>

                    {result && (
                        <div className="space-y-8">
                            <div className="p-10 bg-gradient-to-br from-amber-600 to-orange-700 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden">
                                <div className="relative z-10 space-y-6">
                                    <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-80">Audit Net Estimate</p>
                                    <div className="text-6xl font-black tracking-tighter leading-none">{formatCurrency(result.netSettlement)}</div>
                                    <div className="pt-4 space-y-2">
                                        <div className="flex justify-between text-[10px] font-black uppercase opacity-60">
                                            <span>Floor</span>
                                            <span>Ceiling</span>
                                        </div>
                                        <div className="h-2 bg-black/20 rounded-full overflow-hidden">
                                            <div className="h-full bg-white w-[65%]" />
                                        </div>
                                        <div className="flex justify-between text-[11px] font-black">
                                            <span>{formatCurrency(result.settlementRange.min)}</span>
                                            <span>{formatCurrency(result.settlementRange.max)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-10 bg-white/5 border border-white/10 rounded-[3.5rem] shadow-2xl space-y-6 text-sm">
                                <h3 className="text-[10px] font-black text-amber-500 uppercase tracking-widest border-b border-white/5 pb-4 mb-4">Breakdown</h3>
                                {[
                                    { label: "Lost Earnings", val: formatCurrency(result.lostIncome) },
                                    { label: "Expert Delta", val: `+${formatCurrency(result.expertDelta)}`, highlight: true },
                                    { label: "Non-Economic", val: formatCurrency(result.lossOfCompanionship) },
                                    { label: "Attorney Fees", val: `-${formatCurrency(result.attorneyFees)}`, red: true }
                                ].map((item, i) => (
                                    <div key={i} className="flex justify-between items-center">
                                        <span className="text-slate-500 font-black uppercase text-[10px] tracking-widest">{item.label}</span>
                                        <span className={`text-lg font-black tracking-tight ${item.highlight ? "text-emerald-500" : item.red ? "text-red-500" : "text-white"}`}>{item.val}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </main>

            {/* Bottom Disclaimer */}
            <div className="max-w-7xl mx-auto px-6 py-12 border-t border-white/5 text-center">
                <p className="text-[9px] font-bold text-slate-700 uppercase tracking-[0.3em] inline-block border border-slate-800 px-6 py-2 rounded-full">
                    Forensic Estimate • 2026 S-Class Protocol • Not Legal Advice
                </p>
            </div>
        </div>
    );
}
