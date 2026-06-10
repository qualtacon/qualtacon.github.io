import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const sourceDir = path.join(root, 'src/content/releases');
const outDir = path.join(root, 'src/content/releases');

const versionHeading = /^## (\d[\d.]+)\s*$/;

function parseDate(line) {
  const trimmed = line?.trim() ?? '';
  return /^\d{1,2}\/\d{1,2}\/\d{4}$/.test(trimmed) ? trimmed : '';
}

const sectionLabels =
  /^(Enhancements|Fixes|Improvements|Processing Environment|Visualization Environment|All Applications|All Apps)$/;

function extractWhatsNew(body) {
  const match = body.match(
    /## New Features & Major Improvements\s*\n+([\s\S]*?)(?=\n## |\n### |$)/
  );

  if (match) {
    const items = match[1]
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.startsWith('-'))
      .map((line) => line.replace(/^-\s*/, '').trim())
      .filter(Boolean);

    if (items.length) return items.slice(0, 4);
  }

  const bullets = [];
  for (const line of body.split('\n')) {
    const bullet = line.match(/^(\s*)[*-]\s+(.+)$/);
    if (!bullet) continue;
    bullets.push({ indent: bullet[1].length, text: bullet[2].trim() });
  }

  const filtered = bullets.filter(
    (item) =>
      item.text &&
      !sectionLabels.test(item.text) &&
      !/Environment$/.test(item.text)
  );

  const deep = filtered.filter((item) => item.indent >= 8);
  const medium = filtered.filter((item) => item.indent >= 4);
  const source = deep.length ? deep : medium.length ? medium : filtered;

  return source.map((item) => item.text).slice(0, 4);
}

function splitReleaseFile(filename, product) {
  const raw = fs.readFileSync(path.join(sourceDir, filename), 'utf8');
  const lines = raw.split(/\r?\n/);
  const releases = [];
  let current = null;

  for (const line of lines) {
    const versionMatch = line.match(versionHeading);
    if (versionMatch) {
      if (current) releases.push(current);
      current = {
        version: versionMatch[1],
        date: '',
        body: [],
      };
      continue;
    }

    if (!current) continue;

    if (!current.date) {
      const date = parseDate(line);
      if (date) {
        current.date = date;
        continue;
      }
    }

    current.body.push(line);
  }

  if (current) releases.push(current);

  const productDir = path.join(outDir, product);
  fs.mkdirSync(productDir, { recursive: true });

  for (const release of releases) {
    const whatsNew = extractWhatsNew(release.body.join('\n'));
    const body = release.body.join('\n').trim();
    const slug = release.version.replace(/\./g, '-');
    const frontmatter = [
      '---',
      `product: ${product}`,
      `version: "${release.version}"`,
      `date: "${release.date}"`,
      'whatsNew:',
      ...whatsNew.map((item) => `  - ${JSON.stringify(item)}`),
      '---',
      '',
      body,
    ].join('\n');

    fs.writeFileSync(path.join(productDir, `${slug}.md`), frontmatter, 'utf8');
  }

  return releases.length;
}

const v3Count = splitReleaseFile('vorteks-3.md', 'v3');
const v4Count = splitReleaseFile('vorteks-4.md', 'v4');
console.log(`Split ${v3Count} v3 releases and ${v4Count} v4 releases.`);