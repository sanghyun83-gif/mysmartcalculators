const fs = require('fs');
const path = require('path');

function fixEncoding(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (file !== 'node_modules' && file !== '.next' && file !== '.git') {
                fixEncoding(fullPath);
            }
        } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
            try {
                const buf = fs.readFileSync(fullPath);
                let content;
                // Detect UTF-16 LE with BOM
                if (buf[0] === 0xff && buf[1] === 0xfe) {
                    content = buf.toString('utf16le');
                }
                // Detect UTF-8 with BOM
                else if (buf[0] === 0xef && buf[1] === 0xbb && buf[2] === 0xbf) {
                    content = buf.toString('utf8');
                }
                // Check for null bytes (likely UTF-16 without BOM or corrupted)
                else if (buf.includes(0)) {
                    // Try to read as UTF-16 LE
                    content = buf.toString('utf16le');
                    if (!content.includes('import') && !content.includes('export')) {
                        // If it doesn't look like TS, maybe it's just binary or something else
                        continue;
                    }
                }
                else {
                    // Assume UTF-8 / ANSI
                    content = buf.toString('utf8');
                }

                if (content) {
                    fs.writeFileSync(fullPath, content, 'utf8');
                    console.log(`Fixed: ${fullPath}`);
                }
            } catch (e) {
                console.error(`Error fixing ${fullPath}: ${e.message}`);
            }
        }
    }
}

fixEncoding('.');
