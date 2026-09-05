'use client';

import Image from 'next/image';
import { Download, FileText, HardDrive, Globe2 } from 'lucide-react';
import { Reveal } from './motion-primitives';

/**
 * Katalog sayfasının "İndirme Merkezi" bölümü: kataloğun kendi gerçek
 * sayfalarından oluşan bir önizleme yığını (kapak + ürün portföyü +
 * sertifikalar) ile birlikte, gerçek indirme linkine sahip zengin bir
 * bilgi paneli. İcat edilmiş süs görseli değil, gerçek içerik.
 */
export function CatalogShowcase() {
  return (
    <div className="catalog-showcase">
      <Reveal direction="left">
        <div className="catalog-stack">
          <div className="stack-page stack-page-3">
            <Image src="/katalog-sayfa-sertifika.jpg" alt="" width={900} height={636} />
          </div>
          <div className="stack-page stack-page-2">
            <Image src="/katalog-sayfa-urunler.jpg" alt="" width={900} height={636} />
          </div>
          <div className="stack-page stack-page-1">
            <video src="/katalog-tanitim.mp4" poster="/katalog-kapak.jpg" autoPlay loop muted playsInline />
          </div>
        </div>
      </Reveal>
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
