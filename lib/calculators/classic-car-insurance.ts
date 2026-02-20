// ============================================
// CLASSIC CAR INSURANCE CALCULATOR - SUPREME v1.0
// Target CPC: $12.40 | Intent: High-Value Coverage
// Protocol: S-Class Supreme (Deep Hybrid)
// ============================================

export const SITE = {
    name: "Classic Car Insurance Calculator",
    tagline: "2026 Institutional Classic Car Coverage Estimator",
    description: "Detailed agreed-value insurance estimations specifically for antique, vintage, and modern collector vehicles. Optimized for 2026 insurance statutory requirements.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/classic-car-insurance",
};

// ============================================
// TECHNICAL CONSTANTS (2026 Audit Specs)
// ============================================
export const CLASSIC_DATA_2026 = {
    marketTrends: [
        { era: "Pre-War (1900-1945)", growth: "-2.1%", volatility: "High", liquidity: "Low" },
        { era: "Golden Age (1946-1974)", growth: "+4.2%", volatility: "Low", liquidity: "High" },
        { era: "Modern Classic (1990-2005)", growth: "+12.8%", volatility: "Medium", liquidity: "Very High" },
        { era: "Post-Modern (2006-2026)", growth: "+7.5%", volatility: "Medium", liquidity: "High" },
    ],
    stateAuditIndices: [
        { state: "California", riskFactor: 1.15, regulatoryGrade: "A" },
        { state: "Texas", riskFactor: 0.95, regulatoryGrade: "B+" },
        { state: "Florida", riskFactor: 1.25, regulatoryGrade: "B" },
        { state: "New York", riskFactor: 1.12, regulatoryGrade: "A-" },
        { state: "New Jersey (2026)", riskFactor: 1.05, regulatoryGrade: "A+" },
    ],
    premiumBaseRates: {
        recreational: 0.015, // 1.5% of agreed value
        limited_use: 0.022,    // 2.2% of agreed value
        exotic_tier: 0.035,   // 3.5% of agreed value
    }
};

export const VEHICLE_TYPES = [
    { id: "antique", name: "Antique (Pre-1948)", factor: 1.1, description: "Vehicles 75+ years old, primary original parts." },
    { id: "classic", name: "Classic (1948-1979)", factor: 1.0, description: "Post-war collector quality, high market stability." },
    { id: "muscle", name: "Muscle Car (1964-1973)", factor: 1.25, description: "High-performance American V8 icons (e.g., GTO, Mustang)." },
    { id: "modern_classic", name: "Modern Classic (1990-2010)", factor: 1.4, description: "Rapidly appreciating 90s/00s cultural icons (e.g., Skyline, Supra)." },
    { id: "exotic", name: "Exotic/Hypercar", factor: 1.7, description: "Limited production, specialized maintenance requirements." },
    { id: "custom", name: "Resto-Mod / Custom", factor: 1.35, description: "Classic chassis with modern performance upgrades." },
];

export const COVERAGE_OPTIONS = [
    { id: "agreed-value", name: "Agreed Value (Recommended)", description: "Fixed payout amount determined upfront; no depreciation. (Best for 2026 inflation protection)" },
    { id: "stated-value", name: "Stated Value", description: "Market-linked coverage up to a specified limit; subject to depreciation." },
    { id: "replacement", name: "Guaranteed Replacement", description: "Pays for a vehicle of equal quality, even if cost exceeds policy limits." },
];

export const STATISTICS = [
    { label: "Classic Premium Savings", value: "42.5%", description: "vs Standard Auto (2026 Avg)" },
    { label: "Modern Classic Growth", value: "12.8%", description: "Annual Value Appreciation" },
    { label: "Total Collector Value", value: "$48.5B", description: "Global Insured Asset Base" },
    { label: "Avg Claims Payout", value: "$88,200", description: "High-value Agreed Settlements" },
];

export const FAQS = [
    {
        question: "How is classic car insurance calculated in 2026?",
        answer: "Calculations are primarily based on the 'Agreed Value' of the vehicle rather than Actual Cash Value (ACV). Because classic cars typically appreciate, insurers use market indices (like the Hagerty Valuation Tool or S-Class benchmarks) combined with usage restrictions (typically <2,500 miles/year) and storage quality to determine premiums. On average, you pay 1.5% to 2.5% of the car's agreed value annually."
    },
    {
        question: "What is the 2026 'Modern Classic' insurance trend?",
        answer: "Modern Classics (1990–2010) are the fastest-growing segment in 2026. Due to high demand from Gen X and Millennial collectors, vehicles like the Nissan Skyline GT-R or Porsche 996 are seeing insurance premiums rise alongside their rapidly increasing market valuations. For these cars, choosing 'Inflation Riders' that adjust agreed value automatically every 12 months is becoming industry standard."
    },
    {
        question: "Does New Jersey's 2026 insurance law change affect classic cars?",
        answer: "Yes. NJ's 2026 law increasing liability minimums to 35/70/25 applies to all registered passenger vehicles, including classics. While your hull coverage (Agreed Value) remains the same, your liability portion of the premium may see a 5-8% increase depending on your current limits."
    },
    {
        question: "Why is agreed value better than stated value for 2026?",
        answer: "Stated Value allows an insurer to pay the amount you stated OR the actual cash value (ACV), whichever is lower at the time of loss. In a high-inflation environment like 2026, ACV often lags behind actual market value. Agreed Value guarantees the full amount on the policy page regardless of market dips, providing 100% financial certainty."
    },
    {
        question: "What are the secure storage requirements for 2026 policies?",
        answer: "Strict underwriting in 2026 requires the vehicle to be stored in an 'enclosed, permanent structure' (garage, private hangar, or specialized collector facility). Storing a classic car in a carport or on a driveway typically disqualifies it for low-cost specialty insurance and forces it onto a more expensive standard auto policy."
    },
    {
        question: "What mileage limits apply to 2026 collector policies?",
        answer: "Standard classic tiers usually offer 1,000, 2,500, or 5,000-mile annual plans. For 2026, several insurers have introduced 'Leisure Multi-Tier' plans which allow for occasional commuting up to 10 days per month, though this typically increases premiums by 15.4%."
    }
];

export const CITATIONS = [
    {
        source: "Insurance Information Institute (2026 Report)",
        title: "Collector Car Underwriting Standards",
        url: "https://www.iii.org/",
        year: "2026"
    },
    {
        source: "NADA / J.D. Power Collector Car Guide",
        title: "2026 Market Valuation Benchmarks",
        url: "https://www.nadaguides.com/Cars/Collectors",
        year: "2026"
    }
];

export const RELATED_CALCULATORS = [
    { name: "Auto Insurance", url: "/auto-insurance", description: "Standard daily driver coverage" },
    { name: "Motorcycle Insurance", url: "/motorcycle-insurance", description: "Vintage and modern bike coverage" },
    { name: "Collectible Insurance", url: "/collectible-insurance", description: "Fine art and memorabilia coverage" },
    { name: "RV Insurance", url: "/rv-insurance", description: "Modern and vintage motorhome coverage" },
];
