import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from './motion-primitives';

const quickStats: [string, string][] = [
  ['30+', 'Yıl deneyim'],
  ['1M+', 'Ton buğday'],
  ['50+', 'Ülkeye ihracat'],
];

export function AboutSummary() {
  return (
    <section className="intro-section section-padding" id="hakkimizda">
      <div className="container intro-grid">
        <Reveal>
          <div>
            <p className="eyebrow">UNEX HAKKINDA</p>
            <h2>
              Lezzetin başladığı
              <br />
              <em>yerde.</em>
            </h2>
            <div className="intro-visual">
              <img src="/artisan-bread.jpg" alt="Unex unuyla pişirilmiş el yapımı ekmek" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="intro-copy">
            <p>Ham buğday tanesinden, dünyanın her mutfağındaki lezzete uzanan bir dönüşüm hikayesi.</p>
            <p>
              30 yılı aşkın deneyimimizle yüksek kaliteli buğday unlarını, ortaklarımızın başarısını büyütmek için
              üretiyoruz.
            </p>

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
      </div>
    </section>
  );
}