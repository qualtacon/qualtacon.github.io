export interface Product {
  id: 'v3' | 'v4';
  name: string;
  version: string;
  date: string;
  description: string;
  downloadUrl: string;
  releaseNotesPath: string;
  image: string;
  accent: string;
}

export const products: Product[] = [
  {
    id: 'v3',
    name: 'Vorteks 3',
    version: '3.3.39.6',
    date: '01/08/2026',
    description:
      'A comprehensive suite of three applications for data processing, storage, and visualization — refined over years of development for performance and depth of features.',
    downloadUrl:
      'https://qualta.sharepoint.com/:f:/s/Qualta580/IgAW2WF3VTm-RbjzZfWRswk0ARlVtefv1582GIKP7hTbAfA?e=3GxmQR',
    releaseNotesPath: '/releases/v3',
    image: '/vorteks_logo.png',
    accent: '#5b8def',
  },
  {
    id: 'v4',
    name: 'Vorteks 4',
    version: '4.0.1579.0',
    date: '06/11/2026',
    description:
      'An all-in-one application built from the ground up, drawing on the strengths of previous versions with cloud support, advanced features, and a glimpse into the future of data analysis.',
    downloadUrl:
      'https://qualta.sharepoint.com/:u:/s/Qualta580/IQDqqBdg_EuORI5cXuN2nIxKAbMJHe4zBO26u1MsARumeC0',
    releaseNotesPath: '/releases/v4',
    image: '/v4_background.jpeg',
    accent: '#5b8def',
  },
];
