/**
 * Phase 6: FAQPage Schema Injection Audit Script
 * 
 * This script scans all calculator/page.tsx files and identifies
 * which ones are missing FAQPage JSON-LD schema.
 * 
 * Run: node scripts/audit-faqpage.js
 */

const fs = require('fs');
const path = require('path');

const CALCULATORS_DIR = path.join(__dirname, '../app/(calculators)');

function scanForFAQPage() {
    const results = {
        hasFAQ: [],
        missingFAQ: [],
        noCalculatorPage: []
    };
    
    // Get all calculator directories
    const calcDirs = fs.readdirSync(CALCULATORS_DIR).filter(dir => {
        const fullPath = path.join(CALCULATORS_DIR, dir);
        return fs.statSync(fullPath).isDirectory() && dir !== 'category';
    });
    
    calcDirs.forEach(calcDir => {
        const calculatorPagePath = path.join(CALCULATORS_DIR, calcDir, 'calculator', 'page.tsx');
        
        if (!fs.existsSync(calculatorPagePath)) {
            results.noCalculatorPage.push(calcDir);
            return;
        }
        
        const content = fs.readFileSync(calculatorPagePath, 'utf-8');
        
        if (content.includes('FAQPage') || content.includes('"@type": "FAQPage"')) {
            results.hasFAQ.push(calcDir);
        } else {
            results.missingFAQ.push(calcDir);
        }
    });
    
    return results;
}

// Execute
const results = scanForFAQPage();

console.log('\n=== Phase 6: FAQPage Schema Audit ===\n');
console.log(`✅ Has FAQPage: ${results.hasFAQ.length}`);
console.log(`❌ Missing FAQPage: ${results.missingFAQ.length}`);
console.log(`⚪ No calculator/page.tsx: ${results.noCalculatorPage.length}`);
console.log(`\n📊 Coverage: ${((results.hasFAQ.length / (results.hasFAQ.length + results.missingFAQ.length)) * 100).toFixed(1)}%`);

console.log('\n--- Missing FAQPage (First 20) ---');
results.missingFAQ.slice(0, 20).forEach((calc, i) => {
    console.log(`${i + 1}. ${calc}`);
});

if (results.missingFAQ.length > 20) {
    console.log(`... and ${results.missingFAQ.length - 20} more`);
}

// Write full list to file
fs.writeFileSync(
    path.join(__dirname, 'faqpage-missing.json'),
    JSON.stringify(results.missingFAQ, null, 2)
);
console.log('\n✅ Full list saved to scripts/faqpage-missing.json');
