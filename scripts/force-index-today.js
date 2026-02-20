const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

const KEY_FILE = path.join(__dirname, '../../service-account-2.json');
const BASE_URL = 'https://mysmartcalculators.com';

const batch6IDs = [
    "529", "DUI", "abilify", "accutane", "afff",
    "amusement-park", "ankle-implant", "antique-car-insurance", "art-insurance", "asbestos",
    "atrium-mesh", "atv-accident", "atv-insurance", "aviation", "bail-bond",
    "bair-hugger", "bar-insurance", "bard-mesh", "bard-powerport", "benzene",
    "biomet-hip", "black-lung", "breast-implant", "boat-insurance", "boating-accident",
    "bone-graft", "burn-injury", "camper-insurance", "casino-injury", "charitable-donation"
];

const batch7SupremeIDs = [
    "classic-car-insurance", "commission", "dental-insurance", "drunk-driving"
];

const paths = [];
[...batch6IDs, ...batch7SupremeIDs].forEach(id => {
    paths.push(`/${id}`);
    paths.push(`/${id}/calculator`);
    paths.push(`/${id}/guide`);
});

// Adding specific subpaths for boat-insurance which was checked today
paths.push('/boat-insurance/coverage-guide');
paths.push('/boat-insurance/boat-calculator');

const corePages = ['/', '/about', '/contact', '/privacy', '/terms'];

// Combined unique paths
const combined = [...new Set([...paths, ...corePages])];
const urlsToIndex = combined.map(p => `${BASE_URL}${p}`);

async function run() {
    console.log(`🚀 Today's Batch 6 Indexing: Starting Push of ${urlsToIndex.length} URLs...`);

    if (!fs.existsSync(KEY_FILE)) {
        console.error('❌ Error: service-account-2.json missing at ' + KEY_FILE);
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
                console.log('\n🔴 QUOTA EXCEEDED for today.');
                break;
            }
        }
        await new Promise(r => setTimeout(r, 200));
    }
    console.log(`\n🏆 Batch Complete: ${success} succeeded, ${failed} failed.`);
}

run().catch(console.error);
