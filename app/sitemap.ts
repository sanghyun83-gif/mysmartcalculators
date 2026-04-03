import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'
import { CATEGORY_MAP, Category } from '@/lib/categories'
import { STATE_WC_DATA } from '@/lib/calculators/workers-comp'
import { TAX_SCENARIO_CLUSTERS } from '@/lib/tax/evidence'

const BASE_URL = "https://mysmartcalculators.com";

// High-ROI calculator subpages to include
const SUBPAGES = ['settlements', 'legal-guide', 'regulations', 'calculator'];

// Calculators known to have subpages (high-value ones)
const CALCULATORS_WITH_SUBPAGES = [
    'truck-accident', 'car-accident', 'motorcycle-accident', 'slip-and-fall',
    'workers-comp', 'wrongful-death', 'malpractice', 'dog-bite', 'nursing-home',
    'mesothelioma', 'asbestos', 'ozempic', 'camp-lejeune', 'roundup', 'hernia-mesh',
    '401k-growth', 'mortgage', 'tax', 'student-loan', 'social-security', 'ssdi',
    'auto-insurance', 'life-insurance', 'pet-insurance', 'bmi', 'calorie',
    'scientific', 'percentage', 'age', 'gpa', 'loan', 'tip', 'compound-interest',
    'child-support', 'alimony', 'divorce', 'retirement', 'roth-ira', 'fafsa',
    'body-fat', 'salary', 'due-date', 'grade', 'binary', 'date', 'conversion',
    'square-footage', 'ovulation'
];

function getFileMtime(filePath: string): Date | null {
    try {
        return fs.statSync(filePath).mtime;
    } catch {
        return null;
    }
}

function resolveRootPageLastmod(now: Date): Date {
    const rootPagePath = path.join(process.cwd(), 'app', 'page.tsx');
    return getFileMtime(rootPagePath) ?? now;
}

function resolveStaticPageLastmod(slug: string, now: Date): Date {
    const staticPagePath = path.join(process.cwd(), 'app', slug, 'page.tsx');
    return getFileMtime(staticPagePath) ?? now;
}

function resolveCategoryLastmod(category: Category, now: Date): Date {
    const categoryPagePath = path.join(process.cwd(), 'app', '(calculators)', 'category', '[slug]', 'page.tsx');
    return getFileMtime(categoryPagePath) ?? now;
}

function resolveCalculatorLastmod(calculatorId: string, now: Date): Date {
    const calcPagePath = path.join(process.cwd(), 'app', '(calculators)', calculatorId, 'page.tsx');
    return getFileMtime(calcPagePath) ?? now;
}

function resolveSubpageLastmod(calculatorId: string, subpage: string, now: Date): Date {
    const subpageFilePath = path.join(process.cwd(), 'app', '(calculators)', calculatorId, subpage, 'page.tsx');
    return getFileMtime(subpageFilePath) ?? now;
}

function getExistingCalculatorSubpages(): Map<string, Set<string>> {
    const calculatorsRoot = path.join(process.cwd(), 'app', '(calculators)');
    const result = new Map<string, Set<string>>();

    try {
        const calculatorDirs = fs.readdirSync(calculatorsRoot, { withFileTypes: true });
        for (const calculatorDir of calculatorDirs) {
            if (!calculatorDir.isDirectory()) continue;
            const calculatorId = calculatorDir.name;
            const calculatorPath = path.join(calculatorsRoot, calculatorId);

            try {
                const entries = fs.readdirSync(calculatorPath, { withFileTypes: true });
                const subpages = new Set<string>();
                for (const entry of entries) {
                    if (entry.isDirectory()) subpages.add(entry.name);
                }
                result.set(calculatorId, subpages);
            } catch {
                // Skip unreadable calculator directories.
            }
        }
    } catch {
        // Return empty map if the calculators directory cannot be read.
    }

    return result;
}

