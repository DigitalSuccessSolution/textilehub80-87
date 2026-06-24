const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src/pages');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const target = 'bg-gradient-to-br from-primary via-primary/95 to-accent';
  const replacement = 'bg-gradient-to-br from-[#2C1E16] via-[#3E2723] to-[#2C1E16]';
  if (content.includes(target)) {
    content = content.replace(new RegExp(target, 'g'), replacement);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function traverseDirectory(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      traverseDirectory(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      replaceInFile(fullPath);
    }
  });
}

traverseDirectory(directoryPath);
