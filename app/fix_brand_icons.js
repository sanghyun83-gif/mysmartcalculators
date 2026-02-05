
const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '(calculators)');

function getDirectories(srcPath) {
    return fs.readdirSync(srcPath).filter(file => {
        return fs.statSync(path.join(srcPath, file)).isDirectory();
    });
}

// Convert "SomeIcon" to "some-icon" (kebab-case) or handle known icons
function toIconName(componentName) {
    if (componentName === 'Thermometer') return 'thermometer';
    if (componentName === 'Landmark') return 'landmark';
    if (componentName === 'Heart') return 'heart';
    if (componentName === 'LucideIcon') return 'calculator'; // Default fallback
    if (componentName === 'Calculator') return 'calculator';
    if (componentName === 'DollarSign') return 'dollar-sign';
    if (componentName === 'Activity') return 'activity';
    if (componentName === 'Home') return 'home';
    if (componentName === 'Truck') return 'truck';
    if (componentName === 'Gavel') return 'gavel';
    if (componentName === 'TrendingUp') return 'trending-up';
    if (componentName === 'Car') return 'car';
    if (componentName === 'Shield') return 'shield';
    if (componentName === 'Scale') return 'scale';
    if (componentName === 'Building') return 'building';
    if (componentName === 'PiggyBank') return 'piggy-bank';
    if (componentName === 'Coins') return 'coins';
    if (componentName === 'FileCheck') return 'file-check';
    if (componentName === 'Briefcase') return 'briefcase';
    if (componentName === 'Syringe') return 'syringe';
    if (componentName === 'Percent') return 'percent';
    if (componentName === 'PawPrint') return 'paw-print';
    if (componentName === 'Banknote') return 'banknote';
    if (componentName === 'Leaf') return 'leaf';
    if (componentName === 'Flame') return 'flame';

    // Generic auto-converter: Split CamelCase
    return componentName.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

function main() {
    const calcs = getDirectories(ROOT_DIR);
    let fixedCount = 0;

    console.log(`Scanning ${calcs.length} layouts for component props...`);

    calcs.forEach(calcName => {
        const calcPath = path.join(ROOT_DIR, calcName);
        const layoutPath = path.join(calcPath, 'layout.tsx');

        if (fs.existsSync(layoutPath)) {
            let content = fs.readFileSync(layoutPath, 'utf8');

            // Regex to find brandIcon={SomeIcon}
            const iconRegex = /brandIcon=\{([a-zA-Z0-9]+)\}/;
            const match = content.match(iconRegex);

            if (match) {
                const componentName = match[1];
                const iconString = toIconName(componentName);

                // 1. Replace prop
                content = content.replace(iconRegex, `brandIcon="${iconString}"`);

                // 2. Remove import
                // import { ..., ComponentName, ... } from "lucide-react";
                // This is a bit tricky with multi-imports. 
                // Simple approach: regex allow spaces.
                const importRegex = new RegExp(`(import\\s*{.*)\\b${componentName}\\b(.*}\\s*from\\s*"lucide-react";)`);

                // If it's the ONLY import: import { Icon } from ...
                const singleImportRegex = new RegExp(`import\\s*{\\s*${componentName}\\s*}\\s*from\\s*"lucide-react";?`);

                if (singleImportRegex.test(content)) {
                    content = content.replace(singleImportRegex, '');
                } else if (importRegex.test(content)) {
                    // Check if it has comma before or after
                    // Case 1: { Icon, Other } -> { Other } (remove Icon, )
                    // Case 2: { Other, Icon } -> { Other } (remove , Icon)
                    // Case 3: { Other, Icon, More } -> { Other, More } (remove Icon, )

                    // Easier: Just replace componentName with blank, then cleanup commas
                    content = content.replace(new RegExp(`\\b${componentName}\\b`), '');

                    // Clean up empty commas , , or { , or , }
                    // Note: Ideally, we parse AST, but for this blitz:
                    // We will leave the import mostly alone if it breaks syntax, but let's try strict regex
                    const commaCleanup = /import\s*{[\s,]*([a-zA-Z0-9,\s]+?)[\s,]*}\s*from\s*"lucide-react"/;
                    // Actually, let's keep it simple. If we replaced the prop, the unused import might just be a linter warning, 
                    // which doesn't break build usually, unless noUnusedLocals is true.
                    // TSC --noEmit might fail if unused variables are error.
                    // Let's rely on standard replace.
                }

                // Rough clean up of imports if he had multiple
                content = content.replace(/,\s*,/g, ',');
                content = content.replace(/{\s*,/g, '{');
                content = content.replace(/,\s*}/g, ' }');

                fs.writeFileSync(layoutPath, content, 'utf8');
                console.log(`[FIXED] ${calcName}: brandIcon={${componentName}} -> brandIcon="${iconString}"`);
                fixedCount++;
            }
        }
    });

    console.log(`\nTotal Layouts Fixed: ${fixedCount}`);
}

main();
