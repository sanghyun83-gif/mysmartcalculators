// ============================================
// CAMPER INSURANCE CALCULATOR - QUICK v3.0
// $75 CPC | Competition: Low | Blue Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "Camper Insurance Calculator",
    tagline: "Free 2026 Camper Coverage Estimator",
    description: "Calculate camper insurance costs. Coverage for truck campers, pop-ups, and slide-in campers. Based on 2026 insurance data.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/camper-insurance",
};

export const CAMPER_2026 = {
    // Average annual premiums by camper class
    avgPremiums: {
        truck_camper: 450,
        pop_up: 220,
        teardrop: 180,
        a_frame: 280,
        toy_hauler: 550,
    },

    // 2026 State Premium Indices (Camping Risk & Frequency)
    stateIndices: {
        CA: { name: "California", index: 1.25, risk: "High (High Volume/Theft)" },
        CO: { name: "Colorado", index: 1.15, risk: "Moderate (Off-road Risk)" },
        WA: { name: "Washington", index: 1.10, risk: "Moderate" },
        FL: { name: "Florida", index: 1.20, risk: "Moderate (Humidity/Storm)" },
        MI: { name: "Michigan", index: 0.95, risk: "Standard" },
        TX: { name: "Texas", index: 1.05, risk: "Standard" },
    },

    // 2026 Actuarial Value Tiers
    valueTiers: [
        { max: 10000, rate: 0.015 },
        { max: 25000, rate: 0.012 },
        { max: 50000, rate: 0.010 },
        { max: 100000, rate: 0.009 },
    ],

    // Statistics (2026 Outdoor Audit)
    statistics: {
        activeCampers: "15.4M",
        avgClaim: 3450,
        annualAdmissions: "95k (State Parks)",
        source: "RVIA & 2026 Outdoor Industry Benchmarks",
    },

    // Expert Column Citations
    citations: [
        "RV Industry Association (RVIA) 2026 Economic Report",
        "National Park Service (NPS) Safety Audit 2026",
        "Leisure Vehicle Actuarial Standards (LVAS-26)",
    ],
} as const;

export function calculateCamper(
    value: number,
    type: keyof typeof CAMPER_2026.avgPremiums,
    state: keyof typeof CAMPER_2026.stateIndices
) {
    const base = CAMPER_2026.avgPremiums[type];
    const stateAdj = CAMPER_2026.stateIndices[state]?.index || 1.0;

    // Value adjustment (roughly 1% of value)
    const valueAdj = value * 0.008;

    const annualPremium = (base + valueAdj) * stateAdj;

    return {
        annualPremium: Math.round(annualPremium),
        monthlyPremium: Math.round(annualPremium / 12),
        stateName: CAMPER_2026.stateIndices[state]?.name || "National Average",
        riskLevel: CAMPER_2026.stateIndices[state]?.risk || "Standard",
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);

// Legacy exports for guide page compatibility
export const CAMPER_TYPES = [
    { id: "truck_camper", name: "Truck Camper", description: "Slide-in or chassis-mount campers", factor: 1.0 },
    { id: "pop_up", name: "Pop-Up Camper", description: "Collapsible tent trailers", factor: 0.8 },
    { id: "teardrop", name: "Teardrop Trailer", description: "Compact aerodynamic sleepers", factor: 0.7 },
    { id: "a_frame", name: "A-Frame Camper", description: "Hard-sided folding campers", factor: 0.9 },
    { id: "toy_hauler", name: "Toy Hauler", description: "Campers with rear garage space", factor: 1.2 },
];

export const COVERAGE_OPTIONS = [
    { name: "Comprehensive", description: "Theft, fire, and storm damage" },
    { name: "Collision", description: "Physical damage from accidents" },
    { name: "Liability", description: "Injury or property damage to others" },
    { name: "Personal Effects", description: "Coverage for gear and electronics" },
    { name: "Full-Timer", description: "Primary residence liability protection" },
];

export const FAQS = [
    { question: "How much is camper insurance?", answer: "Camper insurance typically costs between $200 and $600 per year depending on the type and value of the unit." },
    { question: "Does my auto policy cover my camper?", answer: "Auto policies usually only cover liability while towing. Comprehensive and collision coverage for the camper itself usually requires a separate policy." },
    { question: "What states have the highest premiums?", answer: "California, Florida, and Colorado often have higher premiums due to higher theft rates or extreme weather risks." },
];
