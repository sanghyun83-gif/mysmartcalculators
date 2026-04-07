"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getRelatedCalculators, getCategoryInfo } from "@/lib/categories";
import { ALL_CALCULATORS } from "@/lib/all-calculators";
import { CORE_CALCULATOR_IDS, CORE_CALCULATOR_SET } from "@/lib/strategy/core-calculators";

const CORE20_RELATED_MAP: Partial<Record<string, string[]>> = {
    "mortgage": ["loan", "refinance", "home-afford", "tax", "workers-comp"],
    "loan": ["mortgage", "refinance", "home-afford", "tax", "compound-interest"],
    "refinance": ["mortgage", "loan", "home-afford", "tax", "workers-comp"],
    "tax": ["self-employment", "loan", "mortgage", "refinance", "percentage"],
    "self-employment": ["tax", "loan", "percentage", "time-calculator", "conversion"],
    "home-afford": ["mortgage", "loan", "refinance", "tax", "compound-interest"],
    "compound-interest": ["loan", "mortgage", "tip", "percentage", "conversion"],
    "tip": ["percentage", "tax", "conversion", "loan", "time-calculator"],
    "percentage": ["tip", "tax", "conversion", "scientific", "loan"],
    "scientific": ["percentage", "conversion", "time-calculator", "date", "age"],
    "time-calculator": ["date", "age", "conversion", "scientific", "percentage"],
    "conversion": ["scientific", "percentage", "time-calculator", "date", "tip"],
    "date": ["time-calculator", "age", "conversion", "pregnancy", "ovulation"],
    "age": ["date", "time-calculator", "bmi", "calorie", "body-fat"],
    "bmi": ["calorie", "body-fat", "age", "ovulation", "pregnancy"],
    "calorie": ["bmi", "body-fat", "age", "time-calculator", "conversion"],
    "body-fat": ["bmi", "calorie", "age", "percentage", "scientific"],
    "pregnancy": ["ovulation", "date", "age", "bmi", "calorie"],
    "ovulation": ["pregnancy", "date", "age", "bmi", "time-calculator"],
    "workers-comp": ["loan", "tax", "refinance", "mortgage", "home-afford"],
};

interface RelatedCalculatorsProps {
    currentCalc: string;
    count?: number;
}

export function RelatedCalculators({ currentCalc, count = 5 }: RelatedCalculatorsProps) {
    const categoryInfo = getCategoryInfo(currentCalc);

    const relatedInCategory = getRelatedCalculators(currentCalc, 30).filter((calc) =>
        CORE_CALCULATOR_SET.has(calc.id)
    );

    const byIdName = new Map(ALL_CALCULATORS.map((calc) => [calc.id, calc.name]));

    const mappedCore = (CORE20_RELATED_MAP[currentCalc] ?? [])
        .filter((id) => CORE_CALCULATOR_SET.has(id))
        .map((id) => ({ id, name: byIdName.get(id) || id }));

    const fallbackCore = CORE_CALCULATOR_IDS
        .filter((id) => id !== currentCalc)
        .map((id) => ({ id, name: byIdName.get(id) || id }));

    const dedup = new Map<string, { id: string; name: string }>();
    [...mappedCore, ...relatedInCategory, ...fallbackCore].forEach((item) => {
        if (!dedup.has(item.id)) dedup.set(item.id, item);
    });

    const related = Array.from(dedup.values()).slice(0, count);

    if (related.length === 0) return null;

    return (
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
            <h3 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wide">
                {categoryInfo?.name || 'Related'} Core Calculators
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
                    href="/#core-20"
                    className="text-xs text-slate-500 hover:text-amber-400 transition-colors"
                >
                    View Core Calculator Hub →
                </Link>
            </div>
        </div>
    );
}

export default RelatedCalculators;
