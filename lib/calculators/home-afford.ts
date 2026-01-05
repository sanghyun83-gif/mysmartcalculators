// ============================================
// HOME-AFFORD-CALC SITE CONFIGURATION
// 2025 Home Affordability Calculator
// Green/Growth Theme
// ============================================

import { Calculator, Home, DollarSign, Percent, FileText, Scale, TrendingUp } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Home Affordability Calculator",
    tagline: "Free 2025 Housing Calculator",
    description: "Calculate how much house you can afford based on your income. See down payment, DTI ratio, monthly payments, and closing costs with 2025 loan limits.",
    year: 2025,
    baseUrl: "https://mysmartcalculators.com/home-afford",
};

// ============================================
// 2025 HOUSING CONSTANTS (FHFA & FHA Official)
// ============================================
export const HOUSING_CONSTANTS = {
    // 2025 Conforming Loan Limits (FHFA November 2024 Announcement)
    conformingLoanLimits: {
        standard: 806500,           // Baseline limit (most U.S. counties)
        highCost: 1209750,          // High-cost areas (150% of baseline)
        superHighCost: 1209750,     // Alaska, Hawaii, Guam, U.S. Virgin Islands
    },

    // 2025 FHA Loan Limits
    fhaLoanLimits: {
        floor: 524225,              // Low-cost areas (65% of conforming)
        ceiling: 1209750,           // High-cost areas
    },

    // DTI (Debt-to-Income) Rules
    dtiRules: {
        conventional: {
            frontEnd: 28,           // Housing expenses / Gross income
            backEnd: 36,            // Total debt / Gross income
            maxBackEnd: 45,         // With compensating factors
        },
        fha: {
            frontEnd: 31,           // More lenient for first-time buyers
            backEnd: 43,
            maxBackEnd: 50,         // With compensating factors
        },
        va: {
            frontEnd: 41,           // No front-end limit (uses 41% back-end)
            backEnd: 41,
        },
    },

    // 2025 Average Mortgage Rates (December 2025)
    mortgageRates: {
        thirtyYear: 6.50,           // 30-year fixed
        fifteenYear: 5.80,          // 15-year fixed
        fha: 6.25,                  // FHA 30-year
        va: 6.00,                   // VA 30-year
        jumbo: 6.75,                // Jumbo loans
    },

    // PMI (Private Mortgage Insurance)
    pmi: {
        threshold: 20,              // Required if down payment < 20%
        annualRate: 0.5,            // 0.5% to 1.5% of loan amount
        maxRate: 1.5,
    },

    // Property Costs (Annual Estimates)
    propertyCosts: {
        taxRate: 1.1,               // Average property tax rate (%)
        insuranceRate: 0.35,        // Average homeowner's insurance (%)
        hoaMonthly: 0,              // Default HOA (user can adjust)
    },

    // Closing Costs
    closingCosts: {
        minPercent: 2,              // 2-5% of home price
        maxPercent: 5,
        averagePercent: 3,
    },

    // Down Payment Options
    downPaymentOptions: {
        conventional: [5, 10, 15, 20],
        fha: [3.5, 10],
        va: [0],                    // VA allows 0% down
    },

    // Defaults for inputs
    defaults: {
        annualIncome: 100000,
        monthlyDebts: 500,
        downPaymentPercent: 20,
        interestRate: 6.5,
        loanTerm: 30,
        propertyTax: 1.1,
        homeInsurance: 0.35,
        hoaFees: 0,
        creditScore: 720,
    },
};

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "home-afford/calculator",
        name: "Affordability Calculator",
        shortName: "Affordability",
        description: "How much house can you afford?",
        longDescription: "Calculate the maximum home price based on your income, debts, and down payment.",
        icon: Home,
        category: "housing",
        keywords: ["home affordability calculator", "how much house can I afford", "mortgage affordability"],
        featured: true,
    },
    {
        id: "home-afford/down-payment",
        name: "Down Payment Calculator",
        shortName: "Down Payment",
        description: "Calculate your down payment",
        longDescription: "See how much you need to save for a down payment at different percentages.",
        icon: DollarSign,
        category: "housing",
        keywords: ["down payment calculator", "how much down payment", "20 percent down"],
        featured: true,
    },
    {
        id: "home-afford/dti",
        name: "DTI Calculator",
        shortName: "DTI",
        description: "Debt-to-income ratio",
        longDescription: "Calculate your DTI ratio and see if you qualify for a mortgage.",
        icon: Percent,
        category: "housing",
        keywords: ["dti calculator", "debt to income ratio", "28/36 rule"],
        featured: true,
    },
    {
        id: "home-afford/monthly-payment",
        name: "Monthly Payment",
        shortName: "Payment",
        description: "Full monthly payment breakdown",
        longDescription: "See your total monthly payment including principal, interest, taxes, and insurance.",
        icon: Calculator,
        category: "housing",
        keywords: ["monthly mortgage payment", "piti calculator", "mortgage payment calculator"],
        featured: true,
    },
    {
        id: "home-afford/closing-costs",
        name: "Closing Costs",
        shortName: "Closing",
        description: "Estimate closing costs",
        longDescription: "Calculate the fees and costs you'll pay at closing.",
        icon: FileText,
        category: "housing",
        keywords: ["closing costs calculator", "how much are closing costs", "buyer closing costs"],
        featured: false,
    },
    {
        id: "home-afford/rent-vs-buy",
        name: "Rent vs Buy",
        shortName: "Rent vs Buy",
        description: "Should you rent or buy?",
        longDescription: "Compare the costs of renting versus buying over time.",
        icon: Scale,
        category: "housing",
        keywords: ["rent vs buy calculator", "should I rent or buy", "renting vs buying"],
        featured: false,
    },
] as const;

