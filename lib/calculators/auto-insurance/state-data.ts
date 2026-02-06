export interface InsuranceStateData {
    name: string;
    minBI_Person: number;
    minBI_Accident: number;
    minPD: number;
    pipRequired: boolean;
    system: "At-Fault" | "No-Fault" | "Choice No-Fault";
}

export const STATE_INSURANCE_DATA: Record<string, InsuranceStateData> = {
    AL: { name: "Alabama", minBI_Person: 25000, minBI_Accident: 50000, minPD: 25000, pipRequired: false, system: "At-Fault" },
    AK: { name: "Alaska", minBI_Person: 50000, minBI_Accident: 100000, minPD: 25000, pipRequired: false, system: "At-Fault" },
    AZ: { name: "Arizona", minBI_Person: 25000, minBI_Accident: 50000, minPD: 15000, pipRequired: false, system: "At-Fault" },
    AR: { name: "Arkansas", minBI_Person: 25000, minBI_Accident: 50000, minPD: 25000, pipRequired: false, system: "At-Fault" },
    CA: { name: "California", minBI_Person: 15000, minBI_Accident: 30000, minPD: 5000, pipRequired: false, system: "At-Fault" },
    CO: { name: "Colorado", minBI_Person: 25000, minBI_Accident: 50000, minPD: 15000, pipRequired: false, system: "At-Fault" },
    CT: { name: "Connecticut", minBI_Person: 25000, minBI_Accident: 50000, minPD: 25000, pipRequired: false, system: "At-Fault" },
    DE: { name: "Delaware", minBI_Person: 25000, minBI_Accident: 50000, minPD: 10000, pipRequired: true, system: "No-Fault" },
    FL: { name: "Florida", minBI_Person: 10000, minBI_Accident: 20000, minPD: 10000, pipRequired: true, system: "No-Fault" },
    GA: { name: "Georgia", minBI_Person: 25000, minBI_Accident: 50000, minPD: 25000, pipRequired: false, system: "At-Fault" },
    HI: { name: "Hawaii", minBI_Person: 20000, minBI_Accident: 40000, minPD: 10000, pipRequired: true, system: "No-Fault" },
    ID: { name: "Idaho", minBI_Person: 25000, minBI_Accident: 50000, minPD: 15000, pipRequired: false, system: "At-Fault" },
    IL: { name: "Illinois", minBI_Person: 25000, minBI_Accident: 50000, minPD: 20000, pipRequired: false, system: "At-Fault" },
    IN: { name: "Indiana", minBI_Person: 25000, minBI_Accident: 50000, minPD: 25000, pipRequired: false, system: "At-Fault" },
    IA: { name: "Iowa", minBI_Person: 20000, minBI_Accident: 40000, minPD: 15000, pipRequired: false, system: "At-Fault" },
    KS: { name: "Kansas", minBI_Person: 25000, minBI_Accident: 50000, minPD: 25000, pipRequired: true, system: "No-Fault" },
    KY: { name: "Kentucky", minBI_Person: 25000, minBI_Accident: 50000, minPD: 25000, pipRequired: true, system: "Choice No-Fault" },
    LA: { name: "Louisiana", minBI_Person: 15000, minBI_Accident: 30000, minPD: 25000, pipRequired: false, system: "At-Fault" },
    ME: { name: "Maine", minBI_Person: 50000, minBI_Accident: 100000, minPD: 25000, pipRequired: false, system: "At-Fault" },
    MD: { name: "Maryland", minBI_Person: 30000, minBI_Accident: 60000, minPD: 15000, pipRequired: false, system: "At-Fault" },
    MA: { name: "Massachusetts", minBI_Person: 20000, minBI_Accident: 40000, minPD: 5000, pipRequired: true, system: "No-Fault" },
    MI: { name: "Michigan", minBI_Person: 50000, minBI_Accident: 100000, minPD: 10000, pipRequired: true, system: "No-Fault" },
    MN: { name: "Minnesota", minBI_Person: 30000, minBI_Accident: 60000, minPD: 10000, pipRequired: true, system: "No-Fault" },
    MS: { name: "Mississippi", minBI_Person: 25000, minBI_Accident: 50000, minPD: 25000, pipRequired: false, system: "At-Fault" },
    MO: { name: "Missouri", minBI_Person: 25000, minBI_Accident: 50000, minPD: 25000, pipRequired: false, system: "At-Fault" },
    MT: { name: "Montana", minBI_Person: 25000, minBI_Accident: 50000, minPD: 20000, pipRequired: false, system: "At-Fault" },
    NE: { name: "Nebraska", minBI_Person: 25000, minBI_Accident: 50000, minPD: 25000, pipRequired: false, system: "At-Fault" },
    NV: { name: "Nevada", minBI_Person: 25000, minBI_Accident: 50000, minPD: 20000, pipRequired: false, system: "At-Fault" },
    NH: { name: "New Hampshire", minBI_Person: 25000, minBI_Accident: 50000, minPD: 25000, pipRequired: false, system: "At-Fault" },
    NJ: { name: "New Jersey", minBI_Person: 15000, minBI_Accident: 30000, minPD: 5000, pipRequired: true, system: "Choice No-Fault" },
    NM: { name: "New Mexico", minBI_Person: 25000, minBI_Accident: 50000, minPD: 10000, pipRequired: false, system: "At-Fault" },
    NY: { name: "New York", minBI_Person: 25000, minBI_Accident: 50000, minPD: 10000, pipRequired: true, system: "No-Fault" },
    NC: { name: "North Carolina", minBI_Person: 30000, minBI_Accident: 60000, minPD: 25000, pipRequired: false, system: "At-Fault" },
    ND: { name: "North Dakota", minBI_Person: 25000, minBI_Accident: 50000, minPD: 25000, pipRequired: true, system: "No-Fault" },
    OH: { name: "Ohio", minBI_Person: 25000, minBI_Accident: 50000, minPD: 25000, pipRequired: false, system: "At-Fault" },
    OK: { name: "Oklahoma", minBI_Person: 25000, minBI_Accident: 50000, minPD: 25000, pipRequired: false, system: "At-Fault" },
    OR: { name: "Oregon", minBI_Person: 25000, minBI_Accident: 50000, minPD: 20000, pipRequired: true, system: "At-Fault" },
    PA: { name: "Pennsylvania", minBI_Person: 15000, minBI_Accident: 30000, minPD: 5000, pipRequired: true, system: "Choice No-Fault" },
    RI: { name: "Rhode Island", minBI_Person: 25000, minBI_Accident: 50000, minPD: 25000, pipRequired: false, system: "At-Fault" },
    SC: { name: "South Carolina", minBI_Person: 25000, minBI_Accident: 50000, minPD: 25000, pipRequired: false, system: "At-Fault" },
    SD: { name: "South Dakota", minBI_Person: 25000, minBI_Accident: 50000, minPD: 25000, pipRequired: false, system: "At-Fault" },
    TN: { name: "Tennessee", minBI_Person: 25000, minBI_Accident: 50000, minPD: 15000, pipRequired: false, system: "At-Fault" },
    TX: { name: "Texas", minBI_Person: 30000, minBI_Accident: 60000, minPD: 25000, pipRequired: false, system: "At-Fault" },
    UT: { name: "Utah", minBI_Person: 25000, minBI_Accident: 65000, minPD: 15000, pipRequired: true, system: "No-Fault" },
    VT: { name: "Vermont", minBI_Person: 25000, minBI_Accident: 50000, minPD: 10000, pipRequired: false, system: "At-Fault" },
    VA: { name: "Virginia", minBI_Person: 30000, minBI_Accident: 60000, minPD: 20000, pipRequired: false, system: "At-Fault" },
    WA: { name: "Washington", minBI_Person: 25000, minBI_Accident: 50000, minPD: 10000, pipRequired: false, system: "At-Fault" },
    WV: { name: "West Virginia", minBI_Person: 25000, minBI_Accident: 50000, minPD: 25000, pipRequired: false, system: "At-Fault" },
    WI: { name: "Wisconsin", minBI_Person: 25000, minBI_Accident: 50000, minPD: 10000, pipRequired: false, system: "At-Fault" },
    WY: { name: "Wyoming", minBI_Person: 25000, minBI_Accident: 50000, minPD: 20000, pipRequired: false, system: "At-Fault" }
};

export const getStatesList = () => {
    return Object.entries(STATE_INSURANCE_DATA).map(([code, data]) => ({
        code,
        name: data.name
    })).sort((a, b) => a.name.localeCompare(b.name));
};
