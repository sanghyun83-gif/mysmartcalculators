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
        "name": "1099 Tax Calculator",
        "description": "Calculate 1099 taxes, self-employment tax, and quarterly estimates. Based on 2026 IRS guidelines for contractors and freelancers.",
        "category": "tax",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "18-wheeler": {
        "id": "18-wheeler",
        "name": "18 Wheeler Accident Calculator",
        "description": "Calculate 18 wheeler accident settlement value instantly. Free 2026 calculator for semi-truck crashes, commercial vehicle accidents, and trucking company liability.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "3m-earplug": {
        "id": "3m-earplug",
        "name": "3M Earplug Lawsuit Calculator",
        "description": "Calculate 3M earplug lawsuit settlements. Veterans hearing loss, tinnitus, CAEv2 defective earplugs. Based on 2026 MDL settlement data.",
        "category": "tax",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
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
        "name": "AFFF Lawsuit Calculator",
        "description": "Calculate AFFF lawsuit settlements. Aqueous film-forming foam PFAS contamination, cancer claims. Based on MDL 2873 data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "airbnb-income": {
        "id": "airbnb-income",
        "name": "Airbnb Income Calculator",
        "description": "Calculate Airbnb earnings, occupancy rates, and net income. Based on 2026 IRS guidelines for short-term rental income.",
        "category": "tax",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "alimony": {
        "id": "alimony",
        "name": "Alimony Calculator",
        "description": "Calculate your alimony payment or entitlement. Free 2026 calculator with state-specific formulas for CA, TX, FL, NY, and all 50 states.",
        "category": "tax",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
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
        "name": "Baby Formula NEC Calculator",
        "description": "Calculate baby formula NEC lawsuit settlements. Similac, Enfamil, premature infant necrotizing enterocolitis claims. Based on 2026 MDL data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
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
        "name": "Birth Injury Settlement Calculator",
        "description": "Calculate your birth injury settlement value. Free 2026 calculator for cerebral palsy, Erb",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
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
        "name": "Bonus Tax Calculator",
        "description": "Calculate taxes on your bonus. Flat rate vs aggregate method comparison. Based on 2026 IRS supplemental wage guidelines.",
        "category": "tax",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
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
        "name": "Business Insurance Calculator",
        "description": "Calculate business insurance premiums for small businesses, startups, and LLCs. Compare coverage options and costs. Based on 2026 NAIC data.",
        "category": "tax",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
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
        "name": "Camp Lejeune Water Calculator",
        "description": "Calculate Camp Lejeune water contamination settlement value instantly. Free 2026 calculator for toxic water exposure claims under the PACT Act. Veterans, families, and civilians.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
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
        "name": "Capital Gains Tax Calculator",
        "description": "Calculate capital gains tax on stocks, real estate, and investments. Free 2026 calculator.",
        "category": "tax",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "car-accident": {
        "id": "car-accident",
        "name": "Car accident",
        "description": "Precision Car accident analyzer for the 2026 market.",
        "category": "tax",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
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
        "name": "Child Support Calculator",
        "description": "Calculate child support payments for all 50 US states. Free 2026 calculator based on official state guidelines, income shares, and custody arrangements.",
        "category": "health",
        "tier": 2,
        "color": "emerald-500",
        "icon": "activity"
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
        "name": "Construction Accident Calculator",
        "description": "Calculate construction accident settlement value instantly. Free 2026 calculator with OSHA violation data and injury severity levels.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
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
        "name": "Crypto Tax Calculator",
        "description": "Calculate cryptocurrency taxes on Bitcoin, Ethereum, and NFTs. Free 2026 crypto tax calculator.",
        "category": "tax",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
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
        "name": "Depo-Provera Brain Tumor Calculator",
        "description": "Calculate Depo-Provera brain tumor lawsuit settlement value instantly. Free 2026 calculator for meningioma claims from contraceptive injection use.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "depuy-hip": {
        "id": "depuy-hip",
        "name": "DePuy Hip Lawsuit Calculator",
        "description": "Calculate DePuy hip lawsuit settlements. ASR, Pinnacle metal-on-metal failure, metallosis claims. Based on 2026 litigation data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "depuy-knee": {
        "id": "depuy-knee",
        "name": "DePuy Knee Lawsuit Calculator",
        "description": "Calculate DePuy knee lawsuit settlements. Attune tibial loosening, early failure, revision surgery claims. Based on 2026 litigation data.",
        "category": "legal",
        "tier": 2,
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
        "name": "Disability Benefits Calculator",
        "description": "Calculate your 2026 Social Security Disability (SSDI) and SSI benefits. Free calculator with Back Pay estimation, updated with official 2.8% COLA increase.",
        "category": "tax",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "divorce": {
        "id": "divorce",
        "name": "Divorce Settlement Calculator",
        "description": "Calculate alimony (spousal support) and property division for divorce. Free 2026 calculator based on state laws for all 50 US states.",
        "category": "legal",
        "tier": 2,
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
        "name": "Dog Bite Settlement Calculator",
        "description": "Calculate your dog bite settlement value. Free 2026 calculator for animal attacks, puncture wounds, and strict liability claims.",
        "category": "legal",
        "tier": 2,
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
        "name": "DUI Calculator",
        "description": "Calculate the true cost of a DUI in your state. Free 2026 DUI cost calculator with fines, lawyer fees, insurance increases, and more.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
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
        "name": "EPLI Calculator",
        "description": "Calculate EPLI insurance premiums. Wrongful termination, discrimination, and harassment coverage. Based on 2026 NAIC data.",
        "category": "general",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
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
        "name": "ESPP Calculator",
        "description": "Calculate ESPP gains, discounts, and tax implications. Based on 2026 IRS guidelines for qualified ESPP plans.",
        "category": "tax",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
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
        "name": "Railroad Injury (FELA) Calculator",
        "description": "Calculate railroad injury FELA settlement value instantly. Free 2026 calculator for train accidents, railway worker injuries, and Federal Employers",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
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
        "name": "General Liability Calculator",
        "description": "Calculate general liability insurance premiums. Slip and fall, property damage, advertising injury. Based on 2026 NAIC commercial lines data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
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
        "name": "GLP-1 Vision Loss Calculator",
        "description": "Calculate GLP-1 vision loss lawsuit settlement value instantly. Free 2026 calculator for NAION (non-arteritic anterior ischemic optic neuropathy) claims from Ozempic, Wegovy, and Mounjaro.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
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
        "name": "Hair Relaxer Lawsuit Calculator",
        "description": "Calculate hair relaxer lawsuit settlement value instantly. Free 2026 calculator for uterine cancer and endometriosis claims.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
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
        "name": "Hernia Mesh Lawsuit Calculator",
        "description": "Calculate hernia mesh lawsuit settlement value instantly. Free 2026 calculator for mesh complications, revision surgery, and chronic pain claims.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
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
        "name": "Life Insurance Calculator",
        "description": "Calculate how much life insurance you need for free. Estimate coverage, compare term vs whole life, and get premium quotes. Protect your family today.",
        "category": "health",
        "tier": 2,
        "color": "emerald-500",
        "icon": "activity"
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
        "name": "Medical Malpractice Calculator",
        "description": "Calculate your medical malpractice settlement value. Free 2026 calculator for surgical errors, misdiagnosis, birth injuries, and medication errors. Average settlements $250K-$500K.",
        "category": "legal",
        "tier": 2,
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
        "name": "Mesothelioma Settlement Calculator",
        "description": "Calculate your mesothelioma settlement value. Free 2026 calculator for asbestos lawsuits, trust funds, VA benefits, and workers",
        "category": "legal",
        "tier": 2,
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
        "name": "Mortgage Calculator",
        "description": "Calculate your mortgage payment for free. Estimate monthly payments, amortization schedule, and home affordability. Includes PMI and property tax calculations.",
        "category": "tax",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
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
        "name": "Nursing Home Abuse Calculator",
        "description": "Calculate your nursing home abuse settlement value. Free 2026 calculator for elder neglect, bedsores, medication errors, and abuse claims.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "offshore": {
        "id": "offshore",
        "name": "Offshore Maritime Calculator",
        "description": "Calculate offshore maritime injury settlement value instantly. Free 2026 calculator for Jones Act seaman claims, longshore workers, and vessel accidents.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
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
        "name": "Ozempic Settlement Calculator",
        "description": "Calculate your Ozempic lawsuit settlement value. Specialized analysis for Gastroparesis, Intestinal Obstruction, and NAION vision loss claims. Data-driven 2026 audit.",
        "category": "legal",
        "tier": 2,
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
        "name": "Paraquat Lawsuit Calculator",
        "description": "Calculate Paraquat lawsuit settlement value instantly. Free 2026 calculator for Parkinson",
        "category": "legal",
        "tier": 2,
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
        "name": "Philips CPAP Lawsuit Calculator",
        "description": "Calculate Philips CPAP/BiPAP lawsuit settlements. Foam degradation, cancer risk, respiratory issues. Based on 2026 MDL data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
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
        "name": "Roundup",
        "description": "Precision Roundup analyzer for the 2026 market.",
        "category": "health",
        "tier": 2,
        "color": "emerald-500",
        "icon": "activity"
    },
    "rsu": {
        "id": "rsu",
        "name": "RSU Calculator",
        "description": "Calculate RSU value, vesting schedule, and tax implications. Based on 2026 IRS guidelines for restricted stock units.",
        "category": "tax",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
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
        "name": "Slip and Fall Settlement Calculator",
        "description": "Calculate your slip and fall settlement value. Free 2026 calculator for premises liability, trip and fall accidents, and property owner negligence claims.",
        "category": "legal",
        "tier": 2,
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
        "name": "Social Media Addiction Calculator",
        "description": "Calculate social media addiction lawsuit settlement value instantly. Free 2026 calculator for Meta, TikTok, Snap, and ByteDance youth mental health claims.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
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
        "name": "Spinal Cord Injury Calculator",
        "description": "Calculate spinal cord injury settlement value instantly. Free 2026 calculator with injury severity levels and lifetime care costs.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
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
        "name": "SR-22 Insurance Calculator",
        "description": "Calculate your SR-22 insurance cost. Free 2026 calculator for DUI/DWI, license suspension, and high-risk driver insurance rates by state.",
        "category": "general",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "ssdi": {
        "id": "ssdi",
        "name": "SSDI Back Pay Calculator",
        "description": "Calculate your SSDI back pay amount. Free 2026 calculator for Social Security disability retroactive payments and attorney fees.",
        "category": "general",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "ssi": {
        "id": "ssi",
        "name": "SSI Calculator",
        "description": "Check your eligibility for Supplemental Security Income (SSI) and estimate your monthly benefit based on 2026 SSA guidelines.",
        "category": "tax",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
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
        "name": "Talcum Powder Lawsuit Calculator",
        "description": "Calculate talcum powder lawsuit settlement value instantly. Free 2026 calculator for ovarian cancer and mesothelioma claims against J&J.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
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
        "name": "Tax Calculator",
        "description": "Calculate your 2026 federal income tax for free. See your tax bracket, estimate your refund, and understand your tax liability with our easy-to-use calculators.",
        "category": "tax",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "tbi": {
        "id": "tbi",
        "name": "TBI Settlement Calculator",
        "description": "Calculate traumatic brain injury settlement value instantly. Free 2026 calculator with severity levels and lifetime care costs based on CDC and NIH data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "tepezza": {
        "id": "tepezza",
        "name": "Tepezza Hearing Loss Calculator",
        "description": "Calculate Tepezza hearing loss lawsuit settlement value instantly. Free 2026 calculator for teprotumumab-related hearing damage, tinnitus, and deafness claims.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
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
        "name": "Truck Accident Settlement Calculator",
        "description": "Calculate your truck accident settlement value for free. Estimate 18-wheeler, semi-truck, and commercial vehicle accident compensation. Average settlements $500K-$3M.",
        "category": "legal",
        "tier": 2,
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
        "name": "VA Disability Calculator",
        "description": "Calculate your VA disability compensation. Free 2026 calculator for veterans disability ratings and monthly payments.",
        "category": "general",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
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
        "name": "Wright Hip Lawsuit Calculator",
        "description": "Calculate Wright Medical hip lawsuit settlements. Conserve Plus, Dynasty hip resurfacing failure claims. Based on 2026 litigation data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "wrongful-death": {
        "id": "wrongful-death",
        "name": "Wrongful Death Calculator",
        "description": "Calculate wrongful death settlement value. Free 2026 calculator for medical malpractice death, car accident fatality, workplace death. Average settlements $500K-$1M+.",
        "category": "legal",
        "tier": 2,
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
        "name": "Zantac Cancer Lawsuit Calculator",
        "description": "Calculate Zantac cancer lawsuit settlements. Ranitidine, NDMA contamination, stomach, bladder, liver cancer. Based on 2026 litigation data.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "zimmer-hip": {
        "id": "zimmer-hip",
        "name": "Zimmer Hip Lawsuit Calculator",
        "description": "Calculate Zimmer hip lawsuit settlements. Durom Cup, metal-on-metal failure, revision surgery claims. Based on 2026 litigation data.",
        "category": "legal",
        "tier": 2,
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