// ============================================
// AFFORDABILITY CALCULATION
// ============================================

export interface AffordabilityResult {
    maxHomePrice: number;
    maxLoanAmount: number;
    downPayment: number;
    monthlyPayment: number;
    monthlyPrincipalInterest: number;
    monthlyPropertyTax: number;
    monthlyInsurance: number;
    monthlyPMI: number;
    monthlyHOA: number;
    frontEndDTI: number;
    backEndDTI: number;
    isConforming: boolean;
    loanType: string;
}

export function calculateAffordability(
    annualIncome: number,
    monthlyDebts: number,
    downPaymentPercent: number,
    interestRate: number,
    loanTermYears: number,
    propertyTaxRate: number,
    homeInsuranceRate: number,
    hoaFees: number = 0,
    targetDTI: number = 28
): AffordabilityResult {
    const monthlyIncome = annualIncome / 12;
    const maxHousingPayment = monthlyIncome * (targetDTI / 100);

    // Monthly interest rate
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTermYears * 12;

    // Iterative calculation to find max home price
    let maxHomePrice = 0;
    let converged = false;
    let estimate = annualIncome * 4; // Start with 4x income

    for (let i = 0; i < 100 && !converged; i++) {
        const downPayment = estimate * (downPaymentPercent / 100);
        const loanAmount = estimate - downPayment;

        // Calculate P&I
        const pi = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
            (Math.pow(1 + monthlyRate, numPayments) - 1);

        // Calculate other costs
        const monthlyTax = (estimate * propertyTaxRate / 100) / 12;
        const monthlyIns = (estimate * homeInsuranceRate / 100) / 12;
        const monthlyPMI = downPaymentPercent < 20 ? (loanAmount * 0.007) / 12 : 0;

        const totalPayment = pi + monthlyTax + monthlyIns + monthlyPMI + hoaFees;

        if (Math.abs(totalPayment - maxHousingPayment) < 10) {
            converged = true;
            maxHomePrice = estimate;
        } else if (totalPayment > maxHousingPayment) {
            estimate *= 0.99;
        } else {
            estimate *= 1.01;
        }
    }

    const downPayment = maxHomePrice * (downPaymentPercent / 100);
    const loanAmount = maxHomePrice - downPayment;

    const pi = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
        (Math.pow(1 + monthlyRate, numPayments) - 1);

    const monthlyTax = (maxHomePrice * propertyTaxRate / 100) / 12;
    const monthlyIns = (maxHomePrice * homeInsuranceRate / 100) / 12;
    const monthlyPMI = downPaymentPercent < 20 ? (loanAmount * 0.007) / 12 : 0;

    const totalPayment = pi + monthlyTax + monthlyIns + monthlyPMI + hoaFees;

    const frontEndDTI = (totalPayment / monthlyIncome) * 100;
    const backEndDTI = ((totalPayment + monthlyDebts) / monthlyIncome) * 100;

    const { conformingLoanLimits } = HOUSING_CONSTANTS;
    const isConforming = loanAmount <= conformingLoanLimits.standard;

    let loanType = 'Conventional';
    if (loanAmount > conformingLoanLimits.highCost) loanType = 'Jumbo';
    else if (loanAmount > conformingLoanLimits.standard) loanType = 'High-Balance';

    return {
        maxHomePrice: Math.round(maxHomePrice),
        maxLoanAmount: Math.round(loanAmount),
        downPayment: Math.round(downPayment),
        monthlyPayment: Math.round(totalPayment),
        monthlyPrincipalInterest: Math.round(pi),
        monthlyPropertyTax: Math.round(monthlyTax),
        monthlyInsurance: Math.round(monthlyIns),
        monthlyPMI: Math.round(monthlyPMI),
        monthlyHOA: hoaFees,
        frontEndDTI: Math.round(frontEndDTI * 10) / 10,
        backEndDTI: Math.round(backEndDTI * 10) / 10,
        isConforming,
        loanType,
    };
}

