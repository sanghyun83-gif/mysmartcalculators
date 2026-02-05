/**
 * Phase 6: Remove FAQPage Injections Script
 * 
 * Removes the broken FAQPage injections from calculator files.
 * Run this before re-injecting with the fixed script.
 * 
 * Run: node scripts/remove-faqpage-injections.js
 */

const fs = require('fs');
const path = require('path');

const CALCULATORS_DIR = path.join(__dirname, '../app/(calculators)');
const RESULTS = require('./faqpage-injection-results.json');

let removedCount = 0;
let errorCount = 0;

console.log('\n=== Removing FAQPage Injections ===\n');

// Process all successfully injected files
const allCalcs = [...RESULTS.success];
console.log(`Target: ${allCalcs.length} files to restore\n`);

allCalcs.forEach((calcName, index) => {
    const calcDir = path.join(CALCULATORS_DIR, calcName);

    // Try both page.tsx and CalculatorClient.tsx
    const paths = [
        path.join(calcDir, 'calculator', 'page.tsx'),
        path.join(calcDir, 'calculator', 'CalculatorClient.tsx')
    ];

    for (const filePath of paths) {
        if (!fs.existsSync(filePath)) continue;

        let content = fs.readFileSync(filePath, 'utf-8');

        if (!content.includes('FAQPage Schema - Auto-injected')) {
            continue;
        }

        // Remove the injected FAQPage script block
        // Pattern: from "{/* FAQPage Schema - Auto-injected by Phase 6 */}" to "</script>"
        const pattern = /\s*\{\/\* FAQPage Schema - Auto-injected by Phase 6 \*\/\}[\s\S]*?<\/script>\s*\/>/;

        if (pattern.test(content)) {
            content = content.replace(pattern, '');
            fs.writeFileSync(filePath, content);
            console.log(`✅ [${index + 1}] Removed: ${calcName}`);
            removedCount++;
        } else {
            // Try alternate pattern
            const altPattern = /\n\s*\{\/\* FAQPage Schema[\s\S]*?\/>\s*\n/;
            if (altPattern.test(content)) {
                content = content.replace(altPattern, '\n');
                fs.writeFileSync(filePath, content);
                console.log(`✅ [${index + 1}] Removed (alt): ${calcName}`);
                removedCount++;
            } else {
                console.log(`⚠️ [${index + 1}] Pattern not found: ${calcName}`);
                errorCount++;
            }
        }
        break;
    }
});

console.log('\n=== Removal Complete ===');
console.log(`✅ Removed: ${removedCount}`);
console.log(`⚠️ Errors: ${errorCount}`);
