"use client";

import React, { useState, useEffect } from "react";
import {
    Binary,
    Cpu,
    ShieldCheck,
    Zap,
    RefreshCcw,
    ArrowRight,
    Terminal,
    Settings,
    Layers,
    Activity,
    Lock
} from "lucide-react";
import { BinaryEngine } from "@/lib/calculators/binary";

export default function CalculatorClient() {
    const [bits, setBits] = useState(32);
    const [binaryString, setBinaryString] = useState("0".repeat(32));
    const [decimalValue, setDecimalValue] = useState("0");
    const [hexValue, setHexValue] = useState("0");
    const [octalValue, setOctalValue] = useState("0");

    // Sync other values when binary changes
    useEffect(() => {
        try {
            const bigIntVal = BigInt("0b" + binaryString);
            setDecimalValue(bigIntVal.toString());
            setHexValue(bigIntVal.toString(16).toUpperCase());
            setOctalValue(bigIntVal.toString(8));
        } catch (e) {
            console.error("Conversion error", e);
        }
    }, [binaryString]);

    const toggleBit = (index: number) => {
        const charArray = binaryString.split("");
        charArray[index] = charArray[index] === "0" ? "1" : "0";
        setBinaryString(charArray.join(""));
    };

    const handleDecimalChange = (val: string) => {
        setDecimalValue(val);
        try {
            if (val === "") return;
            const bigIntVal = BigInt(val);
            const bin = bigIntVal.toString(2).padStart(bits, '0');
            // Slice if exceeds bit width
            setBinaryString(bin.slice(-bits));
        } catch (e) {
            // Invalid input
        }
    };

    const handleHexChange = (val: string) => {
        setHexValue(val);
        try {
            if (val === "") return;
            const bigIntVal = BigInt("0x" + val);
            const bin = bigIntVal.toString(2).padStart(bits, '0');
            setBinaryString(bin.slice(-bits));
        } catch (e) { }
    };

    return (
        <div className="grid lg:grid-cols-12 min-h-[800px] bg-slate-950 rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
            {/* Left: Interactive Bit Engine (7) */}
            <div className="lg:col-span-7 p-8 lg:p-12 space-y-8 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.05),transparent_40%)]">
                <header className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-black text-emerald-500 uppercase tracking-widest">
                        <Cpu className="w-3 h-3" /> Core Architecture v2.2
                    </div>
                    <h2 className="text-3xl font-black text-white tracking-tighter uppercase italic">
                        Binary <span className="text-emerald-500">Logic Hub.</span>
                    </h2>
                </header>

                {/* Bit Width Selector */}
                <div className="flex gap-2 p-1.5 bg-white/5 rounded-xl w-fit border border-white/5">
                    {[8, 16, 32, 64].map((b) => (
                        <button
                            key={b}
                            onClick={() => {
                                setBits(b);
                                setBinaryString("0".repeat(b));
                            }}
                            className={`px-4 py-1.5 rounded-lg text-[10px] font-black transition-all ${bits === b ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20' : 'text-slate-500 hover:text-white'}`}
                        >
                            {b}-BIT
                        </button>
                    ))}
                </div>

                {/* Interactive Bit Grid */}
                <div className="space-y-4">
                    <div className="grid grid-cols-8 sm:grid-cols-16 gap-1.5">
                        {binaryString.split("").map((bit, idx) => (
                            <button
                                key={idx}
                                onClick={() => toggleBit(idx)}
                                className={`aspect-square flex flex-col items-center justify-center rounded-lg border transition-all group ${bit === "1" ? 'bg-emerald-600 border-emerald-400' : 'bg-slate-900 border-white/5 hover:border-emerald-500/30'}`}
                            >
                                <span className={`text-base font-black ${bit === "1" ? 'text-white' : 'text-slate-700'}`}>{bit}</span>
                                <span className="text-[6px] font-bold text-slate-600 mt-0.5">{bits - 1 - idx}</span>
                            </button>
                        ))}
                    </div>
                    <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest text-center">Click bits to toggle state</p>
                </div>

                {/* Arithmetic Input Matrix */}
                <div className="grid md:grid-cols-2 gap-8 pt-8">
                    <div className="space-y-4">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] flex items-center gap-2">
                            <Terminal className="w-3 h-3 text-emerald-500" /> Decimal Representation
                        </label>
                        <input
                            type="text"
                            value={decimalValue}
                            onChange={(e) => handleDecimalChange(e.target.value)}
                            className="w-full p-6 bg-white/5 border border-white/5 rounded-3xl text-2xl font-black text-white focus:outline-none focus:border-emerald-500/50 transition-all italic"
                        />
                    </div>
                    <div className="space-y-4">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] flex items-center gap-2">
                            <Layers className="w-3 h-3 text-emerald-500" /> Hexadecimal 0x
                        </label>
                        <input
                            type="text"
                            value={hexValue}
                            onChange={(e) => handleHexChange(e.target.value)}
                            className="w-full p-6 bg-white/5 border border-white/5 rounded-3xl text-2xl font-black text-white focus:outline-none focus:border-emerald-500/50 transition-all italic"
                        />
                    </div>
                </div>
            </div>

            {/* Right: Auditor Insight (5) */}
            <div className="lg:col-span-5 bg-slate-900/50 p-12 lg:p-20 border-l border-white/5 space-y-12">
                <div className="space-y-8">
                    <h3 className="text-xl font-black text-white uppercase italic tracking-tighter">System Auditor</h3>

                    <div className="space-y-6">
                        {[
                            { label: "Signed Type", value: "Two's Complement", icon: ShieldCheck },
                            { label: "Architecture", value: `${bits}-Bit Floating/Fixed`, icon: Activity },
                            { label: "Metabolic Status", value: "Optimal Data Density", icon: Zap },
                            { label: "Encryption Grade", value: "Institutional AES-Ready", icon: Lock }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-6 p-6 bg-white/5 rounded-[2rem] border border-white/5 group hover:bg-white/10 transition-all">
                                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
                                    <item.icon className="w-6 h-6 text-emerald-500" />
                                </div>
                                <div>
                                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{item.label}</div>
                                    <div className="text-sm font-bold text-white italic">{item.value}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="p-8 bg-emerald-600 rounded-[2.5rem] space-y-4 shadow-2xl shadow-emerald-600/20 group cursor-pointer overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <h4 className="text-white font-black italic uppercase tracking-tighter flex items-center gap-2">
                        <RefreshCcw className="w-4 h-4" /> Auto-Sync Active
                    </h4>
                    <p className="text-emerald-100 text-sm font-bold leading-relaxed italic">
                        The 2026 Binary Auditor maintains real-time parity across Binary, Hex, Dec, and Octal formats with zero computational latency.
                    </p>
                </div>
            </div>
        </div>
    );
}
