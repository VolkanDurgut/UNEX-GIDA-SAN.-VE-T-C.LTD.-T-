import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Reveal, RevealGroup, RevealItem } from './motion-primitives';

const quickStats: [string, string][] = [
  ['30+', 'Yıl deneyim'],
  ['1M+', 'Ton buğday'],
  ['50+', 'Ülkeye ihracat'],
];

const tastes = [
  { src: '/taste-cookies.jpg', label: 'Bisküvi & Kurabiye' },
  { src: '/taste-bread.jpg', label: 'El Yapımı Ekmek' },
  { src: '/taste-pasta.jpg', label: 'Makarna & Erişte' },
];

export function AboutSummary() {
  return (
    <section className="intro-section section-padding" id="hakkimizda">
      <div className="container">
        <Reveal>
          <div className="intro-heading">
            <h2>
              Lezzetin başladığı <em>yerde.</em>
            </h2>
          </div>
        </Reveal>

        <div className="intro-split">
          <Reveal delay={0.1}>
            <div className="intro-copy">
              <p>Ham buğday tanesinden, dünyanın her mutfağındaki lezzete uzanan bir dönüşüm hikayesi.</p>
              <p>
                30 yılı aşkın deneyimimizle yüksek kaliteli buğday unlarını, ortaklarımızın başarısını büyütmek
                için üretiyoruz.
              </p>

              <RevealGroup className="taste-row">
                {tastes.map((taste) => (
                  <RevealItem key={taste.label} className="taste-item">
                    <img src={taste.src} alt={taste.label} />
                  </RevealItem>
                ))}
              </RevealGroup>

              <div className="home-about-stats">
                {quickStats.map(([number, label]) => (
                  <div key={label}>
                    <strong>{number}</strong>
                    <span>{label}</span>
                  </div>
                ))}
              </div>

              <Link href="/hakkimizda" className="text-link">
                Devamını Gör <ArrowUpRight size={17} />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="intro-visual intro-visual-tall">
              <img src="/artisan-bread.jpg" alt="Unex unuyla pişirilmiş el yapımı ekmek" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}