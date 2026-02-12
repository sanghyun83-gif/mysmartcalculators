"use client";

import dynamic from "next/dynamic";

const CalculatorClient = dynamic(
    () => import("../CalculatorClient"),
    {
        ssr: false,
        loading: () => <div className="min-h-[600px] flex items-center justify-center bg-slate-950">
            <div className="w-12 h-12 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin" />
        </div>
    }
);

export default function SalaryCalculatorWrapper() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <CalculatorClient />
        </div>
    );
}
