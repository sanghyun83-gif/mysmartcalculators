/**
 * Phase 6 Day 2: Full 200 URL Indexing
 * ------------------------------------
 * 1. Remaining 13 calculator pages (from yesterday)
 * 2. Hub pages (~100)
 * 3. Sub-pages (guides, etc)
 */

const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

const KEY_FILE = path.join(__dirname, '../../service-account-2.json');
const BASE_URL = 'https://mysmartcalculators.com';
const CALC_DIR = path.join(__dirname, '../app/(calculators)');

// Get all calculator directories
const allCalcs = fs.readdirSync(CALC_DIR)
    .filter(f => fs.statSync(path.join(CALC_DIR, f)).isDirectory());

console.log(`📋 Found ${allCalcs.length} calculator directories\n`);

// Yesterday's indexed calculators (first 200 alphabetically)
const YESTERDAY_FILE = path.join(__dirname, 'faqpage-injection-v3-results.json');
const yesterdayCalcs = fs.existsSync(YESTERDAY_FILE)
    ? require(YESTERDAY_FILE).success.slice(0, 200)
    : [];

// Remaining calculator pages (not indexed yesterday)
const remainingCalcPages = allCalcs
    .filter(calc => !yesterdayCalcs.includes(calc))
    .filter(calc => fs.existsSync(path.join(CALC_DIR, calc, 'calculator')))
    .map(calc => `${BASE_URL}/${calc}/calculator`);

// Hub pages (all calculators)
const hubPages = allCalcs.map(calc => `${BASE_URL}/${calc}`);

// Sub-pages (guides, state-rates, etc)
const subPages = [];
allCalcs.forEach(calc => {
    const calcPath = path.join(CALC_DIR, calc);
    const subdirs = fs.readdirSync(calcPath)
        .filter(f => {
            const fullPath = path.join(calcPath, f);
            return fs.statSync(fullPath).isDirectory() &&
                f !== 'calculator' &&
                fs.existsSync(path.join(fullPath, 'page.tsx'));
        });
    subdirs.forEach(sub => {
        subPages.push(`${BASE_URL}/${calc}/${sub}`);
    });
});

// Combine and dedupe, prioritize: remaining calcs > hubs > subpages
const allUrls = [...new Set([
    ...remainingCalcPages,
    ...hubPages,
    ...subPages,
])].slice(0, 200);

console.log(`📊 URL Breakdown:`);
console.log(`   - Remaining Calculator Pages: ${remainingCalcPages.length}`);
console.log(`   - Hub Pages: ${hubPages.length}`);
console.log(`   - Sub-pages: ${subPages.length}`);
console.log(`   - Total to Index: ${allUrls.length}\n`);

async function runIndexing() {
    console.log(`🚀 Phase 6 Day 2: Indexing ${allUrls.length} URLs\n`);

    if (!fs.existsSync(KEY_FILE)) {
        console.error('❌ Error: service-account-2.json missing at:', KEY_FILE);
        process.exit(1);
    }

    const auth = new google.auth.GoogleAuth({
        keyFile: KEY_FILE,
        scopes: ['https://www.googleapis.com/auth/indexing'],
    });
    const indexing = google.indexing({ version: 'v3', auth });

    let success = 0, failed = 0;
    const startTime = Date.now();

    for (let i = 0; i < allUrls.length; i++) {
        const url = allUrls[i];
        try {
            await indexing.urlNotifications.publish({
                requestBody: { url, type: 'URL_UPDATED' }
            });
            console.log(`[${i + 1}/${allUrls.length}] ✅ ${url}`);
            success++;
        } catch (error) {
            console.error(`[${i + 1}/${allUrls.length}] ❌ ${url} -> ${error.message}`);
            failed++;
            if (error.message.includes('Quota exceeded')) {
                console.log('\n🔴 QUOTA EXCEEDED. Stopping.');
                break;
            }
        }
        await new Promise(r => setTimeout(r, 200));
    }

    const elapsed = Math.round((Date.now() - startTime) / 1000);

    console.log('\n=== Phase 6 Day 2 Complete ===');
    console.log(`✅ Success: ${success}`);
    console.log(`❌ Failed: ${failed}`);
    console.log(`⏱️ Time: ${elapsed}s`);
    console.log(`\n📊 Total Indexed (2 days): ${200 + success} URLs`);
}

runIndexing().catch(console.error);
