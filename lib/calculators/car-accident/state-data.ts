export interface StateLegalData {
    name: string;
    biSOL: number; // Bodily Injury Statute of Limitations (years)
    pdSOL: number; // Property Damage Statute of Limitations (years)
    negligence: "Pure Comparative" | "Modified 50%" | "Modified 51%" | "Contributory";
    limitationsNote?: string;
}

export const STATE_ACCIDENT_DATA: Record<string, StateLegalData> = {
    AL: { name: "Alabama", biSOL: 2, pdSOL: 2, negligence: "Contributory" },
    AK: { name: "Alaska", biSOL: 2, pdSOL: 2, negligence: "Pure Comparative" },
    AZ: { name: "Arizona", biSOL: 2, pdSOL: 2, negligence: "Pure Comparative" },
    AR: { name: "Arkansas", biSOL: 3, pdSOL: 3, negligence: "Modified 50%" },
    CA: { name: "California", biSOL: 2, pdSOL: 3, negligence: "Pure Comparative" },
    CO: { name: "Colorado", biSOL: 3, pdSOL: 3, negligence: "Modified 50%" },
    CT: { name: "Connecticut", biSOL: 2, pdSOL: 2, negligence: "Modified 51%" },
    DE: { name: "Delaware", biSOL: 2, pdSOL: 2, negligence: "Modified 51%" },
    FL: { name: "Florida", biSOL: 2, pdSOL: 2, negligence: "Modified 51%" }, // Changed from Pure to 51% in 2023
    GA: { name: "Georgia", biSOL: 2, pdSOL: 4, negligence: "Modified 50%" },
    HI: { name: "Hawaii", biSOL: 2, pdSOL: 2, negligence: "Modified 51%" },
    ID: { name: "Idaho", biSOL: 2, pdSOL: 3, negligence: "Modified 50%" },
    IL: { name: "Illinois", biSOL: 2, pdSOL: 5, negligence: "Modified 51%" },
    IN: { name: "Indiana", biSOL: 2, pdSOL: 2, negligence: "Modified 51%" },
    IA: { name: "Iowa", biSOL: 2, pdSOL: 5, negligence: "Modified 51%" },
    KS: { name: "Kansas", biSOL: 2, pdSOL: 2, negligence: "Modified 50%" },
    KY: { name: "Kentucky", biSOL: 1, pdSOL: 2, negligence: "Pure Comparative", limitationsNote: "1 year for BI, but 2 years for PIP-covered vehicles." },
    LA: { name: "Louisiana", biSOL: 1, pdSOL: 1, negligence: "Pure Comparative" },
    ME: { name: "Maine", biSOL: 6, pdSOL: 6, negligence: "Modified 50%" },
    MD: { name: "Maryland", biSOL: 3, pdSOL: 3, negligence: "Contributory" },
    MA: { name: "Massachusetts", biSOL: 3, pdSOL: 3, negligence: "Modified 51%" },
    MI: { name: "Michigan", biSOL: 3, pdSOL: 3, negligence: "Modified 51%" },
    MN: { name: "Minnesota", biSOL: 2, pdSOL: 6, negligence: "Modified 51%" },
    MS: { name: "Mississippi", biSOL: 3, pdSOL: 3, negligence: "Pure Comparative" },
    MO: { name: "Missouri", biSOL: 5, pdSOL: 5, negligence: "Pure Comparative" },
    MT: { name: "Montana", biSOL: 3, pdSOL: 2, negligence: "Modified 51%" },
    NE: { name: "Nebraska", biSOL: 4, pdSOL: 4, negligence: "Modified 50%" },
    NV: { name: "Nevada", biSOL: 2, pdSOL: 3, negligence: "Modified 51%" },
    NH: { name: "New Hampshire", biSOL: 3, pdSOL: 3, negligence: "Modified 51%" },
    NJ: { name: "New Jersey", biSOL: 2, pdSOL: 6, negligence: "Modified 51%" },
    NM: { name: "New Mexico", biSOL: 3, pdSOL: 4, negligence: "Pure Comparative" },
    NY: { name: "New York", biSOL: 3, pdSOL: 3, negligence: "Pure Comparative" },
    NC: { name: "North Carolina", biSOL: 3, pdSOL: 3, negligence: "Contributory" },
    ND: { name: "North Dakota", biSOL: 6, pdSOL: 6, negligence: "Modified 50%" },
    OH: { name: "Ohio", biSOL: 2, pdSOL: 2, negligence: "Modified 51%" },
    OK: { name: "Oklahoma", biSOL: 2, pdSOL: 2, negligence: "Modified 51%" },
    OR: { name: "Oregon", biSOL: 2, pdSOL: 6, negligence: "Modified 51%" },
    PA: { name: "Pennsylvania", biSOL: 2, pdSOL: 2, negligence: "Modified 51%" },
    RI: { name: "Rhode Island", biSOL: 3, pdSOL: 10, negligence: "Pure Comparative" },
    SC: { name: "South Carolina", biSOL: 3, pdSOL: 3, negligence: "Modified 51%" },
    SD: { name: "South Dakota", biSOL: 3, pdSOL: 6, negligence: "Contributory", limitationsNote: "Slight/Gross comparative negligence rule." },
    TN: { name: "Tennessee", biSOL: 1, pdSOL: 3, negligence: "Modified 51%" },
    TX: { name: "Texas", biSOL: 2, pdSOL: 2, negligence: "Modified 51%" },
    UT: { name: "Utah", biSOL: 4, pdSOL: 3, negligence: "Modified 50%" },
    VT: { name: "Vermont", biSOL: 3, pdSOL: 3, negligence: "Modified 51%" },
    VA: { name: "Virginia", biSOL: 2, pdSOL: 5, negligence: "Contributory" },
    WA: { name: "Washington", biSOL: 3, pdSOL: 3, negligence: "Pure Comparative" },
    WV: { name: "West Virginia", biSOL: 2, pdSOL: 2, negligence: "Modified 51%" },
    WI: { name: "Wisconsin", biSOL: 3, pdSOL: 6, negligence: "Modified 51%" },
    WY: { name: "Wyoming", biSOL: 4, pdSOL: 4, negligence: "Modified 51%" }
};

export const getStatesList = () => {
    return Object.entries(STATE_ACCIDENT_DATA).map(([code, data]) => ({
        code,
        name: data.name
    })).sort((a, b) => a.name.localeCompare(b.name));
};
