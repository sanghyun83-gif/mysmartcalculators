"use client";

import { useState } from "react";
import Link from "next/link";
import { Truck, Calculator, ArrowRight, DollarSign, AlertTriangle } from "lucide-react";
import { SITE, TRUCK_TYPES, COVERAGE_TYPES, OPERATING_RADIUS, CARGO_TYPES, FLEET_DISCOUNTS, DRIVER_EXPERIENCE, FAQS } from "@/lib/calculators/trucking-insurance";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function TruckingInsuranceCalculatorPage() {
    const [truckType, setTruckType] = useState("");
    const [numTrucks, setNumTrucks] = useState(1);
    const [radius, setRadius] = useState("");
    const [cargoType, setCargoType] = useState("");
    const [experience, setExperience] = useState("");
    const [includePhysical, setIncludePhysical] = useState(true);
    const [includeBobtail, setIncludeBobtail] = useState(false);
    const [result, setResult] = useState<null | { annual: number; perTruck: number; breakdown: any[] }>(null);

    const calculatePremium = () => {
        const truck = TRUCK_TYPES.find(t => t.id === truckType);
        const radiusData = OPERATING_RADIUS.find(r => r.id === radius);
        const cargo = CARGO_TYPES.find(c => c.id === cargoType);
        const exp = DRIVER_EXPERIENCE.find(e => e.years === experience);
        const fleet = FLEET_DISCOUNTS.find(f => numTrucks >= f.min && numTrucks <= f.max);

        if (!truck || !radiusData || !cargo || !exp) return;

        // Base calculation per truck
        let basePremium = truck.basePremium;

        // Apply factors
        basePremium *= radiusData.factor;
        basePremium *= cargo.riskFactor;
        basePremium *= exp.factor;

        // Add mandatory coverages
        const liabilityCoverage = COVERAGE_TYPES.find(c => c.id === "liability");
        const cargoCoverage = COVERAGE_TYPES.find(c => c.id === "cargo");
        basePremium += cargoCoverage?.avgPremium || 0;

        // Optional coverages
        if (includePhysical) {
            const physical = COVERAGE_TYPES.find(c => c.id === "physical");
            basePremium += physical?.avgPremium || 0;
        }
        if (includeBobtail) {
            const bobtail = COVERAGE_TYPES.find(c => c.id === "bobtail");
            basePremium += bobtail?.avgPremium || 0;
        }

        // Fleet discount
        const discount = fleet?.discount || 0;
        const perTruck = basePremium * (1 - discount);
        const annual = perTruck * numTrucks;

        const breakdown = [
            { label: "Truck Type", value: truck.name, cost: `$${truck.basePremium.toLocaleString()}` },
            { label: "Operating Radius", value: radiusData.name, cost: `×${radiusData.factor}` },
            { label: "Cargo Type", value: cargo.name, cost: `×${cargo.riskFactor}` },
            { label: "Driver Experience", value: `${experience} years`, cost: `×${exp.factor}` },
            { label: "Fleet Discount", value: fleet?.tier || "None", cost: `-${(discount * 100).toFixed(0)}%` },
            { label: "Number of Trucks", value: `${numTrucks}`, cost: `×${numTrucks}` },
        ];

        setResult({ annual, perTruck, breakdown });
    };

    return (
        <>
            {/* Header */}
            <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80">
                        <Calculator className="w-6 h-6 text-blue-500" />
                        <span className="text-lg font-bold text-white">MySmartCalculators</span>
                    </Link>
                    <Link href="/trucking-insurance" className="text-slate-400 hover:text-white text-sm">
                         Back to Overview
                    </Link>
                </div>
            </header>

            {/* Calculator */}
            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
                            <Truck className="w-4 h-4 text-blue-400" />
                            <span className="text-sm text-blue-300">{SITE.year} Calculator</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">Trucking Insurance Calculator</h1>
                        <p className="text-slate-400">Get an instant estimate for your commercial trucking insurance</p>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Truck Type */}
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Truck Type</label>
                                <select
                                    value={truckType}
                                    onChange={(e) => setTruckType(e.target.value)}
                                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white"
                                >
                                    <option value="">Select truck type...</option>
                                    {TRUCK_TYPES.map((type) => (
                                        <option key={type.id} value={type.id}>{type.name}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Number of Trucks */}
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Number of Trucks</label>
                                <input
                                    type="number"
                                    min="1"
                                    max="200"
                                    value={numTrucks}
                                    onChange={(e) => setNumTrucks(parseInt(e.target.value) || 1)}
                                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white"
                                />
                            </div>

                            {/* Operating Radius */}
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Operating Radius</label>
                                <select
                                    value={radius}
                                    onChange={(e) => setRadius(e.target.value)}
                                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white"
                                >
                                    <option value="">Select radius...</option>
                                    {OPERATING_RADIUS.map((r) => (
                                        <option key={r.id} value={r.id}>{r.name}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Cargo Type */}
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Primary Cargo Type</label>
                                <select
                                    value={cargoType}
                                    onChange={(e) => setCargoType(e.target.value)}
                                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white"
                                >
                                    <option value="">Select cargo...</option>
                                    {CARGO_TYPES.map((c) => (
                                        <option key={c.id} value={c.id}>{c.name}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Driver Experience */}
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Average Driver Experience</label>
                                <select
                                    value={experience}
                                    onChange={(e) => setExperience(e.target.value)}
                                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white"
                                >
                                    <option value="">Select experience...</option>
                                    {DRIVER_EXPERIENCE.map((exp) => (
                                        <option key={exp.years} value={exp.years}>{exp.years} years - {exp.description}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Optional Coverage */}
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Optional Coverage</label>
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            checked={includePhysical}
                                            onChange={(e) => setIncludePhysical(e.target.checked)}
                                            className="rounded bg-slate-700 border-slate-600"
                                        />
                                        <span className="text-slate-300">Physical Damage ($3,500/yr)</span>
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            checked={includeBobtail}
                                            onChange={(e) => setIncludeBobtail(e.target.checked)}
                                            className="rounded bg-slate-700 border-slate-600"
                                        />
                                        <span className="text-slate-300">Bobtail Coverage ($800/yr)</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={calculatePremium}
                            disabled={!truckType || !radius || !cargoType || !experience}
                            className="w-full mt-6 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors"
                        >
                            <DollarSign className="w-5 h-5" />
                            Calculate Premium
                        </button>
                    </div>

                    {/* Results */}
                    {result && (
                        <div className="bg-blue-900/30 border border-blue-500/50 rounded-xl p-6 mb-8">
                            <h2 className="text-xl font-bold text-white mb-4">Estimated Annual Premium</h2>
                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-3xl font-bold text-blue-400">${result.annual.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">Total Annual Premium</div>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4 text-center">
                                    <div className="text-3xl font-bold text-white">${result.perTruck.toLocaleString()}</div>
                                    <div className="text-sm text-slate-400">Per Truck/Year</div>
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-3">Premium Breakdown</h3>
                            <div className="space-y-2">
                                {result.breakdown.map((item, index) => (
                                    <div key={index} className="flex justify-between text-sm">
                                        <span className="text-slate-400">{item.label}: {item.value}</span>
                                        <span className="text-blue-300">{item.cost}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-xs text-slate-500 mt-4">*Estimates based on 2026 FMCSA and NAIC industry averages</p>
                        </div>
                    )}

                    <LegalDisclaimer category="insurance" />
                </div>
            </section>

            {/* FAQs */}
            <section className="py-16 px-4 bg-slate-800/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {FAQS.map((faq, index) => (
                            <details key={index} className="group bg-slate-800 border border-slate-700 rounded-xl">
                                <summary className="flex items-center justify-between p-6 cursor-pointer">
                                    <span className="font-medium text-white">{faq.question}</span>
                                    <ArrowRight className="w-5 h-5 text-slate-400 group-open:rotate-90 transition-transform" />
                                </summary>
                                <div className="px-6 pb-6 text-slate-300">{faq.answer}</div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-800 border-t border-slate-700 py-8">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <p className="text-sm text-slate-500">© {SITE.year} MySmartCalculators. Data from FMCSA, NAIC.</p>
                </div>
            </footer>
        
            {/* FAQPage Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: [
                            {
                                "@type": "Question",
                                name: "How accurate is the trucking insurance calculator?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "This calculator provides estimates based on 2026 data and standard formulas. Results may vary based on individual circumstances."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Is this trucking insurance calculator free to use?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, this calculator is completely free. No registration or personal information required."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "How often is the trucking insurance data updated?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "We update our calculator data regularly to reflect current 2026 rates and regulations."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Can I rely on these trucking insurance results for decisions?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "This calculator provides estimates for educational purposes. For important decisions, please consult with a qualified professional."
                                }
                            }
                        ]
                    })
                }}
            />
        </>
    );
}
