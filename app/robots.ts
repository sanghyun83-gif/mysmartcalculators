import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/_next/', '/api/', '/*?_next_data='],
        },
        sitemap: 'https://mysmartcalculators.com/sitemap.xml',
    }
}
