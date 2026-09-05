import type { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { FlourDust } from '@/components/flour-dust';
import { CatalogShowcase } from '@/components/catalog-showcase';

export const metadata: Metadata = {
  title: 'Katalog',
  description: 'Unex Gıda ürün kataloglarını indirin — ürün portföyümüz ve uzmanlığımız hakkında detaylı bilgi.',
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
