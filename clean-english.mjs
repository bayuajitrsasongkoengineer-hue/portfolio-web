import fs from 'fs';

const filePath = 'D:/downloads/BRT/portfolio-web/src/main.jsx';
let text = fs.readFileSync(filePath, 'utf8');

// 1. Replace Indonesian modal strings with clean English
text = text.replace('<ArrowLeft size={16} /> Kembali', '<ArrowLeft size={16} /> Close');
text = text.replace('title="Perkecil (Zoom Out)"', 'title="Zoom Out"');
text = text.replace('title="Klik untuk reset zoom 100%"', 'title="Reset Zoom (100%)"');
text = text.replace('title="Perbesar (Zoom In)"', 'title="Zoom In"');
text = text.replace('aria-label="Tutup modal"', 'aria-label="Close document view"');
text = text.replace('<Download size={14} /> Download File', '<Download size={14} /> Download Document');
text = text.replace('Buka Tab Baru <ExternalLink size={14} />', 'Open in New Tab <ExternalLink size={14} />');

// 2. Replace card tooltips in Indonesian
text = text.replace('title="Klik kartu ini untuk melihat bukti sertifikat magang Process Engineering"', 'title="Click to view Process Engineering certificate"');
text = text.replace('title="Klik kartu ini untuk melihat bukti sertifikat magang Mechanical Engineering"', 'title="Click to view Mechanical Engineering certificate"');

// 3. Replace footer broken arrow
text = text.replace('BACK TO TOP â†‘', 'BACK TO TOP ↑');
text = text.replace('BACK TO TOP â†‘', 'BACK TO TOP ↑');

// 4. Clean any broken quotes in projects
text = text.replace('5-DOF arm with a cycloidal gearbox "” Telkom University', '5-DOF arm with a cycloidal gearbox — Telkom University');
text = text.replace('250"“1,000 g', '250–1,000 g');
text = text.replace('CAPSTONE DESIGN - 2025"“2026', 'CAPSTONE DESIGN · 2025–2026');
text = text.replace('Capstone Design - 2025"“2026', 'Capstone Design · 2025–2026');

fs.writeFileSync(filePath, text, 'utf8');
console.log('Successfully updated main.jsx with clean English strings and fixed typography.');
