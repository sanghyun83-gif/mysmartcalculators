import { MetadataRoute } from 'next'

const BASE_URL = 'https://mysmartcalculators.com'

export default function robots(): MetadataRoute.Robots {
    return {
        // Core20 정책:
        // - robots는 전체 crawl을 허용한다.
        // - 인덱싱 우선순위는 sitemap(Core20 중심) + middleware(noindex/410)로 제어한다.
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: [
                '/_next/',
                '/api/',
                '/*?_next_data=',
            ],
        },
        sitemap: `${BASE_URL}/sitemap.xml`,
        host: BASE_URL,
    }
}
