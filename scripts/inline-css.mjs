// Inline built CSS <link> tags into <style> tags to remove render-blocking
// stylesheet requests from the critical path. Runs automatically after
// `npm run build` (see package.json "postbuild").
import fs from 'node:fs';
import path from 'node:path';

const DIST = path.join(process.cwd(), 'dist');

function walk(dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

let inlined = 0;
for (const file of walk(DIST)) {
  if (!file.endsWith('.html')) continue;
  let html = fs.readFileSync(file, 'utf8');
  const re = /<link rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/g;
  let changed = false;
  html = html.replace(re, (match, href) => {
    const cssPath = path.join(DIST, href.replace(/^\//, ''));
    if (!fs.existsSync(cssPath)) return match;
    const css = fs.readFileSync(cssPath, 'utf8');
    changed = true;
    return `<style>${css}</style>`;
  });
  if (changed) {
    fs.writeFileSync(file, html);
    inlined++;
    console.log('  inlined CSS into:', path.relative(DIST, file));
  }
}
console.log(`inline-css: inlined stylesheets into ${inlined} HTML files.`);
