import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Unex Gıda',
    short_name: 'Unex Gıda',
    description: 'Buğday unu üretimi ve ihracatı — Unex Gıda San. ve Tic. Ltd. Şti.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#07121c',
    icons: [
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}