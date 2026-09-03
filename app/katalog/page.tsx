import type { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { Reveal } from '@/components/motion-primitives';
import { CatalogGrid } from '@/components/catalog-grid';

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
      />
      <section className="section-padding catalog-section">
        <div className="container">
          <Reveal>
            <div className="section-heading">
              <div>
                <p className="eyebrow">İNDİRME MERKEZİ</p>
                <h2>Kataloglar</h2>
              </div>
            </div>
          </Reveal>

          <CatalogGrid />
        </div>
      </section>
    </main>
  );
}
