const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

const KEY_FILE = path.join(__dirname, '../../service-account-2.json');
const BASE_URL = 'https://mysmartcalculators.com';

const todayIDs = [
    "workers-comp", "mesothelioma", "roundup", "zantac", "nursing-home",
    "DUI", "camp-lejeune", "cpap", "philips-ventilator", "baby-formula",
    "hernia-mesh", "talcum-powder", "3m-earplug", "glp1-vision", "capital-gains",
    "crypto-tax", "bonus-tax", "airbnb-income", "rsu", "espp", "epli",
    "overtime", "birth-injury", "spinal-cord", "tbi", "social-media",
    "hair-relaxer", "depo-provera", "tepezza", "general-liability",
    "business-insurance", "offshore", "construction-accident", "fela",
    "train-accident", "sr22", "oil-rig", "gas-explosion", "forklift"
];

const paths = [];
todayIDs.forEach(id => {
    paths.push(`/${id}`);
    paths.push(`/${id}/calculator`);
    paths.push(`/${id}/guide`);
});

const tier1 = [
    '/truck-accident', '/car-accident', '/motorcycle-accident', '/slip-and-fall',
    '/workers-comp', '/wrongful-death', '/malpractice', '/dog-bite',
    '/nursing-home', '/birth-injury', '/spinal-cord', '/tbi', '/mesothelioma',
    '/ozempic', '/camp-lejeune', '/roundup', '/hernia-mesh', '/hip-implant',
];

const tier2 = [
    '/mortgage', '/401k-growth', '/roth-ira', '/social-security', '/ssdi',
    '/tax', '/capital-gains', '/estate-tax', '/student-loan', '/fafsa',
    '/dti', '/pmi', '/down-payment', '/closing-cost', '/heloc', '/refinance',
];

const tier3 = [
    '/auto-insurance', '/health-insurance', '/life-insurance', '/pet-insurance',
    '/renters-insurance', '/umbrella-insurance', '/sr22', '/flood-insurance',
];

const corePages = ['/', '/about', '/contact', '/privacy', '/terms'];

// Combined unique paths
const combined = [...new Set([...paths, ...corePages, ...tier1, ...tier2, ...tier3])];
const urlsToIndex = combined.slice(0, 200).map(p => `${BASE_URL}${p}`);

async function run() {
    console.log(`🚀 Final Indexing Batch: Starting Push of ${urlsToIndex.length} URLs...`);

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
            if (error.message.includes('Quota exceeded')) break;
        }
        await new Promise(r => setTimeout(r, 200));
    }
    console.log(`\n🏆 Batch Complete: ${success} succeeded, ${failed} failed.`);
}

run().catch(console.error);
