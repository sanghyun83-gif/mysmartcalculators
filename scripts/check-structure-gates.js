const fs = require("fs");
const path = require("path");

const requiredFiles = [
  "app/sitemap.ts",
  "app/robots.ts",
  "app/layout.tsx",
];

const missing = requiredFiles.filter((file) => {
  const fullPath = path.join(process.cwd(), file);
  return !fs.existsSync(fullPath);
});

if (missing.length > 0) {
  console.error("Structure gate failed. Missing files:");
  missing.forEach((file) => console.error(`- ${file}`));
  process.exit(1);
}

console.log("Structure gate passed.");
