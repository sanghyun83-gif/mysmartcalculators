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

    // 3. Dynamic Calculator Pages (Priority 0.8)
    const calculators = Object.keys(CATEGORY_MAP);
    const calculatorPages: MetadataRoute.Sitemap = calculators.map(calc => ({
        url: `${BASE_URL}/${calc}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    return [...corePages, ...hubPages, ...calculatorPages];
}
