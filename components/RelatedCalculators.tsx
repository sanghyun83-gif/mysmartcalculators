"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getRelatedCalculators, getCategoryInfo } from "@/lib/categories";

interface RelatedCalculatorsProps {
    currentCalc: string;
    count?: number;
}

export function RelatedCalculators({ currentCalc, count = 5 }: RelatedCalculatorsProps) {
    const related = getRelatedCalculators(currentCalc, count);
    const categoryInfo = getCategoryInfo(currentCalc);

    if (related.length === 0) return null;

    return (
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
            <h3 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wide">
                {categoryInfo?.name || 'Related'} Calculators
            </h3>
            <nav className="space-y-1">
                {related.map((calc) => (
                    <Link
                        key={calc.id}
                        href={`/${calc.id}`}
                        className="flex items-center justify-between py-2 px-3 rounded-lg text-slate-300 hover:text-amber-400 hover:bg-slate-700/50 transition-colors text-sm group"
                    >
                        <span>{calc.name}</span>
                        <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-amber-400 transition-colors" />
                    </Link>
                ))}
            </nav>
            <div className="mt-3 pt-3 border-t border-slate-700">
                <Link
                    href="/"
                    className="text-xs text-slate-500 hover:text-amber-400 transition-colors"
                >
                    View All Calculators ??                </Link>
            </div>
        </div>
    );
}

export default RelatedCalculators;
