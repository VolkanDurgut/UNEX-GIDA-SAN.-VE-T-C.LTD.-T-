import type { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { FlourDust } from '@/components/flour-dust';
import { CatalogShowcase } from '@/components/catalog-showcase';

export const metadata: Metadata = {
  title: 'Katalog',
  description: 'Unex Gıda ürün kataloglarını indirin — ürün portföyümüz ve uzmanlığımız hakkında detaylı bilgi.',
  alternates: {
    canonical: '/katalog',
  },
  openGraph: {
    title: 'Katalog | Unex Gıda',
    description: 'Unex Gıda ürün kataloglarını indirin — ürün portföyümüz ve uzmanlığımız hakkında detaylı bilgi.',
    url: '/katalog',
    images: [{ url: '/katalog-og.jpg', width: 1200, height: 630, alt: 'Unex Gıda Ekibi' }],
  },
  twitter: {
    title: 'Katalog | Unex Gıda',
    description: 'Unex Gıda ürün kataloglarını indirin — ürün portföyümüz ve uzmanlığımız hakkında detaylı bilgi.',
    images: ['/katalog-og.jpg'],
  },
};

export default function CatalogPage() {
  return (
    <main className="page-main">
      <PageHero
        eyebrow="KAYNAKLAR"
        title={
          <>
            Unex&apos;i
            <br />
            <em>yakından tanıyın.</em>
          </>
        }
        text="Ürünlerimiz ve uzmanlığımız hakkında daha fazlası."
        image="/team-photo.jpg"
      />
      <section className="section-padding catalog-section">
        <FlourDust />
        <div className="container">
          <CatalogShowcase />
        </div>
      </section>
    </main>
  );
}
