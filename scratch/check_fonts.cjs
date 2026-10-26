const fs = require('fs');

const files = [
  ['P1 Manipulator', 'D:/downloads/BRT/portfolio-web/src/ManipulatorCaseStudy.jsx'],
  ['P2 Solar', 'D:/downloads/BRT/portfolio-web/src/SolarCoolingCaseStudy.jsx'],
  ['P3 KRAI', 'D:/downloads/BRT/portfolio-web/src/KRAICaseStudy.jsx'],
  ['P4 Line Follower', 'D:/downloads/BRT/portfolio-web/src/LineFollowerCaseStudy.jsx'],
  ['P5 Sumo', 'D:/downloads/BRT/portfolio-web/src/SumoRobotCaseStudy.jsx'],
];

files.forEach(([label, path]) => {
  const code = fs.readFileSync(path, 'utf8');
  
  const fontSizes = [];
  const lineHeights = [];
  const fontFamilies = [];
  
  let m;
  const fsRe = /fontSize:\s*'([^']+)'/g;
  while ((m = fsRe.exec(code)) !== null) fontSizes.push(m[1]);
  
  const lhRe = /lineHeight:\s*([0-9.]+)/g;
  while ((m = lhRe.exec(code)) !== null) lineHeights.push(m[1]);
  
  const ffRe = /fontFamily:\s*'([^']+)'/g;
  while ((m = ffRe.exec(code)) !== null) fontFamilies.push(m[1]);
  
  const uniqueFS = [...new Set(fontSizes)].sort();
  const uniqueLH = [...new Set(lineHeights)].sort();
  const uniqueFF = [...new Set(fontFamilies)].sort();
  
  console.log('=== ' + label + ' ===');
  console.log('  fontSizes:', uniqueFS.join(', '));
  console.log('  lineHeights:', uniqueLH.join(', '));
  console.log('  fontFamilies:', uniqueFF.join(', '));
  console.log();
});
