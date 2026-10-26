export interface Product {
  id: 'v3' | 'v4';
  name: string;
  version: string;
  date: string;
  description: string;
  downloadUrl: string;
  /** SharePoint link for Processing SDK authoring kit (v4 only; set by deploy). */
  sdkDownloadUrl?: string;
  releaseNotesPath: string;
  image: string;
  accent: string;
}

export const products: Product[] = [
  {
    id: 'v4',
    name: 'Vorteks 4',
    version: '4.0.1862.5',
    date: '10/02/2026',
    description:
      'An all-in-one application built from the ground up, drawing on the strengths of previous versions, with advanced features and a glimpse into the future of data analysis.',
    downloadUrl:
      'https://qualta.sharepoint.com/:u:/s/Qualta580/IQBWnYhOEyQyRoMPYUony_dxAWE0Jy3Gg9ZcPjhzVLFyMW0',
    sdkDownloadUrl:
      'https://qualta.sharepoint.com/:u:/s/Qualta580/IQCtRdtuhRnBQosQvemWpojGAZLPOwyzLfTzHRJT5PGsFno',
    releaseNotesPath: '/releases/v4',
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
    releaseNotesPath: '/releases/v3',
    image: '/vorteks_logo.png',
    accent: '#5b8def',
  },
];
