/**
 * MySmartCalculators Force Indexing - Batch 2
 * Additional 95 URLs (Priority order)
 */

const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

const KEY_FILE = path.join(__dirname, '../../service-account-2.json');
const BASE_URL = 'https://mysmartcalculators.com';

// Priority URLs - Batch 2 (subpages of high-value calculators + remaining calculators)
const batch2 = [
    // Tier 1: High-value calculator subpages
    '/truck-accident/calculator', '/truck-accident/settlements', '/truck-accident/legal-guide', '/truck-accident/regulations',
    '/car-accident/calculator', '/car-accident/settlements', '/car-accident/legal-guide', '/car-accident/regulations',
    '/motorcycle-accident/motorcycle-settlement', '/motorcycle-accident/fault-states',
    '/slip-and-fall/slip-fall-settlement', '/slip-and-fall/injury-types',
    '/workers-comp/calculator', '/workers-comp/state-rates',
    '/wrongful-death/settlement', '/wrongful-death/death-case-types',
    '/malpractice/settlement', '/malpractice/types',
    '/ozempic/calculator', '/ozempic/settlements', '/ozempic/legal-guide', '/ozempic/regulations',
    '/camp-lejeune/calculator', '/camp-lejeune/settlements',
    '/roundup/calculator', '/roundup/settlements',

    // Tier 2: Finance subpages
    '/401k-growth/calculator', '/401k-growth/legal-guide',
    '/roth-ira/roth-calculator', '/roth-ira/contribution-guide',
    '/social-security/ss-calculator', '/social-security/benefits-guide',
    '/ssdi/calculator', '/ssdi/eligibility',
    '/mortgage/calculator', '/mortgage/rate-guide',
    '/tax/calculator', '/tax/deductions',

    // Tier 3: More calculator main pages (not yet indexed)
    '/whiplash', '/bmi', '/calorie', '/tip', '/macros',
    '/structured-settlement', '/loan-payoff', '/ltd', '/personal-loan',
    '/fica', '/estimated-tax', '/quarterly-tax', '/payroll',
    '/homeowners-insurance', '/landlord-insurance', '/jewelry-insurance',
    '/classic-car-insurance', '/commercial-auto', '/builders-risk',
    '/professional-liability', '/product-liability', '/public-liability',
    '/fire-insurance', '/cargo-insurance', '/inland-marine',
    '/asbestos', '/benzene', '/silicosis',
    '/aerospace', '/aviation-injury', '/maritime',
    '/lemon-law', '/defamation', '/sexual-assault',
    '/mass-tort', '/class-action', '/mdl',
    '/premises-liability', '/product-injury', '/toxic-tort',
    '/pool-drowning', '/theme-park', '/waterpark-injury',
    '/oil-rig', '/offshore', '/welding',

    // Health calculators
    '/bmi/calculator', '/calorie/calculator', '/macros/calculator',
];

const urlsToIndex = batch2.slice(0, 95).map(p => `${BASE_URL}${p}`);

async function runIndexing() {
    console.log(`🚀 Batch 2: Starting Force-Push of ${urlsToIndex.length} Additional URLs...`);
    console.log('📊 Focus: Calculator subpages + remaining main pages\n');

    if (!fs.existsSync(KEY_FILE)) {
        console.error('❌ Error: service-account-2.json missing.');
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

    console.log(`\n🏆 Batch 2 Complete: ${success} succeeded, ${failed} failed.`);
    console.log(`📊 Total today: 105 + ${success} = ${105 + success} URLs indexed!`);
}

runIndexing().catch(console.error);
