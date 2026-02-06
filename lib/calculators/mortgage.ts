// ============================================
// MORTGAGE-CALC SITE CONFIGURATION
// 2026 Mortgage Payment Calculator
// ============================================

import { Calculator, Home, DollarSign, TrendingDown, PiggyBank, Scale, Building } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Mortgage Calculator",
    tagline: "Free 2026 Payment Calculator",
    description: "Calculate your mortgage payment for free. Estimate monthly payments, amortization schedule, and home affordability. Includes state-specific property tax and insurance.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/mortgage",
};

import { STATE_MORTGAGE_DATA, getStatesList } from "./mortgage/state-data";
export { getStatesList };


// ============================================
// MORTGAGE CONSTANTS
// ============================================
export const MORTGAGE_CONSTANTS = {
    // Default values
    defaults: {
        homePrice: 400000,
        downPaymentPercent: 20,
        interestRate: 6.5, // 2026 average
        loanTermYears: 30,
        propertyTaxRate: 1.2, // percent of home value per year
        homeInsuranceYear: 1800, // yearly
        pmiRate: 0.5, // percent of loan per year if down < 20%
    },

    // Loan term options
    loanTerms: [
        { years: 15, label: "15-year fixed" },
        { years: 20, label: "20-year fixed" },
        { years: 30, label: "30-year fixed" },
    ],

    // PMI threshold
    pmiThreshold: 20, // percent down payment to avoid PMI

    // DTI (Debt-to-Income) limits for affordability
    dtiLimits: {
        housing: 28, // max percent of income for housing
        total: 36, // max percent of income for all debt
    },

    // Average home prices by state (for reference)
    avgHomePriceUS: 420000,
    avgInterestRate2026: 6.5,
};

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "mortgage/calculator",
        name: "Mortgage Calculator",
        shortName: "Mortgage",
        description: "Calculate your monthly mortgage payment",
        longDescription: "Free mortgage calculator with PMI, taxes, and insurance. See your full monthly payment breakdown.",
        icon: Calculator,
        category: "mortgage",
        keywords: ["mortgage calculator", "mortgage payment calculator", "home loan calculator"],
        featured: true,
        faqs: [
            {
                question: "What is PITI in a mortgage?",
                answer: "PITI stands for Principal, Interest, Taxes, and Insurance. These are the four main components of a monthly mortgage payment."
            },
            {
                question: "How much down payment do I need?",
                answer: "While 20% is the traditional benchmark to avoid PMI, many conventional loans allow as little as 3% down, and FHA loans allow 3.5%."
            },
            {
                question: "What is PMI?",
                answer: "Private Mortgage Insurance (PMI) is usually required if your down payment is less than 20%. It protects the lender if you default on the loan."
            }
        ]
    },
    {
        id: "mortgage/affordability",
        name: "Home Affordability",
        shortName: "Affordability",
        description: "How much home can you afford?",
        longDescription: "Calculate the maximum home price you can afford based on your income and debts.",
        icon: Home,
        category: "mortgage",
        keywords: ["home affordability calculator", "how much house can I afford"],
        featured: true,
    },
    {
        id: "mortgage/amortization",
        name: "Amortization Schedule",
        shortName: "Amortization",
        description: "See your payment schedule year by year",
        longDescription: "View your complete mortgage amortization schedule showing principal, interest, and balance.",
        icon: TrendingDown,
        category: "mortgage",
        keywords: ["amortization schedule", "amortization calculator", "loan amortization"],
        featured: true,
    },
    {
        id: "mortgage/refinance",
        name: "Refinance Calculator",
        shortName: "Refinance",
        description: "Should you refinance your mortgage?",
        longDescription: "Calculate your savings from refinancing. See break-even point and monthly savings.",
        icon: DollarSign,
        category: "mortgage",
        keywords: ["refinance calculator", "mortgage refinance", "refinance savings"],
        featured: false,
    },
    {
        id: "mortgage/extra-payments",
        name: "Extra Payment Calculator",
        shortName: "Extra Payments",
        description: "How much can you save with extra payments?",
        longDescription: "See how extra payments can reduce your loan term and total interest paid.",
        icon: PiggyBank,
        category: "mortgage",
        keywords: ["extra payment calculator", "pay off mortgage early", "additional payment"],
        featured: false,
    },
    {
        id: "mortgage/rent-vs-buy",
        name: "Rent vs Buy",
        shortName: "Rent vs Buy",
        description: "Should you rent or buy a home?",
        longDescription: "Compare the costs of renting vs buying over time to make the right decision.",
        icon: Scale,
        category: "mortgage",
        keywords: ["rent vs buy calculator", "rent or buy", "renting vs buying"],
        featured: false,
    },
] as const;

