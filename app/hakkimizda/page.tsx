import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/page-hero';
import { Stats } from '@/components/stats';
import { Reveal } from '@/components/motion-primitives';

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
      />

      <section className="section-padding about-story">
        <div className="container about-grid">
          <Reveal direction="left">
            <div>
              <p className="eyebrow">UNEX HAKKINDA</p>
              <h2>
                Birlikte büyüyen
                <br />
                <em>30+ yıllık hikaye.</em>
              </h2>
            </div>
          </Reveal>
          <Reveal direction="right" delay={0.1}>
            <div className="body-copy">
              <p>
                Uluslararası buğday unu ve emtia piyasasında 30 yılı aşkın tecrübemizle 1.000.000 tonun üzerinde
                buğday unu elleçledik. Kalite, dinamizm ve profesyonellik gibi temel değerlerimiz, Türkiye&apos;nin
                en büyük buğday unu ihracatçılarından biri olmamızı sağlamıştır.
              </p>
              <p>
                Bugüne kadar 50&apos;den fazla ülkeye yaptığımız ihracat sayesinde kaliteli buğday unlarımızı
                dünyanın her köşesinden müşterilerimize ulaştırmanın gururunu yaşıyoruz. Müşterilerimize
                uzmanlığımızı ve deneyimimizi sunarak onlarla stratejik bir ortak olmaya çalışıyoruz.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <Stats />

      <section className="cta-block">
        <Reveal className="container">
          <p className="eyebrow light">BİRLİKTE BÜYÜYELİM</p>
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