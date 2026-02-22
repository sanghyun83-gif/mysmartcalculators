const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

const KEY_FILE = path.join(__dirname, '../../service-account-2.json');
const BASE_URL = 'https://mysmartcalculators.com';

const batch7IDs = [
    "bmi", "calorie", "classic-car-insurance", "commission", "dental-insurance", "drunk-driving"
];

// BATCH 6: Managed Nodes
const batch6IDs = [
    "529", "DUI", "abilify", "accutane", "afff",
    "amusement-park", "ankle-implant", "antique-car-insurance", "art-insurance", "asbestos",
    "atrium-mesh", "atv-accident", "atv-insurance", "aviation", "bail-bond",
    "bair-hugger", "bar-insurance", "bard-mesh", "bard-powerport", "benzene",
    "biomet-hip", "black-lung", "breast-implant", "boat-insurance", "boating-accident",
    "bone-graft", "burn-injury", "camper-insurance", "casino-injury", "charitable-donation"
];

// ALL OTHER IDs extracted from categories.ts
const remainingIDs = ["car-accident", "truck-accident", "motorcycle-accident", "slip-and-fall", "workers-comp", "wrongful-death", "malpractice", "dog-bite", "nursing-home", "birth-injury", "spinal-cord", "tbi", "whiplash", "mesothelioma", "product-liability", "crane", "scaffolding", "welding", "pipeline", "refinery", "mining-injury", "factory-injury", "forklift", "explosion", "gas-explosion", "chemical-burn", "electrocution", "toxic-tort", "environmental", "lead-poisoning", "water-contamination", "pfas", "3m-earplug", "roundup", "zantac", "baby-formula", "tylenol", "suboxone", "elmiron", "ivc-filter", "philips-ventilator", "nec-formula", "firefighter-foam", "bair-hugger", "essure", "shoulder-implant", "mirena", "nexplanon", "pelvic-mesh", "textured-implant", "dialysis", "invokana", "xarelto", "pradaxa", "uloric", "ppi", "risperdal", "testosterone", "gadolinium", "transvaginal-mesh", "stryker-hip", "depuy-hip", "metal-hip", "biomet-hip", "wright-hip", "zimmer-hip", "depuy-knee", "stryker-knee", "smith-nephew-knee", "spine-implant", "spinal-fusion", "ethicon-mesh", "bard-mesh", "atrium-mesh", "opioid-addiction", "fentanyl-exposure", "oxycontin", "lupron", "fluoroquinolone", "viagra-melanoma", "nexium", "prilosec", "jet-ski", "golf-cart", "e-scooter", "e-bike", "bus-accident", "train-accident", "subway-accident", "elevator-accident", "escalator-injury", "theme-park", "waterpark-injury", "ski-accident", "snowboard-injury", "daycare-injury", "school-injury", "playground-injury", "sports-injury", "gym-injury", "crossfit-injury", "hotel-injury", "resort-injury", "concert-injury", "crowd-crush", "stadium-injury", "food-poisoning", "restaurant-injury", "grocery-store-injury", "retail-store-injury", "parking-lot-accident", "garage-accident", "valet-accident", "commercial-insurance", "business-insurance", "general-liability", "professional-liability", "eo-insurance", "do-insurance", "cyber-insurance", "epli", "workers-comp-premium", "commercial-auto", "fleet-insurance", "trucking-insurance", "rideshare-insurance", "delivery-insurance", "contractor-insurance", "roofing-insurance", "plumber-insurance", "electrician-insurance", "hvac-insurance", "landscaping-insurance", "restaurant-insurance", "bar-insurance", "food-truck-insurance", "salon-insurance", "gym-insurance", "daycare-insurance", "nonprofit-insurance", "condo-insurance", "townhouse-insurance", "mobile-home-insurance", "manufactured-home-insurance", "flood-insurance", "earthquake-insurance", "hurricane-insurance", "windstorm-insurance", "jewelry-insurance", "watch-insurance", "art-insurance", "collectible-insurance", "exotic-car-insurance", "rv-insurance", "trailer-insurance", "snowmobile-insurance", "dirt-bike-insurance", "golf-cart-insurance", "gpa", "salary", "wedding-insurance", "event-insurance", "travel-insurance", "trip-cancellation", "cruise-insurance", "student-insurance", "vision-insurance", "hsa", "fsa", "stock-option", "rsu", "rental-income", "airbnb-income", "side-hustle-tax", "1099-tax", "freelance-tax", "llc-tax", "s-corp-tax", "quarterly-tax", "estimated-tax", "inheritance", "gift-tax", "trust-tax", "medicare-premium", "medicare-part-b", "medicare-part-d", "medicaid", "snap", "wic", "section-8", "hud-housing", "liheap", "food-stamps", "ebt", "tanf", "ssi", "era", "child-care-subsidy", "body-fat", "pregnancy", "ideal-weight", "age", "percentage"];

// Deduplicate and Order
const orderedIDs = [...new Set([...batch7IDs, ...batch6IDs, ...remainingIDs])];

const paths = [];
orderedIDs.forEach(id => {
    paths.push(`/${id}`);
    paths.push(`/${id}/calculator`);
    paths.push(`/${id}/guide`);
});

const corePages = ['/', '/about', '/contact', '/privacy', '/terms'];
const combined = [...new Set([...paths, ...corePages])];
const urlsToIndex = combined.map(p => `${BASE_URL}${p}`);

async function run() {
    console.log(`🚀 S-Class Global Indexing: Starting Push of ${urlsToIndex.length} URLs...`);

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
                console.log('\n🔴 QUOTA EXCEEDED for today. Process halted.');
                break;
            }
        }
        await new Promise(r => setTimeout(r, 100)); // 100ms interval
    }
    console.log(`\n🏆 Process Complete: ${success} succeeded, ${failed} failed.`);
}

run().catch(console.error);
