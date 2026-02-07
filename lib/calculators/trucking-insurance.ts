// ============================================
// TRUCKING INSURANCE CALCULATOR - ADVANCED v3.0
// $155 CPC | Competition: Medium | Blue Theme
// 4 Routes | 10 FAQs | 7 Inputs | 3 Citations
// ============================================

export const SITE = {
    name: "Trucking Insurance Calculator",
    tagline: "Free 2026 Commercial Trucking Insurance Estimator",
    description: "Calculate trucking insurance costs for your fleet. Semi-trucks, cargo, liability coverage. Based on 2026 FMCSA and NAIC industry data.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/trucking-insurance",
};

// ============================================
// TRUCK TYPES
// ============================================
export const TRUCK_TYPES = [
    { id: "semi", name: "Semi-Truck/Tractor-Trailer", basePremium: 12000, description: "Long-haul commercial trucks" },
    { id: "box-truck", name: "Box Truck", basePremium: 6500, description: "Delivery and moving trucks" },
    { id: "flatbed", name: "Flatbed Truck", basePremium: 8500, description: "Construction and heavy equipment" },
    { id: "tanker", name: "Tanker Truck", basePremium: 15000, description: "Hazmat and liquid transport" },
    { id: "refrigerated", name: "Refrigerated Truck", basePremium: 11000, description: "Temperature-controlled cargo" },
    { id: "dump-truck", name: "Dump Truck", basePremium: 7500, description: "Construction materials" },
];

// ============================================
// COVERAGE TYPES
// ============================================
export const COVERAGE_TYPES = [
    { id: "liability", name: "Primary Liability", required: true, minCoverage: 750000, description: "FMCSA minimum $750K for interstate" },
    { id: "cargo", name: "Cargo Insurance", required: true, avgPremium: 2500, description: "Protects freight value" },
    { id: "physical", name: "Physical Damage", required: false, avgPremium: 3500, description: "Collision and comprehensive" },
    { id: "bobtail", name: "Bobtail/Non-Trucking", required: false, avgPremium: 800, description: "Coverage without trailer" },
    { id: "trailer", name: "Trailer Interchange", required: false, avgPremium: 1200, description: "Non-owned trailers" },
    { id: "uninsured", name: "Uninsured Motorist", required: false, avgPremium: 600, description: "UM/UIM protection" },
];

// ============================================
// OPERATING RADIUS
// ============================================
export const OPERATING_RADIUS = [
    { id: "local", name: "Local (Under 50 miles)", factor: 0.8, description: "City/regional delivery" },
    { id: "intermediate", name: "Intermediate (50-200 miles)", factor: 1.0, description: "Regional routes" },
    { id: "long-haul", name: "Long Haul (200-500 miles)", factor: 1.25, description: "Multi-state operations" },
    { id: "nationwide", name: "Nationwide (500+ miles)", factor: 1.5, description: "Cross-country trucking" },
];

// ============================================
// CARGO TYPES (Risk Factors)
// ============================================
export const CARGO_TYPES = [
    { id: "general", name: "General Freight", riskFactor: 1.0 },
    { id: "refrigerated", name: "Refrigerated/Perishable", riskFactor: 1.15 },
    { id: "hazmat", name: "Hazardous Materials", riskFactor: 1.75 },
    { id: "oversized", name: "Oversized/Heavy Haul", riskFactor: 1.35 },
    { id: "auto", name: "Auto Transport", riskFactor: 1.25 },
    { id: "livestock", name: "Livestock", riskFactor: 1.20 },
];

// ============================================
// FLEET SIZE DISCOUNTS
// ============================================
export const FLEET_DISCOUNTS = [
    { min: 1, max: 2, discount: 0, tier: "Single" },
    { min: 3, max: 5, discount: 0.05, tier: "Small Fleet" },
    { min: 6, max: 10, discount: 0.10, tier: "Medium Fleet" },
    { min: 11, max: 25, discount: 0.15, tier: "Large Fleet" },
    { min: 26, max: 50, discount: 0.20, tier: "Enterprise" },
    { min: 51, max: 999, discount: 0.25, tier: "Major Carrier" },
];