// ============================================
// DOWN PAYMENT CALCULATION
// ============================================

export interface DownPaymentResult {
    homePrice: number;
    downPaymentPercent: number;
    downPaymentAmount: number;
    loanAmount: number;
    requiresPMI: boolean;
    estimatedPMI: number;
    scenarios: DownPaymentScenario[];
}

export interface DownPaymentScenario {
    percent: number;
    amount: number;
    loanAmount: number;
    requiresPMI: boolean;
    monthlyPMI: number;
}

export function calculateDownPayment(homePrice: number): DownPaymentResult {
    const scenarios: DownPaymentScenario[] = [3.5, 5, 10, 15, 20, 25].map(percent => {
        const amount = homePrice * (percent / 100);
        const loanAmount = homePrice - amount;
        const requiresPMI = percent < 20;
        const monthlyPMI = requiresPMI ? (loanAmount * 0.007) / 12 : 0;

        return {
            percent,
            amount: Math.round(amount),
            loanAmount: Math.round(loanAmount),
            requiresPMI,
            monthlyPMI: Math.round(monthlyPMI),
        };
    });

    const defaultScenario = scenarios.find(s => s.percent === 20) || scenarios[0];

    return {
        homePrice,
        downPaymentPercent: 20,
        downPaymentAmount: defaultScenario.amount,
        loanAmount: defaultScenario.loanAmount,
        requiresPMI: defaultScenario.requiresPMI,
        estimatedPMI: defaultScenario.monthlyPMI,
        scenarios,
    };
}

// ============================================
// DTI CALCULATION
// ============================================

export interface DTIResult {
    grossMonthlyIncome: number;
    housingPayment: number;
    otherDebts: number;
    frontEndDTI: number;
    backEndDTI: number;
    frontEndStatus: 'good' | 'warning' | 'high';
    backEndStatus: 'good' | 'warning' | 'high';
    maxHousingPayment28: number;
    maxTotalDebt36: number;
    recommendation: string;
}

export function calculateDTI(
    annualIncome: number,
    housingPayment: number,
    otherMonthlyDebts: number
): DTIResult {
    const monthlyIncome = annualIncome / 12;

    const frontEndDTI = (housingPayment / monthlyIncome) * 100;
    const backEndDTI = ((housingPayment + otherMonthlyDebts) / monthlyIncome) * 100;

    const { dtiRules } = HOUSING_CONSTANTS;

    let frontEndStatus: 'good' | 'warning' | 'high' = 'good';
    if (frontEndDTI > dtiRules.conventional.frontEnd) frontEndStatus = 'warning';
    if (frontEndDTI > 33) frontEndStatus = 'high';

    let backEndStatus: 'good' | 'warning' | 'high' = 'good';
    if (backEndDTI > dtiRules.conventional.backEnd) backEndStatus = 'warning';
    if (backEndDTI > 43) backEndStatus = 'high';

    const maxHousingPayment28 = monthlyIncome * 0.28;
    const maxTotalDebt36 = monthlyIncome * 0.36;

    let recommendation = 'You have a healthy DTI ratio. You should qualify for most mortgage programs.';
    if (backEndDTI > 43) {
        recommendation = 'Your DTI is high. Consider paying down debts before applying for a mortgage.';
    } else if (backEndDTI > 36) {
        recommendation = 'Your DTI is moderate. You may need a larger down payment or FHA loan.';
    }

    return {
        grossMonthlyIncome: Math.round(monthlyIncome),
        housingPayment,
        otherDebts: otherMonthlyDebts,
        frontEndDTI: Math.round(frontEndDTI * 10) / 10,
        backEndDTI: Math.round(backEndDTI * 10) / 10,
        frontEndStatus,
        backEndStatus,
        maxHousingPayment28: Math.round(maxHousingPayment28),
        maxTotalDebt36: Math.round(maxTotalDebt36),
        recommendation,
    };
}

