import Link from "next/link";
import { Calculator, Scale, Heart, DollarSign, Shield, ChevronRight } from "lucide-react";

// Calculator categories with their calculators
const CATEGORIES = {
  legal: {
    name: "Legal & Injury Calculators",
    icon: Scale,
    color: "amber",
    calculators: [
      { id: "car-accident", name: "Car Accident" },
      { id: "truck-accident", name: "Truck Accident" },
      { id: "motorcycle-accident", name: "Motorcycle Accident" },
      { id: "slip-and-fall", name: "Slip and Fall" },
      { id: "workers-comp", name: "Workers' Comp" },
      { id: "wrongful-death", name: "Wrongful Death" },
      { id: "malpractice", name: "Medical Malpractice" },
      { id: "dog-bite", name: "Dog Bite" },
      { id: "nursing-home", name: "Nursing Home" },
      { id: "birth-injury", name: "Birth Injury" },
      { id: "spinal-cord", name: "Spinal Cord" },
      { id: "tbi", name: "TBI" },
      { id: "burn-injury", name: "Burn Injury" },
      { id: "whiplash", name: "Whiplash" },
      { id: "mesothelioma", name: "Mesothelioma" },
      { id: "asbestos", name: "Asbestos" },
      { id: "product-liability", name: "Product Liability" },
      { id: "crane", name: "Crane Injury" },
      { id: "scaffolding", name: "Scaffolding" },
      { id: "welding", name: "Welding Injury" },
      { id: "pipeline", name: "Pipeline" },
      { id: "refinery", name: "Refinery" },
      { id: "mining-injury", name: "Mining Injury" },
      { id: "factory-injury", name: "Factory Injury" },
      { id: "forklift", name: "Forklift" },
      { id: "explosion", name: "Explosion" },
      { id: "gas-explosion", name: "Gas Explosion" },
      { id: "chemical-burn", name: "Chemical Burn" },
      { id: "benzene", name: "Benzene" },
      { id: "electrocution", name: "Electrocution" },
    ],
  },
  finance: {
    name: "Finance & Tax Calculators",
    icon: DollarSign,
    color: "emerald",
    calculators: [
      { id: "mortgage", name: "Mortgage" },
      { id: "loan-payoff", name: "Loan Payoff" },
      { id: "refinance", name: "Refinance" },
      { id: "heloc", name: "HELOC" },
      { id: "home-afford", name: "Home Affordability" },
      { id: "down-payment", name: "Down Payment" },
      { id: "closing-cost", name: "Closing Cost" },
      { id: "pmi", name: "PMI" },
      { id: "dti", name: "DTI" },
      { id: "tax", name: "Income Tax" },
      { id: "capital-gains", name: "Capital Gains" },
      { id: "estate-tax", name: "Estate Tax" },
      { id: "crypto-tax", name: "Crypto Tax" },
      { id: "self-employment", name: "Self Employment" },
      { id: "retirement", name: "Retirement" },
      { id: "401k", name: "401k" },
      { id: "roth-ira", name: "Roth IRA" },
      { id: "rmd", name: "RMD" },
      { id: "pension", name: "Pension" },
      { id: "annuity", name: "Annuity" },
      { id: "student-loan", name: "Student Loan" },
      { id: "fafsa", name: "FAFSA" },
      { id: "529", name: "529 Plan" },
      { id: "social-security", name: "Social Security" },
      { id: "ssdi", name: "SSDI" },
      { id: "unemployment", name: "Unemployment" },
      { id: "severance", name: "Severance" },
      { id: "overtime", name: "Overtime" },
      { id: "wage-garnishment", name: "Wage Garnishment" },
    ],
  },
  insurance: {
    name: "Insurance Calculators",
    icon: Shield,
    color: "blue",
    calculators: [
      { id: "auto-insurance", name: "Auto Insurance" },
      { id: "health-insurance", name: "Health Insurance" },
      { id: "life-insurance", name: "Life Insurance" },
      { id: "renters-insurance", name: "Renters Insurance" },
      { id: "pet-insurance", name: "Pet Insurance" },
      { id: "boat-insurance", name: "Boat Insurance" },
      { id: "umbrella-insurance", name: "Umbrella Insurance" },
      { id: "sr22", name: "SR-22" },
    ],
  },
  family: {
    name: "Family & Support Calculators",
    icon: Heart,
    color: "rose",
    calculators: [
      { id: "child-support", name: "Child Support" },
      { id: "alimony", name: "Alimony" },
      { id: "divorce", name: "Divorce" },
      { id: "property-division", name: "Property Division" },
    ],
  },
};

const colorClasses = {
  amber: { bg: "bg-amber-500/10", border: "border-amber-500/30", text: "text-amber-400", hover: "hover:border-amber-500/60" },
  emerald: { bg: "bg-emerald-500/10", border: "border-emerald-500/30", text: "text-emerald-400", hover: "hover:border-emerald-500/60" },
  blue: { bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-400", hover: "hover:border-blue-500/60" },
  rose: { bg: "bg-rose-500/10", border: "border-rose-500/30", text: "text-rose-400", hover: "hover:border-rose-500/60" },
};

export default function HomePage() {
  const totalCalculators = Object.values(CATEGORIES).reduce((sum, cat) => sum + cat.calculators.length, 0);

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calculator className="w-7 h-7 text-amber-500" />
            <span className="text-xl font-bold text-white">MySmartCalculators</span>
          </div>
          <span className="text-xs text-slate-400 bg-slate-700 px-3 py-1 rounded-full">
            {totalCalculators}+ Calculators
          </span>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-slate-900 to-blue-900/20" />
        <div className="relative max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Free Online <span className="text-amber-400">Calculators</span>
          </h1>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            100+ professional calculators for legal settlements, personal injury claims,
            mortgage, taxes, insurance, and more. Updated for 2026.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#legal" className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-all">
              Legal Calculators
            </Link>
            <Link href="#finance" className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold transition-all">
              Finance Calculators
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <main className="max-w-7xl mx-auto px-4 py-16 space-y-16">
        {Object.entries(CATEGORIES).map(([key, category]) => {
          const IconComponent = category.icon;
          const colors = colorClasses[category.color as keyof typeof colorClasses];

          return (
            <section key={key} id={key}>
              <div className="flex items-center gap-3 mb-8">
                <div className={`p-3 rounded-lg ${colors.bg}`}>
                  <IconComponent className={`w-6 h-6 ${colors.text}`} />
                </div>
                <h2 className="text-2xl font-bold text-white">{category.name}</h2>
                <span className="text-sm text-slate-400">({category.calculators.length})</span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {category.calculators.map((calc) => (
                  <Link
                    key={calc.id}
                    href={`/${calc.id}`}
                    className={`group bg-slate-800 border ${colors.border} rounded-lg p-4 ${colors.hover} transition-all`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-white group-hover:text-amber-400 font-medium text-sm">
                        {calc.name}
                      </span>
                      <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-colors" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Calculator className="w-6 h-6 text-amber-500" />
              <span className="text-lg font-bold text-white">MySmartCalculators</span>
            </div>
            <p className="text-sm text-slate-400 text-center">
              Free online calculators for legal, finance, and insurance calculations.
              For informational purposes only.
            </p>
            <p className="text-sm text-slate-500">© 2026 MySmartCalculators</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
