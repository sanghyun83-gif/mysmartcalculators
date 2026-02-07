"use client";

import React from "react";
import { TrendingUp, TrendingDown, Info } from "lucide-react";

interface ResultMetricProps {
    label: string;
    value: string | number;
    description?: string;
    trend?: {
        type: "up" | "down";
        label: string;
    };
    variant?: "default" | "highlight" | "critical";
    className?: string;
}

export const ResultMetric: React.FC<ResultMetricProps> = ({
    label,
    value,
    description,
    trend,
    variant = "default",
    className = "",
}) => {
    const variantStyles = {
        default: "bg-slate-800/50 border-slate-700",
        highlight: "bg-purple-500/10 border-purple-500/30",
        critical: "bg-red-500/10 border-red-500/20",
    };

    const labelStyles = {
        default: "text-slate-500",
        highlight: "text-purple-400",
        critical: "text-red-400",
    };

    const valueStyles = {
        default: "text-white",
        highlight: "text-purple-400",
        critical: "text-red-500",
    };

    return (
        <div className={`p-4 rounded-xl border ${variantStyles[variant]} ${className}`}>
            <div className="flex justify-between items-start mb-1">
                <span className={`text-[10px] font-black uppercase tracking-widest ${labelStyles[variant]}`}>
                    {label}
                </span>
                {trend && (
                    <div className={`flex items-center gap-1 text-[10px] font-bold ${trend.type === 'up' ? 'text-emerald-400' : 'text-red-400'}`}>
                        {trend.type === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                        {trend.label}
                    </div>
                )}
            </div>

            <div className={`text-2xl font-black tracking-tight ${valueStyles[variant]}`}>
                {value}
            </div>

            {description && (
                <div className="mt-2 flex items-start gap-1.5">
                    <Info className="w-3 h-3 text-slate-600 mt-0.5" />
                    <p className="text-[10px] font-medium text-slate-500 italic leading-relaxed">
                        {description}
                    </p>
                </div>
            )}
        </div>
    );
};
