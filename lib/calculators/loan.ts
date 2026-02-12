/**
 * Loan Calculator Core Engine (S-Class Standard)
 * Precision 2026 Financial Audit Engine
 */

export const SITE = {
    name: "Loan Calculator"
};

export interface AmortizationPeriod {
    period: number;
    payment: number;
    principal: number;
    interest: number;
    remainingBalance: number;
    totalInterestToDate: number;
}

export interface LoanResult {
    monthlyPayment: number;
    totalPayment: number;
    totalInterest: number;
    loanToValue?: number;
    payoffDate: string;
    amortization: AmortizationPeriod[];
}

export const LOAN_2026 = {
    faqs: [
        {
            question: "How is the monthly loan payment calculated?",
            answer: "The monthly payment is calculated using the standard amortization formula: P [ i(1 + i)^n ] / [ (1 + i)^n – 1 ], where P is the principal loan amount, i is the monthly interest rate (annual rate divided by 12), and n is the total number of months in the loan term. This ensures that the principal is fully paid off by the end of the term through equal monthly installments."
        },
        {
            question: "What is an amortization schedule?",
            answer: "An amortization schedule is a complete table of periodic loan payments, showing the amount of principal and the amount of interest that comprise each payment until the loan is paid off at the end of its term. In early periods, a higher percentage of the payment goes toward interest; as the balance decreases, a higher percentage goes toward the principal."
        },
        {
            question: "Does this calculator account for compound interest?",
            answer: "Yes, our algorithm uses 2026 financial standards to account for monthly compounding, which is the industry standard for most consumer loans, including personal loans, auto loans, and mortgages in the United States and global markets."
        },
        {
            question: "How does my credit score affect the loan's interest rate?",
            answer: "Credit scores are the primary determinant of risk for lenders. Borrowers with 'Excellent' scores (720+) typically qualify for the lowest institutional rates, while those with 'Fair' or 'Poor' scores (under 630) may face significantly higher APRs or additional collateral requirements."
        },
        {
            question: "What is APR and how does it differ from interest rate?",
            answer: "Annual Percentage Rate (APR) reflects the true cost of borrowing by including both the interest rate and any additional fees (such as origination fees or points). While the interest rate determines your monthly payment, the APR provides a more comprehensive view of the loan's total expense."
        },
        {
            question: "Can I save money by making extra payments?",
            answer: "Indisputably. Making extra payments toward the principal reduces the outstanding balance faster, which in turn reduces the amount of interest calculated in subsequent periods. This can effectively 'shorten' the loan term and save thousands in total interest costs."
        },
        {
            question: "What is a fixed-rate vs. variable-rate loan?",
            answer: "A fixed-rate loan maintains the same interest rate throughout the entire term, providing payment stability. A variable-rate (or floating-rate) loan can fluctuate based on market benchmarks like the SOFR or Prime Rate, which puede result in lower initial rates but carries the risk of future payment increases."
        },
        {
            question: "What are common loan terms for consumer lending?",
            answer: "Common terms include 3, 5, or 7 years for personal and auto loans, and 15, 20, or 30 years for residential mortgages. Shorter terms typically feature lower interest rates but higher monthly payments, while longer terms decrease the monthly burden but increase total interest paid."
        },
        {
            question: "What happens if I miss a loan payment?",
            answer: "Missing a payment typically results in late fees and a negative report to credit bureaus if the delinquency exceeds 30 days. This can significantly damage your credit score and increase the cost of future borrowing. We recommend setting up autopay to mitigate this risk."
        },
        {
            question: "Is there a penalty for paying off a loan early?",
            answer: "Some loans include 'prepayment penalties' designed to compensate lenders for lost interest. However, most modern consumer loans are 'simple interest' loans with no prepayment penalties. Always check the Truth in Lending Disclosure (TILA) of your specific loan agreement."
        },
        {
            question: "What is a secured vs. unsecured loan?",
            answer: "A secured loan is backed by collateral (like a car or home) that the lender can seize if you default. An unsecured loan (like a credit card or personal loan) is backed only by your creditworthiness and usually carries a higher interest rate due to the increased risk to the lender."
        },
        {
            question: "How does the debt-to-income (DTI) ratio impact loan approval?",
            answer: "Lenders use the DTI ratio to measure your ability to manage monthly payments. Most lenders prefer a total DTI (including the new loan) of 36% to 43% or lower. A high DTI suggests you may be over-leveraged, making you a higher risk for default."
        },
        {
            question: "What is an origination fee?",
            answer: "An origination fee is an upfront charge by a lender to process a new loan application. It is typically expressed as a percentage of the total loan amount (1% to 8%) and is either deducted from the loan proceeds or added to the balance."
        },
        {
            question: "Can I refinance my loan later?",
            answer: "Yes, if market interest rates drop or your credit score improves significantly, you can take out a new loan to pay off the old one. This process, known as refinancing, can reduce your monthly payments or the total interest paid over the life of the debt."
        },
        {
            question: "What is the 2026 outlook for interest rates?",
            answer: "Market analysts and institutional forecasts for 2026 suggest a stabilization phase following historical volatility. While rates are highly dependent on central bank policies (Federal Reserve), maintaining a high credit score remains the most effective way to secure competitive terms regardless of the macro environment."
        }
    ],
    citations: [
        {
            name: "Consumer Financial Protection Bureau (CFPB) - Loan Basics",
            url: "https://www.consumerfinance.gov/consumer-tools/loans/"
        },
        {
            name: "Federal Reserve Board - Consumer Credit Disclosure",
            url: "https://www.federalreserve.gov/consumerscommunities/shop_index.htm"
        },
        {
            name: "Internal Revenue Service (IRS) - Interest Deductions",
            url: "https://www.irs.gov/publications/p936"
        },
        {
            name: "World Bank - Financial Literacy & Debt Management",
            url: "https://www.worldbank.org/en/topic/financialmarketdevelopment"
        },
        {
            name: "ISO 20022 Financial Services Standards",
            url: "https://www.iso20022.org/"
        }
    ]
};

export function calculateLoan(
    amount: number,
    rate: number,
    years: number,
    startMonth: number = new Date().getMonth(),
    startYear: number = new Date().getFullYear()
): LoanResult {
    const monthlyRate = rate / 100 / 12;
    const numberOfPayments = years * 12;

    // Monthly Payment Formula: P [ i(1 + i)^n ] / [ (1 + i)^n – 1 ]
    let monthlyPayment = 0;
    if (monthlyRate === 0) {
        monthlyPayment = amount / numberOfPayments;
    } else {
        monthlyPayment = (amount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    }

    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - amount;

    const amortization: AmortizationPeriod[] = [];
    let remainingBalance = amount;
    let totalInterestToDate = 0;

    for (let i = 1; i <= numberOfPayments; i++) {
        const interest = remainingBalance * monthlyRate;
        const principal = monthlyPayment - interest;
        remainingBalance -= principal;
        totalInterestToDate += interest;

        amortization.push({
            period: i,
            payment: monthlyPayment,
            principal,
            interest,
            remainingBalance: Math.max(0, remainingBalance),
            totalInterestToDate
        });
    }

    // Calculate payoff date
    const payoffDateObj = new Date(startYear, startMonth + numberOfPayments, 1);
    const payoffDate = payoffDateObj.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

    return {
        monthlyPayment,
        totalPayment,
        totalInterest,
        payoffDate,
        amortization
    };
}