// ============================================
// MONTHLY PAYMENT CALCULATION (PITI)
// ============================================

export interface MonthlyPaymentResult {
    homePrice: number;
    loanAmount: number;
    monthlyPI: number;
    monthlyTax: number;
    monthlyInsurance: number;
    monthlyPMI: number;
    monthlyHOA: number;
    totalMonthly: number;
    totalInterest: number;
    totalCost: number;
}

export function calculateMonthlyPayment(
    homePrice: number,
    downPaymentPercent: number,
    interestRate: number,
    loanTermYears: number,
    propertyTaxRate: number,
    homeInsuranceRate: number,
    hoaFees: number = 0
): MonthlyPaymentResult {
    const downPayment = homePrice * (downPaymentPercent / 100);
    const loanAmount = homePrice - downPayment;

    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTermYears * 12;

    const monthlyPI = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
        (Math.pow(1 + monthlyRate, numPayments) - 1);

    const monthlyTax = (homePrice * propertyTaxRate / 100) / 12;
    const monthlyInsurance = (homePrice * homeInsuranceRate / 100) / 12;
    const monthlyPMI = downPaymentPercent < 20 ? (loanAmount * 0.007) / 12 : 0;

    const totalMonthly = monthlyPI + monthlyTax + monthlyInsurance + monthlyPMI + hoaFees;
    const totalInterest = (monthlyPI * numPayments) - loanAmount;
    const totalCost = homePrice + totalInterest + (monthlyTax + monthlyInsurance + monthlyPMI + hoaFees) * numPayments;

    return {
        homePrice,
        loanAmount: Math.round(loanAmount),
        monthlyPI: Math.round(monthlyPI),
        monthlyTax: Math.round(monthlyTax),
        monthlyInsurance: Math.round(monthlyInsurance),
        monthlyPMI: Math.round(monthlyPMI),
        monthlyHOA: hoaFees,
        totalMonthly: Math.round(totalMonthly),
        totalInterest: Math.round(totalInterest),
        totalCost: Math.round(totalCost),
    };
}

// ============================================
// CLOSING COSTS CALCULATION
// ============================================

export interface ClosingCostsResult {
    homePrice: number;
    loanAmount: number;
    totalClosingCosts: number;
    loanOriginationFee: number;
    appraisalFee: number;
    creditReportFee: number;
    titleInsurance: number;
    escrowFees: number;
    recordingFees: number;
    prepaidInsurance: number;
    prepaidTaxes: number;
    otherFees: number;
    cashNeededAtClosing: number;
}