// ============================================
// MORTGAGE CALCULATION FUNCTIONS
// ============================================

export interface MortgageResult {
    homePrice: number;
    downPayment: number;
    downPaymentPercent: number;
    loanAmount: number;
    interestRate: number;
    loanTermYears: number;
    monthlyPI: number; // Principal & Interest
    monthlyTax: number;
    monthlyInsurance: number;
    monthlyPMI: number;
    totalMonthlyPayment: number;
    totalPayments: number;
    totalInterest: number;
    hasPMI: boolean;
}

export function calculateMortgage(
    homePrice: number,
    downPayment: number,
    interestRate: number,
    loanTermYears: number,
    stateCode: string = "CA",
    customTaxRate?: number,
    customInsurance?: number
): MortgageResult {
    const stateData = STATE_MORTGAGE_DATA[stateCode] || STATE_MORTGAGE_DATA["CA"];
    const propertyTaxRate = customTaxRate || stateData.avgPropertyTax;
    const homeInsuranceYear = customInsurance || stateData.avgInsurance;
    const pmiRate = stateData.pmiRate;

    const loanAmount = homePrice - downPayment;
    const downPaymentPercent = (downPayment / homePrice) * 100;
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTermYears * 12;

    // Calculate monthly Principal & Interest (P&I)
    let monthlyPI = 0;
    if (monthlyRate > 0) {
        monthlyPI = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
            (Math.pow(1 + monthlyRate, numPayments) - 1);
    } else {
        monthlyPI = loanAmount / numPayments;
    }
    monthlyPI = Math.round(monthlyPI);

    // Calculate monthly property tax
    const monthlyTax = Math.round((homePrice * (propertyTaxRate / 100)) / 12);

    // Calculate monthly home insurance
    const monthlyInsurance = Math.round(homeInsuranceYear / 12);

    // Calculate PMI if down payment < 20%
    const hasPMI = downPaymentPercent < MORTGAGE_CONSTANTS.pmiThreshold;
    const monthlyPMI = hasPMI
        ? Math.round((loanAmount * (pmiRate / 100)) / 12)
        : 0;


    // Total monthly payment (PITI + PMI)
    const totalMonthlyPayment = monthlyPI + monthlyTax + monthlyInsurance + monthlyPMI;

    // Total payments and interest over loan life
    const totalPayments = monthlyPI * numPayments;
    const totalInterest = totalPayments - loanAmount;

    return {
        homePrice,
        downPayment,
        downPaymentPercent: Math.round(downPaymentPercent * 10) / 10,
        loanAmount,
        interestRate,
        loanTermYears,
        monthlyPI,
        monthlyTax,
        monthlyInsurance,
        monthlyPMI,
        totalMonthlyPayment,
        totalPayments: Math.round(totalPayments),
        totalInterest: Math.round(totalInterest),
        hasPMI,
    };
}

// ============================================
// AMORTIZATION SCHEDULE
// ============================================

export interface AmortizationRow {
    month: number;
    year: number;
    payment: number;
    principal: number;
    interest: number;
    balance: number;
    totalInterest: number;
    totalPrincipal: number;
}

export interface AmortizationSummary {
    yearlyData: {
        year: number;
        totalPrincipal: number;
        totalInterest: number;
        endingBalance: number;
    }[];
    totalInterest: number;
    totalPayments: number;
}

export function generateAmortizationSchedule(
    loanAmount: number,
    interestRate: number,
    loanTermYears: number
): AmortizationSummary {
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTermYears * 12;

    // Calculate monthly payment
    let monthlyPayment = 0;
    if (monthlyRate > 0) {
        monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
            (Math.pow(1 + monthlyRate, numPayments) - 1);
    } else {
        monthlyPayment = loanAmount / numPayments;
    }

    let balance = loanAmount;
    let totalInterestPaid = 0;
    let totalPrincipalPaid = 0;

    const yearlyData: AmortizationSummary['yearlyData'] = [];
    let yearPrincipal = 0;
    let yearInterest = 0;

    for (let month = 1; month <= numPayments; month++) {
        const interestPayment = balance * monthlyRate;
        const principalPayment = monthlyPayment - interestPayment;
        balance = Math.max(0, balance - principalPayment);

        totalInterestPaid += interestPayment;
        totalPrincipalPaid += principalPayment;
        yearPrincipal += principalPayment;
        yearInterest += interestPayment;

        // End of year summary
        if (month % 12 === 0 || month === numPayments) {
            yearlyData.push({
                year: Math.ceil(month / 12),
                totalPrincipal: Math.round(yearPrincipal),
                totalInterest: Math.round(yearInterest),
                endingBalance: Math.round(balance),
            });
            yearPrincipal = 0;
            yearInterest = 0;
        }
    }

    return {
        yearlyData,
        totalInterest: Math.round(totalInterestPaid),
        totalPayments: Math.round(monthlyPayment * numPayments),
    };
}

