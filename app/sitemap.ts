import { MetadataRoute } from 'next'
import { CATEGORY_MAP, Category } from '@/lib/categories'

const BASE_URL = "https://mysmartcalculators.com";

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
    const tier1 = ['truck-accident']; // Priority 1.0 (Flagship)
    const tier2 = ['ozempic', 'camp-lejeune', 'roundup']; // Priority 0.9 (Medical/Mass Tort)
    const tier3 = ['bmi', 'calorie']; // Priority 0.5 (Low Value)

    const calculatorPages: MetadataRoute.Sitemap = calculators.map(calc => {
        let priority = 0.7; // Standard
        let changeFreq: any = 'monthly';

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

    return [...corePages, ...hubPages, ...calculatorPages];
}
