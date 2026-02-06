export interface MortgageStateData {
    name: string;
    avgPropertyTax: number; // percentage
    avgInsurance: number; // yearly
    medianHomePrice: number;
    pmiRate: number; // percentage
}

export const STATE_MORTGAGE_DATA: Record<string, MortgageStateData> = {
    AL: { name: "Alabama", avgPropertyTax: 0.41, avgInsurance: 1540, medianHomePrice: 220000, pmiRate: 0.5 },
    AK: { name: "Alaska", avgPropertyTax: 1.18, avgInsurance: 1200, medianHomePrice: 350000, pmiRate: 0.55 },
    AZ: { name: "Arizona", avgPropertyTax: 0.62, avgInsurance: 1100, medianHomePrice: 440000, pmiRate: 0.5 },
    AR: { name: "Arkansas", avgPropertyTax: 0.61, avgInsurance: 1800, medianHomePrice: 200000, pmiRate: 0.5 },
    CA: { name: "California", avgPropertyTax: 0.75, avgInsurance: 1250, medianHomePrice: 830000, pmiRate: 0.45 },
    CO: { name: "Colorado", avgPropertyTax: 0.49, avgInsurance: 2100, medianHomePrice: 560000, pmiRate: 0.5 },
    CT: { name: "Connecticut", avgPropertyTax: 2.15, avgInsurance: 1300, medianHomePrice: 380000, pmiRate: 0.6 },
    DE: { name: "Delaware", avgPropertyTax: 0.58, avgInsurance: 900, medianHomePrice: 360000, pmiRate: 0.5 },
    FL: { name: "Florida", avgPropertyTax: 0.86, avgInsurance: 2400, medianHomePrice: 410000, pmiRate: 0.55 },
    GA: { name: "Georgia", avgPropertyTax: 0.90, avgInsurance: 1450, medianHomePrice: 360000, pmiRate: 0.5 },
    HI: { name: "Hawaii", avgPropertyTax: 0.28, avgInsurance: 1100, medianHomePrice: 850000, pmiRate: 0.45 },
    ID: { name: "Idaho", avgPropertyTax: 0.61, avgInsurance: 1000, medianHomePrice: 470000, pmiRate: 0.5 },
    IL: { name: "Illinois", avgPropertyTax: 2.23, avgInsurance: 1400, medianHomePrice: 270000, pmiRate: 0.65 },
    IN: { name: "Indiana", avgPropertyTax: 0.84, avgInsurance: 1200, medianHomePrice: 230000, pmiRate: 0.5 },
    IA: { name: "Iowa", avgPropertyTax: 1.57, avgInsurance: 1300, medianHomePrice: 210000, pmiRate: 0.55 },
    KS: { name: "Kansas", avgPropertyTax: 1.43, avgInsurance: 1900, medianHomePrice: 220000, pmiRate: 0.55 },
    KY: { name: "Kentucky", avgPropertyTax: 0.85, avgInsurance: 1500, medianHomePrice: 210000, pmiRate: 0.5 },
    LA: { name: "Louisiana", avgPropertyTax: 0.55, avgInsurance: 2200, medianHomePrice: 210000, pmiRate: 0.5 },
    ME: { name: "Maine", avgPropertyTax: 1.28, avgInsurance: 1100, medianHomePrice: 380000, pmiRate: 0.55 },
    MD: { name: "Maryland", avgPropertyTax: 1.07, avgInsurance: 1200, medianHomePrice: 410000, pmiRate: 0.5 },
    MA: { name: "Massachusetts", avgPropertyTax: 1.17, avgInsurance: 1400, medianHomePrice: 620000, pmiRate: 0.55 },
    MI: { name: "Michigan", avgPropertyTax: 1.48, avgInsurance: 1250, medianHomePrice: 240000, pmiRate: 0.6 },
    MN: { name: "Minnesota", avgPropertyTax: 1.11, avgInsurance: 1600, medianHomePrice: 340000, pmiRate: 0.55 },
    MS: { name: "Mississippi", avgPropertyTax: 0.79, avgInsurance: 1750, medianHomePrice: 180000, pmiRate: 0.5 },
    MO: { name: "Missouri", avgPropertyTax: 0.97, avgInsurance: 1800, medianHomePrice: 240000, pmiRate: 0.55 },
    MT: { name: "Montana", avgPropertyTax: 0.83, avgInsurance: 1350, medianHomePrice: 460000, pmiRate: 0.5 },
    NE: { name: "Nebraska", avgPropertyTax: 1.67, avgInsurance: 1950, medianHomePrice: 240000, pmiRate: 0.55 },
    NV: { name: "Nevada", avgPropertyTax: 0.60, avgInsurance: 950, medianHomePrice: 450000, pmiRate: 0.5 },
    NH: { name: "New Hampshire", avgPropertyTax: 1.86, avgInsurance: 1100, medianHomePrice: 450000, pmiRate: 0.6 },
    NJ: { name: "New Jersey", avgPropertyTax: 2.47, avgInsurance: 1200, medianHomePrice: 500000, pmiRate: 0.7 },
    NM: { name: "New Mexico", avgPropertyTax: 0.80, avgInsurance: 1300, medianHomePrice: 300000, pmiRate: 0.5 },
    NY: { name: "New York", avgPropertyTax: 1.73, avgInsurance: 1350, medianHomePrice: 450000, pmiRate: 0.65 },
    NC: { name: "North Carolina", avgPropertyTax: 0.80, avgInsurance: 1400, medianHomePrice: 330000, pmiRate: 0.5 },
    ND: { name: "North Dakota", avgPropertyTax: 1.00, avgInsurance: 1500, medianHomePrice: 260000, pmiRate: 0.55 },
    OH: { name: "Ohio", avgPropertyTax: 1.53, avgInsurance: 1200, medianHomePrice: 220000, pmiRate: 0.6 },
    OK: { name: "Oklahoma", avgPropertyTax: 0.90, avgInsurance: 2100, medianHomePrice: 200000, pmiRate: 0.5 },
    OR: { name: "Oregon", avgPropertyTax: 0.93, avgInsurance: 1100, medianHomePrice: 500000, pmiRate: 0.5 },
    PA: { name: "Pennsylvania", avgPropertyTax: 1.55, avgInsurance: 1100, medianHomePrice: 260000, pmiRate: 0.6 },
    RI: { name: "Rhode Island", avgPropertyTax: 1.53, avgInsurance: 1300, medianHomePrice: 440000, pmiRate: 0.6 },
    SC: { name: "South Carolina", avgPropertyTax: 0.57, avgInsurance: 1600, medianHomePrice: 300000, pmiRate: 0.5 },
    SD: { name: "South Dakota", avgPropertyTax: 1.22, avgInsurance: 1400, medianHomePrice: 300000, pmiRate: 0.55 },
    TN: { name: "Tennessee", avgPropertyTax: 0.64, avgInsurance: 1650, medianHomePrice: 310000, pmiRate: 0.5 },
    TX: { name: "Texas", avgPropertyTax: 1.74, avgInsurance: 2600, medianHomePrice: 350000, pmiRate: 0.6 },
    UT: { name: "Utah", avgPropertyTax: 0.60, avgInsurance: 1000, medianHomePrice: 530000, pmiRate: 0.5 },
    VT: { name: "Vermont", avgPropertyTax: 1.90, avgInsurance: 1150, medianHomePrice: 360000, pmiRate: 0.6 },
    VA: { name: "Virginia", avgPropertyTax: 0.82, avgInsurance: 1300, medianHomePrice: 400000, pmiRate: 0.5 },
    WA: { name: "Washington", avgPropertyTax: 0.94, avgInsurance: 1150, medianHomePrice: 620000, pmiRate: 0.5 },
    WV: { name: "West Virginia", avgPropertyTax: 0.59, avgInsurance: 1300, medianHomePrice: 160000, pmiRate: 0.5 },
    WI: { name: "Wisconsin", avgPropertyTax: 1.73, avgInsurance: 1100, medianHomePrice: 280000, pmiRate: 0.65 },
    WY: { name: "Wyoming", avgPropertyTax: 0.61, avgInsurance: 1250, medianHomePrice: 340000, pmiRate: 0.5 },
};

export function getStatesList() {
    return Object.entries(STATE_MORTGAGE_DATA).map(([code, data]) => ({
        code,
        name: data.name
    })).sort((a, b) => a.name.localeCompare(b.name));
}
