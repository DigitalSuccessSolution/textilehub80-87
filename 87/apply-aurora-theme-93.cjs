const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

const replacements = [
    // Burgundy/Navy-Slate replacements
    [/#2E081B/gi, '#10211F'],
    [/#2b081b/gi, '#10211F'],
    [/#3E0F26/gi, '#0A1514'],
    [/#3e0f26/gi, '#0A1514'],
    
    // Crimson/Teal-Green replacements
    [/#9C4B6E/gi, '#2C443E'],
    [/#9c4b6e/gi, '#2C443E'],
    [/#803856/gi, '#1B2E2A'],
    
    // Cream/Beige background replacements
    [/#FAF5F0/gi, '#FAF6F2'],
    [/#faf5f0/gi, '#FAF6F2'],
    
    // Dark body text replacements
    [/#24151D/gi, '#182220'],
    [/#24151d/gi, '#182220'],

    // Glass navbar/panel backgrounds
    [/rgba\(13, 61, 72, 0.85\)/gi, 'rgba(16, 33, 31, 0.85)'],
    [/rgba\(13, 61, 72, 0.75\)/gi, 'rgba(16, 33, 31, 0.75)'],
];

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            processDirectory(fullPath);
        } else if (file.endsWith('.jsx') || file.endsWith('.js') || file.endsWith('.css') || file.endsWith('.html')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;
            
            replacements.forEach(([regex, replacement]) => {
                if (regex.test(content)) {
                    content = content.replace(regex, replacement);
                    modified = true;
                }
            });
            
            if (modified) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated colors: ${fullPath}`);
            }
        }
    });
}

console.log('Starting color theme replacement in folder 93...');
processDirectory(srcDir);
console.log('Replacement complete!');
