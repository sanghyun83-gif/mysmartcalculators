// ============================================
// MORTGAGE-CALC SITE CONFIGURATION
// 2025 Mortgage Payment Calculator
// ============================================

import { Calculator, Home, DollarSign, TrendingDown, PiggyBank, Scale, Building } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Mortgage Calculator",
    tagline: "Free 2026 Mortgage Payment & Rate Estimator",
    description: "Calculate your 2026 mortgage payment instantly. Free home loan negotiator with official Freddie Mac (PMMS) rate data, FHFA property tax benchmarks, and PMI estimation.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/mortgage",
};

// ============================================
// MORTGAGE CONSTANTS
// ============================================
export const MORTGAGE_CONSTANTS = {
    // Default values
    defaults: {
        homePrice: 400000,
        downPaymentPercent: 20,
        interestRate: 6.5, // 2025 average
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
    avgHomePriceUS: 450000,
    avgInterestRate2026: 7.0,
    citation: "Based on 2026 Freddie Mac Primary Mortgage Market Survey (PMMS) data, FHFA House Price Index (HPI), and industry-standard PITI calculation benchmarks."
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
                answer: "PITI stands for Principal, Interest, Taxes, and Insurance. These are the four main components of a monthly mortgage payment. Principal and Interest go to the lender, while Taxes (property tax) and Insurance (homeowners insurance) are often held in escrow."
            },
            {
                question: "How much down payment do I need?",
                answer: "While 20% is the traditional benchmark to avoid PMI, many conventional loans allow as little as 3% down, and FHA loans allow 3.5%. However, a larger down payment reduces your monthly payment and total interest paid over the life of the loan."
            },
            {
                question: "What is PMI (Private Mortgage Insurance)?",
                answer: "PMI is usually required on conventional loans if your down payment is less than 20% of the home's value. It protects the lender in case of default. You can typically request to cancel PMI once your loan-to-value (LTV) ratio reaches 80%."
            },
            {
                question: "What is an escrow account?",
                answer: "An escrow account is a neutral holding area managed by your lender to pay for property taxes and homeowners insurance. A portion of your monthly payment is funneled here so the lender can pay these large annual bills on your behalf."
            },
            {
                question: "How do mortgage points work?",
                answer: "Mortgage points, or discount points, are fees paid directly to the lender at closing in exchange for a lower interest rate. One point typically costs 1% of the mortgage amount and can significantly reduce long-term interest costs."
            },
            {
                question: "What is the difference between a 15-year and 30-year mortgage?",
                answer: "A 30-year term offers lower monthly payments but higher total interest over time. A 15-year term has higher monthly payments but allows you to build equity faster and pay significantly less in total interest."
            },
            {
                question: "What is mortgage amortization?",
                answer: "Amortization is the process of paying off debt through regular payments over time. In early years, a larger portion of your payment goes toward interest. As the balance decreases, more of your payment is applied to the principal."
            },
            {
                question: "What are typical closing costs?",
                answer: "Closing costs usually range from 2% to 5% of the home's purchase price. They include loan origination fees, appraisal fees, title insurance, taxes, and deed recording fees."
            },
            {
                question: "What is DTI (Debt-to-Income) ratio?",
                answer: "DTI is the percentage of your gross monthly income that goes toward paying debts. Lenders use it to measure your ability to manage monthly payments. Most lenders prefer a back-end DTI ratio of 36% or lower."
            },
            {
                question: "What is the difference between Pre-qualified and Pre-approved?",
                answer: "Pre-qualification is an informal estimate based on self-reported data. Pre-approval is a conditional commitment from a lender after a thorough check of your credit, income, and financial history, giving you more leverage as a buyer."
            },
            {
                question: "Can I pay off my mortgage early?",
                answer: "Most modern mortgages do not have prepayment penalties, allowing you to make extra payments toward the principal. Doing so can save thousands in interest and shave years off your loan term."
            },
            {
                question: "What is an ARM (Adjustable-Rate Mortgage)?",
                answer: "An ARM has an interest rate that changes periodically. It usually starts with a fixed lower 'teaser' rate for 5-10 years, after which the rate adjusts based on market indexes like SOFR plus a margin."
            },
            {
                question: "What is the FHA loan requirement?",
                answer: "FHA loans are backed by the Federal Housing Administration and are popular for first-time buyers. They require as little as 3.5% down and have more flexible credit score requirements (typically 580 or higher)."
            },
            {
                question: "How does property tax impact my payment?",
                answer: "Property taxes vary by location and are based on the assessed value of your home. A $400k home in a 1.2% tax area adds $4,800 annually ($400/month) to your PITI payment."
            },
            {
                question: "Is 2026 a good time to buy a home?",
                answer: "Market conditions in 2026 depend on interest rate trends and housing inventory. Stabilizing rates compared to previous cycles may offer more predictable monthly payments for long-term homeowners."
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
    propertyTaxRate: number = MORTGAGE_CONSTANTS.defaults.propertyTaxRate,
    homeInsuranceYear: number = MORTGAGE_CONSTANTS.defaults.homeInsuranceYear
): MortgageResult {
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
        ? Math.round((loanAmount * (MORTGAGE_CONSTANTS.defaults.pmiRate / 100)) / 12)
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
    interestRate: number = MORTGAGE_CONSTANTS.defaults.interestRate,
    loanTermYears: number = 30
): AffordabilityResult {
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
