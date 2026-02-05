/**
 * add-homepage-disclaimer.js
 * Adds LegalDisclaimer to calculator homepages (not /calculator subfolders)
 * Run: node scripts/add-homepage-disclaimer.js
 */

const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, '..', 'app');

// Excluded directories (not calculators)
const EXCLUDED = ['api', 'contact', 'privacy', 'about', 'terms', 'accessibility', 'fonts', 'not-found'];

// Category keywords for disclaimer type
const categoryKeywords = {
    legal: ['injury', 'accident', 'lawsuit', 'settlement', 'death', 'malpractice', 'tort', 'abuse', 'asbestos', 'mesothelioma', 'wrongful', 'whiplash'],
    medical: ['cancer', 'hip', 'hernia', 'drug', 'fda', 'implant', 'xarelto', 'zantac', 'ozempic', 'disease', 'lung', 'blood'],
    insurance: ['insurance', 'premium', 'workers-comp', 'commercial', 'fleet', 'cyber', 'epli', 'business'],
    financial: ['alimony', 'child-support', 'retirement', 'tax', 'estate', 'loan', 'mortgage', 'savings']
};

function getDisclaimerCategory(calcName) {
    if (!calcName) return 'general';
    const name = calcName.toLowerCase();

    for (const [cat, keywords] of Object.entries(categoryKeywords)) {
        if (keywords.some(kw => name.includes(kw))) {
            return cat;
        }
    }
    return 'legal';
}

// Check if file is a homepage with calculator functionality
function isHomepageCalculator(content) {
    // Must have useState (client component with state)
    if (!content.includes('useState')) return false;

    // Must have calculate function or result display
    if (!content.includes('result') && !content.includes('Result') &&
        !content.includes('calculate') && !content.includes('Calculate')) {
        return false;
    }

    return true;
}

// Check if already has LegalDisclaimer
function hasDisclaimer(content) {
    return content.includes('LegalDisclaimer') ||
        content.includes('Legal Disclaimer') ||
        content.includes('legal-disclaimer');
}

// Add import if not present
function addImport(content) {
    if (content.includes("from '@/components/LegalDisclaimer'") ||
        content.includes('from "@/components/LegalDisclaimer"')) {
        return content;
    }

    const importMatch = content.match(/^(import.*['"].*['"];?\r?\n)+/m);
    if (importMatch) {
        const insertPos = importMatch.index + importMatch[0].length;
        return content.slice(0, insertPos) +
            `import { LegalDisclaimer } from "@/components/LegalDisclaimer";\n` +
            content.slice(insertPos);
    }

    return content;
}

// Add disclaimer before footer
function addDisclaimerComponent(content, category) {
    // Find footer section
    const footerMatch = content.match(/<footer className/);
    if (footerMatch && footerMatch.index) {
        const insertPos = content.lastIndexOf('</section>', footerMatch.index);
        if (insertPos > -1) {
            // Check if already has disclaimer nearby
            const nearbyContent = content.slice(Math.max(0, insertPos - 500), insertPos);
            if (nearbyContent.includes('LegalDisclaimer') || nearbyContent.includes('Legal Disclaimer')) {
                return content;
            }

            return content.slice(0, insertPos) +
                `\n      <section className="max-w-4xl mx-auto px-4 py-4"><LegalDisclaimer category="${category}" /></section>\n` +
                content.slice(insertPos);
        }
    }

    return content;
}

// Find homepage calculators
function findHomepageCalculators() {
    const pages = [];

    const items = fs.readdirSync(APP_DIR, { withFileTypes: true });

    for (const item of items) {
        if (!item.isDirectory()) continue;
        if (EXCLUDED.includes(item.name)) continue;

        const calcDir = path.join(APP_DIR, item.name);
        const homepagePath = path.join(calcDir, 'page.tsx');
        const calculatorPath = path.join(calcDir, 'calculator', 'page.tsx');

        // Skip if has /calculator subfolder (already processed by other script)
        if (fs.existsSync(calculatorPath)) continue;

        // Check if homepage exists and has calculator
        if (fs.existsSync(homepagePath)) {
            const content = fs.readFileSync(homepagePath, 'utf8');
            if (isHomepageCalculator(content)) {
                pages.push({
                    path: homepagePath,
                    calcName: item.name,
                    category: getDisclaimerCategory(item.name)
                });
            }
        }
    }

    return pages;
}

// Process a single file
function processFile(pageInfo) {
    const { path: filePath, calcName, category } = pageInfo;

    try {
        let content = fs.readFileSync(filePath, 'utf8');

        if (hasDisclaimer(content)) {
            return { status: 'skipped', reason: 'already has disclaimer', path: filePath };
        }

        content = addImport(content);
        content = addDisclaimerComponent(content, category);

        fs.writeFileSync(filePath, content, 'utf8');

        return { status: 'modified', path: filePath, category };
    } catch (err) {
        return { status: 'error', error: err.message, path: filePath };
    }
}

// Main
function main() {
    console.log('🔍 Finding homepage calculators (without /calculator subfolder)...\n');

    const pages = findHomepageCalculators();
    console.log(`Found ${pages.length} homepage calculators\n`);

    const results = { modified: [], skipped: [], errors: [] };

    for (const page of pages) {
        const result = processFile(page);

        if (result.status === 'modified') {
            results.modified.push(result);
            console.log(`✅ Modified: ${page.calcName}/page.tsx (${result.category})`);
        } else if (result.status === 'skipped') {
            results.skipped.push(result);
            console.log(`⏭️  Skipped: ${page.calcName}/page.tsx`);
        } else {
            results.errors.push(result);
            console.log(`❌ Error: ${page.calcName}/page.tsx - ${result.error}`);
        }
    }

    console.log('\n📊 Summary:');
    console.log(`   Modified: ${results.modified.length}`);
    console.log(`   Skipped:  ${results.skipped.length}`);
    console.log(`   Errors:   ${results.errors.length}`);
}

main();