export function calculateClosingCosts(
    homePrice: number,
    downPaymentPercent: number
): ClosingCostsResult {
    const downPayment = homePrice * (downPaymentPercent / 100);
    const loanAmount = homePrice - downPayment;

    // Individual closing cost estimates
    const loanOriginationFee = loanAmount * 0.01; // 1% of loan
    const appraisalFee = 500;
    const creditReportFee = 50;
    const titleInsurance = homePrice * 0.005; // 0.5% of home price
    const escrowFees = 1500;
    const recordingFees = 200;
    const prepaidInsurance = (homePrice * 0.0035); // 1 year homeowner's insurance
    const prepaidTaxes = (homePrice * 0.011) / 2; // 6 months property tax
    const otherFees = 500; // Misc fees

    const totalClosingCosts = loanOriginationFee + appraisalFee + creditReportFee +
        titleInsurance + escrowFees + recordingFees +
        prepaidInsurance + prepaidTaxes + otherFees;

    const cashNeededAtClosing = downPayment + totalClosingCosts;

    return {
        homePrice,
        loanAmount: Math.round(loanAmount),
        totalClosingCosts: Math.round(totalClosingCosts),
        loanOriginationFee: Math.round(loanOriginationFee),
        appraisalFee,
        creditReportFee,
        titleInsurance: Math.round(titleInsurance),
        escrowFees,
        recordingFees,
        prepaidInsurance: Math.round(prepaidInsurance),
        prepaidTaxes: Math.round(prepaidTaxes),
        otherFees,
        cashNeededAtClosing: Math.round(cashNeededAtClosing),
    };
}

// ============================================
// RENT VS BUY CALCULATION
// ============================================

export interface RentVsBuyResult {
    monthlyRent: number;
    monthlyMortgageTotal: number;
    yearlyRentCost: number;
    yearlyBuyCost: number;
    fiveYearRentCost: number;
    fiveYearBuyCost: number;
    fiveYearEquity: number;
    breakEvenYears: number;
    recommendation: 'rent' | 'buy' | 'neutral';
    monthlySavingsIfBuying: number;
}

export function calculateRentVsBuy(
    homePrice: number,
    monthlyRent: number,
    downPaymentPercent: number,
    interestRate: number,
    propertyTaxRate: number,
    homeInsuranceRate: number,
    annualAppreciation: number = 3,
    annualRentIncrease: number = 3
): RentVsBuyResult {
    const paymentResult = calculateMonthlyPayment(
        homePrice, downPaymentPercent, interestRate, 30, propertyTaxRate, homeInsuranceRate
    );

    const monthlyMortgageTotal = paymentResult.totalMonthly;

    // 5-year analysis
    let totalRentCost = 0;
    let currentRent = monthlyRent;

    for (let year = 1; year <= 5; year++) {
        totalRentCost += currentRent * 12;
        currentRent *= (1 + annualRentIncrease / 100);
    }

    const yearlyBuyCost = monthlyMortgageTotal * 12;
    const fiveYearBuyCost = yearlyBuyCost * 5;

    // Estimate equity after 5 years (rough: appreciation + principal paydown)
    const appreciatedValue = homePrice * Math.pow(1 + annualAppreciation / 100, 5);
    const loanAmount = homePrice * (1 - downPaymentPercent / 100);
    const principalPaidDown = loanAmount * 0.08; // Rough estimate ~8% of loan in 5 years
    const fiveYearEquity = (appreciatedValue - homePrice) + principalPaidDown + (homePrice * downPaymentPercent / 100);

    // Break-even calculation
    const monthlyDifference = monthlyMortgageTotal - monthlyRent;
    const breakEvenYears = monthlyDifference > 0 ?
        Math.round((monthlyDifference * 12 * 5 + fiveYearEquity) / (fiveYearEquity / 5) * 10) / 10 : 0;

    let recommendation: 'rent' | 'buy' | 'neutral' = 'neutral';
    if (fiveYearBuyCost - fiveYearEquity < totalRentCost * 0.9) {
        recommendation = 'buy';
    } else if (fiveYearBuyCost - fiveYearEquity > totalRentCost * 1.1) {
        recommendation = 'rent';
    }

    return {
        monthlyRent,
        monthlyMortgageTotal,
        yearlyRentCost: Math.round(monthlyRent * 12),
        yearlyBuyCost: Math.round(yearlyBuyCost),
        fiveYearRentCost: Math.round(totalRentCost),
        fiveYearBuyCost: Math.round(fiveYearBuyCost),
        fiveYearEquity: Math.round(fiveYearEquity),
        breakEvenYears: breakEvenYears > 0 ? breakEvenYears : 3,
        recommendation,
        monthlySavingsIfBuying: Math.round(monthlyRent - monthlyMortgageTotal),
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

export function formatPercent(value: number): string {
    return `${value.toFixed(1)}%`;
}

export function parseFormattedNumber(value: string): number {
    return parseInt(value.replace(/[^0-9]/g, '')) || 0;
}