function getExistingCalculatorIds(): Set<string> {
    const calculatorsRoot = path.join(process.cwd(), 'app', '(calculators)');

    try {
        const directories = fs.readdirSync(calculatorsRoot, { withFileTypes: true });
        return new Set(
            directories
                .filter((entry) => entry.isDirectory())
                .map((entry) => entry.name)
                .filter((name) => name !== 'category' && !name.startsWith('['))
        );
    } catch {
        return new Set();
    }
}

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();
    const existingCalculatorIds = getExistingCalculatorIds();

    // 1. Core Pages (Priority 1.0)
    const corePages: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            lastModified: resolveRootPageLastmod(now),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${BASE_URL}/calculators`,
            lastModified: resolveStaticPageLastmod('calculators', now),
            changeFrequency: 'daily',
            priority: 0.95,
        },
    ];

    // 1.1 Static Trust/Policy Pages (indexed navigational pages)
    const staticSlugs = ['about', 'privacy', 'terms', 'contact', 'accessibility'];
    const staticPages: MetadataRoute.Sitemap = staticSlugs.map((slug) => ({
        url: `${BASE_URL}/${slug}`,
        lastModified: resolveStaticPageLastmod(slug, now),
        changeFrequency: 'monthly',
        priority: 0.6,
    }));

    // 2. S-Class Category Hubs (Priority 0.9)
    const categories: Category[] = ['legal', 'finance', 'insurance', 'medical', 'family', 'health'];
    const hubPages: MetadataRoute.Sitemap = categories.map(cat => ({
        url: `${BASE_URL}/category/${cat}`,
        lastModified: resolveCategoryLastmod(cat, now),
        changeFrequency: 'daily',
        priority: 0.9,
    }));

    // 3. Dynamic Calculator Pages (ROI Differential Mapping)
    const calculators = Object.keys(CATEGORY_MAP).filter((calc) => existingCalculatorIds.has(calc));

    // High-ROI Segments
    const tier1 = [
        'truck-accident', 'bmi', 'scientific', 'mortgage', 'percentage',
        'gpa', 'age', 'loan', 'pregnancy', 'calorie', 'grade', 'tip',
        'compound-interest', 'due-date', 'salary', 'body-fat', 'binary',
        'date', 'conversion', 'square-footage', 'ovulation', 'time-calculator'
    ]; // Priority 1.0 (Flagship Domain)
    const tier2 = [
        'ozempic', 'camp-lejeune', 'roundup'
    ]; // Priority 0.9 (Big Volume + Medical)
    const tier3: string[] = []; // Reserved for deprecated/low-value

    const calculatorPages: MetadataRoute.Sitemap = calculators.map(calc => {
        let priority = 0.7; // Standard
        let changeFreq: "monthly" | "weekly" | "daily" = 'monthly';

        if (tier1.includes(calc)) {
            priority = 1.0;
            changeFreq = 'daily';
        }
        else if (tier2.includes(calc)) priority = 0.9;
        else if (tier3.includes(calc)) priority = 0.5;

        return {
            url: `${BASE_URL}/${calc}`,
            lastModified: resolveCalculatorLastmod(calc, now),
            changeFrequency: changeFreq,
            priority: priority,
        };
    });

    // 4. Subpages for High-Value Calculators (NEW - adds 120+ URLs)
    const subpageUrls: MetadataRoute.Sitemap = [];
    const existingSubpagesByCalculator = getExistingCalculatorSubpages();
    for (const calc of CALCULATORS_WITH_SUBPAGES) {
        const existingSubpages = existingSubpagesByCalculator.get(calc);
        if (!existingSubpages) continue;

        for (const subpage of SUBPAGES) {
            if (existingSubpages.has(subpage)) {
                subpageUrls.push({
                    url: `${BASE_URL}/${calc}/${subpage}`,
                    lastModified: resolveSubpageLastmod(calc, subpage, now),
                    changeFrequency: 'monthly',
                    priority: 0.6,
                });
            }
        }
    }

    // 5. Workers Comp state clusters
    const workersCompStateUrls: MetadataRoute.Sitemap = existingCalculatorIds.has('workers-comp')
        ? Object.keys(STATE_WC_DATA).map((code) => ({
            url: `${BASE_URL}/workers-comp/${code.toLowerCase()}`,
            lastModified: resolveCalculatorLastmod('workers-comp', now),
            changeFrequency: 'weekly',
            priority: 0.65,
        }))
        : [];

    const taxScenarioUrls: MetadataRoute.Sitemap = existingCalculatorIds.has('tax')
        ? TAX_SCENARIO_CLUSTERS.map((cluster) => ({
            url: `${BASE_URL}/tax/${cluster.slug}`,
            lastModified: resolveCalculatorLastmod('tax', now),
            changeFrequency: 'weekly',
            priority: 0.65,
        }))
        : [];

    return [...corePages, ...staticPages, ...hubPages, ...calculatorPages, ...subpageUrls, ...workersCompStateUrls, ...taxScenarioUrls];
}
