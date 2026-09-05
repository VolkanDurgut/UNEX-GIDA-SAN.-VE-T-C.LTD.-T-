import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Handshake } from 'lucide-react';
import { PageHero } from '@/components/page-hero';
import { Stats } from '@/components/stats';
import { FlourDust } from '@/components/flour-dust';
import { Reveal } from '@/components/motion-primitives';

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description:
    '30 yılı aşkın tecrübe, 1 milyon tonun üzerinde işlenen buğday unu ve 50\'den fazla ülkeye ihracat — Unex Gıda\'nın hikayesi.',
};

export default function AboutPage() {
  return (
    <main className="page-main">
      <PageHero
        eyebrow="BİZ KİMİZ"
        title={
          <>
            Kökümüz güçlü,
            <br />
            <em>bakışımız ileri.</em>
          </>
        }
        text="Kalite, dinamizm ve profesyonellik ile dünyanın dört bir yanına ulaşan bir ortaklık."
        image="/hakkimizda-hero.jpg"
        theme="light"
      />

      <section className="about-navy-block">
        <FlourDust />
        <div className="about-navy-content">
          <div className="container">
            <Reveal>
              <div className="about-heading-centered">
                <p className="eyebrow">UNEX HAKKINDA</p>
                <h2>
                  Birlikte büyüyen
                  <br />
                  <em>30+ yıllık hikaye.</em>
                </h2>
              </div>
            </Reveal>
          </div>
          <div className="container about-grid">
            <Reveal direction="left">
              <div className="body-copy">
                <p>
                  Uluslararası buğday unu ve emtia piyasasında 30 yılı aşkın tecrübemizle 1.000.000 tonun üzerinde
                  buğday unu elleçledik. Kalite, dinamizm ve profesyonellik gibi temel değerlerimiz,
                  Türkiye&apos;nin en büyük buğday unu ihracatçılarından biri olmamızı sağlamıştır.
                </p>
                <p>
                  Bugüne kadar 50&apos;den fazla ülkeye yaptığımız ihracat sayesinde kaliteli buğday unlarımızı
                  dünyanın her köşesinden müşterilerimize ulaştırmanın gururunu yaşıyoruz. Müşterilerimize
                  uzmanlığımızı ve deneyimimizi sunarak onlarla stratejik bir ortak olmaya çalışıyoruz.
                </p>
              </div>
            </Reveal>
            <Reveal direction="right" delay={0.1}>
              <div className="about-video-frame">
                <video src="/hakkimizda-tanitim.mp4" autoPlay loop muted playsInline />
                <div className="about-video-fade" aria-hidden="true" />
              </div>
            </Reveal>
          </div>
        </div>

        <Stats />
      </section>

      <section className="statement-band">
        <Reveal className="container statement-inner">
          <Handshake size={25} />
          <h2>
            Ortaklığınızı
            <br />
            <em>güçlendirelim.</em>
          </h2>
          <Link href="/iletisim" className="button button-gold">
            Bize Ulaşın <ArrowRight size={17} />
          </Link>
        </Reveal>
      </section>
    </main>
  );
}