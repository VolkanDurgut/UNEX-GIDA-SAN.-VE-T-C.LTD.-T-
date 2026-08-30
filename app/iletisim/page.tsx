'use client';

import { useState } from 'react';
import { ArrowRight, Check, Mail, MapPin, Phone } from 'lucide-react';
import { PageHero } from '@/components/page-hero';
import { Reveal } from '@/components/motion-primitives';

export default function ContactPage() {
  const [sent, setSent] = useState(false);

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
            <form
              className="contact-form"
              onSubmit={(event) => {
                event.preventDefault();
                setSent(true);
              }}
            >
              <p className="eyebrow">MESAJ GÖNDERİN</p>
              <h3>Mesajınız mı var?</h3>
              <p className="form-intro">
                Herhangi bir sorunuz varsa, lütfen bize bir mesaj göndermekten çekinmeyin. 24 saat içinde
                yanıtlıyoruz!
              </p>
              <div className="form-row">
                <label>
                  Ad Soyad
                  <input required placeholder="Adınız ve soyadınız" />
                </label>
                <label>
                  E-posta
                  <input required type="email" placeholder="ornek@email.com" />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Telefon
                  <input placeholder="+90" />
                </label>
                <label>
                  Konu
                  <input required placeholder="Nasıl yardımcı olabiliriz?" />
                </label>
              </div>
              <label>
                Mesaj
                <textarea required rows={5} placeholder="Mesajınızı buraya yazın..." />
              </label>
              <button className="button button-gold" type="submit">
                {sent ? (
                  <>
                    Mesajınız alındı <Check size={17} />
                  </>
                ) : (
                  <>
                    Mesajı Gönder <ArrowRight size={17} />
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </main>
  );
}