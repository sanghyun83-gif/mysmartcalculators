/**
 * Phase 6: 2026 Keyword Injection Script
 * 
 * This script adds `year: 2026` to SITE configs in lib/calculators/*.ts
 * for calculators that are missing this keyword.
 * 
 * Run: node scripts/inject-2026-keyword.js
 */

const fs = require('fs');
const path = require('path');

const CALCULATORS_LIB_DIR = path.join(__dirname, '../lib/calculators');
const MISSING_LIST = require('./2026-keyword-missing.json');

let injectedCount = 0;
let errorCount = 0;

MISSING_LIST.forEach(calcName => {
    const filePath = path.join(CALCULATORS_LIB_DIR, `${calcName}.ts`);

    if (!fs.existsSync(filePath)) {
        console.log(`⚠️ File not found: ${calcName}.ts`);
        errorCount++;
        return;
    }

    let content = fs.readFileSync(filePath, 'utf-8');

    // Pattern 1: SITE = { ... } - add year after name
    // Look for: name: "..." and add year: 2026 after it
    const sitePattern = /export\s+const\s+SITE\s*=\s*\{([^}]+)\}/s;
    const match = content.match(sitePattern);

    if (match) {
        const siteContent = match[1];

        // Check if year already exists (shouldn't, but safety check)
        if (siteContent.includes('year:') || siteContent.includes('year :')) {
            console.log(`⏭️ Skip (already has year): ${calcName}`);
            return;
        }

        // Find the name property and add year after it
        const namePattern = /(name:\s*["'][^"']+["'],?)/;
        if (siteContent.match(namePattern)) {
            const newSiteContent = siteContent.replace(
                namePattern,
                '$1\n    year: 2026,'
            );
            content = content.replace(siteContent, newSiteContent);

            fs.writeFileSync(filePath, content);
            console.log(`✅ Injected: ${calcName}`);
            injectedCount++;
        } else {
            console.log(`⚠️ No name property found: ${calcName}`);
            errorCount++;
        }
    } else {
        console.log(`⚠️ No SITE config found: ${calcName}`);
        errorCount++;
    }
});

console.log('\n=== 2026 Keyword Injection Complete ===');
console.log(`✅ Injected: ${injectedCount}`);
console.log(`⚠️ Errors/Skipped: ${errorCount}`);
console.log(`📊 New Coverage: ${((205 + injectedCount) / 300 * 100).toFixed(1)}%`);
