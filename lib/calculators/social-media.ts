// ============================================
// SOCIAL MEDIA ADDICTION CALCULATOR - ENHANCED+ VERSION
// 2026 Data - State AG Lawsuits & MDL
// ============================================

import { Calculator, FileText, Smartphone, AlertTriangle, Users, MapPin, Brain } from 'lucide-react';

export const SITE = {
    name: "Social Media Addiction Calculator",
    tagline: "Free Social Media Lawsuit Calculator",
    description: "Calculate social media addiction lawsuit settlement value instantly. Free 2026 calculator for Meta, TikTok, Snap, and ByteDance youth mental health claims.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/social-media",
};

export const SOCIAL_2026 = {
    platforms: [
        { name: "Meta (Facebook/Instagram)", defendant: "Meta Platforms Inc.", lawsuits: 42, avgSettlement: 400000, multiplier: 1.0, features: "Infinite scroll, likes, filters" },
        { name: "TikTok", defendant: "ByteDance Ltd.", lawsuits: 38, avgSettlement: 380000, multiplier: 1.0, features: "For You algorithm, short videos" },
        { name: "Snapchat", defendant: "Snap Inc.", lawsuits: 35, avgSettlement: 350000, multiplier: 0.95, features: "Streaks, disappearing content" },
        { name: "YouTube", defendant: "Google/Alphabet", lawsuits: 28, avgSettlement: 320000, multiplier: 0.9, features: "Autoplay, recommendations" },
        { name: "X (Twitter)", defendant: "X Corp.", lawsuits: 15, avgSettlement: 280000, multiplier: 0.8, features: "Trending, notifications" },
    ],
    symptoms: [
        { symptom: "Suicide/Self-Harm Attempt", avgSettlement: 1500000, minSettlement: 500000, maxSettlement: 5000000, tier: 1, description: "Attempt linked to social media use" },
        { symptom: "Hospitalization for Mental Health", avgSettlement: 800000, minSettlement: 300000, maxSettlement: 2000000, tier: 1, description: "Inpatient psychiatric treatment" },
        { symptom: "Eating Disorder (Anorexia/Bulimia)", avgSettlement: 600000, minSettlement: 200000, maxSettlement: 1500000, tier: 1, description: "Body image disorders from content" },
        { symptom: "Severe Depression", avgSettlement: 450000, minSettlement: 150000, maxSettlement: 1000000, tier: 2, description: "Clinical depression diagnosis" },
        { symptom: "Severe Anxiety Disorder", avgSettlement: 400000, minSettlement: 120000, maxSettlement: 900000, tier: 2, description: "Diagnosed anxiety condition" },
        { symptom: "ADHD/Attention Issues", avgSettlement: 300000, minSettlement: 100000, maxSettlement: 700000, tier: 2, description: "Attention and focus problems" },
        { symptom: "Sleep Disorders", avgSettlement: 250000, minSettlement: 80000, maxSettlement: 600000, tier: 3, description: "Insomnia, disrupted sleep" },
        { symptom: "Academic Decline", avgSettlement: 200000, minSettlement: 60000, maxSettlement: 500000, tier: 3, description: "School performance issues" },
    ],
    ageGroups: [
        { group: "Under 13 (Child)", multiplier: 1.5, description: "COPPA violations, underage use" },
        { group: "13-15 (Young Teen)", multiplier: 1.3, description: "Vulnerable developmental stage" },
        { group: "16-17 (Older Teen)", multiplier: 1.1, description: "High school years" },
        { group: "18-21 (Young Adult)", multiplier: 0.9, description: "College age, legal adult" },
        { group: "22-25", multiplier: 0.7, description: "Adult user, lower damages" },
    ],
    usageDuration: [
        { duration: "1-2 years", multiplier: 0.7 },
        { duration: "2-4 years", multiplier: 0.9 },
        { duration: "4-6 years", multiplier: 1.0 },
        { duration: "6-8 years", multiplier: 1.2 },
        { duration: "8+ years", multiplier: 1.4 },
    ],
    stateLawsuits: [
        { state: "California", cases: 850, status: "Active", agInvolved: true },
        { state: "New York", cases: 720, status: "Active", agInvolved: true },
        { state: "Texas", cases: 680, status: "Active", agInvolved: true },
        { state: "Florida", cases: 540, status: "Active", agInvolved: true },
        { state: "Illinois", cases: 420, status: "Active", agInvolved: true },
        { state: "Pennsylvania", cases: 380, status: "Active", agInvolved: true },
        { state: "Ohio", cases: 350, status: "Active", agInvolved: false },
        { state: "Georgia", cases: 310, status: "Active", agInvolved: false },
    ],
    statistics: {
        totalLawsuits: 5500,
        stateAGs: 42,
        avgSettlement: 450000,
        affectedYouth: 25000000,
        mdlCourt: "Northern District of California",
        mdlNumber: "MDL 3047",
    },
    citation: "Based on MDL 3047 (N.D. Cal.), State Attorney General Filings 2024-2026, Meta Internal Documents, and Youth Mental Health Research 2026",
} as const;

