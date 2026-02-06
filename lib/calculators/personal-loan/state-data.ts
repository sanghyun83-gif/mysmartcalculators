export interface PersonalLoanStateData {
    name: string;
    maxAPR: number; // General Usury Limit or Consumer Cap
    penaltyInfo: string;
    description: string;
}

export const STATE_PERSONAL_LOAN_DATA: Record<string, PersonalLoanStateData> = {
    AL: { name: "Alabama", maxAPR: 8, penaltyInfo: "Loss of all interest", description: "8% (contract), 6% (legal). Higher for licensed lenders." },
    AK: { name: "Alaska", maxAPR: 10.5, penaltyInfo: "Double interest forfeiture", description: "5% above Fed discount rate." },
    AZ: { name: "Arizona", maxAPR: 36, penaltyInfo: "Forfeiture of all interest", description: "Contract rate is generally unlimited, but 36% for consumer loans." },
    AR: { name: "Arkansas", maxAPR: 17, penaltyInfo: "Void for principal and interest", description: "Strict 17% limit for consumer loans." },
    CA: { name: "California", maxAPR: 10, penaltyInfo: "Treble damages and forfeiture", description: "10% for personal/household loans (with many exemptions)." },
    CO: { name: "Colorado", maxAPR: 12, penaltyInfo: "Forfeiture of interest", description: "12% for non-consumer loans; higher for UCCC lenders." },
    CT: { name: "Connecticut", maxAPR: 12, penaltyInfo: "Forfeiture of principal and interest", description: "12% for general loans." },
    DE: { name: "Delaware", maxAPR: 5, penaltyInfo: "Forfeiture of all interest", description: "5% above Fed discount rate." },
    FL: { name: "Florida", maxAPR: 18, penaltyInfo: "Forfeiture of all interest", description: "18% for loans up to $500k." },
    GA: { name: "Georgia", maxAPR: 16, penaltyInfo: "Forfeiture of all interest", description: "16% for loans under $3k; 5% per month for others." },
    HI: { name: "Hawaii", maxAPR: 12, penaltyInfo: "Forfeiture of all interest", description: "12% for consumer credit transactions." },
    ID: { name: "Idaho", maxAPR: 12, penaltyInfo: "None (contract controls)", description: "No ceiling if specified in contract." },
    IL: { name: "Illinois", maxAPR: 9, penaltyInfo: "All interest and fees forfeiture", description: "9% general limit; many statutory exemptions." },
    IN: { name: "Indiana", maxAPR: 21, penaltyInfo: "Refund of overcharge", description: "21% for supervised loans under UCCC." },
    IA: { name: "Iowa", maxAPR: 21, penaltyInfo: "All interest and fees forfeiture", description: "21% for consumer loans." },
    KS: { name: "Kansas", maxAPR: 15, penaltyInfo: "Treble interest damages", description: "15% for general loans." },
    KY: { name: "Kentucky", maxAPR: 8, penaltyInfo: "Forfeiture of all interest", description: "8% for loans under $15k." },
    LA: { name: "Louisiana", maxAPR: 12, penaltyInfo: "Forfeiture of all interest", description: "12% for general loans." },
    ME: { name: "Maine", maxAPR: 12, penaltyInfo: "Forfeiture of interest", description: "5% above Fed discount rate." },
    MD: { name: "Maryland", maxAPR: 24, penaltyInfo: "Forfeiture of all interest", description: "24% for unsecured loans." },
    MA: { name: "Massachusetts", maxAPR: 20, penaltyInfo: "Void and criminal usury", description: "20% general usury limit." },
    MI: { name: "Michigan", maxAPR: 25, penaltyInfo: "Forfeiture of interest", description: "25% criminal usury limit; 7% general." },
    MN: { name: "Minnesota", maxAPR: 8, penaltyInfo: "Forfeiture of all interest", description: "8% general; higher for consumer small loans." },
    MS: { name: "Mississippi", maxAPR: 10, penaltyInfo: "Forfeiture of interest and principal", description: "10% or 5% above discount rate." },
    MO: { name: "Missouri", maxAPR: 10, penaltyInfo: "Forfeiture of interest", description: "10% general usury limit." },
    MT: { name: "Montana", maxAPR: 15, penaltyInfo: "Double interest forfeiture", description: "15% or 6% above discount rate." },
    NE: { name: "Nebraska", maxAPR: 16, penaltyInfo: "Forfeiture of interest", description: "16% general usury limit." },
    NV: { name: "Nevada", maxAPR: 36, penaltyInfo: "Contract voidance", description: "Contract rate is generally unlimited." },
    NH: { name: "New Hampshire", maxAPR: 36, penaltyInfo: "Fines and restitution", description: "No general usury limit for contract." },
    NJ: { name: "New Jersey", maxAPR: 30, penaltyInfo: "Forfeiture of all interest", description: "30% for individuals; 50% for corps." },
    NM: { name: "New Mexico", maxAPR: 36, penaltyInfo: "Loss of all interest", description: "36% cap for small loans." },
    NY: { name: "New York", maxAPR: 16, penaltyInfo: "Void total principal and interest", description: "16% civil usury; 25% criminal usury." },
    NC: { name: "North Carolina", maxAPR: 16, penaltyInfo: "Forfeiture of all interest", description: "16% general usury limit." },
    ND: { name: "North Dakota", maxAPR: 7, penaltyInfo: "Double interest forfeiture", description: "7% or 3% above discount rate." },
    OH: { name: "Ohio", maxAPR: 8, penaltyInfo: "Forfeiture of excess interest", description: "8% general usury limit." },
    OK: { name: "Oklahoma", maxAPR: 45, penaltyInfo: "Refund of excess", description: "45% criminal usury limit." },
    OR: { name: "Oregon", maxAPR: 12, penaltyInfo: "Forfeiture of interest to state", description: "12% for general loans." },
    PA: { name: "Pennsylvania", maxAPR: 6, penaltyInfo: "Treble excess interest", description: "6% for loans under $50k." },
    RI: { name: "Rhode Island", maxAPR: 21, penaltyInfo: "Forfeiture of interest and principal", description: "21% civil usury limit." },
    SC: { name: "South Carolina", maxAPR: 12, penaltyInfo: "Double interest forfeiture", description: "12% general limit." },
    SD: { name: "South Dakota", maxAPR: 36, penaltyInfo: "Misdemeanor/Void", description: "36% for licensed money lenders." },
    TN: { name: "Tennessee", maxAPR: 24, penaltyInfo: "Forfeiture of excess", description: "24% general usury limit." },
    TX: { name: "Texas", maxAPR: 18, penaltyInfo: "Forfeiture of interest and principal", description: "18% cap; higher under tiered statutes." },
    UT: { name: "Utah", maxAPR: 36, penaltyInfo: "Contract controls", description: "No cap for written contracts." },
    VT: { name: "Vermont", maxAPR: 12, penaltyInfo: "Forfeiture of interest", description: "12% for general loans." },
    VA: { name: "Virginia", maxAPR: 36, penaltyInfo: "Double interest forfeiture", description: "36% for consumer loans under $2,500." },
    WA: { name: "Washington", maxAPR: 12, penaltyInfo: "Treble damages and fees", description: "12% or 4% above T-bill rate." },
    WV: { name: "West Virginia", maxAPR: 18, penaltyInfo: "All interest and fees forfeiture", description: "18% cap for consumer credit sales." },
    WI: { name: "Wisconsin", maxAPR: 12, penaltyInfo: "Forfeiture of interest and principal", description: "No cap for contracts ($15k+)." },
    WY: { name: "Wyoming", maxAPR: 10, penaltyInfo: "Double interest forfeiture", description: "10% general limit." },
};

export function getStatesList() {
    return Object.entries(STATE_PERSONAL_LOAN_DATA).map(([code, data]) => ({
        code,
        name: data.name
    })).sort((a, b) => a.name.localeCompare(b.name));
}
