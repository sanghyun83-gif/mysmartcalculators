// ============================================
// FOOD POISONING LAWSUIT CALCULATOR
// 2026 Foodborne Illness Claims - Advanced Version
// ============================================

import { Calculator, FileText, Bug, AlertTriangle } from 'lucide-react';

export const SITE = {
    name: "Food Poisoning Calculator",
    tagline: "Free 2026 Food Poisoning Settlement Estimator",
    description: "Calculate food poisoning lawsuit settlements. E.coli, Salmonella, Listeria, restaurant outbreaks. Based on 2026 CDC foodborne illness data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/food-poisoning",
};

export const PATHOGEN_TYPES = [
    { id: "ecoli", name: "E. coli O157:H7", description: "HUS, kidney failure risk", avgSettlement: 400000, multiplier: 3.5 },
    { id: "salmonella", name: "Salmonella", description: "Reactive arthritis risk", avgSettlement: 150000, multiplier: 2.5 },
    { id: "listeria", name: "Listeria", description: "High fatality in vulnerable", avgSettlement: 500000, multiplier: 4.0 },
    { id: "norovirus", name: "Norovirus", description: "Most common, quick recovery", avgSettlement: 50000, multiplier: 1.8 },
    { id: "campylobacter", name: "Campylobacter", description: "GBS risk", avgSettlement: 180000, multiplier: 2.8 },
];

export const SOURCE_TYPES = [
    { id: "restaurant", name: "Restaurant / Fast Food", multiplier: 1.4 },
    { id: "grocery", name: "Grocery Store", multiplier: 1.3 },
    { id: "packaged", name: "Packaged / Processed Food", multiplier: 1.5 },
    { id: "cruise", name: "Cruise Ship / Buffet", multiplier: 1.45 },
];

export const COMPLICATION_LEVELS = [
    { id: "hus", name: "HUS / Organ Failure", multiplier: 2.0 },
    { id: "hospitalized", name: "Hospitalization Required", multiplier: 1.5 },
    { id: "outpatient", name: "Outpatient Treatment", multiplier: 1.0 },
];

export const FOOD_2026 = {
    statistics: {
        cases: "48M+ Annual Foodborne Illnesses",
        deaths: "3,000+ Deaths Per Year",
        source: "CDC Foodborne Data",
    },
    citations: [
        "Centers for Disease Control (CDC) Foodborne Disease Outbreak Surveillance 2026",
        "Food and Drug Administration (FDA) Food Safety Modernization Act 2026",
        "USDA Food Safety and Inspection Service (FSIS) Reports 2026",
    ],
};

export const CALCULATORS = [
    { id: "food-poisoning/calculator", name: "Settlement Calculator", description: "Estimate claim value", icon: Calculator, featured: true },
    { id: "food-poisoning/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
    { id: "food-poisoning/pathogens", name: "Pathogen Types", description: "E.coli, Salmonella, Listeria", icon: Bug, featured: false },
    { id: "food-poisoning/outbreaks", name: "Recent Outbreaks", description: "2026 outbreak tracker", icon: AlertTriangle, featured: false },
];

export const FAQS = [
    { question: "What is a food poisoning lawsuit?", answer: "Food poisoning lawsuits seek compensation for illnesses caused by contaminated food. Restaurants, grocery stores, and food manufacturers can be held strictly liable for selling unsafe food." },
    { question: "How do I prove food poisoning?", answer: "Key evidence includes positive stool tests, medical records documenting symptoms, outbreak links if applicable, and receipts showing where you ate. State health departments can help trace outbreaks." },
    { question: "What is HUS and why does it matter?", answer: "Hemolytic Uremic Syndrome (HUS) is a life-threatening complication of E. coli O157:H7 that causes kidney failure. HUS cases result in significantly higher settlements due to permanent damage." },
    { question: "Can I sue a restaurant?", answer: "Yes. Restaurants are strictly liable for serving contaminated food in most states. You don't need to prove negligence - only that the food was contaminated and caused your illness." },
    { question: "What about packaged food recalls?", answer: "Food manufacturers can be sued for recalled products. Major recalls create opportunities for class actions and individual lawsuits. Keep receipts and packaging." },
    { question: "What damages can I recover?", answer: "You can recover medical expenses, lost wages, pain and suffering, and long-term care costs for complications. Severe cases with permanent damage recover significantly more." },
    { question: "What about Listeria in pregnancy?", answer: "Listeria poses severe risks to pregnant women including miscarriage and stillbirth. These cases result in substantial settlements due to catastrophic outcomes." },
    { question: "How important is the outbreak investigation?", answer: "Very important. State health department investigations linking your illness to a specific source strengthen your case significantly. Cooperation with investigators helps." },
    { question: "What is reactive arthritis?", answer: "Reactive arthritis is a long-term complication of Salmonella and other food poisoning. Joint pain can last months or years, significantly increasing settlement value." },
    { question: "How long do I have to file?", answer: "Statutes of limitations vary by state (typically 2-3 years). However, evidence disappears quickly - save receipts, packaging, and get tested immediately." },
];

export function calculateFoodPoisoningSettlement(
    pathogenType: string,
    sourceType: string,
    complicationLevel: string,
    medicalExpenses: number,
    partOfOutbreak: boolean,
    hasPositiveTest: boolean,
    hasReceipts: boolean
) {
    const pathogen = PATHOGEN_TYPES.find(p => p.id === pathogenType) || PATHOGEN_TYPES[0];
    const source = SOURCE_TYPES.find(s => s.id === sourceType) || SOURCE_TYPES[0];
    const complication = COMPLICATION_LEVELS.find(c => c.id === complicationLevel) || COMPLICATION_LEVELS[0];

    const outbreakBonus = partOfOutbreak ? 1.3 : 1.0;
    const testBonus = hasPositiveTest ? 1.25 : 1.0;
    const receiptsBonus = hasReceipts ? 1.1 : 1.0;

    const baseMultiplier = pathogen.multiplier * source.multiplier * complication.multiplier * outbreakBonus * testBonus * receiptsBonus;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        pathogenType: pathogen.name,
        sourceType: source.name,
        complicationLevel: complication.name,
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.3),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
