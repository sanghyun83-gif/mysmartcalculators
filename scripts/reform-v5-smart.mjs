import fs from 'fs';
import path from 'path';

const CALC_DIR = 'app/(calculators)';

const PAGE_TEMPLATE = (id) => `import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";

const id = "${id}";
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

export default function Calc${id.charAt(0).toUpperCase() + id.slice(1).replace(/-/g, '')}Page() {
  return <HubClient />;
}
`;

function reform() {
    console.log("🚀 Starting SMART V5.0 Reform Flow...");

    if (!fs.existsSync(CALC_DIR)) {
        console.error(`Error: ${CALC_DIR} not found.`);
        return;
    }

    const folders = fs.readdirSync(CALC_DIR).filter(f =>
        fs.lstatSync(path.join(CALC_DIR, f)).isDirectory()
    );

    let splitCount = 0;
    let standardizedCount = 0;

    for (const id of folders) {
        const pagePath = path.join(CALC_DIR, id, 'page.tsx');
        const hubPath = path.join(CALC_DIR, id, 'HubClient.tsx');

        if (!fs.existsSync(pagePath)) continue;

        const hasHubClient = fs.existsSync(hubPath);
        const pageContent = fs.readFileSync(pagePath, 'utf8');

        // CASE A: Already refactored (Duality)
        if (hasHubClient) {
            console.log(`[STANDARDIZE] ${id} - Already refactored. Updating page.tsx wrapper...`);
            fs.writeFileSync(pagePath, PAGE_TEMPLATE(id));
            standardizedCount++;
        }
        // CASE B: Legacy (Mono)
        else {
            console.log(`[SPLIT] ${id} - Legacy mono-file. Creating HubClient...`);

            // Normalize component name to HubClient
            const hubCode = pageContent
                .replace(/export default function .*?\(\)/, 'export default function HubClient()')
                .replace(/export function .*?\(\)/, 'export default function HubClient()');

            fs.writeFileSync(hubPath, hubCode);
            fs.writeFileSync(pagePath, PAGE_TEMPLATE(id));
            splitCount++;
        }
    }

    console.log(`\n✅ REFORM SUCCESS!`);
    console.log(`- New Splits: ${splitCount}`);
    console.log(`- Standardized: ${standardizedCount}`);
    console.log(`- Total V5 Apps: ${splitCount + standardizedCount}`);
}

reform();
