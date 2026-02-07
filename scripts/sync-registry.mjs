import fs from 'fs';
import path from 'path';

const LIB_DIR = 'lib/calculators';
const APP_DIR = 'app/(calculators)';
const REGISTRY_FILE = 'lib/registry/calculators.ts';

function extractMetadata(id) {
    const filePath = path.join(LIB_DIR, `${id}.ts`);
    if (!fs.existsSync(filePath)) return null;

    const content = fs.readFileSync(filePath, 'utf8');

    // Extract SITE.name
    const nameMatch = content.match(/name:\s*["'](.*?)["']/);
    const name = nameMatch ? nameMatch[1] : id.charAt(0).toUpperCase() + id.slice(1).replace(/-/g, ' ');

    // Extract SITE.description
    const descMatch = content.match(/description:\s*["'](.*?)["']/);
    const description = descMatch ? descMatch[1] : `Precision ${name} analyzer for the 2026 market.`;

    // Guess category from folder or content
    let category = 'general';
    if (content.includes('health') || content.includes('medical') || id.includes('medical')) category = 'health';
    if (content.includes('finance') || content.includes('loan') || content.includes('tax')) category = 'finance';
    if (content.includes('legal') || content.includes('lawsuit') || content.includes('settlement')) category = 'legal';
    if (content.includes('tax')) category = 'tax';

    return { id, name, description, category };
}

function sync() {
    console.log("🔄 Starting Registry Sync...");

    if (!fs.existsSync(APP_DIR)) {
        console.error("Error: app/(calculators) not found.");
        return;
    }

    const folders = fs.readdirSync(APP_DIR).filter(f =>
        fs.lstatSync(path.join(APP_DIR, f)).isDirectory() && f !== 'category'
    );

    const registry = {};
    let count = 0;

    for (const id of folders) {
        const meta = extractMetadata(id);
        if (meta) {
            registry[id] = {
                ...meta,
                tier: 2,
                color: meta.category === 'health' ? 'emerald-500' :
                    meta.category === 'finance' ? 'blue-500' :
                        meta.category === 'legal' ? 'rose-500' : 'slate-500',
                icon: meta.category === 'health' ? 'activity' :
                    meta.category === 'finance' ? 'landmark' :
                        meta.category === 'legal' ? 'gavel' : 'calculator'
            };
            count++;
        }
    }

    const output = `/**
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

export const CALCULATOR_REGISTRY: Record<string, CalculatorConfig> = ${JSON.stringify(registry, null, 4)};

export function getCalculatorMeta(id: string) {
    const config = CALCULATOR_REGISTRY[id];
    
    if (!config) {
        return {
            title: \`\${id.charAt(0).toUpperCase() + id.slice(1).replace(/-/g, ' ')} Calculator | 2026 Audit\`,
            description: \`Precision \${id} calculation for the 2026 market. Free clinical-grade health and finance metrics.\`,
            canonical: \`https://mysmartcalculators.com/\${id}\`,
        };
    }

    return {
        title: \`\${config.name} | S-Class 2026 Precision Audit\`,
        description: config.description,
        canonical: \`https://mysmartcalculators.com/\${config.id}\`,
    };
}
`;

    fs.writeFileSync(REGISTRY_FILE, output);
    console.log(`\n✅ Success. ${count} calculators synchronized into the Registry.`);
}

sync();
