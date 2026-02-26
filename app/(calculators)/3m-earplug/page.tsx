import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";

const id = "3m-earplug";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: meta?.title,
  description: meta?.description,
  alternates: {
    canonical: meta?.canonical,
  }
};

const HubClient = dynamic(
  () => import("./HubClient"),
  {
    ssr: true,
    loading: () => <div className="min-h-screen bg-slate-950" />
  }
);

export default function Calc3mearplugPage() {
  return (
    <>
      <HubClient />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "SoftwareApplication",
          "name": "2026 3M Earplug Settlement Calculator",
          "operatingSystem": "All", "applicationCategory": "LegalApplication",
          "description": "2026 expert 3M Combat Arms earplug settlement auditor with MDL 2885 data, VA audiology benchmarks, and tiered payout records.",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
        })
      }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "What is the average 3M earplug settlement in 2026?", "acceptedAnswer": { "@type": "Answer", "text": "3M's $6.01B global settlement established tiered payouts: Tier 1 (severe bilateral tinnitus + hearing loss) circa $55,000-$300,000+, depending on audiometric severity and military service documentation." } },
            { "@type": "Question", "name": "Is the 3M earplug settlement still open?", "acceptedAnswer": { "@type": "Answer", "text": "The claims filing process under the MDL 2885 settlement is ongoing. Veterans with confirmed CAEv2 earplug use and documented hearing damage should file claims before the administrative deadline." } }
          ]
        })
      }} />
    </>
  );
}

