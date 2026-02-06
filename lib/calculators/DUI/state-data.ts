export interface DUIStateData {
    name: string;
    fineFirst: [number, number]; // [min, max]
    jailFirst: [number, number]; // [min, max] days
    suspensionFirst: string;
    iidMandatory: boolean;
    sr22Required: boolean;
    lookbackPeriod: number; // years
}

export const STATE_DUI_DATA: Record<string, DUIStateData> = {
    AL: { name: "Alabama", fineFirst: [600, 2100], jailFirst: [0, 365], suspensionFirst: "90 days", iidMandatory: true, sr22Required: true, lookbackPeriod: 10 },
    AK: { name: "Alaska", fineFirst: [1500, 1500], jailFirst: [3, 3], suspensionFirst: "90 days", iidMandatory: true, sr22Required: true, lookbackPeriod: 15 },
    AZ: { name: "Arizona", fineFirst: [1250, 1250], jailFirst: [10, 10], suspensionFirst: "90 days", iidMandatory: true, sr22Required: true, lookbackPeriod: 7 },
    AR: { name: "Arkansas", fineFirst: [150, 1000], jailFirst: [1, 365], suspensionFirst: "6 months", iidMandatory: true, sr22Required: true, lookbackPeriod: 5 },
    CA: { name: "California", fineFirst: [390, 1000], jailFirst: [2, 180], suspensionFirst: "6 months", iidMandatory: true, sr22Required: true, lookbackPeriod: 10 },
    CO: { name: "Colorado", fineFirst: [600, 1000], jailFirst: [5, 365], suspensionFirst: "9 months", iidMandatory: true, sr22Required: true, lookbackPeriod: 10 },
    CT: { name: "Connecticut", fineFirst: [500, 1000], jailFirst: [2, 180], suspensionFirst: "45 days", iidMandatory: true, sr22Required: true, lookbackPeriod: 10 },
    DE: { name: "Delaware", fineFirst: [500, 1500], jailFirst: [0, 365], suspensionFirst: "12 months", iidMandatory: true, sr22Required: true, lookbackPeriod: 5 },
    FL: { name: "Florida", fineFirst: [500, 1000], jailFirst: [0, 180], suspensionFirst: "180 days", iidMandatory: true, sr22Required: true, lookbackPeriod: 10 },
    GA: { name: "Georgia", fineFirst: [300, 1000], jailFirst: [1, 365], suspensionFirst: "12 months", iidMandatory: true, sr22Required: true, lookbackPeriod: 10 },
    HI: { name: "Hawaii", fineFirst: [150, 1000], jailFirst: [2, 5], suspensionFirst: "12 months", iidMandatory: true, sr22Required: true, lookbackPeriod: 10 },
    ID: { name: "Idaho", fineFirst: [0, 1000], jailFirst: [0, 180], suspensionFirst: "90-180 days", iidMandatory: true, sr22Required: true, lookbackPeriod: 10 },
    IL: { name: "Illinois", fineFirst: [0, 2500], jailFirst: [0, 365], suspensionFirst: "12 months", iidMandatory: true, sr22Required: true, lookbackPeriod: 10 },
    IN: { name: "Indiana", fineFirst: [0, 5000], jailFirst: [0, 365], suspensionFirst: "180 days", iidMandatory: true, sr22Required: true, lookbackPeriod: 10 },
    IA: { name: "Iowa", fineFirst: [1250, 1250], jailFirst: [2, 365], suspensionFirst: "180 days", iidMandatory: true, sr22Required: true, lookbackPeriod: 12 },
    KS: { name: "Kansas", fineFirst: [750, 1000], jailFirst: [2, 180], suspensionFirst: "30 days", iidMandatory: true, sr22Required: true, lookbackPeriod: 10 },
    KY: { name: "Kentucky", fineFirst: [200, 500], jailFirst: [2, 30], suspensionFirst: "6 months", iidMandatory: true, sr22Required: true, lookbackPeriod: 10 },
    LA: { name: "Louisiana", fineFirst: [300, 1000], jailFirst: [2, 180], suspensionFirst: "90 days", iidMandatory: true, sr22Required: true, lookbackPeriod: 10 },
    ME: { name: "Maine", fineFirst: [500, 500], jailFirst: [2, 2], suspensionFirst: "150 days", iidMandatory: true, sr22Required: true, lookbackPeriod: 10 },
    MD: { name: "Maryland", fineFirst: [0, 1000], jailFirst: [0, 365], suspensionFirst: "6 months", iidMandatory: true, sr22Required: true, lookbackPeriod: 5 },
    MA: { name: "Massachusetts", fineFirst: [500, 5000], jailFirst: [0, 912], suspensionFirst: "1 year", iidMandatory: true, sr22Required: true, lookbackPeriod: 10 },
    MI: { name: "Michigan", fineFirst: [100, 500], jailFirst: [0, 93], suspensionFirst: "180 days", iidMandatory: true, sr22Required: true, lookbackPeriod: 7 },
    MN: { name: "Minnesota", fineFirst: [0, 1000], jailFirst: [0, 90], suspensionFirst: "90 days", iidMandatory: true, sr22Required: true, lookbackPeriod: 10 },
    MS: { name: "Mississippi", fineFirst: [250, 1000], jailFirst: [0, 48], suspensionFirst: "120 days", iidMandatory: true, sr22Required: true, lookbackPeriod: 5 },
    MO: { name: "Missouri", fineFirst: [0, 1000], jailFirst: [0, 180], suspensionFirst: "90 days", iidMandatory: true, sr22Required: true, lookbackPeriod: 5 },
    MT: { name: "Montana", fineFirst: [600, 1000], jailFirst: [1, 180], suspensionFirst: "6 months", iidMandatory: true, sr22Required: true, lookbackPeriod: 10 },
    NE: { name: "Nebraska", fineFirst: [500, 500], jailFirst: [7, 60], suspensionFirst: "6 months", iidMandatory: true, sr22Required: true, lookbackPeriod: 15 },
    NV: { name: "Nevada", fineFirst: [400, 1000], jailFirst: [2, 180], suspensionFirst: "90 days", iidMandatory: true, sr22Required: true, lookbackPeriod: 7 },
    NH: { name: "New Hampshire", fineFirst: [500, 500], jailFirst: [0, 0], suspensionFirst: "9 months", iidMandatory: true, sr22Required: true, lookbackPeriod: 10 },
    NJ: { name: "New Jersey", fineFirst: [250, 500], jailFirst: [0, 30], suspensionFirst: "3-12 months", iidMandatory: true, sr22Required: true, lookbackPeriod: 10 },
    NM: { name: "New Mexico", fineFirst: [0, 500], jailFirst: [0, 90], suspensionFirst: "1 year", iidMandatory: true, sr22Required: true, lookbackPeriod: 10 },
    NY: { name: "New York", fineFirst: [500, 1000], jailFirst: [0, 365], suspensionFirst: "6 months", iidMandatory: true, sr22Required: true, lookbackPeriod: 10 },
    NC: { name: "North Carolina", fineFirst: [0, 200], jailFirst: [1, 60], suspensionFirst: "1 year", iidMandatory: true, sr22Required: true, lookbackPeriod: 7 },
    ND: { name: "North Dakota", fineFirst: [500, 500], jailFirst: [0, 0], suspensionFirst: "91 days", iidMandatory: true, sr22Required: true, lookbackPeriod: 7 },
    OH: { name: "Ohio", fineFirst: [375, 1075], jailFirst: [3, 180], suspensionFirst: "1-3 years", iidMandatory: true, sr22Required: true, lookbackPeriod: 10 },
    OK: { name: "Oklahoma", fineFirst: [0, 1000], jailFirst: [10, 365], suspensionFirst: "180 days", iidMandatory: true, sr22Required: true, lookbackPeriod: 10 },
    OR: { name: "Oregon", fineFirst: [1000, 6250], jailFirst: [2, 365], suspensionFirst: "1 year", iidMandatory: true, sr22Required: true, lookbackPeriod: 15 },
    PA: { name: "Pennsylvania", fineFirst: [300, 300], jailFirst: [0, 180], suspensionFirst: "None", iidMandatory: true, sr22Required: true, lookbackPeriod: 10 },
    RI: { name: "Rhode Island", fineFirst: [100, 500], jailFirst: [0, 365], suspensionFirst: "3-18 months", iidMandatory: true, sr22Required: true, lookbackPeriod: 5 },
    SC: { name: "South Carolina", fineFirst: [400, 400], jailFirst: [2, 30], suspensionFirst: "6 months", iidMandatory: true, sr22Required: true, lookbackPeriod: 10 },
    SD: { name: "South Dakota", fineFirst: [0, 1000], jailFirst: [0, 365], suspensionFirst: "30 days - 1 year", iidMandatory: true, sr22Required: true, lookbackPeriod: 10 },
    TN: { name: "Tennessee", fineFirst: [350, 1500], jailFirst: [2, 365], suspensionFirst: "1 year", iidMandatory: true, sr22Required: true, lookbackPeriod: 10 },
    TX: { name: "Texas", fineFirst: [0, 2000], jailFirst: [3, 180], suspensionFirst: "90 days - 1 year", iidMandatory: true, sr22Required: true, lookbackPeriod: 10 },
    UT: { name: "Utah", fineFirst: [700, 700], jailFirst: [2, 180], suspensionFirst: "120 days", iidMandatory: true, sr22Required: true, lookbackPeriod: 10 },
    VT: { name: "Vermont", fineFirst: [0, 750], jailFirst: [0, 730], suspensionFirst: "90 days", iidMandatory: true, sr22Required: true, lookbackPeriod: 10 },
    VA: { name: "Virginia", fineFirst: [250, 2500], jailFirst: [0, 365], suspensionFirst: "1 year", iidMandatory: true, sr22Required: true, lookbackPeriod: 10 },
    WA: { name: "Washington", fineFirst: [350, 5000], jailFirst: [1, 365], suspensionFirst: "90 days", iidMandatory: true, sr22Required: true, lookbackPeriod: 7 },
    WV: { name: "West Virginia", fineFirst: [100, 500], jailFirst: [0, 180], suspensionFirst: "6 months", iidMandatory: true, sr22Required: true, lookbackPeriod: 10 },
    WI: { name: "Wisconsin", fineFirst: [150, 300], jailFirst: [0, 0], suspensionFirst: "6-9 months", iidMandatory: true, sr22Required: true, lookbackPeriod: 10 },
    WY: { name: "Wyoming", fineFirst: [0, 750], jailFirst: [0, 180], suspensionFirst: "90 days", iidMandatory: true, sr22Required: true, lookbackPeriod: 10 },
};

export function getStatesList() {
    return Object.entries(STATE_DUI_DATA).map(([code, data]) => ({
        code,
        name: data.name
    })).sort((a, b) => a.name.localeCompare(b.name));
}
