const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

const replacements = [
    [/#2B1A35/gi, '#1A1815'],
    [/#D49B85/gi, '#E2A838'],
    [/#F5EEF8/gi, '#FAF8F5'],
    [/#1e0f25/gi, '#FAF8F5'],
    [/#3b2747/gi, '#2D2824'],
    [/text-purple-200/g, 'text-stone-400'],
    [/text-purple-100/g, 'text-stone-300'],
    [/text-purple-50/g, 'text-stone-100'],
    [/bg-purple-950/g, 'bg-[#0F0E0D]'],
    [/border-purple-300\/30/g, 'border-[#E2A838]/20'],
    [/border-[#D49B85]/g, 'border-[#E2A838]'],
    [/border-[#D49B85]\/30/g, 'border-[#E2A838]/30'],
    [/border-purple-300/g, 'border-[#E2A838]/40'],
    [/bg-[#D49B85]\/10/g, 'bg-[#FDF6E2]'],
    [/focus:ring-[#D49B85]/g, 'focus:ring-[#E2A838]'],
    [/Retail Textile/g, 'Aurora Textile House'],
    [/RETAIL TEXTILE/g, 'AURORA TEXTILE HOUSE'],
    [/Boutique Retail Mall/g, 'Premium Fabrics & Curations'],
    [/Boutique Assistant/g, 'Aurora Assistant'],
    [/retailtextile\.com/g, 'auroratextile.com'],
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
                console.log(`Updated: ${fullPath}`);
            }
        }
    });
}

console.log('Starting color and brand text replacement in folder 92...');
processDirectory(srcDir);
console.log('Replacement complete!');
