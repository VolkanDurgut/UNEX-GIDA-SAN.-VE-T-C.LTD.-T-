import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { ArrowRight, ShieldCheck, ClipboardCheck, Users, SprayCan, Wrench } from 'lucide-react';
import { PageHero } from '@/components/page-hero';
import { QualityProductShowcase } from '@/components/quality-product-showcase';
import { FlourDust } from '@/components/flour-dust';
import { Reveal, RevealGroup, RevealItem } from '@/components/motion-primitives';

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

      <section className="statement-certs">
        <div className="container">
          <Reveal>
            <p className="eyebrow">SERTİFİKALAR</p>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="cert-badges-image">
              <Image
                src="/certifications-badges-white.png"
                alt="ISO 9001, ISO 10002, ISO 14001, ISO 22000 ve Helal Gıda sertifikaları"
                width={1151}
                height={180}
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="cert-note">
              Bu sertifikalar; gıda güvenliğine, izlenebilirliğe ve sürekli iyileştirmeye olan bağlılığımızı
              yansıtmaktadır.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="quality-navy-block">
        <FlourDust />
        <div className="section-padding quality-hygiene">
          <div className="container quality-layout">
            <Reveal direction="left">
              <div>
                <p className="eyebrow">HİJYEN VE GIDA GÜVENLİĞİ</p>
                <h2>
                  Temiz üretim, <em>güvenli sonuç.</em>
                </h2>
                <div className="body-copy">
                  <p>
                    Gıda güvenliği ve hijyen, üretim felsefemizin merkezinde yer alır. Tesisimiz, sürecin her
                    aşamasında sıkı kontrollerle uluslararası gıda güvenliği standartlarına uygun olarak faaliyet
                    göstermektedir.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal direction="right" delay={0.1}>
              <div className="hygiene-photo">
                <Image
                  src="/hygiene-facility.jpg"
                  alt="Unex Gıda üretim hattı — otomatik öğütme ve eleme sistemleri"
                  width={1000}
                  height={641}
                />
              </div>
            </Reveal>
          </div>
          <div className="container">
            <RevealGroup className="hygiene-list">
              <RevealItem className="hygiene-item">
                <ClipboardCheck size={20} />
                <span>Kontrollü hijyen bölgeleri</span>
              </RevealItem>
              <RevealItem className="hygiene-item">
                <Users size={20} />
                <span>Personel hijyen protokolleri</span>
              </RevealItem>
              <RevealItem className="hygiene-item">
                <SprayCan size={20} />
                <span>Sürekli sanitasyon uygulamaları</span>
              </RevealItem>
              <RevealItem className="hygiene-item">
                <Wrench size={20} />
                <span>Önleyici bakım programları</span>
              </RevealItem>
            </RevealGroup>
          </div>
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
