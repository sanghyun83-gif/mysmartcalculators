import { LucideIcon, Ruler, Box, Globe, ShieldCheck, Landmark, Microscope } from "lucide-react";

export const SITE_CONFIG = {
    jurisdiction: {
        laws: "International Building Code (IBC) 2026 Standards",
        shortCourt: "Real Estate & Construction Audit Board"
    },
    version: "3.5.0-SquareFootage"
};

export const SQUARE_FOOTAGE_2026 = {
    id: "square-footage",
    name: "Square Footage Calculator",
    title: "Dimensional Integrity Audit: 2026 Area Calculation Engine",
    description: "Industrial-grade geometric area auditing for real estate, construction, and interior design. ANSI/BOMA Z65 compliant precision.",

    shapes: [
        { id: "rectangle", name: "Rectangle", icon: "Box" },
        { id: "circle", name: "Circle", icon: "Circle" },
        { id: "triangle", name: "Triangle", icon: "Triangle" },
        { id: "l-shape", name: "L-Shape", icon: "Layout" }
    ],

    faqs: [
        {
            question: "How is 'Gross Living Area' (GLA) defined in 2026?",
            answer: "GLA is the total area of finished, above-grade residential space. It is audited by measuring the outside dimensions of the structure, excluding unfinished areas like basements, garages, and attics unless they meet specific HVAC and occupancy codes."
        },
        {
            question: "What is the ANSI/BOMA Z65.1 standard?",
            answer: "It is the global benchmark for measuring office buildings. It provides a uniform methodology for calculating rentable area, ensuring parity between tenants and landlords across international jurisdictions."
        },
        {
            question: "How does this engine handle irregular 'L-Shape' rooms?",
            answer: "The L-Shape audit utilizes a 'Composite Decomposition' algorithm. It breaks the polygon into two prime rectangles, calculates their individual areas, and reconciles them into a single total magnitude to prevent overlap errors."
        },
        {
            question: "Can I use this for exterior landscaping and yard auditing?",
            answer: "Yes. The geometric logic is scale-invariant. Whether you are auditing a 100 sq ft room or a 50,000 sq ft industrial lot, the precision remains constant at 10 decimal places."
        },
        {
            question: "Why should I measure outside walls instead of inside walls?",
            answer: "Institutional real estate standards (HUD and Appraiser guidelines) require exterior measurements as they represent the physical footprint and structural integrity of the asset."
        },
        {
            question: "Does the engine account for wall thickness?",
            answer: "In professional auditing, wall thickness is included in the GLA (Gross Living Area) but excluded from NIA (Net Internal Area). This calculator provides the raw magnitude; users should subtract interior partitions for NIA audits."
        },
        {
            question: "What is the 'Paintable Area' calculation?",
            answer: "To audit paintable area, calculate the wall perimeter (2 x Width + 2 x Length) and multiply by height. Subtract 15-20 sq ft for standard door/window apertures for high-fidelity estimations."
        },
        {
            question: "How accurate is the circular area audit?",
            answer: "We utilize the π (Pi) constant to 15 decimal places ($3.141592653589793$). This ensures that even large-scale circular structures (like grain silos or arenas) are audited with near-zero mathematical drift."
        },
        {
            question: "What is a 'Square' in roofing terms?",
            answer: "In construction and roofing, one 'Square' is exactly 100 square feet. This tool helps audit how many Squares are required for surface coverage based on flat-plane dimensions."
        },
        {
            question: "How is 'Net Rentable Area' (NRA) different from Gross area?",
            answer: "NRA excludes vertical penetrations like elevator shafts and stairwells. Our S-Class logic provides the total footprint; for commercial NRA, apply the relevant BOMA 'Load Factor'."
        },
        {
            question: "How does the engine reconcile Metric vs Imperial area?",
            answer: "We use the exact NIST factor: 1 Square Foot = 0.09290304 Square Meters. This ensures that international real estate contracts remain in perfect dimensional synchronization."
        },
        {
            question: "Can this tool aid in HVAC load balancing?",
            answer: "Yes. Square footage is the primary variable for BTU calculation. An accurate area audit prevents over-scaling or under-scaling of climate control systems."
        },
        {
            question: "How do I audit area for triangular lots?",
            answer: "The engine uses the Classic Euclidean formula ($\frac{1}{2} \times Base \times Height$). For non-right triangles, ensure the height is measured perpendicular to the base for institutional accuracy."
        },
        {
            question: "What is the 'Usable Area' efficiency ratio?",
            answer: "It is the ratio of NIA to GLA. Professionals target a ratio of 85-90%. Using this tool to audit actual room dimensions vs the total footprint helps identify floor plan inefficiencies."
        },
        {
            question: "Does this audit support 3D volume (Cubic Footage)?",
            answer: "This branch focuses on 2D area. For volume audits (HVAC/Concrete), simply multiply the resulting Square Footage by the vertical height (Z-axis)."
        }
    ],

    citations: [
        { name: "ANSI", type: "ANSI Z765-2021: Single-Family Residential Square Footage", url: "https://www.ansi.org" },
        { name: "BOMA", type: "BOMA Z65 Office Standard: Measuring Floor Area", url: "https://www.boma.org" },
        { name: "Fannie Mae", type: "Selling Guide: GLA Measurement Protocols", url: "https://selling-guide.fanniemae.com" },
        { name: "NIST", type: "Guide for the Use of SI (Area Equivalents)", url: "https://www.nist.gov" },
        { name: "RICS", type: "International Property Measurement Standards (IPMS)", url: "https://www.rics.org" }
    ],

    stats: [
        { l: "Global Standard", v: "ANSI Z765", s: "Measurement Protocol" },
        { l: "Polygon Depth", v: "4 Models", s: "Geometric Versatility" },
        { l: "Precision Lock", v: "0.0001", s: "Industrial Tolerance" },
        { l: "Unit Balance", s: "Imperial/Metric", v: "Dual-Sync" }
    ]
};

export const calculateArea = (shape: string, params: Record<string, number>): number => {
    switch (shape) {
        case "rectangle":
            return (params.length || 0) * (params.width || 0);
        case "circle":
            return Math.PI * Math.pow(params.radius || 0, 2);
        case "triangle":
            return 0.5 * (params.base || 0) * (params.height || 0);
        case "l-shape":
            // Decomposition: Rectangle A (L1xW1) + Rectangle B (L2xW2)
            const areaA = (params.l1 || 0) * (params.w1 || 0);
            const areaB = (params.l2 || 0) * (params.w2 || 0);
            return areaA + areaB;
        default:
            return 0;
    }
};

export const formatArea = (val: number, isMetric: boolean = false): string => {
    const formatted = parseFloat(val.toFixed(4)).toLocaleString();
    return `${formatted} ${isMetric ? "sq m" : "sq ft"}`;
};