// ============================================
// AFFORDABILITY CALCULATOR
// ============================================

export interface AffordabilityResult {
    annualIncome: number;
    monthlyIncome: number;
    monthlyDebts: number;
    downPayment: number;
    maxMonthlyPayment: number;
    maxHomePrice: number;
    estimatedLoanAmount: number;
    dtiRatio: number;
}

export function calculateAffordability(
    annualIncome: number,
    monthlyDebts: number,
    downPayment: number,
    stateCode: string = "CA",
    interestRate: number = MORTGAGE_CONSTANTS.defaults.interestRate,
    loanTermYears: number = 30
): AffordabilityResult {
    const stateData = STATE_MORTGAGE_DATA[stateCode] || STATE_MORTGAGE_DATA["CA"];

    const monthlyIncome = annualIncome / 12;
    const maxHousingPayment = monthlyIncome * (MORTGAGE_CONSTANTS.dtiLimits.housing / 100);
    const maxTotalDebt = monthlyIncome * (MORTGAGE_CONSTANTS.dtiLimits.total / 100);

    // Max monthly payment considering existing debts
    const maxMonthlyPayment = Math.min(maxHousingPayment, maxTotalDebt - monthlyDebts);

    // Estimate taxes and insurance (about 25% of PITI)
    const estimatedPI = maxMonthlyPayment * 0.75;

    // Calculate max loan amount from monthly P&I
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTermYears * 12;

    let maxLoanAmount = 0;
    if (monthlyRate > 0) {
        maxLoanAmount = estimatedPI * (Math.pow(1 + monthlyRate, numPayments) - 1) /
            (monthlyRate * Math.pow(1 + monthlyRate, numPayments));
    }

    const maxHomePrice = Math.round(maxLoanAmount + downPayment);
    const dtiRatio = Math.round(((maxMonthlyPayment + monthlyDebts) / monthlyIncome) * 100);

    return {
        annualIncome,
        monthlyIncome: Math.round(monthlyIncome),
        monthlyDebts,
        downPayment,
        maxMonthlyPayment: Math.round(maxMonthlyPayment),
        maxHomePrice,
        estimatedLoanAmount: Math.round(maxLoanAmount),
        dtiRatio,
    };
}

// ============================================
// REFINANCE CALCULATOR
// ============================================

export interface RefinanceResult {
    currentBalance: number;
    currentRate: number;
    currentPayment: number;
    newRate: number;
    newPayment: number;
    monthlySavings: number;
    closingCosts: number;
    breakEvenMonths: number;
    totalSavings: number;
    remainingMonths: number;
}

export function calculateRefinance(
    currentBalance: number,
    currentRate: number,
    remainingYears: number,
    newRate: number,
    closingCosts: number,
    newTermYears: number = 30
): RefinanceResult {
    const remainingMonths = remainingYears * 12;

    // Current payment
    const currentMonthlyRate = currentRate / 100 / 12;
    let currentPayment = currentBalance * (currentMonthlyRate * Math.pow(1 + currentMonthlyRate, remainingMonths)) /
        (Math.pow(1 + currentMonthlyRate, remainingMonths) - 1);

    // New payment
    const newMonthlyRate = newRate / 100 / 12;
    const newNumPayments = newTermYears * 12;
    let newPayment = currentBalance * (newMonthlyRate * Math.pow(1 + newMonthlyRate, newNumPayments)) /
        (Math.pow(1 + newMonthlyRate, newNumPayments) - 1);

    currentPayment = Math.round(currentPayment);
    newPayment = Math.round(newPayment);

    const monthlySavings = currentPayment - newPayment;
    const breakEvenMonths = monthlySavings > 0 ? Math.ceil(closingCosts / monthlySavings) : 0;

    // Total savings over remaining term (simplified)
    const totalSavings = (monthlySavings * Math.min(remainingMonths, newNumPayments)) - closingCosts;

    return {
        currentBalance,
        currentRate,
        currentPayment,
        newRate,
        newPayment,
        monthlySavings,
        closingCosts,
        breakEvenMonths,
        totalSavings: Math.round(totalSavings),
        remainingMonths,
    };
}

