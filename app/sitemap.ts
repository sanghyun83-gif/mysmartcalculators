import { MetadataRoute } from 'next'

// All calculator paths
const CALCULATORS = [
    // Legal
    "18-wheeler", "car-accident", "truck-accident", "motorcycle-accident", "slip-and-fall",
    "workers-comp", "wrongful-death", "malpractice", "dog-bite", "nursing-home", "birth-injury",
    "spinal-cord", "tbi", "burn-injury", "whiplash", "mesothelioma", "asbestos", "product-liability",
    "crane", "scaffolding", "welding", "pipeline", "refinery", "mining-injury", "factory-injury",
    "forklift", "explosion", "gas-explosion", "chemical-burn", "benzene", "electrocution",
    "construction-accident", "commercial-vehicle", "aviation", "offshore", "oil-rig", "fela",
    "pedestrian-accident", "rideshare-accident", "hit-and-run", "drunk-driving", "DUI",
    "pool-drowning", "lemon-law", "paragard", "hernia-mesh", "hip-implant", "knee-implant",
    "cpap", "tepezza", "ozempic", "depo-provera", "hair-relaxer", "talcum-powder", "camp-lejeune",
    "paraquat", "glp1-vision",

    // Finance
    "mortgage", "loan-payoff", "refinance", "heloc", "home-afford", "down-payment", "closing-cost",
    "pmi", "dti", "tax", "capital-gains", "estate-tax", "crypto-tax", "self-employment",
    "retirement", "401k", "roth-ira", "rmd", "pension", "annuity", "student-loan", "fafsa", "529",
    "social-security", "ssdi", "unemployment", "severance", "overtime", "wage-garnishment",
    "gi-bill", "va-disability", "disability", "ltd", "structured-settlement", "bail-bond",
    "alimony", "child-support", "divorce", "property-division", "tip",

    // Insurance
    "auto-insurance", "health-insurance", "life-insurance", "renters-insurance", "pet-insurance",
    "boat-insurance", "umbrella-insurance", "sr22",

    // Health
    "bmi", "calorie",

    // Other
    "social-media",
];

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
