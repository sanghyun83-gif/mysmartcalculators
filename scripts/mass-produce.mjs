import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');

// Color Database (Inference Engine)
const COLOR_MAP = {
    "rose-500": { rgb: "244, 63, 94", glow: "rgba(244, 63, 94, 0.15)" },
    "emerald-500": { rgb: "16, 185, 129", glow: "rgba(16, 185, 129, 0.15)" },
    "blue-500": { rgb: "59, 130, 246", glow: "rgba(59, 130, 246, 0.15)" },
    "amber-500": { rgb: "245, 158, 11", glow: "rgba(245, 158, 11, 0.15)" },
    "violet-500": { rgb: "139, 92, 246", glow: "rgba(139, 92, 246, 0.15)" },
    "cyan-500": { rgb: "6, 182, 212", glow: "rgba(6, 182, 212, 0.15)" }
};

const CONFIG_PATH = path.join(rootDir, 'scripts', 'factory-config.json');
const SOURCE_DIR = path.join(rootDir, 'app', '(calculators)', 'truck-accident');
const LIB_SOURCE = path.join(rootDir, 'lib', 'calculators', 'truck-accident.ts');

const config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf-8'));

function copyRecursive(src, dest, replacements) {
    const stats = fs.statSync(src);
    if (stats.isDirectory()) {
        if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
        fs.readdirSync(src).forEach(child => {
            copyRecursive(path.join(src, child), path.join(dest, child), replacements);
        });
    } else {
        let content = fs.readFileSync(src, 'utf-8');
        replacements.forEach(r => {
            content = content.replace(r.search, r.replace);
        });
        fs.writeFileSync(dest, content);
    }
}

config.forEach(item => {
    console.log(`🏭 Generating S-Class Unit: ${item.name} (${item.id})...`);

    const colorData = COLOR_MAP[item.color] || COLOR_MAP["rose-500"];
    const targetDir = path.join(rootDir, 'app', '(calculators)', item.id);
    const libTarget = path.join(rootDir, 'lib', 'calculators', `${item.id}.ts`);

    const replacements = [
        { search: /\/truck-accident/g, replace: `/${item.id}` },
        { search: /@\/lib\/calculators\/truck-accident/g, replace: `@/lib/calculators/${item.id}` },
        { search: /TruckMaster AI/g, replace: item.brand },
        { search: /Truck Accident/g, replace: item.name },
        { search: /Truck/g, replace: item.icon },
        { search: /red-500/g, replace: item.color },
        { search: /red-400/g, replace: item.accentText },
        { search: /'239, 68, 68'/g, replace: `'${colorData.rgb}'` }, // RGB Sync
        { search: /rgba\(239, 68, 68, 0\.15\)/g, replace: colorData.glow }, // Glow Sync
        { search: /"Live 2026 Actuarial Engine"/g, replace: `"${item.badge}"` },
        { search: /"The world's most advanced AI-powered truck accident settlement calculator. Calibrated for 2026 actuarial data and jurisdictional liability rules."/g, replace: `"${item.description}"` },
        { search: /Precision <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-red-600">Truck Accident<\/span> Valuations\./g, replace: `Intelligence <span className="text-transparent bg-clip-text bg-gradient-to-r from-${item.color} via-orange-400 to-amber-600">${item.name}<\/span> Audit.` }
    ];

    // 1. App Route Generation
    copyRecursive(SOURCE_DIR, targetDir, replacements);

    // 2. Logic Injection
    let libContent = fs.readFileSync(LIB_SOURCE, 'utf-8');
    const libReplacements = [
        { search: /Truck Accident/g, replace: item.name },
        { search: /truck-accident/g, replace: item.id },
        { search: /Truck/g, replace: item.icon }
    ];
    libReplacements.forEach(r => { libContent = libContent.replace(r.search, r.replace); });
    fs.writeFileSync(libTarget, libContent);

    console.log(`✅ ${item.id} Unit Purified & Ready.`);
});