// ============================================
// EXTRA PAYMENTS CALCULATOR
// ============================================

export interface ExtraPaymentResult {
    originalTermMonths: number;
    newTermMonths: number;
    monthsSaved: number;
    yearsSaved: number;
    interestSaved: number;
    totalInterestOriginal: number;
    totalInterestWithExtra: number;
}

export function calculateExtraPayments(
    loanAmount: number,
    interestRate: number,
    loanTermYears: number,
    extraMonthlyPayment: number
): ExtraPaymentResult {
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTermYears * 12;

    // Calculate base monthly payment
    let monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
        (Math.pow(1 + monthlyRate, numPayments) - 1);

    // Calculate original total interest
    const totalPaymentsOriginal = monthlyPayment * numPayments;
    const totalInterestOriginal = totalPaymentsOriginal - loanAmount;

    // Calculate with extra payments
    let balance = loanAmount;
    let months = 0;
    let totalInterestWithExtra = 0;
    const totalMonthlyPayment = monthlyPayment + extraMonthlyPayment;

    while (balance > 0 && months < numPayments) {
        const interestPayment = balance * monthlyRate;
        const principalPayment = Math.min(balance, totalMonthlyPayment - interestPayment);
        balance = Math.max(0, balance - principalPayment);
        totalInterestWithExtra += interestPayment;
        months++;
    }

    const monthsSaved = numPayments - months;
    const interestSaved = totalInterestOriginal - totalInterestWithExtra;

    return {
        originalTermMonths: numPayments,
        newTermMonths: months,
        monthsSaved,
        yearsSaved: Math.round((monthsSaved / 12) * 10) / 10,
        interestSaved: Math.round(interestSaved),
        totalInterestOriginal: Math.round(totalInterestOriginal),
        totalInterestWithExtra: Math.round(totalInterestWithExtra),
    };
}

// ============================================
// RENT VS BUY CALCULATOR
// ============================================

export interface RentVsBuyResult {
    monthlyRent: number;
    monthlyMortgage: number;
    yearlyRentIncrease: number;
    homeAppreciation: number;
    yearsToBreakEven: number;
    fiveYearCostRent: number;
    fiveYearCostBuy: number;
    recommendation: 'rent' | 'buy' | 'similar';
}

export function calculateRentVsBuy(
    monthlyRent: number,
    homePrice: number,
    downPayment: number,
    interestRate: number,
    yearlyRentIncrease: number = 3,
    homeAppreciation: number = 3
): RentVsBuyResult {
    const mortgage = calculateMortgage(homePrice, downPayment, interestRate, 30);
    const monthlyMortgage = mortgage.totalMonthlyPayment;

    // Calculate 5-year costs
    let totalRent = 0;
    let currentRent = monthlyRent;
    for (let year = 1; year <= 5; year++) {
        totalRent += currentRent * 12;
        currentRent *= (1 + yearlyRentIncrease / 100);
    }

    // Buy costs (simplified - mortgage payments minus equity gained)
    const fiveYearPayments = monthlyMortgage * 60;
    const homeValueIn5Years = homePrice * Math.pow(1 + homeAppreciation / 100, 5);
    const equityGained = homeValueIn5Years - homePrice + (mortgage.monthlyPI * 60 * 0.3); // rough equity
    const fiveYearCostBuy = fiveYearPayments - equityGained + downPayment;

    // Determine break-even
    const monthlyCostDiff = monthlyMortgage - monthlyRent;
    let yearsToBreakEven = 0;
    if (monthlyMortgage > monthlyRent) {
        yearsToBreakEven = Math.round((downPayment / (monthlyRent * 12 * (homeAppreciation / 100))) * 10) / 10;
    }

    const recommendation = fiveYearCostBuy < totalRent ? 'buy' :
        fiveYearCostBuy > totalRent * 1.1 ? 'rent' : 'similar';

    return {
        monthlyRent,
        monthlyMortgage,
        yearlyRentIncrease,
        homeAppreciation,
        yearsToBreakEven: Math.min(yearsToBreakEven, 30),
        fiveYearCostRent: Math.round(totalRent),
        fiveYearCostBuy: Math.round(fiveYearCostBuy),
        recommendation,
    };
}

// ============================================
// UTILITY FUNCTIONS
// ============================================
export function formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);
}

export function parseFormattedNumber(value: string): number {
    return parseInt(value.replace(/[^0-9]/g, '')) || 0;
}
