/**
 * Phase 6: 2026 Keyword Audit Script
 * 
 * This script scans all lib/calculators/*.ts files and identifies
 * which ones are missing `year: 2026` in their SITE config.
 * 
 * Run: node scripts/audit-2026-keyword.js
 */

const fs = require('fs');
const path = require('path');

const CALCULATORS_LIB_DIR = path.join(__dirname, '../lib/calculators');

function scanFor2026Keyword() {
    const results = {
        hasYear: [],
        missingYear: []
    };

    // Get all .ts files in lib/calculators
    const calcFiles = fs.readdirSync(CALCULATORS_LIB_DIR).filter(file =>
        file.endsWith('.ts') && !file.includes('index')
    );

    calcFiles.forEach(file => {
        const filePath = path.join(CALCULATORS_LIB_DIR, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        const calcName = file.replace('.ts', '');

        // Check for year: 2026 pattern
        if (content.includes('year: 2026') || content.includes('year:2026')) {
            results.hasYear.push(calcName);
        } else {
            results.missingYear.push(calcName);
        }
    });

    return results;
}

// Execute
const results = scanFor2026Keyword();

console.log('\n=== Phase 6: 2026 Keyword Audit ===\n');
console.log(`✅ Has year: 2026: ${results.hasYear.length}`);
console.log(`❌ Missing year: 2026: ${results.missingYear.length}`);
console.log(`\n📊 Coverage: ${((results.hasYear.length / (results.hasYear.length + results.missingYear.length)) * 100).toFixed(1)}%`);

console.log('\n--- Missing year: 2026 (First 20) ---');
results.missingYear.slice(0, 20).forEach((calc, i) => {
    console.log(`${i + 1}. ${calc}`);
});

if (results.missingYear.length > 20) {
    console.log(`... and ${results.missingYear.length - 20} more`);
}

// Write full list to file
fs.writeFileSync(
    path.join(__dirname, '2026-keyword-missing.json'),
    JSON.stringify(results.missingYear, null, 2)
);
console.log('\n✅ Full list saved to scripts/2026-keyword-missing.json');
