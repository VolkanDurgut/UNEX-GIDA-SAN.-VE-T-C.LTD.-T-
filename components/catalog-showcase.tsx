'use client';

import { Download, FileText, HardDrive, Globe2 } from 'lucide-react';
import { Reveal } from './motion-primitives';
import { CatalogCardCarousel } from './catalog-card-carousel';

/**
 * Katalog sayfasının "İndirme Merkezi" bölümü: kataloğun kendi gerçek
 * 4 sayfasından oluşan, kademeli ve hafif sağa yatık, "havada asılı"
 * hissi veren bir kompozisyon (lojistik, buğday tecrübesi, ürün
 * portföyü, sertifikalar) — kartlar döngüsel olarak yer değiştiriyor —
 * ile birlikte, gerçek indirme linkine sahip zengin bir bilgi paneli.
 */
export function CatalogShowcase() {
  return (
    <div className="catalog-showcase">
      <CatalogCardCarousel />
      <Reveal direction="right" delay={0.1}>
        <div className="catalog-info">
          <p className="eyebrow">İNDİRME MERKEZİ</p>
          <h2>
            Unex Gıda <em>Kurumsal Kataloğu</em>
          </h2>
          <div className="body-copy">
            <p>
              Ürün portföyümüz, üretim tesisimiz, kalite standartlarımız ve ihracat kapasitemiz — tek bir
              dokümanda.
            </p>
          </div>
          <div className="catalog-meta">
            <span>
              <FileText size={16} /> 11 sayfa
            </span>
            <span>
              <HardDrive size={16} /> 4.1 MB
            </span>
            <span>
              <Globe2 size={16} /> TR / ENG
            </span>
          </div>
          <a href="/unex-gida-katalog.pdf" download className="button button-gold">
            Kataloğu İndir <Download size={16} />
          </a>
        </div>
      </Reveal>
    </div>
  );
}
