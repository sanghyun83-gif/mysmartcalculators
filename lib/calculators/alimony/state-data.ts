export interface AlimonyStateData {
    name: string;
    model: 'Guideline' | 'Statutory' | 'Discretionary' | 'Hybrid';
    formula: string;
    durationRule: string;
    durationMultiplier: number; // Estimated multiplier for marriage length
    cohabitationImpact: 'Suspends' | 'Terminates' | 'Reduces' | 'None';
    remarriageImpact: 'Terminates';
}

export const STATE_ALIMONY_DATA: Record<string, AlimonyStateData> = {
    AL: { name: "Alabama", model: "Discretionary", formula: "Need and ability to pay; no set formula", durationRule: "Marriage length up to permanent", durationMultiplier: 0.5, cohabitationImpact: "Terminates", remarriageImpact: "Terminates" },
    AK: { name: "Alaska", model: "Discretionary", formula: "Based on 14 statutory factors", durationRule: "Short-term/Rehabilitative preferred", durationMultiplier: 0.33, cohabitationImpact: "Reduces", remarriageImpact: "Terminates" },
    AZ: { name: "Arizona", model: "Discretionary", formula: "Guidelines available for temporary support", durationRule: "Sufficient to become self-sufficient", durationMultiplier: 0.4, cohabitationImpact: "Reduces", remarriageImpact: "Terminates" },
    AR: { name: "Arkansas", model: "Discretionary", formula: "Court determines based on need", durationRule: "Until death or remarriage typically", durationMultiplier: 0.5, cohabitationImpact: "Suspends", remarriageImpact: "Terminates" },
    CA: { name: "California", model: "Guideline", formula: "40% Higher - 50% Lower income", durationRule: "50% of length for <10y; Court discretion 10y+", durationMultiplier: 0.5, cohabitationImpact: "Reduces", remarriageImpact: "Terminates" },
    CO: { name: "Colorado", model: "Statutory", formula: "40% High - 50% Low (income difference)", durationRule: "Scale from 30% to 50% of marriage length", durationMultiplier: 0.4, cohabitationImpact: "Suspends", remarriageImpact: "Terminates" },
    CT: { name: "Connecticut", model: "Discretionary", formula: "Court considers 15 factors (Age, health, etc.)", durationRule: "Generally 30-50% of marriage length", durationMultiplier: 0.4, cohabitationImpact: "Suspends", remarriageImpact: "Terminates" },
    DE: { name: "Delaware", model: "Statutory", formula: "Court calculates based on gap in needs", durationRule: "Maximum 50% of marriage length unless 20y+", durationMultiplier: 0.5, cohabitationImpact: "Terminates", remarriageImpact: "Terminates" },
    FL: { name: "Florida", model: "Discretionary", formula: "Needs-based; limited to small gap", durationRule: "Durational alimony capped at 75% of length", durationMultiplier: 0.4, cohabitationImpact: "Reduces", remarriageImpact: "Terminates" },
    GA: { name: "Georgia", model: "Discretionary", formula: "Need vs. Ability to pay", durationRule: "Determined case-by-case", durationMultiplier: 0.5, cohabitationImpact: "Terminates", remarriageImpact: "Terminates" },
    HI: { name: "Hawaii", model: "Discretionary", formula: "Based on standard of living during marriage", durationRule: "Enough to bridge transition", durationMultiplier: 0.4, cohabitationImpact: "Reduces", remarriageImpact: "Terminates" },
    ID: { name: "Idaho", model: "Discretionary", formula: "Innocence of spouse and need", durationRule: "Varies by degree of fault and need", durationMultiplier: 0.4, cohabitationImpact: "None", remarriageImpact: "Terminates" },
    IL: { name: "Illinois", model: "Statutory", formula: "33.33% Payor - 25% Recipient", durationRule: "Multiplier scale (0.20 to 1.0) of length", durationMultiplier: 0.6, cohabitationImpact: "Terminates", remarriageImpact: "Terminates" },
    IN: { name: "Indiana", model: "Statutory", formula: "Maintenance for disability or rehab 3y", durationRule: "Strict 3-year limit for rehabilitative", durationMultiplier: 0.2, cohabitationImpact: "None", remarriageImpact: "Terminates" },
    IA: { name: "Iowa", model: "Discretionary", formula: "Traditional, rehabilitative, or reimbursement", durationRule: "Court decides based on earning capacity", durationMultiplier: 0.5, cohabitationImpact: "None", remarriageImpact: "Terminates" },
    KS: { name: "Kansas", model: "Statutory", formula: "Local county guidelines (e.g. Johnson County)", durationRule: "Max 121 months (roughly 10 years)", durationMultiplier: 0.33, cohabitationImpact: "Reduces", remarriageImpact: "Terminates" },
    KY: { name: "Kentucky", model: "Discretionary", formula: "Need-based; lifestyle during marriage", durationRule: "Limited to time for self-sufficiency", durationMultiplier: 0.4, cohabitationImpact: "None", remarriageImpact: "Terminates" },
    LA: { name: "Louisiana", model: "Statutory", formula: "Capped at 1/3 of net income", durationRule: "Limited until recipient becomes self-sufficient", durationMultiplier: 0.33, cohabitationImpact: "Terminates", remarriageImpact: "Terminates" },
    ME: { name: "Maine", model: "Statutory", formula: "Reasonable need and ability to pay", durationRule: "Max 50% of length for marriages <20y", durationMultiplier: 0.5, cohabitationImpact: "Terminates", remarriageImpact: "Terminates" },
    MD: { name: "Maryland", model: "Discretionary", formula: "Guidelines for pendente lite only", durationRule: "Rehabilitative preferred over indefinite", durationMultiplier: 0.4, cohabitationImpact: "None", remarriageImpact: "Terminates" },
    MA: { name: "Massachusetts", model: "Guideline", formula: "30-35% of income difference", durationRule: "Scale: 50% length for 5y; 80% for 20y", durationMultiplier: 0.65, cohabitationImpact: "Suspends", remarriageImpact: "Terminates" },
    MI: { name: "Michigan", model: "Hybrid", formula: "MCL formula factors + Court discretion", durationRule: "Determined by 11 statutory factors", durationMultiplier: 0.5, cohabitationImpact: "None", remarriageImpact: "Terminates" },
    MN: { name: "Minnesota", model: "Discretionary", formula: "Maintenance based on need and resources", durationRule: "Temporary vs. Permanent (long marriages)", durationMultiplier: 0.5, cohabitationImpact: "Reduces", remarriageImpact: "Terminates" },
    MS: { name: "Mississippi", model: "Discretionary", formula: "Armstrong factors (health, assets, etc.)", durationRule: "Varies significantly by chancellor", durationMultiplier: 0.5, cohabitationImpact: "Terminates", remarriageImpact: "Terminates" },
    MO: { name: "Missouri", model: "Discretionary", formula: "Reasonable need; standard of living", durationRule: "Varies; modifiable by court order", durationMultiplier: 0.4, cohabitationImpact: "None", remarriageImpact: "Terminates" },
    MT: { name: "Montana", model: "Discretionary", formula: "Maintenance based on lack of property", durationRule: "Varies based on education/age", durationMultiplier: 0.4, cohabitationImpact: "None", remarriageImpact: "Terminates" },
    NE: { name: "Nebraska", model: "Discretionary", formula: "Reasonable need based on circumstances", durationRule: "Varies; focused on transition period", durationMultiplier: 0.4, cohabitationImpact: "None", remarriageImpact: "Terminates" },
    NV: { name: "Nevada", model: "Discretionary", formula: "Standard of living + Career sacrifice", durationRule: "Varies; focused on rehabilitative", durationMultiplier: 0.4, cohabitationImpact: "None", remarriageImpact: "Terminates" },
    NH: { name: "New Hampshire", model: "Statutory", formula: "(30% Payor - 20% Recipient) roughly", durationRule: "Scale based on length of marriage", durationMultiplier: 0.5, cohabitationImpact: "Suspends", remarriageImpact: "Terminates" },
    NJ: { name: "New Jersey", model: "Discretionary", formula: "Factors: need, age, health, earning", durationRule: "Capped at marriage length for <20y", durationMultiplier: 0.5, cohabitationImpact: "Reduces", remarriageImpact: "Terminates" },
    NM: { name: "New Mexico", model: "Guideline", formula: "30% High - 20% Low income", durationRule: "Varies; rehabilitative popular", durationMultiplier: 0.4, cohabitationImpact: "None", remarriageImpact: "Terminates" },
    NY: { name: "New York", model: "Guideline", formula: "30% Payor - 20% Recipient (Capped)", durationRule: "Scale: 15% to 35% of length", durationMultiplier: 0.25, cohabitationImpact: "None", remarriageImpact: "Terminates" },
    NC: { name: "North Carolina", model: "Discretionary", formula: "Payer's ability vs. Recipient's need", durationRule: "Duration based on 16 statutory factors", durationMultiplier: 0.5, cohabitationImpact: "Terminates", remarriageImpact: "Terminates" },
    ND: { name: "North Dakota", model: "Discretionary", formula: "Ruff-Fischer guidelines", durationRule: "Rehabilitative (fixed time) preferred", durationMultiplier: 0.4, cohabitationImpact: "None", remarriageImpact: "Terminates" },
    OH: { name: "Ohio", model: "Discretionary", formula: "Income imbalance and marriage length", durationRule: "Varies; can be permanent for long marriages", durationMultiplier: 0.5, cohabitationImpact: "Terminates", remarriageImpact: "Terminates" },
    OK: { name: "Oklahoma", model: "Discretionary", formula: "Reasonable and equitable division", durationRule: "Length based on recipient's need", durationMultiplier: 0.4, cohabitationImpact: "None", remarriageImpact: "Terminates" },
    OR: { name: "Oregon", model: "Hybrid", formula: "Transitional, compensatory, or spousal", durationRule: "Varies highly by type of support", durationMultiplier: 0.5, cohabitationImpact: "None", remarriageImpact: "Terminates" },
    PA: { name: "Pennsylvania", model: "Guideline", formula: "40% High - 50% Low (APL formula)", durationRule: "17 factors for post-divorce alimony", durationMultiplier: 0.4, cohabitationImpact: "Terminates", remarriageImpact: "Terminates" },
    RI: { name: "Rhode Island", model: "Discretionary", formula: "Needs of spouse for rehabilitative", durationRule: "Limited duration for self-sufficiency", durationMultiplier: 0.33, cohabitationImpact: "Reduces", remarriageImpact: "Terminates" },
    SC: { name: "South Carolina", model: "Discretionary", formula: "Periodic, Lump Sum, or Rehabilitative", durationRule: "Varies; permanent still possible here", durationMultiplier: 0.6, cohabitationImpact: "Terminates", remarriageImpact: "Terminates" },
    SD: { name: "South Dakota", model: "Discretionary", formula: "Property vs. Support balance", durationRule: "Varies based on health and assets", durationMultiplier: 0.5, cohabitationImpact: "None", remarriageImpact: "Terminates" },
    TN: { name: "Tennessee", model: "Hybrid", formula: "Rehabilitative preferred by statute", durationRule: "Depends on in-solidum, periodic, or rehab", durationMultiplier: 0.5, cohabitationImpact: "Suspends", remarriageImpact: "Terminates" },
    TX: { name: "Texas", model: "Statutory", formula: "Capped at $5k or 20% of income", durationRule: "Strict 5y, 7y, or 10y caps", durationMultiplier: 0.33, cohabitationImpact: "None", remarriageImpact: "Terminates" },
    UT: { name: "Utah", model: "Statutory", formula: "Standard of living during marriage", durationRule: "Cannot exceed length of marriage", durationMultiplier: 0.5, cohabitationImpact: "Terminates", remarriageImpact: "Terminates" },
    VT: { name: "Vermont", model: "Guideline", formula: "Marriage length vs. Income Gap", durationRule: "Scale from 40% to 70% of length", durationMultiplier: 0.55, cohabitationImpact: "Suspends", remarriageImpact: "Terminates" },
    VA: { name: "Virginia", model: "Guideline", formula: "28% Payor - 58% Recipient (gross)", durationRule: "Varies; 50% marriage length is common", durationMultiplier: 0.5, cohabitationImpact: "Terminates", remarriageImpact: "Terminates" },
    WA: { name: "Washington", model: "Discretionary", formula: "Standard of living focus (1/3 length)", durationRule: "Common: 1 year alimony per 3-4 years marriage", durationMultiplier: 0.3, cohabitationImpact: "None", remarriageImpact: "Terminates" },
    WV: { name: "West Virginia", model: "Statutory", formula: "Income gap based calculation", durationRule: "Determined by 20 statutory factors", durationMultiplier: 0.5, cohabitationImpact: "Terminates", remarriageImpact: "Terminates" },
    WI: { name: "Wisconsin", model: "Discretionary", formula: "Fairness and Support objectives", durationRule: "Commonly 20-50% of marriage length", durationMultiplier: 0.4, cohabitationImpact: "None", remarriageImpact: "Terminates" },
    WY: { name: "Wyoming", model: "Discretionary", formula: "Needs which cannot be met by property", durationRule: "Varies; focused on transition", durationMultiplier: 0.4, cohabitationImpact: "None", remarriageImpact: "Terminates" },
};

export function getStatesList() {
    return Object.entries(STATE_ALIMONY_DATA).map(([code, data]) => ({
        code,
        name: data.name
    })).sort((a, b) => a.name.localeCompare(b.name));
}
