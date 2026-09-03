import type { Metadata } from 'next';
import { Mail, MapPin, Phone } from 'lucide-react';
import { PageHero } from '@/components/page-hero';
import { Reveal } from '@/components/motion-primitives';
import { ContactForm } from '@/components/contact-form';

export const metadata: Metadata = {
  title: 'İletişim',
  description: 'Unex Gıda ile iletişime geçin — Tekirdağ merkez ofisimiz, telefon ve e-posta bilgilerimiz.',
};

export default function ContactPage() {
  return (
    <main className="page-main">
      <PageHero
        eyebrow="İLETİŞİME GEÇİN"
        title={
          <>
            Bir fikriniz mi
            <br />
            <em>var?</em>
          </>
        }
        text="İyi ortaklıklar iyi bir konuşmayla başlar."
      />

      <section className="section-padding contact-section">
        <div className="container contact-grid">
          <Reveal direction="left">
            <div className="contact-details">
              <p className="eyebrow">UNEX&apos;E ULAŞIN</p>
              <h2>
                Size nasıl
                <br />
                <em>yardımcı olabiliriz?</em>
              </h2>

              <div className="contact-item">
                <MapPin size={20} />
                <div>
                  <strong>Bize Ulaşın</strong>
                  <p>İstiklal Mahallesi Cemal Ünlü Saraç Caddesi No:20 Süleymanpaşa / Tekirdağ / Türkiye</p>
                </div>
              </div>
              <div className="contact-item">
                <Phone size={20} />
                <div>
                  <strong>Bizi Arayın</strong>
                  <p>
                    Tel +90 282 440 08 70
                    <br />
                    Faks +90 282 440 08 69
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <Mail size={20} />
                <div>
                  <strong>Bize Yazın</strong>
                  <p>info@unex.com.tr</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
