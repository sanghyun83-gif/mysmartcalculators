// ============================================
// COMMISSION CALCULATOR - S-CLASS SUPREME v1.0
// $55 CPC | Competition: Low | Emerald Theme
// Institutional-Grade 2026 Audit Engine
// ============================================

export const SITE = {
    name: "Commission Calculator",
    tagline: "Official 2026 Sales & Real Estate Audit Engine",
    description: "Institutional-grade commission analyzer for SaaS sales, real estate transactions, and affiliate payouts. Integrated 2026 accelerators and state-specific audit benchmarks.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/commission",
};

// ============================================
// 2026 INSTITUTIONAL DATA BENCHMARKS
// ============================================
export const COMMISSION_DATA_2026 = {
    realEstate: {
        nationalAverage: 5.70,
        listingSplit: 2.88,
        buyerSplit: 2.82,
        highValueTier: { threshold: 1000000, rate: 4.5 }, // CA typical for >$1M
        states: {
            CA: 5.03,
            OH: 5.73,
            FL: 5.60,
            TX: 5.55,
            NY: 5.20
        }
    },
    saas: {
        baseRate: 10, // % of ACV
        sdrRate: 3, // % of deal
        accountExec: 12,
        accelerators: [
            { threshold: 100, multiplier: 1.0 }, // 100% of quota
            { threshold: 120, multiplier: 1.5 }, // 120% of quota = 1.5x commission on overage
            { threshold: 150, multiplier: 2.0 }  // 150% of quota = 2x commission on overage
        ]
    },
    affiliate: {
        saas: { min: 20, max: 70, recurring: 30 },
        finance: { leadValue: 80, percentage: 35 },
        health: { min: 3, max: 20 },
        retail: { min: 5, max: 15 }
    },
    auto: {
        grossProfitRate: 25, // % of gross profit
        volumeBonus: [
            { units: 8, bonus: 500 },
            { units: 12, bonus: 1000 },
            { units: 20, bonus: 2500 }
        ]
    }
};

export const COMMISSION_STRUCTURES = [
    { id: "flat", name: "Flat Rate", description: "Standard % on total contract value" },
    { id: "tiered", name: "Tiered Accelerator", description: "Multi-level rates based on quota attainment" },
    { id: "marginal", name: "Marginal Rate", description: "Variable rates per unit/deal size" },
    { id: "draw", name: "Draw Against Commission", description: "Recoverable or non-recoverable salary floor" },
];

export const INDUSTRY_BENCHMARKS = [
    { industry: "SaaS Enterprise", rate: "12-18%", metric: "ACV", trend: "Increasing" },
    { industry: "Residential Real Estate", rate: "5.0-6.0%", metric: "Sale Price", trend: "Downward" },
    { industry: "Commercial Insurance", rate: "10-15%", metric: "Premium", trend: "Stable" },
    { industry: "Financial Services", rate: "1.0-3.0%", metric: "AUM", trend: "Rising" },
    { industry: "Digital Products", rate: "30-50%", metric: "Sale Price", trend: "High" },
];

// ============================================
// AUDIT STATISTICS
// ============================================
export const STATISTICS = [
    { label: "2026 SaaS OTE", value: "$162,400", description: "Avg Account Executive" },
    { label: "RE Commission Split", value: "2.88% / 2.82%", description: "Listing / Buyer Net" },
    { label: "Accelerator Cap", value: "3.5x", description: "Typical Enterprise Max" },
    { label: "Affiliate Payout", value: "$18.5B", description: "2025 Market Valuation" },
];

// ================= ==========================
// INSTITUTIONAL FAQS - 6 Questions
// ============================================
export const FAQS = [
    {
        question: "How is the 2026 SaaS commission accelerator calculated?",
        answer: "Accelerators are typically applied to billings exceeding 100% of your annual quota. For example, if your base commission is 10% and you have a 1.5x accelerator for reaching 110% of your goal, you would earn 15% on all revenue generated beyond that 100% threshold."
    },
    {
        question: "What happened to real estate commissions after the NAR settlement?",
        answer: "Post-settlement (2024-2026), buyer agent compensation is no longer listed in the Multiple Listing Service (MLS). This has shifted commissions to a more negotiable field, with buyer agent rates averaging 2.82% in 2026, though many buyers now negotiate fee-based or hourly structures instead of traditional percentages."
    },
    {
        question: "Is sales commission taxed as supplemental income?",
        answer: "Yes. In the US, commissions are treated as 'supplemental wages.' Employers can choose to withhold at a flat federal rate of 22% (or 37% for amounts over $1M) or use the aggregate method. Note that your final tax liability is determined by your total annual income, so you may receive a refund or owe more upon filing."
    },
    {
        question: "What is the difference between a recoverable and non-recoverable draw?",
        answer: "A recoverable draw is a loan against future commissions that must be repaid if you don't earn enough in sales. A non-recoverable draw is a guaranteed floor; if your commissions are lower than the draw, you keep the money, but if they are higher, you keep the excess."
    },
    {
        question: "How do 1099 contractors calculate self-employment tax on commissions?",
        answer: "1099 recipients must pay both the employer and employee portions of Social Security and Medicare (totaling 15.3% as of 2026). It is recommended to set aside 25-30% of every commission check for federal, state, and self-employment taxes."
    },
    {
        question: "What are 'Tail' commissions in SaaS or Insurance?",
        answer: "Tail commissions (or renewals) are trailing payments made to the agent as long as the customer remains active. In SaaS, this is often 2-5% for years 2 and 3, whereas in Life Insurance, it can be significantly higher for the first 5-10 years of the policy life."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "National Association of Realtors (NAR)",
        title: "2026 Real Estate Commission Benchmarks",
        url: "https://www.nar.realtor/",
        year: "2026"
    },
    {
        source: "Salesforce Compensation Survey",
        title: "Enterprise SaaS Sales Multipliers 2026",
        url: "https://www.salesforce.com/",
        year: "2026"
    },
    {
        source: "IRS Publication 15",
        title: "Supplemental Wage Tax Treatment",
        url: "https://www.irs.gov/publications/p15",
        year: "2026"
    }
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Bonus Tax", url: "/bonus-tax", description: "Commission tax audit" },
    { name: "1099 Tax", url: "/1099-tax", description: "Independent contractor audit" },
    { name: "SaaS Calculator", url: "/saas", description: "Subscription growth" },
    { name: "Closing Costs", url: "/closing-cost", description: "Real estate fees" },
];
