'use client';

import { Download } from 'lucide-react';
import { PageHero } from '@/components/page-hero';
import { Reveal, RevealGroup, RevealItem } from '@/components/motion-primitives';

const catalogItems = ['Unex Gıda — Katalog 01', 'Unex Gıda — Katalog 02'];

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

          <RevealGroup className="catalog-grid">
            {catalogItems.map((title, index) => (
              <RevealItem key={title}>
                <article className="catalog-card">
                  <div className="catalog-icon">
                    <Download size={27} />
                  </div>
                  <span>PDF / 2025</span>
                  <h3>{title}</h3>
                  <p>Ürün portföyümüzü ve çalışma alanlarımızı keşfedin.</p>
                  <button
                    className="button button-gold"
                    onClick={() => alert('Katalog dosyası hazırlandığında buradan indirilebilecek.')}
                  >
                    İndir <Download size={16} />
                  </button>
                  <strong>0{index + 1}</strong>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </main>
  );
}