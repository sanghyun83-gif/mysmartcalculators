const fs = require("fs");
const path = require("path");

const APP_ROOT = path.join(process.cwd(), "app");
const CALC_ROOT = path.join(APP_ROOT, "(calculators)");
const STATIC_PAGES = ["about", "privacy", "terms", "contact", "accessibility", "calculators"];
const KNOWN_ORPHANS = new Set(["category"]);

function dirExists(target) {
  try {
    return fs.statSync(target).isDirectory();
  } catch {
    return false;
  }
}

function fileExists(target) {
  try {
    return fs.statSync(target).isFile();
  } catch {
    return false;
  }
}

const libCalcs = fs
  .readdirSync(path.join(process.cwd(), "lib", "calculators"))
  .filter((name) => name.endsWith(".ts"))
  .map((name) => name.replace(".ts", ""))
  .sort();

const appCalcs = fs
  .readdirSync(CALC_ROOT, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .filter((name) => !name.startsWith("["))
  .sort();

const missingCalcRoutes = libCalcs.filter((calc) => !appCalcs.includes(calc));
const unknownCalcDirs = appCalcs.filter(
  (calc) => !libCalcs.includes(calc) && !KNOWN_ORPHANS.has(calc)
);

const missingStaticPages = STATIC_PAGES.filter(
  (slug) => !fileExists(path.join(APP_ROOT, slug, "page.tsx"))
);

const calcDirsWithoutPage = appCalcs
  .filter((calc) => !KNOWN_ORPHANS.has(calc))
  .filter((calc) => !fileExists(path.join(CALC_ROOT, calc, "page.tsx")));

console.log("=== SITEMAP INTEGRITY AUDIT ===");
console.log(`lib calculators: ${libCalcs.length}`);
console.log(`app calculators: ${appCalcs.length}`);
console.log("");
console.log(`Missing calculator routes: ${missingCalcRoutes.length}`);
missingCalcRoutes.forEach((calc) => console.log(`  - ${calc}`));
console.log("");
console.log(`Unknown calculator dirs: ${unknownCalcDirs.length}`);
unknownCalcDirs.forEach((calc) => console.log(`  - ${calc}`));
console.log("");
console.log(`Missing static pages: ${missingStaticPages.length}`);
missingStaticPages.forEach((slug) => console.log(`  - /${slug}`));
console.log("");
console.log(`Calculator dirs missing page.tsx: ${calcDirsWithoutPage.length}`);
calcDirsWithoutPage.forEach((calc) => console.log(`  - /${calc}`));
console.log("");

const hasBlockingIssue =
  missingCalcRoutes.length > 0 ||
  missingStaticPages.length > 0 ||
  calcDirsWithoutPage.length > 0;

if (hasBlockingIssue) {
  console.error("Sitemap integrity audit failed.");
  process.exit(1);
}

console.log("Sitemap integrity audit passed.");
