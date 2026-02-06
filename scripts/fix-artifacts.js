const fs = require('fs');
const path = require('path');

const rootDir = 'c:\\Users\\Sam\\Downloads\\mysmartcalculators_0202_1\\mysmartcalculators';

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            if (!file.includes('node_modules') && !file.includes('.next') && !file.includes('.git')) {
                results = results.concat(walk(file));
            }
        } else {
            if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.json')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk(rootDir);

files.forEach(file => {
    try {
        let content = fs.readFileSync(file, 'utf8');
        let changed = false;

        // Pattern 1: </span> -> </span>
        if (content.includes('</span>')) {
            content = content.replace(/\?\?\/span>/g, '</span>');
            changed = true;
        }

        // Pattern 2:   -> → (usually for "View all" or "Check out")
        // We'll be careful here. Only if it looks like a separator.
        // Actually, many   are probably mangled Arrows or Symbols.
        if (content.includes(' ')) {
            // If it's   followed by </Link>, it's likely an arrow.
            content = content.replace(/\?\?\s*<\/Link>/g, ' →</Link>');
            // If it's   in other places, maybe replace with | or -
            // But let's be conservative first.
            changed = true;
        }

        if (changed) {
            fs.writeFileSync(file, content, 'utf8');
            console.log(`Fixed artifacts in: ${file}`);
        }
    } catch (e) {
        console.error(`Error processing ${file}: ${e.message}`);
    }
});
