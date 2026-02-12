"use client";

import React, { useState, useEffect } from "react";
import {
    Binary,
    ArrowLeft,
    Delete,
    RotateCcw,
    HelpCircle,
    Settings2,
    Cpu
} from "lucide-react";
import Link from "next/link";

export default function ScientificCalculatorPage() {
    const [display, setDisplay] = useState("0");
    const [expression, setExpression] = useState("");
    const [mode, setMode] = useState<"deg" | "rad">("deg");
    const [history, setHistory] = useState<string[]>([]);
    const [isError, setIsError] = useState(false);

    const handleNumber = (num: string) => {
        if (isError) handleClear();
        if (display === "0" || isError) {
            setDisplay(num);
        } else {
            setDisplay(display + num);
        }
    };

    const handleOperator = (op: string) => {
        if (isError) return;
        setExpression(display + " " + op + " ");
        setDisplay("0");
    };

    const handleFunction = (fn: string) => {
        if (isError) return;
        try {
            let val = parseFloat(display);
            let result = 0;

            if (mode === "deg" && ["sin", "cos", "tan"].includes(fn)) {
                val = (val * Math.PI) / 180;
            }

            switch (fn) {
                case "sin": result = Math.sin(val); break;
                case "cos": result = Math.cos(val); break;
                case "tan": result = Math.tan(val); break;
                case "log": result = Math.log10(val); break;
                case "ln": result = Math.log(val); break;
                case "sqrt": result = Math.sqrt(val); break;
                case "square": result = Math.pow(val, 2); break;
                case "pi": result = Math.PI; break;
                case "e": result = Math.E; break;
            }

            const formattedResult = Number(result.toFixed(10)).toString();
            setDisplay(formattedResult);
            setHistory(prev => [fn + "(" + display + ") = " + formattedResult, ...prev.slice(0, 4)]);
        } catch (e) {
            setIsError(true);
            setDisplay("Error");
        }
    };

    const handleEqual = () => {
        if (isError) return;
        try {
            const fullExpr = expression + display;
            // Native eval for basic arithmetic (safely sanitized in production apps usually, but here for demo logic)
            // In a real S-Class app, we'd use a math parser library.
            const result = eval(fullExpr.replace(/×/g, "*").replace(/÷/g, "/"));
            const formattedResult = Number(result.toFixed(10)).toString();

            setHistory(prev => [fullExpr + " = " + formattedResult, ...prev.slice(0, 4)]);
            setDisplay(formattedResult);
            setExpression("");
        } catch (e) {
            setIsError(true);
            setDisplay("Syntax Error");
        }
    };

    const handleClear = () => {
        setDisplay("0");
        setExpression("");
        setIsError(false);
    };

    const handleDelete = () => {
        if (isError) {
            handleClear();
            return;
        }
        if (display.length > 1) {
            setDisplay(display.slice(0, -1));
        } else {
            setDisplay("0");
        }
    };

    return (
        <main className="pb-20 px-6">
            <div className="max-w-xl mx-auto">
                {/* Calculator Core */}
                <div className="bg-slate-900 border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-900/10">
                    {/* Display Area */}
                    <div className="p-10 bg-slate-950/50 border-b border-white/5 flex flex-col items-end gap-2 h-44 justify-end">
                        <div className="text-slate-500 font-bold italic text-sm tracking-tight truncate w-full text-right">{expression}</div>
                        <div className={`text-6xl font-black italic tracking-tighter ${isError ? 'text-rose-500' : 'text-white'} truncate w-full text-right`}>
                            {display}
                        </div>
                    </div>

                    {/* Interactive Keypad */}
                    <div className="p-8 grid grid-cols-4 gap-4 bg-slate-900">
                        {/* Scientific Row 1 */}
                        <button onClick={() => handleFunction("sin")} className="p-5 bg-white/5 rounded-2xl text-slate-400 font-black italic text-xs uppercase hover:bg-white/10 transition-all transform active:scale-95">sin</button>
                        <button onClick={() => handleFunction("cos")} className="p-5 bg-white/5 rounded-2xl text-slate-400 font-black italic text-xs uppercase hover:bg-white/10 transition-all transform active:scale-95">cos</button>
                        <button onClick={() => handleFunction("tan")} className="p-5 bg-white/5 rounded-2xl text-slate-400 font-black italic text-xs uppercase hover:bg-white/10 transition-all transform active:scale-95">tan</button>
                        <button onClick={handleDelete} className="p-5 bg-rose-500/10 rounded-2xl text-rose-500 font-black italic text-xs uppercase hover:bg-rose-500/20 transition-all flex items-center justify-center"><Delete className="w-5 h-5" /></button>

                        {/* Scientific Row 2 */}
                        <button onClick={() => handleFunction("log")} className="p-5 bg-white/5 rounded-2xl text-slate-400 font-black italic text-xs uppercase hover:bg-white/10 transition-all transform active:scale-95">log</button>
                        <button onClick={() => handleFunction("ln")} className="p-5 bg-white/5 rounded-2xl text-slate-400 font-black italic text-xs uppercase hover:bg-white/10 transition-all transform active:scale-95">ln</button>
                        <button onClick={() => handleFunction("sqrt")} className="p-5 bg-white/5 rounded-2xl text-slate-400 font-black italic text-xs uppercase hover:bg-white/10 transition-all transform active:scale-95">√</button>
                        <button onClick={handleClear} className="p-5 bg-slate-800 rounded-2xl text-white font-black italic text-xs uppercase hover:bg-slate-700 transition-all">AC</button>

                        {/* Number Pad Area */}
                        {[7, 8, 9].map(n => (
                            <button key={n} onClick={() => handleNumber(n.toString())} className="p-6 bg-white/5 rounded-3xl text-white text-2xl font-black italic hover:bg-blue-600/10 transition-all transform active:scale-95">{n}</button>
                        ))}
                        <button onClick={() => handleOperator("/")} className="p-6 bg-blue-500/10 rounded-3xl text-blue-500 text-2xl font-black italic hover:bg-blue-600/20 transition-all transform active:scale-95">÷</button>

                        {[4, 5, 6].map(n => (
                            <button key={n} onClick={() => handleNumber(n.toString())} className="p-6 bg-white/5 rounded-3xl text-white text-2xl font-black italic hover:bg-blue-600/10 transition-all transform active:scale-95">{n}</button>
                        ))}
                        <button onClick={() => handleOperator("*")} className="p-6 bg-blue-500/10 rounded-3xl text-blue-500 text-2xl font-black italic hover:bg-blue-600/20 transition-all transform active:scale-95">×</button>

                        {[1, 2, 3].map(n => (
                            <button key={n} onClick={() => handleNumber(n.toString())} className="p-6 bg-white/5 rounded-3xl text-white text-2xl font-black italic hover:bg-blue-600/10 transition-all transform active:scale-95">{n}</button>
                        ))}
                        <button onClick={() => handleOperator("-")} className="p-6 bg-blue-500/10 rounded-3xl text-blue-500 text-2xl font-black italic hover:bg-blue-600/20 transition-all transform active:scale-95">−</button>

                        <button onClick={() => handleNumber("0")} className="p-6 bg-white/5 rounded-3xl text-white text-2xl font-black italic hover:bg-blue-600/10 transition-all transform active:scale-95">0</button>
                        <button onClick={() => handleNumber(".")} className="p-6 bg-white/5 rounded-3xl text-white text-2xl font-black italic hover:bg-blue-600/10 transition-all transform active:scale-95">.</button>
                        <button onClick={handleEqual} className="col-span-1 p-6 bg-blue-600 rounded-3xl text-white text-2xl font-black italic hover:bg-blue-500 transition-all transform active:scale-95 shadow-lg shadow-blue-600/20">=</button>
                        <button onClick={() => handleOperator("+")} className="p-6 bg-blue-500/10 rounded-3xl text-blue-500 text-2xl font-black italic hover:bg-blue-600/20 transition-all transform active:scale-95">+</button>
                    </div>
                </div>

                {/* Quick History / Stats */}
                <div className="mt-12 space-y-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest italic flex items-center gap-2">
                            <RotateCcw className="w-3 h-3" /> Recent Computations
                        </h3>
                    </div>
                    <div className="space-y-3">
                        {history.length === 0 ? (
                            <div className="p-6 border border-white/5 rounded-2xl text-center text-slate-600 text-xs font-bold italic uppercase tracking-widest">Logic Stack Empty</div>
                        ) : (
                            history.map((entry, i) => (
                                <div key={i} className="p-5 bg-white/5 border border-white/5 rounded-2xl flex justify-between items-center group hover:bg-white/10 transition-all animate-in fade-in slide-in-from-bottom-2">
                                    <span className="text-slate-400 font-bold italic text-sm">{entry.split("=")[0]}</span>
                                    <span className="text-blue-500 font-black italic text-base uppercase"> = {entry.split("=")[1]}</span>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {/* Scientific Badging Section */}
                <div className="mt-12 p-8 border border-blue-500/10 rounded-[3rem] bg-blue-500/5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="p-4 bg-blue-500/10 rounded-2xl">
                            <Cpu className="w-6 h-6 text-blue-500" />
                        </div>
                        <div>
                            <h4 className="text-white font-black italic uppercase tracking-tighter">FP-32 Precision Engine</h4>
                            <p className="text-slate-500 text-[10px] font-bold italic uppercase tracking-widest">IEEE 754 Arithmetic Compliance</p>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center gap-2 px-4 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[9px] font-black text-green-500 uppercase tracking-widest">System Optimal</span>
                    </div>
                </div>
            </div>
        </main>
    );
}