// ============================================
// DRIVER EXPERIENCE FACTORS
// ============================================
export const DRIVER_EXPERIENCE = [
    { years: "0-1", factor: 1.50, description: "New CDL holder" },
    { years: "1-2", factor: 1.25, description: "Entry level" },
    { years: "2-5", factor: 1.0, description: "Experienced" },
    { years: "5-10", factor: 0.90, description: "Veteran" },
    { years: "10+", factor: 0.80, description: "Master" },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Avg Semi-Truck Premium", value: "$12,000-$18,000", description: "Annual per truck" },
    { label: "FMCSA Minimum", value: "$750,000", description: "Interstate liability requirement" },
    { label: "Cargo Coverage", value: "$100,000+", description: "Typical minimum" },
    { label: "Fleet Discount", value: "Up to 25%", description: "For 50+ trucks" },
];

// ============================================
// FAQS - 10 Questions
// ============================================
export const FAQS = [
    {
        question: "How much does trucking insurance cost in 2026?",
        answer: "Commercial trucking insurance costs $10,000-$20,000 per truck annually for semi-trucks. Box trucks cost $5,000-$10,000. Factors include driving record, cargo type, and operating radius. Hazmat carriers pay 1.5-2x more than standard freight."
    },
    {
        question: "What is the FMCSA minimum insurance requirement?",
        answer: "FMCSA requires $750,000 minimum liability for interstate trucking of non-hazmat freight. Hazmat carriers need $1,000,000-$5,000,000 depending on cargo. Intrastate requirements vary by state, typically $300,000-$750,000."
    },
    {
        question: "What types of coverage do truckers need?",
        answer: "Essential coverage includes Primary Liability (required), Cargo Insurance, Physical Damage, Bobtail/Non-Trucking liability, and Uninsured Motorist. Most carriers also add Trailer Interchange coverage for non-owned trailers."
    },
    {
        question: "Does cargo type affect trucking insurance rates?",
        answer: "Yes, significantly. General freight is baseline. Hazmat increases premiums 50-75%. Auto transport adds 20-25%. Refrigerated cargo adds 10-15%. High-value cargo requires additional Cargo insurance."
    },
    {
        question: "What is bobtail insurance?",
        answer: "Bobtail (non-trucking) insurance covers your truck when operating without a trailer, such as driving home after a delivery. It's NOT covered by your motor carrier's policy when you're off-dispatch."
    },
    {
        question: "How do I get cheaper trucking insurance?",
        answer: "Reduce costs by: maintaining clean driving records (biggest factor), increasing fleet size (5-25% discounts), installing telematics/ELDs, taking defensive driving courses, and bundling coverage with one insurer."
    },
    {
        question: "What is trailer interchange coverage?",
        answer: "Trailer Interchange insurance covers damage to trailers you don't own but are using under a trailer interchange agreement. It's essential for owner-operators hauling trailers owned by shippers or other carriers."
    },
    {
        question: "Does operating radius affect insurance cost?",
        answer: "Yes. Local operations (under 50 miles) pay about 20% less. Long-haul (500+ miles) pays 25-50% more due to increased exposure, fatigue risks, and multi-state regulatory complexity."
    },
    {
        question: "What is the difference between primary and contingent cargo insurance?",
        answer: "Primary cargo insurance pays first regardless of fault. Contingent cargo only pays if the motor carrier's insurance doesn't cover the loss. Shippers often require proof of primary cargo coverage."
    },
    {
        question: "How does CDL experience affect trucking insurance rates?",
        answer: "New CDL holders (0-2 years) pay 25-50% more than veterans. Most insurers require 2 years of CDL experience. Drivers with 10+ years clean records can save 15-20% on premiums."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "FMCSA",
        title: "Minimum Levels of Financial Responsibility",
        url: "https://www.fmcsa.dot.gov/registration/insurance-requirements",
        year: "2026"
    },
    {
        source: "NAIC",
        title: "Commercial Auto Insurance Market Report",
        url: "https://content.naic.org/",
        year: "2026"
    },
    {
        source: "Insurance Information Institute",
        title: "Commercial Trucking Insurance Facts",
        url: "https://www.iii.org/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Commercial Auto", url: "/commercial-auto", description: "Business vehicle coverage" },
    { name: "Fleet Insurance", url: "/fleet-insurance", description: "Multi-vehicle discounts" },
    { name: "Business Insurance", url: "/business-insurance", description: "General commercial coverage" },
    { name: "Workers Comp Premium", url: "/workers-comp-premium", description: "Employee injury protection" },
];
