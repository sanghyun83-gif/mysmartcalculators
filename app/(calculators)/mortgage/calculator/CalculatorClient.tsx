"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Calculator, Home, DollarSign, TrendingDown, PiggyBank,
    CheckCircle, AlertCircle, Info, RefreshCcw, ArrowRight,
    Search, Shield, Activity
} from "lucide-react";
import {
    MORTGAGE_CONSTANTS,
    calculateMortgage,
    formatCurrency,
    parseFormattedNumber,
    MortgageResult
} from "@/lib/calculators/mortgage";

export default function MortgageCalculatorClient() {
    const { defaults, loanTerms } = MORTGAGE_CONSTANTS;
    const [homePrice, setHomePrice] = useState("400,000");
    const [downPayment, setDownPayment] = useState("80,000");
    const [interestRate, setInterestRate] = useState(defaults.interestRate.toString());
    const [loanTerm, setLoanTerm] = useState(30);
    const [propertyTax, setPropertyTax] = useState(defaults.propertyTaxRate.toString());
    const [insurance, setInsurance] = useState(defaults.homeInsuranceYear.toString());
    const [result, setResult] = useState<MortgageResult | null>(null);

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
        const hp = parseFormattedNumber(homePrice) || defaults.homePrice;
        const dp = parseFormattedNumber(downPayment) || hp * 0.2;
        const rate = parseFloat(interestRate) || defaults.interestRate;
        const tax = parseFloat(propertyTax) || defaults.propertyTaxRate;
        const ins = parseFormattedNumber(insurance) || defaults.homeInsuranceYear;

        setResult(calculateMortgage(hp, dp, rate, loanTerm, tax, ins));
    };

    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="grid lg:grid-cols-2 gap-16 items-start">

                {/* Input Panel */}
                <div className="space-y-8 bg-slate-900 border border-white/5 rounded-[3rem] p-10 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Calculator className="w-32 h-32 text-blue-500" />
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-3xl font-black text-white italic tracking-tighter uppercase">Mortgage <span className="text-blue-500 underline decoration-white/10 underline-offset-8">Audit.</span></h2>
                        <p className="text-slate-400 font-bold italic text-sm">Configure your property debt parameters.</p>
                    </div>

                    <div className="space-y-6">
                        {/* Home Price */}
                        <div className="space-y-3">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Home Purchase Price</label>
                            <div className="relative group/input">
                                <DollarSign className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-500/50 group-hover/input:text-blue-500 transition-colors" />
                                <input
                                    type="text"
                                    value={homePrice}
                                    onChange={handleInputChange(setHomePrice)}
                                    className="w-full bg-slate-950 border border-white/10 rounded-3xl py-6 pl-16 pr-8 text-2xl font-black text-white focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none italic tracking-tighter"
                                    placeholder="400,000"
                                />
                            </div>
                        </div>

                        {/* Down Payment */}
                        <div className="space-y-3">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Down Payment Audit</label>
                            <div className="relative group/input">
                                <PiggyBank className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-500/50 group-hover/input:text-blue-500 transition-colors" />
                                <input
                                    type="text"
                                    value={downPayment}
                                    onChange={handleInputChange(setDownPayment)}
                                    className="w-full bg-slate-950 border border-white/10 rounded-3xl py-5 pl-16 pr-8 text-xl font-bold text-white focus:border-blue-500/50 outline-none transition-all italic tracking-tighter"
                                    placeholder="80,000"
                                />
                                <div className="absolute right-6 top-1/2 -translate-y-1/2 py-1 px-3 bg-blue-500/10 border border-blue-500/20 rounded-full">
                                    <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">
                                        {parseFormattedNumber(homePrice) > 0
                                            ? `${((parseFormattedNumber(downPayment) / parseFormattedNumber(homePrice)) * 100).toFixed(1)}%`
                                            : "20%"}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Interest Rate */}
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Interest Index (%)</label>
                                <div className="relative group/input">
                                    <TrendingDown className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-500/50 group-hover/input:text-blue-500 transition-colors" />
                                    <input
                                        type="number"
                                        step="0.125"
                                        value={interestRate}
                                        onChange={(e) => setInterestRate(e.target.value)}
                                        className="w-full bg-slate-950 border border-white/10 rounded-3xl py-5 pl-16 pr-8 text-xl font-bold text-white focus:border-blue-500/50 outline-none transition-all italic tracking-tighter"
                                    />
                                </div>
                            </div>

                            {/* Property Tax */}
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Tax Rate Audit (%)</label>
                                <div className="relative group/input">
                                    <Activity className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-500/50 group-hover/input:text-blue-500 transition-colors" />
                                    <input
                                        type="number"
                                        step="0.1"
                                        value={propertyTax}
                                        onChange={(e) => setPropertyTax(e.target.value)}
                                        className="w-full bg-slate-950 border border-white/10 rounded-3xl py-5 pl-16 pr-8 text-xl font-bold text-white focus:border-blue-500/50 outline-none transition-all italic tracking-tighter"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Loan Term Selector */}
                        <div className="space-y-4">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Actuarial Duration</label>
                            <div className="grid grid-cols-3 gap-3">
                                {loanTerms.map((term) => (
                                    <button
                                        key={term.years}
                                        onClick={() => setLoanTerm(term.years)}
                                        className={`py-4 rounded-3xl font-black text-xs uppercase tracking-widest transition-all ${loanTerm === term.years
                                            ? 'bg-blue-600 text-white shadow-2xl shadow-blue-600/20 scale-[1.02]'
                                            : 'bg-white/5 text-slate-400 border border-white/5 hover:border-blue-500/30'
                                            }`}
                                    >
                                        {term.years} YR
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={handleCalculate}
                        className="w-full bg-blue-600 hover:bg-blue-500 text-white py-8 rounded-[2rem] font-black text-sm uppercase tracking-[0.3em] transition-all hover:scale-[1.02] shadow-2xl shadow-blue-600/30 active:scale-95 flex items-center justify-center gap-4 group"
                    >
                        <RefreshCcw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-700" />
                        Execute Calculation
                    </button>
                </div>

                {/* Results Panel */}
                <div className="space-y-8">
                    {!result ? (
                        <div className="h-[600px] border-4 border-dashed border-white/5 rounded-[4rem] flex flex-col items-center justify-center text-center p-12 space-y-6">
                            <div className="p-8 bg-blue-500/5 rounded-full animate-pulse">
                                <Search className="w-16 h-16 text-blue-500/20" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-black text-slate-300 uppercase italic tracking-widest">Awaiting Parameters</h3>
                                <p className="text-sm text-slate-600 font-bold italic">Configure the purchase audit to view payment breakdown.</p>
                            </div>
                        </div>
                    ) : (
                        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 space-y-8">

                            {/* Main Payment Card */}
                            <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-[4rem] p-12 text-white shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform duration-700">
                                    <Home className="w-48 h-48" />
                                </div>
                                <div className="relative z-10 space-y-4">
                                    <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 backdrop-blur-md">
                                        <Activity className="w-3 h-3 text-blue-300" />
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-100">Monthly PITI Audit Active</span>
                                    </div>
                                    <div className="text-7xl md:text-8xl font-black italic tracking-tighter leading-none">
                                        {formatCurrency(result.totalMonthlyPayment)}
                                    </div>
                                    <p className="text-blue-100/60 font-black uppercase tracking-[0.3em] text-xs">Simulated Monthly Obligation</p>
                                </div>
                            </div>

                            {/* Detailed Breakdown */}
                            <div className="grid md:grid-cols-2 gap-6 pb-20">
                                <div className="bg-slate-900 border border-white/5 rounded-[3rem] p-10 space-y-8">
                                    <h4 className="text-xs font-black text-blue-500 uppercase tracking-widest italic flex items-center gap-3">
                                        <Shield className="w-4 h-4" /> Cost Components
                                    </h4>
                                    <div className="space-y-6">
                                        {[
                                            { l: "Principal & interest", v: formatCurrency(result.monthlyPI) },
                                            { l: "Property Taxation", v: formatCurrency(result.monthlyTax) },
                                            { l: "Insurability Fees", v: formatCurrency(result.monthlyInsurance) },
                                            { l: "PMI Risk Threshold", v: result.hasPMI ? formatCurrency(result.monthlyPMI) : "$0", c: result.hasPMI ? "text-amber-500" : "" }
                                        ].map((item, i) => (
                                            <div key={i} className="flex justify-between items-center group/item border-b border-white/5 pb-4 last:border-0 last:pb-0">
                                                <span className="text-xs font-black text-slate-500 uppercase tracking-widest italic group-hover/item:text-slate-300 transition-colors">{item.l}</span>
                                                <span className={`text-xl font-black italic tracking-tight ${item.c || "text-white"}`}>{item.v}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-slate-900 border border-white/5 rounded-[3rem] p-10 space-y-8">
                                    <h4 className="text-xs font-black text-blue-500 uppercase tracking-widest italic flex items-center gap-3">
                                        <PiggyBank className="w-4 h-4" /> Loan Totals
                                    </h4>
                                    <div className="space-y-6">
                                        {[
                                            { l: "Principal Balance", v: formatCurrency(result.loanAmount) },
                                            { l: "Total Interest Load", v: formatCurrency(result.totalInterest), c: "text-red-500" },
                                            { l: "Aggregate Payments", v: formatCurrency(result.totalPayments) }
                                        ].map((item, i) => (
                                            <div key={i} className="flex justify-between items-center group/item border-b border-white/5 pb-4 last:border-0 last:pb-0">
                                                <span className="text-xs font-black text-slate-500 uppercase tracking-widest italic group-hover/item:text-slate-300 transition-colors">{item.l}</span>
                                                <span className={`text-xl font-black italic tracking-tight ${item.c || "text-white"}`}>{item.v}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* PMI Warning */}
                            {result.hasPMI && (
                                <div className="p-8 bg-amber-500/10 border border-amber-500/20 rounded-[2.5rem] flex gap-6 items-start">
                                    <div className="p-3 bg-amber-500/20 rounded-2xl">
                                        <AlertCircle className="w-6 h-6 text-amber-500" />
                                    </div>
                                    <div className="space-y-2">
                                        <h5 className="text-sm font-black text-amber-500 uppercase tracking-widest">PMI Impact Alert</h5>
                                        <p className="text-amber-200/60 text-xs font-bold italic leading-relaxed">
                                            LTV exceeds 80%. Increasing down payment to <span className="text-amber-500 underline decoration-amber-500/30">{formatCurrency(result.homePrice * 0.2)}</span> will eliminate mortgage insurance risk.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Action Cards */}
            <div className="grid md:grid-cols-2 gap-8 mt-12 pb-24">
                <Link href="/mortgage/amortization" className="p-10 bg-white/5 border border-white/5 rounded-[3rem] hover:border-blue-500/30 transition-all group relative overflow-hidden">
                    <TrendingDown className="w-24 h-24 text-white/5 absolute -top-4 -right-4 group-hover:rotate-12 transition-transform" />
                    <div className="space-y-4">
                        <div className="text-[10px] font-black text-blue-500 uppercase tracking-widest italic">Actuarial Module</div>
                        <h3 className="text-3xl font-black text-white italic">Amortization <span className="underline decoration-white/10 underline-offset-4">Schedule.</span></h3>
                        <p className="text-slate-500 text-sm font-bold italic">View year-by-year principal decay and interest load.</p>
                        <div className="inline-flex items-center gap-2 text-blue-500 text-[10px] font-black uppercase tracking-widest mt-4 group-hover:gap-4 transition-all">Launch Deep Audit <ArrowRight className="w-4 h-4" /></div>
                    </div>
                </Link>

                <Link href="/mortgage/affordability" className="p-10 bg-white/5 border border-white/5 rounded-[3rem] hover:border-blue-500/30 transition-all group relative overflow-hidden">
                    <Home className="w-24 h-24 text-white/5 absolute -top-4 -right-4 group-hover:rotate-12 transition-transform" />
                    <div className="space-y-4">
                        <div className="text-[10px] font-black text-blue-500 uppercase tracking-widest italic">Finance Logic</div>
                        <h3 className="text-3xl font-black text-white italic">Purchase <span className="underline decoration-white/10 underline-offset-4">Affordability.</span></h3>
                        <p className="text-slate-500 text-sm font-bold italic">Audit your income to determine maximum purchase ceiling.</p>
                        <div className="inline-flex items-center gap-2 text-blue-500 text-[10px] font-black uppercase tracking-widest mt-4 group-hover:gap-4 transition-all">Analysis Ready <ArrowRight className="w-4 h-4" /></div>
                    </div>
                </Link>
            </div>
        
            {/* FAQPage Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: [
                            {
                                "@type": "Question",
                                name: "How accurate is the mortgage calculator?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "This calculator provides estimates based on 2026 data and standard formulas. Results may vary based on individual circumstances."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Is this mortgage calculator free to use?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, this calculator is completely free. No registration or personal information required."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "How often is the mortgage data updated?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "We update our calculator data regularly to reflect current 2026 rates and regulations."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Can I rely on these mortgage results for decisions?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "This calculator provides estimates for educational purposes. For important decisions, please consult with a qualified professional."
                                }
                            }
                        ]
                    })
                }}
            />
        </div>
    );
}
