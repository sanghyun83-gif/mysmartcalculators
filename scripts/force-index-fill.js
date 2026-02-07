
/**
 * MySmartCalculators Force Indexing - Batch Fill (The Final 93)
 * Filling the remaining daily quota (Total ~200).
 */

const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

// Adjusted path to match where the key file is located (project root)
const KEY_FILE = path.join(__dirname, '../../service-account-2.json');
const BASE_URL = 'https://mysmartcalculators.com';

// Next 93 Calculators (Alphabetical, excluding previous batches)
const batchFill = [
    '/amusement-park', '/ankle-implant', '/annuity', '/antique-car-insurance',
    '/art-insurance', '/atrium-mesh', '/atv-accident', '/atv-insurance',
    '/auto-insurance', '/aviation', '/baby-formula', '/bail-bond',
    '/bair-hugger', '/bar-insurance', '/bard-mesh', '/bard-powerport',
    '/biomet-hip', '/black-lung', '/boat-insurance', '/boating-accident',
    '/bone-graft', '/bonus-tax', '/burn-injury', '/bus-accident',
    '/business-insurance', '/camper-insurance', '/capital-gains', '/casino-injury',
    '/charitable-donation', '/chemical-burn', '/child-care-subsidy', '/closing-cost',
    '/collectible-insurance', '/commercial-insurance', '/commercial-vehicle', '/commission',
    '/concert-injury', '/condo-insurance', '/construction-accident', '/contractor-insurance',
    '/cpap', '/crane', '/crossfit-injury', '/crowd-crush',
    '/cruise-insurance', '/crypto-tax', '/cyber-insurance', '/daycare-injury',
    '/daycare-insurance', '/delivery-insurance', '/dental-insurance', '/depo-provera',
    '/depuy-hip', '/depuy-knee', '/dialysis', '/dirt-bike-insurance',
    '/disability', '/do-insurance', '/down-payment', '/dti',
    '/e-bike', '/e-scooter', '/earthquake-insurance', '/ebt',
    '/electrician-insurance', '/electrocution', '/elevator-accident', '/environmental',
    '/eo-insurance', '/epli', '/era', '/escalator-injury',
    '/espp', '/essure', '/estate-tax', '/ethicon-mesh',
    '/event-insurance', '/exotic-car-insurance', '/explosion', '/factory-injury',
    '/fafsa', '/fela', '/firefighter-foam', '/fleet-insurance',
    '/flood-insurance', '/fluoroquinolone', '/food-poisoning', '/food-stamps',
    '/food-truck-insurance', '/forklift', '/freelance-tax', '/fsa',
    '/gadolinium'
];

const urlsToIndex = batchFill.map(p => `${BASE_URL}${p}`);

async function runIndexing() {
    console.log(`🚀 Batch Fill: Pushing final ${urlsToIndex.length} URLs to reach daily limit...`);

    if (!fs.existsSync(KEY_FILE)) {
        console.error(`❌ Error: service-account-2.json missing at ${KEY_FILE}`);
        process.exit(1);
    }

    // Auth setup
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
                console.log('\n🔴 QUOTA EXCEEDED for today. Limit reached.');
                break;
            }
        }
        await new Promise(r => setTimeout(r, 200));
    }

    console.log(`\n🏆 Batch Fill Complete: ${success} succeeded, ${failed} failed.`);
    console.log(`📊 Final Daily Count: ~200`);
}

runIndexing().catch(console.error);
