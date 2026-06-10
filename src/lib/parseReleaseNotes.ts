export interface ReleaseSection {
  version: string;
  date: string;
  body: string;
  anchor: string;
}

const titleBlock = /^[^\n]+\n=+\s*\n/;
const versionHeading = /^## (\d[\d.]+)\s*$/m;
const dateLine = /^(\d{1,2}\/\d{1,2}\/\d{4})(?:\s+\d{1,2}:\d{2}:\d{2})?$/;

export function versionToAnchor(version: string): string {
  return `v-${version.replace(/\./g, '-')}`;
}

export function parseReleaseNotes(markdown: string): ReleaseSection[] {
  const normalized = markdown.replace(/\r\n/g, '\n').replace(titleBlock, '').trim();
  const chunks = normalized.split(versionHeading).filter(Boolean);
  const sections: ReleaseSection[] = [];

  for (let index = 0; index < chunks.length; index += 2) {
    const version = chunks[index]?.trim();
    const remainder = chunks[index + 1] ?? '';
    if (!version) continue;

    const lines = remainder.split('\n');
    let date = '';
    let bodyStart = 0;

    while (bodyStart < lines.length && lines[bodyStart].trim() === '') {
      bodyStart += 1;
    }

    if (bodyStart < lines.length) {
      const dateMatch = lines[bodyStart].trim().match(dateLine);
      if (dateMatch) {
        date = dateMatch[1];
        bodyStart += 1;
      }
    }

    const body = lines.slice(bodyStart).join('\n').trim();

    sections.push({
      version,
      date,
      body,
      anchor: versionToAnchor(version),
    });
  }

  return sections;
}