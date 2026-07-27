/** Site section base path. Production is root; preview lives under /preview. */
export function getSiteBase(pathname: string): string {
  return pathname === '/preview' ||
    pathname.startsWith('/preview/') ||
    pathname === '/preview/index.html'
    ? '/preview'
    : '';
}

export function siteHref(base: string, path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  // Hash-only or path with hash: '/#products' or '#products'
  const hashIndex = path.indexOf('#');
  if (hashIndex === 0) {
    return `${base || ''}/${path}`.replace(/\/{2,}#/, '/#');
  }

  if (hashIndex > 0) {
    const before = path.slice(0, hashIndex);
    const hash = path.slice(hashIndex);
    return `${siteHref(base, before)}${hash}`;
  }

  if (!base) {
    return path.startsWith('/') ? path : `/${path}`;
  }

  if (path === '/') {
    return base;
  }

  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}
