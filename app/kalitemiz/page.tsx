import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import { suppliers } from '@/lib/data';
import { PageHero } from '@/components/page-hero';
import { Reveal, RevealGroup, RevealItem } from '@/components/motion-primitives';

export const metadata: Metadata = {
  title: 'Kalitemiz',
  description:
    'Güvenilir tedarik zinciri, dünyanın önde gelen tarım emtiası ortaklarıyla çalışma ve kesintisiz destek — Unex Gıda kalite anlayışı.',
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
      />

      <section className="section-padding quality-copy">
        <div className="container quality-layout">
          <Reveal direction="left">
            <div>
              <p className="eyebrow">ORTAKLIK VE DESTEK</p>
              <h2>
                İşinizi
                <br />
                <em>ileri taşırız.</em>
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
      </section>

      <section className="supplier-band">
        <div className="container">
          <Reveal>
            <p className="eyebrow">GÜVENİLİR İŞ ORTAKLARI</p>
          </Reveal>
          <RevealGroup className="supplier-list">
            {suppliers.map((supplier) => (
              <RevealItem key={supplier}>
                <span>{supplier}</span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="quality-bottom">
        <Reveal className="container quality-bottom-inner">
          <ShieldCheck size={32} />
          <div>
            <h3>Güvenilir tedarik. Kesintisiz destek.</h3>
            <p>Dünya tahıl piyasasını yakından takip ediyor, ortaklarımızın risklerini azaltan iş planları sunuyoruz.</p>
          </div>
          <Link href="/iletisim" className="text-link">
            Birlikte çalışalım <ArrowUpRight size={17} />
          </Link>
        </Reveal>
      </section>
    </main>
  );
}