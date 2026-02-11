import { MetadataRoute } from 'next'
import { CATEGORY_MAP, Category } from '@/lib/categories'

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
];

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    // 1. Core Pages (Priority 1.0)
    const corePages: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            lastModified: now,
            changeFrequency: 'daily',
            priority: 1,
        },
    ];

    // 2. S-Class Category Hubs (Priority 0.9)
    const categories: Category[] = ['legal', 'finance', 'insurance', 'medical', 'family', 'health'];
    const hubPages: MetadataRoute.Sitemap = categories.map(cat => ({
        url: `${BASE_URL}/category/${cat}`,
        lastModified: now,
        changeFrequency: 'daily',
        priority: 0.9,
    }));

    // 3. Dynamic Calculator Pages (ROI Differential Mapping)
    const calculators = Object.keys(CATEGORY_MAP);

    // High-ROI Segments
    // High-ROI Segments
    const tier1 = ['truck-accident']; // Priority 1.0 (Flagship)
    const tier2 = [
        'ozempic', 'camp-lejeune', 'roundup',
        'bmi', 'calorie', 'scientific', 'percentage', 'age', 'gpa',
        'mortgage', 'loan', 'tip', 'compound-interest', 'grade'
    ]; // Priority 0.9 (Big Volume + Medical)
    const tier3: string[] = []; // Reserved for deprecated/low-value

    const calculatorPages: MetadataRoute.Sitemap = calculators.map(calc => {
        let priority = 0.7; // Standard
        let changeFreq: "monthly" | "weekly" | "daily" = 'monthly';

        if (tier1.includes(calc)) priority = 1.0;
        else if (tier2.includes(calc)) priority = 0.9;
        else if (tier3.includes(calc)) priority = 0.5;

        return {
            url: `${BASE_URL}/${calc}`,
            lastModified: now,
            changeFrequency: changeFreq,
            priority: priority,
        };
    });

    // 4. Subpages for High-Value Calculators (NEW - adds 120+ URLs)
    const subpageUrls: MetadataRoute.Sitemap = [];
    for (const calc of CALCULATORS_WITH_SUBPAGES) {
        for (const subpage of SUBPAGES) {
            subpageUrls.push({
                url: `${BASE_URL}/${calc}/${subpage}`,
                lastModified: now,
                changeFrequency: 'monthly',
                priority: 0.6,
            });
        }
    }

    return [...corePages, ...hubPages, ...calculatorPages, ...subpageUrls];
}

