
const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '(calculators)');
const TARGET_STRING = 'min-h-screen bg-slate-900';

function getDirectories(srcPath) {
    return fs.readdirSync(srcPath).filter(file => {
        return fs.statSync(path.join(srcPath, file)).isDirectory();
    });
}

function walkSync(dir, filelist = []) {
    const files = fs.readdirSync(dir);
    files.forEach(function (file) {
        const filepath = path.join(dir, file);
        if (fs.statSync(filepath).isDirectory()) {
            filelist = walkSync(filepath, filelist);
        } else {
            if (file === 'HubClient.tsx' || file === 'page.tsx') {
                filelist.push(filepath);
            }
        }
    });
    return filelist;
}

function purgeFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    if (!content.includes(TARGET_STRING)) {
        return false;
    }

    // Regex to match the specific wrapper pattern
    // Matches: <div className="min-h-screen bg-slate-900"> ... </div>
    // We need to be careful to match the corresponding closing div. 
    // Given the consistent structure, it's usually the first div in the return statement and the last closing div.

    // Strategy:
    // 1. Replace opening tag with <>
    // 2. Replace the *last* closing </div> before the return statement ends with </>
    // This is a bit heuristic but effective for this specific codebase structure.

    const originalContent = content;

    // Replace Opening Tag
    const openTagRegex = /<div\s+className=["']min-h-screen bg-slate-900["']\s*>/;
    if (openTagRegex.test(content)) {
        content = content.replace(openTagRegex, '<>');

        // Replace Closing Tag
        // We assume the closing tag is the last </div> before the end of the return statement.
        // Usually: ... </div> ); } 
        // We search for the last </div> before );

        const lastDivRegex = /<\/div\s*>\s*(?=\)\s*;?\s*})/g;

        // Find the last match
        let match;
        let lastMatchIndex = -1;
        while ((match = lastDivRegex.exec(content)) !== null) {
            lastMatchIndex = match.index;
        }

        if (lastMatchIndex !== -1) {
            content = content.substring(0, lastMatchIndex) + '</>' + content.substring(lastMatchIndex + 6);
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`[PURGED] ${path.relative(ROOT_DIR, filePath)}`);
            return true;
        } else {
            // Fallback: If strict structure not found, log for manual review
            console.warn(`[SKIP] Could not safely find closing tag for ${path.relative(ROOT_DIR, filePath)}`);
            return false;
        }
    }
    return false;
}

function main() {
    const calcs = getDirectories(ROOT_DIR);
    let purgeCount = 0;

    console.log(`Scanning ${calcs.length} calculators...`);

    calcs.forEach(calcName => {
        const calcPath = path.join(ROOT_DIR, calcName);
        const layoutPath = path.join(calcPath, 'layout.tsx');

        // Only process if layout.tsx exists (S-Class Standardized)
        if (fs.existsSync(layoutPath)) {
            const files = walkSync(calcPath);
            files.forEach(filePath => {
                if (purgeFile(filePath)) {
                    purgeCount++;
                }
            });
        }
    });

    console.log(`\nTotal files purged: ${purgeCount}`);
}

main();
