import type { Product } from './products';

/** Preview-section products. Vorteks 4 fields are updated by preview_deploy. */
export const previewProducts: Product[] = [
  {
    id: 'v4',
    name: 'Vorteks 4',
    version: '4.0.1862.4',
    date: '09/29/2026',
    description:
      'An all-in-one application built from the ground up, drawing on the strengths of previous versions with cloud support, advanced features, and a glimpse into the future of data analysis.',
    downloadUrl:
      'https://qualta.sharepoint.com/:u:/s/Qualta580/IQC03CvPvMSqQKRFI0E2U-rjARqE_ovQCfiyqE38kdx226g',
    sdkDownloadUrl:
      'https://qualta.sharepoint.com/:u:/s/Qualta580/IQCxh1f08lRkQqadQ1Rij317AVH5w8_XMrCJx0f9iB23lr0',
    releaseNotesPath: '/preview/releases/v4',
    image: '/icon-transparent.png',
    accent: '#5b8def',
  },
  {
    id: 'v3',
    name: 'Vorteks 3',
    version: '3.3.49.4',
    date: '10/22/2026',
    description:
      'A comprehensive suite of three applications for data processing, storage, and visualization — refined over years of development for performance and depth of features.',
    downloadUrl:
      'https://qualta.sharepoint.com/:f:/s/Qualta580/IgAkIuosSu1IQrEydNa19mTEAfolsqnR6RanolkHNHXBbJk?e=tZItDu',
    releaseNotesPath: '/preview/releases/v3',
    image: '/vorteks_logo.png',
    accent: '#5b8def',
  },
];
