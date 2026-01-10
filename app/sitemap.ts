import { MetadataRoute } from 'next'

import { CATEGORY_MAP } from '@/lib/categories'

// All calculator paths dynamically generated from CATEGORY_MAP
const CALCULATORS = Object.keys(CATEGORY_MAP);

const BASE_URL = "https://mysmartcalculators.com";

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date().toISOString();

    // Homepage
    const routes: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 1,
        },
    ];

    // All calculator pages
    for (const calc of CALCULATORS) {
        routes.push({
            url: `${BASE_URL}/${calc}`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.9,
        });
    }

    return routes;
}
