/**
 * MySmartCalculators Force Indexing Script
 * -----------------------------------------
 * Push all calculator URLs to Google Indexing API
 * Uses same service account as hacksat.net
 */

const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

const KEY_FILE = path.join(__dirname, '../../service-account-2.json');
const BASE_URL = 'https://mysmartcalculators.com';

// ===== ALL CALCULATOR URLS (320+) =====

// Tier 1: High-Value Legal/Medical (Priority 1.0)
const tier1 = [
    '/truck-accident', '/car-accident', '/motorcycle-accident', '/slip-and-fall',
    '/workers-comp', '/wrongful-death', '/malpractice', '/dog-bite',
    '/nursing-home', '/birth-injury', '/spinal-cord', '/tbi', '/mesothelioma',
    '/ozempic', '/camp-lejeune', '/roundup', '/hernia-mesh', '/hip-implant',
];

// Tier 2: Finance (Priority 0.9)
const tier2 = [
    '/mortgage', '/401k-growth', '/roth-ira', '/social-security', '/ssdi',
    '/tax', '/capital-gains', '/estate-tax', '/student-loan', '/fafsa',
    '/dti', '/pmi', '/down-payment', '/closing-cost', '/heloc', '/refinance',
];

// Tier 3: Insurance (Priority 0.8)
const tier3 = [
    '/auto-insurance', '/health-insurance', '/life-insurance', '/pet-insurance',
    '/renters-insurance', '/umbrella-insurance', '/sr22', '/flood-insurance',
];

// Tier 4: Family (Priority 0.7)
const tier4 = [
    '/child-support', '/alimony', '/divorce', '/property-division',
];

// Tier 5: Category Hubs (Priority 0.9)
const categoryHubs = [
    '/category/legal', '/category/finance', '/category/insurance',
    '/category/medical', '/category/family', '/category/health',
];

// Tier 6: Medical Lawsuits (Priority 0.85)
const medicalLawsuits = [
    '/paragard', '/paraquat', '/talcum-powder', '/hair-relaxer', '/cpap',
    '/knee-implant', '/hernia-mesh', '/tepezza', '/depo-provera',
    '/3m-earplug', '/zantac', '/baby-formula', '/tylenol', '/elmiron',
];

// Tier 7: More Legal
const moreLegal = [
    '/construction-accident', '/pedestrian-accident', '/hit-and-run',
    '/drunk-driving', '/rideshare-accident', '/18-wheeler', '/boating-accident',
    '/train-accident', '/elevator-accident', '/food-poisoning',
];

// Tier 8: More Finance
const moreFinance = [
    '/retirement', '/pension', '/annuity', '/rmd', '/unemployment',
    '/severance', '/overtime', '/va-disability', '/disability', '/gi-bill',
    '/crypto-tax', '/self-employment', '/hsa', '/fsa', '/bonus-tax',
];

// Tier 9: More Insurance
const moreInsurance = [
    '/boat-insurance', '/rv-insurance', '/motorcycle-insurance',
    '/condo-insurance', '/earthquake-insurance', '/hurricane-insurance',
    '/wedding-insurance', '/travel-insurance', '/dental-insurance', '/vision-insurance',
];

// Core Pages
const corePages = ['/', '/about', '/contact', '/privacy', '/terms'];

// Combine first 200 (daily quota)
const batch1 = [
    ...corePages,
    ...categoryHubs,
    ...tier1,
    ...tier2,
    ...tier3,
    ...tier4,
    ...medicalLawsuits,
    ...moreLegal,
    ...moreFinance,
    ...moreInsurance,
];

const urlsToIndex = [...new Set(batch1)].slice(0, 200).map(p => `${BASE_URL}${p}`);

async function runIndexing() {
    console.log(`🚀 MySmartCalculators: Starting Force-Push of ${urlsToIndex.length} Priority URLs...`);
    console.log('📊 Breakdown:');
    console.log(`   - Core Pages: ${corePages.length}`);
    console.log(`   - Category Hubs: ${categoryHubs.length}`);
    console.log(`   - Tier 1 (Legal/Medical): ${tier1.length}`);
    console.log(`   - Tier 2 (Finance): ${tier2.length}`);
    console.log(`   - Tier 3 (Insurance): ${tier3.length}`);
    console.log(`   - Tier 4 (Family): ${tier4.length}`);
    console.log(`   - Medical Lawsuits: ${medicalLawsuits.length}`);
    console.log('');

    if (!fs.existsSync(KEY_FILE)) {
        console.error('❌ Error: service-account.json missing.');
        process.exit(1);
    }

    const auth = new google.auth.GoogleAuth({
        keyFile: KEY_FILE,
        scopes: ['https://www.googleapis.com/auth/indexing'],
    });
    const indexing = google.indexing({ version: 'v3', auth });

    let success = 0, failed = 0;

    for (let i = 0; i < urlsToIndex.length; i++) {
        const url = urlsToIndex[i];
        try {
            await indexing.urlNotifications.publish({
                requestBody: { url, type: 'URL_UPDATED' }
            });
            console.log(`[${i + 1}/${urlsToIndex.length}] ✅ ${url}`);
            success++;
        } catch (error) {
            console.error(`[${i + 1}/${urlsToIndex.length}] ❌ ${url} -> ${error.message}`);
            failed++;
            if (error.message.includes('Quota exceeded')) {
                console.log('\n🔴 QUOTA EXCEEDED for today. Stopping.');
                break;
            }
        }
        await new Promise(r => setTimeout(r, 200));
    }

    console.log(`\n🏆 MySmartCalculators Batch Complete: ${success} succeeded, ${failed} failed.`);
}

runIndexing().catch(console.error);
