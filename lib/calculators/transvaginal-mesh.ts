// ============================================
// TRANSVAGINAL MESH LAWSUIT CALCULATOR
// 2026 Pelvic Mesh Injury Claims - Advanced Version
// ============================================

import { Calculator, FileText, AlertTriangle, Scale } from 'lucide-react';

export const SITE = {
    name: "Transvaginal Mesh Lawsuit Calculator",
    tagline: "Free 2026 Pelvic Mesh Injury Settlement Estimator",
    description: "Calculate transvaginal mesh lawsuit settlements. Mesh erosion, chronic pain, organ perforation claims. Based on 2026 litigation data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/transvaginal-mesh",
};

export const INJURY_TYPES = [
    { id: "erosion-revision", name: "Mesh Erosion (Multiple Surgeries)", description: "Mesh exposed through tissue, required revision", avgSettlement: 500000, multiplier: 5.0 },
    { id: "erosion-single", name: "Mesh Erosion (Single Surgery)", description: "Mesh exposed, one revision surgery", avgSettlement: 300000, multiplier: 3.0 },
    { id: "organ-perforation", name: "Organ Perforation", description: "Bladder, bowel, or vaginal perforation", avgSettlement: 450000, multiplier: 4.5 },
    { id: "chronic-pain", name: "Chronic Pain", description: "Persistent pelvic pain, dyspareunia", avgSettlement: 250000, multiplier: 2.5 },
    { id: "infection", name: "Infection", description: "Serious mesh-related infection", avgSettlement: 200000, multiplier: 2.0 },
];

export const MESH_MANUFACTURERS = [
    { id: "jnj", name: "Johnson & Johnson / Ethicon", multiplier: 1.3 },
    { id: "boston", name: "Boston Scientific", multiplier: 1.2 },
    { id: "bard", name: "C.R. Bard", multiplier: 1.2 },
    { id: "coloplast", name: "Coloplast", multiplier: 1.1 },
    { id: "other", name: "Other Manufacturer", multiplier: 1.0 },
];

export const SURGERY_COMPLICATIONS = [
    { id: "multiple-revision", name: "Multiple Revision Surgeries", multiplier: 1.5 },
    { id: "single-revision", name: "Single Revision Surgery", multiplier: 1.2 },
    { id: "partial-removal", name: "Partial Mesh Removal", multiplier: 1.1 },
    { id: "no-revision", name: "No Revision Surgery", multiplier: 1.0 },
];

export const MESH_2026 = {
    statistics: {
        totalSettlements: "$8 Billion+",
        fdaStatus: "Banned 2019",
        casesResolved: "100,000+",
        status: "Ongoing Claims",
    },
    citations: [
        "FDA Order - Stop Sale of Transvaginal Mesh for POP (2019)",
        "In Re: Ethicon Pelvic Repair MDL 2327 - Settlement Documents",
        "Boston Scientific Pelvic Mesh MDL 2326 - Aggregate Settlement",
    ],
};

export const CALCULATORS = [
    { id: "transvaginal-mesh/calculator", name: "Settlement Calculator", description: "Estimate mesh claim value", icon: Calculator, featured: true },
    { id: "transvaginal-mesh/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
    { id: "transvaginal-mesh/complications", name: "Complications", description: "Known mesh complications", icon: AlertTriangle, featured: false },
    { id: "transvaginal-mesh/manufacturers", name: "Manufacturers", description: "Mesh product defendants", icon: Scale, featured: false },
];

export const FAQS = [
    { question: "What is the transvaginal mesh lawsuit about?", answer: "Transvaginal mesh lawsuits allege that manufacturers sold defective mesh products for pelvic organ prolapse and stress urinary incontinence that caused serious complications. Over $8 billion has been paid in settlements." },
    { question: "What is transvaginal mesh?", answer: "Transvaginal mesh is a synthetic surgical mesh implanted through the vagina to treat pelvic organ prolapse (POP) and stress urinary incontinence (SUI). The FDA ordered manufacturers to stop selling mesh for POP in 2019." },
    { question: "What complications are linked to mesh?", answer: "Complications include mesh erosion through vaginal tissue, chronic pelvic pain, painful intercourse (dyspareunia), organ perforation, infection, urinary problems, and mesh contraction requiring revision surgery." },
    { question: "Who qualifies for a mesh lawsuit?", answer: "Women who had transvaginal mesh implanted and experienced complications may qualify. Cases involving mesh erosion, revision surgery, chronic pain, or organ damage have the strongest claims." },
    { question: "What are the average settlements?", answer: "Settlements have ranged from $100,000 to over $1 million depending on severity. Cases requiring multiple surgeries or with permanent injuries receive higher compensation." },
    { question: "Which manufacturers are defendants?", answer: "Major defendants include Johnson & Johnson (Ethicon), Boston Scientific, C.R. Bard, Coloplast, and others. Each has paid billions in settlements." },
    { question: "Is there a deadline to file?", answer: "Statutes of limitations vary by state. Some states count from date of implant, others from date of injury discovery. Consult an attorney immediately to preserve your rights." },
    { question: "Why did the FDA ban mesh?", answer: "In 2019, the FDA ordered manufacturers to stop selling mesh for POP after determining that safety and effectiveness had not been adequately established. SUI mesh remains available but with warnings." },
    { question: "What documents do I need?", answer: "Key documents include surgical records showing mesh implant, records of complications and revision surgeries, medical bills, and any communications with your doctor about mesh problems." },
    { question: "Can I file if I had mesh removed?", answer: "Yes, mesh removal or revision surgery often strengthens claims. Document the removal surgery, any complications during removal, and ongoing symptoms after removal." },
];

export function calculateMeshSettlement(
    injuryType: string,
    manufacturer: string,
    surgeryComplication: string,
    medicalExpenses: number,
    yearsSinceImplant: number,
    hasRevisionSurgery: boolean,
    hasOngoingSymptoms: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const mfr = MESH_MANUFACTURERS.find(m => m.id === manufacturer) || MESH_MANUFACTURERS[0];
    const surgery = SURGERY_COMPLICATIONS.find(s => s.id === surgeryComplication) || SURGERY_COMPLICATIONS[0];

    const revisionBonus = hasRevisionSurgery ? 1.3 : 1.0;
    const ongoingBonus = hasOngoingSymptoms ? 1.2 : 1.0;
    const durationBonus = yearsSinceImplant > 5 ? 1.1 : 1.0;

    const baseMultiplier = injury.multiplier * mfr.multiplier * surgery.multiplier * revisionBonus * ongoingBonus * durationBonus;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        injuryType: injury.name,
        manufacturer: mfr.name,
        surgeryComplication: surgery.name,
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.3),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