export const CALCULATORS = [
    { id: "social-media/social-calculator", name: "Settlement Calculator", shortName: "Calculator", description: "Calculate social media settlement", icon: Calculator, keywords: ["social media calculator"], featured: true },
    { id: "social-media/social-guide", name: "Lawsuit Guide", shortName: "Guide", description: "Understanding social media claims", icon: FileText, keywords: ["social media lawsuit guide"], featured: true },
    { id: "social-media/platforms", name: "Platform Lawsuits", shortName: "Platforms", description: "Meta, TikTok, Snap lawsuits", icon: Smartphone, keywords: ["meta lawsuit", "tiktok lawsuit"], featured: true },
    { id: "social-media/symptoms", name: "Symptoms & Settlements", shortName: "Symptoms", description: "Mental health conditions", icon: Brain, keywords: ["social media depression"], featured: true },
    { id: "social-media/age-groups", name: "Age Group Impact", shortName: "Ages", description: "Youth vulnerability factors", icon: Users, keywords: ["teen social media"], featured: false },
    { id: "social-media/state-lawsuits", name: "State Lawsuits", shortName: "States", description: "State AG lawsuits map", icon: MapPin, keywords: ["social media state lawsuit"], featured: false },
] as const;

export interface SocialResult { platform: string; symptom: string; ageGroup: string; usageDuration: string; baseDamages: number; platformBonus: number; ageBonus: number; usageBonus: number; totalLow: number; totalMid: number; totalHigh: number; }

export function calculateSocialSettlement(platformIndex: number, symptomIndex: number, ageIndex: number, usageIndex: number): SocialResult {
    const platform = SOCIAL_2026.platforms[platformIndex];
    const symptom = SOCIAL_2026.symptoms[symptomIndex];
    const age = SOCIAL_2026.ageGroups[ageIndex];
    const usage = SOCIAL_2026.usageDuration[usageIndex];
    const baseDamages = symptom.avgSettlement;
    const platformBonus = baseDamages * (platform.multiplier - 1);
    const ageBonus = baseDamages * (age.multiplier - 1);
    const usageBonus = baseDamages * (usage.multiplier - 1);
    const total = baseDamages + platformBonus + ageBonus + usageBonus;
    return { platform: platform.name, symptom: symptom.symptom, ageGroup: age.group, usageDuration: usage.duration, baseDamages: Math.round(baseDamages), platformBonus: Math.round(platformBonus), ageBonus: Math.round(ageBonus), usageBonus: Math.round(usageBonus), totalLow: Math.round(total * 0.5), totalMid: Math.round(total), totalHigh: Math.round(total * 1.8) };
}

export function formatCurrency(amount: number): string { return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount); }
