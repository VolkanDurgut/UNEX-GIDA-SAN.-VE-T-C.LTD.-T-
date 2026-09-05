import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { PageHero } from '@/components/page-hero';
import { QualityProductShowcase } from '@/components/quality-product-showcase';
import { Reveal } from '@/components/motion-primitives';

export const metadata: Metadata = {
  title: 'Kalitemiz',
  description:
    'Kalite kontrolden ürün güvenilirliğine — Unex Gıda\'nın buğday unu üretim standartları ve ortaklarımıza sunduğumuz kesintisiz destek.',
};

export default function QualityPage() {
  return (
    <main className="page-main">
      <PageHero
        eyebrow="KALİTEMİZ"
        title={
          <>
            Güven,
            <br />
            <em>kalitemizle başlar.</em>
          </>
        }
        text="Bugünün ihtiyaçlarını anlayan, yarının pazarlarına hazırlanan bir üretim anlayışı."
        image="/quality-lab.jpg"
        overlayImage="/export-network-map.jpg"
      />

      <section className="section-padding quality-copy">
        <div className="container quality-layout">
          <Reveal direction="left">
            <div>
              <p className="eyebrow">ORTAKLIK VE DESTEK</p>
              <h2>
                İşinizi <em>ileri taşırız.</em>
              </h2>
            </div>
          </Reveal>
          <Reveal direction="right" delay={0.1}>
            <div className="body-copy">
              <p>
                Başarımızın anahtarı ve her zaman korumaya çalıştığımız değer, ortaklarımızla oluşturduğumuz
                güvendir. Hem tedarikçi hem de alıcı tarafta yer alan bir firma olarak emtia piyasalarında
                zamanlamanın ve iş pozisyonları almanın önemini çok iyi biliyoruz.
              </p>
              <p>
                Sadece yüksek kaliteli buğday unlarımızı değil, ortaklarımıza kendi alanlarında rekabetçi
                olmaları için gerekli araçları sağlamanın da sorumluluğunu her zaman hissediyoruz.
              </p>
            </div>
          </Reveal>
        </div>
        <div className="container">
          <Reveal delay={0.1}>
            <QualityProductShowcase />
          </Reveal>
        </div>
      </section>

      <section className="statement-band">
        <Reveal className="container statement-inner">
          <ShieldCheck size={25} />
          <h2>
            Güvenilir tedarik.
            <br />
            <em>Kesintisiz destek.</em>
          </h2>
          <Link href="/iletisim" className="button button-gold">
            Birlikte Çalışalım <ArrowRight size={17} />
          </Link>
        </Reveal>
      </section>
    </main>
  );
}