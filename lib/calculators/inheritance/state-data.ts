export interface StateTaxData {
    name: string;
    hasInheritanceTax: boolean;
    hasEstateTax: boolean;
    inheritanceRates: string;
    inheritanceExemptions: string;
    estateThreshold: number; // 0 if no state estate tax
    estateMaxRate: number; // percentage
}

export const STATE_TAX_DATA: Record<string, StateTaxData> = {
    AL: { name: "Alabama", hasInheritanceTax: false, hasEstateTax: false, inheritanceRates: "None", inheritanceExemptions: "N/A", estateThreshold: 0, estateMaxRate: 0 },
    AK: { name: "Alaska", hasInheritanceTax: false, hasEstateTax: false, inheritanceRates: "None", inheritanceExemptions: "N/A", estateThreshold: 0, estateMaxRate: 0 },
    AZ: { name: "Arizona", hasInheritanceTax: false, hasEstateTax: false, inheritanceRates: "None", inheritanceExemptions: "N/A", estateThreshold: 0, estateMaxRate: 0 },
    AR: { name: "Arkansas", hasInheritanceTax: false, hasEstateTax: false, inheritanceRates: "None", inheritanceExemptions: "N/A", estateThreshold: 0, estateMaxRate: 0 },
    CA: { name: "California", hasInheritanceTax: false, hasEstateTax: false, inheritanceRates: "None", inheritanceExemptions: "N/A", estateThreshold: 0, estateMaxRate: 0 },
    CO: { name: "Colorado", hasInheritanceTax: false, hasEstateTax: false, inheritanceRates: "None", inheritanceExemptions: "N/A", estateThreshold: 0, estateMaxRate: 0 },
    CT: { name: "Connecticut", hasInheritanceTax: false, hasEstateTax: true, inheritanceRates: "None", inheritanceExemptions: "N/A", estateThreshold: 13610000, estateMaxRate: 12 },
    DE: { name: "Delaware", hasInheritanceTax: false, hasEstateTax: false, inheritanceRates: "None", inheritanceExemptions: "N/A", estateThreshold: 0, estateMaxRate: 0 },
    FL: { name: "Florida", hasInheritanceTax: false, hasEstateTax: false, inheritanceRates: "None", inheritanceExemptions: "N/A", estateThreshold: 0, estateMaxRate: 0 },
    GA: { name: "Georgia", hasInheritanceTax: false, hasEstateTax: false, inheritanceRates: "None", inheritanceExemptions: "N/A", estateThreshold: 0, estateMaxRate: 0 },
    HI: { name: "Hawaii", hasInheritanceTax: false, hasEstateTax: true, inheritanceRates: "None", inheritanceExemptions: "N/A", estateThreshold: 5490000, estateMaxRate: 20 },
    ID: { name: "Idaho", hasInheritanceTax: false, hasEstateTax: false, inheritanceRates: "None", inheritanceExemptions: "N/A", estateThreshold: 0, estateMaxRate: 0 },
    IL: { name: "Illinois", hasInheritanceTax: false, hasEstateTax: true, inheritanceRates: "None", inheritanceExemptions: "N/A", estateThreshold: 4000000, estateMaxRate: 16 },
    IN: { name: "Indiana", hasInheritanceTax: false, hasEstateTax: false, inheritanceRates: "None", inheritanceExemptions: "N/A", estateThreshold: 0, estateMaxRate: 0 },
    IA: { name: "Iowa", hasInheritanceTax: true, hasEstateTax: false, inheritanceRates: "Up to 15%", inheritanceExemptions: "Spouse, lineal heirs fully exempt", estateThreshold: 0, estateMaxRate: 0 },
    KS: { name: "Kansas", hasInheritanceTax: false, hasEstateTax: false, inheritanceRates: "None", inheritanceExemptions: "N/A", estateThreshold: 0, estateMaxRate: 0 },
    KY: { name: "Kentucky", hasInheritanceTax: true, hasEstateTax: false, inheritanceRates: "Up to 16%", inheritanceExemptions: "Class A (Spouse, Child, Parent) exempt", estateThreshold: 0, estateMaxRate: 0 },
    LA: { name: "Louisiana", hasInheritanceTax: false, hasEstateTax: false, inheritanceRates: "None", inheritanceExemptions: "N/A", estateThreshold: 0, estateMaxRate: 0 },
    ME: { name: "Maine", hasInheritanceTax: false, hasEstateTax: true, inheritanceRates: "None", inheritanceExemptions: "N/A", estateThreshold: 6410000, estateMaxRate: 12 },
    MD: { name: "Maryland", hasInheritanceTax: true, hasEstateTax: true, inheritanceRates: "10%", inheritanceExemptions: "Spouse, lineal heirs exempt", estateThreshold: 5000000, estateMaxRate: 16 },
    MA: { name: "Massachusetts", hasInheritanceTax: false, hasEstateTax: true, inheritanceRates: "None", inheritanceExemptions: "N/A", estateThreshold: 2000000, estateMaxRate: 16 },
    MI: { name: "Michigan", hasInheritanceTax: false, hasEstateTax: false, inheritanceRates: "None", inheritanceExemptions: "N/A", estateThreshold: 0, estateMaxRate: 0 },
    MN: { name: "Minnesota", hasInheritanceTax: false, hasEstateTax: true, inheritanceRates: "None", inheritanceExemptions: "N/A", estateThreshold: 3000000, estateMaxRate: 16 },
    MS: { name: "Mississippi", hasInheritanceTax: false, hasEstateTax: false, inheritanceRates: "None", inheritanceExemptions: "N/A", estateThreshold: 0, estateMaxRate: 0 },
    MO: { name: "Missouri", hasInheritanceTax: false, hasEstateTax: false, inheritanceRates: "None", inheritanceExemptions: "N/A", estateThreshold: 0, estateMaxRate: 0 },
    MT: { name: "Montana", hasInheritanceTax: false, hasEstateTax: false, inheritanceRates: "None", inheritanceExemptions: "N/A", estateThreshold: 0, estateMaxRate: 0 },
    NE: { name: "Nebraska", hasInheritanceTax: true, hasEstateTax: false, inheritanceRates: "Up to 18%", inheritanceExemptions: "Spouse fully exempt; lower rates for relatives", estateThreshold: 0, estateMaxRate: 0 },
    NV: { name: "Nevada", hasInheritanceTax: false, hasEstateTax: false, inheritanceRates: "None", inheritanceExemptions: "N/A", estateThreshold: 0, estateMaxRate: 0 },
    NH: { name: "New Hampshire", hasInheritanceTax: false, hasEstateTax: false, inheritanceRates: "None", inheritanceExemptions: "N/A", estateThreshold: 0, estateMaxRate: 0 },
    NJ: { name: "New Jersey", hasInheritanceTax: true, hasEstateTax: false, inheritanceRates: "Up to 16%", inheritanceExemptions: "Spouse, lineal heirs exempt", estateThreshold: 0, estateMaxRate: 0 },
    NM: { name: "New Mexico", hasInheritanceTax: false, hasEstateTax: false, inheritanceRates: "None", inheritanceExemptions: "N/A", estateThreshold: 0, estateMaxRate: 0 },
    NY: { name: "New York", hasInheritanceTax: false, hasEstateTax: true, inheritanceRates: "None", inheritanceExemptions: "N/A", estateThreshold: 6940000, estateMaxRate: 16 },
    NC: { name: "North Carolina", hasInheritanceTax: false, hasEstateTax: false, inheritanceRates: "None", inheritanceExemptions: "N/A", estateThreshold: 0, estateMaxRate: 0 },
    ND: { name: "North Dakota", hasInheritanceTax: false, hasEstateTax: false, inheritanceRates: "None", inheritanceExemptions: "N/A", estateThreshold: 0, estateMaxRate: 0 },
    OH: { name: "Ohio", hasInheritanceTax: false, hasEstateTax: false, inheritanceRates: "None", inheritanceExemptions: "N/A", estateThreshold: 0, estateMaxRate: 0 },
    OK: { name: "Oklahoma", hasInheritanceTax: false, hasEstateTax: false, inheritanceRates: "None", inheritanceExemptions: "N/A", estateThreshold: 0, estateMaxRate: 0 },
    OR: { name: "Oregon", hasInheritanceTax: false, hasEstateTax: true, inheritanceRates: "None", inheritanceExemptions: "N/A", estateThreshold: 1000000, estateMaxRate: 16 },
    PA: { name: "Pennsylvania", hasInheritanceTax: true, hasEstateTax: false, inheritanceRates: "Up to 15%", inheritanceExemptions: "Spouse fully exempt; 4.5% for children", estateThreshold: 0, estateMaxRate: 0 },
    RI: { name: "Rhode Island", hasInheritanceTax: false, hasEstateTax: true, inheritanceRates: "None", inheritanceExemptions: "N/A", estateThreshold: 1774583, estateMaxRate: 16 },
    SC: { name: "South Carolina", hasInheritanceTax: false, hasEstateTax: false, inheritanceRates: "None", inheritanceExemptions: "N/A", estateThreshold: 0, estateMaxRate: 0 },
    SD: { name: "South Dakota", hasInheritanceTax: false, hasEstateTax: false, inheritanceRates: "None", inheritanceExemptions: "N/A", estateThreshold: 0, estateMaxRate: 0 },
    TN: { name: "Tennessee", hasInheritanceTax: false, hasEstateTax: false, inheritanceRates: "None", inheritanceExemptions: "N/A", estateThreshold: 0, estateMaxRate: 0 },
    TX: { name: "Texas", hasInheritanceTax: false, hasEstateTax: false, inheritanceRates: "None", inheritanceExemptions: "N/A", estateThreshold: 0, estateMaxRate: 0 },
    UT: { name: "Utah", hasInheritanceTax: false, hasEstateTax: false, inheritanceRates: "None", inheritanceExemptions: "N/A", estateThreshold: 0, estateMaxRate: 0 },
    VT: { name: "Vermont", hasInheritanceTax: false, hasEstateTax: true, inheritanceRates: "None", inheritanceExemptions: "N/A", estateThreshold: 5000000, estateMaxRate: 16 },
    VA: { name: "Virginia", hasInheritanceTax: false, hasEstateTax: false, inheritanceRates: "None", inheritanceExemptions: "N/A", estateThreshold: 0, estateMaxRate: 0 },
    WA: { name: "Washington", hasInheritanceTax: false, hasEstateTax: true, inheritanceRates: "None", inheritanceExemptions: "N/A", estateThreshold: 2193000, estateMaxRate: 20 },
    WV: { name: "West Virginia", hasInheritanceTax: false, hasEstateTax: false, inheritanceRates: "None", inheritanceExemptions: "N/A", estateThreshold: 0, estateMaxRate: 0 },
    WI: { name: "Wisconsin", hasInheritanceTax: false, hasEstateTax: false, inheritanceRates: "None", inheritanceExemptions: "N/A", estateThreshold: 0, estateMaxRate: 0 },
    WY: { name: "Wyoming", hasInheritanceTax: false, hasEstateTax: false, inheritanceRates: "None", inheritanceExemptions: "N/A", estateThreshold: 0, estateMaxRate: 0 },
};

export function getStatesList() {
    return Object.entries(STATE_TAX_DATA).map(([code, data]) => ({
        code,
        name: data.name
    })).sort((a, b) => a.name.localeCompare(b.name));
}
