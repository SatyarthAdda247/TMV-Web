import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distClientPath = path.join(__dirname, '..', 'dist', 'client');
const assetsPath = path.join(distClientPath, 'assets');

// Find the main JS and CSS files
const files = fs.readdirSync(assetsPath);
const mainJS = files.find(f => f.startsWith('index-') && f.endsWith('.js'));
const mainCSS = files.find(f => f.startsWith('styles-') && f.endsWith('.css'));

if (!mainJS) {
  console.error('Could not find main JS file');
  process.exit(1);
}

const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="TMV Studios - Everything you can imagine is real. Creative production company specializing in animation, live action, and VFX." />
    <meta property="og:title" content="TMV Studios" />
    <meta property="og:description" content="Everything you can imagine is real" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="TMV Studios" />
    <meta name="twitter:description" content="Everything you can imagine is real" />
    <title>TMV Studios - Everything you can imagine is real</title>
    ${mainCSS ? `<link rel="stylesheet" href="/assets/${mainCSS}" />` : ''}
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/assets/${mainJS}"></script>
  </body>
</html>
`;

fs.writeFileSync(path.join(distClientPath, 'index.html'), html);
console.log('✓ Generated index.html');
