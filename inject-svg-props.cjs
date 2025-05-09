const fs = require('fs');
const path = require('path');

// Path to your SVG React component
const filePath = path.join(__dirname, 'the_skeleton', 'src', 'components', 'HumanSkeletonFrontEn.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// Regex to match <path ... id="SOMETHING" ...>
const pathRegex = /<path([^>]*?)id="([^"]+)"([^>]*)\/?>/g;

const newContent = content.replace(pathRegex, (match, beforeId, id, afterId) => {
  // Avoid double-injecting if already present
  if (match.includes('getPartStyle')) return match;
  return `<path${beforeId}id="${id}"${afterId}
    style={getPartStyle ? getPartStyle("${id}") : undefined}
    onClick={onPartClick ? (e) => onPartClick(e, "${id}") : undefined}
    onMouseEnter={onPartHover ? () => onPartHover("${id}") : undefined}
    onMouseLeave={onPartLeave ? () => onPartLeave("${id}") : undefined}
  />`;
});

fs.writeFileSync(filePath, newContent, 'utf8');
console.log('SVG interactivity props injected!');