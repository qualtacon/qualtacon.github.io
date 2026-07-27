import type { Product } from './products';

/** Preview-section products. Vorteks 4 fields are updated by preview_deploy. */
export const previewProducts: Product[] = [
  {
    id: 'v4',
    name: 'Vorteks 4',
    version: '4.0.1628.12',
    date: '07/03/2026',
    description:
      'An all-in-one application built from the ground up, drawing on the strengths of previous versions with cloud support, advanced features, and a glimpse into the future of data analysis.',
    downloadUrl: '',
    sdkDownloadUrl: '',
    releaseNotesPath: '/preview/releases/v4',
    image: '/vorteks4_logo.png',
    accent: '#5b8def',
  },
  {
    id: 'v3',
    name: 'Vorteks 3',
    version: '3.3.39.6',
    date: '01/08/2026',
    description:
      'A comprehensive suite of three applications for data processing, storage, and visualization — refined over years of development for performance and depth of features.',
    downloadUrl:
      'https://qualta.sharepoint.com/:f:/s/Qualta580/IgAW2WF3VTm-RbjzZfWRswk0ARlVtefv1582GIKP7hTbAfA?e=3GxmQR',
    releaseNotesPath: '/preview/releases/v3',
    image: '/vorteks_logo.png',
    accent: '#5b8def',
  },
];
