import fs from 'fs';

const filePath = 'D:/downloads/BRT/portfolio-web/src/main.jsx';
let content = fs.readFileSync(filePath, 'utf8');

// Replace any remaining double-encoded UTF-8 sequences
content = content.replace(/\u00e2\u20ac\u201c/g, '—');
content = content.replace(/\u00e2\u20ac\u02dc/g, 'ℹ');
content = content.replace(/\u00e2\u20ac\u2122/g, "'");

fs.writeFileSync(filePath, content, 'utf8');
console.log('Cleaned remaining unicode artifacts.');
