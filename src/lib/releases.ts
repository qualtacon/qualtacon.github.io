import { getCollection, type CollectionEntry } from 'astro:content';

export type ReleaseEntry = CollectionEntry<'releases'>;

export function versionToAnchor(version: string): string {
  return `v-${version.replace(/\./g, '-')}`;
}

function parseReleaseDate(date: string): number {
  const [month, day, year] = date.split('/').map(Number);
  return new Date(year, month - 1, day).getTime();
}

export function sortReleasesNewestFirst(entries: ReleaseEntry[]): ReleaseEntry[] {
  return [...entries].sort(
    (a, b) => parseReleaseDate(b.data.date) - parseReleaseDate(a.data.date)
  );
}

export async function getReleasesForProduct(product: 'v3' | 'v4'): Promise<ReleaseEntry[]> {
  const entries = await getCollection('releases', ({ data }) => data.product === product);
  return sortReleasesNewestFirst(entries);
}

export async function getLatestRelease(product: 'v3' | 'v4'): Promise<ReleaseEntry | undefined> {
  const releases = await getReleasesForProduct(product);
  return releases[0];
}