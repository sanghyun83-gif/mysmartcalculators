// ============================================
// PERSONAL LOAN CALCULATOR - CORE LOGIC
// 2026 Data - State Specific Usury Limits
// ============================================

import { Calculator, Shield, Info, MapPin } from 'lucide-react';
import { STATE_PERSONAL_LOAN_DATA, PersonalLoanStateData, getStatesList } from './personal-loan/state-data';

export const SITE = {
    name: "Personal Loan Calculator",
    tagline: "Free 2026 Payment Calculator",
    description: "Calculate your monthly personal loan payments. Includes state-specific APR limits and usury laws for 2026.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/personal-loan",
};

export interface PersonalLoanResult {
    monthlyPayment: number;
    totalInterest: number;
    totalPayment: number;
    isOverLimit: boolean;
    stateMaxAPR: number;
    statePenalty: string;
    stateDescription: string;
}

export { getStatesList };

export function calculatePersonalLoan(
    amount: number,
    apr: number,
    termMonths: number,
    stateCode: string = "CA"
): PersonalLoanResult {
    const stateData = STATE_PERSONAL_LOAN_DATA[stateCode] || STATE_PERSONAL_LOAN_DATA["CA"];
    const monthlyRate = apr / 100 / 12;

    let monthlyPayment = 0;
    if (monthlyRate > 0) {
        monthlyPayment = amount * (monthlyRate * Math.pow(1 + monthlyRate, termMonths)) /
            (Math.pow(1 + monthlyRate, termMonths) - 1);
    } else {
        monthlyPayment = amount / termMonths;
    }

    const totalPayment = monthlyPayment * termMonths;
    const totalInterest = totalPayment - amount;
    const isOverLimit = apr > stateData.maxAPR;

    return {
        monthlyPayment: Math.round(monthlyPayment * 100) / 100,
        totalInterest: Math.round(totalInterest * 100) / 100,
        totalPayment: Math.round(totalPayment * 100) / 100,
        isOverLimit,
        stateMaxAPR: stateData.maxAPR,
        statePenalty: stateData.penaltyInfo,
        stateDescription: stateData.description
    };
}
