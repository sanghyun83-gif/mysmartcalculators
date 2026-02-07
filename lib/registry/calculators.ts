/**
 * CALCULATOR REGISTRY V5.0
 * Automatically synchronized via scripts/sync-registry.mjs
 */

export interface CalculatorConfig {
    id: string;
    name: string;
    description: string;
    category: 'health' | 'finance' | 'legal' | 'tax' | 'general';
    tier: 1 | 2 | 3;
    color: string;
    icon: string;
}

export const CALCULATOR_REGISTRY: Record<string, CalculatorConfig> = {
    "529": {
        "id": "529",
        "name": "529 Plan Calculator",
        "description": "Calculate 529 plan growth for college savings. Free 2026 calculator with state tax benefits and contribution limits.",
        "category": "tax",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "1099-tax": {
        "id": "1099-tax",
        "name": "2026 1099 Tax Calculator | Self-Employment Estimator",
        "description": "Calculate 1099 taxes, self-employment tax, and quarterly estimates. Based on 2026 IRS guidelines for contractors and freelancers with official tax bracket integration.",
        "category": "tax",
        "tier": 1,
        "color": "slate-500",
        "icon": "calculator"
    },
    "18-wheeler": {
        "id": "18-wheeler",
        "name": "2026 18-Wheeler Accident Settlement Calculator",
        "description": "Calculate semi-truck and 18-wheeler accident settlement values instantly. Free 2026 calculator with FMCSA safety violation data, commercial insurance caps, and average payout estimator.",
        "category": "legal",
        "tier": 1,
        "color": "rose-500",
        "icon": "gavel"
    },
    "3m-earplug": {
        "id": "3m-earplug",
        "name": "2026 3M Earplug Settlement Calculator | Payout Negotiator",
        "description": "Calculate your 2026 3M earplug lawsuit settlement value instantly. Free Combat Arms negotiator with official MDL 2885 litigation data, VA audiology benchmarks, and tiered payout records.",
        "category": "legal",
        "tier": 1,
        "color": "rose-500",
        "icon": "ear"
    },
    "401k-growth": {
        "id": "401k-growth",
        "name": "401k growth",
        "description": "Precision 401k growth analyzer for the 2026 market.",
        "category": "tax",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "abilify": {
        "id": "abilify",
        "name": "Abilify Lawsuit Calculator",
        "description": "Calculate Abilify lawsuit settlements. Compulsive gambling, shopping addiction, hypersexual behavior claims. Based on 2026 litigation data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "accutane": {
        "id": "accutane",
        "name": "Accutane Side Effects Calculator",
        "description": "Calculate Accutane side effects lawsuit settlements. IBD, Crohn",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "afff": {
        "id": "afff",
        "name": "2026 AFFF Lawsuit Settlement Calculator | Firefighter Foam Payouts",
        "description": "Calculate your 2026 AFFF lawsuit settlement value instantly. Free PFAS firefighter foam negotiator with official MDL 2873 (District of South Carolina) litigation data and EPA toxicity benchmarks.",
        "category": "legal",
        "tier": 1,
        "color": "rose-500",
        "icon": "gavel"
    },
    "airbnb-income": {
        "id": "airbnb-income",
        "name": "2026 Airbnb Income Calculator | Short-Term Rental Negotiator",
        "description": "Calculate your 2026 Airbnb earnings instantly. Free rental negotiator with official IRS Publication 527 guidelines, Section 280A (14-Day Rule) benchmarks, and occupancy rate projections.",
        "category": "tax",
        "tier": 1,
        "color": "slate-500",
        "icon": "home"
    },
    "alimony": {
        "id": "alimony",
        "name": "2026 Alimony Calculator | Official Spousal Support Estimator",
        "description": "Calculate your 2026 spousal support entitlement or obligation. Free 50-state calculator based on official state family law codes, guideline formulas, and IRS tax rules.",
        "category": "legal",
        "tier": 1,
        "color": "rose-500",
        "icon": "gavel"
    },
    "amusement-park": {
        "id": "amusement-park",
        "name": "Amusement Park Injury Calculator",
        "description": "Calculate amusement park injury lawsuit settlements. Roller coaster, water slide, ride malfunction claims. Based on 2026 CPSC data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "ankle-implant": {
        "id": "ankle-implant",
        "name": "Ankle Implant Lawsuit Calculator",
        "description": "Calculate ankle implant lawsuit settlements. Total ankle replacement failures, device loosening, revision surgery claims. Based on 2026 data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "annuity": {
        "id": "annuity",
        "name": "Annuity Calculator",
        "description": "Calculate annuity payouts and compare fixed, variable, and immediate annuities. Free 2026 annuity calculator.",
        "category": "tax",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "antique-car-insurance": {
        "id": "antique-car-insurance",
        "name": "Antique Car Insurance Calculator",
        "description": "Calculate antique car insurance costs. Specialized coverage for pre-1948 vehicles and vintage automobiles. Based on 2026 insurance data.",
        "category": "general",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "art-insurance": {
        "id": "art-insurance",
        "name": "Art Insurance Calculator",
        "description": "Calculate art insurance costs. Coverage for paintings, sculptures, and collectibles. Based on 2026 insurance data.",
        "category": "general",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "asbestos": {
        "id": "asbestos",
        "name": "Asbestos Exposure Calculator",
        "description": "Calculate asbestos exposure lawsuit settlement value instantly. Free 2026 calculator for mesothelioma, lung cancer, asbestosis, and occupational exposure claims.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "atrium-mesh": {
        "id": "atrium-mesh",
        "name": "Atrium C-Qur Mesh Calculator",
        "description": "Calculate Atrium C-Qur mesh lawsuit settlements. Omega-3 coating complications, inflammatory reactions. Based on 2026 MDL data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "atv-accident": {
        "id": "atv-accident",
        "name": "ATV Accident Calculator",
        "description": "Calculate ATV accident lawsuit settlements. Rollover, child injury, defective vehicle claims. Based on 2026 CPSC data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "atv-insurance": {
        "id": "atv-insurance",
        "name": "ATV Insurance Calculator",
        "description": "Calculate ATV insurance costs. Coverage for Polaris, Can-Am, Honda, and Yamaha ATVs. Based on 2026 insurance data.",
        "category": "health",
        "tier": 2,
        "color": "emerald-500",
        "icon": "activity"
    },
    "auto-insurance": {
        "id": "auto-insurance",
        "name": "Auto Insurance Calculator",
        "description": "Calculate your auto insurance premium for free. Compare rates by state, age, and coverage type. Get instant estimates and save money on car insurance.",
        "category": "general",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "aviation": {
        "id": "aviation",
        "name": "Aviation Accident Calculator",
        "description": "Calculate aviation accident settlement value instantly. Free 2026 calculator for plane crashes, helicopter accidents, and airline injury claims based on Warsaw/Montreal Conventions.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "baby-formula": {
        "id": "baby-formula",
        "name": "2026 NEC Baby Formula Settlement Calculator | Payout Negotiator",
        "description": "Calculate your 2026 NEC lawsuit settlement value instantly. Free baby formula negotiator with official MDL 3037 (Similac/Enfamil) litigation data and peer-reviewed pediatric medical benchmarks.",
        "category": "legal",
        "tier": 1,
        "color": "rose-500",
        "icon": "baby"
    },
    "bail-bond": {
        "id": "bail-bond",
        "name": "Bail Bond Calculator",
        "description": "Calculate your bail bond cost. Free 2026 calculator with state bail schedules, bond types, and premium rates.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "bair-hugger": {
        "id": "bair-hugger",
        "name": "Bair Hugger Lawsuit Calculator",
        "description": "Calculate Bair Hugger warming blanket lawsuit settlements. Deep joint infection after hip/knee surgery. Based on 2026 litigation data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "bar-insurance": {
        "id": "bar-insurance",
        "name": "Bar Insurance Calculator",
        "description": "Calculate bar insurance costs. Liquor liability, GL, property, and assault coverage for bars, nightclubs, and taverns. Based on 2026 NAIC data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "bard-mesh": {
        "id": "bard-mesh",
        "name": "Bard Hernia Mesh Calculator",
        "description": "Calculate Bard hernia mesh lawsuit settlements. Ventralex, Composix, 3DMax mesh complications. Based on 2026 MDL data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "bard-powerport": {
        "id": "bard-powerport",
        "name": "Bard PowerPort Lawsuit Calculator",
        "description": "Calculate Bard PowerPort lawsuit settlements. Catheter fracture, migration, blood clots. Based on 2026 litigation data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "benzene": {
        "id": "benzene",
        "name": "Benzene Leukemia Calculator",
        "description": "Calculate benzene exposure lawsuit settlement value instantly. Free 2026 calculator for leukemia, AML, MDS, and occupational benzene exposure claims.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "biomet-hip": {
        "id": "biomet-hip",
        "name": "Biomet Hip Lawsuit Calculator",
        "description": "Calculate Biomet hip lawsuit settlements. M/L Taper, Magnum head corrosion, revision surgery claims. Based on 2026 litigation data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "birth-injury": {
        "id": "birth-injury",
        "name": "2026 Birth Injury Settlement Calculator | Payout Negotiator",
        "description": "Calculate your 2026 birth injury settlement value instantly. Free medical negotiator with official NPDB malpractice data, HIE benchmarks, and HRSA settlement statistics.",
        "category": "legal",
        "tier": 1,
        "color": "rose-500",
        "icon": "baby"
    },
    "black-lung": {
        "id": "black-lung",
        "name": "Black Lung Settlement Calculator",
        "description": "Calculate your black lung disease settlement. Coal workers",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "bmi": {
        "id": "bmi",
        "name": "BMI Calculator",
        "description": "Calculate your Body Mass Index (BMI) instantly. Free 2026 calculator with health recommendations based on WHO and CDC guidelines.",
        "category": "health",
        "tier": 2,
        "color": "emerald-500",
        "icon": "activity"
    },
    "boat-insurance": {
        "id": "boat-insurance",
        "name": "Boat Insurance Calculator",
        "description": "Calculate boat insurance costs and coverage needs. Free 2026 calculator for boats, yachts, and personal watercraft.",
        "category": "general",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "boating-accident": {
        "id": "boating-accident",
        "name": "Boating Accident Calculator",
        "description": "Calculate boating accident lawsuit settlements. Drowning, propeller injuries, boat collision claims. Based on 2026 maritime data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "bone-graft": {
        "id": "bone-graft",
        "name": "Bone Graft Lawsuit Calculator",
        "description": "Calculate bone graft lawsuit settlements. Allograft contamination, BMP complications, synthetic graft failure claims. Based on 2026 litigation data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "bonus-tax": {
        "id": "bonus-tax",
        "name": "2026 Bonus Tax Calculator | Supplemental Wage Negotiator",
        "description": "Calculate your 2026 bonus tax withholding instantly. Free negotiator with official IRS Supplemental Wage flat rates (22% / 37%), aggregate method benchmarks, and Publication 15 data.",
        "category": "tax",
        "tier": 1,
        "color": "slate-500",
        "icon": "gift"
    },
    "breast-implant": {
        "id": "breast-implant",
        "name": "Breast Implant Illness Calculator",
        "description": "Calculate breast implant illness lawsuit settlements. BIA-ALCL lymphoma, textured implant complications, Allergan recall claims. Based on 2026 litigation data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "burn-injury": {
        "id": "burn-injury",
        "name": "Burn Injury Calculator",
        "description": "Calculate burn injury settlement value instantly. Free 2026 calculator with TBSA percentage, burn degree levels, and treatment costs based on ABA data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "bus-accident": {
        "id": "bus-accident",
        "name": "Bus Accident Calculator",
        "description": "Calculate bus accident lawsuit settlements. Public transit, school bus, charter bus injury claims. Based on 2026 NHTSA data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "business-insurance": {
        "id": "business-insurance",
        "name": "2026 Business Insurance Calculator | BOP Cost Estimator",
        "description": "Calculate your 2026 business owner's policy (BOP) cost instantly. Free commercial insurance estimator with official NAIC bundle data, SBA guidelines, and industry-specific risk factors.",
        "category": "legal",
        "tier": 1,
        "color": "slate-500",
        "icon": "briefcase"
    },
    "calorie": {
        "id": "calorie",
        "name": "Calorie Calculator",
        "description": "Calculate your daily calorie needs instantly. Free 2026 calculator based on USDA and CDC nutrition guidelines.",
        "category": "health",
        "tier": 2,
        "color": "emerald-500",
        "icon": "activity"
    },
    "camp-lejeune": {
        "id": "camp-lejeune",
        "name": "2026 Camp Lejeune Settlement Calculator | Payout Negotiator",
        "description": "Calculate your 2026 Camp Lejeune settlement value instantly. Free toxic water negotiator with official PACT Act (CLJA) guidelines, DOJ settlement benchmarks, and VA health data.",
        "category": "legal",
        "tier": 1,
        "color": "rose-500",
        "icon": "droplets"
    },
    "camper-insurance": {
        "id": "camper-insurance",
        "name": "Camper Insurance Calculator",
        "description": "Calculate camper insurance costs. Coverage for truck campers, pop-ups, and slide-in campers. Based on 2026 insurance data.",
        "category": "general",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "capital-gains": {
        "id": "capital-gains",
        "name": "2026 Capital Gains Tax Calculator | Investment Tax Negotiator",
        "description": "Calculate your 2026 capital gains tax instantly. Free investment negotiator with official IRS Section 121 (Real Estate) exclusions, Publication 550 benchmarks, and 2026 tax bracket integration.",
        "category": "tax",
        "tier": 1,
        "color": "slate-500",
        "icon": "trending-up"
    },
    "car-accident": {
        "id": "car-accident",
        "name": "2026 Car Accident Settlement Calculator",
        "description": "Calculate your 2026 car accident settlement value instantly. Free calculator with 50-state comparative fault rules, average payout estimates, and official NHTSA/NSC data integration.",
        "category": "legal",
        "tier": 1,
        "color": "rose-500",
        "icon": "gavel"
    },
    "casino-injury": {
        "id": "casino-injury",
        "name": "Casino Injury Calculator",
        "description": "Calculate casino injury lawsuit settlements. Slip and fall, security negligence, assault, escalator accidents. Based on 2026 hospitality data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "charitable-donation": {
        "id": "charitable-donation",
        "name": "Charitable Donation Calculator",
        "description": "Calculate your charitable donation tax deduction. AGI limits, itemizing requirements, and QCD strategies. Based on 2026 IRS guidelines.",
        "category": "tax",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "chemical-burn": {
        "id": "chemical-burn",
        "name": "Chemical Burn Calculator",
        "description": "Calculate chemical burn lawsuit settlement value instantly. Free 2026 calculator for workplace chemical burns, acid burns, and industrial exposure claims.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "child-care-subsidy": {
        "id": "child-care-subsidy",
        "name": "Child Care Subsidy Calculator",
        "description": "Calculate your eligibility for child care subsidies and estimate your copay. Based on 2026 CCDF income limits (85% of State Median Income).",
        "category": "general",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "child-support": {
        "id": "child-support",
        "name": "2026 Child Support Calculator | Official State Guidelines",
        "description": "Calculate child support payments for all 50 US states with 100% accuracy. Free 2026 calculator based on official state guidelines, income shares models, and 50-state custody rules.",
        "category": "legal",
        "tier": 1,
        "color": "rose-500",
        "icon": "gavel"
    },
    "classic-car-insurance": {
        "id": "classic-car-insurance",
        "name": "Classic Car Insurance Calculator",
        "description": "Calculate classic car insurance costs. Agreed-value coverage for antique, vintage, and muscle cars. Based on 2026 insurance data.",
        "category": "general",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "closing-cost": {
        "id": "closing-cost",
        "name": "Closing Cost Calculator",
        "description": "Calculate home closing costs instantly. Free 2026 calculator with itemized fees for buyers and sellers.",
        "category": "finance",
        "tier": 2,
        "color": "blue-500",
        "icon": "landmark"
    },
    "collectible-insurance": {
        "id": "collectible-insurance",
        "name": "Collectible Insurance Calculator",
        "description": "Calculate collectible insurance costs. Coverage for sports cards, coins, stamps, and memorabilia. Based on 2026 insurance data.",
        "category": "general",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "commercial-auto": {
        "id": "commercial-auto",
        "name": "Commercial Auto Calculator",
        "description": "Calculate commercial auto insurance premiums for fleets, trucks, and business vehicles. Based on 2026 NAIC data.",
        "category": "health",
        "tier": 2,
        "color": "emerald-500",
        "icon": "activity"
    },
    "commercial-insurance": {
        "id": "commercial-insurance",
        "name": "Commercial Insurance Calculator",
        "description": "Calculate commercial insurance premiums. General liability, workers comp, commercial auto, professional liability. Based on 2026 NAIC business insurance data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "commercial-vehicle": {
        "id": "commercial-vehicle",
        "name": "Commercial Vehicle Accident Calculator",
        "description": "Calculate commercial vehicle accident settlement value instantly. Free 2026 calculator for delivery truck, box truck, bus, and fleet vehicle accident claims.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "commission": {
        "id": "commission",
        "name": "Commission Calculator",
        "description": "Calculate sales commissions, tiered rates, and earnings projections. Based on standard commission structures.",
        "category": "tax",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "concert-injury": {
        "id": "concert-injury",
        "name": "Concert Injury Calculator",
        "description": "Calculate concert injury lawsuit settlements. Crowd crush, security failures, stage collapse. Based on 2026 live event safety data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "condo-insurance": {
        "id": "condo-insurance",
        "name": "Condo Insurance Calculator",
        "description": "Calculate condo insurance (HO-6) costs. Interior coverage for walls-in protection, personal property, and liability. Based on 2026 insurance data.",
        "category": "general",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "construction-accident": {
        "id": "construction-accident",
        "name": "2026 Construction Accident Settlement Calculator | Injury Payout",
        "description": "Calculate your 2026 construction injury settlement value instantly. Free OSHA violation negotiator with official Fatal Four data, Bureau of Labor Statistics (BLS) injury rates, and workers' comp integration.",
        "category": "legal",
        "tier": 1,
        "color": "rose-500",
        "icon": "hard-hat"
    },
    "contractor-insurance": {
        "id": "contractor-insurance",
        "name": "Contractor Insurance Calculator",
        "description": "Calculate contractor insurance costs for general contractors, subcontractors, and specialty trades. GL, workers comp, and builder",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "cpap": {
        "id": "cpap",
        "name": "CPAP Recall Lawsuit Calculator",
        "description": "Calculate CPAP recall lawsuit settlement value instantly. Free 2026 calculator for Philips Respironics CPAP, BiPAP, and ventilator foam degradation claims.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "crane": {
        "id": "crane",
        "name": "Crane Injury Calculator",
        "description": "Calculate crane injury lawsuit settlement value instantly. Free 2026 calculator for crane collapse, struck-by, and construction accident claims. OSHA violation multipliers.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "crossfit-injury": {
        "id": "crossfit-injury",
        "name": "CrossFit Injury Calculator",
        "description": "Calculate CrossFit injury lawsuit settlements. Rhabdomyolysis, coach negligence, overexertion injuries. Based on 2026 fitness injury data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "crowd-crush": {
        "id": "crowd-crush",
        "name": "Crowd Crush Calculator",
        "description": "Calculate crowd crush injury lawsuit settlements. Stadium stampedes, festival surges, nightclub crush. Based on 2026 mass casualty research.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "cruise-insurance": {
        "id": "cruise-insurance",
        "name": "Cruise Insurance Calculator",
        "description": "Calculate cruise insurance costs. Coverage for cruise cancellation, medical emergencies at sea, and trip interruption. Based on 2026 insurance data.",
        "category": "health",
        "tier": 2,
        "color": "emerald-500",
        "icon": "activity"
    },
    "crypto-tax": {
        "id": "crypto-tax",
        "name": "2026 Crypto Tax Calculator | Crypto Payout Negotiator",
        "description": "Calculate your 2026 cryptocurrency taxes instantly. Free crypto negotiator with official IRS Form 8949 reporting data, wash-sale rule benchmarks, and FIFO/HIFO cost basis integration.",
        "category": "tax",
        "tier": 1,
        "color": "slate-500",
        "icon": "coins"
    },
    "cyber-insurance": {
        "id": "cyber-insurance",
        "name": "Cyber Insurance Calculator",
        "description": "Calculate cyber insurance premiums. Data breach, ransomware, phishing, and network security coverage. Based on 2026 market data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "daycare-injury": {
        "id": "daycare-injury",
        "name": "Daycare Injury Calculator",
        "description": "Calculate daycare injury lawsuit settlements. Child abuse, negligent supervision, licensing violations. Based on 2026 childcare safety data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "daycare-insurance": {
        "id": "daycare-insurance",
        "name": "Daycare Insurance Calculator",
        "description": "Calculate daycare insurance costs. GL, professional liability, abuse/molestation coverage for child care centers and preschools. Based on 2026 insurance data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "delivery-insurance": {
        "id": "delivery-insurance",
        "name": "Delivery Driver Insurance Calculator",
        "description": "Calculate delivery driver insurance costs for DoorDash, UberEats, Instacart, and Amazon Flex. Gap coverage and commercial endorsements. Based on 2026 insurance data.",
        "category": "tax",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "dental-insurance": {
        "id": "dental-insurance",
        "name": "Dental Insurance Calculator",
        "description": "Calculate dental insurance costs. Coverage for cleanings, fillings, crowns, and orthodontics. Based on 2026 insurance data.",
        "category": "health",
        "tier": 2,
        "color": "emerald-500",
        "icon": "activity"
    },
    "depo-provera": {
        "id": "depo-provera",
        "name": "2026 Depo-Provera Settlement Calculator | Brain Tumor Payout",
        "description": "Calculate your 2026 Depo-Provera lawsuit settlement value instantly. Free meningioma negotiator with official French ANSM study data, Pfizer label warnings, and brain tumor risk statistics.",
        "category": "legal",
        "tier": 1,
        "color": "rose-500",
        "icon": "brain"
    },
    "depuy-hip": {
        "id": "depuy-hip",
        "name": "2026 DePuy Hip Lawsuit Settlement Calculator | Payout Estimator",
        "description": "Calculate your 2026 DePuy hip lawsuit settlement value instantly. Free ASR and Pinnacle negotiator with official MDL 2197 and MDL 2244 litigation data and FDA metallosis benchmarks.",
        "category": "legal",
        "tier": 1,
        "color": "rose-500",
        "icon": "gavel"
    },
    "depuy-knee": {
        "id": "depuy-knee",
        "name": "2026 DePuy Knee Lawsuit Settlement Calculator | Attune Payouts",
        "description": "Calculate your 2026 DePuy knee lawsuit settlement value instantly. Free Attune negotiator with official FDA tibial loosening data and medical necessity multipliers.",
        "category": "legal",
        "tier": 1,
        "color": "rose-500",
        "icon": "gavel"
    },
    "dialysis": {
        "id": "dialysis",
        "name": "Dialysis Lawsuit Calculator",
        "description": "Calculate dialysis lawsuit settlements. GranuFlo deaths, dialyzer failure, negligent treatment claims. Based on 2026 litigation data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "dirt-bike-insurance": {
        "id": "dirt-bike-insurance",
        "name": "Dirt Bike Insurance Calculator",
        "description": "Calculate dirt bike insurance costs. Coverage for motocross, enduro, and trail bikes. Based on 2026 insurance data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "disability": {
        "id": "disability",
        "name": "2026 SSDI & Social Security Disability Calculator",
        "description": "Calculate your 2026 Social Security Disability (SSDI) and SSI benefits. Free calculator with 2.8% COLA increase, back pay estimation, and official SSA income limit integration.",
        "category": "tax",
        "tier": 1,
        "color": "slate-500",
        "icon": "calculator"
    },
    "divorce": {
        "id": "divorce",
        "name": "2026 Divorce Settlement Calculator | Property Division Estimator",
        "description": "Calculate alimony and marital asset division instantly. Free 2026 divorce negotiator for community property and equitable distribution states with official judicial benchmarks.",
        "category": "legal",
        "tier": 1,
        "color": "rose-500",
        "icon": "gavel"
    },
    "do-insurance": {
        "id": "do-insurance",
        "name": "D&O Insurance Calculator",
        "description": "Calculate D&O liability insurance premiums for directors, officers, and board members. Protects personal assets. Based on 2026 NAIC data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "dog-bite": {
        "id": "dog-bite",
        "name": "2026 Dog Bite Settlement Calculator | Animal Attack Payouts",
        "description": "Calculate your 2026 dog bite settlement value instantly. Free 50-state animal attack negotiator with official Insurance Information Institute (III) liability data and CDC injury benchmarks.",
        "category": "legal",
        "tier": 1,
        "color": "rose-500",
        "icon": "gavel"
    },
    "down-payment": {
        "id": "down-payment",
        "name": "Down Payment Calculator",
        "description": "Calculate how much you need for a down payment. Free 2026 calculator with PMI estimates and savings timeline.",
        "category": "finance",
        "tier": 2,
        "color": "blue-500",
        "icon": "landmark"
    },
    "drunk-driving": {
        "id": "drunk-driving",
        "name": "Drunk Driving Accident Calculator",
        "description": "Calculate drunk driving accident settlement value instantly. Free 2026 calculator with punitive damages and BAC levels based on NHTSA data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "dti": {
        "id": "dti",
        "name": "DTI Calculator",
        "description": "Calculate your debt-to-income ratio instantly. Free 2026 DTI calculator to check mortgage qualification.",
        "category": "finance",
        "tier": 2,
        "color": "blue-500",
        "icon": "landmark"
    },
    "DUI": {
        "id": "DUI",
        "name": "2026 DUI Cost Calculator | Legal Payout & Fine Estimator",
        "description": "Calculate the true cost of a 2026 DUI conviction instantly. Free legal negotiator with official NHTSA crash data, state-specific fine benchmarks, and insurance increase projections.",
        "category": "legal",
        "tier": 1,
        "color": "rose-500",
        "icon": "scale"
    },
    "e-bike": {
        "id": "e-bike",
        "name": "E-Bike Accident Calculator",
        "description": "Calculate e-bike accident lawsuit settlements. Class 1/2/3 e-bikes, battery defects, vehicle collision claims. Based on 2026 CPSC data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "e-scooter": {
        "id": "e-scooter",
        "name": "E-Scooter Accident Calculator",
        "description": "Calculate e-scooter accident lawsuit settlements. Lime, Bird, rental scooter injuries. Based on 2026 CPSC and urban data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "earthquake-insurance": {
        "id": "earthquake-insurance",
        "name": "Earthquake Insurance Calculator",
        "description": "Calculate earthquake insurance costs. Coverage for seismic damage with high deductibles, building replacement, and personal property. Based on 2026 insurance data.",
        "category": "general",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "ebt": {
        "id": "ebt",
        "name": "EBT Calculator",
        "description": "Calculate your EBT (Electronic Benefits Transfer) eligibility and monthly benefits. Includes 2026 SNAP income limits and benefit amounts.",
        "category": "general",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "electrician-insurance": {
        "id": "electrician-insurance",
        "name": "Electrician Insurance Calculator",
        "description": "Calculate electrician insurance costs. GL, workers comp, and fire liability coverage for electrical contractors. Based on 2026 NCCI data.",
        "category": "general",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "electrocution": {
        "id": "electrocution",
        "name": "Electrocution Injury Calculator",
        "description": "Calculate electrocution injury settlement value instantly. Free 2026 calculator with voltage levels, injury severity, and OSHA data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "elevator-accident": {
        "id": "elevator-accident",
        "name": "Elevator Accident Calculator",
        "description": "Calculate elevator accident lawsuit settlements. Premises liability, entrapment, door closing injuries. Based on 2026 CPSC and OSHA data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "elmiron": {
        "id": "elmiron",
        "name": "Elmiron Vision Loss Calculator",
        "description": "Calculate Elmiron vision loss lawsuit settlements. Pentosan polysulfate sodium, maculopathy, retinal damage claims. Based on 2026 MDL data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "environmental": {
        "id": "environmental",
        "name": "Environmental Lawsuit Calculator",
        "description": "Calculate environmental lawsuit settlements. Air pollution, water contamination, soil damage, community harm. Based on 2026 EPA and environmental law data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "eo-insurance": {
        "id": "eo-insurance",
        "name": "E&O Insurance Calculator",
        "description": "Calculate E&O insurance premiums for real estate agents, insurance agents, notaries, and service professionals. Based on 2026 NAIC data.",
        "category": "tax",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "epli": {
        "id": "epli",
        "name": "2026 Wrongful Termination Settlement Calculator | Payout Negotiator",
        "description": "Calculate your 2026 wrongful termination settlement value instantly. Free legal negotiator with official EEOC litigation data, average payout benchmarks, and spoliation of evidence multipliers.",
        "category": "legal",
        "tier": 1,
        "color": "rose-500",
        "icon": "user-minus"
    },
    "era": {
        "id": "era",
        "name": "Emergency Rental Assistance Calculator",
        "description": "Check if you qualify for Emergency Rental Assistance (ERA) and estimate your potential support. Based on Treasury 2026 AMI guidelines.",
        "category": "general",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "escalator-injury": {
        "id": "escalator-injury",
        "name": "Escalator Injury Calculator",
        "description": "Calculate escalator injury lawsuit settlements. Falls, entrapment, step defects, handrail injuries. Based on 2026 CPSC data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "espp": {
        "id": "espp",
        "name": "2026 ESPP Calculator | Employee Stock Payout Negotiator",
        "description": "Calculate your 2026 ESPP gains and taxes instantly. Free stock negotiator with official IRS Publication 525 guidelines, Section 423 benchmarks, and lookback provision analysis.",
        "category": "tax",
        "tier": 1,
        "color": "slate-500",
        "icon": "trending-up"
    },
    "essure": {
        "id": "essure",
        "name": "Essure Lawsuit Calculator",
        "description": "Calculate Essure birth control device lawsuit settlements. Coil migration, organ perforation, chronic pain claims. Based on 2026 litigation data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "estate-tax": {
        "id": "estate-tax",
        "name": "Estate Tax Calculator",
        "description": "Calculate federal estate tax liability. Free 2026 calculator for estate exemption and tax rates.",
        "category": "tax",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "estimated-tax": {
        "id": "estimated-tax",
        "name": "Estimated Tax Calculator",
        "description": "Calculate your estimated tax liability for the year. Includes federal, state, and self-employment taxes. Based on 2026 IRS guidelines.",
        "category": "tax",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "ethicon-mesh": {
        "id": "ethicon-mesh",
        "name": "Ethicon Hernia Mesh Calculator",
        "description": "Calculate Ethicon hernia mesh lawsuit settlements. Physiomesh recall, mesh failure, revision surgery claims. Based on 2026 MDL data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "event-insurance": {
        "id": "event-insurance",
        "name": "Event Insurance Calculator",
        "description": "Calculate event insurance costs. Coverage for parties, festivals, corporate events, and reunions. Based on 2026 insurance data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "exotic-car-insurance": {
        "id": "exotic-car-insurance",
        "name": "Exotic Car Insurance Calculator",
        "description": "Calculate exotic car insurance costs. Specialized coverage for Lamborghini, Ferrari, McLaren, and supercars. Based on 2026 insurance data.",
        "category": "general",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "explosion": {
        "id": "explosion",
        "name": "Explosion Injury Calculator",
        "description": "Calculate explosion injury lawsuit settlement value instantly. Free 2026 calculator for gas explosions, industrial blasts, and workplace explosion accidents.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "factory-injury": {
        "id": "factory-injury",
        "name": "Factory Injury Calculator",
        "description": "Calculate factory injury lawsuit settlement value instantly. Free 2026 calculator for manufacturing accidents, machine injuries, and industrial workplace claims.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "fafsa": {
        "id": "fafsa",
        "name": "FAFSA Calculator",
        "description": "Estimate your Expected Family Contribution and federal student aid eligibility. Free 2026-27 FAFSA calculator.",
        "category": "finance",
        "tier": 2,
        "color": "blue-500",
        "icon": "landmark"
    },
    "fela": {
        "id": "fela",
        "name": "2026 FELA Railroad Injury Calculator | Settlement Payout",
        "description": "Calculate your 2026 FELA settlement value instantly. Free railroad injury negotiator with official 45 U.S.C. §51 statutes, FRA safety data, and comparative negligence standards.",
        "category": "legal",
        "tier": 1,
        "color": "rose-500",
        "icon": "train"
    },
    "fentanyl-exposure": {
        "id": "fentanyl-exposure",
        "name": "Fentanyl Exposure Calculator",
        "description": "Calculate fentanyl exposure lawsuit settlements. First responder, workplace, accidental exposure claims. Based on 2026 litigation data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "firefighter-foam": {
        "id": "firefighter-foam",
        "name": "Firefighter Foam Lawsuit Calculator",
        "description": "Calculate AFFF firefighting foam lawsuit settlements. PFAS forever chemicals, firefighter cancer claims. Based on MDL 2873 data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "fleet-insurance": {
        "id": "fleet-insurance",
        "name": "Fleet Insurance Calculator",
        "description": "Calculate fleet insurance premiums for multi-vehicle businesses. Bulk discounts for 5+ vehicle fleets. Based on 2026 NAIC data.",
        "category": "general",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "flood-insurance": {
        "id": "flood-insurance",
        "name": "Flood Insurance Calculator",
        "description": "Calculate flood insurance costs. NFIP and private flood coverage by zone, elevation, and property type. Based on 2026 FEMA and insurance data.",
        "category": "general",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "fluoroquinolone": {
        "id": "fluoroquinolone",
        "name": "Fluoroquinolone Lawsuit Calculator",
        "description": "Calculate fluoroquinolone antibiotic lawsuit settlements. Tendon rupture, nerve damage, Cipro/Levaquin claims. Based on 2026 litigation data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "food-poisoning": {
        "id": "food-poisoning",
        "name": "Food Poisoning Calculator",
        "description": "Calculate food poisoning lawsuit settlements. E.coli, Salmonella, Listeria, restaurant outbreaks. Based on 2026 CDC foodborne illness data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "food-stamps": {
        "id": "food-stamps",
        "name": "Food Stamps Calculator",
        "description": "Check if you qualify for food stamps (SNAP) and estimate your monthly benefit. Based on 2026 USDA income limits and benefit amounts.",
        "category": "health",
        "tier": 2,
        "color": "emerald-500",
        "icon": "activity"
    },
    "food-truck-insurance": {
        "id": "food-truck-insurance",
        "name": "Food Truck Insurance Calculator",
        "description": "Calculate food truck insurance costs. Commercial auto, GL, property, and food contamination coverage for mobile food vendors. Based on 2026 insurance data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "forklift": {
        "id": "forklift",
        "name": "Forklift Accident Calculator",
        "description": "Calculate forklift accident settlement value instantly. Free 2026 calculator for forklift tip-overs, pedestrian strikes, and warehouse injuries.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "freelance-tax": {
        "id": "freelance-tax",
        "name": "Freelance Tax Calculator",
        "description": "Calculate freelance taxes, self-employment tax, and take-home pay. Based on 2026 IRS guidelines for freelancers and solopreneurs.",
        "category": "tax",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "fsa": {
        "id": "fsa",
        "name": "FSA Calculator",
        "description": "Calculate FSA contributions and tax savings. Based on 2026 IRS contribution limits for healthcare and dependent care FSAs.",
        "category": "tax",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "gadolinium": {
        "id": "gadolinium",
        "name": "Gadolinium Lawsuit Calculator",
        "description": "Calculate Gadolinium lawsuit settlements. Gadolinium Deposition Disease, NSF, brain retention claims. Based on 2026 litigation data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "garage-accident": {
        "id": "garage-accident",
        "name": "Garage Accident Calculator",
        "description": "Calculate garage accident lawsuit settlements. CO poisoning, door malfunctions, vehicle lifts, fires. Based on 2026 premises and workplace safety data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "gas-explosion": {
        "id": "gas-explosion",
        "name": "Gas Explosion Calculator",
        "description": "Calculate gas explosion lawsuit settlement value instantly. Free 2026 calculator for natural gas leaks, propane explosions, and pipeline accidents.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "general-liability": {
        "id": "general-liability",
        "name": "2026 General Liability Insurance Calculator | Business Quote",
        "description": "Calculate your 2026 small business insurance cost instantly. Free GL quote estimator with official NAIC commercial risk data, ISO class codes, and industry-specific premium benchmarks.",
        "category": "legal",
        "tier": 1,
        "color": "rose-500",
        "icon": "shield"
    },
    "gi-bill": {
        "id": "gi-bill",
        "name": "GI Bill Calculator",
        "description": "Calculate GI Bill benefits for veterans. Free 2026 Post-9/11, Montgomery, and Yellow Ribbon calculator.",
        "category": "finance",
        "tier": 2,
        "color": "blue-500",
        "icon": "landmark"
    },
    "gift-tax": {
        "id": "gift-tax",
        "name": "Gift Tax Calculator",
        "description": "Calculate gift tax liability and annual exclusion. Includes lifetime exemption tracking. Based on 2026 IRS guidelines.",
        "category": "tax",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "glp1-vision": {
        "id": "glp1-vision",
        "name": "2026 GLP-1 Vision Loss Settlement Calculator | Payout Negotiator",
        "description": "Calculate your 2026 Ozempic/Wegovy vision loss settlement value instantly. Free NAION negotiator with official MDL 3097 litigation data, JAMA research benchmarks, and ophthalmological clinical data.",
        "category": "legal",
        "tier": 1,
        "color": "rose-500",
        "icon": "eye"
    },
    "golf-cart": {
        "id": "golf-cart",
        "name": "Golf Cart Accident Calculator",
        "description": "Calculate golf cart accident lawsuit settlements. Rollover, ejection, resort injury claims. Based on 2026 CPSC data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "golf-cart-insurance": {
        "id": "golf-cart-insurance",
        "name": "Golf Cart Insurance Calculator",
        "description": "Calculate golf cart insurance costs. Coverage for golf courses, retirement communities, and street-legal LSVs. Based on 2026 insurance data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "grocery-store-injury": {
        "id": "grocery-store-injury",
        "name": "Grocery Store Injury Calculator",
        "description": "Calculate grocery store injury lawsuit settlements. Slip and fall, falling products, wet floors, shopping cart accidents. Based on 2026 premises liability data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "gym-injury": {
        "id": "gym-injury",
        "name": "Gym Injury Calculator",
        "description": "Calculate gym injury lawsuit settlements. Equipment defects, personal trainer negligence, waiver exceptions. Based on 2026 fitness industry data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "gym-insurance": {
        "id": "gym-insurance",
        "name": "Gym Insurance Calculator",
        "description": "Calculate gym insurance costs. GL, professional liability, and property coverage for gyms, fitness centers, and personal trainers. Based on 2026 insurance data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "hair-relaxer": {
        "id": "hair-relaxer",
        "name": "2026 Hair Relaxer Settlement Calculator | Uterine Cancer Payout",
        "description": "Calculate your 2026 hair relaxer lawsuit settlement value instantly. Free chemical straightener negotiator with official NIH Sister Study data, MDL 3060 litigation benchmarks, and uterine/ovarian cancer statistics.",
        "category": "legal",
        "tier": 1,
        "color": "rose-500",
        "icon": "sparkles"
    },
    "health-insurance": {
        "id": "health-insurance",
        "name": "Health Insurance Calculator",
        "description": "Calculate health insurance costs and compare plans. Free 2026 calculator with ACA subsidies and premium estimates.",
        "category": "health",
        "tier": 2,
        "color": "emerald-500",
        "icon": "activity"
    },
    "heloc": {
        "id": "heloc",
        "name": "HELOC Calculator",
        "description": "Calculate your home equity line of credit instantly. Free 2026 HELOC calculator with credit limit and payment estimates.",
        "category": "finance",
        "tier": 2,
        "color": "blue-500",
        "icon": "landmark"
    },
    "hernia-mesh": {
        "id": "hernia-mesh",
        "name": "2026 Bard Hernia Mesh Settlement Calculator | Payout Negotiator",
        "description": "Calculate your 2026 hernia mesh lawsuit settlement value instantly. Free Bard negotiator with official MDL 2846 litigation benchmarks, FDA MAUDE safety data, and revision surgery analysis.",
        "category": "legal",
        "tier": 1,
        "color": "rose-500",
        "icon": "activity"
    },
    "hip-implant": {
        "id": "hip-implant",
        "name": "Hip Implant Lawsuit Calculator",
        "description": "Calculate hip implant lawsuit settlement value instantly. Free 2026 calculator for metal-on-metal hip replacement failures, recalls, and revision surgery claims.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "hit-and-run": {
        "id": "hit-and-run",
        "name": "Hit and Run Calculator",
        "description": "Calculate hit and run accident settlement value instantly. Free 2026 calculator with uninsured motorist coverage and victim compensation funds.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "home-afford": {
        "id": "home-afford",
        "name": "Home Affordability Calculator",
        "description": "Calculate how much house you can afford based on your income. See down payment, DTI ratio, monthly payments, and closing costs with 2026 loan limits.",
        "category": "tax",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "hotel-injury": {
        "id": "hotel-injury",
        "name": "Hotel Injury Calculator",
        "description": "Calculate hotel injury lawsuit settlements. Slip and fall, bed bugs, pool accidents, security negligence. Based on 2026 hospitality industry data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "hsa": {
        "id": "hsa",
        "name": "HSA Calculator",
        "description": "Calculate HSA contributions, tax savings, and growth projections. Based on 2026 IRS contribution limits.",
        "category": "tax",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "hud-housing": {
        "id": "hud-housing",
        "name": "HUD Housing Calculator",
        "description": "Calculate your eligibility for HUD public housing programs. Includes 2026 income limits and rent calculation based on the 80% Area Median Income standard.",
        "category": "health",
        "tier": 2,
        "color": "emerald-500",
        "icon": "activity"
    },
    "hurricane-insurance": {
        "id": "hurricane-insurance",
        "name": "Hurricane Insurance Calculator",
        "description": "Calculate hurricane insurance costs. Windstorm coverage, coastal deductibles, and storm damage protection for Florida and Gulf Coast homes. Based on 2026 insurance data.",
        "category": "general",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "hvac-insurance": {
        "id": "hvac-insurance",
        "name": "HVAC Insurance Calculator",
        "description": "Calculate HVAC contractor insurance costs. GL, workers comp, and EPA refrigerant coverage for heating and cooling contractors. Based on 2026 NCCI data.",
        "category": "general",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "inheritance": {
        "id": "inheritance",
        "name": "Inheritance Calculator",
        "description": "Calculate inheritance tax on inherited assets. Federal estate tax exemption and state inheritance tax rates. Based on 2026 IRS guidelines.",
        "category": "tax",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "invokana": {
        "id": "invokana",
        "name": "Invokana Lawsuit Calculator",
        "description": "Calculate Invokana lawsuit settlements. Leg amputation, toe amputation, diabetic ketoacidosis claims. Based on 2026 litigation data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "ivc-filter": {
        "id": "ivc-filter",
        "name": "IVC Filter Lawsuit Calculator",
        "description": "Calculate IVC filter lawsuit settlements. Filter fracture, migration, organ perforation claims. Based on 2026 settlement data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "jet-ski": {
        "id": "jet-ski",
        "name": "Jet Ski Accident Calculator",
        "description": "Calculate jet ski accident lawsuit settlements. PWC collision, drowning, rental injury claims. Based on 2026 maritime data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "jewelry-insurance": {
        "id": "jewelry-insurance",
        "name": "Jewelry Insurance Calculator",
        "description": "Calculate jewelry insurance costs. Floater coverage for engagement rings, watches, and valuables. Based on 2026 insurance data.",
        "category": "general",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "knee-implant": {
        "id": "knee-implant",
        "name": "Knee Replacement Lawsuit Calculator",
        "description": "Calculate knee replacement lawsuit settlement value instantly. Free 2026 calculator for defective knee implant claims, revision surgeries, and metal poisoning.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "landscaping-insurance": {
        "id": "landscaping-insurance",
        "name": "Landscaping Insurance Calculator",
        "description": "Calculate landscaping insurance costs. GL, workers comp, and equipment coverage for lawn care and landscaping contractors. Based on 2026 NCCI data.",
        "category": "general",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "lead-poisoning": {
        "id": "lead-poisoning",
        "name": "Lead Poisoning Settlement Calculator",
        "description": "Calculate lead poisoning settlement. Lead paint, contaminated water, occupational exposure claims. Based on 2026 CDC and EPA data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "lemon-law": {
        "id": "lemon-law",
        "name": "Lemon Law Calculator",
        "description": "Calculate your lemon law claim value. Free 2026 calculator for defective cars - buyback, replacement, and cash refund estimates.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "life-insurance": {
        "id": "life-insurance",
        "name": "2026 Life Insurance Calculator | Coverage & Premium Estimator",
        "description": "Calculate your 2026 life insurance needs instantly. Free coverage negotiator with official NAIC premium benchmarks, ACLI mortality data, and family obligation analysis.",
        "category": "finance",
        "tier": 1,
        "color": "blue-500",
        "icon": "landmark"
    },
    "liheap": {
        "id": "liheap",
        "name": "LIHEAP Calculator",
        "description": "Check eligibility for LIHEAP (Low Income Home Energy Assistance Program). Includes 2026 income limits and estimated benefit amounts for heating and cooling assistance.",
        "category": "general",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "llc-tax": {
        "id": "llc-tax",
        "name": "LLC Tax Calculator",
        "description": "Calculate LLC taxes, self-employment tax, and pass-through income. Based on 2026 IRS guidelines for single-member and multi-member LLCs.",
        "category": "tax",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "loan-payoff": {
        "id": "loan-payoff",
        "name": "Loan Payoff Calculator",
        "description": "Calculate how fast you can pay off your loan. Free 2026 calculator with extra payment strategies and payoff timeline.",
        "category": "finance",
        "tier": 2,
        "color": "blue-500",
        "icon": "landmark"
    },
    "ltd": {
        "id": "ltd",
        "name": "Long Term Disability Calculator",
        "description": "Calculate your long term disability benefits. Free 2026 calculator for LTD insurance payouts and coverage.",
        "category": "general",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "lung-disease": {
        "id": "lung-disease",
        "name": "Lung Disease Settlement Calculator",
        "description": "Calculate your occupational lung disease settlement. Silicosis, asbestosis, black lung, COPD, and toxic exposure claims. Based on 2026 OSHA and CDC data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "lupron": {
        "id": "lupron",
        "name": "Lupron Side Effects Calculator",
        "description": "Calculate Lupron side effects lawsuit settlements. Bone loss, hot flashes, hormonal damage claims. Based on 2026 litigation data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "malpractice": {
        "id": "malpractice",
        "name": "2026 Medical Malpractice Settlement Calculator | Negligence Payouts",
        "description": "Calculate your 2026 medical malpractice settlement value. Free negotiator-grade estimator for surgical errors, misdiagnosis, and birth injuries with official NPDB & physician board data.",
        "category": "legal",
        "tier": 1,
        "color": "rose-500",
        "icon": "gavel"
    },
    "manufactured-home-insurance": {
        "id": "manufactured-home-insurance",
        "name": "Manufactured Home Insurance Calculator",
        "description": "Calculate manufactured home insurance costs. Coverage for HUD-code homes, modular homes, and factory-built housing. Based on 2026 insurance data.",
        "category": "general",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "medicaid": {
        "id": "medicaid",
        "name": "Medicaid Eligibility Calculator",
        "description": "Check if you qualify for Medicaid based on income and household size. Includes 2026 Federal Poverty Level guidelines for all states.",
        "category": "health",
        "tier": 2,
        "color": "emerald-500",
        "icon": "activity"
    },
    "medicare-part-b": {
        "id": "medicare-part-b",
        "name": "Medicare Part B Calculator",
        "description": "Calculate your Medicare Part B out-of-pocket costs. Includes deductible, coinsurance, and annual cost estimates. Based on 2026 CMS guidelines.",
        "category": "health",
        "tier": 2,
        "color": "emerald-500",
        "icon": "activity"
    },
    "medicare-part-d": {
        "id": "medicare-part-d",
        "name": "Medicare Part D Calculator",
        "description": "Calculate your Medicare Part D prescription drug costs. Includes coverage phases, donut hole, and catastrophic coverage. Based on 2026 CMS guidelines.",
        "category": "health",
        "tier": 2,
        "color": "emerald-500",
        "icon": "activity"
    },
    "medicare-premium": {
        "id": "medicare-premium",
        "name": "Medicare Premium Calculator",
        "description": "Calculate your Medicare Part B premium including IRMAA surcharges. Based on 2026 CMS guidelines for income-related adjustments.",
        "category": "tax",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "mesothelioma": {
        "id": "mesothelioma",
        "name": "2026 Mesothelioma Settlement Calculator | Payout Negotiator",
        "description": "Calculate your 2026 mesothelioma settlement value instantly. Free asbestos negotiator with official Bankruptcy Trust Fund data, VA benefit benchmarks, and litigation payout records.",
        "category": "legal",
        "tier": 1,
        "color": "rose-500",
        "icon": "gavel"
    },
    "metal-hip": {
        "id": "metal-hip",
        "name": "Metal-on-Metal Hip Lawsuit Calculator",
        "description": "Calculate metal-on-metal hip lawsuit settlements. Cobalt poisoning, metallosis, revision surgery claims. Based on 2026 litigation data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "mining-injury": {
        "id": "mining-injury",
        "name": "Mining Injury Calculator",
        "description": "Calculate mining injury lawsuit settlement value instantly. Free 2026 calculator for coal mine accidents, cave-ins, explosions, and black lung claims.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "mirena": {
        "id": "mirena",
        "name": "Mirena IUD Lawsuit Calculator",
        "description": "Calculate Mirena IUD lawsuit settlements. Device migration, uterine perforation, Pseudotumor Cerebri claims. Based on 2026 litigation data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "mobile-home-insurance": {
        "id": "mobile-home-insurance",
        "name": "Mobile Home Insurance Calculator",
        "description": "Calculate mobile home insurance costs. HO-7 coverage for manufactured homes, modular homes, and trailers. Based on 2026 insurance data.",
        "category": "general",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "mortgage": {
        "id": "mortgage",
        "name": "2026 Mortgage Calculator | Payment & Rate Estimator",
        "description": "Calculate your 2026 mortgage payment instantly. Free home loan negotiator with official Freddie Mac (PMMS) rate data, FHFA property tax benchmarks, and PMI estimation.",
        "category": "finance",
        "tier": 1,
        "color": "blue-500",
        "icon": "landmark"
    },
    "motorcycle-accident": {
        "id": "motorcycle-accident",
        "name": "Motorcycle Accident Calculator",
        "description": "Calculate your motorcycle accident settlement value. Free 2026 calculator for bike crash injuries, road rash, helmet damage, and pain & suffering.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "nec-formula": {
        "id": "nec-formula",
        "name": "NEC Formula Lawsuit Calculator",
        "description": "Calculate NEC formula lawsuit settlements. Similac, Enfamil, premature infant necrotizing enterocolitis claims. Based on 2026 MDL data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "nexium": {
        "id": "nexium",
        "name": "Nexium Kidney Lawsuit Calculator",
        "description": "Calculate Nexium kidney damage lawsuit settlements. PPI chronic kidney disease claims. Based on 2026 litigation data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "nexplanon": {
        "id": "nexplanon",
        "name": "Nexplanon Lawsuit Calculator",
        "description": "Calculate Nexplanon lawsuit settlements. Implant migration to lungs, difficult removal, nerve damage claims. Based on 2026 litigation data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "nonprofit-insurance": {
        "id": "nonprofit-insurance",
        "name": "Non-Profit Insurance Calculator",
        "description": "Calculate nonprofit insurance costs. D&O liability, GL, volunteer coverage for charities, foundations, and 501(c)(3) organizations. Based on 2026 insurance data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "nursing-home": {
        "id": "nursing-home",
        "name": "2026 Nursing Home Abuse Calculator | Settlement Value Estimator",
        "description": "Calculate your 2026 nursing home abuse settlement value instantly. Free elder neglect negotiator with official CMS (Medicare.gov) ratings, CDC elder abuse statistics, and litigation payout records.",
        "category": "legal",
        "tier": 1,
        "color": "rose-500",
        "icon": "heart"
    },
    "offshore": {
        "id": "offshore",
        "name": "2026 Jones Act Settlement Calculator | Offshore Injury Payout",
        "description": "Calculate your 2026 Jones Act settlement value instantly. Free maritime negotiator with official Maintenance & Cure rates, Unseaworthiness benchmarks, and USCG casualty data.",
        "category": "legal",
        "tier": 1,
        "color": "rose-500",
        "icon": "anchor"
    },
    "oil-rig": {
        "id": "oil-rig",
        "name": "Oil Rig Injury Calculator",
        "description": "Calculate oil rig injury settlement value instantly. Free 2026 calculator for offshore drilling accidents, explosions, and Jones Act claims.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "opioid-addiction": {
        "id": "opioid-addiction",
        "name": "Opioid Addiction Calculator",
        "description": "Calculate opioid addiction lawsuit settlements. Purdue Pharma, J&J, drug distributor claims. Based on 2026 MDL data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "overtime": {
        "id": "overtime",
        "name": "Overtime Pay Calculator",
        "description": "Calculate your overtime pay. Free 2026 calculator for time and a half, double time, and weekly overtime.",
        "category": "finance",
        "tier": 2,
        "color": "blue-500",
        "icon": "landmark"
    },
    "oxycontin": {
        "id": "oxycontin",
        "name": "OxyContin Lawsuit Calculator",
        "description": "Calculate OxyContin addiction lawsuit settlements. Purdue Pharma bankruptcy claims, Sackler family trust. Based on 2026 settlement data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "ozempic": {
        "id": "ozempic",
        "name": "2026 Ozempic Settlement Calculator | Gastroparesis Payouts",
        "description": "Calculate your 2026 Ozempic lawsuit settlement value. Free MDL 3094 estimator for Gastroparesis, stomach paralysis, and NAION vision loss claims with official FDA safety data.",
        "category": "legal",
        "tier": 1,
        "color": "rose-500",
        "icon": "gavel"
    },
    "paragard": {
        "id": "paragard",
        "name": "Paragard IUD Lawsuit Calculator",
        "description": "Calculate Paragard IUD lawsuit settlement value instantly. Free 2026 calculator for IUD fracture, breakage, and removal injury claims. Bellwether trial January 2026.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "paraquat": {
        "id": "paraquat",
        "name": "2026 Paraquat Lawsuit Settlement Calculator | Parkinson's Payouts",
        "description": "Calculate your 2026 Paraquat lawsuit settlement value instantly. Free Parkinson's disease negotiator with official MDL 3004 (Southern District of Illinois) litigation data and EPA toxicity benchmarks.",
        "category": "legal",
        "tier": 1,
        "color": "rose-500",
        "icon": "gavel"
    },
    "parking-lot-accident": {
        "id": "parking-lot-accident",
        "name": "Parking Lot Accident Calculator",
        "description": "Calculate parking lot accident lawsuit settlements. Pedestrian strikes, backing accidents, poor lighting, potholes. Based on 2026 premises liability data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "pedestrian-accident": {
        "id": "pedestrian-accident",
        "name": "Pedestrian Accident Calculator",
        "description": "Calculate pedestrian accident settlement value instantly. Free 2026 calculator with crosswalk laws, injury severity, and NHTSA data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "pelvic-mesh": {
        "id": "pelvic-mesh",
        "name": "Pelvic Mesh Lawsuit Calculator",
        "description": "Calculate pelvic mesh lawsuit settlements. Mesh erosion, chronic pain, revision surgery claims. Based on 2026 litigation data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "pension": {
        "id": "pension",
        "name": "Pension Calculator",
        "description": "Calculate pension benefits. Free 2026 calculator for defined benefit, lump sum, and annuity options.",
        "category": "finance",
        "tier": 2,
        "color": "blue-500",
        "icon": "landmark"
    },
    "pet-insurance": {
        "id": "pet-insurance",
        "name": "Pet Insurance Calculator",
        "description": "Calculate pet insurance costs for dogs and cats. Free 2026 calculator with premium estimates and coverage options.",
        "category": "general",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "pfas": {
        "id": "pfas",
        "name": "PFAS Lawsuit Calculator",
        "description": "Calculate PFAS lawsuit settlements. Firefighter AFFF exposure, 3M & DuPont claims, cancer and disease compensation. Based on 2026 MDL data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "philips-ventilator": {
        "id": "philips-ventilator",
        "name": "2026 Philips CPAP Settlement Calculator | Payout Negotiator",
        "description": "Calculate your 2026 Philips CPAP lawsuit settlement value instantly. Free ventilator recall negotiator with official MDL 3014 litigation data, FDA Class I recall benchmarks, and cancer risk analysis.",
        "category": "legal",
        "tier": 1,
        "color": "rose-500",
        "icon": "wind"
    },
    "pipeline": {
        "id": "pipeline",
        "name": "Pipeline Injury Calculator",
        "description": "Calculate pipeline explosion and rupture injury settlement value instantly. Free 2026 calculator for oil and gas pipeline accidents.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "playground-injury": {
        "id": "playground-injury",
        "name": "Playground Injury Calculator",
        "description": "Calculate playground injury lawsuit settlements. Equipment defects, falls, inadequate supervision. Based on 2026 CPSC data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "plumber-insurance": {
        "id": "plumber-insurance",
        "name": "Plumber Insurance Calculator",
        "description": "Calculate plumber insurance costs. GL, workers comp, and water damage coverage for plumbing contractors. Based on 2026 NCCI data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "pmi": {
        "id": "pmi",
        "name": "PMI Calculator",
        "description": "Calculate your private mortgage insurance cost instantly. Free 2026 PMI calculator with removal timeline.",
        "category": "finance",
        "tier": 2,
        "color": "blue-500",
        "icon": "landmark"
    },
    "pool-drowning": {
        "id": "pool-drowning",
        "name": "Pool Drowning Calculator",
        "description": "Calculate pool drowning accident settlement value instantly. Free 2026 calculator with premises liability and negligent supervision based on CDC data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "ppi": {
        "id": "ppi",
        "name": "PPI Lawsuit Calculator",
        "description": "Calculate PPI lawsuit settlements. Kidney disease, bone fractures, gastric cancer claims. Based on 2026 litigation data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "pradaxa": {
        "id": "pradaxa",
        "name": "Pradaxa Lawsuit Calculator",
        "description": "Calculate Pradaxa lawsuit settlements. Uncontrollable bleeding, fatal hemorrhage claims. Based on 2026 litigation data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "prilosec": {
        "id": "prilosec",
        "name": "Prilosec Kidney Lawsuit Calculator",
        "description": "Calculate Prilosec kidney damage lawsuit settlements. PPI chronic kidney disease claims. Based on 2026 litigation data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "product-liability": {
        "id": "product-liability",
        "name": "Product Liability Calculator",
        "description": "Calculate defective product lawsuit settlement value instantly. Free 2026 calculator for manufacturing defects, design flaws, and product recalls.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "professional-liability": {
        "id": "professional-liability",
        "name": "Professional Liability Calculator",
        "description": "Calculate professional liability (E&O) insurance premiums. Errors & omissions coverage for consultants, accountants, tech, and professionals. Based on 2026 NAIC data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "property-division": {
        "id": "property-division",
        "name": "Property Division Calculator",
        "description": "Calculate your divorce property division. Free 2026 calculator for splitting marital assets, home equity, and retirement accounts.",
        "category": "health",
        "tier": 2,
        "color": "emerald-500",
        "icon": "activity"
    },
    "quarterly-tax": {
        "id": "quarterly-tax",
        "name": "Quarterly Tax Calculator",
        "description": "Calculate quarterly estimated tax payments for self-employed individuals. Based on 2026 IRS Form 1040-ES guidelines.",
        "category": "tax",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "refinance": {
        "id": "refinance",
        "name": "Refinance Calculator",
        "description": "Calculate mortgage refinance savings instantly. Free 2026 calculator with break-even analysis.",
        "category": "finance",
        "tier": 2,
        "color": "blue-500",
        "icon": "landmark"
    },
    "refinery": {
        "id": "refinery",
        "name": "Refinery Accident Calculator",
        "description": "Calculate refinery explosion and fire injury settlement value instantly. Free 2026 calculator for oil refinery, chemical plant, and petrochemical accidents.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "rental-income": {
        "id": "rental-income",
        "name": "Rental Income Calculator",
        "description": "Calculate net rental income, cash flow, and ROI. Based on 2026 IRS guidelines for rental property deductions.",
        "category": "tax",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "renters-insurance": {
        "id": "renters-insurance",
        "name": "Renters Insurance Calculator",
        "description": "Calculate renters insurance costs and coverage needs. Free 2026 calculator with premium estimates for apartments and rentals.",
        "category": "health",
        "tier": 2,
        "color": "emerald-500",
        "icon": "activity"
    },
    "resort-injury": {
        "id": "resort-injury",
        "name": "Resort Injury Calculator",
        "description": "Calculate resort injury lawsuit settlements. Pool accidents, activity injuries, excursion negligence. Based on 2026 hospitality industry data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "restaurant-injury": {
        "id": "restaurant-injury",
        "name": "Restaurant Injury Calculator",
        "description": "Calculate restaurant injury lawsuit settlements. Slip and fall, burns, broken chairs, falling objects. Based on 2026 premises liability data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "restaurant-insurance": {
        "id": "restaurant-insurance",
        "name": "Restaurant Insurance Calculator",
        "description": "Calculate restaurant insurance costs. GL, property, workers comp, and liquor liability for restaurants and food service. Based on 2026 NAIC data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "retail-store-injury": {
        "id": "retail-store-injury",
        "name": "Retail Store Injury Calculator",
        "description": "Calculate retail store injury lawsuit settlements. Black Friday injuries, falling displays, escalator accidents, automatic doors. Based on 2026 premises liability data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "retirement": {
        "id": "retirement",
        "name": "Retirement Calculator",
        "description": "Plan your retirement with our free calculators. Estimate how much you need to save, 401k growth, Social Security benefits, and more. Easy to understand results.",
        "category": "general",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "rideshare-accident": {
        "id": "rideshare-accident",
        "name": "Rideshare Accident Calculator",
        "description": "Calculate Uber or Lyft accident settlement value instantly. Free 2026 calculator with rideshare insurance tiers and liability coverage.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "rideshare-insurance": {
        "id": "rideshare-insurance",
        "name": "Rideshare Insurance Calculator",
        "description": "Calculate rideshare insurance costs for Uber, Lyft drivers. Gap coverage, commercial endorsements, and personal auto rates. Based on 2026 insurance industry data.",
        "category": "tax",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "risperdal": {
        "id": "risperdal",
        "name": "Risperdal Lawsuit Calculator",
        "description": "Calculate Risperdal lawsuit settlements. Gynecomastia (male breast growth), diabetes, stroke claims. Based on 2026 litigation data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "rmd": {
        "id": "rmd",
        "name": "RMD Calculator",
        "description": "Calculate Required Minimum Distributions (RMDs) from IRAs and 401(k)s. Free 2026 calculator with SECURE 2.0 rules.",
        "category": "finance",
        "tier": 2,
        "color": "blue-500",
        "icon": "landmark"
    },
    "roofing-insurance": {
        "id": "roofing-insurance",
        "name": "Roofing Insurance Calculator",
        "description": "Calculate roofing contractor insurance costs. High-risk specialty coverage for roofers including GL, workers comp, and equipment. Based on 2026 NCCI data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "roth-ira": {
        "id": "roth-ira",
        "name": "Roth IRA Calculator",
        "description": "Calculate Roth IRA growth and retirement value. Free 2026 calculator with income limits and contribution rules.",
        "category": "tax",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "roundup": {
        "id": "roundup",
        "name": "2026 Roundup Settlement Calculator | Lawsuit Payout Estimator",
        "description": "Calculate your 2026 Roundup lawsuit settlement value instantly. Free NHL negotiator with official MDL 2741 (Bayer/Monsanto) litigation data and IARC carcinogen benchmarks.",
        "category": "legal",
        "tier": 1,
        "color": "emerald-500",
        "icon": "leaf"
    },
    "rsu": {
        "id": "rsu",
        "name": "2026 RSU Tax Calculator | Restricted Stock Negotiator",
        "description": "Calculate your 2026 RSU value and taxes instantly. Free tech negotiator with official IRS Section 83(i) deferral benchmarks, Section 83(b) election benchmarks, and 2026 vesting data.",
        "category": "tax",
        "tier": 1,
        "color": "slate-500",
        "icon": "briefcase"
    },
    "rv-insurance": {
        "id": "rv-insurance",
        "name": "RV Insurance Calculator",
        "description": "Calculate RV insurance costs. Coverage for motorhomes, travel trailers, and campers. Based on 2026 insurance data.",
        "category": "health",
        "tier": 2,
        "color": "emerald-500",
        "icon": "activity"
    },
    "s-corp-tax": {
        "id": "s-corp-tax",
        "name": "S Corp Tax Calculator",
        "description": "Calculate S-Corp tax savings, reasonable salary, and distribution strategy. Based on 2026 IRS guidelines for S Corporation owners.",
        "category": "tax",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "salon-insurance": {
        "id": "salon-insurance",
        "name": "Salon Insurance Calculator",
        "description": "Calculate salon insurance costs. GL, professional liability, and property coverage for hair salons, nail salons, spas, and barber shops. Based on 2026 insurance data.",
        "category": "health",
        "tier": 2,
        "color": "emerald-500",
        "icon": "activity"
    },
    "scaffolding": {
        "id": "scaffolding",
        "name": "Scaffolding Accident Calculator",
        "description": "Calculate scaffolding fall and collapse injury settlement value instantly. Free 2026 calculator for construction scaffold accidents.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "school-injury": {
        "id": "school-injury",
        "name": "School Injury Calculator",
        "description": "Calculate school injury lawsuit settlements. Playground accidents, bullying, sports injuries. Based on 2026 NCES data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "section-8": {
        "id": "section-8",
        "name": "Section 8 Calculator",
        "description": "Calculate your Section 8 Housing Choice Voucher eligibility and estimated rent payment. Based on 2026 HUD income limits.",
        "category": "general",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "self-employment": {
        "id": "self-employment",
        "name": "Self Employment Tax Calculator",
        "description": "Calculate self-employment tax for freelancers and 1099 contractors. Free 2026 SE tax calculator.",
        "category": "tax",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "severance": {
        "id": "severance",
        "name": "Severance Pay Calculator",
        "description": "Calculate your severance pay. Free 2026 calculator for layoff packages, negotiation tips, and what to expect.",
        "category": "finance",
        "tier": 2,
        "color": "blue-500",
        "icon": "landmark"
    },
    "shoulder-implant": {
        "id": "shoulder-implant",
        "name": "Shoulder Implant Lawsuit Calculator",
        "description": "Calculate shoulder implant lawsuit settlements. Reverse shoulder replacement failures, device loosening, revision surgery claims. Based on 2026 data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "side-hustle-tax": {
        "id": "side-hustle-tax",
        "name": "Side Hustle Tax Calculator",
        "description": "Calculate self-employment taxes on side income. Includes SE tax, quarterly estimates, and deductions. Based on 2026 IRS guidelines.",
        "category": "tax",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "silicosis": {
        "id": "silicosis",
        "name": "Silicosis Settlement Calculator",
        "description": "Calculate your silicosis settlement. Crystalline silica exposure from sandblasting, mining, construction. Based on 2026 OSHA and CDC data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "ski-accident": {
        "id": "ski-accident",
        "name": "Ski Accident Calculator",
        "description": "Calculate ski accident lawsuit settlements. Ski lift malfunctions, collisions, resort negligence claims. Based on 2026 NSAA data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "slip-and-fall": {
        "id": "slip-and-fall",
        "name": "2026 Slip and Fall Settlement Calculator | Premises Liability Payouts",
        "description": "Calculate your 2026 slip and fall settlement value instantly. Free 50-state premises liability negotiator with official ANSI/NFSI safety standards and property owner negligence benchmarks.",
        "category": "legal",
        "tier": 1,
        "color": "rose-500",
        "icon": "gavel"
    },
    "smith-nephew-knee": {
        "id": "smith-nephew-knee",
        "name": "Smith & Nephew Knee Calculator",
        "description": "Calculate Smith & Nephew knee lawsuit settlements. Journey, Legion, Genesis knee implant failure claims. Based on 2026 litigation data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "snap": {
        "id": "snap",
        "name": "SNAP Benefits Calculator",
        "description": "Calculate your SNAP (food stamps) benefits. Includes 2026 income limits and maximum benefit amounts by household size.",
        "category": "health",
        "tier": 2,
        "color": "emerald-500",
        "icon": "activity"
    },
    "snowboard-injury": {
        "id": "snowboard-injury",
        "name": "Snowboard Injury Calculator",
        "description": "Calculate snowboard injury lawsuit settlements. Terrain park, jump, lift accidents. Based on 2026 NSAA data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "snowmobile-insurance": {
        "id": "snowmobile-insurance",
        "name": "Snowmobile Insurance Calculator",
        "description": "Calculate snowmobile insurance costs. Coverage for Ski-Doo, Polaris, and Arctic Cat snowmobiles. Based on 2026 insurance data.",
        "category": "health",
        "tier": 2,
        "color": "emerald-500",
        "icon": "activity"
    },
    "social-media": {
        "id": "social-media",
        "name": "2026 Social Media Addiction Calculator | Lawsuit Payout Negotiator",
        "description": "Calculate your 2026 social media addiction settlement value instantly. Free lawsuit negotiator with official MDL 3047 (N.D. Cal) litigation data, clinical psychology benchmarks, and youth mental health damages.",
        "category": "legal",
        "tier": 1,
        "color": "rose-500",
        "icon": "smartphone"
    },
    "social-security": {
        "id": "social-security",
        "name": "Social Security Calculator",
        "description": "Calculate Social Security retirement benefits. Free 2026 calculator with COLA adjustments.",
        "category": "finance",
        "tier": 2,
        "color": "blue-500",
        "icon": "landmark"
    },
    "spinal-cord": {
        "id": "spinal-cord",
        "name": "2026 Spinal Cord Injury Settlement Calculator | Payout Negotiator",
        "description": "Calculate your 2026 spinal cord injury settlement value instantly. Free SCI negotiator with official NSCISC statistical data, ASIA impairment scale benchmarks, and lifetime care cost projections.",
        "category": "legal",
        "tier": 1,
        "color": "rose-500",
        "icon": "activity"
    },
    "spinal-fusion": {
        "id": "spinal-fusion",
        "name": "Spinal Fusion Hardware Calculator",
        "description": "Calculate spinal fusion hardware lawsuit settlements. Pedicle screw, rod, cage failure claims. Based on 2026 litigation data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "spine-implant": {
        "id": "spine-implant",
        "name": "Spine Implant Lawsuit Calculator",
        "description": "Calculate spine implant lawsuit settlements. Infuse BMP, spinal fusion failure, disc replacement claims. Based on 2026 litigation data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "sports-injury": {
        "id": "sports-injury",
        "name": "Sports Injury Calculator",
        "description": "Calculate sports injury lawsuit settlements. CTE, concussion, youth sports injuries. Based on 2026 CDC sports injury data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "sr22": {
        "id": "sr22",
        "name": "2026 SR-22 Insurance Calculator | High-Risk Cost Estimator",
        "description": "Calculate your 2026 SR-22 insurance cost instantly. Free DUI/DWI insurance negotiator with official DMV filing fees, state liability requirements, and high-risk rate data.",
        "category": "general",
        "tier": 1,
        "color": "rose-500",
        "icon": "shield-alert"
    },
    "ssdi": {
        "id": "ssdi",
        "name": "2026 SSDI Back Pay Calculator | Retroactive Payment Estimator",
        "description": "Calculate your 2026 SSDI back pay and retroactive benefits. Free estimator with official SSA attorney fee caps ($7,200) and 2.8% COLA adjustment data.",
        "category": "general",
        "tier": 1,
        "color": "slate-500",
        "icon": "calculator"
    },
    "ssi": {
        "id": "ssi",
        "name": "2026 SSI Calculator | Benefit & Payment Estimator",
        "description": "Calculate your 2026 Supplemental Security Income (SSI) benefits instantly. Free eligibility negotiator with official SSA 2026 COLA adjustments, federal payment standards, and resource limits.",
        "category": "finance",
        "tier": 1,
        "color": "blue-500",
        "icon": "landmark"
    },
    "stadium-injury": {
        "id": "stadium-injury",
        "name": "Stadium Injury Calculator",
        "description": "Calculate stadium injury lawsuit settlements. Foul balls, railing falls, crowd surge, alcohol-related injuries. Based on 2026 venue safety data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "stock-option": {
        "id": "stock-option",
        "name": "Stock Option Calculator",
        "description": "Calculate stock option gains, exercise costs, and tax implications. Based on 2026 IRS guidelines for ISOs and NSOs.",
        "category": "tax",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "structured-settlement": {
        "id": "structured-settlement",
        "name": "Structured Settlement Calculator",
        "description": "Calculate your structured settlement cash value. Free 2026 calculator for selling annuity payments - see how much you can get now.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "stryker-hip": {
        "id": "stryker-hip",
        "name": "Stryker Hip Lawsuit Calculator",
        "description": "Calculate Stryker hip lawsuit settlements. Rejuvenate, ABG II implant failure, metal poisoning claims. Based on 2026 litigation data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "stryker-knee": {
        "id": "stryker-knee",
        "name": "Stryker Knee Lawsuit Calculator",
        "description": "Calculate Stryker knee lawsuit settlements. Triathlon knee loosening, polyethylene wear, revision surgery claims. Based on 2026 litigation data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "student-insurance": {
        "id": "student-insurance",
        "name": "Student Insurance Calculator",
        "description": "Calculate student health insurance costs. Coverage for college students, international students, and study abroad. Based on 2026 insurance data.",
        "category": "health",
        "tier": 2,
        "color": "emerald-500",
        "icon": "activity"
    },
    "student-loan": {
        "id": "student-loan",
        "name": "Student Loan Calculator",
        "description": "Calculate your student loan payments, refinancing savings, and repayment options. See PSLF eligibility, IDR plans, and loan forgiveness timelines.",
        "category": "finance",
        "tier": 2,
        "color": "blue-500",
        "icon": "landmark"
    },
    "suboxone": {
        "id": "suboxone",
        "name": "Suboxone Tooth Decay Calculator",
        "description": "Calculate Suboxone tooth decay lawsuit settlements. Buprenorphine sublingual film, dental damage, extraction claims. Based on 2026 litigation data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "subway-accident": {
        "id": "subway-accident",
        "name": "Subway Accident Calculator",
        "description": "Calculate subway accident lawsuit settlements. MTA, CTA, BART injury claims. Platform falls, train strikes, assault claims. Based on 2026 FTA data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "talcum-powder": {
        "id": "talcum-powder",
        "name": "2026 Talcum Powder Settlement Calculator | Payout Negotiator",
        "description": "Calculate your 2026 Talcum Powder lawsuit settlement value instantly. Free baby powder negotiator with official MDL 2738 litigation data, IARC carcinogen benchmarks, and J&J settlement records.",
        "category": "legal",
        "tier": 1,
        "color": "rose-500",
        "icon": "droplet"
    },
    "tanf": {
        "id": "tanf",
        "name": "TANF Benefits Calculator",
        "description": "Calculate your eligibility for TANF (Temporary Assistance for Needy Families) cash benefits. Includes 2026 state benefit amounts and requirements.",
        "category": "general",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "tax": {
        "id": "tax",
        "name": "2026 Federal Income Tax Calculator | IRS Refund Estimator",
        "description": "Calculate your 2026 federal income tax instantly. See your tax bracket, standard deduction, and estimate your refund with official IRS data integration.",
        "category": "tax",
        "tier": 1,
        "color": "slate-500",
        "icon": "calculator"
    },
    "tbi": {
        "id": "tbi",
        "name": "2026 Traumatic Brain Injury Settlement Calculator | Payout Negotiator",
        "description": "Calculate your 2026 TBI settlement value instantly. Free brain injury negotiator with official CDC TBI Center data, Glasgow Coma Scale (GCS) benchmarks, and long-term neuro-psychological care costs.",
        "category": "legal",
        "tier": 1,
        "color": "rose-500",
        "icon": "brain"
    },
    "tepezza": {
        "id": "tepezza",
        "name": "2026 Tepezza Hearing Loss Settlement Calculator | Tinnitus Payout",
        "description": "Calculate your 2026 Tepezza lawsuit settlement value instantly. Free hearing loss negotiator with official MDL 3079 litigation data, Audiogram benchmarks, and permanent tinnitus ratings.",
        "category": "legal",
        "tier": 1,
        "color": "rose-500",
        "icon": "ear"
    },
    "testosterone": {
        "id": "testosterone",
        "name": "Testosterone Lawsuit Calculator",
        "description": "Calculate testosterone therapy lawsuit settlements. Heart attack, stroke, blood clot claims. Based on 2026 litigation data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "textured-implant": {
        "id": "textured-implant",
        "name": "Textured Breast Implant Calculator",
        "description": "Calculate textured breast implant lawsuit settlements. Allergan BIOCELL recall, BIA-ALCL cancer claims. Based on 2026 litigation data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "theme-park": {
        "id": "theme-park",
        "name": "Theme Park Injury Calculator",
        "description": "Calculate theme park injury lawsuit settlements. Disney, Universal, SeaWorld injury claims. Based on 2026 CPSC data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "tip": {
        "id": "tip",
        "name": "Tip Calculator",
        "description": "Calculate tips and split bills instantly. Free 2026 tip calculator with standard tipping percentages.",
        "category": "finance",
        "tier": 2,
        "color": "blue-500",
        "icon": "landmark"
    },
    "townhouse-insurance": {
        "id": "townhouse-insurance",
        "name": "Townhouse Insurance Calculator",
        "description": "Calculate townhouse insurance costs. Coverage for attached homes with shared walls, personal property, and liability. Based on 2026 insurance data.",
        "category": "general",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "toxic-tort": {
        "id": "toxic-tort",
        "name": "Toxic Tort Settlement Calculator",
        "description": "Calculate your toxic tort settlement. Chemical exposure, water contamination, environmental pollution claims. Based on 2026 EPA, OSHA, and court data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "trailer-insurance": {
        "id": "trailer-insurance",
        "name": "Trailer Insurance Calculator",
        "description": "Calculate trailer insurance costs. Coverage for utility, cargo, and enclosed trailers. Based on 2026 insurance data.",
        "category": "general",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "train-accident": {
        "id": "train-accident",
        "name": "Train Accident Calculator",
        "description": "Calculate train accident lawsuit settlements. FELA railroad workers, crossing accidents, Metro/subway claims. Based on 2026 FRA data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "transvaginal-mesh": {
        "id": "transvaginal-mesh",
        "name": "Transvaginal Mesh Lawsuit Calculator",
        "description": "Calculate transvaginal mesh lawsuit settlements. Mesh erosion, chronic pain, organ perforation claims. Based on 2026 litigation data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "travel-insurance": {
        "id": "travel-insurance",
        "name": "Travel Insurance Calculator",
        "description": "Calculate travel insurance costs. Coverage for trip cancellation, medical emergencies, and lost luggage. Based on 2026 insurance data.",
        "category": "health",
        "tier": 2,
        "color": "emerald-500",
        "icon": "activity"
    },
    "trip-cancellation": {
        "id": "trip-cancellation",
        "name": "Trip Cancellation Calculator",
        "description": "Calculate trip cancellation insurance costs and refund estimates. Coverage for flight, hotel, and tour cancellations. Based on 2026 insurance data.",
        "category": "general",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "truck-accident": {
        "id": "truck-accident",
        "name": "Truck Accident Settlement Calculator | 2026 Payout Estimator",
        "description": "Calculate your truck accident settlement value. Free 2026 estimator for semi-truck and 18-wheeler crashes. Based on FMCSA insurance minimums and average case results.",
        "category": "legal",
        "tier": 1,
        "color": "rose-500",
        "icon": "gavel"
    },
    "trucking-insurance": {
        "id": "trucking-insurance",
        "name": "Trucking Insurance Calculator",
        "description": "Calculate trucking insurance costs for your fleet. Semi-trucks, cargo, liability coverage. Based on 2026 FMCSA and NAIC industry data.",
        "category": "general",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "trust-tax": {
        "id": "trust-tax",
        "name": "Trust Tax Calculator",
        "description": "Calculate trust income tax with compressed brackets. Compare grantor vs non-grantor trust taxation. Based on 2026 IRS guidelines.",
        "category": "tax",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "tylenol": {
        "id": "tylenol",
        "name": "Tylenol Autism Lawsuit Calculator",
        "description": "Calculate Tylenol autism lawsuit settlements. Acetaminophen, pregnancy use, autism, ADHD claims. Based on 2026 MDL data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "uloric": {
        "id": "uloric",
        "name": "Uloric Lawsuit Calculator",
        "description": "Calculate Uloric lawsuit settlements. Heart attack, stroke, cardiovascular death claims. Based on 2026 litigation data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "umbrella-insurance": {
        "id": "umbrella-insurance",
        "name": "Umbrella Insurance Calculator",
        "description": "Calculate umbrella insurance costs and coverage needs. Free 2026 calculator for excess liability protection.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "unemployment": {
        "id": "unemployment",
        "name": "Unemployment Benefits Calculator",
        "description": "Calculate your unemployment benefits. Free 2026 calculator for weekly UI payments by state.",
        "category": "finance",
        "tier": 2,
        "color": "blue-500",
        "icon": "landmark"
    },
    "va-disability": {
        "id": "va-disability",
        "name": "2026 VA Disability Calculator | Official VA Pay Charts & Ratings",
        "description": "Calculate your 2026 VA disability compensation instantly. Free calculator for veterans disability ratings, combined math, and SMC with official 2026 VA payment charts and COLA adjustments.",
        "category": "legal",
        "tier": 1,
        "color": "rose-500",
        "icon": "gavel"
    },
    "valet-accident": {
        "id": "valet-accident",
        "name": "Valet Accident Calculator",
        "description": "Calculate valet accident lawsuit settlements. Vehicle damage, pedestrian injuries, theft, joyriding. Based on 2026 bailment and negligence law.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "viagra-melanoma": {
        "id": "viagra-melanoma",
        "name": "Viagra Melanoma Lawsuit Calculator",
        "description": "Calculate Viagra melanoma lawsuit settlements. Sildenafil skin cancer claims. Based on 2026 litigation data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "vision-insurance": {
        "id": "vision-insurance",
        "name": "Vision Insurance Calculator",
        "description": "Calculate vision insurance costs. Coverage for eye exams, glasses, contacts, and LASIK. Based on 2026 insurance data.",
        "category": "health",
        "tier": 2,
        "color": "emerald-500",
        "icon": "activity"
    },
    "wage-garnishment": {
        "id": "wage-garnishment",
        "name": "Wage Garnishment Calculator",
        "description": "Calculate your wage garnishment limits. Free 2026 calculator for paycheck garnishment - federal limits, child support, and state protections.",
        "category": "tax",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "watch-insurance": {
        "id": "watch-insurance",
        "name": "Watch Insurance Calculator",
        "description": "Calculate watch insurance costs. Coverage for Rolex, Omega, Patek Philippe, and luxury timepieces. Based on 2026 insurance data.",
        "category": "general",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "water-contamination": {
        "id": "water-contamination",
        "name": "Water Contamination Lawsuit Calculator",
        "description": "Calculate water contamination lawsuit settlements. PFAS forever chemicals, Camp Lejeune, industrial pollution. Based on 2026 EPA and MDL data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "waterpark-injury": {
        "id": "waterpark-injury",
        "name": "Waterpark Injury Calculator",
        "description": "Calculate waterpark injury lawsuit settlements. Water slides, wave pools, lazy rivers, drowning claims. Based on 2026 CPSC data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "wedding-insurance": {
        "id": "wedding-insurance",
        "name": "Wedding Insurance Calculator",
        "description": "Calculate wedding insurance costs. Coverage for cancellation, liability, and vendor no-shows. Based on 2026 insurance data.",
        "category": "general",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "welding": {
        "id": "welding",
        "name": "Welding Injury Calculator",
        "description": "Calculate welding injury settlement value instantly. Free 2026 calculator for welder burns, eye injuries, toxic fume exposure, and electric shock.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "whiplash": {
        "id": "whiplash",
        "name": "Whiplash Settlement Calculator",
        "description": "Calculate your whiplash settlement value. Free 2026 calculator for neck injuries, cervical strain, and car accident soft tissue claims.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "wic": {
        "id": "wic",
        "name": "WIC Benefits Calculator",
        "description": "Check if you qualify for WIC (Women, Infants, and Children) benefits. Includes 2026 income limits at 185% of the Federal Poverty Level.",
        "category": "health",
        "tier": 2,
        "color": "emerald-500",
        "icon": "activity"
    },
    "windstorm-insurance": {
        "id": "windstorm-insurance",
        "name": "Windstorm Insurance Calculator",
        "description": "Calculate windstorm insurance costs. Wind-only coverage for high-wind zones, tornadoes, and straight-line winds. Based on 2026 insurance data.",
        "category": "general",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "workers-comp": {
        "id": "workers-comp",
        "name": "Workers Comp Calculator",
        "description": "Calculate your workers compensation benefits for 2026. Free calculator with 50 state maximum rates, TTD calculation, and settlement estimator.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "workers-comp-premium": {
        "id": "workers-comp-premium",
        "name": "Workers Comp Premium Calculator",
        "description": "Calculate workers compensation insurance premiums. Class codes, experience mod, and payroll-based calculations. Based on 2026 NCCI rates.",
        "category": "general",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "wright-hip": {
        "id": "wright-hip",
        "name": "2026 Wright Hip Lawsuit Settlement Calculator | Conserve Plus Payouts",
        "description": "Calculate your 2026 Wright Medical hip lawsuit settlement value instantly. Free Conserve Plus and Dynasty negotiator with official MDL data and revision surgery benchmarks.",
        "category": "legal",
        "tier": 1,
        "color": "rose-500",
        "icon": "gavel"
    },
    "wrongful-death": {
        "id": "wrongful-death",
        "name": "2026 Wrongful Death Settlement Calculator | Fatality Payouts",
        "description": "Calculate your 2026 wrongful death settlement value instantly. Free fatality negotiator with official CDC mortality data, Social Security Actuarial Tables, and survivor damage benchmarks.",
        "category": "legal",
        "tier": 1,
        "color": "rose-500",
        "icon": "gavel"
    },
    "xarelto": {
        "id": "xarelto",
        "name": "Xarelto Lawsuit Calculator",
        "description": "Calculate Xarelto lawsuit settlements. Uncontrollable bleeding, GI hemorrhage, brain bleeding claims. Based on 2026 litigation data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "zantac": {
        "id": "zantac",
        "name": "2026 Zantac Cancer Lawsuit Calculator | Ranitidine Payout Estimator",
        "description": "Calculate your 2026 Zantac settlement value instantly. Free ranitidine negotiator with official MDL 2924 litigation data, FDA recall benchmarks (NDMA), and state court payout records.",
        "category": "legal",
        "tier": 1,
        "color": "rose-500",
        "icon": "gavel"
    },
    "zimmer-hip": {
        "id": "zimmer-hip",
        "name": "2026 Zimmer Hip Lawsuit Settlement Calculator | Durom Cup Payouts",
        "description": "Calculate your 2026 Zimmer hip lawsuit settlement value instantly. Free Durom Cup negotiator with official MDL data, metal-on-metal failure rates, and revision settlement data.",
        "category": "legal",
        "tier": 1,
        "color": "rose-500",
        "icon": "gavel"
    }
};

export function getCalculatorMeta(id: string) {
    const config = CALCULATOR_REGISTRY[id];

    if (!config) {
        return {
            title: `${id.charAt(0).toUpperCase() + id.slice(1).replace(/-/g, ' ')} Calculator | 2026 Audit`,
            description: `Precision ${id} calculation for the 2026 market. Free clinical-grade health and finance metrics.`,
            canonical: `https://mysmartcalculators.com/${id}`,
        };
    }

    return {
        title: `${config.name} | S-Class 2026 Precision Audit`,
        description: config.description,
        canonical: `https://mysmartcalculators.com/${config.id}`,
    };
}
