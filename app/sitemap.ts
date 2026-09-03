import type { MetadataRoute } from 'next';
import { products } from '@/lib/data';

const siteUrl = 'https://www.unex.com.tr';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/hakkimizda', '/kalitemiz', '/urunlerimiz', '/katalog', '/iletisim'].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.7,
  }));

  const productRoutes = products.map((product) => ({
    url: `${siteUrl}/urunlerimiz/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes];
}
